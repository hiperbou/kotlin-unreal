/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

@JsName("require")
external fun requireJs(module:String):dynamic
//external var global:dynamic

external open class AssetGameExampleBlueprint(w:dynamic,b:dynamic,c:dynamic):Actor{
    fun Entry()
    fun OverrideFun()
    open fun OverrideMe()
    var variable:Boolean
}
open class MyKotlinActorExtended(w:dynamic, b:dynamic, c:dynamic):AssetGameExampleBlueprint(w,b,c)
{
    var MyTest:Int = 0
    lateinit var myArm:SpringArmComponent
    lateinit var myCamera:CameraComponent
    init{
        console.log("Hello, this is MyKotlinActorExtended.init :)")
    }
    fun ctor(){
        console.log("Hello, this is MyKotlinActorExtended.ctor function :)")
    }

    fun properties(){
        //example variables definitions (don't do anything ingame yet')
        MyTest /*EditAnywhere+int*/
        myArm /*EditAnywhere+SpringArmComponent*/
        myCamera /*EditAnywhere+CameraComponent*/
    }

    fun ReceiveBeginPlay(){
        //super.ReceiveBeginPlay()
        console.log("Hello, this is MyKotlinActorExtended :)")
        Entry()
        console.log("variable value is $variable")
        console.log("changing variable value")
        variable = true
        console.log("variable value is $variable")
        OverrideFun()
    }

    override fun OverrideMe(){
        super.OverrideMe()
        console.log("This is Kotlin overriding a function on a Blueprint")
    }

    fun startJump() /*ActionBinding[Jump,IE_Pressed]*/
    {
        //this.Jump()
        console.log("Start Jump!!")
    }
    companion object {
        fun instance(w:dynamic,b:dynamic,c:dynamic): MyKotlinActorExtended {
            val p = requireJs("uclass")()(global, MyKotlinActorExtended::class.js)
            return js("new p(w,b,c)")
        }
    }
}

class HelloBlueprintExtends {


    //lateinit var actor:Actor
    var yaw = 180.0

    init {
        console.log("YEPA")
        console.log("AssetGameExampleBlueprint is")
        console.log(js("AssetGameExampleBlueprint"))

        val k = MyKotlinActorExtended.instance(GWorld,
                Vector( X=1 ),
                Rotator( Yaw=180 ))
        console.log("myActor")
        console.log(k)
        /*val bp = Blueprint.Load("/Game/ExampleBlueprint")
        actor = bp.GenerateClass(GWorld,
                Vector( X=1 ),
                Rotator( Yaw=180 ))*/

        process.nextTick { update() }
    }
    fun update() {

        /*yaw += 1.0
        actor.SetActorRotation(Rotator(Yaw = yaw), false)
        process.nextTick { update() }*/
    }
    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        /*actor.DestroyActor()*/
    }
}