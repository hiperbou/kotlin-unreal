import ue.Actor
import ue.GetComponentByName
import ue.StaticMeshComponent
import ue.Vector

external class SwitchActor: Actor {
    var Lock: Actor?
}

class Switch:KotlinObject() {
    override fun BeginOverlap(other: Actor): String {
        val actor = GetOwner<SwitchActor>()
        actor.Lock?.DestroyActor()

        val plate:StaticMeshComponent = actor.GetComponentByClass(StaticMeshComponent).asDynamic()
        val button:StaticMeshComponent = actor.GetComponentByName(StaticMeshComponent,"Button")
        button.SetRelativeLocation(Vector(X = 0, Y = 20, Z = 0), false)

        plate.SetMaterial(0, button.GetMaterial(0))

        return "Lock opened"
    }
}