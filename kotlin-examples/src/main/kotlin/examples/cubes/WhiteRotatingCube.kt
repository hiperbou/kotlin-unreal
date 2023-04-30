import ue.*

class WhiteRotatingCube: KotlinObject() {

    var touched = 0
    var acumulatedDeltaTime = 0.0

    override fun Tick(deltaTime:Float) {
        acumulatedDeltaTime += deltaTime
        val actor = GetOwner<RotatingCubeActor>()
        actor.Yaw += actor.Speed * deltaTime * 4
        actor.SetActorRotation(Rotator(Yaw  = actor.Yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        touched++
        return "touched $touched times"
    }

    override fun OnDestroyed() {
        println("OnDestroyed")
    }

}

