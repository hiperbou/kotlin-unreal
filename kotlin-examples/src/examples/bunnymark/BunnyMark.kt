import ue.*
import kotlin.random.Random.Default.nextFloat
import kotlin.random.Random.Default.nextInt

class Bunny: KotlinObject() {
    companion object
    {
        val maxX = 800f
        val minX = 0f
        val maxY = 668f
        val minY = 0f
        val gravity = 0.5f // 1.5f
    }

    val actor = GetOwner<Actor>()

    var speedXf: Float = 0f
    var speedYf: Float = 0f

    var xf: Float = 0f
    var yf: Float = 0f
    var zf: Float = 0f

    val pos  = Vector(xf, yf, zf)

    init {
        yf = nextInt(20) * 40f
        speedXf = nextFloat() * 10
        speedYf = (nextFloat() * 10) - 5
    }

    override fun Tick(deltaTime:Float) {
        xf += speedXf
        zf -= speedYf
        speedYf += gravity

        if (xf > maxX) {
            speedXf *= -1
            xf = maxX
        } else if (xf < minX) {
            speedXf *= -1
            xf = minX
        }

        if (zf < minY) {
            speedYf *= -0.85f
            zf = minY
            if (nextFloat() > 0.5) {
                speedYf -= nextFloat() * 6
            }
        } else if (zf > maxY) {
            speedYf = 0f
            zf = maxY
        }

        pos.X = xf
        pos.Y = yf
        pos.Z = zf
        actor.SetActorLocation(pos, false)
    }
}

external class BunnyMarkBlueprint:Actor{
    val KotlinBunny:UClass
    val BlueprintBunny:UClass
    val KotlinOptimizedBunny:UClass
}

class BunnyMark: KotlinObject() {
    val actorList = arrayListOf<OptimizedBunny>()
    val owner = GetOwner<BunnyMarkBlueprint>()

    val keySpawnKoltinBunny = KeyListener("K")
    val keySpawnBlueprintBunny = KeyListener("B")
    val keySpawnKotlinOptimizedBunny = KeyListener("O")

    var spawnedBunnies = 0

    fun spawnBunnies(type:UClass) {
        for (i in 1..10)
            createActor(type)
        spawnedBunnies += 10
        println("Bunnies: ${spawnedBunnies}")
    }

    fun spawnOptimizedBunnies(type:UClass) {
        for (i in 1..10)
            actorList.add(OptimizedBunny(createActor(type)))
        println("Bunnies: ${actorList.size}")
    }

    fun createActor(type:UClass):Actor {
        return Root.Spawn(type, Vector(),Rotator())
    }

    override fun Tick(deltaTime:Float) {
        if(keySpawnKoltinBunny.pressed()){
            spawnBunnies(owner.KotlinBunny)
        }
        if(keySpawnBlueprintBunny.pressed()){
            spawnBunnies(owner.BlueprintBunny)
        }
        if(keySpawnKotlinOptimizedBunny.pressed()){
            spawnOptimizedBunnies(owner.KotlinOptimizedBunny)
        }

        actorList.forEach {
            it.Tick(deltaTime)
        }
    }
}


class OptimizedBunny(val actor: Actor) {
    companion object
    {
        val maxX = 800f
        val minX = 0f
        val maxY = 668f
        val minY = 0f
        val gravity = 0.5f // 1.5f
    }

    var speedXf: Float = 0f
    var speedYf: Float = 0f

    var xf: Float = 0f
    var yf: Float = 0f
    var zf: Float = 0f

    val pos  = Vector(xf, yf, zf)

    init {
        yf = nextInt(20) * 40f
        speedXf = nextFloat() * 10
        speedYf = (nextFloat() * 10) - 5
    }

    fun Tick(deltaTime: Float) {
        xf += speedXf
        zf -= speedYf
        speedYf += gravity

        if (xf > maxX) {
            speedXf *= -1
            xf = maxX
        } else if (xf < minX) {
            speedXf *= -1
            xf = minX
        }

        if (zf < minY) {
            speedYf *= -0.85f
            zf = minY
            if (nextFloat() > 0.5) {
                speedYf -= nextFloat() * 6
            }
        } else if (zf > maxY) {
            speedYf = 0f
            zf = maxY
        }

        pos.X = xf
        pos.Y = yf
        pos.Z = zf
        actor.SetActorLocation(pos, false)
    }
}