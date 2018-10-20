#pragma strict

private var particuleSystem : ParticleSystem;

function Start () {
	particuleSystem=GetComponent.<ParticleSystem>();
}

function Update () {
	
		Destroy(GameObject.Find("ParticuleMort(Clone)"),1);
}