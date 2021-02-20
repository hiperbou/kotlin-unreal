import ue.*

class ThirdPerson:KotlinObject() {
    lateinit var actor:Character
    //var myArm:SpringArmComponent /*EditAnywhere+SpringArmComponent*/
    //var myCamera:CameraComponent /*EditAnywhere+CameraComponent*/
    var yaw = 180.0

    lateinit var keyLeft:KeyListener
    lateinit var keyRight:KeyListener
    lateinit var keyUp:KeyListener
    lateinit var keyDown:KeyListener
    lateinit var keyJump:KeyListener


    override fun BeginPlay() {
        yaw = 180.0

        keyLeft = KeyListener("A")
        keyRight = KeyListener("D")
        keyUp = KeyListener("W")
        keyDown = KeyListener("S")
        keyJump = KeyListener("SpaceBar")
        //actor = Character(GWorld, Vector(), Rotator())
        val bp = Blueprint.Load("/Game/ThirdPersonBP")
        actor = bp.GenerateClass(GWorld,
            Vector( X=1 ),
            Rotator( Yaw=180 ))
        //Set size for collision capsule
        actor.CapsuleComponent.CapsuleRadius = 42.0
        actor.CapsuleComponent.CapsuleHalfHeight = 96.0
        //this.CapsuleComponent.bVisible = true
        //this.CapsuleComponent.bHiddenInGame = false

        // Don't rotate when the controller rotates. Let that just affect the camera.
        actor.bUseControllerRotationPitch = false
        actor.bUseControllerRotationRoll = false
        actor.bUseControllerRotationYaw = false

        // Configure character movement
        actor.CharacterMovement.bOrientRotationToMovement = true // Character moves in the direction of input...
        actor.CharacterMovement.RotationRate = Rotator.MakeRotator(0, 0, 540)
        actor.CharacterMovement.JumpZVelocity = 600
        actor.CharacterMovement.AirControl = 0.2

        // Create a camera boom (pulls in towards the player if there is a collision)
        //val tempArm = SpringArmComponent.CreateDefaultSubobject("SpringArm")
        /*val tempArm = SpringArmComponent(actor)
        //attach spring arm to character capsule.  Replace SetupAttachment()
        tempArm.AttachParent = actor.CapsuleComponent
        // The camera follows at this distance behind the character
        tempArm.TargetArmLength = 300.0
        // Rotate the arm based on the controller
        tempArm.bUsePawnControlRotation = true
        //assign spring arm to properties variable 'myArm' for use at runtime
        this.myArm = tempArm*/

        //// Create a follow camera named 'TP_Camera'
        //val tempCamera = CameraComponent.CreateDefaultSubobject("TP_Camera")
        /*val tempCamera = CameraComponent()
        //attach 'TP_Camera' to spring arm
        tempCamera.AttachParent = this.myArm
        // Camera does not rotate relative to arm
        tempCamera.bUsePawnControlRotation = false
        //assign camera to properties variable 'myCamera'
        this.myCamera = tempCamera*/

        //We can load asset directly into Java.  Can be positive or negative depend on your style
        //Load skeletal mesh and animation blueprint from ThirdPerson sample into java
        //Require assets from ThirdPerson template either Blueprint or C++ will do
        //val SK_mesh = SkeletalMesh.Load("/Game/Mannequin/Character/Mesh/SK_Mannequin.SK_Mannequin")
        val ANI_AnimationBP = AnimBlueprint.Load("/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP").GeneratedClass

        //set character mesh to the SK_Mannequin
        //actor.Mesh.SetSkeletalMesh(SK_mesh, false)

        //set animation class to ThirdPerson_AnimBP
        actor.Mesh.SetAnimClass(ANI_AnimationBP)

        //rotate the skeletal mesh so it is facing front
        actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270)

        //lower the skeletal mesh to the ground
        actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96)

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

}