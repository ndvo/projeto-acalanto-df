const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
	// works also with addLiquidShortcode or addNunjucksAsyncShortcode
	eleventyConfig.addNunjucksAsyncShortcode("myResponsiveImage", function (
		src,
		options
	) {
		// returns Promise
		return Image(src, options);
	});

	// Folders to copy to build dir (See. 1.1)
	// eleventyConfig.addPassthroughCopy("src/static");

	if (process.env.ELEVENTY_ENV === "production") {
		// Minify HTML (including inlined CSS and JS)
		eleventyConfig.addTransform("compressHTML", function (content, outputPath) {
			if (outputPath.endsWith(".html")) {
				let minified = htmlmin.minify(content, {
					useShortDoctype: true,
					removeComments: true,
					collapseWhitespace: true,
					minifyCSS: true,
					minifyJS: true,
				});
				return minified;
			}
			return content;
		});
	}

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: "utc",
		}).toFormat("yyyy-LL-dd");
	});

	// Add YAML support for data files
	eleventyConfig.addDataExtension("yaml", (contents) =>
		yaml.safeLoad(contents)
	);

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	// Add a "products" collection
	eleventyConfig.addCollection("products", (collection) => {
		return collection.getFilteredByGlob("products/**/*.md");
		// return collection
		// 	.getFilteredByGlob("_products/**/*.md")
		// 	.sort(function (a, b) {
		// 		return b.price - a.price;
		// 	});
	});

	return {
		dir: {
			input: "src/",
			output: "dist",
			// includes: "_includes",
			layouts: "_layouts",
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",

		// 1.1 Enable eleventy to pass dirs specified above
		passthroughFileCopy: true,
	};
};
