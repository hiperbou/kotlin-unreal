import kotlinx.coroutines.delay
import ue.*

external class InteractiveChestBlueprint:Actor{
    val Top:SceneComponent
}

class InteractiveChest: InteractiveObjectBase() {
    val actor = GetOwner<InteractiveChestBlueprint>()
    var opened = false
    override suspend fun doAction() {
        (if(opened) (-110..0) else (0 downTo -110)).forEach {
            actor.Top.SetRelativeRotation(Rotator(0, it,0), false)
            delay(16)
        }
        opened = !opened
    }
}