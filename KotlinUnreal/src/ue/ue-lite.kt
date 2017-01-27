package ue

external open class UObject {
    constructor()
    constructor(Outer: UObject)
}
external open class World : UObject {

}
external interface `T$2` {
    var R: Number
    var G: Number
    var B: Number
    var A: Number
}
external interface `T$3` {
    var RGB: LinearColor
}
external interface `T$4` {
    var H: Number
    var S: Number
    var V: Number
    var A: Number
}
external interface `T$5` {
    var HSV: LinearColor
}
external interface `T$6` {
    var R: Number
    var G: Number
    var B: Number
    var A: Number
}
external interface `T$7` {
    var RGB: LinearColor
}
external interface `T$8` {
    var H: Number
    var S: Number
    var V: Number
    var A: Number
}
external interface `T$9` {
    var HSV: LinearColor
}

external open class Color {
    open var B: Number
    open var G: Number
    open var R: Number
    open var A: Number
    open fun clone(): Color
    open fun ToLinearColor(): LinearColor
    companion object {
        fun C(Other: UObject): Color
        fun ToLinearColor(InColor: Color): LinearColor
    }
}
external open class LinearColor {
    open var R: Number
    open var G: Number
    open var B: Number
    open var A: Number
    open fun clone(): LinearColor
    open fun ToText(): String
    open fun ToString(): String
    open fun BreakColor(R: Number?, G: Number?, B: Number?, A: Number?): `T$2`
    open fun CInterpTo(Target: LinearColor, DeltaTime: Number, InterpSpeed: Number): LinearColor
    open fun ToColor(): Color
    open fun ToVector(): Vector
    open fun HSVtoRGB(RGB: LinearColor?): `T$3`
    open fun Lerp(B: LinearColor, Alpha: Number): LinearColor
    open fun LerpUsingHSV(B: LinearColor, Alpha: Number): LinearColor
    open fun Multiply_LinearColorFloat(B: Number): LinearColor
    open fun Multiply_LinearColorLinearColor(B: LinearColor): LinearColor
    open fun RGBToHSV(H: Number?, S: Number?, V: Number?, A: Number?): `T$4`
    open fun RGBtoHSV(HSV: LinearColor?): `T$5`
    open fun SelectColor(B: LinearColor, bPickA: Boolean): LinearColor
    companion object {
        fun C(Other: UObject): LinearColor
        fun ToText(InColor: LinearColor): String
        fun ToString(InColor: LinearColor): String
        fun BreakColor(InColor: LinearColor, R: Number?, G: Number?, B: Number?, A: Number?): `T$6`
        fun CInterpTo(Current: LinearColor, Target: LinearColor, DeltaTime: Number, InterpSpeed: Number): LinearColor
        fun ToColor(InLinearColor: LinearColor): Color
        fun ToVector(InLinearColor: LinearColor): Vector
        fun HSVtoRGB(HSV: LinearColor, RGB: LinearColor?): `T$7`
        fun Lerp(A: LinearColor, B: LinearColor, Alpha: Number): LinearColor
        fun LerpUsingHSV(A: LinearColor, B: LinearColor, Alpha: Number): LinearColor
        fun Multiply_LinearColorFloat(A: LinearColor, B: Number): LinearColor
        fun Multiply_LinearColorLinearColor(A: LinearColor, B: LinearColor): LinearColor
        fun RGBToHSV(InColor: LinearColor, H: Number?, S: Number?, V: Number?, A: Number?): `T$8`
        fun RGBtoHSV(RGB: LinearColor, HSV: LinearColor?): `T$9`
        fun SelectColor(A: LinearColor, B: LinearColor, bPickA: Boolean): LinearColor
        fun ToLinearColor(InFloat: Number): LinearColor
        fun HSVToRGB(H: Number, S: Number, V: Number, A: Number): LinearColor
        fun MakeColor(R: Number, G: Number, B: Number, A: Number): LinearColor
    }
}
external open class Quat {
    open var X: Number
    open var Y: Number
    open var Z: Number
    open var W: Number
    open fun clone(): Quat
    companion object {
        fun C(Other: UObject): Quat
    }
}
external interface `T$11` {
    var InitialSeed: Number
}
external interface `T$12` {
    var Stream: RandomStream
}
external interface `T$13` {
    var Stream: RandomStream
}
external interface `T$14` {
    var InitialSeed: Number
}
external interface `T$15` {
    var Stream: RandomStream
}
external interface `T$16` {
    var Stream: RandomStream
}
external interface `T$17` {
    var Roll: Number
    var Pitch: Number
    var Yaw: Number
}
external interface `T$18` {
    var X: Vector
    var Y: Vector
    var Z: Vector
}
external interface `T$19` {
    var X: Vector
    var Y: Vector
    var Z: Vector
}
external interface `T$20` {
    var DeviceRotation: Rotator
    var DevicePosition: Vector
}
external interface `T$21` {
    var Roll: Number
    var Pitch: Number
    var Yaw: Number
}
external interface `T$22` {
    var X: Vector
    var Y: Vector
    var Z: Vector
}
external interface `T$23` {
    var X: Vector
    var Y: Vector
    var Z: Vector
}
external interface `T$24` {
    var DeviceRotation: Rotator
    var DevicePosition: Vector
}
external interface `T$26` {
    var Location: Vector
    var Rotation: Rotator
    var Scale: Vector
}
external interface `T$27` {
    var Location: Vector
    var Rotation: Rotator
    var Scale: Vector
}
external interface `T$28` {
    var X: Number
    var Y: Number
}
external interface `T$29` {
    var X: Number
    var Y: Number
}
external interface `T$30` {
    var SpringState: VectorSpringState
}
external interface `T$31` {
    var SpringState: VectorSpringState
}
external open class VectorSpringState {
    open fun clone(): VectorSpringState
    open fun ResetVectorSpringState(): `T$30`
    companion object {
        fun C(Other: UObject): VectorSpringState
        fun ResetVectorSpringState(SpringState: VectorSpringState?): `T$31`
    }
}
external interface `T$32` {
    var IntersectionPoint: Vector
    var `$`: Boolean
}
external interface `T$33` {
    var X: Number
    var Y: Number
    var Z: Number
}
external interface `T$34` {
    var Segment1Point: Vector
    var Segment2Point: Vector
}
external interface `T$35` {
    var Yaw: Number
    var Pitch: Number
}
external interface `T$36` {
    var T: Number
    var Intersection: Vector
    var `$`: Boolean
}
external interface `T$37` {
    var T: Number
    var Intersection: Vector
    var `$`: Boolean
}
external interface `T$38` {
    var SpringState: VectorSpringState
    var `$`: Vector
}
external interface `T$39` {
    var CameraOrigin: Vector
    var CameraRotation: Rotator
    var HFOV: Number
    var VFOV: Number
    var CameraDistance: Number
    var NearPlane: Number
    var FarPlane: Number
}
external interface `T$40` {
    var Origin: Vector
    var Rotation: Rotator
    var LeftFOV: Number
    var RightFOV: Number
    var TopFOV: Number
    var BottomFOV: Number
    var Distance: Number
    var NearPlane: Number
    var FarPlane: Number
    var IsActive: Boolean
}
external interface `T$41` {
    var IntersectionPoint: Vector
    var `$`: Boolean
}
external interface `T$42` {
    var X: Number
    var Y: Number
    var Z: Number
}
external interface `T$43` {
    var Segment1Point: Vector
    var Segment2Point: Vector
}
external interface `T$44` {
    var Yaw: Number
    var Pitch: Number
}
external interface `T$45` {
    var T: Number
    var Intersection: Vector
    var `$`: Boolean
}
external interface `T$46` {
    var T: Number
    var Intersection: Vector
    var `$`: Boolean
}
external interface `T$47` {
    var SpringState: VectorSpringState
    var `$`: Vector
}
external interface `T$48` {
    var CameraOrigin: Vector
    var CameraRotation: Rotator
    var HFOV: Number
    var VFOV: Number
    var CameraDistance: Number
    var NearPlane: Number
    var FarPlane: Number
}
external interface `T$49` {
    var Origin: Vector
    var Rotation: Rotator
    var LeftFOV: Number
    var RightFOV: Number
    var TopFOV: Number
    var BottomFOV: Number
    var Distance: Number
    var NearPlane: Number
    var FarPlane: Number
    var IsActive: Boolean
}
external open class Plane : Vector {
    open var W: Number
    override fun clone(): Plane
    companion object {
        fun C(Other: UObject): Plane
    }
}
external open class Transform {
    open var Rotation: Quat
    open var Translation: Vector
    open var Scale3D: Vector
    open fun clone(): Transform
    open fun ToText(): String
    open fun ToString(): String
    open fun BreakTransform(Location: Vector?, Rotation: Rotator?, Scale: Vector?): `T$26`
    open fun ComposeTransforms(B: Transform): Transform
    open fun ConvertTransformToRelative(ParentTransform: Transform): Transform
    open fun EqualTransform(B: Transform): Boolean
    open fun InverseTransformDirection(Direction: Vector): Vector
    open fun InverseTransformLocation(Location: Vector): Vector
    open fun InvertTransform(): Transform
    open fun NearlyEqual(B: Transform, LocationTolerance: Number, RotationTolerance: Number, Scale3DTolerance: Number): Boolean
    open fun SelectTransform(B: Transform, bPickA: Boolean): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Transform
    /*open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Transform
    open fun Ease(B: Transform, Alpha: Number, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Transform
    */
    open fun TInterpTo(Target: Transform, DeltaTime: Number, InterpSpeed: Number): Transform
    open fun Lerp(B: Transform, Alpha: Number, InterpMode: Any /* "QuatInterp" */): Transform
    /*open fun Lerp(B: Transform, Alpha: Number, InterpMode: Any /* "EulerInterp" */): Transform
    open fun Lerp(B: Transform, Alpha: Number, InterpMode: Any /* "DualQuatInterp" */): Transform
    */
    open fun TransformDirection(Direction: Vector): Vector
    open fun TransformLocation(Location: Vector): Vector
    companion object {
        fun C(Other: UObject): Transform
        fun ToText(InTrans: Transform): String
        fun ToString(InTrans: Transform): String
        fun BreakTransform(InTransform: Transform, Location: Vector?, Rotation: Rotator?, Scale: Vector?): `T$27`
        fun ComposeTransforms(A: Transform, B: Transform): Transform
        fun ConvertTransformToRelative(Transform: Transform, ParentTransform: Transform): Transform
        fun EqualTransform(A: Transform, B: Transform): Boolean
        fun InverseTransformDirection(T: Transform, Direction: Vector): Vector
        fun InverseTransformLocation(T: Transform, Location: Vector): Vector
        fun InvertTransform(T: Transform): Transform
        fun NearlyEqual(A: Transform, B: Transform, LocationTolerance: Number, RotationTolerance: Number, Scale3DTolerance: Number): Boolean
        fun SelectTransform(A: Transform, B: Transform, bPickA: Boolean): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Transform
        /*fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Transform
        fun Ease(A: Transform, B: Transform, Alpha: Number, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Transform
        */
        fun TInterpTo(Current: Transform, Target: Transform, DeltaTime: Number, InterpSpeed: Number): Transform
        fun Lerp(A: Transform, B: Transform, Alpha: Number, InterpMode: Any /* "QuatInterp" */): Transform
        /*fun Lerp(A: Transform, B: Transform, Alpha: Number, InterpMode: Any /* "EulerInterp" */): Transform
        fun Lerp(A: Transform, B: Transform, Alpha: Number, InterpMode: Any /* "DualQuatInterp" */): Transform
        */
        fun TransformDirection(T: Transform, Direction: Vector): Vector
        fun TransformLocation(T: Transform, Location: Vector): Vector
    }
}
external open class Vector2D {
    open var X: Number
    open var Y: Number
    open fun clone(): Vector2D
    open fun ToText(): String
    open fun ToString(): String
    open fun Add_Vector2DFloat(B: Number): Vector2D
    open fun Add_Vector2DVector2D(B: Vector2D): Vector2D
    open fun BreakVector2D(X: Number?, Y: Number?): `T$28`
    open fun ToVector(Z: Number): Vector
    open fun CrossProduct(B: Vector2D): Number
    open fun Divide_Vector2DFloat(B: Number): Vector2D
    open fun DotProduct(B: Vector2D): Number
    open fun Equal(B: Vector2D, ErrorTolerance: Number): Boolean
    open fun Multiply_Vector2DFloat(B: Number): Vector2D
    open fun Multiply_Vector2DVector2D(B: Vector2D): Vector2D
    open fun Normalize2D(): Vector2D
    open fun NotEqual(B: Vector2D, ErrorTolerance: Number): Boolean
    open fun Subtract_Vector2DFloat(B: Number): Vector2D
    open fun Subtract_Vector2DVector2D(B: Vector2D): Vector2D
    open fun Vector2DInterpTo(Target: Vector2D, DeltaTime: Number, InterpSpeed: Number): Vector2D
    open fun Vector2DInterpTo_Constant(Target: Vector2D, DeltaTime: Number, InterpSpeed: Number): Vector2D
    open fun Vector2dLength(): Number
    open fun Vector2dLengthSquared(): Number
    companion object {
        fun C(Other: UObject): Vector2D
        fun ToText(InVec: Vector2D): String
        fun ToString(InVec: Vector2D): String
        fun Add_Vector2DFloat(A: Vector2D, B: Number): Vector2D
        fun Add_Vector2DVector2D(A: Vector2D, B: Vector2D): Vector2D
        fun BreakVector2D(InVec: Vector2D, X: Number?, Y: Number?): `T$29`
        fun ToVector(InVector2D: Vector2D, Z: Number): Vector
        fun CrossProduct(A: Vector2D, B: Vector2D): Number
        fun Divide_Vector2DFloat(A: Vector2D, B: Number): Vector2D
        fun DotProduct(A: Vector2D, B: Vector2D): Number
        fun Equal(A: Vector2D, B: Vector2D, ErrorTolerance: Number): Boolean
        fun Multiply_Vector2DFloat(A: Vector2D, B: Number): Vector2D
        fun Multiply_Vector2DVector2D(A: Vector2D, B: Vector2D): Vector2D
        fun Normalize2D(A: Vector2D): Vector2D
        fun NotEqual(A: Vector2D, B: Vector2D, ErrorTolerance: Number): Boolean
        fun Subtract_Vector2DFloat(A: Vector2D, B: Number): Vector2D
        fun Subtract_Vector2DVector2D(A: Vector2D, B: Vector2D): Vector2D
        fun Vector2DInterpTo(Current: Vector2D, Target: Vector2D, DeltaTime: Number, InterpSpeed: Number): Vector2D
        fun Vector2DInterpTo_Constant(Current: Vector2D, Target: Vector2D, DeltaTime: Number, InterpSpeed: Number): Vector2D
        fun Vector2dLength(A: Vector2D): Number
        fun Vector2dLengthSquared(A: Vector2D): Number
        fun GenerateDynamicImageResource(InDynamicBrushName: String): Vector2D
        fun MakeVector2D(X: Number, Y: Number): Vector2D
    }
}
external open class Vector {
    open var X: Number
    open var Y: Number
    open var Z: Number
    open fun clone(): Vector
    open fun SegmentIntersection2D(SegmentEndA: Vector, SegmentStartB: Vector, SegmentEndB: Vector, IntersectionPoint: Vector? ): `T$32`
    open fun ToText(): String
    open fun ToString(): String
    open fun Add_VectorFloat(B: Number): Vector
    open fun Add_VectorInt(B: Number): Vector
    open fun Add_VectorVector(B: Vector): Vector
    open fun BreakVector(X: Number? , Y: Number?, Z: Number?): `T$33`
    open fun ClampVectorSize(Min: Number, Max: Number): Vector
    open fun ToLinearColor(): LinearColor
    open fun RotationFromXVector(): Rotator
    open fun ToTransform(): Transform
    open fun ToVector2D(): Vector2D
    open fun CrossProduct(B: Vector): Vector
    open fun Divide_VectorFloat(B: Number): Vector
    open fun Divide_VectorInt(B: Number): Vector
    open fun Divide_VectorVector(B: Vector): Vector
    open fun DotProduct(B: Vector): Number
    open fun Equal(B: Vector, ErrorTolerance: Number): Boolean
    open fun FindClosestPointOnLine(LineOrigin: Vector, LineDirection: Vector): Vector
    open fun FindClosestPointOnSegment(SegmentStart: Vector, SegmentEnd: Vector): Vector
    open fun FindLookAtRotation(Target: Vector): Rotator
    open fun FindNearestPointsOnLineSegments(Segment1End: Vector, Segment2Start: Vector, Segment2End: Vector, Segment1Point: Vector? , Segment2Point: Vector? ): `T$34`
    open fun GetUnitDirectionVector(To: Vector): Vector
    open fun GetMaxElement(): Number
    open fun GetMinElement(): Number
    open fun GetPointDistanceToLine(LineOrigin: Vector, LineDirection: Vector): Number
    open fun GetPointDistanceToSegment(SegmentStart: Vector, SegmentEnd: Vector): Number
    open fun GetYawPitchFromVector(Yaw: Number? , Pitch: Number? ): `T$35`
    open fun RotateVector(B: Rotator): Vector
    open fun UnrotateVector(B: Rotator): Vector
    open fun LinePlaneIntersection(LineEnd: Vector, APlane: Plane, T: Number? , Intersection: Vector? ): `T$36`
    open fun LinePlaneIntersection(LineEnd: Vector, PlaneOrigin: Vector, PlaneNormal: Vector, T: Number? , Intersection: Vector? ): `T$37`
    open fun MakePlaneFromPointAndNormal(Normal: Vector): Plane
    open fun MakeRotationFromAxes(Right: Vector, Up: Vector): Rotator
    open fun MakeRotFromX(): Rotator
    open fun MakeRotFromXY(Y: Vector): Rotator
    open fun MakeRotFromXZ(Z: Vector): Rotator
    open fun MakeRotFromY(): Rotator
    open fun MakeRotFromYX(X: Vector): Rotator
    open fun MakeRotFromYZ(Z: Vector): Rotator
    open fun MakeRotFromZ(): Rotator
    open fun MakeRotFromZX(X: Vector): Rotator
    open fun MakeRotFromZY(Y: Vector): Rotator
    open fun MakeTransform(Rotation: Rotator, Scale: Vector): Transform
    open fun MirrorVectorByNormal(InNormal: Vector): Vector
    open fun Multiply_VectorFloat(B: Number): Vector
    open fun Multiply_VectorInt(B: Number): Vector
    open fun Multiply_VectorVector(B: Vector): Vector
    open fun NegateVector(): Vector
    open fun Normalize(): Vector
    open fun NotEqual(B: Vector, ErrorTolerance: Number): Boolean
    open fun ProjectPointOnToPlane(PlaneBase: Vector, PlaneNormal: Vector): Vector
    open fun ProjectVectorOnToPlane(PlaneNormal: Vector): Vector
    open fun ProjectVectorOnToVector(Target: Vector): Vector
    open fun RandomPointInBoundingBox(BoxExtent: Vector): Vector
    open fun RandomUnitVectorInCone(ConeHalfAngle: Number): Vector
    open fun RandomUnitVectorInConeWithYawAndPitch(MaxYawInDegrees: Number, MaxPitchInDegrees: Number): Vector
    open fun RotateVectorAroundAxis(AngleDeg: Number, Axis: Vector): Vector
    open fun RotatorFromAxisAndAngle(Angle: Number): Rotator
    open fun SelectVector(B: Vector, bPickA: Boolean): Vector
    open fun Subtract_VectorFloat(B: Number): Vector
    open fun Subtract_VectorInt(B: Number): Vector
    open fun Subtract_VectorVector(B: Vector): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Vector
    /*open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Vector
    open fun Ease(B: Vector, Alpha: Number, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Vector
    */
    open fun VectorSpringInterp(Target: Vector, SpringState: VectorSpringState? , Stiffness: Number? , CriticalDampingFactor: Number? , DeltaTime: Number? , Mass: Number? ): `T$38`
    open fun VInterpTo(Target: Vector, DeltaTime: Number, InterpSpeed: Number): Vector
    open fun VInterpTo_Constant(Target: Vector, DeltaTime: Number, InterpSpeed: Number): Vector
    open fun Lerp(B: Vector, Alpha: Number): Vector
    open fun VectorLength(): Number
    open fun VectorLengthSquared(): Number
    open fun GetPositionalTrackingCameraParameters(CameraRotation: Rotator? , HFOV: Number? , VFOV: Number? , CameraDistance: Number? , NearPlane: Number? , FarPlane: Number? ): `T$39`
    open fun GetTrackingSensorParameters(Rotation: Rotator? , LeftFOV: Number? , RightFOV: Number? , TopFOV: Number? , BottomFOV: Number? , Distance: Number? , NearPlane: Number? , FarPlane: Number? , IsActive: Boolean? , Index: Number? ): `T$40`
    open fun IsValidAIDirection(): Boolean
    open fun IsValidAILocation(): Boolean
    companion object {
        fun C(Other: UObject): Vector
        fun SegmentIntersection2D(SegmentStartA: Vector, SegmentEndA: Vector, SegmentStartB: Vector, SegmentEndB: Vector, IntersectionPoint: Vector? ): `T$41`
        fun ToText(InVec: Vector): String
        fun ToString(InVec: Vector): String
        fun Add_VectorFloat(A: Vector, B: Number): Vector
        fun Add_VectorInt(A: Vector, B: Number): Vector
        fun Add_VectorVector(A: Vector, B: Vector): Vector
        fun BreakVector(InVec: Vector, X: Number? , Y: Number? , Z: Number? ): `T$42`
        fun ClampVectorSize(A: Vector, Min: Number, Max: Number): Vector
        fun ToLinearColor(InVec: Vector): LinearColor
        fun RotationFromXVector(InVec: Vector): Rotator
        fun ToTransform(InLocation: Vector): Transform
        fun ToVector2D(InVector: Vector): Vector2D
        fun CrossProduct(A: Vector, B: Vector): Vector
        fun Divide_VectorFloat(A: Vector, B: Number): Vector
        fun Divide_VectorInt(A: Vector, B: Number): Vector
        fun Divide_VectorVector(A: Vector, B: Vector): Vector
        fun DotProduct(A: Vector, B: Vector): Number
        fun Equal(A: Vector, B: Vector, ErrorTolerance: Number): Boolean
        fun FindClosestPointOnLine(Point: Vector, LineOrigin: Vector, LineDirection: Vector): Vector
        fun FindClosestPointOnSegment(Point: Vector, SegmentStart: Vector, SegmentEnd: Vector): Vector
        fun FindLookAtRotation(Start: Vector, Target: Vector): Rotator
        fun FindNearestPointsOnLineSegments(Segment1Start: Vector, Segment1End: Vector, Segment2Start: Vector, Segment2End: Vector, Segment1Point: Vector? , Segment2Point: Vector? ): `T$43`
        fun GetUnitDirectionVector(From: Vector, To: Vector): Vector
        fun GetMaxElement(A: Vector): Number
        fun GetMinElement(A: Vector): Number
        fun GetPointDistanceToLine(Point: Vector, LineOrigin: Vector, LineDirection: Vector): Number
        fun GetPointDistanceToSegment(Point: Vector, SegmentStart: Vector, SegmentEnd: Vector): Number
        fun GetYawPitchFromVector(InVec: Vector, Yaw: Number? , Pitch: Number? ): `T$44`
        fun RotateVector(A: Vector, B: Rotator): Vector
        fun UnrotateVector(A: Vector, B: Rotator): Vector
        fun LinePlaneIntersection(LineStart: Vector, LineEnd: Vector, APlane: Plane, T: Number? , Intersection: Vector? ): `T$45`
        fun LinePlaneIntersection(LineStart: Vector, LineEnd: Vector, PlaneOrigin: Vector, PlaneNormal: Vector, T: Number? , Intersection: Vector? ): `T$46`
        fun MakePlaneFromPointAndNormal(Point: Vector, Normal: Vector): Plane
        fun MakeRotationFromAxes(Forward: Vector, Right: Vector, Up: Vector): Rotator
        fun MakeRotFromX(X: Vector): Rotator
        fun MakeRotFromXY(X: Vector, Y: Vector): Rotator
        fun MakeRotFromXZ(X: Vector, Z: Vector): Rotator
        fun MakeRotFromY(Y: Vector): Rotator
        fun MakeRotFromYX(Y: Vector, X: Vector): Rotator
        fun MakeRotFromYZ(Y: Vector, Z: Vector): Rotator
        fun MakeRotFromZ(Z: Vector): Rotator
        fun MakeRotFromZX(Z: Vector, X: Vector): Rotator
        fun MakeRotFromZY(Z: Vector, Y: Vector): Rotator
        fun MakeTransform(Location: Vector, Rotation: Rotator, Scale: Vector): Transform
        fun MirrorVectorByNormal(InVect: Vector, InNormal: Vector): Vector
        fun Multiply_VectorFloat(A: Vector, B: Number): Vector
        fun Multiply_VectorInt(A: Vector, B: Number): Vector
        fun Multiply_VectorVector(A: Vector, B: Vector): Vector
        fun NegateVector(A: Vector): Vector
        fun Normalize(A: Vector): Vector
        fun NotEqual(A: Vector, B: Vector, ErrorTolerance: Number): Boolean
        fun ProjectPointOnToPlane(Point: Vector, PlaneBase: Vector, PlaneNormal: Vector): Vector
        fun ProjectVectorOnToPlane(V: Vector, PlaneNormal: Vector): Vector
        fun ProjectVectorOnToVector(V: Vector, Target: Vector): Vector
        fun RandomPointInBoundingBox(Origin: Vector, BoxExtent: Vector): Vector
        fun RandomUnitVectorInCone(ConeDir: Vector, ConeHalfAngle: Number): Vector
        fun RandomUnitVectorInConeWithYawAndPitch(ConeDir: Vector, MaxYawInDegrees: Number, MaxPitchInDegrees: Number): Vector
        fun RotateVectorAroundAxis(InVect: Vector, AngleDeg: Number, Axis: Vector): Vector
        fun RotatorFromAxisAndAngle(Axis: Vector, Angle: Number): Rotator
        fun SelectVector(A: Vector, B: Vector, bPickA: Boolean): Vector
        fun Subtract_VectorFloat(A: Vector, B: Number): Vector
        fun Subtract_VectorInt(A: Vector, B: Number): Vector
        fun Subtract_VectorVector(A: Vector, B: Vector): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Vector
        /*fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Vector
        fun Ease(A: Vector, B: Vector, Alpha: Number, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Vector
        */
        fun VectorSpringInterp(Current: Vector, Target: Vector, SpringState: VectorSpringState? , Stiffness: Number? , CriticalDampingFactor: Number? , DeltaTime: Number? , Mass: Number? ): `T$47`
        fun VInterpTo(Current: Vector, Target: Vector, DeltaTime: Number, InterpSpeed: Number): Vector
        fun VInterpTo_Constant(Current: Vector, Target: Vector, DeltaTime: Number, InterpSpeed: Number): Vector
        fun Lerp(A: Vector, B: Vector, Alpha: Number): Vector
        fun VectorLength(A: Vector): Number
        fun VectorLengthSquared(A: Vector): Number
        fun GetPositionalTrackingCameraParameters(CameraOrigin: Vector? , CameraRotation: Rotator? , HFOV: Number? , VFOV: Number? , CameraDistance: Number? , NearPlane: Number? , FarPlane: Number? ): `T$48`
        fun GetTrackingSensorParameters(Origin: Vector? , Rotation: Rotator? , LeftFOV: Number? , RightFOV: Number? , TopFOV: Number? , BottomFOV: Number? , Distance: Number? , NearPlane: Number? , FarPlane: Number? , IsActive: Boolean? , Index: Number? ): `T$49`
        fun IsValidAIDirection(DirectionVector: Vector): Boolean
        fun IsValidAILocation(Location: Vector): Boolean
        fun ToVector(InFloat: Number): Vector
        fun CreateVectorFromYawPitch(Yaw: Number, Pitch: Number, Length: Number): Vector
        fun GetVectorArrayAverage(Vectors: Array<Vector>): Vector
        fun MakeVector(X: Number, Y: Number, Z: Number): Vector
        fun RandomUnitVector(): Vector
        //fun GetActorArrayAverageLocation(Actors: Array<Actor>): Vector
    }
}

external open class Rotator {
    open var Pitch: Number
    open var Yaw: Number
    open var Roll: Number
    open fun clone(): Rotator
    open fun ToText(): String
    open fun ToString(): String
    open fun BreakRotator(Roll: Number? , Pitch: Number? , Yaw: Number? ): `T$17`
    open fun BreakRotIntoAxes(X: Vector? , Y: Vector? , Z: Vector? ): `T$18`
    open fun CombineRotators(B: Rotator): Rotator
    open fun GetRotationXVector(): Vector
    open fun Equal(B: Rotator, ErrorTolerance: Number): Boolean
    open fun GetAxes(X: Vector? , Y: Vector? , Z: Vector? ): `T$19`
    open fun GetForwardVector(): Vector
    open fun GetRightVector(): Vector
    open fun GetUpVector(): Vector
    open fun ScaleRotator(B: Number): Rotator
    //open fun ScaleRotator(B: Number): Rotator
    open fun InvertRotator(): Rotator
    open fun Delta(B: Rotator): Rotator
    open fun NotEqual(B: Rotator, ErrorTolerance: Number): Boolean
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Rotator
    /*open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Rotator
    open fun Ease(B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Rotator
    */
    open fun RInterpTo(Target: Rotator, DeltaTime: Number, InterpSpeed: Number): Rotator
    open fun RInterpTo_Constant(Target: Rotator, DeltaTime: Number, InterpSpeed: Number): Rotator
    open fun Lerp(B: Rotator, Alpha: Number, bShortestPath: Boolean): Rotator
    open fun SelectRotator(B: Rotator, bPickA: Boolean): Rotator
    open fun GetOrientationAndPosition(DevicePosition: Vector? ): `T$20`
    open fun IsValidAIRotation(): Boolean
    companion object {
        fun C(Other: UObject): Rotator
        fun ToText(InRot: Rotator): String
        fun ToString(InRot: Rotator): String
        fun BreakRotator(InRot: Rotator, Roll: Number? , Pitch: Number? , Yaw: Number? ): `T$21`
        fun BreakRotIntoAxes(InRot: Rotator, X: Vector? , Y: Vector? , Z: Vector? ): `T$22`
        fun CombineRotators(A: Rotator, B: Rotator): Rotator
        fun GetRotationXVector(InRot: Rotator): Vector
        fun Equal(A: Rotator, B: Rotator, ErrorTolerance: Number): Boolean
        fun GetAxes(A: Rotator, X: Vector? , Y: Vector? , Z: Vector? ): `T$23`
        fun GetForwardVector(InRot: Rotator): Vector
        fun GetRightVector(InRot: Rotator): Vector
        fun GetUpVector(InRot: Rotator): Vector
        fun ScaleRotator(A: Rotator, B: Number): Rotator
        //fun ScaleRotator(A: Rotator, B: Number): Rotator
        fun InvertRotator(A: Rotator): Rotator
        fun Delta(A: Rotator, B: Rotator): Rotator
        fun NotEqual(A: Rotator, B: Rotator, ErrorTolerance: Number): Boolean
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "Linear" */, BlendExp: Number, Steps: Number): Rotator
        /*fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "Step" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalIn" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "SinusoidalInOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseIn" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "EaseInOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoIn" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "ExpoInOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularIn" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularOut" */, BlendExp: Number, Steps: Number): Rotator
        fun Ease(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean, EasingFunc: Any /* "CircularInOut" */, BlendExp: Number, Steps: Number): Rotator
        */
        fun RInterpTo(Current: Rotator, Target: Rotator, DeltaTime: Number, InterpSpeed: Number): Rotator
        fun RInterpTo_Constant(Current: Rotator, Target: Rotator, DeltaTime: Number, InterpSpeed: Number): Rotator
        fun Lerp(A: Rotator, B: Rotator, Alpha: Number, bShortestPath: Boolean): Rotator
        fun SelectRotator(A: Rotator, B: Rotator, bPickA: Boolean): Rotator
        fun GetOrientationAndPosition(DeviceRotation: Rotator? , DevicePosition: Vector? ): `T$24`
        fun IsValidAIRotation(Rotation: Rotator): Boolean
        fun MakeRotator(Roll: Number, Pitch: Number, Yaw: Number): Rotator
        fun RandomRotator(bRoll: Boolean): Rotator
        fun RandomRotatorFromStream(bRoll: Boolean, Stream: RandomStream): Rotator
    }
}

external open class RandomStream {
    open var InitialSeed: Number
    open var Seed: Number
    open fun clone(): RandomStream
    open fun BreakRandomStream(InitialSeed: Number?): `T$11`
    open fun RandomBoolFromStream(): Boolean
    open fun RandomFloatFromStream(): Number
    open fun RandomUnitVectorFromStream(): Vector
    open fun ResetRandomStream(): Unit
    open fun SeedRandomStream(): `T$12`
    open fun SetRandomStreamSeed(NewSeed: Number?): `T$13`
    companion object {
        fun C(Other: UObject): RandomStream
        fun BreakRandomStream(InRandomStream: RandomStream, InitialSeed: Number?): `T$14`
        fun RandomBoolFromStream(Stream: RandomStream): Boolean
        fun RandomFloatFromStream(Stream: RandomStream): Number
        fun RandomUnitVectorFromStream(Stream: RandomStream): Vector
        fun ResetRandomStream(Stream: RandomStream): Unit
        fun SeedRandomStream(Stream: RandomStream?): `T$15`
        fun SetRandomStreamSeed(Stream: RandomStream?, NewSeed: Number?): `T$16`
        fun MakeRandomStream(InitialSeed: Number): RandomStream
    }
}

external open class TextRenderActor(InWorld: World, Location: Vector?, Rotation: Rotator?) : Actor {
    open var TextRender: TextRenderComponent
    //open var SpriteComponent: BillboardComponent
    companion object {
        var StaticClass: Any
        //fun GetClassObject(): Class
        fun GetDefaultObject(): TextRenderActor
        fun GetDefaultSubobjectByName(Name: String): UObject
        fun SetDefaultSubobjectClass(Name: String): Unit
        fun CreateDefaultSubobject(Name: String, Transient: Boolean?, Required: Boolean?, Abstract: Boolean?): TextRenderActor
        fun C(Other: UObject): TextRenderActor
    }
}

external open class TextRenderComponent /*: PrimitiveComponent*/ {
    constructor()
    constructor(Outer: UObject)
    open var Text: String
    //open var TextMaterial: MaterialInterface
    //open var Font: Font
    open var HorizontalAlignment: dynamic /* Any /* "EHTA_Left" */ | Any /* "EHTA_Center" */ | Any /* "EHTA_Right" */ */
    open var VerticalAlignment: dynamic /* Any /* "EVRTA_TextTop" */ | Any /* "EVRTA_TextCenter" */ | Any /* "EVRTA_TextBottom" */ | Any /* "EVRTA_QuadTop" */ */
    open var TextRenderColor: Color
    open var XScale: Number
    open var YScale: Number
    open var WorldSize: Number
    open var InvDefaultSize: Number
    open var HorizSpacingAdjust: Number
    open var VertSpacingAdjust: Number
    open var bAlwaysRenderAsText: Boolean
    open fun SetYScale(Value: Number): Unit
    open fun SetXScale(Value: Number): Unit
    open fun SetWorldSize(Value: Number): Unit
    open fun SetVertSpacingAdjust(Value: Number): Unit
    open fun SetVerticalAlignment(Value: Any /* "EVRTA_TextTop" */): Unit
    /*open fun SetVerticalAlignment(Value: Any /* "EVRTA_TextCenter" */): Unit
    open fun SetVerticalAlignment(Value: Any /* "EVRTA_TextBottom" */): Unit
    open fun SetVerticalAlignment(Value: Any /* "EVRTA_QuadTop" */): Unit*/
    open fun SetTextRenderColor(Value: Color): Unit
    //open fun SetTextMaterial(Material: MaterialInterface): Unit
    open fun SetText(Value: String): Unit
    open fun SetHorizSpacingAdjust(Value: Number): Unit
    open fun SetHorizontalAlignment(Value: Any /* "EHTA_Left" */): Unit
   /* open fun SetHorizontalAlignment(Value: Any /* "EHTA_Center" */): Unit
    open fun SetHorizontalAlignment(Value: Any /* "EHTA_Right" */): Unit*/
    //open fun SetFont(Value: Font): Unit
    //open fun SetText(Value: String): Unit
    open fun GetTextWorldSize(): Vector
    open fun GetTextLocalSize(): Vector
    companion object {
        fun Load(ResourceName: String): TextRenderComponent
        fun Find(Outer: UObject, ResourceName: String): TextRenderComponent
        var StaticClass: Any
        //fun GetClassObject(): Class
        fun GetDefaultObject(): TextRenderComponent
        fun GetDefaultSubobjectByName(Name: String): UObject
        fun SetDefaultSubobjectClass(Name: String): Unit
        fun CreateDefaultSubobject(Name: String, Transient: Boolean?, Required: Boolean?, Abstract: Boolean?): TextRenderComponent
        fun C(Other: UObject): TextRenderComponent
    }
}
external open class TickFunction {
    open var TickGroup: dynamic /* Any /* "TG_PrePhysics" */ | Any /* "TG_StartPhysics" */ | Any /* "TG_DuringPhysics" */ | Any /* "TG_EndPhysics" */ | Any /* "TG_PostPhysics" */ | Any /* "TG_PostUpdateWork" */ | Any /* "TG_LastDemotable" */ | Any /* "TG_NewlySpawned" */ */
    open var EndTickGroup: dynamic /* Any /* "TG_PrePhysics" */ | Any /* "TG_StartPhysics" */ | Any /* "TG_DuringPhysics" */ | Any /* "TG_EndPhysics" */ | Any /* "TG_PostPhysics" */ | Any /* "TG_PostUpdateWork" */ | Any /* "TG_LastDemotable" */ | Any /* "TG_NewlySpawned" */ */
    open var bTickEvenWhenPaused: Boolean
    open var bCanEverTick: Boolean
    open var bStartWithTickEnabled: Boolean
    open var bAllowTickOnDedicatedServer: Boolean
    open var TickInterval: Number
    open fun clone(): TickFunction
    companion object {
        fun C(Other: UObject): TickFunction
    }
}
external open class ActorTickFunction : TickFunction {
    override fun clone(): ActorTickFunction
    companion object {
        fun C(Other: UObject): ActorTickFunction
    }
}
external open class Actor(InWorld: World, Location: Vector?, Rotation: Rotator?) : UObject {
    open var PrimaryActorTick: ActorTickFunction
    open var CustomTimeDilation: Number
    open var bHidden: Boolean
    open var bNetTemporary: Boolean
    open var bNetStartup: Boolean
    open var bOnlyRelevantToOwner: Boolean
    open var bAlwaysRelevant: Boolean
    open var bReplicateMovement: Boolean
    open var bTearOff: Boolean
    open var bExchangedRoles: Boolean
    open var bPendingNetUpdate: Boolean
    open var bNetLoadOnClient: Boolean
    open var bNetUseOwnerRelevancy: Boolean
    open var bBlockInput: Boolean
    open var bAllowTickBeforeBeginPlay: Boolean
    open var bActorEnableCollision: Boolean
    open var bReplicates: Boolean
    open var NetDriverName: String
    open var RemoteRole: dynamic /* Any /* "ROLE_None" */ | Any /* "ROLE_SimulatedProxy" */ | Any /* "ROLE_AutonomousProxy" */ | Any /* "ROLE_Authority" */ */
    open var Owner: Actor
    //open var ReplicatedMovement: RepMovement
    //open var AttachmentReplication: RepAttachment
    open var Role: dynamic /* Any /* "ROLE_None" */ | Any /* "ROLE_SimulatedProxy" */ | Any /* "ROLE_AutonomousProxy" */ | Any /* "ROLE_Authority" */ */
    open var AutoReceiveInput: dynamic /* Any /* "Disabled" */ | Any /* "Player0" */ | Any /* "Player1" */ | Any /* "Player2" */ | Any /* "Player3" */ | Any /* "Player4" */ | Any /* "Player5" */ | Any /* "Player6" */ | Any /* "Player7" */ */
    open var InputPriority: Number
    //open var InputComponent: InputComponent
    open var InputConsumeOption: dynamic /* Any /* "ICO_ConsumeAll" */ | Any /* "ICO_ConsumeBoundKeys" */ | Any /* "ICO_ConsumeNone" */ */
    open var NetCullDistanceSquared: Number
    open var NetTag: Number
    open var NetUpdateTime: Number
    open var NetUpdateFrequency: Number
    open var MinNetUpdateFrequency: Number
    open var NetPriority: Number
    open var LastNetUpdateTime: Number
    open var bAutoDestroyWhenFinished: Boolean
    open var bCanBeDamaged: Boolean
    open var bActorIsBeingDestroyed: Boolean
    open var bCollideWhenPlacing: Boolean
    open var bFindCameraComponentWhenViewTarget: Boolean
    open var bRelevantForNetworkReplays: Boolean
    open var bGenerateOverlapEventsDuringLevelStreaming: Boolean
    open var SpawnCollisionHandlingMethod: dynamic /* Any /* "Undefined" */ | Any /* "AlwaysSpawn" */ | Any /* "AdjustIfPossibleButAlwaysSpawn" */ | Any /* "AdjustIfPossibleButDontSpawnIfColliding" */ | Any /* "DontSpawnIfColliding" */ */
    //open var Instigator: Pawn
    open var Children: Array<Actor>
    //open var RootComponent: SceneComponent
    open var PivotOffset: Vector
    //open var ControllingMatineeActors: Array<MatineeActor>
    open var InitialLifeSpan: Number
    open var Layers: Array<String>
    open var ParentComponentActor: Any
    open var ParentComponent: Any
    open var GroupActor: Actor
    open var SpriteScale: Number
    open var ActorLabel: String
    open var FolderPath: String
    open var bActorLabelEditable: Boolean
    open var bHiddenEd: Boolean
    open var bEditable: Boolean
    open var bListedInSceneOutliner: Boolean
    open var bHiddenEdLayer: Boolean
    open var bHiddenEdTemporary: Boolean
    open var bHiddenEdLevel: Boolean
    open var bLockLocation: Boolean
    open var bAllowReceiveTickEventOnDedicatedServer: Boolean
    open var bActorSeamlessTraveled: Boolean
    open var bIgnoresOriginShifting: Boolean
    open var bEnableAutoLODGeneration: Boolean
    open var Tags: Array<String>
    open var HiddenEditorViews: Any
    /*open var OnTakeAnyDamage: UnrealEngineMulticastDelegate<(DamagedActor: Actor, Damage: Number, DamageType: DamageType, InstigatedBy: Controller, DamageCauser: Actor) -> Unit>
    open var OnTakePointDamage: UnrealEngineMulticastDelegate<(DamagedActor: Actor, Damage: Number, InstigatedBy: Controller, HitLocation: Vector, FHitComponent: PrimitiveComponent, BoneName: String, ShotFromDirection: Vector, DamageType: DamageType, DamageCauser: Actor) -> Unit>
    open var OnActorBeginOverlap: UnrealEngineMulticastDelegate<(OverlappedActor: Actor, OtherActor: Actor) -> Unit>
    open var OnActorEndOverlap: UnrealEngineMulticastDelegate<(OverlappedActor: Actor, OtherActor: Actor) -> Unit>
    open var OnBeginCursorOver: UnrealEngineMulticastDelegate<(TouchedActor: Actor) -> Unit>
    open var OnEndCursorOver: UnrealEngineMulticastDelegate<(TouchedActor: Actor) -> Unit>
    open var OnClicked: UnrealEngineMulticastDelegate<(TouchedActor: Actor, ButtonPressed: Key) -> Unit>
    open var OnReleased: UnrealEngineMulticastDelegate<(TouchedActor: Actor, ButtonReleased: Key) -> Unit>
    open var OnInputTouchBegin: UnrealEngineMulticastDelegate<(FingerIndex: dynamic /* Any /* "Touch1" */ | Any /* "Touch2" */ | Any /* "Touch3" */ | Any /* "Touch4" */ | Any /* "Touch5" */ | Any /* "Touch6" */ | Any /* "Touch7" */ | Any /* "Touch8" */ | Any /* "Touch9" */ | Any /* "Touch10" */ */, TouchedActor: Actor) -> Unit>
    open var OnInputTouchEnd: UnrealEngineMulticastDelegate<(FingerIndex: dynamic /* Any /* "Touch1" */ | Any /* "Touch2" */ | Any /* "Touch3" */ | Any /* "Touch4" */ | Any /* "Touch5" */ | Any /* "Touch6" */ | Any /* "Touch7" */ | Any /* "Touch8" */ | Any /* "Touch9" */ | Any /* "Touch10" */ */, TouchedActor: Actor) -> Unit>
    open var OnInputTouchEnter: UnrealEngineMulticastDelegate<(FingerIndex: dynamic /* Any /* "Touch1" */ | Any /* "Touch2" */ | Any /* "Touch3" */ | Any /* "Touch4" */ | Any /* "Touch5" */ | Any /* "Touch6" */ | Any /* "Touch7" */ | Any /* "Touch8" */ | Any /* "Touch9" */ | Any /* "Touch10" */ */, TouchedActor: Actor) -> Unit>
    open var OnInputTouchLeave: UnrealEngineMulticastDelegate<(FingerIndex: dynamic /* Any /* "Touch1" */ | Any /* "Touch2" */ | Any /* "Touch3" */ | Any /* "Touch4" */ | Any /* "Touch5" */ | Any /* "Touch6" */ | Any /* "Touch7" */ | Any /* "Touch8" */ | Any /* "Touch9" */ | Any /* "Touch10" */ */, TouchedActor: Actor) -> Unit>
    open var OnActorHit: UnrealEngineMulticastDelegate<(SelfActor: Actor, OtherActor: Actor, NormalImpulse: Vector, Hit: HitResult) -> Unit>
    open var OnDestroyed: UnrealEngineMulticastDelegate<(DestroyedActor: Actor) -> Unit>
    open var OnEndPlay: UnrealEngineMulticastDelegate<(Actor: Actor, EndPlayReason: dynamic /* Any /* "Destroyed" */ | Any /* "LevelTransition" */ | Any /* "EndPlayInEditor" */ | Any /* "RemovedFromWorld" */ | Any /* "Quit" */ */) -> Unit>
    open var BlueprintCreatedComponents: Array<ActorComponent>
    open var InstanceComponents: Array<ActorComponent>
    */
    open fun WasRecentlyRendered(Tolerance: Number): Boolean
    open fun ConstructionScript(): Unit
    open fun TearOff(): Unit
    open fun SnapActorTo(InParentActor: Actor, InSocketName: String): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_PrePhysics" */): Unit
    /*open fun SetTickGroup(NewTickGroup: Any /* "TG_StartPhysics" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_DuringPhysics" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_EndPhysics" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_PostPhysics" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_PostUpdateWork" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_LastDemotable" */): Unit
    open fun SetTickGroup(NewTickGroup: Any /* "TG_NewlySpawned" */): Unit*/
    open fun SetTickableWhenPaused(bTickableWhenPaused: Boolean): Unit
    open fun SetReplicates(bInReplicates: Boolean): Unit
    open fun SetReplicateMovement(bInReplicateMovement: Boolean): Unit
    open fun SetOwner(NewOwner: Actor): Unit
    open fun SetLifeSpan(InLifespan: Number): Unit
    open fun SetActorTickInterval(TickInterval: Number): Unit
    open fun SetActorTickEnabled(bEnabled: Boolean): Unit
    open fun SetActorScale3D(NewScale3D: Vector): Unit
    open fun SetActorRelativeScale3D(NewRelativeScale: Vector): Unit
    open fun SetActorHiddenInGame(bNewHidden: Boolean): Unit
    open fun SetActorEnableCollision(bNewActorEnableCollision: Boolean): Unit
    //open fun RemoveTickPrerequisiteComponent(PrerequisiteComponent: ActorComponent): Unit
    open fun RemoveTickPrerequisiteActor(PrerequisiteActor: Actor): Unit
    open fun Tick(DeltaSeconds: Number): Unit
   // open fun RadialDamage(DamageReceived: Number, DamageType: DamageType, Origin: Vector, HitInfo: HitResult, InstigatedBy: Controller, DamageCauser: Actor): Unit
    //open fun PointDamage(Damage: Number, DamageType: DamageType, HitLocation: Vector, HitNormal: Vector, HitComponent: PrimitiveComponent, BoneName: String, ShotFromDirection: Vector, InstigatedBy: Controller, DamageCauser: Actor, HitInfo: HitResult): Unit
    //open fun Hit(MyComp: PrimitiveComponent, Other: Actor, OtherComp: PrimitiveComponent, bSelfMoved: Boolean, HitLocation: Vector, HitNormal: Vector, NormalImpulse: Vector, Hit: HitResult): Unit
    open fun EndPlay(EndPlayReason: Any /* "Destroyed" */): Unit
    /*open fun EndPlay(EndPlayReason: Any /* "LevelTransition" */): Unit
    open fun EndPlay(EndPlayReason: Any /* "EndPlayInEditor" */): Unit
    open fun EndPlay(EndPlayReason: Any /* "RemovedFromWorld" */): Unit
    open fun EndPlay(EndPlayReason: Any /* "Quit" */): Unit*/
    open fun Destroyed(): Unit
    open fun BeginPlay(): Unit
    //open fun AnyDamage(Damage: Number, DamageType: DamageType, InstigatedBy: Controller, DamageCauser: Actor): Unit
    //open fun ActorOnReleased(ButtonReleased: Key): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch1" */): Unit
    /*open fun TouchLeave(FingerIndex: Any /* "Touch2" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch3" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch4" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch5" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch6" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch7" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch8" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch9" */): Unit
    open fun TouchLeave(FingerIndex: Any /* "Touch10" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch1" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch2" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch3" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch4" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch5" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch6" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch7" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch8" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch9" */): Unit
    open fun TouchEnter(FingerIndex: Any /* "Touch10" */): Unit*/
    open fun EndInputTouch(FingerIndex: Any /* "Touch1" */): Unit
    /*open fun EndInputTouch(FingerIndex: Any /* "Touch2" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch3" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch4" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch5" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch6" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch7" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch8" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch9" */): Unit
    open fun EndInputTouch(FingerIndex: Any /* "Touch10" */): Unit*/
    open fun BeginInputTouch(FingerIndex: Any /* "Touch1" */): Unit
    /*open fun BeginInputTouch(FingerIndex: Any /* "Touch2" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch3" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch4" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch5" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch6" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch7" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch8" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch9" */): Unit
    open fun BeginInputTouch(FingerIndex: Any /* "Touch10" */): Unit*/
    //open fun ActorOnClicked(ButtonPressed: Key): Unit
    open fun ActorEndOverlap(OtherActor: Actor): Unit
    open fun ActorEndCursorOver(): Unit
    open fun ActorBeginOverlap(OtherActor: Actor): Unit
    open fun ActorBeginCursorOver(): Unit
    open fun OnRep_ReplicateMovement(): Unit
    open fun OnRep_ReplicatedMovement(): Unit
    open fun OnRep_Owner(): Unit
    open fun OnRep_Instigator(): Unit
    open fun OnRep_AttachmentReplication(): Unit
    //open fun MakeNoise(Loudness: Number, NoiseInstigator: Pawn, NoiseLocation: Vector, MaxRange: Number, Tag: String): Unit
    //open fun MakeMIDForMaterial(Parent: MaterialInterface): MaterialInstanceDynamic
    open fun Teleport(DestLocation: Vector, DestRotation: Rotator): Boolean
    //open fun SetActorTransform(NewTransform: Transform, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$351`
    open fun SetActorRotation(NewRotation: Rotator, bTeleportPhysics: Boolean): Boolean
    //open fun SetActorRelativeTransform(NewRelativeTransform: Transform, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$352`
    //open fun SetActorRelativeRotation(NewRelativeRotation: Rotator, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$353`
    //open fun SetActorRelativeLocation(NewRelativeLocation: Vector, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$354`
    //open fun SetActorLocationAndRotation(NewLocation: Vector, NewRotation: Rotator, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$355`
    //open fun SetActorLocation(NewLocation: Vector, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$356`
    open fun OnReset(): Unit
    //open fun OnEndViewTarget(PC: PlayerController): Unit
    //open fun OnBecomeViewTarget(PC: PlayerController): Unit
    //open fun GetRootComponent(): SceneComponent
    open fun GetActorRotation(): Rotator
    open fun GetActorLocation(): Vector
    open fun DetachFromActor(LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */): Unit
    /*open fun DetachFromActor(LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */): Unit
    open fun DetachFromActor(LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */): Unit
    */
    //open fun DestroyComponent(Component: ActorComponent): Unit
    open fun DestroyActor(): Unit
    //open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    /*open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToComponent(Parent: SceneComponent, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    */
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    /*open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepRelative" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "KeepWorld" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepRelative" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "KeepWorld" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepRelative" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "KeepWorld" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachToActor(ParentActor: Actor, SocketName: String, LocationRule: Any /* "SnapToTarget" */, RotationRule: Any /* "SnapToTarget" */, ScaleRule: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    */
    open fun AttachActorToActor(InParentActor: Actor, InSocketName: String, AttachLocationType: Any /* "KeepRelativeOffset" */, bWeldSimulatedBodies: Boolean): Unit
    /*open fun AttachActorToActor(InParentActor: Actor, InSocketName: String, AttachLocationType: Any /* "KeepWorldPosition" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachActorToActor(InParentActor: Actor, InSocketName: String, AttachLocationType: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachActorToActor(InParentActor: Actor, InSocketName: String, AttachLocationType: Any /* "SnapToTargetIncludingScale" */, bWeldSimulatedBodies: Boolean): Unit
    */
    //open fun AttachActorToComponent(InParent: SceneComponent, InSocketName: String, AttachLocationType: Any /* "KeepRelativeOffset" */, bWeldSimulatedBodies: Boolean): Unit
    /*open fun AttachActorToComponent(InParent: SceneComponent, InSocketName: String, AttachLocationType: Any /* "KeepWorldPosition" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachActorToComponent(InParent: SceneComponent, InSocketName: String, AttachLocationType: Any /* "SnapToTarget" */, bWeldSimulatedBodies: Boolean): Unit
    open fun AttachActorToComponent(InParent: SceneComponent, InSocketName: String, AttachLocationType: Any /* "SnapToTargetIncludingScale" */, bWeldSimulatedBodies: Boolean): Unit
    */
    //open fun AddActorWorldTransform(DeltaTransform: Transform, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$357`
    //open fun AddActorWorldRotation(DeltaRotation: Rotator, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$358`
    //open fun AddActorWorldOffset(DeltaLocation: Vector, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$359`
    //open fun AddActorLocalTransform(NewTransform: Transform, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$360`
    //open fun AddActorLocalRotation(DeltaRotation: Rotator, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$361`
    //open fun AddActorLocalOffset(DeltaLocation: Vector, bSweep: Boolean, SweepHitResult: HitResult?, bTeleport: Boolean?): `T$362`
    open fun IsOverlappingActor(Other: Actor): Boolean
    open fun IsChildActor(): Boolean
    open fun IsActorTickEnabled(): Boolean
    open fun IsActorBeingDestroyed(): Boolean
    open fun HasAuthority(): Boolean
    open fun GetVerticalDistanceTo(OtherActor: Actor): Number
    open fun GetVelocity(): Vector
    open fun GetActorTransform(): Transform
    open fun GetTickableWhenPaused(): Boolean
    open fun GetSquaredDistanceTo(OtherActor: Actor): Number
    open fun GetRemoteRole(): dynamic /* Any /* "ROLE_None" */ | Any /* "ROLE_SimulatedProxy" */ | Any /* "ROLE_AutonomousProxy" */ | Any /* "ROLE_Authority" */ */
    //open fun GetParentComponent(): ChildActorComponent
    open fun GetParentActor(): Actor
    open fun GetOwner(): Actor
    //open fun GetOverlappingComponents(OverlappingComponents: Array<PrimitiveComponent>?): `T$363`
   // open fun GetOverlappingActors(OverlappingActors: Array<Actor>?, ClassFilter: Any?): `T$364`
    open fun GetLifeSpan(): Number
    //open fun GetInstigatorController(): Controller
    //open fun GetInstigator(): Pawn
    //open fun GetInputVectorAxisValue(InputAxisKey: Key): Vector
    open fun GetInputAxisValue(InputAxisName: String): Number
    //open fun GetInputAxisKeyValue(InputAxisKey: Key): Number
    open fun GetHorizontalDotProductTo(OtherActor: Actor): Number
    open fun GetHorizontalDistanceTo(OtherActor: Actor): Number
    open fun GetGameTimeSinceCreation(): Number
    open fun GetDotProductTo(OtherActor: Actor): Number
    open fun GetDistanceTo(OtherActor: Actor): Number
    //open fun GetComponentsByTag(ComponentClass: Any, Tag: String): Array<ActorComponent>
    //open fun GetComponentsByClass(ComponentClass: Any): Array<ActorComponent>
    //open fun GetComponentByClass(ComponentClass: Any): ActorComponent
    //open fun GetAttachedActors(OutActors: Array<Actor>?): `T$365`
    //open fun GetAllChildActors(ChildActors: Array<Actor>?, bIncludeDescendants: Boolean?): `T$366`
    open fun GetActorUpVector(): Vector
    open fun GetActorTimeDilation(): Number
    open fun GetActorTickInterval(): Number
    open fun GetActorScale3D(): Vector
    open fun GetActorRightVector(): Vector
    open fun GetActorRelativeScale3D(): Vector
    open fun GetActorForwardVector(): Vector
    //open fun GetActorEyesViewPoint(OutLocation: Vector?, OutRotation: Rotator?): `T$367`
    open fun GetActorEnableCollision(): Boolean
    //open fun GetActorBounds(bOnlyCollidingComponents: Boolean, Origin: Vector?, BoxExtent: Vector?): `T$368`
    open fun ForceNetUpdate(): Unit
    open fun FlushNetDormancy(): Unit
    //open fun EnableInput(PlayerController: PlayerController): Unit
    //open fun DisableInput(PlayerController: PlayerController): Unit
    open fun DetachActorFromActor(bMaintainWorldPosition: Boolean): Unit
    //open fun AddTickPrerequisiteComponent(PrerequisiteComponent: ActorComponent): Unit
    open fun AddTickPrerequisiteActor(PrerequisiteActor: Actor): Unit
    //open fun AddComponent(TemplateName: String, bManualAttachment: Boolean, RelativeTransform: Transform, ComponentTemplateContext: UObject): ActorComponent
    open fun ActorHasTag(Tag: String): Boolean
    open fun ClearActorLabel(): Unit
    open fun GetActorLabel(): String
    open fun GetFolderPath(): String
    open fun IsActorLabelEditable(): Boolean
    open fun SetActorLabel(NewActorLabel: String, bMarkDirty: Boolean): Unit
    open fun SetFolderPath(NewFolderPath: String): Unit
    open fun SetFolderPath_Recursively(NewFolderPath: String): Unit
    open fun SetIsTemporarilyHiddenInEditor(bIsHidden: Boolean): Unit
    open fun Actor_GetWorld(): World
    open fun GetLastRenderTime(): Number
    //open fun GetLevel(): Level
    open fun ReregisterAllComponents(): Unit
    //open fun SetRootComponent(Component: SceneComponent): Unit
    //open fun ApplyDamage(BaseDamage: Number, EventInstigator: Controller, DamageCauser: Actor, DamageTypeClass: Any): Unit
    //open fun ApplyPointDamage(BaseDamage: Number, HitFromDirection: Vector, HitInfo: HitResult, EventInstigator: Controller, DamageCauser: Actor, DamageTypeClass: Any): Unit
    //open fun FinishSpawningActor(SpawnTransform: Transform): Actor
    //open fun GetActorBounds(Origin: Vector?, BoxExtent: Vector?): `T$369`
    //open fun GetAIController(): AIController
    //open fun GetBlackboard(): BlackboardComponent
    companion object {
        var StaticClass: Any
        //fun GetClassObject(): Class
        fun GetDefaultObject(): Actor
        fun GetDefaultSubobjectByName(Name: String): UObject
        fun SetDefaultSubobjectClass(Name: String): Unit
        fun CreateDefaultSubobject(Name: String, Transient: Boolean?, Required: Boolean?, Abstract: Boolean?): Actor
        fun C(Other: UObject): Actor
        fun ClearActorLabel(Actor: Actor): Unit
        fun GetActorLabel(Actor: Actor): String
        fun GetFolderPath(Actor: Actor): String
        fun IsActorLabelEditable(Actor: Actor): Boolean
        fun SetActorLabel(Actor: Actor, NewActorLabel: String, bMarkDirty: Boolean): Unit
        fun SetFolderPath(Actor: Actor, NewFolderPath: String): Unit
        fun SetFolderPath_Recursively(Actor: Actor, NewFolderPath: String): Unit
        fun SetIsTemporarilyHiddenInEditor(Actor: Actor, bIsHidden: Boolean): Unit
        fun Actor_GetWorld(Actor: Actor): World
        fun GetLastRenderTime(Actor: Actor): Number
        //fun GetLevel(Actor: Actor): Level
        fun ReregisterAllComponents(Actor: Actor): Unit
        //fun SetRootComponent(Actor: Actor, Component: SceneComponent): Unit
        //fun ApplyDamage(DamagedActor: Actor, BaseDamage: Number, EventInstigator: Controller, DamageCauser: Actor, DamageTypeClass: Any): Unit
       // fun ApplyPointDamage(DamagedActor: Actor, BaseDamage: Number, HitFromDirection: Vector, HitInfo: HitResult, EventInstigator: Controller, DamageCauser: Actor, DamageTypeClass: Any): Unit
        fun FinishSpawningActor(Actor: Actor, SpawnTransform: Transform): Actor
        //fun GetActorBounds(Actor: Actor, Origin: Vector?, BoxExtent: Vector?): `T$370`
        //fun GetAIController(ControlledActor: Actor): AIController
        //fun GetBlackboard(Target: Actor): BlackboardComponent
    }
}

external open class Process {
    open fun nextTick(fn: (number: Any) -> Unit): Unit
}
external var process: Process

@JsName("setTimeout")
external fun setTimeout(fn: (milliseconds: Number) -> Unit, timeout: Number): Any
