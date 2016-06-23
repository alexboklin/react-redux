deps:
	npm install babel -g
	npm install webpack webpack-dev-server -g
	npm install react react-dom --save
	npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

create_files: #temp target
	touch index.html App.js main.js webpack.config.js
