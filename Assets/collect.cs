using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class collect : MonoBehaviour {

    [SerializeField] private string key;
    [SerializeField] private int quantity;

    private void OnTriggerEnter2D(Collider2D collider) {
    
        if (!collider.CompareTag("Player")) return;
        DataManager.dataManager.addItem(key, quantity);
        Debug.Log(DataManager.dataManager.getItem(key));
    }
}
