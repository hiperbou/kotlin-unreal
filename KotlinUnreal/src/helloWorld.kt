/**
 * Created by hiperbou on 27/01/2017.
 */
import ue.*

fun main(args: Array<String>) {
    console.log("Main Kotlin")
    HelloKotlin()
}

class HelloKotlin {
    var yaw = 180.0
    val actor:TextRenderActor

    init {
        val pos = Vector().apply{
            X = 100
            Z = 100
        }
        val rotator = Rotator().apply {
            Yaw = yaw
        }

        actor = TextRenderActor(GWorld, pos, rotator)

        // initialie its text render component
        actor.TextRender.SetHorizontalAlignment("EHTA_Center")
        actor.TextRender.SetText("Hello Kotlin!!")
        update(0)
    }

    fun update(milliseconds: Number) {
        yaw += 1.0
        actor.SetActorRotation(Rotator().apply {
            Yaw = yaw
        }, false)
        setTimeout(this::update,16)
    }
}
