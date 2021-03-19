import ue.*

class KotlinLogo: KotlinObject() {

    var yaw = 0.0f

    override fun Tick(deltaTime:Float) {
        val actor = GetOwner<Actor>()
        yaw += 100 * deltaTime
        actor.SetActorRotation(Rotator(Roll = 90.0, Yaw  = yaw), false)
    }

    override fun BeginOverlap(other:Actor):String {
        spawnAICubes()
        GetOwner<Actor>().DestroyActor()
        return "touched"

    }

    val owner = GetOwner<FirstPersonGameBlueprint>()

    fun createAIKube(position: Vector):Character {
        return Root.Spawn(owner.AIKubeController, position, Rotator()).asDynamic()
    }

    fun createAIController():AIController {
        return Root.Spawn(owner.CubeAI, Vector(), Rotator()).asDynamic()
    }

    fun spawnAICubes(){
        for(y in 0..7){
            for (z in 0..3){
                createAIKube(Vector(2500.0 + z * 150, -450.0 + y *150, 100)).apply {
                    createAIController().Possess(this)
                }
            }
        }
    }
}

