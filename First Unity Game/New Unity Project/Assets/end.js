//var sound : AudioClip;
function OnTriggerEnter(other : Collider)
{
if(other.tag == "Player")
{
Win.q = 4;
audio.Play();
}
}