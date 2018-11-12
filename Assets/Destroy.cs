using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroy : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.gameObject.tag == "collectible" || collider.gameObject.tag == "ennemy")
        {
            Destroy(collider.gameObject);
        }
    }
}
