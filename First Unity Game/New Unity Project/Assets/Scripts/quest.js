
var triggered : boolean = false;
var spawn2 : Transform;
function OnTriggerEnter(other : Collider)
	{
			
			Win.q +=1;
			
			audio.Play();
			Destroy(gameObject);
			

if(Win.q == 3){
if(other.tag == "Player")
{
other.transform.position = spawn2.position;
}
}


			
			
	}	
	

