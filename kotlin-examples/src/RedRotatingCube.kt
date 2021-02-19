import ue.*

class RedRotatingCube:KotlinObject() {

    var touched = 0

    override fun BeginPlay() {
        println("BeginPlay")
    }

    override fun Tick(deltaTime: Float) {
        val actor: RotatingCubeActor = Root.GetOwner().asDynamic()
        with(actor){
            if (actorToCopy != null) {
                K2_SetActorRotation(Rotator(Yaw = actorToCopy!!.Yaw), false)
            }
        }
    }

    override fun BeginOverlap(other:Actor): String {
        touched++

        if(touched>30) {
            return "die"
        }
        return "touched $touched times by ${other.GetName()}"
    }

    override fun OnDestroyed() {
        println("OnDestroyed")
    }

    fun cleanup(): Unit {
        console.log("<<<cleanup>>>")
    }
}