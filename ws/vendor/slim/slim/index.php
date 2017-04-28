<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();


$app = new \Slim\Slim();

//TRAER EL API REST CON LAS RUTAS
require_once '../../../app/routes/api.php';


$app->run();
