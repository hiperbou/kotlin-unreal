package ue

import org.w3c.dom.events.Event

/**
 * Created by hiperbou on 27/01/2017.
 */
external class UClass{}


external interface EventListenerObject {
    fun handleEvent(evt: Event)
}