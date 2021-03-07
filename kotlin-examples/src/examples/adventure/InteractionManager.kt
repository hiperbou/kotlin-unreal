package examples.adventure

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch


object InteractionManager: CoroutineScope {
    private val nullInteractiveObject = object:InteractiveObject{}

    var selected:InteractiveObject = nullInteractiveObject

    fun select(interactiveObject: InteractiveObject) {
        launch {
            job.join()
            selected.highlight(false)
            selected = interactiveObject.apply { highlight(true) }
        }
    }

    fun release(interactiveObject: InteractiveObject) {
        launch {
            job.join()
            interactiveObject.highlight(false)
            if (selected == interactiveObject) selected = nullInteractiveObject
        }
    }

    private var job: Job = Job().apply { complete() }
    fun interact() {
        if(job.isActive || selected == nullInteractiveObject) return
        job = launch {
            selected.doAction()
        }
    }
    override val coroutineContext = Dispatchers.Default
}

interface InteractiveObject {
    fun highlight(enable:Boolean) {}
    suspend fun doAction() {}
}
