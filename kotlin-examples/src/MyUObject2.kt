import ue.*
import kotlin.reflect.KClass

class MyUObject2:JSObject() {

    var touched = 0

    fun NotifyTrigger(): String {
        touched++
        println("Me llaman desde un blueprint")
        return "touched $touched times"
    }

    override fun BeginPlay() {
        println("BeginPlay")
    }

    override fun Tick(deltaTime: Float) {
        val actor: SampleActor = Root.GetOwner().asDynamic()
        with(actor){
            if (actorToCopy != null) {
                K2_SetActorRotation(Rotator(Yaw = actorToCopy!!.Yaw), false)
            }
        }
    }

    fun cleanup(): Unit {
        console.log("<<<cleanup>>>")
    }
}