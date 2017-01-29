/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

class HelloBlueprints {
    lateinit var actor:Actor
    var yaw = 180.0
    val WIDTH = 400.0

    init {
        if (GWorld.IsServer()) {
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0))
            //process.nextTick { update() }
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
        actor.SetActorRotation(Rotator().apply {
            Yaw = yaw
        }, false)
        process.nextTick { update() }
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.DestroyActor()
    }
}