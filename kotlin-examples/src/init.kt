/**
 * Created by hiperbou on 29/01/2017.
 */

fun init():Function<Unit>{
    println("<<<INIT>>>")
    return ::cleanup
}

fun cleanup() {
    println("<<<Cleanup>>>")
}