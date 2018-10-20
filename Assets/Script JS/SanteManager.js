#pragma strict

public static var  santeJoueur : int;
public var maxSante : int;
private var levelManager : LevelManager;
//var text : UnityEngine.UI.Text;
public var barreVie : UnityEngine.UI.Slider;
public var estMort : boolean;

function Start () {

//text = GetComponent.<UnityEngine.UI.Text>();

barreVie = GetComponent.<UnityEngine.UI.Slider>();

santeJoueur = maxSante;

levelManager = FindObjectOfType.<LevelManager>();

estMort = false;

}

function Update () {

if(santeJoueur <= 0 && !estMort)
{
	santeJoueur = 0;
	levelManager.RespawnJoueur();
	estMort = true;
}
	

//text.text = "" + santeJoueur;
barreVie.value = santeJoueur;

}

static function  BlesserJoueur (dommage : int )
{	
	santeJoueur-=dommage;
}

function Soigner()
{
santeJoueur = maxSante;

}