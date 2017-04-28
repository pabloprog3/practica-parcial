<?php

final class ConexionPDO 
{
	private $bd='angular';
	private $user='root';
	private $passw='';

	private $instanciaPDO=null;
    
	public function getConexion()
	{
		if ($this->instanciaPDO==null) 
		{
			$this->instanciaPDO = new PDO('mysql:host=localhost;dbname='.$this->bd.';charset=utf8', $this->user, $this->passw);
			return $this->instanciaPDO;
		}
	
	}
}//fin de clase



?>