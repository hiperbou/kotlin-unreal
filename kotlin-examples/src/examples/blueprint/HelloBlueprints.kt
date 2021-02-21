import ue.*
import kotlin.random.Random

class HelloBlueprints:KotlinObject() {
    val WIDTH = 400.0
    val actorList = arrayListOf<Actor>()
    val owner = GetOwner<HelloBlueprintBlueprint>()

    init {
        for (i in 0..10)
            actorList.add(createActor(rnd(-WIDTH, WIDTH),rnd(-WIDTH, WIDTH),rnd(0.0,360.0)))
    }

    fun rnd(min:Double, max:Double):Double{
        return min+ Random.nextDouble()*(max-min)
    }

    fun createActor(x:Double, y:Double, yaw:Number):Actor {
        return Root.Spawn(owner.ActorToSpawn, Vector(  X=x, Y=y ),Rotator( Yaw=yaw )).apply {
            //K2_AddActorLocalRotation doesn't work without setting local rotation first
            K2_SetActorRotation(Rotator(Yaw = yaw), false)
        }
    }

    override fun Tick(deltaTime:Float) {
        actorList.forEach {
            it.K2_AddActorLocalRotation(Rotator(Yaw = 1),false)
        }
    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actorList.forEach { it.K2_DestroyActor() }
    }
}