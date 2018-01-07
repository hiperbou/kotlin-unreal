/**
 * Created by hiperbou on 29/01/2017.
 */
import ue.*

@JsName("require")
external fun requireJs(module:String):dynamic
external var global:dynamic

external interface ClassDeclaration{ val Parent:dynamic
                                val Functions:dynamic
                                val ClassFlags: dynamic
                                val Outer: dynamic
                                val Properties: Array<UPROPERTY>}

enum class PropertyFlag {
    Const,
    Return,
    Out,
    Replicated,
    NotReplicated,
    ReplicatedUsing, //ReplicatedUsing:rep-notify-function-name
    Transient,
    DuplicateTransient,
    EditFixedSize,
    EditAnywhere,
    EditDefaultsOnly,
    EditInstanceOnly,
    BlueprintReadOnly,
    BlueprintReadWrite,
    Instanced,
    GlobalConfig,
    Config,
    TextExportTransient,
    NonPIEDuplicateTransient,
    Export,
    NonTransactional,
    BlueprintAssignable,
    SimpleDisplay,
    AdvancedDisplay,
    SaveGame,
    AssetRegistrySearchable,
    Interp,
    NoClear,
    VisibleAnywhere,
    VisibleInstanceOnly,
    VisibleDefaultsOnly,
    Category, //Category:your-category
    DisplayName //DisplayName:your-nice-name
}

external interface UPROPERTY {
    val Name:String
    val Type:String //
    val Decorators:PropertyFlag //Replicated,EditAnywhere
    val IsSubclass:Boolean
    val IsArray:Boolean
    val IsMap:Boolean
}
external fun CreateClass(className:String, classDeclaration: dynamic)
external val Object:dynamic
class RegisterClass(){
    init {
        val className = getClassName("ORIGINALCLASSNAME")
        val parentClass = getParentClass({"TEMPLATE"})
        val proxy = getProxyFunctions()
        val classFlags = getClassFlags()
        val thePackage = getOuterPackage()
        val properties = getProperties()
        val klass = CreateClass(className, object {
            val Parent =  parentClass
            val Functions = proxy
            val ClassFlags = classFlags
            val Outer = thePackage
            val Properties = properties
        })
    }

    fun getClassName(orgClassName:String):String {
        var className = ""
        for (index in 0..100000) {
            className = "${orgClassName}_C${index}"
            if (!UObject.Find(null, className)) break
        }
        return className
    }

    fun getParentClass(template:dynamic):dynamic{
        var parentClass = Object.getPrototypeOf(template.prototype).constructor
        if (parentClass == Object) {
            parentClass = null
        }
        return parentClass
    }

    fun getProxyFunctions():dynamic{
        //Seems like a map of
        //["functionName"] = function
        return """
            ctor ctor() {
                // Subobject initialization, property initialization
                this.bAlwaysRelevant = true
            }
            ReceiveBeginPlay ReceiveBeginPlay() {
                super.ReceiveBeginPlay()
                console.log("Hello, this is MyActor")
            }
            CustomEvent CustomEvent() {
                console.log("This is javascript")
            }
            NewFunction NewFunction(x/*int*/,y/*int*/) /*NetMulticast*/ {
                console.log(x+y);
            }
            """
    }
    fun getClassFlags():dynamic{
        return 0
    }

    fun getOuterPackage():dynamic{
        return JavascriptLibrary.CreatePackage(null,"/Script/Javascript")
    }

    fun getProperties():dynamic{
        //map of index
        //[0] = UPROPERTY
        return """
            0 [object Object]
            1 [object Object]
            2 [object Object]
            3 [object Object]

            < Name Hello
            < Type int
            < Decorators Replicated,EditAnywhere
            < IsSubclass false
            < IsArray false
            < IsMap false

            < Name World
            < Type Actor
            < Decorators Replicated,EditAnywhere
            < IsSubclass false
            < IsArray false
            < IsMap false

            < Name Position
            < Type Vector
            < Decorators EditAnywhere
            < IsSubclass false
            < IsArray true
            < IsMap false

            < Name Some
            < Type DistanceDatum
            < Decorators EditAnywhere
            < IsSubclass false
            < IsArray false
            < IsMap false
            """
    }
}

external open class AssetGameExampleBlueprint(w:dynamic,b:dynamic,c:dynamic):Character{
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
    fun prector() {
        //MyCMC_C.SetDefaultSubobjectClass("CharMoveComp")
        console.log("Hello, this is MyKotlinActorExtended.prector function :)")
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
        this.Jump()
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