<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Http\Controllers\CatPostController;

$router->group(['prefix' => 'api'], function ($router) {
$router->group(['prefix' => 'cat-posts'], function ($router) {
    $router->get('/', ['uses' =>'CatPostController@index']);
    $router->get('/{id}', ['uses' =>'CatPostController@show']);
});});
$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('/api', function () use ($router) {
    return '$router->app->version();';
});
