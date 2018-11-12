using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class showTips : MonoBehaviour
{

    public GameObject text;
    public GameObject player;
    public GameObject mob;
    public Collider2D collider;
    private ColliderDistance2D colldist;

    // Use this for initialization



    private void Start()
    {
        collider = player.GetComponent<Collider2D>();  
        
    }

    private void Update()
    {
        colldist = gameObject.GetComponent<Collider2D>().Distance(collider);

        if (colldist.distance < 5)
        {
            var clone = showText();
            Destroy(clone, 4f);

        }

    }

   /* private void OnTriggerEnter2D(Collider2D collider)
    {

        player.GetComponent
        showText();

    }
    */
    public Object showText()
    {

        return Instantiate(text, transform.position, Quaternion.identity, transform);
    }


}