import examples.adventure.InteractionManager
import examples.adventure.InteractiveObject
import ue.*

abstract class InteractiveObjectBase: KotlinObject(), InteractiveObject {
    private val meshes = GetOwner<Actor>().GetComponentsByClass<StaticMeshComponent>(StaticMeshComponent)

    override fun highlight(enable:Boolean) = meshes.forEach { it.SetRenderCustomDepth(enable) }

    override fun BeginOverlap(other: Actor): String {
        InteractionManager.select(this)
        return ""
    }

    override fun EndOverlap(other: Actor) {
        InteractionManager.release(this)
    }
}