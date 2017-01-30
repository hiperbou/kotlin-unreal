/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class HelloBlueprints {
    var yaw = 180.0
    val WIDTH = 400.0

    val actorList = arrayListOf<Actor>()

    init {
        if (GWorld.IsServer()) {
            for (i in 0..10)
                actorList.add(createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0)))
            process.nextTick { update() }
        }
    }

    fun rnd(min:Double, max:Double):Double{
        return min+Math.random()*(max-min)
    }

    fun createActor(x:Double, y:Double, yaw:Number):Actor {
        return Blueprint.Load("/Game/ExampleBlueprint").GenerateClass(GWorld,
                Vector().apply{ X=x; Y=y},
                Rotator().apply{ Yaw=yaw })
    }

    fun update() {
        yaw += 1.0
        actorList.forEach {
            it.SetActorRotation(Rotator().apply {
                Yaw = yaw
            }, false)
        }
        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actorList.forEach { it.DestroyActor() }
    }
}