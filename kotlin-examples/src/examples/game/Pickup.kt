import ue.*

class Pickup:KotlinObject() {
    override fun BeginOverlap(other:Actor): String {
        armor++
        GetOwner<Actor>().K2_DestroyActor()
        return "armor +1 -> $armor"
    }

    companion object
    {
        var armor = 0
    }
}