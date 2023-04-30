import ue.*
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random

class SceneLights:KotlinObject() {
    var tickable:List<()->Unit>

    init {

        GWorld.GetAllActorsOfClass(Light).OutActors.forEach { it.DestroyActor() }

        tickable = listOf(
            rotate(light(LinearColor(R=1)),object{val k=1.8; val r=150;val p = Vector(X=400,Y=-100,Z=100)}),
            rotate(light(LinearColor(G=1)),object{val k=1.5; val r=30;val p = Vector(X=400,Z=150)}),
            rotate(light(LinearColor(B=1)),object{val k=0.1; val r=230;val p = Vector( X=400, Z=250)})
        )
        bg(Vector(X=400,Z=-150,Y=-100))
        skel(Vector(X=400, Z=0, Y=-150))
    }

    fun light(color:LinearColor):Actor {
        val actor = PointLight(GWorld)
        actor.LightComponent.SetMobility("Movable")
        actor.LightComponent.Intensity = 10000
        actor.LightComponent.SetLightColor(color, false)
        return actor
    }

    fun box(p:Vector, size:Vector, color:LinearColor):Actor {
        val actor = StaticMeshActor(GWorld, p)
        val smc = actor.StaticMeshComponent
        smc.SetMobility("Movable")
        smc.SetStaticMesh(StaticMesh.Load("/Engine/BasicShapes/Cube"))
        val mtrl = Material.Load("/Game/Color")
        val mi = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, mtrl, "", "")
        mi.SetVectorParameterValue("color", color)
        smc.SetMaterial(0, mi)
        actor.SetActorScale3D(size)
        return actor
    }

    fun bg(p:Vector) {
        val size = 1000
        val boxsize = 100
        val scale = size / boxsize
        // back
        box(p.Add_VectorVector(Vector(X=size / 2, Z=size / 2 )), Vector(X= 1, Y= scale, Z= scale ), LinearColor( R= 0.5, G= 0.7))
        // left
        box(p.Add_VectorVector(Vector(Y=-size / 2, Z=size / 2 )), Vector( X= scale, Y= 1, Z= scale ), LinearColor( B= 1 ))
        // floor
        box(p, Vector(X= scale, Y= scale, Z= 1 ), LinearColor(R= 1))

        val N = 10
        val s = 0.04
        for(y in 0..N){
            for(x in 0..N){
                val a = box(p.Add_VectorVector(Vector(Y=(y.toDouble()-N/2) * 50, Z= x.toDouble() * 50 )), Vector( X= s, Y= s, Z= s ), LinearColor( R= 1, G= 1, B= 1 ))
                a.SetActorRotation(Rotator( Yaw= Random.nextDouble() * 360, Pitch=Random.nextDouble() * 180 ), false)
            }
        }
    }

    fun skel(p:Vector) {
        val resource = SkeletalMesh.Load("/Game/Mannequin/Character/Mesh/SK_Mannequin")
        val actor = SkeletalMeshActor(GWorld, p.Add_VectorVector(Vector( Z= 50 )))
        actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false)
        actor.SetActorRotation(Rotator( Yaw = 90 ),false)
    }

    fun rotate(actor:Actor, opts:dynamic):()->Unit {
        fun tick() {
            if (actor.IsValid()) {
                val time = GWorld.GetTimeSeconds().toDouble()
                val rad: Double = time * opts.k as Double
                val r: Double = opts.r
                val p = Vector(Y = cos(rad) * r, Z = sin(rad) * r)
                    .Add_VectorVector(opts.p)
                actor.SetActorLocation(p, false)
            }
        }
        return ::tick
    }

    override fun Tick(deltaTime:Float) {
        tickable.forEach { it() }
    }

    fun cleanup() {
        GWorld.GetAllActorsOfClass(Light).OutActors.forEach { it.DestroyActor() }
    }
}

    