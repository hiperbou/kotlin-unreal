/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
declare type Beam2SourceTargetMethod = 'PEB2STM_Default' | 'PEB2STM_UserSet' | 'PEB2STM_Emitter' | 'PEB2STM_Particle' | 'PEB2STM_Actor';
declare var Beam2SourceTargetMethod : { PEB2STM_Default:'PEB2STM_Default',PEB2STM_UserSet:'PEB2STM_UserSet',PEB2STM_Emitter:'PEB2STM_Emitter',PEB2STM_Particle:'PEB2STM_Particle',PEB2STM_Actor:'PEB2STM_Actor', };
declare type Beam2SourceTargetTangentMethod = 'PEB2STTM_Direct' | 'PEB2STTM_UserSet' | 'PEB2STTM_Distribution' | 'PEB2STTM_Emitter';
declare var Beam2SourceTargetTangentMethod : { PEB2STTM_Direct:'PEB2STTM_Direct',PEB2STTM_UserSet:'PEB2STTM_UserSet',PEB2STTM_Distribution:'PEB2STTM_Distribution',PEB2STTM_Emitter:'PEB2STTM_Emitter', };
declare class ParticleModuleBeamSource extends ParticleModuleBeamBase { 
	SourceMethod: Beam2SourceTargetMethod;
	SourceName: string;
	bSourceAbsolute: boolean;
	Source: RawDistributionVector;
	bLockSource: boolean;
	SourceTangentMethod: Beam2SourceTargetTangentMethod;
	SourceTangent: RawDistributionVector;
	bLockSourceTangent: boolean;
	SourceStrength: RawDistributionFloat;
	bLockSourceStength: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamSource;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleBeamSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamSource;
	static C(Other: UObject): ParticleModuleBeamSource;
}

declare class ParticleModuleBeamTarget extends ParticleModuleBeamBase { 
	TargetMethod: Beam2SourceTargetMethod;
	TargetName: string;
	Target: RawDistributionVector;
	bTargetAbsolute: boolean;
	bLockTarget: boolean;
	TargetTangentMethod: Beam2SourceTargetTangentMethod;
	TargetTangent: RawDistributionVector;
	bLockTargetTangent: boolean;
	TargetStrength: RawDistributionFloat;
	bLockTargetStength: boolean;
	LockRadius: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamTarget;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamTarget;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleBeamTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamTarget;
	static C(Other: UObject): ParticleModuleBeamTarget;
}

declare class ParticleModuleCameraBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleCameraBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleCameraBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraBase;
	static C(Other: UObject): ParticleModuleCameraBase;
}

declare type EParticleCameraOffsetUpdateMethod = 'EPCOUM_DirectSet' | 'EPCOUM_Additive' | 'EPCOUM_Scalar';
declare var EParticleCameraOffsetUpdateMethod : { EPCOUM_DirectSet:'EPCOUM_DirectSet',EPCOUM_Additive:'EPCOUM_Additive',EPCOUM_Scalar:'EPCOUM_Scalar', };
declare class ParticleModuleCameraOffset extends ParticleModuleCameraBase { 
	CameraOffset: RawDistributionFloat;
	bSpawnTimeOnly: boolean;
	UpdateMethod: EParticleCameraOffsetUpdateMethod;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraOffset;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleCameraOffset;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleCameraOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraOffset;
	static C(Other: UObject): ParticleModuleCameraOffset;
}

declare class ParticleModuleCollisionBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleCollisionBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleCollisionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionBase;
	static C(Other: UObject): ParticleModuleCollisionBase;
}

declare type EParticleCollisionComplete = 'EPCC_Kill' | 'EPCC_Freeze' | 'EPCC_HaltCollisions' | 'EPCC_FreezeTranslation' | 'EPCC_FreezeRotation' | 'EPCC_FreezeMovement';
declare var EParticleCollisionComplete : { EPCC_Kill:'EPCC_Kill',EPCC_Freeze:'EPCC_Freeze',EPCC_HaltCollisions:'EPCC_HaltCollisions',EPCC_FreezeTranslation:'EPCC_FreezeTranslation',EPCC_FreezeRotation:'EPCC_FreezeRotation',EPCC_FreezeMovement:'EPCC_FreezeMovement', };
declare class ParticleModuleCollision extends ParticleModuleCollisionBase { 
	DampingFactor: RawDistributionVector;
	DampingFactorRotation: RawDistributionVector;
	MaxCollisions: RawDistributionFloat;
	CollisionCompletionOption: EParticleCollisionComplete;
	CollisionTypes: EObjectTypeQuery[];
	bApplyPhysics: boolean;
	bIgnoreTriggerVolumes: boolean;
	ParticleMass: RawDistributionFloat;
	DirScalar: number;
	bPawnsDoNotDecrementCount: boolean;
	bOnlyVerticalNormalsDecrementCount: boolean;
	VerticalFudgeFactor: number;
	DelayAmount: RawDistributionFloat;
	bDropDetail: boolean;
	bCollideOnlyIfVisible: boolean;
	bIgnoreSourceActor: boolean;
	MaxCollisionDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollision;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleCollision;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleCollision;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollision;
	static C(Other: UObject): ParticleModuleCollision;
}

declare type EParticleCollisionResponse = 'Bounce' | 'Stop' | 'Kill';
declare var EParticleCollisionResponse : { Bounce:'Bounce',Stop:'Stop',Kill:'Kill', };
declare type EParticleCollisionMode = 'SceneDepth' | 'DistanceField';
declare var EParticleCollisionMode : { SceneDepth:'SceneDepth',DistanceField:'DistanceField', };
declare class ParticleModuleCollisionGPU extends ParticleModuleCollisionBase { 
	Resilience: RawDistributionFloat;
	ResilienceScaleOverLife: RawDistributionFloat;
	Friction: number;
	RadiusScale: number;
	RadiusBias: number;
	Response: EParticleCollisionResponse;
	CollisionMode: EParticleCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionGPU;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleCollisionGPU;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleCollisionGPU;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionGPU;
	static C(Other: UObject): ParticleModuleCollisionGPU;
}

declare class ParticleModuleColorBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleColorBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleColorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorBase;
	static C(Other: UObject): ParticleModuleColorBase;
}

declare class ParticleModuleColor extends ParticleModuleColorBase { 
	StartColor: RawDistributionVector;
	StartAlpha: RawDistributionFloat;
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleColor;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor;
	static C(Other: UObject): ParticleModuleColor;
}

declare class ParticleRandomSeedInfo { 
	ParameterName: string;
	bGetSeedFromInstance: boolean;
	bInstanceSeedIsIndex: boolean;
	bResetSeedOnEmitterLooping: boolean;
	bRandomlySelectSeedArray: boolean;
	RandomSeeds: number[];
	clone() : ParticleRandomSeedInfo;
	static C(Other: UObject): ParticleRandomSeedInfo;
}

declare class ParticleModuleColor_Seeded extends ParticleModuleColor { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleColor_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleColor_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor_Seeded;
	static C(Other: UObject): ParticleModuleColor_Seeded;
}

declare class ParticleModuleColorOverLife extends ParticleModuleColorBase { 
	ColorOverLife: RawDistributionVector;
	AlphaOverLife: RawDistributionFloat;
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorOverLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleColorOverLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleColorOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorOverLife;
	static C(Other: UObject): ParticleModuleColorOverLife;
}

declare class ParticleModuleColorScaleOverLife extends ParticleModuleColorBase { 
	ColorScaleOverLife: RawDistributionVector;
	AlphaScaleOverLife: RawDistributionFloat;
	bEmitterTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorScaleOverLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleColorScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleColorScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorScaleOverLife;
	static C(Other: UObject): ParticleModuleColorScaleOverLife;
}

declare class ParticleModuleEventReceiverKillParticles extends ParticleModuleEventReceiverBase { 
	bStopSpawning: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverKillParticles;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleEventReceiverKillParticles;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleEventReceiverKillParticles;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverKillParticles;
	static C(Other: UObject): ParticleModuleEventReceiverKillParticles;
}

declare class ParticleModuleEventReceiverSpawn extends ParticleModuleEventReceiverBase { 
	SpawnCount: RawDistributionFloat;
	bUseParticleTime: boolean;
	bUsePSysLocation: boolean;
	bInheritVelocity: boolean;
	InheritVelocityScale: RawDistributionVector;
	PhysicalMaterials: PhysicalMaterial[];
	bBanPhysicalMaterials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverSpawn;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleEventReceiverSpawn;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleEventReceiverSpawn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverSpawn;
	static C(Other: UObject): ParticleModuleEventReceiverSpawn;
}

declare class ParticleModuleKillBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleKillBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleKillBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBase;
	static C(Other: UObject): ParticleModuleKillBase;
}

declare class ParticleModuleKillBox extends ParticleModuleKillBase { 
	LowerLeftCorner: RawDistributionVector;
	UpperRightCorner: RawDistributionVector;
	bAbsolute: boolean;
	bKillInside: boolean;
	bAxisAlignedAndFixedSize: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBox;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleKillBox;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleKillBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBox;
	static C(Other: UObject): ParticleModuleKillBox;
}

declare class ParticleModuleKillHeight extends ParticleModuleKillBase { 
	Height: RawDistributionFloat;
	bAbsolute: boolean;
	bFloor: boolean;
	bApplyPSysScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillHeight;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleKillHeight;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleKillHeight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillHeight;
	static C(Other: UObject): ParticleModuleKillHeight;
}

declare class ParticleModuleLifetimeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetimeBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLifetimeBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLifetimeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetimeBase;
	static C(Other: UObject): ParticleModuleLifetimeBase;
}

declare class ParticleModuleLifetime extends ParticleModuleLifetimeBase { 
	Lifetime: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLifetime;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime;
	static C(Other: UObject): ParticleModuleLifetime;
}

declare class ParticleModuleLifetime_Seeded extends ParticleModuleLifetime { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLifetime_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLifetime_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime_Seeded;
	static C(Other: UObject): ParticleModuleLifetime_Seeded;
}

declare class ParticleModuleLightBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLightBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLightBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLightBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLightBase;
	static C(Other: UObject): ParticleModuleLightBase;
}

declare class ParticleModuleLight extends ParticleModuleLightBase { 
	bUseInverseSquaredFalloff: boolean;
	bAffectsTranslucency: boolean;
	bPreviewLightRadius: boolean;
	SpawnFraction: number;
	ColorScaleOverLife: RawDistributionVector;
	BrightnessOverLife: RawDistributionFloat;
	RadiusScale: RawDistributionFloat;
	LightExponent: RawDistributionFloat;
	bHighQualityLights: boolean;
	bShadowCastingLights: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLight;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight;
	static C(Other: UObject): ParticleModuleLight;
}

declare class ParticleModuleLight_Seeded extends ParticleModuleLight { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLight_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLight_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight_Seeded;
	static C(Other: UObject): ParticleModuleLight_Seeded;
}

declare class ParticleModuleLocationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBase;
	static C(Other: UObject): ParticleModuleLocationBase;
}

declare class ParticleModuleLocation extends ParticleModuleLocationBase { 
	StartLocation: RawDistributionVector;
	DistributeOverNPoints: number;
	DistributeThreshold: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation;
	static C(Other: UObject): ParticleModuleLocation;
}

declare class ParticleModuleLocation_Seeded extends ParticleModuleLocation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocation_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation_Seeded;
	static C(Other: UObject): ParticleModuleLocation_Seeded;
}

declare class ParticleModuleLocationWorldOffset extends ParticleModuleLocation { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationWorldOffset;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset;
	static C(Other: UObject): ParticleModuleLocationWorldOffset;
}

declare class ParticleModuleLocationWorldOffset_Seeded extends ParticleModuleLocationWorldOffset { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationWorldOffset_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset_Seeded;
	static C(Other: UObject): ParticleModuleLocationWorldOffset_Seeded;
}

declare type ELocationBoneSocketSource = 'BONESOCKETSOURCE_Bones' | 'BONESOCKETSOURCE_Sockets';
declare var ELocationBoneSocketSource : { BONESOCKETSOURCE_Bones:'BONESOCKETSOURCE_Bones',BONESOCKETSOURCE_Sockets:'BONESOCKETSOURCE_Sockets', };
declare class LocationBoneSocketInfo { 
	BoneSocketName: string;
	Offset: Vector;
	clone() : LocationBoneSocketInfo;
	static C(Other: UObject): LocationBoneSocketInfo;
}

declare type ELocationBoneSocketSelectionMethod = 'BONESOCKETSEL_Sequential' | 'BONESOCKETSEL_Random';
declare var ELocationBoneSocketSelectionMethod : { BONESOCKETSEL_Sequential:'BONESOCKETSEL_Sequential',BONESOCKETSEL_Random:'BONESOCKETSEL_Random', };
declare class ParticleModuleLocationBoneSocket extends ParticleModuleLocationBase { 
	SourceType: ELocationBoneSocketSource;
	UniversalOffset: Vector;
	SourceLocations: LocationBoneSocketInfo[];
	SelectionMethod: ELocationBoneSocketSelectionMethod;
	bUpdatePositionEachFrame: boolean;
	bOrientMeshEmitters: boolean;
	bInheritBoneVelocity: boolean;
	InheritVelocityScale: number;
	SkelMeshActorParamName: string;
	NumPreSelectedIndices: number;
	EditorSkelMesh: SkeletalMesh;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBoneSocket;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationBoneSocket;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationBoneSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBoneSocket;
	static C(Other: UObject): ParticleModuleLocationBoneSocket;
}

declare class ParticleModuleLocationDirect extends ParticleModuleLocationBase { 
	Location: RawDistributionVector;
	LocationOffset: RawDistributionVector;
	ScaleFactor: RawDistributionVector;
	Direction: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationDirect;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationDirect;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationDirect;
	static C(Other: UObject): ParticleModuleLocationDirect;
}

declare type ELocationEmitterSelectionMethod = 'ELESM_Random' | 'ELESM_Sequential';
declare var ELocationEmitterSelectionMethod : { ELESM_Random:'ELESM_Random',ELESM_Sequential:'ELESM_Sequential', };
declare class ParticleModuleLocationEmitter extends ParticleModuleLocationBase { 
	EmitterName: string;
	SelectionMethod: ELocationEmitterSelectionMethod;
	InheritSourceVelocity: boolean;
	InheritSourceVelocityScale: number;
	bInheritSourceRotation: boolean;
	InheritSourceRotationScale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitter;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationEmitter;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationEmitter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitter;
	static C(Other: UObject): ParticleModuleLocationEmitter;
}

declare class ParticleModuleLocationEmitterDirect extends ParticleModuleLocationBase { 
	EmitterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitterDirect;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationEmitterDirect;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationEmitterDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitterDirect;
	static C(Other: UObject): ParticleModuleLocationEmitterDirect;
}

declare class ParticleModuleLocationPrimitiveBase extends ParticleModuleLocationBase { 
	Positive_X: boolean;
	Positive_Y: boolean;
	Positive_Z: boolean;
	Negative_X: boolean;
	Negative_Y: boolean;
	Negative_Z: boolean;
	SurfaceOnly: boolean;
	Velocity: boolean;
	VelocityScale: RawDistributionFloat;
	StartLocation: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveBase;
	static C(Other: UObject): ParticleModuleLocationPrimitiveBase;
}

declare type CylinderHeightAxis = 'PMLPC_HEIGHTAXIS_X' | 'PMLPC_HEIGHTAXIS_Y' | 'PMLPC_HEIGHTAXIS_Z';
declare var CylinderHeightAxis : { PMLPC_HEIGHTAXIS_X:'PMLPC_HEIGHTAXIS_X',PMLPC_HEIGHTAXIS_Y:'PMLPC_HEIGHTAXIS_Y',PMLPC_HEIGHTAXIS_Z:'PMLPC_HEIGHTAXIS_Z', };
declare class ParticleModuleLocationPrimitiveCylinder extends ParticleModuleLocationPrimitiveBase { 
	RadialVelocity: boolean;
	StartRadius: RawDistributionFloat;
	StartHeight: RawDistributionFloat;
	HeightAxis: CylinderHeightAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveCylinder;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder;
}

declare class ParticleModuleLocationPrimitiveCylinder_Seeded extends ParticleModuleLocationPrimitiveCylinder { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder_Seeded;
}

declare class ParticleModuleLocationPrimitiveSphere extends ParticleModuleLocationPrimitiveBase { 
	StartRadius: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveSphere;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere;
}

declare class ParticleModuleLocationPrimitiveSphere_Seeded extends ParticleModuleLocationPrimitiveSphere { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveSphere_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere_Seeded;
}

declare class ParticleModuleLocationPrimitiveTriangle extends ParticleModuleLocationBase { 
	StartOffset: RawDistributionVector;
	Height: RawDistributionFloat;
	Angle: RawDistributionFloat;
	Thickness: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveTriangle;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationPrimitiveTriangle;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveTriangle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveTriangle;
	static C(Other: UObject): ParticleModuleLocationPrimitiveTriangle;
}

declare type ELocationSkelVertSurfaceSource = 'VERTSURFACESOURCE_Vert' | 'VERTSURFACESOURCE_Surface';
declare var ELocationSkelVertSurfaceSource : { VERTSURFACESOURCE_Vert:'VERTSURFACESOURCE_Vert',VERTSURFACESOURCE_Surface:'VERTSURFACESOURCE_Surface', };
declare class ParticleModuleLocationSkelVertSurface extends ParticleModuleLocationBase { 
	SourceType: ELocationSkelVertSurfaceSource;
	UniversalOffset: Vector;
	bUpdatePositionEachFrame: boolean;
	bOrientMeshEmitters: boolean;
	bInheritBoneVelocity: boolean;
	SkelMeshActorParamName: string;
	EditorSkelMesh: SkeletalMesh;
	ValidAssociatedBones: string[];
	bEnforceNormalCheck: boolean;
	NormalToCompare: Vector;
	NormalCheckToleranceDegrees: number;
	NormalCheckTolerance: number;
	ValidMaterialIndices: number[];
	bInheritVertexColor: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationSkelVertSurface;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationSkelVertSurface;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleLocationSkelVertSurface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationSkelVertSurface;
	static C(Other: UObject): ParticleModuleLocationSkelVertSurface;
}

declare class ParticleModulePivotOffset extends ParticleModuleLocationBase { 
	PivotOffset: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModulePivotOffset;
	static Find(Outer: UObject, ResourceName: string): ParticleModulePivotOffset;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModulePivotOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModulePivotOffset;
	static C(Other: UObject): ParticleModulePivotOffset;
}

declare class ParticleModuleSourceMovement extends ParticleModuleLocationBase { 
	SourceMovementScale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSourceMovement;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSourceMovement;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSourceMovement;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSourceMovement;
	static C(Other: UObject): ParticleModuleSourceMovement;
}

declare class ParticleModuleMaterialBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMaterialBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMaterialBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMaterialBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMaterialBase;
	static C(Other: UObject): ParticleModuleMaterialBase;
}

declare class ParticleModuleMeshMaterial extends ParticleModuleMaterialBase { 
	MeshMaterials: MaterialInterface[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshMaterial;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshMaterial;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshMaterial;
	static C(Other: UObject): ParticleModuleMeshMaterial;
}

declare class ParticleModuleParameterBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleParameterBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterBase;
	static C(Other: UObject): ParticleModuleParameterBase;
}

declare type EEmitterDynamicParameterValue = 'EDPV_UserSet' | 'EDPV_VelocityX' | 'EDPV_VelocityY' | 'EDPV_VelocityZ' | 'EDPV_VelocityMag';
declare var EEmitterDynamicParameterValue : { EDPV_UserSet:'EDPV_UserSet',EDPV_VelocityX:'EDPV_VelocityX',EDPV_VelocityY:'EDPV_VelocityY',EDPV_VelocityZ:'EDPV_VelocityZ',EDPV_VelocityMag:'EDPV_VelocityMag', };
declare class EmitterDynamicParameter { 
	ParamName: string;
	bUseEmitterTime: boolean;
	bSpawnTimeOnly: boolean;
	ValueMethod: EEmitterDynamicParameterValue;
	bScaleVelocityByParamValue: boolean;
	ParamValue: RawDistributionFloat;
	clone() : EmitterDynamicParameter;
	static C(Other: UObject): EmitterDynamicParameter;
}

declare class ParticleModuleParameterDynamic extends ParticleModuleParameterBase { 
	DynamicParams: EmitterDynamicParameter[];
	UpdateFlags: number;
	bUsesVelocity: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleParameterDynamic;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleParameterDynamic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic;
	static C(Other: UObject): ParticleModuleParameterDynamic;
}

declare class ParticleModuleParameterDynamic_Seeded extends ParticleModuleParameterDynamic { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleParameterDynamic_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleParameterDynamic_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic_Seeded;
	static C(Other: UObject): ParticleModuleParameterDynamic_Seeded;
}

declare class SubUVAnimation extends UObject { 
	SubUVTexture: Texture2D;
	SubImages_Horizontal: number;
	SubImages_Vertical: number;
	BoundingMode: ESubUVBoundingVertexCount;
	OpacitySourceMode: EOpacitySourceMode;
	AlphaThreshold: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubUVAnimation;
	static Find(Outer: UObject, ResourceName: string): SubUVAnimation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SubUVAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubUVAnimation;
	static C(Other: UObject): SubUVAnimation;
}

declare class ParticleModuleRotationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationBase;
	static C(Other: UObject): ParticleModuleRotationBase;
}

declare class ParticleModuleMeshRotation extends ParticleModuleRotationBase { 
	StartRotation: RawDistributionVector;
	bInheritParent: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation;
	static C(Other: UObject): ParticleModuleMeshRotation;
}

declare class ParticleModuleMeshRotation_Seeded extends ParticleModuleMeshRotation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotation_Seeded;
}

declare class ParticleModuleRotation extends ParticleModuleRotationBase { 
	StartRotation: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation;
	static C(Other: UObject): ParticleModuleRotation;
}

declare class ParticleModuleRotation_Seeded extends ParticleModuleRotation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation_Seeded;
	static C(Other: UObject): ParticleModuleRotation_Seeded;
}

declare class ParticleModuleRotationOverLifetime extends ParticleModuleRotationBase { 
	RotationOverLife: RawDistributionFloat;
	Scale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationOverLifetime;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationOverLifetime;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationOverLifetime;
	static C(Other: UObject): ParticleModuleRotationOverLifetime;
}

declare class ParticleModuleRotationRateBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationRateBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationRateBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateBase;
	static C(Other: UObject): ParticleModuleRotationRateBase;
}

declare class ParticleModuleMeshRotationRate extends ParticleModuleRotationRateBase { 
	StartRotationRate: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotationRate;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate;
	static C(Other: UObject): ParticleModuleMeshRotationRate;
}

declare class ParticleModuleRotationRate extends ParticleModuleRotationRateBase { 
	StartRotationRate: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationRate;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate;
	static C(Other: UObject): ParticleModuleRotationRate;
}

declare class ParticleModuleMeshRotationRate_Seeded extends ParticleModuleMeshRotationRate { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotationRate_Seeded;
}

declare class ParticleModuleMeshRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	LifeMultiplier: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateMultiplyLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateMultiplyLife;
}

declare class ParticleModuleMeshRotationRateOverLife extends ParticleModuleRotationRateBase { 
	RotRate: RawDistributionVector;
	bScaleRotRate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateOverLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotationRateOverLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleMeshRotationRateOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateOverLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateOverLife;
}

declare class ParticleModuleRotationRate_Seeded extends ParticleModuleRotationRate { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleRotationRate_Seeded;
}

declare class ParticleModuleRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	LifeMultiplier: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateMultiplyLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleRotationRateMultiplyLife;
}

declare class ParticleModuleSizeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSizeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeBase;
	static C(Other: UObject): ParticleModuleSizeBase;
}

declare class ParticleModuleSize extends ParticleModuleSizeBase { 
	StartSize: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSize;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize;
	static C(Other: UObject): ParticleModuleSize;
}

declare class ParticleModuleSize_Seeded extends ParticleModuleSize { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSize_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSize_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize_Seeded;
	static C(Other: UObject): ParticleModuleSize_Seeded;
}

declare class ParticleModuleSizeMultiplyLife extends ParticleModuleSizeBase { 
	LifeMultiplier: RawDistributionVector;
	MultiplyX: boolean;
	MultiplyY: boolean;
	MultiplyZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeMultiplyLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSizeMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeMultiplyLife;
	static C(Other: UObject): ParticleModuleSizeMultiplyLife;
}

declare class ParticleModuleSizeScale extends ParticleModuleSizeBase { 
	SizeScale: RawDistributionVector;
	EnableX: boolean;
	EnableY: boolean;
	EnableZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScale;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeScale;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSizeScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScale;
	static C(Other: UObject): ParticleModuleSizeScale;
}

declare class ParticleModuleSizeScaleBySpeed extends ParticleModuleSizeBase { 
	SpeedScale: Vector2D;
	MaxScale: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScaleBySpeed;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeScaleBySpeed;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSizeScaleBySpeed;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScaleBySpeed;
	static C(Other: UObject): ParticleModuleSizeScaleBySpeed;
}

declare class ParticleModuleSpawnPerUnit extends ParticleModuleSpawnBase { 
	UnitScalar: number;
	SpawnPerUnit: RawDistributionFloat;
	bIgnoreSpawnRateWhenMoving: boolean;
	MovementTolerance: number;
	MaxFrameDistance: number;
	bIgnoreMovementAlongX: boolean;
	bIgnoreMovementAlongY: boolean;
	bIgnoreMovementAlongZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSpawnPerUnit;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSpawnPerUnit;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSpawnPerUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSpawnPerUnit;
	static C(Other: UObject): ParticleModuleSpawnPerUnit;
}

declare class ParticleModuleSubUVBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUVBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSubUVBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVBase;
	static C(Other: UObject): ParticleModuleSubUVBase;
}

declare class ParticleModuleSubUV extends ParticleModuleSubUVBase { 
	Animation: SubUVAnimation;
	SubImageIndex: RawDistributionFloat;
	bUseRealTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUV;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUV;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUV;
	static C(Other: UObject): ParticleModuleSubUV;
}

declare class ParticleModuleSubUVMovie extends ParticleModuleSubUV { 
	bUseEmitterTime: boolean;
	FrameRate: RawDistributionFloat;
	StartingFrame: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVMovie;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUVMovie;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleSubUVMovie;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVMovie;
	static C(Other: UObject): ParticleModuleSubUVMovie;
}

declare class ParticleModuleTrailBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTrailBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailBase;
	static C(Other: UObject): ParticleModuleTrailBase;
}

declare type ETrail2SourceMethod = 'PET2SRCM_Default' | 'PET2SRCM_Particle' | 'PET2SRCM_Actor';
declare var ETrail2SourceMethod : { PET2SRCM_Default:'PET2SRCM_Default',PET2SRCM_Particle:'PET2SRCM_Particle',PET2SRCM_Actor:'PET2SRCM_Actor', };
declare type EParticleSourceSelectionMethod = 'EPSSM_Random' | 'EPSSM_Sequential';
declare var EParticleSourceSelectionMethod : { EPSSM_Random:'EPSSM_Random',EPSSM_Sequential:'EPSSM_Sequential', };
declare class ParticleModuleTrailSource extends ParticleModuleTrailBase { 
	SourceMethod: ETrail2SourceMethod;
	SourceName: string;
	SourceStrength: RawDistributionFloat;
	bLockSourceStength: boolean;
	SourceOffsetCount: number;
	SourceOffsetDefaults: Vector[];
	SelectionMethod: EParticleSourceSelectionMethod;
	bInheritRotation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailSource;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTrailSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailSource;
	static C(Other: UObject): ParticleModuleTrailSource;
}

declare class ParticleModuleTypeDataAnimTrail extends ParticleModuleTypeDataBase { 
	bDeadTrailsOnDeactivate: boolean;
	bEnablePreviousTangentRecalculation: boolean;
	bTangentRecalculationEveryFrame: boolean;
	TilingDistance: number;
	DistanceTessellationStepSize: number;
	TangentTessellationStepSize: number;
	WidthTessellationStepSize: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTypeDataAnimTrail;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataAnimTrail;
	static C(Other: UObject): ParticleModuleTypeDataAnimTrail;
}

declare type EBeam2Method = 'PEB2M_Distance' | 'PEB2M_Target' | 'PEB2M_Branch';
declare var EBeam2Method : { PEB2M_Distance:'PEB2M_Distance',PEB2M_Target:'PEB2M_Target',PEB2M_Branch:'PEB2M_Branch', };
declare type EBeamTaperMethod = 'PEBTM_None' | 'PEBTM_Full' | 'PEBTM_Partial';
declare var EBeamTaperMethod : { PEBTM_None:'PEBTM_None',PEBTM_Full:'PEBTM_Full',PEBTM_Partial:'PEBTM_Partial', };
declare class ParticleModuleTypeDataBeam2 extends ParticleModuleTypeDataBase { 
	BeamMethod: EBeam2Method;
	TextureTile: number;
	TextureTileDistance: number;
	Sheets: number;
	MaxBeamCount: number;
	Speed: number;
	InterpolationPoints: number;
	bAlwaysOn: boolean;
	UpVectorStepSize: number;
	BranchParentName: string;
	Distance: RawDistributionFloat;
	TaperMethod: EBeamTaperMethod;
	TaperFactor: RawDistributionFloat;
	TaperScale: RawDistributionFloat;
	RenderGeometry: boolean;
	RenderDirectLine: boolean;
	RenderLines: boolean;
	RenderTessellation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataBeam2;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataBeam2;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTypeDataBeam2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBeam2;
	static C(Other: UObject): ParticleModuleTypeDataBeam2;
}

declare class GPUSpriteLocalVectorFieldInfo { 
	Field: VectorField;
	Transform: Transform;
	MinInitialRotation: Rotator;
	MaxInitialRotation: Rotator;
	RotationRate: Rotator;
	Intensity: number;
	Tightness: number;
	bIgnoreComponentTransform: boolean;
	bTileX: boolean;
	bTileY: boolean;
	bTileZ: boolean;
	bUseFixDT: boolean;
	clone() : GPUSpriteLocalVectorFieldInfo;
	static C(Other: UObject): GPUSpriteLocalVectorFieldInfo;
}

declare class FloatDistribution { 
	Table: DistributionLookupTable;
	clone() : FloatDistribution;
	static C(Other: UObject): FloatDistribution;
}

declare class GPUSpriteEmitterInfo { 
	RequiredModule: ParticleModuleRequired;
	SpawnModule: ParticleModuleSpawn;
	SpawnPerUnitModule: ParticleModuleSpawnPerUnit;
	SpawnModules: ParticleModule[];
	LocalVectorField: GPUSpriteLocalVectorFieldInfo;
	VectorFieldScale: FloatDistribution;
	DragCoefficient: FloatDistribution;
	PointAttractorStrength: FloatDistribution;
	Resilience: FloatDistribution;
	ConstantAcceleration: Vector;
	PointAttractorPosition: Vector;
	PointAttractorRadiusSq: number;
	OrbitOffsetBase: Vector;
	OrbitOffsetRange: Vector;
	InvMaxSize: Vector2D;
	InvRotationRateScale: number;
	MaxLifetime: number;
	MaxParticleCount: number;
	ScreenAlignment: EParticleScreenAlignment;
	LockAxisFlag: EParticleAxisLock;
	bEnableCollision: boolean;
	CollisionMode: EParticleCollisionMode;
	bRemoveHMDRoll: boolean;
	MinFacingCameraBlendDistance: number;
	MaxFacingCameraBlendDistance: number;
	DynamicColor: RawDistributionVector;
	DynamicAlpha: RawDistributionFloat;
	DynamicColorScale: RawDistributionVector;
	DynamicAlphaScale: RawDistributionFloat;
	clone() : GPUSpriteEmitterInfo;
	static C(Other: UObject): GPUSpriteEmitterInfo;
}

declare class GPUSpriteResourceData { 
	QuantizedColorSamples: Color[];
	QuantizedMiscSamples: Color[];
	QuantizedSimulationAttrSamples: Color[];
	ColorScale: Vector4;
	ColorBias: Vector4;
	MiscScale: Vector4;
	MiscBias: Vector4;
	SimulationAttrCurveScale: Vector4;
	SimulationAttrCurveBias: Vector4;
	SubImageSize: Vector4;
	SizeBySpeed: Vector4;
	ConstantAcceleration: Vector;
	OrbitOffsetBase: Vector;
	OrbitOffsetRange: Vector;
	OrbitFrequencyBase: Vector;
	OrbitFrequencyRange: Vector;
	OrbitPhaseBase: Vector;
	OrbitPhaseRange: Vector;
	GlobalVectorFieldScale: number;
	GlobalVectorFieldTightness: number;
	PerParticleVectorFieldScale: number;
	PerParticleVectorFieldBias: number;
	DragCoefficientScale: number;
	DragCoefficientBias: number;
	ResilienceScale: number;
	ResilienceBias: number;
	CollisionRadiusScale: number;
	CollisionRadiusBias: number;
	CollisionTimeBias: number;
	OneMinusFriction: number;
	RotationRateScale: number;
	CameraMotionBlurAmount: number;
	ScreenAlignment: EParticleScreenAlignment;
	LockAxisFlag: EParticleAxisLock;
	PivotOffset: Vector2D;
	bRemoveHMDRoll: boolean;
	MinFacingCameraBlendDistance: number;
	MaxFacingCameraBlendDistance: number;
	clone() : GPUSpriteResourceData;
	static C(Other: UObject): GPUSpriteResourceData;
}

declare class ParticleModuleTypeDataGpu extends ParticleModuleTypeDataBase { 
	EmitterInfo: GPUSpriteEmitterInfo;
	ResourceData: GPUSpriteResourceData;
	CameraMotionBlurAmount: number;
	bClearExistingParticlesOnInit: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataGpu;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataGpu;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTypeDataGpu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataGpu;
	static C(Other: UObject): ParticleModuleTypeDataGpu;
}

declare type EMeshScreenAlignment = 'PSMA_MeshFaceCameraWithRoll' | 'PSMA_MeshFaceCameraWithSpin' | 'PSMA_MeshFaceCameraWithLockedAxis';
declare var EMeshScreenAlignment : { PSMA_MeshFaceCameraWithRoll:'PSMA_MeshFaceCameraWithRoll',PSMA_MeshFaceCameraWithSpin:'PSMA_MeshFaceCameraWithSpin',PSMA_MeshFaceCameraWithLockedAxis:'PSMA_MeshFaceCameraWithLockedAxis', };
declare type EMeshCameraFacingUpAxis = 'CameraFacing_NoneUP' | 'CameraFacing_ZUp' | 'CameraFacing_NegativeZUp' | 'CameraFacing_YUp' | 'CameraFacing_NegativeYUp';
declare var EMeshCameraFacingUpAxis : { CameraFacing_NoneUP:'CameraFacing_NoneUP',CameraFacing_ZUp:'CameraFacing_ZUp',CameraFacing_NegativeZUp:'CameraFacing_NegativeZUp',CameraFacing_YUp:'CameraFacing_YUp',CameraFacing_NegativeYUp:'CameraFacing_NegativeYUp', };
declare type EMeshCameraFacingOptions = 'XAxisFacing_NoUp' | 'XAxisFacing_ZUp' | 'XAxisFacing_NegativeZUp' | 'XAxisFacing_YUp' | 'XAxisFacing_NegativeYUp' | 'LockedAxis_ZAxisFacing' | 'LockedAxis_NegativeZAxisFacing' | 'LockedAxis_YAxisFacing' | 'LockedAxis_NegativeYAxisFacing' | 'VelocityAligned_ZAxisFacing' | 'VelocityAligned_NegativeZAxisFacing' | 'VelocityAligned_YAxisFacing' | 'VelocityAligned_NegativeYAxisFacing';
declare var EMeshCameraFacingOptions : { XAxisFacing_NoUp:'XAxisFacing_NoUp',XAxisFacing_ZUp:'XAxisFacing_ZUp',XAxisFacing_NegativeZUp:'XAxisFacing_NegativeZUp',XAxisFacing_YUp:'XAxisFacing_YUp',XAxisFacing_NegativeYUp:'XAxisFacing_NegativeYUp',LockedAxis_ZAxisFacing:'LockedAxis_ZAxisFacing',LockedAxis_NegativeZAxisFacing:'LockedAxis_NegativeZAxisFacing',LockedAxis_YAxisFacing:'LockedAxis_YAxisFacing',LockedAxis_NegativeYAxisFacing:'LockedAxis_NegativeYAxisFacing',VelocityAligned_ZAxisFacing:'VelocityAligned_ZAxisFacing',VelocityAligned_NegativeZAxisFacing:'VelocityAligned_NegativeZAxisFacing',VelocityAligned_YAxisFacing:'VelocityAligned_YAxisFacing',VelocityAligned_NegativeYAxisFacing:'VelocityAligned_NegativeYAxisFacing', };
declare class ParticleModuleTypeDataMesh extends ParticleModuleTypeDataBase { 
	Mesh: StaticMesh;
	CastShadows: boolean;
	DoCollisions: boolean;
	MeshAlignment: EMeshScreenAlignment;
	bOverrideMaterial: boolean;
	bOverrideDefaultMotionBlurSettings: boolean;
	bEnableMotionBlur: boolean;
	Pitch: number;
	Roll: number;
	Yaw: number;
	RollPitchYawRange: RawDistributionVector;
	AxisLockOption: EParticleAxisLock;
	bCameraFacing: boolean;
	CameraFacingUpAxisOption: EMeshCameraFacingUpAxis;
	CameraFacingOption: EMeshCameraFacingOptions;
	bApplyParticleRotationAsSpin: boolean;
	bFaceCameraDirectionRatherThanPosition: boolean;
	bCollisionsConsiderPartilceSize: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataMesh;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataMesh;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTypeDataMesh;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataMesh;
	static C(Other: UObject): ParticleModuleTypeDataMesh;
}

declare type ETrailsRenderAxisOption = 'Trails_CameraUp' | 'Trails_SourceUp' | 'Trails_WorldUp';
declare var ETrailsRenderAxisOption : { Trails_CameraUp:'Trails_CameraUp',Trails_SourceUp:'Trails_SourceUp',Trails_WorldUp:'Trails_WorldUp', };
declare class ParticleModuleTypeDataRibbon extends ParticleModuleTypeDataBase { 
	MaxTessellationBetweenParticles: number;
	SheetsPerTrail: number;
	MaxTrailCount: number;
	MaxParticleInTrailCount: number;
	bDeadTrailsOnDeactivate: boolean;
	bDeadTrailsOnSourceLoss: boolean;
	bClipSourceSegement: boolean;
	bEnablePreviousTangentRecalculation: boolean;
	bTangentRecalculationEveryFrame: boolean;
	bSpawnInitialParticle: boolean;
	RenderAxis: ETrailsRenderAxisOption;
	TangentSpawningScalar: number;
	bRenderGeometry: boolean;
	bRenderSpawnPoints: boolean;
	bRenderTangents: boolean;
	bRenderTessellation: boolean;
	TilingDistance: number;
	DistanceTessellationStepSize: number;
	bEnableTangentDiffInterpScale: boolean;
	TangentTessellationScalar: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataRibbon;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataRibbon;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleTypeDataRibbon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataRibbon;
	static C(Other: UObject): ParticleModuleTypeDataRibbon;
}

declare class ParticleModuleVectorFieldBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldBase;
	static C(Other: UObject): ParticleModuleVectorFieldBase;
}

declare class ParticleModuleVectorFieldGlobal extends ParticleModuleVectorFieldBase { 
	bOverrideGlobalVectorFieldTightness: boolean;
	GlobalVectorFieldScale: number;
	GlobalVectorFieldTightness: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldGlobal;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldGlobal;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldGlobal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldGlobal;
	static C(Other: UObject): ParticleModuleVectorFieldGlobal;
}

declare class ParticleModuleVectorFieldLocal extends ParticleModuleVectorFieldBase { 
	VectorField: VectorField;
	RelativeTranslation: Vector;
	RelativeRotation: Rotator;
	RelativeScale3D: Vector;
	Intensity: number;
	Tightness: number;
	bIgnoreComponentTransform: boolean;
	bTileX: boolean;
	bTileY: boolean;
	bTileZ: boolean;
	bUseFixDT: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldLocal;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldLocal;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldLocal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldLocal;
	static C(Other: UObject): ParticleModuleVectorFieldLocal;
}

declare class ParticleModuleVectorFieldRotation extends ParticleModuleVectorFieldBase { 
	MinInitialRotation: Vector;
	MaxInitialRotation: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotation;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldRotation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotation;
	static C(Other: UObject): ParticleModuleVectorFieldRotation;
}

declare class ParticleModuleVectorFieldRotationRate extends ParticleModuleVectorFieldBase { 
	RotationRate: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotationRate;
	static C(Other: UObject): ParticleModuleVectorFieldRotationRate;
}

declare class ParticleModuleVectorFieldScale extends ParticleModuleVectorFieldBase { 
	VectorFieldScale: DistributionFloat;
	VectorFieldScaleRaw: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScale;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldScale;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScale;
	static C(Other: UObject): ParticleModuleVectorFieldScale;
}

declare class ParticleModuleVectorFieldScaleOverLife extends ParticleModuleVectorFieldBase { 
	VectorFieldScaleOverLife: DistributionFloat;
	VectorFieldScaleOverLifeRaw: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVectorFieldScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScaleOverLife;
	static C(Other: UObject): ParticleModuleVectorFieldScaleOverLife;
}

declare class ParticleModuleVelocityBase extends ParticleModule { 
	bInWorldSpace: boolean;
	bApplyOwnerScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityBase;
	static C(Other: UObject): ParticleModuleVelocityBase;
}

declare class ParticleModuleVelocity extends ParticleModuleVelocityBase { 
	StartVelocity: RawDistributionVector;
	StartVelocityRadial: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocity;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity;
	static C(Other: UObject): ParticleModuleVelocity;
}

declare class ParticleModuleVelocity_Seeded extends ParticleModuleVelocity { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocity_Seeded;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocity_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity_Seeded;
	static C(Other: UObject): ParticleModuleVelocity_Seeded;
}

declare class ParticleModuleVelocityCone extends ParticleModuleVelocityBase { 
	Angle: RawDistributionFloat;
	Velocity: RawDistributionFloat;
	Direction: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityCone;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityCone;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocityCone;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityCone;
	static C(Other: UObject): ParticleModuleVelocityCone;
}

declare class ParticleModuleVelocityInheritParent extends ParticleModuleVelocityBase { 
	Scale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityInheritParent;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityInheritParent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocityInheritParent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityInheritParent;
	static C(Other: UObject): ParticleModuleVelocityInheritParent;
}

declare class ParticleModuleVelocityOverLifetime extends ParticleModuleVelocityBase { 
	VelOverLife: RawDistributionVector;
	Absolute: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityOverLifetime;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityOverLifetime;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ParticleModuleVelocityOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityOverLifetime;
	static C(Other: UObject): ParticleModuleVelocityOverLifetime;
}

declare class DemoPendingNetGame extends PendingNetGame { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DemoPendingNetGame;
	static Find(Outer: UObject, ResourceName: string): DemoPendingNetGame;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): DemoPendingNetGame;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoPendingNetGame;
	static C(Other: UObject): DemoPendingNetGame;
}

declare type EPlatformInterfaceDataType = 'PIDT_None' | 'PIDT_Int' | 'PIDT_Float' | 'PIDT_String' | 'PIDT_Object' | 'PIDT_Custom';
declare var EPlatformInterfaceDataType : { PIDT_None:'PIDT_None',PIDT_Int:'PIDT_Int',PIDT_Float:'PIDT_Float',PIDT_String:'PIDT_String',PIDT_Object:'PIDT_Object',PIDT_Custom:'PIDT_Custom', };
declare class PlatformInterfaceData { 
	DataName: string;
	Type: EPlatformInterfaceDataType;
	IntValue: number;
	FloatValue: number;
	StringValue: string;
	ObjectValue: UObject;
	clone() : PlatformInterfaceData;
	static C(Other: UObject): PlatformInterfaceData;
}

declare class PlatformInterfaceDelegateResult { 
	bSuccessful: boolean;
	Data: PlatformInterfaceData;
	clone() : PlatformInterfaceDelegateResult;
	static C(Other: UObject): PlatformInterfaceDelegateResult;
}

declare class DelegateArray { 
	Delegates: UnrealEngineDelegate<(Result: PlatformInterfaceDelegateResult) => void>[];
	clone() : DelegateArray;
	static C(Other: UObject): DelegateArray;
}

declare class PlatformInterfaceBase extends UObject { 
	AllDelegates: DelegateArray[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceBase;
	static Find(Outer: UObject, ResourceName: string): PlatformInterfaceBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PlatformInterfaceBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceBase;
	static C(Other: UObject): PlatformInterfaceBase;
}

declare class CloudStorageBase extends PlatformInterfaceBase { 
	LocalCloudFiles: string[];
	bSuppressDelegateCalls: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CloudStorageBase;
	static Find(Outer: UObject, ResourceName: string): CloudStorageBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): CloudStorageBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloudStorageBase;
	static C(Other: UObject): CloudStorageBase;
}

declare class InGameAdManager extends PlatformInterfaceBase { 
	bShouldPauseWhileAdOpen: boolean;
	ClickedBannerDelegates: UnrealEngineDelegate<() => void>[];
	ClosedAdDelegates: UnrealEngineDelegate<() => void>[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameAdManager;
	static Find(Outer: UObject, ResourceName: string): InGameAdManager;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InGameAdManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameAdManager;
	static C(Other: UObject): InGameAdManager;
}

declare class PurchaseInfo { 
	Identifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
	clone() : PurchaseInfo;
	static C(Other: UObject): PurchaseInfo;
}

declare class MicroTransactionBase extends PlatformInterfaceBase { 
	AvailableProducts: PurchaseInfo[];
	LastError: string;
	LastErrorSolution: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MicroTransactionBase;
	static Find(Outer: UObject, ResourceName: string): MicroTransactionBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MicroTransactionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MicroTransactionBase;
	static C(Other: UObject): MicroTransactionBase;
}

declare type ETwitterRequestMethod = 'TRM_Get' | 'TRM_Post' | 'TRM_Delete';
declare var ETwitterRequestMethod : { TRM_Get:'TRM_Get',TRM_Post:'TRM_Post',TRM_Delete:'TRM_Delete', };
declare class TwitterIntegrationBase extends PlatformInterfaceBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TwitterIntegrationBase;
	static Find(Outer: UObject, ResourceName: string): TwitterIntegrationBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TwitterIntegrationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitterIntegrationBase;
	TwitterRequest(URL: string,ParamKeysAndValues: string[],RequestMethod: ETwitterRequestMethod,AccountIndex: number): boolean;
	ShowTweetUI(InitialMessage: string,URL: string,Picture: string): boolean;
	Init(): void;
	GetNumAccounts(): number;
	GetAccountName(AccountIndex: number): string;
	CanShowTweetUI(): boolean;
	AuthorizeAccounts(): boolean;
	static C(Other: UObject): TwitterIntegrationBase;
}

declare class PlatformInterfaceWebResponse extends UObject { 
	OriginalURL: string;
	ResponseCode: number;
	Tag: number;
	StringResponse: string;
	BinaryResponse: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceWebResponse;
	static Find(Outer: UObject, ResourceName: string): PlatformInterfaceWebResponse;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PlatformInterfaceWebResponse;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceWebResponse;
	GetNumHeaders(): number;
	GetHeaderValue(HeaderName: string): string;
	GetHeader(HeaderIndex: number,Header?: string,Value?: string): {Header: string, Value: string};
	static C(Other: UObject): PlatformInterfaceWebResponse;
}

declare class Polys extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): Polys;
	static Find(Outer: UObject, ResourceName: string): Polys;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): Polys;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Polys;
	static C(Other: UObject): Polys;
}

declare class SkeletalMeshLODGroupSettings { 
	ScreenSize: number;
	OptimizationSettings: SkeletalMeshOptimizationSettings;
	clone() : SkeletalMeshLODGroupSettings;
	static C(Other: UObject): SkeletalMeshLODGroupSettings;
}

declare class SkeletalMeshReductionSettings extends UObject { 
	Settings: SkeletalMeshLODGroupSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SkeletalMeshReductionSettings;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshReductionSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SkeletalMeshReductionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshReductionSettings;
	static C(Other: UObject): SkeletalMeshReductionSettings;
}

declare class SlateTextureAtlasInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateTextureAtlasInterface;
	static Find(Outer: UObject, ResourceName: string): SlateTextureAtlasInterface;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SlateTextureAtlasInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateTextureAtlasInterface;
	static C(Other: UObject): SlateTextureAtlasInterface;
}

declare class SoundWaveProcedural extends SoundWave { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundWaveProcedural;
	static Find(Outer: UObject, ResourceName: string): SoundWaveProcedural;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundWaveProcedural;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundWaveProcedural;
	static C(Other: UObject): SoundWaveProcedural;
}

declare class SoundNodeAssetReferencer extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAssetReferencer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeAssetReferencer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeAssetReferencer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAssetReferencer;
	static C(Other: UObject): SoundNodeAssetReferencer;
}

declare class SoundNodeWavePlayer extends SoundNodeAssetReferencer { 
	SoundWaveAssetPtr: any;
	SoundWave: SoundWave;
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWavePlayer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeWavePlayer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeWavePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWavePlayer;
	static C(Other: UObject): SoundNodeWavePlayer;
}

declare class SoundNodeAttenuation extends SoundNode { 
	AttenuationSettings: SoundAttenuation;
	AttenuationOverrides: AttenuationSettings;
	bOverrideAttenuation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAttenuation;
	static Find(Outer: UObject, ResourceName: string): SoundNodeAttenuation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeAttenuation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAttenuation;
	static C(Other: UObject): SoundNodeAttenuation;
}

declare class SoundNodeBranch extends SoundNode { 
	BoolParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeBranch;
	static Find(Outer: UObject, ResourceName: string): SoundNodeBranch;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeBranch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeBranch;
	static C(Other: UObject): SoundNodeBranch;
}

declare class SoundNodeConcatenator extends SoundNode { 
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeConcatenator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeConcatenator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeConcatenator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeConcatenator;
	static C(Other: UObject): SoundNodeConcatenator;
}

declare class SoundNodeDelay extends SoundNode { 
	DelayMin: number;
	DelayMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDelay;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDelay;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeDelay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDelay;
	static C(Other: UObject): SoundNodeDelay;
}

declare class DialogueWaveParameter { 
	DialogueWave: DialogueWave;
	Context: DialogueContext;
	clone() : DialogueWaveParameter;
	static C(Other: UObject): DialogueWaveParameter;
}

declare class SoundNodeDialoguePlayer extends SoundNode { 
	DialogueWaveParameter: DialogueWaveParameter;
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDialoguePlayer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDialoguePlayer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeDialoguePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDialoguePlayer;
	static C(Other: UObject): SoundNodeDialoguePlayer;
}

declare class DistanceDatum { 
	FadeInDistanceStart: number;
	FadeInDistanceEnd: number;
	FadeOutDistanceStart: number;
	FadeOutDistanceEnd: number;
	Volume: number;
	clone() : DistanceDatum;
	static C(Other: UObject): DistanceDatum;
}

declare class SoundNodeDistanceCrossFade extends SoundNode { 
	CrossFadeInput: DistanceDatum[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDistanceCrossFade;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDistanceCrossFade;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeDistanceCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDistanceCrossFade;
	static C(Other: UObject): SoundNodeDistanceCrossFade;
}

declare class SoundNodeParamCrossFade extends SoundNodeDistanceCrossFade { 
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeParamCrossFade;
	static Find(Outer: UObject, ResourceName: string): SoundNodeParamCrossFade;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeParamCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeParamCrossFade;
	static C(Other: UObject): SoundNodeParamCrossFade;
}

declare class SoundNodeDoppler extends SoundNode { 
	DopplerIntensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDoppler;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDoppler;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeDoppler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDoppler;
	static C(Other: UObject): SoundNodeDoppler;
}

declare class SoundNodeEnveloper extends SoundNode { 
	LoopStart: number;
	LoopEnd: number;
	DurationAfterLoop: number;
	LoopCount: number;
	bLoopIndefinitely: boolean;
	bLoop: boolean;
	VolumeInterpCurve: DistributionFloatConstantCurve;
	PitchInterpCurve: DistributionFloatConstantCurve;
	VolumeCurve: RuntimeFloatCurve;
	PitchCurve: RuntimeFloatCurve;
	PitchMin: number;
	PitchMax: number;
	VolumeMin: number;
	VolumeMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeEnveloper;
	static Find(Outer: UObject, ResourceName: string): SoundNodeEnveloper;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeEnveloper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeEnveloper;
	static C(Other: UObject): SoundNodeEnveloper;
}

declare class SoundNodeGroupControl extends SoundNode { 
	GroupSizes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeGroupControl;
	static Find(Outer: UObject, ResourceName: string): SoundNodeGroupControl;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeGroupControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeGroupControl;
	static C(Other: UObject): SoundNodeGroupControl;
}

declare class SoundNodeLooping extends SoundNode { 
	LoopCount: number;
	bLoopIndefinitely: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeLooping;
	static Find(Outer: UObject, ResourceName: string): SoundNodeLooping;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeLooping;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeLooping;
	static C(Other: UObject): SoundNodeLooping;
}

declare class SoundNodeMature extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMature;
	static Find(Outer: UObject, ResourceName: string): SoundNodeMature;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeMature;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMature;
	static C(Other: UObject): SoundNodeMature;
}

declare class SoundNodeMixer extends SoundNode { 
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMixer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeMixer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeMixer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMixer;
	static C(Other: UObject): SoundNodeMixer;
}

declare class SoundNodeModulator extends SoundNode { 
	PitchMin: number;
	PitchMax: number;
	VolumeMin: number;
	VolumeMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeModulator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeModulator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulator;
	static C(Other: UObject): SoundNodeModulator;
}

declare type ModulationParamMode = 'MPM_Normal' | 'MPM_Abs' | 'MPM_Direct';
declare var ModulationParamMode : { MPM_Normal:'MPM_Normal',MPM_Abs:'MPM_Abs',MPM_Direct:'MPM_Direct', };
declare class ModulatorContinuousParams { 
	ParameterName: string;
	Default: number;
	MinInput: number;
	MaxInput: number;
	MinOutput: number;
	MaxOutput: number;
	ParamMode: ModulationParamMode;
	clone() : ModulatorContinuousParams;
	static C(Other: UObject): ModulatorContinuousParams;
}

declare class SoundNodeModulatorContinuous extends SoundNode { 
	PitchModulationParams: ModulatorContinuousParams;
	VolumeModulationParams: ModulatorContinuousParams;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulatorContinuous;
	static Find(Outer: UObject, ResourceName: string): SoundNodeModulatorContinuous;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeModulatorContinuous;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulatorContinuous;
	static C(Other: UObject): SoundNodeModulatorContinuous;
}

declare class SoundNodeOscillator extends SoundNode { 
	bModulateVolume: boolean;
	bModulatePitch: boolean;
	AmplitudeMin: number;
	AmplitudeMax: number;
	FrequencyMin: number;
	FrequencyMax: number;
	OffsetMin: number;
	OffsetMax: number;
	CenterMin: number;
	CenterMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeOscillator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeOscillator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeOscillator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeOscillator;
	static C(Other: UObject): SoundNodeOscillator;
}

declare class SoundNodeQualityLevel extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeQualityLevel;
	static Find(Outer: UObject, ResourceName: string): SoundNodeQualityLevel;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeQualityLevel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeQualityLevel;
	static C(Other: UObject): SoundNodeQualityLevel;
}

declare class SoundNodeRandom extends SoundNode { 
	Weights: number[];
	PreselectAtLevelLoad: number;
	bRandomizeWithoutReplacement: boolean;
	HasBeenUsed: boolean[];
	NumRandomUsed: number;
	PIEHiddenNodes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeRandom;
	static Find(Outer: UObject, ResourceName: string): SoundNodeRandom;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeRandom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeRandom;
	static C(Other: UObject): SoundNodeRandom;
}

declare class SoundNodeSoundClass extends SoundNode { 
	SoundClassOverride: SoundClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSoundClass;
	static Find(Outer: UObject, ResourceName: string): SoundNodeSoundClass;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeSoundClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSoundClass;
	static C(Other: UObject): SoundNodeSoundClass;
}

declare class SoundNodeSwitch extends SoundNode { 
	IntParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSwitch;
	static Find(Outer: UObject, ResourceName: string): SoundNodeSwitch;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSwitch;
	static C(Other: UObject): SoundNodeSwitch;
}

declare class SoundNodeWaveParam extends SoundNode { 
	WaveParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWaveParam;
	static Find(Outer: UObject, ResourceName: string): SoundNodeWaveParam;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SoundNodeWaveParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWaveParam;
	static C(Other: UObject): SoundNodeWaveParam;
}

declare class TextPropertyTestObject extends UObject { 
	DefaultedText: string;
	UndefaultedText: string;
	TransientText: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextPropertyTestObject;
	static Find(Outer: UObject, ResourceName: string): TextPropertyTestObject;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TextPropertyTestObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextPropertyTestObject;
	static C(Other: UObject): TextPropertyTestObject;
}

declare class LightMapTexture2D extends Texture2D { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightMapTexture2D;
	static Find(Outer: UObject, ResourceName: string): LightMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LightMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMapTexture2D;
	static C(Other: UObject): LightMapTexture2D;
}

declare type EShadowMapFlags = 'SMF_None' | 'SMF_Streamed';
declare var EShadowMapFlags : { SMF_None:'SMF_None',SMF_Streamed:'SMF_Streamed', };
declare class ShadowMapTexture2D extends Texture2D { 
	ShadowmapFlags: EShadowMapFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShadowMapTexture2D;
	static Find(Outer: UObject, ResourceName: string): ShadowMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ShadowMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShadowMapTexture2D;
	static C(Other: UObject): ShadowMapTexture2D;
}

declare class Texture2DDynamic extends Texture { 
	Format: EPixelFormat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): Texture2DDynamic;
	static Find(Outer: UObject, ResourceName: string): Texture2DDynamic;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): Texture2DDynamic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Texture2DDynamic;
	static C(Other: UObject): Texture2DDynamic;
}

declare class CanvasRenderTarget2D extends TextureRenderTarget2D { 
	OnCanvasRenderTargetUpdate: UnrealEngineMulticastDelegate<(Canvas: Canvas, Width: number, Height: number) => void>;
	World: any;
	bShouldClearRenderTargetOnReceiveUpdate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CanvasRenderTarget2D;
	static Find(Outer: UObject, ResourceName: string): CanvasRenderTarget2D;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): CanvasRenderTarget2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CanvasRenderTarget2D;
	UpdateResource(): void;
	ReceiveUpdate(Canvas: Canvas,Width: number,Height: number): void;
	GetSize(Width?: number,Height?: number): {Width: number, Height: number};
	static CreateCanvasRenderTarget2D(WorldContextObject: UObject,CanvasRenderTarget2DClass: UnrealEngineClass,Width: number,Height: number): CanvasRenderTarget2D;
	static C(Other: UObject): CanvasRenderTarget2D;
}

declare class UserDefinedEnum extends Enum { 
	UniqueNameIndex: any;
	DisplayNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UserDefinedEnum;
	static Find(Outer: UObject, ResourceName: string): UserDefinedEnum;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): UserDefinedEnum;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserDefinedEnum;
	static C(Other: UObject): UserDefinedEnum;
}

declare type EVectorFieldConstructionOp = 'VFCO_Extrude' | 'VFCO_Revolve';
declare var EVectorFieldConstructionOp : { VFCO_Extrude:'VFCO_Extrude',VFCO_Revolve:'VFCO_Revolve', };
declare class VectorFieldStatic extends VectorField { 
	SizeX: number;
	SizeY: number;
	SizeZ: number;
	SourceFilePath: string;
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldStatic;
	static Find(Outer: UObject, ResourceName: string): VectorFieldStatic;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): VectorFieldStatic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldStatic;
	static C(Other: UObject): VectorFieldStatic;
}

declare class VectorFieldAnimated extends VectorField { 
	Texture: Texture2D;
	ConstructionOp: EVectorFieldConstructionOp;
	VolumeSizeX: number;
	VolumeSizeY: number;
	VolumeSizeZ: number;
	SubImagesX: number;
	SubImagesY: number;
	FrameCount: number;
	FramesPerSecond: number;
	bLoop: boolean;
	NoiseField: VectorFieldStatic;
	NoiseScale: number;
	NoiseMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldAnimated;
	static Find(Outer: UObject, ResourceName: string): VectorFieldAnimated;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): VectorFieldAnimated;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldAnimated;
	static C(Other: UObject): VectorFieldAnimated;
}

declare class VisualLoggerAutomationTests extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerAutomationTests;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerAutomationTests;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): VisualLoggerAutomationTests;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerAutomationTests;
	static C(Other: UObject): VisualLoggerAutomationTests;
}

declare class VisualLoggerDebugSnapshotInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerDebugSnapshotInterface;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerDebugSnapshotInterface;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): VisualLoggerDebugSnapshotInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerDebugSnapshotInterface;
	static C(Other: UObject): VisualLoggerDebugSnapshotInterface;
}

declare class MoviePlayerSettings extends UObject { 
	bWaitForMoviesToComplete: boolean;
	bMoviesAreSkippable: boolean;
	StartupMovies: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MoviePlayerSettings;
	static Find(Outer: UObject, ResourceName: string): MoviePlayerSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MoviePlayerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoviePlayerSettings;
	static C(Other: UObject): MoviePlayerSettings;
}

declare class MacTargetSettings extends UObject { 
	TargetedRHIs: string[];
	CachedShaderFormats: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MacTargetSettings;
	static Find(Outer: UObject, ResourceName: string): MacTargetSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MacTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MacTargetSettings;
	static C(Other: UObject): MacTargetSettings;
}

declare type ECompilerVersion = 'Default' | 'VisualStudio2013' | 'VisualStudio2015' | 'VisualStudio2017';
declare var ECompilerVersion : { Default:'Default',VisualStudio2013:'VisualStudio2013',VisualStudio2015:'VisualStudio2015',VisualStudio2017:'VisualStudio2017', };
declare type EMinimumSupportedOS = 'MSOS_Vista' | 'MSOS_XP';
declare var EMinimumSupportedOS : { MSOS_Vista:'MSOS_Vista',MSOS_XP:'MSOS_XP', };
declare class WindowsTargetSettings extends UObject { 
	Compiler: ECompilerVersion;
	TargetedRHIs: string[];
	MinimumOSVersion: EMinimumSupportedOS;
	AudioDevice: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WindowsTargetSettings;
	static Find(Outer: UObject, ResourceName: string): WindowsTargetSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): WindowsTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindowsTargetSettings;
	static C(Other: UObject): WindowsTargetSettings;
}

declare class LinuxTargetSettings extends UObject { 
	TargetedRHIs: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LinuxTargetSettings;
	static Find(Outer: UObject, ResourceName: string): LinuxTargetSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LinuxTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinuxTargetSettings;
	static C(Other: UObject): LinuxTargetSettings;
}

declare class NamedInterface { 
	InterfaceName: string;
	InterfaceObject: UObject;
	clone() : NamedInterface;
	static C(Other: UObject): NamedInterface;
}

declare class NamedInterfaceDef { 
	InterfaceName: string;
	InterfaceClassName: string;
	clone() : NamedInterfaceDef;
	static C(Other: UObject): NamedInterfaceDef;
}

declare class NamedInterfaces extends UObject { 
	NamedInterfaces: NamedInterface[];
	NamedInterfaceDefs: NamedInterfaceDef[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NamedInterfaces;
	static Find(Outer: UObject, ResourceName: string): NamedInterfaces;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): NamedInterfaces;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NamedInterfaces;
	static C(Other: UObject): NamedInterfaces;
}

declare class TurnBasedMatchInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TurnBasedMatchInterface;
	static Find(Outer: UObject, ResourceName: string): TurnBasedMatchInterface;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TurnBasedMatchInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedMatchInterface;
	OnMatchReceivedTurn(Match: string,bDidBecomeActive: boolean): void;
	OnMatchEnded(Match: string): void;
	static C(Other: UObject): TurnBasedMatchInterface;
}

declare class AchievementBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AchievementBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AchievementBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementBlueprintLibrary;
	static GetCachedAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Progress?: number): {bFoundID: boolean, Progress: number};
	static GetCachedAchievementDescription(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Title?: string,LockedDescription?: string,UnlockedDescription?: string,bHidden?: boolean): {bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean};
	static C(Other: UObject): AchievementBlueprintLibrary;
}

declare class AchievementQueryCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AchievementQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementQueryCallbackProxy;
	static CacheAchievements(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static CacheAchievementDescriptions(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static C(Other: UObject): AchievementQueryCallbackProxy;
}

declare class AchievementWriteCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementWriteCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementWriteCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AchievementWriteCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementWriteCallbackProxy;
	static WriteAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementName: string,Progress: number,UserTag: number): AchievementWriteCallbackProxy;
	static C(Other: UObject): AchievementWriteCallbackProxy;
}

declare class ConnectionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConnectionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ConnectionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ConnectionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConnectionCallbackProxy;
	static ConnectToService(WorldContextObject: UObject,PlayerController: PlayerController): ConnectionCallbackProxy;
	static C(Other: UObject): ConnectionCallbackProxy;
}

declare class CreateSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CreateSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): CreateSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): CreateSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateSessionCallbackProxy;
	static CreateSession(WorldContextObject: UObject,PlayerController: PlayerController,PublicConnections: number,bUseLAN: boolean): CreateSessionCallbackProxy;
	static C(Other: UObject): CreateSessionCallbackProxy;
}

declare class DestroySessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DestroySessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): DestroySessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): DestroySessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DestroySessionCallbackProxy;
	static DestroySession(WorldContextObject: UObject,PlayerController: PlayerController): DestroySessionCallbackProxy;
	static C(Other: UObject): DestroySessionCallbackProxy;
}

declare class EndMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EndMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndMatchCallbackProxy;
	static C(Other: UObject): EndMatchCallbackProxy;
}

declare class EndTurnCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndTurnCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndTurnCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EndTurnCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndTurnCallbackProxy;
	static C(Other: UObject): EndTurnCallbackProxy;
}

declare class BlueprintSessionResult { 
	clone() : BlueprintSessionResult;
	static C(Other: UObject): BlueprintSessionResult;
}

declare class FindSessionsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindSessionsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindSessionsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FindSessionsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindSessionsCallbackProxy;
	static GetServerName(Result: BlueprintSessionResult): string;
	static GetPingInMs(Result: BlueprintSessionResult): number;
	static GetMaxPlayers(Result: BlueprintSessionResult): number;
	static GetCurrentPlayers(Result: BlueprintSessionResult): number;
	static FindSessions(WorldContextObject: UObject,PlayerController: PlayerController,MaxResults: number,bUseLAN: boolean): FindSessionsCallbackProxy;
	static C(Other: UObject): FindSessionsCallbackProxy;
}

declare class FindTurnBasedMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindTurnBasedMatchCallbackProxy;
	static C(Other: UObject): FindTurnBasedMatchCallbackProxy;
}

declare type EInAppPurchaseState = 'Unknown' | 'Success' | 'Failed' | 'Cancelled' | 'Invalid' | 'NotAllowed' | 'Restored' | 'AlreadyOwned';
declare var EInAppPurchaseState : { Unknown:'Unknown',Success:'Success',Failed:'Failed',Cancelled:'Cancelled',Invalid:'Invalid',NotAllowed:'NotAllowed',Restored:'Restored',AlreadyOwned:'AlreadyOwned', };
declare class InAppPurchaseProductInfo { 
	Identifier: string;
	TransactionIdentifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
	RawPrice: number;
	CurrencyCode: string;
	CurrencySymbol: string;
	DecimalSeparator: string;
	GroupingSeparator: string;
	ReceiptData: string;
	clone() : InAppPurchaseProductInfo;
	static C(Other: UObject): InAppPurchaseProductInfo;
}

declare class InAppPurchaseProductRequest { 
	ProductIdentifier: string;
	bIsConsumable: boolean;
	clone() : InAppPurchaseProductRequest;
	static C(Other: UObject): InAppPurchaseProductRequest;
}

declare class InAppPurchaseCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InAppPurchaseCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseCallbackProxy;
	static CreateProxyObjectForInAppPurchase(PlayerController: PlayerController,ProductRequest: InAppPurchaseProductRequest): InAppPurchaseCallbackProxy;
	static C(Other: UObject): InAppPurchaseCallbackProxy;
}

declare class InAppPurchaseQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseQueryCallbackProxy;
	static ReadInAppPurchaseInformation(PlayerController: PlayerController,ProductIdentifiers: string[]): InAppPurchaseQueryCallbackProxy;
	static C(Other: UObject): InAppPurchaseQueryCallbackProxy;
}

declare class InAppPurchaseRestoreInfo { 
	Identifier: string;
	ReceiptData: string;
	TransactionIdentifier: string;
	clone() : InAppPurchaseRestoreInfo;
	static C(Other: UObject): InAppPurchaseRestoreInfo;
}

declare class InAppPurchaseRestoreCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseRestoreCallbackProxy;
	static CreateProxyObjectForInAppPurchaseRestore(ConsumableProductFlags: InAppPurchaseProductRequest[],PlayerController: PlayerController): InAppPurchaseRestoreCallbackProxy;
	static C(Other: UObject): InAppPurchaseRestoreCallbackProxy;
}

declare class IpConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpConnection;
	static Find(Outer: UObject, ResourceName: string): IpConnection;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): IpConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpConnection;
	static C(Other: UObject): IpConnection;
}

declare class IpNetDriver extends NetDriver { 
	LogPortUnreach: boolean;
	AllowPlayerPortUnreach: boolean;
	MaxPortCountToTry: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpNetDriver;
	static Find(Outer: UObject, ResourceName: string): IpNetDriver;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): IpNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpNetDriver;
	static C(Other: UObject): IpNetDriver;
}

declare class JoinSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JoinSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): JoinSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JoinSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JoinSessionCallbackProxy;
	static JoinSession(WorldContextObject: UObject,PlayerController: PlayerController,SearchResult: BlueprintSessionResult): JoinSessionCallbackProxy;
	static C(Other: UObject): JoinSessionCallbackProxy;
}

declare class LeaderboardBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LeaderboardBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LeaderboardBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardBlueprintLibrary;
	static WriteLeaderboardInteger(PlayerController: PlayerController,StatName: string,StatValue: number): boolean;
	static C(Other: UObject): LeaderboardBlueprintLibrary;
}

declare class LeaderboardFlushCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardFlushCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
	static C(Other: UObject): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static ReadLeaderboardInteger(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
	static C(Other: UObject): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogoutCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LogoutCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LogoutCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
	static C(Other: UObject): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	BeaconConnectionInitialTimeout: number;
	BeaconConnectionTimeout: number;
	NetDriver: NetDriver;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineBeacon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	BeaconTypeName: string;
	ClientBeaconActorClass: UnrealEngineClass;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineBeaconHostObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = 'Invalid' | 'Closed' | 'Pending' | 'Open';
declare var EBeaconConnectionState : { Invalid:'Invalid',Closed:'Closed',Pending:'Pending',Open:'Open', };
declare class OnlineBeaconClient extends OnlineBeacon { 
	BeaconOwner: OnlineBeaconHostObject;
	BeaconConnection: NetConnection;
	ConnectionState: EBeaconConnectionState;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	ClientOnConnected(): void;
	static C(Other: UObject): OnlineBeaconClient;
}

declare class PlayerReservation { 
	UniqueId: UniqueNetIdRepl;
	ValidationStr: string;
	ElapsedTime: number;
	clone() : PlayerReservation;
	static C(Other: UObject): PlayerReservation;
}

declare class PartyReservation { 
	TeamNum: number;
	PartyLeader: UniqueNetIdRepl;
	PartyMembers: PlayerReservation[];
	clone() : PartyReservation;
	static C(Other: UObject): PartyReservation;
}

declare class PartyBeaconState extends UObject { 
	SessionName: string;
	NumConsumedReservations: number;
	MaxReservations: number;
	NumTeams: number;
	NumPlayersPerTeam: number;
	TeamAssignmentMethod: string;
	ReservedHostTeamNum: number;
	ForceTeamNum: number;
	Reservations: PartyReservation[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PartyBeaconState;
	static Find(Outer: UObject, ResourceName: string): PartyBeaconState;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PartyBeaconState;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject): PartyBeaconState;
}

declare type EClientRequestType = 'NonePending' | 'ExistingSessionReservation' | 'ReservationUpdate' | 'EmptyServerReservation' | 'Reconnect';
declare var EClientRequestType : { NonePending:'NonePending',ExistingSessionReservation:'ExistingSessionReservation',ReservationUpdate:'ReservationUpdate',EmptyServerReservation:'EmptyServerReservation',Reconnect:'Reconnect', };
declare type EPartyReservationResult = 'NoResult' | 'RequestPending' | 'GeneralError' | 'PartyLimitReached' | 'IncorrectPlayerCount' | 'RequestTimedOut' | 'ReservationDuplicate' | 'ReservationNotFound' | 'ReservationAccepted' | 'ReservationDenied' | 'ReservationDenied_Banned' | 'ReservationRequestCanceled' | 'ReservationInvalid' | 'BadSessionId';
declare var EPartyReservationResult : { NoResult:'NoResult',RequestPending:'RequestPending',GeneralError:'GeneralError',PartyLimitReached:'PartyLimitReached',IncorrectPlayerCount:'IncorrectPlayerCount',RequestTimedOut:'RequestTimedOut',ReservationDuplicate:'ReservationDuplicate',ReservationNotFound:'ReservationNotFound',ReservationAccepted:'ReservationAccepted',ReservationDenied:'ReservationDenied',ReservationDenied_Banned:'ReservationDenied_Banned',ReservationRequestCanceled:'ReservationRequestCanceled',ReservationInvalid:'ReservationInvalid',BadSessionId:'BadSessionId', };
declare class PartyBeaconClient extends OnlineBeaconClient { 
	DestSessionId: string;
	PendingReservation: PartyReservation;
	RequestType: EClientRequestType;
	bPendingReservationSent: boolean;
	bCancelReservation: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PartyBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	ClientSendReservationFull(): void;
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
	ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
	static C(Other: UObject): PartyBeaconClient;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TestBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	ServerPong(): void;
	ClientPing(): void;
	static C(Other: UObject): TestBeaconClient;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	ListenPort: number;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject): OnlineBeaconHost;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	State: PartyBeaconState;
	bLogoutOnSessionTimeout: boolean;
	SessionTimeoutSecs: number;
	TravelSessionTimeoutSecs: number;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PartyBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject): PartyBeaconHost;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TestBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject): TestBeaconHost;
}

declare class OnlineEngineInterfaceImpl extends OnlineEngineInterface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineEngineInterfaceImpl;
	static Find(Outer: UObject, ResourceName: string): OnlineEngineInterfaceImpl;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineEngineInterfaceImpl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineEngineInterfaceImpl;
	static C(Other: UObject): OnlineEngineInterfaceImpl;
}

declare class PIELoginSettingsInternal { 
	Id: string;
	Token: string;
	Type: string;
	TokenBytes: number[];
	clone() : PIELoginSettingsInternal;
	static C(Other: UObject): PIELoginSettingsInternal;
}

declare class OnlinePIESettings extends DeveloperSettings { 
	bOnlinePIEEnabled: boolean;
	Logins: PIELoginSettingsInternal[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlinePIESettings;
	static Find(Outer: UObject, ResourceName: string): OnlinePIESettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlinePIESettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlinePIESettings;
	static C(Other: UObject): OnlinePIESettings;
}

declare class OnlineSessionClient extends OnlineSession { 
	bIsFromInvite: boolean;
	bHandlingDisconnect: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineSessionClient;
	static Find(Outer: UObject, ResourceName: string): OnlineSessionClient;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OnlineSessionClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject): OnlineSessionClient;
}

declare type EMPMatchOutcome = 'None' | 'Quit' | 'Won' | 'Lost' | 'Tied' | 'TimeExpired' | 'First' | 'Second' | 'Third' | 'Fourth';
declare var EMPMatchOutcome : { None:'None',Quit:'Quit',Won:'Won',Lost:'Lost',Tied:'Tied',TimeExpired:'TimeExpired',First:'First',Second:'Second',Third:'Third',Fourth:'Fourth', };
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QuitMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
	static C(Other: UObject): QuitMatchCallbackProxy;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ShowLoginUICallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
	static C(Other: UObject): ShowLoginUICallbackProxy;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TurnBasedBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
	static C(Other: UObject): TurnBasedBlueprintLibrary;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseRestore;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject): K2Node_LeaderboardQuery;
}

declare type ETrackedDeviceType = 'None' | 'HMD' | 'LTouch' | 'RTouch' | 'Touch' | 'All';
declare var ETrackedDeviceType : { None:'None',HMD:'HMD',LTouch:'LTouch',RTouch:'RTouch',Touch:'Touch',All:'All', };
declare class BoundaryTestResult { 
	IsTriggering: boolean;
	DeviceType: ETrackedDeviceType;
	ClosestDistance: number;
	ClosestPoint: Vector;
	ClosestPointNormal: Vector;
	clone() : BoundaryTestResult;
	static C(Other: UObject): BoundaryTestResult;
}

declare class OculusRiftBoundaryComponent extends ActorComponent { 
	OnOuterBoundaryTriggered: UnrealEngineMulticastDelegate<(OuterBoundsInteractionList: BoundaryTestResult[]) => void>;
	OnOuterBoundaryReturned: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OculusRiftBoundaryComponent;
	static Find(Outer: UObject, ResourceName: string): OculusRiftBoundaryComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): OculusRiftBoundaryComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusRiftBoundaryComponent;
	SetOuterBoundaryColor(InBoundaryColor: Color): boolean;
	ResetOuterBoundaryColor(): boolean;
	RequestOuterBoundaryVisible(BoundaryVisible: boolean): boolean;
	IsOuterBoundaryTriggered(): boolean;
	IsOuterBoundaryDisplayed(): boolean;
	GetTriggeredPlayAreaInfo(DeviceType: ETrackedDeviceType): BoundaryTestResult;
	GetTriggeredOuterBoundaryInfo(): BoundaryTestResult[];
	GetPlayAreaPoints(): Vector[];
	GetPlayAreaDimensions(): Vector;
	GetOuterBoundaryPoints(): Vector[];
	GetOuterBoundaryDimensions(): Vector;
	CheckIfPointWithinPlayArea(Point: Vector): BoundaryTestResult;
	CheckIfPointWithinOuterBounds(Point: Vector): BoundaryTestResult;
	static C(Other: UObject): OculusRiftBoundaryComponent;
}

declare class SceneCubemapCapturer extends UObject { 
	CaptureComponents: SceneCaptureComponent2D[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneCubemapCapturer;
	static Find(Outer: UObject, ResourceName: string): SceneCubemapCapturer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SceneCubemapCapturer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCubemapCapturer;
	static C(Other: UObject): SceneCubemapCapturer;
}

declare class SourceCodeAccessSettings extends UObject { 
	PreferredAccessor: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static Find(Outer: UObject, ResourceName: string): SourceCodeAccessSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject): SourceCodeAccessSettings;
}

declare class AutomationBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomationBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationBlueprintFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AutomationBlueprintFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationBlueprintFunctionLibrary;
	static TakeAutomationScreenshotAtCamera(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Camera: CameraActor,NameOverride: string,Options: AutomationScreenshotOptions): void;
	static TakeAutomationScreenshot(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Name: string,Options: AutomationScreenshotOptions): void;
	static GetDefaultScreenshotOptionsForRendering(Tolerance: EComparisonTolerance): AutomationScreenshotOptions;
	static GetDefaultScreenshotOptionsForGameplay(Tolerance: EComparisonTolerance): AutomationScreenshotOptions;
	static AreAutomatedTestsRunning(): boolean;
	static C(Other: UObject): AutomationBlueprintFunctionLibrary;
}

declare class AutomationPerformaceHelper extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomationPerformaceHelper;
	static Find(Outer: UObject, ResourceName: string): AutomationPerformaceHelper;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AutomationPerformaceHelper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationPerformaceHelper;
	WriteLogFile(CaptureDir: string,CaptureExtension: string): void;
	TriggerGPUTraceIfRecordFallsBelowBudget(): void;
	Tick(DeltaSeconds: number): void;
	StopCPUProfiling(): void;
	StartCPUProfiling(): void;
	Sample(DeltaSeconds: number): void;
	OnBeginTests(): void;
	OnAllTestsComplete(): void;
	IsRecording(): boolean;
	IsCurrentRecordWithinRenderThreadBudget(): boolean;
	IsCurrentRecordWithinGPUBudget(): boolean;
	IsCurrentRecordWithinGameThreadBudget(): boolean;
	EndStatsFile(): void;
	EndRecordingBaseline(): void;
	EndRecording(): void;
	BeginStatsFile(RecordName: string): void;
	BeginRecordingBaseline(RecordName: string): void;
	BeginRecording(RecordName: string,InGPUBudget: number,InRenderThreadBudget: number,InGameThreadBudget: number): void;
	static C(Other: UObject): AutomationPerformaceHelper;
}

declare type EFunctionalTestResult = 'Default' | 'Invalid' | 'Error' | 'Running' | 'Failed' | 'Succeeded';
declare var EFunctionalTestResult : { Default:'Default',Invalid:'Invalid',Error:'Error',Running:'Running',Failed:'Failed',Succeeded:'Succeeded', };
declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): FuncTestRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject): FuncTestRenderingComponent;
}

declare type EComparisonMethod = 'Equal_To' | 'Not_Equal_To' | 'Greater_Than_Or_Equal_To' | 'Less_Than_Or_Equal_To' | 'Greater_Than' | 'Less_Than';
declare var EComparisonMethod : { Equal_To:'Equal_To',Not_Equal_To:'Not_Equal_To',Greater_Than_Or_Equal_To:'Greater_Than_Or_Equal_To',Less_Than_Or_Equal_To:'Less_Than_Or_Equal_To',Greater_Than:'Greater_Than',Less_Than:'Less_Than', };
declare class FunctionalTest extends Actor { 
	SpriteComponent: BillboardComponent;
	bIsEnabled: boolean;
	bWarningsAsErrors: boolean;
	Description: string;
	ObservationPoint: Actor;
	RandomNumbersStream: RandomStream;
	Result: EFunctionalTestResult;
	PreparationTimeLimit: number;
	TimeLimit: number;
	TimesUpMessage: string;
	TimesUpResult: EFunctionalTestResult;
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	AutoDestroyActors: Actor[];
	RenderComp: FuncTestRenderingComponent;
	TestName: TextRenderComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	StartTest(): void;
	PrepareTest(): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	IsRunning(): boolean;
	IsReady(): boolean;
	IsEnabled(): boolean;
	GetCurrentRerunReason(): string;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
	AssertValue(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): void;
	AssertValue(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): void;
	AssertValue(Actual: DateTime,ShouldBe: EComparisonMethod,Expected: DateTime,What: string,ContextObject: UObject): void;
	AssertTrue(Condition: boolean,Message: string,ContextObject: UObject): void;
	AssertNotEqual(Actual: Vector,NotExpected: Vector,What: string,ContextObject: UObject): void;
	AssertNotEqual(Actual: Transform,NotExpected: Transform,What: string,ContextObject: UObject): void;
	AssertNotEqual(Actual: string,NotExpected: string,What: string,ContextObject: UObject): void;
	AssertNotEqual(Actual: Rotator,NotExpected: Rotator,What: string,ContextObject: UObject): void;
	AssertIsValid(UObject: UObject,Message: string,ContextObject: UObject): void;
	AssertFalse(Condition: boolean,Message: string,ContextObject: UObject): void;
	AssertEqual(Actual: Vector,Expected: Vector,What: string,Tolerance: number,ContextObject: UObject): void;
	AssertEqual(Actual: Transform,Expected: Transform,What: string,ContextObject: UObject): void;
	AssertEqual(Actual: string,Expected: string,What: string,ContextObject: UObject): void;
	AssertEqual(Actual: Rotator,Expected: Rotator,What: string,ContextObject: UObject): void;
	AssertEqual(Actual: number,Expected: number,What: string,Tolerance: number,ContextObject: UObject): void;
	AddWarning(Message: string): void;
	AddRerun(Reason: string): void;
	AddError(Message: string): void;
	static C(Other: UObject): FunctionalTest;
}

declare class GenericTeamId { 
	TeamID: number;
	clone() : GenericTeamId;
	static C(Other: UObject): GenericTeamId;
}

declare class AITestSpawnInfo { 
	PawnClass: UnrealEngineClass;
	ControllerClass: UnrealEngineClass;
	TeamID: GenericTeamId;
	BehaviorTree: BehaviorTree;
	SpawnLocation: Actor;
	NumberToSpawn: number;
	SpawnDelay: number;
	PreSpawnDelay: number;
	clone() : AITestSpawnInfo;
	static C(Other: UObject): AITestSpawnInfo;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
	clone() : AITestSpawnSet;
	static C(Other: UObject): AITestSpawnSet;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
	clone() : PendingDelayedSpawn;
	static C(Other: UObject): PendingDelayedSpawn;
}

declare class FunctionalAITest extends FunctionalTest { 
	SpawnSets: AITestSpawnSet[];
	SpawnLocationRandomizationRange: number;
	SpawnedPawns: Pawn[];
	PendingDelayedSpawns: PendingDelayedSpawn[];
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	bWaitForNavMesh: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FunctionalAITest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
	static C(Other: UObject): FunctionalAITest;
}

declare class ScreenshotFunctionalTest extends FunctionalTest { 
	ScreenshotCamera: CameraComponent;
	ScreenshotOptions: AutomationScreenshotOptions;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ScreenshotFunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotFunctionalTest;
	static C(Other: UObject): ScreenshotFunctionalTest;
}

declare class FunctionalTestGameMode extends GameModeBase { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FunctionalTestGameMode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestGameMode;
	static C(Other: UObject): FunctionalTestGameMode;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	OnTestsComplete: UnrealEngineMulticastDelegate<() => void>;
	OnTestsBegin: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FunctionalTestingManager;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestingManager;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FunctionalTestingManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContext: UObject,bNewLog: boolean,bRunLooped: boolean,bWaitForNavigationBuildFinish: boolean,FailedTestsReproString: string): boolean;
	static C(Other: UObject): FunctionalTestingManager;
}

declare class PhasedAutomationActorBase extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PhasedAutomationActorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhasedAutomationActorBase;
	OnFunctionalTestingComplete(): void;
	OnFunctionalTestingBegin(): void;
	static C(Other: UObject): PhasedAutomationActorBase;
}

declare class FunctionalTestLevelScript extends LevelScriptActor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FunctionalTestLevelScript;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestLevelScript;
	static C(Other: UObject): FunctionalTestLevelScript;
}

declare class TestPhaseComponent extends SceneComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPhaseComponent;
	static Find(Outer: UObject, ResourceName: string): TestPhaseComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TestPhaseComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPhaseComponent;
	static C(Other: UObject): TestPhaseComponent;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraph;
	static Find(Outer: UObject, ResourceName: string): AIGraph;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AIGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
	clone() : GraphNodeClassData;
	static C(Other: UObject): GraphNodeClassData;
}

declare class AIGraphNode extends EdGraphNode { 
	ClassData: GraphNodeClassData;
	NodeInstance: UObject;
	ParentNode: AIGraphNode;
	SubNodes: AIGraphNode[];
	CopySubNodeIndex: number;
	bIsReadOnly: boolean;
	bIsSubNode: boolean;
	ErrorMessage: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphNode;
	static Find(Outer: UObject, ResourceName: string): AIGraphNode;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AIGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphSchema;
	static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AIGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject): AIGraphSchema;
}

declare class K2Node_AIMoveTo extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_AIMoveTo;
	static Find(Outer: UObject, ResourceName: string): K2Node_AIMoveTo;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_AIMoveTo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_AIMoveTo;
	static C(Other: UObject): K2Node_AIMoveTo;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = 'Sink' | 'And' | 'Or' | 'Not';
declare var EDecoratorLogicMode : { Sink:'Sink',And:'And',Or:'Or',Not:'Not', };
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeFactory;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	Decorators: BehaviorTreeGraphNode[];
	Services: BehaviorTreeGraphNode[];
	bInjectedNode: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Composite;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	BoundGraph: EdGraph;
	CompositeName: string;
	bShowOperations: boolean;
	bCanAbortFlow: boolean;
	ParentNodeInstance: BTCompositeNode;
	CachedDescription: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Service;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlackboardDataFactory;
	static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): BlackboardDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParamPins: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentGameplayTaskCall;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject): K2Node_LatentGameplayTaskCall;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject): ContentBrowserFrontEndFilterExtension;
}

declare class GameplayTagSearchFilter extends ContentBrowserFrontEndFilterExtension { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagSearchFilter;
	static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagSearchFilter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagSearchFilter;
	static C(Other: UObject): GameplayTagSearchFilter;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer;
}

declare class GameLiveStreamingFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameLiveStreamingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GameLiveStreamingFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GameLiveStreamingFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameLiveStreamingFunctionLibrary;
	static StopWebCam(): void;
	static StopBroadcastingGame(): void;
	static StartWebCam(DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean): void;
	static StartBroadcastingGame(LoginUserName: string,LoginPassword: string,FrameRate: number,ScreenScaling: number,bStartWebCam: boolean,DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean,bCaptureAudioFromComputer: boolean,bCaptureAudioFromMicrophone: boolean,CoverUpImage: Texture2D): void;
	static IsWebCamEnabled(): boolean;
	static IsBroadcastingGame(): boolean;
	static C(Other: UObject): GameLiveStreamingFunctionLibrary;
}

declare class BlueprintLiveStreamInfo { 
	GameName: string;
	StreamName: string;
	URL: string;
	clone() : BlueprintLiveStreamInfo;
	static C(Other: UObject): BlueprintLiveStreamInfo;
}

declare class QueryLiveStreamsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnQueriedLiveStreams: UnrealEngineMulticastDelegate<(LiveStreams: BlueprintLiveStreamInfo[], bWasSuccessful: boolean) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QueryLiveStreamsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QueryLiveStreamsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): QueryLiveStreamsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryLiveStreamsCallbackProxy;
	static QueryLiveStreams(GameName: string): QueryLiveStreamsCallbackProxy;
	static C(Other: UObject): QueryLiveStreamsCallbackProxy;
}

declare class MediaSource extends UObject { 
	PlatformPlayerNames: any;
	PlayerName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSource;
	static Find(Outer: UObject, ResourceName: string): MediaSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSource;
	static C(Other: UObject): MediaSource;
}

declare class MediaPlaylist extends UObject { 
	Items: MediaSource[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlaylist;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylist;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaPlaylist;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylist;
	RemoveAt(Index: number): void;
	Remove(MediaSource: MediaSource): void;
	Num(): number;
	Insert(MediaSource: MediaSource,Index: number): void;
	GetRandom(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetPrevious(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetNext(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	Get(Index: number): MediaSource;
	Add(MediaSource: MediaSource): void;
	static C(Other: UObject): MediaPlaylist;
}

declare class MediaSoundWave extends SoundWave { 
	AudioTrackIndex: number;
	MediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWave;
	static Find(Outer: UObject, ResourceName: string): MediaSoundWave;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaSoundWave;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWave;
	static C(Other: UObject): MediaSoundWave;
}

declare class MediaTexture extends Texture { 
	AddressX: TextureAddress;
	AddressY: TextureAddress;
	ClearColor: LinearColor;
	MediaPlayer: MediaPlayer;
	VideoTrackIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTexture;
	static Find(Outer: UObject, ResourceName: string): MediaTexture;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	static C(Other: UObject): MediaTexture;
}

declare type EMediaPlayerTrack = 'Audio' | 'Binary' | 'Caption' | 'Script' | 'Subtitle' | 'Text' | 'Video';
declare var EMediaPlayerTrack : { Audio:'Audio',Binary:'Binary',Caption:'Caption',Script:'Script',Subtitle:'Subtitle',Text:'Text',Video:'Video', };
declare class MediaPlayerOverlay { 
	HasPosition: boolean;
	Position: Vector2D;
	Text: string;
	clone() : MediaPlayerOverlay;
	static C(Other: UObject): MediaPlayerOverlay;
}

declare class MediaPlayer extends UObject { 
	OnEndReached: UnrealEngineMulticastDelegate<() => void>;
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
	OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
	OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
	DesiredPlayerName: string;
	PlayOnOpen: boolean;
	Shuffle: boolean;
	Loop: boolean;
	Playlist: MediaPlaylist;
	PlaylistIndex: number;
	SoundWave: MediaSoundWave;
	VideoTexture: MediaTexture;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayer;
	static Find(Outer: UObject, ResourceName: string): MediaPlayer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaPlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	SupportsSeeking(): boolean;
	SupportsScrubbing(): boolean;
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	SetVideoTexture(NewTexture: MediaTexture): void;
	SetSoundWave(NewSoundWave: MediaSoundWave): void;
	SetRate(Rate: number): boolean;
	SetLooping(InLooping: boolean): boolean;
	SelectTrack(TrackType: EMediaPlayerTrack,TrackIndex: number): boolean;
	Seek(InTime: Timespan): boolean;
	Rewind(): boolean;
	Reopen(): boolean;
	Previous(): boolean;
	Play(): boolean;
	Pause(): boolean;
	OpenUrl(Url: string): boolean;
	OpenSource(MediaSource: MediaSource): boolean;
	OpenPlaylistIndex(InPlaylist: MediaPlaylist,Index: number): boolean;
	OpenPlaylist(InPlaylist: MediaPlaylist): boolean;
	OpenFile(FilePath: string): boolean;
	Next(): boolean;
	IsReady(): boolean;
	IsPreparing(): boolean;
	IsPlaying(): boolean;
	IsPaused(): boolean;
	IsLooping(): boolean;
	GetUrl(): string;
	GetTrackLanguage(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTrackDisplayName(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTime(): Timespan;
	GetTexts(OutTexts?: MediaPlayerOverlay[]): {OutTexts: MediaPlayerOverlay[]};
	GetSubtitles(OutSubtitles?: MediaPlayerOverlay[]): {OutSubtitles: MediaPlayerOverlay[]};
	GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
	GetReverseRates(Unthinned: boolean): FloatRange;
	GetRate(): number;
	GetPlayerName(): string;
	GetNumTracks(TrackType: EMediaPlayerTrack): number;
	GetForwardRates(Unthinned: boolean): FloatRange;
	GetDuration(): Timespan;
	GetCaptions(OutCaptions?: MediaPlayerOverlay[]): {OutCaptions: MediaPlayerOverlay[]};
	Close(): void;
	CanPlayUrl(Url: string): boolean;
	CanPause(): boolean;
	static C(Other: UObject): MediaPlayer;
}

declare class FileMediaSource extends MediaSource { 
	FilePath: string;
	PrecacheFile: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FileMediaSource;
	static Find(Outer: UObject, ResourceName: string): FileMediaSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FileMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSource;
	SetFilePath(Path: string): void;
	static C(Other: UObject): FileMediaSource;
}

declare class PlatformMediaSource extends MediaSource { 
	PlatformMediaSources: any;
	MediaSource: MediaSource;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformMediaSource;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PlatformMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSource;
	static C(Other: UObject): PlatformMediaSource;
}

declare class StreamMediaSource extends MediaSource { 
	StreamUrl: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): StreamMediaSource;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSource;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): StreamMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSource;
	static C(Other: UObject): StreamMediaSource;
}

declare class MediaSubtitle { 
	clone() : MediaSubtitle;
	static C(Other: UObject): MediaSubtitle;
}

declare class MediaSubtitles extends UObject { 
	Subtitles: MediaSubtitle[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSubtitles;
	static Find(Outer: UObject, ResourceName: string): MediaSubtitles;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MediaSubtitles;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSubtitles;
	static C(Other: UObject): MediaSubtitles;
}

declare class WmfMediaSettings extends UObject { 
	AllowNonStandardCodecs: boolean;
	NativeAudioOut: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WmfMediaSettings;
	static Find(Outer: UObject, ResourceName: string): WmfMediaSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): WmfMediaSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WmfMediaSettings;
	static C(Other: UObject): WmfMediaSettings;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject): MaterialExpressionSpriteTextureSampler;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
	clone() : PaperSpriteSocket;
	static C(Other: UObject): PaperSpriteSocket;
}

declare type ESpriteCollisionMode = 'None' | 'Use2DPhysics' | 'Use3DPhysics';
declare var ESpriteCollisionMode : { None:'None',Use2DPhysics:'Use2DPhysics',Use3DPhysics:'Use3DPhysics', };
declare type ESpritePivotMode = 'Top_Left' | 'Top_Center' | 'Top_Right' | 'Center_Left' | 'Center_Center' | 'Center_Right' | 'Bottom_Left' | 'Bottom_Center' | 'Bottom_Right' | 'Custom';
declare var ESpritePivotMode : { Top_Left:'Top_Left',Top_Center:'Top_Center',Top_Right:'Top_Right',Center_Left:'Center_Left',Center_Center:'Center_Center',Center_Right:'Center_Right',Bottom_Left:'Bottom_Left',Bottom_Center:'Bottom_Center',Bottom_Right:'Bottom_Right',Custom:'Custom', };
declare type ESpriteShapeType = 'Box' | 'Circle' | 'Polygon';
declare var ESpriteShapeType : { Box:'Box',Circle:'Circle',Polygon:'Polygon', };
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
	clone() : SpriteGeometryShape;
	static C(Other: UObject): SpriteGeometryShape;
}

declare type ESpritePolygonMode = 'SourceBoundingBox' | 'TightBoundingBox' | 'ShrinkWrapped' | 'FullyCustom' | 'Diced';
declare var ESpritePolygonMode : { SourceBoundingBox:'SourceBoundingBox',TightBoundingBox:'TightBoundingBox',ShrinkWrapped:'ShrinkWrapped',FullyCustom:'FullyCustom',Diced:'Diced', };
declare class SpriteGeometryCollection { 
	Shapes: SpriteGeometryShape[];
	GeometryType: ESpritePolygonMode;
	PixelsPerSubdivisionX: number;
	PixelsPerSubdivisionY: number;
	bAvoidVertexMerging: boolean;
	AlphaThreshold: number;
	DetailAmount: number;
	SimplifyEpsilon: number;
	clone() : SpriteGeometryCollection;
	static C(Other: UObject): SpriteGeometryCollection;
}

declare type EPaperSpriteAtlasPadding = 'DilateBorder' | 'PadWithZero';
declare var EPaperSpriteAtlasPadding : { DilateBorder:'DilateBorder',PadWithZero:'PadWithZero', };
declare class PaperSpriteAtlasSlot { 
	SpriteRef: any;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
	clone() : PaperSpriteAtlasSlot;
	static C(Other: UObject): PaperSpriteAtlasSlot;
}

declare class PaperSpriteAtlas extends UObject { 
	AtlasDescription: string;
	MaxWidth: number;
	MaxHeight: number;
	MipCount: number;
	PaddingType: EPaperSpriteAtlasPadding;
	Padding: number;
	CompressionSettings: TextureCompressionSettings;
	Filter: TextureFilter;
	GeneratedTextures: Texture[];
	AtlasGUID: Guid;
	bRebuildAtlas: boolean;
	AtlasSlots: PaperSpriteAtlasSlot[];
	NumIncrementalBuilds: number;
	BuiltWidth: number;
	BuiltHeight: number;
	BuiltPadding: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlas;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteAtlas;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject): PaperSpriteAtlas;
}

declare class PaperSprite extends UObject { 
	OriginInSourceImageBeforeTrimming: Vector2D;
	SourceImageDimensionBeforeTrimming: Vector2D;
	bTrimmedInSourceImage: boolean;
	bRotatedInSourceImage: boolean;
	SourceTextureDimension: Vector2D;
	SourceUV: Vector2D;
	SourceDimension: Vector2D;
	SourceTexture: Texture2D;
	AdditionalSourceTextures: Texture[];
	BakedSourceUV: Vector2D;
	BakedSourceDimension: Vector2D;
	BakedSourceTexture: Texture2D;
	DefaultMaterial: MaterialInterface;
	AlternateMaterial: MaterialInterface;
	Sockets: PaperSpriteSocket[];
	SpriteCollisionDomain: ESpriteCollisionMode;
	PixelsPerUnrealUnit: number;
	BodySetup: BodySetup;
	PivotMode: ESpritePivotMode;
	CustomPivotPoint: Vector2D;
	bSnapPivotToPixelGrid: boolean;
	CollisionGeometry: SpriteGeometryCollection;
	CollisionThickness: number;
	RenderGeometry: SpriteGeometryCollection;
	AtlasGroup: PaperSpriteAtlas;
	AlternateMaterialSplitIndex: number;
	BakedRenderData: Vector4[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSprite;
	static Find(Outer: UObject, ResourceName: string): PaperSprite;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSprite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject): PaperSprite;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
	clone() : PaperFlipbookKeyFrame;
	static C(Other: UObject): PaperFlipbookKeyFrame;
}

declare type EFlipbookCollisionMode = 'NoCollision' | 'FirstFrameCollision' | 'EachFrameCollision';
declare var EFlipbookCollisionMode : { NoCollision:'NoCollision',FirstFrameCollision:'FirstFrameCollision',EachFrameCollision:'EachFrameCollision', };
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbook;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbook;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	IsValidKeyFrameIndex(Index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
	static C(Other: UObject): PaperFlipbook;
}

declare class PaperFlipbookComponent extends MeshComponent { 
	SourceFlipbook: PaperFlipbook;
	Material: MaterialInterface;
	PlayRate: number;
	bLooping: boolean;
	bReversePlayback: boolean;
	bPlaying: boolean;
	AccumulatedTime: number;
	CachedFrameIndex: number;
	SpriteColor: LinearColor;
	CachedBodySetup: BodySetup;
	OnFinishedPlaying: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookComponent;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbookComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookComponent;
	Stop(): void;
	SetSpriteColor(NewColor: LinearColor): void;
	SetPlayRate(NewRate: number): void;
	SetPlaybackPositionInFrames(NewFramePosition: number,bFireEvents: boolean): void;
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean): void;
	SetNewTime(NewTime: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetFlipbook(NewFlipbook: PaperFlipbook): boolean;
	ReverseFromEnd(): void;
	Reverse(): void;
	PlayFromStart(): void;
	Play(): void;
	OnRep_SourceFlipbook(OldFlipbook: PaperFlipbook): void;
	IsReversing(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetSpriteMaterial(): MaterialInterface;
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
	static C(Other: UObject): PaperFlipbookComponent;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	RenderComponent: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbookActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
	clone() : SpriteInstanceData;
	static C(Other: UObject): SpriteInstanceData;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperGroupedSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean,bTeleport: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
	static C(Other: UObject): PaperGroupedSpriteComponent;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	bEnableSpriteAtlasGroups: boolean;
	bEnableTerrainSplineEditing: boolean;
	bResizeSpriteDataToMatchTextures: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	SourceSprite: PaperSprite;
	MaterialOverride: MaterialInterface;
	SpriteColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
	static C(Other: UObject): PaperSpriteComponent;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject): PaperSpriteActor;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainSplineComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject): PaperTerrainSplineComponent;
}

declare class PaperTerrainMaterialRule { 
	StartCap: PaperSprite;
	Body: PaperSprite[];
	EndCap: PaperSprite;
	MinimumAngle: number;
	MaximumAngle: number;
	bEnableCollision: boolean;
	CollisionOffset: number;
	DrawOrder: number;
	Description: string;
	clone() : PaperTerrainMaterialRule;
	static C(Other: UObject): PaperTerrainMaterialRule;
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainMaterial;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTerrainMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject): PaperTerrainMaterial;
}

declare class PaperTerrainComponent extends PrimitiveComponent { 
	TerrainMaterial: PaperTerrainMaterial;
	bClosedSpline: boolean;
	bFilledSpline: boolean;
	AssociatedSpline: PaperTerrainSplineComponent;
	RandomSeed: number;
	SegmentOverlapAmount: number;
	TerrainColor: LinearColor;
	ReparamStepsPerSegment: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	CollisionThickness: number;
	CachedBodySetup: BodySetup;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTerrainComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
	static C(Other: UObject): PaperTerrainComponent;
}

declare class PaperTerrainActor extends Actor { 
	DummyRoot: SceneComponent;
	SplineComponent: PaperTerrainSplineComponent;
	RenderComponent: PaperTerrainComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTerrainActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
	clone() : IntMargin;
	static C(Other: UObject): IntMargin;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
	clone() : PaperTileMetadata;
	static C(Other: UObject): PaperTileMetadata;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
	clone() : PaperTileSetTerrain;
	static C(Other: UObject): PaperTileSetTerrain;
}

declare class PaperTileSet extends UObject { 
	TileSize: IntPoint;
	TileSheet: Texture2D;
	BorderMargin: IntMargin;
	PerTileSpacing: IntPoint;
	DrawingOffset: IntPoint;
	BackgroundColor: LinearColor;
	WidthInTiles: number;
	HeightInTiles: number;
	AllocatedWidth: number;
	AllocatedHeight: number;
	PerTileData: PaperTileMetadata[];
	Terrains: PaperTileSetTerrain[];
	TileWidth: number;
	TileHeight: number;
	Margin: number;
	Spacing: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSet;
	static Find(Outer: UObject, ResourceName: string): PaperTileSet;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
	clone() : PaperTileInfo;
	static C(Other: UObject): PaperTileInfo;
	BreakTile(TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	GetTileTransform(): Transform;
	GetTileUserData(): string;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
}

declare class PaperTileLayer extends UObject { 
	LayerName: string;
	LayerWidth: number;
	LayerHeight: number;
	bHiddenInEditor: boolean;
	bHiddenInGame: boolean;
	bLayerCollides: boolean;
	bOverrideCollisionThickness: boolean;
	bOverrideCollisionOffset: boolean;
	CollisionThicknessOverride: number;
	CollisionOffsetOverride: number;
	LayerColor: LinearColor;
	AllocatedWidth: number;
	AllocatedHeight: number;
	AllocatedCells: PaperTileInfo[];
	TileSet: PaperTileSet;
	AllocatedGrid: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileLayer;
	static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileLayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject): PaperTileLayer;
}

declare type ETileMapProjectionMode = 'Orthogonal' | 'IsometricDiamond' | 'IsometricStaggered' | 'HexagonalStaggered';
declare var ETileMapProjectionMode : { Orthogonal:'Orthogonal',IsometricDiamond:'IsometricDiamond',IsometricStaggered:'IsometricStaggered',HexagonalStaggered:'HexagonalStaggered', };
declare class PaperTileMap extends UObject { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	PixelsPerUnrealUnit: number;
	SeparationPerTileX: number;
	SeparationPerTileY: number;
	SeparationPerLayer: number;
	SelectedTileSet: any;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	CollisionThickness: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	ProjectionMode: ETileMapProjectionMode;
	HexSideLength: number;
	BodySetup: BodySetup;
	AssetImportData: AssetImportData;
	SelectedLayerIndex: number;
	BackgroundColor: LinearColor;
	LayerNameIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMap;
	static Find(Outer: UObject, ResourceName: string): PaperTileMap;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileMap;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject): PaperTileMap;
}

declare class PaperTileMapComponent extends MeshComponent { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	DefaultLayerTileSet: PaperTileSet;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	TileMapColor: LinearColor;
	UseSingleLayerIndex: number;
	bUseSingleLayer: boolean;
	TileMap: PaperTileMap;
	bShowPerTileGridWhenSelected: boolean;
	bShowPerLayerGridWhenSelected: boolean;
	bShowOutlineWhenUnselected: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileMapComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapComponent;
	SetTileMapColor(NewColor: LinearColor): void;
	SetTileMap(NewTileMap: PaperTileMap): boolean;
	SetTile(X: number,Y: number,Layer: number,NewValue: PaperTileInfo): void;
	SetLayerColor(NewColor: LinearColor,Layer: number): void;
	SetLayerCollision(Layer: number,bHasCollision: boolean,bOverrideThickness: boolean,CustomThickness: number,bOverrideOffset: boolean,CustomOffset: number,bRebuildCollision: boolean): void;
	SetDefaultCollisionThickness(Thickness: number,bRebuildCollision: boolean): void;
	ResizeMap(NewWidthInTiles: number,NewHeightInTiles: number): void;
	RebuildCollision(): void;
	OwnsTileMap(): boolean;
	MakeTileMapEditable(): void;
	GetTilePolygon(TileX: number,TileY: number,Points?: Vector[],LayerIndex?: number,bWorldSpace?: boolean): {Points: Vector[]};
	GetTileMapColor(): LinearColor;
	GetTileCornerPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTileCenterPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTile(X: number,Y: number,Layer: number): PaperTileInfo;
	GetMapSize(MapWidth?: number,MapHeight?: number,NumLayers?: number): {MapWidth: number, MapHeight: number, NumLayers: number};
	GetLayerColor(Layer: number): LinearColor;
	CreateNewTileMap(MapWidth: number,MapHeight: number,TileWidth: number,TileHeight: number,PixelsPerUnrealUnit: number,bCreateLayer: boolean): void;
	AddNewLayer(): PaperTileLayer;
	static C(Other: UObject): PaperTileMapComponent;
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileMapActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static C(Other: UObject): TileMapBlueprintLibrary;
}

declare class LightPropagationVolumeSettings { 
	bOverride_LPVIntensity: boolean;
	bOverride_LPVDirectionalOcclusionIntensity: boolean;
	bOverride_LPVDirectionalOcclusionRadius: boolean;
	bOverride_LPVDiffuseOcclusionExponent: boolean;
	bOverride_LPVSpecularOcclusionExponent: boolean;
	bOverride_LPVDiffuseOcclusionIntensity: boolean;
	bOverride_LPVSpecularOcclusionIntensity: boolean;
	bOverride_LPVSize: boolean;
	bOverride_LPVSecondaryOcclusionIntensity: boolean;
	bOverride_LPVSecondaryBounceIntensity: boolean;
	bOverride_LPVGeometryVolumeBias: boolean;
	bOverride_LPVVplInjectionBias: boolean;
	bOverride_LPVEmissiveInjectionIntensity: boolean;
	LPVIntensity: number;
	LPVVplInjectionBias: number;
	LPVSize: number;
	LPVSecondaryOcclusionIntensity: number;
	LPVSecondaryBounceIntensity: number;
	LPVGeometryVolumeBias: number;
	LPVEmissiveInjectionIntensity: number;
	LPVDirectionalOcclusionIntensity: number;
	LPVDirectionalOcclusionRadius: number;
	LPVDiffuseOcclusionExponent: number;
	LPVSpecularOcclusionExponent: number;
	LPVDiffuseOcclusionIntensity: number;
	LPVSpecularOcclusionIntensity: number;
	clone() : LightPropagationVolumeSettings;
	static C(Other: UObject): LightPropagationVolumeSettings;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendable;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject): LightPropagationVolumeBlendable;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DirectoryWatcher;
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): DirectoryWatcher;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptContext;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ResetAsDebugContext(): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	Expose(Name: string,UObject: UObject): void;
	DestroyInspector(): void;
	CreateInspector(Port: number): void;
	static C(Other: UObject): JavascriptContext;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: StringAssetReference;
	clone() : JavascriptAsset;
	static C(Other: UObject): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject): JavascriptClassAsset;
}

declare class JavascriptComponent extends ActorComponent { 
	ScriptSourceFile: string;
	bActiveWithinEditor: boolean;
	JavascriptContext: JavascriptContext;
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	OnEndPlay: UnrealEngineDelegate<() => void>;
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	Assets: JavascriptAsset[];
	ClassAssets: JavascriptClassAsset[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComponent;
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptDelegate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(MapName: string): void;
	PreGarbageCollect(): void;
	PostLoadMap(): void;
	PostGarbageCollect(): void;
	PostDemoPlay(): void;
	PostApplyLevelOffset(Level: Level,World: World,Offset: Vector,Flag: boolean): void;
	PackageCreatedForLoad(InPackage: Package): void;
	OnWorldCleanup(World: World,bSessionEnded: boolean,bCleanupResources: boolean): void;
	OnPreWorldInitialization_Friendly(World: World): void;
	OnPreWorldFinishDestroy(World: World): void;
	OnPreObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property): void;
	OnPostWorldInitialization_Friendly(World: World): void;
	OnPostWorldCreation(World: World): void;
	OnPostDuplicate_Friendly(World: World,bDuplicateForPIE: boolean): void;
	OnObjectSaved(UObject: UObject): void;
	OnObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property,ChangeType: number): void;
	OnObjectModified(UObject: UObject): void;
	OnAssetLoaded(UObject: UObject): void;
	LevelRemovedFromWorld(Level: Level,World: World): void;
	LevelAddedToWorld(Level: Level,World: World): void;
	Bind(Key: string): void;
	static C(Other: UObject): JavascriptGlobalDelegates;
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
	static C(Other: UObject): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptIsolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject): JavascriptIsolate;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfileNode;
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

declare class JavascriptProfile extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): void;
	static SetSamplingInterval(us: number): void;
	static SetIdle(is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfile;
}

declare class JavascriptFunction { 
	clone() : JavascriptFunction;
	static C(Other: UObject): JavascriptFunction;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: StringAssetReference): boolean;
	RequestAsyncLoad(TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: StringAssetReference,Priority: number): void;
	Unload(Target: StringAssetReference): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare type EJavascriptStatDataType = 'Invalid' | 'ST_None' | 'ST_int64' | 'ST_double' | 'ST_FName' | 'ST_Ptr';
declare var EJavascriptStatDataType : { Invalid:'Invalid',ST_None:'ST_None',ST_int64:'ST_int64',ST_double:'ST_double',ST_FName:'ST_FName',ST_Ptr:'ST_Ptr', };
declare type EJavascriptStatOperation = 'Invalid' | 'SetLongName' | 'AdvanceFrameEventGameThread' | 'AdvanceFrameEventRenderThread' | 'CycleScopeStart' | 'CycleScopeEnd' | 'SpecialMessageMarker' | 'Set' | 'Clear' | 'Add' | 'Subtract' | 'ChildrenStart' | 'ChildrenEnd' | 'Leaf' | 'MaxVal' | 'Memory';
declare var EJavascriptStatOperation : { Invalid:'Invalid',SetLongName:'SetLongName',AdvanceFrameEventGameThread:'AdvanceFrameEventGameThread',AdvanceFrameEventRenderThread:'AdvanceFrameEventRenderThread',CycleScopeStart:'CycleScopeStart',CycleScopeEnd:'CycleScopeEnd',SpecialMessageMarker:'SpecialMessageMarker',Set:'Set',Clear:'Clear',Add:'Add',Subtract:'Subtract',ChildrenStart:'ChildrenStart',ChildrenEnd:'ChildrenEnd',Leaf:'Leaf',MaxVal:'MaxVal',Memory:'Memory', };
declare class JavascriptStat { 
	clone() : JavascriptStat;
	static C(Other: UObject): JavascriptStat;
	AddMessage(InStatOperation: EJavascriptStatOperation): void;
	AddMessage_float(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	AddMessage_int(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean): JavascriptStat;
}

declare type ELogVerbosity_JS = 'NoLogging' | 'Fatal' | 'Error' | 'Warning' | 'Display' | 'Log' | 'Verbose' | 'VeryVerbose';
declare var ELogVerbosity_JS : { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject): JavascriptLogCategory;
	Log(Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static TryLoadByPath(Path: string): UObject;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean): JavascriptStat;
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static LoadPackage(InOuter: Package,PackageName: string): Package;
	IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameMode,C?: Controller): {C: Controller};
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
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetClassPathName(Class: UnrealEngineClass): string;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GenerateNavigation(world: World,NavData: RecastNavMesh): void;
	static FindPackage(InOuter: UObject,PackageName: string): Package;
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[]): Enum;
	static ClipboardPaste(): string;
	static ClipboardCopy(String: string): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptMemoryObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject): JavascriptMemoryObject;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject): JavascriptSharedMemoryRegion;
}

declare class JavascriptObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptOutputDevice;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptProcess;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
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
	static GetApplicationName(ProcessId: number): string;
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
	static CanLaunchURL(URL: string): boolean;
	static C(Other: UObject): JavascriptProcess;
}

declare class JavascriptSemaphore extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptSemaphore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject): JavascriptSettings;
}

declare class JavascriptAutomatedTestInstance { 
	clone() : JavascriptAutomatedTestInstance;
	static C(Other: UObject): JavascriptAutomatedTestInstance;
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
	static C(Other: UObject): JavascriptAutomatedTest;
	Create(): JavascriptAutomatedTestInstance;
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}

declare class JavascriptTestLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTestLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptTestLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTestLibrary;
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
	static PushFrameCounter(): void;
	static PopFrameCounter(): void;
	static NewWorld(): World;
	static InitializeActorsForPlay(World: World,URL: URL): void;
	static DestroyWorld(World: World): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static BeginPlay(World: World): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static C(Other: UObject): JavascriptTestLibrary;
}

declare class InGameSceneAccessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameSceneAccessor;
	static Find(Outer: UObject, ResourceName: string): InGameSceneAccessor;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InGameSceneAccessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameSceneAccessor;
	Tick(DeltaTime: number): void;
	isBegunPlay(): boolean;
	Initialize(): InGameSceneAccessor;
	GetSceneWorld(): World;
	Destroy(): void;
	static C(Other: UObject): InGameSceneAccessor;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject): JavascriptSlateStyle;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static ComputeDesiredSize(Widget: Widget,LayoutScaleMultiplier: number): Vector2D;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject): JavascriptUMGLibrary;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptComboButton;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject): JavascriptComboButton;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGameViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject): JavascriptGameViewport;
}

declare type EJavasrciptUserInterfaceActionType = 'Button' | 'ToggleButton' | 'RadioButton' | 'Check';
declare var EJavasrciptUserInterfaceActionType : { Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check', };
declare class JavascriptUICommand { 
	Id: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	clone() : JavascriptUICommand;
	static C(Other: UObject): JavascriptUICommand;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First', };
declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject): JavascriptUICommandList;
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
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject): JavascriptMenuBuilder;
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject): JavascriptExtender;
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

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
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
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static C(Other: UObject): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(Id: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptMultiBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject): JavascriptMultiBox;
}

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptTextModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(String: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject): JavascriptTextLayout;
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
	bIsReadOnly: boolean;
	bAlwaysShowScrollbars: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	OnTextChanged: UnrealEngineMulticastDelegate<(Text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(Text: string, CommitMethod: ETextCommit) => void>;
	Text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptSearchBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	static C(Other: UObject): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject): JavascriptStyleSet;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStyleSetLibrary;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
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
	static C(Other: UObject): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptTextBlock;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptTileView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject): JavascriptTileView;
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
	static C(Other: UObject): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject): HeaderRowStyle;
}

declare class JavascriptColumn { 
	Id: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject): JavascriptColumn;
}

declare class JavascriptTreeView extends TableViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, Id: string, Instance: JavascriptTreeView) => Widget>;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptTreeView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptListView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	SetSelection(SoleSelectedItem: UObject): void;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptListView;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(Id: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(Id: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptUICommands;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(Id: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject): JavascriptUICommands;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnDestroy: UnrealEngineMulticastDelegate<(bReleaseChildren: boolean) => void>;
	ContentSlot: PanelSlot;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputActionByName(ActionName: string): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject): JavascriptWidget;
}

declare type EJavascriptWindowType = 'Normal' | 'Menu' | 'ToolTip' | 'Notification' | 'CursorDecorator';
declare var EJavascriptWindowType : { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject): WindowStyle;
}

declare type EJavascriptAutoCenter = 'None' | 'PrimaryWorkArea' | 'PreferredWorkArea';
declare var EJavascriptAutoCenter : { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea', };
declare type EJavascriptWindowTransparency = 'None' | 'PerWindow';
declare var EJavascriptWindowTransparency : { None:'None',PerWindow:'PerWindow', };
declare type EJavascriptSizingRule = 'FixedSize' | 'Autosized' | 'UserSized';
declare var EJavascriptSizingRule : { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized', };
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): JavascriptWindow;
}

declare type EJavascriptHttpRequestStatus = 'NotStarted' | 'Processing' | 'Failed' | 'Succeeded';
declare var EJavascriptHttpRequestStatus : { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptHttpRequest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
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
	static C(Other: UObject): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptWebSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	Tick(): void;
	SendMemory(NumBytes: number): void;
	RemoteEndPoint(): string;
	LocalEndPoint(): string;
	GetReceivedBytes(): number;
	Flush(): void;
	Dispose(): void;
	CopyBuffer(): void;
	static Connect(Endpoint: string): JavascriptWebSocket;
	static C(Other: UObject): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject): JavascriptWebSocketServer;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TcpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject): TcpMessagingSettings;
}

declare class UdpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	UnicastEndpoint: string;
	MulticastEndpoint: string;
	MulticastTimeToLive: number;
	StaticEndpoints: string[];
	EnableTunnel: boolean;
	TunnelUnicastEndpoint: string;
	TunnelMulticastEndpoint: string;
	RemoteTunnelEndpoints: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): UdpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject): UdpMessagingSettings;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): FlipbookEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = 'Auto' | 'Grid';
declare var ESpriteExtractMode : { Auto:'Auto',Grid:'Grid', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject): PaperExtractSpritesSettings;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbookFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject): PaperFlipbookFactory;
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
	UnlitDefaultMaskedMaterialName: StringAssetReference;
	UnlitDefaultTranslucentMaterialName: StringAssetReference;
	UnlitDefaultOpaqueMaterialName: StringAssetReference;
	LitDefaultMaskedMaterialName: StringAssetReference;
	LitDefaultTranslucentMaterialName: StringAssetReference;
	LitDefaultOpaqueMaterialName: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperImporterSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject): PaperSpriteFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject): PaperFlipbookThumbnailRenderer;
}

declare class PaperTileMapFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileMapFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileSetFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SpriteEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileMapActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileMapAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileMapEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileSetEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject): TileSheetPaddingFactory;
}

declare class InternationalizationExportSettings extends UObject { 
	CulturesToGenerate: string[];
	CommandletClass: string;
	SourcePath: string;
	DestinationPath: string;
	PortableObjectName: string;
	ManifestName: string;
	ArchiveName: string;
	bExportLoc: boolean;
	bImportLoc: boolean;
	bUseCultureDirectory: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationExportSettings;
	static Find(Outer: UObject, ResourceName: string): InternationalizationExportSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): InternationalizationExportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationPickerSettings;
	static Find(Outer: UObject, ResourceName: string): TranslationPickerSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TranslationPickerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
	clone() : TranslationChange;
	static C(Other: UObject): TranslationChange;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
	clone() : TranslationContextInfo;
	static C(Other: UObject): TranslationContextInfo;
}

declare class TranslationUnit extends UObject { 
	Namespace: string;
	Key: string;
	Source: string;
	Translation: string;
	Contexts: TranslationContextInfo[];
	HasBeenReviewed: boolean;
	TranslationBeforeImport: string;
	LocresPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationUnit;
	static Find(Outer: UObject, ResourceName: string): TranslationUnit;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TranslationUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject): TranslationUnit;
}

declare class PixelInspectorView extends UObject { 
	FinalColor: LinearColor;
	SceneColor: LinearColor;
	Luminance: number;
	HdrColor: LinearColor;
	Normal: Vector;
	PerObjectGBufferData: number;
	Metallic: number;
	Specular: number;
	Roughness: number;
	MaterialShadingModel: EMaterialShadingModel;
	SelectiveOutputMask: number;
	BaseColor: LinearColor;
	IndirectIrradiance: number;
	AmbientOcclusion: number;
	SubSurfaceColor: LinearColor;
	SubsurfaceProfile: Vector;
	Opacity: number;
	ClearCoat: number;
	ClearCoatRoughness: number;
	WorldNormal: Vector;
	BackLit: number;
	Cloth: number;
	EyeTangent: Vector;
	IrisMask: number;
	IrisDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PixelInspectorView;
	static Find(Outer: UObject, ResourceName: string): PixelInspectorView;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PixelInspectorView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PixelInspectorView;
	static C(Other: UObject): PixelInspectorView;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: any[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteSheet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): MyPluginObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject): MyPluginObject;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PluginMetadataObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject): ReimportSpeedTreeFactory;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	Text: string;
	clone() : TutorialContent;
	static C(Other: UObject): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: StringAssetReference;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GUIDString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject): TutorialContentAnchor;
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
	static C(Other: UObject): TutorialWidgetContent;
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
	static C(Other: UObject): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: StringClassReference;
	NextTutorial: StringClassReference;
	bIsStandalone: boolean;
	AssetToUse: StringAssetReference;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EditorTutorial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EditorTutorialFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: StringAssetReference;
	clone() : TutorialCategory;
	static C(Other: UObject): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: StringClassReference;
	LaunchTutorial: StringClassReference;
	clone() : TutorialContext;
	static C(Other: UObject): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	TutorialContexts: TutorialContext[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): EditorTutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: StringClassReference;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TutorialStateSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject): TutorialStateSettings;
}

declare type ESearchEngine = 'Google' | 'Bing';
declare var ESearchEngine : { Google:'Google',Bing:'Bing', };
declare class SuperSearchSettings extends DeveloperSettings { 
	SearchEngine: ESearchEngine;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SuperSearchSettings;
	static Find(Outer: UObject, ResourceName: string): SuperSearchSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): SuperSearchSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SuperSearchSettings;
	static C(Other: UObject): SuperSearchSettings;
}

declare class GeometryCacheTrack extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheTrack;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCache;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	Stop(): void;
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
	GetPlaybackSpeed(): number;
	static C(Other: UObject): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject): GeometryCacheActor;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject): GeometryCacheTrack_TransformGroupAnimation;
}

declare class AbcAssetImportData extends AssetImportData { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AbcAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal', };
declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: any;
	TimeSteps: number;
	FrameStart: any;
	FrameEnd: any;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject): AbcNormalGenerationSettings;
}

declare type EBaseCalculationType = 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject): AbcCompressionSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject): AbcMaterialSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject): AbcStaticMeshSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject): AbcConversionSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	CompressionSettings: AbcCompressionSettings;
	MaterialSettings: AbcMaterialSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	ConversionSettings: AbcConversionSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AbcImportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AlembicTestCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): AlembicImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject): GeometryCacheThumbnailRenderer;
}

declare class WebSocketConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): WebSocketConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): WebSocketNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject): WebSocketNetDriver;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	GroupNames: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject): JavascriptAssetData;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
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
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject): JavascriptEditorGlobalDelegates;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject): JavascriptInputEventState;
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

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): JavascriptInputEventStateLibrary;
}

declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
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
	static C(Other: UObject): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject): JavascriptViewportClick;
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
	static C(Other: UObject): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,FileName: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
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
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static C(Other: UObject): JavascriptEditorLibrary;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorTab;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptUIExtender;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,Id: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,Id: string): void;
	static C(Other: UObject): JavascriptUIExtender;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetTypeActions;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject): JavascriptCommandlet;
}

declare class JavascriptEdGraphNode extends EdGraphNode { 
	ClassData: GraphNodeClassData;
	NodeInstance: UObject;
	SubNodes: JavascriptEdGraphNode[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdGraphNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdGraphNode;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEdGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdGraphNode;
	static C(Other: UObject): JavascriptEdGraphNode;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject): JavascriptEditorEngineLibrary;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject): JavascriptEditorInputProcessor;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorTick;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	static C(Other: UObject): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject): JavascriptEditorToolbar;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None' | 'None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None',None:'None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(x: number, y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(x: number, y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEditorViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	GetViewportWorld(): World;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
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
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject): JavascriptEdModeLibrary;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt', };
declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject): JavascriptSlateIcon;
}

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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptEdMode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptEdMode;
}

declare class JavascriptGraphAction { 
	Name: string;
	Category: string;
	Resource: UObject;
	clone() : JavascriptGraphAction;
	static C(Other: UObject): JavascriptGraphAction;
}

declare class JavascriptGraphEditor extends Widget { 
	TitleName: string;
	Graph: EdGraph;
	GraphEditorCommands: JavascriptUICommandList;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGraphEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditor;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGraphEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditor;
	AddActionContext(Action: JavascriptGraphAction): void;
	static C(Other: UObject): JavascriptGraphEditor;
}

declare class JavascriptGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphSchema;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphSchema;
	static C(Other: UObject): JavascriptGraphSchema;
}

declare class JavascriptNotification extends UObject { 
	Text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: ECheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptNotification;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject): JavascriptNotification;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject): JavascriptDetailWidgetDecl;
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
	static C(Other: UObject): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(UFunction: JavascriptFunction): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject): JavascriptPropertyTypeCustomizationUtils;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(Id: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptPropertyCustomization;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject): JavascriptRawMeshLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PropertyEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	static C(Other: UObject): PropertyEditor;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare class TRASHCLASS_LevelEditorAttract_2 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TRASHCLASS_LevelEditorAttract_2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorAttract_2;
	static C(Other: UObject): TRASHCLASS_LevelEditorAttract_2;
}

declare class TRASHCLASS_LevelEditorOverview_3 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorOverview_3;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorOverview_3;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TRASHCLASS_LevelEditorOverview_3;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorOverview_3;
	static C(Other: UObject): TRASHCLASS_LevelEditorOverview_3;
}

declare class TRASHCLASS_BlueprintEditorTutorial_4 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_BlueprintEditorTutorial_4;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_BlueprintEditorTutorial_4;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): TRASHCLASS_BlueprintEditorTutorial_4;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_BlueprintEditorTutorial_4;
	static C(Other: UObject): TRASHCLASS_BlueprintEditorTutorial_4;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

