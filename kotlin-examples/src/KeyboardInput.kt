/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class KeyboardInput {
    var actor:Actor
    var yaw = 180.0

    val keyLeft = KeyListener("F")
    val keyRight = KeyListener("H")
    val keyUp = KeyListener("T")
    val keyDown = KeyListener("G")

    init {
        val bp = Blueprint.Load("/Game/ExampleBlueprint")
        actor = bp.GenerateClass(GWorld,
                Vector( X=1 ),
                Rotator( Yaw=180 ))
        process.nextTick { update() }
    }
    fun update() {
        yaw += 1.0
        actor.K2_SetActorRotation(Rotator(Yaw = yaw), false)

        if(keyLeft.down()) {
            actor.K2_AddActorWorldOffset(Vector(Y = -1),false)
        }
        if(keyRight.down()) {
            actor.K2_AddActorWorldOffset(Vector(Y = 1),false)
        }
        if(keyUp.down()) {
            actor.K2_AddActorWorldOffset(Vector(X = 1),false)
        }
        if(keyDown.down()) {
            actor.K2_AddActorWorldOffset(Vector(X = -1),false)
        }

        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.K2_DestroyActor()
    }
}