module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            reports:
            {
                "lcovonly": {
                    "directory": "coverage",
                    "filename": "lcov.info",
                    "subdirectory": "lcov"
                }
            }
        },
        reporters: ["dots","karma-typescript"],
        browsers: ["Chrome"],
        singleRun: true
    });
};