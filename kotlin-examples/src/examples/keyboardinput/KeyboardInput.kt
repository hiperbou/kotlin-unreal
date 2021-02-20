import ue.*

class KeyboardInput:KotlinObject()  {
    lateinit var actor:Actor
    var yaw = 180.0

    lateinit var keyLeft:KeyListener
    lateinit var keyRight:KeyListener
    lateinit var keyUp:KeyListener
    lateinit var keyDown:KeyListener

    override fun BeginPlay() {
        yaw = 180.0

        keyLeft = KeyListener("F")
        keyRight = KeyListener("H")
        keyUp = KeyListener("T")
        keyDown = KeyListener("G")

        val bp = Blueprint.Load("/Game/ExampleBlueprint")
        actor = bp.GenerateClass(GWorld,
            Vector( X=1 ),
            Rotator( Yaw=180 ))
    }

    override fun Tick(deltaTime:Float) {
        yaw += 1.0
        actor.K2_SetActorRotation(Rotator(Yaw = yaw), false)

        if(keyLeft.down()) {
            actor.K2_AddActorWorldOffset(Vector(Y = -1),false)
        }
        if(keyRight.down()) {
            actor.K2_AddActorWorldOffset(Vector(Y = 1),false)
        }
        if(keyUp.down()) {
            actor.K2_AddActorWorldOffset(Vector(X = 1),false)
        }
        if(keyDown.down()) {
            actor.K2_AddActorWorldOffset(Vector(X = -1),false)
        }
    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.K2_DestroyActor()
    }
}