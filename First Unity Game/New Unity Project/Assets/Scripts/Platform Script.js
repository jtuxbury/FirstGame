var height = 3.2;
var speed = 2.0;
var timingOffset = 0.0;

private var originalPosition : Vector3;

function Start ()
{
	originalPosition = transform.position;
	
}

function Update ()
{
	var offset = (1 + Mathf.Sin(Time.time * speed + timingOffset)) * height / 2;
	transform.position = originalPosition + Vector3(0, offset, 0);

}


