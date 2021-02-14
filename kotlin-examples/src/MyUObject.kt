import ue.*
import kotlin.reflect.KClass

class MyUObject:JSObject() {

    var touched = 0
    var myNewVar = 666.0

    fun NotifyTrigger():String {
        touched++
        println("Me llaman desde un blueprint")
        return "touched $touched times"
    }

    override fun BeginPlay()
    {
        println("BeginPlay")
        myNewVar = 666.0
        touched = 0

        println(global)
    }

    override fun Tick(deltaTime:Float) {
        myNewVar += deltaTime;
        //console.log("myNewVar " + this.myNewVar)
        val actor:SampleActor = Root.GetOwner().asDynamic()
        actor.Yaw += actor.Speed * deltaTime * 4
        actor.K2_SetActorRotation(Rotator(Yaw  = actor.Yaw), false)
        //console.log("tick " + deltaTime)
        //console.log("Si ves esto, es que se está escribiendo desde Kotlin!")
    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
    }
/*
    //companion object{
        fun getProperties():Array<dynamic>{
            return arrayOf()
            return arrayOf(toProperties("touched", touched::class.simpleName!!),
                toProperties("myNewVar", myNewVar::class.simpleName!!))
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
}

object KotlinUnrealClassCache{
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
    instance.Root = Root
    instance.Root.SetJsObject(instance)
    if(!global.precious) global.precious = js("[]"); global.precious.push(instance)
    if(instance.BeginPlay) instance.BeginPlay()
}