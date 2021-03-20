import kotlinx.coroutines.delay
import ue.*

external class InteractiveCubeBlueprint:Actor{
    val Texts:Array<String>
    val Widget:UserWidget
}

external class SubtitlesWidget:UserWidget{
    fun SetText(text:String)
}

class InteractiveCube:InteractiveObjectBase() {
    val actor = GetOwner<InteractiveCubeBlueprint>()

    override suspend fun doAction() {
        val widget:SubtitlesWidget = GWorld.Create(actor.Widget, GWorld.GetPlayerController(0)).asDynamic()
        with(widget) {
            AddToViewport(0)
            actor.Texts.forEach {
                SetText(it)
                delay(2000)
            }
            RemoveFromViewport()
            DestroyUObject()
        }
    }
}