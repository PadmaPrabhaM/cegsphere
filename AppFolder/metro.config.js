// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: "./global.css" });

// // Update the resolver for SVG support
// config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
// config.resolver.sourceExts.push("svg");

// // Add the transformer for SVG
// config.transformer = {
//   ...config.transformer,
//   babelTransformerPath: require.resolve("react-native-svg-transformer"),
// };



// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// module.exports = (config, () => {
//   const config = getDefaultConfig(__dirname);

//   const { transformer, resolver } = config;

//   config.transformer = {
//     ...transformer,
//     babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
//   };
//   config.resolver = {
//     ...resolver,
//     assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
//     sourceExts: [...resolver.sourceExts, "svg"]
//   };

//   return config;
// })();

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Configure the transformer for SVG support
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  // Adjust resolver to exclude SVG from assetExts and include it in sourceExts
  config.resolver = {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"],
  };

  // Wrap the config with NativeWind configuration
  return withNativeWind(config, { input: "./global.css" });
})();
