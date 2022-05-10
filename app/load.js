//Use this file to load (import) all necessary files for application in correct order via Webpack
//This file is defined as entry for application in webpack.common.js config file

//Images
import '../assets/css-images/bg01.png';
import '../assets/images/logo.svg';
import '../assets/images/spinner.gif';

//CSS + fonts
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.eot';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';
import '../assets/css/default.css';

//AngularJS dependencies
import angular from 'angular';
import 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

//Templates - imported in individual files where they're used

//Application files
import app from './app'; //import app module first so following elements can access it

import HomeController from './controllers/HomeController';
// import ImageDialogController from './controllers/ImageDialogController'; //used directly in GameController
import GameController from './controllers/GameController';
import GamesController from './controllers/GamesController';
import GamesService from './services/GamesService';
import GridService from './services/GridService';
import Game from './components/Game';
import Screenshot from './components/Screenshot';
import ShowOnLoad from './directives/ShowOnLoad';