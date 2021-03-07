import examples.adventure.InteractionManager
import examples.adventure.InteractiveObject
import kotlinx.coroutines.delay
import ue.*

external class InteractiveCubeBlueprint:Actor{
    val Texts:Array<String>
    val Widget:UserWidget
}

external class SubtitlesWidget:UserWidget{
    fun SetText(text:String)
}

class InteractiveCube:KotlinObject(), InteractiveObject {
    val actor = GetOwner<InteractiveCubeBlueprint>()
    val mesh:StaticMeshComponent = actor.GetComponentByClass(StaticMeshComponent).asDynamic()

    override fun highlight(enable:Boolean) = mesh.SetRenderCustomDepth(enable)

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

    override fun BeginOverlap(other: Actor): String {
        InteractionManager.select(this)
        return ""
    }

    override fun EndOverlap(other: Actor) {
        InteractionManager.release(this)
    }
}