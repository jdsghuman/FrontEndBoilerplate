# FrontEnd Boilerplate
A starter template with a collection of front end tools, resources, and build tools.

## Features

This starter template allows you to start a project quickly without having to worry about build tools and package managers to configure.

Tools & Features included:

- Recommended structure for HTML, CSS, JavaScript
- BEM CSS module structure
- Autoprefixer vendor prefixing -- (autoprefixer)
- Babel
- Browser Sync - Live server auto reload feature
- Delete files and folders -- (gulp-del)
- Gulp Task Runner
- Minify CSS files -- (gulp-nano)
- Image Optimization -- (gulp-imagemin)
- PostCSS - pipes CSS through multiple plugins -- (gulp-postcss)
- Static asset revisioning -- (gulp-rev)
- Minify JavaScript files -- (gulp-uglify)
- Replace references to CSS/JS in HTML -- (gulp-usemin)
- gulp-watch
- postcss-animation
- postcss-import
- postcss-mixins
- postcss-nested
- postcss-simple-vars
- webpack
- NodeJS / NPM
- jQuery
- Build files with easy command

## Installation

**To setup a new project:**

`$ git clone https://github.com/jdsghuman/FrontEndBoilerplate.git`

**Install dependencies from package.json**

Navigate to the project folder

`npm install`

## Structure

Source code is contained in the /app folder. The /dist folder contains the folder to put on the server

## Running

**Start a local development environment** - Will start a server at [http://localhost:3000](http://localhost:3000 "http://localhost:3000") that will live reload when changes are detected

`gulp watch`

**Build** - Will run the build process and will place the files in the /dist folders. The /dist folder files are deleted/created every time the gulp build command is run.

`gulp build`

## License

The MIT License (MIT).
