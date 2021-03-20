import ue.*

//external fun require(r:String):dynamic

external interface KotlinUnrealObject {
    fun Tick(deltaTime:Float)
    fun BeginOverlap(other: Actor):String
    fun EndOverlap(other: Actor)
    fun OnDestroyed()
}

external class KotlinActorComponent:ActorComponent {
    fun <T:Actor>Spawn(actorClass:UClass, position:Vector, rotation: Rotator):T
}

external open class KotlinObject: KotlinUnrealObject {
    val Root:KotlinActorComponent
    override fun Tick(deltaTime: Float):Unit = definedExternally
    override fun BeginOverlap(other: Actor):String = definedExternally
    override fun EndOverlap(other: Actor)
    override fun OnDestroyed():Unit = definedExternally
}

fun <T:Actor>KotlinObject.GetOwner():T {
    return Root.GetOwner().asDynamic()
}

external var global:dynamic
external var ComponentRoot:dynamic

private object KotlinUnrealClassCache{
    val cache = mutableMapOf<String, dynamic>()
}

@JsName("unrealProxyClass")
fun unrealProxyClass(global:dynamic, klass:dynamic, className:String) {
    val GeneratedClassDefinition = if(KotlinUnrealClassCache.cache.containsKey(className)) {
        KotlinUnrealClassCache.cache.get(className)
    } else {
        val r = js("require('uklass')()(global, klass)")
        KotlinUnrealClassCache.cache.put(className, r)
        r
    }
    val instance = js("new GeneratedClassDefinition()")
    instance.Root = ComponentRoot
    instance.Root.SetKotlinObject(instance)
    instance.konstructor()
    if(!global.precious) global.precious = js("[]"); global.precious.push(instance)
}

/*
    //companion object{
        fun getProperties():Array<dynamic>{
            return arrayOf()
            return arrayOf(toProperties("touched", touched::class.simpleName!!),
                toProperties("acumulatedDeltaTime", acumulatedDeltaTime::class.simpleName!!))
        }
    //}

    fun parseType(type:String): String {
        println("ParseType $type")
        val key = mapOf(
            "boolean" to "bool",
            "integer" to "int",
            "number" to "float",
            "double" to "float",
        )

        return key.getOrElse(type.toLowerCase()) { type }
    }

    fun toProperties(name:String, type:String):dynamic {
        println("toPropertiess: $name $type")
        return object {
            val Name:String = name
            val Type:String = parseType(type)
            val Decorators:Array<String> = arrayOf("EditAnywhere")
            val IsSubclass:Boolean = false
            val IsArray:Boolean = false
            val IsMap:Boolean = false
        }
    }*/