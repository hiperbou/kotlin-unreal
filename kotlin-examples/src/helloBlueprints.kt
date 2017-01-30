/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class HelloBlueprints {
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
                Vector( X=x, Y=y),
                Rotator( Yaw=yaw ))
    }

    fun update() {
        actorList.forEach {
            it.AddActorLocalRotation(Rotator(Yaw = 1),false)
        }
        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actorList.forEach { it.DestroyActor() }
    }
}