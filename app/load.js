import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/default.css';

import angular from 'angular';
import 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import app from './app'; //import app module first so following elements can access it

import HomeController from './controllers/HomeController';
import GameController from './controllers/GameController';
import GamesController from './controllers/GamesController';
import ImageDialogController from './controllers/ImageDialogController';
import GamesService from './services/GamesService';
import GridService from './services/GridService';
import Game from './components/Game';
import Screenshot from './components/Screenshot';
import ShowOnLoad from './directives/ShowOnLoad';