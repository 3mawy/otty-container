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

use app\Http\Controllers\AuthController;


$router->group(['prefix' => 'api'], function ($router) {
    $router->group(['prefix' => 'auth'], function ($router) {
        $router->post('register', ['uses' => 'AuthController@register']);
        $router->post('login',  ['uses' => 'AuthController@login']);
        $router->post('logout', [AuthController::class, 'logout']);
        $router->post('refresh', [AuthController::class, 'refresh']);
        $router->post('me', [AuthController::class, 'me']);
    });
    $router->get('/users', ['uses' => 'UserController@index']);
    $router->group(['prefix' => 'cat-posts'], function ($router) {
        $router->get('/', ['uses' => 'CatPostController@index']);
        $router->get('/{id}', ['uses' => 'CatPostController@show']);
    });
});
$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('/api', function () use ($router) {
    return '$router->app->version();';
});
