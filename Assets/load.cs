using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class load : MonoBehaviour {

    public int scene;
    bool loaded;

    private void OnTriggerEnter(Collider collider)
    {
        Debug.Log("HERE", collider);

        if (!loaded) {
            SceneManager.LoadSceneAsync(scene, LoadSceneMode.Additive);
            loaded = true;
        }
    }
}
