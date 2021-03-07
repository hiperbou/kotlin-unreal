package examples.adventure

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch


object InteractionManager: CoroutineScope {
    var selected:InteractiveObject? = null

    fun select(interactiveObject: InteractiveObject) {
        launch {
            job?.join()
            selected?.highlight(false)
            selected = interactiveObject.apply { highlight(true) }
        }
    }

    fun release(interactiveObject: InteractiveObject) {
        launch {
            job?.join()
            interactiveObject.highlight(false)
            if (selected == interactiveObject) selected = null
        }
    }

    private var interacting = false
    private var job: Job? = null
    fun interact() {
        if(interacting || selected==null) return
        interacting = true
        job = launch {
            selected?.doAction()
            interacting = false
        }
    }
    override val coroutineContext = Dispatchers.Default
}

interface InteractiveObject {
    fun highlight(enable:Boolean)
    suspend fun doAction()
}
