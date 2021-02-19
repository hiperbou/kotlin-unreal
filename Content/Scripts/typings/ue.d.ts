/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
declare class NiagaraUserParameterBinding { 
	Parameter: NiagaraVariable;
	clone() : NiagaraUserParameterBinding;
	static C(Other: UObject | any): NiagaraUserParameterBinding;
}

declare type ENDIExport_GPUAllocationMode = 'FixedSize' | 'PerParticle' | 'ENDIExport_MAX';
declare var ENDIExport_GPUAllocationMode : { FixedSize:'FixedSize',PerParticle:'PerParticle',ENDIExport_MAX:'ENDIExport_MAX', };
declare class NiagaraDataInterfaceExport extends NiagaraDataInterface { 
	CallbackHandlerParameter: NiagaraUserParameterBinding;
	GPUAllocationMode: ENDIExport_GPUAllocationMode;
	GPUAllocationFixedSize: number;
	GPUAllocationPerParticleSize: number;
	static Load(ResourceName: string): NiagaraDataInterfaceExport;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceExport;
	static GetDefaultObject(): NiagaraDataInterfaceExport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceExport;
	static C(Other: UObject | any): NiagaraDataInterfaceExport;
}

declare class NiagaraDataInterfaceGBuffer extends NiagaraDataInterface { 
	static Load(ResourceName: string): NiagaraDataInterfaceGBuffer;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGBuffer;
	static GetDefaultObject(): NiagaraDataInterfaceGBuffer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGBuffer;
	static C(Other: UObject | any): NiagaraDataInterfaceGBuffer;
}

declare class NiagaraDataInterfaceRWBase extends NiagaraDataInterface { 
	OutputShaderStages: any;
	IterationShaderStages: any;
	static Load(ResourceName: string): NiagaraDataInterfaceRWBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceRWBase;
	static GetDefaultObject(): NiagaraDataInterfaceRWBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceRWBase;
	static C(Other: UObject | any): NiagaraDataInterfaceRWBase;
}

declare class NiagaraDataInterfaceGrid2D extends NiagaraDataInterfaceRWBase { 
	NumCellsX: number;
	NumCellsY: number;
	NumCellsMaxAxis: number;
	NumAttributes: number;
	SetGridFromMaxAxis: boolean;
	WorldBBoxSize: Vector2D;
	static Load(ResourceName: string): NiagaraDataInterfaceGrid2D;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGrid2D;
	static GetDefaultObject(): NiagaraDataInterfaceGrid2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGrid2D;
	static C(Other: UObject | any): NiagaraDataInterfaceGrid2D;
}

declare type ENiagaraGpuBufferFormat = 'Float' | 'HalfFloat' | 'UnsignedNormalizedByte' | 'Max' | 'ENiagaraGpuBufferFormat_MAX';
declare var ENiagaraGpuBufferFormat : { Float:'Float',HalfFloat:'HalfFloat',UnsignedNormalizedByte:'UnsignedNormalizedByte',Max:'Max',ENiagaraGpuBufferFormat_MAX:'ENiagaraGpuBufferFormat_MAX', };
declare class NiagaraDataInterfaceGrid2DCollection extends NiagaraDataInterfaceGrid2D { 
	RenderTargetUserParameter: NiagaraUserParameterBinding;
	OverrideBufferFormat: ENiagaraGpuBufferFormat;
	bOverrideFormat: boolean;
	bPreviewGrid: boolean;
	PreviewAttribute: string;
	ManagedRenderTargets: any;
	static Load(ResourceName: string): NiagaraDataInterfaceGrid2DCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGrid2DCollection;
	static GetDefaultObject(): NiagaraDataInterfaceGrid2DCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGrid2DCollection;
	GetTextureSize(Component: NiagaraComponent,SizeX?: number,SizeY?: number): {SizeX: number, SizeY: number};
	GetRawTextureSize(Component: NiagaraComponent,SizeX?: number,SizeY?: number): {SizeX: number, SizeY: number};
	FillTexture2D(Component: NiagaraComponent,Dest: TextureRenderTarget2D,AttributeIndex: number): boolean;
	FillRawTexture2D(Component: NiagaraComponent,Dest: TextureRenderTarget2D,TilesX?: number,TilesY?: number): {TilesX: number, TilesY: number, $: boolean};
	static C(Other: UObject | any): NiagaraDataInterfaceGrid2DCollection;
}

declare class NiagaraDataInterfaceGrid2DCollectionReader extends NiagaraDataInterfaceGrid2D { 
	EmitterName: string;
	DIName: string;
	static Load(ResourceName: string): NiagaraDataInterfaceGrid2DCollectionReader;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGrid2DCollectionReader;
	static GetDefaultObject(): NiagaraDataInterfaceGrid2DCollectionReader;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGrid2DCollectionReader;
	static C(Other: UObject | any): NiagaraDataInterfaceGrid2DCollectionReader;
}

declare type ESetResolutionMethod = 'Independent' | 'MaxAxis' | 'CellSize' | 'ESetResolutionMethod_MAX';
declare var ESetResolutionMethod : { Independent:'Independent',MaxAxis:'MaxAxis',CellSize:'CellSize',ESetResolutionMethod_MAX:'ESetResolutionMethod_MAX', };
declare class NiagaraDataInterfaceGrid3D extends NiagaraDataInterfaceRWBase { 
	NumCells: IntVector;
	CellSize: number;
	NumCellsMaxAxis: number;
	SetResolutionMethod: ESetResolutionMethod;
	WorldBBoxSize: Vector;
	static Load(ResourceName: string): NiagaraDataInterfaceGrid3D;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGrid3D;
	static GetDefaultObject(): NiagaraDataInterfaceGrid3D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGrid3D;
	static C(Other: UObject | any): NiagaraDataInterfaceGrid3D;
}

declare class NiagaraDataInterfaceGrid3DCollection extends NiagaraDataInterfaceGrid3D { 
	NumAttributes: number;
	RenderTargetUserParameter: NiagaraUserParameterBinding;
	BufferFormat: ENiagaraGpuBufferFormat;
	static Load(ResourceName: string): NiagaraDataInterfaceGrid3DCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGrid3DCollection;
	static GetDefaultObject(): NiagaraDataInterfaceGrid3DCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGrid3DCollection;
	GetTextureSize(Component: NiagaraComponent,SizeX?: number,SizeY?: number,SizeZ?: number): {SizeX: number, SizeY: number, SizeZ: number};
	GetRawTextureSize(Component: NiagaraComponent,SizeX?: number,SizeY?: number,SizeZ?: number): {SizeX: number, SizeY: number, SizeZ: number};
	FillVolumeTexture(Component: NiagaraComponent,Dest: VolumeTexture,AttributeIndex: number): boolean;
	FillRawVolumeTexture(Component: NiagaraComponent,Dest: VolumeTexture,TilesX?: number,TilesY?: number,TileZ?: number): {TilesX: number, TilesY: number, TileZ: number, $: boolean};
	static C(Other: UObject | any): NiagaraDataInterfaceGrid3DCollection;
}

declare class NiagaraDataInterfaceLandscape extends NiagaraDataInterface { 
	SourceLandscape: Actor;
	static Load(ResourceName: string): NiagaraDataInterfaceLandscape;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceLandscape;
	static GetDefaultObject(): NiagaraDataInterfaceLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceLandscape;
	static C(Other: UObject | any): NiagaraDataInterfaceLandscape;
}

declare class NiagaraDataInterfaceNeighborGrid3D extends NiagaraDataInterfaceGrid3D { 
	MaxNeighborsPerCell: any;
	static Load(ResourceName: string): NiagaraDataInterfaceNeighborGrid3D;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceNeighborGrid3D;
	static GetDefaultObject(): NiagaraDataInterfaceNeighborGrid3D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceNeighborGrid3D;
	static C(Other: UObject | any): NiagaraDataInterfaceNeighborGrid3D;
}

declare class NiagaraDataInterfaceOcclusion extends NiagaraDataInterface { 
	static Load(ResourceName: string): NiagaraDataInterfaceOcclusion;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceOcclusion;
	static GetDefaultObject(): NiagaraDataInterfaceOcclusion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceOcclusion;
	static C(Other: UObject | any): NiagaraDataInterfaceOcclusion;
}

declare class NiagaraDataInterfaceParticleRead extends NiagaraDataInterfaceRWBase { 
	EmitterName: string;
	static Load(ResourceName: string): NiagaraDataInterfaceParticleRead;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceParticleRead;
	static GetDefaultObject(): NiagaraDataInterfaceParticleRead;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceParticleRead;
	static C(Other: UObject | any): NiagaraDataInterfaceParticleRead;
}

declare class NiagaraDataInterfacePlatformSet extends NiagaraDataInterface { 
	Platforms: NiagaraPlatformSet;
	static Load(ResourceName: string): NiagaraDataInterfacePlatformSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfacePlatformSet;
	static GetDefaultObject(): NiagaraDataInterfacePlatformSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfacePlatformSet;
	static C(Other: UObject | any): NiagaraDataInterfacePlatformSet;
}

declare class NiagaraDataInterfaceRenderTarget2D extends NiagaraDataInterfaceRWBase { 
	Size: IntPoint;
	OverrideRenderTargetFormat: ETextureRenderTargetFormat;
	bOverrideFormat: boolean;
	bPreviewRenderTarget: boolean;
	RenderTargetUserParameter: NiagaraUserParameterBinding;
	ManagedRenderTargets: any;
	static Load(ResourceName: string): NiagaraDataInterfaceRenderTarget2D;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceRenderTarget2D;
	static GetDefaultObject(): NiagaraDataInterfaceRenderTarget2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceRenderTarget2D;
	static C(Other: UObject | any): NiagaraDataInterfaceRenderTarget2D;
}

declare class NiagaraDataInterfaceRenderTarget2DArray extends NiagaraDataInterfaceRWBase { 
	Size: IntVector;
	OverrideRenderTargetFormat: ETextureRenderTargetFormat;
	bOverrideFormat: boolean;
	bPreviewRenderTarget: boolean;
	RenderTargetUserParameter: NiagaraUserParameterBinding;
	ManagedRenderTargets: any;
	static Load(ResourceName: string): NiagaraDataInterfaceRenderTarget2DArray;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceRenderTarget2DArray;
	static GetDefaultObject(): NiagaraDataInterfaceRenderTarget2DArray;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceRenderTarget2DArray;
	static C(Other: UObject | any): NiagaraDataInterfaceRenderTarget2DArray;
}

declare class NiagaraDataInterfaceRenderTargetVolume extends NiagaraDataInterfaceRWBase { 
	Size: IntVector;
	OverrideRenderTargetFormat: ETextureRenderTargetFormat;
	bOverrideFormat: boolean;
	bPreviewRenderTarget: boolean;
	RenderTargetUserParameter: NiagaraUserParameterBinding;
	ManagedRenderTargets: any;
	static Load(ResourceName: string): NiagaraDataInterfaceRenderTargetVolume;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceRenderTargetVolume;
	static GetDefaultObject(): NiagaraDataInterfaceRenderTargetVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceRenderTargetVolume;
	static C(Other: UObject | any): NiagaraDataInterfaceRenderTargetVolume;
}

declare class NiagaraDataInterfaceSimpleCounter extends NiagaraDataInterface { 
	static Load(ResourceName: string): NiagaraDataInterfaceSimpleCounter;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceSimpleCounter;
	static GetDefaultObject(): NiagaraDataInterfaceSimpleCounter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceSimpleCounter;
	static C(Other: UObject | any): NiagaraDataInterfaceSimpleCounter;
}

declare type ENDISkeletalMesh_SourceMode = 'Default' | 'Source' | 'AttachParent' | 'ENDISkeletalMesh_MAX';
declare var ENDISkeletalMesh_SourceMode : { Default:'Default',Source:'Source',AttachParent:'AttachParent',ENDISkeletalMesh_MAX:'ENDISkeletalMesh_MAX', };
declare type ENDISkeletalMesh_SkinningMode = 'Invalid' | 'None' | 'SkinOnTheFly' | 'PreSkin' | 'ENDISkeletalMesh_MAX';
declare var ENDISkeletalMesh_SkinningMode : { Invalid:'Invalid',None:'None',SkinOnTheFly:'SkinOnTheFly',PreSkin:'PreSkin',ENDISkeletalMesh_MAX:'ENDISkeletalMesh_MAX', };
declare class NiagaraDataInterfaceSkeletalMesh extends NiagaraDataInterface { 
	SourceMode: ENDISkeletalMesh_SourceMode;
	PreviewMesh: SkeletalMesh;
	Source: Actor;
	MeshUserParameter: NiagaraUserParameterBinding;
	SourceComponent: SkeletalMeshComponent;
	SkinningMode: ENDISkeletalMesh_SkinningMode;
	SamplingRegions: string[];
	WholeMeshLOD: number;
	FilteredBones: string[];
	FilteredSockets: string[];
	ExcludeBoneName: string;
	bExcludeBone: boolean;
	bRequireCurrentFrameData: boolean;
	static Load(ResourceName: string): NiagaraDataInterfaceSkeletalMesh;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceSkeletalMesh;
	static GetDefaultObject(): NiagaraDataInterfaceSkeletalMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceSkeletalMesh;
	static C(Other: UObject | any): NiagaraDataInterfaceSkeletalMesh;
}

declare class NiagaraDataInterfaceSpline extends NiagaraDataInterface { 
	Source: Actor;
	static Load(ResourceName: string): NiagaraDataInterfaceSpline;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceSpline;
	static GetDefaultObject(): NiagaraDataInterfaceSpline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceSpline;
	static C(Other: UObject | any): NiagaraDataInterfaceSpline;
}

declare type ENDIStaticMesh_SourceMode = 'Default' | 'Source' | 'AttachParent' | 'DefaultMeshOnly' | 'ENDIStaticMesh_MAX';
declare var ENDIStaticMesh_SourceMode : { Default:'Default',Source:'Source',AttachParent:'AttachParent',DefaultMeshOnly:'DefaultMeshOnly',ENDIStaticMesh_MAX:'ENDIStaticMesh_MAX', };
declare class NDIStaticMeshSectionFilter { 
	AllowedMaterialSlots: number[];
	clone() : NDIStaticMeshSectionFilter;
	static C(Other: UObject | any): NDIStaticMeshSectionFilter;
}

declare class NiagaraDataInterfaceStaticMesh extends NiagaraDataInterface { 
	SourceMode: ENDIStaticMesh_SourceMode;
	PreviewMesh: StaticMesh;
	DefaultMesh: StaticMesh;
	Source: Actor;
	SourceComponent: StaticMeshComponent;
	SectionFilter: NDIStaticMeshSectionFilter;
	bUsePhysicsBodyVelocity: boolean;
	FilteredSockets: string[];
	static Load(ResourceName: string): NiagaraDataInterfaceStaticMesh;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceStaticMesh;
	static GetDefaultObject(): NiagaraDataInterfaceStaticMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceStaticMesh;
	static C(Other: UObject | any): NiagaraDataInterfaceStaticMesh;
}

declare class NiagaraDataInterfaceTexture extends NiagaraDataInterface { 
	Texture: Texture;
	static Load(ResourceName: string): NiagaraDataInterfaceTexture;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceTexture;
	static GetDefaultObject(): NiagaraDataInterfaceTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceTexture;
	static C(Other: UObject | any): NiagaraDataInterfaceTexture;
}

declare class NiagaraDataInterfaceVector2DCurve extends NiagaraDataInterfaceCurveBase { 
	XCurve: RichCurve;
	YCurve: RichCurve;
	static Load(ResourceName: string): NiagaraDataInterfaceVector2DCurve;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceVector2DCurve;
	static GetDefaultObject(): NiagaraDataInterfaceVector2DCurve;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceVector2DCurve;
	static C(Other: UObject | any): NiagaraDataInterfaceVector2DCurve;
}

declare class NiagaraDataInterfaceVector4Curve extends NiagaraDataInterfaceCurveBase { 
	XCurve: RichCurve;
	YCurve: RichCurve;
	ZCurve: RichCurve;
	WCurve: RichCurve;
	static Load(ResourceName: string): NiagaraDataInterfaceVector4Curve;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceVector4Curve;
	static GetDefaultObject(): NiagaraDataInterfaceVector4Curve;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceVector4Curve;
	static C(Other: UObject | any): NiagaraDataInterfaceVector4Curve;
}

declare class NiagaraDataInterfaceVectorCurve extends NiagaraDataInterfaceCurveBase { 
	XCurve: RichCurve;
	YCurve: RichCurve;
	ZCurve: RichCurve;
	static Load(ResourceName: string): NiagaraDataInterfaceVectorCurve;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceVectorCurve;
	static GetDefaultObject(): NiagaraDataInterfaceVectorCurve;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceVectorCurve;
	static C(Other: UObject | any): NiagaraDataInterfaceVectorCurve;
}

declare class NiagaraDataInterfaceVectorField extends NiagaraDataInterface { 
	Field: VectorField;
	bTileX: boolean;
	bTileY: boolean;
	bTileZ: boolean;
	static Load(ResourceName: string): NiagaraDataInterfaceVectorField;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceVectorField;
	static GetDefaultObject(): NiagaraDataInterfaceVectorField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceVectorField;
	static C(Other: UObject | any): NiagaraDataInterfaceVectorField;
}

declare class NiagaraDataInterfaceVolumeTexture extends NiagaraDataInterface { 
	Texture: VolumeTexture;
	static Load(ResourceName: string): NiagaraDataInterfaceVolumeTexture;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceVolumeTexture;
	static GetDefaultObject(): NiagaraDataInterfaceVolumeTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceVolumeTexture;
	static C(Other: UObject | any): NiagaraDataInterfaceVolumeTexture;
}

declare class NiagaraSignificanceHandlerDistance extends NiagaraSignificanceHandler { 
	static Load(ResourceName: string): NiagaraSignificanceHandlerDistance;
	static Find(Outer: UObject, ResourceName: string): NiagaraSignificanceHandlerDistance;
	static GetDefaultObject(): NiagaraSignificanceHandlerDistance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSignificanceHandlerDistance;
	static C(Other: UObject | any): NiagaraSignificanceHandlerDistance;
}

declare class NiagaraSignificanceHandlerAge extends NiagaraSignificanceHandler { 
	static Load(ResourceName: string): NiagaraSignificanceHandlerAge;
	static Find(Outer: UObject, ResourceName: string): NiagaraSignificanceHandlerAge;
	static GetDefaultObject(): NiagaraSignificanceHandlerAge;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSignificanceHandlerAge;
	static C(Other: UObject | any): NiagaraSignificanceHandlerAge;
}

declare class NiagaraEventReceiverEmitterAction extends UObject { 
	static Load(ResourceName: string): NiagaraEventReceiverEmitterAction;
	static Find(Outer: UObject, ResourceName: string): NiagaraEventReceiverEmitterAction;
	static GetDefaultObject(): NiagaraEventReceiverEmitterAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEventReceiverEmitterAction;
	static C(Other: UObject | any): NiagaraEventReceiverEmitterAction;
}

declare class NiagaraEventReceiverEmitterAction_SpawnParticles extends NiagaraEventReceiverEmitterAction { 
	NumParticles: any;
	static Load(ResourceName: string): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static Find(Outer: UObject, ResourceName: string): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static GetDefaultObject(): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static C(Other: UObject | any): NiagaraEventReceiverEmitterAction_SpawnParticles;
}

declare class NiagaraFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): NiagaraFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): NiagaraFunctionLibrary;
	static GetDefaultObject(): NiagaraFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraFunctionLibrary;
	static SpawnSystemAttached(SystemTemplate: NiagaraSystem,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,bAutoDestroy: boolean,bAutoActivate: boolean,PoolingMethod: ENCPoolMethod,bPreCullCheck: boolean): NiagaraComponent;
	static SpawnSystemAtLocation(WorldContextObject: UObject,SystemTemplate: NiagaraSystem,Location: Vector,Rotation: Rotator,Scale: Vector,bAutoDestroy: boolean,bAutoActivate: boolean,PoolingMethod: ENCPoolMethod,bPreCullCheck: boolean): NiagaraComponent;
	static SetVolumeTextureObject(NiagaraSystem: NiagaraComponent,OverrideName: string,Texture: VolumeTexture): void;
	static SetTextureObject(NiagaraSystem: NiagaraComponent,OverrideName: string,Texture: Texture): void;
	static SetSkeletalMeshDataInterfaceSamplingRegions(NiagaraSystem: NiagaraComponent,OverrideName: string,SamplingRegions: string[]): void;
	static OverrideSystemUserVariableStaticMeshComponent(NiagaraSystem: NiagaraComponent,OverrideName: string,StaticMeshComponent: StaticMeshComponent): void;
	static OverrideSystemUserVariableStaticMesh(NiagaraSystem: NiagaraComponent,OverrideName: string,StaticMesh: StaticMesh): void;
	static OverrideSystemUserVariableSkeletalMeshComponent(NiagaraSystem: NiagaraComponent,OverrideName: string,SkeletalMeshComponent: SkeletalMeshComponent): void;
	static GetNiagaraParameterCollection(WorldContextObject: UObject,Collection: NiagaraParameterCollection): NiagaraParameterCollectionInstance;
	static C(Other: UObject | any): NiagaraFunctionLibrary;
}

declare class NiagaraLightRendererProperties extends NiagaraRendererProperties { 
	bUseInverseSquaredFalloff: boolean;
	bAffectsTranslucency: boolean;
	RadiusScale: number;
	ColorAdd: Vector;
	LightRenderingEnabledBinding: NiagaraVariableAttributeBinding;
	LightExponentBinding: NiagaraVariableAttributeBinding;
	PositionBinding: NiagaraVariableAttributeBinding;
	ColorBinding: NiagaraVariableAttributeBinding;
	RadiusBinding: NiagaraVariableAttributeBinding;
	VolumetricScatteringBinding: NiagaraVariableAttributeBinding;
	static Load(ResourceName: string): NiagaraLightRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraLightRendererProperties;
	static GetDefaultObject(): NiagaraLightRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraLightRendererProperties;
	static C(Other: UObject | any): NiagaraLightRendererProperties;
}

declare type ENiagaraSortMode = 'None' | 'ViewDepth' | 'ViewDistance' | 'CustomAscending' | 'CustomDecending' | 'ENiagaraSortMode_MAX';
declare var ENiagaraSortMode : { None:'None',ViewDepth:'ViewDepth',ViewDistance:'ViewDistance',CustomAscending:'CustomAscending',CustomDecending:'CustomDecending',ENiagaraSortMode_MAX:'ENiagaraSortMode_MAX', };
declare class NiagaraMeshMaterialOverride { 
	ExplicitMat: MaterialInterface;
	UserParamBinding: NiagaraUserParameterBinding;
	clone() : NiagaraMeshMaterialOverride;
	static C(Other: UObject | any): NiagaraMeshMaterialOverride;
}

declare type ENiagaraMeshFacingMode = 'Default' | 'Velocity' | 'CameraPosition' | 'CameraPlane' | 'ENiagaraMeshFacingMode_MAX';
declare var ENiagaraMeshFacingMode : { Default:'Default',Velocity:'Velocity',CameraPosition:'CameraPosition',CameraPlane:'CameraPlane',ENiagaraMeshFacingMode_MAX:'ENiagaraMeshFacingMode_MAX', };
declare type ENiagaraMeshLockedAxisSpace = 'Simulation' | 'World' | 'Local' | 'ENiagaraMeshLockedAxisSpace_MAX';
declare var ENiagaraMeshLockedAxisSpace : { Simulation:'Simulation',World:'World',Local:'Local',ENiagaraMeshLockedAxisSpace_MAX:'ENiagaraMeshLockedAxisSpace_MAX', };
declare type ENiagaraMeshPivotOffsetSpace = 'Mesh' | 'Simulation' | 'World' | 'Local' | 'ENiagaraMeshPivotOffsetSpace_MAX';
declare var ENiagaraMeshPivotOffsetSpace : { Mesh:'Mesh',Simulation:'Simulation',World:'World',Local:'Local',ENiagaraMeshPivotOffsetSpace_MAX:'ENiagaraMeshPivotOffsetSpace_MAX', };
declare class NiagaraMeshRendererProperties extends NiagaraRendererProperties { 
	ParticleMesh: StaticMesh;
	SortMode: ENiagaraSortMode;
	bOverrideMaterials: boolean;
	bSortOnlyWhenTranslucent: boolean;
	OverrideMaterials: NiagaraMeshMaterialOverride[];
	SubImageSize: Vector2D;
	bSubImageBlend: boolean;
	FacingMode: ENiagaraMeshFacingMode;
	bLockedAxisEnable: boolean;
	LockedAxis: Vector;
	LockedAxisSpace: ENiagaraMeshLockedAxisSpace;
	PivotOffset: Vector;
	PivotOffsetSpace: ENiagaraMeshPivotOffsetSpace;
	bEnableFrustumCulling: boolean;
	bEnableCameraDistanceCulling: boolean;
	MinCameraDistance: number;
	MaxCameraDistance: number;
	RendererVisibility: any;
	PositionBinding: NiagaraVariableAttributeBinding;
	ColorBinding: NiagaraVariableAttributeBinding;
	VelocityBinding: NiagaraVariableAttributeBinding;
	MeshOrientationBinding: NiagaraVariableAttributeBinding;
	ScaleBinding: NiagaraVariableAttributeBinding;
	SubImageIndexBinding: NiagaraVariableAttributeBinding;
	DynamicMaterialBinding: NiagaraVariableAttributeBinding;
	DynamicMaterial1Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial2Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial3Binding: NiagaraVariableAttributeBinding;
	MaterialRandomBinding: NiagaraVariableAttributeBinding;
	CustomSortingBinding: NiagaraVariableAttributeBinding;
	NormalizedAgeBinding: NiagaraVariableAttributeBinding;
	CameraOffsetBinding: NiagaraVariableAttributeBinding;
	RendererVisibilityTagBinding: NiagaraVariableAttributeBinding;
	static Load(ResourceName: string): NiagaraMeshRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraMeshRendererProperties;
	static GetDefaultObject(): NiagaraMeshRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMeshRendererProperties;
	static C(Other: UObject | any): NiagaraMeshRendererProperties;
}

declare class NiagaraMessageDataBase extends UObject { 
	static Load(ResourceName: string): NiagaraMessageDataBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraMessageDataBase;
	static GetDefaultObject(): NiagaraMessageDataBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMessageDataBase;
	static C(Other: UObject | any): NiagaraMessageDataBase;
}

declare class NiagaraPrecompileContainer extends UObject { 
	Scripts: NiagaraScript[];
	System: NiagaraSystem;
	static Load(ResourceName: string): NiagaraPrecompileContainer;
	static Find(Outer: UObject, ResourceName: string): NiagaraPrecompileContainer;
	static GetDefaultObject(): NiagaraPrecompileContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPrecompileContainer;
	static C(Other: UObject | any): NiagaraPrecompileContainer;
}

declare class NiagaraPreviewBase extends Actor { 
	static GetDefaultObject(): NiagaraPreviewBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewBase;
	SetSystem(InSystem: NiagaraSystem): void;
	SetLabelText(InXAxisText: string,InYAxisText: string): void;
	static C(Other: UObject | any): NiagaraPreviewBase;
}

declare class NiagaraPreviewAxis extends UObject { 
	static Load(ResourceName: string): NiagaraPreviewAxis;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis;
	static GetDefaultObject(): NiagaraPreviewAxis;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis;
	Num(): number;
	ApplyToPreview(PreviewComponent: NiagaraComponent,PreviewIndex: number,bIsXAxis: boolean,OutLabelText?: string): {OutLabelText: string};
	static C(Other: UObject | any): NiagaraPreviewAxis;
}

declare class NiagaraPreviewAxis_InterpParamBase extends NiagaraPreviewAxis { 
	Param: string;
	Count: number;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamBase;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamBase;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamBase;
}

declare class NiagaraPreviewAxis_InterpParamInt32 extends NiagaraPreviewAxis_InterpParamBase { 
	Min: number;
	Max: number;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamInt32;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamInt32;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamInt32;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamInt32;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamInt32;
}

declare class NiagaraPreviewAxis_InterpParamFloat extends NiagaraPreviewAxis_InterpParamBase { 
	Min: number;
	Max: number;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamFloat;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamFloat;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamFloat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamFloat;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamFloat;
}

declare class NiagaraPreviewAxis_InterpParamVector2D extends NiagaraPreviewAxis_InterpParamBase { 
	Min: Vector2D;
	Max: Vector2D;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamVector2D;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamVector2D;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamVector2D;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamVector2D;
}

declare class NiagaraPreviewAxis_InterpParamVector extends NiagaraPreviewAxis_InterpParamBase { 
	Min: Vector;
	Max: Vector;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamVector;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamVector;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamVector;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamVector;
}

declare class NiagaraPreviewAxis_InterpParamVector4 extends NiagaraPreviewAxis_InterpParamBase { 
	Min: Vector4;
	Max: Vector4;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamVector4;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamVector4;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamVector4;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamVector4;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamVector4;
}

declare class NiagaraPreviewAxis_InterpParamLinearColor extends NiagaraPreviewAxis_InterpParamBase { 
	Min: LinearColor;
	Max: LinearColor;
	static Load(ResourceName: string): NiagaraPreviewAxis_InterpParamLinearColor;
	static Find(Outer: UObject, ResourceName: string): NiagaraPreviewAxis_InterpParamLinearColor;
	static GetDefaultObject(): NiagaraPreviewAxis_InterpParamLinearColor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewAxis_InterpParamLinearColor;
	static C(Other: UObject | any): NiagaraPreviewAxis_InterpParamLinearColor;
}

declare type ENiagaraPreviewGridResetMode = 'Never' | 'Individual' | 'All' | 'ENiagaraPreviewGridResetMode_MAX';
declare var ENiagaraPreviewGridResetMode : { Never:'Never',Individual:'Individual',All:'All',ENiagaraPreviewGridResetMode_MAX:'ENiagaraPreviewGridResetMode_MAX', };
declare class NiagaraPreviewGrid extends Actor { 
	System: NiagaraSystem;
	ResetMode: ENiagaraPreviewGridResetMode;
	PreviewAxisX: NiagaraPreviewAxis;
	PreviewAxisY: NiagaraPreviewAxis;
	PreviewClass: UnrealEngineClass;
	SpacingX: number;
	SpacingY: number;
	NumX: number;
	NumY: number;
	PreviewComponents: ChildActorComponent[];
	SpriteComponent: BillboardComponent;
	ArrowComponent: ArrowComponent;
	static GetDefaultObject(): NiagaraPreviewGrid;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraPreviewGrid;
	SetPaused(bPaused: boolean): void;
	GetPreviews(OutPreviews?: NiagaraComponent[]): {OutPreviews: NiagaraComponent[]};
	DeactivatePreviews(): void;
	ActivatePreviews(bReset: boolean): void;
	static C(Other: UObject | any): NiagaraPreviewGrid;
}

declare type ENiagaraRibbonFacingMode = 'Screen' | 'Custom' | 'CustomSideVector' | 'ENiagaraRibbonFacingMode_MAX';
declare var ENiagaraRibbonFacingMode : { Screen:'Screen',Custom:'Custom',CustomSideVector:'CustomSideVector',ENiagaraRibbonFacingMode_MAX:'ENiagaraRibbonFacingMode_MAX', };
declare type ENiagaraRibbonUVEdgeMode = 'SmoothTransition' | 'Locked' | 'ENiagaraRibbonUVEdgeMode_MAX';
declare var ENiagaraRibbonUVEdgeMode : { SmoothTransition:'SmoothTransition',Locked:'Locked',ENiagaraRibbonUVEdgeMode_MAX:'ENiagaraRibbonUVEdgeMode_MAX', };
declare type ENiagaraRibbonUVDistributionMode = 'ScaledUniformly' | 'ScaledUsingRibbonSegmentLength' | 'TiledOverRibbonLength' | 'ENiagaraRibbonUVDistributionMode_MAX';
declare var ENiagaraRibbonUVDistributionMode : { ScaledUniformly:'ScaledUniformly',ScaledUsingRibbonSegmentLength:'ScaledUsingRibbonSegmentLength',TiledOverRibbonLength:'TiledOverRibbonLength',ENiagaraRibbonUVDistributionMode_MAX:'ENiagaraRibbonUVDistributionMode_MAX', };
declare class NiagaraRibbonUVSettings { 
	LeadingEdgeMode: ENiagaraRibbonUVEdgeMode;
	TrailingEdgeMode: ENiagaraRibbonUVEdgeMode;
	DistributionMode: ENiagaraRibbonUVDistributionMode;
	TilingLength: number;
	Offset: Vector2D;
	Scale: Vector2D;
	bEnablePerParticleUOverride: boolean;
	bEnablePerParticleVRangeOverride: boolean;
	clone() : NiagaraRibbonUVSettings;
	static C(Other: UObject | any): NiagaraRibbonUVSettings;
}

declare type ENiagaraRibbonAgeOffsetMode = 'Scale' | 'Clip' | 'ENiagaraRibbonAgeOffsetMode_MAX';
declare var ENiagaraRibbonAgeOffsetMode : { Scale:'Scale',Clip:'Clip',ENiagaraRibbonAgeOffsetMode_MAX:'ENiagaraRibbonAgeOffsetMode_MAX', };
declare type ENiagaraRibbonDrawDirection = 'FrontToBack' | 'BackToFront' | 'ENiagaraRibbonDrawDirection_MAX';
declare var ENiagaraRibbonDrawDirection : { FrontToBack:'FrontToBack',BackToFront:'BackToFront',ENiagaraRibbonDrawDirection_MAX:'ENiagaraRibbonDrawDirection_MAX', };
declare type ENiagaraRibbonTessellationMode = 'Automatic' | 'Custom' | 'Disabled' | 'ENiagaraRibbonTessellationMode_MAX';
declare var ENiagaraRibbonTessellationMode : { Automatic:'Automatic',Custom:'Custom',Disabled:'Disabled',ENiagaraRibbonTessellationMode_MAX:'ENiagaraRibbonTessellationMode_MAX', };
declare class NiagaraRibbonRendererProperties extends NiagaraRendererProperties { 
	Material: MaterialInterface;
	MaterialUserParamBinding: NiagaraUserParameterBinding;
	FacingMode: ENiagaraRibbonFacingMode;
	UV0Settings: NiagaraRibbonUVSettings;
	UV1Settings: NiagaraRibbonUVSettings;
	UV0TilingDistance: number;
	UV0Scale: Vector2D;
	UV0Offset: Vector2D;
	UV0AgeOffsetMode: ENiagaraRibbonAgeOffsetMode;
	UV1TilingDistance: number;
	UV1Scale: Vector2D;
	UV1Offset: Vector2D;
	UV1AgeOffsetMode: ENiagaraRibbonAgeOffsetMode;
	DrawDirection: ENiagaraRibbonDrawDirection;
	CurveTension: number;
	TessellationMode: ENiagaraRibbonTessellationMode;
	TessellationFactor: number;
	bUseConstantFactor: boolean;
	TessellationAngle: number;
	bScreenSpaceTessellation: boolean;
	PositionBinding: NiagaraVariableAttributeBinding;
	ColorBinding: NiagaraVariableAttributeBinding;
	VelocityBinding: NiagaraVariableAttributeBinding;
	NormalizedAgeBinding: NiagaraVariableAttributeBinding;
	RibbonTwistBinding: NiagaraVariableAttributeBinding;
	RibbonWidthBinding: NiagaraVariableAttributeBinding;
	RibbonFacingBinding: NiagaraVariableAttributeBinding;
	RibbonIdBinding: NiagaraVariableAttributeBinding;
	RibbonLinkOrderBinding: NiagaraVariableAttributeBinding;
	MaterialRandomBinding: NiagaraVariableAttributeBinding;
	DynamicMaterialBinding: NiagaraVariableAttributeBinding;
	DynamicMaterial1Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial2Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial3Binding: NiagaraVariableAttributeBinding;
	U0OverrideBinding: NiagaraVariableAttributeBinding;
	V0RangeOverrideBinding: NiagaraVariableAttributeBinding;
	U1OverrideBinding: NiagaraVariableAttributeBinding;
	V1RangeOverrideBinding: NiagaraVariableAttributeBinding;
	static Load(ResourceName: string): NiagaraRibbonRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraRibbonRendererProperties;
	static GetDefaultObject(): NiagaraRibbonRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraRibbonRendererProperties;
	static C(Other: UObject | any): NiagaraRibbonRendererProperties;
}

declare class NiagaraSettings extends DeveloperSettings { 
	AdditionalParameterTypes: SoftObjectPath[];
	AdditionalPayloadTypes: SoftObjectPath[];
	AdditionalParameterEnums: SoftObjectPath[];
	DefaultEffectType: SoftObjectPath;
	QualityLevels: string[];
	ComponentRendererWarningsPerClass: any;
	DefaultRenderTargetFormat: ETextureRenderTargetFormat;
	DefaultGridFormat: ENiagaraGpuBufferFormat;
	DefaultEffectTypePtr: NiagaraEffectType;
	static Load(ResourceName: string): NiagaraSettings;
	static Find(Outer: UObject, ResourceName: string): NiagaraSettings;
	static GetDefaultObject(): NiagaraSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSettings;
	static C(Other: UObject | any): NiagaraSettings;
}

declare type ENiagaraIterationSource = 'Particles' | 'DataInterface' | 'ENiagaraIterationSource_MAX';
declare var ENiagaraIterationSource : { Particles:'Particles',DataInterface:'DataInterface',ENiagaraIterationSource_MAX:'ENiagaraIterationSource_MAX', };
declare class NiagaraVariableDataInterfaceBinding { 
	BoundVariable: NiagaraVariable;
	clone() : NiagaraVariableDataInterfaceBinding;
	static C(Other: UObject | any): NiagaraVariableDataInterfaceBinding;
}

declare class NiagaraSimulationStageGeneric extends NiagaraSimulationStageBase { 
	IterationSource: ENiagaraIterationSource;
	Iterations: number;
	bSpawnOnly: boolean;
	bDisablePartialParticleUpdate: boolean;
	DataInterface: NiagaraVariableDataInterfaceBinding;
	static Load(ResourceName: string): NiagaraSimulationStageGeneric;
	static Find(Outer: UObject, ResourceName: string): NiagaraSimulationStageGeneric;
	static GetDefaultObject(): NiagaraSimulationStageGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSimulationStageGeneric;
	static C(Other: UObject | any): NiagaraSimulationStageGeneric;
}

declare type ENiagaraRendererSourceDataMode = 'Particles' | 'Emitter' | 'ENiagaraRendererSourceDataMode_MAX';
declare var ENiagaraRendererSourceDataMode : { Particles:'Particles',Emitter:'Emitter',ENiagaraRendererSourceDataMode_MAX:'ENiagaraRendererSourceDataMode_MAX', };
declare type ENiagaraSpriteAlignment = 'Unaligned' | 'VelocityAligned' | 'CustomAlignment' | 'ENiagaraSpriteAlignment_MAX';
declare var ENiagaraSpriteAlignment : { Unaligned:'Unaligned',VelocityAligned:'VelocityAligned',CustomAlignment:'CustomAlignment',ENiagaraSpriteAlignment_MAX:'ENiagaraSpriteAlignment_MAX', };
declare type ENiagaraSpriteFacingMode = 'FaceCamera' | 'FaceCameraPlane' | 'CustomFacingVector' | 'FaceCameraPosition' | 'FaceCameraDistanceBlend' | 'ENiagaraSpriteFacingMode_MAX';
declare var ENiagaraSpriteFacingMode : { FaceCamera:'FaceCamera',FaceCameraPlane:'FaceCameraPlane',CustomFacingVector:'CustomFacingVector',FaceCameraPosition:'FaceCameraPosition',FaceCameraDistanceBlend:'FaceCameraDistanceBlend',ENiagaraSpriteFacingMode_MAX:'ENiagaraSpriteFacingMode_MAX', };
declare class NiagaraMaterialAttributeBinding { 
	MaterialParameterName: string;
	NiagaraVariable: NiagaraVariableBase;
	ResolvedNiagaraVariable: NiagaraVariableBase;
	NiagaraChildVariable: NiagaraVariableBase;
	clone() : NiagaraMaterialAttributeBinding;
	static C(Other: UObject | any): NiagaraMaterialAttributeBinding;
}

declare class NiagaraSpriteRendererProperties extends NiagaraRendererProperties { 
	Material: MaterialInterface;
	SourceMode: ENiagaraRendererSourceDataMode;
	MaterialUserParamBinding: NiagaraUserParameterBinding;
	Alignment: ENiagaraSpriteAlignment;
	FacingMode: ENiagaraSpriteFacingMode;
	PivotInUVSpace: Vector2D;
	SortMode: ENiagaraSortMode;
	SubImageSize: Vector2D;
	bSubImageBlend: boolean;
	bRemoveHMDRollInVR: boolean;
	bSortOnlyWhenTranslucent: boolean;
	bGpuLowLatencyTranslucency: boolean;
	MinFacingCameraBlendDistance: number;
	MaxFacingCameraBlendDistance: number;
	bEnableCameraDistanceCulling: boolean;
	MinCameraDistance: number;
	MaxCameraDistance: number;
	RendererVisibility: any;
	PositionBinding: NiagaraVariableAttributeBinding;
	ColorBinding: NiagaraVariableAttributeBinding;
	VelocityBinding: NiagaraVariableAttributeBinding;
	SpriteRotationBinding: NiagaraVariableAttributeBinding;
	SpriteSizeBinding: NiagaraVariableAttributeBinding;
	SpriteFacingBinding: NiagaraVariableAttributeBinding;
	SpriteAlignmentBinding: NiagaraVariableAttributeBinding;
	SubImageIndexBinding: NiagaraVariableAttributeBinding;
	DynamicMaterialBinding: NiagaraVariableAttributeBinding;
	DynamicMaterial1Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial2Binding: NiagaraVariableAttributeBinding;
	DynamicMaterial3Binding: NiagaraVariableAttributeBinding;
	CameraOffsetBinding: NiagaraVariableAttributeBinding;
	UVScaleBinding: NiagaraVariableAttributeBinding;
	MaterialRandomBinding: NiagaraVariableAttributeBinding;
	CustomSortingBinding: NiagaraVariableAttributeBinding;
	NormalizedAgeBinding: NiagaraVariableAttributeBinding;
	RendererVisibilityTagBinding: NiagaraVariableAttributeBinding;
	MaterialParameterBindings: NiagaraMaterialAttributeBinding[];
	bUseMaterialCutoutTexture: boolean;
	CutoutTexture: Texture2D;
	BoundingMode: ESubUVBoundingVertexCount;
	OpacitySourceMode: EOpacitySourceMode;
	AlphaThreshold: number;
	static Load(ResourceName: string): NiagaraSpriteRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraSpriteRendererProperties;
	static GetDefaultObject(): NiagaraSpriteRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSpriteRendererProperties;
	static C(Other: UObject | any): NiagaraSpriteRendererProperties;
}

declare class ActorFactoryNiagara extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryNiagara;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryNiagara;
	static GetDefaultObject(): ActorFactoryNiagara;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryNiagara;
	static C(Other: UObject | any): ActorFactoryNiagara;
}

declare class EdGraphSchema_Niagara extends EdGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_Niagara;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_Niagara;
	static GetDefaultObject(): EdGraphSchema_Niagara;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_Niagara;
	static C(Other: UObject | any): EdGraphSchema_Niagara;
}

declare class EdGraphSchema_NiagaraSystemOverview extends EdGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_NiagaraSystemOverview;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_NiagaraSystemOverview;
	static GetDefaultObject(): EdGraphSchema_NiagaraSystemOverview;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_NiagaraSystemOverview;
	static C(Other: UObject | any): EdGraphSchema_NiagaraSystemOverview;
}

declare class MovieSceneNiagaraEmitterSectionBase extends MovieSceneSection { 
	static Load(ResourceName: string): MovieSceneNiagaraEmitterSectionBase;
	static Find(Outer: UObject, ResourceName: string): MovieSceneNiagaraEmitterSectionBase;
	static GetDefaultObject(): MovieSceneNiagaraEmitterSectionBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneNiagaraEmitterSectionBase;
	static C(Other: UObject | any): MovieSceneNiagaraEmitterSectionBase;
}

declare class MovieSceneNiagaraEmitterSection extends MovieSceneNiagaraEmitterSectionBase { 
	NumLoops: number;
	bStartTimeIncludedInFirstLoopOnly: boolean;
	static Load(ResourceName: string): MovieSceneNiagaraEmitterSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneNiagaraEmitterSection;
	static GetDefaultObject(): MovieSceneNiagaraEmitterSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneNiagaraEmitterSection;
	static C(Other: UObject | any): MovieSceneNiagaraEmitterSection;
}

declare class MovieSceneNiagaraEmitterTrack extends MovieSceneNameableTrack { 
	Sections: MovieSceneSection[];
	bSectionsWereModified: boolean;
	EmitterHandleId: Guid;
	SystemPath: string;
	static Load(ResourceName: string): MovieSceneNiagaraEmitterTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneNiagaraEmitterTrack;
	static GetDefaultObject(): MovieSceneNiagaraEmitterTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneNiagaraEmitterTrack;
	static C(Other: UObject | any): MovieSceneNiagaraEmitterTrack;
}

declare type ENiagaraClipboardFunctionInputValueMode = 'Local' | 'Linked' | 'Data' | 'Expression' | 'Dynamic' | 'ENiagaraClipboardFunctionInputValueMode_MAX';
declare var ENiagaraClipboardFunctionInputValueMode : { Local:'Local',Linked:'Linked',Data:'Data',Expression:'Expression',Dynamic:'Dynamic',ENiagaraClipboardFunctionInputValueMode_MAX:'ENiagaraClipboardFunctionInputValueMode_MAX', };
declare type ENiagaraClipboardFunctionScriptMode = 'ScriptAsset' | 'Assignment' | 'ENiagaraClipboardFunctionScriptMode_MAX';
declare var ENiagaraClipboardFunctionScriptMode : { ScriptAsset:'ScriptAsset',Assignment:'Assignment',ENiagaraClipboardFunctionScriptMode_MAX:'ENiagaraClipboardFunctionScriptMode_MAX', };
declare class NiagaraNode extends EdGraphNode { 
	ChangeId: Guid;
	static Load(ResourceName: string): NiagaraNode;
	static Find(Outer: UObject, ResourceName: string): NiagaraNode;
	static GetDefaultObject(): NiagaraNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNode;
	static C(Other: UObject | any): NiagaraNode;
}

declare class NiagaraNodeWithDynamicPins extends NiagaraNode { 
	static Load(ResourceName: string): NiagaraNodeWithDynamicPins;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeWithDynamicPins;
	static GetDefaultObject(): NiagaraNodeWithDynamicPins;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeWithDynamicPins;
	static C(Other: UObject | any): NiagaraNodeWithDynamicPins;
}

declare class NiagaraPropagatedVariable { 
	SwitchParameter: NiagaraVariable;
	PropagatedName: string;
	clone() : NiagaraPropagatedVariable;
	static C(Other: UObject | any): NiagaraPropagatedVariable;
}

declare class NiagaraNodeFunctionCall extends NiagaraNodeWithDynamicPins { 
	FunctionScript: NiagaraScript;
	FunctionScriptAssetObjectPath: string;
	Signature: NiagaraFunctionSignature;
	FunctionSpecifiers: any;
	PropagatedStaticSwitchParameters: NiagaraPropagatedVariable[];
	CachedChangeId: Guid;
	FunctionDisplayName: string;
	MessageKeyToMessageMap: any;
	static Load(ResourceName: string): NiagaraNodeFunctionCall;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeFunctionCall;
	static GetDefaultObject(): NiagaraNodeFunctionCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeFunctionCall;
	static C(Other: UObject | any): NiagaraNodeFunctionCall;
}

declare class NiagaraClipboardFunction extends UObject { 
	FunctionName: string;
	DisplayName: string;
	ScriptMode: ENiagaraClipboardFunctionScriptMode;
	Script: NiagaraScript;
	AssignmentTargets: NiagaraVariable[];
	AssignmentDefaults: string[];
	Inputs: NiagaraClipboardFunctionInput[];
	OnPastedFunctionCallNodeDelegate: UnrealEngineDelegate<(PastedFunctionCall: NiagaraNodeFunctionCall) => void>;
	static Load(ResourceName: string): NiagaraClipboardFunction;
	static Find(Outer: UObject, ResourceName: string): NiagaraClipboardFunction;
	static GetDefaultObject(): NiagaraClipboardFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraClipboardFunction;
	static C(Other: UObject | any): NiagaraClipboardFunction;
}

declare class NiagaraClipboardFunctionInput extends UObject { 
	InputName: string;
	InputType: NiagaraTypeDefinition;
	bHasEditCondition: boolean;
	bEditConditionValue: boolean;
	ValueMode: ENiagaraClipboardFunctionInputValueMode;
	Local: number[];
	Linked: string;
	Data: NiagaraDataInterface;
	Expression: string;
	Dynamic: NiagaraClipboardFunction;
	static Load(ResourceName: string): NiagaraClipboardFunctionInput;
	static Find(Outer: UObject, ResourceName: string): NiagaraClipboardFunctionInput;
	static GetDefaultObject(): NiagaraClipboardFunctionInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraClipboardFunctionInput;
	static C(Other: UObject | any): NiagaraClipboardFunctionInput;
}

declare type ENiagaraDefaultMode = 'Value' | 'Binding' | 'Custom' | 'ENiagaraDefaultMode_MAX';
declare var ENiagaraDefaultMode : { Value:'Value',Binding:'Binding',Custom:'Custom',ENiagaraDefaultMode_MAX:'ENiagaraDefaultMode_MAX', };
declare class NiagaraScriptVariableBinding { 
	Name: string;
	clone() : NiagaraScriptVariableBinding;
	static C(Other: UObject | any): NiagaraScriptVariableBinding;
}

declare class NiagaraInputConditionMetadata { 
	InputName: string;
	TargetValues: string[];
	clone() : NiagaraInputConditionMetadata;
	static C(Other: UObject | any): NiagaraInputConditionMetadata;
}

declare type ENiagaraScriptParameterUsage = 'Input' | 'Output' | 'Local' | 'InputOutput' | 'InitialValueInput' | 'None' | 'Num' | 'ENiagaraScriptParameterUsage_MAX';
declare var ENiagaraScriptParameterUsage : { Input:'Input',Output:'Output',Local:'Local',InputOutput:'InputOutput',InitialValueInput:'InitialValueInput',None:'None',Num:'Num',ENiagaraScriptParameterUsage_MAX:'ENiagaraScriptParameterUsage_MAX', };
declare class NiagaraVariableMetaData { 
	Description: string;
	CategoryName: string;
	bAdvancedDisplay: boolean;
	EditorSortPriority: number;
	bInlineEditConditionToggle: boolean;
	editcondition: NiagaraInputConditionMetadata;
	VisibleCondition: NiagaraInputConditionMetadata;
	PropertyMetaData: any;
	ParentAttribute: string;
	ScopeName: string;
	Usage: ENiagaraScriptParameterUsage;
	bIsStaticSwitch: boolean;
	StaticSwitchDefaultValue: number;
	bAddedToNodeGraphDeepCopy: boolean;
	bOutputIsPersistent: boolean;
	CachedNamespacelessVariableName: string;
	bCreatedInSystemEditor: boolean;
	bUseLegacyNameString: boolean;
	clone() : NiagaraVariableMetaData;
	static C(Other: UObject | any): NiagaraVariableMetaData;
}

declare class NiagaraScriptVariable extends UObject { 
	DefaultMode: ENiagaraDefaultMode;
	DefaultBinding: NiagaraScriptVariableBinding;
	Variable: NiagaraVariable;
	MetaData: NiagaraVariableMetaData;
	static Load(ResourceName: string): NiagaraScriptVariable;
	static Find(Outer: UObject, ResourceName: string): NiagaraScriptVariable;
	static GetDefaultObject(): NiagaraScriptVariable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScriptVariable;
	static C(Other: UObject | any): NiagaraScriptVariable;
}

declare class NiagaraClipboardContent extends UObject { 
	Functions: NiagaraClipboardFunction[];
	FunctionInputs: NiagaraClipboardFunctionInput[];
	Renderers: NiagaraRendererProperties[];
	Scripts: NiagaraScript[];
	ScriptVariables: NiagaraScriptVariable[];
	static Load(ResourceName: string): NiagaraClipboardContent;
	static Find(Outer: UObject, ResourceName: string): NiagaraClipboardContent;
	static GetDefaultObject(): NiagaraClipboardContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraClipboardContent;
	static C(Other: UObject | any): NiagaraClipboardContent;
}

declare class NiagaraClipboardEditorScriptingUtilities extends UObject { 
	static Load(ResourceName: string): NiagaraClipboardEditorScriptingUtilities;
	static Find(Outer: UObject, ResourceName: string): NiagaraClipboardEditorScriptingUtilities;
	static GetDefaultObject(): NiagaraClipboardEditorScriptingUtilities;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraClipboardEditorScriptingUtilities;
	static TrySetLocalValueAsInt(InInput: NiagaraClipboardFunctionInput,bOutSucceeded?: boolean,InValue?: number,bLooseTyping?: boolean): {bOutSucceeded: boolean};
	static TryGetLocalValueAsInt(InInput: NiagaraClipboardFunctionInput,bOutSucceeded?: boolean,OutValue?: number): {bOutSucceeded: boolean, OutValue: number};
	static TryGetLocalValueAsFloat(InInput: NiagaraClipboardFunctionInput,bOutSucceeded?: boolean,OutValue?: number): {bOutSucceeded: boolean, OutValue: number};
	static TryGetInputByName(InInputs: NiagaraClipboardFunctionInput[],InInputName: string,bOutSucceeded?: boolean,OutInput?: NiagaraClipboardFunctionInput): {bOutSucceeded: boolean, OutInput: NiagaraClipboardFunctionInput};
	static GetTypeName(InInput: NiagaraClipboardFunctionInput): string;
	static CreateVec3LocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InVec3Value: Vector): NiagaraClipboardFunctionInput;
	static CreateVec2LocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InVec2Value: Vector2D): NiagaraClipboardFunctionInput;
	static CreateStructLocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InStructValue: UserDefinedStruct): NiagaraClipboardFunctionInput;
	static CreateLinkedValueInput(InOuter: UObject,InInputName: string,InInputTypeName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InLinkedValue: string): NiagaraClipboardFunctionInput;
	static CreateIntLocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InLocalValue: number): NiagaraClipboardFunctionInput;
	static CreateFloatLocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InLocalValue: number): NiagaraClipboardFunctionInput;
	static CreateExpressionValueInput(InOuter: UObject,InInputName: string,InInputTypeName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InExpressionValue: string): NiagaraClipboardFunctionInput;
	static CreateEnumLocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditCoditionValue: boolean,InEnumType: UserDefinedEnum,InEnumValue: number): NiagaraClipboardFunctionInput;
	static CreateDynamicValueInput(InOuter: UObject,InInputName: string,InInputTypeName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InDynamicValueName: string,InDynamicValue: NiagaraScript): NiagaraClipboardFunctionInput;
	static CreateDataValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InDataValue: NiagaraDataInterface): NiagaraClipboardFunctionInput;
	static CreateBoolLocalValueInput(InOuter: UObject,InInputName: string,bInHasEditCondition: boolean,bInEditConditionValue: boolean,InBoolValue: boolean): NiagaraClipboardFunctionInput;
	static C(Other: UObject | any): NiagaraClipboardEditorScriptingUtilities;
}

declare class NiagaraConvertInPlaceEmitterAndSystemState extends NiagaraConvertInPlaceUtilityBase { 
	static Load(ResourceName: string): NiagaraConvertInPlaceEmitterAndSystemState;
	static Find(Outer: UObject, ResourceName: string): NiagaraConvertInPlaceEmitterAndSystemState;
	static GetDefaultObject(): NiagaraConvertInPlaceEmitterAndSystemState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraConvertInPlaceEmitterAndSystemState;
	static C(Other: UObject | any): NiagaraConvertInPlaceEmitterAndSystemState;
}

declare class NiagaraSpawnShortcut { 
	Name: string;
	Input: InputChord;
	clone() : NiagaraSpawnShortcut;
	static C(Other: UObject | any): NiagaraSpawnShortcut;
}

declare type ENiagaraNamespaceMetadataOptions = 'HideInScript' | 'HideInSystem' | 'AdvancedInScript' | 'AdvancedInSystem' | 'PreventEditingNamespace' | 'PreventEditingNamespaceModifier' | 'PreventEditingName' | 'PreventCreatingInSystemEditor' | 'ENiagaraNamespaceMetadataOptions_MAX';
declare var ENiagaraNamespaceMetadataOptions : { HideInScript:'HideInScript',HideInSystem:'HideInSystem',AdvancedInScript:'AdvancedInScript',AdvancedInSystem:'AdvancedInSystem',PreventEditingNamespace:'PreventEditingNamespace',PreventEditingNamespaceModifier:'PreventEditingNamespaceModifier',PreventEditingName:'PreventEditingName',PreventCreatingInSystemEditor:'PreventCreatingInSystemEditor',ENiagaraNamespaceMetadataOptions_MAX:'ENiagaraNamespaceMetadataOptions_MAX', };
declare class NiagaraNamespaceMetadata { 
	Namespaces: string[];
	RequiredNamespaceModifier: string;
	DisplayName: string;
	DisplayNameLong: string;
	Description: string;
	BackgroundColor: LinearColor;
	ForegroundStyle: string;
	SortId: number;
	OptionalNamespaceModifiers: string[];
	Options: ENiagaraNamespaceMetadataOptions[];
	clone() : NiagaraNamespaceMetadata;
	static C(Other: UObject | any): NiagaraNamespaceMetadata;
}

declare class NiagaraEditorSettings extends DeveloperSettings { 
	DefaultScript: SoftObjectPath;
	DefaultDynamicInputScript: SoftObjectPath;
	DefaultFunctionScript: SoftObjectPath;
	DefaultModuleScript: SoftObjectPath;
	RequiredSystemUpdateScript: SoftObjectPath;
	GraphCreationShortcuts: NiagaraSpawnShortcut[];
	bAutoCompile: boolean;
	bAutoPlay: boolean;
	bResetSimulationOnChange: boolean;
	bResimulateOnChangeWhilePaused: boolean;
	bResetDependentSystemsWhenEditingEmitters: boolean;
	bDisplayAdvancedParameterPanelCategories: boolean;
	NewAssetDialogConfigMap: any;
	HLSLKeywordReplacements: any;
	NamespaceMetadata: NiagaraNamespaceMetadata[];
	NamespaceModifierMetadata: NiagaraNamespaceMetadata[];
	DefaultNamespaceMetadata: NiagaraNamespaceMetadata;
	DefaultNamespaceModifierMetadata: NiagaraNamespaceMetadata;
	static Load(ResourceName: string): NiagaraEditorSettings;
	static Find(Outer: UObject, ResourceName: string): NiagaraEditorSettings;
	static GetDefaultObject(): NiagaraEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEditorSettings;
	static C(Other: UObject | any): NiagaraEditorSettings;
}

declare class NiagaraEffectTypeFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraEffectTypeFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraEffectTypeFactoryNew;
	static GetDefaultObject(): NiagaraEffectTypeFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEffectTypeFactoryNew;
	static C(Other: UObject | any): NiagaraEffectTypeFactoryNew;
}

declare class NiagaraStackEditorData extends NiagaraEditorDataBase { 
	StackEntryKeyToDisplayName: any;
	DismissedStackIssueIds: string[];
	static Load(ResourceName: string): NiagaraStackEditorData;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEditorData;
	static GetDefaultObject(): NiagaraStackEditorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEditorData;
	static C(Other: UObject | any): NiagaraStackEditorData;
}

declare class NiagaraEmitterEditorData extends NiagaraEditorDataBase { 
	StackEditorData: NiagaraStackEditorData;
	PlaybackRangeMin: number;
	PlaybackRangeMax: number;
	static Load(ResourceName: string): NiagaraEmitterEditorData;
	static Find(Outer: UObject, ResourceName: string): NiagaraEmitterEditorData;
	static GetDefaultObject(): NiagaraEmitterEditorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEmitterEditorData;
	static C(Other: UObject | any): NiagaraEmitterEditorData;
}

declare class NiagaraEmitterFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraEmitterFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraEmitterFactoryNew;
	static GetDefaultObject(): NiagaraEmitterFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEmitterFactoryNew;
	static C(Other: UObject | any): NiagaraEmitterFactoryNew;
}

declare class NiagaraCompileHashVisitorDebugInfo { 
	UObject: string;
	PropertyKeys: string[];
	PropertyValues: string[];
	clone() : NiagaraCompileHashVisitorDebugInfo;
	static C(Other: UObject | any): NiagaraCompileHashVisitorDebugInfo;
}

declare class NiagaraGraphScriptUsageInfo { 
	BaseId: Guid;
	UsageType: ENiagaraScriptUsage;
	UsageId: Guid;
	CompileHash: NiagaraCompileHash;
	CompileHashFromGraph: NiagaraCompileHash;
	CompileLastObjects: NiagaraCompileHashVisitorDebugInfo[];
	Traversal: NiagaraNode[];
	DataHash: number[];
	GeneratedCompileId: Guid;
	clone() : NiagaraGraphScriptUsageInfo;
	static C(Other: UObject | any): NiagaraGraphScriptUsageInfo;
}

declare class NiagaraGraph extends EdGraph { 
	ChangeId: Guid;
	ForceRebuildId: Guid;
	LastBuiltTraversalDataChangeId: Guid;
	CachedUsageInfo: NiagaraGraphScriptUsageInfo[];
	VariableToMetaData: any;
	VariableToScriptVariable: any;
	ParameterToReferencesMap: any;
	static Load(ResourceName: string): NiagaraGraph;
	static Find(Outer: UObject, ResourceName: string): NiagaraGraph;
	static GetDefaultObject(): NiagaraGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraGraph;
	static C(Other: UObject | any): NiagaraGraph;
}

declare class NiagaraMessageData extends NiagaraMessageDataBase { 
	static Load(ResourceName: string): NiagaraMessageData;
	static Find(Outer: UObject, ResourceName: string): NiagaraMessageData;
	static GetDefaultObject(): NiagaraMessageData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMessageData;
	static C(Other: UObject | any): NiagaraMessageData;
}

declare type ENiagaraMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'ENiagaraMessageSeverity_MAX';
declare var ENiagaraMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',ENiagaraMessageSeverity_MAX:'ENiagaraMessageSeverity_MAX', };
declare class NiagaraMessageDataText extends NiagaraMessageData { 
	MessageText: string;
	MessageSeverity: ENiagaraMessageSeverity;
	TopicName: string;
	static Load(ResourceName: string): NiagaraMessageDataText;
	static Find(Outer: UObject, ResourceName: string): NiagaraMessageDataText;
	static GetDefaultObject(): NiagaraMessageDataText;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMessageDataText;
	static C(Other: UObject | any): NiagaraMessageDataText;
}

declare class NiagaraNodeAssignment extends NiagaraNodeFunctionCall { 
	AssignmentTarget: NiagaraVariable;
	AssignmentDefaultValue: string;
	AssignmentTargets: NiagaraVariable[];
	AssignmentDefaultValues: string[];
	OldFunctionCallName: string;
	static Load(ResourceName: string): NiagaraNodeAssignment;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeAssignment;
	static GetDefaultObject(): NiagaraNodeAssignment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeAssignment;
	static C(Other: UObject | any): NiagaraNodeAssignment;
}

declare class NiagaraConvertConnection { 
	SourcePinId: Guid;
	SourcePath: string[];
	DestinationPinId: Guid;
	DestinationPath: string[];
	clone() : NiagaraConvertConnection;
	static C(Other: UObject | any): NiagaraConvertConnection;
}

declare class NiagaraConvertPinRecord { 
	PinId: Guid;
	Path: string[];
	clone() : NiagaraConvertPinRecord;
	static C(Other: UObject | any): NiagaraConvertPinRecord;
}

declare class NiagaraNodeConvert extends NiagaraNodeWithDynamicPins { 
	AutowireSwizzle: string;
	AutowireMakeType: NiagaraTypeDefinition;
	AutowireBreakType: NiagaraTypeDefinition;
	Connections: NiagaraConvertConnection[];
	bIsWiringShown: boolean;
	ExpandedItems: NiagaraConvertPinRecord[];
	static Load(ResourceName: string): NiagaraNodeConvert;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeConvert;
	static GetDefaultObject(): NiagaraNodeConvert;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeConvert;
	static C(Other: UObject | any): NiagaraNodeConvert;
}

declare class NiagaraNodeCustomHlsl extends NiagaraNodeFunctionCall { 
	ScriptUsage: ENiagaraScriptUsage;
	CustomHlsl: string;
	static Load(ResourceName: string): NiagaraNodeCustomHlsl;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeCustomHlsl;
	static GetDefaultObject(): NiagaraNodeCustomHlsl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeCustomHlsl;
	static C(Other: UObject | any): NiagaraNodeCustomHlsl;
}

declare class NiagaraNodeDataSetBase extends NiagaraNode { 
	DataSet: NiagaraDataSetID;
	Variables: NiagaraVariable[];
	VariableFriendlyNames: string[];
	ExternalStructAsset: Struct;
	static Load(ResourceName: string): NiagaraNodeDataSetBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeDataSetBase;
	static GetDefaultObject(): NiagaraNodeDataSetBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeDataSetBase;
	static C(Other: UObject | any): NiagaraNodeDataSetBase;
}

declare class NiagaraNodeEmitter extends NiagaraNodeWithDynamicPins { 
	OwnerSystem: NiagaraSystem;
	EmitterHandleId: Guid;
	DisplayName: string;
	ScriptType: ENiagaraScriptUsage;
	static Load(ResourceName: string): NiagaraNodeEmitter;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeEmitter;
	static GetDefaultObject(): NiagaraNodeEmitter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeEmitter;
	static C(Other: UObject | any): NiagaraNodeEmitter;
}

declare class PinGuidsForPath { 
	OutputPinGuid: Guid;
	InputAPinGuid: Guid;
	InputBPinGuid: Guid;
	clone() : PinGuidsForPath;
	static C(Other: UObject | any): PinGuidsForPath;
}

declare class NiagaraNodeIf extends NiagaraNodeWithDynamicPins { 
	OutputVars: NiagaraVariable[];
	PathAssociatedPinGuids: PinGuidsForPath[];
	ConditionPinGuid: Guid;
	static Load(ResourceName: string): NiagaraNodeIf;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeIf;
	static GetDefaultObject(): NiagaraNodeIf;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeIf;
	static C(Other: UObject | any): NiagaraNodeIf;
}

declare type ENiagaraInputNodeUsage = 'Undefined' | 'Parameter' | 'Attribute' | 'SystemConstant' | 'TranslatorConstant' | 'RapidIterationParameter' | 'ENiagaraInputNodeUsage_MAX';
declare var ENiagaraInputNodeUsage : { Undefined:'Undefined',Parameter:'Parameter',Attribute:'Attribute',SystemConstant:'SystemConstant',TranslatorConstant:'TranslatorConstant',RapidIterationParameter:'RapidIterationParameter',ENiagaraInputNodeUsage_MAX:'ENiagaraInputNodeUsage_MAX', };
declare class NiagaraInputExposureOptions { 
	bExposed: boolean;
	bRequired: boolean;
	bCanAutoBind: boolean;
	bHidden: boolean;
	clone() : NiagaraInputExposureOptions;
	static C(Other: UObject | any): NiagaraInputExposureOptions;
}

declare class NiagaraNodeInput extends NiagaraNode { 
	Input: NiagaraVariable;
	Usage: ENiagaraInputNodeUsage;
	CallSortPriority: number;
	ExposureOptions: NiagaraInputExposureOptions;
	DataInterface: NiagaraDataInterface;
	static Load(ResourceName: string): NiagaraNodeInput;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeInput;
	static GetDefaultObject(): NiagaraNodeInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeInput;
	static C(Other: UObject | any): NiagaraNodeInput;
}

declare class AddedPinData { 
	PinType: EdGraphPinType;
	PinName: string;
	clone() : AddedPinData;
	static C(Other: UObject | any): AddedPinData;
}

declare class NiagaraNodeOp extends NiagaraNodeWithDynamicPins { 
	OpName: string;
	AddedPins: AddedPinData[];
	static Load(ResourceName: string): NiagaraNodeOp;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeOp;
	static GetDefaultObject(): NiagaraNodeOp;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeOp;
	static C(Other: UObject | any): NiagaraNodeOp;
}

declare class NiagaraNodeOutput extends NiagaraNode { 
	Outputs: NiagaraVariable[];
	ScriptType: ENiagaraScriptUsage;
	ScriptTypeId: Guid;
	ScriptTypeIndex: number;
	static Load(ResourceName: string): NiagaraNodeOutput;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeOutput;
	static GetDefaultObject(): NiagaraNodeOutput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeOutput;
	static C(Other: UObject | any): NiagaraNodeOutput;
}

declare class NiagaraNodeParameterMapBase extends NiagaraNodeWithDynamicPins { 
	static Load(ResourceName: string): NiagaraNodeParameterMapBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeParameterMapBase;
	static GetDefaultObject(): NiagaraNodeParameterMapBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeParameterMapBase;
	static C(Other: UObject | any): NiagaraNodeParameterMapBase;
}

declare class NiagaraNodeParameterMapSet extends NiagaraNodeParameterMapBase { 
	static Load(ResourceName: string): NiagaraNodeParameterMapSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeParameterMapSet;
	static GetDefaultObject(): NiagaraNodeParameterMapSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeParameterMapSet;
	static C(Other: UObject | any): NiagaraNodeParameterMapSet;
}

declare class NiagaraNodeParameterMapFor extends NiagaraNodeParameterMapSet { 
	static Load(ResourceName: string): NiagaraNodeParameterMapFor;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeParameterMapFor;
	static GetDefaultObject(): NiagaraNodeParameterMapFor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeParameterMapFor;
	static C(Other: UObject | any): NiagaraNodeParameterMapFor;
}

declare class NiagaraNodeParameterMapGet extends NiagaraNodeParameterMapBase { 
	PinOutputToPinDefaultPersistentId: any;
	static Load(ResourceName: string): NiagaraNodeParameterMapGet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeParameterMapGet;
	static GetDefaultObject(): NiagaraNodeParameterMapGet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeParameterMapGet;
	static C(Other: UObject | any): NiagaraNodeParameterMapGet;
}

declare class NiagaraNodeReadDataSet extends NiagaraNodeDataSetBase { 
	static Load(ResourceName: string): NiagaraNodeReadDataSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeReadDataSet;
	static GetDefaultObject(): NiagaraNodeReadDataSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeReadDataSet;
	static C(Other: UObject | any): NiagaraNodeReadDataSet;
}

declare class NiagaraNodeReroute extends NiagaraNode { 
	static Load(ResourceName: string): NiagaraNodeReroute;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeReroute;
	static GetDefaultObject(): NiagaraNodeReroute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeReroute;
	static C(Other: UObject | any): NiagaraNodeReroute;
}

declare class NiagaraNodeUsageSelector extends NiagaraNodeWithDynamicPins { 
	OutputVars: NiagaraVariable[];
	OutputVarGuids: Guid[];
	static Load(ResourceName: string): NiagaraNodeUsageSelector;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeUsageSelector;
	static GetDefaultObject(): NiagaraNodeUsageSelector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeUsageSelector;
	static C(Other: UObject | any): NiagaraNodeUsageSelector;
}

declare class NiagaraNodeSimTargetSelector extends NiagaraNodeUsageSelector { 
	static Load(ResourceName: string): NiagaraNodeSimTargetSelector;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeSimTargetSelector;
	static GetDefaultObject(): NiagaraNodeSimTargetSelector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeSimTargetSelector;
	static C(Other: UObject | any): NiagaraNodeSimTargetSelector;
}

declare type ENiagaraStaticSwitchType = 'Bool' | 'Integer' | 'Enum' | 'ENiagaraStaticSwitchType_MAX';
declare var ENiagaraStaticSwitchType : { Bool:'Bool',Integer:'Integer',Enum:'Enum',ENiagaraStaticSwitchType_MAX:'ENiagaraStaticSwitchType_MAX', };
declare class StaticSwitchTypeData { 
	SwitchType: ENiagaraStaticSwitchType;
	MaxIntCount: number;
	Enum: Enum;
	SwitchConstant: string;
	clone() : StaticSwitchTypeData;
	static C(Other: UObject | any): StaticSwitchTypeData;
}

declare class NiagaraNodeStaticSwitch extends NiagaraNodeUsageSelector { 
	InputParameterName: string;
	SwitchTypeData: StaticSwitchTypeData;
	static Load(ResourceName: string): NiagaraNodeStaticSwitch;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeStaticSwitch;
	static GetDefaultObject(): NiagaraNodeStaticSwitch;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeStaticSwitch;
	static C(Other: UObject | any): NiagaraNodeStaticSwitch;
}

declare class NiagaraNodeWriteDataSet extends NiagaraNodeDataSetBase { 
	EventName: string;
	static Load(ResourceName: string): NiagaraNodeWriteDataSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeWriteDataSet;
	static GetDefaultObject(): NiagaraNodeWriteDataSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeWriteDataSet;
	static C(Other: UObject | any): NiagaraNodeWriteDataSet;
}

declare class NiagaraOverviewNode extends EdGraphNode { 
	OwningSystem: NiagaraSystem;
	EmitterHandleGuid: Guid;
	static Load(ResourceName: string): NiagaraOverviewNode;
	static Find(Outer: UObject, ResourceName: string): NiagaraOverviewNode;
	static GetDefaultObject(): NiagaraOverviewNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraOverviewNode;
	static C(Other: UObject | any): NiagaraOverviewNode;
}

declare class NiagaraParameterCollectionFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraParameterCollectionFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraParameterCollectionFactoryNew;
	static GetDefaultObject(): NiagaraParameterCollectionFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraParameterCollectionFactoryNew;
	static C(Other: UObject | any): NiagaraParameterCollectionFactoryNew;
}

declare class NiagaraParameterCollectionInstanceFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraParameterCollectionInstanceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraParameterCollectionInstanceFactoryNew;
	static GetDefaultObject(): NiagaraParameterCollectionInstanceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraParameterCollectionInstanceFactoryNew;
	static C(Other: UObject | any): NiagaraParameterCollectionInstanceFactoryNew;
}

declare class NiagaraScratchPadViewModel extends UObject { 
	static Load(ResourceName: string): NiagaraScratchPadViewModel;
	static Find(Outer: UObject, ResourceName: string): NiagaraScratchPadViewModel;
	static GetDefaultObject(): NiagaraScratchPadViewModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScratchPadViewModel;
	static C(Other: UObject | any): NiagaraScratchPadViewModel;
}

declare class NiagaraScriptFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraScriptFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraScriptFactoryNew;
	static GetDefaultObject(): NiagaraScriptFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScriptFactoryNew;
	static C(Other: UObject | any): NiagaraScriptFactoryNew;
}

declare class NiagaraModuleScriptFactory extends NiagaraScriptFactoryNew { 
	static Load(ResourceName: string): NiagaraModuleScriptFactory;
	static Find(Outer: UObject, ResourceName: string): NiagaraModuleScriptFactory;
	static GetDefaultObject(): NiagaraModuleScriptFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraModuleScriptFactory;
	static C(Other: UObject | any): NiagaraModuleScriptFactory;
}

declare class NiagaraFunctionScriptFactory extends NiagaraScriptFactoryNew { 
	static Load(ResourceName: string): NiagaraFunctionScriptFactory;
	static Find(Outer: UObject, ResourceName: string): NiagaraFunctionScriptFactory;
	static GetDefaultObject(): NiagaraFunctionScriptFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraFunctionScriptFactory;
	static C(Other: UObject | any): NiagaraFunctionScriptFactory;
}

declare class NiagaraDynamicInputScriptFactory extends NiagaraScriptFactoryNew { 
	static Load(ResourceName: string): NiagaraDynamicInputScriptFactory;
	static Find(Outer: UObject, ResourceName: string): NiagaraDynamicInputScriptFactory;
	static GetDefaultObject(): NiagaraDynamicInputScriptFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDynamicInputScriptFactory;
	static C(Other: UObject | any): NiagaraDynamicInputScriptFactory;
}

declare class NiagaraScriptSource extends NiagaraScriptSourceBase { 
	NodeGraph: NiagaraGraph;
	static Load(ResourceName: string): NiagaraScriptSource;
	static Find(Outer: UObject, ResourceName: string): NiagaraScriptSource;
	static GetDefaultObject(): NiagaraScriptSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScriptSource;
	static C(Other: UObject | any): NiagaraScriptSource;
}

declare class NiagaraSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	static Load(ResourceName: string): NiagaraSequence;
	static Find(Outer: UObject, ResourceName: string): NiagaraSequence;
	static GetDefaultObject(): NiagaraSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSequence;
	static C(Other: UObject | any): NiagaraSequence;
}

declare class NiagaraSequencerTrackFilter extends SequencerTrackFilterExtension { 
	static Load(ResourceName: string): NiagaraSequencerTrackFilter;
	static Find(Outer: UObject, ResourceName: string): NiagaraSequencerTrackFilter;
	static GetDefaultObject(): NiagaraSequencerTrackFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSequencerTrackFilter;
	static C(Other: UObject | any): NiagaraSequencerTrackFilter;
}

declare class NiagaraStackErrorItem extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackErrorItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackErrorItem;
	static GetDefaultObject(): NiagaraStackErrorItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackErrorItem;
	static C(Other: UObject | any): NiagaraStackErrorItem;
}

declare class NiagaraStackEntry extends UObject { 
	Children: NiagaraStackEntry[];
	ErrorChildren: NiagaraStackErrorItem[];
	static Load(ResourceName: string): NiagaraStackEntry;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEntry;
	static GetDefaultObject(): NiagaraStackEntry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEntry;
	static C(Other: UObject | any): NiagaraStackEntry;
}

declare class NiagaraStackItemFooter extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackItemFooter;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItemFooter;
	static GetDefaultObject(): NiagaraStackItemFooter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItemFooter;
	static C(Other: UObject | any): NiagaraStackItemFooter;
}

declare class NiagaraStackItem extends NiagaraStackEntry { 
	ItemFooter: NiagaraStackItemFooter;
	static Load(ResourceName: string): NiagaraStackItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItem;
	static GetDefaultObject(): NiagaraStackItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItem;
	static C(Other: UObject | any): NiagaraStackItem;
}

declare class NiagaraStackItemContent extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackItemContent;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItemContent;
	static GetDefaultObject(): NiagaraStackItemContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItemContent;
	static C(Other: UObject | any): NiagaraStackItemContent;
}

declare class NiagaraStackObject extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackObject;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackObject;
	static GetDefaultObject(): NiagaraStackObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackObject;
	static C(Other: UObject | any): NiagaraStackObject;
}

declare class NiagaraStackEmitterPropertiesItem extends NiagaraStackItem { 
	EmitterObject: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackEmitterPropertiesItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEmitterPropertiesItem;
	static GetDefaultObject(): NiagaraStackEmitterPropertiesItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEmitterPropertiesItem;
	static C(Other: UObject | any): NiagaraStackEmitterPropertiesItem;
}

declare class NiagaraStackItemGroupFooter extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackItemGroupFooter;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItemGroupFooter;
	static GetDefaultObject(): NiagaraStackItemGroupFooter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItemGroupFooter;
	static C(Other: UObject | any): NiagaraStackItemGroupFooter;
}

declare class NiagaraStackItemGroup extends NiagaraStackEntry { 
	GroupFooter: NiagaraStackItemGroupFooter;
	static Load(ResourceName: string): NiagaraStackItemGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItemGroup;
	static GetDefaultObject(): NiagaraStackItemGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItemGroup;
	static C(Other: UObject | any): NiagaraStackItemGroup;
}

declare class NiagaraStackEmitterSettingsGroup extends NiagaraStackItemGroup { 
	PropertiesItem: NiagaraStackEmitterPropertiesItem;
	static Load(ResourceName: string): NiagaraStackEmitterSettingsGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEmitterSettingsGroup;
	static GetDefaultObject(): NiagaraStackEmitterSettingsGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEmitterSettingsGroup;
	static C(Other: UObject | any): NiagaraStackEmitterSettingsGroup;
}

declare class NiagaraStackErrorItemLongDescription extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackErrorItemLongDescription;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackErrorItemLongDescription;
	static GetDefaultObject(): NiagaraStackErrorItemLongDescription;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackErrorItemLongDescription;
	static C(Other: UObject | any): NiagaraStackErrorItemLongDescription;
}

declare class NiagaraStackErrorItemFix extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackErrorItemFix;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackErrorItemFix;
	static GetDefaultObject(): NiagaraStackErrorItemFix;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackErrorItemFix;
	static C(Other: UObject | any): NiagaraStackErrorItemFix;
}

declare class NiagaraStackErrorItemDismiss extends NiagaraStackErrorItemFix { 
	static Load(ResourceName: string): NiagaraStackErrorItemDismiss;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackErrorItemDismiss;
	static GetDefaultObject(): NiagaraStackErrorItemDismiss;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackErrorItemDismiss;
	static C(Other: UObject | any): NiagaraStackErrorItemDismiss;
}

declare class NiagaraStackEventHandlerGroup extends NiagaraStackItemGroup { 
	static Load(ResourceName: string): NiagaraStackEventHandlerGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEventHandlerGroup;
	static GetDefaultObject(): NiagaraStackEventHandlerGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEventHandlerGroup;
	static C(Other: UObject | any): NiagaraStackEventHandlerGroup;
}

declare class NiagaraStackEventHandlerPropertiesItem extends NiagaraStackItem { 
	EmitterObject: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackEventHandlerPropertiesItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEventHandlerPropertiesItem;
	static GetDefaultObject(): NiagaraStackEventHandlerPropertiesItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEventHandlerPropertiesItem;
	static C(Other: UObject | any): NiagaraStackEventHandlerPropertiesItem;
}

declare class NiagaraStackScriptItemGroup extends NiagaraStackItemGroup { 
	static Load(ResourceName: string): NiagaraStackScriptItemGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackScriptItemGroup;
	static GetDefaultObject(): NiagaraStackScriptItemGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackScriptItemGroup;
	static C(Other: UObject | any): NiagaraStackScriptItemGroup;
}

declare class NiagaraStackEventScriptItemGroup extends NiagaraStackScriptItemGroup { 
	EventHandlerProperties: NiagaraStackEventHandlerPropertiesItem;
	static Load(ResourceName: string): NiagaraStackEventScriptItemGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackEventScriptItemGroup;
	static GetDefaultObject(): NiagaraStackEventScriptItemGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackEventScriptItemGroup;
	static C(Other: UObject | any): NiagaraStackEventScriptItemGroup;
}

declare class NiagaraStackFunctionInput extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackFunctionInput;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackFunctionInput;
	static GetDefaultObject(): NiagaraStackFunctionInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackFunctionInput;
	static C(Other: UObject | any): NiagaraStackFunctionInput;
}

declare class NiagaraStackFunctionInputCollection extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackFunctionInputCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackFunctionInputCollection;
	static GetDefaultObject(): NiagaraStackFunctionInputCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackFunctionInputCollection;
	static C(Other: UObject | any): NiagaraStackFunctionInputCollection;
}

declare class NiagaraStackInputCategory extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackInputCategory;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackInputCategory;
	static GetDefaultObject(): NiagaraStackInputCategory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackInputCategory;
	static C(Other: UObject | any): NiagaraStackInputCategory;
}

declare class NiagaraStackItemTextContent extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackItemTextContent;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackItemTextContent;
	static GetDefaultObject(): NiagaraStackItemTextContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackItemTextContent;
	static C(Other: UObject | any): NiagaraStackItemTextContent;
}

declare class NiagaraStackModuleItemLinkedInputCollection extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackModuleItemLinkedInputCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackModuleItemLinkedInputCollection;
	static GetDefaultObject(): NiagaraStackModuleItemLinkedInputCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackModuleItemLinkedInputCollection;
	static C(Other: UObject | any): NiagaraStackModuleItemLinkedInputCollection;
}

declare class NiagaraStackModuleItemOutputCollection extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackModuleItemOutputCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackModuleItemOutputCollection;
	static GetDefaultObject(): NiagaraStackModuleItemOutputCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackModuleItemOutputCollection;
	static C(Other: UObject | any): NiagaraStackModuleItemOutputCollection;
}

declare class NiagaraStackModuleItem extends NiagaraStackItem { 
	LinkedInputCollection: NiagaraStackModuleItemLinkedInputCollection;
	InputCollection: NiagaraStackFunctionInputCollection;
	OutputCollection: NiagaraStackModuleItemOutputCollection;
	static Load(ResourceName: string): NiagaraStackModuleItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackModuleItem;
	static GetDefaultObject(): NiagaraStackModuleItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackModuleItem;
	static C(Other: UObject | any): NiagaraStackModuleItem;
}

declare class NiagaraStackModuleItemOutput extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackModuleItemOutput;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackModuleItemOutput;
	static GetDefaultObject(): NiagaraStackModuleItemOutput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackModuleItemOutput;
	static C(Other: UObject | any): NiagaraStackModuleItemOutput;
}

declare class NiagaraStackParameterStoreEntry extends NiagaraStackItemContent { 
	ValueObjectEntry: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackParameterStoreEntry;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackParameterStoreEntry;
	static GetDefaultObject(): NiagaraStackParameterStoreEntry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackParameterStoreEntry;
	static C(Other: UObject | any): NiagaraStackParameterStoreEntry;
}

declare class NiagaraStackPropertyRow extends NiagaraStackItemContent { 
	static Load(ResourceName: string): NiagaraStackPropertyRow;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackPropertyRow;
	static GetDefaultObject(): NiagaraStackPropertyRow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackPropertyRow;
	static C(Other: UObject | any): NiagaraStackPropertyRow;
}

declare class NiagaraStackRendererItem extends NiagaraStackItem { 
	RendererObject: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackRendererItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackRendererItem;
	static GetDefaultObject(): NiagaraStackRendererItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackRendererItem;
	static C(Other: UObject | any): NiagaraStackRendererItem;
}

declare class NiagaraStackRenderItemGroup extends NiagaraStackItemGroup { 
	static Load(ResourceName: string): NiagaraStackRenderItemGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackRenderItemGroup;
	static GetDefaultObject(): NiagaraStackRenderItemGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackRenderItemGroup;
	static C(Other: UObject | any): NiagaraStackRenderItemGroup;
}

declare class NiagaraStackSystemSettingsGroup extends NiagaraStackItemGroup { 
	static Load(ResourceName: string): NiagaraStackSystemSettingsGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSystemSettingsGroup;
	static GetDefaultObject(): NiagaraStackSystemSettingsGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSystemSettingsGroup;
	static C(Other: UObject | any): NiagaraStackSystemSettingsGroup;
}

declare class NiagaraStackSimulationStagesGroup extends NiagaraStackItemGroup { 
	static Load(ResourceName: string): NiagaraStackSimulationStagesGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSimulationStagesGroup;
	static GetDefaultObject(): NiagaraStackSimulationStagesGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSimulationStagesGroup;
	static C(Other: UObject | any): NiagaraStackSimulationStagesGroup;
}

declare class NiagaraStackRoot extends NiagaraStackEntry { 
	SystemSettingsGroup: NiagaraStackSystemSettingsGroup;
	SystemSpawnGroup: NiagaraStackScriptItemGroup;
	SystemUpdateGroup: NiagaraStackScriptItemGroup;
	EmitterSettingsGroup: NiagaraStackEmitterSettingsGroup;
	EmitterSpawnGroup: NiagaraStackScriptItemGroup;
	EmitterUpdateGroup: NiagaraStackScriptItemGroup;
	ParticleSpawnGroup: NiagaraStackScriptItemGroup;
	ParticleUpdateGroup: NiagaraStackScriptItemGroup;
	AddEventHandlerGroup: NiagaraStackEventHandlerGroup;
	AddSimulationStageGroup: NiagaraStackSimulationStagesGroup;
	RenderGroup: NiagaraStackRenderItemGroup;
	static Load(ResourceName: string): NiagaraStackRoot;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackRoot;
	static GetDefaultObject(): NiagaraStackRoot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackRoot;
	static C(Other: UObject | any): NiagaraStackRoot;
}

declare class NiagaraStackSelection extends NiagaraStackEntry { 
	static Load(ResourceName: string): NiagaraStackSelection;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSelection;
	static GetDefaultObject(): NiagaraStackSelection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSelection;
	static C(Other: UObject | any): NiagaraStackSelection;
}

declare class NiagaraStackSimulationStagePropertiesItem extends NiagaraStackItem { 
	SimulationStageObject: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackSimulationStagePropertiesItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSimulationStagePropertiesItem;
	static GetDefaultObject(): NiagaraStackSimulationStagePropertiesItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSimulationStagePropertiesItem;
	static C(Other: UObject | any): NiagaraStackSimulationStagePropertiesItem;
}

declare class NiagaraStackSimulationStageGroup extends NiagaraStackScriptItemGroup { 
	SimulationStageProperties: NiagaraStackSimulationStagePropertiesItem;
	static Load(ResourceName: string): NiagaraStackSimulationStageGroup;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSimulationStageGroup;
	static GetDefaultObject(): NiagaraStackSimulationStageGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSimulationStageGroup;
	static C(Other: UObject | any): NiagaraStackSimulationStageGroup;
}

declare class NiagaraStackSystemPropertiesItem extends NiagaraStackItem { 
	SystemObject: NiagaraStackObject;
	static Load(ResourceName: string): NiagaraStackSystemPropertiesItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackSystemPropertiesItem;
	static GetDefaultObject(): NiagaraStackSystemPropertiesItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackSystemPropertiesItem;
	static C(Other: UObject | any): NiagaraStackSystemPropertiesItem;
}

declare class NiagaraStackParameterStoreItem extends NiagaraStackItem { 
	static Load(ResourceName: string): NiagaraStackParameterStoreItem;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackParameterStoreItem;
	static GetDefaultObject(): NiagaraStackParameterStoreItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackParameterStoreItem;
	static C(Other: UObject | any): NiagaraStackParameterStoreItem;
}

declare class NiagaraStackViewModel extends UObject { 
	RootEntry: NiagaraStackEntry;
	static Load(ResourceName: string): NiagaraStackViewModel;
	static Find(Outer: UObject, ResourceName: string): NiagaraStackViewModel;
	static GetDefaultObject(): NiagaraStackViewModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraStackViewModel;
	static C(Other: UObject | any): NiagaraStackViewModel;
}

declare class NiagaraSystemAuditCommandlet extends Commandlet { 
	static Load(ResourceName: string): NiagaraSystemAuditCommandlet;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemAuditCommandlet;
	static GetDefaultObject(): NiagaraSystemAuditCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemAuditCommandlet;
	static C(Other: UObject | any): NiagaraSystemAuditCommandlet;
}

declare class NiagaraSystemEditorFolder extends UObject { 
	FolderName: string;
	ChildFolders: NiagaraSystemEditorFolder[];
	ChildEmitterHandleIds: Guid[];
	static Load(ResourceName: string): NiagaraSystemEditorFolder;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemEditorFolder;
	static GetDefaultObject(): NiagaraSystemEditorFolder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemEditorFolder;
	static C(Other: UObject | any): NiagaraSystemEditorFolder;
}

declare class NiagaraGraphViewSettings { 
	Location: Vector2D;
	Zoom: number;
	bIsValid: boolean;
	clone() : NiagaraGraphViewSettings;
	static C(Other: UObject | any): NiagaraGraphViewSettings;
}

declare class NiagaraSystemEditorData extends NiagaraEditorDataBase { 
	RootFolder: NiagaraSystemEditorFolder;
	StackEditorData: NiagaraStackEditorData;
	OwnerTransform: Transform;
	PlaybackRangeMin: number;
	PlaybackRangeMax: number;
	SystemOverviewGraph: EdGraph;
	OverviewGraphViewSettings: NiagaraGraphViewSettings;
	bSystemIsPlaceholder: boolean;
	static Load(ResourceName: string): NiagaraSystemEditorData;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemEditorData;
	static GetDefaultObject(): NiagaraSystemEditorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemEditorData;
	static C(Other: UObject | any): NiagaraSystemEditorData;
}

declare class NiagaraSystemFactoryNew extends Factory { 
	static Load(ResourceName: string): NiagaraSystemFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemFactoryNew;
	static GetDefaultObject(): NiagaraSystemFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemFactoryNew;
	static C(Other: UObject | any): NiagaraSystemFactoryNew;
}

declare class NiagaraSystemSelectionViewModel extends UObject { 
	StackSelection: NiagaraStackSelection;
	SelectionStackViewModel: NiagaraStackViewModel;
	static Load(ResourceName: string): NiagaraSystemSelectionViewModel;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemSelectionViewModel;
	static GetDefaultObject(): NiagaraSystemSelectionViewModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemSelectionViewModel;
	static C(Other: UObject | any): NiagaraSystemSelectionViewModel;
}

declare class NiagaraThumbnailRendererBase extends TextureThumbnailRenderer { 
	static Load(ResourceName: string): NiagaraThumbnailRendererBase;
	static Find(Outer: UObject, ResourceName: string): NiagaraThumbnailRendererBase;
	static GetDefaultObject(): NiagaraThumbnailRendererBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraThumbnailRendererBase;
	static C(Other: UObject | any): NiagaraThumbnailRendererBase;
}

declare class NiagaraEmitterThumbnailRenderer extends NiagaraThumbnailRendererBase { 
	static Load(ResourceName: string): NiagaraEmitterThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): NiagaraEmitterThumbnailRenderer;
	static GetDefaultObject(): NiagaraEmitterThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEmitterThumbnailRenderer;
	static C(Other: UObject | any): NiagaraEmitterThumbnailRenderer;
}

declare class NiagaraSystemThumbnailRenderer extends NiagaraThumbnailRendererBase { 
	static Load(ResourceName: string): NiagaraSystemThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): NiagaraSystemThumbnailRenderer;
	static GetDefaultObject(): NiagaraSystemThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSystemThumbnailRenderer;
	static C(Other: UObject | any): NiagaraSystemThumbnailRenderer;
}

declare class AnimNotify_PlayNiagaraEffect extends AnimNotify { 
	Template: NiagaraSystem;
	LocationOffset: Vector;
	RotationOffset: Rotator;
	Scale: Vector;
	bAbsoluteScale: boolean;
	Attached: boolean;
	SocketName: string;
	static Load(ResourceName: string): AnimNotify_PlayNiagaraEffect;
	static Find(Outer: UObject, ResourceName: string): AnimNotify_PlayNiagaraEffect;
	static GetDefaultObject(): AnimNotify_PlayNiagaraEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimNotify_PlayNiagaraEffect;
	GetSpawnedEffect(): FXSystemComponent;
	static C(Other: UObject | any): AnimNotify_PlayNiagaraEffect;
}

declare class AnimNotifyState_TimedNiagaraEffect extends AnimNotifyState { 
	Template: NiagaraSystem;
	SocketName: string;
	LocationOffset: Vector;
	RotationOffset: Rotator;
	bDestroyAtEnd: boolean;
	static Load(ResourceName: string): AnimNotifyState_TimedNiagaraEffect;
	static Find(Outer: UObject, ResourceName: string): AnimNotifyState_TimedNiagaraEffect;
	static GetDefaultObject(): AnimNotifyState_TimedNiagaraEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimNotifyState_TimedNiagaraEffect;
	static C(Other: UObject | any): AnimNotifyState_TimedNiagaraEffect;
}

declare class V8Config extends UObject { 
	bGenAltPropAccessorForAllProp: boolean;
	bGenGetStructRefArrayFunction: boolean;
	static Load(ResourceName: string): V8Config;
	static Find(Outer: UObject, ResourceName: string): V8Config;
	static GetDefaultObject(): V8Config;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): V8Config;
	static C(Other: UObject | any): V8Config;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): DirectoryWatcher;
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static GetDefaultObject(): DirectoryWatcher;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject | any): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static GetDefaultObject(): JavascriptContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	UnregisterConsoleCommand(Command: string): void;
	SetContextId(Name: string): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	RequestV8GarbageCollection(): void;
	RegisterConsoleCommand(Command: string,Help: string,UFunction: JavascriptFunction): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	FindPathFile(TargetRootPath: string,TargetFileName: string,OutFiles?: string[]): {OutFiles: string[]};
	Expose(Name: string,UObject: UObject): void;
	DestroyInspector(): void;
	CreateInspector(Port: number): void;
	static C(Other: UObject | any): JavascriptContext;
}

declare class JavascriptHeapStatistics { 
	TotalHeapSize: number;
	TotalHeapSizeExecutable: number;
	TotalPhysicalSize: number;
	TotalAvailableSize: number;
	UsedHeapSize: number;
	HeapSizeLimit: number;
	MallocedMemory: number;
	bDoesZapGarbage: boolean;
	clone() : JavascriptHeapStatistics;
	static C(Other: UObject | any): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static GetDefaultObject(): JavascriptIsolate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	Init(bIsEditor: boolean): void;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject | any): JavascriptIsolate;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: SoftObjectPath;
	clone() : JavascriptAsset;
	static C(Other: UObject | any): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject | any): JavascriptClassAsset;
}

declare class JavascriptComponent extends ActorComponent { 
	ScriptSourceFile: string;
	bActiveWithinEditor: boolean;
	JavascriptContext: JavascriptContext;
	JavascriptIsolate: JavascriptIsolate;
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	OnEndPlay: UnrealEngineDelegate<() => void>;
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	Assets: JavascriptAsset[];
	ClassAssets: JavascriptClassAsset[];
	static Load(ResourceName: string): JavascriptComponent;
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static GetDefaultObject(): JavascriptComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject | any): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static GetDefaultObject(): JavascriptDelegate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject | any): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject | any): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject | any): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject | any): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(MapName: string): void;
	PreGarbageCollectDelegate(): void;
	PostLoadMapWithWorld(World: World): void;
	PostGarbageCollect(): void;
	PostDemoPlay(): void;
	PostApplyLevelOffset(Level: Level,World: World,Offset: Vector,Flag: boolean): void;
	PackageCreatedForLoad(InPackage: Package): void;
	OnWorldCleanup(World: World,bSessionEnded: boolean,bCleanupResources: boolean): void;
	OnPreWorldInitialization_Friendly(World: World): void;
	OnPreWorldFinishDestroy(World: World): void;
	OnPreObjectPropertyChanged_Friendly(InObject: UObject,Property: any,MemberProperty: any): void;
	OnPostWorldInitialization_Friendly(World: World): void;
	OnPostWorldCreation(World: World): void;
	OnPostDuplicate_Friendly(World: World,bDuplicateForPIE: boolean): void;
	OnObjectSaved(UObject: UObject): void;
	OnObjectPropertyChanged_Friendly(InObject: UObject,Property: any,MemberProperty: any,ChangeType: number): void;
	OnObjectModified(UObject: UObject): void;
	OnAssetLoaded(UObject: UObject): void;
	OnActorLabelChanged(Actor: Actor): void;
	LevelRemovedFromWorld(Level: Level,World: World): void;
	LevelAddedToWorld(Level: Level,World: World): void;
	Bind(Key: string): void;
	static C(Other: UObject | any): JavascriptGlobalDelegates;
}

declare class JavascriptStaticCache extends UObject { 
	Isolates: JavascriptIsolate[];
	bExecuteTestModePIE: boolean;
	static Load(ResourceName: string): JavascriptStaticCache;
	static Find(Outer: UObject, ResourceName: string): JavascriptStaticCache;
	static GetDefaultObject(): JavascriptStaticCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStaticCache;
	static C(Other: UObject | any): JavascriptStaticCache;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject | any): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: SoftObjectPath): boolean;
	RequestAsyncLoad(TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: SoftObjectPath,Priority: number): void;
	Unload(Target: SoftObjectPath): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare class JavascriptInternetAddr { 
	clone() : JavascriptInternetAddr;
	static C(Other: UObject | any): JavascriptInternetAddr;
	SetIp(ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	SetPort(Port?: number): {Addr: JavascriptInternetAddr};
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static CreateInternetAddr(): JavascriptInternetAddr;
}

declare class JavascriptSocket { 
	clone() : JavascriptSocket;
	static C(Other: UObject | any): JavascriptSocket;
	SendMemoryTo(ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
}

declare type EJavascriptStatDataType = 'Invalid' | 'ST_None' | 'ST_int64' | 'ST_double' | 'ST_FName' | 'ST_Ptr' | 'EJavascriptStatDataType_MAX';
declare var EJavascriptStatDataType : { Invalid:'Invalid',ST_None:'ST_None',ST_int64:'ST_int64',ST_double:'ST_double',ST_FName:'ST_FName',ST_Ptr:'ST_Ptr',EJavascriptStatDataType_MAX:'EJavascriptStatDataType_MAX', };
declare type EJavascriptStatOperation = 'Invalid' | 'SetLongName' | 'AdvanceFrameEventGameThread' | 'AdvanceFrameEventRenderThread' | 'CycleScopeStart' | 'CycleScopeEnd' | 'SpecialMessageMarker' | 'Set' | 'Clear' | 'Add' | 'Subtract' | 'ChildrenStart' | 'ChildrenEnd' | 'Leaf' | 'MaxVal' | 'Memory' | 'EJavascriptStatOperation_MAX';
declare var EJavascriptStatOperation : { Invalid:'Invalid',SetLongName:'SetLongName',AdvanceFrameEventGameThread:'AdvanceFrameEventGameThread',AdvanceFrameEventRenderThread:'AdvanceFrameEventRenderThread',CycleScopeStart:'CycleScopeStart',CycleScopeEnd:'CycleScopeEnd',SpecialMessageMarker:'SpecialMessageMarker',Set:'Set',Clear:'Clear',Add:'Add',Subtract:'Subtract',ChildrenStart:'ChildrenStart',ChildrenEnd:'ChildrenEnd',Leaf:'Leaf',MaxVal:'MaxVal',Memory:'Memory',EJavascriptStatOperation_MAX:'EJavascriptStatOperation_MAX', };
declare class JavascriptStat { 
	clone() : JavascriptStat;
	static C(Other: UObject | any): JavascriptStat;
	AddMessage(InStatOperation: EJavascriptStatOperation): void;
	AddMessage_float(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	AddMessage_int(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean,bSortByName: boolean): JavascriptStat;
}

declare type ELogVerbosity_JS = 'NoLogging' | 'Fatal' | 'Error' | 'Warning' | 'Display' | 'Log' | 'Verbose' | 'VeryVerbose' | 'ELogVerbosity_MAX';
declare var ELogVerbosity_JS : { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose',ELogVerbosity_MAX:'ELogVerbosity_MAX', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject | any): JavascriptLogCategory;
	GetCategoryName(): string;
	IsSuppressed(Verbosity: ELogVerbosity_JS): boolean;
	Log(Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavscriptProperty { 
	Type: string;
	Name: string;
	clone() : JavscriptProperty;
	static C(Other: UObject | any): JavscriptProperty;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfileNode;
	GetBailoutReason(): string;
	GetCallUid(): number;
	GetChild(index: number): JavascriptProfileNode;
	GetChildrenCount(): number;
	GetColumnNumber(): number;
	GetDeoptInfo_Reason(index: number): string;
	GetDeoptInfo_Stack(index: number): string;
	GetDeoptInfosCount(index: number): number;
	GetFunctionName(): string;
	GetHitCount(): number;
	GetHitLineCount(): number;
	GetLineNumber(): number;
	GetNodeId(): number;
	GetScriptId(): number;
	GetScriptResourceName(): string;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static GetDefaultObject(): JavascriptLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string,EncodingOptions: EJavascriptEncodingOptions): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static TryLoadByPath(Path: string): UObject;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SetActorFlags(Actor: Actor,Flags: number): void;
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ResolveIp(HostName: string,OutIp?: string): {OutIp: string, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFileAsync(UObject: UObject,Filename: string,UFunction: JavascriptFunction): ReadStringFromFileHandle;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean,bSortByName: boolean): JavascriptStat;
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static LoadPackage(InOuter: Package,PackageName: string): Package;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsPendingKill(InActor: Actor): boolean;
	static IsGeneratedByBlueprint(InClass: UnrealEngineClass): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameModeBase,C?: Controller): {C: Controller};
	static GetWorldBounds(InWorld: World): Box;
	static GetSuperClasses(InClass: UnrealEngineClass): UnrealEngineClass[];
	static GetStructProperties(StructName: string,bIncludeSuper: boolean): JavscriptProperty[];
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetPlatformName(): string;
	static GetOutermost(UObject: UObject): UObject;
	static GetOuter(UObject: UObject): UObject;
	static GetObjectsWithOuter(Outer: UObject,Results?: UObject[],bIncludeNestedObjects?: boolean,ExclusionFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetObjectsOfClass(ClassToLookFor: UnrealEngineClass,Results?: UObject[],bIncludeDerivedClasses?: boolean,ExcludeFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetName(UObject: UObject): string;
	static GetModel(World: World): Model;
	static GetMetaData(Field: Field,Key: string): string;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetLevels(World: World): Level[];
	static GetLevel(Actor: Actor): Level;
	static GetLastRenderTime(Actor: Actor): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetFunctionParmsSize(UFunction: UFunction): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetFileSize(UObject: UObject,Filename: string): number;
	static GetFields(UObject: UObject,bIncludeSuper: boolean): Field[];
	static GetDynamicBinding(Outer: UnrealEngineClass,BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding;
	static GetDir(UObject: UObject,WhichDir: string): string;
	static GetDerivedClasses(ClassToLookFor: UnrealEngineClass,Results?: UnrealEngineClass[],bRecursive?: boolean): {Results: UnrealEngineClass[]};
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetCurrentProcessId(): number;
	static GetComponentsByClass(Actor: Actor,ComponentClass: UnrealEngineClass): ActorComponent[];
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetClassPathName(Class: UnrealEngineClass): string;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTagsInCurrentLevel(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GenerateNavigation(InWorld: World,NavData: RecastNavMesh): void;
	static FindPackage(InOuter: UObject,PackageName: string): Package;
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteFile(Filename: string,ReadOnly: boolean): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateInternetAddr(): JavascriptInternetAddr;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[],Flags: string[]): Enum;
	static ConvertRelativePathToFull(UObject: UObject,RelativePath: string): string;
	static ClipboardPaste(): string;
	static ClipboardCopy(string: string): void;
	static CallJS(UFunction: JavascriptFunction,CustomStruct: JavascriptStubStruct): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject | any): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static GetDefaultObject(): JavascriptMemoryObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject | any): JavascriptMemoryObject;
}

declare class JavascriptRef { 
	clone() : JavascriptRef;
	static C(Other: UObject | any): JavascriptRef;
}

declare class JavascriptObject extends UObject { 
	Ref: JavascriptRef;
	Func: JavascriptFunction;
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static GetDefaultObject(): JavascriptObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject | any): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static GetDefaultObject(): JavascriptOutputDevice;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject | any): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static GetDefaultObject(): JavascriptProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	static Sleep(Seconds: number): void;
	static SimulateKeypress(KeyEvent: number): void;
	static SetEnvironmentVar(VarName: string,VarValue: string): void;
	ReadFromPipe(): string;
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	static Open_PID(ProcessId: number): JavascriptProcess;
	static Open(ProcName: string): JavascriptProcess;
	static LaunchURL(URL: string,Parms: string,Error?: string): {Error: string};
	IsRunning(): boolean;
	static IsApplicationRunning_PID(ProcessId: number): boolean;
	static IsApplicationRunning(ProcName: string): boolean;
	static GetString(Key: string,bFlag: boolean): string;
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	static GetEnvironmentVar(VarName: string): string;
	static GetCurrentProcessId(): number;
	static GetApplicationName(ProcessId: number): string;
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
	static CanLaunchURL(URL: string): boolean;
	static C(Other: UObject | any): JavascriptProcess;
}

declare class JavascriptCpuProfiler { 
	clone() : JavascriptCpuProfiler;
	static C(Other: UObject | any): JavascriptCpuProfiler;
}

declare class JavascriptProfile extends UObject { 
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static GetDefaultObject(): JavascriptProfile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Profiler: JavascriptCpuProfiler,Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): JavascriptCpuProfiler;
	static SetSamplingInterval(Profiler: JavascriptCpuProfiler,us: number): void;
	static SetIdle(Profiler: JavascriptCpuProfiler,is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfile;
}

declare class JavascriptSemaphore extends UObject { 
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static GetDefaultObject(): JavascriptSemaphore;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject | any): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static GetDefaultObject(): JavascriptSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject | any): JavascriptSettings;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject | any): JavascriptSharedMemoryRegion;
}

declare class JavascriptAutomatedTestInstance { 
	clone() : JavascriptAutomatedTestInstance;
	static C(Other: UObject | any): JavascriptAutomatedTestInstance;
	AddAnalyticsItem(InAnalyticsItem: string): void;
	AddError(InError: string): void;
	AddLogItem(InLogItem: string): void;
	AddWarning(InWarning: string): void;
	ClearExecutionInfo(): void;
	Destroy(): {Test: JavascriptAutomatedTestInstance};
	SetContinue(bInContinue: boolean): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
}

declare class JavascriptAutomatedTest { 
	Name: string;
	bComplexTask: boolean;
	TestFlags: number;
	RequiredDeviceNum: number;
	TestFunctionNames: string[];
	UFunction: JavascriptFunction;
	clone() : JavascriptAutomatedTest;
	static C(Other: UObject | any): JavascriptAutomatedTest;
	Create(): JavascriptAutomatedTestInstance;
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}

declare class JavascriptTestLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptTestLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
	static GetDefaultObject(): JavascriptTestLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTestLibrary;
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
	static PushFrameCounter(): void;
	static PopFrameCounter(): void;
	static NewWorld(): World;
	static InitializeActorsForPlay(World: World,URL: URL): void;
	static DestroyWorld(World: World): void;
	static DestroyUObject(UObject: UObject): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static BeginPlay(World: World): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static C(Other: UObject | any): JavascriptTestLibrary;
}

declare class JavascriptComboButton extends ContentWidget { 
	ComboButtonStyle: ComboButtonStyle;
	ButtonStyle: ButtonStyle;
	OnGetMenuContent: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	OnMenuOpenChanged: UnrealEngineDelegate<(Value: boolean) => void>;
	OnComboBoxOpened: UnrealEngineDelegate<() => void>;
	bIsFocusable: boolean;
	bHasDownArrow: boolean;
	ForegroundColor: SlateColor;
	ButtonColorAndOpacity: SlateColor;
	ContentPadding: Margin;
	MenuPlacement: EMenuPlacement;
	HAlign: EHorizontalAlignment;
	VAlign: EVerticalAlignment;
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static GetDefaultObject(): JavascriptComboButton;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject | any): JavascriptComboButton;
}

declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject | any): JavascriptSlateIcon;
}

declare class JavascriptComboButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnGetWidget: UnrealEngineDelegate<(EditingObject: UObject) => JavascriptSlateWidget>;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptComboButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButtonContext;
	static GetDefaultObject(): JavascriptComboButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButtonContext;
	static C(Other: UObject | any): JavascriptComboButtonContext;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static GetDefaultObject(): JavascriptGameViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject | any): JavascriptGameViewport;
}

declare class JavascriptIntSpinBox extends Widget { 
	Value: number;
	ValueDelegate: UnrealEngineDelegate<() => number>;
	WidgetStyle: SpinBoxStyle;
	Style: SlateWidgetStyleAsset;
	Delta: number;
	SliderExponent: number;
	Font: SlateFontInfo;
	Justification: ETextJustify;
	MinDesiredWidth: number;
	ClearKeyboardFocusOnCommit: boolean;
	SelectAllTextOnCommit: boolean;
	ForegroundColor: SlateColor;
	OnValueChanged: UnrealEngineMulticastDelegate<(InValue: number) => void>;
	OnValueCommitted: UnrealEngineMulticastDelegate<(InValue: number, CommitMethod: ETextCommit) => void>;
	OnBeginSliderMovement: UnrealEngineMulticastDelegate<() => void>;
	OnEndSliderMovement: UnrealEngineMulticastDelegate<(InValue: number) => void>;
	bOverride_MinValue: boolean;
	bOverride_MaxValue: boolean;
	bOverride_MinSliderValue: boolean;
	bOverride_MaxSliderValue: boolean;
	MinValue: number;
	MaxValue: number;
	MinSliderValue: number;
	MaxSliderValue: number;
	static Load(ResourceName: string): JavascriptIntSpinBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptIntSpinBox;
	static GetDefaultObject(): JavascriptIntSpinBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIntSpinBox;
	SetValue(NewValue: number): void;
	SetMinValue(NewValue: number): void;
	SetMinSliderValue(NewValue: number): void;
	SetMaxValue(NewValue: number): void;
	SetMaxSliderValue(NewValue: number): void;
	SetForegroundColor(InForegroundColor: SlateColor): void;
	GetValue(): number;
	GetMinValue(): number;
	GetMinSliderValue(): number;
	GetMaxValue(): number;
	GetMaxSliderValue(): number;
	ClearMinValue(): void;
	ClearMinSliderValue(): void;
	ClearMaxValue(): void;
	ClearMaxSliderValue(): void;
	static C(Other: UObject | any): JavascriptIntSpinBox;
}

declare class TableColumnHeaderStyle extends SlateWidgetStyle { 
	SortPrimaryAscendingImage: SlateBrush;
	SortPrimaryDescendingImage: SlateBrush;
	SortSecondaryAscendingImage: SlateBrush;
	SortSecondaryDescendingImage: SlateBrush;
	NormalBrush: SlateBrush;
	HoveredBrush: SlateBrush;
	MenuDropdownImage: SlateBrush;
	MenuDropdownNormalBorderBrush: SlateBrush;
	MenuDropdownHoveredBorderBrush: SlateBrush;
	clone() : TableColumnHeaderStyle;
	static C(Other: UObject | any): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject | any): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject | any): HeaderRowStyle;
}

declare class JavascriptColumn { 
	ID: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject | any): JavascriptColumn;
}

declare class JavascriptTreeView extends ListViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, ID: string, Instance: JavascriptTreeView) => Widget>;
	OnExpansionChanged: UnrealEngineDelegate<(Item: UObject, bExpanded: boolean, Instance: JavascriptTreeView) => void>;
	OnContextMenuOpening: UnrealEngineDelegate<(Instance: JavascriptTreeView) => Widget>;
	OnGetChildren: UnrealEngineDelegate<(Item: UObject, Instance: JavascriptTreeView) => void>;
	JavascriptContext: JavascriptContext;
	Items: UObject[];
	HeaderRowStyle: HeaderRowStyle;
	TableRowStyle: TableRowStyle;
	ScrollBarStyle: ScrollBarStyle;
	SelectionMode: ESelectionMode;
	Children: UObject[];
	Columns: JavascriptColumn[];
	ColumnWidgets: Widget[];
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static GetDefaultObject(): JavascriptTreeView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	SetDoubleClickSelection(SelectedItem: UObject): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	IsDoubleClickSelection(SelectedItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[], $: boolean};
	GetDoubleClickedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	ClearDoubleClickSelection(): void;
	static C(Other: UObject | any): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static GetDefaultObject(): JavascriptListView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptListView;
}

declare type EJavasrciptUserInterfaceActionType = 'None' | 'Button' | 'ToggleButton' | 'RadioButton' | 'Check' | 'CollapsedButton' | 'EJavasrciptUserInterfaceActionType_MAX';
declare var EJavasrciptUserInterfaceActionType : { None:'None',Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check',CollapsedButton:'CollapsedButton',EJavasrciptUserInterfaceActionType_MAX:'EJavasrciptUserInterfaceActionType_MAX', };
declare class JavascriptMenuContext extends UObject { 
	Description: string;
	Tooltip: string;
	Icon: JavascriptSlateIcon;
	ActionType: EJavasrciptUserInterfaceActionType;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	OnExecute: UnrealEngineDelegate<() => void>;
	OnGetActionCheckState: UnrealEngineDelegate<() => ECheckBoxState>;
	static Load(ResourceName: string): JavascriptMenuContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuContext;
	static GetDefaultObject(): JavascriptMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuContext;
	static C(Other: UObject | any): JavascriptMenuContext;
}

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static GetDefaultObject(): JavascriptTextModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(string: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject | any): JavascriptTextLayout;
	AddLine(Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	ClearLines(): {TextLayout: JavascriptTextLayout};
	GetAsText(): string;
	GetLineLength(): number;
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
}

declare class JavascriptMultiLineEditableTextBox extends MultiLineEditableTextBox { 
	OnVScrollBarUserScrolled: UnrealEngineMulticastDelegate<(Offset: number) => void>;
	GetTextDelegate: UnrealEngineDelegate<(TextLayout: JavascriptTextLayout) => string>;
	SetTextDelegate: UnrealEngineDelegate<(InText: string, TextLayout: JavascriptTextLayout) => void>;
	bAlwaysShowScrollbars: boolean;
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject | any): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject | any): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	JavascriptContext: JavascriptContext;
	OnTextChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(text: string, CommitMethod: ETextCommit) => void>;
	text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static GetDefaultObject(): JavascriptSearchBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	OnKeyDown(MyGeometry: Geometry,InKeyEvent: KeyEvent): EventReply;
	static C(Other: UObject | any): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject | any): JavascriptStyleSet;
	GetBrush(StyleName: string): SlateBrush;
	GetButtonStyle(StyleName: string): ButtonStyle;
	GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
	GetColor(StyleName: string): LinearColor;
	GetComboBoxStyle(StyleName: string): ComboBoxStyle;
	GetComboButtonStyle(StyleName: string): ComboButtonStyle;
	GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
	GetEditableTextStyle(StyleName: string): EditableTextStyle;
	GetFloat(StyleName: string): number;
	GetFontStyle(StyleName: string): SlateFontInfo;
	GetMargin(StyleName: string): Margin;
	GetProgressBarStyle(StyleName: string): ProgressBarStyle;
	GetSlateColor(StyleName: string): SlateColor;
	GetSound(StyleName: string): SlateSound;
	GetTextBlockStyle(StyleName: string): TextBlockStyle;
	GetVector(StyleName: string): Vector2D;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetProgressBarStyle(Handle: JavascriptStyleSet,StyleName: string): ProgressBarStyle;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
}

declare class JavascriptStyleSetLibrary extends BlueprintFunctionLibrary { 
	SlateColor: SlateColor;
	SlateBrush: SlateBrush;
	ButtonStyle: ButtonStyle;
	TextBlockStyle: TextBlockStyle;
	EditableTextStyle: EditableTextStyle;
	EditableTextBoxStyle: EditableTextBoxStyle;
	CheckBoxStyle: CheckBoxStyle;
	ComboBoxStyle: ComboBoxStyle;
	ComboButtonStyle: ComboButtonStyle;
	ProgressBarStyle: ProgressBarStyle;
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStyleSetLibrary;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetProgressBarStyle(Handle: JavascriptStyleSet,StyleName: string): ProgressBarStyle;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static C(Other: UObject | any): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static GetDefaultObject(): JavascriptTextBlock;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject | any): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static GetDefaultObject(): JavascriptTileView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptTileView;
}

declare class JavascriptToolbarButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	static Load(ResourceName: string): JavascriptToolbarButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptToolbarButtonContext;
	static GetDefaultObject(): JavascriptToolbarButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptToolbarButtonContext;
	UnmarkReferencedObject(): void;
	MarkReferencedObject(): void;
	static C(Other: UObject | any): JavascriptToolbarButtonContext;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject | any): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject | any): JavascriptSlateStyle;
	AddBorderBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddBoxBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddFontInfo(PropertyName: string,FontInfo: SlateFontInfo): void;
	AddImageBrush(PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	AddSound(PropertyName: string,Sound: SlateSound): void;
	Register(): void;
	RootToContentDir(RelativePath: string): string;
	RootToCoreContentDir(RelativePath: string): string;
	SetContentRoot(InContentRootDir: string): void;
	SetCoreContentRoot(InCoreContentRootDir: string): void;
	Unregister(): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static ShowWindow(NewWindow: JavascriptSlateWidget): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetContent(TargetWidget: NativeWidgetHost,SlateWidget: JavascriptSlateWidget): Widget;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GetRootWindow(): JavascriptSlateWidget;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget,bShowImmediately: boolean): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject | any): JavascriptUMGLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnReleaseActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnInputAxisEvent: UnrealEngineMulticastDelegate<(Axis: number, AxisName: string) => void>;
	ContentSlot: PanelSlot;
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static GetDefaultObject(): JavascriptWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnReleaseInputActionByName(ActionName: string): void;
	OnListenForInputAxis(AxisName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputAxisByName(Axis: number,ActionName: string): void;
	OnInputActionByName(ActionName: string): void;
	OnDestroy(bReleaseChildren: boolean): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject | any): JavascriptWidget;
}

declare type EJavascriptWindowType = 'Normal' | 'Menu' | 'ToolTip' | 'Notification' | 'CursorDecorator' | 'EJavascriptWindowType_MAX';
declare var EJavascriptWindowType : { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator',EJavascriptWindowType_MAX:'EJavascriptWindowType_MAX', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	BackgroundColor: SlateColor;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject | any): WindowStyle;
}

declare type EJavascriptAutoCenter = 'None' | 'PrimaryWorkArea' | 'PreferredWorkArea' | 'EJavascriptAutoCenter_MAX';
declare var EJavascriptAutoCenter : { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea',EJavascriptAutoCenter_MAX:'EJavascriptAutoCenter_MAX', };
declare type EJavascriptWindowTransparency = 'None' | 'PerWindow' | 'EJavascriptWindowTransparency_MAX';
declare var EJavascriptWindowTransparency : { None:'None',PerWindow:'PerWindow',EJavascriptWindowTransparency_MAX:'EJavascriptWindowTransparency_MAX', };
declare type EJavascriptSizingRule = 'FixedSize' | 'Autosized' | 'UserSized' | 'EJavascriptSizingRule_MAX';
declare var EJavascriptSizingRule : { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized',EJavascriptSizingRule_MAX:'EJavascriptSizingRule_MAX', };
declare class JavascriptWindow extends ContentWidget { 
	Type: EJavascriptWindowType;
	Style: WindowStyle;
	Title: string;
	bDragAnywhere: boolean;
	AutoCenter: EJavascriptAutoCenter;
	ScreenPosition: Vector2D;
	ClientSize: Vector2D;
	SupportsTransparency: EJavascriptWindowTransparency;
	InitialOpacity: number;
	IsInitiallyMaximized: boolean;
	SizingRule: EJavascriptSizingRule;
	IsPopupWindow: boolean;
	FocusWhenFirstShown: boolean;
	ActivateWhenFirstShown: boolean;
	UseOSWindowBorder: boolean;
	HasCloseButton: boolean;
	SupportsMaximize: boolean;
	SupportsMinimize: boolean;
	CreateTitleBar: boolean;
	SaneWindowPlacement: boolean;
	LayoutBorder: Margin;
	UserResizeBorder: Margin;
	OnWindowClosed: UnrealEngineDelegate<() => void>;
	OnWindowDeactivated: UnrealEngineDelegate<() => void>;
	IsTopmostWindow: boolean;
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static GetDefaultObject(): JavascriptWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWindow;
	ShowWindow(): void;
	SetOpacity(InOpacity: number): void;
	Resize(NewSize: Vector2D): void;
	ReshapeWindow(NewPosition: Vector2D,NewSize: Vector2D): void;
	RequestDestroyWindow(): void;
	MoveWindowTo(NewPosition: Vector2D): void;
	HideWindow(): void;
	FlashWindow(): void;
	EnableWindow(bEnable: boolean): void;
	DestroyWindowImmediately(): void;
	BringToFront(): void;
	static C(Other: UObject | any): JavascriptWindow;
	OpenDirectoryDialog(DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	OpenFileDialog(DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenDirectoryDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
}

declare type EJavascriptHttpRequestStatus = 'NotStarted' | 'Processing' | 'Failed' | 'Succeeded' | 'EJavascriptHttpRequestStatus_MAX';
declare var EJavascriptHttpRequestStatus : { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded',EJavascriptHttpRequestStatus_MAX:'EJavascriptHttpRequestStatus_MAX', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static GetDefaultObject(): JavascriptHttpRequest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
	SetContentWithFiles(FilePaths: string[],Boundary: string,Content: string): void;
	SetContentFromMemory(): void;
	SetContentAsString(ContentString: string): void;
	ProcessRequest(): boolean;
	GetVerb(): string;
	GetStatus(): EJavascriptHttpRequestStatus;
	GetResponseCode(): number;
	GetElapsedTime(): number;
	GetContentToMemory(): void;
	GetContentLength(): number;
	GetContentAsString(): string;
	CancelRequest(): void;
	static C(Other: UObject | any): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static GetDefaultObject(): JavascriptWebSocket;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	Tick(): void;
	SendMemory(NumBytes: number): void;
	RemoteEndPoint(bAppendPort: boolean): string;
	LocalEndPoint(bAppendPort: boolean): string;
	GetReceivedBytes(): number;
	Flush(): void;
	Dispose(): void;
	CopyBuffer(): void;
	static Connect(Endpoint: string): JavascriptWebSocket;
	static C(Other: UObject | any): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject | any): JavascriptWebSocketServer;
}

declare class MagicLeapPlanesComponent extends SceneComponent { 
	QueryFlags: EMagicLeapPlaneQueryFlags[];
	SearchVolume: BoxComponent;
	MaxResults: number;
	MinHolePerimeter: number;
	MinPlaneArea: number;
	QueryType: EMagicLeapPlaneQueryType;
	SimilarityThreshold: number;
	OnPlanesQueryResult: UnrealEngineMulticastDelegate<(bSuccess: boolean, planes: MagicLeapPlaneResult[], Polygons: MagicLeapPlaneBoundaries[]) => void>;
	OnPersistentPlanesQueryResult: UnrealEngineMulticastDelegate<(bSuccess: boolean, QueryHandle: Guid, QueryType: EMagicLeapPlaneQueryType, NewPlanes: MagicLeapPlaneResult[], RemovedPlaneIDs: Guid[], NewPolygons: MagicLeapPlaneBoundaries[], RemovedPolygonIDs: Guid[]) => void>;
	static Load(ResourceName: string): MagicLeapPlanesComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapPlanesComponent;
	static GetDefaultObject(): MagicLeapPlanesComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapPlanesComponent;
	RequestPlanesAsync(): boolean;
	static C(Other: UObject | any): MagicLeapPlanesComponent;
}

declare class MagicLeapPlanesFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapPlanesFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapPlanesFunctionLibrary;
	static GetDefaultObject(): MagicLeapPlanesFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapPlanesFunctionLibrary;
	static ReorderPlaneFlags(InPriority: EMagicLeapPlaneQueryFlags[],InFlagsToReorder: EMagicLeapPlaneQueryFlags[],OutReorderedFlags?: EMagicLeapPlaneQueryFlags[]): {OutReorderedFlags: EMagicLeapPlaneQueryFlags[]};
	static RemovePersistentQuery(Handle: Guid): boolean;
	static RemoveFlagsNotInQuery(InQueryFlags: EMagicLeapPlaneQueryFlags[],InResultFlags: EMagicLeapPlaneQueryFlags[],OutFlags?: EMagicLeapPlaneQueryFlags[]): {OutFlags: EMagicLeapPlaneQueryFlags[]};
	static IsTrackerValid(): boolean;
	static GetContentScale(ContentActor: Actor,PlaneResult: MagicLeapPlaneResult): Transform;
	static DestroyTracker(): boolean;
	static CreateTracker(): boolean;
	static AddPersistentQuery(PersistentQueryType: EMagicLeapPlaneQueryType): Guid;
	static C(Other: UObject | any): MagicLeapPlanesFunctionLibrary;
}

declare class MagicLeapLightingTrackingComponent extends ActorComponent { 
	UseGlobalAmbience: boolean;
	UseColorTemp: boolean;
	static Load(ResourceName: string): MagicLeapLightingTrackingComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapLightingTrackingComponent;
	static GetDefaultObject(): MagicLeapLightingTrackingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapLightingTrackingComponent;
	static C(Other: UObject | any): MagicLeapLightingTrackingComponent;
}

declare class MagicLeapLightEstimationColorTemperatureState { 
	ColorTemperatureKelvin: number;
	AmbientColor: LinearColor;
	Timestamp: Timespan;
	clone() : MagicLeapLightEstimationColorTemperatureState;
	static C(Other: UObject | any): MagicLeapLightEstimationColorTemperatureState;
	GetColorTemperatureState(): {ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState, $: boolean};
	static GetColorTemperatureState(ColorTemperatureState?: MagicLeapLightEstimationColorTemperatureState): {ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState, $: boolean};
}

declare class MagicLeapLightEstimationAmbientGlobalState { 
	AmbientIntensityNits: number[];
	Timestamp: Timespan;
	clone() : MagicLeapLightEstimationAmbientGlobalState;
	static C(Other: UObject | any): MagicLeapLightEstimationAmbientGlobalState;
	GetAmbientGlobalState(): {GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState, $: boolean};
	static GetAmbientGlobalState(GlobalAmbientState?: MagicLeapLightEstimationAmbientGlobalState): {GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState, $: boolean};
}

declare class MagicLeapLightEstimationFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapLightEstimationFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapLightEstimationFunctionLibrary;
	static GetDefaultObject(): MagicLeapLightEstimationFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapLightEstimationFunctionLibrary;
	static IsTrackerValid(): boolean;
	static GetColorTemperatureState(ColorTemperatureState?: MagicLeapLightEstimationColorTemperatureState): {ColorTemperatureState: MagicLeapLightEstimationColorTemperatureState, $: boolean};
	static GetAmbientGlobalState(GlobalAmbientState?: MagicLeapLightEstimationAmbientGlobalState): {GlobalAmbientState: MagicLeapLightEstimationAmbientGlobalState, $: boolean};
	static DestroyTracker(): void;
	static CreateTracker(): boolean;
	static C(Other: UObject | any): MagicLeapLightEstimationFunctionLibrary;
}

declare type EMagicLeapAutoPinType = 'OnlyOnDataRestoration' | 'Always' | 'Never' | 'EMagicLeapAutoPinType_MAX';
declare var EMagicLeapAutoPinType : { OnlyOnDataRestoration:'OnlyOnDataRestoration',Always:'Always',Never:'Never',EMagicLeapAutoPinType_MAX:'EMagicLeapAutoPinType_MAX', };
declare class MagicLeapARPinSaveGame extends SaveGame { 
	PinnedID: Guid;
	ComponentWorldTransform: Transform;
	PinTransform: Transform;
	bShouldPinActor: boolean;
	static Load(ResourceName: string): MagicLeapARPinSaveGame;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinSaveGame;
	static GetDefaultObject(): MagicLeapARPinSaveGame;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinSaveGame;
	static C(Other: UObject | any): MagicLeapARPinSaveGame;
}

declare class MagicLeapARPinComponent extends SceneComponent { 
	ObjectUID: string;
	UserIndex: number;
	AutoPinType: EMagicLeapAutoPinType;
	bShouldPinActor: boolean;
	PinDataClass: UnrealEngineClass;
	SearchPinTypes: any;
	SearchVolume: SphereComponent;
	OnPersistentEntityPinned: UnrealEngineMulticastDelegate<(bRestoredOrSynced: boolean) => void>;
	OnPersistentEntityPinLost: UnrealEngineMulticastDelegate<() => void>;
	OnPinDataLoadAttemptCompleted: UnrealEngineMulticastDelegate<(bDataRestored: boolean) => void>;
	PinnedCFUID: Guid;
	PinnedSceneComponent: SceneComponent;
	PinData: MagicLeapARPinSaveGame;
	static Load(ResourceName: string): MagicLeapARPinComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinComponent;
	static GetDefaultObject(): MagicLeapARPinComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinComponent;
	UnPin(): void;
	TryGetPinData(InPinDataClass: UnrealEngineClass,OutPinDataValid?: boolean): {OutPinDataValid: boolean, $: MagicLeapARPinSaveGame};
	PinToRestoredOrSyncedID(): boolean;
	PinToID(PinId: Guid): boolean;
	PinToBestFit(): void;
	PinSceneComponent(ComponentToPin: SceneComponent): boolean;
	PinRestoredOrSynced(): boolean;
	PinActor(ActorToPin: Actor): boolean;
	IsPinned(): boolean;
	GetPinState(State?: MagicLeapARPinState): {State: MagicLeapARPinState, $: boolean};
	GetPinnedPinID(PinId?: Guid): {PinId: Guid, $: boolean};
	GetPinData(PinDataClass: UnrealEngineClass): MagicLeapARPinSaveGame;
	AttemptPinDataRestorationAsync(): void;
	AttemptPinDataRestoration(): boolean;
	static C(Other: UObject | any): MagicLeapARPinComponent;
}

declare class MagicLeapARPinQuery { 
	Types: any;
	MaxResults: number;
	TargetPoint: Vector;
	Radius: number;
	bSorted: boolean;
	clone() : MagicLeapARPinQuery;
	static C(Other: UObject | any): MagicLeapARPinQuery;
	GetGlobalQueryFilter(): {CurrentGlobalFilter: MagicLeapARPinQuery, $: EMagicLeapPassableWorldError};
	QueryARPins(Pins?: Guid[]): {Pins: Guid[], $: EMagicLeapPassableWorldError};
	SetGlobalQueryFilter(): EMagicLeapPassableWorldError;
	static GetGlobalQueryFilter(CurrentGlobalFilter?: MagicLeapARPinQuery): {CurrentGlobalFilter: MagicLeapARPinQuery, $: EMagicLeapPassableWorldError};
	static QueryARPins(Query: MagicLeapARPinQuery,Pins?: Guid[]): {Pins: Guid[], $: EMagicLeapPassableWorldError};
	static SetGlobalQueryFilter(InGlobalFilter: MagicLeapARPinQuery): EMagicLeapPassableWorldError;
}

declare class MagicLeapARPinFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapARPinFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinFunctionLibrary;
	static GetDefaultObject(): MagicLeapARPinFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinFunctionLibrary;
	static SetGlobalQueryFilter(InGlobalFilter: MagicLeapARPinQuery): EMagicLeapPassableWorldError;
	static SetContentBindingSaveGameUserIndex(UserIndex: number): void;
	static QueryARPins(Query: MagicLeapARPinQuery,Pins?: Guid[]): {Pins: Guid[], $: EMagicLeapPassableWorldError};
	static ParseStringToARPinId(PinIdString: string,ARPinId?: Guid): {ARPinId: Guid, $: boolean};
	static IsTrackerValid(): boolean;
	static GetNumAvailableARPins(Count?: number): {Count: number, $: EMagicLeapPassableWorldError};
	static GetGlobalQueryFilter(CurrentGlobalFilter?: MagicLeapARPinQuery): {CurrentGlobalFilter: MagicLeapARPinQuery, $: EMagicLeapPassableWorldError};
	static GetContentBindingSaveGameUserIndex(): number;
	static GetClosestARPin(SearchPoint: Vector,PinId?: Guid): {PinId: Guid, $: EMagicLeapPassableWorldError};
	static GetAvailableARPins(NumRequested: number,Pins?: Guid[]): {Pins: Guid[], $: EMagicLeapPassableWorldError};
	static GetARPinStateToString(State: MagicLeapARPinState): string;
	static GetARPinState(PinId: Guid,State?: MagicLeapARPinState): {State: MagicLeapARPinState, $: EMagicLeapPassableWorldError};
	static GetARPinPositionAndOrientation_TrackingSpace(PinId: Guid,Position?: Vector,Orientation?: Rotator,PinFoundInEnvironment?: boolean): {Position: Vector, Orientation: Rotator, PinFoundInEnvironment: boolean, $: boolean};
	static GetARPinPositionAndOrientation(PinId: Guid,Position?: Vector,Orientation?: Rotator,PinFoundInEnvironment?: boolean): {Position: Vector, Orientation: Rotator, PinFoundInEnvironment: boolean, $: boolean};
	static DestroyTracker(): EMagicLeapPassableWorldError;
	static CreateTracker(): EMagicLeapPassableWorldError;
	static ARPinIdToString(ARPinId: Guid): string;
	static C(Other: UObject | any): MagicLeapARPinFunctionLibrary;
}

declare class MagicLeapARPinInfoActorBase extends Actor { 
	PinId: Guid;
	bVisibilityOverride: boolean;
	static GetDefaultObject(): MagicLeapARPinInfoActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinInfoActorBase;
	OnUpdateARPinState(): void;
	static C(Other: UObject | any): MagicLeapARPinInfoActorBase;
}

declare class MagicLeapARPinRenderer extends Actor { 
	bInfoActorsVisibilityOverride: boolean;
	AllInfoActors: any;
	ClassToSpawn: UnrealEngineClass;
	static GetDefaultObject(): MagicLeapARPinRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinRenderer;
	SetVisibilityOverride(InVisibilityOverride: boolean): void;
	static C(Other: UObject | any): MagicLeapARPinRenderer;
}

declare class MagicLeapARPinSettings extends UObject { 
	UpdateCheckFrequency: number;
	OnUpdatedEventTriggerDelta: MagicLeapARPinState;
	static Load(ResourceName: string): MagicLeapARPinSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinSettings;
	static GetDefaultObject(): MagicLeapARPinSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinSettings;
	static C(Other: UObject | any): MagicLeapARPinSettings;
}

declare class MagicLeapARPinContentBindings extends SaveGame { 
	AllContentBindings: any;
	static Load(ResourceName: string): MagicLeapARPinContentBindings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinContentBindings;
	static GetDefaultObject(): MagicLeapARPinContentBindings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinContentBindings;
	static C(Other: UObject | any): MagicLeapARPinContentBindings;
}

declare class MagicLeapImageTrackerComponent extends SceneComponent { 
	TargetImageTexture: Texture2D;
	Name: string;
	LongerDimension: number;
	bIsStationary: boolean;
	bUseUnreliablePose: boolean;
	AxisOrientation: EMagicLeapImageTargetOrientation;
	OnSetImageTargetSucceeded: UnrealEngineMulticastDelegate<() => void>;
	OnSetImageTargetFailed: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetFound: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetLost: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetUnreliableTracking: UnrealEngineMulticastDelegate<(LastTrackedLocation: Vector, LastTrackedRotation: Rotator, NewUnreliableLocation: Vector, NewUnreliableRotation: Rotator) => void>;
	static Load(ResourceName: string): MagicLeapImageTrackerComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapImageTrackerComponent;
	static GetDefaultObject(): MagicLeapImageTrackerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapImageTrackerComponent;
	SetTargetAsync(ImageTarget: Texture2D): boolean;
	RemoveTargetAsync(): boolean;
	static C(Other: UObject | any): MagicLeapImageTrackerComponent;
}

declare class MagicLeapImageTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapImageTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapImageTrackerFunctionLibrary;
	static GetDefaultObject(): MagicLeapImageTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapImageTrackerFunctionLibrary;
	static SetMaxSimultaneousTargets(MaxSimultaneousTargets: number): void;
	static IsImageTrackingEnabled(): boolean;
	static GetMaxSimultaneousTargets(): number;
	static EnableImageTracking(bEnable: boolean): void;
	static C(Other: UObject | any): MagicLeapImageTrackerFunctionLibrary;
}

declare class LuminARSessionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LuminARSessionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): LuminARSessionFunctionLibrary;
	static GetDefaultObject(): LuminARSessionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminARSessionFunctionLibrary;
	static StartLuminARSession(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Configuration: LuminARSessionConfig): void;
	static C(Other: UObject | any): LuminARSessionFunctionLibrary;
}

declare type ELuminARTrackingState = 'Tracking' | 'NotTracking' | 'StoppedTracking' | 'ELuminARTrackingState_MAX';
declare var ELuminARTrackingState : { Tracking:'Tracking',NotTracking:'NotTracking',StoppedTracking:'StoppedTracking',ELuminARTrackingState_MAX:'ELuminARTrackingState_MAX', };
declare class LuminARFrameFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LuminARFrameFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): LuminARFrameFunctionLibrary;
	static GetDefaultObject(): LuminARFrameFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminARFrameFunctionLibrary;
	static LuminARLineTrace(WorldContextObject: UObject,ScreenPosition: Vector2D,TraceChannels: any,OutHitResults?: ARTraceResult[]): {OutHitResults: ARTraceResult[], $: boolean};
	static GetTrackingState(): ELuminARTrackingState;
	static C(Other: UObject | any): LuminARFrameFunctionLibrary;
}

declare class LuminARImageTrackingFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LuminARImageTrackingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): LuminARImageTrackingFunctionLibrary;
	static GetDefaultObject(): LuminARImageTrackingFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminARImageTrackingFunctionLibrary;
	static AddLuminRuntimeCandidateImageEx(SessionConfig: ARSessionConfig,CandidateTexture: Texture2D,FriendlyName: string,PhysicalWidth: number,bUseUnreliablePose: boolean,bImageIsStationary: boolean,InAxisOrientation: EMagicLeapImageTargetOrientation): LuminARCandidateImage;
	static AddLuminRuntimeCandidateImage(SessionConfig: ARSessionConfig,CandidateTexture: Texture2D,FriendlyName: string,PhysicalWidth: number,bUseUnreliablePose: boolean,bImageIsStationary: boolean): LuminARCandidateImage;
	static C(Other: UObject | any): LuminARImageTrackingFunctionLibrary;
}

declare class LuminAROrigin extends AROriginActor { 
	MRMeshComponent: MRMeshComponent;
	PlaneSurfaceMaterial: MaterialInterface;
	WireframeMaterial: MaterialInterface;
	static GetDefaultObject(): LuminAROrigin;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminAROrigin;
	static C(Other: UObject | any): LuminAROrigin;
}

declare class LuminARLightEstimate extends ARBasicLightEstimate { 
	AmbientIntensityNits: number[];
	static Load(ResourceName: string): LuminARLightEstimate;
	static Find(Outer: UObject, ResourceName: string): LuminARLightEstimate;
	static GetDefaultObject(): LuminARLightEstimate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminARLightEstimate;
	GetAmbientIntensityNits(): number[];
	static C(Other: UObject | any): LuminARLightEstimate;
}

declare type EMagicLeapControllerTrackingMode = 'InputService' | 'CoordinateFrameUID' | 'EMagicLeapControllerTrackingMode_MAX';
declare var EMagicLeapControllerTrackingMode : { InputService:'InputService',CoordinateFrameUID:'CoordinateFrameUID',EMagicLeapControllerTrackingMode_MAX:'EMagicLeapControllerTrackingMode_MAX', };
declare type EMagicLeapControllerLEDPattern = 'None' | 'Clock01' | 'Clock02' | 'Clock03' | 'Clock04' | 'Clock05' | 'Clock06' | 'Clock07' | 'Clock08' | 'Clock09' | 'Clock10' | 'Clock11' | 'Clock12' | 'Clock01_07' | 'Clock02_08' | 'Clock03_09' | 'Clock04_10' | 'Clock05_11' | 'Clock06_12' | 'EMagicLeapControllerLEDPattern_MAX';
declare var EMagicLeapControllerLEDPattern : { None:'None',Clock01:'Clock01',Clock02:'Clock02',Clock03:'Clock03',Clock04:'Clock04',Clock05:'Clock05',Clock06:'Clock06',Clock07:'Clock07',Clock08:'Clock08',Clock09:'Clock09',Clock10:'Clock10',Clock11:'Clock11',Clock12:'Clock12',Clock01_07:'Clock01_07',Clock02_08:'Clock02_08',Clock03_09:'Clock03_09',Clock04_10:'Clock04_10',Clock05_11:'Clock05_11',Clock06_12:'Clock06_12',EMagicLeapControllerLEDPattern_MAX:'EMagicLeapControllerLEDPattern_MAX', };
declare type EMagicLeapControllerLEDColor = 'BrightMissionRed' | 'PastelMissionRed' | 'BrightFloridaOrange' | 'PastelFloridaOrange' | 'BrightLunaYellow' | 'PastelLunaYellow' | 'BrightNebulaPink' | 'PastelNebulaPink' | 'BrightCosmicPurple' | 'PastelCosmicPurple' | 'BrightMysticBlue' | 'PastelMysticBlue' | 'BrightCelestialBlue' | 'PastelCelestialBlue' | 'BrightShaggleGreen' | 'PastelShaggleGreen' | 'EMagicLeapControllerLEDColor_MAX';
declare var EMagicLeapControllerLEDColor : { BrightMissionRed:'BrightMissionRed',PastelMissionRed:'PastelMissionRed',BrightFloridaOrange:'BrightFloridaOrange',PastelFloridaOrange:'PastelFloridaOrange',BrightLunaYellow:'BrightLunaYellow',PastelLunaYellow:'PastelLunaYellow',BrightNebulaPink:'BrightNebulaPink',PastelNebulaPink:'PastelNebulaPink',BrightCosmicPurple:'BrightCosmicPurple',PastelCosmicPurple:'PastelCosmicPurple',BrightMysticBlue:'BrightMysticBlue',PastelMysticBlue:'PastelMysticBlue',BrightCelestialBlue:'BrightCelestialBlue',PastelCelestialBlue:'PastelCelestialBlue',BrightShaggleGreen:'BrightShaggleGreen',PastelShaggleGreen:'PastelShaggleGreen',EMagicLeapControllerLEDColor_MAX:'EMagicLeapControllerLEDColor_MAX', };
declare type EMagicLeapControllerLEDEffect = 'RotateCW' | 'RotateCCW' | 'Pulse' | 'PaintCW' | 'PaintCCW' | 'Blink' | 'EMagicLeapControllerLEDEffect_MAX';
declare var EMagicLeapControllerLEDEffect : { RotateCW:'RotateCW',RotateCCW:'RotateCCW',Pulse:'Pulse',PaintCW:'PaintCW',PaintCCW:'PaintCCW',Blink:'Blink',EMagicLeapControllerLEDEffect_MAX:'EMagicLeapControllerLEDEffect_MAX', };
declare type EMagicLeapControllerLEDSpeed = 'Slow' | 'Medium' | 'Fast' | 'EMagicLeapControllerLEDSpeed_MAX';
declare var EMagicLeapControllerLEDSpeed : { Slow:'Slow',Medium:'Medium',Fast:'Fast',EMagicLeapControllerLEDSpeed_MAX:'EMagicLeapControllerLEDSpeed_MAX', };
declare type EMagicLeapControllerHapticPattern = 'None' | 'Click' | 'Bump' | 'DoubleClick' | 'Buzz' | 'Tick' | 'ForceDown' | 'ForceUp' | 'ForceDwell' | 'SecondForceDown' | 'EMagicLeapControllerHapticPattern_MAX';
declare var EMagicLeapControllerHapticPattern : { None:'None',Click:'Click',Bump:'Bump',DoubleClick:'DoubleClick',Buzz:'Buzz',Tick:'Tick',ForceDown:'ForceDown',ForceUp:'ForceUp',ForceDwell:'ForceDwell',SecondForceDown:'SecondForceDown',EMagicLeapControllerHapticPattern_MAX:'EMagicLeapControllerHapticPattern_MAX', };
declare type EMagicLeapControllerHapticIntensity = 'Low' | 'Medium' | 'High' | 'EMagicLeapControllerHapticIntensity_MAX';
declare var EMagicLeapControllerHapticIntensity : { Low:'Low',Medium:'Medium',High:'High',EMagicLeapControllerHapticIntensity_MAX:'EMagicLeapControllerHapticIntensity_MAX', };
declare type EMagicLeapControllerType = 'None' | 'Device' | 'MobileApp' | 'EMagicLeapControllerType_MAX';
declare var EMagicLeapControllerType : { None:'None',Device:'Device',MobileApp:'MobileApp',EMagicLeapControllerType_MAX:'EMagicLeapControllerType_MAX', };
declare class MagicLeapControllerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapControllerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapControllerFunctionLibrary;
	static GetDefaultObject(): MagicLeapControllerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapControllerFunctionLibrary;
	static SetMotionSourceForHand(hand: EControllerHand,MotionSource: string): boolean;
	static SetControllerTrackingMode(TrackingMode: EMagicLeapControllerTrackingMode): boolean;
	static PlayLEDPattern(MotionSource: string,LEDPattern: EMagicLeapControllerLEDPattern,LEDColor: EMagicLeapControllerLEDColor,DurationInSec: number): boolean;
	static PlayLEDEffect(MotionSource: string,LEDEffect: EMagicLeapControllerLEDEffect,LEDSpeed: EMagicLeapControllerLEDSpeed,LEDPattern: EMagicLeapControllerLEDPattern,LEDColor: EMagicLeapControllerLEDColor,DurationInSec: number): boolean;
	static PlayHapticPattern(MotionSource: string,HapticPattern: EMagicLeapControllerHapticPattern,Intensity: EMagicLeapControllerHapticIntensity): boolean;
	static PlayControllerLEDEffect(hand: EControllerHand,LEDEffect: EMagicLeapControllerLEDEffect,LEDSpeed: EMagicLeapControllerLEDSpeed,LEDPattern: EMagicLeapControllerLEDPattern,LEDColor: EMagicLeapControllerLEDColor,DurationInSec: number): boolean;
	static PlayControllerLED(hand: EControllerHand,LEDPattern: EMagicLeapControllerLEDPattern,LEDColor: EMagicLeapControllerLEDColor,DurationInSec: number): boolean;
	static PlayControllerHapticFeedback(hand: EControllerHand,HapticPattern: EMagicLeapControllerHapticPattern,Intensity: EMagicLeapControllerHapticIntensity): boolean;
	static MaxSupportedMagicLeapControllers(): number;
	static IsMLControllerConnected(MotionSource: string): boolean;
	static InvertControllerMapping(): void;
	static GetMotionSourceForHand(hand: EControllerHand): string;
	static GetMLControllerType(hand: EControllerHand): EMagicLeapControllerType;
	static GetHandForMotionSource(MotionSource: string): EControllerHand;
	static GetControllerType(MotionSource: string): EMagicLeapControllerType;
	static GetControllerTrackingMode(): EMagicLeapControllerTrackingMode;
	static GetControllerMapping(ControllerIndex: number,hand?: EControllerHand): {hand: EControllerHand, $: boolean};
	static C(Other: UObject | any): MagicLeapControllerFunctionLibrary;
}

declare type EMagicLeapTouchpadGestureType = 'None' | 'Tap' | 'ForceTapDown' | 'ForceTapUp' | 'ForceDwell' | 'SecondForceDown' | 'LongHold' | 'RadialScroll' | 'Swipe' | 'Scroll' | 'Pinch' | 'EMagicLeapTouchpadGestureType_MAX';
declare var EMagicLeapTouchpadGestureType : { None:'None',Tap:'Tap',ForceTapDown:'ForceTapDown',ForceTapUp:'ForceTapUp',ForceDwell:'ForceDwell',SecondForceDown:'SecondForceDown',LongHold:'LongHold',RadialScroll:'RadialScroll',Swipe:'Swipe',Scroll:'Scroll',Pinch:'Pinch',EMagicLeapTouchpadGestureType_MAX:'EMagicLeapTouchpadGestureType_MAX', };
declare type EMagicLeapTouchpadGestureDirection = 'None' | 'Up' | 'Down' | 'Left' | 'Right' | 'In' | 'Out' | 'Clockwise' | 'CounterClockwise' | 'EMagicLeapTouchpadGestureDirection_MAX';
declare var EMagicLeapTouchpadGestureDirection : { None:'None',Up:'Up',Down:'Down',Left:'Left',Right:'Right',In:'In',Out:'Out',Clockwise:'Clockwise',CounterClockwise:'CounterClockwise',EMagicLeapTouchpadGestureDirection_MAX:'EMagicLeapTouchpadGestureDirection_MAX', };
declare class MagicLeapTouchpadGesture { 
	hand: EControllerHand;
	MotionSource: string;
	Type: EMagicLeapTouchpadGestureType;
	Direction: EMagicLeapTouchpadGestureDirection;
	PositionAndForce: Vector;
	Speed: number;
	Distance: number;
	FingerGap: number;
	Radius: number;
	Angle: number;
	clone() : MagicLeapTouchpadGesture;
	static C(Other: UObject | any): MagicLeapTouchpadGesture;
}

declare class MagicLeapTouchpadGesturesComponent extends ActorComponent { 
	OnTouchpadGestureStart: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	OnTouchpadGestureContinue: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	OnTouchpadGestureEnd: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	static Load(ResourceName: string): MagicLeapTouchpadGesturesComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapTouchpadGesturesComponent;
	static GetDefaultObject(): MagicLeapTouchpadGesturesComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapTouchpadGesturesComponent;
	static C(Other: UObject | any): MagicLeapTouchpadGesturesComponent;
}

declare class EyeTrackerStereoGazeData { 
	LeftEyeOrigin: Vector;
	LeftEyeDirection: Vector;
	RightEyeOrigin: Vector;
	RightEyeDirection: Vector;
	FixationPoint: Vector;
	ConfidenceValue: number;
	clone() : EyeTrackerStereoGazeData;
	static C(Other: UObject | any): EyeTrackerStereoGazeData;
	GetStereoGazeData(): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
	static GetStereoGazeData(OutGazeData?: EyeTrackerStereoGazeData): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
}

declare class EyeTrackerGazeData { 
	GazeOrigin: Vector;
	GazeDirection: Vector;
	FixationPoint: Vector;
	ConfidenceValue: number;
	clone() : EyeTrackerGazeData;
	static C(Other: UObject | any): EyeTrackerGazeData;
	GetGazeData(): {OutGazeData: EyeTrackerGazeData, $: boolean};
	static GetGazeData(OutGazeData?: EyeTrackerGazeData): {OutGazeData: EyeTrackerGazeData, $: boolean};
}

declare class EyeTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): EyeTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): EyeTrackerFunctionLibrary;
	static GetDefaultObject(): EyeTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EyeTrackerFunctionLibrary;
	static SetEyeTrackedPlayer(PlayerController: PlayerController): void;
	static IsStereoGazeDataAvailable(): boolean;
	static IsEyeTrackerConnected(): boolean;
	static GetStereoGazeData(OutGazeData?: EyeTrackerStereoGazeData): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
	static GetGazeData(OutGazeData?: EyeTrackerGazeData): {OutGazeData: EyeTrackerGazeData, $: boolean};
	static C(Other: UObject | any): EyeTrackerFunctionLibrary;
}

declare class MagicLeapEyeBlinkState { 
	LeftEyeBlinked: boolean;
	RightEyeBlinked: boolean;
	clone() : MagicLeapEyeBlinkState;
	static C(Other: UObject | any): MagicLeapEyeBlinkState;
	GetEyeBlinkState(): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
	static GetEyeBlinkState(BlinkState?: MagicLeapEyeBlinkState): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
}

declare type EMagicLeapEyeTrackingCalibrationStatus = 'None' | 'Bad' | 'Good' | 'EMagicLeapEyeTrackingCalibrationStatus_MAX';
declare var EMagicLeapEyeTrackingCalibrationStatus : { None:'None',Bad:'Bad',Good:'Good',EMagicLeapEyeTrackingCalibrationStatus_MAX:'EMagicLeapEyeTrackingCalibrationStatus_MAX', };
declare class MagicLeapEyeTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapEyeTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapEyeTrackerFunctionLibrary;
	static GetDefaultObject(): MagicLeapEyeTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapEyeTrackerFunctionLibrary;
	static GetEyeBlinkState(BlinkState?: MagicLeapEyeBlinkState): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
	static GetCalibrationStatus(): EMagicLeapEyeTrackingCalibrationStatus;
	static C(Other: UObject | any): MagicLeapEyeTrackerFunctionLibrary;
}

declare class LiveLinkMagicLeapHandTrackingSourceFactory extends LiveLinkSourceFactory { 
	static Load(ResourceName: string): LiveLinkMagicLeapHandTrackingSourceFactory;
	static Find(Outer: UObject, ResourceName: string): LiveLinkMagicLeapHandTrackingSourceFactory;
	static GetDefaultObject(): LiveLinkMagicLeapHandTrackingSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkMagicLeapHandTrackingSourceFactory;
	static C(Other: UObject | any): LiveLinkMagicLeapHandTrackingSourceFactory;
}

declare type EMagicLeapHandTrackingGesture = 'Finger' | 'Fist' | 'Pinch' | 'Thumb' | 'L' | 'OpenHand' | 'OpenHandBack' | 'Ok' | 'C' | 'NoPose' | 'NoHand' | 'EMagicLeapHandTrackingGesture_MAX';
declare var EMagicLeapHandTrackingGesture : { Finger:'Finger',Fist:'Fist',Pinch:'Pinch',Thumb:'Thumb',L:'L',OpenHand:'OpenHand',OpenHandBack:'OpenHandBack',Ok:'Ok',C:'C',NoPose:'NoPose',NoHand:'NoHand',EMagicLeapHandTrackingGesture_MAX:'EMagicLeapHandTrackingGesture_MAX', };
declare type EMagicLeapHandTrackingKeypointFilterLevel = 'NoFilter' | 'SimpleSmoothing' | 'PredictiveSmoothing' | 'EMagicLeapHandTrackingKeypointFilterLevel_MAX';
declare var EMagicLeapHandTrackingKeypointFilterLevel : { NoFilter:'NoFilter',SimpleSmoothing:'SimpleSmoothing',PredictiveSmoothing:'PredictiveSmoothing',EMagicLeapHandTrackingKeypointFilterLevel_MAX:'EMagicLeapHandTrackingKeypointFilterLevel_MAX', };
declare type EMagicLeapHandTrackingGestureFilterLevel = 'NoFilter' | 'SlightRobustnessToFlicker' | 'MoreRobustnessToFlicker' | 'EMagicLeapHandTrackingGestureFilterLevel_MAX';
declare var EMagicLeapHandTrackingGestureFilterLevel : { NoFilter:'NoFilter',SlightRobustnessToFlicker:'SlightRobustnessToFlicker',MoreRobustnessToFlicker:'MoreRobustnessToFlicker',EMagicLeapHandTrackingGestureFilterLevel_MAX:'EMagicLeapHandTrackingGestureFilterLevel_MAX', };
declare type EMagicLeapHandTrackingKeypoint = 'Thumb_Tip' | 'Thumb_IP' | 'Thumb_MCP' | 'Thumb_CMC' | 'Index_Tip' | 'Index_DIP' | 'Index_PIP' | 'Index_MCP' | 'Middle_Tip' | 'Middle_DIP' | 'Middle_PIP' | 'Middle_MCP' | 'Ring_Tip' | 'Ring_DIP' | 'Ring_PIP' | 'Ring_MCP' | 'Pinky_Tip' | 'Pinky_DIP' | 'Pinky_PIP' | 'Pinky_MCP' | 'Wrist_Center' | 'Wrist_Ulnar' | 'Wrist_Radial' | 'Hand_Center' | 'EMagicLeapHandTrackingKeypoint_MAX';
declare var EMagicLeapHandTrackingKeypoint : { Thumb_Tip:'Thumb_Tip',Thumb_IP:'Thumb_IP',Thumb_MCP:'Thumb_MCP',Thumb_CMC:'Thumb_CMC',Index_Tip:'Index_Tip',Index_DIP:'Index_DIP',Index_PIP:'Index_PIP',Index_MCP:'Index_MCP',Middle_Tip:'Middle_Tip',Middle_DIP:'Middle_DIP',Middle_PIP:'Middle_PIP',Middle_MCP:'Middle_MCP',Ring_Tip:'Ring_Tip',Ring_DIP:'Ring_DIP',Ring_PIP:'Ring_PIP',Ring_MCP:'Ring_MCP',Pinky_Tip:'Pinky_Tip',Pinky_DIP:'Pinky_DIP',Pinky_PIP:'Pinky_PIP',Pinky_MCP:'Pinky_MCP',Wrist_Center:'Wrist_Center',Wrist_Ulnar:'Wrist_Ulnar',Wrist_Radial:'Wrist_Radial',Hand_Center:'Hand_Center',EMagicLeapHandTrackingKeypoint_MAX:'EMagicLeapHandTrackingKeypoint_MAX', };
declare class LiveLinkSourceHandle { 
	clone() : LiveLinkSourceHandle;
	static C(Other: UObject | any): LiveLinkSourceHandle;
	GetMagicLeapHandTrackingLiveLinkSource(): {SourceHandle: LiveLinkSourceHandle, $: boolean};
	static GetMagicLeapHandTrackingLiveLinkSource(SourceHandle?: LiveLinkSourceHandle): {SourceHandle: LiveLinkSourceHandle, $: boolean};
}

declare type EMagicLeapGestureTransformSpace = 'World' | 'Hand' | 'Tracking' | 'EMagicLeapGestureTransformSpace_MAX';
declare var EMagicLeapGestureTransformSpace : { World:'World',Hand:'Hand',Tracking:'Tracking',EMagicLeapGestureTransformSpace_MAX:'EMagicLeapGestureTransformSpace_MAX', };
declare class MagicLeapHandTrackingFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapHandTrackingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapHandTrackingFunctionLibrary;
	static GetDefaultObject(): MagicLeapHandTrackingFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapHandTrackingFunctionLibrary;
	static SetStaticGestureConfidenceThreshold(Gesture: EMagicLeapHandTrackingGesture,Confidence: number): void;
	static SetConfiguration(StaticGesturesToActivate: EMagicLeapHandTrackingGesture[],KeypointsFilterLevel: EMagicLeapHandTrackingKeypointFilterLevel,GestureFilterLevel: EMagicLeapHandTrackingGestureFilterLevel,bTrackingEnabled: boolean): boolean;
	static IsHoldingControl(hand: EControllerHand): boolean;
	static GetStaticGestureConfidenceThreshold(Gesture: EMagicLeapHandTrackingGesture): number;
	static GetMotionSourceForHandKeypoint(hand: EControllerHand,Keypoint: EMagicLeapHandTrackingKeypoint,OutMotionSource?: string): {OutMotionSource: string, $: boolean};
	static GetMagicLeapHandTrackingLiveLinkSource(SourceHandle?: LiveLinkSourceHandle): {SourceHandle: LiveLinkSourceHandle, $: boolean};
	static GetHandThumbTip(hand: EControllerHand,TransformSpace: EMagicLeapGestureTransformSpace,Secondary?: Transform): {Secondary: Transform, $: boolean};
	static GetHandKeypointForMotionSource(MotionSource: string,OutKeyPoint?: EMagicLeapHandTrackingKeypoint): {OutKeyPoint: EMagicLeapHandTrackingKeypoint, $: boolean};
	static GetHandIndexFingerTip(hand: EControllerHand,TransformSpace: EMagicLeapGestureTransformSpace,Pointer?: Transform): {Pointer: Transform, $: boolean};
	static GetHandCenterNormalized(hand: EControllerHand,HandCenterNormalized?: Vector): {HandCenterNormalized: Vector, $: boolean};
	static GetHandCenter(hand: EControllerHand,HandCenter?: Transform): {HandCenter: Transform, $: boolean};
	static GetGestureKeypointTransform(hand: EControllerHand,Keypoint: EMagicLeapHandTrackingKeypoint,TransformSpace: EMagicLeapGestureTransformSpace,Transform?: Transform): {Transform: Transform, $: boolean};
	static GetGestureKeypoints(hand: EControllerHand,Keypoints?: Transform[]): {Keypoints: Transform[], $: boolean};
	static GetCurrentGestureConfidence(hand: EControllerHand,Confidence?: number): {Confidence: number, $: boolean};
	static GetCurrentGesture(hand: EControllerHand,Gesture?: EMagicLeapHandTrackingGesture): {Gesture: EMagicLeapHandTrackingGesture, $: boolean};
	static GetConfiguration(ActiveStaticGestures?: EMagicLeapHandTrackingGesture[],KeypointsFilterLevel?: EMagicLeapHandTrackingKeypointFilterLevel,GestureFilterLevel?: EMagicLeapHandTrackingGestureFilterLevel,bTrackingEnabled?: boolean): {ActiveStaticGestures: EMagicLeapHandTrackingGesture[], KeypointsFilterLevel: EMagicLeapHandTrackingKeypointFilterLevel, GestureFilterLevel: EMagicLeapHandTrackingGestureFilterLevel, bTrackingEnabled: boolean, $: boolean};
	static C(Other: UObject | any): MagicLeapHandTrackingFunctionLibrary;
}

declare type EMagicLeapIdentityKey = 'GivenName' | 'FamilyName' | 'Email' | 'Bio' | 'PhoneNumber' | 'Avatar2D' | 'Avatar3D' | 'Unknown' | 'EMagicLeapIdentityKey_MAX';
declare var EMagicLeapIdentityKey : { GivenName:'GivenName',FamilyName:'FamilyName',Email:'Email',Bio:'Bio',PhoneNumber:'PhoneNumber',Avatar2D:'Avatar2D',Avatar3D:'Avatar3D',Unknown:'Unknown',EMagicLeapIdentityKey_MAX:'EMagicLeapIdentityKey_MAX', };
declare class MagicLeapIdentityAttribute { 
	Attribute: EMagicLeapIdentityKey;
	Value: string;
	clone() : MagicLeapIdentityAttribute;
	static C(Other: UObject | any): MagicLeapIdentityAttribute;
}

declare type EMagicLeapIdentityError = 'Ok' | 'InvalidParam' | 'AllocFailed' | 'PrivilegeDenied' | 'FailedToConnectToLocalService' | 'FailedToConnectToCloudService' | 'CloudAuthentication' | 'InvalidInformationFromCloud' | 'NotLoggedIn' | 'ExpiredCredentials' | 'FailedToGetUserProfile' | 'Unauthorized' | 'CertificateError' | 'RejectedByCloud' | 'AlreadyLoggedIn' | 'ModifyIsNotSupported' | 'NetworkError' | 'UnspecifiedFailure' | 'EMagicLeapIdentityError_MAX';
declare var EMagicLeapIdentityError : { Ok:'Ok',InvalidParam:'InvalidParam',AllocFailed:'AllocFailed',PrivilegeDenied:'PrivilegeDenied',FailedToConnectToLocalService:'FailedToConnectToLocalService',FailedToConnectToCloudService:'FailedToConnectToCloudService',CloudAuthentication:'CloudAuthentication',InvalidInformationFromCloud:'InvalidInformationFromCloud',NotLoggedIn:'NotLoggedIn',ExpiredCredentials:'ExpiredCredentials',FailedToGetUserProfile:'FailedToGetUserProfile',Unauthorized:'Unauthorized',CertificateError:'CertificateError',RejectedByCloud:'RejectedByCloud',AlreadyLoggedIn:'AlreadyLoggedIn',ModifyIsNotSupported:'ModifyIsNotSupported',NetworkError:'NetworkError',UnspecifiedFailure:'UnspecifiedFailure',EMagicLeapIdentityError_MAX:'EMagicLeapIdentityError_MAX', };
declare class MagicLeapIdentity extends UObject { 
	static Load(ResourceName: string): MagicLeapIdentity;
	static Find(Outer: UObject, ResourceName: string): MagicLeapIdentity;
	static GetDefaultObject(): MagicLeapIdentity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapIdentity;
	RequestAttributeValue(RequestedAttributeList: EMagicLeapIdentityKey[],RequestedAttributeValues?: MagicLeapIdentityAttribute[]): {RequestedAttributeValues: MagicLeapIdentityAttribute[], $: EMagicLeapIdentityError};
	GetAllAvailableAttributes(AvailableAttributes?: EMagicLeapIdentityKey[]): {AvailableAttributes: EMagicLeapIdentityKey[], $: EMagicLeapIdentityError};
	static C(Other: UObject | any): MagicLeapIdentity;
}

declare class MagicLeapSecureStorage extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapSecureStorage;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSecureStorage;
	static GetDefaultObject(): MagicLeapSecureStorage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSecureStorage;
	static PutSecureVector(Key: string,DataToStore: Vector): boolean;
	static PutSecureTransform(Key: string,DataToStore: Transform): boolean;
	static PutSecureString(Key: string,DataToStore: string): boolean;
	static PutSecureSaveGame(Key: string,ObjectToStore: SaveGame): boolean;
	static PutSecureRotator(Key: string,DataToStore: Rotator): boolean;
	static PutSecureInt64(Key: string,DataToStore: any): boolean;
	static PutSecureInt(Key: string,DataToStore: number): boolean;
	static PutSecureFloat(Key: string,DataToStore: number): boolean;
	static PutSecureByte(Key: string,DataToStore: number): boolean;
	static PutSecureBool(Key: string,DataToStore: boolean): boolean;
	static PutSecureArray(Key: string,DataToStore: number[]): boolean;
	static GetSecureVector(Key: string,DataToRetrieve?: Vector): {DataToRetrieve: Vector, $: boolean};
	static GetSecureTransform(Key: string,DataToRetrieve?: Transform): {DataToRetrieve: Transform, $: boolean};
	static GetSecureString(Key: string,DataToRetrieve?: string): {DataToRetrieve: string, $: boolean};
	static GetSecureSaveGame(Key: string,ObjectToRetrieve?: SaveGame): {ObjectToRetrieve: SaveGame, $: boolean};
	static GetSecureRotator(Key: string,DataToRetrieve?: Rotator): {DataToRetrieve: Rotator, $: boolean};
	static GetSecureInt64(Key: string,DataToRetrieve?: any): {DataToRetrieve: any, $: boolean};
	static GetSecureInt(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureFloat(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureByte(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureBool(Key: string,DataToRetrieve?: boolean): {DataToRetrieve: boolean, $: boolean};
	static GetSecureArray(Key: string,DataToRetrieve?: number[]): {DataToRetrieve: number[], $: boolean};
	static DeleteSecureData(Key: string): boolean;
	static C(Other: UObject | any): MagicLeapSecureStorage;
}

declare class MagicLeapHandMeshingComponent extends ActorComponent { 
	static Load(ResourceName: string): MagicLeapHandMeshingComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapHandMeshingComponent;
	static GetDefaultObject(): MagicLeapHandMeshingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapHandMeshingComponent;
	SetUseWeightedNormals(bInUseWeightedNormals: boolean): void;
	DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): boolean;
	ConnectMRMesh(InMRMeshPtr: MRMeshComponent): boolean;
	static C(Other: UObject | any): MagicLeapHandMeshingComponent;
}

declare class MagicLeapHandMeshingFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapHandMeshingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapHandMeshingFunctionLibrary;
	static GetDefaultObject(): MagicLeapHandMeshingFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapHandMeshingFunctionLibrary;
	static DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): boolean;
	static DestroyClient(): boolean;
	static CreateClient(): boolean;
	static ConnectMRMesh(InMRMeshPtr: MRMeshComponent): boolean;
	static C(Other: UObject | any): MagicLeapHandMeshingFunctionLibrary;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	bStopServiceWhenAppDeactivates: boolean;
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static GetDefaultObject(): TcpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject | any): TcpMessagingSettings;
}

declare type EUdpMessageFormat = 'None' | 'Json' | 'TaggedProperty' | 'CborPlatformEndianness' | 'CborStandardEndianness' | 'EUdpMessageFormat_MAX';
declare var EUdpMessageFormat : { None:'None',Json:'Json',TaggedProperty:'TaggedProperty',CborPlatformEndianness:'CborPlatformEndianness',CborStandardEndianness:'CborStandardEndianness',EUdpMessageFormat_MAX:'EUdpMessageFormat_MAX', };
declare class UdpMessagingSettings extends UObject { 
	EnabledByDefault: boolean;
	EnableTransport: boolean;
	bAutoRepair: boolean;
	bStopServiceWhenAppDeactivates: boolean;
	UnicastEndpoint: string;
	MulticastEndpoint: string;
	MessageFormat: EUdpMessageFormat;
	MulticastTimeToLive: number;
	StaticEndpoints: string[];
	EnableTunnel: boolean;
	TunnelUnicastEndpoint: string;
	TunnelMulticastEndpoint: string;
	RemoteTunnelEndpoints: string[];
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static GetDefaultObject(): UdpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject | any): UdpMessagingSettings;
}

declare type EActorSequenceObjectReferenceType = 'ContextActor' | 'ExternalActor' | 'Component' | 'EActorSequenceObjectReferenceType_MAX';
declare var EActorSequenceObjectReferenceType : { ContextActor:'ContextActor',ExternalActor:'ExternalActor',Component:'Component',EActorSequenceObjectReferenceType_MAX:'EActorSequenceObjectReferenceType_MAX', };
declare class ActorSequenceObjectReference { 
	Type: EActorSequenceObjectReferenceType;
	ActorId: Guid;
	PathToComponent: string;
	clone() : ActorSequenceObjectReference;
	static C(Other: UObject | any): ActorSequenceObjectReference;
}

declare class ActorSequenceObjectReferences { 
	Array: ActorSequenceObjectReference[];
	clone() : ActorSequenceObjectReferences;
	static C(Other: UObject | any): ActorSequenceObjectReferences;
}

declare class ActorSequenceObjectReferenceMap { 
	BindingIds: Guid[];
	References: ActorSequenceObjectReferences[];
	clone() : ActorSequenceObjectReferenceMap;
	static C(Other: UObject | any): ActorSequenceObjectReferenceMap;
}

declare class ActorSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	ObjectReferences: ActorSequenceObjectReferenceMap;
	bHasBeenInitialized: boolean;
	static Load(ResourceName: string): ActorSequence;
	static Find(Outer: UObject, ResourceName: string): ActorSequence;
	static GetDefaultObject(): ActorSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequence;
	static C(Other: UObject | any): ActorSequence;
}

declare class ActorSequencePlayer extends MovieSceneSequencePlayer { 
	static Load(ResourceName: string): ActorSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): ActorSequencePlayer;
	static GetDefaultObject(): ActorSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequencePlayer;
	static C(Other: UObject | any): ActorSequencePlayer;
}

declare class ActorSequenceComponent extends ActorComponent { 
	PlaybackSettings: MovieSceneSequencePlaybackSettings;
	Sequence: ActorSequence;
	SequencePlayer: ActorSequencePlayer;
	static Load(ResourceName: string): ActorSequenceComponent;
	static Find(Outer: UObject, ResourceName: string): ActorSequenceComponent;
	static GetDefaultObject(): ActorSequenceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequenceComponent;
	static C(Other: UObject | any): ActorSequenceComponent;
}

declare class AudioAnalyzerAsset extends UObject { 
	static Load(ResourceName: string): AudioAnalyzerAsset;
	static Find(Outer: UObject, ResourceName: string): AudioAnalyzerAsset;
	static GetDefaultObject(): AudioAnalyzerAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioAnalyzerAsset;
	static C(Other: UObject | any): AudioAnalyzerAsset;
}

declare class AudioAnalyzerNRTSettings extends AudioAnalyzerAsset { 
	static Load(ResourceName: string): AudioAnalyzerNRTSettings;
	static Find(Outer: UObject, ResourceName: string): AudioAnalyzerNRTSettings;
	static GetDefaultObject(): AudioAnalyzerNRTSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioAnalyzerNRTSettings;
	static C(Other: UObject | any): AudioAnalyzerNRTSettings;
}

declare class AudioAnalyzerNRT extends AudioAnalyzerAsset { 
	Sound: SoundWave;
	DurationInSeconds: number;
	static Load(ResourceName: string): AudioAnalyzerNRT;
	static Find(Outer: UObject, ResourceName: string): AudioAnalyzerNRT;
	static GetDefaultObject(): AudioAnalyzerNRT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioAnalyzerNRT;
	AnalyzeAudio(): void;
	static C(Other: UObject | any): AudioAnalyzerNRT;
}

declare class AudioSynesthesiaNRTSettings extends AudioAnalyzerNRTSettings { 
	static Load(ResourceName: string): AudioSynesthesiaNRTSettings;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTSettings;
	static GetDefaultObject(): AudioSynesthesiaNRTSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTSettings;
	static C(Other: UObject | any): AudioSynesthesiaNRTSettings;
}

declare class AudioSynesthesiaNRT extends AudioAnalyzerNRT { 
	static Load(ResourceName: string): AudioSynesthesiaNRT;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRT;
	static GetDefaultObject(): AudioSynesthesiaNRT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRT;
	static C(Other: UObject | any): AudioSynesthesiaNRT;
}

declare type EConstantQFFTSizeEnum = 'Min' | 'XXSmall' | 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge' | 'XXLarge' | 'Max' | 'EConstantQFFTSizeEnum_MAX';
declare var EConstantQFFTSizeEnum : { Min:'Min',XXSmall:'XXSmall',XSmall:'XSmall',Small:'Small',Medium:'Medium',Large:'Large',XLarge:'XLarge',XXLarge:'XXLarge',Max:'Max',EConstantQFFTSizeEnum_MAX:'EConstantQFFTSizeEnum_MAX', };
declare type EConstantQNormalizationEnum = 'EqualEuclideanNorm' | 'EqualEnergy' | 'EqualAmplitude' | 'EConstantQNormalizationEnum_MAX';
declare var EConstantQNormalizationEnum : { EqualEuclideanNorm:'EqualEuclideanNorm',EqualEnergy:'EqualEnergy',EqualAmplitude:'EqualAmplitude',EConstantQNormalizationEnum_MAX:'EConstantQNormalizationEnum_MAX', };
declare class ConstantQNRTSettings extends AudioSynesthesiaNRTSettings { 
	StartingFrequency: number;
	NumBands: number;
	NumBandsPerOctave: number;
	AnalysisPeriod: number;
	bDownmixToMono: boolean;
	FFTSize: EConstantQFFTSizeEnum;
	WindowType: EFFTWindowType;
	SpectrumType: EAudioSpectrumType;
	BandWidthStretch: number;
	CQTNormalization: EConstantQNormalizationEnum;
	NoiseFloorDb: number;
	static Load(ResourceName: string): ConstantQNRTSettings;
	static Find(Outer: UObject, ResourceName: string): ConstantQNRTSettings;
	static GetDefaultObject(): ConstantQNRTSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConstantQNRTSettings;
	static C(Other: UObject | any): ConstantQNRTSettings;
}

declare class ConstantQNRT extends AudioSynesthesiaNRT { 
	Settings: ConstantQNRTSettings;
	static Load(ResourceName: string): ConstantQNRT;
	static Find(Outer: UObject, ResourceName: string): ConstantQNRT;
	static GetDefaultObject(): ConstantQNRT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConstantQNRT;
	GetNormalizedChannelConstantQAtTime(InSeconds: number,InChannel: number,OutConstantQ?: number[]): {OutConstantQ: number[]};
	GetChannelConstantQAtTime(InSeconds: number,InChannel: number,OutConstantQ?: number[]): {OutConstantQ: number[]};
	static C(Other: UObject | any): ConstantQNRT;
}

declare type ELoudnessNRTCurveTypeEnum = 'A' | 'B' | 'C' | 'D' | 'None' | 'ELoudnessNRTCurveTypeEnum_MAX';
declare var ELoudnessNRTCurveTypeEnum : { A:'A',B:'B',C:'C',D:'D',None:'None',ELoudnessNRTCurveTypeEnum_MAX:'ELoudnessNRTCurveTypeEnum_MAX', };
declare class LoudnessNRTSettings extends AudioSynesthesiaNRTSettings { 
	AnalysisPeriod: number;
	MinimumFrequency: number;
	MaximumFrequency: number;
	CurveType: ELoudnessNRTCurveTypeEnum;
	NoiseFloorDb: number;
	static Load(ResourceName: string): LoudnessNRTSettings;
	static Find(Outer: UObject, ResourceName: string): LoudnessNRTSettings;
	static GetDefaultObject(): LoudnessNRTSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LoudnessNRTSettings;
	static C(Other: UObject | any): LoudnessNRTSettings;
}

declare class LoudnessNRT extends AudioSynesthesiaNRT { 
	Settings: LoudnessNRTSettings;
	static Load(ResourceName: string): LoudnessNRT;
	static Find(Outer: UObject, ResourceName: string): LoudnessNRT;
	static GetDefaultObject(): LoudnessNRT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LoudnessNRT;
	GetNormalizedLoudnessAtTime(InSeconds: number,OutLoudness?: number): {OutLoudness: number};
	GetNormalizedChannelLoudnessAtTime(InSeconds: number,InChannel: number,OutLoudness?: number): {OutLoudness: number};
	GetLoudnessAtTime(InSeconds: number,OutLoudness?: number): {OutLoudness: number};
	GetChannelLoudnessAtTime(InSeconds: number,InChannel: number,OutLoudness?: number): {OutLoudness: number};
	static C(Other: UObject | any): LoudnessNRT;
}

declare class OnsetNRTSettings extends AudioSynesthesiaNRTSettings { 
	bDownmixToMono: boolean;
	GranularityInSeconds: number;
	Sensitivity: number;
	MinimumFrequency: number;
	MaximumFrequency: number;
	static Load(ResourceName: string): OnsetNRTSettings;
	static Find(Outer: UObject, ResourceName: string): OnsetNRTSettings;
	static GetDefaultObject(): OnsetNRTSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnsetNRTSettings;
	static C(Other: UObject | any): OnsetNRTSettings;
}

declare class OnsetNRT extends AudioSynesthesiaNRT { 
	Settings: OnsetNRTSettings;
	static Load(ResourceName: string): OnsetNRT;
	static Find(Outer: UObject, ResourceName: string): OnsetNRT;
	static GetDefaultObject(): OnsetNRT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnsetNRT;
	GetNormalizedChannelOnsetsBetweenTimes(InStartSeconds: number,InEndSeconds: number,InChannel: number,OutOnsetTimestamps?: number[],OutOnsetStrengths?: number[]): {OutOnsetTimestamps: number[], OutOnsetStrengths: number[]};
	GetChannelOnsetsBetweenTimes(InStartSeconds: number,InEndSeconds: number,InChannel: number,OutOnsetTimestamps?: number[],OutOnsetStrengths?: number[]): {OutOnsetTimestamps: number[], OutOnsetStrengths: number[]};
	static C(Other: UObject | any): OnsetNRT;
}

declare type ELocationAccuracy = 'LA_ThreeKilometers' | 'LA_OneKilometer' | 'LA_HundredMeters' | 'LA_TenMeters' | 'LA_Best' | 'LA_Navigation' | 'LA_MAX';
declare var ELocationAccuracy : { LA_ThreeKilometers:'LA_ThreeKilometers',LA_OneKilometer:'LA_OneKilometer',LA_HundredMeters:'LA_HundredMeters',LA_TenMeters:'LA_TenMeters',LA_Best:'LA_Best',LA_Navigation:'LA_Navigation',LA_MAX:'LA_MAX', };
declare class LocationServicesData { 
	Timestamp: number;
	Longitude: number;
	Latitude: number;
	HorizontalAccuracy: number;
	VerticalAccuracy: number;
	Altitude: number;
	clone() : LocationServicesData;
	static C(Other: UObject | any): LocationServicesData;
	static GetLastKnownLocation(): LocationServicesData;
}

declare class LocationServicesImpl extends UObject { 
	OnLocationChanged: UnrealEngineMulticastDelegate<(LocationData: LocationServicesData) => void>;
	static Load(ResourceName: string): LocationServicesImpl;
	static Find(Outer: UObject, ResourceName: string): LocationServicesImpl;
	static GetDefaultObject(): LocationServicesImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServicesImpl;
	static C(Other: UObject | any): LocationServicesImpl;
}

declare class LocationServices extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LocationServices;
	static Find(Outer: UObject, ResourceName: string): LocationServices;
	static GetDefaultObject(): LocationServices;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServices;
	static StopLocationServices(): boolean;
	static StartLocationServices(): boolean;
	static IsLocationAccuracyAvailable(Accuracy: ELocationAccuracy): boolean;
	static InitLocationServices(Accuracy: ELocationAccuracy,UpdateFrequency: number,MinDistanceFilter: number): boolean;
	static GetLocationServicesImpl(): LocationServicesImpl;
	static GetLastKnownLocation(): LocationServicesData;
	static AreLocationServicesEnabled(): boolean;
	static C(Other: UObject | any): LocationServices;
}

declare class TireConfigMaterialFriction { 
	PhysicalMaterial: PhysicalMaterial;
	FrictionScale: number;
	clone() : TireConfigMaterialFriction;
	static C(Other: UObject | any): TireConfigMaterialFriction;
}

declare class TireConfig extends DataAsset { 
	FrictionScale: number;
	TireFrictionScales: TireConfigMaterialFriction[];
	static Load(ResourceName: string): TireConfig;
	static Find(Outer: UObject, ResourceName: string): TireConfig;
	static GetDefaultObject(): TireConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TireConfig;
	static C(Other: UObject | any): TireConfig;
}

declare type EWheelSweepType = 'SimpleAndComplex' | 'Simple' | 'Complex' | 'EWheelSweepType_MAX';
declare var EWheelSweepType : { SimpleAndComplex:'SimpleAndComplex',Simple:'Simple',Complex:'Complex',EWheelSweepType_MAX:'EWheelSweepType_MAX', };
declare class VehicleWheel extends UObject { 
	CollisionMesh: StaticMesh;
	bDontCreateShape: boolean;
	bAutoAdjustCollisionSize: boolean;
	Offset: Vector;
	ShapeRadius: number;
	ShapeWidth: number;
	Mass: number;
	DampingRate: number;
	SteerAngle: number;
	bAffectedByHandbrake: boolean;
	TireType: TireType;
	TireConfig: TireConfig;
	LatStiffMaxLoad: number;
	LatStiffValue: number;
	LongStiffValue: number;
	SuspensionForceOffset: number;
	SuspensionMaxRaise: number;
	SuspensionMaxDrop: number;
	SuspensionNaturalFrequency: number;
	SuspensionDampingRatio: number;
	SweepType: EWheelSweepType;
	MaxBrakeTorque: number;
	MaxHandBrakeTorque: number;
	VehicleSim: WheeledVehicleMovementComponent;
	WheelIndex: number;
	DebugLongSlip: number;
	DebugLatSlip: number;
	DebugNormalizedTireLoad: number;
	DebugWheelTorque: number;
	DebugLongForce: number;
	DebugLatForce: number;
	Location: Vector;
	OldLocation: Vector;
	Velocity: Vector;
	static Load(ResourceName: string): VehicleWheel;
	static Find(Outer: UObject, ResourceName: string): VehicleWheel;
	static GetDefaultObject(): VehicleWheel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleWheel;
	IsInAir(): boolean;
	GetSuspensionOffset(): number;
	GetSteerAngle(): number;
	GetRotationAngle(): number;
	static C(Other: UObject | any): VehicleWheel;
}

declare class WheelSetup { 
	WheelClass: UnrealEngineClass;
	BoneName: string;
	AdditionalOffset: Vector;
	bDisableSteering: boolean;
	clone() : WheelSetup;
	static C(Other: UObject | any): WheelSetup;
}

declare class ReplicatedVehicleState { 
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	CurrentGear: number;
	clone() : ReplicatedVehicleState;
	static C(Other: UObject | any): ReplicatedVehicleState;
}

declare class VehicleInputRate { 
	RiseRate: number;
	FallRate: number;
	clone() : VehicleInputRate;
	static C(Other: UObject | any): VehicleInputRate;
}

declare class WheeledVehicleMovementComponent extends PawnMovementComponent { 
	bDeprecatedSpringOffsetMode: boolean;
	bReverseAsBrake: boolean;
	bUseRVOAvoidance: boolean;
	bRawHandbrakeInput: boolean;
	bRawGearUpInput: boolean;
	bRawGearDownInput: boolean;
	bWasAvoidanceUpdated: boolean;
	Mass: number;
	WheelSetups: WheelSetup[];
	DragCoefficient: number;
	ChassisWidth: number;
	ChassisHeight: number;
	DragArea: number;
	EstimatedMaxEngineSpeed: number;
	MaxEngineRPM: number;
	DebugDragMagnitude: number;
	InertiaTensorScale: Vector;
	MinNormalizedTireLoad: number;
	MinNormalizedTireLoadFiltered: number;
	MaxNormalizedTireLoad: number;
	MaxNormalizedTireLoadFiltered: number;
	ThresholdLongitudinalSpeed: number;
	LowForwardSpeedSubStepCount: number;
	HighForwardSpeedSubStepCount: number;
	Wheels: VehicleWheel[];
	RVOAvoidanceRadius: number;
	RVOAvoidanceHeight: number;
	AvoidanceConsiderationRadius: number;
	RVOSteeringStep: number;
	RVOThrottleStep: number;
	AvoidanceUID: number;
	AvoidanceGroup: NavAvoidanceMask;
	GroupsToAvoid: NavAvoidanceMask;
	GroupsToIgnore: NavAvoidanceMask;
	AvoidanceWeight: number;
	PendingLaunchVelocity: Vector;
	ReplicatedState: ReplicatedVehicleState;
	RawSteeringInput: number;
	RawThrottleInput: number;
	RawBrakeInput: number;
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	IdleBrakeInput: number;
	StopThreshold: number;
	WrongDirectionThreshold: number;
	ThrottleInputRate: VehicleInputRate;
	BrakeInputRate: VehicleInputRate;
	HandbrakeInputRate: VehicleInputRate;
	SteeringInputRate: VehicleInputRate;
	OverrideController: Controller;
	static Load(ResourceName: string): WheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent;
	SetUseAutoGears(bUseAuto: boolean): void;
	SetThrottleInput(Throttle: number): void;
	SetTargetGear(GearNum: number,bImmediate: boolean): void;
	SetSteeringInput(Steering: number): void;
	SetHandbrakeInput(bNewHandbrake: boolean): void;
	SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToIgnore(GroupFlags: number): void;
	SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToAvoid(GroupFlags: number): void;
	SetGearUp(bNewGearUp: boolean): void;
	SetGearDown(bNewGearDown: boolean): void;
	SetBrakeInput(Brake: number): void;
	SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask): void;
	SetAvoidanceGroup(GroupFlags: number): void;
	SetAvoidanceEnabled(bEnable: boolean): void;
	ServerUpdateState(InSteeringInput: number,InThrottleInput: number,InBrakeInput: number,InHandbrakeInput: number,CurrentGear: number): void;
	GetUseAutoGears(): boolean;
	GetTargetGear(): number;
	GetForwardSpeed(): number;
	GetEngineRotationSpeed(): number;
	GetEngineMaxRotationSpeed(): number;
	GetCurrentGear(): number;
	static C(Other: UObject | any): WheeledVehicleMovementComponent;
}

declare class SimpleWheeledVehicleMovementComponent extends WheeledVehicleMovementComponent { 
	static Load(ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static GetDefaultObject(): SimpleWheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleWheeledVehicleMovementComponent;
	SetSteerAngle(SteerAngle: number,WheelIndex: number): void;
	SetDriveTorque(DriveTorque: number,WheelIndex: number): void;
	SetBrakeTorque(BrakeTorque: number,WheelIndex: number): void;
	static C(Other: UObject | any): SimpleWheeledVehicleMovementComponent;
}

declare class WheeledVehicle extends Pawn { 
	Mesh: SkeletalMeshComponent;
	VehicleMovement: WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicle;
	static C(Other: UObject | any): WheeledVehicle;
}

declare class VehicleAnimInstance extends AnimInstance { 
	WheeledVehicleMovementComponent: WheeledVehicleMovementComponent;
	static Load(ResourceName: string): VehicleAnimInstance;
	static Find(Outer: UObject, ResourceName: string): VehicleAnimInstance;
	static GetDefaultObject(): VehicleAnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleAnimInstance;
	GetVehicle(): WheeledVehicle;
	static C(Other: UObject | any): VehicleAnimInstance;
}

declare class VehicleEngineData { 
	TorqueCurve: RuntimeFloatCurve;
	MaxRPM: number;
	MOI: number;
	DampingRateFullThrottle: number;
	DampingRateZeroThrottleClutchEngaged: number;
	DampingRateZeroThrottleClutchDisengaged: number;
	clone() : VehicleEngineData;
	static C(Other: UObject | any): VehicleEngineData;
}

declare type EVehicleDifferential4W = 'LimitedSlip_4W' | 'LimitedSlip_FrontDrive' | 'LimitedSlip_RearDrive' | 'Open_4W' | 'Open_FrontDrive' | 'Open_RearDrive' | 'EVehicleDifferential4W_MAX';
declare var EVehicleDifferential4W : { LimitedSlip_4W:'LimitedSlip_4W',LimitedSlip_FrontDrive:'LimitedSlip_FrontDrive',LimitedSlip_RearDrive:'LimitedSlip_RearDrive',Open_4W:'Open_4W',Open_FrontDrive:'Open_FrontDrive',Open_RearDrive:'Open_RearDrive',EVehicleDifferential4W_MAX:'EVehicleDifferential4W_MAX', };
declare class VehicleDifferential4WData { 
	DifferentialType: EVehicleDifferential4W;
	FrontRearSplit: number;
	FrontLeftRightSplit: number;
	RearLeftRightSplit: number;
	CentreBias: number;
	FrontBias: number;
	RearBias: number;
	clone() : VehicleDifferential4WData;
	static C(Other: UObject | any): VehicleDifferential4WData;
}

declare class VehicleGearData { 
	Ratio: number;
	DownRatio: number;
	UpRatio: number;
	clone() : VehicleGearData;
	static C(Other: UObject | any): VehicleGearData;
}

declare class VehicleTransmissionData { 
	bUseGearAutoBox: boolean;
	GearSwitchTime: number;
	GearAutoBoxLatency: number;
	FinalRatio: number;
	ForwardGears: VehicleGearData[];
	ReverseGearRatio: number;
	NeutralGearUpRatio: number;
	ClutchStrength: number;
	clone() : VehicleTransmissionData;
	static C(Other: UObject | any): VehicleTransmissionData;
}

declare class WheeledVehicleMovementComponent4W extends WheeledVehicleMovementComponent { 
	EngineSetup: VehicleEngineData;
	DifferentialSetup: VehicleDifferential4WData;
	AckermannAccuracy: number;
	TransmissionSetup: VehicleTransmissionData;
	SteeringCurve: RuntimeFloatCurve;
	static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent4W;
	static GetDefaultObject(): WheeledVehicleMovementComponent4W;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent4W;
	static C(Other: UObject | any): WheeledVehicleMovementComponent4W;
}

declare class AnimNode_WheelHandler extends AnimNode_SkeletalControlBase { 
	clone() : AnimNode_WheelHandler;
	static C(Other: UObject | any): AnimNode_WheelHandler;
}

declare class AnimGraphNode_WheelHandler extends AnimGraphNode_SkeletalControlBase { 
	UNode: AnimNode_WheelHandler;
	static Load(ResourceName: string): AnimGraphNode_WheelHandler;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_WheelHandler;
	static GetDefaultObject(): AnimGraphNode_WheelHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_WheelHandler;
	static C(Other: UObject | any): AnimGraphNode_WheelHandler;
}

declare class AmbisonicsEncodingSettings extends SoundfieldEncodingSettingsBase { 
	AmbisonicsOrder: number;
	static Load(ResourceName: string): AmbisonicsEncodingSettings;
	static Find(Outer: UObject, ResourceName: string): AmbisonicsEncodingSettings;
	static GetDefaultObject(): AmbisonicsEncodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AmbisonicsEncodingSettings;
	static C(Other: UObject | any): AmbisonicsEncodingSettings;
}

declare class JSGameInstance extends GameInstance { 
	Isolate: JavascriptIsolate;
	JavascriptContext: JavascriptContext;
	static Load(ResourceName: string): JSGameInstance;
	static Find(Outer: UObject, ResourceName: string): JSGameInstance;
	static GetDefaultObject(): JSGameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JSGameInstance;
	static C(Other: UObject | any): JSGameInstance;
}

declare class KotlinObject extends UObject { 
	Root: ActorComponent;
	static Load(ResourceName: string): KotlinObject;
	static Find(Outer: UObject, ResourceName: string): KotlinObject;
	static GetDefaultObject(): KotlinObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KotlinObject;
	Tick(DeltaTime: number): void;
	OnDestroyed(): void;
	BeginOverlap(Other: Actor): string;
	static C(Other: UObject | any): KotlinObject;
}

declare class KotlinComponent extends ActorComponent { 
	KotlinClass: string;
	JavascriptContext: JavascriptContext;
	KotlinObject: KotlinObject;
	static Load(ResourceName: string): KotlinComponent;
	static Find(Outer: UObject, ResourceName: string): KotlinComponent;
	static GetDefaultObject(): KotlinComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KotlinComponent;
	SetKotlinObject(KotlinObject: KotlinObject): void;
	OnTick(DeltaTime: number): void;
	OnDestroyed(): void;
	LoadKotlinObject(): void;
	GetKotlinObject(): KotlinObject;
	BeginOverlap(Other: Actor): string;
	static C(Other: UObject | any): KotlinComponent;
}

declare class MeshPaintingToolset extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MeshPaintingToolset;
	static Find(Outer: UObject, ResourceName: string): MeshPaintingToolset;
	static GetDefaultObject(): MeshPaintingToolset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintingToolset;
	static C(Other: UObject | any): MeshPaintingToolset;
}

declare class MeshToolsContext extends EdModeInteractiveToolsContext { 
	static Load(ResourceName: string): MeshToolsContext;
	static Find(Outer: UObject, ResourceName: string): MeshToolsContext;
	static GetDefaultObject(): MeshToolsContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToolsContext;
	static C(Other: UObject | any): MeshToolsContext;
}

declare class MeshToolManager extends InteractiveToolManager { 
	static Load(ResourceName: string): MeshToolManager;
	static Find(Outer: UObject, ResourceName: string): MeshToolManager;
	static GetDefaultObject(): MeshToolManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToolManager;
	static C(Other: UObject | any): MeshToolManager;
}

declare class MeshPaintSelectionInterface extends Interface { 
	static Load(ResourceName: string): MeshPaintSelectionInterface;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSelectionInterface;
	static GetDefaultObject(): MeshPaintSelectionInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSelectionInterface;
	static C(Other: UObject | any): MeshPaintSelectionInterface;
}

declare class MeshPaintSelectionMechanic extends InteractionMechanic { 
	CachedClickedComponents: MeshComponent[];
	CachedClickedActors: Actor[];
	static Load(ResourceName: string): MeshPaintSelectionMechanic;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSelectionMechanic;
	static GetDefaultObject(): MeshPaintSelectionMechanic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSelectionMechanic;
	static C(Other: UObject | any): MeshPaintSelectionMechanic;
}

declare class VertexAdapterClickToolBuilder extends SingleClickToolBuilder { 
	static Load(ResourceName: string): VertexAdapterClickToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VertexAdapterClickToolBuilder;
	static GetDefaultObject(): VertexAdapterClickToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexAdapterClickToolBuilder;
	static C(Other: UObject | any): VertexAdapterClickToolBuilder;
}

declare class TextureAdapterClickToolBuilder extends SingleClickToolBuilder { 
	static Load(ResourceName: string): TextureAdapterClickToolBuilder;
	static Find(Outer: UObject, ResourceName: string): TextureAdapterClickToolBuilder;
	static GetDefaultObject(): TextureAdapterClickToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureAdapterClickToolBuilder;
	static C(Other: UObject | any): TextureAdapterClickToolBuilder;
}

declare class MeshClickTool extends SingleClickTool { 
	SelectionMechanic: MeshPaintSelectionMechanic;
	static Load(ResourceName: string): MeshClickTool;
	static Find(Outer: UObject, ResourceName: string): MeshClickTool;
	static GetDefaultObject(): MeshClickTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshClickTool;
	static C(Other: UObject | any): MeshClickTool;
}

declare class VertexAdapterClickTool extends MeshClickTool { 
	static Load(ResourceName: string): VertexAdapterClickTool;
	static Find(Outer: UObject, ResourceName: string): VertexAdapterClickTool;
	static GetDefaultObject(): VertexAdapterClickTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexAdapterClickTool;
	static C(Other: UObject | any): VertexAdapterClickTool;
}

declare class TextureAdapterClickTool extends MeshClickTool { 
	static Load(ResourceName: string): TextureAdapterClickTool;
	static Find(Outer: UObject, ResourceName: string): TextureAdapterClickTool;
	static GetDefaultObject(): TextureAdapterClickTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureAdapterClickTool;
	static C(Other: UObject | any): TextureAdapterClickTool;
}

declare class MeshTexturePaintingToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): MeshTexturePaintingToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshTexturePaintingToolBuilder;
	static GetDefaultObject(): MeshTexturePaintingToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTexturePaintingToolBuilder;
	static C(Other: UObject | any): MeshTexturePaintingToolBuilder;
}

declare class MeshTexturePaintingToolProperties extends BrushBaseProperties { 
	PaintColor: LinearColor;
	EraseColor: LinearColor;
	bWriteRed: boolean;
	bWriteGreen: boolean;
	bWriteBlue: boolean;
	bWriteAlpha: boolean;
	UVChannel: number;
	bEnableSeamPainting: boolean;
	PaintTexture: Texture2D;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	static Load(ResourceName: string): MeshTexturePaintingToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshTexturePaintingToolProperties;
	static GetDefaultObject(): MeshTexturePaintingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTexturePaintingToolProperties;
	static C(Other: UObject | any): MeshTexturePaintingToolProperties;
}

declare class MeshTexturePaintingTool extends BaseBrushTool { 
	TextureProperties: MeshTexturePaintingToolProperties;
	Textures: Texture[];
	BrushRenderTargetTexture: TextureRenderTarget2D;
	BrushMaskRenderTargetTexture: TextureRenderTarget2D;
	SeamMaskRenderTargetTexture: TextureRenderTarget2D;
	PaintTargetData: any;
	TexturePaintingCurrentMeshComponent: MeshComponent;
	PaintingTexture2D: Texture2D;
	static Load(ResourceName: string): MeshTexturePaintingTool;
	static Find(Outer: UObject, ResourceName: string): MeshTexturePaintingTool;
	static GetDefaultObject(): MeshTexturePaintingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTexturePaintingTool;
	static C(Other: UObject | any): MeshTexturePaintingTool;
}

declare class MeshColorPaintingToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): MeshColorPaintingToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshColorPaintingToolBuilder;
	static GetDefaultObject(): MeshColorPaintingToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshColorPaintingToolBuilder;
	static C(Other: UObject | any): MeshColorPaintingToolBuilder;
}

declare class MeshWeightPaintingToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): MeshWeightPaintingToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshWeightPaintingToolBuilder;
	static GetDefaultObject(): MeshWeightPaintingToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshWeightPaintingToolBuilder;
	static C(Other: UObject | any): MeshWeightPaintingToolBuilder;
}

declare class MeshVertexPaintingToolProperties extends BrushBaseProperties { 
	PaintColor: LinearColor;
	EraseColor: LinearColor;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshVertexPaintingToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshVertexPaintingToolProperties;
	static GetDefaultObject(): MeshVertexPaintingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexPaintingToolProperties;
	static C(Other: UObject | any): MeshVertexPaintingToolProperties;
}

declare class MeshColorPaintingToolProperties extends MeshVertexPaintingToolProperties { 
	bWriteRed: boolean;
	bWriteGreen: boolean;
	bWriteBlue: boolean;
	bWriteAlpha: boolean;
	bPaintOnSpecificLOD: boolean;
	LODIndex: number;
	static Load(ResourceName: string): MeshColorPaintingToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshColorPaintingToolProperties;
	static GetDefaultObject(): MeshColorPaintingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshColorPaintingToolProperties;
	static C(Other: UObject | any): MeshColorPaintingToolProperties;
}

declare type EMeshPaintWeightTypes = 'AlphaLerp' | 'RGB' | 'ARGB' | 'OneMinusARGB' | 'EMeshPaintWeightTypes_MAX';
declare var EMeshPaintWeightTypes : { AlphaLerp:'AlphaLerp',RGB:'RGB',ARGB:'ARGB',OneMinusARGB:'OneMinusARGB',EMeshPaintWeightTypes_MAX:'EMeshPaintWeightTypes_MAX', };
declare type EMeshPaintTextureIndex = 'TextureOne' | 'TextureTwo' | 'TextureThree' | 'TextureFour' | 'TextureFive' | 'EMeshPaintTextureIndex_MAX';
declare var EMeshPaintTextureIndex : { TextureOne:'TextureOne',TextureTwo:'TextureTwo',TextureThree:'TextureThree',TextureFour:'TextureFour',TextureFive:'TextureFive',EMeshPaintTextureIndex_MAX:'EMeshPaintTextureIndex_MAX', };
declare class MeshWeightPaintingToolProperties extends MeshVertexPaintingToolProperties { 
	TextureWeightType: EMeshPaintWeightTypes;
	PaintTextureWeightIndex: EMeshPaintTextureIndex;
	EraseTextureWeightIndex: EMeshPaintTextureIndex;
	static Load(ResourceName: string): MeshWeightPaintingToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshWeightPaintingToolProperties;
	static GetDefaultObject(): MeshWeightPaintingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshWeightPaintingToolProperties;
	static C(Other: UObject | any): MeshWeightPaintingToolProperties;
}

declare class MeshVertexPaintingTool extends BaseBrushTool { 
	SelectionMechanic: MeshPaintSelectionMechanic;
	VertexProperties: MeshVertexPaintingToolProperties;
	static Load(ResourceName: string): MeshVertexPaintingTool;
	static Find(Outer: UObject, ResourceName: string): MeshVertexPaintingTool;
	static GetDefaultObject(): MeshVertexPaintingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexPaintingTool;
	static C(Other: UObject | any): MeshVertexPaintingTool;
}

declare class MeshColorPaintingTool extends MeshVertexPaintingTool { 
	ColorProperties: MeshColorPaintingToolProperties;
	static Load(ResourceName: string): MeshColorPaintingTool;
	static Find(Outer: UObject, ResourceName: string): MeshColorPaintingTool;
	static GetDefaultObject(): MeshColorPaintingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshColorPaintingTool;
	static C(Other: UObject | any): MeshColorPaintingTool;
}

declare class MeshWeightPaintingTool extends MeshVertexPaintingTool { 
	WeightProperties: MeshWeightPaintingToolProperties;
	static Load(ResourceName: string): MeshWeightPaintingTool;
	static Find(Outer: UObject, ResourceName: string): MeshWeightPaintingTool;
	static GetDefaultObject(): MeshWeightPaintingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshWeightPaintingTool;
	static C(Other: UObject | any): MeshWeightPaintingTool;
}

declare class TexturePaintToolset extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): TexturePaintToolset;
	static Find(Outer: UObject, ResourceName: string): TexturePaintToolset;
	static GetDefaultObject(): TexturePaintToolset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TexturePaintToolset;
	static C(Other: UObject | any): TexturePaintToolset;
}

declare class ImportVertexColorOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): ImportVertexColorOptions;
	static Find(Outer: UObject, ResourceName: string): ImportVertexColorOptions;
	static GetDefaultObject(): ImportVertexColorOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImportVertexColorOptions;
	static C(Other: UObject | any): ImportVertexColorOptions;
}

declare type EMeshPaintDataColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintDataColorViewMode_MAX';
declare var EMeshPaintDataColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintDataColorViewMode_MAX:'EMeshPaintDataColorViewMode_MAX', };
declare class MeshPaintModeSettings extends UObject { 
	ColorViewMode: EMeshPaintDataColorViewMode;
	static Load(ResourceName: string): MeshPaintModeSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintModeSettings;
	static GetDefaultObject(): MeshPaintModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintModeSettings;
	static C(Other: UObject | any): MeshPaintModeSettings;
}

declare class MeshPaintMode extends EdMode { 
	ModeSettings: MeshPaintModeSettings;
	static Load(ResourceName: string): MeshPaintMode;
	static Find(Outer: UObject, ResourceName: string): MeshPaintMode;
	static GetDefaultObject(): MeshPaintMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintMode;
	static C(Other: UObject | any): MeshPaintMode;
}

declare type EMeshPaintColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintColorViewMode_MAX';
declare var EMeshPaintColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintColorViewMode_MAX:'EMeshPaintColorViewMode_MAX', };
declare class PaintBrushSettings extends UObject { 
	BrushRadius: number;
	BrushStrength: number;
	BrushFalloffAmount: number;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	ColorViewMode: EMeshPaintColorViewMode;
	static Load(ResourceName: string): PaintBrushSettings;
	static Find(Outer: UObject, ResourceName: string): PaintBrushSettings;
	static GetDefaultObject(): PaintBrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintBrushSettings;
	static C(Other: UObject | any): PaintBrushSettings;
}

declare class MeshPaintSettings extends UObject { 
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshPaintSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSettings;
	static GetDefaultObject(): MeshPaintSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSettings;
	static C(Other: UObject | any): MeshPaintSettings;
}

declare class VertexColorImportOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): VertexColorImportOptions;
	static Find(Outer: UObject, ResourceName: string): VertexColorImportOptions;
	static GetDefaultObject(): VertexColorImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexColorImportOptions;
	static C(Other: UObject | any): VertexColorImportOptions;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText' | 'ETutorialContent_MAX';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText',ETutorialContent_MAX:'ETutorialContent_MAX', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	text: string;
	clone() : TutorialContent;
	static C(Other: UObject | any): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset' | 'ETutorialAnchorIdentifier_MAX';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset',ETutorialAnchorIdentifier_MAX:'ETutorialAnchorIdentifier_MAX', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: SoftObjectPath;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GuidString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject | any): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject | any): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject | any): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: SoftClassPath;
	NextTutorial: SoftClassPath;
	bIsStandalone: boolean;
	AssetToUse: SoftObjectPath;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static GetDefaultObject(): EditorTutorial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject | any): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static GetDefaultObject(): EditorTutorialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject | any): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject | any): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: SoftObjectPath;
	clone() : TutorialCategory;
	static C(Other: UObject | any): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: SoftClassPath;
	LaunchTutorial: SoftClassPath;
	clone() : TutorialContext;
	static C(Other: UObject | any): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	TutorialContexts: TutorialContext[];
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static GetDefaultObject(): EditorTutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject | any): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static GetDefaultObject(): TutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject | any): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: SoftClassPath;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject | any): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static GetDefaultObject(): TutorialStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject | any): TutorialStateSettings;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static GetDefaultObject(): FlipbookEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject | any): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = 'Auto' | 'Grid' | 'ESpriteExtractMode_MAX';
declare var ESpriteExtractMode : { Auto:'Auto',Grid:'Grid',ESpriteExtractMode_MAX:'ESpriteExtractMode_MAX', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject | any): PaperExtractSpritesSettings;
}

declare class PaperExtractSpriteGridSettings extends UObject { 
	CellWidth: number;
	CellHeight: number;
	NumCellsX: number;
	NumCellsY: number;
	MarginX: number;
	MarginY: number;
	SpacingX: number;
	SpacingY: number;
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject | any): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject | any): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static GetDefaultObject(): PaperFlipbookFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject | any): PaperFlipbookFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject | any): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject | any): PaperFlipbookThumbnailRenderer;
}

declare class PaperImporterSettings extends UObject { 
	bPickBestMaterialWhenCreatingSprites: boolean;
	bPickBestMaterialWhenCreatingTileMaps: boolean;
	bAnalysisCanUseOpaque: boolean;
	DefaultPixelsPerUnrealUnit: number;
	NormalMapTextureSuffixes: string[];
	BaseMapTextureSuffixes: string[];
	DefaultSpriteTextureGroup: TextureGroup;
	bOverrideTextureCompression: boolean;
	DefaultSpriteTextureCompression: TextureCompressionSettings;
	UnlitDefaultMaskedMaterialName: SoftObjectPath;
	UnlitDefaultTranslucentMaterialName: SoftObjectPath;
	UnlitDefaultOpaqueMaterialName: SoftObjectPath;
	LitDefaultMaskedMaterialName: SoftObjectPath;
	LitDefaultTranslucentMaterialName: SoftObjectPath;
	LitDefaultOpaqueMaterialName: SoftObjectPath;
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static GetDefaultObject(): PaperImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject | any): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject | any): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject | any): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static GetDefaultObject(): PaperSpriteFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject | any): PaperSpriteFactory;
}

declare class PaperTileMapFactory extends Factory { 
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static GetDefaultObject(): PaperTileMapFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject | any): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject | any): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static GetDefaultObject(): PaperTileSetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject | any): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject | any): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static GetDefaultObject(): SpriteEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject | any): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject | any): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static GetDefaultObject(): TileMapActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject | any): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject | any): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static GetDefaultObject(): TileMapAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject | any): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	DefaultTileGridColor: Color;
	DefaultMultiTileGridColor: Color;
	DefaultMultiTileGridWidth: number;
	DefaultMultiTileGridHeight: number;
	DefaultMultiTileGridOffsetX: number;
	DefaultMultiTileGridOffsetY: number;
	DefaultLayerGridColor: Color;
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static GetDefaultObject(): TileMapEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject | any): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static GetDefaultObject(): TileSetEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject | any): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject | any): TileSheetPaddingFactory;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: PaperSprite[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static GetDefaultObject(): PaperSpriteSheet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject | any): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject | any): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject | any): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject | any): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}

declare class AnimationSharingSetupFactory extends Factory { 
	static Load(ResourceName: string): AnimationSharingSetupFactory;
	static Find(Outer: UObject, ResourceName: string): AnimationSharingSetupFactory;
	static GetDefaultObject(): AnimationSharingSetupFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationSharingSetupFactory;
	static C(Other: UObject | any): AnimationSharingSetupFactory;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoEncryptionKey { 
	Guid: Guid;
	Name: string;
	Key: string;
	clone() : CryptoEncryptionKey;
	static C(Other: UObject | any): CryptoEncryptionKey;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	SecondaryEncryptionKeys: CryptoEncryptionKey[];
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare type ECurveEditorFFTFilterType = 'Lowpass' | 'Highpass' | 'ECurveEditorFFTFilterType_MAX';
declare var ECurveEditorFFTFilterType : { Lowpass:'Lowpass',Highpass:'Highpass',ECurveEditorFFTFilterType_MAX:'ECurveEditorFFTFilterType_MAX', };
declare type ECurveEditorFFTFilterClass = 'Butterworth' | 'Chebyshev' | 'ECurveEditorFFTFilterClass_MAX';
declare var ECurveEditorFFTFilterClass : { Butterworth:'Butterworth',Chebyshev:'Chebyshev',ECurveEditorFFTFilterClass_MAX:'ECurveEditorFFTFilterClass_MAX', };
declare class CurveEditorFFTFilter extends CurveEditorFilterBase { 
	CutoffFrequency: number;
	Type: ECurveEditorFFTFilterType;
	Response: ECurveEditorFFTFilterClass;
	Order: number;
	static Load(ResourceName: string): CurveEditorFFTFilter;
	static Find(Outer: UObject, ResourceName: string): CurveEditorFFTFilter;
	static GetDefaultObject(): CurveEditorFFTFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorFFTFilter;
	static C(Other: UObject | any): CurveEditorFFTFilter;
}

declare class CurveEditorRetimeAnchor { 
	ValueInSeconds: any;
	bIsSelected: boolean;
	clone() : CurveEditorRetimeAnchor;
	static C(Other: UObject | any): CurveEditorRetimeAnchor;
}

declare class CurveEditorRetimeToolData extends UObject { 
	RetimingAnchors: CurveEditorRetimeAnchor[];
	static Load(ResourceName: string): CurveEditorRetimeToolData;
	static Find(Outer: UObject, ResourceName: string): CurveEditorRetimeToolData;
	static GetDefaultObject(): CurveEditorRetimeToolData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorRetimeToolData;
	static C(Other: UObject | any): CurveEditorRetimeToolData;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare class GeometryCacheTrack extends UObject { 
	Duration: number;
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	StartFrame: number;
	EndFrame: number;
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetNumberOfFrames(): number;
	GetDuration(): number;
	GetAnimationTime(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheCodecBase extends UObject { 
	TopologyRanges: number[];
	static Load(ResourceName: string): GeometryCacheCodecBase;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
	static GetDefaultObject(): GeometryCacheCodecBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecBase;
	static C(Other: UObject | any): GeometryCacheCodecBase;
}

declare class GeometryCacheCodecRaw extends GeometryCacheCodecBase { 
	DummyProperty: number;
	static Load(ResourceName: string): GeometryCacheCodecRaw;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
	static GetDefaultObject(): GeometryCacheCodecRaw;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecRaw;
	static C(Other: UObject | any): GeometryCacheCodecRaw;
}

declare class GeometryCacheCodecV1 extends GeometryCacheCodecBase { 
	static Load(ResourceName: string): GeometryCacheCodecV1;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
	static GetDefaultObject(): GeometryCacheCodecV1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecV1;
	static C(Other: UObject | any): GeometryCacheCodecV1;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrackStreamable extends GeometryCacheTrack { 
	Codec: GeometryCacheCodecBase;
	StartSampleTime: number;
	static Load(ResourceName: string): GeometryCacheTrackStreamable;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrackStreamable;
	static GetDefaultObject(): GeometryCacheTrackStreamable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrackStreamable;
	static C(Other: UObject | any): GeometryCacheTrackStreamable;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	bSkipComputingTangents: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'None' | 'PercentageBased' | 'FixedNumber' | 'NoCompression' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { None:'None',PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',NoCompression:'NoCompression',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare type EAbcGeometryCacheMotionVectorsImport = 'NoMotionVectors' | 'ImportAbcVelocitiesAsMotionVectors' | 'CalculateMotionVectorsDuringImport' | 'EAbcGeometryCacheMotionVectorsImport_MAX';
declare var EAbcGeometryCacheMotionVectorsImport : { NoMotionVectors:'NoMotionVectors',ImportAbcVelocitiesAsMotionVectors:'ImportAbcVelocitiesAsMotionVectors',CalculateMotionVectorsDuringImport:'CalculateMotionVectorsDuringImport',EAbcGeometryCacheMotionVectorsImport_MAX:'EAbcGeometryCacheMotionVectorsImport_MAX', };
declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	MotionVectors: EAbcGeometryCacheMotionVectorsImport;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class AutomationUtilsBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AutomationUtilsBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationUtilsBlueprintLibrary;
	static GetDefaultObject(): AutomationUtilsBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationUtilsBlueprintLibrary;
	static TakeGameplayAutomationScreenshot(ScreenShotName: string,MaxGlobalError: number,MaxLocalError: number,MapNameOverride: string): void;
	static C(Other: UObject | any): AutomationUtilsBlueprintLibrary;
}

declare class ScreenshotComparisonCommandlet extends Commandlet { 
	static Load(ResourceName: string): ScreenshotComparisonCommandlet;
	static Find(Outer: UObject, ResourceName: string): ScreenshotComparisonCommandlet;
	static GetDefaultObject(): ScreenshotComparisonCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotComparisonCommandlet;
	static C(Other: UObject | any): ScreenshotComparisonCommandlet;
}

declare class ChaosDebugDrawComponent extends ActorComponent { 
	static Load(ResourceName: string): ChaosDebugDrawComponent;
	static Find(Outer: UObject, ResourceName: string): ChaosDebugDrawComponent;
	static GetDefaultObject(): ChaosDebugDrawComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosDebugDrawComponent;
	static C(Other: UObject | any): ChaosDebugDrawComponent;
}

declare class ChaosEventListenerComponent extends ActorComponent { 
	static Load(ResourceName: string): ChaosEventListenerComponent;
	static Find(Outer: UObject, ResourceName: string): ChaosEventListenerComponent;
	static GetDefaultObject(): ChaosEventListenerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosEventListenerComponent;
	static C(Other: UObject | any): ChaosEventListenerComponent;
}

declare class ChaosGameplayEventDispatcher extends ChaosEventListenerComponent { 
	CollisionEventRegistrations: any;
	BreakEventRegistrations: any;
	static Load(ResourceName: string): ChaosGameplayEventDispatcher;
	static Find(Outer: UObject, ResourceName: string): ChaosGameplayEventDispatcher;
	static GetDefaultObject(): ChaosGameplayEventDispatcher;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosGameplayEventDispatcher;
	static C(Other: UObject | any): ChaosGameplayEventDispatcher;
}

declare class ChaosNotifyHandlerInterface extends Interface { 
	static Load(ResourceName: string): ChaosNotifyHandlerInterface;
	static Find(Outer: UObject, ResourceName: string): ChaosNotifyHandlerInterface;
	static GetDefaultObject(): ChaosNotifyHandlerInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosNotifyHandlerInterface;
	static C(Other: UObject | any): ChaosNotifyHandlerInterface;
}

declare class ChaosPhysicsCollisionInfo { 
	Component: PrimitiveComponent;
	OtherComponent: PrimitiveComponent;
	Location: Vector;
	Normal: Vector;
	AccumulatedImpulse: Vector;
	Velocity: Vector;
	OtherVelocity: Vector;
	AngularVelocity: Vector;
	OtherAngularVelocity: Vector;
	Mass: number;
	OtherMass: number;
	clone() : ChaosPhysicsCollisionInfo;
	static C(Other: UObject | any): ChaosPhysicsCollisionInfo;
	ConvertPhysicsCollisionToHitResult(): HitResult;
	static ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult;
}

declare class ChaosSolverEngineBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ChaosSolverEngineBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverEngineBlueprintLibrary;
	static GetDefaultObject(): ChaosSolverEngineBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverEngineBlueprintLibrary;
	static ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult;
	static C(Other: UObject | any): ChaosSolverEngineBlueprintLibrary;
}

declare class ChaosSolver extends UObject { 
	static Load(ResourceName: string): ChaosSolver;
	static Find(Outer: UObject, ResourceName: string): ChaosSolver;
	static GetDefaultObject(): ChaosSolver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolver;
	static C(Other: UObject | any): ChaosSolver;
}

declare type EClusterConnectionTypeEnum = 'Chaos_PointImplicit' | 'Chaos_DelaunayTriangulation' | 'Chaos_MinimalSpanningSubsetDelaunayTriangulation' | 'Chaos_PointImplicitAugmentedWithMinimalDelaunay' | 'Chaos_None' | 'Chaos_EClsuterCreationParameters_Max' | 'Chaos_MAX';
declare var EClusterConnectionTypeEnum : { Chaos_PointImplicit:'Chaos_PointImplicit',Chaos_DelaunayTriangulation:'Chaos_DelaunayTriangulation',Chaos_MinimalSpanningSubsetDelaunayTriangulation:'Chaos_MinimalSpanningSubsetDelaunayTriangulation',Chaos_PointImplicitAugmentedWithMinimalDelaunay:'Chaos_PointImplicitAugmentedWithMinimalDelaunay',Chaos_None:'Chaos_None',Chaos_EClsuterCreationParameters_Max:'Chaos_EClsuterCreationParameters_Max',Chaos_MAX:'Chaos_MAX', };
declare class ChaosDebugSubstepControl { 
	bPause: boolean;
	bSubstep: boolean;
	bStep: boolean;
	clone() : ChaosDebugSubstepControl;
	static C(Other: UObject | any): ChaosDebugSubstepControl;
}

declare class ChaosSolverActor extends Actor { 
	Properties: ChaosSolverConfiguration;
	TimeStepMultiplier: number;
	CollisionIterations: number;
	PushOutIterations: number;
	PushOutPairIterations: number;
	ClusterConnectionFactor: number;
	ClusterUnionConnectionType: EClusterConnectionTypeEnum;
	DoGenerateCollisionData: boolean;
	CollisionFilterSettings: SolverCollisionFilterSettings;
	DoGenerateBreakingData: boolean;
	BreakingFilterSettings: SolverBreakingFilterSettings;
	DoGenerateTrailingData: boolean;
	TrailingFilterSettings: SolverTrailingFilterSettings;
	MassScale: number;
	bGenerateContactGraph: boolean;
	bHasFloor: boolean;
	FloorHeight: number;
	ChaosDebugSubstepControl: ChaosDebugSubstepControl;
	SpriteComponent: BillboardComponent;
	GameplayEventDispatcherComponent: ChaosGameplayEventDispatcher;
	static GetDefaultObject(): ChaosSolverActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverActor;
	SetSolverActive(bActive: boolean): void;
	SetAsCurrentWorldSolver(): void;
	static C(Other: UObject | any): ChaosSolverActor;
}

declare class ChaosSolverSettings extends DeveloperSettings { 
	DefaultChaosSolverActorClass: SoftClassPath;
	static Load(ResourceName: string): ChaosSolverSettings;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverSettings;
	static GetDefaultObject(): ChaosSolverSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverSettings;
	static C(Other: UObject | any): ChaosSolverSettings;
}

declare class FieldSystem extends UObject { 
	static Load(ResourceName: string): FieldSystem;
	static Find(Outer: UObject, ResourceName: string): FieldSystem;
	static GetDefaultObject(): FieldSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystem;
	static C(Other: UObject | any): FieldSystem;
}

declare type EFieldPhysicsType = 'Field_None' | 'Field_DynamicState' | 'Field_LinearForce' | 'Field_ExternalClusterStrain' | 'Field_Kill' | 'Field_LinearVelocity' | 'Field_AngularVelociy' | 'Field_AngularTorque' | 'Field_InternalClusterStrain' | 'Field_DisableThreshold' | 'Field_SleepingThreshold' | 'Field_PositionStatic' | 'Field_PositionAnimated' | 'Field_PositionTarget' | 'Field_DynamicConstraint' | 'Field_CollisionGroup' | 'Field_ActivateDisabled' | 'Field_PhysicsType_Max';
declare var EFieldPhysicsType : { Field_None:'Field_None',Field_DynamicState:'Field_DynamicState',Field_LinearForce:'Field_LinearForce',Field_ExternalClusterStrain:'Field_ExternalClusterStrain',Field_Kill:'Field_Kill',Field_LinearVelocity:'Field_LinearVelocity',Field_AngularVelociy:'Field_AngularVelociy',Field_AngularTorque:'Field_AngularTorque',Field_InternalClusterStrain:'Field_InternalClusterStrain',Field_DisableThreshold:'Field_DisableThreshold',Field_SleepingThreshold:'Field_SleepingThreshold',Field_PositionStatic:'Field_PositionStatic',Field_PositionAnimated:'Field_PositionAnimated',Field_PositionTarget:'Field_PositionTarget',Field_DynamicConstraint:'Field_DynamicConstraint',Field_CollisionGroup:'Field_CollisionGroup',Field_ActivateDisabled:'Field_ActivateDisabled',Field_PhysicsType_Max:'Field_PhysicsType_Max', };
declare class FieldSystemMetaData extends ActorComponent { 
	static Load(ResourceName: string): FieldSystemMetaData;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaData;
	static GetDefaultObject(): FieldSystemMetaData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaData;
	static C(Other: UObject | any): FieldSystemMetaData;
}

declare class FieldNodeBase extends ActorComponent { 
	static Load(ResourceName: string): FieldNodeBase;
	static Find(Outer: UObject, ResourceName: string): FieldNodeBase;
	static GetDefaultObject(): FieldNodeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeBase;
	static C(Other: UObject | any): FieldNodeBase;
}

declare class FieldSystemComponent extends PrimitiveComponent { 
	FieldSystem: FieldSystem;
	SupportedSolvers: ChaosSolverActor[];
	static Load(ResourceName: string): FieldSystemComponent;
	static Find(Outer: UObject, ResourceName: string): FieldSystemComponent;
	static GetDefaultObject(): FieldSystemComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemComponent;
	ResetFieldSystem(): void;
	ApplyUniformVectorFalloffForce(Enabled: boolean,Position: Vector,Direction: Vector,Radius: number,Magnitude: number): void;
	ApplyStrainField(Enabled: boolean,Position: Vector,Radius: number,Magnitude: number,Iterations: number): void;
	ApplyStayDynamicField(Enabled: boolean,Position: Vector,Radius: number): void;
	ApplyRadialVectorFalloffForce(Enabled: boolean,Position: Vector,Radius: number,Magnitude: number): void;
	ApplyRadialForce(Enabled: boolean,Position: Vector,Magnitude: number): void;
	ApplyPhysicsField(Enabled: boolean,Target: EFieldPhysicsType,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	ApplyLinearForce(Enabled: boolean,Direction: Vector,Magnitude: number): void;
	AddFieldCommand(Enabled: boolean,Target: EFieldPhysicsType,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	static C(Other: UObject | any): FieldSystemComponent;
}

declare class FieldSystemActor extends Actor { 
	FieldSystemComponent: FieldSystemComponent;
	static GetDefaultObject(): FieldSystemActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemActor;
	static C(Other: UObject | any): FieldSystemActor;
}

declare class FieldSystemMetaDataIteration extends FieldSystemMetaData { 
	Iterations: number;
	static Load(ResourceName: string): FieldSystemMetaDataIteration;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaDataIteration;
	static GetDefaultObject(): FieldSystemMetaDataIteration;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaDataIteration;
	SetMetaDataIteration(Iterations: number): FieldSystemMetaDataIteration;
	static C(Other: UObject | any): FieldSystemMetaDataIteration;
}

declare type EFieldResolutionType = 'Field_Resolution_Minimal' | 'Field_Resolution_DisabledParents' | 'Field_Resolution_Maximum' | 'Field_Resolution_Max';
declare var EFieldResolutionType : { Field_Resolution_Minimal:'Field_Resolution_Minimal',Field_Resolution_DisabledParents:'Field_Resolution_DisabledParents',Field_Resolution_Maximum:'Field_Resolution_Maximum',Field_Resolution_Max:'Field_Resolution_Max', };
declare class FieldSystemMetaDataProcessingResolution extends FieldSystemMetaData { 
	ResolutionType: EFieldResolutionType;
	static Load(ResourceName: string): FieldSystemMetaDataProcessingResolution;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaDataProcessingResolution;
	static GetDefaultObject(): FieldSystemMetaDataProcessingResolution;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaDataProcessingResolution;
	SetMetaDataaProcessingResolutionType(ResolutionType: EFieldResolutionType): FieldSystemMetaDataProcessingResolution;
	static C(Other: UObject | any): FieldSystemMetaDataProcessingResolution;
}

declare class FieldNodeInt extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeInt;
	static Find(Outer: UObject, ResourceName: string): FieldNodeInt;
	static GetDefaultObject(): FieldNodeInt;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeInt;
	static C(Other: UObject | any): FieldNodeInt;
}

declare class FieldNodeFloat extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeFloat;
	static Find(Outer: UObject, ResourceName: string): FieldNodeFloat;
	static GetDefaultObject(): FieldNodeFloat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeFloat;
	static C(Other: UObject | any): FieldNodeFloat;
}

declare class FieldNodeVector extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeVector;
	static Find(Outer: UObject, ResourceName: string): FieldNodeVector;
	static GetDefaultObject(): FieldNodeVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeVector;
	static C(Other: UObject | any): FieldNodeVector;
}

declare class UniformInteger extends FieldNodeInt { 
	Magnitude: number;
	static Load(ResourceName: string): UniformInteger;
	static Find(Outer: UObject, ResourceName: string): UniformInteger;
	static GetDefaultObject(): UniformInteger;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformInteger;
	SetUniformInteger(Magnitude: number): UniformInteger;
	static C(Other: UObject | any): UniformInteger;
}

declare type ESetMaskConditionType = 'Field_Set_Always' | 'Field_Set_IFF_NOT_Interior' | 'Field_Set_IFF_NOT_Exterior' | 'Field_MaskCondition_Max';
declare var ESetMaskConditionType : { Field_Set_Always:'Field_Set_Always',Field_Set_IFF_NOT_Interior:'Field_Set_IFF_NOT_Interior',Field_Set_IFF_NOT_Exterior:'Field_Set_IFF_NOT_Exterior',Field_MaskCondition_Max:'Field_MaskCondition_Max', };
declare class RadialIntMask extends FieldNodeInt { 
	Radius: number;
	Position: Vector;
	InteriorValue: number;
	ExteriorValue: number;
	SetMaskCondition: ESetMaskConditionType;
	static Load(ResourceName: string): RadialIntMask;
	static Find(Outer: UObject, ResourceName: string): RadialIntMask;
	static GetDefaultObject(): RadialIntMask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialIntMask;
	SetRadialIntMask(Radius: number,Position: Vector,InteriorValue: number,ExteriorValue: number,SetMaskConditionIn: ESetMaskConditionType): RadialIntMask;
	static C(Other: UObject | any): RadialIntMask;
}

declare class UniformScalar extends FieldNodeFloat { 
	Magnitude: number;
	static Load(ResourceName: string): UniformScalar;
	static Find(Outer: UObject, ResourceName: string): UniformScalar;
	static GetDefaultObject(): UniformScalar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformScalar;
	SetUniformScalar(Magnitude: number): UniformScalar;
	static C(Other: UObject | any): UniformScalar;
}

declare type EFieldFalloffType = 'Field_FallOff_None' | 'Field_Falloff_Linear' | 'Field_Falloff_Inverse' | 'Field_Falloff_Squared' | 'Field_Falloff_Logarithmic' | 'Field_Falloff_Max';
declare var EFieldFalloffType : { Field_FallOff_None:'Field_FallOff_None',Field_Falloff_Linear:'Field_Falloff_Linear',Field_Falloff_Inverse:'Field_Falloff_Inverse',Field_Falloff_Squared:'Field_Falloff_Squared',Field_Falloff_Logarithmic:'Field_Falloff_Logarithmic',Field_Falloff_Max:'Field_Falloff_Max', };
declare class RadialFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Radius: number;
	Position: Vector;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): RadialFalloff;
	static Find(Outer: UObject, ResourceName: string): RadialFalloff;
	static GetDefaultObject(): RadialFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialFalloff;
	SetRadialFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Radius: number,Position: Vector,Falloff: EFieldFalloffType): RadialFalloff;
	static C(Other: UObject | any): RadialFalloff;
}

declare class PlaneFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Distance: number;
	Position: Vector;
	Normal: Vector;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): PlaneFalloff;
	static Find(Outer: UObject, ResourceName: string): PlaneFalloff;
	static GetDefaultObject(): PlaneFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneFalloff;
	SetPlaneFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Distance: number,Position: Vector,Normal: Vector,Falloff: EFieldFalloffType): PlaneFalloff;
	static C(Other: UObject | any): PlaneFalloff;
}

declare class BoxFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Transform: Transform;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): BoxFalloff;
	static Find(Outer: UObject, ResourceName: string): BoxFalloff;
	static GetDefaultObject(): BoxFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoxFalloff;
	SetBoxFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Transform: Transform,Falloff: EFieldFalloffType): BoxFalloff;
	static C(Other: UObject | any): BoxFalloff;
}

declare class NoiseField extends FieldNodeFloat { 
	MinRange: number;
	MaxRange: number;
	Transform: Transform;
	static Load(ResourceName: string): NoiseField;
	static Find(Outer: UObject, ResourceName: string): NoiseField;
	static GetDefaultObject(): NoiseField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NoiseField;
	SetNoiseField(MinRange: number,MaxRange: number,Transform: Transform): NoiseField;
	static C(Other: UObject | any): NoiseField;
}

declare class UniformVector extends FieldNodeVector { 
	Magnitude: number;
	Direction: Vector;
	static Load(ResourceName: string): UniformVector;
	static Find(Outer: UObject, ResourceName: string): UniformVector;
	static GetDefaultObject(): UniformVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformVector;
	SetUniformVector(Magnitude: number,Direction: Vector): UniformVector;
	static C(Other: UObject | any): UniformVector;
}

declare class RadialVector extends FieldNodeVector { 
	Magnitude: number;
	Position: Vector;
	static Load(ResourceName: string): RadialVector;
	static Find(Outer: UObject, ResourceName: string): RadialVector;
	static GetDefaultObject(): RadialVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialVector;
	SetRadialVector(Magnitude: number,Position: Vector): RadialVector;
	static C(Other: UObject | any): RadialVector;
}

declare class RandomVector extends FieldNodeVector { 
	Magnitude: number;
	static Load(ResourceName: string): RandomVector;
	static Find(Outer: UObject, ResourceName: string): RandomVector;
	static GetDefaultObject(): RandomVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RandomVector;
	SetRandomVector(Magnitude: number): RandomVector;
	static C(Other: UObject | any): RandomVector;
}

declare type EFieldOperationType = 'Field_Multiply' | 'Field_Divide' | 'Field_Add' | 'Field_Substract' | 'Field_Operation_Max';
declare var EFieldOperationType : { Field_Multiply:'Field_Multiply',Field_Divide:'Field_Divide',Field_Add:'Field_Add',Field_Substract:'Field_Substract',Field_Operation_Max:'Field_Operation_Max', };
declare class OperatorField extends FieldNodeBase { 
	Magnitude: number;
	RightField: FieldNodeBase;
	LeftField: FieldNodeBase;
	Operation: EFieldOperationType;
	static Load(ResourceName: string): OperatorField;
	static Find(Outer: UObject, ResourceName: string): OperatorField;
	static GetDefaultObject(): OperatorField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OperatorField;
	SetOperatorField(Magnitude: number,RightField: FieldNodeBase,LeftField: FieldNodeBase,Operation: EFieldOperationType): OperatorField;
	static C(Other: UObject | any): OperatorField;
}

declare class ToIntegerField extends FieldNodeInt { 
	FloatField: FieldNodeFloat;
	static Load(ResourceName: string): ToIntegerField;
	static Find(Outer: UObject, ResourceName: string): ToIntegerField;
	static GetDefaultObject(): ToIntegerField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToIntegerField;
	SetToIntegerField(FloatField: FieldNodeFloat): ToIntegerField;
	static C(Other: UObject | any): ToIntegerField;
}

declare class ToFloatField extends FieldNodeFloat { 
	IntField: FieldNodeInt;
	static Load(ResourceName: string): ToFloatField;
	static Find(Outer: UObject, ResourceName: string): ToFloatField;
	static GetDefaultObject(): ToFloatField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToFloatField;
	SetToFloatField(IntegerField: FieldNodeInt): ToFloatField;
	static C(Other: UObject | any): ToFloatField;
}

declare type EFieldCullingOperationType = 'Field_Culling_Inside' | 'Field_Culling_Outside' | 'Field_Culling_Operation_Max' | 'Field_Culling_MAX';
declare var EFieldCullingOperationType : { Field_Culling_Inside:'Field_Culling_Inside',Field_Culling_Outside:'Field_Culling_Outside',Field_Culling_Operation_Max:'Field_Culling_Operation_Max',Field_Culling_MAX:'Field_Culling_MAX', };
declare class CullingField extends FieldNodeBase { 
	Culling: FieldNodeBase;
	Field: FieldNodeBase;
	Operation: EFieldCullingOperationType;
	static Load(ResourceName: string): CullingField;
	static Find(Outer: UObject, ResourceName: string): CullingField;
	static GetDefaultObject(): CullingField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CullingField;
	SetCullingField(Culling: FieldNodeBase,Field: FieldNodeBase,Operation: EFieldCullingOperationType): CullingField;
	static C(Other: UObject | any): CullingField;
}

declare class ReturnResultsTerminal extends FieldNodeBase { 
	static Load(ResourceName: string): ReturnResultsTerminal;
	static Find(Outer: UObject, ResourceName: string): ReturnResultsTerminal;
	static GetDefaultObject(): ReturnResultsTerminal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReturnResultsTerminal;
	SetReturnResultsTerminal(): ReturnResultsTerminal;
	static C(Other: UObject | any): ReturnResultsTerminal;
}

declare type EChaosCollisionSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByHighestImpulse' | 'SortByNearestFirst' | 'Count' | 'EChaosCollisionSortMethod_MAX';
declare var EChaosCollisionSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByHighestImpulse:'SortByHighestImpulse',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosCollisionSortMethod_MAX:'EChaosCollisionSortMethod_MAX', };
declare class ChaosCollisionEventRequestSettings { 
	MaxNumberResults: number;
	MinMass: number;
	MinSpeed: number;
	MinImpulse: number;
	MaxDistance: number;
	SortMethod: EChaosCollisionSortMethod;
	clone() : ChaosCollisionEventRequestSettings;
	static C(Other: UObject | any): ChaosCollisionEventRequestSettings;
}

declare type EChaosBreakingSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByNearestFirst' | 'Count' | 'EChaosBreakingSortMethod_MAX';
declare var EChaosBreakingSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosBreakingSortMethod_MAX:'EChaosBreakingSortMethod_MAX', };
declare class ChaosBreakingEventRequestSettings { 
	MaxNumberOfResults: number;
	MinRadius: number;
	MinSpeed: number;
	MinMass: number;
	MaxDistance: number;
	SortMethod: EChaosBreakingSortMethod;
	clone() : ChaosBreakingEventRequestSettings;
	static C(Other: UObject | any): ChaosBreakingEventRequestSettings;
}

declare type EChaosTrailingSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByNearestFirst' | 'Count' | 'EChaosTrailingSortMethod_MAX';
declare var EChaosTrailingSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosTrailingSortMethod_MAX:'EChaosTrailingSortMethod_MAX', };
declare class ChaosTrailingEventRequestSettings { 
	MaxNumberOfResults: number;
	MinMass: number;
	MinSpeed: number;
	MinAngularSpeed: number;
	MaxDistance: number;
	SortMethod: EChaosTrailingSortMethod;
	clone() : ChaosTrailingEventRequestSettings;
	static C(Other: UObject | any): ChaosTrailingEventRequestSettings;
}

declare class ChaosCollisionEventData { 
	Location: Vector;
	Normal: Vector;
	Velocity1: Vector;
	Velocity2: Vector;
	Mass1: number;
	Mass2: number;
	Impulse: Vector;
	clone() : ChaosCollisionEventData;
	static C(Other: UObject | any): ChaosCollisionEventData;
}

declare class ChaosBreakingEventData { 
	Location: Vector;
	Velocity: Vector;
	Mass: number;
	clone() : ChaosBreakingEventData;
	static C(Other: UObject | any): ChaosBreakingEventData;
}

declare class ChaosTrailingEventData { 
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	ParticleIndex: number;
	clone() : ChaosTrailingEventData;
	static C(Other: UObject | any): ChaosTrailingEventData;
}

declare class GeometryCollectionSource { 
	SourceGeometryObject: SoftObjectPath;
	LocalTransform: Transform;
	SourceMaterial: MaterialInterface[];
	clone() : GeometryCollectionSource;
	static C(Other: UObject | any): GeometryCollectionSource;
}

declare type ECollisionTypeEnum = 'Chaos_Volumetric' | 'Chaos_Surface_Volumetric' | 'Chaos_Max';
declare var ECollisionTypeEnum : { Chaos_Volumetric:'Chaos_Volumetric',Chaos_Surface_Volumetric:'Chaos_Surface_Volumetric',Chaos_Max:'Chaos_Max', };
declare type EImplicitTypeEnum = 'Chaos_Implicit_Box' | 'Chaos_Implicit_Sphere' | 'Chaos_Implicit_Capsule' | 'Chaos_Implicit_LevelSet' | 'Chaos_Implicit_None' | 'Chaos_Max';
declare var EImplicitTypeEnum : { Chaos_Implicit_Box:'Chaos_Implicit_Box',Chaos_Implicit_Sphere:'Chaos_Implicit_Sphere',Chaos_Implicit_Capsule:'Chaos_Implicit_Capsule',Chaos_Implicit_LevelSet:'Chaos_Implicit_LevelSet',Chaos_Implicit_None:'Chaos_Implicit_None',Chaos_Max:'Chaos_Max', };
declare class GeometryCollectionSizeSpecificData { 
	MaxSize: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	MinClusterLevelSetResolution: number;
	MaxClusterLevelSetResolution: number;
	CollisionObjectReductionPercentage: number;
	CollisionParticlesFraction: number;
	MaximumCollisionParticles: number;
	clone() : GeometryCollectionSizeSpecificData;
	static C(Other: UObject | any): GeometryCollectionSizeSpecificData;
}

declare class GeometryCollection extends UObject { 
	GeometrySource: GeometryCollectionSource[];
	Materials: MaterialInterface[];
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	MinClusterLevelSetResolution: number;
	MaxClusterLevelSetResolution: number;
	CollisionObjectReductionPercentage: number;
	bMassAsDensity: boolean;
	Mass: number;
	MinimumMassClamp: number;
	CollisionParticlesFraction: number;
	MaximumCollisionParticles: number;
	SizeSpecificData: GeometryCollectionSizeSpecificData[];
	EnableRemovePiecesOnFracture: boolean;
	RemoveOnFractureMaterials: MaterialInterface[];
	ThumbnailInfo: ThumbnailInfo;
	PersistentGuid: Guid;
	StateGuid: Guid;
	BoneSelectedMaterialIndex: number;
	static Load(ResourceName: string): GeometryCollection;
	static Find(Outer: UObject, ResourceName: string): GeometryCollection;
	static GetDefaultObject(): GeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollection;
	static C(Other: UObject | any): GeometryCollection;
}

declare type EObjectStateTypeEnum = 'Chaos_NONE' | 'Chaos_Object_Sleeping' | 'Chaos_Object_Kinematic' | 'Chaos_Object_Static' | 'Chaos_Object_Dynamic' | 'Chaos_Object_UserDefined' | 'Chaos_Max';
declare var EObjectStateTypeEnum : { Chaos_NONE:'Chaos_NONE',Chaos_Object_Sleeping:'Chaos_Object_Sleeping',Chaos_Object_Kinematic:'Chaos_Object_Kinematic',Chaos_Object_Static:'Chaos_Object_Static',Chaos_Object_Dynamic:'Chaos_Object_Dynamic',Chaos_Object_UserDefined:'Chaos_Object_UserDefined',Chaos_Max:'Chaos_Max', };
declare type EInitialVelocityTypeEnum = 'Chaos_Initial_Velocity_User_Defined' | 'Chaos_Initial_Velocity_None' | 'Chaos_Max';
declare var EInitialVelocityTypeEnum : { Chaos_Initial_Velocity_User_Defined:'Chaos_Initial_Velocity_User_Defined',Chaos_Initial_Velocity_None:'Chaos_Initial_Velocity_None',Chaos_Max:'Chaos_Max', };
declare type EGeometryCollectionCacheType = 'None' | 'Record' | 'Play' | 'RecordAndPlay' | 'EGeometryCollectionCacheType_MAX';
declare var EGeometryCollectionCacheType : { None:'None',Record:'Record',Play:'Play',RecordAndPlay:'RecordAndPlay',EGeometryCollectionCacheType_MAX:'EGeometryCollectionCacheType_MAX', };
declare class SolverCollisionData { 
	Location: Vector;
	AccumulatedImpulse: Vector;
	Normal: Vector;
	Velocity1: Vector;
	Velocity2: Vector;
	AngularVelocity1: Vector;
	AngularVelocity2: Vector;
	Mass1: number;
	Mass2: number;
	ParticleIndex: number;
	LevelsetIndex: number;
	ParticleIndexMesh: number;
	LevelsetIndexMesh: number;
	clone() : SolverCollisionData;
	static C(Other: UObject | any): SolverCollisionData;
}

declare class SolverBreakingData { 
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	ParticleIndex: number;
	ParticleIndexMesh: number;
	clone() : SolverBreakingData;
	static C(Other: UObject | any): SolverBreakingData;
}

declare class RecordedFrame { 
	Transforms: Transform[];
	TransformIndices: number[];
	PreviousTransformIndices: number[];
	DisabledFlags: boolean[];
	Collisions: SolverCollisionData[];
	Breakings: SolverBreakingData[];
	Trailings: any;
	Timestamp: number;
	clone() : RecordedFrame;
	static C(Other: UObject | any): RecordedFrame;
}

declare class RecordedTransformTrack { 
	Records: RecordedFrame[];
	clone() : RecordedTransformTrack;
	static C(Other: UObject | any): RecordedTransformTrack;
}

declare class GeometryCollectionCache extends UObject { 
	RecordedData: RecordedTransformTrack;
	SupportedCollection: GeometryCollection;
	CompatibleCollectionState: Guid;
	static Load(ResourceName: string): GeometryCollectionCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCache;
	static GetDefaultObject(): GeometryCollectionCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCache;
	static C(Other: UObject | any): GeometryCollectionCache;
}

declare class GeomComponentCacheParameters { 
	CacheMode: EGeometryCollectionCacheType;
	TargetCache: GeometryCollectionCache;
	ReverseCacheBeginTime: number;
	SaveCollisionData: boolean;
	DoGenerateCollisionData: boolean;
	CollisionDataSizeMax: number;
	DoCollisionDataSpatialHash: boolean;
	CollisionDataSpatialHashRadius: number;
	MaxCollisionPerCell: number;
	SaveBreakingData: boolean;
	DoGenerateBreakingData: boolean;
	BreakingDataSizeMax: number;
	DoBreakingDataSpatialHash: boolean;
	BreakingDataSpatialHashRadius: number;
	MaxBreakingPerCell: number;
	SaveTrailingData: boolean;
	DoGenerateTrailingData: boolean;
	TrailingDataSizeMax: number;
	TrailingMinSpeedThreshold: number;
	TrailingMinVolumeThreshold: number;
	clone() : GeomComponentCacheParameters;
	static C(Other: UObject | any): GeomComponentCacheParameters;
}

declare class ChaosBreakEvent { 
	Component: PrimitiveComponent;
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	clone() : ChaosBreakEvent;
	static C(Other: UObject | any): ChaosBreakEvent;
}

declare class GeometryCollectionRepData { 
	clone() : GeometryCollectionRepData;
	static C(Other: UObject | any): GeometryCollectionRepData;
}

declare type EGeometryCollectionPhysicsTypeEnum = 'Chaos_AngularVelocity' | 'Chaos_DynamicState' | 'Chaos_LinearVelocity' | 'Chaos_InitialAngularVelocity' | 'Chaos_InitialLinearVelocity' | 'Chaos_CollisionGroup' | 'Chaos_LinearForce' | 'Chaos_AngularTorque' | 'Chaos_Max';
declare var EGeometryCollectionPhysicsTypeEnum : { Chaos_AngularVelocity:'Chaos_AngularVelocity',Chaos_DynamicState:'Chaos_DynamicState',Chaos_LinearVelocity:'Chaos_LinearVelocity',Chaos_InitialAngularVelocity:'Chaos_InitialAngularVelocity',Chaos_InitialLinearVelocity:'Chaos_InitialLinearVelocity',Chaos_CollisionGroup:'Chaos_CollisionGroup',Chaos_LinearForce:'Chaos_LinearForce',Chaos_AngularTorque:'Chaos_AngularTorque',Chaos_Max:'Chaos_Max', };
declare class GeometryCollectionComponent extends MeshComponent { 
	ChaosSolverActor: ChaosSolverActor;
	RestCollection: GeometryCollection;
	InitializationFields: FieldSystemActor[];
	Simulating: boolean;
	ObjectType: EObjectStateTypeEnum;
	EnableClustering: boolean;
	ClusterGroupIndex: number;
	MaxClusterLevel: number;
	DamageThreshold: number[];
	ClusterConnectionType: EClusterConnectionTypeEnum;
	CollisionGroup: number;
	CollisionSampleFraction: number;
	LinearEtherDrag: number;
	AngularEtherDrag: number;
	PhysicalMaterial: ChaosPhysicalMaterial;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	PhysicalMaterialOverride: PhysicalMaterial;
	CacheParameters: GeomComponentCacheParameters;
	NotifyGeometryCollectionPhysicsStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) => void>;
	NotifyGeometryCollectionPhysicsLoadingStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) => void>;
	OnChaosBreakEvent: UnrealEngineMulticastDelegate<(BreakEvent: ChaosBreakEvent) => void>;
	DesiredCacheTime: number;
	CachePlayback: boolean;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	bNotifyBreaks: boolean;
	bNotifyCollisions: boolean;
	bEnableReplication: boolean;
	bEnableAbandonAfterLevel: boolean;
	ReplicationAbandonClusterLevel: number;
	RepData: GeometryCollectionRepData;
	SelectedBones: number[];
	HighlightedBones: number[];
	DummyBodySetup: BodySetup;
	EditorActor: Actor;
	static Load(ResourceName: string): GeometryCollectionComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionComponent;
	static GetDefaultObject(): GeometryCollectionComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionComponent;
	SetNotifyBreaks(bNewNotifyBreaks: boolean): void;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	OnRep_RepData(OldData: GeometryCollectionRepData): void;
	NetAbandonCluster(TransformIndex: number): void;
	ApplyPhysicsField(Enabled: boolean,Target: EGeometryCollectionPhysicsTypeEnum,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	ApplyKinematicField(Radius: number,Position: Vector): void;
	static C(Other: UObject | any): GeometryCollectionComponent;
}

declare class GeometryCollectionDebugDrawWarningMessage { 
	clone() : GeometryCollectionDebugDrawWarningMessage;
	static C(Other: UObject | any): GeometryCollectionDebugDrawWarningMessage;
}

declare class GeometryCollectionDebugDrawActorSelectedRigidBody { 
	ID: number;
	Solver: ChaosSolverActor;
	GeometryCollection: GeometryCollectionActor;
	clone() : GeometryCollectionDebugDrawActorSelectedRigidBody;
	static C(Other: UObject | any): GeometryCollectionDebugDrawActorSelectedRigidBody;
}

declare type EGeometryCollectionDebugDrawActorHideGeometry = 'HideNone' | 'HideWithCollision' | 'HideSelected' | 'HideWholeCollection' | 'HideAll' | 'EGeometryCollectionDebugDrawActorHideGeometry_MAX';
declare var EGeometryCollectionDebugDrawActorHideGeometry : { HideNone:'HideNone',HideWithCollision:'HideWithCollision',HideSelected:'HideSelected',HideWholeCollection:'HideWholeCollection',HideAll:'HideAll',EGeometryCollectionDebugDrawActorHideGeometry_MAX:'EGeometryCollectionDebugDrawActorHideGeometry_MAX', };
declare class GeometryCollectionDebugDrawActor extends Actor { 
	WarningMessage: GeometryCollectionDebugDrawWarningMessage;
	SelectedRigidBody: GeometryCollectionDebugDrawActorSelectedRigidBody;
	bDebugDrawWholeCollection: boolean;
	bDebugDrawHierarchy: boolean;
	bDebugDrawClustering: boolean;
	HideGeometry: EGeometryCollectionDebugDrawActorHideGeometry;
	bShowRigidBodyId: boolean;
	bShowRigidBodyCollision: boolean;
	bCollisionAtOrigin: boolean;
	bShowRigidBodyTransform: boolean;
	bShowRigidBodyInertia: boolean;
	bShowRigidBodyVelocity: boolean;
	bShowRigidBodyForce: boolean;
	bShowRigidBodyInfos: boolean;
	bShowTransformIndex: boolean;
	bShowTransform: boolean;
	bShowParent: boolean;
	bShowLevel: boolean;
	bShowConnectivityEdges: boolean;
	bShowGeometryIndex: boolean;
	bShowGeometryTransform: boolean;
	bShowBoundingBox: boolean;
	bShowFaces: boolean;
	bShowFaceIndices: boolean;
	bShowFaceNormals: boolean;
	bShowSingleFace: boolean;
	SingleFaceIndex: number;
	bShowVertices: boolean;
	bShowVertexIndices: boolean;
	bShowVertexNormals: boolean;
	bUseActiveVisualization: boolean;
	PointThickness: number;
	LineThickness: number;
	bTextShadow: boolean;
	TextScale: number;
	NormalScale: number;
	AxisScale: number;
	ArrowScale: number;
	RigidBodyIdColor: Color;
	RigidBodyTransformScale: number;
	RigidBodyCollisionColor: Color;
	RigidBodyInertiaColor: Color;
	RigidBodyVelocityColor: Color;
	RigidBodyForceColor: Color;
	RigidBodyInfoColor: Color;
	TransformIndexColor: Color;
	TransformScale: number;
	LevelColor: Color;
	ParentColor: Color;
	ConnectivityEdgeThickness: number;
	GeometryIndexColor: Color;
	GeometryTransformScale: number;
	BoundingBoxColor: Color;
	FaceColor: Color;
	FaceIndexColor: Color;
	FaceNormalColor: Color;
	SingleFaceColor: Color;
	VertexColor: Color;
	VertexIndexColor: Color;
	VertexNormalColor: Color;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): GeometryCollectionDebugDrawActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionDebugDrawActor;
	static C(Other: UObject | any): GeometryCollectionDebugDrawActor;
}

declare class GeometryCollectionRenderLevelSetActor extends Actor { 
	TargetVolumeTexture: VolumeTexture;
	RayMarchMaterial: Material;
	SurfaceTolerance: number;
	Isovalue: number;
	Enabled: boolean;
	RenderVolumeBoundingBox: boolean;
	static GetDefaultObject(): GeometryCollectionRenderLevelSetActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionRenderLevelSetActor;
	static C(Other: UObject | any): GeometryCollectionRenderLevelSetActor;
}

declare class GeometryCollectionDebugDrawComponent extends ActorComponent { 
	GeometryCollectionDebugDrawActor: GeometryCollectionDebugDrawActor;
	GeometryCollectionRenderLevelSetActor: GeometryCollectionRenderLevelSetActor;
	static Load(ResourceName: string): GeometryCollectionDebugDrawComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionDebugDrawComponent;
	static GetDefaultObject(): GeometryCollectionDebugDrawComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionDebugDrawComponent;
	static C(Other: UObject | any): GeometryCollectionDebugDrawComponent;
}

declare class GeometryCollectionActor extends Actor { 
	GeometryCollectionComponent: GeometryCollectionComponent;
	GeometryCollectionDebugDrawComponent: GeometryCollectionDebugDrawComponent;
	static GetDefaultObject(): GeometryCollectionActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionActor;
	RaycastSingle(Start: Vector,End: Vector,OutHit?: HitResult): {OutHit: HitResult, $: boolean};
	static C(Other: UObject | any): GeometryCollectionActor;
}

declare class ChaosDestructionListener extends SceneComponent { 
	bIsCollisionEventListeningEnabled: boolean;
	bIsBreakingEventListeningEnabled: boolean;
	bIsTrailingEventListeningEnabled: boolean;
	CollisionEventRequestSettings: ChaosCollisionEventRequestSettings;
	BreakingEventRequestSettings: ChaosBreakingEventRequestSettings;
	TrailingEventRequestSettings: ChaosTrailingEventRequestSettings;
	ChaosSolverActors: any;
	GeometryCollectionActors: any;
	OnCollisionEvents: UnrealEngineMulticastDelegate<(CollisionEvents: ChaosCollisionEventData[]) => void>;
	OnBreakingEvents: UnrealEngineMulticastDelegate<(BreakingEvents: ChaosBreakingEventData[]) => void>;
	OnTrailingEvents: UnrealEngineMulticastDelegate<(TrailingEvents: ChaosTrailingEventData[]) => void>;
	static Load(ResourceName: string): ChaosDestructionListener;
	static Find(Outer: UObject, ResourceName: string): ChaosDestructionListener;
	static GetDefaultObject(): ChaosDestructionListener;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosDestructionListener;
	SortTrailingEvents(TrailingEvents?: ChaosTrailingEventData[],SortMethod?: EChaosTrailingSortMethod): {TrailingEvents: ChaosTrailingEventData[]};
	SortCollisionEvents(CollisionEvents?: ChaosCollisionEventData[],SortMethod?: EChaosCollisionSortMethod): {CollisionEvents: ChaosCollisionEventData[]};
	SortBreakingEvents(BreakingEvents?: ChaosBreakingEventData[],SortMethod?: EChaosBreakingSortMethod): {BreakingEvents: ChaosBreakingEventData[]};
	SetTrailingEventRequestSettings(InSettings: ChaosTrailingEventRequestSettings): void;
	SetTrailingEventEnabled(bIsEnabled: boolean): void;
	SetCollisionEventRequestSettings(InSettings: ChaosCollisionEventRequestSettings): void;
	SetCollisionEventEnabled(bIsEnabled: boolean): void;
	SetBreakingEventRequestSettings(InSettings: ChaosBreakingEventRequestSettings): void;
	SetBreakingEventEnabled(bIsEnabled: boolean): void;
	RemoveGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor): void;
	RemoveChaosSolverActor(ChaosSolverActor: ChaosSolverActor): void;
	IsEventListening(): boolean;
	AddGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor): void;
	AddChaosSolverActor(ChaosSolverActor: ChaosSolverActor): void;
	static C(Other: UObject | any): ChaosDestructionListener;
}

declare class SkeletalMeshSimulationComponent extends ActorComponent { 
	PhysicalMaterial: ChaosPhysicalMaterial;
	ChaosSolverActor: ChaosSolverActor;
	OverridePhysicsAsset: PhysicsAsset;
	bSimulating: boolean;
	bNotifyCollisions: boolean;
	ObjectType: EObjectStateTypeEnum;
	Density: number;
	MinMass: number;
	MaxMass: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitShapeParticlesPerUnitArea: number;
	ImplicitShapeMinNumParticles: number;
	ImplicitShapeMaxNumParticles: number;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	CollisionGroup: number;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	static Load(ResourceName: string): SkeletalMeshSimulationComponent;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshSimulationComponent;
	static GetDefaultObject(): SkeletalMeshSimulationComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshSimulationComponent;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	static C(Other: UObject | any): SkeletalMeshSimulationComponent;
}

declare class StaticMeshSimulationComponent extends ActorComponent { 
	Simulating: boolean;
	bNotifyCollisions: boolean;
	ObjectType: EObjectStateTypeEnum;
	Mass: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	DamageThreshold: number;
	PhysicalMaterial: ChaosPhysicalMaterial;
	ChaosSolverActor: ChaosSolverActor;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	SimulatedComponents: PrimitiveComponent[];
	static Load(ResourceName: string): StaticMeshSimulationComponent;
	static Find(Outer: UObject, ResourceName: string): StaticMeshSimulationComponent;
	static GetDefaultObject(): StaticMeshSimulationComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshSimulationComponent;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	ForceRecreatePhysicsState(): void;
	static C(Other: UObject | any): StaticMeshSimulationComponent;
}

declare class SceneOutlinerMenuContext extends UObject { 
	static Load(ResourceName: string): SceneOutlinerMenuContext;
	static Find(Outer: UObject, ResourceName: string): SceneOutlinerMenuContext;
	static GetDefaultObject(): SceneOutlinerMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneOutlinerMenuContext;
	static C(Other: UObject | any): SceneOutlinerMenuContext;
}

declare class SceneOutlinerSettings extends UObject { 
	bHideTemporaryActors: boolean;
	bShowOnlyActorsInCurrentLevel: boolean;
	bHideFoldersContainingHiddenActors: boolean;
	bShowOnlySelectedActors: boolean;
	bShowActorComponents: boolean;
	static Load(ResourceName: string): SceneOutlinerSettings;
	static Find(Outer: UObject, ResourceName: string): SceneOutlinerSettings;
	static GetDefaultObject(): SceneOutlinerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneOutlinerSettings;
	static C(Other: UObject | any): SceneOutlinerSettings;
}

declare class ActorFactoryGeometryCollection extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCollection;
	static GetDefaultObject(): ActorFactoryGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCollection;
	static C(Other: UObject | any): ActorFactoryGeometryCollection;
}

declare class GeometryCollectionCacheFactory extends Factory { 
	TargetCollection: GeometryCollection;
	static Load(ResourceName: string): GeometryCollectionCacheFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCacheFactory;
	static GetDefaultObject(): GeometryCollectionCacheFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCacheFactory;
	static C(Other: UObject | any): GeometryCollectionCacheFactory;
}

declare class GeometryCollectionFactory extends Factory { 
	static Load(ResourceName: string): GeometryCollectionFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionFactory;
	static GetDefaultObject(): GeometryCollectionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionFactory;
	static C(Other: UObject | any): GeometryCollectionFactory;
}

declare class GeometryCollectionThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCollectionThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionThumbnailRenderer;
	static GetDefaultObject(): GeometryCollectionThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionThumbnailRenderer;
	static C(Other: UObject | any): GeometryCollectionThumbnailRenderer;
}

declare class AutoClusterFractureCommand extends UObject { 
	static Load(ResourceName: string): AutoClusterFractureCommand;
	static Find(Outer: UObject, ResourceName: string): AutoClusterFractureCommand;
	static GetDefaultObject(): AutoClusterFractureCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutoClusterFractureCommand;
	static C(Other: UObject | any): AutoClusterFractureCommand;
}

declare class FractureTool extends UObject { 
	CommonSettings: FractureCommonSettings;
	static Load(ResourceName: string): FractureTool;
	static Find(Outer: UObject, ResourceName: string): FractureTool;
	static GetDefaultObject(): FractureTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureTool;
	static C(Other: UObject | any): FractureTool;
}

declare class FractureCommonSettings extends UObject { 
	RandomSeed: number;
	ChanceToFracture: number;
	bGroupFracture: boolean;
	bDrawSites: boolean;
	bDrawDiagram: boolean;
	Amplitude: number;
	Frequency: number;
	OctaveNumber: number;
	SurfaceResolution: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureCommonSettings;
	static Find(Outer: UObject, ResourceName: string): FractureCommonSettings;
	static GetDefaultObject(): FractureCommonSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureCommonSettings;
	static C(Other: UObject | any): FractureCommonSettings;
}

declare type EFractureAutoClusterMode = 'BoundingBox' | 'Proximity' | 'Distance' | 'EFractureAutoClusterMode_MAX';
declare var EFractureAutoClusterMode : { BoundingBox:'BoundingBox',Proximity:'Proximity',Distance:'Distance',EFractureAutoClusterMode_MAX:'EFractureAutoClusterMode_MAX', };
declare class FractureAutoClusterSettings extends UObject { 
	AutoClusterMode: EFractureAutoClusterMode;
	SiteCount: any;
	static Load(ResourceName: string): FractureAutoClusterSettings;
	static Find(Outer: UObject, ResourceName: string): FractureAutoClusterSettings;
	static GetDefaultObject(): FractureAutoClusterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureAutoClusterSettings;
	static C(Other: UObject | any): FractureAutoClusterSettings;
}

declare class FractureToolAutoCluster extends FractureTool { 
	Settings: FractureAutoClusterSettings;
	static Load(ResourceName: string): FractureToolAutoCluster;
	static Find(Outer: UObject, ResourceName: string): FractureToolAutoCluster;
	static GetDefaultObject(): FractureToolAutoCluster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAutoCluster;
	static C(Other: UObject | any): FractureToolAutoCluster;
}

declare class FractureBitmapSettings extends UObject { 
	Transform: Transform;
	Scale: Vector2D;
	IsRelativeTransform: boolean;
	SnapThreshold: number;
	SegmentationErrorThreshold: number;
	CutoutTexture: any;
	static Load(ResourceName: string): FractureBitmapSettings;
	static Find(Outer: UObject, ResourceName: string): FractureBitmapSettings;
	static GetDefaultObject(): FractureBitmapSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureBitmapSettings;
	static C(Other: UObject | any): FractureBitmapSettings;
}

declare class FractureToolBitmap extends FractureTool { 
	static Load(ResourceName: string): FractureToolBitmap;
	static Find(Outer: UObject, ResourceName: string): FractureToolBitmap;
	static GetDefaultObject(): FractureToolBitmap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolBitmap;
	static C(Other: UObject | any): FractureToolBitmap;
}

declare type EFractureBrickBond = 'Stretcher' | 'Stack' | 'English' | 'Header' | 'Flemish' | 'EFractureBrickBond_MAX';
declare var EFractureBrickBond : { Stretcher:'Stretcher',Stack:'Stack',English:'English',Header:'Header',Flemish:'Flemish',EFractureBrickBond_MAX:'EFractureBrickBond_MAX', };
declare type EFractureBrickProjection = 'X' | 'Y' | 'Z' | 'EFractureBrickProjection_MAX';
declare var EFractureBrickProjection : { X:'X',Y:'Y',Z:'Z',EFractureBrickProjection_MAX:'EFractureBrickProjection_MAX', };
declare class FractureBrickSettings extends UObject { 
	Bond: EFractureBrickBond;
	Forward: EFractureBrickProjection;
	Up: EFractureBrickProjection;
	BrickLength: number;
	BrickHeight: number;
	BrickDepth: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureBrickSettings;
	static Find(Outer: UObject, ResourceName: string): FractureBrickSettings;
	static GetDefaultObject(): FractureBrickSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureBrickSettings;
	static C(Other: UObject | any): FractureBrickSettings;
}

declare class FractureToolBrick extends FractureTool { 
	BrickSettings: FractureBrickSettings;
	static Load(ResourceName: string): FractureToolBrick;
	static Find(Outer: UObject, ResourceName: string): FractureToolBrick;
	static GetDefaultObject(): FractureToolBrick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolBrick;
	static C(Other: UObject | any): FractureToolBrick;
}

declare class FractureClusterSettings extends UObject { 
	NumberClustersMin: number;
	NumberClustersMax: number;
	SitesPerClusterMin: number;
	SitesPerClusterMax: number;
	ClusterRadiusPercentageMin: number;
	ClusterRadiusPercentageMax: number;
	ClusterRadius: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureClusterSettings;
	static Find(Outer: UObject, ResourceName: string): FractureClusterSettings;
	static GetDefaultObject(): FractureClusterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureClusterSettings;
	static C(Other: UObject | any): FractureClusterSettings;
}

declare class FractureToolVoronoiBase extends FractureTool { 
	static Load(ResourceName: string): FractureToolVoronoiBase;
	static Find(Outer: UObject, ResourceName: string): FractureToolVoronoiBase;
	static GetDefaultObject(): FractureToolVoronoiBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolVoronoiBase;
	static C(Other: UObject | any): FractureToolVoronoiBase;
}

declare class FractureToolCluster extends FractureToolVoronoiBase { 
	Settings: FractureClusterSettings;
	static Load(ResourceName: string): FractureToolCluster;
	static Find(Outer: UObject, ResourceName: string): FractureToolCluster;
	static GetDefaultObject(): FractureToolCluster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolCluster;
	static C(Other: UObject | any): FractureToolCluster;
}

declare class FracturePlaneCutSettings extends UObject { 
	NumberPlanarCuts: number;
	ReferenceActor: any;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FracturePlaneCutSettings;
	static Find(Outer: UObject, ResourceName: string): FracturePlaneCutSettings;
	static GetDefaultObject(): FracturePlaneCutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FracturePlaneCutSettings;
	static C(Other: UObject | any): FracturePlaneCutSettings;
}

declare class FractureToolPlaneCut extends FractureTool { 
	PlaneCutSettings: FracturePlaneCutSettings;
	static Load(ResourceName: string): FractureToolPlaneCut;
	static Find(Outer: UObject, ResourceName: string): FractureToolPlaneCut;
	static GetDefaultObject(): FractureToolPlaneCut;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolPlaneCut;
	static C(Other: UObject | any): FractureToolPlaneCut;
}

declare class FractureRadialSettings extends UObject { 
	Center: Vector;
	Normal: Vector;
	Radius: number;
	AngularSteps: number;
	RadialSteps: number;
	AngleOffset: number;
	Variability: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureRadialSettings;
	static Find(Outer: UObject, ResourceName: string): FractureRadialSettings;
	static GetDefaultObject(): FractureRadialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureRadialSettings;
	static C(Other: UObject | any): FractureRadialSettings;
}

declare class FractureToolRadial extends FractureToolVoronoiBase { 
	static Load(ResourceName: string): FractureToolRadial;
	static Find(Outer: UObject, ResourceName: string): FractureToolRadial;
	static GetDefaultObject(): FractureToolRadial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolRadial;
	static C(Other: UObject | any): FractureToolRadial;
}

declare class FractureSliceSettings extends UObject { 
	SlicesX: number;
	SlicesY: number;
	SlicesZ: number;
	SliceAngleVariation: number;
	SliceOffsetVariation: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureSliceSettings;
	static Find(Outer: UObject, ResourceName: string): FractureSliceSettings;
	static GetDefaultObject(): FractureSliceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureSliceSettings;
	static C(Other: UObject | any): FractureSliceSettings;
}

declare class FractureToolSlice extends FractureTool { 
	SliceSettings: FractureSliceSettings;
	static Load(ResourceName: string): FractureToolSlice;
	static Find(Outer: UObject, ResourceName: string): FractureToolSlice;
	static GetDefaultObject(): FractureToolSlice;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSlice;
	static C(Other: UObject | any): FractureToolSlice;
}

declare class FractureUniformSettings extends UObject { 
	NumberVoronoiSitesMin: number;
	NumberVoronoiSitesMax: number;
	OwnerTool: FractureTool;
	static Load(ResourceName: string): FractureUniformSettings;
	static Find(Outer: UObject, ResourceName: string): FractureUniformSettings;
	static GetDefaultObject(): FractureUniformSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureUniformSettings;
	static C(Other: UObject | any): FractureUniformSettings;
}

declare class FractureToolUniform extends FractureToolVoronoiBase { 
	Settings: FractureUniformSettings;
	static Load(ResourceName: string): FractureToolUniform;
	static Find(Outer: UObject, ResourceName: string): FractureToolUniform;
	static GetDefaultObject(): FractureToolUniform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolUniform;
	static C(Other: UObject | any): FractureToolUniform;
}

declare class ActorFactoryChaosSolver extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryChaosSolver;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryChaosSolver;
	static GetDefaultObject(): ActorFactoryChaosSolver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryChaosSolver;
	static C(Other: UObject | any): ActorFactoryChaosSolver;
}

declare class ChaosSolverFactory extends Factory { 
	static Load(ResourceName: string): ChaosSolverFactory;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverFactory;
	static GetDefaultObject(): ChaosSolverFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverFactory;
	static C(Other: UObject | any): ChaosSolverFactory;
}

declare type EDataSourceTypeEnum = 'ChaosNiagara_DataSourceType_Collision' | 'ChaosNiagara_DataSourceType_Breaking' | 'ChaosNiagara_DataSourceType_Trailing' | 'ChaosNiagara_Max';
declare var EDataSourceTypeEnum : { ChaosNiagara_DataSourceType_Collision:'ChaosNiagara_DataSourceType_Collision',ChaosNiagara_DataSourceType_Breaking:'ChaosNiagara_DataSourceType_Breaking',ChaosNiagara_DataSourceType_Trailing:'ChaosNiagara_DataSourceType_Trailing',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationFilteringModeEnum = 'ChaosNiagara_LocationFilteringMode_Inclusive' | 'ChaosNiagara_LocationFilteringMode_Exclusive' | 'ChaosNiagara_Max';
declare var ELocationFilteringModeEnum : { ChaosNiagara_LocationFilteringMode_Inclusive:'ChaosNiagara_LocationFilteringMode_Inclusive',ChaosNiagara_LocationFilteringMode_Exclusive:'ChaosNiagara_LocationFilteringMode_Exclusive',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationXToSpawnEnum = 'ChaosNiagara_LocationXToSpawn_None' | 'ChaosNiagara_LocationXToSpawn_Min' | 'ChaosNiagara_LocationXToSpawn_Max' | 'ChaosNiagara_LocationXToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationXToSpawnEnum : { ChaosNiagara_LocationXToSpawn_None:'ChaosNiagara_LocationXToSpawn_None',ChaosNiagara_LocationXToSpawn_Min:'ChaosNiagara_LocationXToSpawn_Min',ChaosNiagara_LocationXToSpawn_Max:'ChaosNiagara_LocationXToSpawn_Max',ChaosNiagara_LocationXToSpawn_MinMax:'ChaosNiagara_LocationXToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationYToSpawnEnum = 'ChaosNiagara_LocationYToSpawn_None' | 'ChaosNiagara_LocationYToSpawn_Min' | 'ChaosNiagara_LocationYToSpawn_Max' | 'ChaosNiagara_LocationYToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationYToSpawnEnum : { ChaosNiagara_LocationYToSpawn_None:'ChaosNiagara_LocationYToSpawn_None',ChaosNiagara_LocationYToSpawn_Min:'ChaosNiagara_LocationYToSpawn_Min',ChaosNiagara_LocationYToSpawn_Max:'ChaosNiagara_LocationYToSpawn_Max',ChaosNiagara_LocationYToSpawn_MinMax:'ChaosNiagara_LocationYToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationZToSpawnEnum = 'ChaosNiagara_LocationZToSpawn_None' | 'ChaosNiagara_LocationZToSpawn_Min' | 'ChaosNiagara_LocationZToSpawn_Max' | 'ChaosNiagara_LocationZToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationZToSpawnEnum : { ChaosNiagara_LocationZToSpawn_None:'ChaosNiagara_LocationZToSpawn_None',ChaosNiagara_LocationZToSpawn_Min:'ChaosNiagara_LocationZToSpawn_Min',ChaosNiagara_LocationZToSpawn_Max:'ChaosNiagara_LocationZToSpawn_Max',ChaosNiagara_LocationZToSpawn_MinMax:'ChaosNiagara_LocationZToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDataSortTypeEnum = 'ChaosNiagara_DataSortType_NoSorting' | 'ChaosNiagara_DataSortType_RandomShuffle' | 'ChaosNiagara_DataSortType_SortByMassMaxToMin' | 'ChaosNiagara_DataSortType_SortByMassMinToMax' | 'ChaosNiagara_Max';
declare var EDataSortTypeEnum : { ChaosNiagara_DataSortType_NoSorting:'ChaosNiagara_DataSortType_NoSorting',ChaosNiagara_DataSortType_RandomShuffle:'ChaosNiagara_DataSortType_RandomShuffle',ChaosNiagara_DataSortType_SortByMassMaxToMin:'ChaosNiagara_DataSortType_SortByMassMaxToMin',ChaosNiagara_DataSortType_SortByMassMinToMax:'ChaosNiagara_DataSortType_SortByMassMinToMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ERandomVelocityGenerationTypeEnum = 'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution' | 'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers' | 'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased' | 'ChaosNiagara_Max';
declare var ERandomVelocityGenerationTypeEnum : { ChaosNiagara_RandomVelocityGenerationType_RandomDistribution:'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution',ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers:'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers',ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased:'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDebugTypeEnum = 'ChaosNiagara_DebugType_NoDebug' | 'ChaosNiagara_DebugType_ColorBySolver' | 'ChaosNiagara_DebugType_ColorByParticleIndex' | 'ChaosNiagara_Max';
declare var EDebugTypeEnum : { ChaosNiagara_DebugType_NoDebug:'ChaosNiagara_DebugType_NoDebug',ChaosNiagara_DebugType_ColorBySolver:'ChaosNiagara_DebugType_ColorBySolver',ChaosNiagara_DebugType_ColorByParticleIndex:'ChaosNiagara_DebugType_ColorByParticleIndex',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare class NiagaraDataInterfaceChaosDestruction extends NiagaraDataInterface { 
	ChaosSolverActorSet: any;
	DataSourceType: EDataSourceTypeEnum;
	DataProcessFrequency: number;
	MaxNumberOfDataEntriesToSpawn: number;
	DoSpawn: boolean;
	SpawnMultiplierMinMax: Vector2D;
	SpawnChance: number;
	ImpulseToSpawnMinMax: Vector2D;
	SpeedToSpawnMinMax: Vector2D;
	MassToSpawnMinMax: Vector2D;
	ExtentMinToSpawnMinMax: Vector2D;
	ExtentMaxToSpawnMinMax: Vector2D;
	VolumeToSpawnMinMax: Vector2D;
	SolverTimeToSpawnMinMax: Vector2D;
	SurfaceTypeToSpawn: number;
	LocationFilteringMode: ELocationFilteringModeEnum;
	LocationXToSpawn: ELocationXToSpawnEnum;
	LocationXToSpawnMinMax: Vector2D;
	LocationYToSpawn: ELocationYToSpawnEnum;
	LocationYToSpawnMinMax: Vector2D;
	LocationZToSpawn: ELocationZToSpawnEnum;
	LocationZToSpawnMinMax: Vector2D;
	DataSortingType: EDataSortTypeEnum;
	bGetExternalCollisionData: boolean;
	DoSpatialHash: boolean;
	SpatialHashVolumeMin: Vector;
	SpatialHashVolumeMax: Vector;
	SpatialHashVolumeCellSize: Vector;
	MaxDataPerCell: number;
	bApplyMaterialsFilter: boolean;
	ChaosBreakingMaterialSet: any;
	bGetExternalBreakingData: boolean;
	bGetExternalTrailingData: boolean;
	RandomPositionMagnitudeMinMax: Vector2D;
	InheritedVelocityMultiplier: number;
	RandomVelocityGenerationType: ERandomVelocityGenerationTypeEnum;
	RandomVelocityMagnitudeMinMax: Vector2D;
	SpreadAngleMax: number;
	VelocityOffsetMin: Vector;
	VelocityOffsetMax: Vector;
	FinalVelocityMagnitudeMinMax: Vector2D;
	MaxLatency: number;
	DebugType: EDebugTypeEnum;
	LastSpawnedPointID: number;
	LastSpawnTime: number;
	SolverTime: number;
	TimeStampOfLastProcessedData: number;
	static Load(ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static GetDefaultObject(): NiagaraDataInterfaceChaosDestruction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceChaosDestruction;
	static C(Other: UObject | any): NiagaraDataInterfaceChaosDestruction;
}

declare class NiagaraDataInterfaceFieldSystem extends NiagaraDataInterface { 
	BlueprintSource: Blueprint;
	SourceActor: Actor;
	FieldDimensions: IntVector;
	MinBounds: Vector;
	MaxBounds: Vector;
	static Load(ResourceName: string): NiagaraDataInterfaceFieldSystem;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceFieldSystem;
	static GetDefaultObject(): NiagaraDataInterfaceFieldSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceFieldSystem;
	static C(Other: UObject | any): NiagaraDataInterfaceFieldSystem;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCacheAsset: GeometryCache;
	FirstLoopStartFrameOffset: FrameNumber;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	bReverse: boolean;
	StartOffset: number;
	EndOffset: number;
	GeometryCache: SoftObjectPath;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class MovieSceneGeometryCollectionParams { 
	GeometryCollectionCache: SoftObjectPath;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	clone() : MovieSceneGeometryCollectionParams;
	static C(Other: UObject | any): MovieSceneGeometryCollectionParams;
}

declare class MovieSceneGeometryCollectionSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCollectionParams;
	static Load(ResourceName: string): MovieSceneGeometryCollectionSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionSection;
	static GetDefaultObject(): MovieSceneGeometryCollectionSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionSection;
	static C(Other: UObject | any): MovieSceneGeometryCollectionSection;
}

declare class MovieSceneGeometryCollectionTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCollectionTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionTrack;
	static GetDefaultObject(): MovieSceneGeometryCollectionTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionTrack;
	static C(Other: UObject | any): MovieSceneGeometryCollectionTrack;
}

declare class GrainTableEntry { 
	SampleIndex: number;
	RPM: number;
	AnalysisSampleIndex: number;
	clone() : GrainTableEntry;
	static C(Other: UObject | any): GrainTableEntry;
}

declare class MotoSynthSource extends UObject { 
	SoundWaveSource: SoundWave;
	bConvertTo8Bit: boolean;
	DownSampleFactor: number;
	RPMCurve: RuntimeFloatCurve;
	RPMSynthVolume: number;
	bEnableFilteringForAnalysis: boolean;
	LowPassFilterFrequency: number;
	HighPassFilterFrequency: number;
	bEnableDynamicsProcessorForAnalysis: boolean;
	DynamicsProcessorLookahead: number;
	DynamicsProcessorInputGainDb: number;
	DynamicsProcessorRatio: number;
	DynamicsKneeBandwidth: number;
	DynamicsProcessorThreshold: number;
	DynamicsProcessorAttackTimeMsec: number;
	DynamicsProcessorReleaseTimeMsec: number;
	bEnableNormalizationForAnalysis: boolean;
	SampleShiftOffset: number;
	RPMCycleCalibrationSample: number;
	RPMFirstCycleSampleEnd: number;
	RPMEstimationOctaveOffset: number;
	bWriteAnalysisInputToFile: boolean;
	AnalysisInputFilePath: string;
	SourceData: number[];
	SourceDataPCM: any[];
	SourceSampleRate: number;
	GrainTable: GrainTableEntry[];
	static Load(ResourceName: string): MotoSynthSource;
	static Find(Outer: UObject, ResourceName: string): MotoSynthSource;
	static GetDefaultObject(): MotoSynthSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotoSynthSource;
	StopToneMatch(): void;
	PlayToneMatch(): void;
	PerformGrainTableAnalysis(): void;
	static C(Other: UObject | any): MotoSynthSource;
}

declare class MotoSynthRuntimeSettings { 
	bSynthToneEnabled: boolean;
	SynthToneVolume: number;
	SynthToneFilterFrequency: number;
	SynthOctaveShift: number;
	bGranularEngineEnabled: boolean;
	GranularEngineVolume: number;
	GranularEnginePitchScale: number;
	NumSamplesToCrossfadeBetweenGrains: number;
	NumGrainTableEntriesPerGrain: number;
	GrainTableRandomOffsetForConstantRPMs: number;
	GrainCrossfadeSamplesForConstantRPMs: number;
	AccelerationSource: MotoSynthSource;
	DecelerationSource: MotoSynthSource;
	bStereoWidenerEnabled: boolean;
	StereoDelayMsec: number;
	StereoFeedback: number;
	StereoWidenerWetlevel: number;
	StereoWidenerDryLevel: number;
	StereoWidenerDelayRatio: number;
	bStereoWidenerFilterEnabled: boolean;
	StereoWidenerFilterFrequency: number;
	StereoWidenerFilterQ: number;
	clone() : MotoSynthRuntimeSettings;
	static C(Other: UObject | any): MotoSynthRuntimeSettings;
}

declare class MotoSynthPreset extends UObject { 
	EnginePreviewRPMCurve: RuntimeFloatCurve;
	Settings: MotoSynthRuntimeSettings;
	static Load(ResourceName: string): MotoSynthPreset;
	static Find(Outer: UObject, ResourceName: string): MotoSynthPreset;
	static GetDefaultObject(): MotoSynthPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotoSynthPreset;
	StopEnginePreview(): void;
	StartEnginePreview(): void;
	DumpRuntimeMemoryUsage(): void;
	static C(Other: UObject | any): MotoSynthPreset;
}

declare class SynthComponentMoto extends SynthComponent { 
	MotoSynthPreset: MotoSynthPreset;
	RPM: number;
	static Load(ResourceName: string): SynthComponentMoto;
	static Find(Outer: UObject, ResourceName: string): SynthComponentMoto;
	static GetDefaultObject(): SynthComponentMoto;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthComponentMoto;
	SetSettings(InSettings: MotoSynthRuntimeSettings): void;
	SetRPM(InRPM: number,InTimeSec: number): void;
	IsEnabled(): boolean;
	GetRPMRange(OutMinRPM?: number,OutMaxRPM?: number): {OutMinRPM: number, OutMaxRPM: number};
	static C(Other: UObject | any): SynthComponentMoto;
}

declare class MotoSynthPresetFactory extends Factory { 
	static Load(ResourceName: string): MotoSynthPresetFactory;
	static Find(Outer: UObject, ResourceName: string): MotoSynthPresetFactory;
	static GetDefaultObject(): MotoSynthPresetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotoSynthPresetFactory;
	static C(Other: UObject | any): MotoSynthPresetFactory;
}

declare class MotoSynthSourceFactory extends Factory { 
	static Load(ResourceName: string): MotoSynthSourceFactory;
	static Find(Outer: UObject, ResourceName: string): MotoSynthSourceFactory;
	static GetDefaultObject(): MotoSynthSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotoSynthSourceFactory;
	static C(Other: UObject | any): MotoSynthSourceFactory;
}

declare class MagicLeapAudioFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapAudioFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioFunctionLibrary;
	static GetDefaultObject(): MagicLeapAudioFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioFunctionLibrary;
	static SetMicMute(IsMuted: boolean): boolean;
	static IsMicMuted(): boolean;
	static C(Other: UObject | any): MagicLeapAudioFunctionLibrary;
}

declare class MagicLeapSharedWorldSharedData { 
	PinIDs: Guid[];
	clone() : MagicLeapSharedWorldSharedData;
	static C(Other: UObject | any): MagicLeapSharedWorldSharedData;
}

declare class MagicLeapSharedWorldPinData { 
	PinId: Guid;
	PinState: MagicLeapARPinState;
	clone() : MagicLeapSharedWorldPinData;
	static C(Other: UObject | any): MagicLeapSharedWorldPinData;
}

declare class MagicLeapSharedWorldLocalData { 
	LocalPins: MagicLeapSharedWorldPinData[];
	clone() : MagicLeapSharedWorldLocalData;
	static C(Other: UObject | any): MagicLeapSharedWorldLocalData;
}

declare class MagicLeapSharedWorldAlignmentTransforms { 
	AlignmentTransforms: Transform[];
	clone() : MagicLeapSharedWorldAlignmentTransforms;
	static C(Other: UObject | any): MagicLeapSharedWorldAlignmentTransforms;
}

declare class MagicLeapSharedWorldPlayerController extends PlayerController { 
	static GetDefaultObject(): MagicLeapSharedWorldPlayerController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSharedWorldPlayerController;
	ServerSetLocalWorldData(LocalWorldReplicationData: MagicLeapSharedWorldLocalData): void;
	ServerSetAlignmentTransforms(InAlignmentTransforms: MagicLeapSharedWorldAlignmentTransforms): void;
	IsChosenOne(): boolean;
	ClientSetChosenOne(bChosenOne: boolean): void;
	ClientMarkReadyForSendingLocalData(): void;
	CanSendLocalDataToServer(): boolean;
	static C(Other: UObject | any): MagicLeapSharedWorldPlayerController;
}

declare class MagicLeapSharedWorldGameMode extends GameMode { 
	SharedWorldData: MagicLeapSharedWorldSharedData;
	OnNewLocalDataFromClients: UnrealEngineMulticastDelegate<() => void>;
	PinSelectionConfidenceThreshold: number;
	ChosenOne: MagicLeapSharedWorldPlayerController;
	static GetDefaultObject(): MagicLeapSharedWorldGameMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSharedWorldGameMode;
	SendSharedWorldDataToClients(): boolean;
	SelectChosenOne(): void;
	DetermineSharedWorldData(NewSharedWorldData?: MagicLeapSharedWorldSharedData): {NewSharedWorldData: MagicLeapSharedWorldSharedData};
	static C(Other: UObject | any): MagicLeapSharedWorldGameMode;
}

declare class MagicLeapSharedWorldGameState extends GameState { 
	SharedWorldData: MagicLeapSharedWorldSharedData;
	AlignmentTransforms: MagicLeapSharedWorldAlignmentTransforms;
	OnSharedWorldDataUpdated: UnrealEngineMulticastDelegate<() => void>;
	OnAlignmentTransformsUpdated: UnrealEngineMulticastDelegate<() => void>;
	static GetDefaultObject(): MagicLeapSharedWorldGameState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSharedWorldGameState;
	OnReplicate_SharedWorldData(): void;
	OnReplicate_AlignmentTransforms(): void;
	CalculateXRCameraRootTransform(): Transform;
	static C(Other: UObject | any): MagicLeapSharedWorldGameState;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	GlobalCacheSizeGB: number;
	UseGlobalCache: boolean;
	ExrDecoderThreads: any;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSource extends BaseMediaSource { 
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetSequencePath(Path: string): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	static C(Other: UObject | any): ImgMediaSource;
}

declare class MovieSceneMediaPlayerPropertySection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLoop: boolean;
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertySection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertySection;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertySection;
}

declare class MovieSceneMediaPlayerPropertyTrack extends MovieScenePropertyTrack { 
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertyTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertyTrack;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertyTrack;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	StartFrameOffset: FrameNumber;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class TemplateSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	BoundActorClass: Class;
	BoundPreviewActor: Actor;
	BoundActorComponents: any;
	static Load(ResourceName: string): TemplateSequence;
	static Find(Outer: UObject, ResourceName: string): TemplateSequence;
	static GetDefaultObject(): TemplateSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequence;
	static C(Other: UObject | any): TemplateSequence;
}

declare class CameraAnimationSequence extends TemplateSequence { 
	static Load(ResourceName: string): CameraAnimationSequence;
	static Find(Outer: UObject, ResourceName: string): CameraAnimationSequence;
	static GetDefaultObject(): CameraAnimationSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CameraAnimationSequence;
	static C(Other: UObject | any): CameraAnimationSequence;
}

declare class SequenceCameraShakeCameraStandIn extends UObject { 
	FieldOfView: number;
	static Load(ResourceName: string): SequenceCameraShakeCameraStandIn;
	static Find(Outer: UObject, ResourceName: string): SequenceCameraShakeCameraStandIn;
	static GetDefaultObject(): SequenceCameraShakeCameraStandIn;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequenceCameraShakeCameraStandIn;
	static C(Other: UObject | any): SequenceCameraShakeCameraStandIn;
}

declare class SequenceCameraShakeSequencePlayer extends UObject { 
	BoundObjectOverride: UObject;
	Sequence: MovieSceneSequence;
	RootTemplateInstance: MovieSceneRootEvaluationTemplateInstance;
	static Load(ResourceName: string): SequenceCameraShakeSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): SequenceCameraShakeSequencePlayer;
	static GetDefaultObject(): SequenceCameraShakeSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequenceCameraShakeSequencePlayer;
	static C(Other: UObject | any): SequenceCameraShakeSequencePlayer;
}

declare class SequenceCameraShake extends CameraShakeBase { 
	Sequence: CameraAnimationSequence;
	PlayRate: number;
	Scale: number;
	BlendInTime: number;
	BlendOutTime: number;
	RandomSegmentDuration: number;
	bRandomSegment: boolean;
	Player: SequenceCameraShakeSequencePlayer;
	CameraStandIn: SequenceCameraShakeCameraStandIn;
	static Load(ResourceName: string): SequenceCameraShake;
	static Find(Outer: UObject, ResourceName: string): SequenceCameraShake;
	static GetDefaultObject(): SequenceCameraShake;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequenceCameraShake;
	static C(Other: UObject | any): SequenceCameraShake;
}

declare class TemplateSequencePlayer extends MovieSceneSequencePlayer { 
	static Load(ResourceName: string): TemplateSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): TemplateSequencePlayer;
	static GetDefaultObject(): TemplateSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequencePlayer;
	static CreateTemplateSequencePlayer(WorldContextObject: UObject,TemplateSequence: TemplateSequence,Settings: MovieSceneSequencePlaybackSettings,OutActor?: TemplateSequenceActor): {OutActor: TemplateSequenceActor, $: TemplateSequencePlayer};
	static C(Other: UObject | any): TemplateSequencePlayer;
}

declare class TemplateSequenceBindingOverrideData { 
	UObject: any;
	bOverridesDefault: boolean;
	clone() : TemplateSequenceBindingOverrideData;
	static C(Other: UObject | any): TemplateSequenceBindingOverrideData;
}

declare class TemplateSequenceActor extends Actor { 
	PlaybackSettings: MovieSceneSequencePlaybackSettings;
	SequencePlayer: TemplateSequencePlayer;
	TemplateSequence: SoftObjectPath;
	BindingOverride: TemplateSequenceBindingOverrideData;
	static GetDefaultObject(): TemplateSequenceActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequenceActor;
	SetSequence(InSequence: TemplateSequence): void;
	SetBinding(Actor: Actor): void;
	LoadSequence(): TemplateSequence;
	GetSequencePlayer(): TemplateSequencePlayer;
	GetSequence(): TemplateSequence;
	static C(Other: UObject | any): TemplateSequenceActor;
}

declare class TemplateSequenceSection extends MovieSceneSubSection { 
	static Load(ResourceName: string): TemplateSequenceSection;
	static Find(Outer: UObject, ResourceName: string): TemplateSequenceSection;
	static GetDefaultObject(): TemplateSequenceSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequenceSection;
	static C(Other: UObject | any): TemplateSequenceSection;
}

declare class TemplateSequenceSystem extends MovieSceneEntitySystem { 
	static Load(ResourceName: string): TemplateSequenceSystem;
	static Find(Outer: UObject, ResourceName: string): TemplateSequenceSystem;
	static GetDefaultObject(): TemplateSequenceSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequenceSystem;
	static C(Other: UObject | any): TemplateSequenceSystem;
}

declare class TemplateSequenceTrack extends MovieSceneSubTrack { 
	static Load(ResourceName: string): TemplateSequenceTrack;
	static Find(Outer: UObject, ResourceName: string): TemplateSequenceTrack;
	static GetDefaultObject(): TemplateSequenceTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TemplateSequenceTrack;
	static C(Other: UObject | any): TemplateSequenceTrack;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static RemoveActorFromLayer(InActor: Actor,Layer: ActorLayer): void;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static AddActorToLayer(InActor: Actor,Layer: ActorLayer): void;
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'LeftMirrored' | 'RightMirrored' | 'DownMirrored' | 'UpMirrored' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',LeftMirrored:'LeftMirrored',RightMirrored:'RightMirrored',DownMirrored:'DownMirrored',UpMirrored:'UpMirrored',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	ConversionResult: AppleImageUtilsImageConversionResult;
	static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToTIFF(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToPNG(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToJPEG(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToHEIF(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
}

declare class K2Node_ConvertToJPEG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToJPEG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
	static GetDefaultObject(): K2Node_ConvertToJPEG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToJPEG;
	static C(Other: UObject | any): K2Node_ConvertToJPEG;
}

declare class K2Node_ConvertToHEIF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToHEIF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
	static GetDefaultObject(): K2Node_ConvertToHEIF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToHEIF;
	static C(Other: UObject | any): K2Node_ConvertToHEIF;
}

declare class K2Node_ConvertToTIFF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToTIFF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
	static GetDefaultObject(): K2Node_ConvertToTIFF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToTIFF;
	static C(Other: UObject | any): K2Node_ConvertToTIFF;
}

declare class K2Node_ConvertToPNG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToPNG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
	static GetDefaultObject(): K2Node_ConvertToPNG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToPNG;
	static C(Other: UObject | any): K2Node_ConvertToPNG;
}

declare type ECollectionScriptingShareType = 'Local' | 'Private' | 'Shared' | 'ECollectionScriptingShareType_MAX';
declare var ECollectionScriptingShareType : { Local:'Local',Private:'Private',Shared:'Shared',ECollectionScriptingShareType_MAX:'ECollectionScriptingShareType_MAX', };
declare class AssetTagsSubsystem extends EngineSubsystem { 
	static Load(ResourceName: string): AssetTagsSubsystem;
	static Find(Outer: UObject, ResourceName: string): AssetTagsSubsystem;
	static GetDefaultObject(): AssetTagsSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTagsSubsystem;
	ReparentCollection(Name: string,NewParentName: string): boolean;
	RenameCollection(Name: string,NewName: string): boolean;
	RemoveAssetsFromCollection(Name: string,AssetPathNames: string[]): boolean;
	RemoveAssetPtrsFromCollection(Name: string,AssetPtrs: UObject[]): boolean;
	RemoveAssetPtrFromCollection(Name: string,AssetPtr: UObject): boolean;
	RemoveAssetFromCollection(Name: string,AssetPathName: string): boolean;
	RemoveAssetDatasFromCollection(Name: string,AssetDatas: AssetData[]): boolean;
	RemoveAssetDataFromCollection(Name: string,AssetData: AssetData): boolean;
	GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
	GetCollectionsContainingAssetData(AssetData: AssetData): string[];
	GetCollectionsContainingAsset(AssetPathName: string): string[];
	GetCollections(): string[];
	GetAssetsInCollection(Name: string): AssetData[];
	EmptyCollection(Name: string): boolean;
	DestroyCollection(Name: string): boolean;
	CreateCollection(Name: string,ShareType: ECollectionScriptingShareType): boolean;
	CollectionExists(Name: string): boolean;
	AddAssetToCollection(Name: string,AssetPathName: string): boolean;
	AddAssetsToCollection(Name: string,AssetPathNames: string[]): boolean;
	AddAssetPtrToCollection(Name: string,AssetPtr: UObject): boolean;
	AddAssetPtrsToCollection(Name: string,AssetPtrs: UObject[]): boolean;
	AddAssetDataToCollection(Name: string,AssetData: AssetData): boolean;
	AddAssetDatasToCollection(Name: string,AssetDatas: AssetData[]): boolean;
	static C(Other: UObject | any): AssetTagsSubsystem;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare class AudioCaptureDeviceInfo { 
	DeviceName: string;
	NumInputChannels: number;
	SampleRate: number;
	clone() : AudioCaptureDeviceInfo;
	static C(Other: UObject | any): AudioCaptureDeviceInfo;
}

declare class AudioCapture extends AudioGenerator { 
	static Load(ResourceName: string): AudioCapture;
	static Find(Outer: UObject, ResourceName: string): AudioCapture;
	static GetDefaultObject(): AudioCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCapture;
	StopCapturingAudio(): void;
	StartCapturingAudio(): void;
	IsCapturingAudio(): boolean;
	GetAudioCaptureDeviceInfo(OutInfo?: AudioCaptureDeviceInfo): {OutInfo: AudioCaptureDeviceInfo, $: boolean};
	static C(Other: UObject | any): AudioCapture;
}

declare class AudioCaptureFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureFunctionLibrary;
	static GetDefaultObject(): AudioCaptureFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureFunctionLibrary;
	static CreateAudioCapture(): AudioCapture;
	static C(Other: UObject | any): AudioCaptureFunctionLibrary;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	PathToComponent: string;
	clone() : ComponentReference;
	static C(Other: UObject | any): ComponentReference;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bUseSubstepping: boolean;
	bSkipCableUpdateWhenNotVisible: boolean;
	bSkipCableUpdateWhenNotOwnerRecentlyRendered: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndToComponent(Component: SceneComponent,SocketName: string): void;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
}

declare class EditableMeshAdapter extends UObject { 
	static Load(ResourceName: string): EditableMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableMeshAdapter;
	static GetDefaultObject(): EditableMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshAdapter;
	static C(Other: UObject | any): EditableMeshAdapter;
}

declare class EditableGeometryCollectionAdapter extends EditableMeshAdapter { 
	GeometryCollection: GeometryCollection;
	OriginalGeometryCollection: GeometryCollection;
	GeometryCollectionLODIndex: number;
	static Load(ResourceName: string): EditableGeometryCollectionAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableGeometryCollectionAdapter;
	static GetDefaultObject(): EditableGeometryCollectionAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableGeometryCollectionAdapter;
	static C(Other: UObject | any): EditableGeometryCollectionAdapter;
}

declare type ETriangleTessellationMode = 'ThreeTriangles' | 'FourTriangles' | 'ETriangleTessellationMode_MAX';
declare var ETriangleTessellationMode : { ThreeTriangles:'ThreeTriangles',FourTriangles:'FourTriangles',ETriangleTessellationMode_MAX:'ETriangleTessellationMode_MAX', };
declare type EMeshModificationType = 'FirstInterim' | 'Interim' | 'Final' | 'EMeshModificationType_MAX';
declare var EMeshModificationType : { FirstInterim:'FirstInterim',Interim:'Interim',Final:'Final',EMeshModificationType_MAX:'EMeshModificationType_MAX', };
declare type EMeshTopologyChange = 'NoTopologyChange' | 'TopologyChange' | 'EMeshTopologyChange_MAX';
declare var EMeshTopologyChange : { NoTopologyChange:'NoTopologyChange',TopologyChange:'TopologyChange',EMeshTopologyChange_MAX:'EMeshTopologyChange_MAX', };
declare class VertexPair { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	clone() : VertexPair;
	static C(Other: UObject | any): VertexPair;
}

declare class PolygonToSplit { 
	PolygonID: PolygonID;
	VertexPairsToSplitAt: VertexPair[];
	clone() : PolygonToSplit;
	static C(Other: UObject | any): PolygonToSplit;
}

declare class MeshElementAttributeValue { 
	clone() : MeshElementAttributeValue;
	static C(Other: UObject | any): MeshElementAttributeValue;
}

declare class MeshElementAttributeData { 
	AttributeName: string;
	AttributeIndex: number;
	AttributeValue: MeshElementAttributeValue;
	clone() : MeshElementAttributeData;
	static C(Other: UObject | any): MeshElementAttributeData;
}

declare class MeshElementAttributeList { 
	Attributes: MeshElementAttributeData[];
	clone() : MeshElementAttributeList;
	static C(Other: UObject | any): MeshElementAttributeList;
}

declare class AttributesForVertex { 
	VertexID: VertexID;
	VertexAttributes: MeshElementAttributeList;
	clone() : AttributesForVertex;
	static C(Other: UObject | any): AttributesForVertex;
}

declare class AttributesForVertexInstance { 
	VertexInstanceID: VertexInstanceID;
	VertexInstanceAttributes: MeshElementAttributeList;
	clone() : AttributesForVertexInstance;
	static C(Other: UObject | any): AttributesForVertexInstance;
}

declare class VertexAttributesForPolygonHole { 
	VertexAttributeList: MeshElementAttributeList[];
	clone() : VertexAttributesForPolygonHole;
	static C(Other: UObject | any): VertexAttributesForPolygonHole;
}

declare class VertexAttributesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexAttributeLists: MeshElementAttributeList[];
	VertexAttributeListsForEachHole: VertexAttributesForPolygonHole[];
	clone() : VertexAttributesForPolygon;
	static C(Other: UObject | any): VertexAttributesForPolygon;
}

declare class AttributesForEdge { 
	EdgeID: EdgeID;
	EdgeAttributes: MeshElementAttributeList;
	clone() : AttributesForEdge;
	static C(Other: UObject | any): AttributesForEdge;
}

declare class VertexToMove { 
	VertexID: VertexID;
	NewVertexPosition: Vector;
	clone() : VertexToMove;
	static C(Other: UObject | any): VertexToMove;
}

declare type EInsetPolygonsMode = 'All' | 'CenterPolygonOnly' | 'SidePolygonsOnly' | 'EInsetPolygonsMode_MAX';
declare var EInsetPolygonsMode : { All:'All',CenterPolygonOnly:'CenterPolygonOnly',SidePolygonsOnly:'SidePolygonsOnly',EInsetPolygonsMode_MAX:'EInsetPolygonsMode_MAX', };
declare class SubdividedQuadVertex { 
	VertexPositionIndex: number;
	TextureCoordinate0: Vector2D;
	TextureCoordinate1: Vector2D;
	VertexColor: Color;
	VertexNormal: Vector;
	VertexTangent: Vector;
	VertexBinormalSign: number;
	clone() : SubdividedQuadVertex;
	static C(Other: UObject | any): SubdividedQuadVertex;
}

declare class SubdividedQuad { 
	QuadVertex0: SubdividedQuadVertex;
	QuadVertex1: SubdividedQuadVertex;
	QuadVertex2: SubdividedQuadVertex;
	QuadVertex3: SubdividedQuadVertex;
	clone() : SubdividedQuad;
	static C(Other: UObject | any): SubdividedQuad;
}

declare class SubdivisionLimitSection { 
	SubdividedQuads: SubdividedQuad[];
	clone() : SubdivisionLimitSection;
	static C(Other: UObject | any): SubdivisionLimitSection;
}

declare class SubdividedWireEdge { 
	EdgeVertex0PositionIndex: number;
	EdgeVertex1PositionIndex: number;
	clone() : SubdividedWireEdge;
	static C(Other: UObject | any): SubdividedWireEdge;
}

declare class SubdivisionLimitData { 
	VertexPositions: Vector[];
	Sections: SubdivisionLimitSection[];
	SubdividedWireEdges: SubdividedWireEdge[];
	clone() : SubdivisionLimitData;
	static C(Other: UObject | any): SubdivisionLimitData;
}

declare class VertexToCreate { 
	VertexAttributes: MeshElementAttributeList;
	OriginalVertexID: VertexID;
	clone() : VertexToCreate;
	static C(Other: UObject | any): VertexToCreate;
}

declare class VertexInstanceToCreate { 
	VertexID: VertexID;
	VertexInstanceAttributes: MeshElementAttributeList;
	OriginalVertexInstanceID: VertexInstanceID;
	clone() : VertexInstanceToCreate;
	static C(Other: UObject | any): VertexInstanceToCreate;
}

declare class VertexAndAttributes { 
	VertexInstanceID: VertexInstanceID;
	VertexID: VertexID;
	PolygonVertexAttributes: MeshElementAttributeList;
	clone() : VertexAndAttributes;
	static C(Other: UObject | any): VertexAndAttributes;
}

declare type EPolygonEdgeHardness = 'NewEdgesSoft' | 'NewEdgesHard' | 'AllEdgesSoft' | 'AllEdgesHard' | 'EPolygonEdgeHardness_MAX';
declare var EPolygonEdgeHardness : { NewEdgesSoft:'NewEdgesSoft',NewEdgesHard:'NewEdgesHard',AllEdgesSoft:'AllEdgesSoft',AllEdgesHard:'AllEdgesHard',EPolygonEdgeHardness_MAX:'EPolygonEdgeHardness_MAX', };
declare class PolygonToCreate { 
	PolygonGroupID: PolygonGroupID;
	PerimeterVertices: VertexAndAttributes[];
	OriginalPolygonID: PolygonID;
	PolygonEdgeHardness: EPolygonEdgeHardness;
	clone() : PolygonToCreate;
	static C(Other: UObject | any): PolygonToCreate;
}

declare class PolygonGroupToCreate { 
	PolygonGroupAttributes: MeshElementAttributeList;
	OriginalPolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupToCreate;
	static C(Other: UObject | any): PolygonGroupToCreate;
}

declare class EdgeToCreate { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	EdgeAttributes: MeshElementAttributeList;
	OriginalEdgeID: EdgeID;
	clone() : EdgeToCreate;
	static C(Other: UObject | any): EdgeToCreate;
}

declare class VertexIndexAndInstanceID { 
	ContourIndex: number;
	VertexInstanceID: VertexInstanceID;
	clone() : VertexIndexAndInstanceID;
	static C(Other: UObject | any): VertexIndexAndInstanceID;
}

declare class VertexInstancesForPolygonHole { 
	VertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	clone() : VertexInstancesForPolygonHole;
	static C(Other: UObject | any): VertexInstancesForPolygonHole;
}

declare class ChangeVertexInstancesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	VertexIndicesAndInstanceIDsForEachHole: VertexInstancesForPolygonHole[];
	clone() : ChangeVertexInstancesForPolygon;
	static C(Other: UObject | any): ChangeVertexInstancesForPolygon;
}

declare class PolygonGroupForPolygon { 
	PolygonID: PolygonID;
	PolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupForPolygon;
	static C(Other: UObject | any): PolygonGroupForPolygon;
}

declare class EditableMesh extends UObject { 
	Adapters: EditableMeshAdapter[];
	TextureCoordinateCount: number;
	PendingCompactCounter: number;
	SubdivisionCount: number;
	static Load(ResourceName: string): EditableMesh;
	static Find(Outer: UObject, ResourceName: string): EditableMesh;
	static GetDefaultObject(): EditableMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMesh;
	WeldVertices(VertexIDs: VertexID[],OutNewVertexID?: VertexID): {OutNewVertexID: VertexID};
	TryToRemoveVertex(VertexID: VertexID,bOutWasVertexRemoved?: boolean,OutNewEdgeID?: EdgeID): {bOutWasVertexRemoved: boolean, OutNewEdgeID: EdgeID};
	TryToRemovePolygonEdge(EdgeID: EdgeID,bOutWasEdgeRemoved?: boolean,OutNewPolygonID?: PolygonID): {bOutWasEdgeRemoved: boolean, OutNewPolygonID: PolygonID};
	TriangulatePolygons(PolygonIDs: PolygonID[],OutNewTrianglePolygons?: PolygonID[]): {OutNewTrianglePolygons: PolygonID[]};
	TessellatePolygons(PolygonIDs: PolygonID[],TriangleTessellationMode: ETriangleTessellationMode,OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	StartModification(MeshModificationType: EMeshModificationType,MeshTopologyChange: EMeshTopologyChange): void;
	SplitPolygons(PolygonsToSplit: PolygonToSplit[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	SplitPolygonalMesh(InPlane: Plane,PolygonIDs1?: PolygonID[],PolygonIDs2?: PolygonID[],BoundaryIDs?: EdgeID[]): {PolygonIDs1: PolygonID[], PolygonIDs2: PolygonID[], BoundaryIDs: EdgeID[]};
	SplitEdge(EdgeID: EdgeID,Splits: number[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	SetVerticesCornerSharpness(VertexIDs: VertexID[],VerticesNewCornerSharpness: number[]): void;
	SetVerticesAttributes(AttributesForVertices: AttributesForVertex[]): void;
	SetVertexInstancesAttributes(AttributesForVertexInstances: AttributesForVertexInstance[]): void;
	SetTextureCoordinateCount(NumTexCoords: number): void;
	SetSubdivisionCount(NewSubdivisionCount: number): void;
	SetPolygonsVertexAttributes(VertexAttributesForPolygons: VertexAttributesForPolygon[]): void;
	SetEdgesHardnessAutomatically(EdgeIDs: EdgeID[],MaxDotProductForSoftEdge: number): void;
	SetEdgesHardness(EdgeIDs: EdgeID[],EdgesNewIsHard: boolean[]): void;
	SetEdgesCreaseSharpness(EdgeIDs: EdgeID[],EdgesNewCreaseSharpness: number[]): void;
	SetEdgesAttributes(AttributesForEdges: AttributesForEdge[]): void;
	SetAllowUndo(bInAllowUndo: boolean): void;
	SetAllowSpatialDatabase(bInAllowSpatialDatabase: boolean): void;
	SetAllowCompact(bInAllowCompact: boolean): void;
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingPlane(InPlane: Plane,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(LineSegmentStart: Vector,LineSegmentEnd: Vector,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsInVolume(planes: Plane[],OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	RevertInstance(): EditableMesh;
	Revert(): void;
	RebuildRenderMesh(): void;
	QuadrangulateMesh(OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	PropagateInstanceChanges(): void;
	MoveVertices(VerticesToMove: VertexToMove[]): void;
	static MakeVertexID(VertexIndex: number): VertexID;
	static MakePolygonID(PolygonIndex: number): PolygonID;
	static MakePolygonGroupID(PolygonGroupIndex: number): PolygonGroupID;
	static MakeEdgeID(EdgeIndex: number): EdgeID;
	IsValidVertex(VertexID: VertexID): boolean;
	IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): boolean;
	IsValidPolygon(PolygonID: PolygonID): boolean;
	IsValidEdge(EdgeID: EdgeID): boolean;
	IsUndoAllowed(): boolean;
	IsSpatialDatabaseAllowed(): boolean;
	IsPreviewingSubdivisions(): boolean;
	IsOrphanedVertex(VertexID: VertexID): boolean;
	IsCompactAllowed(): boolean;
	IsCommittedAsInstance(): boolean;
	IsCommitted(): boolean;
	IsBeingModified(): boolean;
	static InvalidVertexID(): VertexID;
	static InvalidPolygonID(): PolygonID;
	static InvalidPolygonGroupID(): PolygonGroupID;
	static InvalidEdgeID(): EdgeID;
	InsetPolygons(PolygonIDs: PolygonID[],InsetFixedDistance: number,InsetProgressTowardCenter: number,Mode: EInsetPolygonsMode,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	InsertEdgeLoop(EdgeID: EdgeID,Splits: number[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	InitializeAdapters(): void;
	GetVertexPairEdge(VertexID: VertexID,NextVertexID: VertexID,bOutEdgeWindingIsReversed?: boolean): {bOutEdgeWindingIsReversed: boolean, $: EdgeID};
	GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID;
	GetVertexInstanceCount(): number;
	GetVertexInstanceConnectedPolygons(VertexInstanceID: VertexInstanceID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexInstanceConnectedPolygonCount(VertexInstanceID: VertexInstanceID): number;
	GetVertexInstanceConnectedPolygon(VertexInstanceID: VertexInstanceID,ConnectedPolygonNumber: number): PolygonID;
	GetVertexCount(): number;
	GetVertexConnectedPolygons(VertexID: VertexID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexConnectedEdges(VertexID: VertexID,OutConnectedEdgeIDs?: EdgeID[]): {OutConnectedEdgeIDs: EdgeID[]};
	GetVertexConnectedEdgeCount(VertexID: VertexID): number;
	GetVertexConnectedEdge(VertexID: VertexID,ConnectedEdgeNumber: number): EdgeID;
	GetVertexAdjacentVertices(VertexID: VertexID,OutAdjacentVertexIDs?: VertexID[]): {OutAdjacentVertexIDs: VertexID[]};
	GetTextureCoordinateCount(): number;
	GetSubdivisionLimitData(): SubdivisionLimitData;
	GetSubdivisionCount(): number;
	GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): number;
	GetPolygonTriangulatedTriangle(PolygonID: PolygonID,PolygonTriangleNumber: number): TriangleID;
	GetPolygonPerimeterVertices(PolygonID: PolygonID,OutPolygonPerimeterVertexIDs?: VertexID[]): {OutPolygonPerimeterVertexIDs: VertexID[]};
	GetPolygonPerimeterVertexInstances(PolygonID: PolygonID,OutPolygonPerimeterVertexInstanceIDs?: VertexInstanceID[]): {OutPolygonPerimeterVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonPerimeterVertexInstance(PolygonID: PolygonID,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonPerimeterVertexCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterVertex(PolygonID: PolygonID,PolygonVertexNumber: number): VertexID;
	GetPolygonPerimeterEdges(PolygonID: PolygonID,OutPolygonPerimeterEdgeIDs?: EdgeID[]): {OutPolygonPerimeterEdgeIDs: EdgeID[]};
	GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterEdge(PolygonID: PolygonID,PerimeterEdgeNumber: number,bOutEdgeWindingIsReversedForPolygon?: boolean): {bOutEdgeWindingIsReversedForPolygon: boolean, $: EdgeID};
	GetPolygonInGroup(PolygonGroupID: PolygonGroupID,PolygonNumber: number): PolygonID;
	GetPolygonGroupCount(): number;
	GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): number;
	GetPolygonCount(): number;
	GetPolygonAdjacentPolygons(PolygonID: PolygonID,OutAdjacentPolygons?: PolygonID[]): {OutAdjacentPolygons: PolygonID[]};
	GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID;
	GetFirstValidPolygonGroup(): PolygonGroupID;
	GetEdgeVertices(EdgeID: EdgeID,OutEdgeVertexID0?: VertexID,OutEdgeVertexID1?: VertexID): {OutEdgeVertexID0: VertexID, OutEdgeVertexID1: VertexID};
	GetEdgeVertex(EdgeID: EdgeID,EdgeVertexNumber: number): VertexID;
	GetEdgeThatConnectsVertices(VertexID0: VertexID,VertexID1: VertexID): EdgeID;
	GetEdgeLoopElements(EdgeID: EdgeID,EdgeLoopIDs?: EdgeID[]): {EdgeLoopIDs: EdgeID[]};
	GetEdgeCount(): number;
	GetEdgeConnectedPolygons(EdgeID: EdgeID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetEdgeConnectedPolygonCount(EdgeID: EdgeID): number;
	GetEdgeConnectedPolygon(EdgeID: EdgeID,ConnectedPolygonNumber: number): PolygonID;
	GeneratePolygonTangentsAndNormals(PolygonIDs: PolygonID[]): void;
	FlipPolygons(PolygonIDs: PolygonID[]): void;
	FindPolygonPerimeterVertexNumberForVertex(PolygonID: PolygonID,VertexID: VertexID): number;
	FindPolygonPerimeterEdgeNumberForVertices(PolygonID: PolygonID,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	FindPolygonLoop(EdgeID: EdgeID,OutEdgeLoopEdgeIDs?: EdgeID[],OutFlippedEdgeIDs?: EdgeID[],OutReversedEdgeIDPathToTake?: EdgeID[],OutPolygonIDsToSplit?: PolygonID[]): {OutEdgeLoopEdgeIDs: EdgeID[], OutFlippedEdgeIDs: EdgeID[], OutReversedEdgeIDPathToTake: EdgeID[], OutPolygonIDsToSplit: PolygonID[]};
	ExtrudePolygons(Polygons: PolygonID[],ExtrudeDistance: number,bKeepNeighborsTogether: boolean,OutNewExtrudedFrontPolygons?: PolygonID[]): {OutNewExtrudedFrontPolygons: PolygonID[]};
	ExtendVertices(VertexIDs: VertexID[],bOnlyExtendClosestEdge: boolean,ReferencePosition: Vector,OutNewExtendedVertexIDs?: VertexID[]): {OutNewExtendedVertexIDs: VertexID[]};
	ExtendEdges(EdgeIDs: EdgeID[],bWeldNeighbors: boolean,OutNewExtendedEdgeIDs?: EdgeID[]): {OutNewExtendedEdgeIDs: EdgeID[]};
	EndModification(bFromUndo: boolean): void;
	DeleteVertexInstances(VertexInstanceIDsToDelete: VertexInstanceID[],bDeleteOrphanedVertices: boolean): void;
	DeleteVertexAndConnectedEdgesAndPolygons(VertexID: VertexID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygons(PolygonIDsToDelete: PolygonID[],bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygonGroups(PolygonGroupIDs: PolygonGroupID[]): void;
	DeleteOrphanVertices(VertexIDsToDelete: VertexID[]): void;
	DeleteEdges(EdgeIDsToDelete: EdgeID[],bDeleteOrphanedVertices: boolean): void;
	DeleteEdgeAndConnectedPolygons(EdgeID: EdgeID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	CreateVertices(VerticesToCreate: VertexToCreate[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateVertexInstances(VertexInstancesToCreate: VertexInstanceToCreate[],OutNewVertexInstanceIDs?: VertexInstanceID[]): {OutNewVertexInstanceIDs: VertexInstanceID[]};
	CreatePolygons(PolygonsToCreate: PolygonToCreate[],OutNewPolygonIDs?: PolygonID[],OutNewEdgeIDs?: EdgeID[]): {OutNewPolygonIDs: PolygonID[], OutNewEdgeIDs: EdgeID[]};
	CreatePolygonGroups(PolygonGroupsToCreate: PolygonGroupToCreate[],OutNewPolygonGroupIDs?: PolygonGroupID[]): {OutNewPolygonGroupIDs: PolygonGroupID[]};
	CreateMissingPolygonPerimeterEdges(PolygonID: PolygonID,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateEmptyVertexRange(NumVerticesToCreate: number,OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateEdges(EdgesToCreate: EdgeToCreate[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	ComputePolygonsSharedEdges(PolygonIDs: PolygonID[],OutSharedEdgeIDs?: EdgeID[]): {OutSharedEdgeIDs: EdgeID[]};
	ComputePolygonPlane(PolygonID: PolygonID): Plane;
	ComputePolygonNormal(PolygonID: PolygonID): Vector;
	ComputePolygonCenter(PolygonID: PolygonID): Vector;
	ComputeBoundingBoxAndSphere(): BoxSphereBounds;
	ComputeBoundingBox(): Box;
	CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh;
	Commit(): void;
	ChangePolygonsVertexInstances(VertexInstancesForPolygons: ChangeVertexInstancesForPolygon[]): void;
	BevelPolygons(PolygonIDs: PolygonID[],BevelFixedDistance: number,BevelProgressTowardCenter: number,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	AssignPolygonsToPolygonGroups(PolygonGroupForPolygons: PolygonGroupForPolygon[],bDeleteOrphanedPolygonGroups: boolean): void;
	AnyChangesToUndo(): boolean;
	static C(Other: UObject | any): EditableMesh;
}

declare class EditableMeshFactory extends UObject { 
	static Load(ResourceName: string): EditableMeshFactory;
	static Find(Outer: UObject, ResourceName: string): EditableMeshFactory;
	static GetDefaultObject(): EditableMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshFactory;
	static MakeEditableMesh(PrimitiveComponent: PrimitiveComponent,LODIndex: number): EditableMesh;
	static C(Other: UObject | any): EditableMeshFactory;
}

declare class EditableStaticMeshAdapter extends EditableMeshAdapter { 
	StaticMesh: StaticMesh;
	OriginalStaticMesh: StaticMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): EditableStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableStaticMeshAdapter;
	static GetDefaultObject(): EditableStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableStaticMeshAdapter;
	static C(Other: UObject | any): EditableStaticMeshAdapter;
}

declare type EGooglePADErrorCode = 'AssetPack_NO_ERROR' | 'AssetPack_APP_UNAVAILABLE' | 'AssetPack_UNAVAILABLE' | 'AssetPack_INVALID_REQUEST' | 'AssetPack_DOWNLOAD_NOT_FOUND' | 'AssetPack_API_NOT_AVAILABLE' | 'AssetPack_NETWORK_ERROR' | 'AssetPack_ACCESS_DENIED' | 'AssetPack_INSUFFICIENT_STORAGE' | 'AssetPack_PLAY_STORE_NOT_FOUND' | 'AssetPack_NETWORK_UNRESTRICTED' | 'AssetPack_INTERNAL_ERROR' | 'AssetPack_INITIALIZATION_NEEDED' | 'AssetPack_INITIALIZATION_FAILED' | 'AssetPack_MAX';
declare var EGooglePADErrorCode : { AssetPack_NO_ERROR:'AssetPack_NO_ERROR',AssetPack_APP_UNAVAILABLE:'AssetPack_APP_UNAVAILABLE',AssetPack_UNAVAILABLE:'AssetPack_UNAVAILABLE',AssetPack_INVALID_REQUEST:'AssetPack_INVALID_REQUEST',AssetPack_DOWNLOAD_NOT_FOUND:'AssetPack_DOWNLOAD_NOT_FOUND',AssetPack_API_NOT_AVAILABLE:'AssetPack_API_NOT_AVAILABLE',AssetPack_NETWORK_ERROR:'AssetPack_NETWORK_ERROR',AssetPack_ACCESS_DENIED:'AssetPack_ACCESS_DENIED',AssetPack_INSUFFICIENT_STORAGE:'AssetPack_INSUFFICIENT_STORAGE',AssetPack_PLAY_STORE_NOT_FOUND:'AssetPack_PLAY_STORE_NOT_FOUND',AssetPack_NETWORK_UNRESTRICTED:'AssetPack_NETWORK_UNRESTRICTED',AssetPack_INTERNAL_ERROR:'AssetPack_INTERNAL_ERROR',AssetPack_INITIALIZATION_NEEDED:'AssetPack_INITIALIZATION_NEEDED',AssetPack_INITIALIZATION_FAILED:'AssetPack_INITIALIZATION_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare type EGooglePADStorageMethod = 'AssetPack_STORAGE_FILES' | 'AssetPack_STORAGE_APK' | 'AssetPack_STORAGE_UNKNOWN' | 'AssetPack_STORAGE_NOT_INSTALLED' | 'AssetPack_STORAGE_MAX';
declare var EGooglePADStorageMethod : { AssetPack_STORAGE_FILES:'AssetPack_STORAGE_FILES',AssetPack_STORAGE_APK:'AssetPack_STORAGE_APK',AssetPack_STORAGE_UNKNOWN:'AssetPack_STORAGE_UNKNOWN',AssetPack_STORAGE_NOT_INSTALLED:'AssetPack_STORAGE_NOT_INSTALLED',AssetPack_STORAGE_MAX:'AssetPack_STORAGE_MAX', };
declare type EGooglePADCellularDataConfirmStatus = 'AssetPack_CONFIRM_UNKNOWN' | 'AssetPack_CONFIRM_PENDING' | 'AssetPack_CONFIRM_USER_APPROVED' | 'AssetPack_CONFIRM_USER_CANCELED' | 'AssetPack_CONFIRM_MAX';
declare var EGooglePADCellularDataConfirmStatus : { AssetPack_CONFIRM_UNKNOWN:'AssetPack_CONFIRM_UNKNOWN',AssetPack_CONFIRM_PENDING:'AssetPack_CONFIRM_PENDING',AssetPack_CONFIRM_USER_APPROVED:'AssetPack_CONFIRM_USER_APPROVED',AssetPack_CONFIRM_USER_CANCELED:'AssetPack_CONFIRM_USER_CANCELED',AssetPack_CONFIRM_MAX:'AssetPack_CONFIRM_MAX', };
declare type EGooglePADDownloadStatus = 'AssetPack_UNKNOWN' | 'AssetPack_DOWNLOAD_PENDING' | 'AssetPack_DOWNLOADING' | 'AssetPack_TRANSFERRING' | 'AssetPack_DOWNLOAD_COMPLETED' | 'AssetPack_DOWNLOAD_FAILED' | 'AssetPack_DOWNLOAD_CANCELED' | 'AssetPack_WAITING_FOR_WIFI' | 'AssetPack_NOT_INSTALLED' | 'AssetPack_INFO_PENDING' | 'AssetPack_INFO_FAILED' | 'AssetPack_REMOVAL_PENDING' | 'AssetPack_REMOVAL_FAILED' | 'AssetPack_MAX';
declare var EGooglePADDownloadStatus : { AssetPack_UNKNOWN:'AssetPack_UNKNOWN',AssetPack_DOWNLOAD_PENDING:'AssetPack_DOWNLOAD_PENDING',AssetPack_DOWNLOADING:'AssetPack_DOWNLOADING',AssetPack_TRANSFERRING:'AssetPack_TRANSFERRING',AssetPack_DOWNLOAD_COMPLETED:'AssetPack_DOWNLOAD_COMPLETED',AssetPack_DOWNLOAD_FAILED:'AssetPack_DOWNLOAD_FAILED',AssetPack_DOWNLOAD_CANCELED:'AssetPack_DOWNLOAD_CANCELED',AssetPack_WAITING_FOR_WIFI:'AssetPack_WAITING_FOR_WIFI',AssetPack_NOT_INSTALLED:'AssetPack_NOT_INSTALLED',AssetPack_INFO_PENDING:'AssetPack_INFO_PENDING',AssetPack_INFO_FAILED:'AssetPack_INFO_FAILED',AssetPack_REMOVAL_PENDING:'AssetPack_REMOVAL_PENDING',AssetPack_REMOVAL_FAILED:'AssetPack_REMOVAL_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare class GooglePADFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GooglePADFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GooglePADFunctionLibrary;
	static GetDefaultObject(): GooglePADFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GooglePADFunctionLibrary;
	static ShowCellularDataConfirmation(): EGooglePADErrorCode;
	static RequestRemoval(Name: string): EGooglePADErrorCode;
	static RequestInfo(AssetPacks: string[]): EGooglePADErrorCode;
	static RequestDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static ReleaseDownloadState(State: number): void;
	static ReleaseAssetPackLocation(Location: number): void;
	static GetTotalBytesToDownload(State: number): number;
	static GetStorageMethod(Location: number): EGooglePADStorageMethod;
	static GetShowCellularDataConfirmationStatus(Status?: EGooglePADCellularDataConfirmStatus): {Status: EGooglePADCellularDataConfirmStatus, $: EGooglePADErrorCode};
	static GetDownloadStatus(State: number): EGooglePADDownloadStatus;
	static GetDownloadState(Name: string,State?: number): {State: number, $: EGooglePADErrorCode};
	static GetBytesDownloaded(State: number): number;
	static GetAssetsPath(Location: number): string;
	static GetAssetPackLocation(Name: string,Location?: number): {Location: number, $: EGooglePADErrorCode};
	static CancelDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static C(Other: UObject | any): GooglePADFunctionLibrary;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare type ESynth1OscType = 'Sine' | 'Saw' | 'Triangle' | 'Square' | 'Noise' | 'Count' | 'ESynth1OscType_MAX';
declare var ESynth1OscType : { Sine:'Sine',Saw:'Saw',Triangle:'Triangle',Square:'Square',Noise:'Noise',Count:'Count',ESynth1OscType_MAX:'ESynth1OscType_MAX', };
declare type ESynthLFOType = 'Sine' | 'UpSaw' | 'DownSaw' | 'Square' | 'Triangle' | 'Exponential' | 'RandomSampleHold' | 'Count' | 'ESynthLFOType_MAX';
declare var ESynthLFOType : { Sine:'Sine',UpSaw:'UpSaw',DownSaw:'DownSaw',Square:'Square',Triangle:'Triangle',Exponential:'Exponential',RandomSampleHold:'RandomSampleHold',Count:'Count',ESynthLFOType_MAX:'ESynthLFOType_MAX', };
declare type ESynthLFOMode = 'Sync' | 'OneShot' | 'Free' | 'Count' | 'ESynthLFOMode_MAX';
declare var ESynthLFOMode : { Sync:'Sync',OneShot:'OneShot',Free:'Free',Count:'Count',ESynthLFOMode_MAX:'ESynthLFOMode_MAX', };
declare type ESynthLFOPatchType = 'PatchToNone' | 'PatchToGain' | 'PatchToOscFreq' | 'PatchToFilterFreq' | 'PatchToFilterQ' | 'PatchToOscPulseWidth' | 'PatchToOscPan' | 'PatchLFO1ToLFO2Frequency' | 'PatchLFO1ToLFO2Gain' | 'Count' | 'ESynthLFOPatchType_MAX';
declare var ESynthLFOPatchType : { PatchToNone:'PatchToNone',PatchToGain:'PatchToGain',PatchToOscFreq:'PatchToOscFreq',PatchToFilterFreq:'PatchToFilterFreq',PatchToFilterQ:'PatchToFilterQ',PatchToOscPulseWidth:'PatchToOscPulseWidth',PatchToOscPan:'PatchToOscPan',PatchLFO1ToLFO2Frequency:'PatchLFO1ToLFO2Frequency',PatchLFO1ToLFO2Gain:'PatchLFO1ToLFO2Gain',Count:'Count',ESynthLFOPatchType_MAX:'ESynthLFOPatchType_MAX', };
declare type ESynthModEnvPatch = 'PatchToNone' | 'PatchToOscFreq' | 'PatchToFilterFreq' | 'PatchToFilterQ' | 'PatchToLFO1Gain' | 'PatchToLFO2Gain' | 'PatchToLFO1Freq' | 'PatchToLFO2Freq' | 'Count' | 'ESynthModEnvPatch_MAX';
declare var ESynthModEnvPatch : { PatchToNone:'PatchToNone',PatchToOscFreq:'PatchToOscFreq',PatchToFilterFreq:'PatchToFilterFreq',PatchToFilterQ:'PatchToFilterQ',PatchToLFO1Gain:'PatchToLFO1Gain',PatchToLFO2Gain:'PatchToLFO2Gain',PatchToLFO1Freq:'PatchToLFO1Freq',PatchToLFO2Freq:'PatchToLFO2Freq',Count:'Count',ESynthModEnvPatch_MAX:'ESynthModEnvPatch_MAX', };
declare type ESynthModEnvBiasPatch = 'PatchToNone' | 'PatchToOscFreq' | 'PatchToFilterFreq' | 'PatchToFilterQ' | 'PatchToLFO1Gain' | 'PatchToLFO2Gain' | 'PatchToLFO1Freq' | 'PatchToLFO2Freq' | 'Count' | 'ESynthModEnvBiasPatch_MAX';
declare var ESynthModEnvBiasPatch : { PatchToNone:'PatchToNone',PatchToOscFreq:'PatchToOscFreq',PatchToFilterFreq:'PatchToFilterFreq',PatchToFilterQ:'PatchToFilterQ',PatchToLFO1Gain:'PatchToLFO1Gain',PatchToLFO2Gain:'PatchToLFO2Gain',PatchToLFO1Freq:'PatchToLFO1Freq',PatchToLFO2Freq:'PatchToLFO2Freq',Count:'Count',ESynthModEnvBiasPatch_MAX:'ESynthModEnvBiasPatch_MAX', };
declare type ESynthFilterType = 'LowPass' | 'HighPass' | 'BandPass' | 'BandStop' | 'Count' | 'ESynthFilterType_MAX';
declare var ESynthFilterType : { LowPass:'LowPass',HighPass:'HighPass',BandPass:'BandPass',BandStop:'BandStop',Count:'Count',ESynthFilterType_MAX:'ESynthFilterType_MAX', };
declare type ESynthFilterAlgorithm = 'OnePole' | 'StateVariable' | 'Ladder' | 'Count' | 'ESynthFilterAlgorithm_MAX';
declare var ESynthFilterAlgorithm : { OnePole:'OnePole',StateVariable:'StateVariable',Ladder:'Ladder',Count:'Count',ESynthFilterAlgorithm_MAX:'ESynthFilterAlgorithm_MAX', };
declare type ESynthStereoDelayMode = 'Normal' | 'Cross' | 'PingPong' | 'Count' | 'ESynthStereoDelayMode_MAX';
declare var ESynthStereoDelayMode : { Normal:'Normal',Cross:'Cross',PingPong:'PingPong',Count:'Count',ESynthStereoDelayMode_MAX:'ESynthStereoDelayMode_MAX', };
declare type ESynth1PatchSource = 'LFO1' | 'LFO2' | 'Envelope' | 'BiasEnvelope' | 'Count' | 'ESynth1PatchSource_MAX';
declare var ESynth1PatchSource : { LFO1:'LFO1',LFO2:'LFO2',Envelope:'Envelope',BiasEnvelope:'BiasEnvelope',Count:'Count',ESynth1PatchSource_MAX:'ESynth1PatchSource_MAX', };
declare type ESynth1PatchDestination = 'Osc1Gain' | 'Osc1Frequency' | 'Osc1Pulsewidth' | 'Osc2Gain' | 'Osc2Frequency' | 'Osc2Pulsewidth' | 'FilterFrequency' | 'FilterQ' | 'Gain' | 'Pan' | 'LFO1Frequency' | 'LFO1Gain' | 'LFO2Frequency' | 'LFO2Gain' | 'Count' | 'ESynth1PatchDestination_MAX';
declare var ESynth1PatchDestination : { Osc1Gain:'Osc1Gain',Osc1Frequency:'Osc1Frequency',Osc1Pulsewidth:'Osc1Pulsewidth',Osc2Gain:'Osc2Gain',Osc2Frequency:'Osc2Frequency',Osc2Pulsewidth:'Osc2Pulsewidth',FilterFrequency:'FilterFrequency',FilterQ:'FilterQ',Gain:'Gain',Pan:'Pan',LFO1Frequency:'LFO1Frequency',LFO1Gain:'LFO1Gain',LFO2Frequency:'LFO2Frequency',LFO2Gain:'LFO2Gain',Count:'Count',ESynth1PatchDestination_MAX:'ESynth1PatchDestination_MAX', };
declare class Synth1PatchCable { 
	Depth: number;
	Destination: ESynth1PatchDestination;
	clone() : Synth1PatchCable;
	static C(Other: UObject | any): Synth1PatchCable;
}

declare class EpicSynth1Patch { 
	PatchSource: ESynth1PatchSource;
	PatchCables: Synth1PatchCable[];
	clone() : EpicSynth1Patch;
	static C(Other: UObject | any): EpicSynth1Patch;
}

declare class ModularSynthPreset extends TableRowBase { 
	bEnablePolyphony: boolean;
	Osc1Type: ESynth1OscType;
	Osc1Gain: number;
	Osc1Octave: number;
	Osc1Semitones: number;
	Osc1Cents: number;
	Osc1PulseWidth: number;
	Osc2Type: ESynth1OscType;
	Osc2Gain: number;
	Osc2Octave: number;
	Osc2Semitones: number;
	Osc2Cents: number;
	Osc2PulseWidth: number;
	Portamento: number;
	bEnableUnison: boolean;
	bEnableOscillatorSync: boolean;
	Spread: number;
	Pan: number;
	LFO1Frequency: number;
	LFO1Gain: number;
	LFO1Type: ESynthLFOType;
	LFO1Mode: ESynthLFOMode;
	LFO1PatchType: ESynthLFOPatchType;
	LFO2Frequency: number;
	LFO2Gain: number;
	LFO2Type: ESynthLFOType;
	LFO2Mode: ESynthLFOMode;
	LFO2PatchType: ESynthLFOPatchType;
	GainDb: number;
	AttackTime: number;
	DecayTime: number;
	SustainGain: number;
	ReleaseTime: number;
	ModEnvPatchType: ESynthModEnvPatch;
	ModEnvBiasPatchType: ESynthModEnvBiasPatch;
	bInvertModulationEnvelope: boolean;
	bInvertModulationEnvelopeBias: boolean;
	ModulationEnvelopeDepth: number;
	ModulationEnvelopeAttackTime: number;
	ModulationEnvelopeDecayTime: number;
	ModulationEnvelopeSustainGain: number;
	ModulationEnvelopeReleaseTime: number;
	bLegato: boolean;
	bRetrigger: boolean;
	FilterFrequency: number;
	FilterQ: number;
	FilterType: ESynthFilterType;
	FilterAlgorithm: ESynthFilterAlgorithm;
	bStereoDelayEnabled: boolean;
	StereoDelayMode: ESynthStereoDelayMode;
	StereoDelayTime: number;
	StereoDelayFeedback: number;
	StereoDelayWetlevel: number;
	StereoDelayRatio: number;
	bChorusEnabled: boolean;
	ChorusDepth: number;
	ChorusFeedback: number;
	ChorusFrequency: number;
	Patches: EpicSynth1Patch[];
	clone() : ModularSynthPreset;
	static C(Other: UObject | any): ModularSynthPreset;
}

declare class ModularSynthPresetBankEntry { 
	PresetName: string;
	Preset: ModularSynthPreset;
	clone() : ModularSynthPresetBankEntry;
	static C(Other: UObject | any): ModularSynthPresetBankEntry;
}

declare class ModularSynthPresetBank extends UObject { 
	Presets: ModularSynthPresetBankEntry[];
	static Load(ResourceName: string): ModularSynthPresetBank;
	static Find(Outer: UObject, ResourceName: string): ModularSynthPresetBank;
	static GetDefaultObject(): ModularSynthPresetBank;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthPresetBank;
	static C(Other: UObject | any): ModularSynthPresetBank;
	AddModularSynthPresetToBankAsset(Preset: ModularSynthPreset,PresetName: string): void;
	static AddModularSynthPresetToBankAsset(InBank: ModularSynthPresetBank,Preset: ModularSynthPreset,PresetName: string): void;
}

declare class ModularSynthLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ModularSynthLibrary;
	static Find(Outer: UObject, ResourceName: string): ModularSynthLibrary;
	static GetDefaultObject(): ModularSynthLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthLibrary;
	static AddModularSynthPresetToBankAsset(InBank: ModularSynthPresetBank,Preset: ModularSynthPreset,PresetName: string): void;
	static C(Other: UObject | any): ModularSynthLibrary;
}

declare class PatchId { 
	ID: number;
	clone() : PatchId;
	static C(Other: UObject | any): PatchId;
}

declare class ModularSynthComponent extends SynthComponent { 
	VoiceCount: number;
	static Load(ResourceName: string): ModularSynthComponent;
	static Find(Outer: UObject, ResourceName: string): ModularSynthComponent;
	static GetDefaultObject(): ModularSynthComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthComponent;
	SetSynthPreset(SynthPreset: ModularSynthPreset): void;
	SetSustainGain(SustainGain: number): void;
	SetStereoDelayWetlevel(DelayWetlevel: number): void;
	SetStereoDelayTime(DelayTimeMsec: number): void;
	SetStereoDelayRatio(DelayRatio: number): void;
	SetStereoDelayMode(StereoDelayMode: ESynthStereoDelayMode): void;
	SetStereoDelayIsEnabled(StereoDelayEnabled: boolean): void;
	SetStereoDelayFeedback(DelayFeedback: number): void;
	SetSpread(Spread: number): void;
	SetReleaseTime(ReleaseTimeMsec: number): void;
	SetPortamento(Portamento: number): void;
	SetPitchBend(PitchBend: number): void;
	SetPan(Pan: number): void;
	SetOscType(OscIndex: number,OscType: ESynth1OscType): void;
	SetOscSync(bIsSynced: boolean): void;
	SetOscSemitones(OscIndex: number,Semitones: number): void;
	SetOscPulsewidth(OscIndex: number,Pulsewidth: number): void;
	SetOscOctave(OscIndex: number,Octave: number): void;
	SetOscGainMod(OscIndex: number,OscGainMod: number): void;
	SetOscGain(OscIndex: number,OscGain: number): void;
	SetOscFrequencyMod(OscIndex: number,OscFreqMod: number): void;
	SetOscCents(OscIndex: number,Cents: number): void;
	SetModEnvSustainGain(SustainGain: number): void;
	SetModEnvReleaseTime(Release: number): void;
	SetModEnvPatch(InPatchType: ESynthModEnvPatch): void;
	SetModEnvInvert(bInvert: boolean): void;
	SetModEnvDepth(Depth: number): void;
	SetModEnvDecayTime(DecayTimeMsec: number): void;
	SetModEnvBiasPatch(InPatchType: ESynthModEnvBiasPatch): void;
	SetModEnvBiasInvert(bInvert: boolean): void;
	SetModEnvAttackTime(AttackTimeMsec: number): void;
	SetLFOType(LFOIndex: number,LFOType: ESynthLFOType): void;
	SetLFOPatch(LFOIndex: number,LFOPatchType: ESynthLFOPatchType): void;
	SetLFOMode(LFOIndex: number,LFOMode: ESynthLFOMode): void;
	SetLFOGainMod(LFOIndex: number,GainMod: number): void;
	SetLFOGain(LFOIndex: number,Gain: number): void;
	SetLFOFrequencyMod(LFOIndex: number,FrequencyModHz: number): void;
	SetLFOFrequency(LFOIndex: number,FrequencyHz: number): void;
	SetGainDb(GainDb: number): void;
	SetFilterType(FilterType: ESynthFilterType): void;
	SetFilterQMod(FilterQ: number): void;
	SetFilterQ(FilterQ: number): void;
	SetFilterFrequencyMod(FilterFrequencyHz: number): void;
	SetFilterFrequency(FilterFrequencyHz: number): void;
	SetFilterAlgorithm(FilterAlgorithm: ESynthFilterAlgorithm): void;
	SetEnableUnison(EnableUnison: boolean): void;
	SetEnableRetrigger(RetriggerEnabled: boolean): void;
	SetEnablePolyphony(bEnablePolyphony: boolean): void;
	SetEnablePatch(PatchId: PatchId,bIsEnabled: boolean): boolean;
	SetEnableLegato(LegatoEnabled: boolean): void;
	SetDecayTime(DecayTimeMsec: number): void;
	SetChorusFrequency(Frequency: number): void;
	SetChorusFeedback(Feedback: number): void;
	SetChorusEnabled(EnableChorus: boolean): void;
	SetChorusDepth(Depth: number): void;
	SetAttackTime(AttackTimeMsec: number): void;
	NoteOn(Note: number,Velocity: number,Duration: number): void;
	NoteOff(Note: number,bAllNotesOff: boolean,bKillAllNotes: boolean): void;
	CreatePatch(PatchSource: ESynth1PatchSource,PatchCables: Synth1PatchCable[],bEnableByDefault: boolean): PatchId;
	static C(Other: UObject | any): ModularSynthComponent;
}

declare class SourceEffectBitCrusherSettings { 
	CrushedSampleRate: number;
	SampleRateModulation: SoundModulationDestinationSettings;
	CrushedBits: number;
	BitModulation: SoundModulationDestinationSettings;
	clone() : SourceEffectBitCrusherSettings;
	static C(Other: UObject | any): SourceEffectBitCrusherSettings;
}

declare class SourceEffectBitCrusherBaseSettings { 
	SampleRate: number;
	BitDepth: number;
	clone() : SourceEffectBitCrusherBaseSettings;
	static C(Other: UObject | any): SourceEffectBitCrusherBaseSettings;
}

declare class SourceEffectBitCrusherPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectBitCrusherSettings;
	static Load(ResourceName: string): SourceEffectBitCrusherPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectBitCrusherPreset;
	static GetDefaultObject(): SourceEffectBitCrusherPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectBitCrusherPreset;
	SetSettings(Settings: SourceEffectBitCrusherBaseSettings): void;
	SetSampleRateModulator(Modulator: SoundModulatorBase): void;
	SetSampleRate(SampleRate: number): void;
	SetModulationSettings(ModulationSettings: SourceEffectBitCrusherSettings): void;
	SetBits(Bits: number): void;
	SetBitModulator(Modulator: SoundModulatorBase): void;
	static C(Other: UObject | any): SourceEffectBitCrusherPreset;
}

declare class SourceEffectChorusSettings { 
	Depth: number;
	Frequency: number;
	Feedback: number;
	WetLevel: number;
	DryLevel: number;
	Spread: number;
	DepthModulation: SoundModulationDestinationSettings;
	FrequencyModulation: SoundModulationDestinationSettings;
	FeedbackModulation: SoundModulationDestinationSettings;
	WetModulation: SoundModulationDestinationSettings;
	DryModulation: SoundModulationDestinationSettings;
	SpreadModulation: SoundModulationDestinationSettings;
	clone() : SourceEffectChorusSettings;
	static C(Other: UObject | any): SourceEffectChorusSettings;
}

declare class SourceEffectChorusBaseSettings { 
	Depth: number;
	Frequency: number;
	Feedback: number;
	WetLevel: number;
	DryLevel: number;
	Spread: number;
	clone() : SourceEffectChorusBaseSettings;
	static C(Other: UObject | any): SourceEffectChorusBaseSettings;
}

declare class SourceEffectChorusPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectChorusSettings;
	static Load(ResourceName: string): SourceEffectChorusPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectChorusPreset;
	static GetDefaultObject(): SourceEffectChorusPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectChorusPreset;
	SetWetModulator(Modulator: SoundModulatorBase): void;
	SetWet(WetAmount: number): void;
	SetSpreadModulator(Modulator: SoundModulatorBase): void;
	SetSpread(Spread: number): void;
	SetSettings(Settings: SourceEffectChorusBaseSettings): void;
	SetModulationSettings(ModulationSettings: SourceEffectChorusSettings): void;
	SetFrequencyModulator(Modulator: SoundModulatorBase): void;
	SetFrequency(Frequency: number): void;
	SetFeedbackModulator(Modulator: SoundModulatorBase): void;
	SetFeedback(Feedback: number): void;
	SetDryModulator(Modulator: SoundModulatorBase): void;
	SetDry(DryAmount: number): void;
	SetDepthModulator(Modulator: SoundModulatorBase): void;
	SetDepth(Depth: number): void;
	static C(Other: UObject | any): SourceEffectChorusPreset;
}

declare type ESourceEffectDynamicsProcessorType = 'Compressor' | 'Limiter' | 'Expander' | 'Gate' | 'Count' | 'ESourceEffectDynamicsProcessorType_MAX';
declare var ESourceEffectDynamicsProcessorType : { Compressor:'Compressor',Limiter:'Limiter',Expander:'Expander',Gate:'Gate',Count:'Count',ESourceEffectDynamicsProcessorType_MAX:'ESourceEffectDynamicsProcessorType_MAX', };
declare type ESourceEffectDynamicsPeakMode = 'MeanSquared' | 'RootMeanSquared' | 'Peak' | 'Count' | 'ESourceEffectDynamicsPeakMode_MAX';
declare var ESourceEffectDynamicsPeakMode : { MeanSquared:'MeanSquared',RootMeanSquared:'RootMeanSquared',Peak:'Peak',Count:'Count',ESourceEffectDynamicsPeakMode_MAX:'ESourceEffectDynamicsPeakMode_MAX', };
declare class SourceEffectDynamicsProcessorSettings { 
	DynamicsProcessorType: ESourceEffectDynamicsProcessorType;
	PeakMode: ESourceEffectDynamicsPeakMode;
	LookAheadMsec: number;
	AttackTimeMsec: number;
	ReleaseTimeMsec: number;
	ThresholdDb: number;
	Ratio: number;
	KneeBandwidthDb: number;
	InputGainDb: number;
	OutputGainDb: number;
	bStereoLinked: boolean;
	bAnalogMode: boolean;
	clone() : SourceEffectDynamicsProcessorSettings;
	static C(Other: UObject | any): SourceEffectDynamicsProcessorSettings;
}

declare class SourceEffectDynamicsProcessorPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectDynamicsProcessorSettings;
	static Load(ResourceName: string): SourceEffectDynamicsProcessorPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectDynamicsProcessorPreset;
	static GetDefaultObject(): SourceEffectDynamicsProcessorPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectDynamicsProcessorPreset;
	SetSettings(InSettings: SourceEffectDynamicsProcessorSettings): void;
	static C(Other: UObject | any): SourceEffectDynamicsProcessorPreset;
}

declare class EnvelopeFollowerListener extends ActorComponent { 
	OnEnvelopeFollowerUpdate: UnrealEngineMulticastDelegate<(EnvelopeValue: number) => void>;
	static Load(ResourceName: string): EnvelopeFollowerListener;
	static Find(Outer: UObject, ResourceName: string): EnvelopeFollowerListener;
	static GetDefaultObject(): EnvelopeFollowerListener;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EnvelopeFollowerListener;
	static C(Other: UObject | any): EnvelopeFollowerListener;
}

declare type EEnvelopeFollowerPeakMode = 'MeanSquared' | 'RootMeanSquared' | 'Peak' | 'Count' | 'EEnvelopeFollowerPeakMode_MAX';
declare var EEnvelopeFollowerPeakMode : { MeanSquared:'MeanSquared',RootMeanSquared:'RootMeanSquared',Peak:'Peak',Count:'Count',EEnvelopeFollowerPeakMode_MAX:'EEnvelopeFollowerPeakMode_MAX', };
declare class SourceEffectEnvelopeFollowerSettings { 
	AttackTime: number;
	ReleaseTime: number;
	PeakMode: EEnvelopeFollowerPeakMode;
	bIsAnalogMode: boolean;
	clone() : SourceEffectEnvelopeFollowerSettings;
	static C(Other: UObject | any): SourceEffectEnvelopeFollowerSettings;
}

declare class SourceEffectEnvelopeFollowerPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectEnvelopeFollowerSettings;
	static Load(ResourceName: string): SourceEffectEnvelopeFollowerPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectEnvelopeFollowerPreset;
	static GetDefaultObject(): SourceEffectEnvelopeFollowerPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectEnvelopeFollowerPreset;
	UnregisterEnvelopeFollowerListener(EnvelopeFollowerListener: EnvelopeFollowerListener): void;
	SetSettings(InSettings: SourceEffectEnvelopeFollowerSettings): void;
	RegisterEnvelopeFollowerListener(EnvelopeFollowerListener: EnvelopeFollowerListener): void;
	static C(Other: UObject | any): SourceEffectEnvelopeFollowerPreset;
}

declare class SourceEffectEQBand { 
	Frequency: number;
	Bandwidth: number;
	GainDb: number;
	bEnabled: boolean;
	clone() : SourceEffectEQBand;
	static C(Other: UObject | any): SourceEffectEQBand;
}

declare class SourceEffectEQSettings { 
	EQBands: SourceEffectEQBand[];
	clone() : SourceEffectEQSettings;
	static C(Other: UObject | any): SourceEffectEQSettings;
}

declare class SourceEffectEQPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectEQSettings;
	static Load(ResourceName: string): SourceEffectEQPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectEQPreset;
	static GetDefaultObject(): SourceEffectEQPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectEQPreset;
	SetSettings(InSettings: SourceEffectEQSettings): void;
	static C(Other: UObject | any): SourceEffectEQPreset;
}

declare type ESourceEffectFilterCircuit = 'OnePole' | 'StateVariable' | 'Ladder' | 'Count' | 'ESourceEffectFilterCircuit_MAX';
declare var ESourceEffectFilterCircuit : { OnePole:'OnePole',StateVariable:'StateVariable',Ladder:'Ladder',Count:'Count',ESourceEffectFilterCircuit_MAX:'ESourceEffectFilterCircuit_MAX', };
declare type ESourceEffectFilterType = 'LowPass' | 'HighPass' | 'BandPass' | 'BandStop' | 'Count' | 'ESourceEffectFilterType_MAX';
declare var ESourceEffectFilterType : { LowPass:'LowPass',HighPass:'HighPass',BandPass:'BandPass',BandStop:'BandStop',Count:'Count',ESourceEffectFilterType_MAX:'ESourceEffectFilterType_MAX', };
declare type ESourceEffectFilterParam = 'FilterFrequency' | 'FilterResonance' | 'Count' | 'ESourceEffectFilterParam_MAX';
declare var ESourceEffectFilterParam : { FilterFrequency:'FilterFrequency',FilterResonance:'FilterResonance',Count:'Count',ESourceEffectFilterParam_MAX:'ESourceEffectFilterParam_MAX', };
declare class SourceEffectFilterAudioBusModulationSettings { 
	AudioBus: AudioBus;
	EnvelopeFollowerAttackTimeMsec: number;
	EnvelopeFollowerReleaseTimeMsec: number;
	EnvelopeGainMultiplier: number;
	FilterParam: ESourceEffectFilterParam;
	MinFrequencyModulation: number;
	MaxFrequencyModulation: number;
	MinResonanceModulation: number;
	MaxResonanceModulation: number;
	clone() : SourceEffectFilterAudioBusModulationSettings;
	static C(Other: UObject | any): SourceEffectFilterAudioBusModulationSettings;
}

declare class SourceEffectFilterSettings { 
	FilterCircuit: ESourceEffectFilterCircuit;
	FilterType: ESourceEffectFilterType;
	CutoffFrequency: number;
	FilterQ: number;
	AudioBusModulation: SourceEffectFilterAudioBusModulationSettings[];
	clone() : SourceEffectFilterSettings;
	static C(Other: UObject | any): SourceEffectFilterSettings;
}

declare class SourceEffectFilterPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectFilterSettings;
	static Load(ResourceName: string): SourceEffectFilterPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectFilterPreset;
	static GetDefaultObject(): SourceEffectFilterPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectFilterPreset;
	SetSettings(InSettings: SourceEffectFilterSettings): void;
	static C(Other: UObject | any): SourceEffectFilterPreset;
}

declare class SourceEffectFoldbackDistortionSettings { 
	InputGainDb: number;
	ThresholdDb: number;
	OutputGainDb: number;
	clone() : SourceEffectFoldbackDistortionSettings;
	static C(Other: UObject | any): SourceEffectFoldbackDistortionSettings;
}

declare class SourceEffectFoldbackDistortionPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectFoldbackDistortionSettings;
	static Load(ResourceName: string): SourceEffectFoldbackDistortionPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectFoldbackDistortionPreset;
	static GetDefaultObject(): SourceEffectFoldbackDistortionPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectFoldbackDistortionPreset;
	SetSettings(InSettings: SourceEffectFoldbackDistortionSettings): void;
	static C(Other: UObject | any): SourceEffectFoldbackDistortionPreset;
}

declare type EStereoChannelMode = 'MidSide' | 'LeftRight' | 'count' | 'EStereoChannelMode_MAX';
declare var EStereoChannelMode : { MidSide:'MidSide',LeftRight:'LeftRight',count:'count',EStereoChannelMode_MAX:'EStereoChannelMode_MAX', };
declare class SourceEffectMidSideSpreaderSettings { 
	SpreadAmount: number;
	InputMode: EStereoChannelMode;
	OutputMode: EStereoChannelMode;
	bEqualPower: boolean;
	clone() : SourceEffectMidSideSpreaderSettings;
	static C(Other: UObject | any): SourceEffectMidSideSpreaderSettings;
}

declare class SourceEffectMidSideSpreaderPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectMidSideSpreaderSettings;
	static Load(ResourceName: string): SourceEffectMidSideSpreaderPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectMidSideSpreaderPreset;
	static GetDefaultObject(): SourceEffectMidSideSpreaderPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectMidSideSpreaderPreset;
	SetSettings(InSettings: SourceEffectMidSideSpreaderSettings): void;
	static C(Other: UObject | any): SourceEffectMidSideSpreaderPreset;
}

declare class SourceEffectPannerSettings { 
	Spread: number;
	Pan: number;
	clone() : SourceEffectPannerSettings;
	static C(Other: UObject | any): SourceEffectPannerSettings;
}

declare class SourceEffectPannerPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectPannerSettings;
	static Load(ResourceName: string): SourceEffectPannerPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectPannerPreset;
	static GetDefaultObject(): SourceEffectPannerPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectPannerPreset;
	SetSettings(InSettings: SourceEffectPannerSettings): void;
	static C(Other: UObject | any): SourceEffectPannerPreset;
}

declare type EPhaserLFOType = 'Sine' | 'UpSaw' | 'DownSaw' | 'Square' | 'Triangle' | 'Exponential' | 'RandomSampleHold' | 'Count' | 'EPhaserLFOType_MAX';
declare var EPhaserLFOType : { Sine:'Sine',UpSaw:'UpSaw',DownSaw:'DownSaw',Square:'Square',Triangle:'Triangle',Exponential:'Exponential',RandomSampleHold:'RandomSampleHold',Count:'Count',EPhaserLFOType_MAX:'EPhaserLFOType_MAX', };
declare class SourceEffectPhaserSettings { 
	WetLevel: number;
	Frequency: number;
	Feedback: number;
	LFOType: EPhaserLFOType;
	UseQuadraturePhase: boolean;
	clone() : SourceEffectPhaserSettings;
	static C(Other: UObject | any): SourceEffectPhaserSettings;
}

declare class SourceEffectPhaserPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectPhaserSettings;
	static Load(ResourceName: string): SourceEffectPhaserPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectPhaserPreset;
	static GetDefaultObject(): SourceEffectPhaserPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectPhaserPreset;
	SetSettings(InSettings: SourceEffectPhaserSettings): void;
	static C(Other: UObject | any): SourceEffectPhaserPreset;
}

declare type ERingModulatorTypeSourceEffect = 'Sine' | 'Saw' | 'Triangle' | 'Square' | 'Count' | 'ERingModulatorTypeSourceEffect_MAX';
declare var ERingModulatorTypeSourceEffect : { Sine:'Sine',Saw:'Saw',Triangle:'Triangle',Square:'Square',Count:'Count',ERingModulatorTypeSourceEffect_MAX:'ERingModulatorTypeSourceEffect_MAX', };
declare class SourceEffectRingModulationSettings { 
	ModulatorType: ERingModulatorTypeSourceEffect;
	Frequency: number;
	Depth: number;
	DryLevel: number;
	WetLevel: number;
	AudioBusModulator: AudioBus;
	clone() : SourceEffectRingModulationSettings;
	static C(Other: UObject | any): SourceEffectRingModulationSettings;
}

declare class SourceEffectRingModulationPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectRingModulationSettings;
	static Load(ResourceName: string): SourceEffectRingModulationPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectRingModulationPreset;
	static GetDefaultObject(): SourceEffectRingModulationPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectRingModulationPreset;
	SetSettings(InSettings: SourceEffectRingModulationSettings): void;
	static C(Other: UObject | any): SourceEffectRingModulationPreset;
}

declare class SourceEffectSimpleDelaySettings { 
	SpeedOfSound: number;
	DelayAmount: number;
	DryAmount: number;
	WetAmount: number;
	Feedback: number;
	bDelayBasedOnDistance: boolean;
	clone() : SourceEffectSimpleDelaySettings;
	static C(Other: UObject | any): SourceEffectSimpleDelaySettings;
}

declare class SourceEffectSimpleDelayPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectSimpleDelaySettings;
	static Load(ResourceName: string): SourceEffectSimpleDelayPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectSimpleDelayPreset;
	static GetDefaultObject(): SourceEffectSimpleDelayPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectSimpleDelayPreset;
	SetSettings(InSettings: SourceEffectSimpleDelaySettings): void;
	static C(Other: UObject | any): SourceEffectSimpleDelayPreset;
}

declare type EStereoDelaySourceEffect = 'Normal' | 'Cross' | 'PingPong' | 'Count' | 'EStereoDelaySourceEffect_MAX';
declare var EStereoDelaySourceEffect : { Normal:'Normal',Cross:'Cross',PingPong:'PingPong',Count:'Count',EStereoDelaySourceEffect_MAX:'EStereoDelaySourceEffect_MAX', };
declare type EStereoDelayFiltertype = 'Lowpass' | 'Highpass' | 'Bandpass' | 'Notch' | 'Count' | 'EStereoDelayFiltertype_MAX';
declare var EStereoDelayFiltertype : { Lowpass:'Lowpass',Highpass:'Highpass',Bandpass:'Bandpass',Notch:'Notch',Count:'Count',EStereoDelayFiltertype_MAX:'EStereoDelayFiltertype_MAX', };
declare class SourceEffectStereoDelaySettings { 
	DelayMode: EStereoDelaySourceEffect;
	DelayTimeMsec: number;
	Feedback: number;
	DelayRatio: number;
	WetLevel: number;
	DryLevel: number;
	bFilterEnabled: boolean;
	FilterType: EStereoDelayFiltertype;
	FilterFrequency: number;
	FilterQ: number;
	clone() : SourceEffectStereoDelaySettings;
	static C(Other: UObject | any): SourceEffectStereoDelaySettings;
}

declare class SourceEffectStereoDelayPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectStereoDelaySettings;
	static Load(ResourceName: string): SourceEffectStereoDelayPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectStereoDelayPreset;
	static GetDefaultObject(): SourceEffectStereoDelayPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectStereoDelayPreset;
	SetSettings(InSettings: SourceEffectStereoDelaySettings): void;
	static C(Other: UObject | any): SourceEffectStereoDelayPreset;
}

declare class SourceEffectWaveShaperSettings { 
	Amount: number;
	OutputGainDb: number;
	clone() : SourceEffectWaveShaperSettings;
	static C(Other: UObject | any): SourceEffectWaveShaperSettings;
}

declare class SourceEffectWaveShaperPreset extends SoundEffectSourcePreset { 
	Settings: SourceEffectWaveShaperSettings;
	static Load(ResourceName: string): SourceEffectWaveShaperPreset;
	static Find(Outer: UObject, ResourceName: string): SourceEffectWaveShaperPreset;
	static GetDefaultObject(): SourceEffectWaveShaperPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceEffectWaveShaperPreset;
	SetSettings(InSettings: SourceEffectWaveShaperSettings): void;
	static C(Other: UObject | any): SourceEffectWaveShaperPreset;
}

declare class AudioImpulseResponse extends UObject { 
	ImpulseResponse: number[];
	NumChannels: number;
	SampleRate: number;
	NormalizationVolumeDb: number;
	bTrueStereo: boolean;
	IRData: number[];
	static Load(ResourceName: string): AudioImpulseResponse;
	static Find(Outer: UObject, ResourceName: string): AudioImpulseResponse;
	static GetDefaultObject(): AudioImpulseResponse;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioImpulseResponse;
	static C(Other: UObject | any): AudioImpulseResponse;
}

declare class SubmixEffectConvolutionReverbSettings { 
	NormalizationVolumeDb: number;
	bBypass: boolean;
	bMixInputChannelFormatToImpulseResponseFormat: boolean;
	bMixReverbOutputToOutputChannelFormat: boolean;
	SurroundRearChannelBleedDb: number;
	bInvertRearChannelBleedPhase: boolean;
	bSurroundRearChannelFlip: boolean;
	SurroundRearChannelBleedAmount: number;
	ImpulseResponse: AudioImpulseResponse;
	AllowHArdwareAcceleration: boolean;
	clone() : SubmixEffectConvolutionReverbSettings;
	static C(Other: UObject | any): SubmixEffectConvolutionReverbSettings;
}

declare type ESubmixEffectConvolutionReverbBlockSize = 'BlockSize256' | 'BlockSize512' | 'BlockSize1024' | 'ESubmixEffectConvolutionReverbBlockSize_MAX';
declare var ESubmixEffectConvolutionReverbBlockSize : { BlockSize256:'BlockSize256',BlockSize512:'BlockSize512',BlockSize1024:'BlockSize1024',ESubmixEffectConvolutionReverbBlockSize_MAX:'ESubmixEffectConvolutionReverbBlockSize_MAX', };
declare class SubmixEffectConvolutionReverbPreset extends SoundEffectSubmixPreset { 
	ImpulseResponse: AudioImpulseResponse;
	Settings: SubmixEffectConvolutionReverbSettings;
	BlockSize: ESubmixEffectConvolutionReverbBlockSize;
	bEnableHardwareAcceleration: boolean;
	static Load(ResourceName: string): SubmixEffectConvolutionReverbPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectConvolutionReverbPreset;
	static GetDefaultObject(): SubmixEffectConvolutionReverbPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectConvolutionReverbPreset;
	SetSettings(InSettings: SubmixEffectConvolutionReverbSettings): void;
	SetImpulseResponse(InImpulseResponse: AudioImpulseResponse): void;
	static C(Other: UObject | any): SubmixEffectConvolutionReverbPreset;
}

declare class SubmixEffectDelaySettings { 
	MaximumDelayLength: number;
	InterpolationTime: number;
	DelayLength: number;
	clone() : SubmixEffectDelaySettings;
	static C(Other: UObject | any): SubmixEffectDelaySettings;
}

declare class SubmixEffectDelayPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectDelaySettings;
	DynamicSettings: SubmixEffectDelaySettings;
	static Load(ResourceName: string): SubmixEffectDelayPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectDelayPreset;
	static GetDefaultObject(): SubmixEffectDelayPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectDelayPreset;
	SetSettings(InSettings: SubmixEffectDelaySettings): void;
	SetInterpolationTime(Time: number): void;
	SetDelay(Length: number): void;
	GetMaxDelayInMilliseconds(): number;
	static C(Other: UObject | any): SubmixEffectDelayPreset;
}

declare type ESubmixFilterType = 'LowPass' | 'HighPass' | 'BandPass' | 'BandStop' | 'Count' | 'ESubmixFilterType_MAX';
declare var ESubmixFilterType : { LowPass:'LowPass',HighPass:'HighPass',BandPass:'BandPass',BandStop:'BandStop',Count:'Count',ESubmixFilterType_MAX:'ESubmixFilterType_MAX', };
declare type ESubmixFilterAlgorithm = 'OnePole' | 'StateVariable' | 'Ladder' | 'Count' | 'ESubmixFilterAlgorithm_MAX';
declare var ESubmixFilterAlgorithm : { OnePole:'OnePole',StateVariable:'StateVariable',Ladder:'Ladder',Count:'Count',ESubmixFilterAlgorithm_MAX:'ESubmixFilterAlgorithm_MAX', };
declare class SubmixEffectFilterSettings { 
	FilterType: ESubmixFilterType;
	FilterAlgorithm: ESubmixFilterAlgorithm;
	FilterFrequency: number;
	FilterQ: number;
	clone() : SubmixEffectFilterSettings;
	static C(Other: UObject | any): SubmixEffectFilterSettings;
}

declare class SubmixEffectFilterPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectFilterSettings;
	static Load(ResourceName: string): SubmixEffectFilterPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectFilterPreset;
	static GetDefaultObject(): SubmixEffectFilterPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectFilterPreset;
	SetSettings(InSettings: SubmixEffectFilterSettings): void;
	SetFilterType(InType: ESubmixFilterType): void;
	SetFilterQMod(InQ: number): void;
	SetFilterQ(InQ: number): void;
	SetFilterCutoffFrequencyMod(InFrequency: number): void;
	SetFilterCutoffFrequency(InFrequency: number): void;
	SetFilterAlgorithm(InAlgorithm: ESubmixFilterAlgorithm): void;
	static C(Other: UObject | any): SubmixEffectFilterPreset;
}

declare class SubmixEffectFlexiverbSettings { 
	PreDelay: number;
	DecayTime: number;
	RoomDampening: number;
	Complexity: number;
	clone() : SubmixEffectFlexiverbSettings;
	static C(Other: UObject | any): SubmixEffectFlexiverbSettings;
}

declare class SubmixEffectFlexiverbPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectFlexiverbSettings;
	static Load(ResourceName: string): SubmixEffectFlexiverbPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectFlexiverbPreset;
	static GetDefaultObject(): SubmixEffectFlexiverbPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectFlexiverbPreset;
	SetSettings(InSettings: SubmixEffectFlexiverbSettings): void;
	static C(Other: UObject | any): SubmixEffectFlexiverbPreset;
}

declare class DynamicsBandSettings { 
	CrossoverTopFrequency: number;
	AttackTimeMsec: number;
	ReleaseTimeMsec: number;
	ThresholdDb: number;
	Ratio: number;
	KneeBandwidthDb: number;
	InputGainDb: number;
	OutputGainDb: number;
	clone() : DynamicsBandSettings;
	static C(Other: UObject | any): DynamicsBandSettings;
}

declare class SubmixEffectMultibandCompressorSettings { 
	DynamicsProcessorType: ESubmixEffectDynamicsProcessorType;
	PeakMode: ESubmixEffectDynamicsPeakMode;
	LookAheadMsec: number;
	bLinkChannels: boolean;
	bAnalogMode: boolean;
	bFourPole: boolean;
	Bands: DynamicsBandSettings[];
	clone() : SubmixEffectMultibandCompressorSettings;
	static C(Other: UObject | any): SubmixEffectMultibandCompressorSettings;
}

declare class SubmixEffectMultibandCompressorPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectMultibandCompressorSettings;
	static Load(ResourceName: string): SubmixEffectMultibandCompressorPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectMultibandCompressorPreset;
	static GetDefaultObject(): SubmixEffectMultibandCompressorPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectMultibandCompressorPreset;
	SetSettings(InSettings: SubmixEffectMultibandCompressorSettings): void;
	static C(Other: UObject | any): SubmixEffectMultibandCompressorPreset;
}

declare class SubmixEffectStereoDelaySettings { 
	DelayMode: EStereoDelaySourceEffect;
	DelayTimeMsec: number;
	Feedback: number;
	DelayRatio: number;
	WetLevel: number;
	DryLevel: number;
	bFilterEnabled: boolean;
	FilterType: EStereoDelayFiltertype;
	FilterFrequency: number;
	FilterQ: number;
	clone() : SubmixEffectStereoDelaySettings;
	static C(Other: UObject | any): SubmixEffectStereoDelaySettings;
}

declare class SubmixEffectStereoDelayPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectStereoDelaySettings;
	static Load(ResourceName: string): SubmixEffectStereoDelayPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectStereoDelayPreset;
	static GetDefaultObject(): SubmixEffectStereoDelayPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectStereoDelayPreset;
	SetSettings(InSettings: SubmixEffectStereoDelaySettings): void;
	static C(Other: UObject | any): SubmixEffectStereoDelayPreset;
}

declare type ETapLineMode = 'SendToChannel' | 'Panning' | 'Disabled' | 'ETapLineMode_MAX';
declare var ETapLineMode : { SendToChannel:'SendToChannel',Panning:'Panning',Disabled:'Disabled',ETapLineMode_MAX:'ETapLineMode_MAX', };
declare class TapDelayInfo { 
	TapLineMode: ETapLineMode;
	DelayLength: number;
	Gain: number;
	OutputChannel: number;
	PanInDegrees: number;
	TapId: number;
	clone() : TapDelayInfo;
	static C(Other: UObject | any): TapDelayInfo;
}

declare class SubmixEffectTapDelaySettings { 
	MaximumDelayLength: number;
	InterpolationTime: number;
	Taps: TapDelayInfo[];
	clone() : SubmixEffectTapDelaySettings;
	static C(Other: UObject | any): SubmixEffectTapDelaySettings;
}

declare class SubmixEffectTapDelayPreset extends SoundEffectSubmixPreset { 
	Settings: SubmixEffectTapDelaySettings;
	static Load(ResourceName: string): SubmixEffectTapDelayPreset;
	static Find(Outer: UObject, ResourceName: string): SubmixEffectTapDelayPreset;
	static GetDefaultObject(): SubmixEffectTapDelayPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubmixEffectTapDelayPreset;
	SetTap(TapId: number,TapInfo: TapDelayInfo): void;
	SetSettings(InSettings: SubmixEffectTapDelaySettings): void;
	SetInterpolationTime(Time: number): void;
	RemoveTap(TapId: number): void;
	GetTapIds(TapIds?: number[]): {TapIds: number[]};
	GetTap(TapId: number,TapInfo?: TapDelayInfo): {TapInfo: TapDelayInfo};
	GetMaxDelayInMilliseconds(): number;
	AddTap(TapId?: number): {TapId: number};
	static C(Other: UObject | any): SubmixEffectTapDelayPreset;
}

declare class Synth2DSliderStyle extends SlateWidgetStyle { 
	NormalThumbImage: SlateBrush;
	DisabledThumbImage: SlateBrush;
	NormalBarImage: SlateBrush;
	DisabledBarImage: SlateBrush;
	BackgroundImage: SlateBrush;
	BarThickness: number;
	clone() : Synth2DSliderStyle;
	static C(Other: UObject | any): Synth2DSliderStyle;
}

declare class Synth2DSlider extends Widget { 
	ValueX: number;
	ValueY: number;
	ValueXDelegate: UnrealEngineDelegate<() => number>;
	ValueYDelegate: UnrealEngineDelegate<() => number>;
	WidgetStyle: Synth2DSliderStyle;
	SliderHandleColor: LinearColor;
	IndentHandle: boolean;
	Locked: boolean;
	StepSize: number;
	IsFocusable: boolean;
	OnMouseCaptureBegin: UnrealEngineMulticastDelegate<() => void>;
	OnMouseCaptureEnd: UnrealEngineMulticastDelegate<() => void>;
	OnControllerCaptureBegin: UnrealEngineMulticastDelegate<() => void>;
	OnControllerCaptureEnd: UnrealEngineMulticastDelegate<() => void>;
	OnValueChangedX: UnrealEngineMulticastDelegate<(Value: number) => void>;
	OnValueChangedY: UnrealEngineMulticastDelegate<(Value: number) => void>;
	static Load(ResourceName: string): Synth2DSlider;
	static Find(Outer: UObject, ResourceName: string): Synth2DSlider;
	static GetDefaultObject(): Synth2DSlider;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Synth2DSlider;
	SetValue(InValue: Vector2D): void;
	SetStepSize(InValue: number): void;
	SetSliderHandleColor(InValue: LinearColor): void;
	SetLocked(InValue: boolean): void;
	SetIndentHandle(InValue: boolean): void;
	GetValue(): Vector2D;
	static C(Other: UObject | any): Synth2DSlider;
}

declare type EGranularSynthSeekType = 'FromBeginning' | 'FromCurrentPosition' | 'Count' | 'EGranularSynthSeekType_MAX';
declare var EGranularSynthSeekType : { FromBeginning:'FromBeginning',FromCurrentPosition:'FromCurrentPosition',Count:'Count',EGranularSynthSeekType_MAX:'EGranularSynthSeekType_MAX', };
declare type EGranularSynthEnvelopeType = 'Rectangular' | 'Triangle' | 'DownwardTriangle' | 'UpwardTriangle' | 'ExponentialDecay' | 'ExponentialIncrease' | 'Gaussian' | 'Hanning' | 'Lanczos' | 'Cosine' | 'CosineSquared' | 'Welch' | 'Blackman' | 'BlackmanHarris' | 'Count' | 'EGranularSynthEnvelopeType_MAX';
declare var EGranularSynthEnvelopeType : { Rectangular:'Rectangular',Triangle:'Triangle',DownwardTriangle:'DownwardTriangle',UpwardTriangle:'UpwardTriangle',ExponentialDecay:'ExponentialDecay',ExponentialIncrease:'ExponentialIncrease',Gaussian:'Gaussian',Hanning:'Hanning',Lanczos:'Lanczos',Cosine:'Cosine',CosineSquared:'CosineSquared',Welch:'Welch',Blackman:'Blackman',BlackmanHarris:'BlackmanHarris',Count:'Count',EGranularSynthEnvelopeType_MAX:'EGranularSynthEnvelopeType_MAX', };
declare class GranularSynth extends SynthComponent { 
	GranulatedSoundWave: SoundWave;
	static Load(ResourceName: string): GranularSynth;
	static Find(Outer: UObject, ResourceName: string): GranularSynth;
	static GetDefaultObject(): GranularSynth;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GranularSynth;
	SetSustainGain(SustainGain: number): void;
	SetSoundWave(InSoundWave: SoundWave): void;
	SetScrubMode(bScrubMode: boolean): void;
	SetReleaseTimeMsec(ReleaseTimeMsec: number): void;
	SetPlayheadTime(InPositionSec: number,LerpTimeSec: number,SeekType: EGranularSynthSeekType): void;
	SetPlaybackSpeed(InPlayheadRate: number): void;
	SetGrainVolume(BaseVolume: number,VolumeRange: Vector2D): void;
	SetGrainsPerSecond(InGrainsPerSecond: number): void;
	SetGrainProbability(InGrainProbability: number): void;
	SetGrainPitch(BasePitch: number,PitchRange: Vector2D): void;
	SetGrainPan(BasePan: number,PanRange: Vector2D): void;
	SetGrainEnvelopeType(EnvelopeType: EGranularSynthEnvelopeType): void;
	SetGrainDuration(BaseDurationMsec: number,DurationRange: Vector2D): void;
	SetDecayTime(DecayTimeMsec: number): void;
	SetAttackTime(AttackTimeMsec: number): void;
	NoteOn(Note: number,Velocity: number,Duration: number): void;
	NoteOff(Note: number,bKill: boolean): void;
	IsLoaded(): boolean;
	GetSampleDuration(): number;
	GetCurrentPlayheadTime(): number;
	static C(Other: UObject | any): GranularSynth;
}

declare class MonoWaveTableSynthPreset extends UObject { 
	PresetName: string;
	bLockKeyframesToGridBool: boolean;
	LockKeyframesToGrid: number;
	WaveTableResolution: number;
	WaveTable: RuntimeFloatCurve[];
	bNormalizeWaveTables: boolean;
	static Load(ResourceName: string): MonoWaveTableSynthPreset;
	static Find(Outer: UObject, ResourceName: string): MonoWaveTableSynthPreset;
	static GetDefaultObject(): MonoWaveTableSynthPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MonoWaveTableSynthPreset;
	static C(Other: UObject | any): MonoWaveTableSynthPreset;
}

declare type CurveInterpolationType = 'AUTOINTERP' | 'LINEAR' | 'CONSTANT' | 'CurveInterpolationType_MAX';
declare var CurveInterpolationType : { AUTOINTERP:'AUTOINTERP',LINEAR:'LINEAR',CONSTANT:'CONSTANT',CurveInterpolationType_MAX:'CurveInterpolationType_MAX', };
declare class SynthComponentMonoWaveTable extends SynthComponent { 
	OnTableAltered: UnrealEngineMulticastDelegate<(TableIndex: number) => void>;
	OnNumTablesChanged: UnrealEngineMulticastDelegate<() => void>;
	CurrentPreset: MonoWaveTableSynthPreset;
	static Load(ResourceName: string): SynthComponentMonoWaveTable;
	static Find(Outer: UObject, ResourceName: string): SynthComponentMonoWaveTable;
	static GetDefaultObject(): SynthComponentMonoWaveTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthComponentMonoWaveTable;
	SetWaveTablePosition(InPosition: number): void;
	SetSustainPedalState(InSustainPedalState: boolean): void;
	SetPosLfoType(InLfoType: ESynthLFOType): void;
	SetPosLfoFrequency(InLfoFrequency: number): void;
	SetPosLfoDepth(InLfoDepth: number): void;
	SetPositionEnvelopeSustainGain(InSustainGain: number): void;
	SetPositionEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
	SetPositionEnvelopeInvert(bInInvert: boolean): void;
	SetPositionEnvelopeDepth(InDepth: number): void;
	SetPositionEnvelopeDecayTime(InDecayTimeMsec: number): void;
	SetPositionEnvelopeBiasInvert(bInBiasInvert: boolean): void;
	SetPositionEnvelopeBiasDepth(InDepth: number): void;
	SetPositionEnvelopeAttackTime(InAttackTimeMsec: number): void;
	SetLowPassFilterResonance(InNewQ: number): void;
	SetFrequencyWithMidiNote(InMidiNote: number): void;
	SetFrequencyPitchBend(FrequencyOffsetCents: number): void;
	SetFrequency(FrequencyHz: number): void;
	SetFilterEnvelopeSustainGain(InSustainGain: number): void;
	SetFilterEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
	SetFilterEnvelopenDecayTime(InDecayTimeMsec: number): void;
	SetFilterEnvelopeInvert(bInInvert: boolean): void;
	SetFilterEnvelopeDepth(InDepth: number): void;
	SetFilterEnvelopeBiasInvert(bInBiasInvert: boolean): void;
	SetFilterEnvelopeBiasDepth(InDepth: number): void;
	SetFilterEnvelopeAttackTime(InAttackTimeMsec: number): void;
	SetCurveValue(TableIndex: number,KeyframeIndex: number,NewValue: number): boolean;
	SetCurveTangent(TableIndex: number,InNewTangent: number): boolean;
	SetCurveInterpolationType(InterpolationType: CurveInterpolationType,TableIndex: number): boolean;
	SetAmpEnvelopeSustainGain(InSustainGain: number): void;
	SetAmpEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
	SetAmpEnvelopeInvert(bInInvert: boolean): void;
	SetAmpEnvelopeDepth(InDepth: number): void;
	SetAmpEnvelopeDecayTime(InDecayTimeMsec: number): void;
	SetAmpEnvelopeBiasInvert(bInBiasInvert: boolean): void;
	SetAmpEnvelopeBiasDepth(InDepth: number): void;
	SetAmpEnvelopeAttackTime(InAttackTimeMsec: number): void;
	RefreshWaveTable(index: number): void;
	RefreshAllWaveTables(): void;
	NoteOn(InMidiNote: number,InVelocity: number): void;
	NoteOff(InMidiNote: number): void;
	GetNumTableEntries(): number;
	GetMaxTableIndex(): number;
	GetKeyFrameValuesForTable(TableIndex: number): number[];
	GetCurveTangent(TableIndex: number): number;
	static C(Other: UObject | any): SynthComponentMonoWaveTable;
}

declare class SynthComponentToneGenerator extends SynthComponent { 
	Frequency: number;
	Volume: number;
	static Load(ResourceName: string): SynthComponentToneGenerator;
	static Find(Outer: UObject, ResourceName: string): SynthComponentToneGenerator;
	static GetDefaultObject(): SynthComponentToneGenerator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthComponentToneGenerator;
	SetVolume(InVolume: number): void;
	SetFrequency(InFrequency: number): void;
	static C(Other: UObject | any): SynthComponentToneGenerator;
}

declare type ESamplePlayerSeekType = 'FromBeginning' | 'FromCurrentPosition' | 'FromEnd' | 'Count' | 'ESamplePlayerSeekType_MAX';
declare var ESamplePlayerSeekType : { FromBeginning:'FromBeginning',FromCurrentPosition:'FromCurrentPosition',FromEnd:'FromEnd',Count:'Count',ESamplePlayerSeekType_MAX:'ESamplePlayerSeekType_MAX', };
declare class SynthSamplePlayer extends SynthComponent { 
	SoundWave: SoundWave;
	OnSampleLoaded: UnrealEngineMulticastDelegate<() => void>;
	OnSamplePlaybackProgress: UnrealEngineMulticastDelegate<(ProgressPercent: number, ProgressTimeSeconds: number) => void>;
	static Load(ResourceName: string): SynthSamplePlayer;
	static Find(Outer: UObject, ResourceName: string): SynthSamplePlayer;
	static GetDefaultObject(): SynthSamplePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthSamplePlayer;
	SetSoundWave(InSoundWave: SoundWave): void;
	SetScrubTimeWidth(InScrubTimeWidthSec: number): void;
	SetScrubMode(bScrubMode: boolean): void;
	SetPitch(InPitch: number,TimeSec: number): void;
	SeekToTime(TimeSec: number,SeekType: ESamplePlayerSeekType,bWrap: boolean): void;
	IsLoaded(): boolean;
	GetSampleDuration(): number;
	GetCurrentPlaybackProgressTime(): number;
	GetCurrentPlaybackProgressPercent(): number;
	static C(Other: UObject | any): SynthSamplePlayer;
}

declare class SynthesisUtilitiesBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SynthesisUtilitiesBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SynthesisUtilitiesBlueprintFunctionLibrary;
	static GetDefaultObject(): SynthesisUtilitiesBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthesisUtilitiesBlueprintFunctionLibrary;
	static GetLogFrequency(InLinearValue: number,InDomainMin: number,InDomainMax: number,InRangeMin: number,InRangeMax: number): number;
	static GetLinearFrequency(InLogFrequencyValue: number,InDomainMin: number,InDomainMax: number,InRangeMin: number,InRangeMax: number): number;
	static C(Other: UObject | any): SynthesisUtilitiesBlueprintFunctionLibrary;
}

declare type ESynthKnobSize = 'Medium' | 'Large' | 'Count' | 'ESynthKnobSize_MAX';
declare var ESynthKnobSize : { Medium:'Medium',Large:'Large',Count:'Count',ESynthKnobSize_MAX:'ESynthKnobSize_MAX', };
declare class SynthKnobStyle extends SlateWidgetStyle { 
	LargeKnob: SlateBrush;
	LargeKnobOverlay: SlateBrush;
	MediumKnob: SlateBrush;
	MediumKnobOverlay: SlateBrush;
	MinValueAngle: number;
	MaxValueAngle: number;
	KnobSize: ESynthKnobSize;
	clone() : SynthKnobStyle;
	static C(Other: UObject | any): SynthKnobStyle;
}

declare class SynthKnob extends Widget { 
	Value: number;
	StepSize: number;
	MouseSpeed: number;
	MouseFineTuneSpeed: number;
	ShowTooltipInfo: boolean;
	ParameterName: string;
	ParameterUnits: string;
	ValueDelegate: UnrealEngineDelegate<() => number>;
	WidgetStyle: SynthKnobStyle;
	Locked: boolean;
	IsFocusable: boolean;
	OnMouseCaptureBegin: UnrealEngineMulticastDelegate<() => void>;
	OnMouseCaptureEnd: UnrealEngineMulticastDelegate<() => void>;
	OnControllerCaptureBegin: UnrealEngineMulticastDelegate<() => void>;
	OnControllerCaptureEnd: UnrealEngineMulticastDelegate<() => void>;
	OnValueChanged: UnrealEngineMulticastDelegate<(Value: number) => void>;
	static Load(ResourceName: string): SynthKnob;
	static Find(Outer: UObject, ResourceName: string): SynthKnob;
	static GetDefaultObject(): SynthKnob;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthKnob;
	SetValue(InValue: number): void;
	SetStepSize(InValue: number): void;
	SetLocked(InValue: boolean): void;
	GetValue(): number;
	static C(Other: UObject | any): SynthKnob;
}

declare class AudioImpulseResponseFactory extends Factory { 
	static Load(ResourceName: string): AudioImpulseResponseFactory;
	static Find(Outer: UObject, ResourceName: string): AudioImpulseResponseFactory;
	static GetDefaultObject(): AudioImpulseResponseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioImpulseResponseFactory;
	static C(Other: UObject | any): AudioImpulseResponseFactory;
}

declare class ModularSynthPresetBankFactory extends Factory { 
	static Load(ResourceName: string): ModularSynthPresetBankFactory;
	static Find(Outer: UObject, ResourceName: string): ModularSynthPresetBankFactory;
	static GetDefaultObject(): ModularSynthPresetBankFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthPresetBankFactory;
	static C(Other: UObject | any): ModularSynthPresetBankFactory;
}

declare class MonoWaveTableSynthPresetFactory extends Factory { 
	static Load(ResourceName: string): MonoWaveTableSynthPresetFactory;
	static Find(Outer: UObject, ResourceName: string): MonoWaveTableSynthPresetFactory;
	static GetDefaultObject(): MonoWaveTableSynthPresetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MonoWaveTableSynthPresetFactory;
	static C(Other: UObject | any): MonoWaveTableSynthPresetFactory;
}

declare class SynthesisEditorSettings extends DeveloperSettings { 
	BitCrusherWidget: SoftObjectPath;
	ChorusWidget: SoftObjectPath;
	DynamicsProcessorWidget: SoftObjectPath;
	EnvelopeFollowerWidget: SoftObjectPath;
	EQWidget: SoftObjectPath;
	FilterWidget: SoftObjectPath;
	FoldbackDistortionWidget: SoftObjectPath;
	MidSideSpreaderWidget: SoftObjectPath;
	PannerWidget: SoftObjectPath;
	PhaserWidget: SoftObjectPath;
	RingModulationWidget: SoftObjectPath;
	SimpleDelayWidget: SoftObjectPath;
	StereoDelayWidget: SoftObjectPath;
	WaveShaperWidget: SoftObjectPath;
	SubmixConvolutionReverbWidget: SoftObjectPath;
	SubmixDelayWidget: SoftObjectPath;
	SubmixFilterWidget: SoftObjectPath;
	SubmixFlexiverbWidget: SoftObjectPath;
	SubmixStereoDelayWidget: SoftObjectPath;
	SubmixTapDelayWidget: SoftObjectPath;
	static Load(ResourceName: string): SynthesisEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SynthesisEditorSettings;
	static GetDefaultObject(): SynthesisEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthesisEditorSettings;
	static C(Other: UObject | any): SynthesisEditorSettings;
}

declare class LevelVariantSetsActorFactory extends ActorFactory { 
	static Load(ResourceName: string): LevelVariantSetsActorFactory;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSetsActorFactory;
	static GetDefaultObject(): LevelVariantSetsActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActorFactory;
	static C(Other: UObject | any): LevelVariantSetsActorFactory;
}

declare class SwitchActorFactory extends ActorFactory { 
	static Load(ResourceName: string): SwitchActorFactory;
	static Find(Outer: UObject, ResourceName: string): SwitchActorFactory;
	static GetDefaultObject(): SwitchActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SwitchActorFactory;
	static C(Other: UObject | any): SwitchActorFactory;
}

declare class VariantManagerFactoryNew extends Factory { 
	static Load(ResourceName: string): VariantManagerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): VariantManagerFactoryNew;
	static GetDefaultObject(): VariantManagerFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerFactoryNew;
	static C(Other: UObject | any): VariantManagerFactoryNew;
}

declare type EVariantManagerTestEnum = 'None' | 'FirstOption' | 'SecondOption' | 'ThirdOption' | 'EVariantManagerTestEnum_MAX';
declare var EVariantManagerTestEnum : { None:'None',FirstOption:'FirstOption',SecondOption:'SecondOption',ThirdOption:'ThirdOption',EVariantManagerTestEnum_MAX:'EVariantManagerTestEnum_MAX', };
declare class VariantManagerTestActor extends Actor { 
	EnumWithNoDefault: EVariantManagerTestEnum;
	EnumWithSecondDefault: EVariantManagerTestEnum;
	CapturedByteProperty: number;
	CapturedIntProperty: number;
	CapturedFloatProperty: number;
	bCapturedBoolProperty: boolean;
	CapturedObjectProperty: UObject;
	CapturedInterfaceProperty: any;
	CapturedNameProperty: string;
	CapturedStrProperty: string;
	CapturedTextProperty: string;
	CapturedRotatorProperty: Rotator;
	CapturedColorProperty: Color;
	CapturedLinearColorProperty: LinearColor;
	CapturedVectorProperty: Vector;
	CapturedQuatProperty: Quat;
	CapturedVector4Property: Vector4;
	CapturedVector2DProperty: Vector2D;
	CapturedIntPointProperty: IntPoint;
	CapturedUObjectArrayProperty: UObject[];
	CapturedVectorArrayProperty: Vector[];
	static GetDefaultObject(): VariantManagerTestActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerTestActor;
	static C(Other: UObject | any): VariantManagerTestActor;
}

declare class ContentBrowserAssetDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserAssetDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserAssetDataSource;
	static GetDefaultObject(): ContentBrowserAssetDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserAssetDataSource;
	static C(Other: UObject | any): ContentBrowserAssetDataSource;
}

declare class ContentBrowserClassDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserClassDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserClassDataSource;
	static GetDefaultObject(): ContentBrowserClassDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserClassDataSource;
	static C(Other: UObject | any): ContentBrowserClassDataSource;
}

declare class OculusMR_PlaneMeshTriangle { 
	Vertex0: Vector;
	UV0: Vector2D;
	Vertex1: Vector;
	UV1: Vector2D;
	Vertex2: Vector;
	UV2: Vector2D;
	clone() : OculusMR_PlaneMeshTriangle;
	static C(Other: UObject | any): OculusMR_PlaneMeshTriangle;
}

declare class OculusMR_PlaneMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): OculusMR_PlaneMeshComponent;
	static Find(Outer: UObject, ResourceName: string): OculusMR_PlaneMeshComponent;
	static GetDefaultObject(): OculusMR_PlaneMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_PlaneMeshComponent;
	SetCustomMeshTriangles(Triangles: OculusMR_PlaneMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: OculusMR_PlaneMeshTriangle[]): void;
	static C(Other: UObject | any): OculusMR_PlaneMeshComponent;
}

declare type EOculusMR_ClippingReference = 'CR_TrackingReference' | 'CR_Head' | 'CR_MAX';
declare var EOculusMR_ClippingReference : { CR_TrackingReference:'CR_TrackingReference',CR_Head:'CR_Head',CR_MAX:'CR_MAX', };
declare type EOculusMR_PostProcessEffects = 'PPE_Off' | 'PPE_On' | 'PPE_MAX';
declare var EOculusMR_PostProcessEffects : { PPE_Off:'PPE_Off',PPE_On:'PPE_On',PPE_MAX:'PPE_MAX', };
declare type EOculusMR_CompositionMethod = 'ExternalComposition' | 'DirectComposition' | 'EOculusMR_MAX';
declare var EOculusMR_CompositionMethod : { ExternalComposition:'ExternalComposition',DirectComposition:'DirectComposition',EOculusMR_MAX:'EOculusMR_MAX', };
declare type EOculusMR_CameraDeviceEnum = 'CD_None' | 'CD_WebCamera0' | 'CD_WebCamera1' | 'CD_MAX';
declare var EOculusMR_CameraDeviceEnum : { CD_None:'CD_None',CD_WebCamera0:'CD_WebCamera0',CD_WebCamera1:'CD_WebCamera1',CD_MAX:'CD_MAX', };
declare class OculusMR_Settings extends UObject { 
	ClippingReference: EOculusMR_ClippingReference;
	bUseTrackedCameraResolution: boolean;
	WidthPerView: number;
	HeightPerView: number;
	CastingLatency: number;
	BackdropColor: Color;
	HandPoseStateLatency: number;
	ChromaKeyColor: Color;
	ChromaKeySimilarity: number;
	ChromaKeySmoothRange: number;
	ChromaKeySpillRange: number;
	ExternalCompositionPostProcessEffects: EOculusMR_PostProcessEffects;
	bIsCasting: boolean;
	CompositionMethod: EOculusMR_CompositionMethod;
	CapturingCamera: EOculusMR_CameraDeviceEnum;
	static Load(ResourceName: string): OculusMR_Settings;
	static Find(Outer: UObject, ResourceName: string): OculusMR_Settings;
	static GetDefaultObject(): OculusMR_Settings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_Settings;
	SetIsCasting(Val: boolean): void;
	SetCompositionMethod(Val: EOculusMR_CompositionMethod): void;
	SetCapturingCamera(Val: EOculusMR_CameraDeviceEnum): void;
	SaveToIni(): void;
	LoadFromIni(): void;
	GetIsCasting(): boolean;
	GetCompositionMethod(): EOculusMR_CompositionMethod;
	GetCapturingCamera(): EOculusMR_CameraDeviceEnum;
	GetBindToTrackedCameraIndex(): number;
	BindToTrackedCameraIndexIfAvailable(InTrackedCameraIndex: number): void;
	static C(Other: UObject | any): OculusMR_Settings;
}

declare class TrackedCamera { 
	index: number;
	Name: string;
	UpdateTime: any;
	FieldOfView: number;
	SizeX: number;
	SizeY: number;
	AttachedTrackedDevice: ETrackedDeviceType;
	CalibratedRotation: Rotator;
	CalibratedOffset: Vector;
	UserRotation: Rotator;
	UserOffset: Vector;
	RawRotation: Rotator;
	RawOffset: Vector;
	clone() : TrackedCamera;
	static C(Other: UObject | any): TrackedCamera;
}

declare class OculusMR_State extends UObject { 
	TrackedCamera: TrackedCamera;
	TrackingReferenceComponent: SceneComponent;
	ScalingFactor: any;
	ChangeCameraStateRequested: boolean;
	BindToTrackedCameraIndexRequested: boolean;
	static Load(ResourceName: string): OculusMR_State;
	static Find(Outer: UObject, ResourceName: string): OculusMR_State;
	static GetDefaultObject(): OculusMR_State;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_State;
	static C(Other: UObject | any): OculusMR_State;
}

declare class OculusMR_CastingCameraActor extends SceneCapture2D { 
	VRNotificationComponent: VRNotificationsComponent;
	CameraColorTexture: Texture2D;
	CameraDepthTexture: Texture2D;
	PlaneMeshComponent: OculusMR_PlaneMeshComponent;
	ChromaKeyMaterial: Material;
	OpaqueColoredMaterial: Material;
	ChromaKeyMaterialInstance: MaterialInstanceDynamic;
	CameraFrameMaterialInstance: MaterialInstanceDynamic;
	BackdropMaterialInstance: MaterialInstanceDynamic;
	DefaultTexture_White: Texture2D;
	BackgroundRenderTargets: TextureRenderTarget2D[];
	ForegroundCaptureActor: SceneCapture2D;
	ForegroundRenderTargets: TextureRenderTarget2D[];
	PoseTimes: any[];
	MRSettings: OculusMR_Settings;
	MRState: OculusMR_State;
	static GetDefaultObject(): OculusMR_CastingCameraActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_CastingCameraActor;
	static C(Other: UObject | any): OculusMR_CastingCameraActor;
}

declare class OculusMRFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OculusMRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusMRFunctionLibrary;
	static GetDefaultObject(): OculusMRFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMRFunctionLibrary;
	static SetTrackingReferenceComponent(Component: SceneComponent): boolean;
	static SetMrcScalingFactor(ScalingFactor: number): boolean;
	static IsMrcEnabled(): boolean;
	static IsMrcActive(): boolean;
	static GetTrackingReferenceComponent(): SceneComponent;
	static GetOculusMRSettings(): OculusMR_Settings;
	static GetMrcScalingFactor(): number;
	static C(Other: UObject | any): OculusMRFunctionLibrary;
}

declare type EConfidenceBehavior = 'None' | 'HideActor' | 'EConfidenceBehavior_MAX';
declare var EConfidenceBehavior : { None:'None',HideActor:'HideActor',EConfidenceBehavior_MAX:'EConfidenceBehavior_MAX', };
declare type ESystemGestureBehavior = 'None' | 'SwapMaterial' | 'ESystemGestureBehavior_MAX';
declare var ESystemGestureBehavior : { None:'None',SwapMaterial:'SwapMaterial',ESystemGestureBehavior_MAX:'ESystemGestureBehavior_MAX', };
declare class OculusCapsuleCollider { 
	Capsule: CapsuleComponent;
	BoneId: EBone;
	clone() : OculusCapsuleCollider;
	static C(Other: UObject | any): OculusCapsuleCollider;
}

declare class OculusHandComponent extends PoseableMeshComponent { 
	SkeletonType: EOculusHandType;
	MeshType: EOculusHandType;
	ConfidenceBehavior: EConfidenceBehavior;
	SystemGestureBehavior: ESystemGestureBehavior;
	SystemGestureMaterial: MaterialInterface;
	bInitializePhysics: boolean;
	bUpdateHandScale: boolean;
	MaterialOverride: MaterialInterface;
	BoneNameMappings: any;
	CollisionCapsules: OculusCapsuleCollider[];
	bSkeletalMeshInitialized: boolean;
	static Load(ResourceName: string): OculusHandComponent;
	static Find(Outer: UObject, ResourceName: string): OculusHandComponent;
	static GetDefaultObject(): OculusHandComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusHandComponent;
	static C(Other: UObject | any): OculusHandComponent;
}

declare type ETrackingConfidence = 'Low' | 'High' | 'ETrackingConfidence_MAX';
declare var ETrackingConfidence : { Low:'Low',High:'High',ETrackingConfidence_MAX:'ETrackingConfidence_MAX', };
declare class OculusInputFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OculusInputFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusInputFunctionLibrary;
	static GetDefaultObject(): OculusInputFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusInputFunctionLibrary;
	static IsPointerPoseValid(DeviceHand: EOculusHandType,ControllerIndex: number): boolean;
	static IsHandTrackingEnabled(): boolean;
	static InitializeHandPhysics(SkeletonType: EOculusHandType,HandComponent: SkinnedMeshComponent,WorldToMeters: number): OculusCapsuleCollider[];
	static GetTrackingConfidence(DeviceHand: EOculusHandType,ControllerIndex: number): ETrackingConfidence;
	static GetPointerPose(DeviceHand: EOculusHandType,ControllerIndex: number): Transform;
	static GetHandSkeletalMesh(HandSkeletalMesh: SkeletalMesh,SkeletonType: EOculusHandType,MeshType: EOculusHandType,WorldToMeters: number): boolean;
	static GetHandScale(DeviceHand: EOculusHandType,ControllerIndex: number): number;
	static GetDominantHand(ControllerIndex: number): EOculusHandType;
	static GetBoneRotation(DeviceHand: EOculusHandType,BoneId: EBone,ControllerIndex: number): Quat;
	static GetBoneName(BoneId: EBone): string;
	static C(Other: UObject | any): OculusInputFunctionLibrary;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'Quest' | 'Quest2' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { Quest:'Quest',Quest2:'Quest2',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare type EGoogleVRCaps = 'Cardboard' | 'Daydream33' | 'Daydream63' | 'Daydream66' | 'EGoogleVRCaps_MAX';
declare var EGoogleVRCaps : { Cardboard:'Cardboard',Daydream33:'Daydream33',Daydream63:'Daydream63',Daydream66:'Daydream66',EGoogleVRCaps_MAX:'EGoogleVRCaps_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArmV7: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bForceSmallOBBFiles: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bAllowOverflowOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	bEnableBundle: boolean;
	bEnableUniversalAPK: boolean;
	bBundleABISplit: boolean;
	bBundleLanguageSplit: boolean;
	bBundleDensitySplit: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	GoogleVRCaps: EGoogleVRCaps[];
	bGoogleVRSustainedPerformance: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArmV7: boolean;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bSupportsVulkanSM5: boolean;
	bAndroidOpenGLSupportsBackbufferSampling: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bForceLDLinker: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bUseAudioStreamCaching: boolean;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EOculusPlatform = 'PC' | 'Mobile' | 'Length' | 'EOculusPlatform_MAX';
declare var EOculusPlatform : { PC:'PC',Mobile:'Mobile',Length:'Length',EOculusPlatform_MAX:'EOculusPlatform_MAX', };
declare class OculusEditorSettings extends UObject { 
	PerfToolIgnoreList: any;
	PerfToolTargetPlatform: EOculusPlatform;
	bAddMenuOption: boolean;
	static Load(ResourceName: string): OculusEditorSettings;
	static Find(Outer: UObject, ResourceName: string): OculusEditorSettings;
	static GetDefaultObject(): OculusEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusEditorSettings;
	static C(Other: UObject | any): OculusEditorSettings;
}

declare class RedistPackage { 
	Included: boolean;
	Name: string;
	ID: string;
	clone() : RedistPackage;
	static C(Other: UObject | any): RedistPackage;
}

declare type EOculusPlatformTarget = 'Rift' | 'Quest' | 'Length' | 'EOculusPlatformTarget_MAX';
declare var EOculusPlatformTarget : { Rift:'Rift',Quest:'Quest',Length:'Length',EOculusPlatformTarget_MAX:'EOculusPlatformTarget_MAX', };
declare type EOculusGamepadEmulation = 'Off' | 'Twinstick' | 'RightDPad' | 'LeftDPad' | 'Length' | 'EOculusGamepadEmulation_MAX';
declare var EOculusGamepadEmulation : { Off:'Off',Twinstick:'Twinstick',RightDPad:'RightDPad',LeftDPad:'LeftDPad',Length:'Length',EOculusGamepadEmulation_MAX:'EOculusGamepadEmulation_MAX', };
declare type EOculusAssetType = 'Default' | 'Store' | 'Language_Pack' | 'Length' | 'EOculusAssetType_MAX';
declare var EOculusAssetType : { Default:'Default',Store:'Store',Language_Pack:'Language_Pack',Length:'Length',EOculusAssetType_MAX:'EOculusAssetType_MAX', };
declare class AssetConfig { 
	AssetType: EOculusAssetType;
	required: boolean;
	Name: string;
	Sku: string;
	clone() : AssetConfig;
	static C(Other: UObject | any): AssetConfig;
}

declare class AssetConfigArray { 
	ConfigArray: AssetConfig[];
	clone() : AssetConfigArray;
	static C(Other: UObject | any): AssetConfigArray;
}

declare class OculusPlatformToolSettings extends UObject { 
	OculusRiftBuildDirectory: string;
	OculusRiftBuildVersion: string;
	OculusRiftLaunchParams: string;
	OculusRiftFireWallException: boolean;
	OculusRift2DLaunchPath: string;
	OculusRift2DLaunchParams: string;
	OculusRedistPackages: RedistPackage[];
	OculusTargetPlatform: EOculusPlatformTarget;
	OculusApplicationID: string[];
	OculusApplicationToken: string[];
	OculusReleaseChannel: string[];
	OculusReleaseNote: string[];
	OculusLaunchFilePath: string[];
	OculusRiftGamepadEmulation: EOculusGamepadEmulation;
	OculusLanguagePacksPath: string[];
	OculusExpansionFilesPath: string[];
	OculusAssetConfigs: AssetConfigArray[];
	static Load(ResourceName: string): OculusPlatformToolSettings;
	static Find(Outer: UObject, ResourceName: string): OculusPlatformToolSettings;
	static GetDefaultObject(): OculusPlatformToolSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusPlatformToolSettings;
	static C(Other: UObject | any): OculusPlatformToolSettings;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	Icon: JavascriptSlateIcon;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	ForceCommit(): void;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	IconStyleName: string;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
	static GetLevelEditorActions(): JavascriptUICommandList;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	TextSubNamespace: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetPicker extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryObject: UObject;
	AllowedClasses: string;
	static Load(ResourceName: string): JavascriptAssetPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker;
	static GetDefaultObject(): JavascriptAssetPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker;
	SetCategoryObject(InCategoryObject: UObject): void;
	SetAllowedClasses(InAllowedClasses: string): void;
	static C(Other: UObject | any): JavascriptAssetPicker;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptColorPicker extends Widget { 
	OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) => void>;
	SelectedColor: LinearColor;
	static Load(ResourceName: string): JavascriptColorPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker;
	static GetDefaultObject(): JavascriptColorPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker;
	static C(Other: UObject | any): JavascriptColorPicker;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptCurveTableEditor extends Widget { 
	static Load(ResourceName: string): JavascriptCurveTableEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptCurveTableEditor;
	static GetDefaultObject(): JavascriptCurveTableEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCurveTableEditor;
	SetObject(UObject: CurveTable,bForceRefresh: boolean): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): JavascriptCurveTableEditor;
}

declare class JavascriptWholeRowDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	CustomWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptWholeRowDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptWholeRowDetailCustomization;
	static GetDefaultObject(): JavascriptWholeRowDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWholeRowDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptWholeRowDetailCustomization;
}

declare class JavascriptDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	NameWidget: JavascriptSlateWidget;
	ValueWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptDetailCustomization;
	static GetDefaultObject(): JavascriptDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptDetailCustomization;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostPIEStarted(bIsSimulating: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnMainFrameCreationFinished_Friendly(): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditPasteActorsEnd(): void;
	OnEditPasteActorsBegin(): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnEditCutActorsEnd(): void;
	OnEditCutActorsBegin(): void;
	OnEditCopyActorsEnd(): void;
	OnEditCopyActorsBegin(): void;
	OnDuplicateActorsEnd(): void;
	OnDuplicateActorsBegin(): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnDeleteActorsEnd(): void;
	OnDeleteActorsBegin(): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddMenuByCommands(UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddSubMenu(Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject | any): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static ToggleIsExecuteTestModePIE(): boolean;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLocation(Actor: Actor,NewLocation: Vector,bSweep: boolean,SweepHitResult?: HitResult,bTeleport?: boolean): {SweepHitResult: HitResult, $: boolean};
	static SetActorLabelUnique(Actor: Actor,NewActorLabel: string,InExistingActorLabels: string[]): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static OpenDirectoryDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	static NotifyUpdateCurveTable(InCurveTable: CurveTable): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static HasMetaData(Field: Field,Key: string): boolean;
	static GetUniqueID(InObject: UObject): number;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKeyNameByKeyEvent(Event: KeyEvent): string;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetIsShiftDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsExecuteTestModePIE(): boolean;
	static GetIsControlDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsAltDownByKeyEvent(Event: KeyEvent): boolean;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetEditorPlayWorld(): World;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetDataTableAsJSON(InDataTable: DataTable,InDTExportFlags: number): string;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorRotation(Actor: Actor): Rotator;
	static GetActorLocation(Actor: Actor): Vector;
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ConditionalBeginDestroybyUObject(TargetObject: UObject): boolean;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddRichCurve(InCurveTable: CurveTable,Key: string,InCurve: RichCurve): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	InvokeTab(SearchForTabId: string): void;
	InsertNewTab(PlaceholderId: string,SearchForTabId: string,NewTab: JavascriptEditorTab): void;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightLocation(InLightPos: Vector): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnUsesToolkits: UnrealEngineDelegate<() => boolean>;
	OnIsCompatibleWith: UnrealEngineDelegate<(bIsCompatibleWith: string) => boolean>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): any;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateInvalidCellWidget: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	IsCustomNode: boolean;
	WidgetFinalized: JavascriptFunction;
	Bidirectional: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetPinTextColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptTextProperty { 
	Key: string;
	Namespace: string;
	Value: string;
	TableId: string;
	clone() : JavascriptTextProperty;
	static C(Other: UObject | any): JavascriptTextProperty;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class AudioSynesthesiaNRTFactory extends Factory { 
	AudioSynesthesiaNRTClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTFactory;
}

declare class AudioSynesthesiaNRTSettingsFactory extends Factory { 
	AudioSynesthesiaNRTSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTSettingsFactory;
}

declare class MockAI extends UObject { 
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare class TestBTDecorator_Blackboard extends BTDecorator_Blackboard { 
	LogIndexBecomeRelevant: number;
	LogIndexCeaseRelevant: number;
	LogIndexCalculate: number;
	static Load(ResourceName: string): TestBTDecorator_Blackboard;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_Blackboard;
	static GetDefaultObject(): TestBTDecorator_Blackboard;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_Blackboard;
	static C(Other: UObject | any): TestBTDecorator_Blackboard;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	KeyNameTick: string;
	LogTick: number;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAbortFinish: number;
	ExecuteTicks: number;
	AbortTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare type EPinnedCommandListType = 'Command' | 'CustomWidget' | 'EPinnedCommandListType_MAX';
declare var EPinnedCommandListType : { Command:'Command',CustomWidget:'CustomWidget',EPinnedCommandListType_MAX:'EPinnedCommandListType_MAX', };
declare class PinnedCommandListCommand { 
	Name: string;
	Binding: string;
	Type: EPinnedCommandListType;
	clone() : PinnedCommandListCommand;
	static C(Other: UObject | any): PinnedCommandListCommand;
}

declare class PinnedCommandListContext { 
	Name: string;
	Commands: PinnedCommandListCommand[];
	clone() : PinnedCommandListContext;
	static C(Other: UObject | any): PinnedCommandListContext;
}

declare class PinnedCommandListSettings extends UObject { 
	Contexts: PinnedCommandListContext[];
	static Load(ResourceName: string): PinnedCommandListSettings;
	static Find(Outer: UObject, ResourceName: string): PinnedCommandListSettings;
	static GetDefaultObject(): PinnedCommandListSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PinnedCommandListSettings;
	static C(Other: UObject | any): PinnedCommandListSettings;
}

declare class AnimationEditorPreviewActor extends Actor { 
	static GetDefaultObject(): AnimationEditorPreviewActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationEditorPreviewActor;
	static C(Other: UObject | any): AnimationEditorPreviewActor;
}

declare class LODInfoUILayout extends UObject { 
	LODInfo: SkeletalMeshLODInfo;
	static Load(ResourceName: string): LODInfoUILayout;
	static Find(Outer: UObject, ResourceName: string): LODInfoUILayout;
	static GetDefaultObject(): LODInfoUILayout;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODInfoUILayout;
	static C(Other: UObject | any): LODInfoUILayout;
}

declare class PersonaPreviewSceneController extends UObject { 
	static Load(ResourceName: string): PersonaPreviewSceneController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneController;
	static GetDefaultObject(): PersonaPreviewSceneController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneController;
	static C(Other: UObject | any): PersonaPreviewSceneController;
}

declare class PersonaPreviewSceneAnimationController extends PersonaPreviewSceneController { 
	Animation: AnimationAsset;
	static Load(ResourceName: string): PersonaPreviewSceneAnimationController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneAnimationController;
	static GetDefaultObject(): PersonaPreviewSceneAnimationController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneAnimationController;
	static C(Other: UObject | any): PersonaPreviewSceneAnimationController;
}

declare class PersonaPreviewSceneDefaultController extends PersonaPreviewSceneController { 
	static Load(ResourceName: string): PersonaPreviewSceneDefaultController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDefaultController;
	static GetDefaultObject(): PersonaPreviewSceneDefaultController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDefaultController;
	static C(Other: UObject | any): PersonaPreviewSceneDefaultController;
}

declare class PersonaPreviewSceneDescription extends UObject { 
	PreviewController: UnrealEngineClass;
	PreviewControllerInstance: PersonaPreviewSceneController;
	PreviewControllerInstances: PersonaPreviewSceneController[];
	PreviewMesh: SkeletalMesh;
	PreviewAnimationBlueprint: AnimBlueprint;
	ApplicationMethod: EPreviewAnimationBlueprintApplicationMethod;
	LinkedAnimGraphTag: string;
	AdditionalMeshes: DataAsset;
	DefaultAdditionalMeshes: PreviewMeshCollection;
	static Load(ResourceName: string): PersonaPreviewSceneDescription;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDescription;
	static GetDefaultObject(): PersonaPreviewSceneDescription;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDescription;
	static C(Other: UObject | any): PersonaPreviewSceneDescription;
}

declare class PersonaPreviewSceneRefPoseController extends PersonaPreviewSceneController { 
	bResetBoneTransforms: boolean;
	static Load(ResourceName: string): PersonaPreviewSceneRefPoseController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneRefPoseController;
	static GetDefaultObject(): PersonaPreviewSceneRefPoseController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneRefPoseController;
	static C(Other: UObject | any): PersonaPreviewSceneRefPoseController;
}

declare class SkinWeightImportOptions extends UObject { 
	ProfileName: string;
	FilePath: string;
	LODIndex: number;
	static Load(ResourceName: string): SkinWeightImportOptions;
	static Find(Outer: UObject, ResourceName: string): SkinWeightImportOptions;
	static GetDefaultObject(): SkinWeightImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightImportOptions;
	static C(Other: UObject | any): SkinWeightImportOptions;
}

declare class UndoHistorySettings extends UObject { 
	bShowTransactionDetails: boolean;
	static Load(ResourceName: string): UndoHistorySettings;
	static Find(Outer: UObject, ResourceName: string): UndoHistorySettings;
	static GetDefaultObject(): UndoHistorySettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UndoHistorySettings;
	static C(Other: UObject | any): UndoHistorySettings;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare type EMeshInstancingReplacementMethod = 'RemoveOriginalActors' | 'KeepOriginalActorsAsEditorOnly' | 'EMeshInstancingReplacementMethod_MAX';
declare var EMeshInstancingReplacementMethod : { RemoveOriginalActors:'RemoveOriginalActors',KeepOriginalActorsAsEditorOnly:'KeepOriginalActorsAsEditorOnly',EMeshInstancingReplacementMethod_MAX:'EMeshInstancingReplacementMethod_MAX', };
declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	MeshReplacementMethod: EMeshInstancingReplacementMethod;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_12' | 'IOS_13' | 'IOS_14' | 'IOS_MAX';
declare var EIOSVersion : { IOS_12:'IOS_12',IOS_13:'IOS_13',IOS_14:'IOS_14',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bCookPVRTCTextures: boolean;
	bCookASTCTextures: boolean;
	bBuildAsFramework: boolean;
	WindowsMetalToolchainOverride: IOSBuildResourceDirectory;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bRunAsCurrentUser: boolean;
	bGameSupportsMultipleActiveControllers: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	bSupportsFilesApp: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	bEnableDynamicMaxFPS: boolean;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bCustomLaunchscreenStoryboard: boolean;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	bDisableHTTPS: boolean;
	MaxShaderLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	IndirectArgumentTier: number;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bUseAudioStreamCaching: boolean;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare type ELuminFrameTimingHint = 'Unspecified' | 'Maximum' | 'FPS_60' | 'FPS_120' | 'ELuminFrameTimingHint_MAX';
declare var ELuminFrameTimingHint : { Unspecified:'Unspecified',Maximum:'Maximum',FPS_60:'FPS_60',FPS_120:'FPS_120',ELuminFrameTimingHint_MAX:'ELuminFrameTimingHint_MAX', };
declare class LocalizedIconInfo { 
	LanguageCode: string;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	clone() : LocalizedIconInfo;
	static C(Other: UObject | any): LocalizedIconInfo;
}

declare class LocalizedIconInfos { 
	IconData: LocalizedIconInfo[];
	clone() : LocalizedIconInfos;
	static C(Other: UObject | any): LocalizedIconInfos;
}

declare type ELuminPrivilege = 'Invalid' | 'BatteryInfo' | 'CameraCapture' | 'ComputerVision' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PcfRead' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'GesturesSubscribe' | 'GesturesConfig' | 'AddressBookRead' | 'AddressBookWrite' | 'AddressBookBasicAccess' | 'CoarseLocation' | 'FineLocation' | 'HandMesh' | 'WifiStatusRead' | 'SocialConnectionsInvitesAccess' | 'SocialConnectionsSelectAccess' | 'SecureBrowserWindow' | 'BluetoothAdapterExternalApp' | 'BluetoothAdapterUser' | 'BluetoothGattWrite' | 'ELuminPrivilege_MAX';
declare var ELuminPrivilege : { Invalid:'Invalid',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',ComputerVision:'ComputerVision',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PcfRead:'PcfRead',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',AddressBookRead:'AddressBookRead',AddressBookWrite:'AddressBookWrite',AddressBookBasicAccess:'AddressBookBasicAccess',CoarseLocation:'CoarseLocation',FineLocation:'FineLocation',HandMesh:'HandMesh',WifiStatusRead:'WifiStatusRead',SocialConnectionsInvitesAccess:'SocialConnectionsInvitesAccess',SocialConnectionsSelectAccess:'SocialConnectionsSelectAccess',SecureBrowserWindow:'SecureBrowserWindow',BluetoothAdapterExternalApp:'BluetoothAdapterExternalApp',BluetoothAdapterUser:'BluetoothAdapterUser',BluetoothGattWrite:'BluetoothGattWrite',ELuminPrivilege_MAX:'ELuminPrivilege_MAX', };
declare type ELuminComponentSubElementType = 'FileExtension' | 'MimeType' | 'Mode' | 'MusicAttribute' | 'Schema' | 'ELuminComponentSubElementType_MAX';
declare var ELuminComponentSubElementType : { FileExtension:'FileExtension',MimeType:'MimeType',Mode:'Mode',MusicAttribute:'MusicAttribute',Schema:'Schema',ELuminComponentSubElementType_MAX:'ELuminComponentSubElementType_MAX', };
declare class LuminComponentSubElement { 
	ElementType: ELuminComponentSubElementType;
	Value: string;
	clone() : LuminComponentSubElement;
	static C(Other: UObject | any): LuminComponentSubElement;
}

declare type ELuminComponentType = 'Universe' | 'Fullscreen' | 'SearchProvider' | 'MusicService' | 'Console' | 'SystemUI' | 'ELuminComponentType_MAX';
declare var ELuminComponentType : { Universe:'Universe',Fullscreen:'Fullscreen',SearchProvider:'SearchProvider',MusicService:'MusicService',Console:'Console',SystemUI:'SystemUI',ELuminComponentType_MAX:'ELuminComponentType_MAX', };
declare class LuminComponentElement { 
	Name: string;
	VisibleName: string;
	ExecutableName: string;
	ComponentType: ELuminComponentType;
	ExtraComponentSubElements: LuminComponentSubElement[];
	clone() : LuminComponentElement;
	static C(Other: UObject | any): LuminComponentElement;
}

declare class LocalizedAppName { 
	LanguageCode: string;
	AppName: string;
	clone() : LocalizedAppName;
	static C(Other: UObject | any): LocalizedAppName;
}

declare class LuminRuntimeSettings extends UObject { 
	PackageName: string;
	ApplicationDisplayName: string;
	FrameTimingHint: ELuminFrameTimingHint;
	bProtectedContent: boolean;
	bManualCallToAppReady: boolean;
	bUseMobileRendering: boolean;
	bUseVulkan: boolean;
	Certificate: FilePath;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	LocalizedIconInfos: LocalizedIconInfos;
	VersionCode: number;
	MinimumAPILevel: number;
	AppPrivileges: ELuminPrivilege[];
	ExtraComponentSubElements: LuminComponentSubElement[];
	ExtraComponentElements: LuminComponentElement[];
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	bRemoveDebugInfo: boolean;
	VulkanValidationLayerLibs: DirectoryPath;
	bFrameVignette: boolean;
	LocalizedAppNames: LocalizedAppName[];
	static Load(ResourceName: string): LuminRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
	static GetDefaultObject(): LuminRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminRuntimeSettings;
	static C(Other: UObject | any): LuminRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class MagicLeapSDKSettings extends UObject { 
	MLSDKPath: DirectoryPath;
	static Load(ResourceName: string): MagicLeapSDKSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSDKSettings;
	static GetDefaultObject(): MagicLeapSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSDKSettings;
	static C(Other: UObject | any): MagicLeapSDKSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	GraphsBackgroundColor: Color;
	bPresistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bConstrainGraphToLocalMinMax: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	bForceUniqueLogNames: boolean;
	PresistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAssetCommon[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare type EPaintMode = 'Vertices' | 'Textures' | 'EPaintMode_MAX';
declare var EPaintMode : { Vertices:'Vertices',Textures:'Textures',EPaintMode_MAX:'EPaintMode_MAX', };
declare type EMeshPaintMode = 'PaintColors' | 'PaintWeights' | 'EMeshPaintMode_MAX';
declare var EMeshPaintMode : { PaintColors:'PaintColors',PaintWeights:'PaintWeights',EMeshPaintMode_MAX:'EMeshPaintMode_MAX', };
declare type ETextureWeightTypes = 'AlphaLerp' | 'RGB' | 'ARGB' | 'OneMinusARGB' | 'ETextureWeightTypes_MAX';
declare var ETextureWeightTypes : { AlphaLerp:'AlphaLerp',RGB:'RGB',ARGB:'ARGB',OneMinusARGB:'OneMinusARGB',ETextureWeightTypes_MAX:'ETextureWeightTypes_MAX', };
declare type ETexturePaintIndex = 'TextureOne' | 'TextureTwo' | 'TextureThree' | 'TextureFour' | 'TextureFive' | 'ETexturePaintIndex_MAX';
declare var ETexturePaintIndex : { TextureOne:'TextureOne',TextureTwo:'TextureTwo',TextureThree:'TextureThree',TextureFour:'TextureFour',TextureFive:'TextureFive',ETexturePaintIndex_MAX:'ETexturePaintIndex_MAX', };
declare class VertexPaintSettings { 
	MeshPaintMode: EMeshPaintMode;
	PaintColor: LinearColor;
	EraseColor: LinearColor;
	bWriteRed: boolean;
	bWriteGreen: boolean;
	bWriteBlue: boolean;
	bWriteAlpha: boolean;
	TextureWeightType: ETextureWeightTypes;
	PaintTextureWeightIndex: ETexturePaintIndex;
	EraseTextureWeightIndex: ETexturePaintIndex;
	bPaintOnSpecificLOD: boolean;
	LODIndex: number;
	clone() : VertexPaintSettings;
	static C(Other: UObject | any): VertexPaintSettings;
}

declare class TexturePaintSettings { 
	PaintColor: LinearColor;
	EraseColor: LinearColor;
	bWriteRed: boolean;
	bWriteGreen: boolean;
	bWriteBlue: boolean;
	bWriteAlpha: boolean;
	UVChannel: number;
	bEnableSeamPainting: boolean;
	PaintTexture: Texture2D;
	clone() : TexturePaintSettings;
	static C(Other: UObject | any): TexturePaintSettings;
}

declare class PaintModeSettings extends MeshPaintSettings { 
	PaintMode: EPaintMode;
	VertexPaintSettings: VertexPaintSettings;
	TexturePaintSettings: TexturePaintSettings;
	static Load(ResourceName: string): PaintModeSettings;
	static Find(Outer: UObject, ResourceName: string): PaintModeSettings;
	static GetDefaultObject(): PaintModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintModeSettings;
	static C(Other: UObject | any): PaintModeSettings;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static GetDefaultObject(): ActorFactoryLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject | any): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'Interval' | 'Terrace' | 'ELandscapeToolFlattenMode_MAX';
declare var ELandscapeToolFlattenMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',Interval:'Interval',Terrace:'Terrace',ELandscapeToolFlattenMode_MAX:'ELandscapeToolFlattenMode_MAX', };
declare type ELandscapeToolErosionMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolErosionMode_MAX';
declare var ELandscapeToolErosionMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolErosionMode_MAX:'ELandscapeToolErosionMode_MAX', };
declare type ELandscapeToolHydroErosionMode = 'Invalid' | 'Both' | 'Positive' | 'ELandscapeToolHydroErosionMode_MAX';
declare var ELandscapeToolHydroErosionMode : { Invalid:'Invalid',Both:'Both',Positive:'Positive',ELandscapeToolHydroErosionMode_MAX:'ELandscapeToolHydroErosionMode_MAX', };
declare type ELandscapeToolNoiseMode = 'Invalid' | 'Both' | 'Add' | 'Sub' | 'ELandscapeToolNoiseMode_MAX';
declare var ELandscapeToolNoiseMode : { Invalid:'Invalid',Both:'Both',Add:'Add',Sub:'Sub',ELandscapeToolNoiseMode_MAX:'ELandscapeToolNoiseMode_MAX', };
declare type ELandscapeToolPasteMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolPasteMode_MAX';
declare var ELandscapeToolPasteMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolPasteMode_MAX:'ELandscapeToolPasteMode_MAX', };
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject | any): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = 'MinusXToPlusX' | 'PlusXToMinusX' | 'MinusYToPlusY' | 'PlusYToMinusY' | 'RotateMinusXToPlusX' | 'RotatePlusXToMinusX' | 'RotateMinusYToPlusY' | 'RotatePlusYToMinusY' | 'ELandscapeMirrorOperation_MAX';
declare var ELandscapeMirrorOperation : { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY',RotateMinusXToPlusX:'RotateMinusXToPlusX',RotatePlusXToMinusX:'RotatePlusXToMinusX',RotateMinusYToPlusY:'RotateMinusYToPlusY',RotatePlusYToMinusY:'RotatePlusYToMinusY',ELandscapeMirrorOperation_MAX:'ELandscapeMirrorOperation_MAX', };
declare type ELandscapeConvertMode = 'Invalid' | 'Expand' | 'Clip' | 'Resample' | 'ELandscapeConvertMode_MAX';
declare var ELandscapeConvertMode : { Invalid:'Invalid',Expand:'Expand',Clip:'Clip',Resample:'Resample',ELandscapeConvertMode_MAX:'ELandscapeConvertMode_MAX', };
declare type ELandscapeImportResult = 'Success' | 'Warning' | 'Error' | 'ELandscapeImportResult_MAX';
declare var ELandscapeImportResult : { Success:'Success',Warning:'Warning',Error:'Error',ELandscapeImportResult_MAX:'ELandscapeImportResult_MAX', };
declare type ELandscapeImportAlphamapType = 'Additive' | 'Layered' | 'ELandscapeImportAlphamapType_MAX';
declare var ELandscapeImportAlphamapType : { Additive:'Additive',Layered:'Layered',ELandscapeImportAlphamapType_MAX:'ELandscapeImportAlphamapType_MAX', };
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject | any): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	ImportResult: ELandscapeImportResult;
	ErrorMessage: string;
	clone() : LandscapeImportLayer;
	static C(Other: UObject | any): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EColorChannel_MAX';
declare var EColorChannel : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EColorChannel_MAX:'EColorChannel_MAX', };
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	bCombinedLayersOperation: boolean;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
	TerraceInterval: number;
	TerraceSmooth: number;
	bFlattenEyeDropperModeActivated: boolean;
	FlattenEyeDropperModeDesiredTarget: number;
	RampWidth: number;
	RampSideFalloff: number;
	SmoothFilterKernelSize: number;
	bDetailSmooth: boolean;
	DetailScale: number;
	ErodeThresh: number;
	ErodeSurfaceThickness: number;
	ErodeIterationNum: number;
	ErosionNoiseMode: ELandscapeToolErosionMode;
	ErosionNoiseScale: number;
	RainAmount: number;
	SedimentCapacity: number;
	HErodeIterationNum: number;
	RainDistMode: ELandscapeToolHydroErosionMode;
	RainDistScale: number;
	bHErosionDetailSmooth: boolean;
	HErosionDetailScale: number;
	NoiseMode: ELandscapeToolNoiseMode;
	NoiseScale: number;
	bUseSelectedRegion: boolean;
	bUseNegativeMask: boolean;
	PasteMode: ELandscapeToolPasteMode;
	bApplyToAllTargets: boolean;
	bSnapGizmo: boolean;
	bSmoothGizmoBrush: boolean;
	GizmoHeightmapFilenameString: string;
	GizmoImportSize: IntPoint;
	GizmoImportLayers: GizmoImportLayer[];
	MirrorPoint: Vector2D;
	MirrorOp: ELandscapeMirrorOperation;
	MirrorSmoothingWidth: number;
	BlueprintBrush: UnrealEngineClass;
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: any;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	ImportLandscape_HeightmapErrorMessage: string;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: any;
	ImportLandscape_Height: any;
	ImportLandscape_Data: any[];
	bCanHaveLayersContent: boolean;
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	BrushFalloff: number;
	bUseClayBrush: boolean;
	AlphaBrushScale: number;
	bAlphaBrushAutoRotate: boolean;
	AlphaBrushRotation: number;
	AlphaBrushPanU: number;
	AlphaBrushPanV: number;
	bUseWorldSpacePatternBrush: boolean;
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	AlphaTexture: Texture2D;
	AlphaTextureChannel: EColorChannel;
	AlphaTextureSizeX: number;
	AlphaTextureSizeY: number;
	AlphaTextureData: number[];
	BrushComponentSize: number;
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	TargetDisplayOrder: ELandscapeLayerDisplayMode;
	ShowUnusedLayers: boolean;
	CurrentLayerIndex: number;
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static GetDefaultObject(): LandscapeEditorObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject | any): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	static GetDefaultObject(): LandscapePlaceholder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject | any): LandscapePlaceholder;
}

declare class ActorFactoryProceduralFoliage extends ActorFactoryBoxVolume { 
	static Load(ResourceName: string): ActorFactoryProceduralFoliage;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryProceduralFoliage;
	static GetDefaultObject(): ActorFactoryProceduralFoliage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryProceduralFoliage;
	static C(Other: UObject | any): ActorFactoryProceduralFoliage;
}

declare class FoliageType_ActorThumbnailRenderer extends BlueprintThumbnailRenderer { 
	static Load(ResourceName: string): FoliageType_ActorThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): FoliageType_ActorThumbnailRenderer;
	static GetDefaultObject(): FoliageType_ActorThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ActorThumbnailRenderer;
	static C(Other: UObject | any): FoliageType_ActorThumbnailRenderer;
}

declare class FoliageType_ISMThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static GetDefaultObject(): FoliageType_ISMThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ISMThumbnailRenderer;
	static C(Other: UObject | any): FoliageType_ISMThumbnailRenderer;
}

declare class FoliageType_InstancedStaticMeshFactory extends Factory { 
	static Load(ResourceName: string): FoliageType_InstancedStaticMeshFactory;
	static Find(Outer: UObject, ResourceName: string): FoliageType_InstancedStaticMeshFactory;
	static GetDefaultObject(): FoliageType_InstancedStaticMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_InstancedStaticMeshFactory;
	static C(Other: UObject | any): FoliageType_InstancedStaticMeshFactory;
}

declare class FoliageType_ActorFactory extends Factory { 
	static Load(ResourceName: string): FoliageType_ActorFactory;
	static Find(Outer: UObject, ResourceName: string): FoliageType_ActorFactory;
	static GetDefaultObject(): FoliageType_ActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ActorFactory;
	static C(Other: UObject | any): FoliageType_ActorFactory;
}

declare class LandscapeGrassTypeFactory extends Factory { 
	static Load(ResourceName: string): LandscapeGrassTypeFactory;
	static Find(Outer: UObject, ResourceName: string): LandscapeGrassTypeFactory;
	static GetDefaultObject(): LandscapeGrassTypeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeGrassTypeFactory;
	static C(Other: UObject | any): LandscapeGrassTypeFactory;
}

declare class ProceduralFoliageSpawnerFactory extends Factory { 
	static Load(ResourceName: string): ProceduralFoliageSpawnerFactory;
	static Find(Outer: UObject, ResourceName: string): ProceduralFoliageSpawnerFactory;
	static GetDefaultObject(): ProceduralFoliageSpawnerFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralFoliageSpawnerFactory;
	static C(Other: UObject | any): ProceduralFoliageSpawnerFactory;
}

declare class RuntimeVirtualTextureFactory extends Factory { 
	static Load(ResourceName: string): RuntimeVirtualTextureFactory;
	static Find(Outer: UObject, ResourceName: string): RuntimeVirtualTextureFactory;
	static GetDefaultObject(): RuntimeVirtualTextureFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RuntimeVirtualTextureFactory;
	static C(Other: UObject | any): RuntimeVirtualTextureFactory;
}

declare class RuntimeVirtualTextureThumbnailRenderer extends ThumbnailRenderer { 
	static Load(ResourceName: string): RuntimeVirtualTextureThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): RuntimeVirtualTextureThumbnailRenderer;
	static GetDefaultObject(): RuntimeVirtualTextureThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RuntimeVirtualTextureThumbnailRenderer;
	static C(Other: UObject | any): RuntimeVirtualTextureThumbnailRenderer;
}

declare class VirtualTextureBuilderFactory extends Factory { 
	static Load(ResourceName: string): VirtualTextureBuilderFactory;
	static Find(Outer: UObject, ResourceName: string): VirtualTextureBuilderFactory;
	static GetDefaultObject(): VirtualTextureBuilderFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VirtualTextureBuilderFactory;
	static C(Other: UObject | any): VirtualTextureBuilderFactory;
}

declare class VirtualTextureBuilderThumbnailRenderer extends TextureThumbnailRenderer { 
	static Load(ResourceName: string): VirtualTextureBuilderThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): VirtualTextureBuilderThumbnailRenderer;
	static GetDefaultObject(): VirtualTextureBuilderThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VirtualTextureBuilderThumbnailRenderer;
	static C(Other: UObject | any): VirtualTextureBuilderThumbnailRenderer;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

