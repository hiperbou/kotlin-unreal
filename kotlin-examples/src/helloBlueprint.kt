/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

fun <T>Blueprint.GenerateClass(world:World, position:Vector, rotation:Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    return kotlin.js.js("new \$receiver.GeneratedClass(world, position, rotation)")
}

class HelloBlueprint {
    lateinit var actor:Actor
    var yaw = 180.0
    lateinit var timer:Any

    init {
        if (GWorld.IsServer()) {
            val bp = Blueprint.Load("/Game/ExampleBlueprint")
            actor = bp.GenerateClass(GWorld,
                    Vector().apply{ X=1.0 },
                    Rotator().apply{ Yaw=180 })
            update(0)
        }
    }
    fun update(milliseconds: Number) {
        yaw += 1.0
        actor.SetActorRotation(Rotator().apply {
            Yaw = yaw
        }, false)
        timer = setTimeout(this::update,16)
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.DestroyActor()
        clearTimeout(timer)
    }
}