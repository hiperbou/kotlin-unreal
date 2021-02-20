import ue.*

class KotlinLogo: KotlinObject() {

    var yaw = 0.0f

    override fun Tick(deltaTime:Float) {
        val actor = GetOwner<Actor>()
        yaw += 100 * deltaTime
        actor.K2_SetActorRotation(Rotator(Roll = 90.0, Yaw  = yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        return "toucheds"
    }
}

