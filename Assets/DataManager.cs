using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

 class Item {
    public string _name;
    public int _quantity;

    public Item(string name, int quantity)
    {
        _name = name;
        _quantity = quantity;
    }

}

public class DataManager : MonoBehaviour {

    public static DataManager dataManager;

    static List<Item> inventory = new List<Item>();

    bool gameStart;

    private void Awake()
    {
        if (!gameStart) {
            dataManager = this;
            SceneManager.LoadSceneAsync("TutoScene");
            gameStart = true;
        }
    }


    public void UnloadScene(string scene) {
        SceneManager.UnloadSceneAsync(scene);
    }

    public void addItem(string key, int quantity)
    {
       
        var item = inventory.Find(i => i._name.Equals(key));
        if (item != null) item._quantity += quantity;
        else inventory.Add(new Item(key, quantity));
    }

    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
