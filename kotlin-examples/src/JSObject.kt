import ue.Actor
import ue.ActorComponent

//external fun require(r:String):dynamic

external interface KotlinUnrealObject {
    fun BeginPlay()
    fun Tick(deltaTime:Float)
}

external open class JSObject: KotlinUnrealObject {
    val Root:ActorComponent
    override fun BeginPlay():Unit = definedExternally
    override fun Tick(deltaTime: Float):Unit = definedExternally
}

external class SampleActor: Actor {
    var Yaw:Float
    var Speed:Float
    var actorToCopy:SampleActor?
}

external var global:dynamic