package examples.adventure

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch


object InteractionManager {
    var selected:InteractiveObject? = null

    fun select(interactiveObject: InteractiveObject) {
        selected?.highlight(false)
        selected = interactiveObject.apply { highlight(true) }
    }

    fun release(interactiveObject: InteractiveObject) {
        interactiveObject.highlight(false)
        if(selected == interactiveObject) selected = null
    }

    private var interacting = false
    fun interact() {
        if(interacting) return
        GlobalScope.launch {
            interacting = true
            selected?.doAction()
            interacting = false
        }
    }
}

interface InteractiveObject {
    fun highlight(enable:Boolean)
    suspend fun doAction()
}
