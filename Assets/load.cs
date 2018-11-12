using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class load : MonoBehaviour {
    [SerializeField] private string newLevel;

    private void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.CompareTag("Player"))
        {
            SceneManager.LoadSceneAsync(newLevel);
        }

    }

    
}
