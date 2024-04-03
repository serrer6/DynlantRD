const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports ={
  entry: {
	  'dynlantrd.uncompressed': "./src/index.js",
	  'dynlantrd.min': "./src/index.js",
  },
  output: {
	filename: "[name].js",
	path: path.resolve(__dirname,"dist"),
	library: 'dynlantrd',
	libraryTarget: "umd",
  },
	optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                include:/\.min\.js$/,
            })
        ]
    }
};
