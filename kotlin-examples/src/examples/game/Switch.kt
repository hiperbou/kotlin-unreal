import ue.*

external class SwitchActor: Actor {
    var Lock: Actor?
}

class Switch:KotlinObject() {
    override fun BeginOverlap(other: Actor): String {
        val actor = GetOwner<SwitchActor>()
        actor.Lock?.DestroyActor()

        val plate = actor.GetComponentByClass<StaticMeshComponent>(StaticMeshComponent)
        val button = actor.GetComponentByName<StaticMeshComponent>(StaticMeshComponent,"Button")
        button.SetRelativeLocation(Vector(X = 0, Y = 20, Z = 0), false)

        plate.SetMaterial(0, button.GetMaterial(0))

        return "Lock opened"
    }
}