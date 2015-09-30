var speed : float = 6.0;
var jumpspeed : float = 8.0;
var gravity : float = 20.0;

private var movedirection : Vector3 = Vector3.zero;


function Update () {
var controller : CharacterController = GetComponent(CharacterController);
if(controller.isGrounded)
	{
		moveDirection = Vector3(0,0,Input.GetAxis("Horizontal"));
moveDirection *= speed;
if(moveDirection.sqrMagnitude > 0.01)
	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(moveDirection),1);
if(Input.GetButton("Jump"))
	{
moveDirection.y = jumpspeed;
	}
}
	moveDirection.y -= gravity * Time.deltaTime;	
controller.Move(moveDirection * Time.deltaTime);
}