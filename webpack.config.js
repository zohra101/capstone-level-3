export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				exclude: /\.(scss|css|ttf)/, //DON'T COMPILE STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
				test: /\.(png|jpeg|gif)/, //COMPILE IMAGES
				use: ["file-loader"], //USE THIS LOADER TO COMPLILE IMAGE FILES
			},
		],
	},
	watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL WATCH.
	watchOptions: { aggregateTimeout: 1000 }, //GIVING WEBPACK MORE TIME TO COMPILE PREVENTS BUILD ERRORS
	mode: "development", //SET TO DEVELOPMENT MODE NOT PRODUCTION
	devtool: "source-map",
};
