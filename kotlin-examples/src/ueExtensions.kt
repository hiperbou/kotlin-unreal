package ue

/**
 * Created by hiperbou on 29/01/2017.
 */
fun <T> Blueprint.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    return js("new \$receiver.GeneratedClass(world, position, rotation)")
}

fun <T> MovieSceneSpawnable.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    return js("new \$receiver.GeneratedClass(world, position, rotation)")
}


fun Vector(X:Number=0.0,Y:Number=0.0,Z:Number=0.0):Vector {
    return ue.Vector().apply { this.X=X.toDouble(); this.Y=Y.toDouble(); this.Z=Z.toDouble() }
}

fun LinearColor(R:Number=0.0, G:Number=0.0, B:Number=0.0, A:Number=1.0):LinearColor {
    return ue.LinearColor().apply { this.R=R; this.G=G; this.B=B ; this.A=A }
}

fun Rotator(Roll:Number=0.0,Pitch:Number=0.0,Yaw:Number=0.0):Rotator {
    return ue.Rotator().apply { this.Pitch=Pitch; this.Roll=Roll; this.Yaw=Yaw }
}
