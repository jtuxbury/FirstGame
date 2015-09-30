var Target : Transform;
var distancefromplayer : float = 10.0;
function LateUpdate () {
transform.position = Target.position + Vector3(distancefromplayer,distancefromplayer/2,0);
}