import ue.*

class KotlinLogo: KotlinObject() {

    var yaw = 0.0f

    override fun Tick(deltaTime:Float) {
        val actor = GetOwner<Actor>()
        yaw += 100 * deltaTime
        actor.K2_SetActorRotation(Rotator(Roll = 90.0, Yaw  = yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        spawnAICubes()
        GetOwner<Actor>().K2_DestroyActor()
        return "touched"

    }

    val bp = Blueprint.Load("/Game/AIKubeController")
    fun createAICube(position: Vector):Character {
        return bp.GenerateClass(GWorld, position, Rotator())
    }

    var aiBP = Blueprint.Load("/Game/CubeAI")
    fun createAIController():AIController {
        return aiBP.GenerateClass(GWorld, Vector(), Rotator())
    }

    fun spawnAICubes(){
        for(y in 0..7){
            for (z in 0..3){
                createAICube(Vector(2500.0 + z * 150, -450.0 + y *150, 100)).apply {
                    createAIController().Possess(this)
                }
            }
        }
    }
}

