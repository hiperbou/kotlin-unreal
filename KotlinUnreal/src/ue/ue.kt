@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package ue


import kotlin.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*


external open class NiagaraMessageDataBase : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraMessageDataBase
        fun Find(Outer: UObject, ResourceName: String): NiagaraMessageDataBase
        fun GetDefaultObject(): NiagaraMessageDataBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraMessageDataBase
        fun C(Other: UObject): NiagaraMessageDataBase
        fun C(Other: Any): NiagaraMessageDataBase
    }
}

external open class NiagaraPrecompileContainer : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Scripts: Array<NiagaraScript>
    open var System: NiagaraSystem

    companion object {
        fun Load(ResourceName: String): NiagaraPrecompileContainer
        fun Find(Outer: UObject, ResourceName: String): NiagaraPrecompileContainer
        fun GetDefaultObject(): NiagaraPrecompileContainer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPrecompileContainer
        fun C(Other: UObject): NiagaraPrecompileContainer
        fun C(Other: Any): NiagaraPrecompileContainer
    }
}

external open class NiagaraPreviewBase(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open fun SetSystem(InSystem: NiagaraSystem)
    open fun SetLabelText(InXAxisText: String, InYAxisText: String)

    companion object {
        fun GetDefaultObject(): NiagaraPreviewBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewBase
        fun C(Other: UObject): NiagaraPreviewBase
        fun C(Other: Any): NiagaraPreviewBase
    }
}

external interface `T$0` {
    var OutLabelText: String
}

external open class NiagaraPreviewAxis : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Num(): Number
    open fun ApplyToPreview(PreviewComponent: NiagaraComponent, PreviewIndex: Number, bIsXAxis: Boolean, OutLabelText: String = definedExternally): `T$0`

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis
        fun GetDefaultObject(): NiagaraPreviewAxis
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis
        fun C(Other: UObject): NiagaraPreviewAxis
        fun C(Other: Any): NiagaraPreviewAxis
    }
}

external open class NiagaraPreviewAxis_InterpParamBase : NiagaraPreviewAxis {
    constructor()
    constructor(Outer: UObject)
    open var Param: String
    open var Count: Number

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamBase
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamBase
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamBase
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamBase
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamBase
    }
}

external open class NiagaraPreviewAxis_InterpParamInt32 : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: Number
    open var Max: Number

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamInt32
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamInt32
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamInt32
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamInt32
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamInt32
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamInt32
    }
}

external open class NiagaraPreviewAxis_InterpParamFloat : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: Number
    open var Max: Number

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamFloat
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamFloat
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamFloat
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamFloat
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamFloat
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamFloat
    }
}

external open class NiagaraPreviewAxis_InterpParamVector2D : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: Vector2D
    open var Max: Vector2D

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamVector2D
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamVector2D
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector2D
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamVector2D
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamVector2D
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamVector2D
    }
}

external open class NiagaraPreviewAxis_InterpParamVector : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: Vector
    open var Max: Vector

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamVector
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamVector
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamVector
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamVector
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamVector
    }
}

external open class NiagaraPreviewAxis_InterpParamVector4 : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: Vector4
    open var Max: Vector4

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamVector4
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamVector4
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector4
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamVector4
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamVector4
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamVector4
    }
}

external open class NiagaraPreviewAxis_InterpParamLinearColor : NiagaraPreviewAxis_InterpParamBase {
    constructor()
    constructor(Outer: UObject)
    open var Min: LinearColor
    open var Max: LinearColor

    companion object {
        fun Load(ResourceName: String): NiagaraPreviewAxis_InterpParamLinearColor
        fun Find(Outer: UObject, ResourceName: String): NiagaraPreviewAxis_InterpParamLinearColor
        fun GetDefaultObject(): NiagaraPreviewAxis_InterpParamLinearColor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewAxis_InterpParamLinearColor
        fun C(Other: UObject): NiagaraPreviewAxis_InterpParamLinearColor
        fun C(Other: Any): NiagaraPreviewAxis_InterpParamLinearColor
    }
}

external object ENiagaraPreviewGridResetMode {
    var Never: String /* "Never" */
    var Individual: String /* "Individual" */
    var All: String /* "All" */
    var ENiagaraPreviewGridResetMode_MAX: String /* "ENiagaraPreviewGridResetMode_MAX" */
}

external interface `T$1` {
    var OutPreviews: Array<NiagaraComponent>
}

external open class NiagaraPreviewGrid(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var System: NiagaraSystem
    open var ResetMode: String /* "Never" | "Individual" | "All" | "ENiagaraPreviewGridResetMode_MAX" */
    open var PreviewAxisX: NiagaraPreviewAxis
    open var PreviewAxisY: NiagaraPreviewAxis
    open var PreviewClass: UnrealEngineClass
    open var SpacingX: Number
    open var SpacingY: Number
    open var NumX: Number
    open var NumY: Number
    open var PreviewComponents: Array<ChildActorComponent>
    open var SpriteComponent: BillboardComponent
    open var ArrowComponent: ArrowComponent
    open fun SetPaused(bPaused: Boolean)
    open fun GetPreviews(OutPreviews: Array<NiagaraComponent> = definedExternally): `T$1`
    open fun DeactivatePreviews()
    open fun ActivatePreviews(bReset: Boolean)

    companion object {
        fun GetDefaultObject(): NiagaraPreviewGrid
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraPreviewGrid
        fun C(Other: UObject): NiagaraPreviewGrid
        fun C(Other: Any): NiagaraPreviewGrid
    }
}

external object ENiagaraRibbonFacingMode {
    var Screen: String /* "Screen" */
    var Custom: String /* "Custom" */
    var CustomSideVector: String /* "CustomSideVector" */
    var ENiagaraRibbonFacingMode_MAX: String /* "ENiagaraRibbonFacingMode_MAX" */
}

external object ENiagaraRibbonUVEdgeMode {
    var SmoothTransition: String /* "SmoothTransition" */
    var Locked: String /* "Locked" */
    var ENiagaraRibbonUVEdgeMode_MAX: String /* "ENiagaraRibbonUVEdgeMode_MAX" */
}

external object ENiagaraRibbonUVDistributionMode {
    var ScaledUniformly: String /* "ScaledUniformly" */
    var ScaledUsingRibbonSegmentLength: String /* "ScaledUsingRibbonSegmentLength" */
    var TiledOverRibbonLength: String /* "TiledOverRibbonLength" */
    var ENiagaraRibbonUVDistributionMode_MAX: String /* "ENiagaraRibbonUVDistributionMode_MAX" */
}

external open class NiagaraRibbonUVSettings {
    open var LeadingEdgeMode: String /* "SmoothTransition" | "Locked" | "ENiagaraRibbonUVEdgeMode_MAX" */
    open var TrailingEdgeMode: String /* "SmoothTransition" | "Locked" | "ENiagaraRibbonUVEdgeMode_MAX" */
    open var DistributionMode: String /* "ScaledUniformly" | "ScaledUsingRibbonSegmentLength" | "TiledOverRibbonLength" | "ENiagaraRibbonUVDistributionMode_MAX" */
    open var TilingLength: Number
    open var Offset: Vector2D
    open var Scale: Vector2D
    open var bEnablePerParticleUOverride: Boolean
    open var bEnablePerParticleVRangeOverride: Boolean
    open fun clone(): NiagaraRibbonUVSettings

    companion object {
        fun C(Other: UObject): NiagaraRibbonUVSettings
        fun C(Other: Any): NiagaraRibbonUVSettings
    }
}

external object ENiagaraRibbonAgeOffsetMode {
    var Scale: String /* "Scale" */
    var Clip: String /* "Clip" */
    var ENiagaraRibbonAgeOffsetMode_MAX: String /* "ENiagaraRibbonAgeOffsetMode_MAX" */
}

external object ENiagaraRibbonDrawDirection {
    var FrontToBack: String /* "FrontToBack" */
    var BackToFront: String /* "BackToFront" */
    var ENiagaraRibbonDrawDirection_MAX: String /* "ENiagaraRibbonDrawDirection_MAX" */
}

external object ENiagaraRibbonTessellationMode {
    var Automatic: String /* "Automatic" */
    var Custom: String /* "Custom" */
    var Disabled: String /* "Disabled" */
    var ENiagaraRibbonTessellationMode_MAX: String /* "ENiagaraRibbonTessellationMode_MAX" */
}

external open class NiagaraRibbonRendererProperties : NiagaraRendererProperties {
    constructor()
    constructor(Outer: UObject)
    open var Material: MaterialInterface
    open var MaterialUserParamBinding: NiagaraUserParameterBinding
    open var FacingMode: String /* "Screen" | "Custom" | "CustomSideVector" | "ENiagaraRibbonFacingMode_MAX" */
    open var UV0Settings: NiagaraRibbonUVSettings
    open var UV1Settings: NiagaraRibbonUVSettings
    open var UV0TilingDistance: Number
    open var UV0Scale: Vector2D
    open var UV0Offset: Vector2D
    open var UV0AgeOffsetMode: String /* "Scale" | "Clip" | "ENiagaraRibbonAgeOffsetMode_MAX" */
    open var UV1TilingDistance: Number
    open var UV1Scale: Vector2D
    open var UV1Offset: Vector2D
    open var UV1AgeOffsetMode: String /* "Scale" | "Clip" | "ENiagaraRibbonAgeOffsetMode_MAX" */
    open var DrawDirection: String /* "FrontToBack" | "BackToFront" | "ENiagaraRibbonDrawDirection_MAX" */
    open var CurveTension: Number
    open var TessellationMode: String /* "Automatic" | "Custom" | "Disabled" | "ENiagaraRibbonTessellationMode_MAX" */
    open var TessellationFactor: Number
    open var bUseConstantFactor: Boolean
    open var TessellationAngle: Number
    open var bScreenSpaceTessellation: Boolean
    open var PositionBinding: NiagaraVariableAttributeBinding
    open var ColorBinding: NiagaraVariableAttributeBinding
    open var VelocityBinding: NiagaraVariableAttributeBinding
    open var NormalizedAgeBinding: NiagaraVariableAttributeBinding
    open var RibbonTwistBinding: NiagaraVariableAttributeBinding
    open var RibbonWidthBinding: NiagaraVariableAttributeBinding
    open var RibbonFacingBinding: NiagaraVariableAttributeBinding
    open var RibbonIdBinding: NiagaraVariableAttributeBinding
    open var RibbonLinkOrderBinding: NiagaraVariableAttributeBinding
    open var MaterialRandomBinding: NiagaraVariableAttributeBinding
    open var DynamicMaterialBinding: NiagaraVariableAttributeBinding
    open var DynamicMaterial1Binding: NiagaraVariableAttributeBinding
    open var DynamicMaterial2Binding: NiagaraVariableAttributeBinding
    open var DynamicMaterial3Binding: NiagaraVariableAttributeBinding
    open var U0OverrideBinding: NiagaraVariableAttributeBinding
    open var V0RangeOverrideBinding: NiagaraVariableAttributeBinding
    open var U1OverrideBinding: NiagaraVariableAttributeBinding
    open var V1RangeOverrideBinding: NiagaraVariableAttributeBinding

    companion object {
        fun Load(ResourceName: String): NiagaraRibbonRendererProperties
        fun Find(Outer: UObject, ResourceName: String): NiagaraRibbonRendererProperties
        fun GetDefaultObject(): NiagaraRibbonRendererProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraRibbonRendererProperties
        fun C(Other: UObject): NiagaraRibbonRendererProperties
        fun C(Other: Any): NiagaraRibbonRendererProperties
    }
}

external open class NiagaraSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)
    open var AdditionalParameterTypes: Array<SoftObjectPath>
    open var AdditionalPayloadTypes: Array<SoftObjectPath>
    open var AdditionalParameterEnums: Array<SoftObjectPath>
    open var DefaultEffectType: SoftObjectPath
    open var QualityLevels: Array<String>
    open var ComponentRendererWarningsPerClass: Any
    open var DefaultRenderTargetFormat: String /* "RTF_R8" | "RTF_RG8" | "RTF_RGBA8" | "RTF_RGBA8_SRGB" | "RTF_R16f" | "RTF_RG16f" | "RTF_RGBA16f" | "RTF_R32f" | "RTF_RG32f" | "RTF_RGBA32f" | "RTF_RGB10A2" | "RTF_MAX" */
    open var DefaultGridFormat: String /* "Float" | "HalfFloat" | "UnsignedNormalizedByte" | "Max" | "ENiagaraGpuBufferFormat_MAX" */
    open var DefaultEffectTypePtr: NiagaraEffectType

    companion object {
        fun Load(ResourceName: String): NiagaraSettings
        fun Find(Outer: UObject, ResourceName: String): NiagaraSettings
        fun GetDefaultObject(): NiagaraSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSettings
        fun C(Other: UObject): NiagaraSettings
        fun C(Other: Any): NiagaraSettings
    }
}

external object ENiagaraIterationSource {
    var Particles: String /* "Particles" */
    var DataInterface: String /* "DataInterface" */
    var ENiagaraIterationSource_MAX: String /* "ENiagaraIterationSource_MAX" */
}

external open class NiagaraVariableDataInterfaceBinding {
    open var BoundVariable: NiagaraVariable
    open fun clone(): NiagaraVariableDataInterfaceBinding

    companion object {
        fun C(Other: UObject): NiagaraVariableDataInterfaceBinding
        fun C(Other: Any): NiagaraVariableDataInterfaceBinding
    }
}

external open class NiagaraSimulationStageGeneric : NiagaraSimulationStageBase {
    constructor()
    constructor(Outer: UObject)
    open var IterationSource: String /* "Particles" | "DataInterface" | "ENiagaraIterationSource_MAX" */
    open var Iterations: Number
    open var bSpawnOnly: Boolean
    open var bDisablePartialParticleUpdate: Boolean
    open var DataInterface: NiagaraVariableDataInterfaceBinding

    companion object {
        fun Load(ResourceName: String): NiagaraSimulationStageGeneric
        fun Find(Outer: UObject, ResourceName: String): NiagaraSimulationStageGeneric
        fun GetDefaultObject(): NiagaraSimulationStageGeneric
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSimulationStageGeneric
        fun C(Other: UObject): NiagaraSimulationStageGeneric
        fun C(Other: Any): NiagaraSimulationStageGeneric
    }
}

external object ENiagaraRendererSourceDataMode {
    var Particles: String /* "Particles" */
    var Emitter: String /* "Emitter" */
    var ENiagaraRendererSourceDataMode_MAX: String /* "ENiagaraRendererSourceDataMode_MAX" */
}

external object ENiagaraSpriteAlignment {
    var Unaligned: String /* "Unaligned" */
    var VelocityAligned: String /* "VelocityAligned" */
    var CustomAlignment: String /* "CustomAlignment" */
    var ENiagaraSpriteAlignment_MAX: String /* "ENiagaraSpriteAlignment_MAX" */
}

external object ENiagaraSpriteFacingMode {
    var FaceCamera: String /* "FaceCamera" */
    var FaceCameraPlane: String /* "FaceCameraPlane" */
    var CustomFacingVector: String /* "CustomFacingVector" */
    var FaceCameraPosition: String /* "FaceCameraPosition" */
    var FaceCameraDistanceBlend: String /* "FaceCameraDistanceBlend" */
    var ENiagaraSpriteFacingMode_MAX: String /* "ENiagaraSpriteFacingMode_MAX" */
}

external open class NiagaraMaterialAttributeBinding {
    open var MaterialParameterName: String
    open var NiagaraVariable: NiagaraVariableBase
    open var ResolvedNiagaraVariable: NiagaraVariableBase
    open var NiagaraChildVariable: NiagaraVariableBase
    open fun clone(): NiagaraMaterialAttributeBinding

    companion object {
        fun C(Other: UObject): NiagaraMaterialAttributeBinding
        fun C(Other: Any): NiagaraMaterialAttributeBinding
    }
}

external open class NiagaraSpriteRendererProperties : NiagaraRendererProperties {
    constructor()
    constructor(Outer: UObject)
    open var Material: MaterialInterface
    open var SourceMode: String /* "Particles" | "Emitter" | "ENiagaraRendererSourceDataMode_MAX" */
    open var MaterialUserParamBinding: NiagaraUserParameterBinding
    open var Alignment: String /* "Unaligned" | "VelocityAligned" | "CustomAlignment" | "ENiagaraSpriteAlignment_MAX" */
    open var FacingMode: String /* "FaceCamera" | "FaceCameraPlane" | "CustomFacingVector" | "FaceCameraPosition" | "FaceCameraDistanceBlend" | "ENiagaraSpriteFacingMode_MAX" */
    open var PivotInUVSpace: Vector2D
    open var SortMode: String /* "None" | "ViewDepth" | "ViewDistance" | "CustomAscending" | "CustomDecending" | "ENiagaraSortMode_MAX" */
    open var SubImageSize: Vector2D
    open var bSubImageBlend: Boolean
    open var bRemoveHMDRollInVR: Boolean
    open var bSortOnlyWhenTranslucent: Boolean
    open var bGpuLowLatencyTranslucency: Boolean
    open var MinFacingCameraBlendDistance: Number
    open var MaxFacingCameraBlendDistance: Number
    open var bEnableCameraDistanceCulling: Boolean
    open var MinCameraDistance: Number
    open var MaxCameraDistance: Number
    open var RendererVisibility: Any
    open var PositionBinding: NiagaraVariableAttributeBinding
    open var ColorBinding: NiagaraVariableAttributeBinding
    open var VelocityBinding: NiagaraVariableAttributeBinding
    open var SpriteRotationBinding: NiagaraVariableAttributeBinding
    open var SpriteSizeBinding: NiagaraVariableAttributeBinding
    open var SpriteFacingBinding: NiagaraVariableAttributeBinding
    open var SpriteAlignmentBinding: NiagaraVariableAttributeBinding
    open var SubImageIndexBinding: NiagaraVariableAttributeBinding
    open var DynamicMaterialBinding: NiagaraVariableAttributeBinding
    open var DynamicMaterial1Binding: NiagaraVariableAttributeBinding
    open var DynamicMaterial2Binding: NiagaraVariableAttributeBinding
    open var DynamicMaterial3Binding: NiagaraVariableAttributeBinding
    open var CameraOffsetBinding: NiagaraVariableAttributeBinding
    open var UVScaleBinding: NiagaraVariableAttributeBinding
    open var MaterialRandomBinding: NiagaraVariableAttributeBinding
    open var CustomSortingBinding: NiagaraVariableAttributeBinding
    open var NormalizedAgeBinding: NiagaraVariableAttributeBinding
    open var RendererVisibilityTagBinding: NiagaraVariableAttributeBinding
    open var MaterialParameterBindings: Array<NiagaraMaterialAttributeBinding>
    open var bUseMaterialCutoutTexture: Boolean
    open var CutoutTexture: Texture2D
    open var BoundingMode: String /* "BVC_FourVertices" | "BVC_EightVertices" | "BVC_MAX" */
    open var OpacitySourceMode: String /* "OSM_Alpha" | "OSM_ColorBrightness" | "OSM_RedChannel" | "OSM_GreenChannel" | "OSM_BlueChannel" | "OSM_MAX" */
    open var AlphaThreshold: Number

    companion object {
        fun Load(ResourceName: String): NiagaraSpriteRendererProperties
        fun Find(Outer: UObject, ResourceName: String): NiagaraSpriteRendererProperties
        fun GetDefaultObject(): NiagaraSpriteRendererProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSpriteRendererProperties
        fun C(Other: UObject): NiagaraSpriteRendererProperties
        fun C(Other: Any): NiagaraSpriteRendererProperties
    }
}

external open class ActorFactoryNiagara : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryNiagara
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryNiagara
        fun GetDefaultObject(): ActorFactoryNiagara
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryNiagara
        fun C(Other: UObject): ActorFactoryNiagara
        fun C(Other: Any): ActorFactoryNiagara
    }
}

external open class EdGraphSchema_Niagara : EdGraphSchema {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EdGraphSchema_Niagara
        fun Find(Outer: UObject, ResourceName: String): EdGraphSchema_Niagara
        fun GetDefaultObject(): EdGraphSchema_Niagara
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EdGraphSchema_Niagara
        fun C(Other: UObject): EdGraphSchema_Niagara
        fun C(Other: Any): EdGraphSchema_Niagara
    }
}

external open class EdGraphSchema_NiagaraSystemOverview : EdGraphSchema {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EdGraphSchema_NiagaraSystemOverview
        fun Find(Outer: UObject, ResourceName: String): EdGraphSchema_NiagaraSystemOverview
        fun GetDefaultObject(): EdGraphSchema_NiagaraSystemOverview
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EdGraphSchema_NiagaraSystemOverview
        fun C(Other: UObject): EdGraphSchema_NiagaraSystemOverview
        fun C(Other: Any): EdGraphSchema_NiagaraSystemOverview
    }
}

external open class MovieSceneNiagaraEmitterSectionBase : MovieSceneSection {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MovieSceneNiagaraEmitterSectionBase
        fun Find(Outer: UObject, ResourceName: String): MovieSceneNiagaraEmitterSectionBase
        fun GetDefaultObject(): MovieSceneNiagaraEmitterSectionBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneNiagaraEmitterSectionBase
        fun C(Other: UObject): MovieSceneNiagaraEmitterSectionBase
        fun C(Other: Any): MovieSceneNiagaraEmitterSectionBase
    }
}

external open class MovieSceneNiagaraEmitterSection : MovieSceneNiagaraEmitterSectionBase {
    constructor()
    constructor(Outer: UObject)
    open var NumLoops: Number
    open var bStartTimeIncludedInFirstLoopOnly: Boolean

    companion object {
        fun Load(ResourceName: String): MovieSceneNiagaraEmitterSection
        fun Find(Outer: UObject, ResourceName: String): MovieSceneNiagaraEmitterSection
        fun GetDefaultObject(): MovieSceneNiagaraEmitterSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneNiagaraEmitterSection
        fun C(Other: UObject): MovieSceneNiagaraEmitterSection
        fun C(Other: Any): MovieSceneNiagaraEmitterSection
    }
}

external open class MovieSceneNiagaraEmitterTrack : MovieSceneNameableTrack {
    constructor()
    constructor(Outer: UObject)
    open var Sections: Array<MovieSceneSection>
    open var bSectionsWereModified: Boolean
    open var EmitterHandleId: Guid
    open var SystemPath: String

    companion object {
        fun Load(ResourceName: String): MovieSceneNiagaraEmitterTrack
        fun Find(Outer: UObject, ResourceName: String): MovieSceneNiagaraEmitterTrack
        fun GetDefaultObject(): MovieSceneNiagaraEmitterTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneNiagaraEmitterTrack
        fun C(Other: UObject): MovieSceneNiagaraEmitterTrack
        fun C(Other: Any): MovieSceneNiagaraEmitterTrack
    }
}

external object ENiagaraClipboardFunctionInputValueMode {
    var Local: String /* "Local" */
    var Linked: String /* "Linked" */
    var Data: String /* "Data" */
    var Expression: String /* "Expression" */
    var Dynamic: String /* "Dynamic" */
    var ENiagaraClipboardFunctionInputValueMode_MAX: String /* "ENiagaraClipboardFunctionInputValueMode_MAX" */
}

external object ENiagaraClipboardFunctionScriptMode {
    var ScriptAsset: String /* "ScriptAsset" */
    var Assignment: String /* "Assignment" */
    var ENiagaraClipboardFunctionScriptMode_MAX: String /* "ENiagaraClipboardFunctionScriptMode_MAX" */
}

external open class NiagaraNode : EdGraphNode {
    constructor()
    constructor(Outer: UObject)
    open var ChangeId: Guid

    companion object {
        fun Load(ResourceName: String): NiagaraNode
        fun Find(Outer: UObject, ResourceName: String): NiagaraNode
        fun GetDefaultObject(): NiagaraNode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNode
        fun C(Other: UObject): NiagaraNode
        fun C(Other: Any): NiagaraNode
    }
}

external open class NiagaraNodeWithDynamicPins : NiagaraNode {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeWithDynamicPins
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeWithDynamicPins
        fun GetDefaultObject(): NiagaraNodeWithDynamicPins
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeWithDynamicPins
        fun C(Other: UObject): NiagaraNodeWithDynamicPins
        fun C(Other: Any): NiagaraNodeWithDynamicPins
    }
}

external open class NiagaraPropagatedVariable {
    open var SwitchParameter: NiagaraVariable
    open var PropagatedName: String
    open fun clone(): NiagaraPropagatedVariable

    companion object {
        fun C(Other: UObject): NiagaraPropagatedVariable
        fun C(Other: Any): NiagaraPropagatedVariable
    }
}

external open class NiagaraNodeFunctionCall : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var FunctionScript: NiagaraScript
    open var FunctionScriptAssetObjectPath: String
    open var Signature: NiagaraFunctionSignature
    open var FunctionSpecifiers: Any
    open var PropagatedStaticSwitchParameters: Array<NiagaraPropagatedVariable>
    open var CachedChangeId: Guid
    open var FunctionDisplayName: String
    open var MessageKeyToMessageMap: Any

    companion object {
        fun Load(ResourceName: String): NiagaraNodeFunctionCall
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeFunctionCall
        fun GetDefaultObject(): NiagaraNodeFunctionCall
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeFunctionCall
        fun C(Other: UObject): NiagaraNodeFunctionCall
        fun C(Other: Any): NiagaraNodeFunctionCall
    }
}

external open class NiagaraClipboardFunction : UObject {
    constructor()
    constructor(Outer: UObject)
    open var FunctionName: String
    open var DisplayName: String
    open var ScriptMode: String /* "ScriptAsset" | "Assignment" | "ENiagaraClipboardFunctionScriptMode_MAX" */
    open var Script: NiagaraScript
    open var AssignmentTargets: Array<NiagaraVariable>
    open var AssignmentDefaults: Array<String>
    open var Inputs: Array<NiagaraClipboardFunctionInput>
    open var OnPastedFunctionCallNodeDelegate: UnrealEngineDelegate<(PastedFunctionCall: NiagaraNodeFunctionCall) -> Unit>

    companion object {
        fun Load(ResourceName: String): NiagaraClipboardFunction
        fun Find(Outer: UObject, ResourceName: String): NiagaraClipboardFunction
        fun GetDefaultObject(): NiagaraClipboardFunction
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraClipboardFunction
        fun C(Other: UObject): NiagaraClipboardFunction
        fun C(Other: Any): NiagaraClipboardFunction
    }
}

external open class NiagaraClipboardFunctionInput : UObject {
    constructor()
    constructor(Outer: UObject)
    open var InputName: String
    open var InputType: NiagaraTypeDefinition
    open var bHasEditCondition: Boolean
    open var bEditConditionValue: Boolean
    open var ValueMode: String /* "Local" | "Linked" | "Data" | "Expression" | "Dynamic" | "ENiagaraClipboardFunctionInputValueMode_MAX" */
    open var Local: Array<Number>
    open var Linked: String
    open var Data: NiagaraDataInterface
    open var Expression: String
    open var Dynamic: NiagaraClipboardFunction

    companion object {
        fun Load(ResourceName: String): NiagaraClipboardFunctionInput
        fun Find(Outer: UObject, ResourceName: String): NiagaraClipboardFunctionInput
        fun GetDefaultObject(): NiagaraClipboardFunctionInput
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraClipboardFunctionInput
        fun C(Other: UObject): NiagaraClipboardFunctionInput
        fun C(Other: Any): NiagaraClipboardFunctionInput
    }
}

external object ENiagaraDefaultMode {
    var Value: String /* "Value" */
    var Binding: String /* "Binding" */
    var Custom: String /* "Custom" */
    var ENiagaraDefaultMode_MAX: String /* "ENiagaraDefaultMode_MAX" */
}

external open class NiagaraScriptVariableBinding {
    open var Name: String
    open fun clone(): NiagaraScriptVariableBinding

    companion object {
        fun C(Other: UObject): NiagaraScriptVariableBinding
        fun C(Other: Any): NiagaraScriptVariableBinding
    }
}

external open class NiagaraInputConditionMetadata {
    open var InputName: String
    open var TargetValues: Array<String>
    open fun clone(): NiagaraInputConditionMetadata

    companion object {
        fun C(Other: UObject): NiagaraInputConditionMetadata
        fun C(Other: Any): NiagaraInputConditionMetadata
    }
}

external object ENiagaraScriptParameterUsage {
    var Input: String /* "Input" */
    var Output: String /* "Output" */
    var Local: String /* "Local" */
    var InputOutput: String /* "InputOutput" */
    var InitialValueInput: String /* "InitialValueInput" */
    var None: String /* "None" */
    var Num: String /* "Num" */
    var ENiagaraScriptParameterUsage_MAX: String /* "ENiagaraScriptParameterUsage_MAX" */
}

external open class NiagaraVariableMetaData {
    open var Description: String
    open var CategoryName: String
    open var bAdvancedDisplay: Boolean
    open var EditorSortPriority: Number
    open var bInlineEditConditionToggle: Boolean
    open var editcondition: NiagaraInputConditionMetadata
    open var VisibleCondition: NiagaraInputConditionMetadata
    open var PropertyMetaData: Any
    open var ParentAttribute: String
    open var ScopeName: String
    open var Usage: String /* "Input" | "Output" | "Local" | "InputOutput" | "InitialValueInput" | "None" | "Num" | "ENiagaraScriptParameterUsage_MAX" */
    open var bIsStaticSwitch: Boolean
    open var StaticSwitchDefaultValue: Number
    open var bAddedToNodeGraphDeepCopy: Boolean
    open var bOutputIsPersistent: Boolean
    open var CachedNamespacelessVariableName: String
    open var bCreatedInSystemEditor: Boolean
    open var bUseLegacyNameString: Boolean
    open fun clone(): NiagaraVariableMetaData

    companion object {
        fun C(Other: UObject): NiagaraVariableMetaData
        fun C(Other: Any): NiagaraVariableMetaData
    }
}

external open class NiagaraScriptVariable : UObject {
    constructor()
    constructor(Outer: UObject)
    open var DefaultMode: String /* "Value" | "Binding" | "Custom" | "ENiagaraDefaultMode_MAX" */
    open var DefaultBinding: NiagaraScriptVariableBinding
    open var Variable: NiagaraVariable
    open var MetaData: NiagaraVariableMetaData

    companion object {
        fun Load(ResourceName: String): NiagaraScriptVariable
        fun Find(Outer: UObject, ResourceName: String): NiagaraScriptVariable
        fun GetDefaultObject(): NiagaraScriptVariable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraScriptVariable
        fun C(Other: UObject): NiagaraScriptVariable
        fun C(Other: Any): NiagaraScriptVariable
    }
}

external open class NiagaraClipboardContent : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Functions: Array<NiagaraClipboardFunction>
    open var FunctionInputs: Array<NiagaraClipboardFunctionInput>
    open var Renderers: Array<NiagaraRendererProperties>
    open var Scripts: Array<NiagaraScript>
    open var ScriptVariables: Array<NiagaraScriptVariable>

    companion object {
        fun Load(ResourceName: String): NiagaraClipboardContent
        fun Find(Outer: UObject, ResourceName: String): NiagaraClipboardContent
        fun GetDefaultObject(): NiagaraClipboardContent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraClipboardContent
        fun C(Other: UObject): NiagaraClipboardContent
        fun C(Other: Any): NiagaraClipboardContent
    }
}

external interface `T$2` {
    var bOutSucceeded: Boolean
}

external interface `T$3` {
    var bOutSucceeded: Boolean
    var OutValue: Number
}

external interface `T$4` {
    var bOutSucceeded: Boolean
    var OutInput: NiagaraClipboardFunctionInput
}

external open class NiagaraClipboardEditorScriptingUtilities : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraClipboardEditorScriptingUtilities
        fun Find(Outer: UObject, ResourceName: String): NiagaraClipboardEditorScriptingUtilities
        fun GetDefaultObject(): NiagaraClipboardEditorScriptingUtilities
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraClipboardEditorScriptingUtilities
        fun TrySetLocalValueAsInt(InInput: NiagaraClipboardFunctionInput, bOutSucceeded: Boolean = definedExternally, InValue: Number = definedExternally, bLooseTyping: Boolean = definedExternally): `T$2`
        fun TryGetLocalValueAsInt(InInput: NiagaraClipboardFunctionInput, bOutSucceeded: Boolean = definedExternally, OutValue: Number = definedExternally): `T$3`
        fun TryGetLocalValueAsFloat(InInput: NiagaraClipboardFunctionInput, bOutSucceeded: Boolean = definedExternally, OutValue: Number = definedExternally): `T$3`
        fun TryGetInputByName(InInputs: Array<NiagaraClipboardFunctionInput>, InInputName: String, bOutSucceeded: Boolean = definedExternally, OutInput: NiagaraClipboardFunctionInput = definedExternally): `T$4`
        fun GetTypeName(InInput: NiagaraClipboardFunctionInput): String
        fun CreateVec3LocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InVec3Value: Vector): NiagaraClipboardFunctionInput
        fun CreateVec2LocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InVec2Value: Vector2D): NiagaraClipboardFunctionInput
        fun CreateStructLocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InStructValue: UserDefinedStruct): NiagaraClipboardFunctionInput
        fun CreateLinkedValueInput(InOuter: UObject, InInputName: String, InInputTypeName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InLinkedValue: String): NiagaraClipboardFunctionInput
        fun CreateIntLocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InLocalValue: Number): NiagaraClipboardFunctionInput
        fun CreateFloatLocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InLocalValue: Number): NiagaraClipboardFunctionInput
        fun CreateExpressionValueInput(InOuter: UObject, InInputName: String, InInputTypeName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InExpressionValue: String): NiagaraClipboardFunctionInput
        fun CreateEnumLocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditCoditionValue: Boolean, InEnumType: UserDefinedEnum, InEnumValue: Number): NiagaraClipboardFunctionInput
        fun CreateDynamicValueInput(InOuter: UObject, InInputName: String, InInputTypeName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InDynamicValueName: String, InDynamicValue: NiagaraScript): NiagaraClipboardFunctionInput
        fun CreateDataValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InDataValue: NiagaraDataInterface): NiagaraClipboardFunctionInput
        fun CreateBoolLocalValueInput(InOuter: UObject, InInputName: String, bInHasEditCondition: Boolean, bInEditConditionValue: Boolean, InBoolValue: Boolean): NiagaraClipboardFunctionInput
        fun C(Other: UObject): NiagaraClipboardEditorScriptingUtilities
        fun C(Other: Any): NiagaraClipboardEditorScriptingUtilities
    }
}

external open class NiagaraConvertInPlaceEmitterAndSystemState : NiagaraConvertInPlaceUtilityBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraConvertInPlaceEmitterAndSystemState
        fun Find(Outer: UObject, ResourceName: String): NiagaraConvertInPlaceEmitterAndSystemState
        fun GetDefaultObject(): NiagaraConvertInPlaceEmitterAndSystemState
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraConvertInPlaceEmitterAndSystemState
        fun C(Other: UObject): NiagaraConvertInPlaceEmitterAndSystemState
        fun C(Other: Any): NiagaraConvertInPlaceEmitterAndSystemState
    }
}

external open class NiagaraSpawnShortcut {
    open var Name: String
    open var Input: InputChord
    open fun clone(): NiagaraSpawnShortcut

    companion object {
        fun C(Other: UObject): NiagaraSpawnShortcut
        fun C(Other: Any): NiagaraSpawnShortcut
    }
}

external object ENiagaraNamespaceMetadataOptions {
    var HideInScript: String /* "HideInScript" */
    var HideInSystem: String /* "HideInSystem" */
    var AdvancedInScript: String /* "AdvancedInScript" */
    var AdvancedInSystem: String /* "AdvancedInSystem" */
    var PreventEditingNamespace: String /* "PreventEditingNamespace" */
    var PreventEditingNamespaceModifier: String /* "PreventEditingNamespaceModifier" */
    var PreventEditingName: String /* "PreventEditingName" */
    var PreventCreatingInSystemEditor: String /* "PreventCreatingInSystemEditor" */
    var ENiagaraNamespaceMetadataOptions_MAX: String /* "ENiagaraNamespaceMetadataOptions_MAX" */
}

external open class NiagaraNamespaceMetadata {
    open var Namespaces: Array<String>
    open var RequiredNamespaceModifier: String
    open var DisplayName: String
    open var DisplayNameLong: String
    open var Description: String
    open var BackgroundColor: LinearColor
    open var ForegroundStyle: String
    open var SortId: Number
    open var OptionalNamespaceModifiers: Array<String>
    open var Options: Array<String /* "HideInScript" | "HideInSystem" | "AdvancedInScript" | "AdvancedInSystem" | "PreventEditingNamespace" | "PreventEditingNamespaceModifier" | "PreventEditingName" | "PreventCreatingInSystemEditor" | "ENiagaraNamespaceMetadataOptions_MAX" */>
    open fun clone(): NiagaraNamespaceMetadata

    companion object {
        fun C(Other: UObject): NiagaraNamespaceMetadata
        fun C(Other: Any): NiagaraNamespaceMetadata
    }
}

external open class NiagaraEditorSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)
    open var DefaultScript: SoftObjectPath
    open var DefaultDynamicInputScript: SoftObjectPath
    open var DefaultFunctionScript: SoftObjectPath
    open var DefaultModuleScript: SoftObjectPath
    open var RequiredSystemUpdateScript: SoftObjectPath
    open var GraphCreationShortcuts: Array<NiagaraSpawnShortcut>
    open var bAutoCompile: Boolean
    open var bAutoPlay: Boolean
    open var bResetSimulationOnChange: Boolean
    open var bResimulateOnChangeWhilePaused: Boolean
    open var bResetDependentSystemsWhenEditingEmitters: Boolean
    open var bDisplayAdvancedParameterPanelCategories: Boolean
    open var NewAssetDialogConfigMap: Any
    open var HLSLKeywordReplacements: Any
    open var NamespaceMetadata: Array<NiagaraNamespaceMetadata>
    open var NamespaceModifierMetadata: Array<NiagaraNamespaceMetadata>
    open var DefaultNamespaceMetadata: NiagaraNamespaceMetadata
    open var DefaultNamespaceModifierMetadata: NiagaraNamespaceMetadata

    companion object {
        fun Load(ResourceName: String): NiagaraEditorSettings
        fun Find(Outer: UObject, ResourceName: String): NiagaraEditorSettings
        fun GetDefaultObject(): NiagaraEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraEditorSettings
        fun C(Other: UObject): NiagaraEditorSettings
        fun C(Other: Any): NiagaraEditorSettings
    }
}

external open class NiagaraEffectTypeFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraEffectTypeFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraEffectTypeFactoryNew
        fun GetDefaultObject(): NiagaraEffectTypeFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraEffectTypeFactoryNew
        fun C(Other: UObject): NiagaraEffectTypeFactoryNew
        fun C(Other: Any): NiagaraEffectTypeFactoryNew
    }
}

external open class NiagaraStackEditorData : NiagaraEditorDataBase {
    constructor()
    constructor(Outer: UObject)
    open var StackEntryKeyToDisplayName: Any
    open var DismissedStackIssueIds: Array<String>

    companion object {
        fun Load(ResourceName: String): NiagaraStackEditorData
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEditorData
        fun GetDefaultObject(): NiagaraStackEditorData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEditorData
        fun C(Other: UObject): NiagaraStackEditorData
        fun C(Other: Any): NiagaraStackEditorData
    }
}

external open class NiagaraEmitterEditorData : NiagaraEditorDataBase {
    constructor()
    constructor(Outer: UObject)
    open var StackEditorData: NiagaraStackEditorData
    open var PlaybackRangeMin: Number
    open var PlaybackRangeMax: Number

    companion object {
        fun Load(ResourceName: String): NiagaraEmitterEditorData
        fun Find(Outer: UObject, ResourceName: String): NiagaraEmitterEditorData
        fun GetDefaultObject(): NiagaraEmitterEditorData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraEmitterEditorData
        fun C(Other: UObject): NiagaraEmitterEditorData
        fun C(Other: Any): NiagaraEmitterEditorData
    }
}

external open class NiagaraEmitterFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraEmitterFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraEmitterFactoryNew
        fun GetDefaultObject(): NiagaraEmitterFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraEmitterFactoryNew
        fun C(Other: UObject): NiagaraEmitterFactoryNew
        fun C(Other: Any): NiagaraEmitterFactoryNew
    }
}

external open class NiagaraCompileHashVisitorDebugInfo {
    open var UObject: String
    open var PropertyKeys: Array<String>
    open var PropertyValues: Array<String>
    open fun clone(): NiagaraCompileHashVisitorDebugInfo

    companion object {
        fun C(Other: UObject): NiagaraCompileHashVisitorDebugInfo
        fun C(Other: Any): NiagaraCompileHashVisitorDebugInfo
    }
}

external open class NiagaraGraphScriptUsageInfo {
    open var BaseId: Guid
    open var UsageType: String /* "Function" | "Module" | "DynamicInput" | "ParticleSpawnScript" | "ParticleSpawnScriptInterpolated" | "ParticleUpdateScript" | "ParticleEventScript" | "ParticleSimulationStageScript" | "ParticleGPUComputeScript" | "EmitterSpawnScript" | "EmitterUpdateScript" | "SystemSpawnScript" | "SystemUpdateScript" | "ENiagaraScriptUsage_MAX" */
    open var UsageId: Guid
    open var CompileHash: NiagaraCompileHash
    open var CompileHashFromGraph: NiagaraCompileHash
    open var CompileLastObjects: Array<NiagaraCompileHashVisitorDebugInfo>
    open var Traversal: Array<NiagaraNode>
    open var DataHash: Array<Number>
    open var GeneratedCompileId: Guid
    open fun clone(): NiagaraGraphScriptUsageInfo

    companion object {
        fun C(Other: UObject): NiagaraGraphScriptUsageInfo
        fun C(Other: Any): NiagaraGraphScriptUsageInfo
    }
}

external open class NiagaraGraph : EdGraph {
    constructor()
    constructor(Outer: UObject)
    open var ChangeId: Guid
    open var ForceRebuildId: Guid
    open var LastBuiltTraversalDataChangeId: Guid
    open var CachedUsageInfo: Array<NiagaraGraphScriptUsageInfo>
    open var VariableToMetaData: Any
    open var VariableToScriptVariable: Any
    open var ParameterToReferencesMap: Any

    companion object {
        fun Load(ResourceName: String): NiagaraGraph
        fun Find(Outer: UObject, ResourceName: String): NiagaraGraph
        fun GetDefaultObject(): NiagaraGraph
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraGraph
        fun C(Other: UObject): NiagaraGraph
        fun C(Other: Any): NiagaraGraph
    }
}

external open class NiagaraMessageData : NiagaraMessageDataBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraMessageData
        fun Find(Outer: UObject, ResourceName: String): NiagaraMessageData
        fun GetDefaultObject(): NiagaraMessageData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraMessageData
        fun C(Other: UObject): NiagaraMessageData
        fun C(Other: Any): NiagaraMessageData
    }
}

external object ENiagaraMessageSeverity {
    var CriticalError: String /* "CriticalError" */
    var Error: String /* "Error" */
    var PerformanceWarning: String /* "PerformanceWarning" */
    var Warning: String /* "Warning" */
    var Info: String /* "Info" */
    var ENiagaraMessageSeverity_MAX: String /* "ENiagaraMessageSeverity_MAX" */
}

external open class NiagaraMessageDataText : NiagaraMessageData {
    constructor()
    constructor(Outer: UObject)
    open var MessageText: String
    open var MessageSeverity: String /* "CriticalError" | "Error" | "PerformanceWarning" | "Warning" | "Info" | "ENiagaraMessageSeverity_MAX" */
    open var TopicName: String

    companion object {
        fun Load(ResourceName: String): NiagaraMessageDataText
        fun Find(Outer: UObject, ResourceName: String): NiagaraMessageDataText
        fun GetDefaultObject(): NiagaraMessageDataText
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraMessageDataText
        fun C(Other: UObject): NiagaraMessageDataText
        fun C(Other: Any): NiagaraMessageDataText
    }
}

external open class NiagaraNodeAssignment : NiagaraNodeFunctionCall {
    constructor()
    constructor(Outer: UObject)
    open var AssignmentTarget: NiagaraVariable
    open var AssignmentDefaultValue: String
    open var AssignmentTargets: Array<NiagaraVariable>
    open var AssignmentDefaultValues: Array<String>
    open var OldFunctionCallName: String

    companion object {
        fun Load(ResourceName: String): NiagaraNodeAssignment
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeAssignment
        fun GetDefaultObject(): NiagaraNodeAssignment
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeAssignment
        fun C(Other: UObject): NiagaraNodeAssignment
        fun C(Other: Any): NiagaraNodeAssignment
    }
}

external open class NiagaraConvertConnection {
    open var SourcePinId: Guid
    open var SourcePath: Array<String>
    open var DestinationPinId: Guid
    open var DestinationPath: Array<String>
    open fun clone(): NiagaraConvertConnection

    companion object {
        fun C(Other: UObject): NiagaraConvertConnection
        fun C(Other: Any): NiagaraConvertConnection
    }
}

external open class NiagaraConvertPinRecord {
    open var PinId: Guid
    open var Path: Array<String>
    open fun clone(): NiagaraConvertPinRecord

    companion object {
        fun C(Other: UObject): NiagaraConvertPinRecord
        fun C(Other: Any): NiagaraConvertPinRecord
    }
}

external open class NiagaraNodeConvert : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var AutowireSwizzle: String
    open var AutowireMakeType: NiagaraTypeDefinition
    open var AutowireBreakType: NiagaraTypeDefinition
    open var Connections: Array<NiagaraConvertConnection>
    open var bIsWiringShown: Boolean
    open var ExpandedItems: Array<NiagaraConvertPinRecord>

    companion object {
        fun Load(ResourceName: String): NiagaraNodeConvert
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeConvert
        fun GetDefaultObject(): NiagaraNodeConvert
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeConvert
        fun C(Other: UObject): NiagaraNodeConvert
        fun C(Other: Any): NiagaraNodeConvert
    }
}

external open class NiagaraNodeCustomHlsl : NiagaraNodeFunctionCall {
    constructor()
    constructor(Outer: UObject)
    open var ScriptUsage: String /* "Function" | "Module" | "DynamicInput" | "ParticleSpawnScript" | "ParticleSpawnScriptInterpolated" | "ParticleUpdateScript" | "ParticleEventScript" | "ParticleSimulationStageScript" | "ParticleGPUComputeScript" | "EmitterSpawnScript" | "EmitterUpdateScript" | "SystemSpawnScript" | "SystemUpdateScript" | "ENiagaraScriptUsage_MAX" */
    open var CustomHlsl: String

    companion object {
        fun Load(ResourceName: String): NiagaraNodeCustomHlsl
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeCustomHlsl
        fun GetDefaultObject(): NiagaraNodeCustomHlsl
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeCustomHlsl
        fun C(Other: UObject): NiagaraNodeCustomHlsl
        fun C(Other: Any): NiagaraNodeCustomHlsl
    }
}

external open class NiagaraNodeDataSetBase : NiagaraNode {
    constructor()
    constructor(Outer: UObject)
    open var DataSet: NiagaraDataSetID
    open var Variables: Array<NiagaraVariable>
    open var VariableFriendlyNames: Array<String>
    open var ExternalStructAsset: Struct

    companion object {
        fun Load(ResourceName: String): NiagaraNodeDataSetBase
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeDataSetBase
        fun GetDefaultObject(): NiagaraNodeDataSetBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeDataSetBase
        fun C(Other: UObject): NiagaraNodeDataSetBase
        fun C(Other: Any): NiagaraNodeDataSetBase
    }
}

external open class NiagaraNodeEmitter : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var OwnerSystem: NiagaraSystem
    open var EmitterHandleId: Guid
    open var DisplayName: String
    open var ScriptType: String /* "Function" | "Module" | "DynamicInput" | "ParticleSpawnScript" | "ParticleSpawnScriptInterpolated" | "ParticleUpdateScript" | "ParticleEventScript" | "ParticleSimulationStageScript" | "ParticleGPUComputeScript" | "EmitterSpawnScript" | "EmitterUpdateScript" | "SystemSpawnScript" | "SystemUpdateScript" | "ENiagaraScriptUsage_MAX" */

    companion object {
        fun Load(ResourceName: String): NiagaraNodeEmitter
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeEmitter
        fun GetDefaultObject(): NiagaraNodeEmitter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeEmitter
        fun C(Other: UObject): NiagaraNodeEmitter
        fun C(Other: Any): NiagaraNodeEmitter
    }
}

external open class PinGuidsForPath {
    open var OutputPinGuid: Guid
    open var InputAPinGuid: Guid
    open var InputBPinGuid: Guid
    open fun clone(): PinGuidsForPath

    companion object {
        fun C(Other: UObject): PinGuidsForPath
        fun C(Other: Any): PinGuidsForPath
    }
}

external open class NiagaraNodeIf : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var OutputVars: Array<NiagaraVariable>
    open var PathAssociatedPinGuids: Array<PinGuidsForPath>
    open var ConditionPinGuid: Guid

    companion object {
        fun Load(ResourceName: String): NiagaraNodeIf
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeIf
        fun GetDefaultObject(): NiagaraNodeIf
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeIf
        fun C(Other: UObject): NiagaraNodeIf
        fun C(Other: Any): NiagaraNodeIf
    }
}

external object ENiagaraInputNodeUsage {
    var Undefined: String /* "Undefined" */
    var Parameter: String /* "Parameter" */
    var Attribute: String /* "Attribute" */
    var SystemConstant: String /* "SystemConstant" */
    var TranslatorConstant: String /* "TranslatorConstant" */
    var RapidIterationParameter: String /* "RapidIterationParameter" */
    var ENiagaraInputNodeUsage_MAX: String /* "ENiagaraInputNodeUsage_MAX" */
}

external open class NiagaraInputExposureOptions {
    open var bExposed: Boolean
    open var bRequired: Boolean
    open var bCanAutoBind: Boolean
    open var bHidden: Boolean
    open fun clone(): NiagaraInputExposureOptions

    companion object {
        fun C(Other: UObject): NiagaraInputExposureOptions
        fun C(Other: Any): NiagaraInputExposureOptions
    }
}

external open class NiagaraNodeInput : NiagaraNode {
    constructor()
    constructor(Outer: UObject)
    open var Input: NiagaraVariable
    open var Usage: String /* "Undefined" | "Parameter" | "Attribute" | "SystemConstant" | "TranslatorConstant" | "RapidIterationParameter" | "ENiagaraInputNodeUsage_MAX" */
    open var CallSortPriority: Number
    open var ExposureOptions: NiagaraInputExposureOptions
    open var DataInterface: NiagaraDataInterface

    companion object {
        fun Load(ResourceName: String): NiagaraNodeInput
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeInput
        fun GetDefaultObject(): NiagaraNodeInput
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeInput
        fun C(Other: UObject): NiagaraNodeInput
        fun C(Other: Any): NiagaraNodeInput
    }
}

external open class AddedPinData {
    open var PinType: EdGraphPinType
    open var PinName: String
    open fun clone(): AddedPinData

    companion object {
        fun C(Other: UObject): AddedPinData
        fun C(Other: Any): AddedPinData
    }
}

external open class NiagaraNodeOp : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var OpName: String
    open var AddedPins: Array<AddedPinData>

    companion object {
        fun Load(ResourceName: String): NiagaraNodeOp
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeOp
        fun GetDefaultObject(): NiagaraNodeOp
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeOp
        fun C(Other: UObject): NiagaraNodeOp
        fun C(Other: Any): NiagaraNodeOp
    }
}

external open class NiagaraNodeOutput : NiagaraNode {
    constructor()
    constructor(Outer: UObject)
    open var Outputs: Array<NiagaraVariable>
    open var ScriptType: String /* "Function" | "Module" | "DynamicInput" | "ParticleSpawnScript" | "ParticleSpawnScriptInterpolated" | "ParticleUpdateScript" | "ParticleEventScript" | "ParticleSimulationStageScript" | "ParticleGPUComputeScript" | "EmitterSpawnScript" | "EmitterUpdateScript" | "SystemSpawnScript" | "SystemUpdateScript" | "ENiagaraScriptUsage_MAX" */
    open var ScriptTypeId: Guid
    open var ScriptTypeIndex: Number

    companion object {
        fun Load(ResourceName: String): NiagaraNodeOutput
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeOutput
        fun GetDefaultObject(): NiagaraNodeOutput
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeOutput
        fun C(Other: UObject): NiagaraNodeOutput
        fun C(Other: Any): NiagaraNodeOutput
    }
}

external open class NiagaraNodeParameterMapBase : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeParameterMapBase
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeParameterMapBase
        fun GetDefaultObject(): NiagaraNodeParameterMapBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeParameterMapBase
        fun C(Other: UObject): NiagaraNodeParameterMapBase
        fun C(Other: Any): NiagaraNodeParameterMapBase
    }
}

external open class NiagaraNodeParameterMapSet : NiagaraNodeParameterMapBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeParameterMapSet
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeParameterMapSet
        fun GetDefaultObject(): NiagaraNodeParameterMapSet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeParameterMapSet
        fun C(Other: UObject): NiagaraNodeParameterMapSet
        fun C(Other: Any): NiagaraNodeParameterMapSet
    }
}

external open class NiagaraNodeParameterMapFor : NiagaraNodeParameterMapSet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeParameterMapFor
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeParameterMapFor
        fun GetDefaultObject(): NiagaraNodeParameterMapFor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeParameterMapFor
        fun C(Other: UObject): NiagaraNodeParameterMapFor
        fun C(Other: Any): NiagaraNodeParameterMapFor
    }
}

external open class NiagaraNodeParameterMapGet : NiagaraNodeParameterMapBase {
    constructor()
    constructor(Outer: UObject)
    open var PinOutputToPinDefaultPersistentId: Any

    companion object {
        fun Load(ResourceName: String): NiagaraNodeParameterMapGet
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeParameterMapGet
        fun GetDefaultObject(): NiagaraNodeParameterMapGet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeParameterMapGet
        fun C(Other: UObject): NiagaraNodeParameterMapGet
        fun C(Other: Any): NiagaraNodeParameterMapGet
    }
}

external open class NiagaraNodeReadDataSet : NiagaraNodeDataSetBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeReadDataSet
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeReadDataSet
        fun GetDefaultObject(): NiagaraNodeReadDataSet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeReadDataSet
        fun C(Other: UObject): NiagaraNodeReadDataSet
        fun C(Other: Any): NiagaraNodeReadDataSet
    }
}

external open class NiagaraNodeReroute : NiagaraNode {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeReroute
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeReroute
        fun GetDefaultObject(): NiagaraNodeReroute
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeReroute
        fun C(Other: UObject): NiagaraNodeReroute
        fun C(Other: Any): NiagaraNodeReroute
    }
}

external open class NiagaraNodeUsageSelector : NiagaraNodeWithDynamicPins {
    constructor()
    constructor(Outer: UObject)
    open var OutputVars: Array<NiagaraVariable>
    open var OutputVarGuids: Array<Guid>

    companion object {
        fun Load(ResourceName: String): NiagaraNodeUsageSelector
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeUsageSelector
        fun GetDefaultObject(): NiagaraNodeUsageSelector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeUsageSelector
        fun C(Other: UObject): NiagaraNodeUsageSelector
        fun C(Other: Any): NiagaraNodeUsageSelector
    }
}

external open class NiagaraNodeSimTargetSelector : NiagaraNodeUsageSelector {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraNodeSimTargetSelector
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeSimTargetSelector
        fun GetDefaultObject(): NiagaraNodeSimTargetSelector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeSimTargetSelector
        fun C(Other: UObject): NiagaraNodeSimTargetSelector
        fun C(Other: Any): NiagaraNodeSimTargetSelector
    }
}

external object ENiagaraStaticSwitchType {
    var Bool: String /* "Bool" */
    var Integer: String /* "Integer" */
    var Enum: String /* "Enum" */
    var ENiagaraStaticSwitchType_MAX: String /* "ENiagaraStaticSwitchType_MAX" */
}

external open class StaticSwitchTypeData {
    open var SwitchType: String /* "Bool" | "Integer" | "Enum" | "ENiagaraStaticSwitchType_MAX" */
    open var MaxIntCount: Number
    open var Enum: Enum
    open var SwitchConstant: String
    open fun clone(): StaticSwitchTypeData

    companion object {
        fun C(Other: UObject): StaticSwitchTypeData
        fun C(Other: Any): StaticSwitchTypeData
    }
}

external open class NiagaraNodeStaticSwitch : NiagaraNodeUsageSelector {
    constructor()
    constructor(Outer: UObject)
    open var InputParameterName: String
    open var SwitchTypeData: StaticSwitchTypeData

    companion object {
        fun Load(ResourceName: String): NiagaraNodeStaticSwitch
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeStaticSwitch
        fun GetDefaultObject(): NiagaraNodeStaticSwitch
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeStaticSwitch
        fun C(Other: UObject): NiagaraNodeStaticSwitch
        fun C(Other: Any): NiagaraNodeStaticSwitch
    }
}

external open class NiagaraNodeWriteDataSet : NiagaraNodeDataSetBase {
    constructor()
    constructor(Outer: UObject)
    open var EventName: String

    companion object {
        fun Load(ResourceName: String): NiagaraNodeWriteDataSet
        fun Find(Outer: UObject, ResourceName: String): NiagaraNodeWriteDataSet
        fun GetDefaultObject(): NiagaraNodeWriteDataSet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraNodeWriteDataSet
        fun C(Other: UObject): NiagaraNodeWriteDataSet
        fun C(Other: Any): NiagaraNodeWriteDataSet
    }
}

external open class NiagaraOverviewNode : EdGraphNode {
    constructor()
    constructor(Outer: UObject)
    open var OwningSystem: NiagaraSystem
    open var EmitterHandleGuid: Guid

    companion object {
        fun Load(ResourceName: String): NiagaraOverviewNode
        fun Find(Outer: UObject, ResourceName: String): NiagaraOverviewNode
        fun GetDefaultObject(): NiagaraOverviewNode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraOverviewNode
        fun C(Other: UObject): NiagaraOverviewNode
        fun C(Other: Any): NiagaraOverviewNode
    }
}

external open class NiagaraParameterCollectionFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraParameterCollectionFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraParameterCollectionFactoryNew
        fun GetDefaultObject(): NiagaraParameterCollectionFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraParameterCollectionFactoryNew
        fun C(Other: UObject): NiagaraParameterCollectionFactoryNew
        fun C(Other: Any): NiagaraParameterCollectionFactoryNew
    }
}

external open class NiagaraParameterCollectionInstanceFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraParameterCollectionInstanceFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraParameterCollectionInstanceFactoryNew
        fun GetDefaultObject(): NiagaraParameterCollectionInstanceFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraParameterCollectionInstanceFactoryNew
        fun C(Other: UObject): NiagaraParameterCollectionInstanceFactoryNew
        fun C(Other: Any): NiagaraParameterCollectionInstanceFactoryNew
    }
}

external open class NiagaraScratchPadViewModel : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraScratchPadViewModel
        fun Find(Outer: UObject, ResourceName: String): NiagaraScratchPadViewModel
        fun GetDefaultObject(): NiagaraScratchPadViewModel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraScratchPadViewModel
        fun C(Other: UObject): NiagaraScratchPadViewModel
        fun C(Other: Any): NiagaraScratchPadViewModel
    }
}

external open class NiagaraScriptFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraScriptFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraScriptFactoryNew
        fun GetDefaultObject(): NiagaraScriptFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraScriptFactoryNew
        fun C(Other: UObject): NiagaraScriptFactoryNew
        fun C(Other: Any): NiagaraScriptFactoryNew
    }
}

external open class NiagaraModuleScriptFactory : NiagaraScriptFactoryNew {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraModuleScriptFactory
        fun Find(Outer: UObject, ResourceName: String): NiagaraModuleScriptFactory
        fun GetDefaultObject(): NiagaraModuleScriptFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraModuleScriptFactory
        fun C(Other: UObject): NiagaraModuleScriptFactory
        fun C(Other: Any): NiagaraModuleScriptFactory
    }
}

external open class NiagaraFunctionScriptFactory : NiagaraScriptFactoryNew {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraFunctionScriptFactory
        fun Find(Outer: UObject, ResourceName: String): NiagaraFunctionScriptFactory
        fun GetDefaultObject(): NiagaraFunctionScriptFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraFunctionScriptFactory
        fun C(Other: UObject): NiagaraFunctionScriptFactory
        fun C(Other: Any): NiagaraFunctionScriptFactory
    }
}

external open class NiagaraDynamicInputScriptFactory : NiagaraScriptFactoryNew {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraDynamicInputScriptFactory
        fun Find(Outer: UObject, ResourceName: String): NiagaraDynamicInputScriptFactory
        fun GetDefaultObject(): NiagaraDynamicInputScriptFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraDynamicInputScriptFactory
        fun C(Other: UObject): NiagaraDynamicInputScriptFactory
        fun C(Other: Any): NiagaraDynamicInputScriptFactory
    }
}

external open class NiagaraScriptSource : NiagaraScriptSourceBase {
    constructor()
    constructor(Outer: UObject)
    open var NodeGraph: NiagaraGraph

    companion object {
        fun Load(ResourceName: String): NiagaraScriptSource
        fun Find(Outer: UObject, ResourceName: String): NiagaraScriptSource
        fun GetDefaultObject(): NiagaraScriptSource
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraScriptSource
        fun C(Other: UObject): NiagaraScriptSource
        fun C(Other: Any): NiagaraScriptSource
    }
}

external open class NiagaraSequence : MovieSceneSequence {
    constructor()
    constructor(Outer: UObject)
    open var MovieScene: MovieScene

    companion object {
        fun Load(ResourceName: String): NiagaraSequence
        fun Find(Outer: UObject, ResourceName: String): NiagaraSequence
        fun GetDefaultObject(): NiagaraSequence
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSequence
        fun C(Other: UObject): NiagaraSequence
        fun C(Other: Any): NiagaraSequence
    }
}

external open class NiagaraSequencerTrackFilter : SequencerTrackFilterExtension {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraSequencerTrackFilter
        fun Find(Outer: UObject, ResourceName: String): NiagaraSequencerTrackFilter
        fun GetDefaultObject(): NiagaraSequencerTrackFilter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSequencerTrackFilter
        fun C(Other: UObject): NiagaraSequencerTrackFilter
        fun C(Other: Any): NiagaraSequencerTrackFilter
    }
}

external open class NiagaraStackErrorItem : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackErrorItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackErrorItem
        fun GetDefaultObject(): NiagaraStackErrorItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackErrorItem
        fun C(Other: UObject): NiagaraStackErrorItem
        fun C(Other: Any): NiagaraStackErrorItem
    }
}

external open class NiagaraStackEntry : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Children: Array<NiagaraStackEntry>
    open var ErrorChildren: Array<NiagaraStackErrorItem>

    companion object {
        fun Load(ResourceName: String): NiagaraStackEntry
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEntry
        fun GetDefaultObject(): NiagaraStackEntry
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEntry
        fun C(Other: UObject): NiagaraStackEntry
        fun C(Other: Any): NiagaraStackEntry
    }
}

external open class NiagaraStackItemFooter : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackItemFooter
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItemFooter
        fun GetDefaultObject(): NiagaraStackItemFooter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItemFooter
        fun C(Other: UObject): NiagaraStackItemFooter
        fun C(Other: Any): NiagaraStackItemFooter
    }
}

external open class NiagaraStackItem : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)
    open var ItemFooter: NiagaraStackItemFooter

    companion object {
        fun Load(ResourceName: String): NiagaraStackItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItem
        fun GetDefaultObject(): NiagaraStackItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItem
        fun C(Other: UObject): NiagaraStackItem
        fun C(Other: Any): NiagaraStackItem
    }
}

external open class NiagaraStackItemContent : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackItemContent
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItemContent
        fun GetDefaultObject(): NiagaraStackItemContent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItemContent
        fun C(Other: UObject): NiagaraStackItemContent
        fun C(Other: Any): NiagaraStackItemContent
    }
}

external open class NiagaraStackObject : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackObject
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackObject
        fun GetDefaultObject(): NiagaraStackObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackObject
        fun C(Other: UObject): NiagaraStackObject
        fun C(Other: Any): NiagaraStackObject
    }
}

external open class NiagaraStackEmitterPropertiesItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var EmitterObject: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackEmitterPropertiesItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEmitterPropertiesItem
        fun GetDefaultObject(): NiagaraStackEmitterPropertiesItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEmitterPropertiesItem
        fun C(Other: UObject): NiagaraStackEmitterPropertiesItem
        fun C(Other: Any): NiagaraStackEmitterPropertiesItem
    }
}

external open class NiagaraStackItemGroupFooter : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackItemGroupFooter
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItemGroupFooter
        fun GetDefaultObject(): NiagaraStackItemGroupFooter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItemGroupFooter
        fun C(Other: UObject): NiagaraStackItemGroupFooter
        fun C(Other: Any): NiagaraStackItemGroupFooter
    }
}

external open class NiagaraStackItemGroup : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)
    open var GroupFooter: NiagaraStackItemGroupFooter

    companion object {
        fun Load(ResourceName: String): NiagaraStackItemGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItemGroup
        fun GetDefaultObject(): NiagaraStackItemGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItemGroup
        fun C(Other: UObject): NiagaraStackItemGroup
        fun C(Other: Any): NiagaraStackItemGroup
    }
}

external open class NiagaraStackEmitterSettingsGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)
    open var PropertiesItem: NiagaraStackEmitterPropertiesItem

    companion object {
        fun Load(ResourceName: String): NiagaraStackEmitterSettingsGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEmitterSettingsGroup
        fun GetDefaultObject(): NiagaraStackEmitterSettingsGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEmitterSettingsGroup
        fun C(Other: UObject): NiagaraStackEmitterSettingsGroup
        fun C(Other: Any): NiagaraStackEmitterSettingsGroup
    }
}

external open class NiagaraStackErrorItemLongDescription : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackErrorItemLongDescription
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackErrorItemLongDescription
        fun GetDefaultObject(): NiagaraStackErrorItemLongDescription
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackErrorItemLongDescription
        fun C(Other: UObject): NiagaraStackErrorItemLongDescription
        fun C(Other: Any): NiagaraStackErrorItemLongDescription
    }
}

external open class NiagaraStackErrorItemFix : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackErrorItemFix
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackErrorItemFix
        fun GetDefaultObject(): NiagaraStackErrorItemFix
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackErrorItemFix
        fun C(Other: UObject): NiagaraStackErrorItemFix
        fun C(Other: Any): NiagaraStackErrorItemFix
    }
}

external open class NiagaraStackErrorItemDismiss : NiagaraStackErrorItemFix {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackErrorItemDismiss
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackErrorItemDismiss
        fun GetDefaultObject(): NiagaraStackErrorItemDismiss
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackErrorItemDismiss
        fun C(Other: UObject): NiagaraStackErrorItemDismiss
        fun C(Other: Any): NiagaraStackErrorItemDismiss
    }
}

external open class NiagaraStackEventHandlerGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackEventHandlerGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEventHandlerGroup
        fun GetDefaultObject(): NiagaraStackEventHandlerGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEventHandlerGroup
        fun C(Other: UObject): NiagaraStackEventHandlerGroup
        fun C(Other: Any): NiagaraStackEventHandlerGroup
    }
}

external open class NiagaraStackEventHandlerPropertiesItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var EmitterObject: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackEventHandlerPropertiesItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEventHandlerPropertiesItem
        fun GetDefaultObject(): NiagaraStackEventHandlerPropertiesItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEventHandlerPropertiesItem
        fun C(Other: UObject): NiagaraStackEventHandlerPropertiesItem
        fun C(Other: Any): NiagaraStackEventHandlerPropertiesItem
    }
}

external open class NiagaraStackScriptItemGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackScriptItemGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackScriptItemGroup
        fun GetDefaultObject(): NiagaraStackScriptItemGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackScriptItemGroup
        fun C(Other: UObject): NiagaraStackScriptItemGroup
        fun C(Other: Any): NiagaraStackScriptItemGroup
    }
}

external open class NiagaraStackEventScriptItemGroup : NiagaraStackScriptItemGroup {
    constructor()
    constructor(Outer: UObject)
    open var EventHandlerProperties: NiagaraStackEventHandlerPropertiesItem

    companion object {
        fun Load(ResourceName: String): NiagaraStackEventScriptItemGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackEventScriptItemGroup
        fun GetDefaultObject(): NiagaraStackEventScriptItemGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackEventScriptItemGroup
        fun C(Other: UObject): NiagaraStackEventScriptItemGroup
        fun C(Other: Any): NiagaraStackEventScriptItemGroup
    }
}

external open class NiagaraStackFunctionInput : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackFunctionInput
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackFunctionInput
        fun GetDefaultObject(): NiagaraStackFunctionInput
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackFunctionInput
        fun C(Other: UObject): NiagaraStackFunctionInput
        fun C(Other: Any): NiagaraStackFunctionInput
    }
}

external open class NiagaraStackFunctionInputCollection : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackFunctionInputCollection
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackFunctionInputCollection
        fun GetDefaultObject(): NiagaraStackFunctionInputCollection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackFunctionInputCollection
        fun C(Other: UObject): NiagaraStackFunctionInputCollection
        fun C(Other: Any): NiagaraStackFunctionInputCollection
    }
}

external open class NiagaraStackInputCategory : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackInputCategory
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackInputCategory
        fun GetDefaultObject(): NiagaraStackInputCategory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackInputCategory
        fun C(Other: UObject): NiagaraStackInputCategory
        fun C(Other: Any): NiagaraStackInputCategory
    }
}

external open class NiagaraStackItemTextContent : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackItemTextContent
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackItemTextContent
        fun GetDefaultObject(): NiagaraStackItemTextContent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackItemTextContent
        fun C(Other: UObject): NiagaraStackItemTextContent
        fun C(Other: Any): NiagaraStackItemTextContent
    }
}

external open class NiagaraStackModuleItemLinkedInputCollection : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackModuleItemLinkedInputCollection
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackModuleItemLinkedInputCollection
        fun GetDefaultObject(): NiagaraStackModuleItemLinkedInputCollection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackModuleItemLinkedInputCollection
        fun C(Other: UObject): NiagaraStackModuleItemLinkedInputCollection
        fun C(Other: Any): NiagaraStackModuleItemLinkedInputCollection
    }
}

external open class NiagaraStackModuleItemOutputCollection : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackModuleItemOutputCollection
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackModuleItemOutputCollection
        fun GetDefaultObject(): NiagaraStackModuleItemOutputCollection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackModuleItemOutputCollection
        fun C(Other: UObject): NiagaraStackModuleItemOutputCollection
        fun C(Other: Any): NiagaraStackModuleItemOutputCollection
    }
}

external open class NiagaraStackModuleItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var LinkedInputCollection: NiagaraStackModuleItemLinkedInputCollection
    open var InputCollection: NiagaraStackFunctionInputCollection
    open var OutputCollection: NiagaraStackModuleItemOutputCollection

    companion object {
        fun Load(ResourceName: String): NiagaraStackModuleItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackModuleItem
        fun GetDefaultObject(): NiagaraStackModuleItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackModuleItem
        fun C(Other: UObject): NiagaraStackModuleItem
        fun C(Other: Any): NiagaraStackModuleItem
    }
}

external open class NiagaraStackModuleItemOutput : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackModuleItemOutput
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackModuleItemOutput
        fun GetDefaultObject(): NiagaraStackModuleItemOutput
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackModuleItemOutput
        fun C(Other: UObject): NiagaraStackModuleItemOutput
        fun C(Other: Any): NiagaraStackModuleItemOutput
    }
}

external open class NiagaraStackParameterStoreEntry : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)
    open var ValueObjectEntry: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackParameterStoreEntry
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackParameterStoreEntry
        fun GetDefaultObject(): NiagaraStackParameterStoreEntry
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackParameterStoreEntry
        fun C(Other: UObject): NiagaraStackParameterStoreEntry
        fun C(Other: Any): NiagaraStackParameterStoreEntry
    }
}

external open class NiagaraStackPropertyRow : NiagaraStackItemContent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackPropertyRow
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackPropertyRow
        fun GetDefaultObject(): NiagaraStackPropertyRow
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackPropertyRow
        fun C(Other: UObject): NiagaraStackPropertyRow
        fun C(Other: Any): NiagaraStackPropertyRow
    }
}

external open class NiagaraStackRendererItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var RendererObject: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackRendererItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackRendererItem
        fun GetDefaultObject(): NiagaraStackRendererItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackRendererItem
        fun C(Other: UObject): NiagaraStackRendererItem
        fun C(Other: Any): NiagaraStackRendererItem
    }
}

external open class NiagaraStackRenderItemGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackRenderItemGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackRenderItemGroup
        fun GetDefaultObject(): NiagaraStackRenderItemGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackRenderItemGroup
        fun C(Other: UObject): NiagaraStackRenderItemGroup
        fun C(Other: Any): NiagaraStackRenderItemGroup
    }
}

external open class NiagaraStackSystemSettingsGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackSystemSettingsGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSystemSettingsGroup
        fun GetDefaultObject(): NiagaraStackSystemSettingsGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSystemSettingsGroup
        fun C(Other: UObject): NiagaraStackSystemSettingsGroup
        fun C(Other: Any): NiagaraStackSystemSettingsGroup
    }
}

external open class NiagaraStackSimulationStagesGroup : NiagaraStackItemGroup {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackSimulationStagesGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSimulationStagesGroup
        fun GetDefaultObject(): NiagaraStackSimulationStagesGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSimulationStagesGroup
        fun C(Other: UObject): NiagaraStackSimulationStagesGroup
        fun C(Other: Any): NiagaraStackSimulationStagesGroup
    }
}

external open class NiagaraStackRoot : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)
    open var SystemSettingsGroup: NiagaraStackSystemSettingsGroup
    open var SystemSpawnGroup: NiagaraStackScriptItemGroup
    open var SystemUpdateGroup: NiagaraStackScriptItemGroup
    open var EmitterSettingsGroup: NiagaraStackEmitterSettingsGroup
    open var EmitterSpawnGroup: NiagaraStackScriptItemGroup
    open var EmitterUpdateGroup: NiagaraStackScriptItemGroup
    open var ParticleSpawnGroup: NiagaraStackScriptItemGroup
    open var ParticleUpdateGroup: NiagaraStackScriptItemGroup
    open var AddEventHandlerGroup: NiagaraStackEventHandlerGroup
    open var AddSimulationStageGroup: NiagaraStackSimulationStagesGroup
    open var RenderGroup: NiagaraStackRenderItemGroup

    companion object {
        fun Load(ResourceName: String): NiagaraStackRoot
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackRoot
        fun GetDefaultObject(): NiagaraStackRoot
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackRoot
        fun C(Other: UObject): NiagaraStackRoot
        fun C(Other: Any): NiagaraStackRoot
    }
}

external open class NiagaraStackSelection : NiagaraStackEntry {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackSelection
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSelection
        fun GetDefaultObject(): NiagaraStackSelection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSelection
        fun C(Other: UObject): NiagaraStackSelection
        fun C(Other: Any): NiagaraStackSelection
    }
}

external open class NiagaraStackSimulationStagePropertiesItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var SimulationStageObject: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackSimulationStagePropertiesItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSimulationStagePropertiesItem
        fun GetDefaultObject(): NiagaraStackSimulationStagePropertiesItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSimulationStagePropertiesItem
        fun C(Other: UObject): NiagaraStackSimulationStagePropertiesItem
        fun C(Other: Any): NiagaraStackSimulationStagePropertiesItem
    }
}

external open class NiagaraStackSimulationStageGroup : NiagaraStackScriptItemGroup {
    constructor()
    constructor(Outer: UObject)
    open var SimulationStageProperties: NiagaraStackSimulationStagePropertiesItem

    companion object {
        fun Load(ResourceName: String): NiagaraStackSimulationStageGroup
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSimulationStageGroup
        fun GetDefaultObject(): NiagaraStackSimulationStageGroup
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSimulationStageGroup
        fun C(Other: UObject): NiagaraStackSimulationStageGroup
        fun C(Other: Any): NiagaraStackSimulationStageGroup
    }
}

external open class NiagaraStackSystemPropertiesItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)
    open var SystemObject: NiagaraStackObject

    companion object {
        fun Load(ResourceName: String): NiagaraStackSystemPropertiesItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackSystemPropertiesItem
        fun GetDefaultObject(): NiagaraStackSystemPropertiesItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackSystemPropertiesItem
        fun C(Other: UObject): NiagaraStackSystemPropertiesItem
        fun C(Other: Any): NiagaraStackSystemPropertiesItem
    }
}

external open class NiagaraStackParameterStoreItem : NiagaraStackItem {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraStackParameterStoreItem
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackParameterStoreItem
        fun GetDefaultObject(): NiagaraStackParameterStoreItem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackParameterStoreItem
        fun C(Other: UObject): NiagaraStackParameterStoreItem
        fun C(Other: Any): NiagaraStackParameterStoreItem
    }
}

external open class NiagaraStackViewModel : UObject {
    constructor()
    constructor(Outer: UObject)
    open var RootEntry: NiagaraStackEntry

    companion object {
        fun Load(ResourceName: String): NiagaraStackViewModel
        fun Find(Outer: UObject, ResourceName: String): NiagaraStackViewModel
        fun GetDefaultObject(): NiagaraStackViewModel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraStackViewModel
        fun C(Other: UObject): NiagaraStackViewModel
        fun C(Other: Any): NiagaraStackViewModel
    }
}

external open class NiagaraSystemAuditCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraSystemAuditCommandlet
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemAuditCommandlet
        fun GetDefaultObject(): NiagaraSystemAuditCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemAuditCommandlet
        fun C(Other: UObject): NiagaraSystemAuditCommandlet
        fun C(Other: Any): NiagaraSystemAuditCommandlet
    }
}

external open class NiagaraSystemEditorFolder : UObject {
    constructor()
    constructor(Outer: UObject)
    open var FolderName: String
    open var ChildFolders: Array<NiagaraSystemEditorFolder>
    open var ChildEmitterHandleIds: Array<Guid>

    companion object {
        fun Load(ResourceName: String): NiagaraSystemEditorFolder
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemEditorFolder
        fun GetDefaultObject(): NiagaraSystemEditorFolder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemEditorFolder
        fun C(Other: UObject): NiagaraSystemEditorFolder
        fun C(Other: Any): NiagaraSystemEditorFolder
    }
}

external open class NiagaraGraphViewSettings {
    open var Location: Vector2D
    open var Zoom: Number
    open var bIsValid: Boolean
    open fun clone(): NiagaraGraphViewSettings

    companion object {
        fun C(Other: UObject): NiagaraGraphViewSettings
        fun C(Other: Any): NiagaraGraphViewSettings
    }
}

external open class NiagaraSystemEditorData : NiagaraEditorDataBase {
    constructor()
    constructor(Outer: UObject)
    open var RootFolder: NiagaraSystemEditorFolder
    open var StackEditorData: NiagaraStackEditorData
    open var OwnerTransform: Transform
    open var PlaybackRangeMin: Number
    open var PlaybackRangeMax: Number
    open var SystemOverviewGraph: EdGraph
    open var OverviewGraphViewSettings: NiagaraGraphViewSettings
    open var bSystemIsPlaceholder: Boolean

    companion object {
        fun Load(ResourceName: String): NiagaraSystemEditorData
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemEditorData
        fun GetDefaultObject(): NiagaraSystemEditorData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemEditorData
        fun C(Other: UObject): NiagaraSystemEditorData
        fun C(Other: Any): NiagaraSystemEditorData
    }
}

external open class NiagaraSystemFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraSystemFactoryNew
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemFactoryNew
        fun GetDefaultObject(): NiagaraSystemFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemFactoryNew
        fun C(Other: UObject): NiagaraSystemFactoryNew
        fun C(Other: Any): NiagaraSystemFactoryNew
    }
}

external open class NiagaraSystemSelectionViewModel : UObject {
    constructor()
    constructor(Outer: UObject)
    open var StackSelection: NiagaraStackSelection
    open var SelectionStackViewModel: NiagaraStackViewModel

    companion object {
        fun Load(ResourceName: String): NiagaraSystemSelectionViewModel
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemSelectionViewModel
        fun GetDefaultObject(): NiagaraSystemSelectionViewModel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemSelectionViewModel
        fun C(Other: UObject): NiagaraSystemSelectionViewModel
        fun C(Other: Any): NiagaraSystemSelectionViewModel
    }
}

external open class NiagaraThumbnailRendererBase : TextureThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraThumbnailRendererBase
        fun Find(Outer: UObject, ResourceName: String): NiagaraThumbnailRendererBase
        fun GetDefaultObject(): NiagaraThumbnailRendererBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraThumbnailRendererBase
        fun C(Other: UObject): NiagaraThumbnailRendererBase
        fun C(Other: Any): NiagaraThumbnailRendererBase
    }
}

external open class NiagaraEmitterThumbnailRenderer : NiagaraThumbnailRendererBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraEmitterThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): NiagaraEmitterThumbnailRenderer
        fun GetDefaultObject(): NiagaraEmitterThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraEmitterThumbnailRenderer
        fun C(Other: UObject): NiagaraEmitterThumbnailRenderer
        fun C(Other: Any): NiagaraEmitterThumbnailRenderer
    }
}

external open class NiagaraSystemThumbnailRenderer : NiagaraThumbnailRendererBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): NiagaraSystemThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): NiagaraSystemThumbnailRenderer
        fun GetDefaultObject(): NiagaraSystemThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraSystemThumbnailRenderer
        fun C(Other: UObject): NiagaraSystemThumbnailRenderer
        fun C(Other: Any): NiagaraSystemThumbnailRenderer
    }
}

external open class AnimNotify_PlayNiagaraEffect : AnimNotify {
    constructor()
    constructor(Outer: UObject)
    open var Template: NiagaraSystem
    open var LocationOffset: Vector
    open var RotationOffset: Rotator
    open var Scale: Vector
    open var bAbsoluteScale: Boolean
    open var Attached: Boolean
    open var SocketName: String
    open fun GetSpawnedEffect(): FXSystemComponent

    companion object {
        fun Load(ResourceName: String): AnimNotify_PlayNiagaraEffect
        fun Find(Outer: UObject, ResourceName: String): AnimNotify_PlayNiagaraEffect
        fun GetDefaultObject(): AnimNotify_PlayNiagaraEffect
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AnimNotify_PlayNiagaraEffect
        fun C(Other: UObject): AnimNotify_PlayNiagaraEffect
        fun C(Other: Any): AnimNotify_PlayNiagaraEffect
    }
}

external open class AnimNotifyState_TimedNiagaraEffect : AnimNotifyState {
    constructor()
    constructor(Outer: UObject)
    open var Template: NiagaraSystem
    open var SocketName: String
    open var LocationOffset: Vector
    open var RotationOffset: Rotator
    open var bDestroyAtEnd: Boolean

    companion object {
        fun Load(ResourceName: String): AnimNotifyState_TimedNiagaraEffect
        fun Find(Outer: UObject, ResourceName: String): AnimNotifyState_TimedNiagaraEffect
        fun GetDefaultObject(): AnimNotifyState_TimedNiagaraEffect
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AnimNotifyState_TimedNiagaraEffect
        fun C(Other: UObject): AnimNotifyState_TimedNiagaraEffect
        fun C(Other: Any): AnimNotifyState_TimedNiagaraEffect
    }
}

external open class MagicLeapPlanesComponent : SceneComponent {
    constructor()
    constructor(Outer: UObject)
    open var QueryFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>
    open var SearchVolume: BoxComponent
    open var MaxResults: Number
    open var MinHolePerimeter: Number
    open var MinPlaneArea: Number
    open var QueryType: String /* "Bulk" | "Delta" | "EMagicLeapPlaneQueryType_MAX" */
    open var SimilarityThreshold: Number
    open var OnPlanesQueryResult: UnrealEngineMulticastDelegate<(bSuccess: Boolean, planes: Array<MagicLeapPlaneResult>, Polygons: Array<MagicLeapPlaneBoundaries>) -> Unit>
    open var OnPersistentPlanesQueryResult: UnrealEngineMulticastDelegate<(bSuccess: Boolean, QueryHandle: Guid, QueryType: String /* "Bulk" | "Delta" | "EMagicLeapPlaneQueryType_MAX" */, NewPlanes: Array<MagicLeapPlaneResult>, RemovedPlaneIDs: Array<Guid>, NewPolygons: Array<MagicLeapPlaneBoundaries>, RemovedPolygonIDs: Array<Guid>) -> Unit>
    open fun RequestPlanesAsync(): Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapPlanesComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapPlanesComponent
        fun GetDefaultObject(): MagicLeapPlanesComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapPlanesComponent
        fun C(Other: UObject): MagicLeapPlanesComponent
        fun C(Other: Any): MagicLeapPlanesComponent
    }
}

external interface `T$5` {
    var OutReorderedFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>
}

external interface `T$6` {
    var OutFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>
}

external open class MagicLeapPlanesFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapPlanesFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapPlanesFunctionLibrary
        fun GetDefaultObject(): MagicLeapPlanesFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapPlanesFunctionLibrary
        fun ReorderPlaneFlags(InPriority: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>, InFlagsToReorder: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>, OutReorderedFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */> = definedExternally): `T$5`
        fun RemovePersistentQuery(Handle: Guid): Boolean
        fun RemoveFlagsNotInQuery(InQueryFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>, InResultFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */>, OutFlags: Array<String /* "Vertical" | "Horizontal" | "Arbitrary" | "OrientToGravity" | "PreferInner" | "Ceiling" | "Floor" | "Wall" | "Polygons" | "EMagicLeapPlaneQueryFlags_MAX" */> = definedExternally): `T$6`
        fun IsTrackerValid(): Boolean
        fun GetContentScale(ContentActor: Actor, PlaneResult: MagicLeapPlaneResult): Transform
        fun DestroyTracker(): Boolean
        fun CreateTracker(): Boolean
        fun AddPersistentQuery(PersistentQueryType: String /* "Bulk" | "Delta" | "EMagicLeapPlaneQueryType_MAX" */): Guid
        fun C(Other: UObject): MagicLeapPlanesFunctionLibrary
        fun C(Other: Any): MagicLeapPlanesFunctionLibrary
    }
}

external open class MagicLeapLightingTrackingComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var UseGlobalAmbience: Boolean
    open var UseColorTemp: Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapLightingTrackingComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapLightingTrackingComponent
        fun GetDefaultObject(): MagicLeapLightingTrackingComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapLightingTrackingComponent
        fun C(Other: UObject): MagicLeapLightingTrackingComponent
        fun C(Other: Any): MagicLeapLightingTrackingComponent
    }
}

external interface `T$7` {
    var ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState
    var `$`: Boolean
}

external open class MagicLeapLightEstimationColorTemperatureState {
    open var ColorTemperatureKelvin: Number
    open var AmbientColor: LinearColor
    open var Timestamp: Timespan
    open fun clone(): MagicLeapLightEstimationColorTemperatureState
    open fun GetColorTemperatureState(): `T$7`

    companion object {
        fun C(Other: UObject): MagicLeapLightEstimationColorTemperatureState
        fun C(Other: Any): MagicLeapLightEstimationColorTemperatureState
        fun GetColorTemperatureState(ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState = definedExternally): `T$7`
    }
}

external interface `T$8` {
    var GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState
    var `$`: Boolean
}

external open class MagicLeapLightEstimationAmbientGlobalState {
    open var AmbientIntensityNits: Array<Number>
    open var Timestamp: Timespan
    open fun clone(): MagicLeapLightEstimationAmbientGlobalState
    open fun GetAmbientGlobalState(): `T$8`

    companion object {
        fun C(Other: UObject): MagicLeapLightEstimationAmbientGlobalState
        fun C(Other: Any): MagicLeapLightEstimationAmbientGlobalState
        fun GetAmbientGlobalState(GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState = definedExternally): `T$8`
    }
}

external open class MagicLeapLightEstimationFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapLightEstimationFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapLightEstimationFunctionLibrary
        fun GetDefaultObject(): MagicLeapLightEstimationFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapLightEstimationFunctionLibrary
        fun IsTrackerValid(): Boolean
        fun GetColorTemperatureState(ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState = definedExternally): `T$7`
        fun GetAmbientGlobalState(GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState = definedExternally): `T$8`
        fun DestroyTracker()
        fun CreateTracker(): Boolean
        fun C(Other: UObject): MagicLeapLightEstimationFunctionLibrary
        fun C(Other: Any): MagicLeapLightEstimationFunctionLibrary
    }
}

external object EMagicLeapAutoPinType {
    var OnlyOnDataRestoration: String /* "OnlyOnDataRestoration" */
    var Always: String /* "Always" */
    var Never: String /* "Never" */
    var EMagicLeapAutoPinType_MAX: String /* "EMagicLeapAutoPinType_MAX" */
}

external open class MagicLeapARPinSaveGame : SaveGame {
    constructor()
    constructor(Outer: UObject)
    open var PinnedID: Guid
    open var ComponentWorldTransform: Transform
    open var PinTransform: Transform
    open var bShouldPinActor: Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapARPinSaveGame
        fun Find(Outer: UObject, ResourceName: String): MagicLeapARPinSaveGame
        fun GetDefaultObject(): MagicLeapARPinSaveGame
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinSaveGame
        fun C(Other: UObject): MagicLeapARPinSaveGame
        fun C(Other: Any): MagicLeapARPinSaveGame
    }
}

external interface `T$9` {
    var OutPinDataValid: Boolean
    var `$`: MagicLeapARPinSaveGame
}

external interface `T$10` {
    var State: MagicLeapARPinState
    var `$`: Boolean
}

external interface `T$11` {
    var PinId: Guid
    var `$`: Boolean
}

external open class MagicLeapARPinComponent : SceneComponent {
    constructor()
    constructor(Outer: UObject)
    open var ObjectUID: String
    open var UserIndex: Number
    open var AutoPinType: String /* "OnlyOnDataRestoration" | "Always" | "Never" | "EMagicLeapAutoPinType_MAX" */
    open var bShouldPinActor: Boolean
    open var PinDataClass: UnrealEngineClass
    open var SearchPinTypes: Any
    open var SearchVolume: SphereComponent
    open var OnPersistentEntityPinned: UnrealEngineMulticastDelegate<(bRestoredOrSynced: Boolean) -> Unit>
    open var OnPersistentEntityPinLost: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnPinDataLoadAttemptCompleted: UnrealEngineMulticastDelegate<(bDataRestored: Boolean) -> Unit>
    open var PinnedCFUID: Guid
    open var PinnedSceneComponent: SceneComponent
    open var PinData: MagicLeapARPinSaveGame
    open fun UnPin()
    open fun TryGetPinData(InPinDataClass: UnrealEngineClass, OutPinDataValid: Boolean = definedExternally): `T$9`
    open fun PinToRestoredOrSyncedID(): Boolean
    open fun PinToID(PinId: Guid): Boolean
    open fun PinToBestFit()
    open fun PinSceneComponent(ComponentToPin: SceneComponent): Boolean
    open fun PinRestoredOrSynced(): Boolean
    open fun PinActor(ActorToPin: Actor): Boolean
    open fun IsPinned(): Boolean
    open fun GetPinState(State: MagicLeapARPinState = definedExternally): `T$10`
    open fun GetPinnedPinID(PinId: Guid = definedExternally): `T$11`
    open fun GetPinData(PinDataClass: UnrealEngineClass): MagicLeapARPinSaveGame
    open fun AttemptPinDataRestorationAsync()
    open fun AttemptPinDataRestoration(): Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapARPinComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapARPinComponent
        fun GetDefaultObject(): MagicLeapARPinComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinComponent
        fun C(Other: UObject): MagicLeapARPinComponent
        fun C(Other: Any): MagicLeapARPinComponent
    }
}

external interface `T$12` {
    var CurrentGlobalFilter: MagicLeapARPinQuery
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$13` {
    var Pins: Array<Guid>
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$14` {
    var Pins: Array<Guid>
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external open class MagicLeapARPinQuery {
    open var Types: Any
    open var MaxResults: Number
    open var TargetPoint: Vector
    open var Radius: Number
    open var bSorted: Boolean
    open fun clone(): MagicLeapARPinQuery
    open fun GetGlobalQueryFilter(): `T$12`
    open fun QueryARPins(Pins: Array<Guid> = definedExternally): `T$13`
    open fun SetGlobalQueryFilter(): String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */

    companion object {
        fun C(Other: UObject): MagicLeapARPinQuery
        fun C(Other: Any): MagicLeapARPinQuery
        fun GetGlobalQueryFilter(CurrentGlobalFilter: MagicLeapARPinQuery = definedExternally): `T$12`
        fun QueryARPins(Query: MagicLeapARPinQuery, Pins: Array<Guid> = definedExternally): `T$14`
        fun SetGlobalQueryFilter(InGlobalFilter: MagicLeapARPinQuery): String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
    }
}

external interface `T$15` {
    var Pins: Array<Guid>
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$16` {
    var ARPinId: Guid
    var `$`: Boolean
}

external interface `T$17` {
    var Count: Number
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$18` {
    var PinId: Guid
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$19` {
    var Pins: Array<Guid>
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$20` {
    var State: MagicLeapARPinState
    var `$`: String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
}

external interface `T$21` {
    var Position: Vector
    var Orientation: Rotator
    var PinFoundInEnvironment: Boolean
    var `$`: Boolean
}

external open class MagicLeapARPinFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapARPinFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapARPinFunctionLibrary
        fun GetDefaultObject(): MagicLeapARPinFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinFunctionLibrary
        fun SetGlobalQueryFilter(InGlobalFilter: MagicLeapARPinQuery): String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
        fun SetContentBindingSaveGameUserIndex(UserIndex: Number)
        fun QueryARPins(Query: MagicLeapARPinQuery, Pins: Array<Guid> = definedExternally): `T$15`
        fun ParseStringToARPinId(PinIdString: String, ARPinId: Guid = definedExternally): `T$16`
        fun IsTrackerValid(): Boolean
        fun GetNumAvailableARPins(Count: Number = definedExternally): `T$17`
        fun GetGlobalQueryFilter(CurrentGlobalFilter: MagicLeapARPinQuery = definedExternally): `T$12`
        fun GetContentBindingSaveGameUserIndex(): Number
        fun GetClosestARPin(SearchPoint: Vector, PinId: Guid = definedExternally): `T$18`
        fun GetAvailableARPins(NumRequested: Number, Pins: Array<Guid> = definedExternally): `T$19`
        fun ToString(State: MagicLeapARPinState): String
        fun GetARPinState(PinId: Guid, State: MagicLeapARPinState = definedExternally): `T$20`
        fun GetARPinPositionAndOrientation_TrackingSpace(PinId: Guid, Position: Vector = definedExternally, Orientation: Rotator = definedExternally, PinFoundInEnvironment: Boolean = definedExternally): `T$21`
        fun GetARPinPositionAndOrientation(PinId: Guid, Position: Vector = definedExternally, Orientation: Rotator = definedExternally, PinFoundInEnvironment: Boolean = definedExternally): `T$21`
        fun DestroyTracker(): String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
        fun CreateTracker(): String /* "None" | "LowMapQuality" | "UnableToLocalize" | "Unavailable" | "PrivilegeDenied" | "InvalidParam" | "UnspecifiedFailure" | "PrivilegeRequestPending" | "StartupPending" | "SharedWorldNotEnabled" | "NotImplemented" | "PinNotFound" | "EMagicLeapPassableWorldError_MAX" */
        fun ToString(ARPinId: Guid): String
        fun C(Other: UObject): MagicLeapARPinFunctionLibrary
        fun C(Other: Any): MagicLeapARPinFunctionLibrary
    }
}

external open class MagicLeapARPinInfoActorBase(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var PinId: Guid
    open var bVisibilityOverride: Boolean
    open fun OnUpdateARPinState()

    companion object {
        fun GetDefaultObject(): MagicLeapARPinInfoActorBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinInfoActorBase
        fun C(Other: UObject): MagicLeapARPinInfoActorBase
        fun C(Other: Any): MagicLeapARPinInfoActorBase
    }
}

external open class MagicLeapARPinRenderer(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var bInfoActorsVisibilityOverride: Boolean
    open var AllInfoActors: Any
    open var ClassToSpawn: UnrealEngineClass
    open fun SetVisibilityOverride(InVisibilityOverride: Boolean)

    companion object {
        fun GetDefaultObject(): MagicLeapARPinRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinRenderer
        fun C(Other: UObject): MagicLeapARPinRenderer
        fun C(Other: Any): MagicLeapARPinRenderer
    }
}

external open class MagicLeapARPinSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var UpdateCheckFrequency: Number
    open var OnUpdatedEventTriggerDelta: MagicLeapARPinState

    companion object {
        fun Load(ResourceName: String): MagicLeapARPinSettings
        fun Find(Outer: UObject, ResourceName: String): MagicLeapARPinSettings
        fun GetDefaultObject(): MagicLeapARPinSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinSettings
        fun C(Other: UObject): MagicLeapARPinSettings
        fun C(Other: Any): MagicLeapARPinSettings
    }
}

external open class MagicLeapARPinContentBindings : SaveGame {
    constructor()
    constructor(Outer: UObject)
    open var AllContentBindings: Any

    companion object {
        fun Load(ResourceName: String): MagicLeapARPinContentBindings
        fun Find(Outer: UObject, ResourceName: String): MagicLeapARPinContentBindings
        fun GetDefaultObject(): MagicLeapARPinContentBindings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapARPinContentBindings
        fun C(Other: UObject): MagicLeapARPinContentBindings
        fun C(Other: Any): MagicLeapARPinContentBindings
    }
}

external open class MagicLeapImageTrackerComponent : SceneComponent {
    constructor()
    constructor(Outer: UObject)
    open var TargetImageTexture: Texture2D
    open var Name: String
    open var LongerDimension: Number
    open var bIsStationary: Boolean
    open var bUseUnreliablePose: Boolean
    open var AxisOrientation: String /* "ForwardAxisAsNormal" | "UpAxisAsNormal" | "EMagicLeapImageTargetOrientation_MAX" */
    open var OnSetImageTargetSucceeded: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnSetImageTargetFailed: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnImageTargetFound: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnImageTargetLost: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnImageTargetUnreliableTracking: UnrealEngineMulticastDelegate<(LastTrackedLocation: Vector, LastTrackedRotation: Rotator, NewUnreliableLocation: Vector, NewUnreliableRotation: Rotator) -> Unit>
    open fun SetTargetAsync(ImageTarget: Texture2D): Boolean
    open fun RemoveTargetAsync(): Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapImageTrackerComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapImageTrackerComponent
        fun GetDefaultObject(): MagicLeapImageTrackerComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapImageTrackerComponent
        fun C(Other: UObject): MagicLeapImageTrackerComponent
        fun C(Other: Any): MagicLeapImageTrackerComponent
    }
}

external open class MagicLeapImageTrackerFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapImageTrackerFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapImageTrackerFunctionLibrary
        fun GetDefaultObject(): MagicLeapImageTrackerFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapImageTrackerFunctionLibrary
        fun SetMaxSimultaneousTargets(MaxSimultaneousTargets: Number)
        fun IsImageTrackingEnabled(): Boolean
        fun GetMaxSimultaneousTargets(): Number
        fun EnableImageTracking(bEnable: Boolean)
        fun C(Other: UObject): MagicLeapImageTrackerFunctionLibrary
        fun C(Other: Any): MagicLeapImageTrackerFunctionLibrary
    }
}

external open class LuminARSessionFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LuminARSessionFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): LuminARSessionFunctionLibrary
        fun GetDefaultObject(): LuminARSessionFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminARSessionFunctionLibrary
        fun StartLuminARSession(WorldContextObject: UObject, LatentInfo: LatentActionInfo, Configuration: LuminARSessionConfig)
        fun C(Other: UObject): LuminARSessionFunctionLibrary
        fun C(Other: Any): LuminARSessionFunctionLibrary
    }
}

external object ELuminARTrackingState {
    var Tracking: String /* "Tracking" */
    var NotTracking: String /* "NotTracking" */
    var StoppedTracking: String /* "StoppedTracking" */
    var ELuminARTrackingState_MAX: String /* "ELuminARTrackingState_MAX" */
}

external interface `T$22` {
    var OutHitResults: Array<ARTraceResult>
    var `$`: Boolean
}

external open class LuminARFrameFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LuminARFrameFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): LuminARFrameFunctionLibrary
        fun GetDefaultObject(): LuminARFrameFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminARFrameFunctionLibrary
        fun LuminARLineTrace(WorldContextObject: UObject, ScreenPosition: Vector2D, TraceChannels: Any, OutHitResults: Array<ARTraceResult> = definedExternally): `T$22`
        fun GetTrackingState(): String /* "Tracking" | "NotTracking" | "StoppedTracking" | "ELuminARTrackingState_MAX" */
        fun C(Other: UObject): LuminARFrameFunctionLibrary
        fun C(Other: Any): LuminARFrameFunctionLibrary
    }
}

external open class LuminARImageTrackingFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LuminARImageTrackingFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): LuminARImageTrackingFunctionLibrary
        fun GetDefaultObject(): LuminARImageTrackingFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminARImageTrackingFunctionLibrary
        fun AddLuminRuntimeCandidateImageEx(SessionConfig: ARSessionConfig, CandidateTexture: Texture2D, FriendlyName: String, PhysicalWidth: Number, bUseUnreliablePose: Boolean, bImageIsStationary: Boolean, InAxisOrientation: String /* "ForwardAxisAsNormal" | "UpAxisAsNormal" | "EMagicLeapImageTargetOrientation_MAX" */): LuminARCandidateImage
        fun AddLuminRuntimeCandidateImage(SessionConfig: ARSessionConfig, CandidateTexture: Texture2D, FriendlyName: String, PhysicalWidth: Number, bUseUnreliablePose: Boolean, bImageIsStationary: Boolean): LuminARCandidateImage
        fun C(Other: UObject): LuminARImageTrackingFunctionLibrary
        fun C(Other: Any): LuminARImageTrackingFunctionLibrary
    }
}

external open class LuminAROrigin(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : AROriginActor {
    open var MRMeshComponent: MRMeshComponent
    open var PlaneSurfaceMaterial: MaterialInterface
    open var WireframeMaterial: MaterialInterface

    companion object {
        fun GetDefaultObject(): LuminAROrigin
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminAROrigin
        fun C(Other: UObject): LuminAROrigin
        fun C(Other: Any): LuminAROrigin
    }
}

external open class LuminARLightEstimate : ARBasicLightEstimate {
    constructor()
    constructor(Outer: UObject)
    open var AmbientIntensityNits: Array<Number>
    open fun GetAmbientIntensityNits(): Array<Number>

    companion object {
        fun Load(ResourceName: String): LuminARLightEstimate
        fun Find(Outer: UObject, ResourceName: String): LuminARLightEstimate
        fun GetDefaultObject(): LuminARLightEstimate
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminARLightEstimate
        fun C(Other: UObject): LuminARLightEstimate
        fun C(Other: Any): LuminARLightEstimate
    }
}

external object EMagicLeapControllerTrackingMode {
    var InputService: String /* "InputService" */
    var CoordinateFrameUID: String /* "CoordinateFrameUID" */
    var EMagicLeapControllerTrackingMode_MAX: String /* "EMagicLeapControllerTrackingMode_MAX" */
}

external object EMagicLeapControllerLEDPattern {
    var None: String /* "None" */
    var Clock01: String /* "Clock01" */
    var Clock02: String /* "Clock02" */
    var Clock03: String /* "Clock03" */
    var Clock04: String /* "Clock04" */
    var Clock05: String /* "Clock05" */
    var Clock06: String /* "Clock06" */
    var Clock07: String /* "Clock07" */
    var Clock08: String /* "Clock08" */
    var Clock09: String /* "Clock09" */
    var Clock10: String /* "Clock10" */
    var Clock11: String /* "Clock11" */
    var Clock12: String /* "Clock12" */
    var Clock01_07: String /* "Clock01_07" */
    var Clock02_08: String /* "Clock02_08" */
    var Clock03_09: String /* "Clock03_09" */
    var Clock04_10: String /* "Clock04_10" */
    var Clock05_11: String /* "Clock05_11" */
    var Clock06_12: String /* "Clock06_12" */
    var EMagicLeapControllerLEDPattern_MAX: String /* "EMagicLeapControllerLEDPattern_MAX" */
}

external object EMagicLeapControllerLEDColor {
    var BrightMissionRed: String /* "BrightMissionRed" */
    var PastelMissionRed: String /* "PastelMissionRed" */
    var BrightFloridaOrange: String /* "BrightFloridaOrange" */
    var PastelFloridaOrange: String /* "PastelFloridaOrange" */
    var BrightLunaYellow: String /* "BrightLunaYellow" */
    var PastelLunaYellow: String /* "PastelLunaYellow" */
    var BrightNebulaPink: String /* "BrightNebulaPink" */
    var PastelNebulaPink: String /* "PastelNebulaPink" */
    var BrightCosmicPurple: String /* "BrightCosmicPurple" */
    var PastelCosmicPurple: String /* "PastelCosmicPurple" */
    var BrightMysticBlue: String /* "BrightMysticBlue" */
    var PastelMysticBlue: String /* "PastelMysticBlue" */
    var BrightCelestialBlue: String /* "BrightCelestialBlue" */
    var PastelCelestialBlue: String /* "PastelCelestialBlue" */
    var BrightShaggleGreen: String /* "BrightShaggleGreen" */
    var PastelShaggleGreen: String /* "PastelShaggleGreen" */
    var EMagicLeapControllerLEDColor_MAX: String /* "EMagicLeapControllerLEDColor_MAX" */
}

external object EMagicLeapControllerLEDEffect {
    var RotateCW: String /* "RotateCW" */
    var RotateCCW: String /* "RotateCCW" */
    var Pulse: String /* "Pulse" */
    var PaintCW: String /* "PaintCW" */
    var PaintCCW: String /* "PaintCCW" */
    var Blink: String /* "Blink" */
    var EMagicLeapControllerLEDEffect_MAX: String /* "EMagicLeapControllerLEDEffect_MAX" */
}

external object EMagicLeapControllerLEDSpeed {
    var Slow: String /* "Slow" */
    var Medium: String /* "Medium" */
    var Fast: String /* "Fast" */
    var EMagicLeapControllerLEDSpeed_MAX: String /* "EMagicLeapControllerLEDSpeed_MAX" */
}

external object EMagicLeapControllerHapticPattern {
    var None: String /* "None" */
    var Click: String /* "Click" */
    var Bump: String /* "Bump" */
    var DoubleClick: String /* "DoubleClick" */
    var Buzz: String /* "Buzz" */
    var Tick: String /* "Tick" */
    var ForceDown: String /* "ForceDown" */
    var ForceUp: String /* "ForceUp" */
    var ForceDwell: String /* "ForceDwell" */
    var SecondForceDown: String /* "SecondForceDown" */
    var EMagicLeapControllerHapticPattern_MAX: String /* "EMagicLeapControllerHapticPattern_MAX" */
}

external object EMagicLeapControllerHapticIntensity {
    var Low: String /* "Low" */
    var Medium: String /* "Medium" */
    var High: String /* "High" */
    var EMagicLeapControllerHapticIntensity_MAX: String /* "EMagicLeapControllerHapticIntensity_MAX" */
}

external object EMagicLeapControllerType {
    var None: String /* "None" */
    var Device: String /* "Device" */
    var MobileApp: String /* "MobileApp" */
    var EMagicLeapControllerType_MAX: String /* "EMagicLeapControllerType_MAX" */
}

external interface `T$23` {
    var hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */
    var `$`: Boolean
}

external open class MagicLeapControllerFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapControllerFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapControllerFunctionLibrary
        fun GetDefaultObject(): MagicLeapControllerFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapControllerFunctionLibrary
        fun SetMotionSourceForHand(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, MotionSource: String): Boolean
        fun SetControllerTrackingMode(TrackingMode: String /* "InputService" | "CoordinateFrameUID" | "EMagicLeapControllerTrackingMode_MAX" */): Boolean
        fun PlayLEDPattern(MotionSource: String, LEDPattern: String /* "None" | "Clock01" | "Clock02" | "Clock03" | "Clock04" | "Clock05" | "Clock06" | "Clock07" | "Clock08" | "Clock09" | "Clock10" | "Clock11" | "Clock12" | "Clock01_07" | "Clock02_08" | "Clock03_09" | "Clock04_10" | "Clock05_11" | "Clock06_12" | "EMagicLeapControllerLEDPattern_MAX" */, LEDColor: String /* "BrightMissionRed" | "PastelMissionRed" | "BrightFloridaOrange" | "PastelFloridaOrange" | "BrightLunaYellow" | "PastelLunaYellow" | "BrightNebulaPink" | "PastelNebulaPink" | "BrightCosmicPurple" | "PastelCosmicPurple" | "BrightMysticBlue" | "PastelMysticBlue" | "BrightCelestialBlue" | "PastelCelestialBlue" | "BrightShaggleGreen" | "PastelShaggleGreen" | "EMagicLeapControllerLEDColor_MAX" */, DurationInSec: Number): Boolean
        fun PlayLEDEffect(MotionSource: String, LEDEffect: String /* "RotateCW" | "RotateCCW" | "Pulse" | "PaintCW" | "PaintCCW" | "Blink" | "EMagicLeapControllerLEDEffect_MAX" */, LEDSpeed: String /* "Slow" | "Medium" | "Fast" | "EMagicLeapControllerLEDSpeed_MAX" */, LEDPattern: String /* "None" | "Clock01" | "Clock02" | "Clock03" | "Clock04" | "Clock05" | "Clock06" | "Clock07" | "Clock08" | "Clock09" | "Clock10" | "Clock11" | "Clock12" | "Clock01_07" | "Clock02_08" | "Clock03_09" | "Clock04_10" | "Clock05_11" | "Clock06_12" | "EMagicLeapControllerLEDPattern_MAX" */, LEDColor: String /* "BrightMissionRed" | "PastelMissionRed" | "BrightFloridaOrange" | "PastelFloridaOrange" | "BrightLunaYellow" | "PastelLunaYellow" | "BrightNebulaPink" | "PastelNebulaPink" | "BrightCosmicPurple" | "PastelCosmicPurple" | "BrightMysticBlue" | "PastelMysticBlue" | "BrightCelestialBlue" | "PastelCelestialBlue" | "BrightShaggleGreen" | "PastelShaggleGreen" | "EMagicLeapControllerLEDColor_MAX" */, DurationInSec: Number): Boolean
        fun PlayHapticPattern(MotionSource: String, HapticPattern: String /* "None" | "Click" | "Bump" | "DoubleClick" | "Buzz" | "Tick" | "ForceDown" | "ForceUp" | "ForceDwell" | "SecondForceDown" | "EMagicLeapControllerHapticPattern_MAX" */, Intensity: String /* "Low" | "Medium" | "High" | "EMagicLeapControllerHapticIntensity_MAX" */): Boolean
        fun PlayControllerLEDEffect(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, LEDEffect: String /* "RotateCW" | "RotateCCW" | "Pulse" | "PaintCW" | "PaintCCW" | "Blink" | "EMagicLeapControllerLEDEffect_MAX" */, LEDSpeed: String /* "Slow" | "Medium" | "Fast" | "EMagicLeapControllerLEDSpeed_MAX" */, LEDPattern: String /* "None" | "Clock01" | "Clock02" | "Clock03" | "Clock04" | "Clock05" | "Clock06" | "Clock07" | "Clock08" | "Clock09" | "Clock10" | "Clock11" | "Clock12" | "Clock01_07" | "Clock02_08" | "Clock03_09" | "Clock04_10" | "Clock05_11" | "Clock06_12" | "EMagicLeapControllerLEDPattern_MAX" */, LEDColor: String /* "BrightMissionRed" | "PastelMissionRed" | "BrightFloridaOrange" | "PastelFloridaOrange" | "BrightLunaYellow" | "PastelLunaYellow" | "BrightNebulaPink" | "PastelNebulaPink" | "BrightCosmicPurple" | "PastelCosmicPurple" | "BrightMysticBlue" | "PastelMysticBlue" | "BrightCelestialBlue" | "PastelCelestialBlue" | "BrightShaggleGreen" | "PastelShaggleGreen" | "EMagicLeapControllerLEDColor_MAX" */, DurationInSec: Number): Boolean
        fun PlayControllerLED(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, LEDPattern: String /* "None" | "Clock01" | "Clock02" | "Clock03" | "Clock04" | "Clock05" | "Clock06" | "Clock07" | "Clock08" | "Clock09" | "Clock10" | "Clock11" | "Clock12" | "Clock01_07" | "Clock02_08" | "Clock03_09" | "Clock04_10" | "Clock05_11" | "Clock06_12" | "EMagicLeapControllerLEDPattern_MAX" */, LEDColor: String /* "BrightMissionRed" | "PastelMissionRed" | "BrightFloridaOrange" | "PastelFloridaOrange" | "BrightLunaYellow" | "PastelLunaYellow" | "BrightNebulaPink" | "PastelNebulaPink" | "BrightCosmicPurple" | "PastelCosmicPurple" | "BrightMysticBlue" | "PastelMysticBlue" | "BrightCelestialBlue" | "PastelCelestialBlue" | "BrightShaggleGreen" | "PastelShaggleGreen" | "EMagicLeapControllerLEDColor_MAX" */, DurationInSec: Number): Boolean
        fun PlayControllerHapticFeedback(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, HapticPattern: String /* "None" | "Click" | "Bump" | "DoubleClick" | "Buzz" | "Tick" | "ForceDown" | "ForceUp" | "ForceDwell" | "SecondForceDown" | "EMagicLeapControllerHapticPattern_MAX" */, Intensity: String /* "Low" | "Medium" | "High" | "EMagicLeapControllerHapticIntensity_MAX" */): Boolean
        fun MaxSupportedMagicLeapControllers(): Number
        fun IsMLControllerConnected(MotionSource: String): Boolean
        fun InvertControllerMapping()
        fun GetMotionSourceForHand(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */): String
        fun GetMLControllerType(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */): String /* "None" | "Device" | "MobileApp" | "EMagicLeapControllerType_MAX" */
        fun GetHandForMotionSource(MotionSource: String): String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */
        fun GetControllerType(MotionSource: String): String /* "None" | "Device" | "MobileApp" | "EMagicLeapControllerType_MAX" */
        fun GetControllerTrackingMode(): String /* "InputService" | "CoordinateFrameUID" | "EMagicLeapControllerTrackingMode_MAX" */
        fun GetControllerMapping(ControllerIndex: Number, hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */ = definedExternally): `T$23`
        fun C(Other: UObject): MagicLeapControllerFunctionLibrary
        fun C(Other: Any): MagicLeapControllerFunctionLibrary
    }
}

external object EMagicLeapTouchpadGestureType {
    var None: String /* "None" */
    var Tap: String /* "Tap" */
    var ForceTapDown: String /* "ForceTapDown" */
    var ForceTapUp: String /* "ForceTapUp" */
    var ForceDwell: String /* "ForceDwell" */
    var SecondForceDown: String /* "SecondForceDown" */
    var LongHold: String /* "LongHold" */
    var RadialScroll: String /* "RadialScroll" */
    var Swipe: String /* "Swipe" */
    var Scroll: String /* "Scroll" */
    var Pinch: String /* "Pinch" */
    var EMagicLeapTouchpadGestureType_MAX: String /* "EMagicLeapTouchpadGestureType_MAX" */
}

external object EMagicLeapTouchpadGestureDirection {
    var None: String /* "None" */
    var Up: String /* "Up" */
    var Down: String /* "Down" */
    var Left: String /* "Left" */
    var Right: String /* "Right" */
    var In: String /* "In" */
    var Out: String /* "Out" */
    var Clockwise: String /* "Clockwise" */
    var CounterClockwise: String /* "CounterClockwise" */
    var EMagicLeapTouchpadGestureDirection_MAX: String /* "EMagicLeapTouchpadGestureDirection_MAX" */
}

external open class MagicLeapTouchpadGesture {
    open var hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */
    open var MotionSource: String
    open var Type: String /* "None" | "Tap" | "ForceTapDown" | "ForceTapUp" | "ForceDwell" | "SecondForceDown" | "LongHold" | "RadialScroll" | "Swipe" | "Scroll" | "Pinch" | "EMagicLeapTouchpadGestureType_MAX" */
    open var Direction: String /* "None" | "Up" | "Down" | "Left" | "Right" | "In" | "Out" | "Clockwise" | "CounterClockwise" | "EMagicLeapTouchpadGestureDirection_MAX" */
    open var PositionAndForce: Vector
    open var Speed: Number
    open var Distance: Number
    open var FingerGap: Number
    open var Radius: Number
    open var Angle: Number
    open fun clone(): MagicLeapTouchpadGesture

    companion object {
        fun C(Other: UObject): MagicLeapTouchpadGesture
        fun C(Other: Any): MagicLeapTouchpadGesture
    }
}

external open class MagicLeapTouchpadGesturesComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var OnTouchpadGestureStart: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) -> Unit>
    open var OnTouchpadGestureContinue: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) -> Unit>
    open var OnTouchpadGestureEnd: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) -> Unit>

    companion object {
        fun Load(ResourceName: String): MagicLeapTouchpadGesturesComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapTouchpadGesturesComponent
        fun GetDefaultObject(): MagicLeapTouchpadGesturesComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapTouchpadGesturesComponent
        fun C(Other: UObject): MagicLeapTouchpadGesturesComponent
        fun C(Other: Any): MagicLeapTouchpadGesturesComponent
    }
}

external interface `T$24` {
    var OutGazeData: EyeTrackerStereoGazeData
    var `$`: Boolean
}

external open class EyeTrackerStereoGazeData {
    open var LeftEyeOrigin: Vector
    open var LeftEyeDirection: Vector
    open var RightEyeOrigin: Vector
    open var RightEyeDirection: Vector
    open var FixationPoint: Vector
    open var ConfidenceValue: Number
    open fun clone(): EyeTrackerStereoGazeData
    open fun GetStereoGazeData(): `T$24`

    companion object {
        fun C(Other: UObject): EyeTrackerStereoGazeData
        fun C(Other: Any): EyeTrackerStereoGazeData
        fun GetStereoGazeData(OutGazeData: EyeTrackerStereoGazeData = definedExternally): `T$24`
    }
}

external interface `T$25` {
    var OutGazeData: EyeTrackerGazeData
    var `$`: Boolean
}

external open class EyeTrackerGazeData {
    open var GazeOrigin: Vector
    open var GazeDirection: Vector
    open var FixationPoint: Vector
    open var ConfidenceValue: Number
    open fun clone(): EyeTrackerGazeData
    open fun GetGazeData(): `T$25`

    companion object {
        fun C(Other: UObject): EyeTrackerGazeData
        fun C(Other: Any): EyeTrackerGazeData
        fun GetGazeData(OutGazeData: EyeTrackerGazeData = definedExternally): `T$25`
    }
}

external open class EyeTrackerFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EyeTrackerFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): EyeTrackerFunctionLibrary
        fun GetDefaultObject(): EyeTrackerFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EyeTrackerFunctionLibrary
        fun SetEyeTrackedPlayer(PlayerController: PlayerController)
        fun IsStereoGazeDataAvailable(): Boolean
        fun IsEyeTrackerConnected(): Boolean
        fun GetStereoGazeData(OutGazeData: EyeTrackerStereoGazeData = definedExternally): `T$24`
        fun GetGazeData(OutGazeData: EyeTrackerGazeData = definedExternally): `T$25`
        fun C(Other: UObject): EyeTrackerFunctionLibrary
        fun C(Other: Any): EyeTrackerFunctionLibrary
    }
}

external interface `T$26` {
    var BlinkState: MagicLeapEyeBlinkState
    var `$`: Boolean
}

external open class MagicLeapEyeBlinkState {
    open var LeftEyeBlinked: Boolean
    open var RightEyeBlinked: Boolean
    open fun clone(): MagicLeapEyeBlinkState
    open fun GetEyeBlinkState(): `T$26`

    companion object {
        fun C(Other: UObject): MagicLeapEyeBlinkState
        fun C(Other: Any): MagicLeapEyeBlinkState
        fun GetEyeBlinkState(BlinkState: MagicLeapEyeBlinkState = definedExternally): `T$26`
    }
}

external object EMagicLeapEyeTrackingCalibrationStatus {
    var None: String /* "None" */
    var Bad: String /* "Bad" */
    var Good: String /* "Good" */
    var EMagicLeapEyeTrackingCalibrationStatus_MAX: String /* "EMagicLeapEyeTrackingCalibrationStatus_MAX" */
}

external open class MagicLeapEyeTrackerFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapEyeTrackerFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapEyeTrackerFunctionLibrary
        fun GetDefaultObject(): MagicLeapEyeTrackerFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapEyeTrackerFunctionLibrary
        fun GetEyeBlinkState(BlinkState: MagicLeapEyeBlinkState = definedExternally): `T$26`
        fun GetCalibrationStatus(): String /* "None" | "Bad" | "Good" | "EMagicLeapEyeTrackingCalibrationStatus_MAX" */
        fun C(Other: UObject): MagicLeapEyeTrackerFunctionLibrary
        fun C(Other: Any): MagicLeapEyeTrackerFunctionLibrary
    }
}

external open class LiveLinkMagicLeapHandTrackingSourceFactory : LiveLinkSourceFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LiveLinkMagicLeapHandTrackingSourceFactory
        fun Find(Outer: UObject, ResourceName: String): LiveLinkMagicLeapHandTrackingSourceFactory
        fun GetDefaultObject(): LiveLinkMagicLeapHandTrackingSourceFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LiveLinkMagicLeapHandTrackingSourceFactory
        fun C(Other: UObject): LiveLinkMagicLeapHandTrackingSourceFactory
        fun C(Other: Any): LiveLinkMagicLeapHandTrackingSourceFactory
    }
}

external object EMagicLeapHandTrackingGesture {
    var Finger: String /* "Finger" */
    var Fist: String /* "Fist" */
    var Pinch: String /* "Pinch" */
    var Thumb: String /* "Thumb" */
    var L: String /* "L" */
    var OpenHand: String /* "OpenHand" */
    var OpenHandBack: String /* "OpenHandBack" */
    var Ok: String /* "Ok" */
    var C: String /* "C" */
    var NoPose: String /* "NoPose" */
    var NoHand: String /* "NoHand" */
    var EMagicLeapHandTrackingGesture_MAX: String /* "EMagicLeapHandTrackingGesture_MAX" */
}

external object EMagicLeapHandTrackingKeypointFilterLevel {
    var NoFilter: String /* "NoFilter" */
    var SimpleSmoothing: String /* "SimpleSmoothing" */
    var PredictiveSmoothing: String /* "PredictiveSmoothing" */
    var EMagicLeapHandTrackingKeypointFilterLevel_MAX: String /* "EMagicLeapHandTrackingKeypointFilterLevel_MAX" */
}

external object EMagicLeapHandTrackingGestureFilterLevel {
    var NoFilter: String /* "NoFilter" */
    var SlightRobustnessToFlicker: String /* "SlightRobustnessToFlicker" */
    var MoreRobustnessToFlicker: String /* "MoreRobustnessToFlicker" */
    var EMagicLeapHandTrackingGestureFilterLevel_MAX: String /* "EMagicLeapHandTrackingGestureFilterLevel_MAX" */
}

external object EMagicLeapHandTrackingKeypoint {
    var Thumb_Tip: String /* "Thumb_Tip" */
    var Thumb_IP: String /* "Thumb_IP" */
    var Thumb_MCP: String /* "Thumb_MCP" */
    var Thumb_CMC: String /* "Thumb_CMC" */
    var Index_Tip: String /* "Index_Tip" */
    var Index_DIP: String /* "Index_DIP" */
    var Index_PIP: String /* "Index_PIP" */
    var Index_MCP: String /* "Index_MCP" */
    var Middle_Tip: String /* "Middle_Tip" */
    var Middle_DIP: String /* "Middle_DIP" */
    var Middle_PIP: String /* "Middle_PIP" */
    var Middle_MCP: String /* "Middle_MCP" */
    var Ring_Tip: String /* "Ring_Tip" */
    var Ring_DIP: String /* "Ring_DIP" */
    var Ring_PIP: String /* "Ring_PIP" */
    var Ring_MCP: String /* "Ring_MCP" */
    var Pinky_Tip: String /* "Pinky_Tip" */
    var Pinky_DIP: String /* "Pinky_DIP" */
    var Pinky_PIP: String /* "Pinky_PIP" */
    var Pinky_MCP: String /* "Pinky_MCP" */
    var Wrist_Center: String /* "Wrist_Center" */
    var Wrist_Ulnar: String /* "Wrist_Ulnar" */
    var Wrist_Radial: String /* "Wrist_Radial" */
    var Hand_Center: String /* "Hand_Center" */
    var EMagicLeapHandTrackingKeypoint_MAX: String /* "EMagicLeapHandTrackingKeypoint_MAX" */
}

external interface `T$27` {
    var SourceHandle: LiveLinkSourceHandle
    var `$`: Boolean
}

external open class LiveLinkSourceHandle {
    open fun clone(): LiveLinkSourceHandle
    open fun GetMagicLeapHandTrackingLiveLinkSource(): `T$27`

    companion object {
        fun C(Other: UObject): LiveLinkSourceHandle
        fun C(Other: Any): LiveLinkSourceHandle
        fun GetMagicLeapHandTrackingLiveLinkSource(SourceHandle: LiveLinkSourceHandle = definedExternally): `T$27`
    }
}

external object EMagicLeapGestureTransformSpace {
    var World: String /* "World" */
    var Hand: String /* "Hand" */
    var Tracking: String /* "Tracking" */
    var EMagicLeapGestureTransformSpace_MAX: String /* "EMagicLeapGestureTransformSpace_MAX" */
}

external interface `T$28` {
    var OutMotionSource: String
    var `$`: Boolean
}

external interface `T$29` {
    var Secondary: Transform
    var `$`: Boolean
}

external interface `T$30` {
    var OutKeyPoint: String /* "Thumb_Tip" | "Thumb_IP" | "Thumb_MCP" | "Thumb_CMC" | "Index_Tip" | "Index_DIP" | "Index_PIP" | "Index_MCP" | "Middle_Tip" | "Middle_DIP" | "Middle_PIP" | "Middle_MCP" | "Ring_Tip" | "Ring_DIP" | "Ring_PIP" | "Ring_MCP" | "Pinky_Tip" | "Pinky_DIP" | "Pinky_PIP" | "Pinky_MCP" | "Wrist_Center" | "Wrist_Ulnar" | "Wrist_Radial" | "Hand_Center" | "EMagicLeapHandTrackingKeypoint_MAX" */
    var `$`: Boolean
}

external interface `T$31` {
    var Pointer: Transform
    var `$`: Boolean
}

external interface `T$32` {
    var HandCenterNormalized: Vector
    var `$`: Boolean
}

external interface `T$33` {
    var HandCenter: Transform
    var `$`: Boolean
}

external interface `T$34` {
    var Transform: Transform
    var `$`: Boolean
}

external interface `T$35` {
    var Keypoints: Array<Transform>
    var `$`: Boolean
}

external interface `T$36` {
    var Confidence: Number
    var `$`: Boolean
}

external interface `T$37` {
    var Gesture: String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */
    var `$`: Boolean
}

external interface `T$38` {
    var ActiveStaticGestures: Array<String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */>
    var KeypointsFilterLevel: String /* "NoFilter" | "SimpleSmoothing" | "PredictiveSmoothing" | "EMagicLeapHandTrackingKeypointFilterLevel_MAX" */
    var GestureFilterLevel: String /* "NoFilter" | "SlightRobustnessToFlicker" | "MoreRobustnessToFlicker" | "EMagicLeapHandTrackingGestureFilterLevel_MAX" */
    var bTrackingEnabled: Boolean
    var `$`: Boolean
}

external open class MagicLeapHandTrackingFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapHandTrackingFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapHandTrackingFunctionLibrary
        fun GetDefaultObject(): MagicLeapHandTrackingFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapHandTrackingFunctionLibrary
        fun SetStaticGestureConfidenceThreshold(Gesture: String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */, Confidence: Number)
        fun SetConfiguration(StaticGesturesToActivate: Array<String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */>, KeypointsFilterLevel: String /* "NoFilter" | "SimpleSmoothing" | "PredictiveSmoothing" | "EMagicLeapHandTrackingKeypointFilterLevel_MAX" */, GestureFilterLevel: String /* "NoFilter" | "SlightRobustnessToFlicker" | "MoreRobustnessToFlicker" | "EMagicLeapHandTrackingGestureFilterLevel_MAX" */, bTrackingEnabled: Boolean): Boolean
        fun IsHoldingControl(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */): Boolean
        fun GetStaticGestureConfidenceThreshold(Gesture: String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */): Number
        fun GetMotionSourceForHandKeypoint(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, Keypoint: String /* "Thumb_Tip" | "Thumb_IP" | "Thumb_MCP" | "Thumb_CMC" | "Index_Tip" | "Index_DIP" | "Index_PIP" | "Index_MCP" | "Middle_Tip" | "Middle_DIP" | "Middle_PIP" | "Middle_MCP" | "Ring_Tip" | "Ring_DIP" | "Ring_PIP" | "Ring_MCP" | "Pinky_Tip" | "Pinky_DIP" | "Pinky_PIP" | "Pinky_MCP" | "Wrist_Center" | "Wrist_Ulnar" | "Wrist_Radial" | "Hand_Center" | "EMagicLeapHandTrackingKeypoint_MAX" */, OutMotionSource: String = definedExternally): `T$28`
        fun GetMagicLeapHandTrackingLiveLinkSource(SourceHandle: LiveLinkSourceHandle = definedExternally): `T$27`
        fun GetHandThumbTip(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, TransformSpace: String /* "World" | "Hand" | "Tracking" | "EMagicLeapGestureTransformSpace_MAX" */, Secondary: Transform = definedExternally): `T$29`
        fun GetHandKeypointForMotionSource(MotionSource: String, OutKeyPoint: String /* "Thumb_Tip" | "Thumb_IP" | "Thumb_MCP" | "Thumb_CMC" | "Index_Tip" | "Index_DIP" | "Index_PIP" | "Index_MCP" | "Middle_Tip" | "Middle_DIP" | "Middle_PIP" | "Middle_MCP" | "Ring_Tip" | "Ring_DIP" | "Ring_PIP" | "Ring_MCP" | "Pinky_Tip" | "Pinky_DIP" | "Pinky_PIP" | "Pinky_MCP" | "Wrist_Center" | "Wrist_Ulnar" | "Wrist_Radial" | "Hand_Center" | "EMagicLeapHandTrackingKeypoint_MAX" */ = definedExternally): `T$30`
        fun GetHandIndexFingerTip(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, TransformSpace: String /* "World" | "Hand" | "Tracking" | "EMagicLeapGestureTransformSpace_MAX" */, Pointer: Transform = definedExternally): `T$31`
        fun GetHandCenterNormalized(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, HandCenterNormalized: Vector = definedExternally): `T$32`
        fun GetHandCenter(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, HandCenter: Transform = definedExternally): `T$33`
        fun GetGestureKeypointTransform(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, Keypoint: String /* "Thumb_Tip" | "Thumb_IP" | "Thumb_MCP" | "Thumb_CMC" | "Index_Tip" | "Index_DIP" | "Index_PIP" | "Index_MCP" | "Middle_Tip" | "Middle_DIP" | "Middle_PIP" | "Middle_MCP" | "Ring_Tip" | "Ring_DIP" | "Ring_PIP" | "Ring_MCP" | "Pinky_Tip" | "Pinky_DIP" | "Pinky_PIP" | "Pinky_MCP" | "Wrist_Center" | "Wrist_Ulnar" | "Wrist_Radial" | "Hand_Center" | "EMagicLeapHandTrackingKeypoint_MAX" */, TransformSpace: String /* "World" | "Hand" | "Tracking" | "EMagicLeapGestureTransformSpace_MAX" */, Transform: Transform = definedExternally): `T$34`
        fun GetGestureKeypoints(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, Keypoints: Array<Transform> = definedExternally): `T$35`
        fun GetCurrentGestureConfidence(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, Confidence: Number = definedExternally): `T$36`
        fun GetCurrentGesture(hand: String /* "Left" | "Right" | "AnyHand" | "Pad" | "ExternalCamera" | "Gun" | "Special_1" | "Special_2" | "Special_3" | "Special_4" | "Special_5" | "Special_6" | "Special_7" | "Special_8" | "Special_9" | "Special_10" | "Special_11" | "ControllerHand_Count" | "EControllerHand_MAX" */, Gesture: String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */ = definedExternally): `T$37`
        fun GetConfiguration(ActiveStaticGestures: Array<String /* "Finger" | "Fist" | "Pinch" | "Thumb" | "L" | "OpenHand" | "OpenHandBack" | "Ok" | "C" | "NoPose" | "NoHand" | "EMagicLeapHandTrackingGesture_MAX" */> = definedExternally, KeypointsFilterLevel: String /* "NoFilter" | "SimpleSmoothing" | "PredictiveSmoothing" | "EMagicLeapHandTrackingKeypointFilterLevel_MAX" */ = definedExternally, GestureFilterLevel: String /* "NoFilter" | "SlightRobustnessToFlicker" | "MoreRobustnessToFlicker" | "EMagicLeapHandTrackingGestureFilterLevel_MAX" */ = definedExternally, bTrackingEnabled: Boolean = definedExternally): `T$38`
        fun C(Other: UObject): MagicLeapHandTrackingFunctionLibrary
        fun C(Other: Any): MagicLeapHandTrackingFunctionLibrary
    }
}

external object EMagicLeapIdentityKey {
    var GivenName: String /* "GivenName" */
    var FamilyName: String /* "FamilyName" */
    var Email: String /* "Email" */
    var Bio: String /* "Bio" */
    var PhoneNumber: String /* "PhoneNumber" */
    var Avatar2D: String /* "Avatar2D" */
    var Avatar3D: String /* "Avatar3D" */
    var Unknown: String /* "Unknown" */
    var EMagicLeapIdentityKey_MAX: String /* "EMagicLeapIdentityKey_MAX" */
}

external open class MagicLeapIdentityAttribute {
    open var Attribute: String /* "GivenName" | "FamilyName" | "Email" | "Bio" | "PhoneNumber" | "Avatar2D" | "Avatar3D" | "Unknown" | "EMagicLeapIdentityKey_MAX" */
    open var Value: String
    open fun clone(): MagicLeapIdentityAttribute

    companion object {
        fun C(Other: UObject): MagicLeapIdentityAttribute
        fun C(Other: Any): MagicLeapIdentityAttribute
    }
}

external object EMagicLeapIdentityError {
    var Ok: String /* "Ok" */
    var InvalidParam: String /* "InvalidParam" */
    var AllocFailed: String /* "AllocFailed" */
    var PrivilegeDenied: String /* "PrivilegeDenied" */
    var FailedToConnectToLocalService: String /* "FailedToConnectToLocalService" */
    var FailedToConnectToCloudService: String /* "FailedToConnectToCloudService" */
    var CloudAuthentication: String /* "CloudAuthentication" */
    var InvalidInformationFromCloud: String /* "InvalidInformationFromCloud" */
    var NotLoggedIn: String /* "NotLoggedIn" */
    var ExpiredCredentials: String /* "ExpiredCredentials" */
    var FailedToGetUserProfile: String /* "FailedToGetUserProfile" */
    var Unauthorized: String /* "Unauthorized" */
    var CertificateError: String /* "CertificateError" */
    var RejectedByCloud: String /* "RejectedByCloud" */
    var AlreadyLoggedIn: String /* "AlreadyLoggedIn" */
    var ModifyIsNotSupported: String /* "ModifyIsNotSupported" */
    var NetworkError: String /* "NetworkError" */
    var UnspecifiedFailure: String /* "UnspecifiedFailure" */
    var EMagicLeapIdentityError_MAX: String /* "EMagicLeapIdentityError_MAX" */
}

external interface `T$39` {
    var RequestedAttributeValues: Array<MagicLeapIdentityAttribute>
    var `$`: String /* "Ok" | "InvalidParam" | "AllocFailed" | "PrivilegeDenied" | "FailedToConnectToLocalService" | "FailedToConnectToCloudService" | "CloudAuthentication" | "InvalidInformationFromCloud" | "NotLoggedIn" | "ExpiredCredentials" | "FailedToGetUserProfile" | "Unauthorized" | "CertificateError" | "RejectedByCloud" | "AlreadyLoggedIn" | "ModifyIsNotSupported" | "NetworkError" | "UnspecifiedFailure" | "EMagicLeapIdentityError_MAX" */
}

external interface `T$40` {
    var AvailableAttributes: Array<String /* "GivenName" | "FamilyName" | "Email" | "Bio" | "PhoneNumber" | "Avatar2D" | "Avatar3D" | "Unknown" | "EMagicLeapIdentityKey_MAX" */>
    var `$`: String /* "Ok" | "InvalidParam" | "AllocFailed" | "PrivilegeDenied" | "FailedToConnectToLocalService" | "FailedToConnectToCloudService" | "CloudAuthentication" | "InvalidInformationFromCloud" | "NotLoggedIn" | "ExpiredCredentials" | "FailedToGetUserProfile" | "Unauthorized" | "CertificateError" | "RejectedByCloud" | "AlreadyLoggedIn" | "ModifyIsNotSupported" | "NetworkError" | "UnspecifiedFailure" | "EMagicLeapIdentityError_MAX" */
}

external open class MagicLeapIdentity : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun RequestAttributeValue(RequestedAttributeList: Array<String /* "GivenName" | "FamilyName" | "Email" | "Bio" | "PhoneNumber" | "Avatar2D" | "Avatar3D" | "Unknown" | "EMagicLeapIdentityKey_MAX" */>, RequestedAttributeValues: Array<MagicLeapIdentityAttribute> = definedExternally): `T$39`
    open fun GetAllAvailableAttributes(AvailableAttributes: Array<String /* "GivenName" | "FamilyName" | "Email" | "Bio" | "PhoneNumber" | "Avatar2D" | "Avatar3D" | "Unknown" | "EMagicLeapIdentityKey_MAX" */> = definedExternally): `T$40`

    companion object {
        fun Load(ResourceName: String): MagicLeapIdentity
        fun Find(Outer: UObject, ResourceName: String): MagicLeapIdentity
        fun GetDefaultObject(): MagicLeapIdentity
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapIdentity
        fun C(Other: UObject): MagicLeapIdentity
        fun C(Other: Any): MagicLeapIdentity
    }
}

external interface `T$41` {
    var DataToRetrieve: Vector
    var `$`: Boolean
}

external interface `T$42` {
    var DataToRetrieve: Transform
    var `$`: Boolean
}

external interface `T$43` {
    var DataToRetrieve: String
    var `$`: Boolean
}

external interface `T$44` {
    var ObjectToRetrieve: SaveGame
    var `$`: Boolean
}

external interface `T$45` {
    var DataToRetrieve: Rotator
    var `$`: Boolean
}

external interface `T$46` {
    var DataToRetrieve: Any
    var `$`: Boolean
}

external interface `T$47` {
    var DataToRetrieve: Number
    var `$`: Boolean
}

external interface `T$48` {
    var DataToRetrieve: Boolean
    var `$`: Boolean
}

external interface `T$49` {
    var DataToRetrieve: Array<Number>
    var `$`: Boolean
}

external open class MagicLeapSecureStorage : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapSecureStorage
        fun Find(Outer: UObject, ResourceName: String): MagicLeapSecureStorage
        fun GetDefaultObject(): MagicLeapSecureStorage
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSecureStorage
        fun PutSecureVector(Key: String, DataToStore: Vector): Boolean
        fun PutSecureTransform(Key: String, DataToStore: Transform): Boolean
        fun PutSecureString(Key: String, DataToStore: String): Boolean
        fun PutSecureSaveGame(Key: String, ObjectToStore: SaveGame): Boolean
        fun PutSecureRotator(Key: String, DataToStore: Rotator): Boolean
        fun PutSecureInt64(Key: String, DataToStore: Any): Boolean
        fun PutSecureInt(Key: String, DataToStore: Number): Boolean
        fun PutSecureFloat(Key: String, DataToStore: Number): Boolean
        fun PutSecureByte(Key: String, DataToStore: Number): Boolean
        fun PutSecureBool(Key: String, DataToStore: Boolean): Boolean
        fun PutSecureArray(Key: String, DataToStore: Array<Number>): Boolean
        fun GetSecureVector(Key: String, DataToRetrieve: Vector = definedExternally): `T$41`
        fun GetSecureTransform(Key: String, DataToRetrieve: Transform = definedExternally): `T$42`
        fun GetSecureString(Key: String, DataToRetrieve: String = definedExternally): `T$43`
        fun GetSecureSaveGame(Key: String, ObjectToRetrieve: SaveGame = definedExternally): `T$44`
        fun GetSecureRotator(Key: String, DataToRetrieve: Rotator = definedExternally): `T$45`
        fun GetSecureInt64(Key: String, DataToRetrieve: Any = definedExternally): `T$46`
        fun GetSecureInt(Key: String, DataToRetrieve: Number = definedExternally): `T$47`
        fun GetSecureFloat(Key: String, DataToRetrieve: Number = definedExternally): `T$47`
        fun GetSecureByte(Key: String, DataToRetrieve: Number = definedExternally): `T$47`
        fun GetSecureBool(Key: String, DataToRetrieve: Boolean = definedExternally): `T$48`
        fun GetSecureArray(Key: String, DataToRetrieve: Array<Number> = definedExternally): `T$49`
        fun DeleteSecureData(Key: String): Boolean
        fun C(Other: UObject): MagicLeapSecureStorage
        fun C(Other: Any): MagicLeapSecureStorage
    }
}

external open class MagicLeapHandMeshingComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open fun SetUseWeightedNormals(bInUseWeightedNormals: Boolean)
    open fun DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): Boolean
    open fun ConnectMRMesh(InMRMeshPtr: MRMeshComponent): Boolean

    companion object {
        fun Load(ResourceName: String): MagicLeapHandMeshingComponent
        fun Find(Outer: UObject, ResourceName: String): MagicLeapHandMeshingComponent
        fun GetDefaultObject(): MagicLeapHandMeshingComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapHandMeshingComponent
        fun C(Other: UObject): MagicLeapHandMeshingComponent
        fun C(Other: Any): MagicLeapHandMeshingComponent
    }
}

external open class MagicLeapHandMeshingFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapHandMeshingFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapHandMeshingFunctionLibrary
        fun GetDefaultObject(): MagicLeapHandMeshingFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapHandMeshingFunctionLibrary
        fun DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): Boolean
        fun DestroyClient(): Boolean
        fun CreateClient(): Boolean
        fun ConnectMRMesh(InMRMeshPtr: MRMeshComponent): Boolean
        fun C(Other: UObject): MagicLeapHandMeshingFunctionLibrary
        fun C(Other: Any): MagicLeapHandMeshingFunctionLibrary
    }
}

external object EUdpMessageFormat {
    var None: String /* "None" */
    var Json: String /* "Json" */
    var TaggedProperty: String /* "TaggedProperty" */
    var CborPlatformEndianness: String /* "CborPlatformEndianness" */
    var CborStandardEndianness: String /* "CborStandardEndianness" */
    var EUdpMessageFormat_MAX: String /* "EUdpMessageFormat_MAX" */
}

external open class UdpMessagingSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var EnabledByDefault: Boolean
    open var EnableTransport: Boolean
    open var bAutoRepair: Boolean
    open var bStopServiceWhenAppDeactivates: Boolean
    open var UnicastEndpoint: String
    open var MulticastEndpoint: String
    open var MessageFormat: String /* "None" | "Json" | "TaggedProperty" | "CborPlatformEndianness" | "CborStandardEndianness" | "EUdpMessageFormat_MAX" */
    open var MulticastTimeToLive: Number
    open var StaticEndpoints: Array<String>
    open var EnableTunnel: Boolean
    open var TunnelUnicastEndpoint: String
    open var TunnelMulticastEndpoint: String
    open var RemoteTunnelEndpoints: Array<String>

    companion object {
        fun Load(ResourceName: String): UdpMessagingSettings
        fun Find(Outer: UObject, ResourceName: String): UdpMessagingSettings
        fun GetDefaultObject(): UdpMessagingSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UdpMessagingSettings
        fun C(Other: UObject): UdpMessagingSettings
        fun C(Other: Any): UdpMessagingSettings
    }
}

external object EActorSequenceObjectReferenceType {
    var ContextActor: String /* "ContextActor" */
    var ExternalActor: String /* "ExternalActor" */
    var Component: String /* "Component" */
    var EActorSequenceObjectReferenceType_MAX: String /* "EActorSequenceObjectReferenceType_MAX" */
}

external open class ActorSequenceObjectReference {
    open var Type: String /* "ContextActor" | "ExternalActor" | "Component" | "EActorSequenceObjectReferenceType_MAX" */
    open var ActorId: Guid
    open var PathToComponent: String
    open fun clone(): ActorSequenceObjectReference

    companion object {
        fun C(Other: UObject): ActorSequenceObjectReference
        fun C(Other: Any): ActorSequenceObjectReference
    }
}

external open class ActorSequenceObjectReferences {
    open var Array: Array<ActorSequenceObjectReference>
    open fun clone(): ActorSequenceObjectReferences

    companion object {
        fun C(Other: UObject): ActorSequenceObjectReferences
        fun C(Other: Any): ActorSequenceObjectReferences
    }
}

external open class ActorSequenceObjectReferenceMap {
    open var BindingIds: Array<Guid>
    open var References: Array<ActorSequenceObjectReferences>
    open fun clone(): ActorSequenceObjectReferenceMap

    companion object {
        fun C(Other: UObject): ActorSequenceObjectReferenceMap
        fun C(Other: Any): ActorSequenceObjectReferenceMap
    }
}

external open class ActorSequence : MovieSceneSequence {
    constructor()
    constructor(Outer: UObject)
    open var MovieScene: MovieScene
    open var ObjectReferences: ActorSequenceObjectReferenceMap
    open var bHasBeenInitialized: Boolean

    companion object {
        fun Load(ResourceName: String): ActorSequence
        fun Find(Outer: UObject, ResourceName: String): ActorSequence
        fun GetDefaultObject(): ActorSequence
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorSequence
        fun C(Other: UObject): ActorSequence
        fun C(Other: Any): ActorSequence
    }
}

external open class ActorSequencePlayer : MovieSceneSequencePlayer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorSequencePlayer
        fun Find(Outer: UObject, ResourceName: String): ActorSequencePlayer
        fun GetDefaultObject(): ActorSequencePlayer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorSequencePlayer
        fun C(Other: UObject): ActorSequencePlayer
        fun C(Other: Any): ActorSequencePlayer
    }
}

external open class ActorSequenceComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var PlaybackSettings: MovieSceneSequencePlaybackSettings
    open var Sequence: ActorSequence
    open var SequencePlayer: ActorSequencePlayer

    companion object {
        fun Load(ResourceName: String): ActorSequenceComponent
        fun Find(Outer: UObject, ResourceName: String): ActorSequenceComponent
        fun GetDefaultObject(): ActorSequenceComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorSequenceComponent
        fun C(Other: UObject): ActorSequenceComponent
        fun C(Other: Any): ActorSequenceComponent
    }
}

external open class EdGraph_ReferenceViewer : EdGraph {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EdGraph_ReferenceViewer
        fun Find(Outer: UObject, ResourceName: String): EdGraph_ReferenceViewer
        fun GetDefaultObject(): EdGraph_ReferenceViewer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EdGraph_ReferenceViewer
        fun C(Other: UObject): EdGraph_ReferenceViewer
        fun C(Other: Any): EdGraph_ReferenceViewer
    }
}

external open class EdGraphNode_Reference : EdGraphNode {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EdGraphNode_Reference
        fun Find(Outer: UObject, ResourceName: String): EdGraphNode_Reference
        fun GetDefaultObject(): EdGraphNode_Reference
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EdGraphNode_Reference
        fun C(Other: UObject): EdGraphNode_Reference
        fun C(Other: Any): EdGraphNode_Reference
    }
}

external open class ReferenceViewerSchema : EdGraphSchema {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ReferenceViewerSchema
        fun Find(Outer: UObject, ResourceName: String): ReferenceViewerSchema
        fun GetDefaultObject(): ReferenceViewerSchema
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ReferenceViewerSchema
        fun C(Other: UObject): ReferenceViewerSchema
        fun C(Other: Any): ReferenceViewerSchema
    }
}

external open class InternationalizationExportSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var CulturesToGenerate: Array<String>
    open var CommandletClass: String
    open var SourcePath: String
    open var DestinationPath: String
    open var PortableObjectName: String
    open var ManifestName: String
    open var ArchiveName: String
    open var bExportLoc: Boolean
    open var bImportLoc: Boolean
    open var bUseCultureDirectory: Boolean

    companion object {
        fun Load(ResourceName: String): InternationalizationExportSettings
        fun Find(Outer: UObject, ResourceName: String): InternationalizationExportSettings
        fun GetDefaultObject(): InternationalizationExportSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): InternationalizationExportSettings
        fun C(Other: UObject): InternationalizationExportSettings
        fun C(Other: Any): InternationalizationExportSettings
    }
}

external open class TranslationPickerSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bSubmitTranslationPickerChangesToLocalizationService: Boolean

    companion object {
        fun Load(ResourceName: String): TranslationPickerSettings
        fun Find(Outer: UObject, ResourceName: String): TranslationPickerSettings
        fun GetDefaultObject(): TranslationPickerSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TranslationPickerSettings
        fun C(Other: UObject): TranslationPickerSettings
        fun C(Other: Any): TranslationPickerSettings
    }
}

external open class TranslationChange {
    open var Version: String
    open var DateAndTime: DateTime
    open var Source: String
    open var Translation: String
    open fun clone(): TranslationChange

    companion object {
        fun C(Other: UObject): TranslationChange
        fun C(Other: Any): TranslationChange
    }
}

external open class TranslationContextInfo {
    open var Key: String
    open var Context: String
    open var Changes: Array<TranslationChange>
    open fun clone(): TranslationContextInfo

    companion object {
        fun C(Other: UObject): TranslationContextInfo
        fun C(Other: Any): TranslationContextInfo
    }
}

external open class TranslationUnit : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Namespace: String
    open var Key: String
    open var Source: String
    open var Translation: String
    open var Contexts: Array<TranslationContextInfo>
    open var HasBeenReviewed: Boolean
    open var TranslationBeforeImport: String
    open var LocresPath: String

    companion object {
        fun Load(ResourceName: String): TranslationUnit
        fun Find(Outer: UObject, ResourceName: String): TranslationUnit
        fun GetDefaultObject(): TranslationUnit
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TranslationUnit
        fun C(Other: UObject): TranslationUnit
        fun C(Other: Any): TranslationUnit
    }
}

external open class PixelInspectorView : UObject {
    constructor()
    constructor(Outer: UObject)
    open var FinalColor: LinearColor
    open var SceneColor: LinearColor
    open var PreExposure: Number
    open var Luminance: Number
    open var HdrColor: LinearColor
    open var Normal: Vector
    open var PerObjectGBufferData: Number
    open var Metallic: Number
    open var Specular: Number
    open var Roughness: Number
    open var MaterialShadingModel: String /* "MSM_Unlit" | "MSM_DefaultLit" | "MSM_Subsurface" | "MSM_PreintegratedSkin" | "MSM_ClearCoat" | "MSM_SubsurfaceProfile" | "MSM_TwoSidedFoliage" | "MSM_Hair" | "MSM_Cloth" | "MSM_Eye" | "MSM_SingleLayerWater" | "MSM_ThinTranslucent" | "MSM_NUM" | "MSM_FromMaterialExpression" | "MSM_MAX" */
    open var SelectiveOutputMask: Number
    open var BaseColor: LinearColor
    open var IndirectIrradiance: Number
    open var AmbientOcclusion: Number
    open var SubsurfaceColor: LinearColor
    open var SubsurfaceProfile: Vector
    open var Opacity: Number
    open var ClearCoat: Number
    open var ClearCoatRoughness: Number
    open var WorldNormal: Vector
    open var BackLit: Number
    open var Cloth: Number
    open var EyeTangent: Vector
    open var IrisMask: Number
    open var IrisDistance: Number

    companion object {
        fun Load(ResourceName: String): PixelInspectorView
        fun Find(Outer: UObject, ResourceName: String): PixelInspectorView
        fun GetDefaultObject(): PixelInspectorView
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PixelInspectorView
        fun C(Other: UObject): PixelInspectorView
        fun C(Other: Any): PixelInspectorView
    }
}

external open class EditorUtilityObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Run()

    companion object {
        fun Load(ResourceName: String): EditorUtilityObject
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityObject
        fun GetDefaultObject(): EditorUtilityObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityObject
        fun C(Other: UObject): EditorUtilityObject
        fun C(Other: Any): EditorUtilityObject
    }
}

external open class ActorActionUtility : EditorUtilityObject {
    constructor()
    constructor(Outer: UObject)
    open fun GetSupportedClass(): UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): ActorActionUtility
        fun Find(Outer: UObject, ResourceName: String): ActorActionUtility
        fun GetDefaultObject(): ActorActionUtility
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorActionUtility
        fun C(Other: UObject): ActorActionUtility
        fun C(Other: Any): ActorActionUtility
    }
}

external open class AssetActionUtility : EditorUtilityObject {
    constructor()
    constructor(Outer: UObject)
    open fun IsActionForBlueprints(): Boolean
    open fun GetSupportedClass(): UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): AssetActionUtility
        fun Find(Outer: UObject, ResourceName: String): AssetActionUtility
        fun GetDefaultObject(): AssetActionUtility
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AssetActionUtility
        fun C(Other: UObject): AssetActionUtility
        fun C(Other: Any): AssetActionUtility
    }
}

external open class EditorUtilityExtension : Interface {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorUtilityExtension
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityExtension
        fun GetDefaultObject(): EditorUtilityExtension
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityExtension
        fun C(Other: UObject): EditorUtilityExtension
        fun C(Other: Any): EditorUtilityExtension
    }
}

external open class EditorUtilityActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open fun Run()

    companion object {
        fun GetDefaultObject(): EditorUtilityActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityActor
        fun C(Other: UObject): EditorUtilityActor
        fun C(Other: Any): EditorUtilityActor
    }
}

external open class EditorUtilityActorComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorUtilityActorComponent
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityActorComponent
        fun GetDefaultObject(): EditorUtilityActorComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityActorComponent
        fun C(Other: UObject): EditorUtilityActorComponent
        fun C(Other: Any): EditorUtilityActorComponent
    }
}

external open class EditorUtilityBlueprint : Blueprint {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorUtilityBlueprint
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityBlueprint
        fun GetDefaultObject(): EditorUtilityBlueprint
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityBlueprint
        fun C(Other: UObject): EditorUtilityBlueprint
        fun C(Other: Any): EditorUtilityBlueprint
    }
}

external open class EditorUtilityBlueprintFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var ParentClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): EditorUtilityBlueprintFactory
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityBlueprintFactory
        fun GetDefaultObject(): EditorUtilityBlueprintFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityBlueprintFactory
        fun C(Other: UObject): EditorUtilityBlueprintFactory
        fun C(Other: Any): EditorUtilityBlueprintFactory
    }
}

external open class EditorUtilityCamera(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : CameraActor {
    companion object {
        fun GetDefaultObject(): EditorUtilityCamera
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityCamera
        fun C(Other: UObject): EditorUtilityCamera
        fun C(Other: Any): EditorUtilityCamera
    }
}

external interface `T$50` {
    var Origin: Vector
    var BoxExtent: Vector
    var SphereRadius: Number
}

external open class EditorUtilityLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)
    open fun GetActorReference(PathToActor: String): Actor

    companion object {
        fun Load(ResourceName: String): EditorUtilityLibrary
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityLibrary
        fun GetDefaultObject(): EditorUtilityLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityLibrary
        fun RenameAsset(Asset: UObject, NewName: String)
        fun GetSelectionSet(): Array<Actor>
        fun GetSelectionBounds(Origin: Vector = definedExternally, BoxExtent: Vector = definedExternally, SphereRadius: Number = definedExternally): `T$50`
        fun GetSelectedBlueprintClasses(): Array<UnrealEngineClass>
        fun GetSelectedAssets(): Array<UObject>
        fun GetSelectedAssetData(): Array<AssetData>
        fun C(Other: UObject): EditorUtilityLibrary
        fun C(Other: Any): EditorUtilityLibrary
    }
}

external open class EditorUtilityTask : UObject {
    constructor()
    constructor(Outer: UObject)
    open var MyTaskManager: EditorUtilitySubsystem
    open fun SetTaskNotificationText(text: String)
    open fun Run()
    open fun BeginExecution()
    open fun FinishExecutingTask()

    companion object {
        fun Load(ResourceName: String): EditorUtilityTask
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityTask
        fun GetDefaultObject(): EditorUtilityTask
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityTask
        fun C(Other: UObject): EditorUtilityTask
        fun C(Other: Any): EditorUtilityTask
    }
}

external open class EditorUtilityWidget : UserWidget {
    constructor()
    constructor(Outer: UObject)
    open var HelpText: String
    open var bAlwaysReregisterWithWindowsMenu: Boolean
    open var bAutoRunDefaultAction: Boolean
    open fun Run()

    companion object {
        fun Load(ResourceName: String): EditorUtilityWidget
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityWidget
        fun GetDefaultObject(): EditorUtilityWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityWidget
        fun C(Other: UObject): EditorUtilityWidget
        fun C(Other: Any): EditorUtilityWidget
    }
}

external open class EditorUtilityWidgetBlueprint : WidgetBlueprint {
    constructor()
    constructor(Outer: UObject)
    open var CreatedUMGWidget: EditorUtilityWidget

    companion object {
        fun Load(ResourceName: String): EditorUtilityWidgetBlueprint
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityWidgetBlueprint
        fun GetDefaultObject(): EditorUtilityWidgetBlueprint
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityWidgetBlueprint
        fun C(Other: UObject): EditorUtilityWidgetBlueprint
        fun C(Other: Any): EditorUtilityWidgetBlueprint
    }
}

external interface `T$51` {
    var NewTabID: String
    var `$`: EditorUtilityWidget
}

external interface `T$52` {
    var NewTabID: String
}

external open class EditorUtilitySubsystem : EditorSubsystem {
    constructor()
    constructor(Outer: UObject)
    open var LoadedUIs: Array<SoftObjectPath>
    open var StartupObjects: Array<SoftObjectPath>
    open var ObjectInstances: Any
    open var PendingTasks: Array<EditorUtilityTask>
    open var ActiveTask: EditorUtilityTask
    open fun TryRun(Asset: UObject): Boolean
    open fun SpawnRegisteredTabByID(NewTabID: String): Boolean
    open fun SpawnAndRegisterTabAndGetID(InBlueprint: EditorUtilityWidgetBlueprint, NewTabID: String = definedExternally): `T$51`
    open fun SpawnAndRegisterTab(InBlueprint: EditorUtilityWidgetBlueprint): EditorUtilityWidget
    open fun ReleaseInstanceOfAsset(Asset: UObject)
    open fun RegisterTabAndGetID(InBlueprint: EditorUtilityWidgetBlueprint, NewTabID: String = definedExternally): `T$52`
    open fun RegisterAndExecuteTask(NewTask: EditorUtilityTask)
    open fun FindUtilityWidgetFromBlueprint(InBlueprint: EditorUtilityWidgetBlueprint): EditorUtilityWidget
    open fun DoesTabExist(NewTabID: String): Boolean
    open fun CloseTabByID(NewTabID: String): Boolean

    companion object {
        fun Load(ResourceName: String): EditorUtilitySubsystem
        fun Find(Outer: UObject, ResourceName: String): EditorUtilitySubsystem
        fun GetDefaultObject(): EditorUtilitySubsystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilitySubsystem
        fun C(Other: UObject): EditorUtilitySubsystem
        fun C(Other: Any): EditorUtilitySubsystem
    }
}

external open class EditorUtilityToolMenuEntry : ToolMenuEntryScript {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorUtilityToolMenuEntry
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityToolMenuEntry
        fun GetDefaultObject(): EditorUtilityToolMenuEntry
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityToolMenuEntry
        fun C(Other: UObject): EditorUtilityToolMenuEntry
        fun C(Other: Any): EditorUtilityToolMenuEntry
    }
}

external open class EditorUtilityToolMenuSection : ToolMenuSectionDynamic {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorUtilityToolMenuSection
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityToolMenuSection
        fun GetDefaultObject(): EditorUtilityToolMenuSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityToolMenuSection
        fun C(Other: UObject): EditorUtilityToolMenuSection
        fun C(Other: Any): EditorUtilityToolMenuSection
    }
}

external open class EditorUtilityWidgetBlueprintFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var BlueprintType: String /* "BPTYPE_Normal" | "BPTYPE_Const" | "BPTYPE_MacroLibrary" | "BPTYPE_Interface" | "BPTYPE_LevelScript" | "BPTYPE_FunctionLibrary" | "BPTYPE_MAX" */
    open var ParentClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): EditorUtilityWidgetBlueprintFactory
        fun Find(Outer: UObject, ResourceName: String): EditorUtilityWidgetBlueprintFactory
        fun GetDefaultObject(): EditorUtilityWidgetBlueprintFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorUtilityWidgetBlueprintFactory
        fun C(Other: UObject): EditorUtilityWidgetBlueprintFactory
        fun C(Other: Any): EditorUtilityWidgetBlueprintFactory
    }
}

external open class GlobalEditorUtilityBase : UObject {
    constructor()
    constructor(Outer: UObject)
    open var HelpText: String
    open var bDirtiedSelectionSet: Boolean
    open var bAutoRunDefaultAction: Boolean
    open var OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, index: Number) -> Unit>
    open var OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, index: Number) -> Unit>
    open fun SetActorSelectionState(Actor: Actor, bShouldBeSelected: Boolean)
    open fun SelectNothing()
    open fun RenameAsset(Asset: UObject, NewName: String)
    open fun OnDefaultActionClicked()
    open fun GetSelectionSet(): Array<Actor>
    open fun GetSelectionBounds(Origin: Vector = definedExternally, BoxExtent: Vector = definedExternally, SphereRadius: Number = definedExternally): `T$50`
    open fun GetSelectedAssets(): Array<UObject>
    open fun GetEditorUserSettings(): EditorPerProjectUserSettings
    open fun GetActorReference(PathToActor: String): Actor
    open fun ForEachSelectedAsset()
    open fun ForEachSelectedActor()
    open fun ClearActorSelectionSet()

    companion object {
        fun Load(ResourceName: String): GlobalEditorUtilityBase
        fun Find(Outer: UObject, ResourceName: String): GlobalEditorUtilityBase
        fun GetDefaultObject(): GlobalEditorUtilityBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GlobalEditorUtilityBase
        fun C(Other: UObject): GlobalEditorUtilityBase
        fun C(Other: Any): GlobalEditorUtilityBase
    }
}

external interface `T$53` {
    var CameraLocation: Vector
    var CameraRotation: Rotator
    var `$`: Boolean
}

external open class PlacedEditorUtilityBase(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var HelpText: String
    open fun SetLevelViewportCameraInfo(CameraLocation: Vector, CameraRotation: Rotator)
    open fun SetActorSelectionState(Actor: Actor, bShouldBeSelected: Boolean)
    open fun SelectNothing()
    open fun GetSelectionSet(): Array<Actor>
    open fun GetLevelViewportCameraInfo(CameraLocation: Vector = definedExternally, CameraRotation: Rotator = definedExternally): `T$53`
    open fun GetActorReference(PathToActor: String): Actor
    open fun ClearActorSelectionSet()

    companion object {
        fun GetDefaultObject(): PlacedEditorUtilityBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PlacedEditorUtilityBase
        fun C(Other: UObject): PlacedEditorUtilityBase
        fun C(Other: Any): PlacedEditorUtilityBase
    }
}

external open class DataValidationCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): DataValidationCommandlet
        fun Find(Outer: UObject, ResourceName: String): DataValidationCommandlet
        fun GetDefaultObject(): DataValidationCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DataValidationCommandlet
        fun C(Other: UObject): DataValidationCommandlet
        fun C(Other: Any): DataValidationCommandlet
    }
}

external open class DataValidationManager : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ExcludedDirectories: Array<DirectoryPath>
    open var bValidateOnSave: Boolean
    open var DataValidationManagerClassName: SoftClassPath

    companion object {
        fun Load(ResourceName: String): DataValidationManager
        fun Find(Outer: UObject, ResourceName: String): DataValidationManager
        fun GetDefaultObject(): DataValidationManager
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DataValidationManager
        fun C(Other: UObject): DataValidationManager
        fun C(Other: Any): DataValidationManager
    }
}

external object EDataValidationResult {
    var Invalid: String /* "Invalid" */
    var Valid: String /* "Valid" */
    var NotValidated: String /* "NotValidated" */
    var EDataValidationResult_MAX: String /* "EDataValidationResult_MAX" */
}

external interface `T$54` {
    var ValidationErrors: Array<String>
    var `$`: String /* "Invalid" | "Valid" | "NotValidated" | "EDataValidationResult_MAX" */
}

external interface `T$55` {
    var ValidationErrors: Array<String>
}

external open class EditorValidatorBase : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bIsEnabled: Boolean
    open fun ValidateLoadedAsset(InAsset: UObject, ValidationErrors: Array<String> = definedExternally): `T$54`
    open fun GetValidationResult(): String /* "Invalid" | "Valid" | "NotValidated" | "EDataValidationResult_MAX" */
    open fun CanValidateAsset(InAsset: UObject): Boolean
    open fun AssetWarning(InAsset: UObject, InMessage: String)
    open fun AssetPasses(InAsset: UObject)
    open fun AssetFails(InAsset: UObject, InMessage: String, ValidationErrors: Array<String> = definedExternally): `T$55`

    companion object {
        fun Load(ResourceName: String): EditorValidatorBase
        fun Find(Outer: UObject, ResourceName: String): EditorValidatorBase
        fun GetDefaultObject(): EditorValidatorBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorValidatorBase
        fun C(Other: UObject): EditorValidatorBase
        fun C(Other: Any): EditorValidatorBase
    }
}

external open class EditorValidator_Localization : EditorValidatorBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorValidator_Localization
        fun Find(Outer: UObject, ResourceName: String): EditorValidator_Localization
        fun GetDefaultObject(): EditorValidator_Localization
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorValidator_Localization
        fun C(Other: UObject): EditorValidator_Localization
        fun C(Other: Any): EditorValidator_Localization
    }
}

external open class DataValidationSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bValidateOnSave: Boolean

    companion object {
        fun Load(ResourceName: String): DataValidationSettings
        fun Find(Outer: UObject, ResourceName: String): DataValidationSettings
        fun GetDefaultObject(): DataValidationSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DataValidationSettings
        fun C(Other: UObject): DataValidationSettings
        fun C(Other: Any): DataValidationSettings
    }
}

external interface `T$56` {
    var ValidationErrors: Array<String>
    var ValidationWarnings: Array<String>
    var `$`: String /* "Invalid" | "Valid" | "NotValidated" | "EDataValidationResult_MAX" */
}

external interface `T$57` {
    var AssetData: AssetData
    var ValidationErrors: Array<String>
    var ValidationWarnings: Array<String>
    var `$`: String /* "Invalid" | "Valid" | "NotValidated" | "EDataValidationResult_MAX" */
}

external open class EditorValidatorSubsystem : EditorSubsystem {
    constructor()
    constructor(Outer: UObject)
    open var ExcludedDirectories: Array<DirectoryPath>
    open var bValidateOnSave: Boolean
    open var Validators: Any
    open var bValidateAssetsWhileSavingForCook: Boolean
    open var bAllowBlueprintValidators: Boolean
    open fun ValidateAssets(AssetDataList: Array<AssetData>, bSkipExcludedDirectories: Boolean, bShowIfNoFailures: Boolean): Number
    open fun IsObjectValid(InObject: UObject, ValidationErrors: Array<String> = definedExternally, ValidationWarnings: Array<String> = definedExternally): `T$56`
    open fun IsAssetValid(AssetData: AssetData = definedExternally, ValidationErrors: Array<String> = definedExternally, ValidationWarnings: Array<String> = definedExternally): `T$57`
    open fun AddValidator(InValidator: EditorValidatorBase)

    companion object {
        fun Load(ResourceName: String): EditorValidatorSubsystem
        fun Find(Outer: UObject, ResourceName: String): EditorValidatorSubsystem
        fun GetDefaultObject(): EditorValidatorSubsystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorValidatorSubsystem
        fun C(Other: UObject): EditorValidatorSubsystem
        fun C(Other: Any): EditorValidatorSubsystem
    }
}

external open class AudioCurveSourceComponent : AudioComponent {
    constructor()
    constructor(Outer: UObject)
    open var CurveSourceBindingName: String
    open var CurveSyncOffset: Number

    companion object {
        fun Load(ResourceName: String): AudioCurveSourceComponent
        fun Find(Outer: UObject, ResourceName: String): AudioCurveSourceComponent
        fun GetDefaultObject(): AudioCurveSourceComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioCurveSourceComponent
        fun C(Other: UObject): AudioCurveSourceComponent
        fun C(Other: Any): AudioCurveSourceComponent
    }
}

external open class FacialAnimationBulkImporterSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SourceImportPath: DirectoryPath
    open var TargetImportPath: DirectoryPath
    open var CurveNodeName: String

    companion object {
        fun Load(ResourceName: String): FacialAnimationBulkImporterSettings
        fun Find(Outer: UObject, ResourceName: String): FacialAnimationBulkImporterSettings
        fun GetDefaultObject(): FacialAnimationBulkImporterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FacialAnimationBulkImporterSettings
        fun C(Other: UObject): FacialAnimationBulkImporterSettings
        fun C(Other: Any): FacialAnimationBulkImporterSettings
    }
}

external open class GameplayTagSearchFilter : ContentBrowserFrontEndFilterExtension {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagSearchFilter
        fun Find(Outer: UObject, ResourceName: String): GameplayTagSearchFilter
        fun GetDefaultObject(): GameplayTagSearchFilter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagSearchFilter
        fun C(Other: UObject): GameplayTagSearchFilter
        fun C(Other: Any): GameplayTagSearchFilter
    }
}

external open class GameplayTagsK2Node_LiteralGameplayTag : K2Node {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_LiteralGameplayTag
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_LiteralGameplayTag
        fun GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_LiteralGameplayTag
        fun C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag
        fun C(Other: Any): GameplayTagsK2Node_LiteralGameplayTag
    }
}

external open class GameplayTagsK2Node_MultiCompareBase : K2Node {
    constructor()
    constructor(Outer: UObject)
    open var NumberOfPins: Number
    open var PinNames: Array<String>

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_MultiCompareBase
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_MultiCompareBase
        fun GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_MultiCompareBase
        fun C(Other: UObject): GameplayTagsK2Node_MultiCompareBase
        fun C(Other: Any): GameplayTagsK2Node_MultiCompareBase
    }
}

external open class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface : GameplayTagsK2Node_MultiCompareBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
        fun GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
        fun C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
        fun C(Other: Any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
    }
}

external open class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags : GameplayTagsK2Node_MultiCompareBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
        fun GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
        fun C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
        fun C(Other: Any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
    }
}

external open class GameplayTagsK2Node_MultiCompareGameplayTagContainer : GameplayTagsK2Node_MultiCompareBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagContainer
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagContainer
        fun GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_MultiCompareGameplayTagContainer
        fun C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer
        fun C(Other: Any): GameplayTagsK2Node_MultiCompareGameplayTagContainer
    }
}

external open class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags : GameplayTagsK2Node_MultiCompareBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
        fun GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
        fun C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
        fun C(Other: Any): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
    }
}

external open class GameplayTagsK2Node_SwitchGameplayTag : K2Node_Switch {
    constructor()
    constructor(Outer: UObject)
    open var PinTags: Array<GameplayTag>
    open var PinNames: Array<String>

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_SwitchGameplayTag
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_SwitchGameplayTag
        fun GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_SwitchGameplayTag
        fun C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag
        fun C(Other: Any): GameplayTagsK2Node_SwitchGameplayTag
    }
}

external open class GameplayTagsK2Node_SwitchGameplayTagContainer : K2Node_Switch {
    constructor()
    constructor(Outer: UObject)
    open var PinContainers: Array<GameplayTagContainer>
    open var PinNames: Array<String>

    companion object {
        fun Load(ResourceName: String): GameplayTagsK2Node_SwitchGameplayTagContainer
        fun Find(Outer: UObject, ResourceName: String): GameplayTagsK2Node_SwitchGameplayTagContainer
        fun GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GameplayTagsK2Node_SwitchGameplayTagContainer
        fun C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer
        fun C(Other: Any): GameplayTagsK2Node_SwitchGameplayTagContainer
    }
}

external open class TcpMessagingSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var EnableTransport: Boolean
    open var ListenEndpoint: String
    open var ConnectToEndpoints: Array<String>
    open var ConnectionRetryDelay: Number
    open var bStopServiceWhenAppDeactivates: Boolean

    companion object {
        fun Load(ResourceName: String): TcpMessagingSettings
        fun Find(Outer: UObject, ResourceName: String): TcpMessagingSettings
        fun GetDefaultObject(): TcpMessagingSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TcpMessagingSettings
        fun C(Other: UObject): TcpMessagingSettings
        fun C(Other: Any): TcpMessagingSettings
    }
}

external open class AudioAnalyzerAsset : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioAnalyzerAsset
        fun Find(Outer: UObject, ResourceName: String): AudioAnalyzerAsset
        fun GetDefaultObject(): AudioAnalyzerAsset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioAnalyzerAsset
        fun C(Other: UObject): AudioAnalyzerAsset
        fun C(Other: Any): AudioAnalyzerAsset
    }
}

external open class AudioAnalyzerNRTSettings : AudioAnalyzerAsset {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioAnalyzerNRTSettings
        fun Find(Outer: UObject, ResourceName: String): AudioAnalyzerNRTSettings
        fun GetDefaultObject(): AudioAnalyzerNRTSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioAnalyzerNRTSettings
        fun C(Other: UObject): AudioAnalyzerNRTSettings
        fun C(Other: Any): AudioAnalyzerNRTSettings
    }
}

external open class AudioAnalyzerNRT : AudioAnalyzerAsset {
    constructor()
    constructor(Outer: UObject)
    open var Sound: SoundWave
    open var DurationInSeconds: Number
    open fun AnalyzeAudio()

    companion object {
        fun Load(ResourceName: String): AudioAnalyzerNRT
        fun Find(Outer: UObject, ResourceName: String): AudioAnalyzerNRT
        fun GetDefaultObject(): AudioAnalyzerNRT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioAnalyzerNRT
        fun C(Other: UObject): AudioAnalyzerNRT
        fun C(Other: Any): AudioAnalyzerNRT
    }
}

external open class AudioSynesthesiaNRTSettings : AudioAnalyzerNRTSettings {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRTSettings
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRTSettings
        fun GetDefaultObject(): AudioSynesthesiaNRTSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRTSettings
        fun C(Other: UObject): AudioSynesthesiaNRTSettings
        fun C(Other: Any): AudioSynesthesiaNRTSettings
    }
}

external open class AudioSynesthesiaNRT : AudioAnalyzerNRT {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRT
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRT
        fun GetDefaultObject(): AudioSynesthesiaNRT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRT
        fun C(Other: UObject): AudioSynesthesiaNRT
        fun C(Other: Any): AudioSynesthesiaNRT
    }
}

external object EConstantQFFTSizeEnum {
    var Min: String /* "Min" */
    var XXSmall: String /* "XXSmall" */
    var XSmall: String /* "XSmall" */
    var Small: String /* "Small" */
    var Medium: String /* "Medium" */
    var Large: String /* "Large" */
    var XLarge: String /* "XLarge" */
    var XXLarge: String /* "XXLarge" */
    var Max: String /* "Max" */
    var EConstantQFFTSizeEnum_MAX: String /* "EConstantQFFTSizeEnum_MAX" */
}

external object EConstantQNormalizationEnum {
    var EqualEuclideanNorm: String /* "EqualEuclideanNorm" */
    var EqualEnergy: String /* "EqualEnergy" */
    var EqualAmplitude: String /* "EqualAmplitude" */
    var EConstantQNormalizationEnum_MAX: String /* "EConstantQNormalizationEnum_MAX" */
}

external open class ConstantQNRTSettings : AudioSynesthesiaNRTSettings {
    constructor()
    constructor(Outer: UObject)
    open var StartingFrequency: Number
    open var NumBands: Number
    open var NumBandsPerOctave: Number
    open var AnalysisPeriod: Number
    open var bDownmixToMono: Boolean
    open var FFTSize: String /* "Min" | "XXSmall" | "XSmall" | "Small" | "Medium" | "Large" | "XLarge" | "XXLarge" | "Max" | "EConstantQFFTSizeEnum_MAX" */
    open var WindowType: String /* "None" | "Hamming" | "Hann" | "Blackman" | "EFFTWindowType_MAX" */
    open var SpectrumType: String /* "MagnitudeSpectrum" | "PowerSpectrum" | "Decibel" | "EAudioSpectrumType_MAX" */
    open var BandWidthStretch: Number
    open var CQTNormalization: String /* "EqualEuclideanNorm" | "EqualEnergy" | "EqualAmplitude" | "EConstantQNormalizationEnum_MAX" */
    open var NoiseFloorDb: Number

    companion object {
        fun Load(ResourceName: String): ConstantQNRTSettings
        fun Find(Outer: UObject, ResourceName: String): ConstantQNRTSettings
        fun GetDefaultObject(): ConstantQNRTSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ConstantQNRTSettings
        fun C(Other: UObject): ConstantQNRTSettings
        fun C(Other: Any): ConstantQNRTSettings
    }
}

external interface `T$58` {
    var OutConstantQ: Array<Number>
}

external interface `T$59` {
    var OutConstantQ: Array<Number>
}

external open class ConstantQNRT : AudioSynesthesiaNRT {
    constructor()
    constructor(Outer: UObject)
    open var Settings: ConstantQNRTSettings
    open fun GetNormalizedChannelConstantQAtTime(InSeconds: Number, InChannel: Number, OutConstantQ: Array<Number> = definedExternally): `T$58`
    open fun GetChannelConstantQAtTime(InSeconds: Number, InChannel: Number, OutConstantQ: Array<Number> = definedExternally): `T$59`

    companion object {
        fun Load(ResourceName: String): ConstantQNRT
        fun Find(Outer: UObject, ResourceName: String): ConstantQNRT
        fun GetDefaultObject(): ConstantQNRT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ConstantQNRT
        fun C(Other: UObject): ConstantQNRT
        fun C(Other: Any): ConstantQNRT
    }
}

external object ELoudnessNRTCurveTypeEnum {
    var A: String /* "A" */
    var B: String /* "B" */
    var C: String /* "C" */
    var D: String /* "D" */
    var None: String /* "None" */
    var ELoudnessNRTCurveTypeEnum_MAX: String /* "ELoudnessNRTCurveTypeEnum_MAX" */
}

external open class LoudnessNRTSettings : AudioSynesthesiaNRTSettings {
    constructor()
    constructor(Outer: UObject)
    open var AnalysisPeriod: Number
    open var MinimumFrequency: Number
    open var MaximumFrequency: Number
    open var CurveType: String /* "A" | "B" | "C" | "D" | "None" | "ELoudnessNRTCurveTypeEnum_MAX" */
    open var NoiseFloorDb: Number

    companion object {
        fun Load(ResourceName: String): LoudnessNRTSettings
        fun Find(Outer: UObject, ResourceName: String): LoudnessNRTSettings
        fun GetDefaultObject(): LoudnessNRTSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LoudnessNRTSettings
        fun C(Other: UObject): LoudnessNRTSettings
        fun C(Other: Any): LoudnessNRTSettings
    }
}

external interface `T$60` {
    var OutLoudness: Number
}

external open class LoudnessNRT : AudioSynesthesiaNRT {
    constructor()
    constructor(Outer: UObject)
    open var Settings: LoudnessNRTSettings
    open fun GetNormalizedLoudnessAtTime(InSeconds: Number, OutLoudness: Number = definedExternally): `T$60`
    open fun GetNormalizedChannelLoudnessAtTime(InSeconds: Number, InChannel: Number, OutLoudness: Number = definedExternally): `T$60`
    open fun GetLoudnessAtTime(InSeconds: Number, OutLoudness: Number = definedExternally): `T$60`
    open fun GetChannelLoudnessAtTime(InSeconds: Number, InChannel: Number, OutLoudness: Number = definedExternally): `T$60`

    companion object {
        fun Load(ResourceName: String): LoudnessNRT
        fun Find(Outer: UObject, ResourceName: String): LoudnessNRT
        fun GetDefaultObject(): LoudnessNRT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LoudnessNRT
        fun C(Other: UObject): LoudnessNRT
        fun C(Other: Any): LoudnessNRT
    }
}

external open class OnsetNRTSettings : AudioSynesthesiaNRTSettings {
    constructor()
    constructor(Outer: UObject)
    open var bDownmixToMono: Boolean
    open var GranularityInSeconds: Number
    open var Sensitivity: Number
    open var MinimumFrequency: Number
    open var MaximumFrequency: Number

    companion object {
        fun Load(ResourceName: String): OnsetNRTSettings
        fun Find(Outer: UObject, ResourceName: String): OnsetNRTSettings
        fun GetDefaultObject(): OnsetNRTSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnsetNRTSettings
        fun C(Other: UObject): OnsetNRTSettings
        fun C(Other: Any): OnsetNRTSettings
    }
}

external interface `T$61` {
    var OutOnsetTimestamps: Array<Number>
    var OutOnsetStrengths: Array<Number>
}

external interface `T$62` {
    var OutOnsetTimestamps: Array<Number>
    var OutOnsetStrengths: Array<Number>
}

external open class OnsetNRT : AudioSynesthesiaNRT {
    constructor()
    constructor(Outer: UObject)
    open var Settings: OnsetNRTSettings
    open fun GetNormalizedChannelOnsetsBetweenTimes(InStartSeconds: Number, InEndSeconds: Number, InChannel: Number, OutOnsetTimestamps: Array<Number> = definedExternally, OutOnsetStrengths: Array<Number> = definedExternally): `T$61`
    open fun GetChannelOnsetsBetweenTimes(InStartSeconds: Number, InEndSeconds: Number, InChannel: Number, OutOnsetTimestamps: Array<Number> = definedExternally, OutOnsetStrengths: Array<Number> = definedExternally): `T$62`

    companion object {
        fun Load(ResourceName: String): OnsetNRT
        fun Find(Outer: UObject, ResourceName: String): OnsetNRT
        fun GetDefaultObject(): OnsetNRT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnsetNRT
        fun C(Other: UObject): OnsetNRT
        fun C(Other: Any): OnsetNRT
    }
}

external object ELocationAccuracy {
    var LA_ThreeKilometers: String /* "LA_ThreeKilometers" */
    var LA_OneKilometer: String /* "LA_OneKilometer" */
    var LA_HundredMeters: String /* "LA_HundredMeters" */
    var LA_TenMeters: String /* "LA_TenMeters" */
    var LA_Best: String /* "LA_Best" */
    var LA_Navigation: String /* "LA_Navigation" */
    var LA_MAX: String /* "LA_MAX" */
}

external open class LocationServicesData {
    open var Timestamp: Number
    open var Longitude: Number
    open var Latitude: Number
    open var HorizontalAccuracy: Number
    open var VerticalAccuracy: Number
    open var Altitude: Number
    open fun clone(): LocationServicesData

    companion object {
        fun C(Other: UObject): LocationServicesData
        fun C(Other: Any): LocationServicesData
        fun GetLastKnownLocation(): LocationServicesData
    }
}

external open class LocationServicesImpl : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnLocationChanged: UnrealEngineMulticastDelegate<(LocationData: LocationServicesData) -> Unit>

    companion object {
        fun Load(ResourceName: String): LocationServicesImpl
        fun Find(Outer: UObject, ResourceName: String): LocationServicesImpl
        fun GetDefaultObject(): LocationServicesImpl
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LocationServicesImpl
        fun C(Other: UObject): LocationServicesImpl
        fun C(Other: Any): LocationServicesImpl
    }
}

external open class LocationServices : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LocationServices
        fun Find(Outer: UObject, ResourceName: String): LocationServices
        fun GetDefaultObject(): LocationServices
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LocationServices
        fun StopLocationServices(): Boolean
        fun StartLocationServices(): Boolean
        fun IsLocationAccuracyAvailable(Accuracy: String /* "LA_ThreeKilometers" | "LA_OneKilometer" | "LA_HundredMeters" | "LA_TenMeters" | "LA_Best" | "LA_Navigation" | "LA_MAX" */): Boolean
        fun InitLocationServices(Accuracy: String /* "LA_ThreeKilometers" | "LA_OneKilometer" | "LA_HundredMeters" | "LA_TenMeters" | "LA_Best" | "LA_Navigation" | "LA_MAX" */, UpdateFrequency: Number, MinDistanceFilter: Number): Boolean
        fun GetLocationServicesImpl(): LocationServicesImpl
        fun GetLastKnownLocation(): LocationServicesData
        fun AreLocationServicesEnabled(): Boolean
        fun C(Other: UObject): LocationServices
        fun C(Other: Any): LocationServices
    }
}

external open class TireConfigMaterialFriction {
    open var PhysicalMaterial: PhysicalMaterial
    open var FrictionScale: Number
    open fun clone(): TireConfigMaterialFriction

    companion object {
        fun C(Other: UObject): TireConfigMaterialFriction
        fun C(Other: Any): TireConfigMaterialFriction
    }
}

external open class TireConfig : DataAsset {
    constructor()
    constructor(Outer: UObject)
    open var FrictionScale: Number
    open var TireFrictionScales: Array<TireConfigMaterialFriction>

    companion object {
        fun Load(ResourceName: String): TireConfig
        fun Find(Outer: UObject, ResourceName: String): TireConfig
        fun GetDefaultObject(): TireConfig
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TireConfig
        fun C(Other: UObject): TireConfig
        fun C(Other: Any): TireConfig
    }
}

external object EWheelSweepType {
    var SimpleAndComplex: String /* "SimpleAndComplex" */
    var Simple: String /* "Simple" */
    var Complex: String /* "Complex" */
    var EWheelSweepType_MAX: String /* "EWheelSweepType_MAX" */
}

external open class VehicleWheel : UObject {
    constructor()
    constructor(Outer: UObject)
    open var CollisionMesh: StaticMesh
    open var bDontCreateShape: Boolean
    open var bAutoAdjustCollisionSize: Boolean
    open var Offset: Vector
    open var ShapeRadius: Number
    open var ShapeWidth: Number
    open var Mass: Number
    open var DampingRate: Number
    open var SteerAngle: Number
    open var bAffectedByHandbrake: Boolean
    open var TireType: TireType
    open var TireConfig: TireConfig
    open var LatStiffMaxLoad: Number
    open var LatStiffValue: Number
    open var LongStiffValue: Number
    open var SuspensionForceOffset: Number
    open var SuspensionMaxRaise: Number
    open var SuspensionMaxDrop: Number
    open var SuspensionNaturalFrequency: Number
    open var SuspensionDampingRatio: Number
    open var SweepType: String /* "SimpleAndComplex" | "Simple" | "Complex" | "EWheelSweepType_MAX" */
    open var MaxBrakeTorque: Number
    open var MaxHandBrakeTorque: Number
    open var VehicleSim: WheeledVehicleMovementComponent
    open var WheelIndex: Number
    open var DebugLongSlip: Number
    open var DebugLatSlip: Number
    open var DebugNormalizedTireLoad: Number
    open var DebugWheelTorque: Number
    open var DebugLongForce: Number
    open var DebugLatForce: Number
    open var Location: Vector
    open var OldLocation: Vector
    open var Velocity: Vector
    open fun IsInAir(): Boolean
    open fun GetSuspensionOffset(): Number
    open fun GetSteerAngle(): Number
    open fun GetRotationAngle(): Number

    companion object {
        fun Load(ResourceName: String): VehicleWheel
        fun Find(Outer: UObject, ResourceName: String): VehicleWheel
        fun GetDefaultObject(): VehicleWheel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VehicleWheel
        fun C(Other: UObject): VehicleWheel
        fun C(Other: Any): VehicleWheel
    }
}

external open class WheelSetup {
    open var WheelClass: UnrealEngineClass
    open var BoneName: String
    open var AdditionalOffset: Vector
    open var bDisableSteering: Boolean
    open fun clone(): WheelSetup

    companion object {
        fun C(Other: UObject): WheelSetup
        fun C(Other: Any): WheelSetup
    }
}

external open class ReplicatedVehicleState {
    open var SteeringInput: Number
    open var ThrottleInput: Number
    open var BrakeInput: Number
    open var HandbrakeInput: Number
    open var CurrentGear: Number
    open fun clone(): ReplicatedVehicleState

    companion object {
        fun C(Other: UObject): ReplicatedVehicleState
        fun C(Other: Any): ReplicatedVehicleState
    }
}

external open class VehicleInputRate {
    open var RiseRate: Number
    open var FallRate: Number
    open fun clone(): VehicleInputRate

    companion object {
        fun C(Other: UObject): VehicleInputRate
        fun C(Other: Any): VehicleInputRate
    }
}

external open class WheeledVehicleMovementComponent : PawnMovementComponent {
    constructor()
    constructor(Outer: UObject)
    open var bDeprecatedSpringOffsetMode: Boolean
    open var bReverseAsBrake: Boolean
    open var bUseRVOAvoidance: Boolean
    open var bRawHandbrakeInput: Boolean
    open var bRawGearUpInput: Boolean
    open var bRawGearDownInput: Boolean
    open var bWasAvoidanceUpdated: Boolean
    open var Mass: Number
    open var WheelSetups: Array<WheelSetup>
    open var DragCoefficient: Number
    open var ChassisWidth: Number
    open var ChassisHeight: Number
    open var DragArea: Number
    open var EstimatedMaxEngineSpeed: Number
    open var MaxEngineRPM: Number
    open var DebugDragMagnitude: Number
    open var InertiaTensorScale: Vector
    open var MinNormalizedTireLoad: Number
    open var MinNormalizedTireLoadFiltered: Number
    open var MaxNormalizedTireLoad: Number
    open var MaxNormalizedTireLoadFiltered: Number
    open var ThresholdLongitudinalSpeed: Number
    open var LowForwardSpeedSubStepCount: Number
    open var HighForwardSpeedSubStepCount: Number
    open var Wheels: Array<VehicleWheel>
    open var RVOAvoidanceRadius: Number
    open var RVOAvoidanceHeight: Number
    open var AvoidanceConsiderationRadius: Number
    open var RVOSteeringStep: Number
    open var RVOThrottleStep: Number
    open var AvoidanceUID: Number
    open var AvoidanceGroup: NavAvoidanceMask
    open var GroupsToAvoid: NavAvoidanceMask
    open var GroupsToIgnore: NavAvoidanceMask
    open var AvoidanceWeight: Number
    open var PendingLaunchVelocity: Vector
    open var ReplicatedState: ReplicatedVehicleState
    open var RawSteeringInput: Number
    open var RawThrottleInput: Number
    open var RawBrakeInput: Number
    open var SteeringInput: Number
    open var ThrottleInput: Number
    open var BrakeInput: Number
    open var HandbrakeInput: Number
    open var IdleBrakeInput: Number
    open var StopThreshold: Number
    open var WrongDirectionThreshold: Number
    open var ThrottleInputRate: VehicleInputRate
    open var BrakeInputRate: VehicleInputRate
    open var HandbrakeInputRate: VehicleInputRate
    open var SteeringInputRate: VehicleInputRate
    open var OverrideController: Controller
    open fun SetUseAutoGears(bUseAuto: Boolean)
    open fun SetThrottleInput(Throttle: Number)
    open fun SetTargetGear(GearNum: Number, bImmediate: Boolean)
    open fun SetSteeringInput(Steering: Number)
    open fun SetHandbrakeInput(bNewHandbrake: Boolean)
    open fun SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask)
    open fun SetGroupsToIgnore(GroupFlags: Number)
    open fun SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask)
    open fun SetGroupsToAvoid(GroupFlags: Number)
    open fun SetGearUp(bNewGearUp: Boolean)
    open fun SetGearDown(bNewGearDown: Boolean)
    open fun SetBrakeInput(Brake: Number)
    open fun SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask)
    open fun SetAvoidanceGroup(GroupFlags: Number)
    open fun SetAvoidanceEnabled(bEnable: Boolean)
    open fun ServerUpdateState(InSteeringInput: Number, InThrottleInput: Number, InBrakeInput: Number, InHandbrakeInput: Number, CurrentGear: Number)
    open fun GetUseAutoGears(): Boolean
    open fun GetTargetGear(): Number
    open fun GetForwardSpeed(): Number
    open fun GetEngineRotationSpeed(): Number
    open fun GetEngineMaxRotationSpeed(): Number
    open fun GetCurrentGear(): Number

    companion object {
        fun Load(ResourceName: String): WheeledVehicleMovementComponent
        fun Find(Outer: UObject, ResourceName: String): WheeledVehicleMovementComponent
        fun GetDefaultObject(): WheeledVehicleMovementComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): WheeledVehicleMovementComponent
        fun C(Other: UObject): WheeledVehicleMovementComponent
        fun C(Other: Any): WheeledVehicleMovementComponent
    }
}

external open class SimpleWheeledVehicleMovementComponent : WheeledVehicleMovementComponent {
    constructor()
    constructor(Outer: UObject)
    open fun SetSteerAngle(SteerAngle: Number, WheelIndex: Number)
    open fun SetDriveTorque(DriveTorque: Number, WheelIndex: Number)
    open fun SetBrakeTorque(BrakeTorque: Number, WheelIndex: Number)

    companion object {
        fun Load(ResourceName: String): SimpleWheeledVehicleMovementComponent
        fun Find(Outer: UObject, ResourceName: String): SimpleWheeledVehicleMovementComponent
        fun GetDefaultObject(): SimpleWheeledVehicleMovementComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SimpleWheeledVehicleMovementComponent
        fun C(Other: UObject): SimpleWheeledVehicleMovementComponent
        fun C(Other: Any): SimpleWheeledVehicleMovementComponent
    }
}

external open class WheeledVehicle(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Pawn {
    open var Mesh: SkeletalMeshComponent
    open var VehicleMovement: WheeledVehicleMovementComponent

    companion object {
        fun GetDefaultObject(): WheeledVehicle
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): WheeledVehicle
        fun C(Other: UObject): WheeledVehicle
        fun C(Other: Any): WheeledVehicle
    }
}

external open class VehicleAnimInstance : AnimInstance {
    constructor()
    constructor(Outer: UObject)
    open var WheeledVehicleMovementComponent: WheeledVehicleMovementComponent
    open fun GetVehicle(): WheeledVehicle

    companion object {
        fun Load(ResourceName: String): VehicleAnimInstance
        fun Find(Outer: UObject, ResourceName: String): VehicleAnimInstance
        fun GetDefaultObject(): VehicleAnimInstance
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VehicleAnimInstance
        fun C(Other: UObject): VehicleAnimInstance
        fun C(Other: Any): VehicleAnimInstance
    }
}

external open class VehicleEngineData {
    open var TorqueCurve: RuntimeFloatCurve
    open var MaxRPM: Number
    open var MOI: Number
    open var DampingRateFullThrottle: Number
    open var DampingRateZeroThrottleClutchEngaged: Number
    open var DampingRateZeroThrottleClutchDisengaged: Number
    open fun clone(): VehicleEngineData

    companion object {
        fun C(Other: UObject): VehicleEngineData
        fun C(Other: Any): VehicleEngineData
    }
}

external object EVehicleDifferential4W {
    var LimitedSlip_4W: String /* "LimitedSlip_4W" */
    var LimitedSlip_FrontDrive: String /* "LimitedSlip_FrontDrive" */
    var LimitedSlip_RearDrive: String /* "LimitedSlip_RearDrive" */
    var Open_4W: String /* "Open_4W" */
    var Open_FrontDrive: String /* "Open_FrontDrive" */
    var Open_RearDrive: String /* "Open_RearDrive" */
    var EVehicleDifferential4W_MAX: String /* "EVehicleDifferential4W_MAX" */
}

external open class VehicleDifferential4WData {
    open var DifferentialType: String /* "LimitedSlip_4W" | "LimitedSlip_FrontDrive" | "LimitedSlip_RearDrive" | "Open_4W" | "Open_FrontDrive" | "Open_RearDrive" | "EVehicleDifferential4W_MAX" */
    open var FrontRearSplit: Number
    open var FrontLeftRightSplit: Number
    open var RearLeftRightSplit: Number
    open var CentreBias: Number
    open var FrontBias: Number
    open var RearBias: Number
    open fun clone(): VehicleDifferential4WData

    companion object {
        fun C(Other: UObject): VehicleDifferential4WData
        fun C(Other: Any): VehicleDifferential4WData
    }
}

external open class VehicleGearData {
    open var Ratio: Number
    open var DownRatio: Number
    open var UpRatio: Number
    open fun clone(): VehicleGearData

    companion object {
        fun C(Other: UObject): VehicleGearData
        fun C(Other: Any): VehicleGearData
    }
}

external open class VehicleTransmissionData {
    open var bUseGearAutoBox: Boolean
    open var GearSwitchTime: Number
    open var GearAutoBoxLatency: Number
    open var FinalRatio: Number
    open var ForwardGears: Array<VehicleGearData>
    open var ReverseGearRatio: Number
    open var NeutralGearUpRatio: Number
    open var ClutchStrength: Number
    open fun clone(): VehicleTransmissionData

    companion object {
        fun C(Other: UObject): VehicleTransmissionData
        fun C(Other: Any): VehicleTransmissionData
    }
}

external open class WheeledVehicleMovementComponent4W : WheeledVehicleMovementComponent {
    constructor()
    constructor(Outer: UObject)
    open var EngineSetup: VehicleEngineData
    open var DifferentialSetup: VehicleDifferential4WData
    open var AckermannAccuracy: Number
    open var TransmissionSetup: VehicleTransmissionData
    open var SteeringCurve: RuntimeFloatCurve

    companion object {
        fun Load(ResourceName: String): WheeledVehicleMovementComponent4W
        fun Find(Outer: UObject, ResourceName: String): WheeledVehicleMovementComponent4W
        fun GetDefaultObject(): WheeledVehicleMovementComponent4W
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): WheeledVehicleMovementComponent4W
        fun C(Other: UObject): WheeledVehicleMovementComponent4W
        fun C(Other: Any): WheeledVehicleMovementComponent4W
    }
}

external open class AnimNode_WheelHandler : AnimNode_SkeletalControlBase {
    override fun clone(): AnimNode_WheelHandler

    companion object {
        fun C(Other: UObject): AnimNode_WheelHandler
        fun C(Other: Any): AnimNode_WheelHandler
    }
}

external open class AnimGraphNode_WheelHandler : AnimGraphNode_SkeletalControlBase {
    constructor()
    constructor(Outer: UObject)
    open var UNode: AnimNode_WheelHandler

    companion object {
        fun Load(ResourceName: String): AnimGraphNode_WheelHandler
        fun Find(Outer: UObject, ResourceName: String): AnimGraphNode_WheelHandler
        fun GetDefaultObject(): AnimGraphNode_WheelHandler
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AnimGraphNode_WheelHandler
        fun C(Other: UObject): AnimGraphNode_WheelHandler
        fun C(Other: Any): AnimGraphNode_WheelHandler
    }
}

external open class AmbisonicsEncodingSettings : SoundfieldEncodingSettingsBase {
    constructor()
    constructor(Outer: UObject)
    open var AmbisonicsOrder: Number

    companion object {
        fun Load(ResourceName: String): AmbisonicsEncodingSettings
        fun Find(Outer: UObject, ResourceName: String): AmbisonicsEncodingSettings
        fun GetDefaultObject(): AmbisonicsEncodingSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AmbisonicsEncodingSettings
        fun C(Other: UObject): AmbisonicsEncodingSettings
        fun C(Other: Any): AmbisonicsEncodingSettings
    }
}

external open class V8Config : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bGenAltPropAccessorForAllProp: Boolean
    open var bGenGetStructRefArrayFunction: Boolean

    companion object {
        fun Load(ResourceName: String): V8Config
        fun Find(Outer: UObject, ResourceName: String): V8Config
        fun GetDefaultObject(): V8Config
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): V8Config
        fun C(Other: UObject): V8Config
        fun C(Other: Any): V8Config
    }
}

external open class DirectoryWatcher : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Added: Array<String>
    open var Modified: Array<String>
    open var Removed: Array<String>
    open var OnChanged: UnrealEngineMulticastDelegate<() -> Unit>
    open fun Watch(Directory: String)
    open fun Unwatch()
    open fun Contains(File: String): Boolean

    companion object {
        fun Load(ResourceName: String): DirectoryWatcher
        fun Find(Outer: UObject, ResourceName: String): DirectoryWatcher
        fun GetDefaultObject(): DirectoryWatcher
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DirectoryWatcher
        fun C(Other: UObject): DirectoryWatcher
        fun C(Other: Any): DirectoryWatcher
    }
}

external interface `T$63` {
    var OutFiles: Array<String>
}

external open class JavascriptContext : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Paths: Array<String>
    open fun WriteDTS(Target: String, bIncludingTooltip: Boolean): Boolean
    open fun WriteAliases(Target: String): Boolean
    open fun UnregisterConsoleCommand(Command: String)
    open fun SetContextId(Name: String)
    open fun RunScript(Script: String, bOutput: Boolean): String
    open fun RunFile(Filename: String)
    open fun RequestV8GarbageCollection()
    open fun RegisterConsoleCommand(Command: String, Help: String, UFunction: JavascriptFunction)
    open fun ReadScriptFile(Filename: String): String
    open fun IsDebugContext(): Boolean
    open fun GetScriptFileFullPath(Filename: String): String
    open fun FindPathFile(TargetRootPath: String, TargetFileName: String, OutFiles: Array<String> = definedExternally): `T$63`
    open fun Expose(Name: String, UObject: UObject)
    open fun DestroyInspector()
    open fun CreateInspector(Port: Number)

    companion object {
        fun Load(ResourceName: String): JavascriptContext
        fun Find(Outer: UObject, ResourceName: String): JavascriptContext
        fun GetDefaultObject(): JavascriptContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptContext
        fun C(Other: UObject): JavascriptContext
        fun C(Other: Any): JavascriptContext
    }
}

external open class JavascriptHeapStatistics {
    open var TotalHeapSize: Number
    open var TotalHeapSizeExecutable: Number
    open var TotalPhysicalSize: Number
    open var TotalAvailableSize: Number
    open var UsedHeapSize: Number
    open var HeapSizeLimit: Number
    open var MallocedMemory: Number
    open var bDoesZapGarbage: Boolean
    open fun clone(): JavascriptHeapStatistics

    companion object {
        fun C(Other: UObject): JavascriptHeapStatistics
        fun C(Other: Any): JavascriptHeapStatistics
    }
}

external interface `T$64` {
    var Statistics: JavascriptHeapStatistics
}

external open class JavascriptIsolate : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Init(bIsEditor: Boolean)
    open fun GetHeapStatistics(Statistics: JavascriptHeapStatistics = definedExternally): `T$64`
    open fun CreateContext(): JavascriptContext

    companion object {
        fun Load(ResourceName: String): JavascriptIsolate
        fun Find(Outer: UObject, ResourceName: String): JavascriptIsolate
        fun GetDefaultObject(): JavascriptIsolate
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptIsolate
        fun C(Other: UObject): JavascriptIsolate
        fun C(Other: Any): JavascriptIsolate
    }
}

external open class JavascriptAsset {
    open var Name: String
    open var Asset: SoftObjectPath
    open fun clone(): JavascriptAsset

    companion object {
        fun C(Other: UObject): JavascriptAsset
        fun C(Other: Any): JavascriptAsset
    }
}

external open class JavascriptClassAsset {
    open var Name: String
    open var Class: UnrealEngineClass
    open fun clone(): JavascriptClassAsset

    companion object {
        fun C(Other: UObject): JavascriptClassAsset
        fun C(Other: Any): JavascriptClassAsset
    }
}

external open class JavascriptComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var ScriptSourceFile: String
    open var bActiveWithinEditor: Boolean
    open var JavascriptContext: JavascriptContext
    open var JavascriptIsolate: JavascriptIsolate
    open var OnTick: UnrealEngineDelegate<(DeltaSeconds: Number) -> Unit>
    open var OnBeginPlay: UnrealEngineDelegate<() -> Unit>
    open var OnEndPlay: UnrealEngineDelegate<() -> Unit>
    open var OnInvoke: UnrealEngineDelegate<(Name: String) -> Unit>
    open var Assets: Array<JavascriptAsset>
    open var ClassAssets: Array<JavascriptClassAsset>
    open fun ResolveClass(Name: String): UnrealEngineClass
    open fun ResolveAsset(Name: String, bTryLoad: Boolean): UObject
    open fun Invoke(Name: String)
    open fun ForceGC()
    open fun Expose(ExposedAs: String, UObject: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptComponent
        fun Find(Outer: UObject, ResourceName: String): JavascriptComponent
        fun GetDefaultObject(): JavascriptComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptComponent
        fun C(Other: UObject): JavascriptComponent
        fun C(Other: Any): JavascriptComponent
    }
}

external open class JavascriptDelegate : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Fire()

    companion object {
        fun Load(ResourceName: String): JavascriptDelegate
        fun Find(Outer: UObject, ResourceName: String): JavascriptDelegate
        fun GetDefaultObject(): JavascriptDelegate
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptDelegate
        fun C(Other: UObject): JavascriptDelegate
        fun C(Other: Any): JavascriptDelegate
    }
}

external open class JavascriptGeneratedClass : BlueprintGeneratedClass {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptGeneratedClass
        fun Find(Outer: UObject, ResourceName: String): JavascriptGeneratedClass
        fun GetDefaultObject(): JavascriptGeneratedClass
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGeneratedClass
        fun C(Other: UObject): JavascriptGeneratedClass
        fun C(Other: Any): JavascriptGeneratedClass
    }
}

external open class JavascriptGeneratedClass_Native : BlueprintGeneratedClass {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptGeneratedClass_Native
        fun Find(Outer: UObject, ResourceName: String): JavascriptGeneratedClass_Native
        fun GetDefaultObject(): JavascriptGeneratedClass_Native
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGeneratedClass_Native
        fun C(Other: UObject): JavascriptGeneratedClass_Native
        fun C(Other: Any): JavascriptGeneratedClass_Native
    }
}

external open class JavascriptGeneratedFunction : UFunction {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptGeneratedFunction
        fun Find(Outer: UObject, ResourceName: String): JavascriptGeneratedFunction
        fun GetDefaultObject(): JavascriptGeneratedFunction
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGeneratedFunction
        fun C(Other: UObject): JavascriptGeneratedFunction
        fun C(Other: Any): JavascriptGeneratedFunction
    }
}

external open class JavascriptGlobalDelegates : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun UnbindAll()
    open fun Unbind(Key: String)
    open fun RedirectorFollowed(PackageName: String, Redirector: UObject)
    open fun PreLoadMap(MapName: String)
    open fun PreGarbageCollectDelegate()
    open fun PostLoadMapWithWorld(World: World)
    open fun PostGarbageCollect()
    open fun PostDemoPlay()
    open fun PostApplyLevelOffset(Level: Level, World: World, Offset: Vector, Flag: Boolean)
    open fun PackageCreatedForLoad(InPackage: Package)
    open fun OnWorldCleanup(World: World, bSessionEnded: Boolean, bCleanupResources: Boolean)
    open fun OnPreWorldInitialization_Friendly(World: World)
    open fun OnPreWorldFinishDestroy(World: World)
    open fun OnPreObjectPropertyChanged_Friendly(InObject: UObject, Property: Any, MemberProperty: Any)
    open fun OnPostWorldInitialization_Friendly(World: World)
    open fun OnPostWorldCreation(World: World)
    open fun OnPostDuplicate_Friendly(World: World, bDuplicateForPIE: Boolean)
    open fun OnObjectSaved(UObject: UObject)
    open fun OnObjectPropertyChanged_Friendly(InObject: UObject, Property: Any, MemberProperty: Any, ChangeType: Number)
    open fun OnObjectModified(UObject: UObject)
    open fun OnAssetLoaded(UObject: UObject)
    open fun OnActorLabelChanged(Actor: Actor)
    open fun LevelRemovedFromWorld(Level: Level, World: World)
    open fun LevelAddedToWorld(Level: Level, World: World)
    open fun Bind(Key: String)

    companion object {
        fun Load(ResourceName: String): JavascriptGlobalDelegates
        fun Find(Outer: UObject, ResourceName: String): JavascriptGlobalDelegates
        fun GetDefaultObject(): JavascriptGlobalDelegates
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGlobalDelegates
        fun C(Other: UObject): JavascriptGlobalDelegates
        fun C(Other: Any): JavascriptGlobalDelegates
    }
}

external open class JavascriptStaticCache : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Isolates: Array<JavascriptIsolate>
    open var bExecuteTestModePIE: Boolean

    companion object {
        fun Load(ResourceName: String): JavascriptStaticCache
        fun Find(Outer: UObject, ResourceName: String): JavascriptStaticCache
        fun GetDefaultObject(): JavascriptStaticCache
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptStaticCache
        fun C(Other: UObject): JavascriptStaticCache
        fun C(Other: Any): JavascriptStaticCache
    }
}

external open class JavascriptStreamableManager {
    open fun clone(): JavascriptStreamableManager
    open fun IsAsyncLoadComplete(Target: SoftObjectPath): Boolean
    open fun RequestAsyncLoad(TargetsToStream: Array<SoftObjectPath>, DelegateToCall: JavascriptFunction, Priority: Number)
    open fun SimpleAsyncLoad(Target: SoftObjectPath, Priority: Number)
    open fun Unload(Target: SoftObjectPath)

    companion object {
        fun C(Other: UObject): JavascriptStreamableManager
        fun C(Other: Any): JavascriptStreamableManager
        fun IsAsyncLoadComplete(Manager: JavascriptStreamableManager, Target: SoftObjectPath): Boolean
        fun RequestAsyncLoad(Manager: JavascriptStreamableManager, TargetsToStream: Array<SoftObjectPath>, DelegateToCall: JavascriptFunction, Priority: Number)
        fun SimpleAsyncLoad(Manager: JavascriptStreamableManager, Target: SoftObjectPath, Priority: Number)
        fun Unload(Manager: JavascriptStreamableManager, Target: SoftObjectPath)
        fun CreateStreamableManager(): JavascriptStreamableManager
    }
}

external interface `T$65` {
    var Addr: JavascriptInternetAddr
    var bValid: Boolean
}

external interface `T$66` {
    var Addr: JavascriptInternetAddr
}

external open class JavascriptInternetAddr {
    open fun clone(): JavascriptInternetAddr
    open fun SetIp(ResolvedAddress: String = definedExternally, bValid: Boolean = definedExternally): `T$65`
    open fun SetPort(Port: Number = definedExternally): `T$66`

    companion object {
        fun C(Other: UObject): JavascriptInternetAddr
        fun C(Other: Any): JavascriptInternetAddr
        fun SetIp(Addr: JavascriptInternetAddr = definedExternally, ResolvedAddress: String = definedExternally, bValid: Boolean = definedExternally): `T$65`
        fun SetPort(Addr: JavascriptInternetAddr = definedExternally, Port: Number = definedExternally): `T$66`
        fun CreateInternetAddr(): JavascriptInternetAddr
    }
}

external interface `T$67` {
    var Socket: JavascriptSocket
    var BytesSent: Number
    var `$`: Boolean
}

external open class JavascriptSocket {
    open fun clone(): JavascriptSocket
    open fun SendMemoryTo(ToAddr: JavascriptInternetAddr = definedExternally, NumBytes: Number = definedExternally, BytesSent: Number = definedExternally): `T$67`

    companion object {
        fun C(Other: UObject): JavascriptSocket
        fun C(Other: Any): JavascriptSocket
        fun SendMemoryTo(Socket: JavascriptSocket = definedExternally, ToAddr: JavascriptInternetAddr = definedExternally, NumBytes: Number = definedExternally, BytesSent: Number = definedExternally): `T$67`
        fun CreateSocket(SocketType: String, Description: String, bForceUDP: Boolean): JavascriptSocket
    }
}

external object EJavascriptStatDataType {
    var Invalid: String /* "Invalid" */
    var ST_None: String /* "ST_None" */
    var ST_int64: String /* "ST_int64" */
    var ST_double: String /* "ST_double" */
    var ST_FName: String /* "ST_FName" */
    var ST_Ptr: String /* "ST_Ptr" */
    var EJavascriptStatDataType_MAX: String /* "EJavascriptStatDataType_MAX" */
}

external object EJavascriptStatOperation {
    var Invalid: String /* "Invalid" */
    var SetLongName: String /* "SetLongName" */
    var AdvanceFrameEventGameThread: String /* "AdvanceFrameEventGameThread" */
    var AdvanceFrameEventRenderThread: String /* "AdvanceFrameEventRenderThread" */
    var CycleScopeStart: String /* "CycleScopeStart" */
    var CycleScopeEnd: String /* "CycleScopeEnd" */
    var SpecialMessageMarker: String /* "SpecialMessageMarker" */
    var Set: String /* "Set" */
    var Clear: String /* "Clear" */
    var Add: String /* "Add" */
    var Subtract: String /* "Subtract" */
    var ChildrenStart: String /* "ChildrenStart" */
    var ChildrenEnd: String /* "ChildrenEnd" */
    var Leaf: String /* "Leaf" */
    var MaxVal: String /* "MaxVal" */
    var Memory: String /* "Memory" */
    var EJavascriptStatOperation_MAX: String /* "EJavascriptStatOperation_MAX" */
}

external open class JavascriptStat {
    open fun clone(): JavascriptStat
    open fun AddMessage(InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */)
    open fun AddMessage_float(InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)
    open fun AddMessage_int(InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)

    companion object {
        fun C(Other: UObject): JavascriptStat
        fun C(Other: Any): JavascriptStat
        fun AddMessage(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */)
        fun AddMessage_float(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)
        fun AddMessage_int(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)
        fun NewStat(InStatName: String, InStatDesc: String, InGroupName: String, InGroupCategory: String, InGroupDesc: String, bDefaultEnable: Boolean, bShouldClearEveryFrame: Boolean, InStatType: String /* "Invalid" | "ST_None" | "ST_int64" | "ST_double" | "ST_FName" | "ST_Ptr" | "EJavascriptStatDataType_MAX" */, bCycleStat: Boolean, bSortByName: Boolean): JavascriptStat
    }
}

external object ELogVerbosity_JS {
    var NoLogging: String /* "NoLogging" */
    var Fatal: String /* "Fatal" */
    var Error: String /* "Error" */
    var Warning: String /* "Warning" */
    var Display: String /* "Display" */
    var Log: String /* "Log" */
    var Verbose: String /* "Verbose" */
    var VeryVerbose: String /* "VeryVerbose" */
    var ELogVerbosity_MAX: String /* "ELogVerbosity_MAX" */
}

external open class JavascriptLogCategory {
    open fun clone(): JavascriptLogCategory
    open fun GetCategoryName(): String
    open fun IsSuppressed(Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */): Boolean
    open fun Log(Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */, Message: String, Filename: String, LineNumber: Number)

    companion object {
        fun C(Other: UObject): JavascriptLogCategory
        fun C(Other: Any): JavascriptLogCategory
        fun GetCategoryName(Category: JavascriptLogCategory): String
        fun IsSuppressed(Category: JavascriptLogCategory, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */): Boolean
        fun Log(Category: JavascriptLogCategory, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */, Message: String, Filename: String, LineNumber: Number)
        fun CreateLogCategory(CategoryName: String, InDefaultVerbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */): JavascriptLogCategory
    }
}

external open class JavscriptProperty {
    open var Type: String
    open var Name: String
    open fun clone(): JavscriptProperty

    companion object {
        fun C(Other: UObject): JavscriptProperty
        fun C(Other: Any): JavscriptProperty
    }
}

external open class JavascriptProfileNode {
    open fun clone(): JavascriptProfileNode
    open fun GetBailoutReason(): String
    open fun GetCallUid(): Number
    open fun GetChild(index: Number): JavascriptProfileNode
    open fun GetChildrenCount(): Number
    open fun GetColumnNumber(): Number
    open fun GetDeoptInfo_Reason(index: Number): String
    open fun GetDeoptInfo_Stack(index: Number): String
    open fun GetDeoptInfosCount(index: Number): Number
    open fun GetFunctionName(): String
    open fun GetHitCount(): Number
    open fun GetHitLineCount(): Number
    open fun GetLineNumber(): Number
    open fun GetNodeId(): Number
    open fun GetScriptId(): Number
    open fun GetScriptResourceName(): String

    companion object {
        fun C(Other: UObject): JavascriptProfileNode
        fun C(Other: Any): JavascriptProfileNode
        fun GetBailoutReason(UNode: JavascriptProfileNode): String
        fun GetCallUid(UNode: JavascriptProfileNode): Number
        fun GetChild(UNode: JavascriptProfileNode, index: Number): JavascriptProfileNode
        fun GetChildrenCount(UNode: JavascriptProfileNode): Number
        fun GetColumnNumber(UNode: JavascriptProfileNode): Number
        fun GetDeoptInfo_Reason(UNode: JavascriptProfileNode, index: Number): String
        fun GetDeoptInfo_Stack(UNode: JavascriptProfileNode, index: Number): String
        fun GetDeoptInfosCount(UNode: JavascriptProfileNode, index: Number): Number
        fun GetFunctionName(UNode: JavascriptProfileNode): String
        fun GetHitCount(UNode: JavascriptProfileNode): Number
        fun GetHitLineCount(UNode: JavascriptProfileNode): Number
        fun GetLineNumber(UNode: JavascriptProfileNode): Number
        fun GetNodeId(UNode: JavascriptProfileNode): Number
        fun GetScriptId(UNode: JavascriptProfileNode): Number
        fun GetScriptResourceName(UNode: JavascriptProfileNode): String
    }
}

external interface `T$68` {
    var IntersectionPoint: Vector
    var `$`: Boolean
}

external interface `T$69` {
    var OutIp: String
    var `$`: Boolean
}

external interface `T$70` {
    var OutItems: Array<DirectoryItem>
    var `$`: Boolean
}

external interface `T$71` {
    var C: Controller
}

external interface `T$72` {
    var Results: Array<UObject>
}

external interface `T$73` {
    var Results: Array<UObject>
}

external interface `T$74` {
    var Results: Array<UnrealEngineClass>
}

external interface `T$75` {
    var OutActors: Array<Actor>
}

external interface `T$76` {
    var OutActors: Array<Actor>
}

external open class JavascriptLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptLibrary
        fun GetDefaultObject(): JavascriptLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptLibrary
        fun WriteStringToFile(UObject: UObject, Filename: String, Data: String, EncodingOptions: String /* "AutoDetect" | "ForceAnsi" | "ForceUnicode" | "ForceUTF8" | "ForceUTF8WithoutBOM" | "EJavascriptEncodingOptions_MAX" */): Boolean
        fun WriteFile(UObject: UObject, Filename: String): Boolean
        fun V8_SetIdleTaskBudget(BudgetInSeconds: Number)
        fun V8_SetFlagsFromString(V8Flags: String)
        fun UnregisterComponent(ActorComponent: ActorComponent)
        fun Unload(Manager: JavascriptStreamableManager, Target: SoftObjectPath)
        fun TryLoadByPath(Path: String): UObject
        fun SimpleAsyncLoad(Manager: JavascriptStreamableManager, Target: SoftObjectPath, Priority: Number)
        fun SetRootComponent(Actor: Actor, Component: SceneComponent)
        fun SetPort(Addr: JavascriptInternetAddr = definedExternally, Port: Number = definedExternally): `T$66`
        fun SetObjectFlags(Obj: UObject, Flags: Number)
        fun SetMobility(SceneComponent: SceneComponent, Type: String /* "Static" | "Stationary" | "Movable" | "EComponentMobility_MAX" */)
        fun SetMobile(SceneComponent: SceneComponent)
        fun SetIp(Addr: JavascriptInternetAddr = definedExternally, ResolvedAddress: String = definedExternally, bValid: Boolean = definedExternally): `T$65`
        fun SetClientTravel(Engine: Engine, InWorld: World, NextURL: String, InTravelType: String /* "TRAVEL_Absolute" | "TRAVEL_Partial" | "TRAVEL_Relative" | "TRAVEL_MAX" */)
        fun SetActorFlags(Actor: Actor, Flags: Number)
        fun SendMemoryTo(Socket: JavascriptSocket = definedExternally, ToAddr: JavascriptInternetAddr = definedExternally, NumBytes: Number = definedExternally, BytesSent: Number = definedExternally): `T$67`
        fun SegmentIntersection2D(SegmentStartA: Vector, SegmentEndA: Vector, SegmentStartB: Vector, SegmentEndB: Vector, IntersectionPoint: Vector = definedExternally): `T$68`
        fun ResolveIp(HostName: String, OutIp: String = definedExternally): `T$69`
        fun ReregisterComponent(ActorComponent: ActorComponent)
        fun ReregisterAllComponents(Actor: Actor)
        fun RequestAsyncLoad(Manager: JavascriptStreamableManager, TargetsToStream: Array<SoftObjectPath>, DelegateToCall: JavascriptFunction, Priority: Number)
        fun RegisterComponent(ActorComponent: ActorComponent)
        fun ReadStringFromFileAsync(UObject: UObject, Filename: String, UFunction: JavascriptFunction): ReadStringFromFileHandle
        fun ReadStringFromFile(UObject: UObject, Filename: String): String
        fun ReadFile(UObject: UObject, Filename: String): Boolean
        fun ReadDirectory(UObject: UObject, Directory: String, OutItems: Array<DirectoryItem> = definedExternally): `T$70`
        fun NewStat(InStatName: String, InStatDesc: String, InGroupName: String, InGroupCategory: String, InGroupDesc: String, bDefaultEnable: Boolean, bShouldClearEveryFrame: Boolean, InStatType: String /* "Invalid" | "ST_None" | "ST_int64" | "ST_double" | "ST_FName" | "ST_Ptr" | "EJavascriptStatDataType_MAX" */, bCycleStat: Boolean, bSortByName: Boolean): JavascriptStat
        fun MarkRenderStateDirty(Component: ActorComponent)
        fun MakeDirectory(Path: String, Tree: Boolean): Boolean
        fun Log(Category: JavascriptLogCategory, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */, Message: String, Filename: String, LineNumber: Number)
        fun LoadPackage(InOuter: Package, PackageName: String): Package
        fun IsSuppressed(Category: JavascriptLogCategory, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */): Boolean
        fun IsRegistered(ActorComponent: ActorComponent): Boolean
        fun IsPlayInPreview(World: World): Boolean
        fun IsPlayInEditor(World: World): Boolean
        fun IsPendingKill(InActor: Actor): Boolean
        fun IsGeneratedByBlueprint(InClass: UnrealEngineClass): Boolean
        fun IsGameWorld(World: World): Boolean
        fun IsAsyncLoadComplete(Manager: JavascriptStreamableManager, Target: SoftObjectPath): Boolean
        fun HasUndo(Engine: Engine): Boolean
        fun HasAnyPackageFlags(Package: Package, Flags: Number): Boolean
        fun HasAnyFlags(UObject: UObject, Flags: Number): Boolean
        fun HandleSeamlessTravelPlayer(GameMode: GameModeBase, C: Controller = definedExternally): `T$71`
        fun GetWorldBounds(InWorld: World): Box
        fun GetSuperClasses(InClass: UnrealEngineClass): Array<UnrealEngineClass>
        fun GetStructProperties(StructName: String, bIncludeSuper: Boolean): Array<JavscriptProperty>
        fun GetScriptResourceName(UNode: JavascriptProfileNode): String
        fun GetScriptId(UNode: JavascriptProfileNode): Number
        fun GetPlatformName(): String
        fun GetOutermost(UObject: UObject): UObject
        fun GetOuter(UObject: UObject): UObject
        fun GetObjectsWithOuter(Outer: UObject, Results: Array<UObject> = definedExternally, bIncludeNestedObjects: Boolean = definedExternally, ExclusionFlags: Number = definedExternally, ExclusionInternalFlags: Number = definedExternally): `T$72`
        fun GetObjectsOfClass(ClassToLookFor: UnrealEngineClass, Results: Array<UObject> = definedExternally, bIncludeDerivedClasses: Boolean = definedExternally, ExcludeFlags: Number = definedExternally, ExclusionInternalFlags: Number = definedExternally): `T$73`
        fun GetNodeId(UNode: JavascriptProfileNode): Number
        fun GetName(UObject: UObject): String
        fun GetModel(World: World): Model
        fun GetMetaData(Field: Field, Key: String): String
        fun GetLineNumber(UNode: JavascriptProfileNode): Number
        fun GetLevels(World: World): Array<Level>
        fun GetLevel(Actor: Actor): Level
        fun GetLastRenderTime(Actor: Actor): Number
        fun GetHitLineCount(UNode: JavascriptProfileNode): Number
        fun GetHitCount(UNode: JavascriptProfileNode): Number
        fun GetFunctionParmsSize(UFunction: UFunction): Number
        fun GetFunctionName(UNode: JavascriptProfileNode): String
        fun GetFileSize(UObject: UObject, Filename: String): Number
        fun GetFields(UObject: UObject, bIncludeSuper: Boolean): Array<Field>
        fun GetDynamicBinding(Outer: UnrealEngineClass, BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding
        fun GetDir(UObject: UObject, WhichDir: String): String
        fun GetDerivedClasses(ClassToLookFor: UnrealEngineClass, Results: Array<UnrealEngineClass> = definedExternally, bRecursive: Boolean = definedExternally): `T$74`
        fun GetDeoptInfosCount(UNode: JavascriptProfileNode, index: Number): Number
        fun GetDeoptInfo_Stack(UNode: JavascriptProfileNode, index: Number): String
        fun GetDeoptInfo_Reason(UNode: JavascriptProfileNode, index: Number): String
        fun GetCurrentProcessId(): Number
        fun GetComponentsByClass(Actor: Actor, ComponentClass: UnrealEngineClass): Array<ActorComponent>
        fun GetColumnNumber(UNode: JavascriptProfileNode): Number
        fun GetClassPathName(Class: UnrealEngineClass): String
        fun GetChildrenCount(UNode: JavascriptProfileNode): Number
        fun GetChild(UNode: JavascriptProfileNode, index: Number): JavascriptProfileNode
        fun GetCategoryName(Category: JavascriptLogCategory): String
        fun GetCallUid(UNode: JavascriptProfileNode): Number
        fun GetBlueprintGeneratedClassFromPath(Path: String): UnrealEngineClass
        fun GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass
        fun GetBailoutReason(UNode: JavascriptProfileNode): String
        fun GetArchetypePathName(UObject: UObject): String
        fun GetAllActorsOfClassAndTagsInCurrentLevel(WorldContextObject: UObject, ActorClass: UnrealEngineClass, Tags_Accept: Array<String>, Tags_Deny: Array<String>, OutActors: Array<Actor> = definedExternally): `T$75`
        fun GetAllActorsOfClassAndTags(WorldContextObject: UObject, ActorClass: UnrealEngineClass, Tags_Accept: Array<String>, Tags_Deny: Array<String>, OutActors: Array<Actor> = definedExternally): `T$76`
        fun GenerateNavigation(InWorld: World, NavData: RecastNavMesh)
        fun FindPackage(InOuter: UObject, PackageName: String): Package
        fun FindObjectWithOuter(Outer: UObject, ClassToLookFor: UnrealEngineClass, NameToLookFor: String): UObject
        fun FileExists(Filename: String): Boolean
        fun Duplicate(UObject: UObject, Outer: UObject, Name: String): UObject
        fun DirectoryExists(InDirectory: String): Boolean
        fun DeleteFile(Filename: String, ReadOnly: Boolean): Boolean
        fun DeleteDirectory(Path: String, RequireExists: Boolean, Tree: Boolean): Boolean
        fun CreateStreamableManager(): JavascriptStreamableManager
        fun CreateSocket(SocketType: String, Description: String, bForceUDP: Boolean): JavascriptSocket
        fun CreatePackage(Outer: UObject, PackageName: String): Package
        fun CreateLogCategory(CategoryName: String, InDefaultVerbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */): JavascriptLogCategory
        fun CreateInternetAddr(): JavascriptInternetAddr
        fun CreateEnum(Outer: UObject, Name: String, DisplayNames: Array<String>, Flags: Array<String>): Enum
        fun ConvertRelativePathToFull(UObject: UObject, RelativePath: String): String
        fun ClipboardPaste(): String
        fun ClipboardCopy(string: String)
        fun CallJS(UFunction: JavascriptFunction, CustomStruct: JavascriptStubStruct)
        fun AddMessage_int(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)
        fun AddMessage_float(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */, Value: Number, bIsCycle: Boolean)
        fun AddMessage(Stat: JavascriptStat, InStatOperation: String /* "Invalid" | "SetLongName" | "AdvanceFrameEventGameThread" | "AdvanceFrameEventRenderThread" | "CycleScopeStart" | "CycleScopeEnd" | "SpecialMessageMarker" | "Set" | "Clear" | "Add" | "Subtract" | "ChildrenStart" | "ChildrenEnd" | "Leaf" | "MaxVal" | "Memory" | "EJavascriptStatOperation_MAX" */)
        fun AddDynamicBinding(Outer: UnrealEngineClass, BindingObject: DynamicBlueprintBinding)
        fun Actor_GetWorld(Actor: Actor): World
        fun C(Other: UObject): JavascriptLibrary
        fun C(Other: Any): JavascriptLibrary
    }
}

external open class JavascriptMemoryObject : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptMemoryObject
        fun Find(Outer: UObject, ResourceName: String): JavascriptMemoryObject
        fun GetDefaultObject(): JavascriptMemoryObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptMemoryObject
        fun C(Other: UObject): JavascriptMemoryObject
        fun C(Other: Any): JavascriptMemoryObject
    }
}

external open class JavascriptRef {
    open fun clone(): JavascriptRef

    companion object {
        fun C(Other: UObject): JavascriptRef
        fun C(Other: Any): JavascriptRef
    }
}

external open class JavascriptObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Ref: JavascriptRef
    open var Func: JavascriptFunction

    companion object {
        fun Load(ResourceName: String): JavascriptObject
        fun Find(Outer: UObject, ResourceName: String): JavascriptObject
        fun GetDefaultObject(): JavascriptObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptObject
        fun C(Other: UObject): JavascriptObject
        fun C(Other: Any): JavascriptObject
    }
}

external open class JavascriptOutputDevice : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun OnMessage(Message: String, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */, Category: String)
    open fun Kill()

    companion object {
        fun Load(ResourceName: String): JavascriptOutputDevice
        fun Find(Outer: UObject, ResourceName: String): JavascriptOutputDevice
        fun GetDefaultObject(): JavascriptOutputDevice
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptOutputDevice
        fun Log(Category: String, Verbosity: String /* "NoLogging" | "Fatal" | "Error" | "Warning" | "Display" | "Log" | "Verbose" | "VeryVerbose" | "ELogVerbosity_MAX" */, Filename: String, LineNumber: Number, Message: String)
        fun C(Other: UObject): JavascriptOutputDevice
        fun C(Other: Any): JavascriptOutputDevice
    }
}

external interface `T$77` {
    var OutWritten: String
    var `$`: Boolean
}

external interface `T$78` {
    var Array: Array<Number>
    var `$`: Boolean
}

external interface `T$79` {
    var Error: String
}

external interface `T$80` {
    var ReturnCode: Number
    var `$`: Boolean
}

external open class JavascriptProcess : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun WriteToPipe(Message: String, OutWritten: String = definedExternally): `T$77`
    open fun Wait()
    open fun Terminate(KillTree: Boolean)
    open fun ReadFromPipe(): String
    open fun ReadArrayFromPipe(Array: Array<Number> = definedExternally): `T$78`
    open fun IsRunning(): Boolean
    open fun GetReturnCode(ReturnCode: Number = definedExternally): `T$80`
    open fun Close()

    companion object {
        fun Load(ResourceName: String): JavascriptProcess
        fun Find(Outer: UObject, ResourceName: String): JavascriptProcess
        fun GetDefaultObject(): JavascriptProcess
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptProcess
        fun Sleep(Seconds: Number)
        fun SimulateKeypress(KeyEvent: Number)
        fun SetEnvironmentVar(VarName: String, VarValue: String)
        fun Open_PID(ProcessId: Number): JavascriptProcess
        fun Open(ProcName: String): JavascriptProcess
        fun LaunchURL(URL: String, Parms: String, Error: String = definedExternally): `T$79`
        fun IsApplicationRunning_PID(ProcessId: Number): Boolean
        fun IsApplicationRunning(ProcName: String): Boolean
        fun GetString(Key: String, bFlag: Boolean): String
        fun GetEnvironmentVar(VarName: String): String
        fun GetCurrentProcessId(): Number
        fun GetApplicationName(ProcessId: Number): String
        fun CreateWidget(URL: String, Parms: String, bLaunchDetached: Boolean, bLaunchHidden: Boolean, bLaunchReallyHidden: Boolean, PriorityModifier: Number, OptionalWorkingDirectory: String, bUsePipe: Boolean): JavascriptProcess
        fun CanLaunchURL(URL: String): Boolean
        fun C(Other: UObject): JavascriptProcess
        fun C(Other: Any): JavascriptProcess
    }
}

external open class JavascriptCpuProfiler {
    open fun clone(): JavascriptCpuProfiler

    companion object {
        fun C(Other: UObject): JavascriptCpuProfiler
        fun C(Other: Any): JavascriptCpuProfiler
    }
}

external open class JavascriptProfile : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun GetTopDownRoot(): JavascriptProfileNode
    open fun GetSampleTimestamp(index: Number): Number
    open fun GetSamplesCount(): Number
    open fun GetSample(index: Number): JavascriptProfileNode

    companion object {
        fun Load(ResourceName: String): JavascriptProfile
        fun Find(Outer: UObject, ResourceName: String): JavascriptProfile
        fun GetDefaultObject(): JavascriptProfile
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptProfile
        fun Stop(Profiler: JavascriptCpuProfiler, Title: String): JavascriptProfile
        fun Start(Title: String, bRecordSamples: Boolean): JavascriptCpuProfiler
        fun SetSamplingInterval(Profiler: JavascriptCpuProfiler, us: Number)
        fun SetIdle(Profiler: JavascriptCpuProfiler, is_idle: Boolean)
        fun C(Other: UObject): JavascriptProfile
        fun C(Other: Any): JavascriptProfile
    }
}

external open class JavascriptSemaphore : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Unlock()
    open fun TryLock(NanosecondsToWait: Number): Boolean
    open fun Lock()
    open fun Dispose()

    companion object {
        fun Load(ResourceName: String): JavascriptSemaphore
        fun Find(Outer: UObject, ResourceName: String): JavascriptSemaphore
        fun GetDefaultObject(): JavascriptSemaphore
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptSemaphore
        fun CreateWidget(Name: String, bCreate: Boolean, MaxLocks: Number): JavascriptSemaphore
        fun C(Other: UObject): JavascriptSemaphore
        fun C(Other: Any): JavascriptSemaphore
    }
}

external open class JavascriptSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var V8Flags: String

    companion object {
        fun Load(ResourceName: String): JavascriptSettings
        fun Find(Outer: UObject, ResourceName: String): JavascriptSettings
        fun GetDefaultObject(): JavascriptSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptSettings
        fun C(Other: UObject): JavascriptSettings
        fun C(Other: Any): JavascriptSettings
    }
}

external open class JavascriptSharedMemoryRegion : JavascriptMemoryObject {
    constructor()
    constructor(Outer: UObject)
    open fun Dispose()

    companion object {
        fun Load(ResourceName: String): JavascriptSharedMemoryRegion
        fun Find(Outer: UObject, ResourceName: String): JavascriptSharedMemoryRegion
        fun GetDefaultObject(): JavascriptSharedMemoryRegion
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptSharedMemoryRegion
        fun Create(Name: String, bCreate: Boolean, bRead: Boolean, bWrite: Boolean, Size: Number): JavascriptSharedMemoryRegion
        fun C(Other: UObject): JavascriptSharedMemoryRegion
        fun C(Other: Any): JavascriptSharedMemoryRegion
    }
}

external interface `T$81` {
    var Test: JavascriptAutomatedTestInstance
}

external open class JavascriptAutomatedTestInstance {
    open fun clone(): JavascriptAutomatedTestInstance
    open fun AddAnalyticsItem(InAnalyticsItem: String)
    open fun AddError(InError: String)
    open fun AddLogItem(InLogItem: String)
    open fun AddWarning(InWarning: String)
    open fun ClearExecutionInfo()
    open fun Destroy(): `T$81`
    open fun SetContinue(bInContinue: Boolean)

    companion object {
        fun C(Other: UObject): JavascriptAutomatedTestInstance
        fun C(Other: Any): JavascriptAutomatedTestInstance
        fun AddAnalyticsItem(Test: JavascriptAutomatedTestInstance, InAnalyticsItem: String)
        fun AddError(Test: JavascriptAutomatedTestInstance, InError: String)
        fun AddLogItem(Test: JavascriptAutomatedTestInstance, InLogItem: String)
        fun AddWarning(Test: JavascriptAutomatedTestInstance, InWarning: String)
        fun ClearExecutionInfo(Test: JavascriptAutomatedTestInstance)
        fun Destroy(Test: JavascriptAutomatedTestInstance = definedExternally): `T$81`
        fun SetContinue(Test: JavascriptAutomatedTestInstance, bInContinue: Boolean)
    }
}

external open class JavascriptAutomatedTest {
    open var Name: String
    open var bComplexTask: Boolean
    open var TestFlags: Number
    open var RequiredDeviceNum: Number
    open var TestFunctionNames: Array<String>
    open var UFunction: JavascriptFunction
    open fun clone(): JavascriptAutomatedTest
    open fun Create(): JavascriptAutomatedTestInstance

    companion object {
        fun C(Other: UObject): JavascriptAutomatedTest
        fun C(Other: Any): JavascriptAutomatedTest
        fun Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance
    }
}

external open class JavascriptTestLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptTestLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptTestLibrary
        fun GetDefaultObject(): JavascriptTestLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptTestLibrary
        fun SetContinue(Test: JavascriptAutomatedTestInstance, bInContinue: Boolean)
        fun PushFrameCounter()
        fun PopFrameCounter()
        fun NewWorld(): World
        fun InitializeActorsForPlay(World: World, URL: URL)
        fun DestroyWorld(World: World)
        fun DestroyUObject(UObject: UObject)
        fun Destroy(Test: JavascriptAutomatedTestInstance = definedExternally): `T$81`
        fun Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance
        fun ClearExecutionInfo(Test: JavascriptAutomatedTestInstance)
        fun BeginPlay(World: World)
        fun AddWarning(Test: JavascriptAutomatedTestInstance, InWarning: String)
        fun AddLogItem(Test: JavascriptAutomatedTestInstance, InLogItem: String)
        fun AddError(Test: JavascriptAutomatedTestInstance, InError: String)
        fun AddAnalyticsItem(Test: JavascriptAutomatedTestInstance, InAnalyticsItem: String)
        fun C(Other: UObject): JavascriptTestLibrary
        fun C(Other: Any): JavascriptTestLibrary
    }
}

external open class JavascriptComboButton : ContentWidget {
    constructor()
    constructor(Outer: UObject)
    open var ComboButtonStyle: ComboButtonStyle
    open var ButtonStyle: ButtonStyle
    open var OnGetMenuContent: UnrealEngineDelegate<() -> JavascriptSlateWidget>
    open var OnMenuOpenChanged: UnrealEngineDelegate<(Value: Boolean) -> Unit>
    open var OnComboBoxOpened: UnrealEngineDelegate<() -> Unit>
    open var bIsFocusable: Boolean
    open var bHasDownArrow: Boolean
    open var ForegroundColor: SlateColor
    open var ButtonColorAndOpacity: SlateColor
    open var ContentPadding: Margin
    open var MenuPlacement: String /* "MenuPlacement_BelowAnchor" | "MenuPlacement_CenteredBelowAnchor" | "MenuPlacement_BelowRightAnchor" | "MenuPlacement_ComboBox" | "MenuPlacement_ComboBoxRight" | "MenuPlacement_MenuRight" | "MenuPlacement_AboveAnchor" | "MenuPlacement_CenteredAboveAnchor" | "MenuPlacement_AboveRightAnchor" | "MenuPlacement_MenuLeft" | "MenuPlacement_Center" | "MenuPlacement_RightLeftCenter" | "MenuPlacement_MatchBottomLeft" | "MenuPlacement_MAX" */
    open var HAlign: String /* "HAlign_Fill" | "HAlign_Left" | "HAlign_Center" | "HAlign_Right" | "HAlign_MAX" */
    open var VAlign: String /* "VAlign_Fill" | "VAlign_Top" | "VAlign_Center" | "VAlign_Bottom" | "VAlign_MAX" */
    open fun SetIsOpen(InIsOpen: Boolean, bFocusMenu: Boolean)

    companion object {
        fun Load(ResourceName: String): JavascriptComboButton
        fun Find(Outer: UObject, ResourceName: String): JavascriptComboButton
        fun GetDefaultObject(): JavascriptComboButton
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptComboButton
        fun C(Other: UObject): JavascriptComboButton
        fun C(Other: Any): JavascriptComboButton
    }
}

external open class JavascriptSlateIcon {
    open var StyleSetName: String
    open var StyleName: String
    open var SmallStyleName: String
    open fun clone(): JavascriptSlateIcon

    companion object {
        fun C(Other: UObject): JavascriptSlateIcon
        fun C(Other: Any): JavascriptSlateIcon
    }
}

external open class JavascriptComboButtonContext : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnGetLabel: UnrealEngineDelegate<() -> String>
    open var OnGetTooltip: UnrealEngineDelegate<() -> String>
    open var OnGetIcon: UnrealEngineDelegate<() -> JavascriptSlateIcon>
    open var OnGetWidget: UnrealEngineDelegate<(EditingObject: UObject) -> JavascriptSlateWidget>
    open var OnCanExecute: UnrealEngineDelegate<() -> Boolean>

    companion object {
        fun Load(ResourceName: String): JavascriptComboButtonContext
        fun Find(Outer: UObject, ResourceName: String): JavascriptComboButtonContext
        fun GetDefaultObject(): JavascriptComboButtonContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptComboButtonContext
        fun C(Other: UObject): JavascriptComboButtonContext
        fun C(Other: Any): JavascriptComboButtonContext
    }
}

external open class JavascriptGameViewport : ContentWidget {
    constructor()
    constructor(Outer: UObject)
    open var BackgroundColor: LinearColor
    open fun Spawn(ActorClass: UnrealEngineClass): Actor
    open fun SetViewRotation(Rotation: Rotator)
    open fun SetViewLocation(Location: Vector)
    open fun GetViewRotation(): Rotator
    open fun GetViewportWorld(): World
    open fun GetViewLocation(): Vector

    companion object {
        fun Load(ResourceName: String): JavascriptGameViewport
        fun Find(Outer: UObject, ResourceName: String): JavascriptGameViewport
        fun GetDefaultObject(): JavascriptGameViewport
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGameViewport
        fun C(Other: UObject): JavascriptGameViewport
        fun C(Other: Any): JavascriptGameViewport
    }
}

external open class JavascriptIntSpinBox : Widget {
    constructor()
    constructor(Outer: UObject)
    open var Value: Number
    open var ValueDelegate: UnrealEngineDelegate<() -> Number>
    open var WidgetStyle: SpinBoxStyle
    open var Style: SlateWidgetStyleAsset
    open var Delta: Number
    open var SliderExponent: Number
    open var Font: SlateFontInfo
    open var Justification: String /* "Left" | "Center" | "Right" | "ETextJustify_MAX" */
    open var MinDesiredWidth: Number
    open var ClearKeyboardFocusOnCommit: Boolean
    open var SelectAllTextOnCommit: Boolean
    open var ForegroundColor: SlateColor
    open var OnValueChanged: UnrealEngineMulticastDelegate<(InValue: Number) -> Unit>
    open var OnValueCommitted: UnrealEngineMulticastDelegate<(InValue: Number, CommitMethod: String /* "Default" | "OnEnter" | "OnUserMovedFocus" | "OnCleared" | "ETextCommit_MAX" */) -> Unit>
    open var OnBeginSliderMovement: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnEndSliderMovement: UnrealEngineMulticastDelegate<(InValue: Number) -> Unit>
    open var bOverride_MinValue: Boolean
    open var bOverride_MaxValue: Boolean
    open var bOverride_MinSliderValue: Boolean
    open var bOverride_MaxSliderValue: Boolean
    open var MinValue: Number
    open var MaxValue: Number
    open var MinSliderValue: Number
    open var MaxSliderValue: Number
    open fun SetValue(NewValue: Number)
    open fun SetMinValue(NewValue: Number)
    open fun SetMinSliderValue(NewValue: Number)
    open fun SetMaxValue(NewValue: Number)
    open fun SetMaxSliderValue(NewValue: Number)
    open fun SetForegroundColor(InForegroundColor: SlateColor)
    open fun GetValue(): Number
    open fun GetMinValue(): Number
    open fun GetMinSliderValue(): Number
    open fun GetMaxValue(): Number
    open fun GetMaxSliderValue(): Number
    open fun ClearMinValue()
    open fun ClearMinSliderValue()
    open fun ClearMaxValue()
    open fun ClearMaxSliderValue()

    companion object {
        fun Load(ResourceName: String): JavascriptIntSpinBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptIntSpinBox
        fun GetDefaultObject(): JavascriptIntSpinBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptIntSpinBox
        fun C(Other: UObject): JavascriptIntSpinBox
        fun C(Other: Any): JavascriptIntSpinBox
    }
}

external open class TableColumnHeaderStyle : SlateWidgetStyle {
    open var SortPrimaryAscendingImage: SlateBrush
    open var SortPrimaryDescendingImage: SlateBrush
    open var SortSecondaryAscendingImage: SlateBrush
    open var SortSecondaryDescendingImage: SlateBrush
    open var NormalBrush: SlateBrush
    open var HoveredBrush: SlateBrush
    open var MenuDropdownImage: SlateBrush
    open var MenuDropdownNormalBorderBrush: SlateBrush
    open var MenuDropdownHoveredBorderBrush: SlateBrush
    override fun clone(): TableColumnHeaderStyle

    companion object {
        fun C(Other: UObject): TableColumnHeaderStyle
        fun C(Other: Any): TableColumnHeaderStyle
    }
}

external open class SplitterStyle : SlateWidgetStyle {
    open var HandleNormalBrush: SlateBrush
    open var HandleHighlightBrush: SlateBrush
    override fun clone(): SplitterStyle

    companion object {
        fun C(Other: UObject): SplitterStyle
        fun C(Other: Any): SplitterStyle
    }
}

external open class HeaderRowStyle : SlateWidgetStyle {
    open var ColumnStyle: TableColumnHeaderStyle
    open var LastColumnStyle: TableColumnHeaderStyle
    open var ColumnSplitterStyle: SplitterStyle
    open var BackgroundBrush: SlateBrush
    open var ForegroundColor: SlateColor
    override fun clone(): HeaderRowStyle

    companion object {
        fun C(Other: UObject): HeaderRowStyle
        fun C(Other: Any): HeaderRowStyle
    }
}

external open class JavascriptColumn {
    open var ID: String
    open var Width: Number
    open var Widget: Widget
    open fun clone(): JavascriptColumn

    companion object {
        fun C(Other: UObject): JavascriptColumn
        fun C(Other: Any): JavascriptColumn
    }
}

external interface `T$82` {
    var OutItems: Array<UObject>
    var `$`: Boolean
}

external interface `T$83` {
    var OutItems: Array<UObject>
}

external open class JavascriptTreeView : ListViewBase {
    constructor()
    constructor(Outer: UObject)
    open var OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, ID: String, Instance: JavascriptTreeView) -> Widget>
    open var OnExpansionChanged: UnrealEngineDelegate<(Item: UObject, bExpanded: Boolean, Instance: JavascriptTreeView) -> Unit>
    open var OnContextMenuOpening: UnrealEngineDelegate<(Instance: JavascriptTreeView) -> Widget>
    open var OnGetChildren: UnrealEngineDelegate<(Item: UObject, Instance: JavascriptTreeView) -> Unit>
    open var JavascriptContext: JavascriptContext
    open var Items: Array<UObject>
    open var HeaderRowStyle: HeaderRowStyle
    open var TableRowStyle: TableRowStyle
    open var ScrollBarStyle: ScrollBarStyle
    open var SelectionMode: String /* "None" | "Single" | "SingleToggle" | "Multi" | "ESelectionMode_MAX" */
    open var Children: Array<UObject>
    open var Columns: Array<JavascriptColumn>
    open var ColumnWidgets: Array<Widget>
    open fun SetSingleExpandedItem(InItem: UObject)
    open fun SetSelection(SoleSelectedItem: UObject)
    open fun SetItemExpansion(InItem: UObject, InShouldExpandItem: Boolean)
    open fun SetDoubleClickSelection(SelectedItem: UObject)
    open fun RequestTreeRefresh()
    open fun OnSelectionChanged(UObject: UObject, Type: String /* "OnKeyPress" | "OnNavigation" | "OnMouseClick" | "Direct" | "ESelectInfo_MAX" */)
    open fun OnDoubleClick(UObject: UObject)
    open fun IsItemExpanded(InItem: UObject): Boolean
    open fun IsDoubleClickSelection(SelectedItem: UObject): Boolean
    open fun GetSelectedItems(OutItems: Array<UObject> = definedExternally): `T$82`
    open fun GetDoubleClickedItems(OutItems: Array<UObject> = definedExternally): `T$83`
    open fun ClearDoubleClickSelection()

    companion object {
        fun Load(ResourceName: String): JavascriptTreeView
        fun Find(Outer: UObject, ResourceName: String): JavascriptTreeView
        fun GetDefaultObject(): JavascriptTreeView
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptTreeView
        fun C(Other: UObject): JavascriptTreeView
        fun C(Other: Any): JavascriptTreeView
    }
}

external open class JavascriptListView : JavascriptTreeView {
    constructor()
    constructor(Outer: UObject)
    open var ItemHeight: Number
    open fun RequestListRefresh()
    open fun OnClick(UObject: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptListView
        fun Find(Outer: UObject, ResourceName: String): JavascriptListView
        fun GetDefaultObject(): JavascriptListView
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptListView
        fun C(Other: UObject): JavascriptListView
        fun C(Other: Any): JavascriptListView
    }
}

external object EJavasrciptUserInterfaceActionType {
    var None: String /* "None" */
    var Button: String /* "Button" */
    var ToggleButton: String /* "ToggleButton" */
    var RadioButton: String /* "RadioButton" */
    var Check: String /* "Check" */
    var CollapsedButton: String /* "CollapsedButton" */
    var EJavasrciptUserInterfaceActionType_MAX: String /* "EJavasrciptUserInterfaceActionType_MAX" */
}

external open class JavascriptMenuContext : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Description: String
    open var Tooltip: String
    open var Icon: JavascriptSlateIcon
    open var ActionType: String /* "None" | "Button" | "ToggleButton" | "RadioButton" | "Check" | "CollapsedButton" | "EJavasrciptUserInterfaceActionType_MAX" */
    open var OnCanExecute: UnrealEngineDelegate<() -> Boolean>
    open var OnExecute: UnrealEngineDelegate<() -> Unit>
    open var OnGetActionCheckState: UnrealEngineDelegate<() -> String>

    companion object {
        fun Load(ResourceName: String): JavascriptMenuContext
        fun Find(Outer: UObject, ResourceName: String): JavascriptMenuContext
        fun GetDefaultObject(): JavascriptMenuContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptMenuContext
        fun C(Other: UObject): JavascriptMenuContext
        fun C(Other: Any): JavascriptMenuContext
    }
}

external open class JavascriptSlateTextRun {
    open fun clone(): JavascriptSlateTextRun

    companion object {
        fun C(Other: UObject): JavascriptSlateTextRun
        fun C(Other: Any): JavascriptSlateTextRun
    }
}

external open class JavascriptTextModel : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun SetString(string: String)
    open fun GetString(): String
    open fun CreateRun(MessageTextStyle: TextBlockStyle, BeginIndex: Number, EndIndex: Number): JavascriptSlateTextRun

    companion object {
        fun Load(ResourceName: String): JavascriptTextModel
        fun Find(Outer: UObject, ResourceName: String): JavascriptTextModel
        fun GetDefaultObject(): JavascriptTextModel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptTextModel
        fun C(Other: UObject): JavascriptTextModel
        fun C(Other: Any): JavascriptTextModel
    }
}

external interface `T$84` {
    var TextLayout: JavascriptTextLayout
}

external open class JavascriptTextLayout {
    open fun clone(): JavascriptTextLayout
    open fun AddLine(Model: JavascriptTextModel = definedExternally, Runs: Array<JavascriptSlateTextRun> = definedExternally): `T$84`
    open fun ClearLines(): `T$84`
    open fun GetAsText(): String
    open fun GetLineLength(): Number

    companion object {
        fun C(Other: UObject): JavascriptTextLayout
        fun C(Other: Any): JavascriptTextLayout
        fun AddLine(TextLayout: JavascriptTextLayout = definedExternally, Model: JavascriptTextModel = definedExternally, Runs: Array<JavascriptSlateTextRun> = definedExternally): `T$84`
        fun ClearLines(TextLayout: JavascriptTextLayout = definedExternally): `T$84`
        fun GetAsText(TextLayout: JavascriptTextLayout): String
        fun GetLineLength(TargetTextLayout: JavascriptTextLayout): Number
    }
}

external open class JavascriptMultiLineEditableTextBox : MultiLineEditableTextBox {
    constructor()
    constructor(Outer: UObject)
    open var OnVScrollBarUserScrolled: UnrealEngineMulticastDelegate<(Offset: Number) -> Unit>
    open var GetTextDelegate: UnrealEngineDelegate<(TextLayout: JavascriptTextLayout) -> String>
    open var SetTextDelegate: UnrealEngineDelegate<(InText: String, TextLayout: JavascriptTextLayout) -> Unit>
    open var bAlwaysShowScrollbars: Boolean
    open fun ScrollTo(Line: Number, Offset: Number)
    open fun Refresh()
    open fun GoTo(Line: Number, Offset: Number)

    companion object {
        fun Load(ResourceName: String): JavascriptMultiLineEditableTextBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptMultiLineEditableTextBox
        fun GetDefaultObject(): JavascriptMultiLineEditableTextBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptMultiLineEditableTextBox
        fun C(Other: UObject): JavascriptMultiLineEditableTextBox
        fun C(Other: Any): JavascriptMultiLineEditableTextBox
    }
}

external open class JavascriptRichTextBlockHyperlinkDecorator : RichTextBlockDecorator {
    constructor()
    constructor(Outer: UObject)
    open var HyperlinkId: String
    open var OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) -> Unit>
    open fun GetMetadata(Key: String): String

    companion object {
        fun Load(ResourceName: String): JavascriptRichTextBlockHyperlinkDecorator
        fun Find(Outer: UObject, ResourceName: String): JavascriptRichTextBlockHyperlinkDecorator
        fun GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptRichTextBlockHyperlinkDecorator
        fun C(Other: UObject): JavascriptRichTextBlockHyperlinkDecorator
        fun C(Other: Any): JavascriptRichTextBlockHyperlinkDecorator
    }
}

external open class JavascriptSearchBox : Widget {
    constructor()
    constructor(Outer: UObject)
    open var JavascriptContext: JavascriptContext
    open var OnTextChanged: UnrealEngineMulticastDelegate<(text: String) -> Unit>
    open var OnTextCommitted: UnrealEngineMulticastDelegate<(text: String, CommitMethod: String /* "Default" | "OnEnter" | "OnUserMovedFocus" | "OnCleared" | "ETextCommit_MAX" */) -> Unit>
    open var text: String
    open var TextDelegate: UnrealEngineDelegate<() -> String>
    open var HintText: String
    open var HintTextDelegate: UnrealEngineDelegate<() -> String>
    open fun SetText(InText: String)
    open fun SetHintText(InHintText: String)
    open fun OnKeyDown(MyGeometry: Geometry, InKeyEvent: KeyEvent): EventReply

    companion object {
        fun Load(ResourceName: String): JavascriptSearchBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptSearchBox
        fun GetDefaultObject(): JavascriptSearchBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptSearchBox
        fun C(Other: UObject): JavascriptSearchBox
        fun C(Other: Any): JavascriptSearchBox
    }
}

external open class JavascriptStyleSet {
    open var StyleSetName: String
    open fun clone(): JavascriptStyleSet
    open fun GetBrush(StyleName: String): SlateBrush
    open fun GetButtonStyle(StyleName: String): ButtonStyle
    open fun GetCheckBoxStyle(StyleName: String): CheckBoxStyle
    open fun GetColor(StyleName: String): LinearColor
    open fun GetComboBoxStyle(StyleName: String): ComboBoxStyle
    open fun GetComboButtonStyle(StyleName: String): ComboButtonStyle
    open fun GetEditableTextBoxStyle(StyleName: String): EditableTextBoxStyle
    open fun GetEditableTextStyle(StyleName: String): EditableTextStyle
    open fun GetFloat(StyleName: String): Number
    open fun GetFontStyle(StyleName: String): SlateFontInfo
    open fun GetMargin(StyleName: String): Margin
    open fun GetProgressBarStyle(StyleName: String): ProgressBarStyle
    open fun GetSlateColor(StyleName: String): SlateColor
    open fun GetSound(StyleName: String): SlateSound
    open fun GetTextBlockStyle(StyleName: String): TextBlockStyle
    open fun GetVector(StyleName: String): Vector2D

    companion object {
        fun C(Other: UObject): JavascriptStyleSet
        fun C(Other: Any): JavascriptStyleSet
        fun GetBrush(Handle: JavascriptStyleSet, StyleName: String): SlateBrush
        fun GetButtonStyle(Handle: JavascriptStyleSet, StyleName: String): ButtonStyle
        fun GetCheckBoxStyle(Handle: JavascriptStyleSet, StyleName: String): CheckBoxStyle
        fun GetColor(Handle: JavascriptStyleSet, StyleName: String): LinearColor
        fun GetComboBoxStyle(Handle: JavascriptStyleSet, StyleName: String): ComboBoxStyle
        fun GetComboButtonStyle(Handle: JavascriptStyleSet, StyleName: String): ComboButtonStyle
        fun GetEditableTextBoxStyle(Handle: JavascriptStyleSet, StyleName: String): EditableTextBoxStyle
        fun GetEditableTextStyle(Handle: JavascriptStyleSet, StyleName: String): EditableTextStyle
        fun GetFloat(Handle: JavascriptStyleSet, StyleName: String): Number
        fun GetFontStyle(Handle: JavascriptStyleSet, StyleName: String): SlateFontInfo
        fun GetMargin(Handle: JavascriptStyleSet, StyleName: String): Margin
        fun GetProgressBarStyle(Handle: JavascriptStyleSet, StyleName: String): ProgressBarStyle
        fun GetSlateColor(Handle: JavascriptStyleSet, StyleName: String): SlateColor
        fun GetSound(Handle: JavascriptStyleSet, StyleName: String): SlateSound
        fun GetTextBlockStyle(Handle: JavascriptStyleSet, StyleName: String): TextBlockStyle
        fun GetVector(Handle: JavascriptStyleSet, StyleName: String): Vector2D
    }
}

external open class JavascriptStyleSetLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)
    open var SlateColor: SlateColor
    open var SlateBrush: SlateBrush
    open var ButtonStyle: ButtonStyle
    open var TextBlockStyle: TextBlockStyle
    open var EditableTextStyle: EditableTextStyle
    open var EditableTextBoxStyle: EditableTextBoxStyle
    open var CheckBoxStyle: CheckBoxStyle
    open var ComboBoxStyle: ComboBoxStyle
    open var ComboButtonStyle: ComboButtonStyle
    open var ProgressBarStyle: ProgressBarStyle

    companion object {
        fun Load(ResourceName: String): JavascriptStyleSetLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptStyleSetLibrary
        fun GetDefaultObject(): JavascriptStyleSetLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptStyleSetLibrary
        fun GetVector(Handle: JavascriptStyleSet, StyleName: String): Vector2D
        fun GetTextBlockStyle(Handle: JavascriptStyleSet, StyleName: String): TextBlockStyle
        fun GetSound(Handle: JavascriptStyleSet, StyleName: String): SlateSound
        fun GetSlateColor(Handle: JavascriptStyleSet, StyleName: String): SlateColor
        fun GetProgressBarStyle(Handle: JavascriptStyleSet, StyleName: String): ProgressBarStyle
        fun GetMargin(Handle: JavascriptStyleSet, StyleName: String): Margin
        fun GetFontStyle(Handle: JavascriptStyleSet, StyleName: String): SlateFontInfo
        fun GetFloat(Handle: JavascriptStyleSet, StyleName: String): Number
        fun GetEditableTextStyle(Handle: JavascriptStyleSet, StyleName: String): EditableTextStyle
        fun GetEditableTextBoxStyle(Handle: JavascriptStyleSet, StyleName: String): EditableTextBoxStyle
        fun GetComboButtonStyle(Handle: JavascriptStyleSet, StyleName: String): ComboButtonStyle
        fun GetComboBoxStyle(Handle: JavascriptStyleSet, StyleName: String): ComboBoxStyle
        fun GetColor(Handle: JavascriptStyleSet, StyleName: String): LinearColor
        fun GetCheckBoxStyle(Handle: JavascriptStyleSet, StyleName: String): CheckBoxStyle
        fun GetButtonStyle(Handle: JavascriptStyleSet, StyleName: String): ButtonStyle
        fun GetBrush(Handle: JavascriptStyleSet, StyleName: String): SlateBrush
        fun C(Other: UObject): JavascriptStyleSetLibrary
        fun C(Other: Any): JavascriptStyleSetLibrary
    }
}

external open class JavascriptTextBlock : TextBlock {
    constructor()
    constructor(Outer: UObject)
    open var HighlightText: String
    open var HighlightTextDelegate: UnrealEngineDelegate<() -> String>
    open fun SetHighlightText(InHighlightText: String)

    companion object {
        fun Load(ResourceName: String): JavascriptTextBlock
        fun Find(Outer: UObject, ResourceName: String): JavascriptTextBlock
        fun GetDefaultObject(): JavascriptTextBlock
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptTextBlock
        fun C(Other: UObject): JavascriptTextBlock
        fun C(Other: Any): JavascriptTextBlock
    }
}

external open class JavascriptTileView : TileView {
    constructor()
    constructor(Outer: UObject)
    open var JavascriptContext: JavascriptContext
    open fun OnSelectionChanged(UObject: UObject, Type: String /* "OnKeyPress" | "OnNavigation" | "OnMouseClick" | "Direct" | "ESelectInfo_MAX" */)
    open fun OnDoubleClick(UObject: UObject)
    open fun OnClick(UObject: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptTileView
        fun Find(Outer: UObject, ResourceName: String): JavascriptTileView
        fun GetDefaultObject(): JavascriptTileView
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptTileView
        fun C(Other: UObject): JavascriptTileView
        fun C(Other: Any): JavascriptTileView
    }
}

external open class JavascriptToolbarButtonContext : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnGetLabel: UnrealEngineDelegate<() -> String>
    open var OnGetTooltip: UnrealEngineDelegate<() -> String>
    open var OnGetIcon: UnrealEngineDelegate<() -> JavascriptSlateIcon>
    open var OnExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) -> Unit>
    open var OnCanExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) -> Boolean>
    open var OnIsActionChecked: UnrealEngineDelegate<(EditingObject: UObject) -> Boolean>
    open var OnIsActionButtonVisible: UnrealEngineDelegate<(EditingObject: UObject) -> Boolean>
    open fun UnmarkReferencedObject()
    open fun MarkReferencedObject()

    companion object {
        fun Load(ResourceName: String): JavascriptToolbarButtonContext
        fun Find(Outer: UObject, ResourceName: String): JavascriptToolbarButtonContext
        fun GetDefaultObject(): JavascriptToolbarButtonContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptToolbarButtonContext
        fun C(Other: UObject): JavascriptToolbarButtonContext
        fun C(Other: Any): JavascriptToolbarButtonContext
    }
}

external interface `T$85` {
    var Context: PaintContext
}

external open class JavascriptUMGBlueprintLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptUMGBlueprintLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptUMGBlueprintLibrary
        fun GetDefaultObject(): JavascriptUMGBlueprintLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptUMGBlueprintLibrary
        fun SlateColor_UseSubduedForeground(): SlateColor
        fun SlateColor_UseForeground(): SlateColor
        fun GetLineLength(TargetTextLayout: JavascriptTextLayout): Number
        fun GetAsText(TextLayout: JavascriptTextLayout): String
        fun DrawSpaceSpline(Context: PaintContext = definedExternally, InStart: Vector2D = definedExternally, InStartDir: Vector2D = definedExternally, InEnd: Vector2D = definedExternally, InEndDir: Vector2D = definedExternally, InThickness: Number = definedExternally, InTint: LinearColor = definedExternally): `T$85`
        fun ClearLines(TextLayout: JavascriptTextLayout = definedExternally): `T$84`
        fun AddLine(TextLayout: JavascriptTextLayout = definedExternally, Model: JavascriptTextModel = definedExternally, Runs: Array<JavascriptSlateTextRun> = definedExternally): `T$84`
        fun C(Other: UObject): JavascriptUMGBlueprintLibrary
        fun C(Other: Any): JavascriptUMGBlueprintLibrary
    }
}

external open class JavascriptSlateStyle {
    open fun clone(): JavascriptSlateStyle
    open fun AddBorderBrush(PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
    open fun AddBoxBrush(PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
    open fun AddFontInfo(PropertyName: String, FontInfo: SlateFontInfo)
    open fun AddImageBrush(PropertyName: String, InImageName: String, InImageSize: Vector2D, InTint: LinearColor, InTiling: String /* "NoTile" | "Horizontal" | "Vertical" | "Both" | "ESlateBrushTileType_MAX" */, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
    open fun AddSound(PropertyName: String, Sound: SlateSound)
    open fun Register()
    open fun RootToContentDir(RelativePath: String): String
    open fun RootToCoreContentDir(RelativePath: String): String
    open fun SetContentRoot(InContentRootDir: String)
    open fun SetCoreContentRoot(InCoreContentRootDir: String)
    open fun Unregister()

    companion object {
        fun C(Other: UObject): JavascriptSlateStyle
        fun C(Other: Any): JavascriptSlateStyle
        fun AddBorderBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun AddBoxBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun AddFontInfo(StyleSet: JavascriptSlateStyle, PropertyName: String, FontInfo: SlateFontInfo)
        fun AddImageBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InImageSize: Vector2D, InTint: LinearColor, InTiling: String /* "NoTile" | "Horizontal" | "Vertical" | "Both" | "ESlateBrushTileType_MAX" */, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun AddSound(StyleSet: JavascriptSlateStyle, PropertyName: String, Sound: SlateSound)
        fun Register(StyleSet: JavascriptSlateStyle)
        fun RootToContentDir(StyleSet: JavascriptSlateStyle, RelativePath: String): String
        fun RootToCoreContentDir(StyleSet: JavascriptSlateStyle, RelativePath: String): String
        fun SetContentRoot(StyleSet: JavascriptSlateStyle, InContentRootDir: String)
        fun SetCoreContentRoot(StyleSet: JavascriptSlateStyle, InCoreContentRootDir: String)
        fun Unregister(StyleSet: JavascriptSlateStyle)
        fun CreateSlateStyle(InStyleSetName: String): JavascriptSlateStyle
    }
}

external open class JavascriptUMGLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptUMGLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptUMGLibrary
        fun GetDefaultObject(): JavascriptUMGLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptUMGLibrary
        fun Unregister(StyleSet: JavascriptSlateStyle)
        fun TakeWidget(Widget: Widget): JavascriptSlateWidget
        fun ShowWindow(NewWindow: JavascriptSlateWidget)
        fun SetCoreContentRoot(StyleSet: JavascriptSlateStyle, InCoreContentRootDir: String)
        fun SetContentRoot(StyleSet: JavascriptSlateStyle, InContentRootDir: String)
        fun SetContent(TargetWidget: NativeWidgetHost, SlateWidget: JavascriptSlateWidget): Widget
        fun RootToCoreContentDir(StyleSet: JavascriptSlateStyle, RelativePath: String): String
        fun RootToContentDir(StyleSet: JavascriptSlateStyle, RelativePath: String): String
        fun Register(StyleSet: JavascriptSlateStyle)
        fun GetRootWindow(): JavascriptSlateWidget
        fun GenerateDynamicImageResource(InDynamicBrushName: String): Vector2D
        fun CreateSlateStyle(InStyleSetName: String): JavascriptSlateStyle
        fun AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget, RootWindow: JavascriptSlateWidget)
        fun AddWindow(NewWindow: JavascriptSlateWidget, bShowImmediately: Boolean)
        fun AddSound(StyleSet: JavascriptSlateStyle, PropertyName: String, Sound: SlateSound)
        fun AddImageBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InImageSize: Vector2D, InTint: LinearColor, InTiling: String /* "NoTile" | "Horizontal" | "Vertical" | "Both" | "ESlateBrushTileType_MAX" */, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun AddFontInfo(StyleSet: JavascriptSlateStyle, PropertyName: String, FontInfo: SlateFontInfo)
        fun AddBoxBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun AddBorderBrush(StyleSet: JavascriptSlateStyle, PropertyName: String, InImageName: String, InMargin: Margin, InColorAndOpacity: LinearColor, InImageType: String /* "NoImage" | "FullColor" | "Linear" | "ESlateBrushImageType_MAX" */)
        fun C(Other: UObject): JavascriptUMGLibrary
        fun C(Other: Any): JavascriptUMGLibrary
    }
}

external open class JavascriptWidget : UserWidget {
    constructor()
    constructor(Outer: UObject)
    open var JavascriptContext: JavascriptContext
    open var OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: String) -> Unit>
    open var OnReleaseActionEvent: UnrealEngineMulticastDelegate<(ActionName: String) -> Unit>
    open var OnInputAxisEvent: UnrealEngineMulticastDelegate<(Axis: Number, AxisName: String) -> Unit>
    open var ContentSlot: PanelSlot
    open fun SetRootWidget(Widget: Widget)
    open fun RemoveChild(): Boolean
    open fun OnReleaseInputActionByName(ActionName: String)
    open fun OnListenForInputAxis(AxisName: String, EventType: String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */, bConsume: Boolean)
    open fun OnListenForInputAction(ActionName: String, EventType: String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */, bConsume: Boolean)
    open fun OnInputAxisByName(Axis: Number, ActionName: String)
    open fun OnInputActionByName(ActionName: String)
    open fun OnDestroy(bReleaseChildren: Boolean)
    open fun AddChild(Content: Widget): PanelSlot

    companion object {
        fun Load(ResourceName: String): JavascriptWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptWidget
        fun GetDefaultObject(): JavascriptWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWidget
        fun HasValidCachedWidget(Widget: Widget): Boolean
        fun CallSynchronizeProperties(WidgetOrSlot: Visual)
        fun C(Other: UObject): JavascriptWidget
        fun C(Other: Any): JavascriptWidget
    }
}

external object EJavascriptWindowType {
    var Normal: String /* "Normal" */
    var Menu: String /* "Menu" */
    var ToolTip: String /* "ToolTip" */
    var Notification: String /* "Notification" */
    var CursorDecorator: String /* "CursorDecorator" */
    var EJavascriptWindowType_MAX: String /* "EJavascriptWindowType_MAX" */
}

external open class WindowStyle : SlateWidgetStyle {
    open var MinimizeButtonStyle: ButtonStyle
    open var MaximizeButtonStyle: ButtonStyle
    open var RestoreButtonStyle: ButtonStyle
    open var CloseButtonStyle: ButtonStyle
    open var TitleTextStyle: TextBlockStyle
    open var ActiveTitleBrush: SlateBrush
    open var InactiveTitleBrush: SlateBrush
    open var FlashTitleBrush: SlateBrush
    open var BackgroundColor: SlateColor
    open var OutlineBrush: SlateBrush
    open var OutlineColor: SlateColor
    open var BorderBrush: SlateBrush
    open var BackgroundBrush: SlateBrush
    open var ChildBackgroundBrush: SlateBrush
    override fun clone(): WindowStyle

    companion object {
        fun C(Other: UObject): WindowStyle
        fun C(Other: Any): WindowStyle
    }
}

external object EJavascriptAutoCenter {
    var None: String /* "None" */
    var PrimaryWorkArea: String /* "PrimaryWorkArea" */
    var PreferredWorkArea: String /* "PreferredWorkArea" */
    var EJavascriptAutoCenter_MAX: String /* "EJavascriptAutoCenter_MAX" */
}

external object EJavascriptWindowTransparency {
    var None: String /* "None" */
    var PerWindow: String /* "PerWindow" */
    var EJavascriptWindowTransparency_MAX: String /* "EJavascriptWindowTransparency_MAX" */
}

external object EJavascriptSizingRule {
    var FixedSize: String /* "FixedSize" */
    var Autosized: String /* "Autosized" */
    var UserSized: String /* "UserSized" */
    var EJavascriptSizingRule_MAX: String /* "EJavascriptSizingRule_MAX" */
}

external interface `T$86` {
    var OutFolderName: String
    var `$`: Boolean
}

external interface `T$87` {
    var OutFilenames: Array<String>
    var `$`: Boolean
}

external interface `T$88` {
    var OutFilenames: Array<String>
    var `$`: Boolean
}

external open class JavascriptWindow : ContentWidget {
    constructor()
    constructor(Outer: UObject)
    open var Type: String /* "Normal" | "Menu" | "ToolTip" | "Notification" | "CursorDecorator" | "EJavascriptWindowType_MAX" */
    open var Style: WindowStyle
    open var Title: String
    open var bDragAnywhere: Boolean
    open var AutoCenter: String /* "None" | "PrimaryWorkArea" | "PreferredWorkArea" | "EJavascriptAutoCenter_MAX" */
    open var ScreenPosition: Vector2D
    open var ClientSize: Vector2D
    open var SupportsTransparency: String /* "None" | "PerWindow" | "EJavascriptWindowTransparency_MAX" */
    open var InitialOpacity: Number
    open var IsInitiallyMaximized: Boolean
    open var SizingRule: String /* "FixedSize" | "Autosized" | "UserSized" | "EJavascriptSizingRule_MAX" */
    open var IsPopupWindow: Boolean
    open var FocusWhenFirstShown: Boolean
    open var ActivateWhenFirstShown: Boolean
    open var UseOSWindowBorder: Boolean
    open var HasCloseButton: Boolean
    open var SupportsMaximize: Boolean
    open var SupportsMinimize: Boolean
    open var CreateTitleBar: Boolean
    open var SaneWindowPlacement: Boolean
    open var LayoutBorder: Margin
    open var UserResizeBorder: Margin
    open var OnWindowClosed: UnrealEngineDelegate<() -> Unit>
    open var OnWindowDeactivated: UnrealEngineDelegate<() -> Unit>
    open var IsTopmostWindow: Boolean
    open fun ShowWindow()
    open fun SetOpacity(InOpacity: Number)
    open fun Resize(NewSize: Vector2D)
    open fun ReshapeWindow(NewPosition: Vector2D, NewSize: Vector2D)
    open fun RequestDestroyWindow()
    open fun MoveWindowTo(NewPosition: Vector2D)
    open fun HideWindow()
    open fun FlashWindow()
    open fun EnableWindow(bEnable: Boolean)
    open fun DestroyWindowImmediately()
    open fun BringToFront()
    open fun OpenDirectoryDialog(DialogTitle: String, DefaultPath: String, OutFolderName: String = definedExternally): `T$86`
    open fun OpenFileDialog(DialogTitle: String, DefaultPath: String, DefaultFile: String, FileTypes: String, Flags: Number, OutFilenames: Array<String> = definedExternally): `T$87`

    companion object {
        fun Load(ResourceName: String): JavascriptWindow
        fun Find(Outer: UObject, ResourceName: String): JavascriptWindow
        fun GetDefaultObject(): JavascriptWindow
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWindow
        fun C(Other: UObject): JavascriptWindow
        fun C(Other: Any): JavascriptWindow
        fun OpenDirectoryDialog(WindowHandle: JavascriptWindow, DialogTitle: String, DefaultPath: String, OutFolderName: String = definedExternally): `T$86`
        fun OpenFileDialog(WindowHandle: JavascriptWindow, DialogTitle: String, DefaultPath: String, DefaultFile: String, FileTypes: String, Flags: Number, OutFilenames: Array<String> = definedExternally): `T$88`
    }
}

external object EJavascriptHttpRequestStatus {
    var NotStarted: String /* "NotStarted" */
    var Processing: String /* "Processing" */
    var Failed: String /* "Failed" */
    var Succeeded: String /* "Succeeded" */
    var EJavascriptHttpRequestStatus_MAX: String /* "EJavascriptHttpRequestStatus_MAX" */
}

external open class JavascriptHttpRequest : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnComplete: UnrealEngineDelegate<(successful: Boolean) -> Unit>
    open var OnProgress: UnrealEngineDelegate<(sent: Number, recv: Number) -> Unit>
    open fun SetVerb(Verb: String)
    open fun SetURL(URL: String)
    open fun SetHeader(HeaderName: String, HeaderValue: String)
    open fun SetContentWithFiles(FilePaths: Array<String>, Boundary: String, Content: String)
    open fun SetContentFromMemory()
    open fun SetContentAsString(ContentString: String)
    open fun ProcessRequest(): Boolean
    open fun GetVerb(): String
    open fun GetStatus(): String /* "NotStarted" | "Processing" | "Failed" | "Succeeded" | "EJavascriptHttpRequestStatus_MAX" */
    open fun GetResponseCode(): Number
    open fun GetElapsedTime(): Number
    open fun GetContentToMemory()
    open fun GetContentLength(): Number
    open fun GetContentAsString(): String
    open fun CancelRequest()

    companion object {
        fun Load(ResourceName: String): JavascriptHttpRequest
        fun Find(Outer: UObject, ResourceName: String): JavascriptHttpRequest
        fun GetDefaultObject(): JavascriptHttpRequest
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptHttpRequest
        fun C(Other: UObject): JavascriptHttpRequest
        fun C(Other: Any): JavascriptHttpRequest
    }
}

external open class JavascriptWebSocket : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnReceived: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnConnected: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnError: UnrealEngineMulticastDelegate<() -> Unit>
    open fun Tick()
    open fun SendMemory(NumBytes: Number)
    open fun RemoteEndPoint(bAppendPort: Boolean): String
    open fun LocalEndPoint(bAppendPort: Boolean): String
    open fun GetReceivedBytes(): Number
    open fun Flush()
    open fun Dispose()
    open fun CopyBuffer()

    companion object {
        fun Load(ResourceName: String): JavascriptWebSocket
        fun Find(Outer: UObject, ResourceName: String): JavascriptWebSocket
        fun GetDefaultObject(): JavascriptWebSocket
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWebSocket
        fun Connect(Endpoint: String): JavascriptWebSocket
        fun C(Other: UObject): JavascriptWebSocket
        fun C(Other: Any): JavascriptWebSocket
    }
}

external open class JavascriptWebSocketServer : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) -> Unit>
    open var Connections: Array<JavascriptWebSocket>
    open fun Tick()
    open fun Info(): String
    open fun Dispose()

    companion object {
        fun Load(ResourceName: String): JavascriptWebSocketServer
        fun Find(Outer: UObject, ResourceName: String): JavascriptWebSocketServer
        fun GetDefaultObject(): JavascriptWebSocketServer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWebSocketServer
        fun Create(Port: Number): JavascriptWebSocketServer
        fun C(Other: UObject): JavascriptWebSocketServer
        fun C(Other: Any): JavascriptWebSocketServer
    }
}

external open class KotlinAsset {
    open var Name: String
    open var Asset: SoftObjectPath
    open fun clone(): KotlinAsset

    companion object {
        fun C(Other: UObject): KotlinAsset
        fun C(Other: Any): KotlinAsset
    }
}

external open class KotlinClassAsset {
    open var Name: String
    open var Class: UnrealEngineClass
    open fun clone(): KotlinClassAsset

    companion object {
        fun C(Other: UObject): KotlinClassAsset
        fun C(Other: Any): KotlinClassAsset
    }
}

external open class KotlinObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Root: ActorComponent
    open fun Tick(DeltaTime: Number)
    open fun OnDestroyed()
    open fun BeginOverlap(Other: Actor): String

    companion object {
        fun Load(ResourceName: String): KotlinObject
        fun Find(Outer: UObject, ResourceName: String): KotlinObject
        fun GetDefaultObject(): KotlinObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): KotlinObject
        fun C(Other: UObject): KotlinObject
        fun C(Other: Any): KotlinObject
    }
}

external open class KotlinComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var KotlinClass: String
    open var Assets: Array<KotlinAsset>
    open var ClassAssets: Array<KotlinClassAsset>
    open var JavascriptContext: JavascriptContext
    open var KotlinObject: KotlinObject
    open fun Spawn(ClassF: UnrealEngineClass, Location: Vector, Rotation: Rotator): Actor
    open fun SetKotlinObject(KotlinObject: KotlinObject)
    open fun ResolveClass(Name: String): UnrealEngineClass
    open fun ResolveAsset(Name: String, bTryLoad: Boolean): UObject
    open fun OnTick(DeltaTime: Number)
    open fun OnDestroyed()
    open fun LoadKotlinObject()
    open fun GetKotlinObject(): KotlinObject
    open fun BeginOverlap(Other: Actor): String

    companion object {
        fun Load(ResourceName: String): KotlinComponent
        fun Find(Outer: UObject, ResourceName: String): KotlinComponent
        fun GetDefaultObject(): KotlinComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): KotlinComponent
        fun C(Other: UObject): KotlinComponent
        fun C(Other: Any): KotlinComponent
    }
}

external open class KotlinGameInstance : GameInstance {
    constructor()
    constructor(Outer: UObject)
    open var Isolate: JavascriptIsolate
    open var JavascriptContext: JavascriptContext

    companion object {
        fun Load(ResourceName: String): KotlinGameInstance
        fun Find(Outer: UObject, ResourceName: String): KotlinGameInstance
        fun GetDefaultObject(): KotlinGameInstance
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): KotlinGameInstance
        fun C(Other: UObject): KotlinGameInstance
        fun C(Other: Any): KotlinGameInstance
    }
}

external open class MeshPaintingToolset : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshPaintingToolset
        fun Find(Outer: UObject, ResourceName: String): MeshPaintingToolset
        fun GetDefaultObject(): MeshPaintingToolset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintingToolset
        fun C(Other: UObject): MeshPaintingToolset
        fun C(Other: Any): MeshPaintingToolset
    }
}

external open class MeshToolsContext : EdModeInteractiveToolsContext {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshToolsContext
        fun Find(Outer: UObject, ResourceName: String): MeshToolsContext
        fun GetDefaultObject(): MeshToolsContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshToolsContext
        fun C(Other: UObject): MeshToolsContext
        fun C(Other: Any): MeshToolsContext
    }
}

external open class MeshToolManager : InteractiveToolManager {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshToolManager
        fun Find(Outer: UObject, ResourceName: String): MeshToolManager
        fun GetDefaultObject(): MeshToolManager
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshToolManager
        fun C(Other: UObject): MeshToolManager
        fun C(Other: Any): MeshToolManager
    }
}

external open class MeshPaintSelectionInterface : Interface {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshPaintSelectionInterface
        fun Find(Outer: UObject, ResourceName: String): MeshPaintSelectionInterface
        fun GetDefaultObject(): MeshPaintSelectionInterface
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintSelectionInterface
        fun C(Other: UObject): MeshPaintSelectionInterface
        fun C(Other: Any): MeshPaintSelectionInterface
    }
}

external open class MeshPaintSelectionMechanic : InteractionMechanic {
    constructor()
    constructor(Outer: UObject)
    open var CachedClickedComponents: Array<MeshComponent>
    open var CachedClickedActors: Array<Actor>

    companion object {
        fun Load(ResourceName: String): MeshPaintSelectionMechanic
        fun Find(Outer: UObject, ResourceName: String): MeshPaintSelectionMechanic
        fun GetDefaultObject(): MeshPaintSelectionMechanic
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintSelectionMechanic
        fun C(Other: UObject): MeshPaintSelectionMechanic
        fun C(Other: Any): MeshPaintSelectionMechanic
    }
}

external open class VertexAdapterClickToolBuilder : SingleClickToolBuilder {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VertexAdapterClickToolBuilder
        fun Find(Outer: UObject, ResourceName: String): VertexAdapterClickToolBuilder
        fun GetDefaultObject(): VertexAdapterClickToolBuilder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VertexAdapterClickToolBuilder
        fun C(Other: UObject): VertexAdapterClickToolBuilder
        fun C(Other: Any): VertexAdapterClickToolBuilder
    }
}

external open class TextureAdapterClickToolBuilder : SingleClickToolBuilder {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TextureAdapterClickToolBuilder
        fun Find(Outer: UObject, ResourceName: String): TextureAdapterClickToolBuilder
        fun GetDefaultObject(): TextureAdapterClickToolBuilder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TextureAdapterClickToolBuilder
        fun C(Other: UObject): TextureAdapterClickToolBuilder
        fun C(Other: Any): TextureAdapterClickToolBuilder
    }
}

external open class MeshClickTool : SingleClickTool {
    constructor()
    constructor(Outer: UObject)
    open var SelectionMechanic: MeshPaintSelectionMechanic

    companion object {
        fun Load(ResourceName: String): MeshClickTool
        fun Find(Outer: UObject, ResourceName: String): MeshClickTool
        fun GetDefaultObject(): MeshClickTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshClickTool
        fun C(Other: UObject): MeshClickTool
        fun C(Other: Any): MeshClickTool
    }
}

external open class VertexAdapterClickTool : MeshClickTool {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VertexAdapterClickTool
        fun Find(Outer: UObject, ResourceName: String): VertexAdapterClickTool
        fun GetDefaultObject(): VertexAdapterClickTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VertexAdapterClickTool
        fun C(Other: UObject): VertexAdapterClickTool
        fun C(Other: Any): VertexAdapterClickTool
    }
}

external open class TextureAdapterClickTool : MeshClickTool {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TextureAdapterClickTool
        fun Find(Outer: UObject, ResourceName: String): TextureAdapterClickTool
        fun GetDefaultObject(): TextureAdapterClickTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TextureAdapterClickTool
        fun C(Other: UObject): TextureAdapterClickTool
        fun C(Other: Any): TextureAdapterClickTool
    }
}

external open class MeshTexturePaintingToolBuilder : InteractiveToolBuilder {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshTexturePaintingToolBuilder
        fun Find(Outer: UObject, ResourceName: String): MeshTexturePaintingToolBuilder
        fun GetDefaultObject(): MeshTexturePaintingToolBuilder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshTexturePaintingToolBuilder
        fun C(Other: UObject): MeshTexturePaintingToolBuilder
        fun C(Other: Any): MeshTexturePaintingToolBuilder
    }
}

external open class MeshTexturePaintingToolProperties : BrushBaseProperties {
    constructor()
    constructor(Outer: UObject)
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var UVChannel: Number
    open var bEnableSeamPainting: Boolean
    open var PaintTexture: Texture2D
    open var bEnableFlow: Boolean
    open var bOnlyFrontFacingTriangles: Boolean

    companion object {
        fun Load(ResourceName: String): MeshTexturePaintingToolProperties
        fun Find(Outer: UObject, ResourceName: String): MeshTexturePaintingToolProperties
        fun GetDefaultObject(): MeshTexturePaintingToolProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshTexturePaintingToolProperties
        fun C(Other: UObject): MeshTexturePaintingToolProperties
        fun C(Other: Any): MeshTexturePaintingToolProperties
    }
}

external open class MeshTexturePaintingTool : BaseBrushTool {
    constructor()
    constructor(Outer: UObject)
    open var TextureProperties: MeshTexturePaintingToolProperties
    open var Textures: Array<Texture>
    open var BrushRenderTargetTexture: TextureRenderTarget2D
    open var BrushMaskRenderTargetTexture: TextureRenderTarget2D
    open var SeamMaskRenderTargetTexture: TextureRenderTarget2D
    open var PaintTargetData: Any
    open var TexturePaintingCurrentMeshComponent: MeshComponent
    open var PaintingTexture2D: Texture2D

    companion object {
        fun Load(ResourceName: String): MeshTexturePaintingTool
        fun Find(Outer: UObject, ResourceName: String): MeshTexturePaintingTool
        fun GetDefaultObject(): MeshTexturePaintingTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshTexturePaintingTool
        fun C(Other: UObject): MeshTexturePaintingTool
        fun C(Other: Any): MeshTexturePaintingTool
    }
}

external open class MeshColorPaintingToolBuilder : InteractiveToolBuilder {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshColorPaintingToolBuilder
        fun Find(Outer: UObject, ResourceName: String): MeshColorPaintingToolBuilder
        fun GetDefaultObject(): MeshColorPaintingToolBuilder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshColorPaintingToolBuilder
        fun C(Other: UObject): MeshColorPaintingToolBuilder
        fun C(Other: Any): MeshColorPaintingToolBuilder
    }
}

external open class MeshWeightPaintingToolBuilder : InteractiveToolBuilder {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MeshWeightPaintingToolBuilder
        fun Find(Outer: UObject, ResourceName: String): MeshWeightPaintingToolBuilder
        fun GetDefaultObject(): MeshWeightPaintingToolBuilder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshWeightPaintingToolBuilder
        fun C(Other: UObject): MeshWeightPaintingToolBuilder
        fun C(Other: Any): MeshWeightPaintingToolBuilder
    }
}

external open class MeshVertexPaintingToolProperties : BrushBaseProperties {
    constructor()
    constructor(Outer: UObject)
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bEnableFlow: Boolean
    open var bOnlyFrontFacingTriangles: Boolean
    open var VertexPreviewSize: Number

    companion object {
        fun Load(ResourceName: String): MeshVertexPaintingToolProperties
        fun Find(Outer: UObject, ResourceName: String): MeshVertexPaintingToolProperties
        fun GetDefaultObject(): MeshVertexPaintingToolProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshVertexPaintingToolProperties
        fun C(Other: UObject): MeshVertexPaintingToolProperties
        fun C(Other: Any): MeshVertexPaintingToolProperties
    }
}

external open class MeshColorPaintingToolProperties : MeshVertexPaintingToolProperties {
    constructor()
    constructor(Outer: UObject)
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var bPaintOnSpecificLOD: Boolean
    open var LODIndex: Number

    companion object {
        fun Load(ResourceName: String): MeshColorPaintingToolProperties
        fun Find(Outer: UObject, ResourceName: String): MeshColorPaintingToolProperties
        fun GetDefaultObject(): MeshColorPaintingToolProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshColorPaintingToolProperties
        fun C(Other: UObject): MeshColorPaintingToolProperties
        fun C(Other: Any): MeshColorPaintingToolProperties
    }
}

external object EMeshPaintWeightTypes {
    var AlphaLerp: String /* "AlphaLerp" */
    var RGB: String /* "RGB" */
    var ARGB: String /* "ARGB" */
    var OneMinusARGB: String /* "OneMinusARGB" */
    var EMeshPaintWeightTypes_MAX: String /* "EMeshPaintWeightTypes_MAX" */
}

external object EMeshPaintTextureIndex {
    var TextureOne: String /* "TextureOne" */
    var TextureTwo: String /* "TextureTwo" */
    var TextureThree: String /* "TextureThree" */
    var TextureFour: String /* "TextureFour" */
    var TextureFive: String /* "TextureFive" */
    var EMeshPaintTextureIndex_MAX: String /* "EMeshPaintTextureIndex_MAX" */
}

external open class MeshWeightPaintingToolProperties : MeshVertexPaintingToolProperties {
    constructor()
    constructor(Outer: UObject)
    open var TextureWeightType: String /* "AlphaLerp" | "RGB" | "ARGB" | "OneMinusARGB" | "EMeshPaintWeightTypes_MAX" */
    open var PaintTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "EMeshPaintTextureIndex_MAX" */
    open var EraseTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "EMeshPaintTextureIndex_MAX" */

    companion object {
        fun Load(ResourceName: String): MeshWeightPaintingToolProperties
        fun Find(Outer: UObject, ResourceName: String): MeshWeightPaintingToolProperties
        fun GetDefaultObject(): MeshWeightPaintingToolProperties
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshWeightPaintingToolProperties
        fun C(Other: UObject): MeshWeightPaintingToolProperties
        fun C(Other: Any): MeshWeightPaintingToolProperties
    }
}

external open class MeshVertexPaintingTool : BaseBrushTool {
    constructor()
    constructor(Outer: UObject)
    open var SelectionMechanic: MeshPaintSelectionMechanic
    open var VertexProperties: MeshVertexPaintingToolProperties

    companion object {
        fun Load(ResourceName: String): MeshVertexPaintingTool
        fun Find(Outer: UObject, ResourceName: String): MeshVertexPaintingTool
        fun GetDefaultObject(): MeshVertexPaintingTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshVertexPaintingTool
        fun C(Other: UObject): MeshVertexPaintingTool
        fun C(Other: Any): MeshVertexPaintingTool
    }
}

external open class MeshColorPaintingTool : MeshVertexPaintingTool {
    constructor()
    constructor(Outer: UObject)
    open var ColorProperties: MeshColorPaintingToolProperties

    companion object {
        fun Load(ResourceName: String): MeshColorPaintingTool
        fun Find(Outer: UObject, ResourceName: String): MeshColorPaintingTool
        fun GetDefaultObject(): MeshColorPaintingTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshColorPaintingTool
        fun C(Other: UObject): MeshColorPaintingTool
        fun C(Other: Any): MeshColorPaintingTool
    }
}

external open class MeshWeightPaintingTool : MeshVertexPaintingTool {
    constructor()
    constructor(Outer: UObject)
    open var WeightProperties: MeshWeightPaintingToolProperties

    companion object {
        fun Load(ResourceName: String): MeshWeightPaintingTool
        fun Find(Outer: UObject, ResourceName: String): MeshWeightPaintingTool
        fun GetDefaultObject(): MeshWeightPaintingTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshWeightPaintingTool
        fun C(Other: UObject): MeshWeightPaintingTool
        fun C(Other: Any): MeshWeightPaintingTool
    }
}

external open class TexturePaintToolset : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TexturePaintToolset
        fun Find(Outer: UObject, ResourceName: String): TexturePaintToolset
        fun GetDefaultObject(): TexturePaintToolset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TexturePaintToolset
        fun C(Other: UObject): TexturePaintToolset
        fun C(Other: Any): TexturePaintToolset
    }
}

external open class ImportVertexColorOptions : UObject {
    constructor()
    constructor(Outer: UObject)
    open var UVIndex: Number
    open var LODIndex: Number
    open var bRed: Boolean
    open var bBlue: Boolean
    open var bGreen: Boolean
    open var bAlpha: Boolean
    open var bImportToInstance: Boolean
    open var bCanImportToInstance: Boolean

    companion object {
        fun Load(ResourceName: String): ImportVertexColorOptions
        fun Find(Outer: UObject, ResourceName: String): ImportVertexColorOptions
        fun GetDefaultObject(): ImportVertexColorOptions
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ImportVertexColorOptions
        fun C(Other: UObject): ImportVertexColorOptions
        fun C(Other: Any): ImportVertexColorOptions
    }
}

external object EMeshPaintDataColorViewMode {
    var Normal: String /* "Normal" */
    var RGB: String /* "RGB" */
    var Alpha: String /* "Alpha" */
    var Red: String /* "Red" */
    var Green: String /* "Green" */
    var Blue: String /* "Blue" */
    var EMeshPaintDataColorViewMode_MAX: String /* "EMeshPaintDataColorViewMode_MAX" */
}

external open class MeshPaintModeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ColorViewMode: String /* "Normal" | "RGB" | "Alpha" | "Red" | "Green" | "Blue" | "EMeshPaintDataColorViewMode_MAX" */

    companion object {
        fun Load(ResourceName: String): MeshPaintModeSettings
        fun Find(Outer: UObject, ResourceName: String): MeshPaintModeSettings
        fun GetDefaultObject(): MeshPaintModeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintModeSettings
        fun C(Other: UObject): MeshPaintModeSettings
        fun C(Other: Any): MeshPaintModeSettings
    }
}

external open class MeshPaintMode : EdMode {
    constructor()
    constructor(Outer: UObject)
    open var ModeSettings: MeshPaintModeSettings

    companion object {
        fun Load(ResourceName: String): MeshPaintMode
        fun Find(Outer: UObject, ResourceName: String): MeshPaintMode
        fun GetDefaultObject(): MeshPaintMode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintMode
        fun C(Other: UObject): MeshPaintMode
        fun C(Other: Any): MeshPaintMode
    }
}

external object EMeshPaintColorViewMode {
    var Normal: String /* "Normal" */
    var RGB: String /* "RGB" */
    var Alpha: String /* "Alpha" */
    var Red: String /* "Red" */
    var Green: String /* "Green" */
    var Blue: String /* "Blue" */
    var EMeshPaintColorViewMode_MAX: String /* "EMeshPaintColorViewMode_MAX" */
}

external open class PaintBrushSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BrushRadius: Number
    open var BrushStrength: Number
    open var BrushFalloffAmount: Number
    open var bEnableFlow: Boolean
    open var bOnlyFrontFacingTriangles: Boolean
    open var ColorViewMode: String /* "Normal" | "RGB" | "Alpha" | "Red" | "Green" | "Blue" | "EMeshPaintColorViewMode_MAX" */

    companion object {
        fun Load(ResourceName: String): PaintBrushSettings
        fun Find(Outer: UObject, ResourceName: String): PaintBrushSettings
        fun GetDefaultObject(): PaintBrushSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaintBrushSettings
        fun C(Other: UObject): PaintBrushSettings
        fun C(Other: Any): PaintBrushSettings
    }
}

external open class MeshPaintSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var VertexPreviewSize: Number

    companion object {
        fun Load(ResourceName: String): MeshPaintSettings
        fun Find(Outer: UObject, ResourceName: String): MeshPaintSettings
        fun GetDefaultObject(): MeshPaintSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshPaintSettings
        fun C(Other: UObject): MeshPaintSettings
        fun C(Other: Any): MeshPaintSettings
    }
}

external open class VertexColorImportOptions : UObject {
    constructor()
    constructor(Outer: UObject)
    open var UVIndex: Number
    open var LODIndex: Number
    open var bRed: Boolean
    open var bBlue: Boolean
    open var bGreen: Boolean
    open var bAlpha: Boolean
    open var bImportToInstance: Boolean
    open var bCanImportToInstance: Boolean

    companion object {
        fun Load(ResourceName: String): VertexColorImportOptions
        fun Find(Outer: UObject, ResourceName: String): VertexColorImportOptions
        fun GetDefaultObject(): VertexColorImportOptions
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VertexColorImportOptions
        fun C(Other: UObject): VertexColorImportOptions
        fun C(Other: Any): VertexColorImportOptions
    }
}

external object ETutorialContent {
    var None: String /* "None" */
    var Text: String /* "Text" */
    var UDNExcerpt: String /* "UDNExcerpt" */
    var RichText: String /* "RichText" */
    var ETutorialContent_MAX: String /* "ETutorialContent_MAX" */
}

external open class TutorialContent {
    open var Type: String /* "None" | "Text" | "UDNExcerpt" | "RichText" | "ETutorialContent_MAX" */
    open var Content: String
    open var ExcerptName: String
    open var text: String
    open fun clone(): TutorialContent

    companion object {
        fun C(Other: UObject): TutorialContent
        fun C(Other: Any): TutorialContent
    }
}

external object ETutorialAnchorIdentifier {
    var None: String /* "None" */
    var NamedWidget: String /* "NamedWidget" */
    var Asset: String /* "Asset" */
    var ETutorialAnchorIdentifier_MAX: String /* "ETutorialAnchorIdentifier_MAX" */
}

external open class TutorialContentAnchor {
    open var Type: String /* "None" | "NamedWidget" | "Asset" | "ETutorialAnchorIdentifier_MAX" */
    open var WrapperIdentifier: String
    open var Asset: SoftObjectPath
    open var bDrawHighlight: Boolean
    open var TabToFocusOrOpen: String
    open var FriendlyName: String
    open var GuidString: String
    open var OuterName: String
    open fun clone(): TutorialContentAnchor

    companion object {
        fun C(Other: UObject): TutorialContentAnchor
        fun C(Other: Any): TutorialContentAnchor
    }
}

external open class TutorialWidgetContent {
    open var Content: TutorialContent
    open var WidgetAnchor: TutorialContentAnchor
    open var HorizontalAlignment: String /* "HAlign_Fill" | "HAlign_Left" | "HAlign_Center" | "HAlign_Right" | "HAlign_MAX" */
    open var VerticalAlignment: String /* "VAlign_Fill" | "VAlign_Top" | "VAlign_Center" | "VAlign_Bottom" | "VAlign_MAX" */
    open var Offset: Vector2D
    open var ContentWidth: Number
    open var bAutoFocus: Boolean
    open fun clone(): TutorialWidgetContent

    companion object {
        fun C(Other: UObject): TutorialWidgetContent
        fun C(Other: Any): TutorialWidgetContent
    }
}

external open class TutorialStage {
    open var Name: String
    open var Content: TutorialContent
    open var WidgetContent: Array<TutorialWidgetContent>
    open var NextButtonText: String
    open var BackButtonText: String
    open var PlatformsToTest: Array<String>
    open var bInvertPlatformTest: Boolean
    open fun clone(): TutorialStage

    companion object {
        fun C(Other: UObject): TutorialStage
        fun C(Other: Any): TutorialStage
    }
}

external open class EditorTutorial : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Title: String
    open var SortOrder: Number
    open var Icon: String
    open var Texture: Texture2D
    open var Category: String
    open var SummaryContent: TutorialContent
    open var Stages: Array<TutorialStage>
    open var PreviousTutorial: SoftClassPath
    open var NextTutorial: SoftClassPath
    open var bIsStandalone: Boolean
    open var AssetToUse: SoftObjectPath
    open var ImportPath: String
    open var bHideInBrowser: Boolean
    open var SearchTags: String
    open fun OnTutorialStageStarted(StageName: String)
    open fun OnTutorialStageEnded(StageName: String)
    open fun OnTutorialLaunched()
    open fun OnTutorialClosed()
    open fun GetActorReference(PathToActor: String): Actor

    companion object {
        fun Load(ResourceName: String): EditorTutorial
        fun Find(Outer: UObject, ResourceName: String): EditorTutorial
        fun GetDefaultObject(): EditorTutorial
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorTutorial
        fun SetEngineFolderVisibilty(bNewVisibility: Boolean)
        fun OpenAsset(Asset: UObject)
        fun GoToPreviousTutorialStage()
        fun GoToNextTutorialStage()
        fun GetEngineFolderVisibilty(): Boolean
        fun BeginTutorial(TutorialToStart: EditorTutorial, bRestart: Boolean)
        fun C(Other: UObject): EditorTutorial
        fun C(Other: Any): EditorTutorial
    }
}

external open class EditorTutorialFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorTutorialFactory
        fun Find(Outer: UObject, ResourceName: String): EditorTutorialFactory
        fun GetDefaultObject(): EditorTutorialFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorTutorialFactory
        fun C(Other: UObject): EditorTutorialFactory
        fun C(Other: Any): EditorTutorialFactory
    }
}

external open class EditorTutorialImportFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorTutorialImportFactory
        fun Find(Outer: UObject, ResourceName: String): EditorTutorialImportFactory
        fun GetDefaultObject(): EditorTutorialImportFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorTutorialImportFactory
        fun C(Other: UObject): EditorTutorialImportFactory
        fun C(Other: Any): EditorTutorialImportFactory
    }
}

external open class TutorialCategory {
    open var Identifier: String
    open var Title: String
    open var SortOrder: Number
    open var Description: String
    open var Icon: String
    open var Texture: SoftObjectPath
    open fun clone(): TutorialCategory

    companion object {
        fun C(Other: UObject): TutorialCategory
        fun C(Other: Any): TutorialCategory
    }
}

external open class TutorialContext {
    open var Context: String
    open var BrowserFilter: String
    open var AttractTutorial: SoftClassPath
    open var LaunchTutorial: SoftClassPath
    open fun clone(): TutorialContext

    companion object {
        fun C(Other: UObject): TutorialContext
        fun C(Other: Any): TutorialContext
    }
}

external open class EditorTutorialSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bDisableAllTutorialAlerts: Boolean
    open var Categories: Array<TutorialCategory>
    open var StartupTutorial: SoftClassPath
    open var TutorialContexts: Array<TutorialContext>

    companion object {
        fun Load(ResourceName: String): EditorTutorialSettings
        fun Find(Outer: UObject, ResourceName: String): EditorTutorialSettings
        fun GetDefaultObject(): EditorTutorialSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorTutorialSettings
        fun C(Other: UObject): EditorTutorialSettings
        fun C(Other: Any): EditorTutorialSettings
    }
}

external open class TutorialSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Categories: Array<TutorialCategory>
    open var StartupTutorial: SoftClassPath

    companion object {
        fun Load(ResourceName: String): TutorialSettings
        fun Find(Outer: UObject, ResourceName: String): TutorialSettings
        fun GetDefaultObject(): TutorialSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TutorialSettings
        fun C(Other: UObject): TutorialSettings
        fun C(Other: Any): TutorialSettings
    }
}

external open class TutorialProgress {
    open var Tutorial: SoftClassPath
    open var CurrentStage: Number
    open var bUserDismissed: Boolean
    open fun clone(): TutorialProgress

    companion object {
        fun C(Other: UObject): TutorialProgress
        fun C(Other: Any): TutorialProgress
    }
}

external open class TutorialStateSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var TutorialsProgress: Array<TutorialProgress>
    open var bDismissedAllTutorials: Boolean

    companion object {
        fun Load(ResourceName: String): TutorialStateSettings
        fun Find(Outer: UObject, ResourceName: String): TutorialStateSettings
        fun GetDefaultObject(): TutorialStateSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TutorialStateSettings
        fun C(Other: UObject): TutorialStateSettings
        fun C(Other: Any): TutorialStateSettings
    }
}

external open class FlipbookEditorSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BackgroundColor: Color
    open var bShowGridByDefault: Boolean

    companion object {
        fun Load(ResourceName: String): FlipbookEditorSettings
        fun Find(Outer: UObject, ResourceName: String): FlipbookEditorSettings
        fun GetDefaultObject(): FlipbookEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FlipbookEditorSettings
        fun C(Other: UObject): FlipbookEditorSettings
        fun C(Other: Any): FlipbookEditorSettings
    }
}

external object ESpriteExtractMode {
    var Auto: String /* "Auto" */
    var Grid: String /* "Grid" */
    var ESpriteExtractMode_MAX: String /* "ESpriteExtractMode_MAX" */
}

external open class PaperExtractSpritesSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SpriteExtractMode: String /* "Auto" | "Grid" | "ESpriteExtractMode_MAX" */
    open var OutlineColor: LinearColor
    open var ViewportTextureTint: LinearColor
    open var BackgroundColor: LinearColor
    open var NamingTemplate: String
    open var NamingStartIndex: Number

    companion object {
        fun Load(ResourceName: String): PaperExtractSpritesSettings
        fun Find(Outer: UObject, ResourceName: String): PaperExtractSpritesSettings
        fun GetDefaultObject(): PaperExtractSpritesSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperExtractSpritesSettings
        fun C(Other: UObject): PaperExtractSpritesSettings
        fun C(Other: Any): PaperExtractSpritesSettings
    }
}

external open class PaperExtractSpriteGridSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var CellWidth: Number
    open var CellHeight: Number
    open var NumCellsX: Number
    open var NumCellsY: Number
    open var MarginX: Number
    open var MarginY: Number
    open var SpacingX: Number
    open var SpacingY: Number

    companion object {
        fun Load(ResourceName: String): PaperExtractSpriteGridSettings
        fun Find(Outer: UObject, ResourceName: String): PaperExtractSpriteGridSettings
        fun GetDefaultObject(): PaperExtractSpriteGridSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperExtractSpriteGridSettings
        fun C(Other: UObject): PaperExtractSpriteGridSettings
        fun C(Other: Any): PaperExtractSpriteGridSettings
    }
}

external open class PaperFlipbookActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperFlipbookActorFactory
        fun Find(Outer: UObject, ResourceName: String): PaperFlipbookActorFactory
        fun GetDefaultObject(): PaperFlipbookActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperFlipbookActorFactory
        fun C(Other: UObject): PaperFlipbookActorFactory
        fun C(Other: Any): PaperFlipbookActorFactory
    }
}

external open class PaperFlipbookFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperFlipbookFactory
        fun Find(Outer: UObject, ResourceName: String): PaperFlipbookFactory
        fun GetDefaultObject(): PaperFlipbookFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperFlipbookFactory
        fun C(Other: UObject): PaperFlipbookFactory
        fun C(Other: Any): PaperFlipbookFactory
    }
}

external open class PaperSpriteThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteThumbnailRenderer
        fun GetDefaultObject(): PaperSpriteThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteThumbnailRenderer
        fun C(Other: UObject): PaperSpriteThumbnailRenderer
        fun C(Other: Any): PaperSpriteThumbnailRenderer
    }
}

external open class PaperFlipbookThumbnailRenderer : PaperSpriteThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperFlipbookThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): PaperFlipbookThumbnailRenderer
        fun GetDefaultObject(): PaperFlipbookThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperFlipbookThumbnailRenderer
        fun C(Other: UObject): PaperFlipbookThumbnailRenderer
        fun C(Other: Any): PaperFlipbookThumbnailRenderer
    }
}

external open class PaperImporterSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bPickBestMaterialWhenCreatingSprites: Boolean
    open var bPickBestMaterialWhenCreatingTileMaps: Boolean
    open var bAnalysisCanUseOpaque: Boolean
    open var DefaultPixelsPerUnrealUnit: Number
    open var NormalMapTextureSuffixes: Array<String>
    open var BaseMapTextureSuffixes: Array<String>
    open var DefaultSpriteTextureGroup: String /* "TEXTUREGROUP_World" | "TEXTUREGROUP_WorldNormalMap" | "TEXTUREGROUP_WorldSpecular" | "TEXTUREGROUP_Character" | "TEXTUREGROUP_CharacterNormalMap" | "TEXTUREGROUP_CharacterSpecular" | "TEXTUREGROUP_Weapon" | "TEXTUREGROUP_WeaponNormalMap" | "TEXTUREGROUP_WeaponSpecular" | "TEXTUREGROUP_Vehicle" | "TEXTUREGROUP_VehicleNormalMap" | "TEXTUREGROUP_VehicleSpecular" | "TEXTUREGROUP_Cinematic" | "TEXTUREGROUP_Effects" | "TEXTUREGROUP_EffectsNotFiltered" | "TEXTUREGROUP_Skybox" | "TEXTUREGROUP_UI" | "TEXTUREGROUP_Lightmap" | "TEXTUREGROUP_RenderTarget" | "TEXTUREGROUP_MobileFlattened" | "TEXTUREGROUP_ProcBuilding_Face" | "TEXTUREGROUP_ProcBuilding_LightMap" | "TEXTUREGROUP_Shadowmap" | "TEXTUREGROUP_ColorLookupTable" | "TEXTUREGROUP_Terrain_Heightmap" | "TEXTUREGROUP_Terrain_Weightmap" | "TEXTUREGROUP_Bokeh" | "TEXTUREGROUP_IESLightProfile" | "TEXTUREGROUP_Pixels2D" | "TEXTUREGROUP_HierarchicalLOD" | "TEXTUREGROUP_Impostor" | "TEXTUREGROUP_ImpostorNormalDepth" | "TEXTUREGROUP_8BitData" | "TEXTUREGROUP_16BitData" | "TEXTUREGROUP_Project01" | "TEXTUREGROUP_Project02" | "TEXTUREGROUP_Project03" | "TEXTUREGROUP_Project04" | "TEXTUREGROUP_Project05" | "TEXTUREGROUP_Project06" | "TEXTUREGROUP_Project07" | "TEXTUREGROUP_Project08" | "TEXTUREGROUP_Project09" | "TEXTUREGROUP_Project10" | "TEXTUREGROUP_Project11" | "TEXTUREGROUP_Project12" | "TEXTUREGROUP_Project13" | "TEXTUREGROUP_Project14" | "TEXTUREGROUP_Project15" | "TEXTUREGROUP_MAX" */
    open var bOverrideTextureCompression: Boolean
    open var DefaultSpriteTextureCompression: String /* "TC_Default" | "TC_Normalmap" | "TC_Masks" | "TC_Grayscale" | "TC_Displacementmap" | "TC_VectorDisplacementmap" | "TC_HDR" | "TC_EditorIcon" | "TC_Alpha" | "TC_DistanceFieldFont" | "TC_HDR_Compressed" | "TC_BC7" | "TC_HalfFloat" | "TC_ReflectionCapture" | "TC_MAX" */
    open var UnlitDefaultMaskedMaterialName: SoftObjectPath
    open var UnlitDefaultTranslucentMaterialName: SoftObjectPath
    open var UnlitDefaultOpaqueMaterialName: SoftObjectPath
    open var LitDefaultMaskedMaterialName: SoftObjectPath
    open var LitDefaultTranslucentMaterialName: SoftObjectPath
    open var LitDefaultOpaqueMaterialName: SoftObjectPath

    companion object {
        fun Load(ResourceName: String): PaperImporterSettings
        fun Find(Outer: UObject, ResourceName: String): PaperImporterSettings
        fun GetDefaultObject(): PaperImporterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperImporterSettings
        fun C(Other: UObject): PaperImporterSettings
        fun C(Other: Any): PaperImporterSettings
    }
}

external open class PaperSpriteActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteActorFactory
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteActorFactory
        fun GetDefaultObject(): PaperSpriteActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteActorFactory
        fun C(Other: UObject): PaperSpriteActorFactory
        fun C(Other: Any): PaperSpriteActorFactory
    }
}

external open class PaperSpriteAtlasFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteAtlasFactory
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteAtlasFactory
        fun GetDefaultObject(): PaperSpriteAtlasFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteAtlasFactory
        fun C(Other: UObject): PaperSpriteAtlasFactory
        fun C(Other: Any): PaperSpriteAtlasFactory
    }
}

external open class PaperSpriteFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteFactory
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteFactory
        fun GetDefaultObject(): PaperSpriteFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteFactory
        fun C(Other: UObject): PaperSpriteFactory
        fun C(Other: Any): PaperSpriteFactory
    }
}

external open class PaperTileMapFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperTileMapFactory
        fun Find(Outer: UObject, ResourceName: String): PaperTileMapFactory
        fun GetDefaultObject(): PaperTileMapFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperTileMapFactory
        fun C(Other: UObject): PaperTileMapFactory
        fun C(Other: Any): PaperTileMapFactory
    }
}

external open class PaperTileMapPromotionFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var AssetToRename: PaperTileMap

    companion object {
        fun Load(ResourceName: String): PaperTileMapPromotionFactory
        fun Find(Outer: UObject, ResourceName: String): PaperTileMapPromotionFactory
        fun GetDefaultObject(): PaperTileMapPromotionFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperTileMapPromotionFactory
        fun C(Other: UObject): PaperTileMapPromotionFactory
        fun C(Other: Any): PaperTileMapPromotionFactory
    }
}

external open class PaperTileSetFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperTileSetFactory
        fun Find(Outer: UObject, ResourceName: String): PaperTileSetFactory
        fun GetDefaultObject(): PaperTileSetFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperTileSetFactory
        fun C(Other: UObject): PaperTileSetFactory
        fun C(Other: Any): PaperTileSetFactory
    }
}

external open class PaperTileSetThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperTileSetThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): PaperTileSetThumbnailRenderer
        fun GetDefaultObject(): PaperTileSetThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperTileSetThumbnailRenderer
        fun C(Other: UObject): PaperTileSetThumbnailRenderer
        fun C(Other: Any): PaperTileSetThumbnailRenderer
    }
}

external open class SpriteEditorSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BackgroundColor: Color
    open var bShowGridByDefault: Boolean

    companion object {
        fun Load(ResourceName: String): SpriteEditorSettings
        fun Find(Outer: UObject, ResourceName: String): SpriteEditorSettings
        fun GetDefaultObject(): SpriteEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SpriteEditorSettings
        fun C(Other: UObject): SpriteEditorSettings
        fun C(Other: Any): SpriteEditorSettings
    }
}

external open class TerrainSplineActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TerrainSplineActorFactory
        fun Find(Outer: UObject, ResourceName: String): TerrainSplineActorFactory
        fun GetDefaultObject(): TerrainSplineActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TerrainSplineActorFactory
        fun C(Other: UObject): TerrainSplineActorFactory
        fun C(Other: Any): TerrainSplineActorFactory
    }
}

external open class TileMapActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TileMapActorFactory
        fun Find(Outer: UObject, ResourceName: String): TileMapActorFactory
        fun GetDefaultObject(): TileMapActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TileMapActorFactory
        fun C(Other: UObject): TileMapActorFactory
        fun C(Other: Any): TileMapActorFactory
    }
}

external open class TileSetImportMapping {
    open var SourceName: String
    open var ImportedTileSet: Any
    open var ImportedTexture: Any
    open fun clone(): TileSetImportMapping

    companion object {
        fun C(Other: UObject): TileSetImportMapping
        fun C(Other: Any): TileSetImportMapping
    }
}

external open class TileMapAssetImportData : AssetImportData {
    constructor()
    constructor(Outer: UObject)
    open var TileSetMap: Array<TileSetImportMapping>

    companion object {
        fun Load(ResourceName: String): TileMapAssetImportData
        fun Find(Outer: UObject, ResourceName: String): TileMapAssetImportData
        fun GetDefaultObject(): TileMapAssetImportData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TileMapAssetImportData
        fun C(Other: UObject): TileMapAssetImportData
        fun C(Other: Any): TileMapAssetImportData
    }
}

external open class TileMapEditorSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var DefaultBackgroundColor: Color
    open var bShowGridByDefault: Boolean
    open var DefaultTileGridColor: Color
    open var DefaultMultiTileGridColor: Color
    open var DefaultMultiTileGridWidth: Number
    open var DefaultMultiTileGridHeight: Number
    open var DefaultMultiTileGridOffsetX: Number
    open var DefaultMultiTileGridOffsetY: Number
    open var DefaultLayerGridColor: Color

    companion object {
        fun Load(ResourceName: String): TileMapEditorSettings
        fun Find(Outer: UObject, ResourceName: String): TileMapEditorSettings
        fun GetDefaultObject(): TileMapEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TileMapEditorSettings
        fun C(Other: UObject): TileMapEditorSettings
        fun C(Other: Any): TileMapEditorSettings
    }
}

external open class TileSetEditorSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var DefaultBackgroundColor: Color
    open var bShowGridByDefault: Boolean
    open var ExtrusionAmount: Number
    open var bPadToPowerOf2: Boolean
    open var bFillWithTransparentBlack: Boolean

    companion object {
        fun Load(ResourceName: String): TileSetEditorSettings
        fun Find(Outer: UObject, ResourceName: String): TileSetEditorSettings
        fun GetDefaultObject(): TileSetEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TileSetEditorSettings
        fun C(Other: UObject): TileSetEditorSettings
        fun C(Other: Any): TileSetEditorSettings
    }
}

external open class TileSheetPaddingFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var SourceTileSet: PaperTileSet
    open var ExtrusionAmount: Number
    open var bPadToPowerOf2: Boolean
    open var bFillWithTransparentBlack: Boolean

    companion object {
        fun Load(ResourceName: String): TileSheetPaddingFactory
        fun Find(Outer: UObject, ResourceName: String): TileSheetPaddingFactory
        fun GetDefaultObject(): TileSheetPaddingFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TileSheetPaddingFactory
        fun C(Other: UObject): TileSheetPaddingFactory
        fun C(Other: Any): TileSheetPaddingFactory
    }
}

external open class PaperSpriteSheet : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SpriteNames: Array<String>
    open var Sprites: Array<PaperSprite>
    open var TextureName: String
    open var Texture: Texture2D
    open var NormalMapTextureName: String
    open var NormalMapTexture: Texture2D
    open var AssetImportData: AssetImportData

    companion object {
        fun Load(ResourceName: String): PaperSpriteSheet
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteSheet
        fun GetDefaultObject(): PaperSpriteSheet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteSheet
        fun C(Other: UObject): PaperSpriteSheet
        fun C(Other: Any): PaperSpriteSheet
    }
}

external open class PaperSpriteSheetImportFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteSheetImportFactory
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteSheetImportFactory
        fun GetDefaultObject(): PaperSpriteSheetImportFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteSheetImportFactory
        fun C(Other: UObject): PaperSpriteSheetImportFactory
        fun C(Other: Any): PaperSpriteSheetImportFactory
    }
}

external open class PaperSpriteSheetReimportFactory : PaperSpriteSheetImportFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperSpriteSheetReimportFactory
        fun Find(Outer: UObject, ResourceName: String): PaperSpriteSheetReimportFactory
        fun GetDefaultObject(): PaperSpriteSheetReimportFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperSpriteSheetReimportFactory
        fun C(Other: UObject): PaperSpriteSheetReimportFactory
        fun C(Other: Any): PaperSpriteSheetReimportFactory
    }
}

external open class PaperTiledImporterFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PaperTiledImporterFactory
        fun Find(Outer: UObject, ResourceName: String): PaperTiledImporterFactory
        fun GetDefaultObject(): PaperTiledImporterFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaperTiledImporterFactory
        fun C(Other: UObject): PaperTiledImporterFactory
        fun C(Other: Any): PaperTiledImporterFactory
    }
}

external open class LightPropagationVolumeBlendableFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LightPropagationVolumeBlendableFactory
        fun Find(Outer: UObject, ResourceName: String): LightPropagationVolumeBlendableFactory
        fun GetDefaultObject(): LightPropagationVolumeBlendableFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LightPropagationVolumeBlendableFactory
        fun C(Other: UObject): LightPropagationVolumeBlendableFactory
        fun C(Other: Any): LightPropagationVolumeBlendableFactory
    }
}

external open class AnimationSharingSetupFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AnimationSharingSetupFactory
        fun Find(Outer: UObject, ResourceName: String): AnimationSharingSetupFactory
        fun GetDefaultObject(): AnimationSharingSetupFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AnimationSharingSetupFactory
        fun C(Other: UObject): AnimationSharingSetupFactory
        fun C(Other: Any): AnimationSharingSetupFactory
    }
}

external open class MyPluginStruct {
    open var TestString: String
    open fun clone(): MyPluginStruct

    companion object {
        fun C(Other: UObject): MyPluginStruct
        fun C(Other: Any): MyPluginStruct
    }
}

external open class MyPluginObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var MyStruct: MyPluginStruct

    companion object {
        fun Load(ResourceName: String): MyPluginObject
        fun Find(Outer: UObject, ResourceName: String): MyPluginObject
        fun GetDefaultObject(): MyPluginObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MyPluginObject
        fun C(Other: UObject): MyPluginObject
        fun C(Other: Any): MyPluginObject
    }
}

external open class LevelVariantSetsActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LevelVariantSetsActorFactory
        fun Find(Outer: UObject, ResourceName: String): LevelVariantSetsActorFactory
        fun GetDefaultObject(): LevelVariantSetsActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LevelVariantSetsActorFactory
        fun C(Other: UObject): LevelVariantSetsActorFactory
        fun C(Other: Any): LevelVariantSetsActorFactory
    }
}

external open class SwitchActorFactory : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SwitchActorFactory
        fun Find(Outer: UObject, ResourceName: String): SwitchActorFactory
        fun GetDefaultObject(): SwitchActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SwitchActorFactory
        fun C(Other: UObject): SwitchActorFactory
        fun C(Other: Any): SwitchActorFactory
    }
}

external open class VariantManagerFactoryNew : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VariantManagerFactoryNew
        fun Find(Outer: UObject, ResourceName: String): VariantManagerFactoryNew
        fun GetDefaultObject(): VariantManagerFactoryNew
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VariantManagerFactoryNew
        fun C(Other: UObject): VariantManagerFactoryNew
        fun C(Other: Any): VariantManagerFactoryNew
    }
}

external object EVariantManagerTestEnum {
    var None: String /* "None" */
    var FirstOption: String /* "FirstOption" */
    var SecondOption: String /* "SecondOption" */
    var ThirdOption: String /* "ThirdOption" */
    var EVariantManagerTestEnum_MAX: String /* "EVariantManagerTestEnum_MAX" */
}

external open class VariantManagerTestActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var EnumWithNoDefault: String /* "None" | "FirstOption" | "SecondOption" | "ThirdOption" | "EVariantManagerTestEnum_MAX" */
    open var EnumWithSecondDefault: String /* "None" | "FirstOption" | "SecondOption" | "ThirdOption" | "EVariantManagerTestEnum_MAX" */
    open var CapturedByteProperty: Number
    open var CapturedIntProperty: Number
    open var CapturedFloatProperty: Number
    open var bCapturedBoolProperty: Boolean
    open var CapturedObjectProperty: UObject
    open var CapturedInterfaceProperty: Any
    open var CapturedNameProperty: String
    open var CapturedStrProperty: String
    open var CapturedTextProperty: String
    open var CapturedRotatorProperty: Rotator
    open var CapturedColorProperty: Color
    open var CapturedLinearColorProperty: LinearColor
    open var CapturedVectorProperty: Vector
    open var CapturedQuatProperty: Quat
    open var CapturedVector4Property: Vector4
    open var CapturedVector2DProperty: Vector2D
    open var CapturedIntPointProperty: IntPoint
    open var CapturedUObjectArrayProperty: Array<UObject>
    open var CapturedVectorArrayProperty: Array<Vector>

    companion object {
        fun GetDefaultObject(): VariantManagerTestActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VariantManagerTestActor
        fun C(Other: UObject): VariantManagerTestActor
        fun C(Other: Any): VariantManagerTestActor
    }
}

external open class GeometryCacheTrack : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Duration: Number

    companion object {
        fun Load(ResourceName: String): GeometryCacheTrack
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheTrack
        fun GetDefaultObject(): GeometryCacheTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheTrack
        fun C(Other: UObject): GeometryCacheTrack
        fun C(Other: Any): GeometryCacheTrack
    }
}

external open class GeometryCache : UObject {
    constructor()
    constructor(Outer: UObject)
    open var AssetImportData: AssetImportData
    open var ThumbnailInfo: ThumbnailInfo
    open var Materials: Array<MaterialInterface>
    open var Tracks: Array<GeometryCacheTrack>
    open var StartFrame: Number
    open var EndFrame: Number

    companion object {
        fun Load(ResourceName: String): GeometryCache
        fun Find(Outer: UObject, ResourceName: String): GeometryCache
        fun GetDefaultObject(): GeometryCache
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCache
        fun C(Other: UObject): GeometryCache
        fun C(Other: Any): GeometryCache
    }
}

external open class GeometryCacheComponent : MeshComponent {
    constructor()
    constructor(Outer: UObject)
    open var GeometryCache: GeometryCache
    open var bRunning: Boolean
    open var bLooping: Boolean
    open var StartTimeOffset: Number
    open var PlaybackSpeed: Number
    open var NumTracks: Number
    open var ElapsedTime: Number
    open var Duration: Number
    open var bManualTick: Boolean
    open fun TickAtThisTime(Time: Number, bInIsRunning: Boolean, bInBackwards: Boolean, bInIsLooping: Boolean)
    open fun Stop()
    open fun SetStartTimeOffset(NewStartTimeOffset: Number)
    open fun SetPlaybackSpeed(NewPlaybackSpeed: Number)
    open fun SetLooping(bNewLooping: Boolean)
    open fun SetGeometryCache(NewGeomCache: GeometryCache): Boolean
    open fun PlayReversedFromEnd()
    open fun PlayReversed()
    open fun PlayFromStart()
    open fun Play()
    open fun Pause()
    open fun IsPlayingReversed(): Boolean
    open fun IsPlaying(): Boolean
    open fun IsLooping(): Boolean
    open fun GetStartTimeOffset(): Number
    open fun GetPlaybackSpeed(): Number
    open fun GetPlaybackDirection(): Number
    open fun GetNumberOfFrames(): Number
    open fun GetDuration(): Number
    open fun GetAnimationTime(): Number

    companion object {
        fun Load(ResourceName: String): GeometryCacheComponent
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheComponent
        fun GetDefaultObject(): GeometryCacheComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheComponent
        fun C(Other: UObject): GeometryCacheComponent
        fun C(Other: Any): GeometryCacheComponent
    }
}

external open class GeometryCacheActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var GeometryCacheComponent: GeometryCacheComponent
    open fun GetGeometryCacheComponent(): GeometryCacheComponent

    companion object {
        fun GetDefaultObject(): GeometryCacheActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheActor
        fun C(Other: UObject): GeometryCacheActor
        fun C(Other: Any): GeometryCacheActor
    }
}

external open class GeometryCacheCodecBase : UObject {
    constructor()
    constructor(Outer: UObject)
    open var TopologyRanges: Array<Number>

    companion object {
        fun Load(ResourceName: String): GeometryCacheCodecBase
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheCodecBase
        fun GetDefaultObject(): GeometryCacheCodecBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheCodecBase
        fun C(Other: UObject): GeometryCacheCodecBase
        fun C(Other: Any): GeometryCacheCodecBase
    }
}

external open class GeometryCacheCodecRaw : GeometryCacheCodecBase {
    constructor()
    constructor(Outer: UObject)
    open var DummyProperty: Number

    companion object {
        fun Load(ResourceName: String): GeometryCacheCodecRaw
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheCodecRaw
        fun GetDefaultObject(): GeometryCacheCodecRaw
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheCodecRaw
        fun C(Other: UObject): GeometryCacheCodecRaw
        fun C(Other: Any): GeometryCacheCodecRaw
    }
}

external open class GeometryCacheCodecV1 : GeometryCacheCodecBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GeometryCacheCodecV1
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheCodecV1
        fun GetDefaultObject(): GeometryCacheCodecV1
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheCodecV1
        fun C(Other: UObject): GeometryCacheCodecV1
        fun C(Other: Any): GeometryCacheCodecV1
    }
}

external open class GeometryCacheMeshData {
    open fun clone(): GeometryCacheMeshData

    companion object {
        fun C(Other: UObject): GeometryCacheMeshData
        fun C(Other: Any): GeometryCacheMeshData
    }
}

external open class GeometryCacheTrack_FlipbookAnimation : GeometryCacheTrack {
    constructor()
    constructor(Outer: UObject)
    open var NumMeshSamples: Any
    open fun AddMeshSample(MeshData: GeometryCacheMeshData, SampleTime: Number)

    companion object {
        fun Load(ResourceName: String): GeometryCacheTrack_FlipbookAnimation
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheTrack_FlipbookAnimation
        fun GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheTrack_FlipbookAnimation
        fun C(Other: UObject): GeometryCacheTrack_FlipbookAnimation
        fun C(Other: Any): GeometryCacheTrack_FlipbookAnimation
    }
}

external open class GeometryCacheTrackStreamable : GeometryCacheTrack {
    constructor()
    constructor(Outer: UObject)
    open var Codec: GeometryCacheCodecBase
    open var StartSampleTime: Number

    companion object {
        fun Load(ResourceName: String): GeometryCacheTrackStreamable
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheTrackStreamable
        fun GetDefaultObject(): GeometryCacheTrackStreamable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheTrackStreamable
        fun C(Other: UObject): GeometryCacheTrackStreamable
        fun C(Other: Any): GeometryCacheTrackStreamable
    }
}

external open class GeometryCacheTrack_TransformAnimation : GeometryCacheTrack {
    constructor()
    constructor(Outer: UObject)
    open fun SetMesh(NewMeshData: GeometryCacheMeshData)

    companion object {
        fun Load(ResourceName: String): GeometryCacheTrack_TransformAnimation
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheTrack_TransformAnimation
        fun GetDefaultObject(): GeometryCacheTrack_TransformAnimation
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheTrack_TransformAnimation
        fun C(Other: UObject): GeometryCacheTrack_TransformAnimation
        fun C(Other: Any): GeometryCacheTrack_TransformAnimation
    }
}

external open class GeometryCacheTrack_TransformGroupAnimation : GeometryCacheTrack {
    constructor()
    constructor(Outer: UObject)
    open fun SetMesh(NewMeshData: GeometryCacheMeshData)

    companion object {
        fun Load(ResourceName: String): GeometryCacheTrack_TransformGroupAnimation
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheTrack_TransformGroupAnimation
        fun GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheTrack_TransformGroupAnimation
        fun C(Other: UObject): GeometryCacheTrack_TransformGroupAnimation
        fun C(Other: Any): GeometryCacheTrack_TransformGroupAnimation
    }
}

external object EAlembicSamplingType {
    var PerFrame: String /* "PerFrame" */
    var PerXFrames: String /* "PerXFrames" */
    var PerTimeStep: String /* "PerTimeStep" */
    var EAlembicSamplingType_MAX: String /* "EAlembicSamplingType_MAX" */
}

external open class AbcSamplingSettings {
    open var SamplingType: String /* "PerFrame" | "PerXFrames" | "PerTimeStep" | "EAlembicSamplingType_MAX" */
    open var FrameSteps: Number
    open var TimeSteps: Number
    open var FrameStart: Number
    open var FrameEnd: Number
    open var bSkipEmpty: Boolean
    open fun clone(): AbcSamplingSettings

    companion object {
        fun C(Other: UObject): AbcSamplingSettings
        fun C(Other: Any): AbcSamplingSettings
    }
}

external open class AbcAssetImportData : AssetImportData {
    constructor()
    constructor(Outer: UObject)
    open var TrackNames: Array<String>
    open var SamplingSettings: AbcSamplingSettings

    companion object {
        fun Load(ResourceName: String): AbcAssetImportData
        fun Find(Outer: UObject, ResourceName: String): AbcAssetImportData
        fun GetDefaultObject(): AbcAssetImportData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AbcAssetImportData
        fun C(Other: UObject): AbcAssetImportData
        fun C(Other: Any): AbcAssetImportData
    }
}

external object EAlembicImportType {
    var StaticMesh: String /* "StaticMesh" */
    var GeometryCache: String /* "GeometryCache" */
    var Skeletal: String /* "Skeletal" */
    var EAlembicImportType_MAX: String /* "EAlembicImportType_MAX" */
}

external open class AbcNormalGenerationSettings {
    open var bForceOneSmoothingGroupPerObject: Boolean
    open var HardEdgeAngleThreshold: Number
    open var bRecomputeNormals: Boolean
    open var bIgnoreDegenerateTriangles: Boolean
    open var bSkipComputingTangents: Boolean
    open fun clone(): AbcNormalGenerationSettings

    companion object {
        fun C(Other: UObject): AbcNormalGenerationSettings
        fun C(Other: Any): AbcNormalGenerationSettings
    }
}

external open class AbcMaterialSettings {
    open var bCreateMaterials: Boolean
    open var bFindMaterials: Boolean
    open fun clone(): AbcMaterialSettings

    companion object {
        fun C(Other: UObject): AbcMaterialSettings
        fun C(Other: Any): AbcMaterialSettings
    }
}

external object EBaseCalculationType {
    var None: String /* "None" */
    var PercentageBased: String /* "PercentageBased" */
    var FixedNumber: String /* "FixedNumber" */
    var NoCompression: String /* "NoCompression" */
    var EBaseCalculationType_MAX: String /* "EBaseCalculationType_MAX" */
}

external open class AbcCompressionSettings {
    open var bMergeMeshes: Boolean
    open var bBakeMatrixAnimation: Boolean
    open var BaseCalculationType: String /* "None" | "PercentageBased" | "FixedNumber" | "NoCompression" | "EBaseCalculationType_MAX" */
    open var PercentageOfTotalBases: Number
    open var MaxNumberOfBases: Number
    open var MinimumNumberOfVertexInfluencePercentage: Number
    open fun clone(): AbcCompressionSettings

    companion object {
        fun C(Other: UObject): AbcCompressionSettings
        fun C(Other: Any): AbcCompressionSettings
    }
}

external open class AbcStaticMeshSettings {
    open var bMergeMeshes: Boolean
    open var bPropagateMatrixTransformations: Boolean
    open var bGenerateLightmapUVs: Boolean
    open fun clone(): AbcStaticMeshSettings

    companion object {
        fun C(Other: UObject): AbcStaticMeshSettings
        fun C(Other: Any): AbcStaticMeshSettings
    }
}

external object EAbcGeometryCacheMotionVectorsImport {
    var NoMotionVectors: String /* "NoMotionVectors" */
    var ImportAbcVelocitiesAsMotionVectors: String /* "ImportAbcVelocitiesAsMotionVectors" */
    var CalculateMotionVectorsDuringImport: String /* "CalculateMotionVectorsDuringImport" */
    var EAbcGeometryCacheMotionVectorsImport_MAX: String /* "EAbcGeometryCacheMotionVectorsImport_MAX" */
}

external open class AbcGeometryCacheSettings {
    open var bFlattenTracks: Boolean
    open var bApplyConstantTopologyOptimizations: Boolean
    open var bCalculateMotionVectorsDuringImport: Boolean
    open var MotionVectors: String /* "NoMotionVectors" | "ImportAbcVelocitiesAsMotionVectors" | "CalculateMotionVectorsDuringImport" | "EAbcGeometryCacheMotionVectorsImport_MAX" */
    open var bOptimizeIndexBuffers: Boolean
    open var CompressedPositionPrecision: Number
    open var CompressedTextureCoordinatesNumberOfBits: Number
    open fun clone(): AbcGeometryCacheSettings

    companion object {
        fun C(Other: UObject): AbcGeometryCacheSettings
        fun C(Other: Any): AbcGeometryCacheSettings
    }
}

external object EAbcConversionPreset {
    var Maya: String /* "Maya" */
    var Max: String /* "Max" */
    var Custom: String /* "Custom" */
    var EAbcConversionPreset_MAX: String /* "EAbcConversionPreset_MAX" */
}

external open class AbcConversionSettings {
    open var Preset: String /* "Maya" | "Max" | "Custom" | "EAbcConversionPreset_MAX" */
    open var bFlipU: Boolean
    open var bFlipV: Boolean
    open var Scale: Vector
    open var Rotation: Vector
    open fun clone(): AbcConversionSettings

    companion object {
        fun C(Other: UObject): AbcConversionSettings
        fun C(Other: Any): AbcConversionSettings
    }
}

external open class AbcImportSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ImportType: String /* "StaticMesh" | "GeometryCache" | "Skeletal" | "EAlembicImportType_MAX" */
    open var SamplingSettings: AbcSamplingSettings
    open var NormalGenerationSettings: AbcNormalGenerationSettings
    open var MaterialSettings: AbcMaterialSettings
    open var CompressionSettings: AbcCompressionSettings
    open var StaticMeshSettings: AbcStaticMeshSettings
    open var GeometryCacheSettings: AbcGeometryCacheSettings
    open var ConversionSettings: AbcConversionSettings

    companion object {
        fun Load(ResourceName: String): AbcImportSettings
        fun Find(Outer: UObject, ResourceName: String): AbcImportSettings
        fun GetDefaultObject(): AbcImportSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AbcImportSettings
        fun C(Other: UObject): AbcImportSettings
        fun C(Other: Any): AbcImportSettings
    }
}

external open class AlembicTestCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AlembicTestCommandlet
        fun Find(Outer: UObject, ResourceName: String): AlembicTestCommandlet
        fun GetDefaultObject(): AlembicTestCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AlembicTestCommandlet
        fun C(Other: UObject): AlembicTestCommandlet
        fun C(Other: Any): AlembicTestCommandlet
    }
}

external open class AlembicImportFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var ImportSettings: AbcImportSettings
    open var bShowOption: Boolean

    companion object {
        fun Load(ResourceName: String): AlembicImportFactory
        fun Find(Outer: UObject, ResourceName: String): AlembicImportFactory
        fun GetDefaultObject(): AlembicImportFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AlembicImportFactory
        fun C(Other: UObject): AlembicImportFactory
        fun C(Other: Any): AlembicImportFactory
    }
}

external open class ActorFactoryGeometryCache : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryGeometryCache
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryGeometryCache
        fun GetDefaultObject(): ActorFactoryGeometryCache
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryGeometryCache
        fun C(Other: UObject): ActorFactoryGeometryCache
        fun C(Other: Any): ActorFactoryGeometryCache
    }
}

external open class GeometryCacheThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GeometryCacheThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): GeometryCacheThumbnailRenderer
        fun GetDefaultObject(): GeometryCacheThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCacheThumbnailRenderer
        fun C(Other: UObject): GeometryCacheThumbnailRenderer
        fun C(Other: Any): GeometryCacheThumbnailRenderer
    }
}

external open class AutomationUtilsBlueprintLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AutomationUtilsBlueprintLibrary
        fun Find(Outer: UObject, ResourceName: String): AutomationUtilsBlueprintLibrary
        fun GetDefaultObject(): AutomationUtilsBlueprintLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AutomationUtilsBlueprintLibrary
        fun TakeGameplayAutomationScreenshot(ScreenShotName: String, MaxGlobalError: Number, MaxLocalError: Number, MapNameOverride: String)
        fun C(Other: UObject): AutomationUtilsBlueprintLibrary
        fun C(Other: Any): AutomationUtilsBlueprintLibrary
    }
}

external open class ScreenshotComparisonCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ScreenshotComparisonCommandlet
        fun Find(Outer: UObject, ResourceName: String): ScreenshotComparisonCommandlet
        fun GetDefaultObject(): ScreenshotComparisonCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ScreenshotComparisonCommandlet
        fun C(Other: UObject): ScreenshotComparisonCommandlet
        fun C(Other: Any): ScreenshotComparisonCommandlet
    }
}

external open class ChaosDebugDrawComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosDebugDrawComponent
        fun Find(Outer: UObject, ResourceName: String): ChaosDebugDrawComponent
        fun GetDefaultObject(): ChaosDebugDrawComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosDebugDrawComponent
        fun C(Other: UObject): ChaosDebugDrawComponent
        fun C(Other: Any): ChaosDebugDrawComponent
    }
}

external open class ChaosEventListenerComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosEventListenerComponent
        fun Find(Outer: UObject, ResourceName: String): ChaosEventListenerComponent
        fun GetDefaultObject(): ChaosEventListenerComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosEventListenerComponent
        fun C(Other: UObject): ChaosEventListenerComponent
        fun C(Other: Any): ChaosEventListenerComponent
    }
}

external open class ChaosGameplayEventDispatcher : ChaosEventListenerComponent {
    constructor()
    constructor(Outer: UObject)
    open var CollisionEventRegistrations: Any
    open var BreakEventRegistrations: Any

    companion object {
        fun Load(ResourceName: String): ChaosGameplayEventDispatcher
        fun Find(Outer: UObject, ResourceName: String): ChaosGameplayEventDispatcher
        fun GetDefaultObject(): ChaosGameplayEventDispatcher
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosGameplayEventDispatcher
        fun C(Other: UObject): ChaosGameplayEventDispatcher
        fun C(Other: Any): ChaosGameplayEventDispatcher
    }
}

external open class ChaosNotifyHandlerInterface : Interface {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosNotifyHandlerInterface
        fun Find(Outer: UObject, ResourceName: String): ChaosNotifyHandlerInterface
        fun GetDefaultObject(): ChaosNotifyHandlerInterface
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosNotifyHandlerInterface
        fun C(Other: UObject): ChaosNotifyHandlerInterface
        fun C(Other: Any): ChaosNotifyHandlerInterface
    }
}

external open class ChaosPhysicsCollisionInfo {
    open var Component: PrimitiveComponent
    open var OtherComponent: PrimitiveComponent
    open var Location: Vector
    open var Normal: Vector
    open var AccumulatedImpulse: Vector
    open var Velocity: Vector
    open var OtherVelocity: Vector
    open var AngularVelocity: Vector
    open var OtherAngularVelocity: Vector
    open var Mass: Number
    open var OtherMass: Number
    open fun clone(): ChaosPhysicsCollisionInfo
    open fun ConvertPhysicsCollisionToHitResult(): HitResult

    companion object {
        fun C(Other: UObject): ChaosPhysicsCollisionInfo
        fun C(Other: Any): ChaosPhysicsCollisionInfo
        fun ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult
    }
}

external open class ChaosSolverEngineBlueprintLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosSolverEngineBlueprintLibrary
        fun Find(Outer: UObject, ResourceName: String): ChaosSolverEngineBlueprintLibrary
        fun GetDefaultObject(): ChaosSolverEngineBlueprintLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosSolverEngineBlueprintLibrary
        fun ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult
        fun C(Other: UObject): ChaosSolverEngineBlueprintLibrary
        fun C(Other: Any): ChaosSolverEngineBlueprintLibrary
    }
}

external open class ChaosSolver : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosSolver
        fun Find(Outer: UObject, ResourceName: String): ChaosSolver
        fun GetDefaultObject(): ChaosSolver
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosSolver
        fun C(Other: UObject): ChaosSolver
        fun C(Other: Any): ChaosSolver
    }
}

external object EClusterConnectionTypeEnum {
    var Chaos_PointImplicit: String /* "Chaos_PointImplicit" */
    var Chaos_DelaunayTriangulation: String /* "Chaos_DelaunayTriangulation" */
    var Chaos_MinimalSpanningSubsetDelaunayTriangulation: String /* "Chaos_MinimalSpanningSubsetDelaunayTriangulation" */
    var Chaos_PointImplicitAugmentedWithMinimalDelaunay: String /* "Chaos_PointImplicitAugmentedWithMinimalDelaunay" */
    var Chaos_None: String /* "Chaos_None" */
    var Chaos_EClsuterCreationParameters_Max: String /* "Chaos_EClsuterCreationParameters_Max" */
    var Chaos_MAX: String /* "Chaos_MAX" */
}

external open class ChaosDebugSubstepControl {
    open var bPause: Boolean
    open var bSubstep: Boolean
    open var bStep: Boolean
    open fun clone(): ChaosDebugSubstepControl

    companion object {
        fun C(Other: UObject): ChaosDebugSubstepControl
        fun C(Other: Any): ChaosDebugSubstepControl
    }
}

external open class ChaosSolverActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var Properties: ChaosSolverConfiguration
    open var TimeStepMultiplier: Number
    open var CollisionIterations: Number
    open var PushOutIterations: Number
    open var PushOutPairIterations: Number
    open var ClusterConnectionFactor: Number
    open var ClusterUnionConnectionType: String /* "Chaos_PointImplicit" | "Chaos_DelaunayTriangulation" | "Chaos_MinimalSpanningSubsetDelaunayTriangulation" | "Chaos_PointImplicitAugmentedWithMinimalDelaunay" | "Chaos_None" | "Chaos_EClsuterCreationParameters_Max" | "Chaos_MAX" */
    open var DoGenerateCollisionData: Boolean
    open var CollisionFilterSettings: SolverCollisionFilterSettings
    open var DoGenerateBreakingData: Boolean
    open var BreakingFilterSettings: SolverBreakingFilterSettings
    open var DoGenerateTrailingData: Boolean
    open var TrailingFilterSettings: SolverTrailingFilterSettings
    open var MassScale: Number
    open var bGenerateContactGraph: Boolean
    open var bHasFloor: Boolean
    open var FloorHeight: Number
    open var ChaosDebugSubstepControl: ChaosDebugSubstepControl
    open var SpriteComponent: BillboardComponent
    open var GameplayEventDispatcherComponent: ChaosGameplayEventDispatcher
    open fun SetSolverActive(bActive: Boolean)
    open fun SetAsCurrentWorldSolver()

    companion object {
        fun GetDefaultObject(): ChaosSolverActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosSolverActor
        fun C(Other: UObject): ChaosSolverActor
        fun C(Other: Any): ChaosSolverActor
    }
}

external open class ChaosSolverSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)
    open var DefaultChaosSolverActorClass: SoftClassPath

    companion object {
        fun Load(ResourceName: String): ChaosSolverSettings
        fun Find(Outer: UObject, ResourceName: String): ChaosSolverSettings
        fun GetDefaultObject(): ChaosSolverSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosSolverSettings
        fun C(Other: UObject): ChaosSolverSettings
        fun C(Other: Any): ChaosSolverSettings
    }
}

external open class ActorFactoryChaosSolver : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryChaosSolver
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryChaosSolver
        fun GetDefaultObject(): ActorFactoryChaosSolver
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryChaosSolver
        fun C(Other: UObject): ActorFactoryChaosSolver
        fun C(Other: Any): ActorFactoryChaosSolver
    }
}

external open class ChaosSolverFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ChaosSolverFactory
        fun Find(Outer: UObject, ResourceName: String): ChaosSolverFactory
        fun GetDefaultObject(): ChaosSolverFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosSolverFactory
        fun C(Other: UObject): ChaosSolverFactory
        fun C(Other: Any): ChaosSolverFactory
    }
}

external open class FieldSystem : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldSystem
        fun Find(Outer: UObject, ResourceName: String): FieldSystem
        fun GetDefaultObject(): FieldSystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystem
        fun C(Other: UObject): FieldSystem
        fun C(Other: Any): FieldSystem
    }
}

external object EFieldPhysicsType {
    var Field_None: String /* "Field_None" */
    var Field_DynamicState: String /* "Field_DynamicState" */
    var Field_LinearForce: String /* "Field_LinearForce" */
    var Field_ExternalClusterStrain: String /* "Field_ExternalClusterStrain" */
    var Field_Kill: String /* "Field_Kill" */
    var Field_LinearVelocity: String /* "Field_LinearVelocity" */
    var Field_AngularVelociy: String /* "Field_AngularVelociy" */
    var Field_AngularTorque: String /* "Field_AngularTorque" */
    var Field_InternalClusterStrain: String /* "Field_InternalClusterStrain" */
    var Field_DisableThreshold: String /* "Field_DisableThreshold" */
    var Field_SleepingThreshold: String /* "Field_SleepingThreshold" */
    var Field_PositionStatic: String /* "Field_PositionStatic" */
    var Field_PositionAnimated: String /* "Field_PositionAnimated" */
    var Field_PositionTarget: String /* "Field_PositionTarget" */
    var Field_DynamicConstraint: String /* "Field_DynamicConstraint" */
    var Field_CollisionGroup: String /* "Field_CollisionGroup" */
    var Field_ActivateDisabled: String /* "Field_ActivateDisabled" */
    var Field_PhysicsType_Max: String /* "Field_PhysicsType_Max" */
}

external open class FieldSystemMetaData : ActorComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldSystemMetaData
        fun Find(Outer: UObject, ResourceName: String): FieldSystemMetaData
        fun GetDefaultObject(): FieldSystemMetaData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystemMetaData
        fun C(Other: UObject): FieldSystemMetaData
        fun C(Other: Any): FieldSystemMetaData
    }
}

external open class FieldNodeBase : ActorComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldNodeBase
        fun Find(Outer: UObject, ResourceName: String): FieldNodeBase
        fun GetDefaultObject(): FieldNodeBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldNodeBase
        fun C(Other: UObject): FieldNodeBase
        fun C(Other: Any): FieldNodeBase
    }
}

external open class FieldSystemComponent : PrimitiveComponent {
    constructor()
    constructor(Outer: UObject)
    open var FieldSystem: FieldSystem
    open var SupportedSolvers: Array<ChaosSolverActor>
    open fun ResetFieldSystem()
    open fun ApplyUniformVectorFalloffForce(Enabled: Boolean, Position: Vector, Direction: Vector, Radius: Number, Magnitude: Number)
    open fun ApplyStrainField(Enabled: Boolean, Position: Vector, Radius: Number, Magnitude: Number, Iterations: Number)
    open fun ApplyStayDynamicField(Enabled: Boolean, Position: Vector, Radius: Number)
    open fun ApplyRadialVectorFalloffForce(Enabled: Boolean, Position: Vector, Radius: Number, Magnitude: Number)
    open fun ApplyRadialForce(Enabled: Boolean, Position: Vector, Magnitude: Number)
    open fun ApplyPhysicsField(Enabled: Boolean, Target: String /* "Field_None" | "Field_DynamicState" | "Field_LinearForce" | "Field_ExternalClusterStrain" | "Field_Kill" | "Field_LinearVelocity" | "Field_AngularVelociy" | "Field_AngularTorque" | "Field_InternalClusterStrain" | "Field_DisableThreshold" | "Field_SleepingThreshold" | "Field_PositionStatic" | "Field_PositionAnimated" | "Field_PositionTarget" | "Field_DynamicConstraint" | "Field_CollisionGroup" | "Field_ActivateDisabled" | "Field_PhysicsType_Max" */, MetaData: FieldSystemMetaData, Field: FieldNodeBase)
    open fun ApplyLinearForce(Enabled: Boolean, Direction: Vector, Magnitude: Number)
    open fun AddFieldCommand(Enabled: Boolean, Target: String /* "Field_None" | "Field_DynamicState" | "Field_LinearForce" | "Field_ExternalClusterStrain" | "Field_Kill" | "Field_LinearVelocity" | "Field_AngularVelociy" | "Field_AngularTorque" | "Field_InternalClusterStrain" | "Field_DisableThreshold" | "Field_SleepingThreshold" | "Field_PositionStatic" | "Field_PositionAnimated" | "Field_PositionTarget" | "Field_DynamicConstraint" | "Field_CollisionGroup" | "Field_ActivateDisabled" | "Field_PhysicsType_Max" */, MetaData: FieldSystemMetaData, Field: FieldNodeBase)

    companion object {
        fun Load(ResourceName: String): FieldSystemComponent
        fun Find(Outer: UObject, ResourceName: String): FieldSystemComponent
        fun GetDefaultObject(): FieldSystemComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystemComponent
        fun C(Other: UObject): FieldSystemComponent
        fun C(Other: Any): FieldSystemComponent
    }
}

external open class FieldSystemActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var FieldSystemComponent: FieldSystemComponent

    companion object {
        fun GetDefaultObject(): FieldSystemActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystemActor
        fun C(Other: UObject): FieldSystemActor
        fun C(Other: Any): FieldSystemActor
    }
}

external open class FieldSystemMetaDataIteration : FieldSystemMetaData {
    constructor()
    constructor(Outer: UObject)
    open var Iterations: Number
    open fun SetMetaDataIteration(Iterations: Number): FieldSystemMetaDataIteration

    companion object {
        fun Load(ResourceName: String): FieldSystemMetaDataIteration
        fun Find(Outer: UObject, ResourceName: String): FieldSystemMetaDataIteration
        fun GetDefaultObject(): FieldSystemMetaDataIteration
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystemMetaDataIteration
        fun C(Other: UObject): FieldSystemMetaDataIteration
        fun C(Other: Any): FieldSystemMetaDataIteration
    }
}

external object EFieldResolutionType {
    var Field_Resolution_Minimal: String /* "Field_Resolution_Minimal" */
    var Field_Resolution_DisabledParents: String /* "Field_Resolution_DisabledParents" */
    var Field_Resolution_Maximum: String /* "Field_Resolution_Maximum" */
    var Field_Resolution_Max: String /* "Field_Resolution_Max" */
}

external open class FieldSystemMetaDataProcessingResolution : FieldSystemMetaData {
    constructor()
    constructor(Outer: UObject)
    open var ResolutionType: String /* "Field_Resolution_Minimal" | "Field_Resolution_DisabledParents" | "Field_Resolution_Maximum" | "Field_Resolution_Max" */
    open fun SetMetaDataaProcessingResolutionType(ResolutionType: String /* "Field_Resolution_Minimal" | "Field_Resolution_DisabledParents" | "Field_Resolution_Maximum" | "Field_Resolution_Max" */): FieldSystemMetaDataProcessingResolution

    companion object {
        fun Load(ResourceName: String): FieldSystemMetaDataProcessingResolution
        fun Find(Outer: UObject, ResourceName: String): FieldSystemMetaDataProcessingResolution
        fun GetDefaultObject(): FieldSystemMetaDataProcessingResolution
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldSystemMetaDataProcessingResolution
        fun C(Other: UObject): FieldSystemMetaDataProcessingResolution
        fun C(Other: Any): FieldSystemMetaDataProcessingResolution
    }
}

external open class FieldNodeInt : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldNodeInt
        fun Find(Outer: UObject, ResourceName: String): FieldNodeInt
        fun GetDefaultObject(): FieldNodeInt
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldNodeInt
        fun C(Other: UObject): FieldNodeInt
        fun C(Other: Any): FieldNodeInt
    }
}

external open class FieldNodeFloat : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldNodeFloat
        fun Find(Outer: UObject, ResourceName: String): FieldNodeFloat
        fun GetDefaultObject(): FieldNodeFloat
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldNodeFloat
        fun C(Other: UObject): FieldNodeFloat
        fun C(Other: Any): FieldNodeFloat
    }
}

external open class FieldNodeVector : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FieldNodeVector
        fun Find(Outer: UObject, ResourceName: String): FieldNodeVector
        fun GetDefaultObject(): FieldNodeVector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FieldNodeVector
        fun C(Other: UObject): FieldNodeVector
        fun C(Other: Any): FieldNodeVector
    }
}

external open class UniformInteger : FieldNodeInt {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open fun SetUniformInteger(Magnitude: Number): UniformInteger

    companion object {
        fun Load(ResourceName: String): UniformInteger
        fun Find(Outer: UObject, ResourceName: String): UniformInteger
        fun GetDefaultObject(): UniformInteger
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UniformInteger
        fun C(Other: UObject): UniformInteger
        fun C(Other: Any): UniformInteger
    }
}

external object ESetMaskConditionType {
    var Field_Set_Always: String /* "Field_Set_Always" */
    var Field_Set_IFF_NOT_Interior: String /* "Field_Set_IFF_NOT_Interior" */
    var Field_Set_IFF_NOT_Exterior: String /* "Field_Set_IFF_NOT_Exterior" */
    var Field_MaskCondition_Max: String /* "Field_MaskCondition_Max" */
}

external open class RadialIntMask : FieldNodeInt {
    constructor()
    constructor(Outer: UObject)
    open var Radius: Number
    open var Position: Vector
    open var InteriorValue: Number
    open var ExteriorValue: Number
    open var SetMaskCondition: String /* "Field_Set_Always" | "Field_Set_IFF_NOT_Interior" | "Field_Set_IFF_NOT_Exterior" | "Field_MaskCondition_Max" */
    open fun SetRadialIntMask(Radius: Number, Position: Vector, InteriorValue: Number, ExteriorValue: Number, SetMaskConditionIn: String /* "Field_Set_Always" | "Field_Set_IFF_NOT_Interior" | "Field_Set_IFF_NOT_Exterior" | "Field_MaskCondition_Max" */): RadialIntMask

    companion object {
        fun Load(ResourceName: String): RadialIntMask
        fun Find(Outer: UObject, ResourceName: String): RadialIntMask
        fun GetDefaultObject(): RadialIntMask
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RadialIntMask
        fun C(Other: UObject): RadialIntMask
        fun C(Other: Any): RadialIntMask
    }
}

external open class UniformScalar : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open fun SetUniformScalar(Magnitude: Number): UniformScalar

    companion object {
        fun Load(ResourceName: String): UniformScalar
        fun Find(Outer: UObject, ResourceName: String): UniformScalar
        fun GetDefaultObject(): UniformScalar
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UniformScalar
        fun C(Other: UObject): UniformScalar
        fun C(Other: Any): UniformScalar
    }
}

external object EFieldFalloffType {
    var Field_FallOff_None: String /* "Field_FallOff_None" */
    var Field_Falloff_Linear: String /* "Field_Falloff_Linear" */
    var Field_Falloff_Inverse: String /* "Field_Falloff_Inverse" */
    var Field_Falloff_Squared: String /* "Field_Falloff_Squared" */
    var Field_Falloff_Logarithmic: String /* "Field_Falloff_Logarithmic" */
    var Field_Falloff_Max: String /* "Field_Falloff_Max" */
}

external open class RadialFalloff : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var MinRange: Number
    open var MaxRange: Number
    open var Default: Number
    open var Radius: Number
    open var Position: Vector
    open var Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */
    open fun SetRadialFalloff(Magnitude: Number, MinRange: Number, MaxRange: Number, Default: Number, Radius: Number, Position: Vector, Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */): RadialFalloff

    companion object {
        fun Load(ResourceName: String): RadialFalloff
        fun Find(Outer: UObject, ResourceName: String): RadialFalloff
        fun GetDefaultObject(): RadialFalloff
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RadialFalloff
        fun C(Other: UObject): RadialFalloff
        fun C(Other: Any): RadialFalloff
    }
}

external open class PlaneFalloff : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var MinRange: Number
    open var MaxRange: Number
    open var Default: Number
    open var Distance: Number
    open var Position: Vector
    open var Normal: Vector
    open var Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */
    open fun SetPlaneFalloff(Magnitude: Number, MinRange: Number, MaxRange: Number, Default: Number, Distance: Number, Position: Vector, Normal: Vector, Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */): PlaneFalloff

    companion object {
        fun Load(ResourceName: String): PlaneFalloff
        fun Find(Outer: UObject, ResourceName: String): PlaneFalloff
        fun GetDefaultObject(): PlaneFalloff
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PlaneFalloff
        fun C(Other: UObject): PlaneFalloff
        fun C(Other: Any): PlaneFalloff
    }
}

external open class BoxFalloff : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var MinRange: Number
    open var MaxRange: Number
    open var Default: Number
    open var Transform: Transform
    open var Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */
    open fun SetBoxFalloff(Magnitude: Number, MinRange: Number, MaxRange: Number, Default: Number, Transform: Transform, Falloff: String /* "Field_FallOff_None" | "Field_Falloff_Linear" | "Field_Falloff_Inverse" | "Field_Falloff_Squared" | "Field_Falloff_Logarithmic" | "Field_Falloff_Max" */): BoxFalloff

    companion object {
        fun Load(ResourceName: String): BoxFalloff
        fun Find(Outer: UObject, ResourceName: String): BoxFalloff
        fun GetDefaultObject(): BoxFalloff
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): BoxFalloff
        fun C(Other: UObject): BoxFalloff
        fun C(Other: Any): BoxFalloff
    }
}

external open class NoiseField : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var MinRange: Number
    open var MaxRange: Number
    open var Transform: Transform
    open fun SetNoiseField(MinRange: Number, MaxRange: Number, Transform: Transform): NoiseField

    companion object {
        fun Load(ResourceName: String): NoiseField
        fun Find(Outer: UObject, ResourceName: String): NoiseField
        fun GetDefaultObject(): NoiseField
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NoiseField
        fun C(Other: UObject): NoiseField
        fun C(Other: Any): NoiseField
    }
}

external open class UniformVector : FieldNodeVector {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var Direction: Vector
    open fun SetUniformVector(Magnitude: Number, Direction: Vector): UniformVector

    companion object {
        fun Load(ResourceName: String): UniformVector
        fun Find(Outer: UObject, ResourceName: String): UniformVector
        fun GetDefaultObject(): UniformVector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UniformVector
        fun C(Other: UObject): UniformVector
        fun C(Other: Any): UniformVector
    }
}

external open class RadialVector : FieldNodeVector {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var Position: Vector
    open fun SetRadialVector(Magnitude: Number, Position: Vector): RadialVector

    companion object {
        fun Load(ResourceName: String): RadialVector
        fun Find(Outer: UObject, ResourceName: String): RadialVector
        fun GetDefaultObject(): RadialVector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RadialVector
        fun C(Other: UObject): RadialVector
        fun C(Other: Any): RadialVector
    }
}

external open class RandomVector : FieldNodeVector {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open fun SetRandomVector(Magnitude: Number): RandomVector

    companion object {
        fun Load(ResourceName: String): RandomVector
        fun Find(Outer: UObject, ResourceName: String): RandomVector
        fun GetDefaultObject(): RandomVector
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RandomVector
        fun C(Other: UObject): RandomVector
        fun C(Other: Any): RandomVector
    }
}

external object EFieldOperationType {
    var Field_Multiply: String /* "Field_Multiply" */
    var Field_Divide: String /* "Field_Divide" */
    var Field_Add: String /* "Field_Add" */
    var Field_Substract: String /* "Field_Substract" */
    var Field_Operation_Max: String /* "Field_Operation_Max" */
}

external open class OperatorField : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)
    open var Magnitude: Number
    open var RightField: FieldNodeBase
    open var LeftField: FieldNodeBase
    open var Operation: String /* "Field_Multiply" | "Field_Divide" | "Field_Add" | "Field_Substract" | "Field_Operation_Max" */
    open fun SetOperatorField(Magnitude: Number, RightField: FieldNodeBase, LeftField: FieldNodeBase, Operation: String /* "Field_Multiply" | "Field_Divide" | "Field_Add" | "Field_Substract" | "Field_Operation_Max" */): OperatorField

    companion object {
        fun Load(ResourceName: String): OperatorField
        fun Find(Outer: UObject, ResourceName: String): OperatorField
        fun GetDefaultObject(): OperatorField
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OperatorField
        fun C(Other: UObject): OperatorField
        fun C(Other: Any): OperatorField
    }
}

external open class ToIntegerField : FieldNodeInt {
    constructor()
    constructor(Outer: UObject)
    open var FloatField: FieldNodeFloat
    open fun SetToIntegerField(FloatField: FieldNodeFloat): ToIntegerField

    companion object {
        fun Load(ResourceName: String): ToIntegerField
        fun Find(Outer: UObject, ResourceName: String): ToIntegerField
        fun GetDefaultObject(): ToIntegerField
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ToIntegerField
        fun C(Other: UObject): ToIntegerField
        fun C(Other: Any): ToIntegerField
    }
}

external open class ToFloatField : FieldNodeFloat {
    constructor()
    constructor(Outer: UObject)
    open var IntField: FieldNodeInt
    open fun SetToFloatField(IntegerField: FieldNodeInt): ToFloatField

    companion object {
        fun Load(ResourceName: String): ToFloatField
        fun Find(Outer: UObject, ResourceName: String): ToFloatField
        fun GetDefaultObject(): ToFloatField
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ToFloatField
        fun C(Other: UObject): ToFloatField
        fun C(Other: Any): ToFloatField
    }
}

external object EFieldCullingOperationType {
    var Field_Culling_Inside: String /* "Field_Culling_Inside" */
    var Field_Culling_Outside: String /* "Field_Culling_Outside" */
    var Field_Culling_Operation_Max: String /* "Field_Culling_Operation_Max" */
    var Field_Culling_MAX: String /* "Field_Culling_MAX" */
}

external open class CullingField : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)
    open var Culling: FieldNodeBase
    open var Field: FieldNodeBase
    open var Operation: String /* "Field_Culling_Inside" | "Field_Culling_Outside" | "Field_Culling_Operation_Max" | "Field_Culling_MAX" */
    open fun SetCullingField(Culling: FieldNodeBase, Field: FieldNodeBase, Operation: String /* "Field_Culling_Inside" | "Field_Culling_Outside" | "Field_Culling_Operation_Max" | "Field_Culling_MAX" */): CullingField

    companion object {
        fun Load(ResourceName: String): CullingField
        fun Find(Outer: UObject, ResourceName: String): CullingField
        fun GetDefaultObject(): CullingField
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CullingField
        fun C(Other: UObject): CullingField
        fun C(Other: Any): CullingField
    }
}

external open class ReturnResultsTerminal : FieldNodeBase {
    constructor()
    constructor(Outer: UObject)
    open fun SetReturnResultsTerminal(): ReturnResultsTerminal

    companion object {
        fun Load(ResourceName: String): ReturnResultsTerminal
        fun Find(Outer: UObject, ResourceName: String): ReturnResultsTerminal
        fun GetDefaultObject(): ReturnResultsTerminal
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ReturnResultsTerminal
        fun C(Other: UObject): ReturnResultsTerminal
        fun C(Other: Any): ReturnResultsTerminal
    }
}

external object EDataSourceTypeEnum {
    var ChaosNiagara_DataSourceType_Collision: String /* "ChaosNiagara_DataSourceType_Collision" */
    var ChaosNiagara_DataSourceType_Breaking: String /* "ChaosNiagara_DataSourceType_Breaking" */
    var ChaosNiagara_DataSourceType_Trailing: String /* "ChaosNiagara_DataSourceType_Trailing" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object ELocationFilteringModeEnum {
    var ChaosNiagara_LocationFilteringMode_Inclusive: String /* "ChaosNiagara_LocationFilteringMode_Inclusive" */
    var ChaosNiagara_LocationFilteringMode_Exclusive: String /* "ChaosNiagara_LocationFilteringMode_Exclusive" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object ELocationXToSpawnEnum {
    var ChaosNiagara_LocationXToSpawn_None: String /* "ChaosNiagara_LocationXToSpawn_None" */
    var ChaosNiagara_LocationXToSpawn_Min: String /* "ChaosNiagara_LocationXToSpawn_Min" */
    var ChaosNiagara_LocationXToSpawn_Max: String /* "ChaosNiagara_LocationXToSpawn_Max" */
    var ChaosNiagara_LocationXToSpawn_MinMax: String /* "ChaosNiagara_LocationXToSpawn_MinMax" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object ELocationYToSpawnEnum {
    var ChaosNiagara_LocationYToSpawn_None: String /* "ChaosNiagara_LocationYToSpawn_None" */
    var ChaosNiagara_LocationYToSpawn_Min: String /* "ChaosNiagara_LocationYToSpawn_Min" */
    var ChaosNiagara_LocationYToSpawn_Max: String /* "ChaosNiagara_LocationYToSpawn_Max" */
    var ChaosNiagara_LocationYToSpawn_MinMax: String /* "ChaosNiagara_LocationYToSpawn_MinMax" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object ELocationZToSpawnEnum {
    var ChaosNiagara_LocationZToSpawn_None: String /* "ChaosNiagara_LocationZToSpawn_None" */
    var ChaosNiagara_LocationZToSpawn_Min: String /* "ChaosNiagara_LocationZToSpawn_Min" */
    var ChaosNiagara_LocationZToSpawn_Max: String /* "ChaosNiagara_LocationZToSpawn_Max" */
    var ChaosNiagara_LocationZToSpawn_MinMax: String /* "ChaosNiagara_LocationZToSpawn_MinMax" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object EDataSortTypeEnum {
    var ChaosNiagara_DataSortType_NoSorting: String /* "ChaosNiagara_DataSortType_NoSorting" */
    var ChaosNiagara_DataSortType_RandomShuffle: String /* "ChaosNiagara_DataSortType_RandomShuffle" */
    var ChaosNiagara_DataSortType_SortByMassMaxToMin: String /* "ChaosNiagara_DataSortType_SortByMassMaxToMin" */
    var ChaosNiagara_DataSortType_SortByMassMinToMax: String /* "ChaosNiagara_DataSortType_SortByMassMinToMax" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object ERandomVelocityGenerationTypeEnum {
    var ChaosNiagara_RandomVelocityGenerationType_RandomDistribution: String /* "ChaosNiagara_RandomVelocityGenerationType_RandomDistribution" */
    var ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers: String /* "ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers" */
    var ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased: String /* "ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external object EDebugTypeEnum {
    var ChaosNiagara_DebugType_NoDebug: String /* "ChaosNiagara_DebugType_NoDebug" */
    var ChaosNiagara_DebugType_ColorBySolver: String /* "ChaosNiagara_DebugType_ColorBySolver" */
    var ChaosNiagara_DebugType_ColorByParticleIndex: String /* "ChaosNiagara_DebugType_ColorByParticleIndex" */
    var ChaosNiagara_Max: String /* "ChaosNiagara_Max" */
}

external open class NiagaraDataInterfaceChaosDestruction : NiagaraDataInterface {
    constructor()
    constructor(Outer: UObject)
    open var ChaosSolverActorSet: Any
    open var DataSourceType: String /* "ChaosNiagara_DataSourceType_Collision" | "ChaosNiagara_DataSourceType_Breaking" | "ChaosNiagara_DataSourceType_Trailing" | "ChaosNiagara_Max" */
    open var DataProcessFrequency: Number
    open var MaxNumberOfDataEntriesToSpawn: Number
    open var DoSpawn: Boolean
    open var SpawnMultiplierMinMax: Vector2D
    open var SpawnChance: Number
    open var ImpulseToSpawnMinMax: Vector2D
    open var SpeedToSpawnMinMax: Vector2D
    open var MassToSpawnMinMax: Vector2D
    open var ExtentMinToSpawnMinMax: Vector2D
    open var ExtentMaxToSpawnMinMax: Vector2D
    open var VolumeToSpawnMinMax: Vector2D
    open var SolverTimeToSpawnMinMax: Vector2D
    open var SurfaceTypeToSpawn: Number
    open var LocationFilteringMode: String /* "ChaosNiagara_LocationFilteringMode_Inclusive" | "ChaosNiagara_LocationFilteringMode_Exclusive" | "ChaosNiagara_Max" */
    open var LocationXToSpawn: String /* "ChaosNiagara_LocationXToSpawn_None" | "ChaosNiagara_LocationXToSpawn_Min" | "ChaosNiagara_LocationXToSpawn_Max" | "ChaosNiagara_LocationXToSpawn_MinMax" | "ChaosNiagara_Max" */
    open var LocationXToSpawnMinMax: Vector2D
    open var LocationYToSpawn: String /* "ChaosNiagara_LocationYToSpawn_None" | "ChaosNiagara_LocationYToSpawn_Min" | "ChaosNiagara_LocationYToSpawn_Max" | "ChaosNiagara_LocationYToSpawn_MinMax" | "ChaosNiagara_Max" */
    open var LocationYToSpawnMinMax: Vector2D
    open var LocationZToSpawn: String /* "ChaosNiagara_LocationZToSpawn_None" | "ChaosNiagara_LocationZToSpawn_Min" | "ChaosNiagara_LocationZToSpawn_Max" | "ChaosNiagara_LocationZToSpawn_MinMax" | "ChaosNiagara_Max" */
    open var LocationZToSpawnMinMax: Vector2D
    open var DataSortingType: String /* "ChaosNiagara_DataSortType_NoSorting" | "ChaosNiagara_DataSortType_RandomShuffle" | "ChaosNiagara_DataSortType_SortByMassMaxToMin" | "ChaosNiagara_DataSortType_SortByMassMinToMax" | "ChaosNiagara_Max" */
    open var bGetExternalCollisionData: Boolean
    open var DoSpatialHash: Boolean
    open var SpatialHashVolumeMin: Vector
    open var SpatialHashVolumeMax: Vector
    open var SpatialHashVolumeCellSize: Vector
    open var MaxDataPerCell: Number
    open var bApplyMaterialsFilter: Boolean
    open var ChaosBreakingMaterialSet: Any
    open var bGetExternalBreakingData: Boolean
    open var bGetExternalTrailingData: Boolean
    open var RandomPositionMagnitudeMinMax: Vector2D
    open var InheritedVelocityMultiplier: Number
    open var RandomVelocityGenerationType: String /* "ChaosNiagara_RandomVelocityGenerationType_RandomDistribution" | "ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers" | "ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased" | "ChaosNiagara_Max" */
    open var RandomVelocityMagnitudeMinMax: Vector2D
    open var SpreadAngleMax: Number
    open var VelocityOffsetMin: Vector
    open var VelocityOffsetMax: Vector
    open var FinalVelocityMagnitudeMinMax: Vector2D
    open var MaxLatency: Number
    open var DebugType: String /* "ChaosNiagara_DebugType_NoDebug" | "ChaosNiagara_DebugType_ColorBySolver" | "ChaosNiagara_DebugType_ColorByParticleIndex" | "ChaosNiagara_Max" */
    open var LastSpawnedPointID: Number
    open var LastSpawnTime: Number
    open var SolverTime: Number
    open var TimeStampOfLastProcessedData: Number

    companion object {
        fun Load(ResourceName: String): NiagaraDataInterfaceChaosDestruction
        fun Find(Outer: UObject, ResourceName: String): NiagaraDataInterfaceChaosDestruction
        fun GetDefaultObject(): NiagaraDataInterfaceChaosDestruction
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraDataInterfaceChaosDestruction
        fun C(Other: UObject): NiagaraDataInterfaceChaosDestruction
        fun C(Other: Any): NiagaraDataInterfaceChaosDestruction
    }
}

external open class NiagaraDataInterfaceFieldSystem : NiagaraDataInterface {
    constructor()
    constructor(Outer: UObject)
    open var BlueprintSource: Blueprint
    open var SourceActor: Actor
    open var FieldDimensions: IntVector
    open var MinBounds: Vector
    open var MaxBounds: Vector

    companion object {
        fun Load(ResourceName: String): NiagaraDataInterfaceFieldSystem
        fun Find(Outer: UObject, ResourceName: String): NiagaraDataInterfaceFieldSystem
        fun GetDefaultObject(): NiagaraDataInterfaceFieldSystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NiagaraDataInterfaceFieldSystem
        fun C(Other: UObject): NiagaraDataInterfaceFieldSystem
        fun C(Other: Any): NiagaraDataInterfaceFieldSystem
    }
}

external object EChaosCollisionSortMethod {
    var SortNone: String /* "SortNone" */
    var SortByHighestMass: String /* "SortByHighestMass" */
    var SortByHighestSpeed: String /* "SortByHighestSpeed" */
    var SortByHighestImpulse: String /* "SortByHighestImpulse" */
    var SortByNearestFirst: String /* "SortByNearestFirst" */
    var Count: String /* "Count" */
    var EChaosCollisionSortMethod_MAX: String /* "EChaosCollisionSortMethod_MAX" */
}

external open class ChaosCollisionEventRequestSettings {
    open var MaxNumberResults: Number
    open var MinMass: Number
    open var MinSpeed: Number
    open var MinImpulse: Number
    open var MaxDistance: Number
    open var SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByHighestImpulse" | "SortByNearestFirst" | "Count" | "EChaosCollisionSortMethod_MAX" */
    open fun clone(): ChaosCollisionEventRequestSettings

    companion object {
        fun C(Other: UObject): ChaosCollisionEventRequestSettings
        fun C(Other: Any): ChaosCollisionEventRequestSettings
    }
}

external object EChaosBreakingSortMethod {
    var SortNone: String /* "SortNone" */
    var SortByHighestMass: String /* "SortByHighestMass" */
    var SortByHighestSpeed: String /* "SortByHighestSpeed" */
    var SortByNearestFirst: String /* "SortByNearestFirst" */
    var Count: String /* "Count" */
    var EChaosBreakingSortMethod_MAX: String /* "EChaosBreakingSortMethod_MAX" */
}

external open class ChaosBreakingEventRequestSettings {
    open var MaxNumberOfResults: Number
    open var MinRadius: Number
    open var MinSpeed: Number
    open var MinMass: Number
    open var MaxDistance: Number
    open var SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByNearestFirst" | "Count" | "EChaosBreakingSortMethod_MAX" */
    open fun clone(): ChaosBreakingEventRequestSettings

    companion object {
        fun C(Other: UObject): ChaosBreakingEventRequestSettings
        fun C(Other: Any): ChaosBreakingEventRequestSettings
    }
}

external object EChaosTrailingSortMethod {
    var SortNone: String /* "SortNone" */
    var SortByHighestMass: String /* "SortByHighestMass" */
    var SortByHighestSpeed: String /* "SortByHighestSpeed" */
    var SortByNearestFirst: String /* "SortByNearestFirst" */
    var Count: String /* "Count" */
    var EChaosTrailingSortMethod_MAX: String /* "EChaosTrailingSortMethod_MAX" */
}

external open class ChaosTrailingEventRequestSettings {
    open var MaxNumberOfResults: Number
    open var MinMass: Number
    open var MinSpeed: Number
    open var MinAngularSpeed: Number
    open var MaxDistance: Number
    open var SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByNearestFirst" | "Count" | "EChaosTrailingSortMethod_MAX" */
    open fun clone(): ChaosTrailingEventRequestSettings

    companion object {
        fun C(Other: UObject): ChaosTrailingEventRequestSettings
        fun C(Other: Any): ChaosTrailingEventRequestSettings
    }
}

external open class ChaosCollisionEventData {
    open var Location: Vector
    open var Normal: Vector
    open var Velocity1: Vector
    open var Velocity2: Vector
    open var Mass1: Number
    open var Mass2: Number
    open var Impulse: Vector
    open fun clone(): ChaosCollisionEventData

    companion object {
        fun C(Other: UObject): ChaosCollisionEventData
        fun C(Other: Any): ChaosCollisionEventData
    }
}

external open class ChaosBreakingEventData {
    open var Location: Vector
    open var Velocity: Vector
    open var Mass: Number
    open fun clone(): ChaosBreakingEventData

    companion object {
        fun C(Other: UObject): ChaosBreakingEventData
        fun C(Other: Any): ChaosBreakingEventData
    }
}

external open class ChaosTrailingEventData {
    open var Location: Vector
    open var Velocity: Vector
    open var AngularVelocity: Vector
    open var Mass: Number
    open var ParticleIndex: Number
    open fun clone(): ChaosTrailingEventData

    companion object {
        fun C(Other: UObject): ChaosTrailingEventData
        fun C(Other: Any): ChaosTrailingEventData
    }
}

external open class GeometryCollectionSource {
    open var SourceGeometryObject: SoftObjectPath
    open var LocalTransform: Transform
    open var SourceMaterial: Array<MaterialInterface>
    open fun clone(): GeometryCollectionSource

    companion object {
        fun C(Other: UObject): GeometryCollectionSource
        fun C(Other: Any): GeometryCollectionSource
    }
}

external object ECollisionTypeEnum {
    var Chaos_Volumetric: String /* "Chaos_Volumetric" */
    var Chaos_Surface_Volumetric: String /* "Chaos_Surface_Volumetric" */
    var Chaos_Max: String /* "Chaos_Max" */
}

external object EImplicitTypeEnum {
    var Chaos_Implicit_Box: String /* "Chaos_Implicit_Box" */
    var Chaos_Implicit_Sphere: String /* "Chaos_Implicit_Sphere" */
    var Chaos_Implicit_Capsule: String /* "Chaos_Implicit_Capsule" */
    var Chaos_Implicit_LevelSet: String /* "Chaos_Implicit_LevelSet" */
    var Chaos_Implicit_None: String /* "Chaos_Implicit_None" */
    var Chaos_Max: String /* "Chaos_Max" */
}

external open class GeometryCollectionSizeSpecificData {
    open var MaxSize: Number
    open var CollisionType: String /* "Chaos_Volumetric" | "Chaos_Surface_Volumetric" | "Chaos_Max" */
    open var ImplicitType: String /* "Chaos_Implicit_Box" | "Chaos_Implicit_Sphere" | "Chaos_Implicit_Capsule" | "Chaos_Implicit_LevelSet" | "Chaos_Implicit_None" | "Chaos_Max" */
    open var MinLevelSetResolution: Number
    open var MaxLevelSetResolution: Number
    open var MinClusterLevelSetResolution: Number
    open var MaxClusterLevelSetResolution: Number
    open var CollisionObjectReductionPercentage: Number
    open var CollisionParticlesFraction: Number
    open var MaximumCollisionParticles: Number
    open fun clone(): GeometryCollectionSizeSpecificData

    companion object {
        fun C(Other: UObject): GeometryCollectionSizeSpecificData
        fun C(Other: Any): GeometryCollectionSizeSpecificData
    }
}

external open class GeometryCollection : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GeometrySource: Array<GeometryCollectionSource>
    open var Materials: Array<MaterialInterface>
    open var CollisionType: String /* "Chaos_Volumetric" | "Chaos_Surface_Volumetric" | "Chaos_Max" */
    open var ImplicitType: String /* "Chaos_Implicit_Box" | "Chaos_Implicit_Sphere" | "Chaos_Implicit_Capsule" | "Chaos_Implicit_LevelSet" | "Chaos_Implicit_None" | "Chaos_Max" */
    open var MinLevelSetResolution: Number
    open var MaxLevelSetResolution: Number
    open var MinClusterLevelSetResolution: Number
    open var MaxClusterLevelSetResolution: Number
    open var CollisionObjectReductionPercentage: Number
    open var bMassAsDensity: Boolean
    open var Mass: Number
    open var MinimumMassClamp: Number
    open var CollisionParticlesFraction: Number
    open var MaximumCollisionParticles: Number
    open var SizeSpecificData: Array<GeometryCollectionSizeSpecificData>
    open var EnableRemovePiecesOnFracture: Boolean
    open var RemoveOnFractureMaterials: Array<MaterialInterface>
    open var ThumbnailInfo: ThumbnailInfo
    open var PersistentGuid: Guid
    open var StateGuid: Guid
    open var BoneSelectedMaterialIndex: Number

    companion object {
        fun Load(ResourceName: String): GeometryCollection
        fun Find(Outer: UObject, ResourceName: String): GeometryCollection
        fun GetDefaultObject(): GeometryCollection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollection
        fun C(Other: UObject): GeometryCollection
        fun C(Other: Any): GeometryCollection
    }
}

external object EObjectStateTypeEnum {
    var Chaos_NONE: String /* "Chaos_NONE" */
    var Chaos_Object_Sleeping: String /* "Chaos_Object_Sleeping" */
    var Chaos_Object_Kinematic: String /* "Chaos_Object_Kinematic" */
    var Chaos_Object_Static: String /* "Chaos_Object_Static" */
    var Chaos_Object_Dynamic: String /* "Chaos_Object_Dynamic" */
    var Chaos_Object_UserDefined: String /* "Chaos_Object_UserDefined" */
    var Chaos_Max: String /* "Chaos_Max" */
}

external object EInitialVelocityTypeEnum {
    var Chaos_Initial_Velocity_User_Defined: String /* "Chaos_Initial_Velocity_User_Defined" */
    var Chaos_Initial_Velocity_None: String /* "Chaos_Initial_Velocity_None" */
    var Chaos_Max: String /* "Chaos_Max" */
}

external object EGeometryCollectionCacheType {
    var None: String /* "None" */
    var Record: String /* "Record" */
    var Play: String /* "Play" */
    var RecordAndPlay: String /* "RecordAndPlay" */
    var EGeometryCollectionCacheType_MAX: String /* "EGeometryCollectionCacheType_MAX" */
}

external open class SolverCollisionData {
    open var Location: Vector
    open var AccumulatedImpulse: Vector
    open var Normal: Vector
    open var Velocity1: Vector
    open var Velocity2: Vector
    open var AngularVelocity1: Vector
    open var AngularVelocity2: Vector
    open var Mass1: Number
    open var Mass2: Number
    open var ParticleIndex: Number
    open var LevelsetIndex: Number
    open var ParticleIndexMesh: Number
    open var LevelsetIndexMesh: Number
    open fun clone(): SolverCollisionData

    companion object {
        fun C(Other: UObject): SolverCollisionData
        fun C(Other: Any): SolverCollisionData
    }
}

external open class SolverBreakingData {
    open var Location: Vector
    open var Velocity: Vector
    open var AngularVelocity: Vector
    open var Mass: Number
    open var ParticleIndex: Number
    open var ParticleIndexMesh: Number
    open fun clone(): SolverBreakingData

    companion object {
        fun C(Other: UObject): SolverBreakingData
        fun C(Other: Any): SolverBreakingData
    }
}

external open class RecordedFrame {
    open var Transforms: Array<Transform>
    open var TransformIndices: Array<Number>
    open var PreviousTransformIndices: Array<Number>
    open var DisabledFlags: Array<Boolean>
    open var Collisions: Array<SolverCollisionData>
    open var Breakings: Array<SolverBreakingData>
    open var Trailings: Any
    open var Timestamp: Number
    open fun clone(): RecordedFrame

    companion object {
        fun C(Other: UObject): RecordedFrame
        fun C(Other: Any): RecordedFrame
    }
}

external open class RecordedTransformTrack {
    open var Records: Array<RecordedFrame>
    open fun clone(): RecordedTransformTrack

    companion object {
        fun C(Other: UObject): RecordedTransformTrack
        fun C(Other: Any): RecordedTransformTrack
    }
}

external open class GeometryCollectionCache : UObject {
    constructor()
    constructor(Outer: UObject)
    open var RecordedData: RecordedTransformTrack
    open var SupportedCollection: GeometryCollection
    open var CompatibleCollectionState: Guid

    companion object {
        fun Load(ResourceName: String): GeometryCollectionCache
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionCache
        fun GetDefaultObject(): GeometryCollectionCache
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionCache
        fun C(Other: UObject): GeometryCollectionCache
        fun C(Other: Any): GeometryCollectionCache
    }
}

external open class GeomComponentCacheParameters {
    open var CacheMode: String /* "None" | "Record" | "Play" | "RecordAndPlay" | "EGeometryCollectionCacheType_MAX" */
    open var TargetCache: GeometryCollectionCache
    open var ReverseCacheBeginTime: Number
    open var SaveCollisionData: Boolean
    open var DoGenerateCollisionData: Boolean
    open var CollisionDataSizeMax: Number
    open var DoCollisionDataSpatialHash: Boolean
    open var CollisionDataSpatialHashRadius: Number
    open var MaxCollisionPerCell: Number
    open var SaveBreakingData: Boolean
    open var DoGenerateBreakingData: Boolean
    open var BreakingDataSizeMax: Number
    open var DoBreakingDataSpatialHash: Boolean
    open var BreakingDataSpatialHashRadius: Number
    open var MaxBreakingPerCell: Number
    open var SaveTrailingData: Boolean
    open var DoGenerateTrailingData: Boolean
    open var TrailingDataSizeMax: Number
    open var TrailingMinSpeedThreshold: Number
    open var TrailingMinVolumeThreshold: Number
    open fun clone(): GeomComponentCacheParameters

    companion object {
        fun C(Other: UObject): GeomComponentCacheParameters
        fun C(Other: Any): GeomComponentCacheParameters
    }
}

external open class ChaosBreakEvent {
    open var Component: PrimitiveComponent
    open var Location: Vector
    open var Velocity: Vector
    open var AngularVelocity: Vector
    open var Mass: Number
    open fun clone(): ChaosBreakEvent

    companion object {
        fun C(Other: UObject): ChaosBreakEvent
        fun C(Other: Any): ChaosBreakEvent
    }
}

external open class GeometryCollectionRepData {
    open fun clone(): GeometryCollectionRepData

    companion object {
        fun C(Other: UObject): GeometryCollectionRepData
        fun C(Other: Any): GeometryCollectionRepData
    }
}

external object EGeometryCollectionPhysicsTypeEnum {
    var Chaos_AngularVelocity: String /* "Chaos_AngularVelocity" */
    var Chaos_DynamicState: String /* "Chaos_DynamicState" */
    var Chaos_LinearVelocity: String /* "Chaos_LinearVelocity" */
    var Chaos_InitialAngularVelocity: String /* "Chaos_InitialAngularVelocity" */
    var Chaos_InitialLinearVelocity: String /* "Chaos_InitialLinearVelocity" */
    var Chaos_CollisionGroup: String /* "Chaos_CollisionGroup" */
    var Chaos_LinearForce: String /* "Chaos_LinearForce" */
    var Chaos_AngularTorque: String /* "Chaos_AngularTorque" */
    var Chaos_Max: String /* "Chaos_Max" */
}

external open class GeometryCollectionComponent : MeshComponent {
    constructor()
    constructor(Outer: UObject)
    open var ChaosSolverActor: ChaosSolverActor
    open var RestCollection: GeometryCollection
    open var InitializationFields: Array<FieldSystemActor>
    open var Simulating: Boolean
    open var ObjectType: String /* "Chaos_NONE" | "Chaos_Object_Sleeping" | "Chaos_Object_Kinematic" | "Chaos_Object_Static" | "Chaos_Object_Dynamic" | "Chaos_Object_UserDefined" | "Chaos_Max" */
    open var EnableClustering: Boolean
    open var ClusterGroupIndex: Number
    open var MaxClusterLevel: Number
    open var DamageThreshold: Array<Number>
    open var ClusterConnectionType: String /* "Chaos_PointImplicit" | "Chaos_DelaunayTriangulation" | "Chaos_MinimalSpanningSubsetDelaunayTriangulation" | "Chaos_PointImplicitAugmentedWithMinimalDelaunay" | "Chaos_None" | "Chaos_EClsuterCreationParameters_Max" | "Chaos_MAX" */
    open var CollisionGroup: Number
    open var CollisionSampleFraction: Number
    open var LinearEtherDrag: Number
    open var AngularEtherDrag: Number
    open var PhysicalMaterial: ChaosPhysicalMaterial
    open var InitialVelocityType: String /* "Chaos_Initial_Velocity_User_Defined" | "Chaos_Initial_Velocity_None" | "Chaos_Max" */
    open var InitialLinearVelocity: Vector
    open var InitialAngularVelocity: Vector
    open var PhysicalMaterialOverride: PhysicalMaterial
    open var CacheParameters: GeomComponentCacheParameters
    open var NotifyGeometryCollectionPhysicsStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) -> Unit>
    open var NotifyGeometryCollectionPhysicsLoadingStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) -> Unit>
    open var OnChaosBreakEvent: UnrealEngineMulticastDelegate<(BreakEvent: ChaosBreakEvent) -> Unit>
    open var DesiredCacheTime: Number
    open var CachePlayback: Boolean
    open var OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) -> Unit>
    open var bNotifyBreaks: Boolean
    open var bNotifyCollisions: Boolean
    open var bEnableReplication: Boolean
    open var bEnableAbandonAfterLevel: Boolean
    open var ReplicationAbandonClusterLevel: Number
    open var RepData: GeometryCollectionRepData
    open var SelectedBones: Array<Number>
    open var HighlightedBones: Array<Number>
    open var DummyBodySetup: BodySetup
    open var EditorActor: Actor
    open fun SetNotifyBreaks(bNewNotifyBreaks: Boolean)
    open fun PhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo)
    open fun OnRep_RepData(OldData: GeometryCollectionRepData)
    open fun NetAbandonCluster(TransformIndex: Number)
    open fun ApplyPhysicsField(Enabled: Boolean, Target: String /* "Chaos_AngularVelocity" | "Chaos_DynamicState" | "Chaos_LinearVelocity" | "Chaos_InitialAngularVelocity" | "Chaos_InitialLinearVelocity" | "Chaos_CollisionGroup" | "Chaos_LinearForce" | "Chaos_AngularTorque" | "Chaos_Max" */, MetaData: FieldSystemMetaData, Field: FieldNodeBase)
    open fun ApplyKinematicField(Radius: Number, Position: Vector)

    companion object {
        fun Load(ResourceName: String): GeometryCollectionComponent
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionComponent
        fun GetDefaultObject(): GeometryCollectionComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionComponent
        fun C(Other: UObject): GeometryCollectionComponent
        fun C(Other: Any): GeometryCollectionComponent
    }
}

external open class GeometryCollectionDebugDrawWarningMessage {
    open fun clone(): GeometryCollectionDebugDrawWarningMessage

    companion object {
        fun C(Other: UObject): GeometryCollectionDebugDrawWarningMessage
        fun C(Other: Any): GeometryCollectionDebugDrawWarningMessage
    }
}

external open class GeometryCollectionDebugDrawActorSelectedRigidBody {
    open var ID: Number
    open var Solver: ChaosSolverActor
    open var GeometryCollection: GeometryCollectionActor
    open fun clone(): GeometryCollectionDebugDrawActorSelectedRigidBody

    companion object {
        fun C(Other: UObject): GeometryCollectionDebugDrawActorSelectedRigidBody
        fun C(Other: Any): GeometryCollectionDebugDrawActorSelectedRigidBody
    }
}

external object EGeometryCollectionDebugDrawActorHideGeometry {
    var HideNone: String /* "HideNone" */
    var HideWithCollision: String /* "HideWithCollision" */
    var HideSelected: String /* "HideSelected" */
    var HideWholeCollection: String /* "HideWholeCollection" */
    var HideAll: String /* "HideAll" */
    var EGeometryCollectionDebugDrawActorHideGeometry_MAX: String /* "EGeometryCollectionDebugDrawActorHideGeometry_MAX" */
}

external open class GeometryCollectionDebugDrawActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var WarningMessage: GeometryCollectionDebugDrawWarningMessage
    open var SelectedRigidBody: GeometryCollectionDebugDrawActorSelectedRigidBody
    open var bDebugDrawWholeCollection: Boolean
    open var bDebugDrawHierarchy: Boolean
    open var bDebugDrawClustering: Boolean
    open var HideGeometry: String /* "HideNone" | "HideWithCollision" | "HideSelected" | "HideWholeCollection" | "HideAll" | "EGeometryCollectionDebugDrawActorHideGeometry_MAX" */
    open var bShowRigidBodyId: Boolean
    open var bShowRigidBodyCollision: Boolean
    open var bCollisionAtOrigin: Boolean
    open var bShowRigidBodyTransform: Boolean
    open var bShowRigidBodyInertia: Boolean
    open var bShowRigidBodyVelocity: Boolean
    open var bShowRigidBodyForce: Boolean
    open var bShowRigidBodyInfos: Boolean
    open var bShowTransformIndex: Boolean
    open var bShowTransform: Boolean
    open var bShowParent: Boolean
    open var bShowLevel: Boolean
    open var bShowConnectivityEdges: Boolean
    open var bShowGeometryIndex: Boolean
    open var bShowGeometryTransform: Boolean
    open var bShowBoundingBox: Boolean
    open var bShowFaces: Boolean
    open var bShowFaceIndices: Boolean
    open var bShowFaceNormals: Boolean
    open var bShowSingleFace: Boolean
    open var SingleFaceIndex: Number
    open var bShowVertices: Boolean
    open var bShowVertexIndices: Boolean
    open var bShowVertexNormals: Boolean
    open var bUseActiveVisualization: Boolean
    open var PointThickness: Number
    open var LineThickness: Number
    open var bTextShadow: Boolean
    open var TextScale: Number
    open var NormalScale: Number
    open var AxisScale: Number
    open var ArrowScale: Number
    open var RigidBodyIdColor: Color
    open var RigidBodyTransformScale: Number
    open var RigidBodyCollisionColor: Color
    open var RigidBodyInertiaColor: Color
    open var RigidBodyVelocityColor: Color
    open var RigidBodyForceColor: Color
    open var RigidBodyInfoColor: Color
    open var TransformIndexColor: Color
    open var TransformScale: Number
    open var LevelColor: Color
    open var ParentColor: Color
    open var ConnectivityEdgeThickness: Number
    open var GeometryIndexColor: Color
    open var GeometryTransformScale: Number
    open var BoundingBoxColor: Color
    open var FaceColor: Color
    open var FaceIndexColor: Color
    open var FaceNormalColor: Color
    open var SingleFaceColor: Color
    open var VertexColor: Color
    open var VertexIndexColor: Color
    open var VertexNormalColor: Color
    open var SpriteComponent: BillboardComponent

    companion object {
        fun GetDefaultObject(): GeometryCollectionDebugDrawActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionDebugDrawActor
        fun C(Other: UObject): GeometryCollectionDebugDrawActor
        fun C(Other: Any): GeometryCollectionDebugDrawActor
    }
}

external open class GeometryCollectionRenderLevelSetActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var TargetVolumeTexture: VolumeTexture
    open var RayMarchMaterial: Material
    open var SurfaceTolerance: Number
    open var Isovalue: Number
    open var Enabled: Boolean
    open var RenderVolumeBoundingBox: Boolean

    companion object {
        fun GetDefaultObject(): GeometryCollectionRenderLevelSetActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionRenderLevelSetActor
        fun C(Other: UObject): GeometryCollectionRenderLevelSetActor
        fun C(Other: Any): GeometryCollectionRenderLevelSetActor
    }
}

external open class GeometryCollectionDebugDrawComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var GeometryCollectionDebugDrawActor: GeometryCollectionDebugDrawActor
    open var GeometryCollectionRenderLevelSetActor: GeometryCollectionRenderLevelSetActor

    companion object {
        fun Load(ResourceName: String): GeometryCollectionDebugDrawComponent
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionDebugDrawComponent
        fun GetDefaultObject(): GeometryCollectionDebugDrawComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionDebugDrawComponent
        fun C(Other: UObject): GeometryCollectionDebugDrawComponent
        fun C(Other: Any): GeometryCollectionDebugDrawComponent
    }
}

external interface `T$89` {
    var OutHit: HitResult
    var `$`: Boolean
}

external open class GeometryCollectionActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var GeometryCollectionComponent: GeometryCollectionComponent
    open var GeometryCollectionDebugDrawComponent: GeometryCollectionDebugDrawComponent
    open fun RaycastSingle(Start: Vector, End: Vector, OutHit: HitResult = definedExternally): `T$89`

    companion object {
        fun GetDefaultObject(): GeometryCollectionActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionActor
        fun C(Other: UObject): GeometryCollectionActor
        fun C(Other: Any): GeometryCollectionActor
    }
}

external interface `T$90` {
    var TrailingEvents: Array<ChaosTrailingEventData>
}

external interface `T$91` {
    var CollisionEvents: Array<ChaosCollisionEventData>
}

external interface `T$92` {
    var BreakingEvents: Array<ChaosBreakingEventData>
}

external open class ChaosDestructionListener : SceneComponent {
    constructor()
    constructor(Outer: UObject)
    open var bIsCollisionEventListeningEnabled: Boolean
    open var bIsBreakingEventListeningEnabled: Boolean
    open var bIsTrailingEventListeningEnabled: Boolean
    open var CollisionEventRequestSettings: ChaosCollisionEventRequestSettings
    open var BreakingEventRequestSettings: ChaosBreakingEventRequestSettings
    open var TrailingEventRequestSettings: ChaosTrailingEventRequestSettings
    open var ChaosSolverActors: Any
    open var GeometryCollectionActors: Any
    open var OnCollisionEvents: UnrealEngineMulticastDelegate<(CollisionEvents: Array<ChaosCollisionEventData>) -> Unit>
    open var OnBreakingEvents: UnrealEngineMulticastDelegate<(BreakingEvents: Array<ChaosBreakingEventData>) -> Unit>
    open var OnTrailingEvents: UnrealEngineMulticastDelegate<(TrailingEvents: Array<ChaosTrailingEventData>) -> Unit>
    open fun SortTrailingEvents(TrailingEvents: Array<ChaosTrailingEventData> = definedExternally, SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByNearestFirst" | "Count" | "EChaosTrailingSortMethod_MAX" */ = definedExternally): `T$90`
    open fun SortCollisionEvents(CollisionEvents: Array<ChaosCollisionEventData> = definedExternally, SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByHighestImpulse" | "SortByNearestFirst" | "Count" | "EChaosCollisionSortMethod_MAX" */ = definedExternally): `T$91`
    open fun SortBreakingEvents(BreakingEvents: Array<ChaosBreakingEventData> = definedExternally, SortMethod: String /* "SortNone" | "SortByHighestMass" | "SortByHighestSpeed" | "SortByNearestFirst" | "Count" | "EChaosBreakingSortMethod_MAX" */ = definedExternally): `T$92`
    open fun SetTrailingEventRequestSettings(InSettings: ChaosTrailingEventRequestSettings)
    open fun SetTrailingEventEnabled(bIsEnabled: Boolean)
    open fun SetCollisionEventRequestSettings(InSettings: ChaosCollisionEventRequestSettings)
    open fun SetCollisionEventEnabled(bIsEnabled: Boolean)
    open fun SetBreakingEventRequestSettings(InSettings: ChaosBreakingEventRequestSettings)
    open fun SetBreakingEventEnabled(bIsEnabled: Boolean)
    open fun RemoveGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor)
    open fun RemoveChaosSolverActor(ChaosSolverActor: ChaosSolverActor)
    open fun IsEventListening(): Boolean
    open fun AddGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor)
    open fun AddChaosSolverActor(ChaosSolverActor: ChaosSolverActor)

    companion object {
        fun Load(ResourceName: String): ChaosDestructionListener
        fun Find(Outer: UObject, ResourceName: String): ChaosDestructionListener
        fun GetDefaultObject(): ChaosDestructionListener
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ChaosDestructionListener
        fun C(Other: UObject): ChaosDestructionListener
        fun C(Other: Any): ChaosDestructionListener
    }
}

external open class SkeletalMeshSimulationComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var PhysicalMaterial: ChaosPhysicalMaterial
    open var ChaosSolverActor: ChaosSolverActor
    open var OverridePhysicsAsset: PhysicsAsset
    open var bSimulating: Boolean
    open var bNotifyCollisions: Boolean
    open var ObjectType: String /* "Chaos_NONE" | "Chaos_Object_Sleeping" | "Chaos_Object_Kinematic" | "Chaos_Object_Static" | "Chaos_Object_Dynamic" | "Chaos_Object_UserDefined" | "Chaos_Max" */
    open var Density: Number
    open var MinMass: Number
    open var MaxMass: Number
    open var CollisionType: String /* "Chaos_Volumetric" | "Chaos_Surface_Volumetric" | "Chaos_Max" */
    open var ImplicitShapeParticlesPerUnitArea: Number
    open var ImplicitShapeMinNumParticles: Number
    open var ImplicitShapeMaxNumParticles: Number
    open var MinLevelSetResolution: Number
    open var MaxLevelSetResolution: Number
    open var CollisionGroup: Number
    open var InitialVelocityType: String /* "Chaos_Initial_Velocity_User_Defined" | "Chaos_Initial_Velocity_None" | "Chaos_Max" */
    open var InitialLinearVelocity: Vector
    open var InitialAngularVelocity: Vector
    open var OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) -> Unit>
    open fun PhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo)

    companion object {
        fun Load(ResourceName: String): SkeletalMeshSimulationComponent
        fun Find(Outer: UObject, ResourceName: String): SkeletalMeshSimulationComponent
        fun GetDefaultObject(): SkeletalMeshSimulationComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SkeletalMeshSimulationComponent
        fun C(Other: UObject): SkeletalMeshSimulationComponent
        fun C(Other: Any): SkeletalMeshSimulationComponent
    }
}

external open class StaticMeshSimulationComponent : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var Simulating: Boolean
    open var bNotifyCollisions: Boolean
    open var ObjectType: String /* "Chaos_NONE" | "Chaos_Object_Sleeping" | "Chaos_Object_Kinematic" | "Chaos_Object_Static" | "Chaos_Object_Dynamic" | "Chaos_Object_UserDefined" | "Chaos_Max" */
    open var Mass: Number
    open var CollisionType: String /* "Chaos_Volumetric" | "Chaos_Surface_Volumetric" | "Chaos_Max" */
    open var ImplicitType: String /* "Chaos_Implicit_Box" | "Chaos_Implicit_Sphere" | "Chaos_Implicit_Capsule" | "Chaos_Implicit_LevelSet" | "Chaos_Implicit_None" | "Chaos_Max" */
    open var MinLevelSetResolution: Number
    open var MaxLevelSetResolution: Number
    open var InitialVelocityType: String /* "Chaos_Initial_Velocity_User_Defined" | "Chaos_Initial_Velocity_None" | "Chaos_Max" */
    open var InitialLinearVelocity: Vector
    open var InitialAngularVelocity: Vector
    open var DamageThreshold: Number
    open var PhysicalMaterial: ChaosPhysicalMaterial
    open var ChaosSolverActor: ChaosSolverActor
    open var OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) -> Unit>
    open var SimulatedComponents: Array<PrimitiveComponent>
    open fun PhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo)
    open fun ForceRecreatePhysicsState()

    companion object {
        fun Load(ResourceName: String): StaticMeshSimulationComponent
        fun Find(Outer: UObject, ResourceName: String): StaticMeshSimulationComponent
        fun GetDefaultObject(): StaticMeshSimulationComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): StaticMeshSimulationComponent
        fun C(Other: UObject): StaticMeshSimulationComponent
        fun C(Other: Any): StaticMeshSimulationComponent
    }
}

external open class SceneOutlinerMenuContext : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SceneOutlinerMenuContext
        fun Find(Outer: UObject, ResourceName: String): SceneOutlinerMenuContext
        fun GetDefaultObject(): SceneOutlinerMenuContext
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SceneOutlinerMenuContext
        fun C(Other: UObject): SceneOutlinerMenuContext
        fun C(Other: Any): SceneOutlinerMenuContext
    }
}

external open class SceneOutlinerSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bHideTemporaryActors: Boolean
    open var bShowOnlyActorsInCurrentLevel: Boolean
    open var bHideFoldersContainingHiddenActors: Boolean
    open var bShowOnlySelectedActors: Boolean
    open var bShowActorComponents: Boolean

    companion object {
        fun Load(ResourceName: String): SceneOutlinerSettings
        fun Find(Outer: UObject, ResourceName: String): SceneOutlinerSettings
        fun GetDefaultObject(): SceneOutlinerSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SceneOutlinerSettings
        fun C(Other: UObject): SceneOutlinerSettings
        fun C(Other: Any): SceneOutlinerSettings
    }
}

external open class ActorFactoryGeometryCollection : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryGeometryCollection
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryGeometryCollection
        fun GetDefaultObject(): ActorFactoryGeometryCollection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryGeometryCollection
        fun C(Other: UObject): ActorFactoryGeometryCollection
        fun C(Other: Any): ActorFactoryGeometryCollection
    }
}

external open class GeometryCollectionCacheFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var TargetCollection: GeometryCollection

    companion object {
        fun Load(ResourceName: String): GeometryCollectionCacheFactory
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionCacheFactory
        fun GetDefaultObject(): GeometryCollectionCacheFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionCacheFactory
        fun C(Other: UObject): GeometryCollectionCacheFactory
        fun C(Other: Any): GeometryCollectionCacheFactory
    }
}

external open class GeometryCollectionFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GeometryCollectionFactory
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionFactory
        fun GetDefaultObject(): GeometryCollectionFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionFactory
        fun C(Other: UObject): GeometryCollectionFactory
        fun C(Other: Any): GeometryCollectionFactory
    }
}

external open class GeometryCollectionThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GeometryCollectionThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): GeometryCollectionThumbnailRenderer
        fun GetDefaultObject(): GeometryCollectionThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GeometryCollectionThumbnailRenderer
        fun C(Other: UObject): GeometryCollectionThumbnailRenderer
        fun C(Other: Any): GeometryCollectionThumbnailRenderer
    }
}

external open class AutoClusterFractureCommand : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AutoClusterFractureCommand
        fun Find(Outer: UObject, ResourceName: String): AutoClusterFractureCommand
        fun GetDefaultObject(): AutoClusterFractureCommand
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AutoClusterFractureCommand
        fun C(Other: UObject): AutoClusterFractureCommand
        fun C(Other: Any): AutoClusterFractureCommand
    }
}

external open class FractureTool : UObject {
    constructor()
    constructor(Outer: UObject)
    open var CommonSettings: FractureCommonSettings

    companion object {
        fun Load(ResourceName: String): FractureTool
        fun Find(Outer: UObject, ResourceName: String): FractureTool
        fun GetDefaultObject(): FractureTool
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureTool
        fun C(Other: UObject): FractureTool
        fun C(Other: Any): FractureTool
    }
}

external open class FractureCommonSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var RandomSeed: Number
    open var ChanceToFracture: Number
    open var bGroupFracture: Boolean
    open var bDrawSites: Boolean
    open var bDrawDiagram: Boolean
    open var Amplitude: Number
    open var Frequency: Number
    open var OctaveNumber: Number
    open var SurfaceResolution: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureCommonSettings
        fun Find(Outer: UObject, ResourceName: String): FractureCommonSettings
        fun GetDefaultObject(): FractureCommonSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureCommonSettings
        fun C(Other: UObject): FractureCommonSettings
        fun C(Other: Any): FractureCommonSettings
    }
}

external object EFractureAutoClusterMode {
    var BoundingBox: String /* "BoundingBox" */
    var Proximity: String /* "Proximity" */
    var Distance: String /* "Distance" */
    var EFractureAutoClusterMode_MAX: String /* "EFractureAutoClusterMode_MAX" */
}

external open class FractureAutoClusterSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var AutoClusterMode: String /* "BoundingBox" | "Proximity" | "Distance" | "EFractureAutoClusterMode_MAX" */
    open var SiteCount: Any

    companion object {
        fun Load(ResourceName: String): FractureAutoClusterSettings
        fun Find(Outer: UObject, ResourceName: String): FractureAutoClusterSettings
        fun GetDefaultObject(): FractureAutoClusterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureAutoClusterSettings
        fun C(Other: UObject): FractureAutoClusterSettings
        fun C(Other: Any): FractureAutoClusterSettings
    }
}

external open class FractureToolAutoCluster : FractureTool {
    constructor()
    constructor(Outer: UObject)
    open var Settings: FractureAutoClusterSettings

    companion object {
        fun Load(ResourceName: String): FractureToolAutoCluster
        fun Find(Outer: UObject, ResourceName: String): FractureToolAutoCluster
        fun GetDefaultObject(): FractureToolAutoCluster
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolAutoCluster
        fun C(Other: UObject): FractureToolAutoCluster
        fun C(Other: Any): FractureToolAutoCluster
    }
}

external open class FractureBitmapSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Transform: Transform
    open var Scale: Vector2D
    open var IsRelativeTransform: Boolean
    open var SnapThreshold: Number
    open var SegmentationErrorThreshold: Number
    open var CutoutTexture: Any

    companion object {
        fun Load(ResourceName: String): FractureBitmapSettings
        fun Find(Outer: UObject, ResourceName: String): FractureBitmapSettings
        fun GetDefaultObject(): FractureBitmapSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureBitmapSettings
        fun C(Other: UObject): FractureBitmapSettings
        fun C(Other: Any): FractureBitmapSettings
    }
}

external open class FractureToolBitmap : FractureTool {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FractureToolBitmap
        fun Find(Outer: UObject, ResourceName: String): FractureToolBitmap
        fun GetDefaultObject(): FractureToolBitmap
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolBitmap
        fun C(Other: UObject): FractureToolBitmap
        fun C(Other: Any): FractureToolBitmap
    }
}

external object EFractureBrickBond {
    var Stretcher: String /* "Stretcher" */
    var Stack: String /* "Stack" */
    var English: String /* "English" */
    var Header: String /* "Header" */
    var Flemish: String /* "Flemish" */
    var EFractureBrickBond_MAX: String /* "EFractureBrickBond_MAX" */
}

external object EFractureBrickProjection {
    var X: String /* "X" */
    var Y: String /* "Y" */
    var Z: String /* "Z" */
    var EFractureBrickProjection_MAX: String /* "EFractureBrickProjection_MAX" */
}

external open class FractureBrickSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Bond: String /* "Stretcher" | "Stack" | "English" | "Header" | "Flemish" | "EFractureBrickBond_MAX" */
    open var Forward: String /* "X" | "Y" | "Z" | "EFractureBrickProjection_MAX" */
    open var Up: String /* "X" | "Y" | "Z" | "EFractureBrickProjection_MAX" */
    open var BrickLength: Number
    open var BrickHeight: Number
    open var BrickDepth: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureBrickSettings
        fun Find(Outer: UObject, ResourceName: String): FractureBrickSettings
        fun GetDefaultObject(): FractureBrickSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureBrickSettings
        fun C(Other: UObject): FractureBrickSettings
        fun C(Other: Any): FractureBrickSettings
    }
}

external open class FractureToolBrick : FractureTool {
    constructor()
    constructor(Outer: UObject)
    open var BrickSettings: FractureBrickSettings

    companion object {
        fun Load(ResourceName: String): FractureToolBrick
        fun Find(Outer: UObject, ResourceName: String): FractureToolBrick
        fun GetDefaultObject(): FractureToolBrick
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolBrick
        fun C(Other: UObject): FractureToolBrick
        fun C(Other: Any): FractureToolBrick
    }
}

external open class FractureClusterSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var NumberClustersMin: Number
    open var NumberClustersMax: Number
    open var SitesPerClusterMin: Number
    open var SitesPerClusterMax: Number
    open var ClusterRadiusPercentageMin: Number
    open var ClusterRadiusPercentageMax: Number
    open var ClusterRadius: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureClusterSettings
        fun Find(Outer: UObject, ResourceName: String): FractureClusterSettings
        fun GetDefaultObject(): FractureClusterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureClusterSettings
        fun C(Other: UObject): FractureClusterSettings
        fun C(Other: Any): FractureClusterSettings
    }
}

external open class FractureToolVoronoiBase : FractureTool {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FractureToolVoronoiBase
        fun Find(Outer: UObject, ResourceName: String): FractureToolVoronoiBase
        fun GetDefaultObject(): FractureToolVoronoiBase
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolVoronoiBase
        fun C(Other: UObject): FractureToolVoronoiBase
        fun C(Other: Any): FractureToolVoronoiBase
    }
}

external open class FractureToolCluster : FractureToolVoronoiBase {
    constructor()
    constructor(Outer: UObject)
    open var Settings: FractureClusterSettings

    companion object {
        fun Load(ResourceName: String): FractureToolCluster
        fun Find(Outer: UObject, ResourceName: String): FractureToolCluster
        fun GetDefaultObject(): FractureToolCluster
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolCluster
        fun C(Other: UObject): FractureToolCluster
        fun C(Other: Any): FractureToolCluster
    }
}

external open class FracturePlaneCutSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var NumberPlanarCuts: Number
    open var ReferenceActor: Any
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FracturePlaneCutSettings
        fun Find(Outer: UObject, ResourceName: String): FracturePlaneCutSettings
        fun GetDefaultObject(): FracturePlaneCutSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FracturePlaneCutSettings
        fun C(Other: UObject): FracturePlaneCutSettings
        fun C(Other: Any): FracturePlaneCutSettings
    }
}

external open class FractureToolPlaneCut : FractureTool {
    constructor()
    constructor(Outer: UObject)
    open var PlaneCutSettings: FracturePlaneCutSettings

    companion object {
        fun Load(ResourceName: String): FractureToolPlaneCut
        fun Find(Outer: UObject, ResourceName: String): FractureToolPlaneCut
        fun GetDefaultObject(): FractureToolPlaneCut
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolPlaneCut
        fun C(Other: UObject): FractureToolPlaneCut
        fun C(Other: Any): FractureToolPlaneCut
    }
}

external open class FractureRadialSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Center: Vector
    open var Normal: Vector
    open var Radius: Number
    open var AngularSteps: Number
    open var RadialSteps: Number
    open var AngleOffset: Number
    open var Variability: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureRadialSettings
        fun Find(Outer: UObject, ResourceName: String): FractureRadialSettings
        fun GetDefaultObject(): FractureRadialSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureRadialSettings
        fun C(Other: UObject): FractureRadialSettings
        fun C(Other: Any): FractureRadialSettings
    }
}

external open class FractureToolRadial : FractureToolVoronoiBase {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FractureToolRadial
        fun Find(Outer: UObject, ResourceName: String): FractureToolRadial
        fun GetDefaultObject(): FractureToolRadial
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolRadial
        fun C(Other: UObject): FractureToolRadial
        fun C(Other: Any): FractureToolRadial
    }
}

external open class FractureSliceSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SlicesX: Number
    open var SlicesY: Number
    open var SlicesZ: Number
    open var SliceAngleVariation: Number
    open var SliceOffsetVariation: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureSliceSettings
        fun Find(Outer: UObject, ResourceName: String): FractureSliceSettings
        fun GetDefaultObject(): FractureSliceSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureSliceSettings
        fun C(Other: UObject): FractureSliceSettings
        fun C(Other: Any): FractureSliceSettings
    }
}

external open class FractureToolSlice : FractureTool {
    constructor()
    constructor(Outer: UObject)
    open var SliceSettings: FractureSliceSettings

    companion object {
        fun Load(ResourceName: String): FractureToolSlice
        fun Find(Outer: UObject, ResourceName: String): FractureToolSlice
        fun GetDefaultObject(): FractureToolSlice
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolSlice
        fun C(Other: UObject): FractureToolSlice
        fun C(Other: Any): FractureToolSlice
    }
}

external open class FractureUniformSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var NumberVoronoiSitesMin: Number
    open var NumberVoronoiSitesMax: Number
    open var OwnerTool: FractureTool

    companion object {
        fun Load(ResourceName: String): FractureUniformSettings
        fun Find(Outer: UObject, ResourceName: String): FractureUniformSettings
        fun GetDefaultObject(): FractureUniformSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureUniformSettings
        fun C(Other: UObject): FractureUniformSettings
        fun C(Other: Any): FractureUniformSettings
    }
}

external open class FractureToolUniform : FractureToolVoronoiBase {
    constructor()
    constructor(Outer: UObject)
    open var Settings: FractureUniformSettings

    companion object {
        fun Load(ResourceName: String): FractureToolUniform
        fun Find(Outer: UObject, ResourceName: String): FractureToolUniform
        fun GetDefaultObject(): FractureToolUniform
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FractureToolUniform
        fun C(Other: UObject): FractureToolUniform
        fun C(Other: Any): FractureToolUniform
    }
}

external open class MovieSceneGeometryCacheParams {
    open var GeometryCacheAsset: GeometryCache
    open var FirstLoopStartFrameOffset: FrameNumber
    open var StartFrameOffset: FrameNumber
    open var EndFrameOffset: FrameNumber
    open var PlayRate: Number
    open var bReverse: Boolean
    open var StartOffset: Number
    open var EndOffset: Number
    open var GeometryCache: SoftObjectPath
    open fun clone(): MovieSceneGeometryCacheParams

    companion object {
        fun C(Other: UObject): MovieSceneGeometryCacheParams
        fun C(Other: Any): MovieSceneGeometryCacheParams
    }
}

external open class MovieSceneGeometryCacheSection : MovieSceneSection {
    constructor()
    constructor(Outer: UObject)
    open var Params: MovieSceneGeometryCacheParams

    companion object {
        fun Load(ResourceName: String): MovieSceneGeometryCacheSection
        fun Find(Outer: UObject, ResourceName: String): MovieSceneGeometryCacheSection
        fun GetDefaultObject(): MovieSceneGeometryCacheSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneGeometryCacheSection
        fun C(Other: UObject): MovieSceneGeometryCacheSection
        fun C(Other: Any): MovieSceneGeometryCacheSection
    }
}

external open class MovieSceneGeometryCacheTrack : MovieSceneNameableTrack {
    constructor()
    constructor(Outer: UObject)
    open var AnimationSections: Array<MovieSceneSection>

    companion object {
        fun Load(ResourceName: String): MovieSceneGeometryCacheTrack
        fun Find(Outer: UObject, ResourceName: String): MovieSceneGeometryCacheTrack
        fun GetDefaultObject(): MovieSceneGeometryCacheTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneGeometryCacheTrack
        fun C(Other: UObject): MovieSceneGeometryCacheTrack
        fun C(Other: Any): MovieSceneGeometryCacheTrack
    }
}

external open class MovieSceneGeometryCollectionParams {
    open var GeometryCollectionCache: SoftObjectPath
    open var StartFrameOffset: FrameNumber
    open var EndFrameOffset: FrameNumber
    open var PlayRate: Number
    open fun clone(): MovieSceneGeometryCollectionParams

    companion object {
        fun C(Other: UObject): MovieSceneGeometryCollectionParams
        fun C(Other: Any): MovieSceneGeometryCollectionParams
    }
}

external open class MovieSceneGeometryCollectionSection : MovieSceneSection {
    constructor()
    constructor(Outer: UObject)
    open var Params: MovieSceneGeometryCollectionParams

    companion object {
        fun Load(ResourceName: String): MovieSceneGeometryCollectionSection
        fun Find(Outer: UObject, ResourceName: String): MovieSceneGeometryCollectionSection
        fun GetDefaultObject(): MovieSceneGeometryCollectionSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneGeometryCollectionSection
        fun C(Other: UObject): MovieSceneGeometryCollectionSection
        fun C(Other: Any): MovieSceneGeometryCollectionSection
    }
}

external open class MovieSceneGeometryCollectionTrack : MovieSceneNameableTrack {
    constructor()
    constructor(Outer: UObject)
    open var AnimationSections: Array<MovieSceneSection>

    companion object {
        fun Load(ResourceName: String): MovieSceneGeometryCollectionTrack
        fun Find(Outer: UObject, ResourceName: String): MovieSceneGeometryCollectionTrack
        fun GetDefaultObject(): MovieSceneGeometryCollectionTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneGeometryCollectionTrack
        fun C(Other: UObject): MovieSceneGeometryCollectionTrack
        fun C(Other: Any): MovieSceneGeometryCollectionTrack
    }
}

external open class ImgMediaSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var DefaultFrameRate: FrameRate
    open var CacheBehindPercentage: Number
    open var CacheSizeGB: Number
    open var CacheThreads: Number
    open var CacheThreadStackSizeKB: Number
    open var GlobalCacheSizeGB: Number
    open var UseGlobalCache: Boolean
    open var ExrDecoderThreads: Any
    open var DefaultProxy: String
    open var UseDefaultProxy: Boolean

    companion object {
        fun Load(ResourceName: String): ImgMediaSettings
        fun Find(Outer: UObject, ResourceName: String): ImgMediaSettings
        fun GetDefaultObject(): ImgMediaSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ImgMediaSettings
        fun C(Other: UObject): ImgMediaSettings
        fun C(Other: Any): ImgMediaSettings
    }
}

external interface `T$93` {
    var OutProxies: Array<String>
}

external open class ImgMediaSource : BaseMediaSource {
    open var FrameRateOverride: FrameRate
    open var ProxyOverride: String
    open var SequencePath: DirectoryPath
    open fun SetSequencePath(Path: String)
    open fun GetSequencePath(): String
    open fun GetProxies(OutProxies: Array<String> = definedExternally): `T$93`

    companion object {
        fun Load(ResourceName: String): ImgMediaSource
        fun Find(Outer: UObject, ResourceName: String): ImgMediaSource
        fun GetDefaultObject(): ImgMediaSource
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ImgMediaSource
        fun C(Other: UObject): ImgMediaSource
        fun C(Other: Any): ImgMediaSource
    }
}

external open class MovieSceneMediaPlayerPropertySection : MovieSceneSection {
    constructor()
    constructor(Outer: UObject)
    open var MediaSource: MediaSource
    open var bLoop: Boolean

    companion object {
        fun Load(ResourceName: String): MovieSceneMediaPlayerPropertySection
        fun Find(Outer: UObject, ResourceName: String): MovieSceneMediaPlayerPropertySection
        fun GetDefaultObject(): MovieSceneMediaPlayerPropertySection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneMediaPlayerPropertySection
        fun C(Other: UObject): MovieSceneMediaPlayerPropertySection
        fun C(Other: Any): MovieSceneMediaPlayerPropertySection
    }
}

external open class MovieSceneMediaPlayerPropertyTrack : MovieScenePropertyTrack {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MovieSceneMediaPlayerPropertyTrack
        fun Find(Outer: UObject, ResourceName: String): MovieSceneMediaPlayerPropertyTrack
        fun GetDefaultObject(): MovieSceneMediaPlayerPropertyTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneMediaPlayerPropertyTrack
        fun C(Other: UObject): MovieSceneMediaPlayerPropertyTrack
        fun C(Other: Any): MovieSceneMediaPlayerPropertyTrack
    }
}

external open class MovieSceneMediaSection : MovieSceneSection {
    constructor()
    constructor(Outer: UObject)
    open var MediaSource: MediaSource
    open var bLooping: Boolean
    open var StartFrameOffset: FrameNumber
    open var MediaTexture: MediaTexture
    open var MediaSoundComponent: MediaSoundComponent
    open var bUseExternalMediaPlayer: Boolean
    open var ExternalMediaPlayer: MediaPlayer
    open var ThumbnailReferenceOffset: Number

    companion object {
        fun Load(ResourceName: String): MovieSceneMediaSection
        fun Find(Outer: UObject, ResourceName: String): MovieSceneMediaSection
        fun GetDefaultObject(): MovieSceneMediaSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneMediaSection
        fun C(Other: UObject): MovieSceneMediaSection
        fun C(Other: Any): MovieSceneMediaSection
    }
}

external open class MovieSceneMediaTrack : MovieSceneNameableTrack {
    constructor()
    constructor(Outer: UObject)
    open var MediaSections: Array<MovieSceneSection>

    companion object {
        fun Load(ResourceName: String): MovieSceneMediaTrack
        fun Find(Outer: UObject, ResourceName: String): MovieSceneMediaTrack
        fun GetDefaultObject(): MovieSceneMediaTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MovieSceneMediaTrack
        fun C(Other: UObject): MovieSceneMediaTrack
        fun C(Other: Any): MovieSceneMediaTrack
    }
}

external open class GrainTableEntry {
    open var SampleIndex: Number
    open var RPM: Number
    open var AnalysisSampleIndex: Number
    open fun clone(): GrainTableEntry

    companion object {
        fun C(Other: UObject): GrainTableEntry
        fun C(Other: Any): GrainTableEntry
    }
}

external open class MotoSynthSource : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SoundWaveSource: SoundWave
    open var bConvertTo8Bit: Boolean
    open var DownSampleFactor: Number
    open var RPMCurve: RuntimeFloatCurve
    open var RPMSynthVolume: Number
    open var bEnableFilteringForAnalysis: Boolean
    open var LowPassFilterFrequency: Number
    open var HighPassFilterFrequency: Number
    open var bEnableDynamicsProcessorForAnalysis: Boolean
    open var DynamicsProcessorLookahead: Number
    open var DynamicsProcessorInputGainDb: Number
    open var DynamicsProcessorRatio: Number
    open var DynamicsKneeBandwidth: Number
    open var DynamicsProcessorThreshold: Number
    open var DynamicsProcessorAttackTimeMsec: Number
    open var DynamicsProcessorReleaseTimeMsec: Number
    open var bEnableNormalizationForAnalysis: Boolean
    open var SampleShiftOffset: Number
    open var RPMCycleCalibrationSample: Number
    open var RPMFirstCycleSampleEnd: Number
    open var RPMEstimationOctaveOffset: Number
    open var bWriteAnalysisInputToFile: Boolean
    open var AnalysisInputFilePath: String
    open var SourceData: Array<Number>
    open var SourceDataPCM: Array<Any>
    open var SourceSampleRate: Number
    open var GrainTable: Array<GrainTableEntry>
    open fun StopToneMatch()
    open fun PlayToneMatch()
    open fun PerformGrainTableAnalysis()

    companion object {
        fun Load(ResourceName: String): MotoSynthSource
        fun Find(Outer: UObject, ResourceName: String): MotoSynthSource
        fun GetDefaultObject(): MotoSynthSource
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MotoSynthSource
        fun C(Other: UObject): MotoSynthSource
        fun C(Other: Any): MotoSynthSource
    }
}

external open class MotoSynthRuntimeSettings {
    open var bSynthToneEnabled: Boolean
    open var SynthToneVolume: Number
    open var SynthToneFilterFrequency: Number
    open var SynthOctaveShift: Number
    open var bGranularEngineEnabled: Boolean
    open var GranularEngineVolume: Number
    open var GranularEnginePitchScale: Number
    open var NumSamplesToCrossfadeBetweenGrains: Number
    open var NumGrainTableEntriesPerGrain: Number
    open var GrainTableRandomOffsetForConstantRPMs: Number
    open var GrainCrossfadeSamplesForConstantRPMs: Number
    open var AccelerationSource: MotoSynthSource
    open var DecelerationSource: MotoSynthSource
    open var bStereoWidenerEnabled: Boolean
    open var StereoDelayMsec: Number
    open var StereoFeedback: Number
    open var StereoWidenerWetlevel: Number
    open var StereoWidenerDryLevel: Number
    open var StereoWidenerDelayRatio: Number
    open var bStereoWidenerFilterEnabled: Boolean
    open var StereoWidenerFilterFrequency: Number
    open var StereoWidenerFilterQ: Number
    open fun clone(): MotoSynthRuntimeSettings

    companion object {
        fun C(Other: UObject): MotoSynthRuntimeSettings
        fun C(Other: Any): MotoSynthRuntimeSettings
    }
}

external open class MotoSynthPreset : UObject {
    constructor()
    constructor(Outer: UObject)
    open var EnginePreviewRPMCurve: RuntimeFloatCurve
    open var Settings: MotoSynthRuntimeSettings
    open fun StopEnginePreview()
    open fun StartEnginePreview()
    open fun DumpRuntimeMemoryUsage()

    companion object {
        fun Load(ResourceName: String): MotoSynthPreset
        fun Find(Outer: UObject, ResourceName: String): MotoSynthPreset
        fun GetDefaultObject(): MotoSynthPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MotoSynthPreset
        fun C(Other: UObject): MotoSynthPreset
        fun C(Other: Any): MotoSynthPreset
    }
}

external interface `T$94` {
    var OutMinRPM: Number
    var OutMaxRPM: Number
}

external open class SynthComponentMoto : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var MotoSynthPreset: MotoSynthPreset
    open var RPM: Number
    open fun SetSettings(InSettings: MotoSynthRuntimeSettings)
    open fun SetRPM(InRPM: Number, InTimeSec: Number)
    open fun IsEnabled(): Boolean
    open fun GetRPMRange(OutMinRPM: Number = definedExternally, OutMaxRPM: Number = definedExternally): `T$94`

    companion object {
        fun Load(ResourceName: String): SynthComponentMoto
        fun Find(Outer: UObject, ResourceName: String): SynthComponentMoto
        fun GetDefaultObject(): SynthComponentMoto
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthComponentMoto
        fun C(Other: UObject): SynthComponentMoto
        fun C(Other: Any): SynthComponentMoto
    }
}

external open class MotoSynthPresetFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MotoSynthPresetFactory
        fun Find(Outer: UObject, ResourceName: String): MotoSynthPresetFactory
        fun GetDefaultObject(): MotoSynthPresetFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MotoSynthPresetFactory
        fun C(Other: UObject): MotoSynthPresetFactory
        fun C(Other: Any): MotoSynthPresetFactory
    }
}

external open class MotoSynthSourceFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MotoSynthSourceFactory
        fun Find(Outer: UObject, ResourceName: String): MotoSynthSourceFactory
        fun GetDefaultObject(): MotoSynthSourceFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MotoSynthSourceFactory
        fun C(Other: UObject): MotoSynthSourceFactory
        fun C(Other: Any): MotoSynthSourceFactory
    }
}

external open class MagicLeapAudioFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MagicLeapAudioFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): MagicLeapAudioFunctionLibrary
        fun GetDefaultObject(): MagicLeapAudioFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapAudioFunctionLibrary
        fun SetMicMute(IsMuted: Boolean): Boolean
        fun IsMicMuted(): Boolean
        fun C(Other: UObject): MagicLeapAudioFunctionLibrary
        fun C(Other: Any): MagicLeapAudioFunctionLibrary
    }
}

external open class MagicLeapSharedWorldSharedData {
    open var PinIDs: Array<Guid>
    open fun clone(): MagicLeapSharedWorldSharedData

    companion object {
        fun C(Other: UObject): MagicLeapSharedWorldSharedData
        fun C(Other: Any): MagicLeapSharedWorldSharedData
    }
}

external open class MagicLeapSharedWorldPinData {
    open var PinId: Guid
    open var PinState: MagicLeapARPinState
    open fun clone(): MagicLeapSharedWorldPinData

    companion object {
        fun C(Other: UObject): MagicLeapSharedWorldPinData
        fun C(Other: Any): MagicLeapSharedWorldPinData
    }
}

external open class MagicLeapSharedWorldLocalData {
    open var LocalPins: Array<MagicLeapSharedWorldPinData>
    open fun clone(): MagicLeapSharedWorldLocalData

    companion object {
        fun C(Other: UObject): MagicLeapSharedWorldLocalData
        fun C(Other: Any): MagicLeapSharedWorldLocalData
    }
}

external open class MagicLeapSharedWorldAlignmentTransforms {
    open var AlignmentTransforms: Array<Transform>
    open fun clone(): MagicLeapSharedWorldAlignmentTransforms

    companion object {
        fun C(Other: UObject): MagicLeapSharedWorldAlignmentTransforms
        fun C(Other: Any): MagicLeapSharedWorldAlignmentTransforms
    }
}

external open class MagicLeapSharedWorldPlayerController(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : PlayerController {
    open fun ServerSetLocalWorldData(LocalWorldReplicationData: MagicLeapSharedWorldLocalData)
    open fun ServerSetAlignmentTransforms(InAlignmentTransforms: MagicLeapSharedWorldAlignmentTransforms)
    open fun IsChosenOne(): Boolean
    open fun ClientSetChosenOne(bChosenOne: Boolean)
    open fun ClientMarkReadyForSendingLocalData()
    open fun CanSendLocalDataToServer(): Boolean

    companion object {
        fun GetDefaultObject(): MagicLeapSharedWorldPlayerController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSharedWorldPlayerController
        fun C(Other: UObject): MagicLeapSharedWorldPlayerController
        fun C(Other: Any): MagicLeapSharedWorldPlayerController
    }
}

external interface `T$95` {
    var NewSharedWorldData: MagicLeapSharedWorldSharedData
}

external open class MagicLeapSharedWorldGameMode(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : GameMode {
    open var SharedWorldData: MagicLeapSharedWorldSharedData
    open var OnNewLocalDataFromClients: UnrealEngineMulticastDelegate<() -> Unit>
    open var PinSelectionConfidenceThreshold: Number
    open var ChosenOne: MagicLeapSharedWorldPlayerController
    open fun SendSharedWorldDataToClients(): Boolean
    open fun SelectChosenOne()
    open fun DetermineSharedWorldData(NewSharedWorldData: MagicLeapSharedWorldSharedData = definedExternally): `T$95`

    companion object {
        fun GetDefaultObject(): MagicLeapSharedWorldGameMode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSharedWorldGameMode
        fun C(Other: UObject): MagicLeapSharedWorldGameMode
        fun C(Other: Any): MagicLeapSharedWorldGameMode
    }
}

external open class MagicLeapSharedWorldGameState(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : GameState {
    open var SharedWorldData: MagicLeapSharedWorldSharedData
    open var AlignmentTransforms: MagicLeapSharedWorldAlignmentTransforms
    open var OnSharedWorldDataUpdated: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnAlignmentTransformsUpdated: UnrealEngineMulticastDelegate<() -> Unit>
    open fun OnReplicate_SharedWorldData()
    open fun OnReplicate_AlignmentTransforms()
    open fun CalculateXRCameraRootTransform(): Transform

    companion object {
        fun GetDefaultObject(): MagicLeapSharedWorldGameState
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSharedWorldGameState
        fun C(Other: UObject): MagicLeapSharedWorldGameState
        fun C(Other: Any): MagicLeapSharedWorldGameState
    }
}

external open class TemplateSequence : MovieSceneSequence {
    constructor()
    constructor(Outer: UObject)
    open var MovieScene: MovieScene
    open var BoundActorClass: Class
    open var BoundPreviewActor: Actor
    open var BoundActorComponents: Any

    companion object {
        fun Load(ResourceName: String): TemplateSequence
        fun Find(Outer: UObject, ResourceName: String): TemplateSequence
        fun GetDefaultObject(): TemplateSequence
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequence
        fun C(Other: UObject): TemplateSequence
        fun C(Other: Any): TemplateSequence
    }
}

external open class CameraAnimationSequence : TemplateSequence {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CameraAnimationSequence
        fun Find(Outer: UObject, ResourceName: String): CameraAnimationSequence
        fun GetDefaultObject(): CameraAnimationSequence
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CameraAnimationSequence
        fun C(Other: UObject): CameraAnimationSequence
        fun C(Other: Any): CameraAnimationSequence
    }
}

external open class SequenceCameraShakeCameraStandIn : UObject {
    constructor()
    constructor(Outer: UObject)
    open var FieldOfView: Number

    companion object {
        fun Load(ResourceName: String): SequenceCameraShakeCameraStandIn
        fun Find(Outer: UObject, ResourceName: String): SequenceCameraShakeCameraStandIn
        fun GetDefaultObject(): SequenceCameraShakeCameraStandIn
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SequenceCameraShakeCameraStandIn
        fun C(Other: UObject): SequenceCameraShakeCameraStandIn
        fun C(Other: Any): SequenceCameraShakeCameraStandIn
    }
}

external open class SequenceCameraShakeSequencePlayer : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BoundObjectOverride: UObject
    open var Sequence: MovieSceneSequence
    open var RootTemplateInstance: MovieSceneRootEvaluationTemplateInstance

    companion object {
        fun Load(ResourceName: String): SequenceCameraShakeSequencePlayer
        fun Find(Outer: UObject, ResourceName: String): SequenceCameraShakeSequencePlayer
        fun GetDefaultObject(): SequenceCameraShakeSequencePlayer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SequenceCameraShakeSequencePlayer
        fun C(Other: UObject): SequenceCameraShakeSequencePlayer
        fun C(Other: Any): SequenceCameraShakeSequencePlayer
    }
}

external open class SequenceCameraShake : CameraShakeBase {
    constructor()
    constructor(Outer: UObject)
    open var Sequence: CameraAnimationSequence
    open var PlayRate: Number
    open var Scale: Number
    open var BlendInTime: Number
    open var BlendOutTime: Number
    open var RandomSegmentDuration: Number
    open var bRandomSegment: Boolean
    open var Player: SequenceCameraShakeSequencePlayer
    open var CameraStandIn: SequenceCameraShakeCameraStandIn

    companion object {
        fun Load(ResourceName: String): SequenceCameraShake
        fun Find(Outer: UObject, ResourceName: String): SequenceCameraShake
        fun GetDefaultObject(): SequenceCameraShake
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SequenceCameraShake
        fun C(Other: UObject): SequenceCameraShake
        fun C(Other: Any): SequenceCameraShake
    }
}

external interface `T$96` {
    var OutActor: TemplateSequenceActor
    var `$`: TemplateSequencePlayer
}

external open class TemplateSequencePlayer : MovieSceneSequencePlayer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TemplateSequencePlayer
        fun Find(Outer: UObject, ResourceName: String): TemplateSequencePlayer
        fun GetDefaultObject(): TemplateSequencePlayer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequencePlayer
        fun CreateTemplateSequencePlayer(WorldContextObject: UObject, TemplateSequence: TemplateSequence, Settings: MovieSceneSequencePlaybackSettings, OutActor: TemplateSequenceActor = definedExternally): `T$96`
        fun C(Other: UObject): TemplateSequencePlayer
        fun C(Other: Any): TemplateSequencePlayer
    }
}

external open class TemplateSequenceBindingOverrideData {
    open var UObject: Any
    open var bOverridesDefault: Boolean
    open fun clone(): TemplateSequenceBindingOverrideData

    companion object {
        fun C(Other: UObject): TemplateSequenceBindingOverrideData
        fun C(Other: Any): TemplateSequenceBindingOverrideData
    }
}

external open class TemplateSequenceActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var PlaybackSettings: MovieSceneSequencePlaybackSettings
    open var SequencePlayer: TemplateSequencePlayer
    open var TemplateSequence: SoftObjectPath
    open var BindingOverride: TemplateSequenceBindingOverrideData
    open fun SetSequence(InSequence: TemplateSequence)
    open fun SetBinding(Actor: Actor)
    open fun LoadSequence(): TemplateSequence
    open fun GetSequencePlayer(): TemplateSequencePlayer
    open fun GetSequence(): TemplateSequence

    companion object {
        fun GetDefaultObject(): TemplateSequenceActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequenceActor
        fun C(Other: UObject): TemplateSequenceActor
        fun C(Other: Any): TemplateSequenceActor
    }
}

external open class TemplateSequenceSection : MovieSceneSubSection {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TemplateSequenceSection
        fun Find(Outer: UObject, ResourceName: String): TemplateSequenceSection
        fun GetDefaultObject(): TemplateSequenceSection
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequenceSection
        fun C(Other: UObject): TemplateSequenceSection
        fun C(Other: Any): TemplateSequenceSection
    }
}

external open class TemplateSequenceSystem : MovieSceneEntitySystem {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TemplateSequenceSystem
        fun Find(Outer: UObject, ResourceName: String): TemplateSequenceSystem
        fun GetDefaultObject(): TemplateSequenceSystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequenceSystem
        fun C(Other: UObject): TemplateSequenceSystem
        fun C(Other: Any): TemplateSequenceSystem
    }
}

external open class TemplateSequenceTrack : MovieSceneSubTrack {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TemplateSequenceTrack
        fun Find(Outer: UObject, ResourceName: String): TemplateSequenceTrack
        fun GetDefaultObject(): TemplateSequenceTrack
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TemplateSequenceTrack
        fun C(Other: UObject): TemplateSequenceTrack
        fun C(Other: Any): TemplateSequenceTrack
    }
}

external open class CryptoKeysCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CryptoKeysCommandlet
        fun Find(Outer: UObject, ResourceName: String): CryptoKeysCommandlet
        fun GetDefaultObject(): CryptoKeysCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CryptoKeysCommandlet
        fun C(Other: UObject): CryptoKeysCommandlet
        fun C(Other: Any): CryptoKeysCommandlet
    }
}

external open class CryptoEncryptionKey {
    open var Guid: Guid
    open var Name: String
    open var Key: String
    open fun clone(): CryptoEncryptionKey

    companion object {
        fun C(Other: UObject): CryptoEncryptionKey
        fun C(Other: Any): CryptoEncryptionKey
    }
}

external open class CryptoKeysSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var EncryptionKey: String
    open var SecondaryEncryptionKeys: Array<CryptoEncryptionKey>
    open var bEncryptPakIniFiles: Boolean
    open var bEncryptPakIndex: Boolean
    open var bEncryptUAssetFiles: Boolean
    open var bEncryptAllAssetFiles: Boolean
    open var SigningPublicExponent: String
    open var SigningModulus: String
    open var SigningPrivateExponent: String
    open var bEnablePakSigning: Boolean

    companion object {
        fun Load(ResourceName: String): CryptoKeysSettings
        fun Find(Outer: UObject, ResourceName: String): CryptoKeysSettings
        fun GetDefaultObject(): CryptoKeysSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CryptoKeysSettings
        fun C(Other: UObject): CryptoKeysSettings
        fun C(Other: Any): CryptoKeysSettings
    }
}

external object ECurveEditorFFTFilterType {
    var Lowpass: String /* "Lowpass" */
    var Highpass: String /* "Highpass" */
    var ECurveEditorFFTFilterType_MAX: String /* "ECurveEditorFFTFilterType_MAX" */
}

external object ECurveEditorFFTFilterClass {
    var Butterworth: String /* "Butterworth" */
    var Chebyshev: String /* "Chebyshev" */
    var ECurveEditorFFTFilterClass_MAX: String /* "ECurveEditorFFTFilterClass_MAX" */
}

external open class CurveEditorFFTFilter : CurveEditorFilterBase {
    constructor()
    constructor(Outer: UObject)
    open var CutoffFrequency: Number
    open var Type: String /* "Lowpass" | "Highpass" | "ECurveEditorFFTFilterType_MAX" */
    open var Response: String /* "Butterworth" | "Chebyshev" | "ECurveEditorFFTFilterClass_MAX" */
    open var Order: Number

    companion object {
        fun Load(ResourceName: String): CurveEditorFFTFilter
        fun Find(Outer: UObject, ResourceName: String): CurveEditorFFTFilter
        fun GetDefaultObject(): CurveEditorFFTFilter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CurveEditorFFTFilter
        fun C(Other: UObject): CurveEditorFFTFilter
        fun C(Other: Any): CurveEditorFFTFilter
    }
}

external open class CurveEditorRetimeAnchor {
    open var ValueInSeconds: Any
    open var bIsSelected: Boolean
    open fun clone(): CurveEditorRetimeAnchor

    companion object {
        fun C(Other: UObject): CurveEditorRetimeAnchor
        fun C(Other: Any): CurveEditorRetimeAnchor
    }
}

external open class CurveEditorRetimeToolData : UObject {
    constructor()
    constructor(Outer: UObject)
    open var RetimingAnchors: Array<CurveEditorRetimeAnchor>

    companion object {
        fun Load(ResourceName: String): CurveEditorRetimeToolData
        fun Find(Outer: UObject, ResourceName: String): CurveEditorRetimeToolData
        fun GetDefaultObject(): CurveEditorRetimeToolData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CurveEditorRetimeToolData
        fun C(Other: UObject): CurveEditorRetimeToolData
        fun C(Other: Any): CurveEditorRetimeToolData
    }
}

external open class NewPluginDescriptorData : UObject {
    constructor()
    constructor(Outer: UObject)
    open var CreatedBy: String
    open var CreatedByURL: String
    open var Description: String
    open var bIsBetaVersion: Boolean

    companion object {
        fun Load(ResourceName: String): NewPluginDescriptorData
        fun Find(Outer: UObject, ResourceName: String): NewPluginDescriptorData
        fun GetDefaultObject(): NewPluginDescriptorData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): NewPluginDescriptorData
        fun C(Other: UObject): NewPluginDescriptorData
        fun C(Other: Any): NewPluginDescriptorData
    }
}

external open class PluginMetadataObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Version: Number
    open var VersionName: String
    open var FriendlyName: String
    open var Description: String
    open var Category: String
    open var CreatedBy: String
    open var CreatedByURL: String
    open var DocsURL: String
    open var MarketplaceURL: String
    open var SupportURL: String
    open var bCanContainContent: Boolean
    open var bIsBetaVersion: Boolean

    companion object {
        fun Load(ResourceName: String): PluginMetadataObject
        fun Find(Outer: UObject, ResourceName: String): PluginMetadataObject
        fun GetDefaultObject(): PluginMetadataObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PluginMetadataObject
        fun C(Other: UObject): PluginMetadataObject
        fun C(Other: Any): PluginMetadataObject
    }
}

external open class SpeedTreeImportFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SpeedTreeImportFactory
        fun Find(Outer: UObject, ResourceName: String): SpeedTreeImportFactory
        fun GetDefaultObject(): SpeedTreeImportFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SpeedTreeImportFactory
        fun C(Other: UObject): SpeedTreeImportFactory
        fun C(Other: Any): SpeedTreeImportFactory
    }
}

external open class ReimportSpeedTreeFactory : SpeedTreeImportFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ReimportSpeedTreeFactory
        fun Find(Outer: UObject, ResourceName: String): ReimportSpeedTreeFactory
        fun GetDefaultObject(): ReimportSpeedTreeFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ReimportSpeedTreeFactory
        fun C(Other: UObject): ReimportSpeedTreeFactory
        fun C(Other: Any): ReimportSpeedTreeFactory
    }
}

external object EImportGeometryType {
    var IGT_3D: String /* "IGT_3D" */
    var IGT_Billboards: String /* "IGT_Billboards" */
    var IGT_Both: String /* "IGT_Both" */
    var IGT_MAX: String /* "IGT_MAX" */
}

external object EImportLODType {
    var ILT_PaintedFoliage: String /* "ILT_PaintedFoliage" */
    var ILT_IndividualActors: String /* "ILT_IndividualActors" */
    var ILT_MAX: String /* "ILT_MAX" */
}

external open class SpeedTreeImportData : AssetImportData {
    constructor()
    constructor(Outer: UObject)
    open var TreeScale: Number
    open var ImportGeometryType: String /* "IGT_3D" | "IGT_Billboards" | "IGT_Both" | "IGT_MAX" */
    open var LODType: String /* "ILT_PaintedFoliage" | "ILT_IndividualActors" | "ILT_MAX" */
    open var IncludeCollision: Boolean
    open var MakeMaterialsCheck: Boolean
    open var IncludeNormalMapCheck: Boolean
    open var IncludeDetailMapCheck: Boolean
    open var IncludeSpecularMapCheck: Boolean
    open var IncludeBranchSeamSmoothing: Boolean
    open var IncludeSpeedTreeAO: Boolean
    open var IncludeColorAdjustment: Boolean
    open var IncludeSubsurface: Boolean
    open var IncludeVertexProcessingCheck: Boolean
    open var IncludeWindCheck: Boolean
    open var IncludeSmoothLODCheck: Boolean

    companion object {
        fun Load(ResourceName: String): SpeedTreeImportData
        fun Find(Outer: UObject, ResourceName: String): SpeedTreeImportData
        fun GetDefaultObject(): SpeedTreeImportData
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SpeedTreeImportData
        fun C(Other: UObject): SpeedTreeImportData
        fun C(Other: Any): SpeedTreeImportData
    }
}

external open class LayersBlueprintLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LayersBlueprintLibrary
        fun Find(Outer: UObject, ResourceName: String): LayersBlueprintLibrary
        fun GetDefaultObject(): LayersBlueprintLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LayersBlueprintLibrary
        fun RemoveActorFromLayer(InActor: Actor, Layer: ActorLayer)
        fun GetActors(WorldContextObject: UObject, ActorLayer: ActorLayer): Array<Actor>
        fun AddActorToLayer(InActor: Actor, Layer: ActorLayer)
        fun C(Other: UObject): LayersBlueprintLibrary
        fun C(Other: Any): LayersBlueprintLibrary
    }
}

external open class AndroidPermissionCallbackProxy : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: Array<String>, GrantResults: Array<Boolean>) -> Unit>

    companion object {
        fun Load(ResourceName: String): AndroidPermissionCallbackProxy
        fun Find(Outer: UObject, ResourceName: String): AndroidPermissionCallbackProxy
        fun GetDefaultObject(): AndroidPermissionCallbackProxy
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AndroidPermissionCallbackProxy
        fun C(Other: UObject): AndroidPermissionCallbackProxy
        fun C(Other: Any): AndroidPermissionCallbackProxy
    }
}

external open class AndroidPermissionFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AndroidPermissionFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): AndroidPermissionFunctionLibrary
        fun GetDefaultObject(): AndroidPermissionFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AndroidPermissionFunctionLibrary
        fun CheckAndroidPermission(permission: String): Boolean
        fun RequestAndroidPermissions(Permissions: Array<String>): AndroidPermissionCallbackProxy
        fun C(Other: UObject): AndroidPermissionFunctionLibrary
        fun C(Other: Any): AndroidPermissionFunctionLibrary
    }
}

external open class AppleImageUtilsImageConversionResult {
    open var Error: String
    open var ImageData: Array<Number>
    open fun clone(): AppleImageUtilsImageConversionResult

    companion object {
        fun C(Other: UObject): AppleImageUtilsImageConversionResult
        fun C(Other: Any): AppleImageUtilsImageConversionResult
    }
}

external object ETextureRotationDirection {
    var None: String /* "None" */
    var Left: String /* "Left" */
    var Right: String /* "Right" */
    var Down: String /* "Down" */
    var LeftMirrored: String /* "LeftMirrored" */
    var RightMirrored: String /* "RightMirrored" */
    var DownMirrored: String /* "DownMirrored" */
    var UpMirrored: String /* "UpMirrored" */
    var ETextureRotationDirection_MAX: String /* "ETextureRotationDirection_MAX" */
}

external open class AppleImageUtilsBaseAsyncTaskBlueprintProxy : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) -> Unit>
    open var OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) -> Unit>
    open var ConversionResult: AppleImageUtilsImageConversionResult

    companion object {
        fun Load(ResourceName: String): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun Find(Outer: UObject, ResourceName: String): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun ConvertToTIFF(SourceImage: Texture, bWantColor: Boolean, bUseGpu: Boolean, Scale: Number, Rotate: String /* "None" | "Left" | "Right" | "Down" | "LeftMirrored" | "RightMirrored" | "DownMirrored" | "UpMirrored" | "ETextureRotationDirection_MAX" */): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun ConvertToPNG(SourceImage: Texture, bWantColor: Boolean, bUseGpu: Boolean, Scale: Number, Rotate: String /* "None" | "Left" | "Right" | "Down" | "LeftMirrored" | "RightMirrored" | "DownMirrored" | "UpMirrored" | "ETextureRotationDirection_MAX" */): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun ConvertToJPEG(SourceImage: Texture, Quality: Number, bWantColor: Boolean, bUseGpu: Boolean, Scale: Number, Rotate: String /* "None" | "Left" | "Right" | "Down" | "LeftMirrored" | "RightMirrored" | "DownMirrored" | "UpMirrored" | "ETextureRotationDirection_MAX" */): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun ConvertToHEIF(SourceImage: Texture, Quality: Number, bWantColor: Boolean, bUseGpu: Boolean, Scale: Number, Rotate: String /* "None" | "Left" | "Right" | "Down" | "LeftMirrored" | "RightMirrored" | "DownMirrored" | "UpMirrored" | "ETextureRotationDirection_MAX" */): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun C(Other: UObject): AppleImageUtilsBaseAsyncTaskBlueprintProxy
        fun C(Other: Any): AppleImageUtilsBaseAsyncTaskBlueprintProxy
    }
}

external open class AppleImageInterface : Interface {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AppleImageInterface
        fun Find(Outer: UObject, ResourceName: String): AppleImageInterface
        fun GetDefaultObject(): AppleImageInterface
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AppleImageInterface
        fun C(Other: UObject): AppleImageInterface
        fun C(Other: Any): AppleImageInterface
    }
}

external open class K2Node_ConvertToJPEG : K2Node_BaseAsyncTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): K2Node_ConvertToJPEG
        fun Find(Outer: UObject, ResourceName: String): K2Node_ConvertToJPEG
        fun GetDefaultObject(): K2Node_ConvertToJPEG
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): K2Node_ConvertToJPEG
        fun C(Other: UObject): K2Node_ConvertToJPEG
        fun C(Other: Any): K2Node_ConvertToJPEG
    }
}

external open class K2Node_ConvertToHEIF : K2Node_BaseAsyncTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): K2Node_ConvertToHEIF
        fun Find(Outer: UObject, ResourceName: String): K2Node_ConvertToHEIF
        fun GetDefaultObject(): K2Node_ConvertToHEIF
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): K2Node_ConvertToHEIF
        fun C(Other: UObject): K2Node_ConvertToHEIF
        fun C(Other: Any): K2Node_ConvertToHEIF
    }
}

external open class K2Node_ConvertToTIFF : K2Node_BaseAsyncTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): K2Node_ConvertToTIFF
        fun Find(Outer: UObject, ResourceName: String): K2Node_ConvertToTIFF
        fun GetDefaultObject(): K2Node_ConvertToTIFF
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): K2Node_ConvertToTIFF
        fun C(Other: UObject): K2Node_ConvertToTIFF
        fun C(Other: Any): K2Node_ConvertToTIFF
    }
}

external open class K2Node_ConvertToPNG : K2Node_BaseAsyncTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): K2Node_ConvertToPNG
        fun Find(Outer: UObject, ResourceName: String): K2Node_ConvertToPNG
        fun GetDefaultObject(): K2Node_ConvertToPNG
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): K2Node_ConvertToPNG
        fun C(Other: UObject): K2Node_ConvertToPNG
        fun C(Other: Any): K2Node_ConvertToPNG
    }
}

external open class AudioCaptureDeviceInfo {
    open var DeviceName: String
    open var NumInputChannels: Number
    open var SampleRate: Number
    open fun clone(): AudioCaptureDeviceInfo

    companion object {
        fun C(Other: UObject): AudioCaptureDeviceInfo
        fun C(Other: Any): AudioCaptureDeviceInfo
    }
}

external interface `T$97` {
    var OutInfo: AudioCaptureDeviceInfo
    var `$`: Boolean
}

external open class AudioCapture : AudioGenerator {
    constructor()
    constructor(Outer: UObject)
    open fun StopCapturingAudio()
    open fun StartCapturingAudio()
    open fun IsCapturingAudio(): Boolean
    open fun GetAudioCaptureDeviceInfo(OutInfo: AudioCaptureDeviceInfo = definedExternally): `T$97`

    companion object {
        fun Load(ResourceName: String): AudioCapture
        fun Find(Outer: UObject, ResourceName: String): AudioCapture
        fun GetDefaultObject(): AudioCapture
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioCapture
        fun C(Other: UObject): AudioCapture
        fun C(Other: Any): AudioCapture
    }
}

external open class AudioCaptureFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioCaptureFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): AudioCaptureFunctionLibrary
        fun GetDefaultObject(): AudioCaptureFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioCaptureFunctionLibrary
        fun CreateAudioCapture(): AudioCapture
        fun C(Other: UObject): AudioCaptureFunctionLibrary
        fun C(Other: Any): AudioCaptureFunctionLibrary
    }
}

external open class AudioCaptureComponent : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var JitterLatencyFrames: Number

    companion object {
        fun Load(ResourceName: String): AudioCaptureComponent
        fun Find(Outer: UObject, ResourceName: String): AudioCaptureComponent
        fun GetDefaultObject(): AudioCaptureComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioCaptureComponent
        fun C(Other: UObject): AudioCaptureComponent
        fun C(Other: Any): AudioCaptureComponent
    }
}

external object ECollectionScriptingShareType {
    var Local: String /* "Local" */
    var Private: String /* "Private" */
    var Shared: String /* "Shared" */
    var ECollectionScriptingShareType_MAX: String /* "ECollectionScriptingShareType_MAX" */
}

external open class AssetTagsSubsystem : EngineSubsystem {
    constructor()
    constructor(Outer: UObject)
    open fun ReparentCollection(Name: String, NewParentName: String): Boolean
    open fun RenameCollection(Name: String, NewName: String): Boolean
    open fun RemoveAssetsFromCollection(Name: String, AssetPathNames: Array<String>): Boolean
    open fun RemoveAssetPtrsFromCollection(Name: String, AssetPtrs: Array<UObject>): Boolean
    open fun RemoveAssetPtrFromCollection(Name: String, AssetPtr: UObject): Boolean
    open fun RemoveAssetFromCollection(Name: String, AssetPathName: String): Boolean
    open fun RemoveAssetDatasFromCollection(Name: String, AssetDatas: Array<AssetData>): Boolean
    open fun RemoveAssetDataFromCollection(Name: String, AssetData: AssetData): Boolean
    open fun GetCollectionsContainingAssetPtr(AssetPtr: UObject): Array<String>
    open fun GetCollectionsContainingAssetData(AssetData: AssetData): Array<String>
    open fun GetCollectionsContainingAsset(AssetPathName: String): Array<String>
    open fun GetCollections(): Array<String>
    open fun GetAssetsInCollection(Name: String): Array<AssetData>
    open fun EmptyCollection(Name: String): Boolean
    open fun DestroyCollection(Name: String): Boolean
    open fun CreateCollection(Name: String, ShareType: String /* "Local" | "Private" | "Shared" | "ECollectionScriptingShareType_MAX" */): Boolean
    open fun CollectionExists(Name: String): Boolean
    open fun AddAssetToCollection(Name: String, AssetPathName: String): Boolean
    open fun AddAssetsToCollection(Name: String, AssetPathNames: Array<String>): Boolean
    open fun AddAssetPtrToCollection(Name: String, AssetPtr: UObject): Boolean
    open fun AddAssetPtrsToCollection(Name: String, AssetPtrs: Array<UObject>): Boolean
    open fun AddAssetDataToCollection(Name: String, AssetData: AssetData): Boolean
    open fun AddAssetDatasToCollection(Name: String, AssetDatas: Array<AssetData>): Boolean

    companion object {
        fun Load(ResourceName: String): AssetTagsSubsystem
        fun Find(Outer: UObject, ResourceName: String): AssetTagsSubsystem
        fun GetDefaultObject(): AssetTagsSubsystem
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AssetTagsSubsystem
        fun C(Other: UObject): AssetTagsSubsystem
        fun C(Other: Any): AssetTagsSubsystem
    }
}

external open class ArchVisCharacter(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Character {
    open var LookUpAxisName: String
    open var LookUpAtRateAxisName: String
    open var TurnAxisName: String
    open var TurnAtRateAxisName: String
    open var MoveForwardAxisName: String
    open var MoveRightAxisName: String
    open var MouseSensitivityScale_Pitch: Number
    open var MouseSensitivityScale_Yaw: Number

    companion object {
        fun GetDefaultObject(): ArchVisCharacter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ArchVisCharacter
        fun C(Other: UObject): ArchVisCharacter
        fun C(Other: Any): ArchVisCharacter
    }
}

external open class ArchVisCharMovementComponent : CharacterMovementComponent {
    constructor()
    constructor(Outer: UObject)
    open var RotationalAcceleration: Rotator
    open var RotationalDeceleration: Rotator
    open var MaxRotationalVelocity: Rotator
    open var MinPitch: Number
    open var MaxPitch: Number
    open var WalkingFriction: Number
    open var WalkingSpeed: Number
    open var WalkingAcceleration: Number

    companion object {
        fun Load(ResourceName: String): ArchVisCharMovementComponent
        fun Find(Outer: UObject, ResourceName: String): ArchVisCharMovementComponent
        fun GetDefaultObject(): ArchVisCharMovementComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ArchVisCharMovementComponent
        fun C(Other: UObject): ArchVisCharMovementComponent
        fun C(Other: Any): ArchVisCharMovementComponent
    }
}

external open class ComponentReference {
    open var OtherActor: Actor
    open var ComponentProperty: String
    open var PathToComponent: String
    open fun clone(): ComponentReference

    companion object {
        fun C(Other: UObject): ComponentReference
        fun C(Other: Any): ComponentReference
    }
}

external interface `T$98` {
    var Locations: Array<Vector>
}

external open class CableComponent : MeshComponent {
    constructor()
    constructor(Outer: UObject)
    open var bAttachStart: Boolean
    open var bAttachEnd: Boolean
    open var AttachEndTo: ComponentReference
    open var AttachEndToSocketName: String
    open var EndLocation: Vector
    open var CableLength: Number
    open var NumSegments: Number
    open var SubstepTime: Number
    open var SolverIterations: Number
    open var bEnableStiffness: Boolean
    open var bUseSubstepping: Boolean
    open var bSkipCableUpdateWhenNotVisible: Boolean
    open var bSkipCableUpdateWhenNotOwnerRecentlyRendered: Boolean
    open var bEnableCollision: Boolean
    open var CollisionFriction: Number
    open var CableForce: Vector
    open var CableGravityScale: Number
    open var CableWidth: Number
    open var NumSides: Number
    open var TileMaterial: Number
    open fun SetAttachEndToComponent(Component: SceneComponent, SocketName: String)
    open fun SetAttachEndTo(Actor: Actor, ComponentProperty: String, SocketName: String)
    open fun GetCableParticleLocations(Locations: Array<Vector> = definedExternally): `T$98`
    open fun GetAttachedComponent(): SceneComponent
    open fun GetAttachedActor(): Actor

    companion object {
        fun Load(ResourceName: String): CableComponent
        fun Find(Outer: UObject, ResourceName: String): CableComponent
        fun GetDefaultObject(): CableComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CableComponent
        fun C(Other: UObject): CableComponent
        fun C(Other: Any): CableComponent
    }
}

external open class CableActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    open var CableComponent: CableComponent

    companion object {
        fun GetDefaultObject(): CableActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CableActor
        fun C(Other: UObject): CableActor
        fun C(Other: Any): CableActor
    }
}

external open class CustomMeshTriangle {
    open var Vertex0: Vector
    open var Vertex1: Vector
    open var Vertex2: Vector
    open fun clone(): CustomMeshTriangle

    companion object {
        fun C(Other: UObject): CustomMeshTriangle
        fun C(Other: Any): CustomMeshTriangle
    }
}

external open class CustomMeshComponent : MeshComponent {
    constructor()
    constructor(Outer: UObject)
    open fun SetCustomMeshTriangles(Triangles: Array<CustomMeshTriangle>): Boolean
    open fun ClearCustomMeshTriangles()
    open fun AddCustomMeshTriangles(Triangles: Array<CustomMeshTriangle>)

    companion object {
        fun Load(ResourceName: String): CustomMeshComponent
        fun Find(Outer: UObject, ResourceName: String): CustomMeshComponent
        fun GetDefaultObject(): CustomMeshComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CustomMeshComponent
        fun C(Other: UObject): CustomMeshComponent
        fun C(Other: Any): CustomMeshComponent
    }
}

external open class EditableMeshAdapter : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditableMeshAdapter
        fun Find(Outer: UObject, ResourceName: String): EditableMeshAdapter
        fun GetDefaultObject(): EditableMeshAdapter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditableMeshAdapter
        fun C(Other: UObject): EditableMeshAdapter
        fun C(Other: Any): EditableMeshAdapter
    }
}

external open class EditableGeometryCollectionAdapter : EditableMeshAdapter {
    constructor()
    constructor(Outer: UObject)
    open var GeometryCollection: GeometryCollection
    open var OriginalGeometryCollection: GeometryCollection
    open var GeometryCollectionLODIndex: Number

    companion object {
        fun Load(ResourceName: String): EditableGeometryCollectionAdapter
        fun Find(Outer: UObject, ResourceName: String): EditableGeometryCollectionAdapter
        fun GetDefaultObject(): EditableGeometryCollectionAdapter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditableGeometryCollectionAdapter
        fun C(Other: UObject): EditableGeometryCollectionAdapter
        fun C(Other: Any): EditableGeometryCollectionAdapter
    }
}

external object ETriangleTessellationMode {
    var ThreeTriangles: String /* "ThreeTriangles" */
    var FourTriangles: String /* "FourTriangles" */
    var ETriangleTessellationMode_MAX: String /* "ETriangleTessellationMode_MAX" */
}

external object EMeshModificationType {
    var FirstInterim: String /* "FirstInterim" */
    var Interim: String /* "Interim" */
    var Final: String /* "Final" */
    var EMeshModificationType_MAX: String /* "EMeshModificationType_MAX" */
}

external object EMeshTopologyChange {
    var NoTopologyChange: String /* "NoTopologyChange" */
    var TopologyChange: String /* "TopologyChange" */
    var EMeshTopologyChange_MAX: String /* "EMeshTopologyChange_MAX" */
}

external open class VertexPair {
    open var VertexID0: VertexID
    open var VertexID1: VertexID
    open fun clone(): VertexPair

    companion object {
        fun C(Other: UObject): VertexPair
        fun C(Other: Any): VertexPair
    }
}

external open class PolygonToSplit {
    open var PolygonID: PolygonID
    open var VertexPairsToSplitAt: Array<VertexPair>
    open fun clone(): PolygonToSplit

    companion object {
        fun C(Other: UObject): PolygonToSplit
        fun C(Other: Any): PolygonToSplit
    }
}

external open class MeshElementAttributeValue {
    open fun clone(): MeshElementAttributeValue

    companion object {
        fun C(Other: UObject): MeshElementAttributeValue
        fun C(Other: Any): MeshElementAttributeValue
    }
}

external open class MeshElementAttributeData {
    open var AttributeName: String
    open var AttributeIndex: Number
    open var AttributeValue: MeshElementAttributeValue
    open fun clone(): MeshElementAttributeData

    companion object {
        fun C(Other: UObject): MeshElementAttributeData
        fun C(Other: Any): MeshElementAttributeData
    }
}

external open class MeshElementAttributeList {
    open var Attributes: Array<MeshElementAttributeData>
    open fun clone(): MeshElementAttributeList

    companion object {
        fun C(Other: UObject): MeshElementAttributeList
        fun C(Other: Any): MeshElementAttributeList
    }
}

external open class AttributesForVertex {
    open var VertexID: VertexID
    open var VertexAttributes: MeshElementAttributeList
    open fun clone(): AttributesForVertex

    companion object {
        fun C(Other: UObject): AttributesForVertex
        fun C(Other: Any): AttributesForVertex
    }
}

external open class AttributesForVertexInstance {
    open var VertexInstanceID: VertexInstanceID
    open var VertexInstanceAttributes: MeshElementAttributeList
    open fun clone(): AttributesForVertexInstance

    companion object {
        fun C(Other: UObject): AttributesForVertexInstance
        fun C(Other: Any): AttributesForVertexInstance
    }
}

external open class VertexAttributesForPolygonHole {
    open var VertexAttributeList: Array<MeshElementAttributeList>
    open fun clone(): VertexAttributesForPolygonHole

    companion object {
        fun C(Other: UObject): VertexAttributesForPolygonHole
        fun C(Other: Any): VertexAttributesForPolygonHole
    }
}

external open class VertexAttributesForPolygon {
    open var PolygonID: PolygonID
    open var PerimeterVertexAttributeLists: Array<MeshElementAttributeList>
    open var VertexAttributeListsForEachHole: Array<VertexAttributesForPolygonHole>
    open fun clone(): VertexAttributesForPolygon

    companion object {
        fun C(Other: UObject): VertexAttributesForPolygon
        fun C(Other: Any): VertexAttributesForPolygon
    }
}

external open class AttributesForEdge {
    open var EdgeID: EdgeID
    open var EdgeAttributes: MeshElementAttributeList
    open fun clone(): AttributesForEdge

    companion object {
        fun C(Other: UObject): AttributesForEdge
        fun C(Other: Any): AttributesForEdge
    }
}

external open class VertexToMove {
    open var VertexID: VertexID
    open var NewVertexPosition: Vector
    open fun clone(): VertexToMove

    companion object {
        fun C(Other: UObject): VertexToMove
        fun C(Other: Any): VertexToMove
    }
}

external object EInsetPolygonsMode {
    var All: String /* "All" */
    var CenterPolygonOnly: String /* "CenterPolygonOnly" */
    var SidePolygonsOnly: String /* "SidePolygonsOnly" */
    var EInsetPolygonsMode_MAX: String /* "EInsetPolygonsMode_MAX" */
}

external open class SubdividedQuadVertex {
    open var VertexPositionIndex: Number
    open var TextureCoordinate0: Vector2D
    open var TextureCoordinate1: Vector2D
    open var VertexColor: Color
    open var VertexNormal: Vector
    open var VertexTangent: Vector
    open var VertexBinormalSign: Number
    open fun clone(): SubdividedQuadVertex

    companion object {
        fun C(Other: UObject): SubdividedQuadVertex
        fun C(Other: Any): SubdividedQuadVertex
    }
}

external open class SubdividedQuad {
    open var QuadVertex0: SubdividedQuadVertex
    open var QuadVertex1: SubdividedQuadVertex
    open var QuadVertex2: SubdividedQuadVertex
    open var QuadVertex3: SubdividedQuadVertex
    open fun clone(): SubdividedQuad

    companion object {
        fun C(Other: UObject): SubdividedQuad
        fun C(Other: Any): SubdividedQuad
    }
}

external open class SubdivisionLimitSection {
    open var SubdividedQuads: Array<SubdividedQuad>
    open fun clone(): SubdivisionLimitSection

    companion object {
        fun C(Other: UObject): SubdivisionLimitSection
        fun C(Other: Any): SubdivisionLimitSection
    }
}

external open class SubdividedWireEdge {
    open var EdgeVertex0PositionIndex: Number
    open var EdgeVertex1PositionIndex: Number
    open fun clone(): SubdividedWireEdge

    companion object {
        fun C(Other: UObject): SubdividedWireEdge
        fun C(Other: Any): SubdividedWireEdge
    }
}

external open class SubdivisionLimitData {
    open var VertexPositions: Array<Vector>
    open var Sections: Array<SubdivisionLimitSection>
    open var SubdividedWireEdges: Array<SubdividedWireEdge>
    open fun clone(): SubdivisionLimitData

    companion object {
        fun C(Other: UObject): SubdivisionLimitData
        fun C(Other: Any): SubdivisionLimitData
    }
}

external open class VertexToCreate {
    open var VertexAttributes: MeshElementAttributeList
    open var OriginalVertexID: VertexID
    open fun clone(): VertexToCreate

    companion object {
        fun C(Other: UObject): VertexToCreate
        fun C(Other: Any): VertexToCreate
    }
}

external open class VertexInstanceToCreate {
    open var VertexID: VertexID
    open var VertexInstanceAttributes: MeshElementAttributeList
    open var OriginalVertexInstanceID: VertexInstanceID
    open fun clone(): VertexInstanceToCreate

    companion object {
        fun C(Other: UObject): VertexInstanceToCreate
        fun C(Other: Any): VertexInstanceToCreate
    }
}

external open class VertexAndAttributes {
    open var VertexInstanceID: VertexInstanceID
    open var VertexID: VertexID
    open var PolygonVertexAttributes: MeshElementAttributeList
    open fun clone(): VertexAndAttributes

    companion object {
        fun C(Other: UObject): VertexAndAttributes
        fun C(Other: Any): VertexAndAttributes
    }
}

external object EPolygonEdgeHardness {
    var NewEdgesSoft: String /* "NewEdgesSoft" */
    var NewEdgesHard: String /* "NewEdgesHard" */
    var AllEdgesSoft: String /* "AllEdgesSoft" */
    var AllEdgesHard: String /* "AllEdgesHard" */
    var EPolygonEdgeHardness_MAX: String /* "EPolygonEdgeHardness_MAX" */
}

external open class PolygonToCreate {
    open var PolygonGroupID: PolygonGroupID
    open var PerimeterVertices: Array<VertexAndAttributes>
    open var OriginalPolygonID: PolygonID
    open var PolygonEdgeHardness: String /* "NewEdgesSoft" | "NewEdgesHard" | "AllEdgesSoft" | "AllEdgesHard" | "EPolygonEdgeHardness_MAX" */
    open fun clone(): PolygonToCreate

    companion object {
        fun C(Other: UObject): PolygonToCreate
        fun C(Other: Any): PolygonToCreate
    }
}

external open class PolygonGroupToCreate {
    open var PolygonGroupAttributes: MeshElementAttributeList
    open var OriginalPolygonGroupID: PolygonGroupID
    open fun clone(): PolygonGroupToCreate

    companion object {
        fun C(Other: UObject): PolygonGroupToCreate
        fun C(Other: Any): PolygonGroupToCreate
    }
}

external open class EdgeToCreate {
    open var VertexID0: VertexID
    open var VertexID1: VertexID
    open var EdgeAttributes: MeshElementAttributeList
    open var OriginalEdgeID: EdgeID
    open fun clone(): EdgeToCreate

    companion object {
        fun C(Other: UObject): EdgeToCreate
        fun C(Other: Any): EdgeToCreate
    }
}

external open class VertexIndexAndInstanceID {
    open var ContourIndex: Number
    open var VertexInstanceID: VertexInstanceID
    open fun clone(): VertexIndexAndInstanceID

    companion object {
        fun C(Other: UObject): VertexIndexAndInstanceID
        fun C(Other: Any): VertexIndexAndInstanceID
    }
}

external open class VertexInstancesForPolygonHole {
    open var VertexIndicesAndInstanceIDs: Array<VertexIndexAndInstanceID>
    open fun clone(): VertexInstancesForPolygonHole

    companion object {
        fun C(Other: UObject): VertexInstancesForPolygonHole
        fun C(Other: Any): VertexInstancesForPolygonHole
    }
}

external open class ChangeVertexInstancesForPolygon {
    open var PolygonID: PolygonID
    open var PerimeterVertexIndicesAndInstanceIDs: Array<VertexIndexAndInstanceID>
    open var VertexIndicesAndInstanceIDsForEachHole: Array<VertexInstancesForPolygonHole>
    open fun clone(): ChangeVertexInstancesForPolygon

    companion object {
        fun C(Other: UObject): ChangeVertexInstancesForPolygon
        fun C(Other: Any): ChangeVertexInstancesForPolygon
    }
}

external open class PolygonGroupForPolygon {
    open var PolygonID: PolygonID
    open var PolygonGroupID: PolygonGroupID
    open fun clone(): PolygonGroupForPolygon

    companion object {
        fun C(Other: UObject): PolygonGroupForPolygon
        fun C(Other: Any): PolygonGroupForPolygon
    }
}

external interface `T$99` {
    var OutNewVertexID: VertexID
}

external interface `T$100` {
    var bOutWasVertexRemoved: Boolean
    var OutNewEdgeID: EdgeID
}

external interface `T$101` {
    var bOutWasEdgeRemoved: Boolean
    var OutNewPolygonID: PolygonID
}

external interface `T$102` {
    var OutNewTrianglePolygons: Array<PolygonID>
}

external interface `T$103` {
    var OutNewPolygonIDs: Array<PolygonID>
}

external interface `T$104` {
    var OutNewEdgeIDs: Array<EdgeID>
}

external interface `T$105` {
    var PolygonIDs1: Array<PolygonID>
    var PolygonIDs2: Array<PolygonID>
    var BoundaryIDs: Array<EdgeID>
}

external interface `T$106` {
    var OutNewVertexIDs: Array<VertexID>
}

external interface `T$107` {
    var OutPolygons: Array<PolygonID>
}

external interface `T$108` {
    var OutPolygons: Array<PolygonID>
}

external interface `T$109` {
    var OutPolygons: Array<PolygonID>
}

external interface `T$110` {
    var OutNewPolygonIDs: Array<PolygonID>
}

external interface `T$111` {
    var OutNewCenterPolygonIDs: Array<PolygonID>
    var OutNewSidePolygonIDs: Array<PolygonID>
}

external interface `T$112` {
    var OutNewEdgeIDs: Array<EdgeID>
}

external interface `T$113` {
    var bOutEdgeWindingIsReversed: Boolean
    var `$`: EdgeID
}

external interface `T$114` {
    var OutConnectedPolygonIDs: Array<PolygonID>
}

external interface `T$115` {
    var OutConnectedPolygonIDs: Array<PolygonID>
}

external interface `T$116` {
    var OutConnectedEdgeIDs: Array<EdgeID>
}

external interface `T$117` {
    var OutAdjacentVertexIDs: Array<VertexID>
}

external interface `T$118` {
    var OutPolygonPerimeterVertexIDs: Array<VertexID>
}

external interface `T$119` {
    var OutPolygonPerimeterVertexInstanceIDs: Array<VertexInstanceID>
}

external interface `T$120` {
    var OutPolygonPerimeterEdgeIDs: Array<EdgeID>
}

external interface `T$121` {
    var bOutEdgeWindingIsReversedForPolygon: Boolean
    var `$`: EdgeID
}

external interface `T$122` {
    var OutAdjacentPolygons: Array<PolygonID>
}

external interface `T$123` {
    var OutEdgeVertexID0: VertexID
    var OutEdgeVertexID1: VertexID
}

external interface `T$124` {
    var EdgeLoopIDs: Array<EdgeID>
}

external interface `T$125` {
    var OutConnectedPolygonIDs: Array<PolygonID>
}

external interface `T$126` {
    var OutEdgeLoopEdgeIDs: Array<EdgeID>
    var OutFlippedEdgeIDs: Array<EdgeID>
    var OutReversedEdgeIDPathToTake: Array<EdgeID>
    var OutPolygonIDsToSplit: Array<PolygonID>
}

external interface `T$127` {
    var OutNewExtrudedFrontPolygons: Array<PolygonID>
}

external interface `T$128` {
    var OutNewExtendedVertexIDs: Array<VertexID>
}

external interface `T$129` {
    var OutNewExtendedEdgeIDs: Array<EdgeID>
}

external interface `T$130` {
    var OutNewVertexIDs: Array<VertexID>
}

external interface `T$131` {
    var OutNewVertexInstanceIDs: Array<VertexInstanceID>
}

external interface `T$132` {
    var OutNewPolygonIDs: Array<PolygonID>
    var OutNewEdgeIDs: Array<EdgeID>
}

external interface `T$133` {
    var OutNewPolygonGroupIDs: Array<PolygonGroupID>
}

external interface `T$134` {
    var OutNewEdgeIDs: Array<EdgeID>
}

external interface `T$135` {
    var OutNewVertexIDs: Array<VertexID>
}

external interface `T$136` {
    var OutNewEdgeIDs: Array<EdgeID>
}

external interface `T$137` {
    var OutSharedEdgeIDs: Array<EdgeID>
}

external interface `T$138` {
    var OutNewCenterPolygonIDs: Array<PolygonID>
    var OutNewSidePolygonIDs: Array<PolygonID>
}

external open class EditableMesh : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Adapters: Array<EditableMeshAdapter>
    open var TextureCoordinateCount: Number
    open var PendingCompactCounter: Number
    open var SubdivisionCount: Number
    open fun WeldVertices(VertexIDs: Array<VertexID>, OutNewVertexID: VertexID = definedExternally): `T$99`
    open fun TryToRemoveVertex(VertexID: VertexID, bOutWasVertexRemoved: Boolean = definedExternally, OutNewEdgeID: EdgeID = definedExternally): `T$100`
    open fun TryToRemovePolygonEdge(EdgeID: EdgeID, bOutWasEdgeRemoved: Boolean = definedExternally, OutNewPolygonID: PolygonID = definedExternally): `T$101`
    open fun TriangulatePolygons(PolygonIDs: Array<PolygonID>, OutNewTrianglePolygons: Array<PolygonID> = definedExternally): `T$102`
    open fun TessellatePolygons(PolygonIDs: Array<PolygonID>, TriangleTessellationMode: String /* "ThreeTriangles" | "FourTriangles" | "ETriangleTessellationMode_MAX" */, OutNewPolygonIDs: Array<PolygonID> = definedExternally): `T$103`
    open fun StartModification(MeshModificationType: String /* "FirstInterim" | "Interim" | "Final" | "EMeshModificationType_MAX" */, MeshTopologyChange: String /* "NoTopologyChange" | "TopologyChange" | "EMeshTopologyChange_MAX" */)
    open fun SplitPolygons(PolygonsToSplit: Array<PolygonToSplit>, OutNewEdgeIDs: Array<EdgeID> = definedExternally): `T$104`
    open fun SplitPolygonalMesh(InPlane: Plane, PolygonIDs1: Array<PolygonID> = definedExternally, PolygonIDs2: Array<PolygonID> = definedExternally, BoundaryIDs: Array<EdgeID> = definedExternally): `T$105`
    open fun SplitEdge(EdgeID: EdgeID, Splits: Array<Number>, OutNewVertexIDs: Array<VertexID> = definedExternally): `T$106`
    open fun SetVerticesCornerSharpness(VertexIDs: Array<VertexID>, VerticesNewCornerSharpness: Array<Number>)
    open fun SetVerticesAttributes(AttributesForVertices: Array<AttributesForVertex>)
    open fun SetVertexInstancesAttributes(AttributesForVertexInstances: Array<AttributesForVertexInstance>)
    open fun SetTextureCoordinateCount(NumTexCoords: Number)
    open fun SetSubdivisionCount(NewSubdivisionCount: Number)
    open fun SetPolygonsVertexAttributes(VertexAttributesForPolygons: Array<VertexAttributesForPolygon>)
    open fun SetEdgesHardnessAutomatically(EdgeIDs: Array<EdgeID>, MaxDotProductForSoftEdge: Number)
    open fun SetEdgesHardness(EdgeIDs: Array<EdgeID>, EdgesNewIsHard: Array<Boolean>)
    open fun SetEdgesCreaseSharpness(EdgeIDs: Array<EdgeID>, EdgesNewCreaseSharpness: Array<Number>)
    open fun SetEdgesAttributes(AttributesForEdges: Array<AttributesForEdge>)
    open fun SetAllowUndo(bInAllowUndo: Boolean)
    open fun SetAllowSpatialDatabase(bInAllowSpatialDatabase: Boolean)
    open fun SetAllowCompact(bInAllowCompact: Boolean)
    open fun SearchSpatialDatabaseForPolygonsPotentiallyIntersectingPlane(InPlane: Plane, OutPolygons: Array<PolygonID> = definedExternally): `T$107`
    open fun SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(LineSegmentStart: Vector, LineSegmentEnd: Vector, OutPolygons: Array<PolygonID> = definedExternally): `T$108`
    open fun SearchSpatialDatabaseForPolygonsInVolume(planes: Array<Plane>, OutPolygons: Array<PolygonID> = definedExternally): `T$109`
    open fun RevertInstance(): EditableMesh
    open fun Revert()
    open fun RebuildRenderMesh()
    open fun QuadrangulateMesh(OutNewPolygonIDs: Array<PolygonID> = definedExternally): `T$110`
    open fun PropagateInstanceChanges()
    open fun MoveVertices(VerticesToMove: Array<VertexToMove>)
    open fun IsValidVertex(VertexID: VertexID): Boolean
    open fun IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): Boolean
    open fun IsValidPolygon(PolygonID: PolygonID): Boolean
    open fun IsValidEdge(EdgeID: EdgeID): Boolean
    open fun IsUndoAllowed(): Boolean
    open fun IsSpatialDatabaseAllowed(): Boolean
    open fun IsPreviewingSubdivisions(): Boolean
    open fun IsOrphanedVertex(VertexID: VertexID): Boolean
    open fun IsCompactAllowed(): Boolean
    open fun IsCommittedAsInstance(): Boolean
    open fun IsCommitted(): Boolean
    open fun IsBeingModified(): Boolean
    open fun InsetPolygons(PolygonIDs: Array<PolygonID>, InsetFixedDistance: Number, InsetProgressTowardCenter: Number, Mode: String /* "All" | "CenterPolygonOnly" | "SidePolygonsOnly" | "EInsetPolygonsMode_MAX" */, OutNewCenterPolygonIDs: Array<PolygonID> = definedExternally, OutNewSidePolygonIDs: Array<PolygonID> = definedExternally): `T$111`
    open fun InsertEdgeLoop(EdgeID: EdgeID, Splits: Array<Number>, OutNewEdgeIDs: Array<EdgeID> = definedExternally): `T$112`
    open fun InitializeAdapters()
    open fun GetVertexPairEdge(VertexID: VertexID, NextVertexID: VertexID, bOutEdgeWindingIsReversed: Boolean = definedExternally): `T$113`
    open fun GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID
    open fun GetVertexInstanceCount(): Number
    open fun GetVertexInstanceConnectedPolygons(VertexInstanceID: VertexInstanceID, OutConnectedPolygonIDs: Array<PolygonID> = definedExternally): `T$114`
    open fun GetVertexInstanceConnectedPolygonCount(VertexInstanceID: VertexInstanceID): Number
    open fun GetVertexInstanceConnectedPolygon(VertexInstanceID: VertexInstanceID, ConnectedPolygonNumber: Number): PolygonID
    open fun GetVertexCount(): Number
    open fun GetVertexConnectedPolygons(VertexID: VertexID, OutConnectedPolygonIDs: Array<PolygonID> = definedExternally): `T$115`
    open fun GetVertexConnectedEdges(VertexID: VertexID, OutConnectedEdgeIDs: Array<EdgeID> = definedExternally): `T$116`
    open fun GetVertexConnectedEdgeCount(VertexID: VertexID): Number
    open fun GetVertexConnectedEdge(VertexID: VertexID, ConnectedEdgeNumber: Number): EdgeID
    open fun GetVertexAdjacentVertices(VertexID: VertexID, OutAdjacentVertexIDs: Array<VertexID> = definedExternally): `T$117`
    open fun GetTextureCoordinateCount(): Number
    open fun GetSubdivisionLimitData(): SubdivisionLimitData
    open fun GetSubdivisionCount(): Number
    open fun GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): Number
    open fun GetPolygonTriangulatedTriangle(PolygonID: PolygonID, PolygonTriangleNumber: Number): TriangleID
    open fun GetPolygonPerimeterVertices(PolygonID: PolygonID, OutPolygonPerimeterVertexIDs: Array<VertexID> = definedExternally): `T$118`
    open fun GetPolygonPerimeterVertexInstances(PolygonID: PolygonID, OutPolygonPerimeterVertexInstanceIDs: Array<VertexInstanceID> = definedExternally): `T$119`
    open fun GetPolygonPerimeterVertexInstance(PolygonID: PolygonID, PolygonVertexNumber: Number): VertexInstanceID
    open fun GetPolygonPerimeterVertexCount(PolygonID: PolygonID): Number
    open fun GetPolygonPerimeterVertex(PolygonID: PolygonID, PolygonVertexNumber: Number): VertexID
    open fun GetPolygonPerimeterEdges(PolygonID: PolygonID, OutPolygonPerimeterEdgeIDs: Array<EdgeID> = definedExternally): `T$120`
    open fun GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): Number
    open fun GetPolygonPerimeterEdge(PolygonID: PolygonID, PerimeterEdgeNumber: Number, bOutEdgeWindingIsReversedForPolygon: Boolean = definedExternally): `T$121`
    open fun GetPolygonInGroup(PolygonGroupID: PolygonGroupID, PolygonNumber: Number): PolygonID
    open fun GetPolygonGroupCount(): Number
    open fun GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): Number
    open fun GetPolygonCount(): Number
    open fun GetPolygonAdjacentPolygons(PolygonID: PolygonID, OutAdjacentPolygons: Array<PolygonID> = definedExternally): `T$122`
    open fun GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID
    open fun GetFirstValidPolygonGroup(): PolygonGroupID
    open fun GetEdgeVertices(EdgeID: EdgeID, OutEdgeVertexID0: VertexID = definedExternally, OutEdgeVertexID1: VertexID = definedExternally): `T$123`
    open fun GetEdgeVertex(EdgeID: EdgeID, EdgeVertexNumber: Number): VertexID
    open fun GetEdgeThatConnectsVertices(VertexID0: VertexID, VertexID1: VertexID): EdgeID
    open fun GetEdgeLoopElements(EdgeID: EdgeID, EdgeLoopIDs: Array<EdgeID> = definedExternally): `T$124`
    open fun GetEdgeCount(): Number
    open fun GetEdgeConnectedPolygons(EdgeID: EdgeID, OutConnectedPolygonIDs: Array<PolygonID> = definedExternally): `T$125`
    open fun GetEdgeConnectedPolygonCount(EdgeID: EdgeID): Number
    open fun GetEdgeConnectedPolygon(EdgeID: EdgeID, ConnectedPolygonNumber: Number): PolygonID
    open fun GeneratePolygonTangentsAndNormals(PolygonIDs: Array<PolygonID>)
    open fun FlipPolygons(PolygonIDs: Array<PolygonID>)
    open fun FindPolygonPerimeterVertexNumberForVertex(PolygonID: PolygonID, VertexID: VertexID): Number
    open fun FindPolygonPerimeterEdgeNumberForVertices(PolygonID: PolygonID, EdgeVertexID0: VertexID, EdgeVertexID1: VertexID): Number
    open fun FindPolygonLoop(EdgeID: EdgeID, OutEdgeLoopEdgeIDs: Array<EdgeID> = definedExternally, OutFlippedEdgeIDs: Array<EdgeID> = definedExternally, OutReversedEdgeIDPathToTake: Array<EdgeID> = definedExternally, OutPolygonIDsToSplit: Array<PolygonID> = definedExternally): `T$126`
    open fun ExtrudePolygons(Polygons: Array<PolygonID>, ExtrudeDistance: Number, bKeepNeighborsTogether: Boolean, OutNewExtrudedFrontPolygons: Array<PolygonID> = definedExternally): `T$127`
    open fun ExtendVertices(VertexIDs: Array<VertexID>, bOnlyExtendClosestEdge: Boolean, ReferencePosition: Vector, OutNewExtendedVertexIDs: Array<VertexID> = definedExternally): `T$128`
    open fun ExtendEdges(EdgeIDs: Array<EdgeID>, bWeldNeighbors: Boolean, OutNewExtendedEdgeIDs: Array<EdgeID> = definedExternally): `T$129`
    open fun EndModification(bFromUndo: Boolean)
    open fun DeleteVertexInstances(VertexInstanceIDsToDelete: Array<VertexInstanceID>, bDeleteOrphanedVertices: Boolean)
    open fun DeleteVertexAndConnectedEdgesAndPolygons(VertexID: VertexID, bDeleteOrphanedEdges: Boolean, bDeleteOrphanedVertices: Boolean, bDeleteOrphanedVertexInstances: Boolean, bDeleteEmptyPolygonGroups: Boolean)
    open fun DeletePolygons(PolygonIDsToDelete: Array<PolygonID>, bDeleteOrphanedEdges: Boolean, bDeleteOrphanedVertices: Boolean, bDeleteOrphanedVertexInstances: Boolean, bDeleteEmptyPolygonGroups: Boolean)
    open fun DeletePolygonGroups(PolygonGroupIDs: Array<PolygonGroupID>)
    open fun DeleteOrphanVertices(VertexIDsToDelete: Array<VertexID>)
    open fun DeleteEdges(EdgeIDsToDelete: Array<EdgeID>, bDeleteOrphanedVertices: Boolean)
    open fun DeleteEdgeAndConnectedPolygons(EdgeID: EdgeID, bDeleteOrphanedEdges: Boolean, bDeleteOrphanedVertices: Boolean, bDeleteOrphanedVertexInstances: Boolean, bDeleteEmptyPolygonGroups: Boolean)
    open fun CreateVertices(VerticesToCreate: Array<VertexToCreate>, OutNewVertexIDs: Array<VertexID> = definedExternally): `T$130`
    open fun CreateVertexInstances(VertexInstancesToCreate: Array<VertexInstanceToCreate>, OutNewVertexInstanceIDs: Array<VertexInstanceID> = definedExternally): `T$131`
    open fun CreatePolygons(PolygonsToCreate: Array<PolygonToCreate>, OutNewPolygonIDs: Array<PolygonID> = definedExternally, OutNewEdgeIDs: Array<EdgeID> = definedExternally): `T$132`
    open fun CreatePolygonGroups(PolygonGroupsToCreate: Array<PolygonGroupToCreate>, OutNewPolygonGroupIDs: Array<PolygonGroupID> = definedExternally): `T$133`
    open fun CreateMissingPolygonPerimeterEdges(PolygonID: PolygonID, OutNewEdgeIDs: Array<EdgeID> = definedExternally): `T$134`
    open fun CreateEmptyVertexRange(NumVerticesToCreate: Number, OutNewVertexIDs: Array<VertexID> = definedExternally): `T$135`
    open fun CreateEdges(EdgesToCreate: Array<EdgeToCreate>, OutNewEdgeIDs: Array<EdgeID> = definedExternally): `T$136`
    open fun ComputePolygonsSharedEdges(PolygonIDs: Array<PolygonID>, OutSharedEdgeIDs: Array<EdgeID> = definedExternally): `T$137`
    open fun ComputePolygonPlane(PolygonID: PolygonID): Plane
    open fun ComputePolygonNormal(PolygonID: PolygonID): Vector
    open fun ComputePolygonCenter(PolygonID: PolygonID): Vector
    open fun ComputeBoundingBoxAndSphere(): BoxSphereBounds
    open fun ComputeBoundingBox(): Box
    open fun CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh
    open fun Commit()
    open fun ChangePolygonsVertexInstances(VertexInstancesForPolygons: Array<ChangeVertexInstancesForPolygon>)
    open fun BevelPolygons(PolygonIDs: Array<PolygonID>, BevelFixedDistance: Number, BevelProgressTowardCenter: Number, OutNewCenterPolygonIDs: Array<PolygonID> = definedExternally, OutNewSidePolygonIDs: Array<PolygonID> = definedExternally): `T$138`
    open fun AssignPolygonsToPolygonGroups(PolygonGroupForPolygons: Array<PolygonGroupForPolygon>, bDeleteOrphanedPolygonGroups: Boolean)
    open fun AnyChangesToUndo(): Boolean

    companion object {
        fun Load(ResourceName: String): EditableMesh
        fun Find(Outer: UObject, ResourceName: String): EditableMesh
        fun GetDefaultObject(): EditableMesh
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditableMesh
        fun MakeVertexID(VertexIndex: Number): VertexID
        fun MakePolygonID(PolygonIndex: Number): PolygonID
        fun MakePolygonGroupID(PolygonGroupIndex: Number): PolygonGroupID
        fun MakeEdgeID(EdgeIndex: Number): EdgeID
        fun InvalidVertexID(): VertexID
        fun InvalidPolygonID(): PolygonID
        fun InvalidPolygonGroupID(): PolygonGroupID
        fun InvalidEdgeID(): EdgeID
        fun C(Other: UObject): EditableMesh
        fun C(Other: Any): EditableMesh
    }
}

external open class EditableMeshFactory : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditableMeshFactory
        fun Find(Outer: UObject, ResourceName: String): EditableMeshFactory
        fun GetDefaultObject(): EditableMeshFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditableMeshFactory
        fun MakeEditableMesh(PrimitiveComponent: PrimitiveComponent, LODIndex: Number): EditableMesh
        fun C(Other: UObject): EditableMeshFactory
        fun C(Other: Any): EditableMeshFactory
    }
}

external open class EditableStaticMeshAdapter : EditableMeshAdapter {
    constructor()
    constructor(Outer: UObject)
    open var StaticMesh: StaticMesh
    open var OriginalStaticMesh: StaticMesh
    open var StaticMeshLODIndex: Number

    companion object {
        fun Load(ResourceName: String): EditableStaticMeshAdapter
        fun Find(Outer: UObject, ResourceName: String): EditableStaticMeshAdapter
        fun GetDefaultObject(): EditableStaticMeshAdapter
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditableStaticMeshAdapter
        fun C(Other: UObject): EditableStaticMeshAdapter
        fun C(Other: Any): EditableStaticMeshAdapter
    }
}

external object EGooglePADErrorCode {
    var AssetPack_NO_ERROR: String /* "AssetPack_NO_ERROR" */
    var AssetPack_APP_UNAVAILABLE: String /* "AssetPack_APP_UNAVAILABLE" */
    var AssetPack_UNAVAILABLE: String /* "AssetPack_UNAVAILABLE" */
    var AssetPack_INVALID_REQUEST: String /* "AssetPack_INVALID_REQUEST" */
    var AssetPack_DOWNLOAD_NOT_FOUND: String /* "AssetPack_DOWNLOAD_NOT_FOUND" */
    var AssetPack_API_NOT_AVAILABLE: String /* "AssetPack_API_NOT_AVAILABLE" */
    var AssetPack_NETWORK_ERROR: String /* "AssetPack_NETWORK_ERROR" */
    var AssetPack_ACCESS_DENIED: String /* "AssetPack_ACCESS_DENIED" */
    var AssetPack_INSUFFICIENT_STORAGE: String /* "AssetPack_INSUFFICIENT_STORAGE" */
    var AssetPack_PLAY_STORE_NOT_FOUND: String /* "AssetPack_PLAY_STORE_NOT_FOUND" */
    var AssetPack_NETWORK_UNRESTRICTED: String /* "AssetPack_NETWORK_UNRESTRICTED" */
    var AssetPack_INTERNAL_ERROR: String /* "AssetPack_INTERNAL_ERROR" */
    var AssetPack_INITIALIZATION_NEEDED: String /* "AssetPack_INITIALIZATION_NEEDED" */
    var AssetPack_INITIALIZATION_FAILED: String /* "AssetPack_INITIALIZATION_FAILED" */
    var AssetPack_MAX: String /* "AssetPack_MAX" */
}

external object EGooglePADStorageMethod {
    var AssetPack_STORAGE_FILES: String /* "AssetPack_STORAGE_FILES" */
    var AssetPack_STORAGE_APK: String /* "AssetPack_STORAGE_APK" */
    var AssetPack_STORAGE_UNKNOWN: String /* "AssetPack_STORAGE_UNKNOWN" */
    var AssetPack_STORAGE_NOT_INSTALLED: String /* "AssetPack_STORAGE_NOT_INSTALLED" */
    var AssetPack_STORAGE_MAX: String /* "AssetPack_STORAGE_MAX" */
}

external object EGooglePADCellularDataConfirmStatus {
    var AssetPack_CONFIRM_UNKNOWN: String /* "AssetPack_CONFIRM_UNKNOWN" */
    var AssetPack_CONFIRM_PENDING: String /* "AssetPack_CONFIRM_PENDING" */
    var AssetPack_CONFIRM_USER_APPROVED: String /* "AssetPack_CONFIRM_USER_APPROVED" */
    var AssetPack_CONFIRM_USER_CANCELED: String /* "AssetPack_CONFIRM_USER_CANCELED" */
    var AssetPack_CONFIRM_MAX: String /* "AssetPack_CONFIRM_MAX" */
}

external object EGooglePADDownloadStatus {
    var AssetPack_UNKNOWN: String /* "AssetPack_UNKNOWN" */
    var AssetPack_DOWNLOAD_PENDING: String /* "AssetPack_DOWNLOAD_PENDING" */
    var AssetPack_DOWNLOADING: String /* "AssetPack_DOWNLOADING" */
    var AssetPack_TRANSFERRING: String /* "AssetPack_TRANSFERRING" */
    var AssetPack_DOWNLOAD_COMPLETED: String /* "AssetPack_DOWNLOAD_COMPLETED" */
    var AssetPack_DOWNLOAD_FAILED: String /* "AssetPack_DOWNLOAD_FAILED" */
    var AssetPack_DOWNLOAD_CANCELED: String /* "AssetPack_DOWNLOAD_CANCELED" */
    var AssetPack_WAITING_FOR_WIFI: String /* "AssetPack_WAITING_FOR_WIFI" */
    var AssetPack_NOT_INSTALLED: String /* "AssetPack_NOT_INSTALLED" */
    var AssetPack_INFO_PENDING: String /* "AssetPack_INFO_PENDING" */
    var AssetPack_INFO_FAILED: String /* "AssetPack_INFO_FAILED" */
    var AssetPack_REMOVAL_PENDING: String /* "AssetPack_REMOVAL_PENDING" */
    var AssetPack_REMOVAL_FAILED: String /* "AssetPack_REMOVAL_FAILED" */
    var AssetPack_MAX: String /* "AssetPack_MAX" */
}

external interface `T$139` {
    var Status: String /* "AssetPack_CONFIRM_UNKNOWN" | "AssetPack_CONFIRM_PENDING" | "AssetPack_CONFIRM_USER_APPROVED" | "AssetPack_CONFIRM_USER_CANCELED" | "AssetPack_CONFIRM_MAX" */
    var `$`: String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
}

external interface `T$140` {
    var State: Number
    var `$`: String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
}

external interface `T$141` {
    var Location: Number
    var `$`: String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
}

external open class GooglePADFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): GooglePADFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): GooglePADFunctionLibrary
        fun GetDefaultObject(): GooglePADFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GooglePADFunctionLibrary
        fun ShowCellularDataConfirmation(): String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
        fun RequestRemoval(Name: String): String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
        fun RequestInfo(AssetPacks: Array<String>): String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
        fun RequestDownload(AssetPacks: Array<String>): String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
        fun ReleaseDownloadState(State: Number)
        fun ReleaseAssetPackLocation(Location: Number)
        fun GetTotalBytesToDownload(State: Number): Number
        fun GetStorageMethod(Location: Number): String /* "AssetPack_STORAGE_FILES" | "AssetPack_STORAGE_APK" | "AssetPack_STORAGE_UNKNOWN" | "AssetPack_STORAGE_NOT_INSTALLED" | "AssetPack_STORAGE_MAX" */
        fun GetCellularDataConfirmationStatus(Status: String /* "AssetPack_CONFIRM_UNKNOWN" | "AssetPack_CONFIRM_PENDING" | "AssetPack_CONFIRM_USER_APPROVED" | "AssetPack_CONFIRM_USER_CANCELED" | "AssetPack_CONFIRM_MAX" */ = definedExternally): `T$139`
        fun GetDownloadStatus(State: Number): String /* "AssetPack_UNKNOWN" | "AssetPack_DOWNLOAD_PENDING" | "AssetPack_DOWNLOADING" | "AssetPack_TRANSFERRING" | "AssetPack_DOWNLOAD_COMPLETED" | "AssetPack_DOWNLOAD_FAILED" | "AssetPack_DOWNLOAD_CANCELED" | "AssetPack_WAITING_FOR_WIFI" | "AssetPack_NOT_INSTALLED" | "AssetPack_INFO_PENDING" | "AssetPack_INFO_FAILED" | "AssetPack_REMOVAL_PENDING" | "AssetPack_REMOVAL_FAILED" | "AssetPack_MAX" */
        fun GetDownloadState(Name: String, State: Number = definedExternally): `T$140`
        fun GetBytesDownloaded(State: Number): Number
        fun GetAssetsPath(Location: Number): String
        fun GetAssetPackLocation(Name: String, Location: Number = definedExternally): `T$141`
        fun CancelDownload(AssetPacks: Array<String>): String /* "AssetPack_NO_ERROR" | "AssetPack_APP_UNAVAILABLE" | "AssetPack_UNAVAILABLE" | "AssetPack_INVALID_REQUEST" | "AssetPack_DOWNLOAD_NOT_FOUND" | "AssetPack_API_NOT_AVAILABLE" | "AssetPack_NETWORK_ERROR" | "AssetPack_ACCESS_DENIED" | "AssetPack_INSUFFICIENT_STORAGE" | "AssetPack_PLAY_STORE_NOT_FOUND" | "AssetPack_NETWORK_UNRESTRICTED" | "AssetPack_INTERNAL_ERROR" | "AssetPack_INITIALIZATION_NEEDED" | "AssetPack_INITIALIZATION_FAILED" | "AssetPack_MAX" */
        fun C(Other: UObject): GooglePADFunctionLibrary
        fun C(Other: Any): GooglePADFunctionLibrary
    }
}

external open class MobileInstalledContent : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun Mount(PakOrder: Number, MountPoint: String): Boolean
    open fun GetInstalledContentSize(): Number
    open fun GetDiskFreeSpace(): Number

    companion object {
        fun Load(ResourceName: String): MobileInstalledContent
        fun Find(Outer: UObject, ResourceName: String): MobileInstalledContent
        fun GetDefaultObject(): MobileInstalledContent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MobileInstalledContent
        fun C(Other: UObject): MobileInstalledContent
        fun C(Other: Any): MobileInstalledContent
    }
}

external open class MobilePendingContent : MobileInstalledContent {
    constructor()
    constructor(Outer: UObject)
    open fun GetTotalDownloadedSize(): Number
    open fun GetRequiredDiskSpace(): Number
    open fun GetInstallProgress(): Number
    open fun GetDownloadStatusText(): String
    open fun GetDownloadSpeed(): Number
    open fun GetDownloadSize(): Number

    companion object {
        fun Load(ResourceName: String): MobilePendingContent
        fun Find(Outer: UObject, ResourceName: String): MobilePendingContent
        fun GetDefaultObject(): MobilePendingContent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MobilePendingContent
        fun C(Other: UObject): MobilePendingContent
        fun C(Other: Any): MobilePendingContent
    }
}

external open class MobilePatchingLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MobilePatchingLibrary
        fun Find(Outer: UObject, ResourceName: String): MobilePatchingLibrary
        fun GetDefaultObject(): MobilePatchingLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MobilePatchingLibrary
        fun HasActiveWiFiConnection(): Boolean
        fun GetSupportedPlatformNames(): Array<String>
        fun GetInstalledContent(InstallDirectory: String): MobileInstalledContent
        fun GetActiveDeviceProfileName(): String
        fun C(Other: UObject): MobilePatchingLibrary
        fun C(Other: Any): MobilePatchingLibrary
    }
}

external object ESynth1OscType {
    var Sine: String /* "Sine" */
    var Saw: String /* "Saw" */
    var Triangle: String /* "Triangle" */
    var Square: String /* "Square" */
    var Noise: String /* "Noise" */
    var Count: String /* "Count" */
    var ESynth1OscType_MAX: String /* "ESynth1OscType_MAX" */
}

external object ESynthLFOType {
    var Sine: String /* "Sine" */
    var UpSaw: String /* "UpSaw" */
    var DownSaw: String /* "DownSaw" */
    var Square: String /* "Square" */
    var Triangle: String /* "Triangle" */
    var Exponential: String /* "Exponential" */
    var RandomSampleHold: String /* "RandomSampleHold" */
    var Count: String /* "Count" */
    var ESynthLFOType_MAX: String /* "ESynthLFOType_MAX" */
}

external object ESynthLFOMode {
    var Sync: String /* "Sync" */
    var OneShot: String /* "OneShot" */
    var Free: String /* "Free" */
    var Count: String /* "Count" */
    var ESynthLFOMode_MAX: String /* "ESynthLFOMode_MAX" */
}

external object ESynthLFOPatchType {
    var PatchToNone: String /* "PatchToNone" */
    var PatchToGain: String /* "PatchToGain" */
    var PatchToOscFreq: String /* "PatchToOscFreq" */
    var PatchToFilterFreq: String /* "PatchToFilterFreq" */
    var PatchToFilterQ: String /* "PatchToFilterQ" */
    var PatchToOscPulseWidth: String /* "PatchToOscPulseWidth" */
    var PatchToOscPan: String /* "PatchToOscPan" */
    var PatchLFO1ToLFO2Frequency: String /* "PatchLFO1ToLFO2Frequency" */
    var PatchLFO1ToLFO2Gain: String /* "PatchLFO1ToLFO2Gain" */
    var Count: String /* "Count" */
    var ESynthLFOPatchType_MAX: String /* "ESynthLFOPatchType_MAX" */
}

external object ESynthModEnvPatch {
    var PatchToNone: String /* "PatchToNone" */
    var PatchToOscFreq: String /* "PatchToOscFreq" */
    var PatchToFilterFreq: String /* "PatchToFilterFreq" */
    var PatchToFilterQ: String /* "PatchToFilterQ" */
    var PatchToLFO1Gain: String /* "PatchToLFO1Gain" */
    var PatchToLFO2Gain: String /* "PatchToLFO2Gain" */
    var PatchToLFO1Freq: String /* "PatchToLFO1Freq" */
    var PatchToLFO2Freq: String /* "PatchToLFO2Freq" */
    var Count: String /* "Count" */
    var ESynthModEnvPatch_MAX: String /* "ESynthModEnvPatch_MAX" */
}

external object ESynthModEnvBiasPatch {
    var PatchToNone: String /* "PatchToNone" */
    var PatchToOscFreq: String /* "PatchToOscFreq" */
    var PatchToFilterFreq: String /* "PatchToFilterFreq" */
    var PatchToFilterQ: String /* "PatchToFilterQ" */
    var PatchToLFO1Gain: String /* "PatchToLFO1Gain" */
    var PatchToLFO2Gain: String /* "PatchToLFO2Gain" */
    var PatchToLFO1Freq: String /* "PatchToLFO1Freq" */
    var PatchToLFO2Freq: String /* "PatchToLFO2Freq" */
    var Count: String /* "Count" */
    var ESynthModEnvBiasPatch_MAX: String /* "ESynthModEnvBiasPatch_MAX" */
}

external object ESynthFilterType {
    var LowPass: String /* "LowPass" */
    var HighPass: String /* "HighPass" */
    var BandPass: String /* "BandPass" */
    var BandStop: String /* "BandStop" */
    var Count: String /* "Count" */
    var ESynthFilterType_MAX: String /* "ESynthFilterType_MAX" */
}

external object ESynthFilterAlgorithm {
    var OnePole: String /* "OnePole" */
    var StateVariable: String /* "StateVariable" */
    var Ladder: String /* "Ladder" */
    var Count: String /* "Count" */
    var ESynthFilterAlgorithm_MAX: String /* "ESynthFilterAlgorithm_MAX" */
}

external object ESynthStereoDelayMode {
    var Normal: String /* "Normal" */
    var Cross: String /* "Cross" */
    var PingPong: String /* "PingPong" */
    var Count: String /* "Count" */
    var ESynthStereoDelayMode_MAX: String /* "ESynthStereoDelayMode_MAX" */
}

external object ESynth1PatchSource {
    var LFO1: String /* "LFO1" */
    var LFO2: String /* "LFO2" */
    var Envelope: String /* "Envelope" */
    var BiasEnvelope: String /* "BiasEnvelope" */
    var Count: String /* "Count" */
    var ESynth1PatchSource_MAX: String /* "ESynth1PatchSource_MAX" */
}

external object ESynth1PatchDestination {
    var Osc1Gain: String /* "Osc1Gain" */
    var Osc1Frequency: String /* "Osc1Frequency" */
    var Osc1Pulsewidth: String /* "Osc1Pulsewidth" */
    var Osc2Gain: String /* "Osc2Gain" */
    var Osc2Frequency: String /* "Osc2Frequency" */
    var Osc2Pulsewidth: String /* "Osc2Pulsewidth" */
    var FilterFrequency: String /* "FilterFrequency" */
    var FilterQ: String /* "FilterQ" */
    var Gain: String /* "Gain" */
    var Pan: String /* "Pan" */
    var LFO1Frequency: String /* "LFO1Frequency" */
    var LFO1Gain: String /* "LFO1Gain" */
    var LFO2Frequency: String /* "LFO2Frequency" */
    var LFO2Gain: String /* "LFO2Gain" */
    var Count: String /* "Count" */
    var ESynth1PatchDestination_MAX: String /* "ESynth1PatchDestination_MAX" */
}

external open class Synth1PatchCable {
    open var Depth: Number
    open var Destination: String /* "Osc1Gain" | "Osc1Frequency" | "Osc1Pulsewidth" | "Osc2Gain" | "Osc2Frequency" | "Osc2Pulsewidth" | "FilterFrequency" | "FilterQ" | "Gain" | "Pan" | "LFO1Frequency" | "LFO1Gain" | "LFO2Frequency" | "LFO2Gain" | "Count" | "ESynth1PatchDestination_MAX" */
    open fun clone(): Synth1PatchCable

    companion object {
        fun C(Other: UObject): Synth1PatchCable
        fun C(Other: Any): Synth1PatchCable
    }
}

external open class EpicSynth1Patch {
    open var PatchSource: String /* "LFO1" | "LFO2" | "Envelope" | "BiasEnvelope" | "Count" | "ESynth1PatchSource_MAX" */
    open var PatchCables: Array<Synth1PatchCable>
    open fun clone(): EpicSynth1Patch

    companion object {
        fun C(Other: UObject): EpicSynth1Patch
        fun C(Other: Any): EpicSynth1Patch
    }
}

external open class ModularSynthPreset : TableRowBase {
    open var bEnablePolyphony: Boolean
    open var Osc1Type: String /* "Sine" | "Saw" | "Triangle" | "Square" | "Noise" | "Count" | "ESynth1OscType_MAX" */
    open var Osc1Gain: Number
    open var Osc1Octave: Number
    open var Osc1Semitones: Number
    open var Osc1Cents: Number
    open var Osc1PulseWidth: Number
    open var Osc2Type: String /* "Sine" | "Saw" | "Triangle" | "Square" | "Noise" | "Count" | "ESynth1OscType_MAX" */
    open var Osc2Gain: Number
    open var Osc2Octave: Number
    open var Osc2Semitones: Number
    open var Osc2Cents: Number
    open var Osc2PulseWidth: Number
    open var Portamento: Number
    open var bEnableUnison: Boolean
    open var bEnableOscillatorSync: Boolean
    open var Spread: Number
    open var Pan: Number
    open var LFO1Frequency: Number
    open var LFO1Gain: Number
    open var LFO1Type: String /* "Sine" | "UpSaw" | "DownSaw" | "Square" | "Triangle" | "Exponential" | "RandomSampleHold" | "Count" | "ESynthLFOType_MAX" */
    open var LFO1Mode: String /* "Sync" | "OneShot" | "Free" | "Count" | "ESynthLFOMode_MAX" */
    open var LFO1PatchType: String /* "PatchToNone" | "PatchToGain" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToOscPulseWidth" | "PatchToOscPan" | "PatchLFO1ToLFO2Frequency" | "PatchLFO1ToLFO2Gain" | "Count" | "ESynthLFOPatchType_MAX" */
    open var LFO2Frequency: Number
    open var LFO2Gain: Number
    open var LFO2Type: String /* "Sine" | "UpSaw" | "DownSaw" | "Square" | "Triangle" | "Exponential" | "RandomSampleHold" | "Count" | "ESynthLFOType_MAX" */
    open var LFO2Mode: String /* "Sync" | "OneShot" | "Free" | "Count" | "ESynthLFOMode_MAX" */
    open var LFO2PatchType: String /* "PatchToNone" | "PatchToGain" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToOscPulseWidth" | "PatchToOscPan" | "PatchLFO1ToLFO2Frequency" | "PatchLFO1ToLFO2Gain" | "Count" | "ESynthLFOPatchType_MAX" */
    open var GainDb: Number
    open var AttackTime: Number
    open var DecayTime: Number
    open var SustainGain: Number
    open var ReleaseTime: Number
    open var ModEnvPatchType: String /* "PatchToNone" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToLFO1Gain" | "PatchToLFO2Gain" | "PatchToLFO1Freq" | "PatchToLFO2Freq" | "Count" | "ESynthModEnvPatch_MAX" */
    open var ModEnvBiasPatchType: String /* "PatchToNone" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToLFO1Gain" | "PatchToLFO2Gain" | "PatchToLFO1Freq" | "PatchToLFO2Freq" | "Count" | "ESynthModEnvBiasPatch_MAX" */
    open var bInvertModulationEnvelope: Boolean
    open var bInvertModulationEnvelopeBias: Boolean
    open var ModulationEnvelopeDepth: Number
    open var ModulationEnvelopeAttackTime: Number
    open var ModulationEnvelopeDecayTime: Number
    open var ModulationEnvelopeSustainGain: Number
    open var ModulationEnvelopeReleaseTime: Number
    open var bLegato: Boolean
    open var bRetrigger: Boolean
    open var FilterFrequency: Number
    open var FilterQ: Number
    open var FilterType: String /* "LowPass" | "HighPass" | "BandPass" | "BandStop" | "Count" | "ESynthFilterType_MAX" */
    open var FilterAlgorithm: String /* "OnePole" | "StateVariable" | "Ladder" | "Count" | "ESynthFilterAlgorithm_MAX" */
    open var bStereoDelayEnabled: Boolean
    open var StereoDelayMode: String /* "Normal" | "Cross" | "PingPong" | "Count" | "ESynthStereoDelayMode_MAX" */
    open var StereoDelayTime: Number
    open var StereoDelayFeedback: Number
    open var StereoDelayWetlevel: Number
    open var StereoDelayRatio: Number
    open var bChorusEnabled: Boolean
    open var ChorusDepth: Number
    open var ChorusFeedback: Number
    open var ChorusFrequency: Number
    open var Patches: Array<EpicSynth1Patch>
    override fun clone(): ModularSynthPreset

    companion object {
        fun C(Other: UObject): ModularSynthPreset
        fun C(Other: Any): ModularSynthPreset
    }
}

external open class ModularSynthPresetBankEntry {
    open var PresetName: String
    open var Preset: ModularSynthPreset
    open fun clone(): ModularSynthPresetBankEntry

    companion object {
        fun C(Other: UObject): ModularSynthPresetBankEntry
        fun C(Other: Any): ModularSynthPresetBankEntry
    }
}

external open class ModularSynthPresetBank : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Presets: Array<ModularSynthPresetBankEntry>
    open fun AddModularSynthPresetToBankAsset(Preset: ModularSynthPreset, PresetName: String)

    companion object {
        fun Load(ResourceName: String): ModularSynthPresetBank
        fun Find(Outer: UObject, ResourceName: String): ModularSynthPresetBank
        fun GetDefaultObject(): ModularSynthPresetBank
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ModularSynthPresetBank
        fun C(Other: UObject): ModularSynthPresetBank
        fun C(Other: Any): ModularSynthPresetBank
        fun AddModularSynthPresetToBankAsset(InBank: ModularSynthPresetBank, Preset: ModularSynthPreset, PresetName: String)
    }
}

external open class ModularSynthLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ModularSynthLibrary
        fun Find(Outer: UObject, ResourceName: String): ModularSynthLibrary
        fun GetDefaultObject(): ModularSynthLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ModularSynthLibrary
        fun AddModularSynthPresetToBankAsset(InBank: ModularSynthPresetBank, Preset: ModularSynthPreset, PresetName: String)
        fun C(Other: UObject): ModularSynthLibrary
        fun C(Other: Any): ModularSynthLibrary
    }
}

external open class PatchId {
    open var ID: Number
    open fun clone(): PatchId

    companion object {
        fun C(Other: UObject): PatchId
        fun C(Other: Any): PatchId
    }
}

external open class ModularSynthComponent : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var VoiceCount: Number
    open fun SetSynthPreset(SynthPreset: ModularSynthPreset)
    open fun SetSustainGain(SustainGain: Number)
    open fun SetStereoDelayWetlevel(DelayWetlevel: Number)
    open fun SetStereoDelayTime(DelayTimeMsec: Number)
    open fun SetStereoDelayRatio(DelayRatio: Number)
    open fun SetStereoDelayMode(StereoDelayMode: String /* "Normal" | "Cross" | "PingPong" | "Count" | "ESynthStereoDelayMode_MAX" */)
    open fun SetStereoDelayIsEnabled(StereoDelayEnabled: Boolean)
    open fun SetStereoDelayFeedback(DelayFeedback: Number)
    open fun SetSpread(Spread: Number)
    open fun SetReleaseTime(ReleaseTimeMsec: Number)
    open fun SetPortamento(Portamento: Number)
    open fun SetPitchBend(PitchBend: Number)
    open fun SetPan(Pan: Number)
    open fun SetOscType(OscIndex: Number, OscType: String /* "Sine" | "Saw" | "Triangle" | "Square" | "Noise" | "Count" | "ESynth1OscType_MAX" */)
    open fun SetOscSync(bIsSynced: Boolean)
    open fun SetOscSemitones(OscIndex: Number, Semitones: Number)
    open fun SetOscPulsewidth(OscIndex: Number, Pulsewidth: Number)
    open fun SetOscOctave(OscIndex: Number, Octave: Number)
    open fun SetOscGainMod(OscIndex: Number, OscGainMod: Number)
    open fun SetOscGain(OscIndex: Number, OscGain: Number)
    open fun SetOscFrequencyMod(OscIndex: Number, OscFreqMod: Number)
    open fun SetOscCents(OscIndex: Number, Cents: Number)
    open fun SetModEnvSustainGain(SustainGain: Number)
    open fun SetModEnvReleaseTime(Release: Number)
    open fun SetModEnvPatch(InPatchType: String /* "PatchToNone" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToLFO1Gain" | "PatchToLFO2Gain" | "PatchToLFO1Freq" | "PatchToLFO2Freq" | "Count" | "ESynthModEnvPatch_MAX" */)
    open fun SetModEnvInvert(bInvert: Boolean)
    open fun SetModEnvDepth(Depth: Number)
    open fun SetModEnvDecayTime(DecayTimeMsec: Number)
    open fun SetModEnvBiasPatch(InPatchType: String /* "PatchToNone" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToLFO1Gain" | "PatchToLFO2Gain" | "PatchToLFO1Freq" | "PatchToLFO2Freq" | "Count" | "ESynthModEnvBiasPatch_MAX" */)
    open fun SetModEnvBiasInvert(bInvert: Boolean)
    open fun SetModEnvAttackTime(AttackTimeMsec: Number)
    open fun SetLFOType(LFOIndex: Number, LFOType: String /* "Sine" | "UpSaw" | "DownSaw" | "Square" | "Triangle" | "Exponential" | "RandomSampleHold" | "Count" | "ESynthLFOType_MAX" */)
    open fun SetLFOPatch(LFOIndex: Number, LFOPatchType: String /* "PatchToNone" | "PatchToGain" | "PatchToOscFreq" | "PatchToFilterFreq" | "PatchToFilterQ" | "PatchToOscPulseWidth" | "PatchToOscPan" | "PatchLFO1ToLFO2Frequency" | "PatchLFO1ToLFO2Gain" | "Count" | "ESynthLFOPatchType_MAX" */)
    open fun SetLFOMode(LFOIndex: Number, LFOMode: String /* "Sync" | "OneShot" | "Free" | "Count" | "ESynthLFOMode_MAX" */)
    open fun SetLFOGainMod(LFOIndex: Number, GainMod: Number)
    open fun SetLFOGain(LFOIndex: Number, Gain: Number)
    open fun SetLFOFrequencyMod(LFOIndex: Number, FrequencyModHz: Number)
    open fun SetLFOFrequency(LFOIndex: Number, FrequencyHz: Number)
    open fun SetGainDb(GainDb: Number)
    open fun SetFilterType(FilterType: String /* "LowPass" | "HighPass" | "BandPass" | "BandStop" | "Count" | "ESynthFilterType_MAX" */)
    open fun SetFilterQMod(FilterQ: Number)
    open fun SetFilterQ(FilterQ: Number)
    open fun SetFilterFrequencyMod(FilterFrequencyHz: Number)
    open fun SetFilterFrequency(FilterFrequencyHz: Number)
    open fun SetFilterAlgorithm(FilterAlgorithm: String /* "OnePole" | "StateVariable" | "Ladder" | "Count" | "ESynthFilterAlgorithm_MAX" */)
    open fun SetEnableUnison(EnableUnison: Boolean)
    open fun SetEnableRetrigger(RetriggerEnabled: Boolean)
    open fun SetEnablePolyphony(bEnablePolyphony: Boolean)
    open fun SetEnablePatch(PatchId: PatchId, bIsEnabled: Boolean): Boolean
    open fun SetEnableLegato(LegatoEnabled: Boolean)
    open fun SetDecayTime(DecayTimeMsec: Number)
    open fun SetChorusFrequency(Frequency: Number)
    open fun SetChorusFeedback(Feedback: Number)
    open fun SetChorusEnabled(EnableChorus: Boolean)
    open fun SetChorusDepth(Depth: Number)
    open fun SetAttackTime(AttackTimeMsec: Number)
    open fun NoteOn(Note: Number, Velocity: Number, Duration: Number)
    open fun NoteOff(Note: Number, bAllNotesOff: Boolean, bKillAllNotes: Boolean)
    open fun CreatePatch(PatchSource: String /* "LFO1" | "LFO2" | "Envelope" | "BiasEnvelope" | "Count" | "ESynth1PatchSource_MAX" */, PatchCables: Array<Synth1PatchCable>, bEnableByDefault: Boolean): PatchId

    companion object {
        fun Load(ResourceName: String): ModularSynthComponent
        fun Find(Outer: UObject, ResourceName: String): ModularSynthComponent
        fun GetDefaultObject(): ModularSynthComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ModularSynthComponent
        fun C(Other: UObject): ModularSynthComponent
        fun C(Other: Any): ModularSynthComponent
    }
}

external open class SourceEffectBitCrusherSettings {
    open var CrushedSampleRate: Number
    open var SampleRateModulation: SoundModulationDestinationSettings
    open var CrushedBits: Number
    open var BitModulation: SoundModulationDestinationSettings
    open fun clone(): SourceEffectBitCrusherSettings

    companion object {
        fun C(Other: UObject): SourceEffectBitCrusherSettings
        fun C(Other: Any): SourceEffectBitCrusherSettings
    }
}

external open class SourceEffectBitCrusherBaseSettings {
    open var SampleRate: Number
    open var BitDepth: Number
    open fun clone(): SourceEffectBitCrusherBaseSettings

    companion object {
        fun C(Other: UObject): SourceEffectBitCrusherBaseSettings
        fun C(Other: Any): SourceEffectBitCrusherBaseSettings
    }
}

external open class SourceEffectBitCrusherPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectBitCrusherSettings
    open fun SetSettings(Settings: SourceEffectBitCrusherBaseSettings)
    open fun SetSampleRateModulator(Modulator: SoundModulatorBase)
    open fun SetSampleRate(SampleRate: Number)
    open fun SetModulationSettings(ModulationSettings: SourceEffectBitCrusherSettings)
    open fun SetBits(Bits: Number)
    open fun SetBitModulator(Modulator: SoundModulatorBase)

    companion object {
        fun Load(ResourceName: String): SourceEffectBitCrusherPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectBitCrusherPreset
        fun GetDefaultObject(): SourceEffectBitCrusherPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectBitCrusherPreset
        fun C(Other: UObject): SourceEffectBitCrusherPreset
        fun C(Other: Any): SourceEffectBitCrusherPreset
    }
}

external open class SourceEffectChorusSettings {
    open var Depth: Number
    open var Frequency: Number
    open var Feedback: Number
    open var WetLevel: Number
    open var DryLevel: Number
    open var Spread: Number
    open var DepthModulation: SoundModulationDestinationSettings
    open var FrequencyModulation: SoundModulationDestinationSettings
    open var FeedbackModulation: SoundModulationDestinationSettings
    open var WetModulation: SoundModulationDestinationSettings
    open var DryModulation: SoundModulationDestinationSettings
    open var SpreadModulation: SoundModulationDestinationSettings
    open fun clone(): SourceEffectChorusSettings

    companion object {
        fun C(Other: UObject): SourceEffectChorusSettings
        fun C(Other: Any): SourceEffectChorusSettings
    }
}

external open class SourceEffectChorusBaseSettings {
    open var Depth: Number
    open var Frequency: Number
    open var Feedback: Number
    open var WetLevel: Number
    open var DryLevel: Number
    open var Spread: Number
    open fun clone(): SourceEffectChorusBaseSettings

    companion object {
        fun C(Other: UObject): SourceEffectChorusBaseSettings
        fun C(Other: Any): SourceEffectChorusBaseSettings
    }
}

external open class SourceEffectChorusPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectChorusSettings
    open fun SetWetModulator(Modulator: SoundModulatorBase)
    open fun SetWet(WetAmount: Number)
    open fun SetSpreadModulator(Modulator: SoundModulatorBase)
    open fun SetSpread(Spread: Number)
    open fun SetSettings(Settings: SourceEffectChorusBaseSettings)
    open fun SetModulationSettings(ModulationSettings: SourceEffectChorusSettings)
    open fun SetFrequencyModulator(Modulator: SoundModulatorBase)
    open fun SetFrequency(Frequency: Number)
    open fun SetFeedbackModulator(Modulator: SoundModulatorBase)
    open fun SetFeedback(Feedback: Number)
    open fun SetDryModulator(Modulator: SoundModulatorBase)
    open fun SetDry(DryAmount: Number)
    open fun SetDepthModulator(Modulator: SoundModulatorBase)
    open fun SetDepth(Depth: Number)

    companion object {
        fun Load(ResourceName: String): SourceEffectChorusPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectChorusPreset
        fun GetDefaultObject(): SourceEffectChorusPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectChorusPreset
        fun C(Other: UObject): SourceEffectChorusPreset
        fun C(Other: Any): SourceEffectChorusPreset
    }
}

external object ESourceEffectDynamicsProcessorType {
    var Compressor: String /* "Compressor" */
    var Limiter: String /* "Limiter" */
    var Expander: String /* "Expander" */
    var Gate: String /* "Gate" */
    var Count: String /* "Count" */
    var ESourceEffectDynamicsProcessorType_MAX: String /* "ESourceEffectDynamicsProcessorType_MAX" */
}

external object ESourceEffectDynamicsPeakMode {
    var MeanSquared: String /* "MeanSquared" */
    var RootMeanSquared: String /* "RootMeanSquared" */
    var Peak: String /* "Peak" */
    var Count: String /* "Count" */
    var ESourceEffectDynamicsPeakMode_MAX: String /* "ESourceEffectDynamicsPeakMode_MAX" */
}

external open class SourceEffectDynamicsProcessorSettings {
    open var DynamicsProcessorType: String /* "Compressor" | "Limiter" | "Expander" | "Gate" | "Count" | "ESourceEffectDynamicsProcessorType_MAX" */
    open var PeakMode: String /* "MeanSquared" | "RootMeanSquared" | "Peak" | "Count" | "ESourceEffectDynamicsPeakMode_MAX" */
    open var LookAheadMsec: Number
    open var AttackTimeMsec: Number
    open var ReleaseTimeMsec: Number
    open var ThresholdDb: Number
    open var Ratio: Number
    open var KneeBandwidthDb: Number
    open var InputGainDb: Number
    open var OutputGainDb: Number
    open var bStereoLinked: Boolean
    open var bAnalogMode: Boolean
    open fun clone(): SourceEffectDynamicsProcessorSettings

    companion object {
        fun C(Other: UObject): SourceEffectDynamicsProcessorSettings
        fun C(Other: Any): SourceEffectDynamicsProcessorSettings
    }
}

external open class SourceEffectDynamicsProcessorPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectDynamicsProcessorSettings
    open fun SetSettings(InSettings: SourceEffectDynamicsProcessorSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectDynamicsProcessorPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectDynamicsProcessorPreset
        fun GetDefaultObject(): SourceEffectDynamicsProcessorPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectDynamicsProcessorPreset
        fun C(Other: UObject): SourceEffectDynamicsProcessorPreset
        fun C(Other: Any): SourceEffectDynamicsProcessorPreset
    }
}

external open class EnvelopeFollowerListener : ActorComponent {
    constructor()
    constructor(Outer: UObject)
    open var OnEnvelopeFollowerUpdate: UnrealEngineMulticastDelegate<(EnvelopeValue: Number) -> Unit>

    companion object {
        fun Load(ResourceName: String): EnvelopeFollowerListener
        fun Find(Outer: UObject, ResourceName: String): EnvelopeFollowerListener
        fun GetDefaultObject(): EnvelopeFollowerListener
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EnvelopeFollowerListener
        fun C(Other: UObject): EnvelopeFollowerListener
        fun C(Other: Any): EnvelopeFollowerListener
    }
}

external object EEnvelopeFollowerPeakMode {
    var MeanSquared: String /* "MeanSquared" */
    var RootMeanSquared: String /* "RootMeanSquared" */
    var Peak: String /* "Peak" */
    var Count: String /* "Count" */
    var EEnvelopeFollowerPeakMode_MAX: String /* "EEnvelopeFollowerPeakMode_MAX" */
}

external open class SourceEffectEnvelopeFollowerSettings {
    open var AttackTime: Number
    open var ReleaseTime: Number
    open var PeakMode: String /* "MeanSquared" | "RootMeanSquared" | "Peak" | "Count" | "EEnvelopeFollowerPeakMode_MAX" */
    open var bIsAnalogMode: Boolean
    open fun clone(): SourceEffectEnvelopeFollowerSettings

    companion object {
        fun C(Other: UObject): SourceEffectEnvelopeFollowerSettings
        fun C(Other: Any): SourceEffectEnvelopeFollowerSettings
    }
}

external open class SourceEffectEnvelopeFollowerPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectEnvelopeFollowerSettings
    open fun UnregisterEnvelopeFollowerListener(EnvelopeFollowerListener: EnvelopeFollowerListener)
    open fun SetSettings(InSettings: SourceEffectEnvelopeFollowerSettings)
    open fun RegisterEnvelopeFollowerListener(EnvelopeFollowerListener: EnvelopeFollowerListener)

    companion object {
        fun Load(ResourceName: String): SourceEffectEnvelopeFollowerPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectEnvelopeFollowerPreset
        fun GetDefaultObject(): SourceEffectEnvelopeFollowerPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectEnvelopeFollowerPreset
        fun C(Other: UObject): SourceEffectEnvelopeFollowerPreset
        fun C(Other: Any): SourceEffectEnvelopeFollowerPreset
    }
}

external open class SourceEffectEQBand {
    open var Frequency: Number
    open var Bandwidth: Number
    open var GainDb: Number
    open var bEnabled: Boolean
    open fun clone(): SourceEffectEQBand

    companion object {
        fun C(Other: UObject): SourceEffectEQBand
        fun C(Other: Any): SourceEffectEQBand
    }
}

external open class SourceEffectEQSettings {
    open var EQBands: Array<SourceEffectEQBand>
    open fun clone(): SourceEffectEQSettings

    companion object {
        fun C(Other: UObject): SourceEffectEQSettings
        fun C(Other: Any): SourceEffectEQSettings
    }
}

external open class SourceEffectEQPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectEQSettings
    open fun SetSettings(InSettings: SourceEffectEQSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectEQPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectEQPreset
        fun GetDefaultObject(): SourceEffectEQPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectEQPreset
        fun C(Other: UObject): SourceEffectEQPreset
        fun C(Other: Any): SourceEffectEQPreset
    }
}

external object ESourceEffectFilterCircuit {
    var OnePole: String /* "OnePole" */
    var StateVariable: String /* "StateVariable" */
    var Ladder: String /* "Ladder" */
    var Count: String /* "Count" */
    var ESourceEffectFilterCircuit_MAX: String /* "ESourceEffectFilterCircuit_MAX" */
}

external object ESourceEffectFilterType {
    var LowPass: String /* "LowPass" */
    var HighPass: String /* "HighPass" */
    var BandPass: String /* "BandPass" */
    var BandStop: String /* "BandStop" */
    var Count: String /* "Count" */
    var ESourceEffectFilterType_MAX: String /* "ESourceEffectFilterType_MAX" */
}

external object ESourceEffectFilterParam {
    var FilterFrequency: String /* "FilterFrequency" */
    var FilterResonance: String /* "FilterResonance" */
    var Count: String /* "Count" */
    var ESourceEffectFilterParam_MAX: String /* "ESourceEffectFilterParam_MAX" */
}

external open class SourceEffectFilterAudioBusModulationSettings {
    open var AudioBus: AudioBus
    open var EnvelopeFollowerAttackTimeMsec: Number
    open var EnvelopeFollowerReleaseTimeMsec: Number
    open var EnvelopeGainMultiplier: Number
    open var FilterParam: String /* "FilterFrequency" | "FilterResonance" | "Count" | "ESourceEffectFilterParam_MAX" */
    open var MinFrequencyModulation: Number
    open var MaxFrequencyModulation: Number
    open var MinResonanceModulation: Number
    open var MaxResonanceModulation: Number
    open fun clone(): SourceEffectFilterAudioBusModulationSettings

    companion object {
        fun C(Other: UObject): SourceEffectFilterAudioBusModulationSettings
        fun C(Other: Any): SourceEffectFilterAudioBusModulationSettings
    }
}

external open class SourceEffectFilterSettings {
    open var FilterCircuit: String /* "OnePole" | "StateVariable" | "Ladder" | "Count" | "ESourceEffectFilterCircuit_MAX" */
    open var FilterType: String /* "LowPass" | "HighPass" | "BandPass" | "BandStop" | "Count" | "ESourceEffectFilterType_MAX" */
    open var CutoffFrequency: Number
    open var FilterQ: Number
    open var AudioBusModulation: Array<SourceEffectFilterAudioBusModulationSettings>
    open fun clone(): SourceEffectFilterSettings

    companion object {
        fun C(Other: UObject): SourceEffectFilterSettings
        fun C(Other: Any): SourceEffectFilterSettings
    }
}

external open class SourceEffectFilterPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectFilterSettings
    open fun SetSettings(InSettings: SourceEffectFilterSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectFilterPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectFilterPreset
        fun GetDefaultObject(): SourceEffectFilterPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectFilterPreset
        fun C(Other: UObject): SourceEffectFilterPreset
        fun C(Other: Any): SourceEffectFilterPreset
    }
}

external open class SourceEffectFoldbackDistortionSettings {
    open var InputGainDb: Number
    open var ThresholdDb: Number
    open var OutputGainDb: Number
    open fun clone(): SourceEffectFoldbackDistortionSettings

    companion object {
        fun C(Other: UObject): SourceEffectFoldbackDistortionSettings
        fun C(Other: Any): SourceEffectFoldbackDistortionSettings
    }
}

external open class SourceEffectFoldbackDistortionPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectFoldbackDistortionSettings
    open fun SetSettings(InSettings: SourceEffectFoldbackDistortionSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectFoldbackDistortionPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectFoldbackDistortionPreset
        fun GetDefaultObject(): SourceEffectFoldbackDistortionPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectFoldbackDistortionPreset
        fun C(Other: UObject): SourceEffectFoldbackDistortionPreset
        fun C(Other: Any): SourceEffectFoldbackDistortionPreset
    }
}

external object EStereoChannelMode {
    var MidSide: String /* "MidSide" */
    var LeftRight: String /* "LeftRight" */
    var count: String /* "count" */
    var EStereoChannelMode_MAX: String /* "EStereoChannelMode_MAX" */
}

external open class SourceEffectMidSideSpreaderSettings {
    open var SpreadAmount: Number
    open var InputMode: String /* "MidSide" | "LeftRight" | "count" | "EStereoChannelMode_MAX" */
    open var OutputMode: String /* "MidSide" | "LeftRight" | "count" | "EStereoChannelMode_MAX" */
    open var bEqualPower: Boolean
    open fun clone(): SourceEffectMidSideSpreaderSettings

    companion object {
        fun C(Other: UObject): SourceEffectMidSideSpreaderSettings
        fun C(Other: Any): SourceEffectMidSideSpreaderSettings
    }
}

external open class SourceEffectMidSideSpreaderPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectMidSideSpreaderSettings
    open fun SetSettings(InSettings: SourceEffectMidSideSpreaderSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectMidSideSpreaderPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectMidSideSpreaderPreset
        fun GetDefaultObject(): SourceEffectMidSideSpreaderPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectMidSideSpreaderPreset
        fun C(Other: UObject): SourceEffectMidSideSpreaderPreset
        fun C(Other: Any): SourceEffectMidSideSpreaderPreset
    }
}

external open class SourceEffectPannerSettings {
    open var Spread: Number
    open var Pan: Number
    open fun clone(): SourceEffectPannerSettings

    companion object {
        fun C(Other: UObject): SourceEffectPannerSettings
        fun C(Other: Any): SourceEffectPannerSettings
    }
}

external open class SourceEffectPannerPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectPannerSettings
    open fun SetSettings(InSettings: SourceEffectPannerSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectPannerPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectPannerPreset
        fun GetDefaultObject(): SourceEffectPannerPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectPannerPreset
        fun C(Other: UObject): SourceEffectPannerPreset
        fun C(Other: Any): SourceEffectPannerPreset
    }
}

external object EPhaserLFOType {
    var Sine: String /* "Sine" */
    var UpSaw: String /* "UpSaw" */
    var DownSaw: String /* "DownSaw" */
    var Square: String /* "Square" */
    var Triangle: String /* "Triangle" */
    var Exponential: String /* "Exponential" */
    var RandomSampleHold: String /* "RandomSampleHold" */
    var Count: String /* "Count" */
    var EPhaserLFOType_MAX: String /* "EPhaserLFOType_MAX" */
}

external open class SourceEffectPhaserSettings {
    open var WetLevel: Number
    open var Frequency: Number
    open var Feedback: Number
    open var LFOType: String /* "Sine" | "UpSaw" | "DownSaw" | "Square" | "Triangle" | "Exponential" | "RandomSampleHold" | "Count" | "EPhaserLFOType_MAX" */
    open var UseQuadraturePhase: Boolean
    open fun clone(): SourceEffectPhaserSettings

    companion object {
        fun C(Other: UObject): SourceEffectPhaserSettings
        fun C(Other: Any): SourceEffectPhaserSettings
    }
}

external open class SourceEffectPhaserPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectPhaserSettings
    open fun SetSettings(InSettings: SourceEffectPhaserSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectPhaserPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectPhaserPreset
        fun GetDefaultObject(): SourceEffectPhaserPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectPhaserPreset
        fun C(Other: UObject): SourceEffectPhaserPreset
        fun C(Other: Any): SourceEffectPhaserPreset
    }
}

external object ERingModulatorTypeSourceEffect {
    var Sine: String /* "Sine" */
    var Saw: String /* "Saw" */
    var Triangle: String /* "Triangle" */
    var Square: String /* "Square" */
    var Count: String /* "Count" */
    var ERingModulatorTypeSourceEffect_MAX: String /* "ERingModulatorTypeSourceEffect_MAX" */
}

external open class SourceEffectRingModulationSettings {
    open var ModulatorType: String /* "Sine" | "Saw" | "Triangle" | "Square" | "Count" | "ERingModulatorTypeSourceEffect_MAX" */
    open var Frequency: Number
    open var Depth: Number
    open var DryLevel: Number
    open var WetLevel: Number
    open var AudioBusModulator: AudioBus
    open fun clone(): SourceEffectRingModulationSettings

    companion object {
        fun C(Other: UObject): SourceEffectRingModulationSettings
        fun C(Other: Any): SourceEffectRingModulationSettings
    }
}

external open class SourceEffectRingModulationPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectRingModulationSettings
    open fun SetSettings(InSettings: SourceEffectRingModulationSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectRingModulationPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectRingModulationPreset
        fun GetDefaultObject(): SourceEffectRingModulationPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectRingModulationPreset
        fun C(Other: UObject): SourceEffectRingModulationPreset
        fun C(Other: Any): SourceEffectRingModulationPreset
    }
}

external open class SourceEffectSimpleDelaySettings {
    open var SpeedOfSound: Number
    open var DelayAmount: Number
    open var DryAmount: Number
    open var WetAmount: Number
    open var Feedback: Number
    open var bDelayBasedOnDistance: Boolean
    open fun clone(): SourceEffectSimpleDelaySettings

    companion object {
        fun C(Other: UObject): SourceEffectSimpleDelaySettings
        fun C(Other: Any): SourceEffectSimpleDelaySettings
    }
}

external open class SourceEffectSimpleDelayPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectSimpleDelaySettings
    open fun SetSettings(InSettings: SourceEffectSimpleDelaySettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectSimpleDelayPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectSimpleDelayPreset
        fun GetDefaultObject(): SourceEffectSimpleDelayPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectSimpleDelayPreset
        fun C(Other: UObject): SourceEffectSimpleDelayPreset
        fun C(Other: Any): SourceEffectSimpleDelayPreset
    }
}

external object EStereoDelaySourceEffect {
    var Normal: String /* "Normal" */
    var Cross: String /* "Cross" */
    var PingPong: String /* "PingPong" */
    var Count: String /* "Count" */
    var EStereoDelaySourceEffect_MAX: String /* "EStereoDelaySourceEffect_MAX" */
}

external object EStereoDelayFiltertype {
    var Lowpass: String /* "Lowpass" */
    var Highpass: String /* "Highpass" */
    var Bandpass: String /* "Bandpass" */
    var Notch: String /* "Notch" */
    var Count: String /* "Count" */
    var EStereoDelayFiltertype_MAX: String /* "EStereoDelayFiltertype_MAX" */
}

external open class SourceEffectStereoDelaySettings {
    open var DelayMode: String /* "Normal" | "Cross" | "PingPong" | "Count" | "EStereoDelaySourceEffect_MAX" */
    open var DelayTimeMsec: Number
    open var Feedback: Number
    open var DelayRatio: Number
    open var WetLevel: Number
    open var DryLevel: Number
    open var bFilterEnabled: Boolean
    open var FilterType: String /* "Lowpass" | "Highpass" | "Bandpass" | "Notch" | "Count" | "EStereoDelayFiltertype_MAX" */
    open var FilterFrequency: Number
    open var FilterQ: Number
    open fun clone(): SourceEffectStereoDelaySettings

    companion object {
        fun C(Other: UObject): SourceEffectStereoDelaySettings
        fun C(Other: Any): SourceEffectStereoDelaySettings
    }
}

external open class SourceEffectStereoDelayPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectStereoDelaySettings
    open fun SetSettings(InSettings: SourceEffectStereoDelaySettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectStereoDelayPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectStereoDelayPreset
        fun GetDefaultObject(): SourceEffectStereoDelayPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectStereoDelayPreset
        fun C(Other: UObject): SourceEffectStereoDelayPreset
        fun C(Other: Any): SourceEffectStereoDelayPreset
    }
}

external open class SourceEffectWaveShaperSettings {
    open var Amount: Number
    open var OutputGainDb: Number
    open fun clone(): SourceEffectWaveShaperSettings

    companion object {
        fun C(Other: UObject): SourceEffectWaveShaperSettings
        fun C(Other: Any): SourceEffectWaveShaperSettings
    }
}

external open class SourceEffectWaveShaperPreset : SoundEffectSourcePreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SourceEffectWaveShaperSettings
    open fun SetSettings(InSettings: SourceEffectWaveShaperSettings)

    companion object {
        fun Load(ResourceName: String): SourceEffectWaveShaperPreset
        fun Find(Outer: UObject, ResourceName: String): SourceEffectWaveShaperPreset
        fun GetDefaultObject(): SourceEffectWaveShaperPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SourceEffectWaveShaperPreset
        fun C(Other: UObject): SourceEffectWaveShaperPreset
        fun C(Other: Any): SourceEffectWaveShaperPreset
    }
}

external open class AudioImpulseResponse : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ImpulseResponse: Array<Number>
    open var NumChannels: Number
    open var SampleRate: Number
    open var NormalizationVolumeDb: Number
    open var bTrueStereo: Boolean
    open var IRData: Array<Number>

    companion object {
        fun Load(ResourceName: String): AudioImpulseResponse
        fun Find(Outer: UObject, ResourceName: String): AudioImpulseResponse
        fun GetDefaultObject(): AudioImpulseResponse
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioImpulseResponse
        fun C(Other: UObject): AudioImpulseResponse
        fun C(Other: Any): AudioImpulseResponse
    }
}

external open class SubmixEffectConvolutionReverbSettings {
    open var NormalizationVolumeDb: Number
    open var bBypass: Boolean
    open var bMixInputChannelFormatToImpulseResponseFormat: Boolean
    open var bMixReverbOutputToOutputChannelFormat: Boolean
    open var SurroundRearChannelBleedDb: Number
    open var bInvertRearChannelBleedPhase: Boolean
    open var bSurroundRearChannelFlip: Boolean
    open var SurroundRearChannelBleedAmount: Number
    open var ImpulseResponse: AudioImpulseResponse
    open var AllowHArdwareAcceleration: Boolean
    open fun clone(): SubmixEffectConvolutionReverbSettings

    companion object {
        fun C(Other: UObject): SubmixEffectConvolutionReverbSettings
        fun C(Other: Any): SubmixEffectConvolutionReverbSettings
    }
}

external object ESubmixEffectConvolutionReverbBlockSize {
    var BlockSize256: String /* "BlockSize256" */
    var BlockSize512: String /* "BlockSize512" */
    var BlockSize1024: String /* "BlockSize1024" */
    var ESubmixEffectConvolutionReverbBlockSize_MAX: String /* "ESubmixEffectConvolutionReverbBlockSize_MAX" */
}

external open class SubmixEffectConvolutionReverbPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var ImpulseResponse: AudioImpulseResponse
    open var Settings: SubmixEffectConvolutionReverbSettings
    open var BlockSize: String /* "BlockSize256" | "BlockSize512" | "BlockSize1024" | "ESubmixEffectConvolutionReverbBlockSize_MAX" */
    open var bEnableHardwareAcceleration: Boolean
    open fun SetSettings(InSettings: SubmixEffectConvolutionReverbSettings)
    open fun SetImpulseResponse(InImpulseResponse: AudioImpulseResponse)

    companion object {
        fun Load(ResourceName: String): SubmixEffectConvolutionReverbPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectConvolutionReverbPreset
        fun GetDefaultObject(): SubmixEffectConvolutionReverbPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectConvolutionReverbPreset
        fun C(Other: UObject): SubmixEffectConvolutionReverbPreset
        fun C(Other: Any): SubmixEffectConvolutionReverbPreset
    }
}

external open class SubmixEffectDelaySettings {
    open var MaximumDelayLength: Number
    open var InterpolationTime: Number
    open var DelayLength: Number
    open fun clone(): SubmixEffectDelaySettings

    companion object {
        fun C(Other: UObject): SubmixEffectDelaySettings
        fun C(Other: Any): SubmixEffectDelaySettings
    }
}

external open class SubmixEffectDelayPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectDelaySettings
    open var DynamicSettings: SubmixEffectDelaySettings
    open fun SetSettings(InSettings: SubmixEffectDelaySettings)
    open fun SetInterpolationTime(Time: Number)
    open fun SetDelay(Length: Number)
    open fun GetMaxDelayInMilliseconds(): Number

    companion object {
        fun Load(ResourceName: String): SubmixEffectDelayPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectDelayPreset
        fun GetDefaultObject(): SubmixEffectDelayPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectDelayPreset
        fun C(Other: UObject): SubmixEffectDelayPreset
        fun C(Other: Any): SubmixEffectDelayPreset
    }
}

external object ESubmixFilterType {
    var LowPass: String /* "LowPass" */
    var HighPass: String /* "HighPass" */
    var BandPass: String /* "BandPass" */
    var BandStop: String /* "BandStop" */
    var Count: String /* "Count" */
    var ESubmixFilterType_MAX: String /* "ESubmixFilterType_MAX" */
}

external object ESubmixFilterAlgorithm {
    var OnePole: String /* "OnePole" */
    var StateVariable: String /* "StateVariable" */
    var Ladder: String /* "Ladder" */
    var Count: String /* "Count" */
    var ESubmixFilterAlgorithm_MAX: String /* "ESubmixFilterAlgorithm_MAX" */
}

external open class SubmixEffectFilterSettings {
    open var FilterType: String /* "LowPass" | "HighPass" | "BandPass" | "BandStop" | "Count" | "ESubmixFilterType_MAX" */
    open var FilterAlgorithm: String /* "OnePole" | "StateVariable" | "Ladder" | "Count" | "ESubmixFilterAlgorithm_MAX" */
    open var FilterFrequency: Number
    open var FilterQ: Number
    open fun clone(): SubmixEffectFilterSettings

    companion object {
        fun C(Other: UObject): SubmixEffectFilterSettings
        fun C(Other: Any): SubmixEffectFilterSettings
    }
}

external open class SubmixEffectFilterPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectFilterSettings
    open fun SetSettings(InSettings: SubmixEffectFilterSettings)
    open fun SetFilterType(InType: String /* "LowPass" | "HighPass" | "BandPass" | "BandStop" | "Count" | "ESubmixFilterType_MAX" */)
    open fun SetFilterQMod(InQ: Number)
    open fun SetFilterQ(InQ: Number)
    open fun SetFilterCutoffFrequencyMod(InFrequency: Number)
    open fun SetFilterCutoffFrequency(InFrequency: Number)
    open fun SetFilterAlgorithm(InAlgorithm: String /* "OnePole" | "StateVariable" | "Ladder" | "Count" | "ESubmixFilterAlgorithm_MAX" */)

    companion object {
        fun Load(ResourceName: String): SubmixEffectFilterPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectFilterPreset
        fun GetDefaultObject(): SubmixEffectFilterPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectFilterPreset
        fun C(Other: UObject): SubmixEffectFilterPreset
        fun C(Other: Any): SubmixEffectFilterPreset
    }
}

external open class SubmixEffectFlexiverbSettings {
    open var PreDelay: Number
    open var DecayTime: Number
    open var RoomDampening: Number
    open var Complexity: Number
    open fun clone(): SubmixEffectFlexiverbSettings

    companion object {
        fun C(Other: UObject): SubmixEffectFlexiverbSettings
        fun C(Other: Any): SubmixEffectFlexiverbSettings
    }
}

external open class SubmixEffectFlexiverbPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectFlexiverbSettings
    open fun SetSettings(InSettings: SubmixEffectFlexiverbSettings)

    companion object {
        fun Load(ResourceName: String): SubmixEffectFlexiverbPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectFlexiverbPreset
        fun GetDefaultObject(): SubmixEffectFlexiverbPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectFlexiverbPreset
        fun C(Other: UObject): SubmixEffectFlexiverbPreset
        fun C(Other: Any): SubmixEffectFlexiverbPreset
    }
}

external open class DynamicsBandSettings {
    open var CrossoverTopFrequency: Number
    open var AttackTimeMsec: Number
    open var ReleaseTimeMsec: Number
    open var ThresholdDb: Number
    open var Ratio: Number
    open var KneeBandwidthDb: Number
    open var InputGainDb: Number
    open var OutputGainDb: Number
    open fun clone(): DynamicsBandSettings

    companion object {
        fun C(Other: UObject): DynamicsBandSettings
        fun C(Other: Any): DynamicsBandSettings
    }
}

external open class SubmixEffectMultibandCompressorSettings {
    open var DynamicsProcessorType: String /* "Compressor" | "Limiter" | "Expander" | "Gate" | "Count" | "ESubmixEffectDynamicsProcessorType_MAX" */
    open var PeakMode: String /* "MeanSquared" | "RootMeanSquared" | "Peak" | "Count" | "ESubmixEffectDynamicsPeakMode_MAX" */
    open var LookAheadMsec: Number
    open var bLinkChannels: Boolean
    open var bAnalogMode: Boolean
    open var bFourPole: Boolean
    open var Bands: Array<DynamicsBandSettings>
    open fun clone(): SubmixEffectMultibandCompressorSettings

    companion object {
        fun C(Other: UObject): SubmixEffectMultibandCompressorSettings
        fun C(Other: Any): SubmixEffectMultibandCompressorSettings
    }
}

external open class SubmixEffectMultibandCompressorPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectMultibandCompressorSettings
    open fun SetSettings(InSettings: SubmixEffectMultibandCompressorSettings)

    companion object {
        fun Load(ResourceName: String): SubmixEffectMultibandCompressorPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectMultibandCompressorPreset
        fun GetDefaultObject(): SubmixEffectMultibandCompressorPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectMultibandCompressorPreset
        fun C(Other: UObject): SubmixEffectMultibandCompressorPreset
        fun C(Other: Any): SubmixEffectMultibandCompressorPreset
    }
}

external open class SubmixEffectStereoDelaySettings {
    open var DelayMode: String /* "Normal" | "Cross" | "PingPong" | "Count" | "EStereoDelaySourceEffect_MAX" */
    open var DelayTimeMsec: Number
    open var Feedback: Number
    open var DelayRatio: Number
    open var WetLevel: Number
    open var DryLevel: Number
    open var bFilterEnabled: Boolean
    open var FilterType: String /* "Lowpass" | "Highpass" | "Bandpass" | "Notch" | "Count" | "EStereoDelayFiltertype_MAX" */
    open var FilterFrequency: Number
    open var FilterQ: Number
    open fun clone(): SubmixEffectStereoDelaySettings

    companion object {
        fun C(Other: UObject): SubmixEffectStereoDelaySettings
        fun C(Other: Any): SubmixEffectStereoDelaySettings
    }
}

external open class SubmixEffectStereoDelayPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectStereoDelaySettings
    open fun SetSettings(InSettings: SubmixEffectStereoDelaySettings)

    companion object {
        fun Load(ResourceName: String): SubmixEffectStereoDelayPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectStereoDelayPreset
        fun GetDefaultObject(): SubmixEffectStereoDelayPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectStereoDelayPreset
        fun C(Other: UObject): SubmixEffectStereoDelayPreset
        fun C(Other: Any): SubmixEffectStereoDelayPreset
    }
}

external object ETapLineMode {
    var SendToChannel: String /* "SendToChannel" */
    var Panning: String /* "Panning" */
    var Disabled: String /* "Disabled" */
    var ETapLineMode_MAX: String /* "ETapLineMode_MAX" */
}

external open class TapDelayInfo {
    open var TapLineMode: String /* "SendToChannel" | "Panning" | "Disabled" | "ETapLineMode_MAX" */
    open var DelayLength: Number
    open var Gain: Number
    open var OutputChannel: Number
    open var PanInDegrees: Number
    open var TapId: Number
    open fun clone(): TapDelayInfo

    companion object {
        fun C(Other: UObject): TapDelayInfo
        fun C(Other: Any): TapDelayInfo
    }
}

external open class SubmixEffectTapDelaySettings {
    open var MaximumDelayLength: Number
    open var InterpolationTime: Number
    open var Taps: Array<TapDelayInfo>
    open fun clone(): SubmixEffectTapDelaySettings

    companion object {
        fun C(Other: UObject): SubmixEffectTapDelaySettings
        fun C(Other: Any): SubmixEffectTapDelaySettings
    }
}

external interface `T$142` {
    var TapIds: Array<Number>
}

external interface `T$143` {
    var TapInfo: TapDelayInfo
}

external interface `T$144` {
    var TapId: Number
}

external open class SubmixEffectTapDelayPreset : SoundEffectSubmixPreset {
    constructor()
    constructor(Outer: UObject)
    open var Settings: SubmixEffectTapDelaySettings
    open fun SetTap(TapId: Number, TapInfo: TapDelayInfo)
    open fun SetSettings(InSettings: SubmixEffectTapDelaySettings)
    open fun SetInterpolationTime(Time: Number)
    open fun RemoveTap(TapId: Number)
    open fun GetTapIds(TapIds: Array<Number> = definedExternally): `T$142`
    open fun GetTap(TapId: Number, TapInfo: TapDelayInfo = definedExternally): `T$143`
    open fun GetMaxDelayInMilliseconds(): Number
    open fun AddTap(TapId: Number = definedExternally): `T$144`

    companion object {
        fun Load(ResourceName: String): SubmixEffectTapDelayPreset
        fun Find(Outer: UObject, ResourceName: String): SubmixEffectTapDelayPreset
        fun GetDefaultObject(): SubmixEffectTapDelayPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SubmixEffectTapDelayPreset
        fun C(Other: UObject): SubmixEffectTapDelayPreset
        fun C(Other: Any): SubmixEffectTapDelayPreset
    }
}

external open class Synth2DSliderStyle : SlateWidgetStyle {
    open var NormalThumbImage: SlateBrush
    open var DisabledThumbImage: SlateBrush
    open var NormalBarImage: SlateBrush
    open var DisabledBarImage: SlateBrush
    open var BackgroundImage: SlateBrush
    open var BarThickness: Number
    override fun clone(): Synth2DSliderStyle

    companion object {
        fun C(Other: UObject): Synth2DSliderStyle
        fun C(Other: Any): Synth2DSliderStyle
    }
}

external open class Synth2DSlider : Widget {
    constructor()
    constructor(Outer: UObject)
    open var ValueX: Number
    open var ValueY: Number
    open var ValueXDelegate: UnrealEngineDelegate<() -> Number>
    open var ValueYDelegate: UnrealEngineDelegate<() -> Number>
    open var WidgetStyle: Synth2DSliderStyle
    open var SliderHandleColor: LinearColor
    open var IndentHandle: Boolean
    open var Locked: Boolean
    open var StepSize: Number
    open var IsFocusable: Boolean
    open var OnMouseCaptureBegin: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnMouseCaptureEnd: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnControllerCaptureBegin: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnControllerCaptureEnd: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnValueChangedX: UnrealEngineMulticastDelegate<(Value: Number) -> Unit>
    open var OnValueChangedY: UnrealEngineMulticastDelegate<(Value: Number) -> Unit>
    open fun SetValue(InValue: Vector2D)
    open fun SetStepSize(InValue: Number)
    open fun SetSliderHandleColor(InValue: LinearColor)
    open fun SetLocked(InValue: Boolean)
    open fun SetIndentHandle(InValue: Boolean)
    open fun GetValue(): Vector2D

    companion object {
        fun Load(ResourceName: String): Synth2DSlider
        fun Find(Outer: UObject, ResourceName: String): Synth2DSlider
        fun GetDefaultObject(): Synth2DSlider
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): Synth2DSlider
        fun C(Other: UObject): Synth2DSlider
        fun C(Other: Any): Synth2DSlider
    }
}

external object EGranularSynthSeekType {
    var FromBeginning: String /* "FromBeginning" */
    var FromCurrentPosition: String /* "FromCurrentPosition" */
    var Count: String /* "Count" */
    var EGranularSynthSeekType_MAX: String /* "EGranularSynthSeekType_MAX" */
}

external object EGranularSynthEnvelopeType {
    var Rectangular: String /* "Rectangular" */
    var Triangle: String /* "Triangle" */
    var DownwardTriangle: String /* "DownwardTriangle" */
    var UpwardTriangle: String /* "UpwardTriangle" */
    var ExponentialDecay: String /* "ExponentialDecay" */
    var ExponentialIncrease: String /* "ExponentialIncrease" */
    var Gaussian: String /* "Gaussian" */
    var Hanning: String /* "Hanning" */
    var Lanczos: String /* "Lanczos" */
    var Cosine: String /* "Cosine" */
    var CosineSquared: String /* "CosineSquared" */
    var Welch: String /* "Welch" */
    var Blackman: String /* "Blackman" */
    var BlackmanHarris: String /* "BlackmanHarris" */
    var Count: String /* "Count" */
    var EGranularSynthEnvelopeType_MAX: String /* "EGranularSynthEnvelopeType_MAX" */
}

external open class GranularSynth : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var GranulatedSoundWave: SoundWave
    open fun SetSustainGain(SustainGain: Number)
    open fun SetSoundWave(InSoundWave: SoundWave)
    open fun SetScrubMode(bScrubMode: Boolean)
    open fun SetReleaseTimeMsec(ReleaseTimeMsec: Number)
    open fun SetPlayheadTime(InPositionSec: Number, LerpTimeSec: Number, SeekType: String /* "FromBeginning" | "FromCurrentPosition" | "Count" | "EGranularSynthSeekType_MAX" */)
    open fun SetPlaybackSpeed(InPlayheadRate: Number)
    open fun SetGrainVolume(BaseVolume: Number, VolumeRange: Vector2D)
    open fun SetGrainsPerSecond(InGrainsPerSecond: Number)
    open fun SetGrainProbability(InGrainProbability: Number)
    open fun SetGrainPitch(BasePitch: Number, PitchRange: Vector2D)
    open fun SetGrainPan(BasePan: Number, PanRange: Vector2D)
    open fun SetGrainEnvelopeType(EnvelopeType: String /* "Rectangular" | "Triangle" | "DownwardTriangle" | "UpwardTriangle" | "ExponentialDecay" | "ExponentialIncrease" | "Gaussian" | "Hanning" | "Lanczos" | "Cosine" | "CosineSquared" | "Welch" | "Blackman" | "BlackmanHarris" | "Count" | "EGranularSynthEnvelopeType_MAX" */)
    open fun SetGrainDuration(BaseDurationMsec: Number, DurationRange: Vector2D)
    open fun SetDecayTime(DecayTimeMsec: Number)
    open fun SetAttackTime(AttackTimeMsec: Number)
    open fun NoteOn(Note: Number, Velocity: Number, Duration: Number)
    open fun NoteOff(Note: Number, bKill: Boolean)
    open fun IsLoaded(): Boolean
    open fun GetSampleDuration(): Number
    open fun GetCurrentPlayheadTime(): Number

    companion object {
        fun Load(ResourceName: String): GranularSynth
        fun Find(Outer: UObject, ResourceName: String): GranularSynth
        fun GetDefaultObject(): GranularSynth
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): GranularSynth
        fun C(Other: UObject): GranularSynth
        fun C(Other: Any): GranularSynth
    }
}

external open class MonoWaveTableSynthPreset : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PresetName: String
    open var bLockKeyframesToGridBool: Boolean
    open var LockKeyframesToGrid: Number
    open var WaveTableResolution: Number
    open var WaveTable: Array<RuntimeFloatCurve>
    open var bNormalizeWaveTables: Boolean

    companion object {
        fun Load(ResourceName: String): MonoWaveTableSynthPreset
        fun Find(Outer: UObject, ResourceName: String): MonoWaveTableSynthPreset
        fun GetDefaultObject(): MonoWaveTableSynthPreset
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MonoWaveTableSynthPreset
        fun C(Other: UObject): MonoWaveTableSynthPreset
        fun C(Other: Any): MonoWaveTableSynthPreset
    }
}

external object CurveInterpolationType {
    var AUTOINTERP: String /* "AUTOINTERP" */
    var LINEAR: String /* "LINEAR" */
    var CONSTANT: String /* "CONSTANT" */
    var CurveInterpolationType_MAX: String /* "CurveInterpolationType_MAX" */
}

external open class SynthComponentMonoWaveTable : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var OnTableAltered: UnrealEngineMulticastDelegate<(TableIndex: Number) -> Unit>
    open var OnNumTablesChanged: UnrealEngineMulticastDelegate<() -> Unit>
    open var CurrentPreset: MonoWaveTableSynthPreset
    open fun SetWaveTablePosition(InPosition: Number)
    open fun SetSustainPedalState(InSustainPedalState: Boolean)
    open fun SetPosLfoType(InLfoType: String /* "Sine" | "UpSaw" | "DownSaw" | "Square" | "Triangle" | "Exponential" | "RandomSampleHold" | "Count" | "ESynthLFOType_MAX" */)
    open fun SetPosLfoFrequency(InLfoFrequency: Number)
    open fun SetPosLfoDepth(InLfoDepth: Number)
    open fun SetPositionEnvelopeSustainGain(InSustainGain: Number)
    open fun SetPositionEnvelopeReleaseTime(InReleaseTimeMsec: Number)
    open fun SetPositionEnvelopeInvert(bInInvert: Boolean)
    open fun SetPositionEnvelopeDepth(InDepth: Number)
    open fun SetPositionEnvelopeDecayTime(InDecayTimeMsec: Number)
    open fun SetPositionEnvelopeBiasInvert(bInBiasInvert: Boolean)
    open fun SetPositionEnvelopeBiasDepth(InDepth: Number)
    open fun SetPositionEnvelopeAttackTime(InAttackTimeMsec: Number)
    open fun SetLowPassFilterResonance(InNewQ: Number)
    open fun SetFrequencyWithMidiNote(InMidiNote: Number)
    open fun SetFrequencyPitchBend(FrequencyOffsetCents: Number)
    open fun SetFrequency(FrequencyHz: Number)
    open fun SetFilterEnvelopeSustainGain(InSustainGain: Number)
    open fun SetFilterEnvelopeReleaseTime(InReleaseTimeMsec: Number)
    open fun SetFilterEnvelopenDecayTime(InDecayTimeMsec: Number)
    open fun SetFilterEnvelopeInvert(bInInvert: Boolean)
    open fun SetFilterEnvelopeDepth(InDepth: Number)
    open fun SetFilterEnvelopeBiasInvert(bInBiasInvert: Boolean)
    open fun SetFilterEnvelopeBiasDepth(InDepth: Number)
    open fun SetFilterEnvelopeAttackTime(InAttackTimeMsec: Number)
    open fun SetCurveValue(TableIndex: Number, KeyframeIndex: Number, NewValue: Number): Boolean
    open fun SetCurveTangent(TableIndex: Number, InNewTangent: Number): Boolean
    open fun SetCurveInterpolationType(InterpolationType: String /* "AUTOINTERP" | "LINEAR" | "CONSTANT" | "CurveInterpolationType_MAX" */, TableIndex: Number): Boolean
    open fun SetAmpEnvelopeSustainGain(InSustainGain: Number)
    open fun SetAmpEnvelopeReleaseTime(InReleaseTimeMsec: Number)
    open fun SetAmpEnvelopeInvert(bInInvert: Boolean)
    open fun SetAmpEnvelopeDepth(InDepth: Number)
    open fun SetAmpEnvelopeDecayTime(InDecayTimeMsec: Number)
    open fun SetAmpEnvelopeBiasInvert(bInBiasInvert: Boolean)
    open fun SetAmpEnvelopeBiasDepth(InDepth: Number)
    open fun SetAmpEnvelopeAttackTime(InAttackTimeMsec: Number)
    open fun RefreshWaveTable(index: Number)
    open fun RefreshAllWaveTables()
    open fun NoteOn(InMidiNote: Number, InVelocity: Number)
    open fun NoteOff(InMidiNote: Number)
    open fun GetNumTableEntries(): Number
    open fun GetMaxTableIndex(): Number
    open fun GetKeyFrameValuesForTable(TableIndex: Number): Array<Number>
    open fun GetCurveTangent(TableIndex: Number): Number

    companion object {
        fun Load(ResourceName: String): SynthComponentMonoWaveTable
        fun Find(Outer: UObject, ResourceName: String): SynthComponentMonoWaveTable
        fun GetDefaultObject(): SynthComponentMonoWaveTable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthComponentMonoWaveTable
        fun C(Other: UObject): SynthComponentMonoWaveTable
        fun C(Other: Any): SynthComponentMonoWaveTable
    }
}

external open class SynthComponentToneGenerator : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var Frequency: Number
    open var Volume: Number
    open fun SetVolume(InVolume: Number)
    open fun SetFrequency(InFrequency: Number)

    companion object {
        fun Load(ResourceName: String): SynthComponentToneGenerator
        fun Find(Outer: UObject, ResourceName: String): SynthComponentToneGenerator
        fun GetDefaultObject(): SynthComponentToneGenerator
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthComponentToneGenerator
        fun C(Other: UObject): SynthComponentToneGenerator
        fun C(Other: Any): SynthComponentToneGenerator
    }
}

external object ESamplePlayerSeekType {
    var FromBeginning: String /* "FromBeginning" */
    var FromCurrentPosition: String /* "FromCurrentPosition" */
    var FromEnd: String /* "FromEnd" */
    var Count: String /* "Count" */
    var ESamplePlayerSeekType_MAX: String /* "ESamplePlayerSeekType_MAX" */
}

external open class SynthSamplePlayer : SynthComponent {
    constructor()
    constructor(Outer: UObject)
    open var SoundWave: SoundWave
    open var OnSampleLoaded: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnSamplePlaybackProgress: UnrealEngineMulticastDelegate<(ProgressPercent: Number, ProgressTimeSeconds: Number) -> Unit>
    open fun SetSoundWave(InSoundWave: SoundWave)
    open fun SetScrubTimeWidth(InScrubTimeWidthSec: Number)
    open fun SetScrubMode(bScrubMode: Boolean)
    open fun SetPitch(InPitch: Number, TimeSec: Number)
    open fun SeekToTime(TimeSec: Number, SeekType: String /* "FromBeginning" | "FromCurrentPosition" | "FromEnd" | "Count" | "ESamplePlayerSeekType_MAX" */, bWrap: Boolean)
    open fun IsLoaded(): Boolean
    open fun GetSampleDuration(): Number
    open fun GetCurrentPlaybackProgressTime(): Number
    open fun GetCurrentPlaybackProgressPercent(): Number

    companion object {
        fun Load(ResourceName: String): SynthSamplePlayer
        fun Find(Outer: UObject, ResourceName: String): SynthSamplePlayer
        fun GetDefaultObject(): SynthSamplePlayer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthSamplePlayer
        fun C(Other: UObject): SynthSamplePlayer
        fun C(Other: Any): SynthSamplePlayer
    }
}

external open class SynthesisUtilitiesBlueprintFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SynthesisUtilitiesBlueprintFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): SynthesisUtilitiesBlueprintFunctionLibrary
        fun GetDefaultObject(): SynthesisUtilitiesBlueprintFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthesisUtilitiesBlueprintFunctionLibrary
        fun GetLogFrequency(InLinearValue: Number, InDomainMin: Number, InDomainMax: Number, InRangeMin: Number, InRangeMax: Number): Number
        fun GetLinearFrequency(InLogFrequencyValue: Number, InDomainMin: Number, InDomainMax: Number, InRangeMin: Number, InRangeMax: Number): Number
        fun C(Other: UObject): SynthesisUtilitiesBlueprintFunctionLibrary
        fun C(Other: Any): SynthesisUtilitiesBlueprintFunctionLibrary
    }
}

external object ESynthKnobSize {
    var Medium: String /* "Medium" */
    var Large: String /* "Large" */
    var Count: String /* "Count" */
    var ESynthKnobSize_MAX: String /* "ESynthKnobSize_MAX" */
}

external open class SynthKnobStyle : SlateWidgetStyle {
    open var LargeKnob: SlateBrush
    open var LargeKnobOverlay: SlateBrush
    open var MediumKnob: SlateBrush
    open var MediumKnobOverlay: SlateBrush
    open var MinValueAngle: Number
    open var MaxValueAngle: Number
    open var KnobSize: String /* "Medium" | "Large" | "Count" | "ESynthKnobSize_MAX" */
    override fun clone(): SynthKnobStyle

    companion object {
        fun C(Other: UObject): SynthKnobStyle
        fun C(Other: Any): SynthKnobStyle
    }
}

external open class SynthKnob : Widget {
    constructor()
    constructor(Outer: UObject)
    open var Value: Number
    open var StepSize: Number
    open var MouseSpeed: Number
    open var MouseFineTuneSpeed: Number
    open var ShowTooltipInfo: Boolean
    open var ParameterName: String
    open var ParameterUnits: String
    open var ValueDelegate: UnrealEngineDelegate<() -> Number>
    open var WidgetStyle: SynthKnobStyle
    open var Locked: Boolean
    open var IsFocusable: Boolean
    open var OnMouseCaptureBegin: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnMouseCaptureEnd: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnControllerCaptureBegin: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnControllerCaptureEnd: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnValueChanged: UnrealEngineMulticastDelegate<(Value: Number) -> Unit>
    open fun SetValue(InValue: Number)
    open fun SetStepSize(InValue: Number)
    open fun SetLocked(InValue: Boolean)
    open fun GetValue(): Number

    companion object {
        fun Load(ResourceName: String): SynthKnob
        fun Find(Outer: UObject, ResourceName: String): SynthKnob
        fun GetDefaultObject(): SynthKnob
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthKnob
        fun C(Other: UObject): SynthKnob
        fun C(Other: Any): SynthKnob
    }
}

external open class AudioImpulseResponseFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): AudioImpulseResponseFactory
        fun Find(Outer: UObject, ResourceName: String): AudioImpulseResponseFactory
        fun GetDefaultObject(): AudioImpulseResponseFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioImpulseResponseFactory
        fun C(Other: UObject): AudioImpulseResponseFactory
        fun C(Other: Any): AudioImpulseResponseFactory
    }
}

external open class ModularSynthPresetBankFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ModularSynthPresetBankFactory
        fun Find(Outer: UObject, ResourceName: String): ModularSynthPresetBankFactory
        fun GetDefaultObject(): ModularSynthPresetBankFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ModularSynthPresetBankFactory
        fun C(Other: UObject): ModularSynthPresetBankFactory
        fun C(Other: Any): ModularSynthPresetBankFactory
    }
}

external open class MonoWaveTableSynthPresetFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MonoWaveTableSynthPresetFactory
        fun Find(Outer: UObject, ResourceName: String): MonoWaveTableSynthPresetFactory
        fun GetDefaultObject(): MonoWaveTableSynthPresetFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MonoWaveTableSynthPresetFactory
        fun C(Other: UObject): MonoWaveTableSynthPresetFactory
        fun C(Other: Any): MonoWaveTableSynthPresetFactory
    }
}

external open class SynthesisEditorSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)
    open var BitCrusherWidget: SoftObjectPath
    open var ChorusWidget: SoftObjectPath
    open var DynamicsProcessorWidget: SoftObjectPath
    open var EnvelopeFollowerWidget: SoftObjectPath
    open var EQWidget: SoftObjectPath
    open var FilterWidget: SoftObjectPath
    open var FoldbackDistortionWidget: SoftObjectPath
    open var MidSideSpreaderWidget: SoftObjectPath
    open var PannerWidget: SoftObjectPath
    open var PhaserWidget: SoftObjectPath
    open var RingModulationWidget: SoftObjectPath
    open var SimpleDelayWidget: SoftObjectPath
    open var StereoDelayWidget: SoftObjectPath
    open var WaveShaperWidget: SoftObjectPath
    open var SubmixConvolutionReverbWidget: SoftObjectPath
    open var SubmixDelayWidget: SoftObjectPath
    open var SubmixFilterWidget: SoftObjectPath
    open var SubmixFlexiverbWidget: SoftObjectPath
    open var SubmixStereoDelayWidget: SoftObjectPath
    open var SubmixTapDelayWidget: SoftObjectPath

    companion object {
        fun Load(ResourceName: String): SynthesisEditorSettings
        fun Find(Outer: UObject, ResourceName: String): SynthesisEditorSettings
        fun GetDefaultObject(): SynthesisEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SynthesisEditorSettings
        fun C(Other: UObject): SynthesisEditorSettings
        fun C(Other: Any): SynthesisEditorSettings
    }
}

external open class ContentBrowserAssetDataSource : ContentBrowserDataSource {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ContentBrowserAssetDataSource
        fun Find(Outer: UObject, ResourceName: String): ContentBrowserAssetDataSource
        fun GetDefaultObject(): ContentBrowserAssetDataSource
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ContentBrowserAssetDataSource
        fun C(Other: UObject): ContentBrowserAssetDataSource
        fun C(Other: Any): ContentBrowserAssetDataSource
    }
}

external open class ContentBrowserClassDataSource : ContentBrowserDataSource {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ContentBrowserClassDataSource
        fun Find(Outer: UObject, ResourceName: String): ContentBrowserClassDataSource
        fun GetDefaultObject(): ContentBrowserClassDataSource
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ContentBrowserClassDataSource
        fun C(Other: UObject): ContentBrowserClassDataSource
        fun C(Other: Any): ContentBrowserClassDataSource
    }
}

external open class OculusMR_PlaneMeshTriangle {
    open var Vertex0: Vector
    open var UV0: Vector2D
    open var Vertex1: Vector
    open var UV1: Vector2D
    open var Vertex2: Vector
    open var UV2: Vector2D
    open fun clone(): OculusMR_PlaneMeshTriangle

    companion object {
        fun C(Other: UObject): OculusMR_PlaneMeshTriangle
        fun C(Other: Any): OculusMR_PlaneMeshTriangle
    }
}

external open class OculusMR_PlaneMeshComponent : MeshComponent {
    constructor()
    constructor(Outer: UObject)
    open fun SetCustomMeshTriangles(Triangles: Array<OculusMR_PlaneMeshTriangle>): Boolean
    open fun ClearCustomMeshTriangles()
    open fun AddCustomMeshTriangles(Triangles: Array<OculusMR_PlaneMeshTriangle>)

    companion object {
        fun Load(ResourceName: String): OculusMR_PlaneMeshComponent
        fun Find(Outer: UObject, ResourceName: String): OculusMR_PlaneMeshComponent
        fun GetDefaultObject(): OculusMR_PlaneMeshComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusMR_PlaneMeshComponent
        fun C(Other: UObject): OculusMR_PlaneMeshComponent
        fun C(Other: Any): OculusMR_PlaneMeshComponent
    }
}

external object EOculusMR_ClippingReference {
    var CR_TrackingReference: String /* "CR_TrackingReference" */
    var CR_Head: String /* "CR_Head" */
    var CR_MAX: String /* "CR_MAX" */
}

external object EOculusMR_PostProcessEffects {
    var PPE_Off: String /* "PPE_Off" */
    var PPE_On: String /* "PPE_On" */
    var PPE_MAX: String /* "PPE_MAX" */
}

external object EOculusMR_CompositionMethod {
    var ExternalComposition: String /* "ExternalComposition" */
    var DirectComposition: String /* "DirectComposition" */
    var EOculusMR_MAX: String /* "EOculusMR_MAX" */
}

external object EOculusMR_CameraDeviceEnum {
    var CD_None: String /* "CD_None" */
    var CD_WebCamera0: String /* "CD_WebCamera0" */
    var CD_WebCamera1: String /* "CD_WebCamera1" */
    var CD_MAX: String /* "CD_MAX" */
}

external open class OculusMR_Settings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ClippingReference: String /* "CR_TrackingReference" | "CR_Head" | "CR_MAX" */
    open var bUseTrackedCameraResolution: Boolean
    open var WidthPerView: Number
    open var HeightPerView: Number
    open var CastingLatency: Number
    open var BackdropColor: Color
    open var HandPoseStateLatency: Number
    open var ChromaKeyColor: Color
    open var ChromaKeySimilarity: Number
    open var ChromaKeySmoothRange: Number
    open var ChromaKeySpillRange: Number
    open var ExternalCompositionPostProcessEffects: String /* "PPE_Off" | "PPE_On" | "PPE_MAX" */
    open var bIsCasting: Boolean
    open var CompositionMethod: String /* "ExternalComposition" | "DirectComposition" | "EOculusMR_MAX" */
    open var CapturingCamera: String /* "CD_None" | "CD_WebCamera0" | "CD_WebCamera1" | "CD_MAX" */
    open fun SetIsCasting(Val: Boolean)
    open fun SetCompositionMethod(Val: String /* "ExternalComposition" | "DirectComposition" | "EOculusMR_MAX" */)
    open fun SetCapturingCamera(Val: String /* "CD_None" | "CD_WebCamera0" | "CD_WebCamera1" | "CD_MAX" */)
    open fun SaveToIni()
    open fun LoadFromIni()
    open fun GetIsCasting(): Boolean
    open fun GetCompositionMethod(): String /* "ExternalComposition" | "DirectComposition" | "EOculusMR_MAX" */
    open fun GetCapturingCamera(): String /* "CD_None" | "CD_WebCamera0" | "CD_WebCamera1" | "CD_MAX" */
    open fun GetBindToTrackedCameraIndex(): Number
    open fun BindToTrackedCameraIndexIfAvailable(InTrackedCameraIndex: Number)

    companion object {
        fun Load(ResourceName: String): OculusMR_Settings
        fun Find(Outer: UObject, ResourceName: String): OculusMR_Settings
        fun GetDefaultObject(): OculusMR_Settings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusMR_Settings
        fun C(Other: UObject): OculusMR_Settings
        fun C(Other: Any): OculusMR_Settings
    }
}

external open class TrackedCamera {
    open var index: Number
    open var Name: String
    open var UpdateTime: Any
    open var FieldOfView: Number
    open var SizeX: Number
    open var SizeY: Number
    open var AttachedTrackedDevice: String /* "None" | "HMD" | "LTouch" | "RTouch" | "Touch" | "DeviceObjectZero" | "All" | "ETrackedDeviceType_MAX" */
    open var CalibratedRotation: Rotator
    open var CalibratedOffset: Vector
    open var UserRotation: Rotator
    open var UserOffset: Vector
    open var RawRotation: Rotator
    open var RawOffset: Vector
    open fun clone(): TrackedCamera

    companion object {
        fun C(Other: UObject): TrackedCamera
        fun C(Other: Any): TrackedCamera
    }
}

external open class OculusMR_State : UObject {
    constructor()
    constructor(Outer: UObject)
    open var TrackedCamera: TrackedCamera
    open var TrackingReferenceComponent: SceneComponent
    open var ScalingFactor: Any
    open var ChangeCameraStateRequested: Boolean
    open var BindToTrackedCameraIndexRequested: Boolean

    companion object {
        fun Load(ResourceName: String): OculusMR_State
        fun Find(Outer: UObject, ResourceName: String): OculusMR_State
        fun GetDefaultObject(): OculusMR_State
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusMR_State
        fun C(Other: UObject): OculusMR_State
        fun C(Other: Any): OculusMR_State
    }
}

external open class OculusMR_CastingCameraActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : SceneCapture2D {
    open var VRNotificationComponent: VRNotificationsComponent
    open var CameraColorTexture: Texture2D
    open var CameraDepthTexture: Texture2D
    open var PlaneMeshComponent: OculusMR_PlaneMeshComponent
    open var ChromaKeyMaterial: Material
    open var OpaqueColoredMaterial: Material
    open var ChromaKeyMaterialInstance: MaterialInstanceDynamic
    open var CameraFrameMaterialInstance: MaterialInstanceDynamic
    open var BackdropMaterialInstance: MaterialInstanceDynamic
    open var DefaultTexture_White: Texture2D
    open var BackgroundRenderTargets: Array<TextureRenderTarget2D>
    open var ForegroundCaptureActor: SceneCapture2D
    open var ForegroundRenderTargets: Array<TextureRenderTarget2D>
    open var PoseTimes: Array<Any>
    open var MRSettings: OculusMR_Settings
    open var MRState: OculusMR_State

    companion object {
        fun GetDefaultObject(): OculusMR_CastingCameraActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusMR_CastingCameraActor
        fun C(Other: UObject): OculusMR_CastingCameraActor
        fun C(Other: Any): OculusMR_CastingCameraActor
    }
}

external open class OculusMRFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OculusMRFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): OculusMRFunctionLibrary
        fun GetDefaultObject(): OculusMRFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusMRFunctionLibrary
        fun SetTrackingReferenceComponent(Component: SceneComponent): Boolean
        fun SetMrcScalingFactor(ScalingFactor: Number): Boolean
        fun IsMrcEnabled(): Boolean
        fun IsMrcActive(): Boolean
        fun GetTrackingReferenceComponent(): SceneComponent
        fun GetOculusMRSettings(): OculusMR_Settings
        fun GetMrcScalingFactor(): Number
        fun C(Other: UObject): OculusMRFunctionLibrary
        fun C(Other: Any): OculusMRFunctionLibrary
    }
}

external object EConfidenceBehavior {
    var None: String /* "None" */
    var HideActor: String /* "HideActor" */
    var EConfidenceBehavior_MAX: String /* "EConfidenceBehavior_MAX" */
}

external object ESystemGestureBehavior {
    var None: String /* "None" */
    var SwapMaterial: String /* "SwapMaterial" */
    var ESystemGestureBehavior_MAX: String /* "ESystemGestureBehavior_MAX" */
}

external open class OculusCapsuleCollider {
    open var Capsule: CapsuleComponent
    open var BoneId: String /* "Wrist_Root" | "Hand_Start" | "Forearm_Stub" | "Thumb_0" | "Thumb_1" | "Thumb_2" | "Thumb_3" | "Index_1" | "Index_2" | "Index_3" | "Middle_1" | "Middle_2" | "Middle_3" | "Ring_1" | "Ring_2" | "Ring_3" | "Pinky_0" | "Pinky_1" | "Pinky_2" | "Pinky_3" | "Thumb_Tip" | "Max_Skinnable" | "Index_Tip" | "Middle_Tip" | "Ring_Tip" | "Pinky_Tip" | "Hand_End" | "Bone_Max" | "Invalid" | "EBone_MAX" */
    open fun clone(): OculusCapsuleCollider

    companion object {
        fun C(Other: UObject): OculusCapsuleCollider
        fun C(Other: Any): OculusCapsuleCollider
    }
}

external open class OculusHandComponent : PoseableMeshComponent {
    constructor()
    constructor(Outer: UObject)
    open var SkeletonType: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */
    open var MeshType: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */
    open var ConfidenceBehavior: String /* "None" | "HideActor" | "EConfidenceBehavior_MAX" */
    open var SystemGestureBehavior: String /* "None" | "SwapMaterial" | "ESystemGestureBehavior_MAX" */
    open var SystemGestureMaterial: MaterialInterface
    open var bInitializePhysics: Boolean
    open var bUpdateHandScale: Boolean
    open var MaterialOverride: MaterialInterface
    open var BoneNameMappings: Any
    open var CollisionCapsules: Array<OculusCapsuleCollider>
    open var bSkeletalMeshInitialized: Boolean

    companion object {
        fun Load(ResourceName: String): OculusHandComponent
        fun Find(Outer: UObject, ResourceName: String): OculusHandComponent
        fun GetDefaultObject(): OculusHandComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusHandComponent
        fun C(Other: UObject): OculusHandComponent
        fun C(Other: Any): OculusHandComponent
    }
}

external object ETrackingConfidence {
    var Low: String /* "Low" */
    var High: String /* "High" */
    var ETrackingConfidence_MAX: String /* "ETrackingConfidence_MAX" */
}

external open class OculusInputFunctionLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OculusInputFunctionLibrary
        fun Find(Outer: UObject, ResourceName: String): OculusInputFunctionLibrary
        fun GetDefaultObject(): OculusInputFunctionLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusInputFunctionLibrary
        fun IsPointerPoseValid(DeviceHand: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, ControllerIndex: Number): Boolean
        fun IsHandTrackingEnabled(): Boolean
        fun InitializeHandPhysics(SkeletonType: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, HandComponent: SkinnedMeshComponent, WorldToMeters: Number): Array<OculusCapsuleCollider>
        fun GetTrackingConfidence(DeviceHand: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, ControllerIndex: Number): String /* "Low" | "High" | "ETrackingConfidence_MAX" */
        fun GetPointerPose(DeviceHand: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, ControllerIndex: Number): Transform
        fun GetHandSkeletalMesh(HandSkeletalMesh: SkeletalMesh, SkeletonType: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, MeshType: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, WorldToMeters: Number): Boolean
        fun GetHandScale(DeviceHand: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, ControllerIndex: Number): Number
        fun GetDominantHand(ControllerIndex: Number): String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */
        fun GetBoneRotation(DeviceHand: String /* "None" | "HandLeft" | "HandRight" | "EOculusHandType_MAX" */, BoneId: String /* "Wrist_Root" | "Hand_Start" | "Forearm_Stub" | "Thumb_0" | "Thumb_1" | "Thumb_2" | "Thumb_3" | "Index_1" | "Index_2" | "Index_3" | "Middle_1" | "Middle_2" | "Middle_3" | "Ring_1" | "Ring_2" | "Ring_3" | "Pinky_0" | "Pinky_1" | "Pinky_2" | "Pinky_3" | "Thumb_Tip" | "Max_Skinnable" | "Index_Tip" | "Middle_Tip" | "Ring_Tip" | "Pinky_Tip" | "Hand_End" | "Bone_Max" | "Invalid" | "EBone_MAX" */, ControllerIndex: Number): Quat
        fun GetBoneName(BoneId: String /* "Wrist_Root" | "Hand_Start" | "Forearm_Stub" | "Thumb_0" | "Thumb_1" | "Thumb_2" | "Thumb_3" | "Index_1" | "Index_2" | "Index_3" | "Middle_1" | "Middle_2" | "Middle_3" | "Ring_1" | "Ring_2" | "Ring_3" | "Pinky_0" | "Pinky_1" | "Pinky_2" | "Pinky_3" | "Thumb_Tip" | "Max_Skinnable" | "Index_Tip" | "Middle_Tip" | "Ring_Tip" | "Pinky_Tip" | "Hand_End" | "Bone_Max" | "Invalid" | "EBone_MAX" */): String
        fun C(Other: UObject): OculusInputFunctionLibrary
        fun C(Other: Any): OculusInputFunctionLibrary
    }
}

external object EAndroidInstallLocation {
    var InternalOnly: String /* "InternalOnly" */
    var PreferExternal: String /* "PreferExternal" */
    var Auto: String /* "Auto" */
    var EAndroidInstallLocation_MAX: String /* "EAndroidInstallLocation_MAX" */
}

external object EAndroidScreenOrientation {
    var Portrait: String /* "Portrait" */
    var ReversePortrait: String /* "ReversePortrait" */
    var SensorPortrait: String /* "SensorPortrait" */
    var Landscape: String /* "Landscape" */
    var ReverseLandscape: String /* "ReverseLandscape" */
    var SensorLandscape: String /* "SensorLandscape" */
    var Sensor: String /* "Sensor" */
    var FullSensor: String /* "FullSensor" */
    var EAndroidScreenOrientation_MAX: String /* "EAndroidScreenOrientation_MAX" */
}

external object EAndroidDepthBufferPreference {
    var Default: String /* "Default" */
    var Bits16: String /* "Bits16" */
    var Bits24: String /* "Bits24" */
    var Bits32: String /* "Bits32" */
    var EAndroidDepthBufferPreference_MAX: String /* "EAndroidDepthBufferPreference_MAX" */
}

external object EOculusMobileDevice {
    var Quest: String /* "Quest" */
    var Quest2: String /* "Quest2" */
    var EOculusMobileDevice_MAX: String /* "EOculusMobileDevice_MAX" */
}

external object EGoogleVRCaps {
    var Cardboard: String /* "Cardboard" */
    var Daydream33: String /* "Daydream33" */
    var Daydream63: String /* "Daydream63" */
    var Daydream66: String /* "Daydream66" */
    var EGoogleVRCaps_MAX: String /* "EGoogleVRCaps_MAX" */
}

external open class GooglePlayAchievementMapping {
    open var Name: String
    open var AchievementID: String
    open fun clone(): GooglePlayAchievementMapping

    companion object {
        fun C(Other: UObject): GooglePlayAchievementMapping
        fun C(Other: Any): GooglePlayAchievementMapping
    }
}

external open class GooglePlayLeaderboardMapping {
    open var Name: String
    open var LeaderboardID: String
    open fun clone(): GooglePlayLeaderboardMapping

    companion object {
        fun C(Other: UObject): GooglePlayLeaderboardMapping
        fun C(Other: Any): GooglePlayLeaderboardMapping
    }
}

external object EAndroidAudio {
    var Default: String /* "Default" */
    var OGG: String /* "OGG" */
    var ADPCM: String /* "ADPCM" */
    var EAndroidAudio_MAX: String /* "EAndroidAudio_MAX" */
}

external object EAndroidGraphicsDebugger {
    var None: String /* "None" */
    var Mali: String /* "Mali" */
    var Adreno: String /* "Adreno" */
    var EAndroidGraphicsDebugger_MAX: String /* "EAndroidGraphicsDebugger_MAX" */
}

external open class AndroidRuntimeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PackageName: String
    open var StoreVersion: Number
    open var StoreVersionOffsetArmV7: Number
    open var StoreVersionOffsetArm64: Number
    open var StoreVersionOffsetX8664: Number
    open var ApplicationDisplayName: String
    open var VersionDisplayName: String
    open var MinSDKVersion: Number
    open var TargetSDKVersion: Number
    open var InstallLocation: String /* "InternalOnly" | "PreferExternal" | "Auto" | "EAndroidInstallLocation_MAX" */
    open var bEnableGradle: Boolean
    open var bEnableLint: Boolean
    open var bPackageDataInsideApk: Boolean
    open var bCreateAllPlatformsInstall: Boolean
    open var bDisableVerifyOBBOnStartUp: Boolean
    open var bForceSmallOBBFiles: Boolean
    open var bAllowLargeOBBFiles: Boolean
    open var bAllowPatchOBBFile: Boolean
    open var bAllowOverflowOBBFiles: Boolean
    open var bUseExternalFilesDir: Boolean
    open var bPublicLogFiles: Boolean
    open var Orientation: String /* "Portrait" | "ReversePortrait" | "SensorPortrait" | "Landscape" | "ReverseLandscape" | "SensorLandscape" | "Sensor" | "FullSensor" | "EAndroidScreenOrientation_MAX" */
    open var MaxAspectRatio: Number
    open var bUseDisplayCutout: Boolean
    open var bRestoreNotificationsOnReboot: Boolean
    open var bFullScreen: Boolean
    open var bEnableNewKeyboard: Boolean
    open var DepthBufferPreference: String /* "Default" | "Bits16" | "Bits24" | "Bits32" | "EAndroidDepthBufferPreference_MAX" */
    open var bValidateTextureFormats: Boolean
    open var bEnableBundle: Boolean
    open var bEnableUniversalAPK: Boolean
    open var bBundleABISplit: Boolean
    open var bBundleLanguageSplit: Boolean
    open var bBundleDensitySplit: Boolean
    open var ExtraManifestNodeTags: Array<String>
    open var ExtraApplicationNodeTags: Array<String>
    open var ExtraApplicationSettings: String
    open var ExtraActivityNodeTags: Array<String>
    open var ExtraActivitySettings: String
    open var ExtraPermissions: Array<String>
    open var bAndroidVoiceEnabled: Boolean
    open var PackageForOculusMobile: Array<String /* "Quest" | "Quest2" | "EOculusMobileDevice_MAX" */>
    open var bRemoveOSIG: Boolean
    open var GoogleVRCaps: Array<String /* "Cardboard" | "Daydream33" | "Daydream63" | "Daydream66" | "EGoogleVRCaps_MAX" */>
    open var bGoogleVRSustainedPerformance: Boolean
    open var KeyStore: String
    open var KeyAlias: String
    open var KeyStorePassword: String
    open var KeyPassword: String
    open var bBuildForArmV7: Boolean
    open var bBuildForArm64: Boolean
    open var bBuildForX8664: Boolean
    open var bBuildForES31: Boolean
    open var bSupportsVulkan: Boolean
    open var bSupportsVulkanSM5: Boolean
    open var bAndroidOpenGLSupportsBackbufferSampling: Boolean
    open var bDetectVulkanByDefault: Boolean
    open var bBuildWithHiddenSymbolVisibility: Boolean
    open var bSaveSymbols: Boolean
    open var bForceLDLinker: Boolean
    open var bEnableGooglePlaySupport: Boolean
    open var bUseGetAccounts: Boolean
    open var GamesAppID: String
    open var AchievementMap: Array<GooglePlayAchievementMapping>
    open var LeaderboardMap: Array<GooglePlayLeaderboardMapping>
    open var bEnableSnapshots: Boolean
    open var bSupportAdMob: Boolean
    open var AdMobAdUnitID: String
    open var AdMobAdUnitIDs: Array<String>
    open var GooglePlayLicenseKey: String
    open var GCMClientSenderID: String
    open var bShowLaunchImage: Boolean
    open var bAllowIMU: Boolean
    open var bAllowControllers: Boolean
    open var bBlockAndroidKeysOnControllers: Boolean
    open var bControllersBlockDeviceFeedback: Boolean
    open var AndroidAudio: String /* "Default" | "OGG" | "ADPCM" | "EAndroidAudio_MAX" */
    open var AudioSampleRate: Number
    open var AudioCallbackBufferFrameSize: Number
    open var AudioNumBuffersToEnqueue: Number
    open var AudioMaxChannels: Number
    open var AudioNumSourceWorkers: Number
    open var SpatializationPlugin: String
    open var ReverbPlugin: String
    open var OcclusionPlugin: String
    open var CompressionOverrides: PlatformRuntimeAudioCompressionOverrides
    open var bUseAudioStreamCaching: Boolean
    open var CacheSizeKB: Number
    open var MaxChunkSizeOverrideKB: Number
    open var bResampleForDevice: Boolean
    open var SoundCueCookQualityIndex: Number
    open var MaxSampleRate: Number
    open var HighSampleRate: Number
    open var MedSampleRate: Number
    open var LowSampleRate: Number
    open var MinSampleRate: Number
    open var CompressionQualityModifier: Number
    open var AutoStreamingThreshold: Number
    open var AndroidGraphicsDebugger: String /* "None" | "Mali" | "Adreno" | "EAndroidGraphicsDebugger_MAX" */
    open var MaliGraphicsDebuggerPath: DirectoryPath
    open var bMultiTargetFormat_ETC2: Boolean
    open var bMultiTargetFormat_DXT: Boolean
    open var bMultiTargetFormat_ASTC: Boolean
    open var TextureFormatPriority_ETC2: Number
    open var TextureFormatPriority_DXT: Number
    open var TextureFormatPriority_ASTC: Number
    open var SDKAPILevelOverride: String
    open var NDKAPILevelOverride: String
    open var bStreamLandscapeMeshLODs: Boolean

    companion object {
        fun Load(ResourceName: String): AndroidRuntimeSettings
        fun Find(Outer: UObject, ResourceName: String): AndroidRuntimeSettings
        fun GetDefaultObject(): AndroidRuntimeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AndroidRuntimeSettings
        fun C(Other: UObject): AndroidRuntimeSettings
        fun C(Other: Any): AndroidRuntimeSettings
    }
}

external object EOculusPlatform {
    var PC: String /* "PC" */
    var Mobile: String /* "Mobile" */
    var Length: String /* "Length" */
    var EOculusPlatform_MAX: String /* "EOculusPlatform_MAX" */
}

external open class OculusEditorSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PerfToolIgnoreList: Any
    open var PerfToolTargetPlatform: String /* "PC" | "Mobile" | "Length" | "EOculusPlatform_MAX" */
    open var bAddMenuOption: Boolean

    companion object {
        fun Load(ResourceName: String): OculusEditorSettings
        fun Find(Outer: UObject, ResourceName: String): OculusEditorSettings
        fun GetDefaultObject(): OculusEditorSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusEditorSettings
        fun C(Other: UObject): OculusEditorSettings
        fun C(Other: Any): OculusEditorSettings
    }
}

external open class RedistPackage {
    open var Included: Boolean
    open var Name: String
    open var ID: String
    open fun clone(): RedistPackage

    companion object {
        fun C(Other: UObject): RedistPackage
        fun C(Other: Any): RedistPackage
    }
}

external object EOculusPlatformTarget {
    var Rift: String /* "Rift" */
    var Quest: String /* "Quest" */
    var Length: String /* "Length" */
    var EOculusPlatformTarget_MAX: String /* "EOculusPlatformTarget_MAX" */
}

external object EOculusGamepadEmulation {
    var Off: String /* "Off" */
    var Twinstick: String /* "Twinstick" */
    var RightDPad: String /* "RightDPad" */
    var LeftDPad: String /* "LeftDPad" */
    var Length: String /* "Length" */
    var EOculusGamepadEmulation_MAX: String /* "EOculusGamepadEmulation_MAX" */
}

external object EOculusAssetType {
    var Default: String /* "Default" */
    var Store: String /* "Store" */
    var Language_Pack: String /* "Language_Pack" */
    var Length: String /* "Length" */
    var EOculusAssetType_MAX: String /* "EOculusAssetType_MAX" */
}

external open class AssetConfig {
    open var AssetType: String /* "Default" | "Store" | "Language_Pack" | "Length" | "EOculusAssetType_MAX" */
    open var required: Boolean
    open var Name: String
    open var Sku: String
    open fun clone(): AssetConfig

    companion object {
        fun C(Other: UObject): AssetConfig
        fun C(Other: Any): AssetConfig
    }
}

external open class AssetConfigArray {
    open var ConfigArray: Array<AssetConfig>
    open fun clone(): AssetConfigArray

    companion object {
        fun C(Other: UObject): AssetConfigArray
        fun C(Other: Any): AssetConfigArray
    }
}

external open class OculusPlatformToolSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OculusRiftBuildDirectory: String
    open var OculusRiftBuildVersion: String
    open var OculusRiftLaunchParams: String
    open var OculusRiftFireWallException: Boolean
    open var OculusRift2DLaunchPath: String
    open var OculusRift2DLaunchParams: String
    open var OculusRedistPackages: Array<RedistPackage>
    open var OculusTargetPlatform: String /* "Rift" | "Quest" | "Length" | "EOculusPlatformTarget_MAX" */
    open var OculusApplicationID: Array<String>
    open var OculusApplicationToken: Array<String>
    open var OculusReleaseChannel: Array<String>
    open var OculusReleaseNote: Array<String>
    open var OculusLaunchFilePath: Array<String>
    open var OculusRiftGamepadEmulation: String /* "Off" | "Twinstick" | "RightDPad" | "LeftDPad" | "Length" | "EOculusGamepadEmulation_MAX" */
    open var OculusLanguagePacksPath: Array<String>
    open var OculusExpansionFilesPath: Array<String>
    open var OculusAssetConfigs: Array<AssetConfigArray>

    companion object {
        fun Load(ResourceName: String): OculusPlatformToolSettings
        fun Find(Outer: UObject, ResourceName: String): OculusPlatformToolSettings
        fun GetDefaultObject(): OculusPlatformToolSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OculusPlatformToolSettings
        fun C(Other: UObject): OculusPlatformToolSettings
        fun C(Other: Any): OculusPlatformToolSettings
    }
}

external open class AudioSynesthesiaNRTFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var AudioSynesthesiaNRTClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRTFactory
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRTFactory
        fun GetDefaultObject(): AudioSynesthesiaNRTFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRTFactory
        fun C(Other: UObject): AudioSynesthesiaNRTFactory
        fun C(Other: Any): AudioSynesthesiaNRTFactory
    }
}

external open class AudioSynesthesiaNRTSettingsFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var AudioSynesthesiaNRTSettingsClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRTSettingsFactory
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRTSettingsFactory
        fun GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRTSettingsFactory
        fun C(Other: UObject): AudioSynesthesiaNRTSettingsFactory
        fun C(Other: Any): AudioSynesthesiaNRTSettingsFactory
    }
}

external object EJavasriptTabActivationCause {
    var UserClickedOnTab: String /* "UserClickedOnTab" */
    var SetDirectly: String /* "SetDirectly" */
    var EJavasriptTabActivationCause_MAX: String /* "EJavasriptTabActivationCause_MAX" */
}

external open class JavascriptWorkspaceItem {
    open fun clone(): JavascriptWorkspaceItem
    open fun AddGroup(DisplayName: String): JavascriptWorkspaceItem

    companion object {
        fun C(Other: UObject): JavascriptWorkspaceItem
        fun C(Other: Any): JavascriptWorkspaceItem
        fun AddGroup(Parent: JavascriptWorkspaceItem, DisplayName: String): JavascriptWorkspaceItem
        fun GetGroup(Name: String): JavascriptWorkspaceItem
    }
}

external object EJavascriptTabRole {
    var MajorTab: String /* "MajorTab" */
    var PanelTab: String /* "PanelTab" */
    var NomadTab: String /* "NomadTab" */
    var DocumentTab: String /* "DocumentTab" */
    var EJavascriptTabRole_MAX: String /* "EJavascriptTabRole_MAX" */
}

external open class JavascriptEditorTab : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnSpawnTab: UnrealEngineDelegate<(Context: UObject) -> Widget>
    open var OnCloseTab: UnrealEngineDelegate<(Widget: Widget) -> Unit>
    open var OnTabActivatedCallback: UnrealEngineDelegate<(TabId: String, Cause: String /* "UserClickedOnTab" | "SetDirectly" | "EJavasriptTabActivationCause_MAX" */) -> Unit>
    open var Group: JavascriptWorkspaceItem
    open var TabId: String
    open var DisplayName: String
    open var Icon: JavascriptSlateIcon
    open var bIsNomad: Boolean
    open var Role: String /* "MajorTab" | "PanelTab" | "NomadTab" | "DocumentTab" | "EJavascriptTabRole_MAX" */
    open fun ForceCommit()
    open fun Discard()
    open fun Commit()
    open fun CloseTab(Widget: Widget)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorTab
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorTab
        fun GetDefaultObject(): JavascriptEditorTab
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorTab
        fun C(Other: UObject): JavascriptEditorTab
        fun C(Other: Any): JavascriptEditorTab
    }
}

external open class JavascriptUICommandInfo {
    open fun clone(): JavascriptUICommandInfo

    companion object {
        fun C(Other: UObject): JavascriptUICommandInfo
        fun C(Other: Any): JavascriptUICommandInfo
        fun GenericCommand(What: String): JavascriptUICommandInfo
    }
}

external open class JavascriptUICommand {
    open var ID: String
    open var FriendlyName: String
    open var Description: String
    open var DefaultChord: InputChord
    open var ActionType: String /* "None" | "Button" | "ToggleButton" | "RadioButton" | "Check" | "CollapsedButton" | "EJavasrciptUserInterfaceActionType_MAX" */
    open var CommandInfo: JavascriptUICommandInfo
    open var IconStyleName: String
    open fun clone(): JavascriptUICommand

    companion object {
        fun C(Other: UObject): JavascriptUICommand
        fun C(Other: Any): JavascriptUICommand
    }
}

external open class JavascriptBindingContext {
    open fun clone(): JavascriptBindingContext
    open fun Destroy()
    open fun UI_COMMAND_Function(Command: JavascriptUICommand, InTextSubNamespace: String): JavascriptUICommandInfo

    companion object {
        fun C(Other: UObject): JavascriptBindingContext
        fun C(Other: Any): JavascriptBindingContext
        fun Destroy(Context: JavascriptBindingContext)
        fun UI_COMMAND_Function(This: JavascriptBindingContext, Command: JavascriptUICommand, InTextSubNamespace: String): JavascriptUICommandInfo
        fun NewBindingContext(InContextName: String, InContextDesc: String, InContextParent: String, InStyleSetName: String): JavascriptBindingContext
    }
}

external open class JavascriptUICommandList {
    open fun clone(): JavascriptUICommandList
    open fun CreateMenuBarBuilder(UFunction: JavascriptFunction)
    open fun CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: Boolean, UFunction: JavascriptFunction)
    open fun CreateToolbarBuilder(Orientation: String /* "Orient_Horizontal" | "Orient_Vertical" | "Orient_MAX" */, UFunction: JavascriptFunction)
    open fun ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): Boolean
    open fun ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): Boolean

    companion object {
        fun C(Other: UObject): JavascriptUICommandList
        fun C(Other: Any): JavascriptUICommandList
        fun CreateMenuBarBuilder(CommandList: JavascriptUICommandList, UFunction: JavascriptFunction)
        fun CreateMenuBuilder(CommandList: JavascriptUICommandList, bInShouldCloseWindowAfterMenuSelection: Boolean, UFunction: JavascriptFunction)
        fun CreateToolbarBuilder(CommandList: JavascriptUICommandList, Orientation: String /* "Orient_Horizontal" | "Orient_Vertical" | "Orient_MAX" */, UFunction: JavascriptFunction)
        fun ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList, InKeyEvent: KeyEvent): Boolean
        fun ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList, InMouseEvent: UPointerEvent): Boolean
        fun CreateUICommandList(): JavascriptUICommandList
        fun GetLevelEditorActions(): JavascriptUICommandList
    }
}

external open class JavascriptUICommands : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnExecuteAction: UnrealEngineDelegate<(ID: String) -> Unit>
    open var OnCanExecuteAction: UnrealEngineDelegate<(ID: String) -> Boolean>
    open var OnIsActionChecked: UnrealEngineDelegate<(ID: String) -> Boolean>
    open var OnIsActionButtonVisible: UnrealEngineDelegate<(ID: String) -> Boolean>
    open var Commands: Array<JavascriptUICommand>
    open var ContextName: String
    open var ContextDesc: String
    open var ContextNameParent: String
    open var StyleSetName: String
    open var TextSubNamespace: String
    open var CommandInfos: Array<JavascriptUICommandInfo>
    open var BindingContext: JavascriptBindingContext
    open fun Uninitialize()
    open fun Unbind(List: JavascriptUICommandList)
    open fun Refresh()
    open fun Initialize()
    open fun GetAction(ID: String): JavascriptUICommandInfo
    open fun Discard()
    open fun Commit()
    open fun Bind(List: JavascriptUICommandList)

    companion object {
        fun Load(ResourceName: String): JavascriptUICommands
        fun Find(Outer: UObject, ResourceName: String): JavascriptUICommands
        fun GetDefaultObject(): JavascriptUICommands
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptUICommands
        fun BroadcastCommandsChanged(InContextName: String)
        fun C(Other: UObject): JavascriptUICommands
        fun C(Other: Any): JavascriptUICommands
    }
}

external object EJavascriptExtensionHook {
    var Before: String /* "Before" */
    var After: String /* "After" */
    var First: String /* "First" */
    var EJavascriptExtensionHook_MAX: String /* "EJavascriptExtensionHook_MAX" */
}

external open class JavascriptMenuExtension {
    open var ExtensionHook: String
    open var HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */
    open fun clone(): JavascriptMenuExtension

    companion object {
        fun C(Other: UObject): JavascriptMenuExtension
        fun C(Other: Any): JavascriptMenuExtension
    }
}

external open class JavascriptUIExtender : UObject {
    constructor()
    constructor(Outer: UObject)
    open var MenuExtensions: Array<JavascriptMenuExtension>
    open var ToolbarExtensions: Array<JavascriptMenuExtension>
    open var OnHook: UnrealEngineDelegate<(Hook: String) -> Unit>

    companion object {
        fun Load(ResourceName: String): JavascriptUIExtender
        fun Find(Outer: UObject, ResourceName: String): JavascriptUIExtender
        fun GetDefaultObject(): JavascriptUIExtender
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptUIExtender
        fun GetTopCommandList(): JavascriptUICommandList
        fun EndSection()
        fun Bind(Commands: JavascriptUICommands)
        fun BeginSection(Name: String, text: String)
        fun AddToolBarButton(Commands: JavascriptUICommands, ID: String)
        fun AddMenuSeparator()
        fun AddMenuEntry(Commands: JavascriptUICommands, ID: String)
        fun C(Other: UObject): JavascriptUIExtender
        fun C(Other: Any): JavascriptUIExtender
    }
}

external open class JavascriptAssetEditorToolkit : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ToolkitFName: String
    open var Layout: String
    open var BaseToolkitName: String
    open var ToolkitName: String
    open var WorldCentricTabColorScale: LinearColor
    open var WorldCentricTabPrefix: String
    open var Tabs: Array<JavascriptEditorTab>
    open var Commands: JavascriptUICommands
    open var MenuExtender: JavascriptUIExtender
    open var ToolbarExtender: JavascriptUIExtender
    open var TestArray: Array<Number>
    open fun Refresh()
    open fun Discard()
    open fun Commit()

    companion object {
        fun Load(ResourceName: String): JavascriptAssetEditorToolkit
        fun Find(Outer: UObject, ResourceName: String): JavascriptAssetEditorToolkit
        fun GetDefaultObject(): JavascriptAssetEditorToolkit
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptAssetEditorToolkit
        fun C(Other: UObject): JavascriptAssetEditorToolkit
        fun C(Other: Any): JavascriptAssetEditorToolkit
    }
}

external open class JavascriptAssetPicker : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnGetDefaultValue: UnrealEngineDelegate<() -> UObject>
    open var OnSetDefaultValue: UnrealEngineDelegate<(Value: String) -> Unit>
    open var CategoryObject: UObject
    open var AllowedClasses: String
    open fun SetCategoryObject(InCategoryObject: UObject)
    open fun SetAllowedClasses(InAllowedClasses: String)

    companion object {
        fun Load(ResourceName: String): JavascriptAssetPicker
        fun Find(Outer: UObject, ResourceName: String): JavascriptAssetPicker
        fun GetDefaultObject(): JavascriptAssetPicker
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptAssetPicker
        fun C(Other: UObject): JavascriptAssetPicker
        fun C(Other: Any): JavascriptAssetPicker
    }
}

external open class JavascriptAssetTypeActions : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ActionsName: String
    open var Color: Color
    open var SupportedClass: UnrealEngineClass
    open var Editor: JavascriptAssetEditorToolkit
    open var Actions: JavascriptUIExtender
    open fun Refresh()
    open fun Discard()
    open fun Commit()

    companion object {
        fun Load(ResourceName: String): JavascriptAssetTypeActions
        fun Find(Outer: UObject, ResourceName: String): JavascriptAssetTypeActions
        fun GetDefaultObject(): JavascriptAssetTypeActions
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptAssetTypeActions
        fun C(Other: UObject): JavascriptAssetTypeActions
        fun C(Other: Any): JavascriptAssetTypeActions
    }
}

external open class JavascriptColorPicker : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) -> Unit>
    open var SelectedColor: LinearColor

    companion object {
        fun Load(ResourceName: String): JavascriptColorPicker
        fun Find(Outer: UObject, ResourceName: String): JavascriptColorPicker
        fun GetDefaultObject(): JavascriptColorPicker
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptColorPicker
        fun C(Other: UObject): JavascriptColorPicker
        fun C(Other: Any): JavascriptColorPicker
    }
}

external open class JavascriptCommandlet : Commandlet {
    constructor()
    constructor(Outer: UObject)
    open var CmdLineTokens: Array<String>
    open var CmdLineSwitches: Array<String>

    companion object {
        fun Load(ResourceName: String): JavascriptCommandlet
        fun Find(Outer: UObject, ResourceName: String): JavascriptCommandlet
        fun GetDefaultObject(): JavascriptCommandlet
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptCommandlet
        fun C(Other: UObject): JavascriptCommandlet
        fun C(Other: Any): JavascriptCommandlet
    }
}

external open class JavascriptCurveTableEditor : Widget {
    constructor()
    constructor(Outer: UObject)
    open fun SetObject(UObject: CurveTable, bForceRefresh: Boolean)
    open fun Destruct()
    open fun Construct()

    companion object {
        fun Load(ResourceName: String): JavascriptCurveTableEditor
        fun Find(Outer: UObject, ResourceName: String): JavascriptCurveTableEditor
        fun GetDefaultObject(): JavascriptCurveTableEditor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptCurveTableEditor
        fun C(Other: UObject): JavascriptCurveTableEditor
        fun C(Other: Any): JavascriptCurveTableEditor
    }
}

external open class JavascriptWholeRowDetailCustomization : UObject {
    constructor()
    constructor(Outer: UObject)
    open var TypeName: String
    open var CategoryName: String
    open var CustomWidget: JavascriptSlateWidget
    open fun Unregister()
    open fun Register()

    companion object {
        fun Load(ResourceName: String): JavascriptWholeRowDetailCustomization
        fun Find(Outer: UObject, ResourceName: String): JavascriptWholeRowDetailCustomization
        fun GetDefaultObject(): JavascriptWholeRowDetailCustomization
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWholeRowDetailCustomization
        fun C(Other: UObject): JavascriptWholeRowDetailCustomization
        fun C(Other: Any): JavascriptWholeRowDetailCustomization
    }
}

external open class JavascriptDetailCustomization : UObject {
    constructor()
    constructor(Outer: UObject)
    open var TypeName: String
    open var CategoryName: String
    open var NameWidget: JavascriptSlateWidget
    open var ValueWidget: JavascriptSlateWidget
    open fun Unregister()
    open fun Register()

    companion object {
        fun Load(ResourceName: String): JavascriptDetailCustomization
        fun Find(Outer: UObject, ResourceName: String): JavascriptDetailCustomization
        fun GetDefaultObject(): JavascriptDetailCustomization
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptDetailCustomization
        fun C(Other: UObject): JavascriptDetailCustomization
        fun C(Other: Any): JavascriptDetailCustomization
    }
}

external interface `T$145` {
    var Surfaces: Array<Number>
}

external interface `T$146` {
    var Out: String
    var `$`: Boolean
}

external open class JavascriptEditorEngineLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorEngineLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorEngineLibrary
        fun GetDefaultObject(): JavascriptEditorEngineLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorEngineLibrary
        fun SetMaterial(Engine: EditorEngine, InModel: Model, Material: MaterialInterface, Surfaces: Array<Number>)
        fun SelectNone(Engine: EditorEngine, bNoteSelectionChange: Boolean, bDeselectBSPSurfs: Boolean, WarnAboutManyActors: Boolean)
        fun SelectGroup(Engine: EditorEngine, InGroupActor: GroupActor, bForceSelection: Boolean, bInSelected: Boolean, bNotify: Boolean)
        fun SelectComponent(Engine: EditorEngine, Component: ActorComponent, bInSelected: Boolean, bNotify: Boolean, bSelectEvenIfHidden: Boolean)
        fun SelectActor(Engine: EditorEngine, Actor: Actor, bInSelected: Boolean, bNotify: Boolean, bSelectEvenIfHidden: Boolean, bForceRefresh: Boolean)
        fun RedrawAllViewports(Engine: EditorEngine, bInvalidateHitProxies: Boolean)
        fun RebuildStaticNavigableGeometry(Engine: EditorEngine, Level: Level)
        fun RebuildLevel(Engine: EditorEngine, Level: Level)
        fun GetSurfaces(Brush: Brush, Surfaces: Array<Number> = definedExternally): `T$145`
        fun GetSelectedSet(Engine: EditorEngine, Class: UnrealEngineClass): USelection
        fun GetSelectedObjects(Engine: EditorEngine): USelection
        fun GetSelectedComponents(Engine: EditorEngine): USelection
        fun GetPIEWorld(Engine: Engine): World
        fun GetLongPackagePath(InPackage: Package): String
        fun GetEditorWorld(Engine: Engine): World
        fun FindBrushBuilder(Engine: EditorEngine, BrushBuilderClass: UnrealEngineClass): BrushBuilder
        fun Exec(Engine: EditorEngine, InWorld: World, Command: String, Out: String = definedExternally): `T$146`
        fun DuplicateAsset(AssetName: String, PackagePath: String, OriginalObject: UObject): UObject
        fun DeleteObjectsUnchecked(ObjectsToDelete: Array<UObject>): Number
        fun CanSelectActor(Engine: EditorEngine, Actor: Actor, bInSelected: Boolean, bSelectEvenIfHidden: Boolean, bWarnIfLevelLocked: Boolean): Boolean
        fun bspBrushCSG(Engine: EditorEngine, Actor: Brush, Model: Model, PolyFlags: Number, BrushType: String /* "Brush_Default" | "Brush_Add" | "Brush_Subtract" | "Brush_MAX" */, CSGOper: String /* "CSG_Active" | "CSG_Add" | "CSG_Subtract" | "CSG_Intersect" | "CSG_Deintersect" | "CSG_None" | "CSG_MAX" */, bBuildBounds: Boolean, bMergePolys: Boolean, bReplaceNULLMaterialRefs: Boolean, bShowProgressBar: Boolean): Number
        fun C(Other: UObject): JavascriptEditorEngineLibrary
        fun C(Other: Any): JavascriptEditorEngineLibrary
    }
}

external interface `T$147` {
    var OutArray: Array<String>
}

external interface `T$148` {
    var OutValue: String
    var `$`: Boolean
}

external interface `T$149` {
    var OutArray: Array<String>
}

external open class JavascriptAssetData {
    open var ObjectPath: String
    open var PackageName: String
    open var PackagePath: String
    open var AssetName: String
    open var AssetClass: String
    open var ChunkIDs: Array<Number>
    open var PackageFlags: Number
    open fun clone(): JavascriptAssetData
    open fun GetAllTags(OutArray: Array<String> = definedExternally): `T$147`
    open fun GetNiagaraSystemAsset(): UObject
    open fun GetClass(): UnrealEngineClass
    open fun GetPackage(): Package
    open fun GetTagValue(Name: String, OutValue: String = definedExternally): `T$148`
    open fun IsAssetLoaded(): Boolean

    companion object {
        fun C(Other: UObject): JavascriptAssetData
        fun C(Other: Any): JavascriptAssetData
        fun GetAllTags(AssetData: JavascriptAssetData, OutArray: Array<String> = definedExternally): `T$149`
        fun GetAsset(AssetData: JavascriptAssetData): UObject
        fun GetClass(AssetData: JavascriptAssetData): UnrealEngineClass
        fun GetPackage(AssetData: JavascriptAssetData): Package
        fun GetTagValue(AssetData: JavascriptAssetData, Name: String, OutValue: String = definedExternally): `T$148`
        fun IsAssetLoaded(AssetData: JavascriptAssetData): Boolean
    }
}

external open class JavascriptEditorGlobalDelegates : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun WorldChange()
    open fun UnbindAll()
    open fun Unbind(Key: String)
    open fun SurfProps()
    open fun SingleStepPIE(bIsSimulating: Boolean)
    open fun SelectedProps()
    open fun ResumePIE(bIsSimulating: Boolean)
    open fun RefreshPrimitiveStatsBrowser()
    open fun RefreshLayerBrowser()
    open fun RefreshEditor()
    open fun RefreshAllBrowsers()
    open fun RedrawAllViewports()
    open fun PropertySelectionChange()
    open fun PreSaveWorld_Friendly(SaveFlags: Number, World: World)
    open fun PreBeginPIE(bIsSimulating: Boolean)
    open fun PostSaveWorld_Friendly(SaveFlags: Number, World: World, bSuccess: Boolean)
    open fun PostPIEStarted(bIsSimulating: Boolean)
    open fun PostLandscapeLayerUpdated()
    open fun OnShutdownPostPackagesSaved()
    open fun OnPathRemoved(Path: String)
    open fun OnPathAdded(Path: String)
    open fun OnObjectReimported(UObject: UObject)
    open fun OnNewAssetCreated(InFactory: Factory)
    open fun OnNewActorsDropped(DroppedObjects: Array<UObject>, OutNewActors: Array<Actor>)
    open fun OnMapOpened(Filename: String, bAsTemplate: Boolean)
    open fun OnMainFrameCreationFinished_Friendly()
    open fun OnLightingBuildStarted()
    open fun OnLightingBuildKept()
    open fun OnInMemoryAssetDeleted(InObject: UObject)
    open fun OnInMemoryAssetCreated(InObject: UObject)
    open fun OnGridSnappingChanged(bGridEnabled: Boolean, GridSize: Number)
    open fun OnFocusViewportOnActors(Actors: Array<Actor>)
    open fun OnFinishPickingBlueprintClass(InClass: UnrealEngineClass)
    open fun OnFilesLoaded()
    open fun OnFileLoadProgressUpdated_Friendly(NumTotalAssets: Number, NumAssetsProcessedByAssetRegistry: Number, NumAssetsPendingDataLoad: Number, bIsDiscoveringAssetFiles: Boolean)
    open fun OnEditPasteActorsEnd()
    open fun OnEditPasteActorsBegin()
    open fun OnEditorCameraMoved(ViewLocation: Vector, ViewRotation: Rotator, ViewportType: String /* "LVT_OrthoXY" | "LVT_OrthoXZ" | "LVT_OrthoYZ" | "LVT_Perspective" | "LVT_OrthoFreelook" | "LVT_OrthoNegativeXY" | "LVT_OrthoNegativeXZ" | "LVT_OrthoNegativeYZ" | "LVT_MAX" | "LVT_None" */, ViewIndex: Number)
    open fun OnEditCutActorsEnd()
    open fun OnEditCutActorsBegin()
    open fun OnEditCopyActorsEnd()
    open fun OnEditCopyActorsBegin()
    open fun OnDuplicateActorsEnd()
    open fun OnDuplicateActorsBegin()
    open fun OnDollyPerspectiveCamera(Drag: Vector, ViewIndex: Number)
    open fun OnDeleteActorsEnd()
    open fun OnDeleteActorsBegin()
    open fun OnConfigureNewAssetProperties(InFactory: Factory)
    open fun OnClassPackageLoadedOrUnloaded()
    open fun OnBlueprintReinstanced()
    open fun OnBlueprintPreCompile(Blueprint: Blueprint)
    open fun OnBlueprintCompiled()
    open fun OnAssetsPreDelete(Assets: Array<UObject>)
    open fun OnAssetsDeleted(Classes: Array<UnrealEngineClass>)
    open fun OnAssetRenamed_Friendly(AssetData: JavascriptAssetData, Name: String)
    open fun OnAssetRemoved_Friendly(AssetData: JavascriptAssetData)
    open fun OnAssetReimport(InCreatedObject: UObject)
    open fun OnAssetPreImport_Friendly(InFactory: Factory, InClass: UnrealEngineClass, InParent: UObject, Name: String, Type: String)
    open fun OnAssetPostImport(InFactory: Factory, InCreatedObject: UObject)
    open fun OnAssetAdded_Friendly(AssetData: JavascriptAssetData)
    open fun OnApplyObjectToActor(ObjectToApply: UObject, Actor: Actor)
    open fun OnAddLevelToWorld(Level: Level)
    open fun OnActionAxisMappingsChanged()
    open fun NewCurrentLevel()
    open fun MapChange_Friendly(MapChangeFlags: Number)
    open fun LoadSelectedAssetsIfNeeded()
    open fun LayerChange()
    open fun FitTextureToSurface(World: World)
    open fun EndPlayMapDelegate()
    open fun EndPIE(bIsSimulating: Boolean)
    open fun DisplayLoadErrors()
    open fun CleanseEditor()
    open fun ChangeEditorMode(NewMode: String)
    open fun Bind(Key: String)
    open fun BeginPIE(bIsSimulating: Boolean)
    open fun ActorPropertiesChange()

    companion object {
        fun Load(ResourceName: String): JavascriptEditorGlobalDelegates
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorGlobalDelegates
        fun GetDefaultObject(): JavascriptEditorGlobalDelegates
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorGlobalDelegates
        fun C(Other: UObject): JavascriptEditorGlobalDelegates
        fun C(Other: Any): JavascriptEditorGlobalDelegates
    }
}

external open class JavascriptEditorInputProcessor : UObject {
    constructor()
    constructor(Outer: UObject)
    open fun UnRegister()
    open fun Register()
    open fun HandleMouseMoveEvent(InPointerEvent: UPointerEvent): Boolean
    open fun HandleKeyUpEvent(InKeyEvent: KeyEvent): Boolean
    open fun HandleKeyDownEvent(InKeyEvent: KeyEvent): Boolean
    open fun HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): Boolean
    open fun Activate(bEnable: Boolean)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorInputProcessor
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorInputProcessor
        fun GetDefaultObject(): JavascriptEditorInputProcessor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorInputProcessor
        fun C(Other: UObject): JavascriptEditorInputProcessor
        fun C(Other: Any): JavascriptEditorInputProcessor
    }
}

external open class JavascriptExtensionBase {
    open fun clone(): JavascriptExtensionBase

    companion object {
        fun C(Other: UObject): JavascriptExtensionBase
        fun C(Other: Any): JavascriptExtensionBase
    }
}

external interface `T$150` {
    var Builder: JavascriptMenuBuilder
}

external interface `T$151` {
    var MenuBuilder: JavascriptMenuBuilder
}

external open class JavascriptMenuBuilder {
    open fun clone(): JavascriptMenuBuilder
    open fun AddComboButton(UObject: JavascriptComboButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
    open fun AddMenuByCommands(UICommands: JavascriptUICommands = definedExternally): `T$150`
    open fun AddMenuEntry(UObject: JavascriptMenuContext = definedExternally): `T$150`
    open fun AddPullDownMenu(InMenuLabel: String = definedExternally, InToolTip: String = definedExternally, InPullDownMenu: JavascriptFunction = definedExternally, InExtensionHook: String = definedExternally, InTutorialHighlightName: String = definedExternally): `T$151`
    open fun AddSeparator(): `T$150`
    open fun AddSubMenu(Label: String = definedExternally, Tooltip: String = definedExternally, bInOpenSubMenuOnClick: Boolean = definedExternally, UFunction: JavascriptFunction = definedExternally): `T$150`
    open fun AddToolBarButton(CommandInfo: JavascriptUICommandInfo = definedExternally): `T$150`
    open fun AddToolBarButtonByContext(Context: JavascriptToolbarButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
    open fun AddWidget(Widget: Widget = definedExternally, Label: String = definedExternally, bNoIndent: Boolean = definedExternally, InTutorialHighlightName: String = definedExternally, bSearchable: Boolean = definedExternally): `T$150`
    open fun BeginSection(InExtensionHook: String = definedExternally, MenuHeadingText: String = definedExternally): `T$150`
    open fun EndSection(): `T$150`
    open fun PopCommandList(): `T$150`
    open fun PushCommandList(List: JavascriptUICommandList = definedExternally): `T$150`

    companion object {
        fun C(Other: UObject): JavascriptMenuBuilder
        fun C(Other: Any): JavascriptMenuBuilder
        fun AddComboButton(Builder: JavascriptMenuBuilder = definedExternally, UObject: JavascriptComboButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
        fun AddMenuByCommands(Builder: JavascriptMenuBuilder = definedExternally, UICommands: JavascriptUICommands = definedExternally): `T$150`
        fun AddMenuEntry(Builder: JavascriptMenuBuilder = definedExternally, UObject: JavascriptMenuContext = definedExternally): `T$150`
        fun AddPullDownMenu(MenuBuilder: JavascriptMenuBuilder = definedExternally, InMenuLabel: String = definedExternally, InToolTip: String = definedExternally, InPullDownMenu: JavascriptFunction = definedExternally, InExtensionHook: String = definedExternally, InTutorialHighlightName: String = definedExternally): `T$151`
        fun AddSeparator(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun AddSubMenu(Builder: JavascriptMenuBuilder = definedExternally, Label: String = definedExternally, Tooltip: String = definedExternally, bInOpenSubMenuOnClick: Boolean = definedExternally, UFunction: JavascriptFunction = definedExternally): `T$150`
        fun AddToolBarButton(Builder: JavascriptMenuBuilder = definedExternally, CommandInfo: JavascriptUICommandInfo = definedExternally): `T$150`
        fun AddToolBarButtonByContext(Builder: JavascriptMenuBuilder = definedExternally, Context: JavascriptToolbarButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
        fun AddWidget(Builder: JavascriptMenuBuilder = definedExternally, Widget: Widget = definedExternally, Label: String = definedExternally, bNoIndent: Boolean = definedExternally, InTutorialHighlightName: String = definedExternally, bSearchable: Boolean = definedExternally): `T$150`
        fun BeginSection(Builder: JavascriptMenuBuilder = definedExternally, InExtensionHook: String = definedExternally, MenuHeadingText: String = definedExternally): `T$150`
        fun EndSection(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun PopCommandList(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun PushCommandList(Builder: JavascriptMenuBuilder = definedExternally, List: JavascriptUICommandList = definedExternally): `T$150`
    }
}

external open class JavascriptExtender {
    open fun clone(): JavascriptExtender
    open fun AddMenubarExtension(ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
    open fun AddMenuExtension(ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
    open fun AddToolBarExtension(ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
    open fun Apply(ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, MenuBuilder: JavascriptMenuBuilder = definedExternally): `T$151`
    open fun RemoveExtension(Extension: JavascriptExtensionBase)

    companion object {
        fun C(Other: UObject): JavascriptExtender
        fun C(Other: Any): JavascriptExtender
        fun AddMenubarExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun AddMenuExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun AddToolBarExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun Apply(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, MenuBuilder: JavascriptMenuBuilder = definedExternally): `T$151`
        fun RemoveExtension(Extender: JavascriptExtender, Extension: JavascriptExtensionBase)
        fun Combine(Extenders: Array<JavascriptExtender>): JavascriptExtender
    }
}

external open class JavascriptLazyExtenderDelegates : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: Array<UObject>) -> JavascriptExtender>

    companion object {
        fun Load(ResourceName: String): JavascriptLazyExtenderDelegates
        fun Find(Outer: UObject, ResourceName: String): JavascriptLazyExtenderDelegates
        fun GetDefaultObject(): JavascriptLazyExtenderDelegates
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptLazyExtenderDelegates
        fun C(Other: UObject): JavascriptLazyExtenderDelegates
        fun C(Other: Any): JavascriptLazyExtenderDelegates
    }
}

external object EJavascriptRHIFeatureLevel {
    var ES2: String /* "ES2" */
    var ES3_1: String /* "ES3_1" */
    var SM4: String /* "SM4" */
    var SM5: String /* "SM5" */
    var Num: String /* "Num" */
    var EJavascriptRHIFeatureLevel_MAX: String /* "EJavascriptRHIFeatureLevel_MAX" */
}

external interface `T$152` {
    var Verts: Array<Vector>
}

external interface `T$153` {
    var Verts: Array<Vector>
}

external open class JavascriptPDI {
    open fun clone(): JavascriptPDI
    open fun DrawArc(Base: Vector, X: Vector, Y: Vector, MinAngle: Number, MaxAngle: Number, Radius: Number, Sections: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
    open fun DrawCircle(Base: Vector, X: Vector, Y: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawConnectedArrow(ArrowToWorld: Transform, Color: LinearColor, ArrowHeight: Number, ArrowWidth: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, NumSpokes: Number)
    open fun DrawDashedLine(Start: Vector, End: Vector, Color: LinearColor, DashSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, DepthBias: Number)
    open fun DrawDirectionalArrow(ArrowToWorld: Transform, InColor: LinearColor, Length: Number, ArrowSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number)
    open fun DrawOrientedWireBox(Base: Vector, X: Vector, Y: Vector, Z: Vector, Extent: Vector, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawPolygon(Verts: Array<Vector>, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, RHIFeatureLevel: String /* "ES2" | "ES3_1" | "SM4" | "SM5" | "Num" | "EJavascriptRHIFeatureLevel_MAX" */)
    open fun DrawWireBox(Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireBox2(Matrix: Transform, Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireCapsule(Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireChoppedCone(Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, TopRadius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
    open fun DrawWireCone(Verts: Array<Vector> = definedExternally, Transform: Transform = definedExternally, ConeRadius: Number = definedExternally, ConeAngle: Number = definedExternally, ConeSides: Number = definedExternally, Color: LinearColor = definedExternally, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */ = definedExternally, Thickness: Number = definedExternally, DepthBias: Number = definedExternally, bScreenSpace: Boolean = definedExternally): `T$152`
    open fun DrawWireCylinder(Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireDiamond(Transform: Transform, Size: Number, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
    open fun DrawWireSphere(Base: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireSphere2(Transform: Transform, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireSphereAutoSides(Base: Vector, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireSphereAutoSides2(Transform: Transform, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
    open fun DrawWireSphereCappedCone(Transform: Transform, ConeRadius: Number, ConeAngle: Number, ConeSides: Number, ArcFrequency: Number, CapSegments: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
    open fun DrawWireStar(Position: Vector, Size: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
    open fun SetHitProxy(Name: String)

    companion object {
        fun C(Other: UObject): JavascriptPDI
        fun C(Other: Any): JavascriptPDI
        fun DrawArc(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, MinAngle: Number, MaxAngle: Number, Radius: Number, Sections: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawCircle(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawConnectedArrow(PDI: JavascriptPDI, ArrowToWorld: Transform, Color: LinearColor, ArrowHeight: Number, ArrowWidth: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, NumSpokes: Number)
        fun DrawDashedLine(PDI: JavascriptPDI, Start: Vector, End: Vector, Color: LinearColor, DashSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, DepthBias: Number)
        fun DrawDirectionalArrow(PDI: JavascriptPDI, ArrowToWorld: Transform, InColor: LinearColor, Length: Number, ArrowSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number)
        fun DrawOrientedWireBox(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Extent: Vector, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawPolygon(PDI: JavascriptPDI, Verts: Array<Vector>, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, RHIFeatureLevel: String /* "ES2" | "ES3_1" | "SM4" | "SM5" | "Num" | "EJavascriptRHIFeatureLevel_MAX" */)
        fun DrawWireBox(PDI: JavascriptPDI, Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireBox2(PDI: JavascriptPDI, Matrix: Transform, Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireCapsule(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireChoppedCone(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, TopRadius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireCone(PDI: JavascriptPDI, Verts: Array<Vector> = definedExternally, Transform: Transform = definedExternally, ConeRadius: Number = definedExternally, ConeAngle: Number = definedExternally, ConeSides: Number = definedExternally, Color: LinearColor = definedExternally, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */ = definedExternally, Thickness: Number = definedExternally, DepthBias: Number = definedExternally, bScreenSpace: Boolean = definedExternally): `T$153`
        fun DrawWireCylinder(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireDiamond(PDI: JavascriptPDI, Transform: Transform, Size: Number, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireSphere(PDI: JavascriptPDI, Base: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphere2(PDI: JavascriptPDI, Transform: Transform, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphereAutoSides(PDI: JavascriptPDI, Base: Vector, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphereAutoSides2(PDI: JavascriptPDI, Transform: Transform, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphereCappedCone(PDI: JavascriptPDI, Transform: Transform, ConeRadius: Number, ConeAngle: Number, ConeSides: Number, ArcFrequency: Number, CapSegments: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireStar(PDI: JavascriptPDI, Position: Vector, Size: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun SetHitProxy(PDI: JavascriptPDI, Name: String)
    }
}

external open class JavascriptExtensibilityManager {
    open fun clone(): JavascriptExtensibilityManager
    open fun AddExtender(Extender: JavascriptExtender)
    open fun AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates)
    open fun RemoveAllLazyExtender()
    open fun RemoveExtender(Extender: JavascriptExtender)

    companion object {
        fun C(Other: UObject): JavascriptExtensibilityManager
        fun C(Other: Any): JavascriptExtensibilityManager
        fun AddExtender(Manager: JavascriptExtensibilityManager, Extender: JavascriptExtender)
        fun AddLazyExtender(Manager: JavascriptExtensibilityManager, Delegates: JavascriptLazyExtenderDelegates)
        fun RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager)
        fun RemoveExtender(Manager: JavascriptExtensibilityManager, Extender: JavascriptExtender)
        fun GetMenuExtensibilityManager(What: String): JavascriptExtensibilityManager
        fun GetToolBarExtensibilityManager(What: String): JavascriptExtensibilityManager
    }
}

external open class JavascriptViewportClick {
    open fun clone(): JavascriptViewportClick
    open fun GetClickPos(): IntPoint
    open fun GetDirection(): Vector
    open fun GetEvent(): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
    open fun GetKey(): Key
    open fun GetOrigin(): Vector
    open fun IsAltDown(): Boolean
    open fun IsControlDown(): Boolean
    open fun IsShiftDown(): Boolean

    companion object {
        fun C(Other: UObject): JavascriptViewportClick
        fun C(Other: Any): JavascriptViewportClick
        fun GetClickPos(Click: JavascriptViewportClick): IntPoint
        fun GetDirection(Click: JavascriptViewportClick): Vector
        fun GetEvent(Click: JavascriptViewportClick): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
        fun GetKey(Click: JavascriptViewportClick): Key
        fun GetOrigin(Click: JavascriptViewportClick): Vector
        fun IsAltDown(Click: JavascriptViewportClick): Boolean
        fun IsControlDown(Click: JavascriptViewportClick): Boolean
        fun IsShiftDown(Click: JavascriptViewportClick): Boolean
    }
}

external open class JavascriptHitProxy {
    open fun clone(): JavascriptHitProxy
    open fun GetActor(): Actor
    open fun GetName(): String

    companion object {
        fun C(Other: UObject): JavascriptHitProxy
        fun C(Other: Any): JavascriptHitProxy
        fun GetActor(Proxy: JavascriptHitProxy): Actor
        fun GetName(Proxy: JavascriptHitProxy): String
    }
}

external object EJavascriptMessageSeverity {
    var CriticalError: String /* "CriticalError" */
    var Error: String /* "Error" */
    var PerformanceWarning: String /* "PerformanceWarning" */
    var Warning: String /* "Warning" */
    var Info: String /* "Info" */
    var EJavascriptMessageSeverity_MAX: String /* "EJavascriptMessageSeverity_MAX" */
}

external interface `T$154` {
    var SweepHitResult: HitResult
    var `$`: Boolean
}

external interface `T$155` {
    var OutFilenames: Array<String>
    var `$`: Boolean
}

external interface `T$156` {
    var Data: String
    var `$`: Boolean
}

external interface `T$157` {
    var FileData: Array<Number>
    var `$`: Boolean
}

external interface `T$158` {
    var Out: Array<UObject>
    var `$`: Number
}

external interface `T$159` {
    var MinX: Number
    var MinY: Number
    var MaxX: Number
    var MaxY: Number
    var `$`: Boolean
}

external interface `T$160` {
    var OutArray: Array<String>
}

external interface `T$161` {
    var Verts: Array<Vector>
}

external open class JavascriptEditorLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorLibrary
        fun GetDefaultObject(): JavascriptEditorLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorLibrary
        fun UpdateModelComponents(Level: Level)
        fun ToggleSelect(USelection: USelection, InObject: UObject)
        fun ToggleIsExecuteTestModePIE(): Boolean
        fun SetIsTemporarilyHiddenInEditor(Actor: Actor, bIsHidden: Boolean)
        fun SetHitProxy(PDI: JavascriptPDI, Name: String)
        fun SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo, MinX: Number, MinY: Number, MaxX: Number, MaxY: Number)
        fun SetFolderPath_Recursively(Actor: Actor, NewFolderPath: String)
        fun SetFolderPath(Actor: Actor, NewFolderPath: String)
        fun SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo, LayerInfo: LandscapeLayerInfoObject, MinX: Number, MinY: Number, MaxX: Number, MaxY: Number, PaintingRestriction: String /* "None" | "UseMaxLayers" | "ExistingOnly" | "UseComponentWhitelist" | "ELandscapeLayerPaintingRestriction_MAX" */)
        fun SetActorLocation(Actor: Actor, NewLocation: Vector, bSweep: Boolean, SweepHitResult: HitResult = definedExternally, bTeleport: Boolean = definedExternally): `T$154`
        fun SetActorLabelUnique(Actor: Actor, NewActorLabel: String, InExistingActorLabels: Array<String>)
        fun SetActorLabel(Actor: Actor, NewActorLabel: String, bMarkDirty: Boolean)
        fun Select(USelection: USelection, InObject: UObject)
        fun SavePackage(Package: Package, Filename: String): Boolean
        fun RequestEndPlayMapInPIE()
        fun ReplaceAnimNotifyClass(Sequence: AnimSequenceBase, NotifyName: String, NewNotifyName: String, NewNotifyClass: UObject): Number
        fun RemoveLevelInstance(World: World)
        fun RemoveExtender(Manager: JavascriptExtensibilityManager, Extender: JavascriptExtender)
        fun RemoveComponentFromBlueprint(Blueprint: Blueprint, RemoveComponent: ActorComponent, bPromoteChildren: Boolean)
        fun RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager)
        fun PostEditChange(InObject: UObject)
        fun OpenPopupWindow(Widget: Widget, PopupDesiredSize: Vector2D, HeadingText: String)
        fun OpenFileDialog(WindowHandle: JavascriptWindow, DialogTitle: String, DefaultPath: String, DefaultFile: String, FileTypes: String, Flags: Number, OutFilenames: Array<String> = definedExternally): `T$155`
        fun OpenEditorForAssetByPath(AssetPathName: String, ObjectName: String)
        fun OpenEditorForAsset(Asset: UObject): Boolean
        fun OpenDirectoryDialog(WindowHandle: JavascriptWindow, DialogTitle: String, DefaultPath: String, OutFolderName: String = definedExternally): `T$86`
        fun NotifyUpdateCurveTable(InCurveTable: CurveTable)
        fun ModifyObject(UObject: UObject, bAlwaysMarkDirty: Boolean)
        fun MarkPackageDirty(InObject: UObject): Boolean
        fun LoadImageFromDiskAsync(ImagePath: String, Callback: AsyncTaskDownloadImage): Boolean
        fun LoadFileToString(Path: String, Data: String = definedExternally): `T$156`
        fun LoadFileToIntArray(Path: String, FileData: Array<Number> = definedExternally): `T$157`
        fun IsShiftDown(Click: JavascriptViewportClick): Boolean
        fun IsControlDown(Click: JavascriptViewportClick): Boolean
        fun IsAssetLoaded(AssetData: JavascriptAssetData): Boolean
        fun IsAltDown(Click: JavascriptViewportClick): Boolean
        fun IsActorLabelEditable(Actor: Actor): Boolean
        fun IsActive(Transactor: Transactor): Boolean
        fun InvalidateModelGeometry(World: World, InLevel: Level)
        fun HasMetaData(Field: Field, Key: String): Boolean
        fun GetUniqueID(InObject: UObject): Number
        fun GetTransaction(Transactor: Transactor, QueueIndex: Number): JavascriptTransaction
        fun GetToolBarExtensibilityManager(What: String): JavascriptExtensibilityManager
        fun GetTitle(Transaction: JavascriptTransaction): String
        fun GetTagValue(AssetData: JavascriptAssetData, Name: String, OutValue: String = definedExternally): `T$148`
        fun GetSelectedObjects(USelection: USelection, Out: Array<UObject> = definedExternally): `T$158`
        fun GetRootWindow(): JavascriptSlateWidget
        fun GetQueueLength(Transactor: Transactor): Number
        fun GetPrimaryObject(Transaction: JavascriptTransaction): UObject
        fun GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass
        fun GetPackage(AssetData: JavascriptAssetData): Package
        fun GetOrigin(Click: JavascriptViewportClick): Vector
        fun GetName(Proxy: JavascriptHitProxy): String
        fun GetMenuExtensibilityManager(What: String): JavascriptExtensibilityManager
        fun GetLevelEditorActions(): JavascriptUICommandList
        fun GetLayerInfoByName(LandscapeInfo: LandscapeInfo, LayerName: String, Owner: LandscapeProxy): LandscapeLayerInfoObject
        fun GetLandscapeInfo(Landscape: Landscape, bSpawnNewActor: Boolean): LandscapeInfo
        fun GetLandscapeExtent(LandscapeInfo: LandscapeInfo, MinX: Number = definedExternally, MinY: Number = definedExternally, MaxX: Number = definedExternally, MaxY: Number = definedExternally): `T$159`
        fun GetKeyNameByKeyEvent(Event: KeyEvent): String
        fun GetKey(Click: JavascriptViewportClick): Key
        fun GetIsShiftDownByKeyEvent(Event: KeyEvent): Boolean
        fun GetIsExecuteTestModePIE(): Boolean
        fun GetIsControlDownByKeyEvent(Event: KeyEvent): Boolean
        fun GetIsAltDownByKeyEvent(Event: KeyEvent): Boolean
        fun GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo, MinX: Number, MinY: Number, MaxX: Number, MaxY: Number)
        fun GetGroup(Name: String): JavascriptWorkspaceItem
        fun GetFolderPath(Actor: Actor): String
        fun GetEvent(Click: JavascriptViewportClick): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
        fun GetEngine(): EditorEngine
        fun GetEditorPlayWorld(): World
        fun GetDirection(Click: JavascriptViewportClick): Vector
        fun GetDefaultBrush(World: World): Brush
        fun GetDataTableAsJSON(InDataTable: DataTable, InDTExportFlags: Number): String
        fun GetContext(Transaction: JavascriptTransaction): String
        fun GetClickPos(Click: JavascriptViewportClick): IntPoint
        fun GetClass(AssetData: JavascriptAssetData): UnrealEngineClass
        fun GetAssetsByType(Types: Array<String>, bRecursiveClasses: Boolean): Array<AssetData>
        fun GetAsset(AssetData: JavascriptAssetData): UObject
        fun GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo, LayerInfo: LandscapeLayerInfoObject, MinX: Number, MinY: Number, MaxX: Number, MaxY: Number)
        fun GetAllTags(AssetData: JavascriptAssetData, OutArray: Array<String> = definedExternally): `T$160`
        fun GetActorRotation(Actor: Actor): Rotator
        fun GetActorLocation(Actor: Actor): Vector
        fun GetActorLabel(Actor: Actor): String
        fun GetActor(Proxy: JavascriptHitProxy): Actor
        fun FindWorldInPackage(Package: Package): World
        fun ExportNavigation(InWorld: World, Path: String): String
        fun EditorDestroyActor(World: World, Actor: Actor, bShouldModifyLevel: Boolean): Boolean
        fun EditorAddModalWindow(Widget: JavascriptSlateWidget)
        fun DrawWireStar(PDI: JavascriptPDI, Position: Vector, Size: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireSphereCappedCone(PDI: JavascriptPDI, Transform: Transform, ConeRadius: Number, ConeAngle: Number, ConeSides: Number, ArcFrequency: Number, CapSegments: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireSphereAutoSides2(PDI: JavascriptPDI, Transform: Transform, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphereAutoSides(PDI: JavascriptPDI, Base: Vector, Color: LinearColor, Radius: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphere2(PDI: JavascriptPDI, Transform: Transform, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireSphere(PDI: JavascriptPDI, Base: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireDiamond(PDI: JavascriptPDI, Transform: Transform, Size: Number, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireCylinder(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireCone(PDI: JavascriptPDI, Verts: Array<Vector> = definedExternally, Transform: Transform = definedExternally, ConeRadius: Number = definedExternally, ConeAngle: Number = definedExternally, ConeSides: Number = definedExternally, Color: LinearColor = definedExternally, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */ = definedExternally, Thickness: Number = definedExternally, DepthBias: Number = definedExternally, bScreenSpace: Boolean = definedExternally): `T$161`
        fun DrawWireChoppedCone(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, TopRadius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DrawWireCapsule(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Color: LinearColor, Radius: Number, HalfHeight: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireBox2(PDI: JavascriptPDI, Matrix: Transform, Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawWireBox(PDI: JavascriptPDI, Box: Box, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawPolygon(PDI: JavascriptPDI, Verts: Array<Vector>, InColor: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, RHIFeatureLevel: String /* "ES2" | "ES3_1" | "SM4" | "SM5" | "Num" | "EJavascriptRHIFeatureLevel_MAX" */)
        fun DrawOrientedWireBox(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Z: Vector, Extent: Vector, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawDirectionalArrow(PDI: JavascriptPDI, ArrowToWorld: Transform, InColor: LinearColor, Length: Number, ArrowSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number)
        fun DrawDashedLine(PDI: JavascriptPDI, Start: Vector, End: Vector, Color: LinearColor, DashSize: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, DepthBias: Number)
        fun DrawConnectedArrow(PDI: JavascriptPDI, ArrowToWorld: Transform, Color: LinearColor, ArrowHeight: Number, ArrowWidth: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, NumSpokes: Number)
        fun DrawCircle(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, Color: LinearColor, Radius: Number, NumSides: Number, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */, Thickness: Number, DepthBias: Number, bScreenSpace: Boolean)
        fun DrawArc(PDI: JavascriptPDI, Base: Vector, X: Vector, Y: Vector, MinAngle: Number, MaxAngle: Number, Radius: Number, Sections: Number, Color: LinearColor, DepthPriority: String /* "SDPG_World" | "SDPG_Foreground" | "SDPG_MAX" */)
        fun DeselectAll(USelection: USelection, InClass: UnrealEngineClass)
        fun Deselect(USelection: USelection, InObject: UObject)
        fun DeletePackage(Package: Package): Boolean
        fun csgAdd(DefaultBrush: Brush, PolyFlags: Number, BrushType: String /* "Brush_Default" | "Brush_Add" | "Brush_Subtract" | "Brush_MAX" */): Brush
        fun CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: Array<UObject>)
        fun CreateLogListingWidget(InLogName: String): JavascriptSlateWidget
        fun CreateLogListing(InLogName: String, InLabel: String)
        fun CreateBrushForVolumeActor(NewActor: Volume, BrushBuilder: BrushBuilder)
        fun ConditionalBeginDestroybyUObject(TargetObject: UObject): Boolean
        fun CompileBlueprint(Blueprint: Blueprint)
        fun ClearActorLabel(Actor: Actor)
        fun Build(Builder: BrushBuilder, InWorld: World, InBrush: Brush): Boolean
        fun BroadcastHotReload()
        fun BroadcastAssetCreated(NewAsset: UObject)
        fun AddWhitelistedObject(InObject: UObject)
        fun AddRichCurve(InCurveTable: CurveTable, Key: String, InCurve: RichCurve)
        fun AddLogListingMessage(InLogName: String, InSeverity: String /* "CriticalError" | "Error" | "PerformanceWarning" | "Warning" | "Info" | "EJavascriptMessageSeverity_MAX" */, LogText: String)
        fun AddLazyExtender(Manager: JavascriptExtensibilityManager, Delegates: JavascriptLazyExtenderDelegates)
        fun AddGroup(Parent: JavascriptWorkspaceItem, DisplayName: String): JavascriptWorkspaceItem
        fun AddExtender(Manager: JavascriptExtensibilityManager, Extender: JavascriptExtender)
        fun AddComponentsToBlueprint(Blueprint: Blueprint, Components: Array<ActorComponent>, bHarvesting: Boolean, OptionalNewRootComponent: ActorComponent, bKeepMobility: Boolean)
        fun C(Other: UObject): JavascriptEditorLibrary
        fun C(Other: Any): JavascriptEditorLibrary
    }
}

external open class JavascriptEditorPopupWindow : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Widget: Widget
    open fun Open(Heading: String, DesiredSize: Vector2D): Boolean
    open fun OnDismissed()

    companion object {
        fun Load(ResourceName: String): JavascriptEditorPopupWindow
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorPopupWindow
        fun GetDefaultObject(): JavascriptEditorPopupWindow
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorPopupWindow
        fun C(Other: UObject): JavascriptEditorPopupWindow
        fun C(Other: Any): JavascriptEditorPopupWindow
    }
}

external open class JavascriptEditorTabManager : Widget {
    constructor()
    constructor(Outer: UObject)
    open var Layout: String
    open var Tabs: Array<JavascriptEditorTab>
    open fun InvokeTab(SearchForTabId: String)
    open fun InsertNewTab(PlaceholderId: String, SearchForTabId: String, NewTab: JavascriptEditorTab)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorTabManager
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorTabManager
        fun GetDefaultObject(): JavascriptEditorTabManager
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorTabManager
        fun C(Other: UObject): JavascriptEditorTabManager
        fun C(Other: Any): JavascriptEditorTabManager
    }
}

external open class JavascriptEditorTick : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnTick: UnrealEngineDelegate<(DeltaSeconds: Number) -> Unit>
    open fun GetEngine(): EditorEngine
    open fun ForceTick(DeltaTime: Number)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorTick
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorTick
        fun GetDefaultObject(): JavascriptEditorTick
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorTick
        fun C(Other: UObject): JavascriptEditorTick
        fun C(Other: Any): JavascriptEditorTick
    }
}

external open class JavascriptEditorToolbar : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnHook: UnrealEngineDelegate<() -> JavascriptMenuBuilder>

    companion object {
        fun Load(ResourceName: String): JavascriptEditorToolbar
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorToolbar
        fun GetDefaultObject(): JavascriptEditorToolbar
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorToolbar
        fun C(Other: UObject): JavascriptEditorToolbar
        fun C(Other: Any): JavascriptEditorToolbar
    }
}

external open class JavascriptInputEventState {
    open fun clone(): JavascriptInputEventState
    open fun GetInputEvent(): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
    open fun GetKey(): Key
    open fun IsAltButtonEvent(): Boolean
    open fun IsAltButtonPressed(): Boolean
    open fun IsAnyMouseButtonDown(): Boolean
    open fun IsButtonPressed(InKey: Key): Boolean
    open fun IsCtrlButtonEvent(): Boolean
    open fun IsCtrlButtonPressed(): Boolean
    open fun IsLeftMouseButtonPressed(): Boolean
    open fun IsMiddleMouseButtonPressed(): Boolean
    open fun IsMouseButtonEvent(): Boolean
    open fun IsRightMouseButtonPressed(): Boolean
    open fun IsShiftButtonEvent(): Boolean
    open fun IsShiftButtonPressed(): Boolean
    open fun IsSpaceBarPressed(): Boolean

    companion object {
        fun C(Other: UObject): JavascriptInputEventState
        fun C(Other: Any): JavascriptInputEventState
        fun GetInputEvent(InputEvent: JavascriptInputEventState): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
        fun GetKey(InputEvent: JavascriptInputEventState): Key
        fun IsAltButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsAltButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): Boolean
        fun IsButtonPressed(InputEvent: JavascriptInputEventState, InKey: Key): Boolean
        fun IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsMouseButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsShiftButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsShiftButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsSpaceBarPressed(InputEvent: JavascriptInputEventState): Boolean
    }
}

external object EJavascriptWidgetMode {
    var WM_Translate: String /* "WM_Translate" */
    var WM_TranslateRotateZ: String /* "WM_TranslateRotateZ" */
    var WM_2D: String /* "WM_2D" */
    var WM_Rotate: String /* "WM_Rotate" */
    var WM_Scale: String /* "WM_Scale" */
    var WM_Max: String /* "WM_Max" */
    var WM_None: String /* "WM_None" */
}

external interface `T$162` {
    var OutScreenPosition: Vector2D
}

external interface `T$163` {
    var OutRayOrigin: Vector
    var OutRayDirection: Vector
}

external open class JavascriptEditorViewport : PanelWidget {
    constructor()
    constructor(Outer: UObject)
    open var OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) -> Unit>
    open var OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: Boolean, bNudge: Boolean, Instance: JavascriptEditorViewport) -> Unit>
    open var OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) -> Unit>
    open var OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) -> Boolean>
    open var OnInputKey: UnrealEngineDelegate<(ControllerId: Number, Key: Key, Event: String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */, Instance: JavascriptEditorViewport) -> Boolean>
    open var OnInputAxis: UnrealEngineDelegate<(ControllerId: Number, Key: Key, Delta: Number, DeltaTime: Number, Instance: JavascriptEditorViewport) -> Boolean>
    open var OnMouseEnter: UnrealEngineDelegate<(X: Number, Y: Number, Instance: JavascriptEditorViewport) -> Boolean>
    open var OnMouseMove: UnrealEngineDelegate<(X: Number, Y: Number, Instance: JavascriptEditorViewport) -> Boolean>
    open var OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) -> Boolean>
    open var OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) -> Unit>
    open var OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) -> Unit>
    open var OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) -> Vector>
    open var OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) -> Rotator>
    open var OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) -> String>
    open fun SetWidgetMode(WidgetMode: String /* "WM_Translate" | "WM_TranslateRotateZ" | "WM_2D" | "WM_Rotate" | "WM_Scale" | "WM_Max" | "WM_None" */)
    open fun SetViewRotation(ViewRotation: Rotator)
    open fun SetViewportType(InViewportType: String /* "LVT_OrthoXY" | "LVT_OrthoXZ" | "LVT_OrthoYZ" | "LVT_Perspective" | "LVT_OrthoFreelook" | "LVT_OrthoNegativeXY" | "LVT_OrthoNegativeXZ" | "LVT_OrthoNegativeYZ" | "LVT_MAX" | "LVT_None" */)
    open fun SetViewMode(InViewModeIndex: String /* "VMI_BrushWireframe" | "VMI_Wireframe" | "VMI_Unlit" | "VMI_Lit" | "VMI_Lit_DetailLighting" | "VMI_LightingOnly" | "VMI_LightComplexity" | "VMI_ShaderComplexity" | "VMI_LightmapDensity" | "VMI_LitLightmapDensity" | "VMI_ReflectionOverride" | "VMI_VisualizeBuffer" | "VMI_StationaryLightOverlap" | "VMI_CollisionPawn" | "VMI_CollisionVisibility" | "VMI_LODColoration" | "VMI_QuadOverdraw" | "VMI_PrimitiveDistanceAccuracy" | "VMI_MeshUVDensityAccuracy" | "VMI_ShaderComplexityWithQuadOverdraw" | "VMI_HLODColoration" | "VMI_GroupLODColoration" | "VMI_MaterialTextureScaleAccuracy" | "VMI_RequiredTextureResolution" | "VMI_PathTracing" | "VMI_RayTracingDebug" | "VMI_Max" | "VMI_Unknown" */)
    open fun SetViewLocation(ViewLocation: Vector)
    open fun SetViewFOV(InViewFOV: Number)
    open fun SetSkyBrightness(SkyBrightness: Number)
    open fun SetSimulatePhysics(bShouldSimulatePhysics: Boolean)
    open fun SetRealtime(bInRealtime: Boolean, bStoreCurrentValue: Boolean)
    open fun SetProfileIndex(InProfileIndex: Number)
    open fun SetLightLocation(InLightPos: Vector)
    open fun SetLightDirection(InLightDir: Rotator)
    open fun SetLightColor(LightColor: Color)
    open fun SetLightBrightness(LightBrightness: Number)
    open fun SetFloorOffset(InFloorOffset: Number)
    open fun SetEngineShowFlags(In: String): Boolean
    open fun SetCameraSpeedSetting(SpeedSetting: Number)
    open fun SetBackgroundColor(BackgroundColor: LinearColor)
    open fun RestoreRealtime(bAllowDisable: Boolean)
    open fun Redraw()
    open fun ProjectWorldToScreen(WorldPosition: Vector, OutScreenPosition: Vector2D = definedExternally): `T$162`
    open fun OverridePostProcessSettings(PostProcessSettings: PostProcessSettings, Weight: Number)
    open fun GetWidgetMode(): String /* "WM_Translate" | "WM_TranslateRotateZ" | "WM_2D" | "WM_Rotate" | "WM_Scale" | "WM_Max" | "WM_None" */
    open fun GetViewRotation(): Rotator
    open fun GetViewportWorld(): World
    open fun GetViewLocation(): Vector
    open fun GetViewFOV(): Number
    open fun GetSkyComponent(): StaticMeshComponent
    open fun GetFloorMeshComponent(): StaticMeshComponent
    open fun GetEngineShowFlags(): String
    open fun GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent
    open fun GetDefaultSkySphereComponent(): StaticMeshComponent
    open fun GetDefaultSkyLightComponent(): SkyLightComponent
    open fun GetDefaultPostProcessComponent(): PostProcessComponent
    open fun GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant
    open fun GetDefaultDirectionalLightComponent(): DirectionalLightComponent
    open fun GetDefaultAssetViewerSettings(): AssetViewerSettings
    open fun GetCurrentProfileIndex(): Number
    open fun GetCameraSpeedSetting(): Number
    open fun DeprojectScreenToWorld(ScreenPosition: Vector2D, OutRayOrigin: Vector = definedExternally, OutRayDirection: Vector = definedExternally): `T$163`

    companion object {
        fun Load(ResourceName: String): JavascriptEditorViewport
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorViewport
        fun GetDefaultObject(): JavascriptEditorViewport
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorViewport
        fun C(Other: UObject): JavascriptEditorViewport
        fun C(Other: Any): JavascriptEditorViewport
    }
}

external open class JavascriptEdViewport {
    open fun clone(): JavascriptEdViewport
    open fun GetHitProxy(): JavascriptHitProxy

    companion object {
        fun C(Other: UObject): JavascriptEdViewport
        fun C(Other: Any): JavascriptEdViewport
        fun GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy
    }
}

external interface `T$164` {
    var Tools: JavascriptEditorModeTools
}

external interface `T$165` {
    var Tools: JavascriptEditorModeTools
    var `$`: Boolean
}

external open class JavascriptEditorModeTools {
    open fun clone(): JavascriptEditorModeTools
    open fun ActivateDefaultMode(): `T$164`
    open fun ActivateMode(InID: String = definedExternally, bToggle: Boolean = definedExternally): `T$164`
    open fun DeactivateAllModes(): `T$164`
    open fun DeactivateMode(InID: String = definedExternally): `T$164`
    open fun DestroyMode(InID: String = definedExternally): `T$164`
    open fun EndTracking(Viewport: JavascriptEdViewport): Boolean
    open fun EnsureNotInMode(ModeId: String = definedExternally, ErrorMsg: String = definedExternally, bNotifyUser: Boolean = definedExternally): `T$165`
    open fun IsDefaultModeActive(): `T$165`
    open fun IsModeActive(InID: String = definedExternally): `T$165`
    open fun IsTracking(): Boolean
    open fun SetDefaultMode(DefaultID: String = definedExternally): `T$164`
    open fun StartTracking(Viewport: JavascriptEdViewport): Boolean

    companion object {
        fun C(Other: UObject): JavascriptEditorModeTools
        fun C(Other: Any): JavascriptEditorModeTools
        fun ActivateDefaultMode(Tools: JavascriptEditorModeTools = definedExternally): `T$164`
        fun ActivateMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally, bToggle: Boolean = definedExternally): `T$164`
        fun DeactivateAllModes(Tools: JavascriptEditorModeTools = definedExternally): `T$164`
        fun DeactivateMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$164`
        fun DestroyMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$164`
        fun EndTracking(Tools: JavascriptEditorModeTools, Viewport: JavascriptEdViewport): Boolean
        fun EnsureNotInMode(Tools: JavascriptEditorModeTools = definedExternally, ModeId: String = definedExternally, ErrorMsg: String = definedExternally, bNotifyUser: Boolean = definedExternally): `T$165`
        fun IsDefaultModeActive(Tools: JavascriptEditorModeTools = definedExternally): `T$165`
        fun IsModeActive(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$165`
        fun IsTracking(Tools: JavascriptEditorModeTools): Boolean
        fun SetDefaultMode(Tools: JavascriptEditorModeTools = definedExternally, DefaultID: String = definedExternally): `T$164`
        fun StartTracking(Tools: JavascriptEditorModeTools, Viewport: JavascriptEdViewport): Boolean
        fun GetLevelEditorModeTools(): JavascriptEditorModeTools
    }
}

external open class JavascriptEditorMode {
    open fun clone(): JavascriptEditorMode
    open fun GetCurrentWidgetAxis(): Number
    open fun GetModeManager(): JavascriptEditorModeTools
    open fun SelectNone()
    open fun SetCurrentWidgetAxis(InAxis: Number)

    companion object {
        fun C(Other: UObject): JavascriptEditorMode
        fun C(Other: Any): JavascriptEditorMode
        fun GetCurrentWidgetAxis(Mode: JavascriptEditorMode): Number
        fun GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools
        fun SelectNone(Mode: JavascriptEditorMode)
        fun SetCurrentWidgetAxis(Mode: JavascriptEditorMode, InAxis: Number)
    }
}

external object EJavascriptEditAction {
    var Skip: String /* "Skip" */
    var Process: String /* "Process" */
    var Halt: String /* "Halt" */
    var EJavascriptEditAction_MAX: String /* "EJavascriptEditAction_MAX" */
}

external open class JavascriptEdMode : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) -> Vector>
    open var OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: Boolean, Instance: JavascriptEditorMode) -> Boolean>
    open var OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) -> Unit>
    open var OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) -> Unit>
    open var IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: Boolean, Instance: JavascriptEditorMode) -> Boolean>
    open var OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) -> Boolean>
    open var OnQuery: UnrealEngineDelegate<(Request: String, Instance: JavascriptEditorMode) -> Boolean>
    open var OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) -> Boolean>
    open var OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) -> Boolean>
    open var OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: Number, Key: Key, Delta: Number, DeltaTime: Number, Instance: JavascriptEditorMode) -> Boolean>
    open var OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */, Instance: JavascriptEditorMode) -> Boolean>
    open var OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) -> Boolean>
    open var OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: Number, Y: Number, Instance: JavascriptEditorMode) -> Boolean>
    open var OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: Number, Y: Number, Instance: JavascriptEditorMode) -> Boolean>
    open var OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) -> Boolean>
    open var OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: Number, Y: Number, Instance: JavascriptEditorMode) -> Boolean>
    open var OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) -> Boolean>
    open var OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) -> Boolean>
    open var OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) -> Unit>
    open var OnGetContent: UnrealEngineDelegate<() -> Widget>
    open var OnProcess: UnrealEngineDelegate<(Request: String, Instance: JavascriptEditorMode) -> Boolean>
    open var OnGetAction: UnrealEngineDelegate<(Request: String, Instance: JavascriptEditorMode) -> String>
    open var OnUsesToolkits: UnrealEngineDelegate<() -> Boolean>
    open var OnIsCompatibleWith: UnrealEngineDelegate<(bIsCompatibleWith: String) -> Boolean>
    open var OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) -> Unit>
    open var OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Array<Actor>, PostDuplicateSelection: Array<Actor>, bOffsetLocations: Boolean, Instance: JavascriptEditorMode) -> Unit>
    open var OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) -> Unit>
    open var OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) -> Unit>
    open var OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) -> Unit>
    open var ModeId: String
    open var SlateIcon: JavascriptSlateIcon
    open var ModeName: String
    open var bVisible: Boolean
    open var PriorityOrder: Number
    open fun Unregister()
    open fun Register()

    companion object {
        fun Load(ResourceName: String): JavascriptEdMode
        fun Find(Outer: UObject, ResourceName: String): JavascriptEdMode
        fun GetDefaultObject(): JavascriptEdMode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEdMode
        fun C(Other: UObject): JavascriptEdMode
        fun C(Other: Any): JavascriptEdMode
    }
}

external open class JavascriptEdModeLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptEdModeLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptEdModeLibrary
        fun GetDefaultObject(): JavascriptEdModeLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEdModeLibrary
        fun StartTracking(Tools: JavascriptEditorModeTools, Viewport: JavascriptEdViewport): Boolean
        fun SetDefaultMode(Tools: JavascriptEditorModeTools = definedExternally, DefaultID: String = definedExternally): `T$164`
        fun SetCurrentWidgetAxis(Mode: JavascriptEditorMode, InAxis: Number)
        fun SelectNone(Mode: JavascriptEditorMode)
        fun IsTracking(Tools: JavascriptEditorModeTools): Boolean
        fun IsModeActive(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$165`
        fun IsDefaultModeActive(Tools: JavascriptEditorModeTools = definedExternally): `T$165`
        fun GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools
        fun GetLevelEditorModeTools(): JavascriptEditorModeTools
        fun GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy
        fun GetCurrentWidgetAxis(Mode: JavascriptEditorMode): Number
        fun EnsureNotInMode(Tools: JavascriptEditorModeTools = definedExternally, ModeId: String = definedExternally, ErrorMsg: String = definedExternally, bNotifyUser: Boolean = definedExternally): `T$165`
        fun EndTracking(Tools: JavascriptEditorModeTools, Viewport: JavascriptEdViewport): Boolean
        fun DestroyMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$164`
        fun DeactivateMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally): `T$164`
        fun DeactivateAllModes(Tools: JavascriptEditorModeTools = definedExternally): `T$164`
        fun ActivateMode(Tools: JavascriptEditorModeTools = definedExternally, InID: String = definedExternally, bToggle: Boolean = definedExternally): `T$164`
        fun ActivateDefaultMode(Tools: JavascriptEditorModeTools = definedExternally): `T$164`
        fun C(Other: UObject): JavascriptEdModeLibrary
        fun C(Other: Any): JavascriptEdModeLibrary
    }
}

external open class JavascriptInputEventStateLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptInputEventStateLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptInputEventStateLibrary
        fun GetDefaultObject(): JavascriptInputEventStateLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptInputEventStateLibrary
        fun IsSpaceBarPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsShiftButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsShiftButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsMouseButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun IsButtonPressed(InputEvent: JavascriptInputEventState, InKey: Key): Boolean
        fun IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): Boolean
        fun IsAltButtonPressed(InputEvent: JavascriptInputEventState): Boolean
        fun IsAltButtonEvent(InputEvent: JavascriptInputEventState): Boolean
        fun GetKey(InputEvent: JavascriptInputEventState): Key
        fun GetInputEvent(InputEvent: JavascriptInputEventState): String /* "IE_Pressed" | "IE_Released" | "IE_Repeat" | "IE_DoubleClick" | "IE_Axis" | "IE_MAX" */
        fun C(Other: UObject): JavascriptInputEventStateLibrary
        fun C(Other: Any): JavascriptInputEventStateLibrary
    }
}

external open class JavascriptLogSubscriber : UObject {
    constructor()
    constructor(Outer: UObject)
    open var OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: String, Type: String, Category: String) -> Unit>

    companion object {
        fun Load(ResourceName: String): JavascriptLogSubscriber
        fun Find(Outer: UObject, ResourceName: String): JavascriptLogSubscriber
        fun GetDefaultObject(): JavascriptLogSubscriber
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptLogSubscriber
        fun C(Other: UObject): JavascriptLogSubscriber
        fun C(Other: Any): JavascriptLogSubscriber
    }
}

external open class JavascriptMenuLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptMenuLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptMenuLibrary
        fun GetDefaultObject(): JavascriptMenuLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptMenuLibrary
        fun UI_COMMAND_Function(This: JavascriptBindingContext, Command: JavascriptUICommand, InTextSubNamespace: String): JavascriptUICommandInfo
        fun RemoveExtension(Extender: JavascriptExtender, Extension: JavascriptExtensionBase)
        fun PushCommandList(Builder: JavascriptMenuBuilder = definedExternally, List: JavascriptUICommandList = definedExternally): `T$150`
        fun ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList, InMouseEvent: UPointerEvent): Boolean
        fun ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList, InKeyEvent: KeyEvent): Boolean
        fun PopCommandList(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun NewBindingContext(InContextName: String, InContextDesc: String, InContextParent: String, InStyleSetName: String): JavascriptBindingContext
        fun GenericCommand(What: String): JavascriptUICommandInfo
        fun EndSection(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun Destroy(Context: JavascriptBindingContext)
        fun CreateUICommandList(): JavascriptUICommandList
        fun CreateToolbarBuilder(CommandList: JavascriptUICommandList, Orientation: String /* "Orient_Horizontal" | "Orient_Vertical" | "Orient_MAX" */, UFunction: JavascriptFunction)
        fun CreateMenuBuilder(CommandList: JavascriptUICommandList, bInShouldCloseWindowAfterMenuSelection: Boolean, UFunction: JavascriptFunction)
        fun CreateMenuBarBuilder(CommandList: JavascriptUICommandList, UFunction: JavascriptFunction)
        fun Combine(Extenders: Array<JavascriptExtender>): JavascriptExtender
        fun BeginSection(Builder: JavascriptMenuBuilder = definedExternally, InExtensionHook: String = definedExternally, MenuHeadingText: String = definedExternally): `T$150`
        fun Apply(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, MenuBuilder: JavascriptMenuBuilder = definedExternally): `T$151`
        fun AddWidget(Builder: JavascriptMenuBuilder = definedExternally, Widget: Widget = definedExternally, Label: String = definedExternally, bNoIndent: Boolean = definedExternally, InTutorialHighlightName: String = definedExternally, bSearchable: Boolean = definedExternally): `T$150`
        fun AddToolBarExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun AddToolBarButtonByContext(Builder: JavascriptMenuBuilder = definedExternally, Context: JavascriptToolbarButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
        fun AddToolBarButton(Builder: JavascriptMenuBuilder = definedExternally, CommandInfo: JavascriptUICommandInfo = definedExternally): `T$150`
        fun AddSubMenu(Builder: JavascriptMenuBuilder = definedExternally, Label: String = definedExternally, Tooltip: String = definedExternally, bInOpenSubMenuOnClick: Boolean = definedExternally, UFunction: JavascriptFunction = definedExternally): `T$150`
        fun AddSeparator(Builder: JavascriptMenuBuilder = definedExternally): `T$150`
        fun AddPullDownMenu(MenuBuilder: JavascriptMenuBuilder = definedExternally, InMenuLabel: String = definedExternally, InToolTip: String = definedExternally, InPullDownMenu: JavascriptFunction = definedExternally, InExtensionHook: String = definedExternally, InTutorialHighlightName: String = definedExternally): `T$151`
        fun AddMenuExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun AddMenuEntry(Builder: JavascriptMenuBuilder = definedExternally, UObject: JavascriptMenuContext = definedExternally): `T$150`
        fun AddMenuByCommands(Builder: JavascriptMenuBuilder = definedExternally, UICommands: JavascriptUICommands = definedExternally): `T$150`
        fun AddMenubarExtension(Extender: JavascriptExtender, ExtensionHook: String, HookPosition: String /* "Before" | "After" | "First" | "EJavascriptExtensionHook_MAX" */, CommandList: JavascriptUICommandList, UFunction: JavascriptFunction): JavascriptExtensionBase
        fun AddComboButton(Builder: JavascriptMenuBuilder = definedExternally, UObject: JavascriptComboButtonContext = definedExternally, EditingObject: UObject = definedExternally): `T$150`
        fun C(Other: UObject): JavascriptMenuLibrary
        fun C(Other: Any): JavascriptMenuLibrary
    }
}

external open class JavascriptMultiBox : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnHook: UnrealEngineDelegate<(ID: String, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) -> Unit>
    open fun AddSubMenu(Builder: JavascriptMenuBuilder = definedExternally, ID: String = definedExternally, Label: String = definedExternally, Tooltip: String = definedExternally, bInOpenSubMenuOnClick: Boolean = definedExternally): `T$150`
    open fun AddPullDownMenu(Builder: JavascriptMenuBuilder = definedExternally, ID: String = definedExternally, Label: String = definedExternally, Tooltip: String = definedExternally): `T$150`

    companion object {
        fun Load(ResourceName: String): JavascriptMultiBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptMultiBox
        fun GetDefaultObject(): JavascriptMultiBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptMultiBox
        fun Bind(Builder: JavascriptMenuBuilder)
        fun C(Other: UObject): JavascriptMultiBox
        fun C(Other: Any): JavascriptMultiBox
    }
}

external object EJSCheckBoxState {
    var Unchecked: String /* "Unchecked" */
    var Checked: String /* "Checked" */
    var Undetermined: String /* "Undetermined" */
    var EJSCheckBoxState_MAX: String /* "EJSCheckBoxState_MAX" */
}

external open class JavascriptNotification : UObject {
    constructor()
    constructor(Outer: UObject)
    open var text: String
    open var bUseImage: Boolean
    open var UImage: SlateBrush
    open var FadeInDuration: Number
    open var FadeOutDuration: Number
    open var ExpireDuration: Number
    open var bUseThrobber: Boolean
    open var bUseSuccessFailIcons: Boolean
    open var bUseLargeFont: Boolean
    open var bFireAndForget: Boolean
    open var CheckBoxState: String /* "Unchecked" | "Checked" | "Undetermined" | "EJSCheckBoxState_MAX" */
    open var CheckBoxStateChanged: UnrealEngineDelegate<(State: String /* "Unchecked" | "Checked" | "Undetermined" | "ECheckBoxState_MAX" */) -> Unit>
    open var CheckBoxText: String
    open var Hyperlink: UnrealEngineDelegate<() -> Unit>
    open var HyperlinkText: String
    open var bAllowThrottleWhenFrameRateIsLow: Boolean
    open fun Success()
    open fun SetText(InText: String)
    open fun Reset()
    open fun Pending()
    open fun Fire()
    open fun Fail()
    open fun Fadeout()

    companion object {
        fun Load(ResourceName: String): JavascriptNotification
        fun Find(Outer: UObject, ResourceName: String): JavascriptNotification
        fun GetDefaultObject(): JavascriptNotification
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptNotification
        fun C(Other: UObject): JavascriptNotification
        fun C(Other: Any): JavascriptNotification
    }
}

external object EPropertyAccessResult {
    var MultipleValues: String /* "MultipleValues" */
    var Fail: String /* "Fail" */
    var Success: String /* "Success" */
    var EPropertyAccessResult_MAX: String /* "EPropertyAccessResult_MAX" */
}

external interface `T$166` {
    var OutValue: JavascriptRef
    var `$`: String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
}

external interface `T$167` {
    var OutValue: UObject
    var `$`: String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
}

external interface `T$168` {
    var OutValue: String
    var `$`: String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
}

external open class JavascriptPropertyHandle {
    open fun clone(): JavascriptPropertyHandle
    open fun CreatePropertyNameWidget(NameOverride: String, ToolTipOverride: String, bDisplayResetToDefault: Boolean, bHideText: Boolean, bHideThumbnail: Boolean): JavascriptSlateWidget
    open fun CreatePropertyValueWidget(bHideDefaultPropertyButtons: Boolean): JavascriptSlateWidget
    open fun GeneratePathToProperty(): String
    open fun GetChildHandle(Name: String): JavascriptPropertyHandle
    open fun GetIndexInArray(): Number
    open fun GetJavascriptRefValue(OutValue: JavascriptRef = definedExternally): `T$166`
    open fun GetKeyHandle(): JavascriptPropertyHandle
    open fun GetMetaData(Key: String): String
    open fun GetObjectValue(OutValue: UObject = definedExternally): `T$167`
    open fun GetOuterObjects(): Array<UObject>
    open fun GetParentHandle(): JavascriptPropertyHandle
    open fun GetProperty(): Any
    open fun GetValueAsFormattedString(OutValue: String = definedExternally): `T$168`
    open fun IsArrayProperty(): Boolean
    open fun IsArrayPropertyWithValueType(): Boolean
    open fun IsEditConst(): Boolean
    open fun IsValidHandle(): Boolean
    open fun SetJavascriptRefValue(InValue: JavascriptRef): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
    open fun SetObjectValue(InValue: UObject): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
    open fun SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization)
    open fun SetValueFromFormattedString(InValue: String): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */

    companion object {
        fun C(Other: UObject): JavascriptPropertyHandle
        fun C(Other: Any): JavascriptPropertyHandle
        fun CreatePropertyNameWidget(Handle: JavascriptPropertyHandle, NameOverride: String, ToolTipOverride: String, bDisplayResetToDefault: Boolean, bHideText: Boolean, bHideThumbnail: Boolean): JavascriptSlateWidget
        fun CreatePropertyValueWidget(Handle: JavascriptPropertyHandle, bHideDefaultPropertyButtons: Boolean): JavascriptSlateWidget
        fun GeneratePathToProperty(Handle: JavascriptPropertyHandle): String
        fun GetChildHandle(Parent: JavascriptPropertyHandle, Name: String): JavascriptPropertyHandle
        fun GetIndexInArray(Handle: JavascriptPropertyHandle): Number
        fun GetJavascriptRefValue(Handle: JavascriptPropertyHandle, OutValue: JavascriptRef = definedExternally): `T$166`
        fun GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle
        fun GetMetaData(Handle: JavascriptPropertyHandle, Key: String): String
        fun GetObjectValue(Handle: JavascriptPropertyHandle, OutValue: UObject = definedExternally): `T$167`
        fun GetOuterObjects(Handle: JavascriptPropertyHandle): Array<UObject>
        fun GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle
        fun GetProperty(Handle: JavascriptPropertyHandle): Any
        fun GetValueAsFormattedString(Handle: JavascriptPropertyHandle, OutValue: String = definedExternally): `T$168`
        fun IsArrayProperty(Handle: JavascriptPropertyHandle): Boolean
        fun IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): Boolean
        fun IsEditConst(Handle: JavascriptPropertyHandle): Boolean
        fun IsValidHandle(Handle: JavascriptPropertyHandle): Boolean
        fun SetJavascriptRefValue(Handle: JavascriptPropertyHandle, InValue: JavascriptRef): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
        fun SetObjectValue(Handle: JavascriptPropertyHandle, InValue: UObject): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
        fun SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle, Custom: JavascriptPropertyCustomization)
        fun SetValueFromFormattedString(Handle: JavascriptPropertyHandle, InValue: String): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
    }
}

external open class JavascriptDetailWidgetDecl {
    open fun clone(): JavascriptDetailWidgetDecl
    open fun SetContent(Widget: JavascriptSlateWidget)
    open fun SetHAlign(InAlignment: String /* "HAlign_Fill" | "HAlign_Left" | "HAlign_Center" | "HAlign_Right" | "HAlign_MAX" */)
    open fun SetMaxDesiredWidth(MaxWidth: Number)
    open fun SetMinDesiredWidth(MinWidth: Number)
    open fun SetVAlign(InAlignment: String /* "VAlign_Fill" | "VAlign_Top" | "VAlign_Center" | "VAlign_Bottom" | "VAlign_MAX" */)

    companion object {
        fun C(Other: UObject): JavascriptDetailWidgetDecl
        fun C(Other: Any): JavascriptDetailWidgetDecl
        fun SetContent(Decl: JavascriptDetailWidgetDecl, Widget: JavascriptSlateWidget)
        fun SetHAlign(Decl: JavascriptDetailWidgetDecl, InAlignment: String /* "HAlign_Fill" | "HAlign_Left" | "HAlign_Center" | "HAlign_Right" | "HAlign_MAX" */)
        fun SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl, MaxWidth: Number)
        fun SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl, MinWidth: Number)
        fun SetVAlign(Decl: JavascriptDetailWidgetDecl, InAlignment: String /* "VAlign_Fill" | "VAlign_Top" | "VAlign_Center" | "VAlign_Bottom" | "VAlign_MAX" */)
    }
}

external open class JavascriptDetailWidgetRow {
    open fun clone(): JavascriptDetailWidgetRow
    open fun NameContent(): JavascriptDetailWidgetDecl
    open fun SetFilterString(InFilterString: String)
    open fun ValueContent(): JavascriptDetailWidgetDecl
    open fun WholeRowContent(): JavascriptDetailWidgetDecl

    companion object {
        fun C(Other: UObject): JavascriptDetailWidgetRow
        fun C(Other: Any): JavascriptDetailWidgetRow
        fun NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
        fun SetFilterString(Row: JavascriptDetailWidgetRow, InFilterString: String)
        fun ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
        fun WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
    }
}

external open class JavascriptPropertyTypeCustomizationUtils {
    open fun clone(): JavascriptPropertyTypeCustomizationUtils
    open fun RequestRefresh(bForce: Boolean)

    companion object {
        fun C(Other: UObject): JavascriptPropertyTypeCustomizationUtils
        fun C(Other: Any): JavascriptPropertyTypeCustomizationUtils
        fun RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils, bForce: Boolean)
    }
}

external open class JavascriptSimpleGetBoolDelegateWrapper : UObject {
    constructor()
    constructor(Outer: UObject)
    open var delegate: UnrealEngineDelegate<() -> Boolean>

    companion object {
        fun Load(ResourceName: String): JavascriptSimpleGetBoolDelegateWrapper
        fun Find(Outer: UObject, ResourceName: String): JavascriptSimpleGetBoolDelegateWrapper
        fun GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptSimpleGetBoolDelegateWrapper
        fun C(Other: UObject): JavascriptSimpleGetBoolDelegateWrapper
        fun C(Other: Any): JavascriptSimpleGetBoolDelegateWrapper
    }
}

external open class JavascriptDetailPropertyRow {
    open fun clone(): JavascriptDetailPropertyRow
    open fun BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper)
    open fun CustomWidget(bShowChildren: Boolean): JavascriptDetailWidgetRow

    companion object {
        fun C(Other: UObject): JavascriptDetailPropertyRow
        fun C(Other: Any): JavascriptDetailPropertyRow
        fun BindVisibility(Row: JavascriptDetailPropertyRow, Wrapper: JavascriptSimpleGetBoolDelegateWrapper)
        fun CustomWidget(Row: JavascriptDetailPropertyRow, bShowChildren: Boolean): JavascriptDetailWidgetRow
    }
}

external interface `T$169` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external interface `T$170` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external interface `T$171` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external interface `T$172` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external open class JavascriptDetailChildrenBuilder {
    open fun clone(): JavascriptDetailChildrenBuilder
    open fun AddChildContent(SearchString: String): JavascriptDetailWidgetRow
    open fun AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow
    open fun AddExternalObjectProperty(Objects: Array<UObject> = definedExternally, PropertyName: String = definedExternally, UniqueIdName: String = definedExternally, bAllowChildrenOverride: Boolean = definedExternally, bCreateCategoryNodesOverride: Boolean = definedExternally): `T$169`
    open fun AddExternalObjects(Objects: Array<UObject> = definedExternally, UniqueIdName: String = definedExternally): `T$170`
    open fun GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget

    companion object {
        fun C(Other: UObject): JavascriptDetailChildrenBuilder
        fun C(Other: Any): JavascriptDetailChildrenBuilder
        fun AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder, SearchString: String): JavascriptDetailWidgetRow
        fun AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder, PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow
        fun AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder, Objects: Array<UObject> = definedExternally, PropertyName: String = definedExternally, UniqueIdName: String = definedExternally, bAllowChildrenOverride: Boolean = definedExternally, bCreateCategoryNodesOverride: Boolean = definedExternally): `T$171`
        fun AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder, Objects: Array<UObject> = definedExternally, UniqueIdName: String = definedExternally): `T$172`
        fun GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder, StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget
    }
}

external open class JavascriptPropertyCustomization : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PropertyTypeName: String
    open var OnDestroy: UnrealEngineDelegate<(ID: Number) -> Unit>
    open var OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: Number) -> Unit>
    open var OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: Number) -> Unit>
    open var OnPropertyValueChanged: UnrealEngineMulticastDelegate<() -> Unit>
    open fun Unregister()
    open fun Register()

    companion object {
        fun Load(ResourceName: String): JavascriptPropertyCustomization
        fun Find(Outer: UObject, ResourceName: String): JavascriptPropertyCustomization
        fun GetDefaultObject(): JavascriptPropertyCustomization
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptPropertyCustomization
        fun C(Other: UObject): JavascriptPropertyCustomization
        fun C(Other: Any): JavascriptPropertyCustomization
    }
}

external interface `T$173` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external interface `T$174` {
    var Objects: Array<UObject>
    var `$`: JavascriptDetailPropertyRow
}

external open class JavascriptPropertyCustomizationLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptPropertyCustomizationLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptPropertyCustomizationLibrary
        fun GetDefaultObject(): JavascriptPropertyCustomizationLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptPropertyCustomizationLibrary
        fun WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
        fun ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
        fun SetValueFromFormattedString(Handle: JavascriptPropertyHandle, InValue: String): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
        fun SetVAlign(Decl: JavascriptDetailWidgetDecl, InAlignment: String /* "VAlign_Fill" | "VAlign_Top" | "VAlign_Center" | "VAlign_Bottom" | "VAlign_MAX" */)
        fun SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle, Custom: JavascriptPropertyCustomization)
        fun SetObjectValue(Handle: JavascriptPropertyHandle, InValue: UObject): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
        fun SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl, MinWidth: Number)
        fun SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl, MaxWidth: Number)
        fun SetJavascriptRefValue(Handle: JavascriptPropertyHandle, InValue: JavascriptRef): String /* "MultipleValues" | "Fail" | "Success" | "EPropertyAccessResult_MAX" */
        fun SetHAlign(Decl: JavascriptDetailWidgetDecl, InAlignment: String /* "HAlign_Fill" | "HAlign_Left" | "HAlign_Center" | "HAlign_Right" | "HAlign_MAX" */)
        fun SetFilterString(Row: JavascriptDetailWidgetRow, InFilterString: String)
        fun SetContent(Decl: JavascriptDetailWidgetDecl, Widget: JavascriptSlateWidget)
        fun RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils, bForce: Boolean)
        fun NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl
        fun IsValidHandle(Handle: JavascriptPropertyHandle): Boolean
        fun IsEditConst(Handle: JavascriptPropertyHandle): Boolean
        fun IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): Boolean
        fun IsArrayProperty(Handle: JavascriptPropertyHandle): Boolean
        fun GetValueAsFormattedString(Handle: JavascriptPropertyHandle, OutValue: String = definedExternally): `T$168`
        fun GetProperty(Handle: JavascriptPropertyHandle): Any
        fun GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle
        fun GetOuterObjects(Handle: JavascriptPropertyHandle): Array<UObject>
        fun GetObjectValue(Handle: JavascriptPropertyHandle, OutValue: UObject = definedExternally): `T$167`
        fun GetMetaData(Handle: JavascriptPropertyHandle, Key: String): String
        fun GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle
        fun GetJavascriptRefValue(Handle: JavascriptPropertyHandle, OutValue: JavascriptRef = definedExternally): `T$166`
        fun GetIndexInArray(Handle: JavascriptPropertyHandle): Number
        fun GetChildHandle(Parent: JavascriptPropertyHandle, Name: String): JavascriptPropertyHandle
        fun GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder, StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget
        fun GeneratePathToProperty(Handle: JavascriptPropertyHandle): String
        fun CustomWidget(Row: JavascriptDetailPropertyRow, bShowChildren: Boolean): JavascriptDetailWidgetRow
        fun CreatePropertyValueWidget(Handle: JavascriptPropertyHandle, bHideDefaultPropertyButtons: Boolean): JavascriptSlateWidget
        fun CreatePropertyNameWidget(Handle: JavascriptPropertyHandle, NameOverride: String, ToolTipOverride: String, bDisplayResetToDefault: Boolean, bHideText: Boolean, bHideThumbnail: Boolean): JavascriptSlateWidget
        fun BindVisibility(Row: JavascriptDetailPropertyRow, Wrapper: JavascriptSimpleGetBoolDelegateWrapper)
        fun AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder, Objects: Array<UObject> = definedExternally, UniqueIdName: String = definedExternally): `T$173`
        fun AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder, Objects: Array<UObject> = definedExternally, PropertyName: String = definedExternally, UniqueIdName: String = definedExternally, bAllowChildrenOverride: Boolean = definedExternally, bCreateCategoryNodesOverride: Boolean = definedExternally): `T$174`
        fun AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder, PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow
        fun AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder, SearchString: String): JavascriptDetailWidgetRow
        fun C(Other: UObject): JavascriptPropertyCustomizationLibrary
        fun C(Other: Any): JavascriptPropertyCustomizationLibrary
    }
}

external object EPropertyEditorNameAreaSettings {
    var HideNameArea: String /* "HideNameArea" */
    var ObjectsUseNameArea: String /* "ObjectsUseNameArea" */
    var ActorsUseNameArea: String /* "ActorsUseNameArea" */
    var ComponentsAndActorsUseNameArea: String /* "ComponentsAndActorsUseNameArea" */
    var EPropertyEditorNameAreaSettings_MAX: String /* "EPropertyEditorNameAreaSettings_MAX" */
}

external open class PropertyEditor : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnChange: UnrealEngineMulticastDelegate<(PropertyName: String, MemberPropertyName: String) -> Unit>
    open var bUpdateFromSelection: Boolean
    open var bLockable: Boolean
    open var bAllowSearch: Boolean
    open var bHideSelectionTip: Boolean
    open var bReadOnly: Boolean
    open var bEnablePropertyPath: Boolean
    open var NameAreaSettings: String /* "HideNameArea" | "ObjectsUseNameArea" | "ActorsUseNameArea" | "ComponentsAndActorsUseNameArea" | "EPropertyEditorNameAreaSettings_MAX" */
    open fun SetObjects(Objects: Array<UObject>, bForceRefresh: Boolean, bOverrideLock: Boolean)
    open fun SetObject(UObject: UObject, bForceRefresh: Boolean)
    open fun IsPropertyVisible(PropertName: String, ParentPropertyName: String, PropertyPaths: Array<String>): Boolean
    open fun IsPropertyReadOnly(PropertyName: String, ParentPropertyName: String, PropertyPaths: Array<String>): Boolean
    open fun ForceRefresh()
    open fun Destruct()
    open fun Construct()

    companion object {
        fun Load(ResourceName: String): PropertyEditor
        fun Find(Outer: UObject, ResourceName: String): PropertyEditor
        fun GetDefaultObject(): PropertyEditor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PropertyEditor
        fun C(Other: UObject): PropertyEditor
        fun C(Other: Any): PropertyEditor
    }
}

external open class JavascriptPropertyTable : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnGenerateInvalidCellWidget: UnrealEngineDelegate<() -> JavascriptSlateWidget>
    open var bUseCustomColumns: Boolean
    open fun SetEditingObjects(InEditingObjects: Array<UObject>)
    open fun GetSelectedTableObjects(): Array<UObject>
    open fun GetEditingObjects(): Array<UObject>

    companion object {
        fun Load(ResourceName: String): JavascriptPropertyTable
        fun Find(Outer: UObject, ResourceName: String): JavascriptPropertyTable
        fun GetDefaultObject(): JavascriptPropertyTable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptPropertyTable
        fun C(Other: UObject): JavascriptPropertyTable
        fun C(Other: Any): JavascriptPropertyTable
    }
}

external interface `T$175` {
    var InMesh: JavascriptRawMesh
}

external interface `T$176` {
    var OutMesh: JavascriptRawMesh
}

external interface `T$177` {
    var RawMesh: JavascriptRawMesh
}

external open class JavascriptRawMeshLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptRawMeshLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptRawMeshLibrary
        fun GetDefaultObject(): JavascriptRawMeshLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptRawMeshLibrary
        fun SetSectionInfo(StaticMesh: StaticMesh, LODIndex: Number, SectionIndex: Number, Info: MeshSectionInfo)
        fun SaveRawMesh(StaticMesh: StaticMesh, SourceModelIndex: Number, InMesh: JavascriptRawMesh = definedExternally): `T$175`
        fun LoadRawMesh(StaticMesh: StaticMesh, SourceModelIndex: Number, OutMesh: JavascriptRawMesh = definedExternally): `T$176`
        fun IsValidOrFixable(RawMesh: JavascriptRawMesh): Boolean
        fun IsValid(RawMesh: JavascriptRawMesh): Boolean
        fun GetWedgePosition(RawMesh: JavascriptRawMesh, WedgeIndex: Number): Vector
        fun GetSectionInfo(StaticMesh: StaticMesh, LODIndex: Number, SectionIndex: Number): MeshSectionInfo
        fun Empty(RawMesh: JavascriptRawMesh = definedExternally): `T$177`
        fun CompactMaterialIndices(RawMesh: JavascriptRawMesh = definedExternally): `T$177`
        fun Build(StaticMesh: StaticMesh)
        fun C(Other: UObject): JavascriptRawMeshLibrary
        fun C(Other: Any): JavascriptRawMeshLibrary
    }
}

external open class JavascriptScrubControlPanel : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open var SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() -> Unit>
    open fun SetViewRange(NewMin: Number, NewMax: Number)
    open fun SetSumFrames(NewSumFrames: Number)
    open fun SetPlaybackPosition(NewTime: Number)
    open fun SetLooping(NewbLooping: Boolean)
    open fun SetFramesPerSecond(NewFramesPerSecond: Number)
    open fun IsLooping(): Boolean
    open fun GetViewRangeMin(): Number
    open fun GetViewRangeMax(): Number
    open fun GetTotalSequenceLength(): Number
    open fun GetTotalFrameCount(): Any
    open fun GetPlaybackPosition(): Number
    open fun GetFramesPerSecond(): Number

    companion object {
        fun Load(ResourceName: String): JavascriptScrubControlPanel
        fun Find(Outer: UObject, ResourceName: String): JavascriptScrubControlPanel
        fun GetDefaultObject(): JavascriptScrubControlPanel
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptScrubControlPanel
        fun C(Other: UObject): JavascriptScrubControlPanel
        fun C(Other: Any): JavascriptScrubControlPanel
    }
}

external open class JavascriptWebBrowser : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnUrlChanged: UnrealEngineMulticastDelegate<(text: String) -> Unit>
    open var OnBeforePopup: UnrealEngineMulticastDelegate<(URL: String, Frame: String) -> Unit>
    open var bShowAddressBar: Boolean
    open var bShowControls: Boolean
    open var bSupportsThumbMouseButtonNavigation: Boolean
    open fun LoadURL(NewURL: String)
    open fun LoadString(Contents: String, DummyURL: String)
    open fun GetUrl(): String
    open fun GetTitleText(): String
    open fun ExecuteJavascript(ScriptText: String)

    companion object {
        fun Load(ResourceName: String): JavascriptWebBrowser
        fun Find(Outer: UObject, ResourceName: String): JavascriptWebBrowser
        fun GetDefaultObject(): JavascriptWebBrowser
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptWebBrowser
        fun C(Other: UObject): JavascriptWebBrowser
        fun C(Other: Any): JavascriptWebBrowser
    }
}

external open class JavascriptPinParams {
    open var ContainerType: String /* "None" | "Array" | "Set" | "Map" | "EPinContainerType_MAX" */
    open var bIsReference: Boolean
    open var bIsConst: Boolean
    open var index: Number
    open fun clone(): JavascriptPinParams

    companion object {
        fun C(Other: UObject): JavascriptPinParams
        fun C(Other: Any): JavascriptPinParams
    }
}

external open class JavascriptGraphEdNode : EdGraphNode {
    constructor()
    constructor(Outer: UObject)
    open var BackgroundColor: SlateColor
    open var GraphNode: UObject
    open var IsTitleOnly: Boolean
    open var IsCustomNode: Boolean
    open var WidgetFinalized: JavascriptFunction
    open var Bidirectional: Boolean
    open var PriorityOrder: Number
    open fun UpdateSlate()
    open fun SetVisible(bVisible: Boolean)
    open fun SetTitleSelectionMode(InTitleHeight: Number)
    open fun SetEnable(bEnable: Boolean)
    open fun ResetTitleSelectionMode()
    open fun RemovePinByName(PinName: String): Boolean
    open fun RemovePin(Pin: JavascriptEdGraphPin): Boolean
    open fun GetVisible(): Boolean
    open fun GetNumOfPins(Direction: String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */): Number
    open fun GetDesiredSize(): Vector2D
    open fun CreatePin(Dir: String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */, PinCategory: String, PinSubCategory: String, PinSubCategoryObject: UObject, PinName: String, PinToolTip: String, PinDisplayName: String, InPinParams: JavascriptPinParams): JavascriptEdGraphPin
    open fun GetOwnerPanel(): JavascriptSlateWidget

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEdNode
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEdNode
        fun GetDefaultObject(): JavascriptGraphEdNode
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEdNode
        fun C(Other: UObject): JavascriptGraphEdNode
        fun C(Other: Any): JavascriptGraphEdNode
        fun GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget
    }
}

external open class JavascriptSlateEdNode {
    open fun clone(): JavascriptSlateEdNode
    open fun AddPinToHoverSet(Pin: JavascriptEdGraphPin)
    open fun RemovePinFromHoverSet(Pin: JavascriptEdGraphPin)

    companion object {
        fun C(Other: UObject): JavascriptSlateEdNode
        fun C(Other: Any): JavascriptSlateEdNode
        fun AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode, Pin: JavascriptEdGraphPin)
        fun RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode, Pin: JavascriptEdGraphPin)
    }
}

external open class JavascriptPerformSecondPassLayoutContainer {
    open var PrevNode: EdGraphNode
    open var NextNode: EdGraphNode
    open var NodeIndex: Number
    open var MaxNodes: Number
    open fun clone(): JavascriptPerformSecondPassLayoutContainer

    companion object {
        fun C(Other: UObject): JavascriptPerformSecondPassLayoutContainer
        fun C(Other: Any): JavascriptPerformSecondPassLayoutContainer
    }
}

external open class JavascriptConnectionParams {
    open var WireColor: LinearColor
    open var AssociatedPin1: JavascriptEdGraphPin
    open var AssociatedPin2: JavascriptEdGraphPin
    open var WireThickness: Number
    open var bDrawBubbles: Boolean
    open var bUserFlag1: Boolean
    open var bUserFlag2: Boolean
    open var StartDirection: String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */
    open var EndDirection: String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */
    open fun clone(): JavascriptConnectionParams

    companion object {
        fun C(Other: UObject): JavascriptConnectionParams
        fun C(Other: Any): JavascriptConnectionParams
    }
}

external interface `T$178` {
    var Params: JavascriptConnectionParams
}

external open class JavascriptGraphConnectionDrawingPolicyContainer {
    open fun clone(): JavascriptGraphConnectionDrawingPolicyContainer
    open fun ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Thickness: Number, WireColor: LinearColor)
    open fun DetermineWiringStyle(OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Params: JavascriptConnectionParams = definedExternally): `T$178`
    open fun DrawConnection(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams)
    open fun DrawSplineWithArrow(StartAnchorPoint: Vector2D, EndAnchorPoint: Vector2D, Params: JavascriptConnectionParams)
    open fun GetHorveredPinNum(): Number
    open fun IsContainedHoveredPins(Pin: JavascriptEdGraphPin): Boolean
    open fun MakeRotatedBox(ArrowDrawPos: Vector2D, AngleInRadians: Number, WireColor: LinearColor)

    companion object {
        fun C(Other: UObject): JavascriptGraphConnectionDrawingPolicyContainer
        fun C(Other: Any): JavascriptGraphConnectionDrawingPolicyContainer
        fun ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer, OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Thickness: Number, WireColor: LinearColor)
        fun DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer, OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Params: JavascriptConnectionParams = definedExternally): `T$178`
        fun DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer, A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams)
        fun DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer, StartAnchorPoint: Vector2D, EndAnchorPoint: Vector2D, Params: JavascriptConnectionParams)
        fun GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): Number
        fun IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer, Pin: JavascriptEdGraphPin): Boolean
        fun MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowDrawPos: Vector2D, AngleInRadians: Number, WireColor: LinearColor)
    }
}

external object EGraphSchemaGetStringQuery {
    var Description: String /* "Description" */
    var Title: String /* "Title" */
    var EGraphSchemaGetStringQuery_MAX: String /* "EGraphSchemaGetStringQuery_MAX" */
}

external open class JavascriptGraphMenuBuilder : JavascriptMenuBuilder {
    open var Graph: EdGraph
    open var GraphNode: EdGraphNode
    open var GraphPin: JavascriptEdGraphPin
    open var bIsDebugging: Boolean
    override fun clone(): JavascriptGraphMenuBuilder

    companion object {
        fun C(Other: UObject): JavascriptGraphMenuBuilder
        fun C(Other: Any): JavascriptGraphMenuBuilder
    }
}

external object ECanCreateConnectionResponse {
    var CONNECT_RESPONSE_MAKE: String /* "CONNECT_RESPONSE_MAKE" */
    var CONNECT_RESPONSE_DISALLOW: String /* "CONNECT_RESPONSE_DISALLOW" */
    var CONNECT_RESPONSE_BREAK_OTHERS_A: String /* "CONNECT_RESPONSE_BREAK_OTHERS_A" */
    var CONNECT_RESPONSE_BREAK_OTHERS_B: String /* "CONNECT_RESPONSE_BREAK_OTHERS_B" */
    var CONNECT_RESPONSE_BREAK_OTHERS_AB: String /* "CONNECT_RESPONSE_BREAK_OTHERS_AB" */
    var CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE: String /* "CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE" */
    var CONNECT_RESPONSE_MAX: String /* "CONNECT_RESPONSE_MAX" */
}

external open class JavascriptPinConnectionResponse {
    open var Message: String
    open var Response: String /* "CONNECT_RESPONSE_MAKE" | "CONNECT_RESPONSE_DISALLOW" | "CONNECT_RESPONSE_BREAK_OTHERS_A" | "CONNECT_RESPONSE_BREAK_OTHERS_B" | "CONNECT_RESPONSE_BREAK_OTHERS_AB" | "CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE" | "CONNECT_RESPONSE_MAX" */
    open fun clone(): JavascriptPinConnectionResponse

    companion object {
        fun C(Other: UObject): JavascriptPinConnectionResponse
        fun C(Other: Any): JavascriptPinConnectionResponse
    }
}

external open class EdGraphSchemaAction {
    open var MenuDescription: String
    open var TooltipDescription: String
    open var Category: String
    open var Keywords: String
    open var Grouping: Number
    open var SectionID: Number
    open var MenuDescriptionArray: Array<String>
    open var FullSearchTitlesArray: Array<String>
    open var FullSearchKeywordsArray: Array<String>
    open var FullSearchCategoryArray: Array<String>
    open var LocalizedMenuDescriptionArray: Array<String>
    open var LocalizedFullSearchTitlesArray: Array<String>
    open var LocalizedFullSearchKeywordsArray: Array<String>
    open var LocalizedFullSearchCategoryArray: Array<String>
    open var SearchText: String
    open fun clone(): EdGraphSchemaAction

    companion object {
        fun C(Other: UObject): EdGraphSchemaAction
        fun C(Other: Any): EdGraphSchemaAction
    }
}

external open class PerformActionContext {
    open var ParentGraph: EdGraph
    open var FromPins: Array<JavascriptEdGraphPin>
    open var Location: Vector2D
    open var bSelectNewNode: Boolean
    open fun clone(): PerformActionContext

    companion object {
        fun C(Other: UObject): PerformActionContext
        fun C(Other: Any): PerformActionContext
    }
}

external open class JavascriptArrangedWidget {
    open fun clone(): JavascriptArrangedWidget

    companion object {
        fun C(Other: UObject): JavascriptArrangedWidget
        fun C(Other: Any): JavascriptArrangedWidget
    }
}

external open class JavascriptPinWidget {
    open fun clone(): JavascriptPinWidget

    companion object {
        fun C(Other: UObject): JavascriptPinWidget
        fun C(Other: Any): JavascriptPinWidget
    }
}

external open class JavascriptDetermineLinkGeometryContainer {
    open fun clone(): JavascriptDetermineLinkGeometryContainer
    open fun FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget
    open fun FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget
    open fun GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget
    open fun GetOutputPinWidget(): JavascriptPinWidget

    companion object {
        fun C(Other: UObject): JavascriptDetermineLinkGeometryContainer
        fun C(Other: Any): JavascriptDetermineLinkGeometryContainer
        fun FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer, PinWidget: JavascriptPinWidget): JavascriptArrangedWidget
        fun FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer, Pin: JavascriptEdGraphPin): JavascriptPinWidget
        fun GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer, UNode: EdGraphNode): JavascriptArrangedWidget
        fun GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget
    }
}

external open class JavascriptGraphAssetGraphSchema : EdGraphSchema {
    constructor()
    constructor(Outer: UObject)
    open var OnGetPinColor: UnrealEngineDelegate<(bHovered: Boolean, Pin: JavascriptEdGraphPin) -> SlateColor>
    open var OnGetPinTextColor: UnrealEngineDelegate<(bHovered: Boolean, Pin: JavascriptEdGraphPin) -> SlateColor>
    open var OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> Boolean>
    open var OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: Boolean, Pin: JavascriptEdGraphPin) -> String>
    open var OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> Unit>
    open var OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) -> Unit>
    open var OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) -> Unit>
    open var OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) -> Unit>
    open var OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: Boolean, MouseZone: Number, UPointerEvent: UPointerEvent) -> Boolean>
    open var OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) -> Boolean>
    open var OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) -> Boolean>
    open var OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> JavascriptPerformSecondPassLayoutContainer>
    open var OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> Boolean>
    open var OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) -> Boolean>
    open var OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) -> JavascriptSlateWidget>
    open var OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> JavascriptSlateWidget>
    open var OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> JavascriptSlateWidget>
    open var OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> JavascriptSlateWidget>
    open var OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> Boolean>
    open var OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> Boolean>
    open var OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> Boolean>
    open var OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> JavascriptSlateWidget>
    open var OnUsingNodeWidgetMap: UnrealEngineDelegate<() -> Boolean>
    open var OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) -> Unit>
    open var OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) -> Vector2D>
    open var OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) -> Boolean>
    open var OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) -> Boolean>
    open var OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) -> Boolean>
    open var OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> JavascriptSlateWidget>
    open var OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> JavascriptSlateWidget>
    open var OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> JavascriptSlateWidget>
    open var OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: String /* "Description" | "Title" | "EGraphSchemaGetStringQuery_MAX" */) -> String>
    open var OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) -> Unit>
    open var OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) -> Unit>
    open var OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) -> JavascriptSlateWidget>
    open var OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) -> JavascriptPinConnectionResponse>
    open var OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) -> EdGraphNode>
    open var OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) -> Array<EdGraphSchemaAction>>
    open var OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) -> Unit>
    open var OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) -> Boolean>
    open var OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) -> Boolean>
    open var OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> Boolean>
    open var OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) -> Unit>
    open var OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> Boolean>
    open var OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) -> Unit>
    open var OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() -> Boolean>
    open var OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) -> Boolean>
    open var OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) -> Boolean>
    open var OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) -> Boolean>
    open var OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) -> Boolean>
    open fun BreakSinglePinLink(SourcePin: JavascriptEdGraphPin, TargetPin: JavascriptEdGraphPin)
    open fun BreakPinLinks(TargetPin: JavascriptEdGraphPin, bSendsNodeNotifcation: Boolean)
    open fun BreakNodeLinks(TargetNode: EdGraphNode)

    companion object {
        fun Load(ResourceName: String): JavascriptGraphAssetGraphSchema
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphAssetGraphSchema
        fun GetDefaultObject(): JavascriptGraphAssetGraphSchema
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphAssetGraphSchema
        fun C(Other: UObject): JavascriptGraphAssetGraphSchema
        fun C(Other: Any): JavascriptGraphAssetGraphSchema
    }
}

external open class JavascriptGraphEdCustomNodeWidget : Widget {
    constructor()
    constructor(Outer: UObject)
    open var EdNode: JavascriptGraphEdNode
    open fun SetNode(InEdNode: JavascriptGraphEdNode)
    open fun SetGraphPanel(InGraphPanel: JavascriptSlateWidget)

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEdCustomNodeWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEdCustomNodeWidget
        fun GetDefaultObject(): JavascriptGraphEdCustomNodeWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEdCustomNodeWidget
        fun C(Other: UObject): JavascriptGraphEdCustomNodeWidget
        fun C(Other: Any): JavascriptGraphEdCustomNodeWidget
    }
}

external interface `T$179` {
    var Creator: JavascriptNodeCreator
}

external open class JavascriptNodeCreator {
    open var UNode: JavascriptGraphEdNode
    open fun clone(): JavascriptNodeCreator
    open fun Finalize(): `T$179`

    companion object {
        fun C(Other: UObject): JavascriptNodeCreator
        fun C(Other: Any): JavascriptNodeCreator
        fun Finalize(Creator: JavascriptNodeCreator = definedExternally): `T$179`
    }
}

external open class JavascriptGraphEdGraph : EdGraph {
    constructor()
    constructor(Outer: UObject)
    open var CustomNodes: Array<JavascriptGraphEdNode>
    open fun RebuildGenericGraph()
    open fun CustomNodeCreator(): JavascriptNodeCreator
    open fun NodeCreator(bSelectNewNode: Boolean): JavascriptNodeCreator

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEdGraph
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEdGraph
        fun GetDefaultObject(): JavascriptGraphEdGraph
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEdGraph
        fun C(Other: UObject): JavascriptGraphEdGraph
        fun C(Other: Any): JavascriptGraphEdGraph
        fun CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator
        fun NodeCreator(Graph: JavascriptGraphEdGraph, bSelectNewNode: Boolean): JavascriptNodeCreator
    }
}

external open class JavascriptGraphEditorLibrary : BlueprintFunctionLibrary {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEditorLibrary
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEditorLibrary
        fun GetDefaultObject(): JavascriptGraphEditorLibrary
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEditorLibrary
        fun TryConnection(Schema: EdGraphSchema, A: JavascriptEdGraphPin, B: JavascriptEdGraphPin)
        fun SetPinType(Pin: JavascriptEdGraphPin, PinType: EdGraphPinType)
        fun SetPinInfo(A: JavascriptEdGraphPin, InPinName: String, InPinToolTip: String)
        fun SetPinHidden(A: JavascriptEdGraphPin, bHidden: Boolean)
        fun SetPinContainerType(A: JavascriptEdGraphPin, ContainerType: String /* "None" | "Array" | "Set" | "Map" | "EJavascriptPinContainerType_MAX" */)
        fun SetParentPin(A: JavascriptEdGraphPin, Parent: JavascriptEdGraphPin)
        fun SetNodeMetaData(Schema: EdGraphSchema, UNode: EdGraphNode, KeyValue: String): Boolean
        fun ResizeNode(UNode: EdGraphNode, NewSize: Vector2D)
        fun RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode, Pin: JavascriptEdGraphPin)
        fun NodeCreator(Graph: JavascriptGraphEdGraph, bSelectNewNode: Boolean): JavascriptNodeCreator
        fun MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowDrawPos: Vector2D, AngleInRadians: Number, WireColor: LinearColor)
        fun MakeLinkTo(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin)
        fun IsValid(A: JavascriptEdGraphPin): Boolean
        fun IsPinHidden(A: JavascriptEdGraphPin): Boolean
        fun IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer, Pin: JavascriptEdGraphPin): Boolean
        fun GetSubPins(A: JavascriptEdGraphPin): Array<JavascriptEdGraphPin>
        fun GetPinType(A: JavascriptEdGraphPin): EdGraphPinType
        fun GetPins(UNode: EdGraphNode): Array<JavascriptEdGraphPin>
        fun GetPinName(A: JavascriptEdGraphPin): String
        fun GetPinIndex(A: JavascriptEdGraphPin): Number
        fun GetPinGUID(A: JavascriptEdGraphPin): Guid
        fun GetPinContainerType(A: JavascriptEdGraphPin): String /* "None" | "Array" | "Set" | "Map" | "EJavascriptPinContainerType_MAX" */
        fun GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin
        fun GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode
        fun GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget
        fun GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget
        fun GetLinkedTo(A: JavascriptEdGraphPin): Array<JavascriptEdGraphPin>
        fun GetLinkedPinNum(A: JavascriptEdGraphPin): Number
        fun GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): Number
        fun GetDirection(A: JavascriptEdGraphPin): String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */
        fun GetDefaultObject(): JavascriptEdGraphPin
        fun GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer, UNode: EdGraphNode): JavascriptArrangedWidget
        fun FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer, Pin: JavascriptEdGraphPin): JavascriptPinWidget
        fun FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer, PinWidget: JavascriptPinWidget): JavascriptArrangedWidget
        fun FindPin(UNode: EdGraphNode, PinName: String, Direction: String /* "EGPD_Input" | "EGPD_Output" | "EGPD_MAX" */): JavascriptEdGraphPin
        fun FindClosestPointOnGeom(Geom: Geometry, TestPoint: Vector2D): Vector2D
        fun Finalize(Creator: JavascriptNodeCreator = definedExternally): `T$179`
        fun DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer, StartAnchorPoint: Vector2D, EndAnchorPoint: Vector2D, Params: JavascriptConnectionParams)
        fun DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer, A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams)
        fun DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer, OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Params: JavascriptConnectionParams = definedExternally): `T$178`
        fun DestroyNode(UNode: EdGraphNode)
        fun CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator
        fun CenterOf(Geom: Geometry): Vector2D
        fun CanUserDeleteNode(UNode: EdGraphNode): Boolean
        fun CanDuplicateNode(UNode: EdGraphNode): Boolean
        fun BreakLinkTo(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin)
        fun BreakAllPinLinks(A: JavascriptEdGraphPin)
        fun AutowireNewNode(UNode: EdGraphNode, FromPin: JavascriptEdGraphPin)
        fun ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer, OutputPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, Thickness: Number, WireColor: LinearColor)
        fun AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode, Pin: JavascriptEdGraphPin)
        fun C(Other: UObject): JavascriptGraphEditorLibrary
        fun C(Other: Any): JavascriptGraphEditorLibrary
    }
}

external open class JavascriptGraphAppearanceInfo {
    open var CornerImage: SlateBrush
    open var CornerText: String
    open var PIENotifyText: String
    open var ReadOnlyText: String
    open var InstructionText: String
    open fun clone(): JavascriptGraphAppearanceInfo

    companion object {
        fun C(Other: UObject): JavascriptGraphAppearanceInfo
        fun C(Other: Any): JavascriptGraphAppearanceInfo
    }
}

external object EPinVisibility {
    var Pin_Show: String /* "Pin_Show" */
    var Pin_HideNoConnection: String /* "Pin_HideNoConnection" */
    var Pin_HideNoConnectionNoDefault: String /* "Pin_HideNoConnectionNoDefault" */
    var Pin_MAX: String /* "Pin_MAX" */
}

external interface `T$180` {
    var OutLocation: Vector2D
    var OutZoomAmount: Number
}

external open class JavascriptGraphEditorWidget : Widget {
    constructor()
    constructor(Outer: UObject)
    open var EdGraph: JavascriptGraphEdGraph
    open var OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) -> Unit>
    open var OnDropActor: UnrealEngineDelegate<(Actors: Array<Actor>, Graph: EdGraph, Point: Vector2D) -> Unit>
    open var OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) -> Unit>
    open var OnSelectedNodesChanged: UnrealEngineDelegate<(Set: Array<UObject>) -> Unit>
    open var AppearanceInfo: JavascriptGraphAppearanceInfo
    open var CommandList: JavascriptUICommandList
    open fun SetViewLocation(Location: Vector2D, ZoomAmount: Number)
    open fun SetPinVisibility(InVisibility: String /* "Pin_Show" | "Pin_HideNoConnection" | "Pin_HideNoConnectionNoDefault" | "Pin_MAX" */)
    open fun SetNodeSelection(UNode: EdGraphNode, bSelect: Boolean)
    open fun SetGraph(InEdGraph: JavascriptGraphEdGraph)
    open fun SelectAllNodes()
    open fun NotifyGraphChanged()
    open fun JumpToPin(JumpToMe: JavascriptEdGraphPin)
    open fun JumpToNode(JumpToMe: EdGraphNode, bRequestRename: Boolean, bSelectNode: Boolean)
    open fun GetViewLocation(OutLocation: Vector2D = definedExternally, OutZoomAmount: Number = definedExternally): `T$180`
    open fun GetSelectedNodes(): Array<UObject>
    open fun GetPasteLocation(): Vector2D
    open fun ClearSelectionSet()

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEditorWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEditorWidget
        fun GetDefaultObject(): JavascriptGraphEditorWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEditorWidget
        fun NewGraph(ParentScope: UObject): JavascriptGraphEdGraph
        fun C(Other: UObject): JavascriptGraphEditorWidget
        fun C(Other: Any): JavascriptGraphEditorWidget
    }
}

external open class JavascriptGraphEdNodeWidget : Widget {
    constructor()
    constructor(Outer: UObject)
    open var EdNode: JavascriptGraphEdNode
    open fun SetNode(InEdNode: JavascriptGraphEdNode)

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEdNodeWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEdNodeWidget
        fun GetDefaultObject(): JavascriptGraphEdNodeWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEdNodeWidget
        fun C(Other: UObject): JavascriptGraphEdNodeWidget
        fun C(Other: Any): JavascriptGraphEdNodeWidget
    }
}

external open class JavascriptTextProperty {
    open var Key: String
    open var Namespace: String
    open var Value: String
    open var TableId: String
    open fun clone(): JavascriptTextProperty

    companion object {
        fun C(Other: UObject): JavascriptTextProperty
        fun C(Other: Any): JavascriptTextProperty
    }
}

external open class JavascriptGraphTextPropertyEditableTextBox : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnGetGraphPin: UnrealEngineDelegate<() -> JavascriptEdGraphPin>
    open var OnGetDefaultValue: UnrealEngineDelegate<() -> JavascriptTextProperty>
    open var OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) -> Unit>
    open var WidgetStyle: EditableTextBoxStyle
    open var WrapTextAt: Number
    open var AutoWrapText: Boolean

    companion object {
        fun Load(ResourceName: String): JavascriptGraphTextPropertyEditableTextBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphTextPropertyEditableTextBox
        fun GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphTextPropertyEditableTextBox
        fun C(Other: UObject): JavascriptGraphTextPropertyEditableTextBox
        fun C(Other: Any): JavascriptGraphTextPropertyEditableTextBox
    }
}

external open class MockAI : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BBComp: BlackboardComponent
    open var BrainComp: BrainComponent
    open var PerceptionComp: AIPerceptionComponent
    open var PawnActionComp: PawnActionsComponent

    companion object {
        fun Load(ResourceName: String): MockAI
        fun Find(Outer: UObject, ResourceName: String): MockAI
        fun GetDefaultObject(): MockAI
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockAI
        fun C(Other: UObject): MockAI
        fun C(Other: Any): MockAI
    }
}

external open class MockAI_BT : MockAI {
    constructor()
    constructor(Outer: UObject)
    open var BTComp: BehaviorTreeComponent

    companion object {
        fun Load(ResourceName: String): MockAI_BT
        fun Find(Outer: UObject, ResourceName: String): MockAI_BT
        fun GetDefaultObject(): MockAI_BT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockAI_BT
        fun C(Other: UObject): MockAI_BT
        fun C(Other: Any): MockAI_BT
    }
}

external open class MockTask_Log : GameplayTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MockTask_Log
        fun Find(Outer: UObject, ResourceName: String): MockTask_Log
        fun GetDefaultObject(): MockTask_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockTask_Log
        fun C(Other: UObject): MockTask_Log
        fun C(Other: Any): MockTask_Log
    }
}

external open class MockGameplayTasksComponent : GameplayTasksComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MockGameplayTasksComponent
        fun Find(Outer: UObject, ResourceName: String): MockGameplayTasksComponent
        fun GetDefaultObject(): MockGameplayTasksComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockGameplayTasksComponent
        fun C(Other: UObject): MockGameplayTasksComponent
        fun C(Other: Any): MockGameplayTasksComponent
    }
}

external open class MockGameplayTaskOwner : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GTComponent: GameplayTasksComponent

    companion object {
        fun Load(ResourceName: String): MockGameplayTaskOwner
        fun Find(Outer: UObject, ResourceName: String): MockGameplayTaskOwner
        fun GetDefaultObject(): MockGameplayTaskOwner
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockGameplayTaskOwner
        fun C(Other: UObject): MockGameplayTaskOwner
        fun C(Other: Any): MockGameplayTaskOwner
    }
}

external open class TestBTDecorator_Blackboard : BTDecorator_Blackboard {
    constructor()
    constructor(Outer: UObject)
    open var LogIndexBecomeRelevant: Number
    open var LogIndexCeaseRelevant: Number
    open var LogIndexCalculate: Number

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_Blackboard
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_Blackboard
        fun GetDefaultObject(): TestBTDecorator_Blackboard
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_Blackboard
        fun C(Other: UObject): TestBTDecorator_Blackboard
        fun C(Other: Any): TestBTDecorator_Blackboard
    }
}

external open class TestBTDecorator_CantExecute : BTDecorator {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_CantExecute
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_CantExecute
        fun GetDefaultObject(): TestBTDecorator_CantExecute
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_CantExecute
        fun C(Other: UObject): TestBTDecorator_CantExecute
        fun C(Other: Any): TestBTDecorator_CantExecute
    }
}

external open class TestBTDecorator_DelayedAbort : BTDecorator {
    constructor()
    constructor(Outer: UObject)
    open var DelayTicks: Number
    open var bOnlyOnce: Boolean

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_DelayedAbort
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_DelayedAbort
        fun GetDefaultObject(): TestBTDecorator_DelayedAbort
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_DelayedAbort
        fun C(Other: UObject): TestBTDecorator_DelayedAbort
        fun C(Other: Any): TestBTDecorator_DelayedAbort
    }
}

external open class TestBTService_Log : BTService {
    constructor()
    constructor(Outer: UObject)
    open var LogActivation: Number
    open var LogDeactivation: Number
    open var KeyNameTick: String
    open var LogTick: Number

    companion object {
        fun Load(ResourceName: String): TestBTService_Log
        fun Find(Outer: UObject, ResourceName: String): TestBTService_Log
        fun GetDefaultObject(): TestBTService_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTService_Log
        fun C(Other: UObject): TestBTService_Log
        fun C(Other: Any): TestBTService_Log
    }
}

external open class TestBTTask_LatentWithFlags : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var LogIndexExecuteStart: Number
    open var LogIndexExecuteFinish: Number
    open var LogIndexAbortStart: Number
    open var LogIndexAbortFinish: Number
    open var ExecuteTicks: Number
    open var AbortTicks: Number
    open var KeyNameExecute: String
    open var KeyNameAbort: String
    open var LogResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_LatentWithFlags
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_LatentWithFlags
        fun GetDefaultObject(): TestBTTask_LatentWithFlags
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_LatentWithFlags
        fun C(Other: UObject): TestBTTask_LatentWithFlags
        fun C(Other: Any): TestBTTask_LatentWithFlags
    }
}

external open class TestBTTask_Log : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var LogIndex: Number
    open var LogFinished: Number
    open var ExecutionTicks: Number
    open var LogResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_Log
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_Log
        fun GetDefaultObject(): TestBTTask_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_Log
        fun C(Other: UObject): TestBTTask_Log
        fun C(Other: Any): TestBTTask_Log
    }
}

external open class TestBTTask_SetFlag : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var KeyName: String
    open var bValue: Boolean
    open var TaskResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_SetFlag
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_SetFlag
        fun GetDefaultObject(): TestBTTask_SetFlag
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_SetFlag
        fun C(Other: UObject): TestBTTask_SetFlag
        fun C(Other: Any): TestBTTask_SetFlag
    }
}

external open class TestBTTask_SetValue : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var KeyName: String
    open var Value: Number
    open var TaskResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_SetValue
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_SetValue
        fun GetDefaultObject(): TestBTTask_SetValue
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_SetValue
        fun C(Other: UObject): TestBTTask_SetValue
        fun C(Other: Any): TestBTTask_SetValue
    }
}

external open class TestPawnAction_Log : PawnAction {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestPawnAction_Log
        fun Find(Outer: UObject, ResourceName: String): TestPawnAction_Log
        fun GetDefaultObject(): TestPawnAction_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestPawnAction_Log
        fun C(Other: UObject): TestPawnAction_Log
        fun C(Other: Any): TestPawnAction_Log
    }
}

external open class TestPawnAction_CallFunction : TestPawnAction_Log {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestPawnAction_CallFunction
        fun Find(Outer: UObject, ResourceName: String): TestPawnAction_CallFunction
        fun GetDefaultObject(): TestPawnAction_CallFunction
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestPawnAction_CallFunction
        fun C(Other: UObject): TestPawnAction_CallFunction
        fun C(Other: Any): TestPawnAction_CallFunction
    }
}

external object ELiveCodingStartupMode {
    var Automatic: String /* "Automatic" */
    var AutomaticButHidden: String /* "AutomaticButHidden" */
    var Manual: String /* "Manual" */
    var ELiveCodingStartupMode_MAX: String /* "ELiveCodingStartupMode_MAX" */
}

external open class LiveCodingSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnabled: Boolean
    open var Startup: String /* "Automatic" | "AutomaticButHidden" | "Manual" | "ELiveCodingStartupMode_MAX" */
    open var bPreloadEngineModules: Boolean
    open var bPreloadEnginePluginModules: Boolean
    open var bPreloadProjectModules: Boolean
    open var bPreloadProjectPluginModules: Boolean
    open var PreloadNamedModules: Array<String>

    companion object {
        fun Load(ResourceName: String): LiveCodingSettings
        fun Find(Outer: UObject, ResourceName: String): LiveCodingSettings
        fun GetDefaultObject(): LiveCodingSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LiveCodingSettings
        fun C(Other: UObject): LiveCodingSettings
        fun C(Other: Any): LiveCodingSettings
    }
}

external open class StructViewerProjectSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var InternalOnlyPaths: Array<DirectoryPath>
    open var InternalOnlyStructs: Array<ScriptStruct>

    companion object {
        fun Load(ResourceName: String): StructViewerProjectSettings
        fun Find(Outer: UObject, ResourceName: String): StructViewerProjectSettings
        fun GetDefaultObject(): StructViewerProjectSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): StructViewerProjectSettings
        fun C(Other: UObject): StructViewerProjectSettings
        fun C(Other: Any): StructViewerProjectSettings
    }
}

external object EPinnedCommandListType {
    var Command: String /* "Command" */
    var CustomWidget: String /* "CustomWidget" */
    var EPinnedCommandListType_MAX: String /* "EPinnedCommandListType_MAX" */
}

external open class PinnedCommandListCommand {
    open var Name: String
    open var Binding: String
    open var Type: String /* "Command" | "CustomWidget" | "EPinnedCommandListType_MAX" */
    open fun clone(): PinnedCommandListCommand

    companion object {
        fun C(Other: UObject): PinnedCommandListCommand
        fun C(Other: Any): PinnedCommandListCommand
    }
}

external open class PinnedCommandListContext {
    open var Name: String
    open var Commands: Array<PinnedCommandListCommand>
    open fun clone(): PinnedCommandListContext

    companion object {
        fun C(Other: UObject): PinnedCommandListContext
        fun C(Other: Any): PinnedCommandListContext
    }
}

external open class PinnedCommandListSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Contexts: Array<PinnedCommandListContext>

    companion object {
        fun Load(ResourceName: String): PinnedCommandListSettings
        fun Find(Outer: UObject, ResourceName: String): PinnedCommandListSettings
        fun GetDefaultObject(): PinnedCommandListSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PinnedCommandListSettings
        fun C(Other: UObject): PinnedCommandListSettings
        fun C(Other: Any): PinnedCommandListSettings
    }
}

external open class AnimationEditorPreviewActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    companion object {
        fun GetDefaultObject(): AnimationEditorPreviewActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AnimationEditorPreviewActor
        fun C(Other: UObject): AnimationEditorPreviewActor
        fun C(Other: Any): AnimationEditorPreviewActor
    }
}

external open class LODInfoUILayout : UObject {
    constructor()
    constructor(Outer: UObject)
    open var LODInfo: SkeletalMeshLODInfo

    companion object {
        fun Load(ResourceName: String): LODInfoUILayout
        fun Find(Outer: UObject, ResourceName: String): LODInfoUILayout
        fun GetDefaultObject(): LODInfoUILayout
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LODInfoUILayout
        fun C(Other: UObject): LODInfoUILayout
        fun C(Other: Any): LODInfoUILayout
    }
}

external open class PersonaPreviewSceneController : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PersonaPreviewSceneController
        fun Find(Outer: UObject, ResourceName: String): PersonaPreviewSceneController
        fun GetDefaultObject(): PersonaPreviewSceneController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PersonaPreviewSceneController
        fun C(Other: UObject): PersonaPreviewSceneController
        fun C(Other: Any): PersonaPreviewSceneController
    }
}

external open class PersonaPreviewSceneAnimationController : PersonaPreviewSceneController {
    constructor()
    constructor(Outer: UObject)
    open var Animation: AnimationAsset

    companion object {
        fun Load(ResourceName: String): PersonaPreviewSceneAnimationController
        fun Find(Outer: UObject, ResourceName: String): PersonaPreviewSceneAnimationController
        fun GetDefaultObject(): PersonaPreviewSceneAnimationController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PersonaPreviewSceneAnimationController
        fun C(Other: UObject): PersonaPreviewSceneAnimationController
        fun C(Other: Any): PersonaPreviewSceneAnimationController
    }
}

external open class PersonaPreviewSceneDefaultController : PersonaPreviewSceneController {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PersonaPreviewSceneDefaultController
        fun Find(Outer: UObject, ResourceName: String): PersonaPreviewSceneDefaultController
        fun GetDefaultObject(): PersonaPreviewSceneDefaultController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PersonaPreviewSceneDefaultController
        fun C(Other: UObject): PersonaPreviewSceneDefaultController
        fun C(Other: Any): PersonaPreviewSceneDefaultController
    }
}

external open class PersonaPreviewSceneDescription : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PreviewController: UnrealEngineClass
    open var PreviewControllerInstance: PersonaPreviewSceneController
    open var PreviewControllerInstances: Array<PersonaPreviewSceneController>
    open var PreviewMesh: SkeletalMesh
    open var PreviewAnimationBlueprint: AnimBlueprint
    open var ApplicationMethod: String /* "LinkedLayers" | "LinkedAnimGraph" | "EPreviewAnimationBlueprintApplicationMethod_MAX" */
    open var LinkedAnimGraphTag: String
    open var AdditionalMeshes: DataAsset
    open var DefaultAdditionalMeshes: PreviewMeshCollection

    companion object {
        fun Load(ResourceName: String): PersonaPreviewSceneDescription
        fun Find(Outer: UObject, ResourceName: String): PersonaPreviewSceneDescription
        fun GetDefaultObject(): PersonaPreviewSceneDescription
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PersonaPreviewSceneDescription
        fun C(Other: UObject): PersonaPreviewSceneDescription
        fun C(Other: Any): PersonaPreviewSceneDescription
    }
}

external open class PersonaPreviewSceneRefPoseController : PersonaPreviewSceneController {
    constructor()
    constructor(Outer: UObject)
    open var bResetBoneTransforms: Boolean

    companion object {
        fun Load(ResourceName: String): PersonaPreviewSceneRefPoseController
        fun Find(Outer: UObject, ResourceName: String): PersonaPreviewSceneRefPoseController
        fun GetDefaultObject(): PersonaPreviewSceneRefPoseController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PersonaPreviewSceneRefPoseController
        fun C(Other: UObject): PersonaPreviewSceneRefPoseController
        fun C(Other: Any): PersonaPreviewSceneRefPoseController
    }
}

external open class SkinWeightImportOptions : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ProfileName: String
    open var FilePath: String
    open var LODIndex: Number

    companion object {
        fun Load(ResourceName: String): SkinWeightImportOptions
        fun Find(Outer: UObject, ResourceName: String): SkinWeightImportOptions
        fun GetDefaultObject(): SkinWeightImportOptions
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SkinWeightImportOptions
        fun C(Other: UObject): SkinWeightImportOptions
        fun C(Other: Any): SkinWeightImportOptions
    }
}

external open class UndoHistorySettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bShowTransactionDetails: Boolean

    companion object {
        fun Load(ResourceName: String): UndoHistorySettings
        fun Find(Outer: UObject, ResourceName: String): UndoHistorySettings
        fun GetDefaultObject(): UndoHistorySettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UndoHistorySettings
        fun C(Other: UObject): UndoHistorySettings
        fun C(Other: Any): UndoHistorySettings
    }
}

external open class LocalizationDashboardSettings : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LocalizationDashboardSettings
        fun Find(Outer: UObject, ResourceName: String): LocalizationDashboardSettings
        fun GetDefaultObject(): LocalizationDashboardSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LocalizationDashboardSettings
        fun C(Other: UObject): LocalizationDashboardSettings
        fun C(Other: Any): LocalizationDashboardSettings
    }
}

external object EMeshInstancingReplacementMethod {
    var RemoveOriginalActors: String /* "RemoveOriginalActors" */
    var KeepOriginalActorsAsEditorOnly: String /* "KeepOriginalActorsAsEditorOnly" */
    var EMeshInstancingReplacementMethod_MAX: String /* "EMeshInstancingReplacementMethod_MAX" */
}

external open class MeshInstancingSettings {
    open var ActorClassToUse: UnrealEngineClass
    open var InstanceReplacementThreshold: Number
    open var MeshReplacementMethod: String /* "RemoveOriginalActors" | "KeepOriginalActorsAsEditorOnly" | "EMeshInstancingReplacementMethod_MAX" */
    open var bSkipMeshesWithVertexColors: Boolean
    open var bUseHLODVolumes: Boolean
    open var ISMComponentToUse: UnrealEngineClass
    open fun clone(): MeshInstancingSettings

    companion object {
        fun C(Other: UObject): MeshInstancingSettings
        fun C(Other: Any): MeshInstancingSettings
    }
}

external open class MeshInstancingSettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshInstancingSettings

    companion object {
        fun Load(ResourceName: String): MeshInstancingSettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshInstancingSettingsObject
        fun GetDefaultObject(): MeshInstancingSettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshInstancingSettingsObject
        fun C(Other: UObject): MeshInstancingSettingsObject
        fun C(Other: Any): MeshInstancingSettingsObject
    }
}

external open class MeshMergingSettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshMergingSettings

    companion object {
        fun Load(ResourceName: String): MeshMergingSettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshMergingSettingsObject
        fun GetDefaultObject(): MeshMergingSettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshMergingSettingsObject
        fun C(Other: UObject): MeshMergingSettingsObject
        fun C(Other: Any): MeshMergingSettingsObject
    }
}

external open class MeshProxySettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshProxySettings

    companion object {
        fun Load(ResourceName: String): MeshProxySettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshProxySettingsObject
        fun GetDefaultObject(): MeshProxySettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshProxySettingsObject
        fun C(Other: UObject): MeshProxySettingsObject
        fun C(Other: Any): MeshProxySettingsObject
    }
}

external open class EditorKeyboardShortcutSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorKeyboardShortcutSettings
        fun Find(Outer: UObject, ResourceName: String): EditorKeyboardShortcutSettings
        fun GetDefaultObject(): EditorKeyboardShortcutSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorKeyboardShortcutSettings
        fun C(Other: UObject): EditorKeyboardShortcutSettings
        fun C(Other: Any): EditorKeyboardShortcutSettings
    }
}

external object EIOSCloudKitSyncStrategy {
    var None: String /* "None" */
    var OnlyAtGameStart: String /* "OnlyAtGameStart" */
    var Always: String /* "Always" */
    var EIOSCloudKitSyncStrategy_MAX: String /* "EIOSCloudKitSyncStrategy_MAX" */
}

external open class IOSBuildResourceDirectory {
    open var Path: String
    open fun clone(): IOSBuildResourceDirectory

    companion object {
        fun C(Other: UObject): IOSBuildResourceDirectory
        fun C(Other: Any): IOSBuildResourceDirectory
    }
}

external open class IOSBuildResourceFilePath {
    open var FilePath: String
    open fun clone(): IOSBuildResourceFilePath

    companion object {
        fun C(Other: UObject): IOSBuildResourceFilePath
        fun C(Other: Any): IOSBuildResourceFilePath
    }
}

external object EIOSLandscapeOrientation {
    var LandscapeLeft: String /* "LandscapeLeft" */
    var LandscapeRight: String /* "LandscapeRight" */
    var EIOSLandscapeOrientation_MAX: String /* "EIOSLandscapeOrientation_MAX" */
}

external object EPowerUsageFrameRateLock {
    var PUFRL_None: String /* "PUFRL_None" */
    var PUFRL_20: String /* "PUFRL_20" */
    var PUFRL_30: String /* "PUFRL_30" */
    var PUFRL_60: String /* "PUFRL_60" */
    var PUFRL_MAX: String /* "PUFRL_MAX" */
}

external object EIOSVersion {
    var IOS_12: String /* "IOS_12" */
    var IOS_13: String /* "IOS_13" */
    var IOS_14: String /* "IOS_14" */
    var IOS_MAX: String /* "IOS_MAX" */
}

external open class IOSRuntimeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnableGameCenterSupport: Boolean
    open var bEnableCloudKitSupport: Boolean
    open var IOSCloudKitSyncStrategy: String /* "None" | "OnlyAtGameStart" | "Always" | "EIOSCloudKitSyncStrategy_MAX" */
    open var bEnableRemoteNotificationsSupport: Boolean
    open var bEnableBackgroundFetch: Boolean
    open var bSupportsMetal: Boolean
    open var bSupportsMetalMRT: Boolean
    open var bCookPVRTCTextures: Boolean
    open var bCookASTCTextures: Boolean
    open var bBuildAsFramework: Boolean
    open var WindowsMetalToolchainOverride: IOSBuildResourceDirectory
    open var bGeneratedSYMFile: Boolean
    open var bGeneratedSYMBundle: Boolean
    open var bGenerateCrashReportSymbols: Boolean
    open var bGenerateXCArchive: Boolean
    open var bShipForBitcode: Boolean
    open var bEnableAdvertisingIdentifier: Boolean
    open var AdditionalLinkerFlags: String
    open var AdditionalShippingLinkerFlags: String
    open var RemoteServerName: String
    open var bUseRSync: Boolean
    open var RSyncUsername: String
    open var DeltaCopyInstallPath: IOSBuildResourceDirectory
    open var SSHPrivateKeyLocation: String
    open var SSHPrivateKeyOverridePath: IOSBuildResourceFilePath
    open var bRunAsCurrentUser: Boolean
    open var bGameSupportsMultipleActiveControllers: Boolean
    open var bAllowRemoteRotation: Boolean
    open var bUseRemoteAsVirtualJoystick: Boolean
    open var bUseRemoteAbsoluteDpadValues: Boolean
    open var bAllowControllers: Boolean
    open var bControllersBlockDeviceFeedback: Boolean
    open var bDisableMotionData: Boolean
    open var bSupportsPortraitOrientation: Boolean
    open var bSupportsUpsideDownOrientation: Boolean
    open var bSupportsLandscapeLeftOrientation: Boolean
    open var bSupportsLandscapeRightOrientation: Boolean
    open var bSupportsITunesFileSharing: Boolean
    open var bSupportsFilesApp: Boolean
    open var PreferredLandscapeOrientation: String /* "LandscapeLeft" | "LandscapeRight" | "EIOSLandscapeOrientation_MAX" */
    open var BundleDisplayName: String
    open var BundleName: String
    open var BundleIdentifier: String
    open var VersionInfo: String
    open var FrameRateLock: String /* "PUFRL_None" | "PUFRL_20" | "PUFRL_30" | "PUFRL_60" | "PUFRL_MAX" */
    open var bEnableDynamicMaxFPS: Boolean
    open var MinimumiOSVersion: String /* "IOS_12" | "IOS_13" | "IOS_14" | "IOS_MAX" */
    open var bSupportsIPad: Boolean
    open var bSupportsIPhone: Boolean
    open var AdditionalPlistData: String
    open var bCustomLaunchscreenStoryboard: Boolean
    open var bEnableFacebookSupport: Boolean
    open var FacebookAppID: String
    open var MobileProvision: String
    open var SigningCertificate: String
    open var bAutomaticSigning: Boolean
    open var IOSTeamID: String
    open var bDisableHTTPS: Boolean
    open var MaxShaderLanguageVersion: Number
    open var UseFastIntrinsics: Boolean
    open var ForceFloats: Boolean
    open var EnableMathOptimisations: Boolean
    open var IndirectArgumentTier: Number
    open var bUseIntegratedKeyboard: Boolean
    open var AudioSampleRate: Number
    open var AudioCallbackBufferFrameSize: Number
    open var AudioNumBuffersToEnqueue: Number
    open var AudioMaxChannels: Number
    open var AudioNumSourceWorkers: Number
    open var SpatializationPlugin: String
    open var ReverbPlugin: String
    open var OcclusionPlugin: String
    open var CompressionOverrides: PlatformRuntimeAudioCompressionOverrides
    open var bUseAudioStreamCaching: Boolean
    open var CacheSizeKB: Number
    open var MaxChunkSizeOverrideKB: Number
    open var bResampleForDevice: Boolean
    open var SoundCueCookQualityIndex: Number
    open var MaxSampleRate: Number
    open var HighSampleRate: Number
    open var MedSampleRate: Number
    open var LowSampleRate: Number
    open var MinSampleRate: Number
    open var CompressionQualityModifier: Number
    open var AutoStreamingThreshold: Number
    open var bStreamLandscapeMeshLODs: Boolean

    companion object {
        fun Load(ResourceName: String): IOSRuntimeSettings
        fun Find(Outer: UObject, ResourceName: String): IOSRuntimeSettings
        fun GetDefaultObject(): IOSRuntimeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): IOSRuntimeSettings
        fun C(Other: UObject): IOSRuntimeSettings
        fun C(Other: Any): IOSRuntimeSettings
    }
}

external object ELuminFrameTimingHint {
    var Unspecified: String /* "Unspecified" */
    var Maximum: String /* "Maximum" */
    var FPS_60: String /* "FPS_60" */
    var FPS_120: String /* "FPS_120" */
    var ELuminFrameTimingHint_MAX: String /* "ELuminFrameTimingHint_MAX" */
}

external open class LocalizedIconInfo {
    open var LanguageCode: String
    open var IconModelPath: DirectoryPath
    open var IconPortalPath: DirectoryPath
    open fun clone(): LocalizedIconInfo

    companion object {
        fun C(Other: UObject): LocalizedIconInfo
        fun C(Other: Any): LocalizedIconInfo
    }
}

external open class LocalizedIconInfos {
    open var IconData: Array<LocalizedIconInfo>
    open fun clone(): LocalizedIconInfos

    companion object {
        fun C(Other: UObject): LocalizedIconInfos
        fun C(Other: Any): LocalizedIconInfos
    }
}

external object ELuminPrivilege {
    var Invalid: String /* "Invalid" */
    var BatteryInfo: String /* "BatteryInfo" */
    var CameraCapture: String /* "CameraCapture" */
    var ComputerVision: String /* "ComputerVision" */
    var WorldReconstruction: String /* "WorldReconstruction" */
    var InAppPurchase: String /* "InAppPurchase" */
    var AudioCaptureMic: String /* "AudioCaptureMic" */
    var DrmCertificates: String /* "DrmCertificates" */
    var Occlusion: String /* "Occlusion" */
    var LowLatencyLightwear: String /* "LowLatencyLightwear" */
    var Internet: String /* "Internet" */
    var IdentityRead: String /* "IdentityRead" */
    var BackgroundDownload: String /* "BackgroundDownload" */
    var BackgroundUpload: String /* "BackgroundUpload" */
    var MediaDrm: String /* "MediaDrm" */
    var Media: String /* "Media" */
    var MediaMetadata: String /* "MediaMetadata" */
    var PowerInfo: String /* "PowerInfo" */
    var LocalAreaNetwork: String /* "LocalAreaNetwork" */
    var VoiceInput: String /* "VoiceInput" */
    var Documents: String /* "Documents" */
    var ConnectBackgroundMusicService: String /* "ConnectBackgroundMusicService" */
    var RegisterBackgroundMusicService: String /* "RegisterBackgroundMusicService" */
    var PcfRead: String /* "PcfRead" */
    var PwFoundObjRead: String /* "PwFoundObjRead" */
    var NormalNotificationsUsage: String /* "NormalNotificationsUsage" */
    var MusicService: String /* "MusicService" */
    var ControllerPose: String /* "ControllerPose" */
    var GesturesSubscribe: String /* "GesturesSubscribe" */
    var GesturesConfig: String /* "GesturesConfig" */
    var AddressBookRead: String /* "AddressBookRead" */
    var AddressBookWrite: String /* "AddressBookWrite" */
    var AddressBookBasicAccess: String /* "AddressBookBasicAccess" */
    var CoarseLocation: String /* "CoarseLocation" */
    var FineLocation: String /* "FineLocation" */
    var HandMesh: String /* "HandMesh" */
    var WifiStatusRead: String /* "WifiStatusRead" */
    var SocialConnectionsInvitesAccess: String /* "SocialConnectionsInvitesAccess" */
    var SocialConnectionsSelectAccess: String /* "SocialConnectionsSelectAccess" */
    var SecureBrowserWindow: String /* "SecureBrowserWindow" */
    var BluetoothAdapterExternalApp: String /* "BluetoothAdapterExternalApp" */
    var BluetoothAdapterUser: String /* "BluetoothAdapterUser" */
    var BluetoothGattWrite: String /* "BluetoothGattWrite" */
    var ELuminPrivilege_MAX: String /* "ELuminPrivilege_MAX" */
}

external object ELuminComponentSubElementType {
    var FileExtension: String /* "FileExtension" */
    var MimeType: String /* "MimeType" */
    var Mode: String /* "Mode" */
    var MusicAttribute: String /* "MusicAttribute" */
    var Schema: String /* "Schema" */
    var ELuminComponentSubElementType_MAX: String /* "ELuminComponentSubElementType_MAX" */
}

external open class LuminComponentSubElement {
    open var ElementType: String /* "FileExtension" | "MimeType" | "Mode" | "MusicAttribute" | "Schema" | "ELuminComponentSubElementType_MAX" */
    open var Value: String
    open fun clone(): LuminComponentSubElement

    companion object {
        fun C(Other: UObject): LuminComponentSubElement
        fun C(Other: Any): LuminComponentSubElement
    }
}

external object ELuminComponentType {
    var Universe: String /* "Universe" */
    var Fullscreen: String /* "Fullscreen" */
    var SearchProvider: String /* "SearchProvider" */
    var MusicService: String /* "MusicService" */
    var Console: String /* "Console" */
    var SystemUI: String /* "SystemUI" */
    var ELuminComponentType_MAX: String /* "ELuminComponentType_MAX" */
}

external open class LuminComponentElement {
    open var Name: String
    open var VisibleName: String
    open var ExecutableName: String
    open var ComponentType: String /* "Universe" | "Fullscreen" | "SearchProvider" | "MusicService" | "Console" | "SystemUI" | "ELuminComponentType_MAX" */
    open var ExtraComponentSubElements: Array<LuminComponentSubElement>
    open fun clone(): LuminComponentElement

    companion object {
        fun C(Other: UObject): LuminComponentElement
        fun C(Other: Any): LuminComponentElement
    }
}

external open class LocalizedAppName {
    open var LanguageCode: String
    open var AppName: String
    open fun clone(): LocalizedAppName

    companion object {
        fun C(Other: UObject): LocalizedAppName
        fun C(Other: Any): LocalizedAppName
    }
}

external open class LuminRuntimeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PackageName: String
    open var ApplicationDisplayName: String
    open var FrameTimingHint: String /* "Unspecified" | "Maximum" | "FPS_60" | "FPS_120" | "ELuminFrameTimingHint_MAX" */
    open var bProtectedContent: Boolean
    open var bManualCallToAppReady: Boolean
    open var bUseMobileRendering: Boolean
    open var bUseVulkan: Boolean
    open var Certificate: FilePath
    open var IconModelPath: DirectoryPath
    open var IconPortalPath: DirectoryPath
    open var LocalizedIconInfos: LocalizedIconInfos
    open var VersionCode: Number
    open var MinimumAPILevel: Number
    open var AppPrivileges: Array<String /* "Invalid" | "BatteryInfo" | "CameraCapture" | "ComputerVision" | "WorldReconstruction" | "InAppPurchase" | "AudioCaptureMic" | "DrmCertificates" | "Occlusion" | "LowLatencyLightwear" | "Internet" | "IdentityRead" | "BackgroundDownload" | "BackgroundUpload" | "MediaDrm" | "Media" | "MediaMetadata" | "PowerInfo" | "LocalAreaNetwork" | "VoiceInput" | "Documents" | "ConnectBackgroundMusicService" | "RegisterBackgroundMusicService" | "PcfRead" | "PwFoundObjRead" | "NormalNotificationsUsage" | "MusicService" | "ControllerPose" | "GesturesSubscribe" | "GesturesConfig" | "AddressBookRead" | "AddressBookWrite" | "AddressBookBasicAccess" | "CoarseLocation" | "FineLocation" | "HandMesh" | "WifiStatusRead" | "SocialConnectionsInvitesAccess" | "SocialConnectionsSelectAccess" | "SecureBrowserWindow" | "BluetoothAdapterExternalApp" | "BluetoothAdapterUser" | "BluetoothGattWrite" | "ELuminPrivilege_MAX" */>
    open var ExtraComponentSubElements: Array<LuminComponentSubElement>
    open var ExtraComponentElements: Array<LuminComponentElement>
    open var SpatializationPlugin: String
    open var ReverbPlugin: String
    open var OcclusionPlugin: String
    open var SoundCueCookQualityIndex: Number
    open var bRemoveDebugInfo: Boolean
    open var VulkanValidationLayerLibs: DirectoryPath
    open var bFrameVignette: Boolean
    open var LocalizedAppNames: Array<LocalizedAppName>

    companion object {
        fun Load(ResourceName: String): LuminRuntimeSettings
        fun Find(Outer: UObject, ResourceName: String): LuminRuntimeSettings
        fun GetDefaultObject(): LuminRuntimeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminRuntimeSettings
        fun C(Other: UObject): LuminRuntimeSettings
        fun C(Other: Any): LuminRuntimeSettings
    }
}

external open class AndroidSDKSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SDKPath: DirectoryPath
    open var NDKPath: DirectoryPath
    open var JavaPath: DirectoryPath
    open var SDKAPILevel: String
    open var NDKAPILevel: String

    companion object {
        fun Load(ResourceName: String): AndroidSDKSettings
        fun Find(Outer: UObject, ResourceName: String): AndroidSDKSettings
        fun GetDefaultObject(): AndroidSDKSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AndroidSDKSettings
        fun C(Other: UObject): AndroidSDKSettings
        fun C(Other: Any): AndroidSDKSettings
    }
}

external open class MagicLeapSDKSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var MLSDKPath: DirectoryPath

    companion object {
        fun Load(ResourceName: String): MagicLeapSDKSettings
        fun Find(Outer: UObject, ResourceName: String): MagicLeapSDKSettings
        fun GetDefaultObject(): MagicLeapSDKSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSDKSettings
        fun C(Other: UObject): MagicLeapSDKSettings
        fun C(Other: Any): MagicLeapSDKSettings
    }
}

external open class LogVisualizerSessionSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnableGraphsVisualization: Boolean

    companion object {
        fun Load(ResourceName: String): LogVisualizerSessionSettings
        fun Find(Outer: UObject, ResourceName: String): LogVisualizerSessionSettings
        fun GetDefaultObject(): LogVisualizerSessionSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LogVisualizerSessionSettings
        fun C(Other: UObject): LogVisualizerSessionSettings
        fun C(Other: Any): LogVisualizerSessionSettings
    }
}

external open class CategoryFilter {
    open var CategoryName: String
    open var LogVerbosity: Number
    open var Enabled: Boolean
    open fun clone(): CategoryFilter

    companion object {
        fun C(Other: UObject): CategoryFilter
        fun C(Other: Any): CategoryFilter
    }
}

external open class VisualLoggerFiltersData {
    open var SearchBoxFilter: String
    open var ObjectNameFilter: String
    open var Categories: Array<CategoryFilter>
    open var SelectedClasses: Array<String>
    open fun clone(): VisualLoggerFiltersData

    companion object {
        fun C(Other: UObject): VisualLoggerFiltersData
        fun C(Other: Any): VisualLoggerFiltersData
    }
}

external open class LogVisualizerSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bIgnoreTrivialLogs: Boolean
    open var TrivialLogsThreshold: Number
    open var bStickToRecentData: Boolean
    open var bResetDataWithNewSession: Boolean
    open var bShowHistogramLabelsOutside: Boolean
    open var DefaultCameraDistance: Number
    open var bSearchInsideLogs: Boolean
    open var GraphsBackgroundColor: Color
    open var bPresistentFilters: Boolean
    open var bDrawExtremesOnGraphs: Boolean
    open var bConstrainGraphToLocalMinMax: Boolean
    open var bUsePlayersOnlyForPause: Boolean
    open var bLogNavOctreeOnStop: Boolean
    open var bForceUniqueLogNames: Boolean
    open var PresistentFilters: VisualLoggerFiltersData
    open var DebugMeshMaterialFakeLight: Material
    open var DebugMeshMaterialFakeLightName: String

    companion object {
        fun Load(ResourceName: String): LogVisualizerSettings
        fun Find(Outer: UObject, ResourceName: String): LogVisualizerSettings
        fun GetDefaultObject(): LogVisualizerSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LogVisualizerSettings
        fun C(Other: UObject): LogVisualizerSettings
        fun C(Other: Any): LogVisualizerSettings
    }
}

external open class VisualLoggerCameraController(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : DebugCameraController {
    open var PickedActor: Actor

    companion object {
        fun GetDefaultObject(): VisualLoggerCameraController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerCameraController
        fun C(Other: UObject): VisualLoggerCameraController
        fun C(Other: Any): VisualLoggerCameraController
    }
}

external open class VisualLoggerHUD(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : DebugCameraHUD {
    companion object {
        fun GetDefaultObject(): VisualLoggerHUD
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerHUD
        fun C(Other: UObject): VisualLoggerHUD
        fun C(Other: Any): VisualLoggerHUD
    }
}

external open class VisualLoggerRenderingActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    companion object {
        fun GetDefaultObject(): VisualLoggerRenderingActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerRenderingActor
        fun C(Other: UObject): VisualLoggerRenderingActor
        fun C(Other: Any): VisualLoggerRenderingActor
    }
}

external open class VisualLoggerRenderingComponent : PrimitiveComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VisualLoggerRenderingComponent
        fun Find(Outer: UObject, ResourceName: String): VisualLoggerRenderingComponent
        fun GetDefaultObject(): VisualLoggerRenderingComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerRenderingComponent
        fun C(Other: UObject): VisualLoggerRenderingComponent
        fun C(Other: Any): VisualLoggerRenderingComponent
    }
}

external open class ClothPainterSettings : MeshPaintSettings {
    constructor()
    constructor(Outer: UObject)
    open var ViewMin: Number
    open var ViewMax: Number
    open var bAutoViewRange: Boolean
    open var AutoCalculatedViewMin: Number
    open var AutoCalculatedViewMax: Number
    open var ClothingAssets: Array<ClothingAssetCommon>
    open var bFlipNormal: Boolean
    open var bCullBackface: Boolean
    open var Opacity: Number

    companion object {
        fun Load(ResourceName: String): ClothPainterSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPainterSettings
        fun GetDefaultObject(): ClothPainterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPainterSettings
        fun C(Other: UObject): ClothPainterSettings
        fun C(Other: Any): ClothPainterSettings
    }
}

external open class ClothPaintTool_BrushSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PaintValue: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_BrushSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_BrushSettings
        fun GetDefaultObject(): ClothPaintTool_BrushSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_BrushSettings
        fun C(Other: UObject): ClothPaintTool_BrushSettings
        fun C(Other: Any): ClothPaintTool_BrushSettings
    }
}

external open class ClothPaintTool_GradientSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GradientStartValue: Number
    open var GradientEndValue: Number
    open var bUseRegularBrush: Boolean

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_GradientSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_GradientSettings
        fun GetDefaultObject(): ClothPaintTool_GradientSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_GradientSettings
        fun C(Other: UObject): ClothPaintTool_GradientSettings
        fun C(Other: Any): ClothPaintTool_GradientSettings
    }
}

external open class ClothPaintTool_SmoothSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Strength: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_SmoothSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_SmoothSettings
        fun GetDefaultObject(): ClothPaintTool_SmoothSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_SmoothSettings
        fun C(Other: UObject): ClothPaintTool_SmoothSettings
        fun C(Other: Any): ClothPaintTool_SmoothSettings
    }
}

external open class ClothPaintTool_FillSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Threshold: Number
    open var FillValue: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_FillSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_FillSettings
        fun GetDefaultObject(): ClothPaintTool_FillSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_FillSettings
        fun C(Other: UObject): ClothPaintTool_FillSettings
        fun C(Other: Any): ClothPaintTool_FillSettings
    }
}

external object EPaintMode {
    var Vertices: String /* "Vertices" */
    var Textures: String /* "Textures" */
    var EPaintMode_MAX: String /* "EPaintMode_MAX" */
}

external object EMeshPaintMode {
    var PaintColors: String /* "PaintColors" */
    var PaintWeights: String /* "PaintWeights" */
    var EMeshPaintMode_MAX: String /* "EMeshPaintMode_MAX" */
}

external object ETextureWeightTypes {
    var AlphaLerp: String /* "AlphaLerp" */
    var RGB: String /* "RGB" */
    var ARGB: String /* "ARGB" */
    var OneMinusARGB: String /* "OneMinusARGB" */
    var ETextureWeightTypes_MAX: String /* "ETextureWeightTypes_MAX" */
}

external object ETexturePaintIndex {
    var TextureOne: String /* "TextureOne" */
    var TextureTwo: String /* "TextureTwo" */
    var TextureThree: String /* "TextureThree" */
    var TextureFour: String /* "TextureFour" */
    var TextureFive: String /* "TextureFive" */
    var ETexturePaintIndex_MAX: String /* "ETexturePaintIndex_MAX" */
}

external open class VertexPaintSettings {
    open var MeshPaintMode: String /* "PaintColors" | "PaintWeights" | "EMeshPaintMode_MAX" */
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var TextureWeightType: String /* "AlphaLerp" | "RGB" | "ARGB" | "OneMinusARGB" | "ETextureWeightTypes_MAX" */
    open var PaintTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "ETexturePaintIndex_MAX" */
    open var EraseTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "ETexturePaintIndex_MAX" */
    open var bPaintOnSpecificLOD: Boolean
    open var LODIndex: Number
    open fun clone(): VertexPaintSettings

    companion object {
        fun C(Other: UObject): VertexPaintSettings
        fun C(Other: Any): VertexPaintSettings
    }
}

external open class TexturePaintSettings {
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var UVChannel: Number
    open var bEnableSeamPainting: Boolean
    open var PaintTexture: Texture2D
    open fun clone(): TexturePaintSettings

    companion object {
        fun C(Other: UObject): TexturePaintSettings
        fun C(Other: Any): TexturePaintSettings
    }
}

external open class PaintModeSettings : MeshPaintSettings {
    constructor()
    constructor(Outer: UObject)
    open var PaintMode: String /* "Vertices" | "Textures" | "EPaintMode_MAX" */
    open var VertexPaintSettings: VertexPaintSettings
    open var TexturePaintSettings: TexturePaintSettings

    companion object {
        fun Load(ResourceName: String): PaintModeSettings
        fun Find(Outer: UObject, ResourceName: String): PaintModeSettings
        fun GetDefaultObject(): PaintModeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaintModeSettings
        fun C(Other: UObject): PaintModeSettings
        fun C(Other: Any): PaintModeSettings
    }
}

external open class ActorFactoryLandscape : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryLandscape
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryLandscape
        fun GetDefaultObject(): ActorFactoryLandscape
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryLandscape
        fun C(Other: UObject): ActorFactoryLandscape
        fun C(Other: Any): ActorFactoryLandscape
    }
}

external object ELandscapeToolFlattenMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var Interval: String /* "Interval" */
    var Terrace: String /* "Terrace" */
    var ELandscapeToolFlattenMode_MAX: String /* "ELandscapeToolFlattenMode_MAX" */
}

external object ELandscapeToolErosionMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var ELandscapeToolErosionMode_MAX: String /* "ELandscapeToolErosionMode_MAX" */
}

external object ELandscapeToolHydroErosionMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Positive: String /* "Positive" */
    var ELandscapeToolHydroErosionMode_MAX: String /* "ELandscapeToolHydroErosionMode_MAX" */
}

external object ELandscapeToolNoiseMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Add: String /* "Add" */
    var Sub: String /* "Sub" */
    var ELandscapeToolNoiseMode_MAX: String /* "ELandscapeToolNoiseMode_MAX" */
}

external object ELandscapeToolPasteMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var ELandscapeToolPasteMode_MAX: String /* "ELandscapeToolPasteMode_MAX" */
}

external open class GizmoImportLayer {
    open var LayerFilename: String
    open var LayerName: String
    open var bNoImport: Boolean
    open fun clone(): GizmoImportLayer

    companion object {
        fun C(Other: UObject): GizmoImportLayer
        fun C(Other: Any): GizmoImportLayer
    }
}

external object ELandscapeMirrorOperation {
    var MinusXToPlusX: String /* "MinusXToPlusX" */
    var PlusXToMinusX: String /* "PlusXToMinusX" */
    var MinusYToPlusY: String /* "MinusYToPlusY" */
    var PlusYToMinusY: String /* "PlusYToMinusY" */
    var RotateMinusXToPlusX: String /* "RotateMinusXToPlusX" */
    var RotatePlusXToMinusX: String /* "RotatePlusXToMinusX" */
    var RotateMinusYToPlusY: String /* "RotateMinusYToPlusY" */
    var RotatePlusYToMinusY: String /* "RotatePlusYToMinusY" */
    var ELandscapeMirrorOperation_MAX: String /* "ELandscapeMirrorOperation_MAX" */
}

external object ELandscapeConvertMode {
    var Invalid: String /* "Invalid" */
    var Expand: String /* "Expand" */
    var Clip: String /* "Clip" */
    var Resample: String /* "Resample" */
    var ELandscapeConvertMode_MAX: String /* "ELandscapeConvertMode_MAX" */
}

external object ELandscapeImportResult {
    var Success: String /* "Success" */
    var Warning: String /* "Warning" */
    var Error: String /* "Error" */
    var ELandscapeImportResult_MAX: String /* "ELandscapeImportResult_MAX" */
}

external object ELandscapeImportAlphamapType {
    var Additive: String /* "Additive" */
    var Layered: String /* "Layered" */
    var ELandscapeImportAlphamapType_MAX: String /* "ELandscapeImportAlphamapType_MAX" */
}

external open class LandscapeImportLayerInfo {
    open var LayerName: String
    open var LayerInfo: LandscapeLayerInfoObject
    open var SourceFilePath: String
    open fun clone(): LandscapeImportLayerInfo

    companion object {
        fun C(Other: UObject): LandscapeImportLayerInfo
        fun C(Other: Any): LandscapeImportLayerInfo
    }
}

external open class LandscapeImportLayer : LandscapeImportLayerInfo {
    open var ThumbnailMIC: LandscapeMaterialInstanceConstant
    open var ImportResult: String /* "Success" | "Warning" | "Error" | "ELandscapeImportResult_MAX" */
    open var ErrorMessage: String
    override fun clone(): LandscapeImportLayer

    companion object {
        fun C(Other: UObject): LandscapeImportLayer
        fun C(Other: Any): LandscapeImportLayer
    }
}

external open class LandscapePatternBrushWorldSpaceSettings {
    open var Origin: Vector2D
    open var Rotation: Number
    open var bCenterTextureOnOrigin: Boolean
    open var RepeatSize: Number
    open fun clone(): LandscapePatternBrushWorldSpaceSettings

    companion object {
        fun C(Other: UObject): LandscapePatternBrushWorldSpaceSettings
        fun C(Other: Any): LandscapePatternBrushWorldSpaceSettings
    }
}

external object EColorChannel {
    var Red: String /* "Red" */
    var Green: String /* "Green" */
    var Blue: String /* "Blue" */
    var Alpha: String /* "Alpha" */
    var EColorChannel_MAX: String /* "EColorChannel_MAX" */
}

external open class LandscapeEditorObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ToolStrength: Number
    open var bUseWeightTargetValue: Boolean
    open var WeightTargetValue: Number
    open var MaximumValueRadius: Number
    open var bCombinedLayersOperation: Boolean
    open var FlattenMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "Interval" | "Terrace" | "ELandscapeToolFlattenMode_MAX" */
    open var bUseSlopeFlatten: Boolean
    open var bPickValuePerApply: Boolean
    open var bUseFlattenTarget: Boolean
    open var FlattenTarget: Number
    open var bShowFlattenTargetPreview: Boolean
    open var TerraceInterval: Number
    open var TerraceSmooth: Number
    open var bFlattenEyeDropperModeActivated: Boolean
    open var FlattenEyeDropperModeDesiredTarget: Number
    open var RampWidth: Number
    open var RampSideFalloff: Number
    open var SmoothFilterKernelSize: Number
    open var bDetailSmooth: Boolean
    open var DetailScale: Number
    open var ErodeThresh: Number
    open var ErodeSurfaceThickness: Number
    open var ErodeIterationNum: Number
    open var ErosionNoiseMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "ELandscapeToolErosionMode_MAX" */
    open var ErosionNoiseScale: Number
    open var RainAmount: Number
    open var SedimentCapacity: Number
    open var HErodeIterationNum: Number
    open var RainDistMode: String /* "Invalid" | "Both" | "Positive" | "ELandscapeToolHydroErosionMode_MAX" */
    open var RainDistScale: Number
    open var bHErosionDetailSmooth: Boolean
    open var HErosionDetailScale: Number
    open var NoiseMode: String /* "Invalid" | "Both" | "Add" | "Sub" | "ELandscapeToolNoiseMode_MAX" */
    open var NoiseScale: Number
    open var bUseSelectedRegion: Boolean
    open var bUseNegativeMask: Boolean
    open var PasteMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "ELandscapeToolPasteMode_MAX" */
    open var bApplyToAllTargets: Boolean
    open var bSnapGizmo: Boolean
    open var bSmoothGizmoBrush: Boolean
    open var GizmoHeightmapFilenameString: String
    open var GizmoImportSize: IntPoint
    open var GizmoImportLayers: Array<GizmoImportLayer>
    open var MirrorPoint: Vector2D
    open var MirrorOp: String /* "MinusXToPlusX" | "PlusXToMinusX" | "MinusYToPlusY" | "PlusYToMinusY" | "RotateMinusXToPlusX" | "RotatePlusXToMinusX" | "RotateMinusYToPlusY" | "RotatePlusYToMinusY" | "ELandscapeMirrorOperation_MAX" */
    open var MirrorSmoothingWidth: Number
    open var BlueprintBrush: UnrealEngineClass
    open var ResizeLandscape_QuadsPerSection: Number
    open var ResizeLandscape_SectionsPerComponent: Number
    open var ResizeLandscape_ComponentCount: IntPoint
    open var ResizeLandscape_ConvertMode: String /* "Invalid" | "Expand" | "Clip" | "Resample" | "ELandscapeConvertMode_MAX" */
    open var NewLandscape_Material: Any
    open var NewLandscape_QuadsPerSection: Number
    open var NewLandscape_SectionsPerComponent: Number
    open var NewLandscape_ComponentCount: IntPoint
    open var NewLandscape_Location: Vector
    open var NewLandscape_Rotation: Rotator
    open var NewLandscape_Scale: Vector
    open var ImportLandscape_HeightmapImportResult: String /* "Success" | "Warning" | "Error" | "ELandscapeImportResult_MAX" */
    open var ImportLandscape_HeightmapErrorMessage: String
    open var ImportLandscape_HeightmapFilename: String
    open var ImportLandscape_Width: Any
    open var ImportLandscape_Height: Any
    open var ImportLandscape_Data: Array<Any>
    open var bCanHaveLayersContent: Boolean
    open var ImportLandscape_AlphamapType: String /* "Additive" | "Layered" | "ELandscapeImportAlphamapType_MAX" */
    open var ImportLandscape_Layers: Array<LandscapeImportLayer>
    open var BrushRadius: Number
    open var BrushFalloff: Number
    open var bUseClayBrush: Boolean
    open var AlphaBrushScale: Number
    open var bAlphaBrushAutoRotate: Boolean
    open var AlphaBrushRotation: Number
    open var AlphaBrushPanU: Number
    open var AlphaBrushPanV: Number
    open var bUseWorldSpacePatternBrush: Boolean
    open var WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings
    open var AlphaTexture: Texture2D
    open var AlphaTextureChannel: String /* "Red" | "Green" | "Blue" | "Alpha" | "EColorChannel_MAX" */
    open var AlphaTextureSizeX: Number
    open var AlphaTextureSizeY: Number
    open var AlphaTextureData: Array<Number>
    open var BrushComponentSize: Number
    open var PaintingRestriction: String /* "None" | "UseMaxLayers" | "ExistingOnly" | "UseComponentWhitelist" | "ELandscapeLayerPaintingRestriction_MAX" */
    open var TargetDisplayOrder: String /* "Default" | "Alphabetical" | "UserSpecific" | "ELandscapeLayerDisplayMode_MAX" */
    open var ShowUnusedLayers: Boolean
    open var CurrentLayerIndex: Number

    companion object {
        fun Load(ResourceName: String): LandscapeEditorObject
        fun Find(Outer: UObject, ResourceName: String): LandscapeEditorObject
        fun GetDefaultObject(): LandscapeEditorObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapeEditorObject
        fun C(Other: UObject): LandscapeEditorObject
        fun C(Other: Any): LandscapeEditorObject
    }
}

external open class LandscapePlaceholder(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    companion object {
        fun GetDefaultObject(): LandscapePlaceholder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapePlaceholder
        fun C(Other: UObject): LandscapePlaceholder
        fun C(Other: Any): LandscapePlaceholder
    }
}

external open class ActorFactoryProceduralFoliage : ActorFactoryBoxVolume {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryProceduralFoliage
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryProceduralFoliage
        fun GetDefaultObject(): ActorFactoryProceduralFoliage
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryProceduralFoliage
        fun C(Other: UObject): ActorFactoryProceduralFoliage
        fun C(Other: Any): ActorFactoryProceduralFoliage
    }
}

external open class FoliageType_ActorThumbnailRenderer : BlueprintThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ActorThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ActorThumbnailRenderer
        fun GetDefaultObject(): FoliageType_ActorThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ActorThumbnailRenderer
        fun C(Other: UObject): FoliageType_ActorThumbnailRenderer
        fun C(Other: Any): FoliageType_ActorThumbnailRenderer
    }
}

external open class FoliageType_ISMThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ISMThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ISMThumbnailRenderer
        fun GetDefaultObject(): FoliageType_ISMThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ISMThumbnailRenderer
        fun C(Other: UObject): FoliageType_ISMThumbnailRenderer
        fun C(Other: Any): FoliageType_ISMThumbnailRenderer
    }
}

external open class FoliageType_InstancedStaticMeshFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_InstancedStaticMeshFactory
        fun Find(Outer: UObject, ResourceName: String): FoliageType_InstancedStaticMeshFactory
        fun GetDefaultObject(): FoliageType_InstancedStaticMeshFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_InstancedStaticMeshFactory
        fun C(Other: UObject): FoliageType_InstancedStaticMeshFactory
        fun C(Other: Any): FoliageType_InstancedStaticMeshFactory
    }
}

external open class FoliageType_ActorFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ActorFactory
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ActorFactory
        fun GetDefaultObject(): FoliageType_ActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ActorFactory
        fun C(Other: UObject): FoliageType_ActorFactory
        fun C(Other: Any): FoliageType_ActorFactory
    }
}

external open class LandscapeGrassTypeFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LandscapeGrassTypeFactory
        fun Find(Outer: UObject, ResourceName: String): LandscapeGrassTypeFactory
        fun GetDefaultObject(): LandscapeGrassTypeFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapeGrassTypeFactory
        fun C(Other: UObject): LandscapeGrassTypeFactory
        fun C(Other: Any): LandscapeGrassTypeFactory
    }
}

external open class ProceduralFoliageSpawnerFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ProceduralFoliageSpawnerFactory
        fun Find(Outer: UObject, ResourceName: String): ProceduralFoliageSpawnerFactory
        fun GetDefaultObject(): ProceduralFoliageSpawnerFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ProceduralFoliageSpawnerFactory
        fun C(Other: UObject): ProceduralFoliageSpawnerFactory
        fun C(Other: Any): ProceduralFoliageSpawnerFactory
    }
}

external open class RuntimeVirtualTextureFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): RuntimeVirtualTextureFactory
        fun Find(Outer: UObject, ResourceName: String): RuntimeVirtualTextureFactory
        fun GetDefaultObject(): RuntimeVirtualTextureFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RuntimeVirtualTextureFactory
        fun C(Other: UObject): RuntimeVirtualTextureFactory
        fun C(Other: Any): RuntimeVirtualTextureFactory
    }
}

external open class RuntimeVirtualTextureThumbnailRenderer : ThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): RuntimeVirtualTextureThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): RuntimeVirtualTextureThumbnailRenderer
        fun GetDefaultObject(): RuntimeVirtualTextureThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RuntimeVirtualTextureThumbnailRenderer
        fun C(Other: UObject): RuntimeVirtualTextureThumbnailRenderer
        fun C(Other: Any): RuntimeVirtualTextureThumbnailRenderer
    }
}

external open class VirtualTextureBuilderFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VirtualTextureBuilderFactory
        fun Find(Outer: UObject, ResourceName: String): VirtualTextureBuilderFactory
        fun GetDefaultObject(): VirtualTextureBuilderFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VirtualTextureBuilderFactory
        fun C(Other: UObject): VirtualTextureBuilderFactory
        fun C(Other: Any): VirtualTextureBuilderFactory
    }
}

external open class VirtualTextureBuilderThumbnailRenderer : TextureThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VirtualTextureBuilderThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): VirtualTextureBuilderThumbnailRenderer
        fun GetDefaultObject(): VirtualTextureBuilderThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VirtualTextureBuilderThumbnailRenderer
        fun C(Other: UObject): VirtualTextureBuilderThumbnailRenderer
        fun C(Other: Any): VirtualTextureBuilderThumbnailRenderer
    }
}

external var Context: JavascriptContext

external var Root: JavascriptEditorTick
