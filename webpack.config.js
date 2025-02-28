export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
<<<<<<< HEAD
				exclude: /\.(scss|css|ttf)/, //DON'T COMPILE STYLE MODULES
=======
				test: /\.js/,
				exclude: /\.(scss|css|ttf|otf|png|jpeg|jpg|gif|tiff|json)/, //DON'T COMPILE STYLE MODULES
>>>>>>> main
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
<<<<<<< HEAD
				test: /\.(png|jpeg|gif)/, //COMPILE IMAGES
				use: ["file-loader"], //USE THIS LOADER TO COMPLILE IMAGE FILES
=======
				test: /\.(png|jpeg|gif|jpg)/, //COMPILE IMAGES
				type: "asset/resource",
>>>>>>> main
			},
		],
	},
	watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL WATCH.
<<<<<<< HEAD
	watchOptions: { aggregateTimeout: 1000 }, //GIVING WEBPACK MORE TIME TO COMPILE PREVENTS BUILD ERRORS
	mode: "development", //SET TO DEVELOPMENT MODE NOT PRODUCTION
	devtool: "source-map",
=======
	watchOptions: { aggregateTimeout: 3000 }, //GIVING WEBPACK MORE TIME TO COMPILE PREVENTS BUILD ERRORS
	mode: "development", //SET TO DEVELOPMENT MODE NOT PRODUCTION
	devtool: "source-map", //ENABLES THE DEBUGGER CODE TO MATCH ACTUAL CODE
>>>>>>> main
};
