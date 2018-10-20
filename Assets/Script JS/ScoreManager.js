#pragma strict

public static var  score : int;

var text : UnityEngine.UI.Text;

function Start () {

text = GetComponent.<UnityEngine.UI.Text>();

score = 0;

}

function Update () {

if(score < 0)
	score = 0;

text.text = "" + score;

}

static function  AjouterPoints (pointsAAjouter : int )
{	
	score+=pointsAAjouter;
}

static function  Reset()
{
	score = 0;

}