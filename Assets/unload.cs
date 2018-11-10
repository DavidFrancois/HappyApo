using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class unload : MonoBehaviour {

    [SerializeField] string scene;

    bool unloaded;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            unloaded = true;
            DataManager.dataManager.UnloadScene(scene);
        }
    }
    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
