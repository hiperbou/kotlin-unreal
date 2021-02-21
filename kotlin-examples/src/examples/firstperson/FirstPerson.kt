import ue.*

external class FirstPersonBlueprint:Actor {
    val FirstPerson_BP:UClass
    val SK_Mannequin_Arms:SkeletalMesh
    val SK_FPGun:SkeletalMesh
    val FirstPerson_AnimBP:AnimBlueprint
    val FirstPersonFire_Montage:AnimMontage
    val FirstPersonTemplateWeaponFire02:SoundBase
}

class FirstPerson:KotlinObject() {
    val actor:Character

    val myCamera:CameraComponent /*EditAnywhere+CameraComponent*/
    val myFPMesh:SkeletalMeshComponent /*EditAnywhere+SkeletalMeshComponent*/
    val myFPGunMesh:SkeletalMeshComponent /*EditAnywhere+SkeletalMeshComponent*/

    val fireSound:SoundBase /*EditAnywhere+SoundBase*/
    val fireAnimation:AnimMontage /*EditAnywhere+AnimMontage*/

    val gunOffset:Vector /*EditAnywhere+Vector*/
    var weaponRange:Double = 0.0 /*EditAnywhere+float*/
    var weaponDamage:Double = 0.0 /*EditAnywhere+float*/

    var yaw = 180.0

    val keyLeft = KeyListener("A")
    val keyRight = KeyListener("D")
    val keyUp = KeyListener("W")
    val keyDown = KeyListener("S")
    val keyJump = KeyListener("SpaceBar")
    val keyFire = KeyListener("LeftMouseButton")

    init {
        val owner = GetOwner<FirstPersonBlueprint>()

        actor = Root.Spawn(owner.FirstPerson_BP,Vector(), Rotator()).asDynamic()
        //Set size for collision capsule
        actor.CapsuleComponent.CapsuleRadius = 42.0
        actor.CapsuleComponent.CapsuleHalfHeight = 96.0
        //this.CapsuleComponent.bVisible = true
        //this.CapsuleComponent.bHiddenInGame = false

        // Create a CameraComponent named 'FP_Camera'
        //val tempCamera = CameraComponent.CreateDefaultSubobject("FP_Camera")
        myCamera = actor.GetComponentByClass(CameraComponent) as CameraComponent
        //attach 'FP_Camera' to capsule
        myCamera.AttachParent = actor.CapsuleComponent
        //change relative location
        myCamera.RelativeLocation = Vector(0, 0, 64)
        // Camera rotate the myFirstPerson character?
        myCamera.bUsePawnControlRotation = true

        //create first person mesh
        //val tempFPMesh = SkeletalMeshComponent.CreateDefaultSubobject("FP_Mesh")
        myFPMesh = actor.GetComponentByName(SkeletalMeshComponent, "Mesh2P")

        //make only owner can see first person arms, turn off shadows
        myFPMesh.bOnlyOwnerSee = true
        myFPMesh.AttachParent = myCamera
        myFPMesh.bCastDynamicShadow = false
        myFPMesh.CastShadow = false
        //initialize first person position and rotation to look right
        myFPMesh.RelativeLocation = Vector(0, -4, -156)
        myFPMesh.RelativeRotation = Rotator(5, 2, -20)

        //create gun mesh component
        //val tempFPGunMesh = SkeletalMeshComponent.CreateDefaultSubobject("FPGun_Mesh")
        myFPGunMesh = actor.GetComponentByName(SkeletalMeshComponent, "FP_Gun")
        //make only owner can see first person gun, turn off shadows
        //in first person shooter game there is another mesh usually called 3rd person mesh
        //the 3rd person mesh is what is shown in game to other players
        myFPGunMesh.bOnlyOwnerSee = true
        myFPGunMesh.bCastDynamicShadow = false
        myFPGunMesh.CastShadow = false
        myFPGunMesh.AttachParent = myFPMesh
        myFPGunMesh.AttachSocketName = "GripPoint"

        //load assets from editor.  REQUIRE assets from FirstPerson Blueprint template
        val FP_mesh = owner.SK_Mannequin_Arms //SkeletalMesh.Load("/Game/FirstPerson/Character/Mesh/SK_Mannequin_Arms.SK_Mannequin_Arms")
        val FPGun_mesh = owner.SK_FPGun //SkeletalMesh.Load("/Game/FirstPerson/FPWeapon/Mesh/SK_FPGun.SK_FPGun")
        val ANI_AnimationBP = owner.FirstPerson_AnimBP.GeneratedClass //AnimBlueprint.Load("/Game/FirstPerson/Animations/FirstPerson_animBP.FirstPerson_AnimBP").GeneratedClass
        fireSound = owner.FirstPersonTemplateWeaponFire02 //SoundBase.Load("/Game/FirstPerson/Audio/FirstPersonTemplateWeaponFire02.FirstPersonTemplateWeaponFire02")
        fireAnimation = owner.FirstPersonFire_Montage //AnimMontage.Load("/Game/FirstPerson/Animations/FirstPersonFire_Montage.FirstPersonFire_Montage")

        //set loaded assets into class mesh
        myFPMesh.SetSkeletalMesh(FP_mesh, false)
        myFPGunMesh.SetSkeletalMesh(FPGun_mesh, false)

        //set loaded animation blueprint into class
        myFPMesh.SetAnimClass(ANI_AnimationBP)

        //initialize weapon properties data
        weaponRange = 5000.0
        weaponDamage = 500000.0
        gunOffset = Vector(100, 30, 10)

        //Create a wall of cubes just for fun
        createWall()

        val myPlayerController = GWorld.GetPlayerController(0)
        //possess the MyThirdPerson character that just spawned
        myPlayerController.Possess(actor)
    }

    override fun Tick(deltaTime:Float) {
        if(keyLeft.down()) {
            MoveRight(-1.0)
        }
        if(keyRight.down()) {
            MoveRight(1.0)
        }
        if(keyUp.down()) {
            MoveForward(1.0)
        }
        if(keyDown.down()) {
            MoveForward(-1.0)
        }
        if(keyJump.pressed()) {
            startJump()
        }
        if(keyJump.released()) {
            stopJump()
        }
        if(keyFire.pressed()) {
            onFire()
        }
        Turn(axisTurn())
        LookUp(axisLookUp())
    }

    fun Turn(value:Double)
    {
        //add Turn value to controller yaw input
        actor.AddControllerYawInput(value)
    }

    fun LookUp(value:Double)
    {
        //add LookUp value to controller pitch input
        actor.AddControllerPitchInput(value)
    }
    fun MoveForward(value:Double )
    {
        //get pawn control rotation
        val tPawnRotator = actor.GetControlRotation()

        //zero out roll and pitch, leaving yaw untouched
        tPawnRotator.Pitch = 0
        tPawnRotator.Roll = 0

        //find forward vector from rotation
        val tForwardVector = tPawnRotator.GetForwardVector()

        //move pawn forward (value > 0) or backward(value < 0)
        actor.AddMovementInput(tForwardVector, value, false)
    }

    fun MoveRight(value:Double)
    {
        //get pawn control rotation
        val tPawnRotator = actor.GetControlRotation()

        //zero out roll and pitch, leaving yaw untouched
        tPawnRotator.Pitch = 0
        tPawnRotator.Roll = 0

        //find right vector from rotation
        val tRightVector = tPawnRotator.GetRightVector()

        //move pawn right (value > 0) or left (value < 0)
        actor.AddMovementInput(tRightVector, value, false)
    }

    fun startJump()
    {
        //execute Jump function from base Character class
        actor.Jump()
    }

    fun stopJump()
    {
        //execute StopJumping function from base Character class
        actor.StopJumping()
    }

    fun onFire() /*ActionBinding[Fire, IE_Pressed]*/
    {
        console.log("shooting projectile")

        // Play a sound if there is one
        GWorld.PlaySoundAtLocation(fireSound, actor.GetActorLocation(), Rotator(0,0,0), 1, 1, 0, fireSound.AttenuationSettings, fireSound.SoundConcurrencySettings, actor)


        // try and play a firing animation if specified
        val tempAnimInstance = this.myFPMesh.GetAnimInstance();
        tempAnimInstance.Montage_Play(this.fireAnimation, 1, "MontageLength", 0, true)


        //simplified raytrace, trace from player camera straight forward by weaponRange (5000 cm)
        //cast this.myCamera into CameraComponent for autocomplete features in Visual Studio Code
        val tempCamera = CameraComponent.C(this.myCamera)

        //get camera world location
        val tempStartTrace = tempCamera.K2_GetComponentLocation()//GetWorldLocation()

        //end location is start location + weaponrange(5000 cm) unit forward
        val tempForwardDirection = tempCamera.K2_GetComponentRotation()/*GetWorldRotation()*/.GetForwardVector()
        val tempOffset = tempForwardDirection.Multiply_VectorFloat(this.weaponRange)
        val tempEndTrace = Vector.Add_VectorVector(tempStartTrace, tempOffset)

        //console.log(tempStartTrace.ToString(), " + ", tempOffset.ToString(), " = ", tempEndTrace.ToString())

        //create a HitResult to store trace result
        val tempHitResult = HitResult()

        //line trace and return result into tempHitResult
        //'TraceTypeQuery1' is the 'Visibility' channel
        //'TraceTypeQuery2' is the 'Camera' channel
        GWorld.LineTraceSingle/*LineTraceByChannel*/(tempStartTrace, tempEndTrace, "TraceTypeQuery2", false, arrayOf(actor), "ForDuration", tempHitResult, true, LinearColor(1, 0, 0), LinearColor(1, 0, 0), 3)

        //console.log("hitresult = ", tempHitResult.bBlockingHit)

        //store hit actor and component from HitResult
        val damageActor = tempHitResult.Actor
        val damageComponent:PrimitiveComponent? = tempHitResult.Component.asDynamic()

        //if actor&component is valid while simulating physic then apply physic impulse
        if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics(""))
        {
            //console.log("Hitting a physic enabled actor = ", damageActor, ", of component = ", damageComponent.ToString(), "at location =>", tempHitResult.ImpactPoint.ToString())

            //calculate physic impulse from this.weaponDamage
            val tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage)

            //apply physic impulse
            damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, "")
        }
        //in a real game, a gun trace would require 2 traces,
        //1st trace start from the camera and extend x distance forward.  The goal is to check if player can hit anything,
        //the 2nd trace is from the muzzle of the gun to the hit location, just to make sure nothing is between the gun muzzle to hit location

    }

    fun cleanup():Unit {
        console.log("<<<cleanup>>>")
        actor.K2_DestroyActor()
    }

    fun axisTurn():Double {
        //return GWorld.GetPlayerController(0).GetInputAxisValue("Turn").toDouble()
        return GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX.toDouble()
    }
    fun axisLookUp():Double {
        //return GWorld.GetPlayerController(0).GetInputAxisValue("LookUp").toDouble()
        return -GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY.toDouble()
    }

    fun createWall(){
        for(y in 0..9){
            for (z in 0..3){
                createCube(Vector(450.0, -450.0 + y *100, 70 + z * 100))
            }
        }
    }

    fun createCube(position:Vector):Actor {
        val bp = Blueprint.Load("/Game/CubeBP")
        bp.GeneratedClass
        return bp.GenerateClass(GWorld, position, Rotator())
    }
}