package ue

/**
 * Created by hiperbou on 29/01/2017.
 */
fun <T> Blueprint.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    //return js("new \$receiver_0.GeneratedClass(world, position, rotation)")
    val receiver = this
    return js("new receiver.GeneratedClass(world, position, rotation)")
}

fun <T> MovieSceneSpawnable.GenerateClass(world: World, position: Vector, rotation: Rotator):T{
    //return GeneratedClass(world,position,rotation) as T
    val receiver = this
    return js("new receiver.GeneratedClass(world, position, rotation)")
}


fun Vector(X:Number=0.0,Y:Number=0.0,Z:Number=0.0):Vector {
    return ue.Vector().apply { this.X=X.toDouble(); this.Y=Y.toDouble(); this.Z=Z.toDouble() }
}

inline fun Vector.withX(X:Number = 0.0) = Vector(X, Y, Z)
inline fun Vector.withY(Y:Number = 0.0) = Vector(X, Y, Z)
inline fun Vector.withZ(Z:Number = 0.0) = Vector(X, Y, Z)

fun LinearColor(R:Number=0.0, G:Number=0.0, B:Number=0.0, A:Number=1.0):LinearColor {
    return ue.LinearColor().apply { this.R=R; this.G=G; this.B=B ; this.A=A }
}

inline fun LinearColor.withR(R:Number = 0.0) = LinearColor(R, G, B, A)
inline fun LinearColor.withG(G:Number = 0.0) = LinearColor(R, G, B, A)
inline fun LinearColor.withB(B:Number = 0.0) = LinearColor(R, G, B, A)
inline fun LinearColor.withA(A:Number = 0.0) = LinearColor(R, G, B, A)

fun Rotator(Roll:Number=0.0,Pitch:Number=0.0,Yaw:Number=0.0):Rotator {
    return ue.Rotator().apply { this.Pitch=Pitch; this.Roll=Roll; this.Yaw=Yaw }
}

inline fun Rotator.withRoll(Roll:Number = 0.0) = Rotator(Roll, Pitch, Yaw)
inline fun Rotator.withPitch(Pitch:Number = 0.0) = Rotator(Roll, Pitch, Yaw)
inline fun Rotator.withYaw(Yaw:Number = 0.0) = Rotator(Roll, Pitch, Yaw)

fun SpawnSound2D(WorldContextObject:UObject, Sound:SoundBase)= GameplayStatics.SpawnSound2D(
        WorldContextObject, Sound,
        1, 1, 0, undefined.asDynamic(),
        false, true)



fun <T>Actor.GetComponentByName(ComponentClass:Any, Name:String):T
{
    val nameToCheck = Name.toLowerCase()
    val components = GetComponentsByClass(ComponentClass).filter { it.GetName().toLowerCase()==nameToCheck }
    if (components.isEmpty()) return null as T
    return components.first().asDynamic()
}

fun <T>Actor.GetComponentByClass(ComponentClass: Any):T{
    return GetComponentByClass(ComponentClass).asDynamic()
}

fun <T>Actor.GetComponentsByClass(ComponentClass: Any):Array<T>{
    return GetComponentsByClass(ComponentClass).asDynamic()
}

fun Key(keyName:String):Key = Key().apply { KeyName=keyName }

class KeyListener(keyName:String, private val playerControllerIndex:Int = 0) {
    private val k = Key(keyName)
    fun down(): Boolean {
        return GWorld.GetPlayerController(playerControllerIndex).IsInputKeyDown(k)
    }

    fun pressed(): Boolean {
        return GWorld.GetPlayerController(playerControllerIndex).WasInputKeyJustPressed(k)
    }

    fun released(): Boolean {
        return GWorld.GetPlayerController(playerControllerIndex).WasInputKeyJustReleased(k)
    }
}
