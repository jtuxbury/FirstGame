static var q : int = 0;
var spawn2 : Transform;
var player : GameObject;


//For text on the screen

function OnGUI () {
//if(trig == true)
if(q == 3)
{
	 GUI.Box(Rect (10, 10, 400, 100), "You have collected all the parts to the nuclear weapon. \n Place them on the final platform");
	
	 }
	 else if(q == 0)
	 GUI.Box(Rect (10, 10, 400, 100), "You need to get all 3 parts of the nuclear weapon in \n order to end Jon Preston's evil tyrany over the radishes.");
	 else if(q == 1)
	 GUI.Box(Rect (10, 10, 400, 100), "You got the first piece of the nuclear weapon. Just \n two more to go.");
	 else if(q == 2)
	 GUI.Box(Rect (10, 10, 400, 100), "Great work, just one more to go. You are so close \n to stopping Jon's tyranny over the radishes.");
	 else if(q == 4)
	 GUI.Box(Rect (10, 10, 400, 100), " Congrats! You have once again killed Jon Preston. \n This time he should not be coming back. \n Your radishes should now be safe. \n GAME OVER");
	 
}
