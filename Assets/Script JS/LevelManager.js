#pragma strict

public var  derniercheckpoint : GameObject;
private var joueur : JoueurControle;

public var  ParticuleMort : GameObject;

public var delaiRespawn : float;

public var penaliteMort : int = 500;

public var gravite : float;

private var camera_ : CameraController;

private var santeManager : SanteManager;


function Start () {

joueur = FindObjectOfType.<JoueurControle>();
camera_ = FindObjectOfType.<CameraController>();
santeManager = FindObjectOfType.<SanteManager>();
	
}

function Update () {

}

function RespawnJoueur()
{
	StartCoroutine("RespawnJoueurSuite");

}

function RespawnJoueurSuite()
{
	Instantiate(ParticuleMort,joueur.transform.position,joueur.transform.rotation);
	joueur.enabled = false;
	joueur.GetComponent.<Renderer>().enabled = false;
	camera_.isFollowing = false;
	ScoreManager.AjouterPoints(-penaliteMort);
	//gravite = joueur.GetComponent.<Rigidbody2D>().gravityScale;
	//joueur.GetComponent.<Rigidbody2D>().gravityScale = 0f;
	//joueur.GetComponent.<Rigidbody2D>().velocity = Vector3.zero;
	yield WaitForSeconds(delaiRespawn);
	//joueur.GetComponent.<Rigidbody2D>().gravityScale = gravite;
	joueur.knockbackCount = 0;
	camera_.isFollowing = true;
	joueur.transform.position = derniercheckpoint.transform.position;
	joueur.enabled = true;
	joueur.GetComponent.<Renderer>().enabled = true;
	joueur.GetComponent.<Rigidbody2D>().velocity = Vector3.zero;
	santeManager.Soigner();
	santeManager.estMort = false;
}
