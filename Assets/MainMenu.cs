using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class move : MonoBehaviour
{

    public Animator anim;
    public float speed = 8f;


    // Use this for initialization
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        anim.SetFloat("speed", Mathf.Abs(x));

        if (x > 0)
        {
            transform.Translate(x * speed * Time.deltaTime, 0, 0);
        }
        if (x < 0)
        {
            transform.Translate(-x * speed * Time.deltaTime, 0, 0);
            transform.eulerAngles = new Vector2(0, 180);
        }
    }
}
