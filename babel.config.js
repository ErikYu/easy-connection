module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            "@babel/preset-typescript",
            "@babel/preset-env",
        ],
        plugins: [
            "transform-class-properties",
        ]
    };
};
