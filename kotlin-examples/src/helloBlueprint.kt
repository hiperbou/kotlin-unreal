/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class HelloBlueprint {
    lateinit var actor:Actor
    var yaw = 180.0

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
        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.DestroyActor()
    }
}