import examples.adventure.InteractionManager
import ue.*

class AdventureCharacter: KotlinObject() {

    val keyLeft = KeyListener("A")
    val keyRight = KeyListener("D")
    val keyUp = KeyListener("W")
    val keyDown = KeyListener("S")
    val keyInteract = KeyListener("E")

    var actor = GetOwner<Character>()
    val movementComponent = actor.GetMovementComponent()

    init {
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

        val ANI_AnimationBP = AnimBlueprint.Load("/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP").GeneratedClass

        actor.Mesh.SetAnimInstanceClass(ANI_AnimationBP)

        actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270)

        actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96)

        val myPlayerController = GWorld.GetPlayerController(0)

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
        if(keyInteract.pressed()) {
            InteractionManager.interact()
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

    fun cleanup() {
        console.log("<<<cleanup>>>")
        actor.DestroyActor()
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

