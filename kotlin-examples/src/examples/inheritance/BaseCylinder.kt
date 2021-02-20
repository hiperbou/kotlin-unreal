import ue.*

open class BaseCylinder: KotlinObject(), ICylinder {

    var deltaTimeAccum = 0.0f
    var yaw = 0.0f

    override fun Tick(deltaTime:Float) {
        deltaTimeAccum += deltaTime
        val actor = GetOwner<Actor>()
        yaw += 100 * deltaTime
        actor.K2_SetActorRotation(Rotator(Pitch  = yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        return getName()
    }

    override fun getName(): String {
        return "Base Cylinder"
    }
}


