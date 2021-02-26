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
        actor.Lock?.K2_DestroyActor()

        val plate:StaticMeshComponent = actor.GetComponentByClass(StaticMeshComponent).asDynamic()
        val button:StaticMeshComponent = actor.GetComponentByName(StaticMeshComponent,"Button")
        button.K2_SetRelativeLocation(Vector(X = 0, Y = 20, Z = 0), false)

        plate.SetMaterial(0, button.GetMaterial(0))
        //actor.K2_DestroyActor()
        return "Lock opened"
    }

    companion object
    {
        var armor = 0
    }
}