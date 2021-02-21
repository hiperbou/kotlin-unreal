import KotlinObject
import ue.*

external class HelloBlueprintBlueprint:Actor {
    val ActorToSpawn:UClass
}

class HelloBlueprint:KotlinObject() {
    var actor: Actor
    var yaw = 0.0

    init {
        val owner = GetOwner<HelloBlueprintBlueprint>()
        actor = Root.Spawn(owner.ActorToSpawn,Vector( X=1 ),Rotator( Yaw=yaw ))
    }

    override fun Tick(deltaTime:Float) {
        yaw += 100.0 * deltaTime
        actor.K2_SetActorRotation(Rotator(Yaw = yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        return ""
    }

    override fun OnDestroyed() {
        println("OnDestroyed")
    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.K2_DestroyActor()
    }
}