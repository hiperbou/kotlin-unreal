import ue.*

class WhiteRotatingCube: KotlinObject() {

    var touched = 0
    var acumulatedDeltaTime = 0.0

    override fun BeginPlay()
    {
        println("BeginPlay")
        acumulatedDeltaTime = 0.0
        touched = 0

        println(global)
    }

    override fun Tick(deltaTime:Float) {
        acumulatedDeltaTime += deltaTime;
        val actor: RotatingCubeActor = Root.GetOwner().asDynamic()
        actor.Yaw += actor.Speed * deltaTime * 4
        actor.K2_SetActorRotation(Rotator(Yaw  = actor.Yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        touched++
        return "touched $touched times"
    }

    override fun OnDestroyed() {
        println("OnDestroyed")
    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
    }
}

