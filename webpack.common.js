const path = require('path')

module.exports ={
  entry: {
	  dynlantrd: "./src/index.js",
  },
  output: {
	filename: "[name].uncompress.js",
	path: path.resolve(__dirname,"dist"),
	library: 'dynlantrd',
	libraryTarget: "umd",
	libraryExport: 'default',
  },
};
