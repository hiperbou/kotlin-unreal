/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class KeyboardInput {
    lateinit var actor:Actor
    var yaw = 180.0

    val keyLeft = Key().apply { KeyName="F" }
    val keyRight = Key().apply { KeyName="H" }
    val keyUp = Key().apply { KeyName="T" }
    val keyDown = Key().apply { KeyName="G" }

    init {
        if (GWorld.IsServer()) {
            val bp = Blueprint.Load("/Game/ExampleBlueprint")
            actor = bp.GenerateClass(GWorld,
                    Vector( X=1 ),
                    Rotator( Yaw=180 ))
            process.nextTick { update() }
        }
    }
    fun update() {
        yaw += 1.0
        actor.SetActorRotation(Rotator(Yaw = yaw), false)

        if(key(keyLeft)) {
            actor.AddActorWorldOffset(Vector(Y = -1),false)
        }
        if(key(keyRight)) {
            actor.AddActorWorldOffset(Vector(Y = 1),false)
        }
        if(key(keyUp)) {
            actor.AddActorWorldOffset(Vector(X = 1),false)
        }
        if(key(keyDown)) {
            actor.AddActorWorldOffset(Vector(X = -1),false)
        }

        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.DestroyActor()
    }

    fun key(k:Key):Boolean {
        return GWorld.GetPlayerController(0).IsInputKeyDown(k)
    }
}