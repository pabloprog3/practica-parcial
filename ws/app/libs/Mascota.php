<?php

/**
 * Definicion para la entidad Mascota con atributos y métodos a la base de datos
 */

 //LIBRERIAS
 require_once $_SERVER['DOCUMENT_ROOT']."/practica-parcial/ws/app/libs/conexionPDO.php";

class Mascota
{

    private $nombre=null;
    private $edad=null;
    private $sexo=null;
    private $tipo=null;
    

    //CONSTRUCTOR 
    function __construct($_nombre, $_edad, $_sexo, $_tipo)
    {
        $this->nombre = $_nombre;
        $this->edad = $_edad;
        $this->sexo = $_sexo;
        $this->tipo = $_tipo;
    }

    //SETTERS

    public function setNombre($_nombre)
    {
        $this->nombre = $_nombre;
    }
    public function setEdad($_edad)
    {
        $this->edad = $_edad;
    }
    public function setSexo($_sexo)
    {
        $this->sexo = $_sexo;
    }
    public function setTipo($_tipo)
    {
        $this->tipo = $_tipo;
    }


    //GETTERS

    public function getNombre()
    {
        return $this->nombre;
    }
     public function getEdad()
    {
        return $this->edad;
    }
     public function getSexo()
    {
        return $this->sexo;
    }
     public function getTipo()
    {
        return $this->tipo;
    }


    //METODOS DE INSTANCIA
    public function toString()
    {
        return $this->getNombre()."-".$this->getEdad()."-".$this->getSexo()."-".$this->getTipo();
    }


    //METODOS DE CLASE PARA LA BASE DE DATOS

    public static function getMascotasTodas()
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $dbQuery = $conn->prepare("select * from mascota");
	    $dbQuery->execute();
	    $mascota = $dbQuery->fetchAll(PDO::FETCH_ASSOC); 
	     
	    $conn = null;

        return json_encode($mascota);
    }

    public static function getMascotaId($id)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $dbQuery = $conn->prepare("select * from mascota where id=:id");
	    $dbQuery->bindParam(":id", $id);
	    $dbQuery->execute();
	    $mascota = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	 
	    $conn = null;

        return json_encode($mascota);
    }


    public static function mascotaAdd($nombre, $edad, $sexo, $tipo)
    {
            $dbPDO = new ConexionPDO();
	        $conn = $dbPDO->getConexion();
	        $dbQuery = $conn->prepare("insert into mascota (nombre, edad, sexo, tipo) values(:nombre,:edad,:sexo,:tipo");

            $dbQuery->bindParam(":nombre", $nombre);
	        $dbQuery->bindParam(":edad", $edad);
	        $dbQuery->bindParam(":sexo", $sexo);
	        $dbQuery->bindParam(":tipo", $tipo);

            $dbQuery->execute();
            $mascotaId = $conn->lastInsertId();

            $conn = null;

            return json_encode($mascotaId);
    }


    public static function mascotaUpdate($nombre, $edad, $sexo, $tipo, $id)
    {
         if($mascota!=NULL)
        {            
	        $dbPDO = new ConexionPDO();
	        $conn = $dbPDO->getConexion();
	        $dbQuery = $conn->prepare("update mascota set nombre=:nombre, edad=:edad, sexo=:sexo, tipo=:tipo where id=:id");
	        
	        $dbQuery->bindParam(":nombre", $nombre);
	        $dbQuery->bindParam(":edad", $edad);
	        $dbQuery->bindParam(":sexo", $sexo);
            $dbQuery->bindParam(":tipo", $tipo);
	        $dbQuery->bindParam(":id", $id);
	        
            $dbQuery->execute();
	        $mascotaId = $conn->lastInsertId();
            
            $conn = null;

            return json_encode($mascotaId);
        }
    }

    public static function mascotaDelete($id)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    
        $dbQuery = $conn->prepare("delete from mascota where id=:id");
	    $dbQuery->bindParam(":id", $id);
	    
        if($dbQuery->execute())
        {
            $res[mensajeOk] = "true";
        }
        else
            $res[mensajeError]= "false";
	    
        $conn = null;
	    
        return json_encode($res);
    }


}//fin clase






















?>