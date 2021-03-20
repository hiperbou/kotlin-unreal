import kotlinx.coroutines.delay
import ue.*

external class InteractiveChestBlueprint:Actor{
    val Top:SceneComponent
    val Sequence:LevelSequence
}

class InteractiveChest: InteractiveObjectBase() {
    val actor = GetOwner<InteractiveChestBlueprint>()
    var opened = false
    var sequencePlayed = false
    override suspend fun doAction() {
        if(!sequencePlayed) {
            sequencePlayed = true
            playSequence(actor.Sequence)
        }
        (if(opened) (-110..0) else (0 downTo -110)).forEach {
            actor.Top.SetRelativeRotation(Rotator(0, it,0), false)
            delay(16)
        }
        opened = !opened
    }

    private fun playSequence(sequence:LevelSequence){
        val settings = MovieSceneSequencePlaybackSettings().apply {
            bDisableMovementInput = true
            bDisableLookAtInput = true
        }
        LevelSequencePlayer.CreateLevelSequencePlayer(GWorld, sequence, settings).OutActor.apply {
            SequencePlayer.Play()
            SequencePlayer.OnFinished.Add { DestroyActor() }
        }
    }
}