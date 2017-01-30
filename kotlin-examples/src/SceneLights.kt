/**
 * Created by hiperbou on 30/01/2017.
 */
import ue.*
class SceneLights() {
    init {
        GWorld.GetAllActorsOfClass(Light).OutActors.forEach { it.DestroyActor() }

        rotate(light(LinearColor().apply{R=1}),object{val k=1.8; val r=150;val p = Vector().apply{X=400.0;Y=-100.0;Z=100.0}})
        rotate(light(LinearColor().apply{G=1}),object{val k=1.5; val r=30;val p = Vector().apply{X=400.0;Z=150.0}})
        rotate(light(LinearColor().apply{B=1}),object{val k=0.1; val r=230;val p = Vector().apply{ X=400.0; Z=250.0}})
        bg(Vector().apply{X=400.0;Z=-150.0;Y=-100.0})
        skel(Vector().apply{X=400.0;val Z=-150.0;val Y=-100.0})
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
        val mi = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, mtrl)
        mi.SetVectorParameterValue("color", color)
        smc.SetMaterial(0, mi)
        actor.SetActorScale3D(size)
        return actor
    }

    fun bg(p:Vector) {
        val size = 1000.0
        val boxsize = 100.0
        val scale = size / boxsize
        // back
        box(p.Add_VectorVector(Vector().apply{ X=size / 2; Z=size / 2 }), Vector().apply{ X= 1.0; Y= scale; Z= scale }, LinearColor().apply{ R= 0.5; G= 0.7 })
        // left
        box(p.Add_VectorVector(Vector().apply{ Y=-size / 2; Z=size / 2 }), Vector().apply{ X= scale; Y= 1.0; Z= scale }, LinearColor().apply{ B= 1 })
        // floor
        box(p, Vector().apply{ X= scale; Y= scale; Z= 1.0 }, LinearColor().apply{ R= 1 })

        val N = 10
        val s = 0.04
        for(y in 0..N){
            for(x in 0..N){
                val a = box(p.Add_VectorVector(Vector().apply{ Y=(y.toDouble()-N/2) * 50; Z= x.toDouble() * 50 }), Vector().apply{ X= s; Y= s; Z= s }, LinearColor().apply{ R= 1; G= 1; B= 1 })
                a.SetActorRotation(Rotator().apply{ Yaw=Math.random() * 360; Pitch=Math.random() * 180 }, false)
            }
        }
    }

    fun skel(p:Vector) {
        val resource = SkeletalMesh.Load("/Game/Mannequin/Character/Mesh/SK_Mannequin")
        val actor = SkeletalMeshActor(GWorld, p.Add_VectorVector(Vector().apply{ Z= 50.0 }))
        actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false)
        actor.SetActorRotation(Rotator().apply{ Yaw = 90 },false)
    }

    fun rotate(actor:Actor, opts:dynamic) {
        var time:Double = 0.0
        fun tick () {
            if (!actor.IsValid()) return
            time += 0.016
            val rad:Double = time * opts.k as Double
            val r:Double = opts.r
            val p = Vector().apply { Y = Math.cos(rad) * r; Z = Math.sin(rad) * r }
                    .Add_VectorVector(opts.p)
            actor.SetActorLocation(p,false)
            process.nextTick { tick() }
        }
        tick()
    }

    fun cleanup():Unit {
        GWorld.GetAllActorsOfClass(Light).OutActors.forEach { it.DestroyActor() }
    }
}

    