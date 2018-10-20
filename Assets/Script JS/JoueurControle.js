#pragma strict

var vitesse : float;
private var velocityMouv : float;
var hauteurSaut : float;

var LeSolOk : Transform;
var LeSolRadius : float;
var leSol : LayerMask;
public var surLeSol : boolean;

public var doubleJump : boolean;

private var anim : Animator;

public var pointDebutTir : Transform;
public var shuriken : GameObject;

public var delaiTir : float;
private var delaiTirConteur : float;

public var knockback : float;
public var knockbackCount : float;
public var knockbackLength : float;
public var knockbackRight : boolean;

function Start()
{
	anim = GetComponent.<Animator>();
}

function FixedUpdate(){

	surLeSol = Physics2D.OverlapCircle(LeSolOk.position,LeSolRadius,leSol);
}

function Update () {

	if(surLeSol)
	{
		doubleJump = false;
	}

	anim.SetBool("SurLeSol",surLeSol);

	if(Input.GetKeyDown(KeyCode.Z) && surLeSol)
	{
		GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x,hauteurSaut);
	}

	if(Input.GetKeyDown(KeyCode.Z) && !doubleJump && !surLeSol)
	{
		GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x,hauteurSaut);
		doubleJump = true;
	}

	velocityMouv = 0f;

	if(Input.GetKey(KeyCode.D))
	{
		//GetComponent.<Rigidbody2D>().velocity = new Vector2(vitesse,GetComponent.<Rigidbody2D>().velocity.y);
		velocityMouv = vitesse;
		transform.localScale = new Vector3 (1f, 1f, 1f);
	}
	else if(Input.GetKey(KeyCode.Q))
	{
		//GetComponent.<Rigidbody2D>().velocity = new Vector2(-vitesse,GetComponent.<Rigidbody2D>().velocity.y);
		velocityMouv = -vitesse;
		transform.localScale = new Vector3 (-1f, 1f, 1f);

	}
	if(anim.GetBool("katana"))
	{
	 	anim.SetBool("katana",false);
	}

	if(Input.GetKey(KeyCode.A))
	{
		anim.SetBool("katana",true);

	}


	if(knockbackCount <= 0)
	{
	GetComponent.<Rigidbody2D>().velocity = new Vector2(velocityMouv,GetComponent.<Rigidbody2D>().velocity.y);
	}else{
		if(knockbackRight)
			GetComponent.<Rigidbody2D>().velocity = new Vector2(-knockback,knockback);
		if(!knockbackRight)
			GetComponent.<Rigidbody2D>().velocity = new Vector2(knockback,knockback);
		knockbackCount -= Time.deltaTime;
	}

	anim.SetFloat("Vitesse",Mathf.Abs(GetComponent.<Rigidbody2D>().velocity.x));

	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(shuriken,pointDebutTir.position,pointDebutTir.rotation);
		delaiTirConteur = delaiTir;
	}

	if(Input.GetKey(KeyCode.Space))
	{

		delaiTirConteur-= Time.deltaTime;
		if(delaiTirConteur <= 0)
		{
			delaiTirConteur = delaiTir;
			Instantiate(shuriken,pointDebutTir.position,pointDebutTir.rotation);
		}

	}

}