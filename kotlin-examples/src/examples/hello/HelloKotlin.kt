import ue.*

class HelloKotlin:KotlinObject() {
    var yaw = 0.0
    var actor: TextRenderActor

    init {
        val pos = Vector(X = 100, Z = 100)
        val rotator = Rotator(Yaw = yaw)

        actor = TextRenderActor(GWorld, pos, rotator)

        // initialie its text render component
        actor.TextRender.SetHorizontalAlignment("EHTA_Center")
        actor.TextRender.SetText("Hello Kotlin")
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