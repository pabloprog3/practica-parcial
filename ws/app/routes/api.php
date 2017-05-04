<?php

//LIBRERIA Mascota
require_once $_SERVER['DOCUMENT_ROOT']."/practica-parcial/ws/app/libs/Mascota.php";

$app->get("/mascotas/listado", function () use($app)
{
    $mascotasJSON = Mascota::getMascotasTodas();

    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($mascotasJSON);
});


$app->get("/mascotas/(:id)", function ($id) use($app)
{
    $mascotasJSON = Mascota::getMascotaId($id);

	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($mascotasJSON);
});


$app->post("/mascotas/agregar", function() use($app){
	//$nombre = $app->request->post("nombre");
	//$edad = $app->request->post("edad");
    //$sexo = $app->request->post("sexo");
	//$tipo = $app->request->post("tipo");
	$entidad = $app->request->post("entidad");
	
    $mascotaJSON = Mascota::mascotaAdd($nombre->nombre, $edad.nombre, $sexo.nombre, $tipo.nombre);

	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($mascotasJSON);
});

$app->put("/mascotas/modificar", function() use($app){
	$nombre = $app->request->put("nombre");
	$edad = $app->request->put("edad");
    $sexo = $app->request->put("sexo");
	$tipo = $app->request->put("tipo");
	$id = $app->request->put("id");

     $mascotaJSON = Mascota::mascotaUpdate($nombre, $edad, $sexo, $tipo, $id);

	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($mascotaJSON);
});

$app->delete("/mascotas/borrar", function($id) use($app){
		
    $id = $app->request->delete("id");

    $mensaje = Mascota::mascotaDelete($id);
	
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($mensaje);
});




?>
