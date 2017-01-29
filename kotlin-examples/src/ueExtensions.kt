import ue.*

/**
 * Created by hiperbou on 29/01/2017.
 */
fun <T> Blueprint.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    return kotlin.js.js("new \$receiver.GeneratedClass(world, position, rotation)")
}

fun <T> MovieSceneSpawnable.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    return kotlin.js.js("new \$receiver.GeneratedClass(world, position, rotation)")
}
