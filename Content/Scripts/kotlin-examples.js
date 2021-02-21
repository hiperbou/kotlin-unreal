(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Random = Kotlin.kotlin.random.Random;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var numberToDouble = Kotlin.numberToDouble;
  var throwCCE = Kotlin.throwCCE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Math_0 = Math;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  HelloBlueprint.prototype = Object.create(KotlinObject.prototype);
  HelloBlueprint.prototype.constructor = HelloBlueprint;
  HelloBlueprints.prototype = Object.create(KotlinObject.prototype);
  HelloBlueprints.prototype.constructor = HelloBlueprints;
  RedRotatingCube.prototype = Object.create(KotlinObject.prototype);
  RedRotatingCube.prototype.constructor = RedRotatingCube;
  WhiteRotatingCube.prototype = Object.create(KotlinObject.prototype);
  WhiteRotatingCube.prototype.constructor = WhiteRotatingCube;
  FirstPerson.prototype = Object.create(KotlinObject.prototype);
  FirstPerson.prototype.constructor = FirstPerson;
  Game.prototype = Object.create(KotlinObject.prototype);
  Game.prototype.constructor = Game;
  KotlinLogo.prototype = Object.create(KotlinObject.prototype);
  KotlinLogo.prototype.constructor = KotlinLogo;
  Pickup.prototype = Object.create(KotlinObject.prototype);
  Pickup.prototype.constructor = Pickup;
  Switch.prototype = Object.create(KotlinObject.prototype);
  Switch.prototype.constructor = Switch;
  HelloKotlin.prototype = Object.create(KotlinObject.prototype);
  HelloKotlin.prototype.constructor = HelloKotlin;
  BaseCylinder.prototype = Object.create(KotlinObject.prototype);
  BaseCylinder.prototype.constructor = BaseCylinder;
  CustomCylinder.prototype = Object.create(BaseCylinder.prototype);
  CustomCylinder.prototype.constructor = CustomCylinder;
  KeyboardInput.prototype = Object.create(KotlinObject.prototype);
  KeyboardInput.prototype.constructor = KeyboardInput;
  SceneLights.prototype = Object.create(KotlinObject.prototype);
  SceneLights.prototype.constructor = SceneLights;
  ThirdPerson.prototype = Object.create(KotlinObject.prototype);
  ThirdPerson.prototype.constructor = ThirdPerson;
  function HelloBlueprint() {
    KotlinObject.call(this);
    this.actor = null;
    this.yaw = 0.0;
    var bp = Blueprint.Load('/Game/ExampleBlueprint');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, this.yaw));
  }
  HelloBlueprint.prototype.Tick = function (deltaTime) {
    this.yaw += 100.0 * deltaTime;
    this.actor.K2_SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
  };
  HelloBlueprint.prototype.BeginOverlap = function (other) {
    return '';
  };
  HelloBlueprint.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  HelloBlueprint.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  HelloBlueprint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprint',
    interfaces: []
  };
  function HelloBlueprints() {
    KotlinObject.call(this);
    this.WIDTH = 400.0;
    this.actorList = ArrayList_init();
    for (var i = 0; i <= 10; i++)
      this.actorList.add_11rb$(this.createActor_u22e3q$(this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(0.0, 360.0)));
  }
  HelloBlueprints.prototype.rnd_lu1900$ = function (min, max) {
    return min + Random.Default.nextDouble() * (max - min);
  };
  HelloBlueprints.prototype.createActor_u22e3q$ = function (x, y, yaw) {
    return GenerateClass(Blueprint.Load('/Game/ExampleBlueprint'), GWorld, Vector_0(x, y), Rotator_0(void 0, void 0, yaw));
  };
  HelloBlueprints.prototype.Tick = function (deltaTime) {
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.K2_AddActorLocalRotation(Rotator_0(void 0, void 0, 1), false);
    }
  };
  HelloBlueprints.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.K2_DestroyActor();
    }
  };
  HelloBlueprints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprints',
    interfaces: []
  };
  function RedRotatingCube() {
    KotlinObject.call(this);
    this.touched = 0;
  }
  RedRotatingCube.prototype.Tick = function (deltaTime) {
    var actor = GetOwner(this);
    if (actor.actorToCopy != null) {
      actor.K2_SetActorRotation(Rotator_0(void 0, void 0, ensureNotNull(actor.actorToCopy).Yaw), false);
    }};
  RedRotatingCube.prototype.BeginOverlap = function (other) {
    this.touched = this.touched + 1 | 0;
    if (this.touched > 30) {
      return 'die';
    }return 'touched ' + this.touched + ' times by ' + other.GetName();
  };
  RedRotatingCube.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  RedRotatingCube.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
  };
  RedRotatingCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RedRotatingCube',
    interfaces: []
  };
  function WhiteRotatingCube() {
    KotlinObject.call(this);
    this.touched = 0;
    this.acumulatedDeltaTime = 0.0;
  }
  WhiteRotatingCube.prototype.Tick = function (deltaTime) {
    this.acumulatedDeltaTime += deltaTime;
    var actor = GetOwner(this);
    actor.Yaw = actor.Yaw + actor.Speed * deltaTime * 4;
    actor.K2_SetActorRotation(Rotator_0(void 0, void 0, actor.Yaw), false);
  };
  WhiteRotatingCube.prototype.BeginOverlap = function (other) {
    this.touched = this.touched + 1 | 0;
    return 'touched ' + this.touched + ' times';
  };
  WhiteRotatingCube.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  WhiteRotatingCube.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
  };
  WhiteRotatingCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WhiteRotatingCube',
    interfaces: []
  };
  function FirstPerson() {
    KotlinObject.call(this);
    this.actor = null;
    this.myCamera = null;
    this.myFPMesh = null;
    this.myFPGunMesh = null;
    this.fireSound = null;
    this.fireAnimation = null;
    this.gunOffset = null;
    this.weaponRange = 0.0;
    this.weaponDamage = 0.0;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyJump = new KeyListener('SpaceBar');
    this.keyFire = new KeyListener('LeftMouseButton');
    var tmp$;
    var bp = Blueprint.Load('/Game/FirstPersonBP');
    this.actor = GenerateClass(bp, GWorld, new Vector(), new Rotator());
    this.actor.CapsuleComponent.CapsuleRadius = 42.0;
    this.actor.CapsuleComponent.CapsuleHalfHeight = 96.0;
    this.myCamera = Kotlin.isType(tmp$ = this.actor.GetComponentByClass(CameraComponent), CameraComponent) ? tmp$ : throwCCE();
    this.myCamera.AttachParent = this.actor.CapsuleComponent;
    this.myCamera.RelativeLocation = Vector_0(0, 0, 64);
    this.myCamera.bUsePawnControlRotation = true;
    this.myFPMesh = GetComponentByName(this.actor, SkeletalMeshComponent, 'Mesh2P');
    this.myFPMesh.bOnlyOwnerSee = true;
    this.myFPMesh.AttachParent = this.myCamera;
    this.myFPMesh.bCastDynamicShadow = false;
    this.myFPMesh.CastShadow = false;
    this.myFPMesh.RelativeLocation = Vector_0(0, -4, -156);
    this.myFPMesh.RelativeRotation = Rotator_0(5, 2, -20);
    this.myFPGunMesh = GetComponentByName(this.actor, SkeletalMeshComponent, 'FP_Gun');
    this.myFPGunMesh.bOnlyOwnerSee = true;
    this.myFPGunMesh.bCastDynamicShadow = false;
    this.myFPGunMesh.CastShadow = false;
    this.myFPGunMesh.AttachParent = this.myFPMesh;
    this.myFPGunMesh.AttachSocketName = 'GripPoint';
    var FP_mesh = SkeletalMesh.Load('/Game/FirstPerson/Character/Mesh/SK_Mannequin_Arms.SK_Mannequin_Arms');
    var FPGun_mesh = SkeletalMesh.Load('/Game/FirstPerson/FPWeapon/Mesh/SK_FPGun.SK_FPGun');
    var ANI_AnimationBP = AnimBlueprint.Load('/Game/FirstPerson/Animations/FirstPerson_animBP.FirstPerson_AnimBP').GeneratedClass;
    this.fireSound = SoundBase.Load('/Game/FirstPerson/Audio/FirstPersonTemplateWeaponFire02.FirstPersonTemplateWeaponFire02');
    this.fireAnimation = AnimMontage.Load('/Game/FirstPerson/Animations/FirstPersonFire_Montage.FirstPersonFire_Montage');
    this.myFPMesh.SetSkeletalMesh(FP_mesh, false);
    this.myFPGunMesh.SetSkeletalMesh(FPGun_mesh, false);
    this.myFPMesh.SetAnimClass(ANI_AnimationBP);
    this.weaponRange = 5000.0;
    this.weaponDamage = 500000.0;
    this.gunOffset = Vector_0(100, 30, 10);
    this.createWall();
    var myPlayerController = GWorld.GetPlayerController(0);
    myPlayerController.Possess(this.actor);
  }
  FirstPerson.prototype.Tick = function (deltaTime) {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }if (this.keyJump.pressed()) {
      this.startJump();
    }if (this.keyJump.released()) {
      this.stopJump();
    }if (this.keyFire.pressed()) {
      this.onFire();
    }this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
  };
  FirstPerson.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  FirstPerson.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  FirstPerson.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  FirstPerson.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  FirstPerson.prototype.startJump = function () {
    this.actor.Jump();
  };
  FirstPerson.prototype.stopJump = function () {
    this.actor.StopJumping();
  };
  FirstPerson.prototype.onFire = function () {
    console.log('shooting projectile');
    GWorld.PlaySoundAtLocation(this.fireSound, this.actor.GetActorLocation(), Rotator_0(0, 0, 0), 1, 1, 0, this.fireSound.AttenuationSettings, this.fireSound.SoundConcurrencySettings, this.actor);
    var tempAnimInstance = this.myFPMesh.GetAnimInstance();
    tempAnimInstance.Montage_Play(this.fireAnimation, 1, 'MontageLength', 0, true);
    var tempCamera = CameraComponent.C(this.myCamera);
    var tempStartTrace = tempCamera.K2_GetComponentLocation();
    var tempForwardDirection = tempCamera.K2_GetComponentRotation().GetForwardVector();
    var tempOffset = tempForwardDirection.Multiply_VectorFloat(this.weaponRange);
    var tempEndTrace = Vector.Add_VectorVector(tempStartTrace, tempOffset);
    var tempHitResult = new HitResult();
    GWorld.LineTraceSingle(tempStartTrace, tempEndTrace, 'TraceTypeQuery2', false, [this.actor], 'ForDuration', tempHitResult, true, LinearColor_0(1, 0, 0), LinearColor_0(1, 0, 0), 3);
    var damageActor = tempHitResult.Actor;
    var damageComponent = tempHitResult.Component;
    if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics('')) {
      var tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage);
      damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, '');
    }};
  FirstPerson.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  FirstPerson.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  FirstPerson.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  FirstPerson.prototype.createWall = function () {
    for (var y = 0; y <= 9; y++) {
      for (var z = 0; z <= 3; z++) {
        this.createCube_atrclb$(Vector_0(450.0, -450.0 + (y * 100 | 0), 70 + (z * 100 | 0) | 0));
      }
    }
  };
  FirstPerson.prototype.createCube_atrclb$ = function (position) {
    var bp = Blueprint.Load('/Game/CubeBP');
    bp.GeneratedClass;
    return GenerateClass(bp, GWorld, position, new Rotator());
  };
  FirstPerson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirstPerson',
    interfaces: []
  };
  function Game() {
    KotlinObject.call(this);
    this.actor = null;
    this.myCamera = null;
    this.myFPMesh = null;
    this.myFPGunMesh = null;
    this.fireSound = null;
    this.fireAnimation = null;
    this.gunOffset = null;
    this.weaponRange = 0.0;
    this.weaponDamage = 0.0;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyJump = new KeyListener('SpaceBar');
    this.keyFire = new KeyListener('LeftMouseButton');
    var tmp$;
    var bp = Blueprint.Load('/Game/FirstPersonBP');
    this.actor = GenerateClass(bp, GWorld, new Vector(), new Rotator());
    this.actor.CapsuleComponent.CapsuleRadius = 42.0;
    this.actor.CapsuleComponent.CapsuleHalfHeight = 96.0;
    this.myCamera = Kotlin.isType(tmp$ = this.actor.GetComponentByClass(CameraComponent), CameraComponent) ? tmp$ : throwCCE();
    this.myCamera.AttachParent = this.actor.CapsuleComponent;
    this.myCamera.RelativeLocation = Vector_0(0, 0, 64);
    this.myCamera.bUsePawnControlRotation = true;
    this.myFPMesh = GetComponentByName(this.actor, SkeletalMeshComponent, 'Mesh2P');
    this.myFPMesh.bOnlyOwnerSee = true;
    this.myFPMesh.AttachParent = this.myCamera;
    this.myFPMesh.bCastDynamicShadow = false;
    this.myFPMesh.CastShadow = false;
    this.myFPMesh.RelativeLocation = Vector_0(0, -4, -156);
    this.myFPMesh.RelativeRotation = Rotator_0(5, 2, -20);
    this.myFPGunMesh = GetComponentByName(this.actor, SkeletalMeshComponent, 'FP_Gun');
    this.myFPGunMesh.bOnlyOwnerSee = true;
    this.myFPGunMesh.bCastDynamicShadow = false;
    this.myFPGunMesh.CastShadow = false;
    this.myFPGunMesh.AttachParent = this.myFPMesh;
    this.myFPGunMesh.AttachSocketName = 'GripPoint';
    var FP_mesh = SkeletalMesh.Load('/Game/FirstPerson/Character/Mesh/SK_Mannequin_Arms.SK_Mannequin_Arms');
    var FPGun_mesh = SkeletalMesh.Load('/Game/FirstPerson/FPWeapon/Mesh/SK_FPGun.SK_FPGun');
    var ANI_AnimationBP = AnimBlueprint.Load('/Game/FirstPerson/Animations/FirstPerson_animBP.FirstPerson_AnimBP').GeneratedClass;
    this.fireSound = SoundBase.Load('/Game/FirstPerson/Audio/FirstPersonTemplateWeaponFire02.FirstPersonTemplateWeaponFire02');
    this.fireAnimation = AnimMontage.Load('/Game/FirstPerson/Animations/FirstPersonFire_Montage.FirstPersonFire_Montage');
    this.myFPMesh.SetSkeletalMesh(FP_mesh, false);
    this.myFPGunMesh.SetSkeletalMesh(FPGun_mesh, false);
    this.myFPMesh.SetAnimClass(ANI_AnimationBP);
    this.weaponRange = 5000.0;
    this.weaponDamage = 500000.0;
    this.gunOffset = Vector_0(100, 30, 10);
    var myPlayerController = GWorld.GetPlayerController(0);
    myPlayerController.Possess(this.actor);
  }
  Game.prototype.Tick = function (deltaTime) {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }if (this.keyJump.pressed()) {
      this.startJump();
    }if (this.keyJump.released()) {
      this.stopJump();
    }if (this.keyFire.pressed()) {
      this.onFire();
    }this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
  };
  Game.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  Game.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  Game.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  Game.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  Game.prototype.startJump = function () {
    this.actor.Jump();
  };
  Game.prototype.stopJump = function () {
    this.actor.StopJumping();
  };
  Game.prototype.onFire = function () {
    console.log('shooting projectile');
    GWorld.PlaySoundAtLocation(this.fireSound, this.actor.GetActorLocation(), Rotator_0(0, 0, 0), 1, 1, 0, this.fireSound.AttenuationSettings, this.fireSound.SoundConcurrencySettings, this.actor);
    var tempAnimInstance = this.myFPMesh.GetAnimInstance();
    tempAnimInstance.Montage_Play(this.fireAnimation, 1, 'MontageLength', 0, true);
    var tempCamera = CameraComponent.C(this.myCamera);
    var tempStartTrace = tempCamera.K2_GetComponentLocation();
    var tempForwardDirection = tempCamera.K2_GetComponentRotation().GetForwardVector();
    var tempOffset = tempForwardDirection.Multiply_VectorFloat(this.weaponRange);
    var tempEndTrace = Vector.Add_VectorVector(tempStartTrace, tempOffset);
    var tempHitResult = new HitResult();
    GWorld.LineTraceSingle(tempStartTrace, tempEndTrace, 'TraceTypeQuery2', false, [this.actor], 'ForDuration', tempHitResult, true, LinearColor_0(1, 0, 0), LinearColor_0(1, 0, 0), 3);
    var damageActor = tempHitResult.Actor;
    var damageComponent = tempHitResult.Component;
    if (damageActor != null && contains(damageActor.GetName(), 'AI')) {
      var aiActor = damageActor;
      if (!ensureNotNull(damageComponent).IsAnySimulatingPhysics()) {
        aiActor.GetController().UnPossess();
        damageComponent.SetSimulatePhysics(true);
      }}if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics('')) {
      var tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage);
      damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, '');
    }};
  Game.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  Game.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  Game.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  Game.prototype.createWall = function () {
    for (var y = 0; y <= 9; y++) {
      for (var z = 0; z <= 3; z++) {
        this.createCube_atrclb$(Vector_0(450.0, -450.0 + (y * 100 | 0), 70 + (z * 100 | 0) | 0));
      }
    }
  };
  Game.prototype.createCube_atrclb$ = function (position) {
    var bp = Blueprint.Load('/Game/CubeBP');
    bp.GeneratedClass;
    return GenerateClass(bp, GWorld, position, new Rotator());
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function KotlinLogo() {
    KotlinObject.call(this);
    this.yaw = 0.0;
    this.bp = Blueprint.Load('/Game/AIKubeController');
    this.aiBP = Blueprint.Load('/Game/CubeAI');
  }
  KotlinLogo.prototype.Tick = function (deltaTime) {
    var actor = GetOwner(this);
    this.yaw += 100 * deltaTime;
    actor.K2_SetActorRotation(Rotator_0(90.0, void 0, this.yaw), false);
  };
  KotlinLogo.prototype.BeginOverlap = function (other) {
    this.spawnAICubes();
    GetOwner(this).K2_DestroyActor();
    return 'touched';
  };
  KotlinLogo.prototype.createAICube_atrclb$ = function (position) {
    return GenerateClass(this.bp, GWorld, position, new Rotator());
  };
  KotlinLogo.prototype.createAIController = function () {
    return GenerateClass(this.aiBP, GWorld, new Vector(), new Rotator());
  };
  KotlinLogo.prototype.spawnAICubes = function () {
    for (var y = 0; y <= 7; y++) {
      for (var z = 0; z <= 3; z++) {
        var $receiver = this.createAICube_atrclb$(Vector_0(2500.0 + (z * 150 | 0), -450.0 + (y * 150 | 0), 100));
        this.createAIController().Possess($receiver);
      }
    }
  };
  KotlinLogo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinLogo',
    interfaces: []
  };
  function Pickup() {
    Pickup$Companion_getInstance();
    KotlinObject.call(this);
  }
  Pickup.prototype.BeginOverlap = function (other) {
    var tmp$;
    tmp$ = Pickup$Companion_getInstance().armor;
    Pickup$Companion_getInstance().armor = tmp$ + 1 | 0;
    GetOwner(this).K2_DestroyActor();
    return 'armor +1 -> ' + Pickup$Companion_getInstance().armor;
  };
  function Pickup$Companion() {
    Pickup$Companion_instance = this;
    this.armor = 0;
  }
  Pickup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Pickup$Companion_instance = null;
  function Pickup$Companion_getInstance() {
    if (Pickup$Companion_instance === null) {
      new Pickup$Companion();
    }return Pickup$Companion_instance;
  }
  Pickup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pickup',
    interfaces: []
  };
  function Switch() {
    Switch$Companion_getInstance();
    KotlinObject.call(this);
  }
  Switch.prototype.BeginOverlap = function (other) {
    var tmp$;
    var actor = GetOwner(this);
    (tmp$ = actor.Lock) != null ? (tmp$.K2_DestroyActor(), Unit) : null;
    var plate = actor.GetComponentByClass(StaticMeshComponent);
    var button = GetComponentByName(actor, StaticMeshComponent, 'button');
    button.K2_SetRelativeLocation(Vector_0(0, 20, 0), false);
    plate.SetMaterial(0, button.GetMaterial(0));
    return 'Lock opened';
  };
  function Switch$Companion() {
    Switch$Companion_instance = this;
    this.armor = 0;
  }
  Switch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Switch$Companion_instance = null;
  function Switch$Companion_getInstance() {
    if (Switch$Companion_instance === null) {
      new Switch$Companion();
    }return Switch$Companion_instance;
  }
  Switch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Switch',
    interfaces: []
  };
  function HelloKotlin() {
    KotlinObject.call(this);
    this.yaw = 0.0;
    this.actor = null;
    var pos = Vector_0(100, void 0, 100);
    var rotator = Rotator_0(void 0, void 0, this.yaw);
    this.actor = new TextRenderActor(GWorld, pos, rotator);
    this.actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    this.actor.TextRender.SetText('Hello Kotlin');
  }
  HelloKotlin.prototype.Tick = function (deltaTime) {
    this.yaw += 100.0 * deltaTime;
    this.actor.K2_SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
  };
  HelloKotlin.prototype.BeginOverlap = function (other) {
    return '';
  };
  HelloKotlin.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  HelloKotlin.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  HelloKotlin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloKotlin',
    interfaces: []
  };
  function BaseCylinder() {
    KotlinObject.call(this);
    this.deltaTimeAccum = 0.0;
    this.yaw = 0.0;
  }
  BaseCylinder.prototype.Tick = function (deltaTime) {
    this.deltaTimeAccum += deltaTime;
    var actor = GetOwner(this);
    this.yaw += 100 * deltaTime;
    actor.K2_SetActorRotation(Rotator_0(void 0, this.yaw), false);
  };
  BaseCylinder.prototype.BeginOverlap = function (other) {
    return this.getName();
  };
  BaseCylinder.prototype.getName = function () {
    return 'Base Cylinder';
  };
  BaseCylinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseCylinder',
    interfaces: [ICylinder]
  };
  function CustomCylinder() {
    BaseCylinder.call(this);
  }
  CustomCylinder.prototype.getName = function () {
    return 'Custom Cylinder';
  };
  CustomCylinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomCylinder',
    interfaces: [BaseCylinder]
  };
  function DelegatedCylinder(baseCylinder) {
    if (baseCylinder === void 0)
      baseCylinder = new BaseCylinder();
    this.$delegate_159cgl$_0 = baseCylinder;
    this.$delegate_159cgl$_1 = baseCylinder;
  }
  DelegatedCylinder.prototype.getName = function () {
    return 'Delegated Cylinder';
  };
  DelegatedCylinder.prototype.BeginOverlap = function (other) {
    return this.$delegate_159cgl$_0.BeginOverlap(other);
  };
  DelegatedCylinder.prototype.OnDestroyed = function () {
    return this.$delegate_159cgl$_0.OnDestroyed();
  };
  DelegatedCylinder.prototype.Tick = function (deltaTime) {
    return this.$delegate_159cgl$_0.Tick(deltaTime);
  };
  DelegatedCylinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatedCylinder',
    interfaces: [ICylinder]
  };
  function ICylinder() {
  }
  ICylinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ICylinder',
    interfaces: []
  };
  function KeyboardInput() {
    KotlinObject.call(this);
    this.actor = null;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('F');
    this.keyRight = new KeyListener('H');
    this.keyUp = new KeyListener('T');
    this.keyDown = new KeyListener('G');
    var bp = Blueprint.Load('/Game/ExampleBlueprint');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
  }
  KeyboardInput.prototype.Tick = function (deltaTime) {
    this.yaw += 1.0;
    this.actor.K2_SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    if (this.keyLeft.down()) {
      this.actor.K2_AddActorWorldOffset(Vector_0(void 0, -1), false);
    }if (this.keyRight.down()) {
      this.actor.K2_AddActorWorldOffset(Vector_0(void 0, 1), false);
    }if (this.keyUp.down()) {
      this.actor.K2_AddActorWorldOffset(Vector_0(1), false);
    }if (this.keyDown.down()) {
      this.actor.K2_AddActorWorldOffset(Vector_0(-1), false);
    }};
  KeyboardInput.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  KeyboardInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyboardInput',
    interfaces: []
  };
  function SceneLights() {
    KotlinObject.call(this);
    this.tickable = null;
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.K2_DestroyActor();
    }
    this.tickable = listOf([this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(1)), new SceneLights_init$ObjectLiteral()), this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(void 0, 1)), new SceneLights_init$ObjectLiteral_0()), this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(void 0, void 0, 1)), new SceneLights_init$ObjectLiteral_1())]);
    this.bg_atrclb$(Vector_0(400, -100, -150));
    this.skel_atrclb$(Vector_0(400, -150, 0));
  }
  SceneLights.prototype.light_qxwhts$ = function (color) {
    var actor = new PointLight(GWorld);
    actor.LightComponent.SetMobility('Movable');
    actor.LightComponent.Intensity = 10000;
    actor.LightComponent.SetLightColor(color, false);
    return actor;
  };
  SceneLights.prototype.box_bzru3a$ = function (p, size, color) {
    var actor = new StaticMeshActor(GWorld, p);
    var smc = actor.StaticMeshComponent;
    smc.SetMobility('Movable');
    smc.SetStaticMesh(StaticMesh.Load('/Engine/BasicShapes/Cube'));
    var mtrl = Material.Load('/Game/Color');
    var mi = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, mtrl, '');
    mi.SetVectorParameterValue('color', color);
    smc.SetMaterial(0, mi);
    actor.SetActorScale3D(size);
    return actor;
  };
  SceneLights.prototype.bg_atrclb$ = function (p) {
    var tmp$;
    var size = 1000;
    var boxsize = 100;
    var scale = size / boxsize | 0;
    this.box_bzru3a$(p.Add_VectorVector(Vector_0(size / 2 | 0, void 0, size / 2 | 0)), Vector_0(1, scale, scale), LinearColor_0(0.5, 0.7));
    this.box_bzru3a$(p.Add_VectorVector(Vector_0(void 0, (-size | 0) / 2 | 0, size / 2 | 0)), Vector_0(scale, 1, scale), LinearColor_0(void 0, void 0, 1));
    this.box_bzru3a$(p, Vector_0(scale, scale, 1), LinearColor_0(1));
    var N = 10;
    var s = 0.04;
    for (var y = 0; y <= N; y++) {
      for (var x = 0; x <= N; x++) {
        var a = this.box_bzru3a$(p.Add_VectorVector(Vector_0(void 0, (y - (N / 2 | 0)) * 50, x * 50)), Vector_0(s, s, s), LinearColor_0(1, 1, 1));
        tmp$ = Random.Default.nextDouble() * 360;
        a.K2_SetActorRotation(Rotator_0(void 0, Random.Default.nextDouble() * 180, tmp$), false);
      }
    }
  };
  SceneLights.prototype.skel_atrclb$ = function (p) {
    var resource = SkeletalMesh.Load('/Game/Mannequin/Character/Mesh/SK_Mannequin');
    var actor = new SkeletalMeshActor(GWorld, p.Add_VectorVector(Vector_0(void 0, void 0, 50)));
    actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false);
    actor.K2_SetActorRotation(Rotator_0(void 0, void 0, 90), false);
  };
  function SceneLights$rotate$tick(closure$actor, closure$opts) {
    return function () {
      var tmp$;
      if (closure$actor.IsValid()) {
        var time = numberToDouble(GWorld.GetTimeSeconds());
        var rad = time * (typeof (tmp$ = closure$opts.k) === 'number' ? tmp$ : throwCCE());
        var r = closure$opts.r;
        var p = Vector_0(void 0, Math_0.cos(rad) * r, Math_0.sin(rad) * r).Add_VectorVector(closure$opts.p);
        closure$actor.SetActorLocation(p, false);
      }};
  }
  SceneLights.prototype.rotate_ot2g50$ = function (actor, opts) {
    var tick = SceneLights$rotate$tick(actor, opts);
    return getCallableRef('tick', function () {
      return tick(), Unit;
    });
  };
  SceneLights.prototype.Tick = function (deltaTime) {
    var tmp$;
    tmp$ = this.tickable.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  SceneLights.prototype.cleanup = function () {
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.K2_DestroyActor();
    }
  };
  function SceneLights_init$ObjectLiteral() {
    this.k = 1.8;
    this.r = 150;
    this.p = Vector_0(400, -100, 100);
  }
  SceneLights_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SceneLights_init$ObjectLiteral_0() {
    this.k = 1.5;
    this.r = 30;
    this.p = Vector_0(400, void 0, 150);
  }
  SceneLights_init$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SceneLights_init$ObjectLiteral_1() {
    this.k = 0.1;
    this.r = 230;
    this.p = Vector_0(400, void 0, 250);
  }
  SceneLights_init$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  SceneLights.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SceneLights',
    interfaces: []
  };
  function ThirdPerson() {
    KotlinObject.call(this);
    this.actor = null;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyJump = new KeyListener('SpaceBar');
    var bp = Blueprint.Load('/Game/ThirdPersonBP');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
    this.actor.CapsuleComponent.CapsuleRadius = 42.0;
    this.actor.CapsuleComponent.CapsuleHalfHeight = 96.0;
    this.actor.bUseControllerRotationPitch = false;
    this.actor.bUseControllerRotationRoll = false;
    this.actor.bUseControllerRotationYaw = false;
    this.actor.CharacterMovement.bOrientRotationToMovement = true;
    this.actor.CharacterMovement.RotationRate = Rotator.MakeRotator(0, 0, 540);
    this.actor.CharacterMovement.JumpZVelocity = 600;
    this.actor.CharacterMovement.AirControl = 0.2;
    var ANI_AnimationBP = AnimBlueprint.Load('/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP').GeneratedClass;
    this.actor.Mesh.SetAnimClass(ANI_AnimationBP);
    this.actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270);
    this.actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96);
    var myPlayerController = GWorld.GetPlayerController(0);
    myPlayerController.Possess(this.actor);
  }
  ThirdPerson.prototype.Tick = function (deltaTime) {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }if (this.keyJump.pressed()) {
      this.startJump();
    }if (this.keyJump.released()) {
      this.stopJump();
    }this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
  };
  ThirdPerson.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  ThirdPerson.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  ThirdPerson.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  ThirdPerson.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  ThirdPerson.prototype.startJump = function () {
    this.actor.Jump();
  };
  ThirdPerson.prototype.stopJump = function () {
    this.actor.StopJumping();
  };
  ThirdPerson.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
  };
  ThirdPerson.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  ThirdPerson.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  ThirdPerson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThirdPerson',
    interfaces: []
  };
  function init() {
    println('<<<INIT>>>');
    return getCallableRef('cleanup', function () {
      return cleanup(), Unit;
    });
  }
  function cleanup() {
    println('<<<Cleanup>>>');
  }
  function GetOwner($receiver) {
    return $receiver.Root.GetOwner();
  }
  function KotlinUnrealClassCache() {
    KotlinUnrealClassCache_instance = this;
    this.cache = LinkedHashMap_init();
  }
  KotlinUnrealClassCache.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinUnrealClassCache',
    interfaces: []
  };
  var KotlinUnrealClassCache_instance = null;
  function KotlinUnrealClassCache_getInstance() {
    if (KotlinUnrealClassCache_instance === null) {
      new KotlinUnrealClassCache();
    }return KotlinUnrealClassCache_instance;
  }
  function unrealProxyClass(global, klass, className) {
    var tmp$;
    if (KotlinUnrealClassCache_getInstance().cache.containsKey_11rb$(className)) {
      tmp$ = KotlinUnrealClassCache_getInstance().cache.get_11rb$(className);
    } else {
      var r = require('uklass')()(global, klass);
      KotlinUnrealClassCache_getInstance().cache.put_xwzc9p$(className, r);
      tmp$ = r;
    }
    var GeneratedClassDefinition = tmp$;
    var instance = new GeneratedClassDefinition();
    instance.Root = Root;
    instance.Root.SetKotlinObject(instance);
    instance.konstructor();
    if (!global.precious)
      global.precious = [];
    global.precious.push(instance);
  }
  function GenerateClass($receiver, world, position, rotation) {
    var receiver = $receiver;
    return new receiver.GeneratedClass(world, position, rotation);
  }
  function GenerateClass_0($receiver, world, position, rotation) {
    var receiver = $receiver;
    return new receiver.GeneratedClass(world, position, rotation);
  }
  function Vector_0(X, Y, Z) {
    if (X === void 0)
      X = 0.0;
    if (Y === void 0)
      Y = 0.0;
    if (Z === void 0)
      Z = 0.0;
    var $receiver = new Vector();
    $receiver.X = numberToDouble(X);
    $receiver.Y = numberToDouble(Y);
    $receiver.Z = numberToDouble(Z);
    return $receiver;
  }
  function LinearColor_0(R, G, B, A) {
    if (R === void 0)
      R = 0.0;
    if (G === void 0)
      G = 0.0;
    if (B === void 0)
      B = 0.0;
    if (A === void 0)
      A = 1.0;
    var $receiver = new LinearColor();
    $receiver.R = R;
    $receiver.G = G;
    $receiver.B = B;
    $receiver.A = A;
    return $receiver;
  }
  function Rotator_0(Roll, Pitch, Yaw) {
    if (Roll === void 0)
      Roll = 0.0;
    if (Pitch === void 0)
      Pitch = 0.0;
    if (Yaw === void 0)
      Yaw = 0.0;
    var $receiver = new Rotator();
    $receiver.Pitch = Pitch;
    $receiver.Roll = Roll;
    $receiver.Yaw = Yaw;
    return $receiver;
  }
  function GetComponentByName($receiver, ComponentClass, Name) {
    var $receiver_0 = $receiver.GetComponentsByClass(ComponentClass);
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (equals(element.GetName(), Name))
        destination.add_11rb$(element);
    }
    var component = destination;
    return first(component);
  }
  function Key_0(keyName) {
    var $receiver = new Key();
    $receiver.KeyName = keyName;
    return $receiver;
  }
  function KeyListener(keyName, playerControllerIndex) {
    if (playerControllerIndex === void 0)
      playerControllerIndex = 0;
    this.playerControllerIndex_0 = playerControllerIndex;
    this.k_0 = Key_0(keyName);
  }
  KeyListener.prototype.down = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex_0).IsInputKeyDown(this.k_0);
  };
  KeyListener.prototype.pressed = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex_0).WasInputKeyJustPressed(this.k_0);
  };
  KeyListener.prototype.released = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex_0).WasInputKeyJustReleased(this.k_0);
  };
  KeyListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyListener',
    interfaces: []
  };
  _.HelloBlueprint = HelloBlueprint;
  _.HelloBlueprints = HelloBlueprints;
  _.RedRotatingCube = RedRotatingCube;
  _.WhiteRotatingCube = WhiteRotatingCube;
  _.FirstPerson = FirstPerson;
  _.Game = Game;
  _.KotlinLogo = KotlinLogo;
  Object.defineProperty(Pickup, 'Companion', {
    get: Pickup$Companion_getInstance
  });
  _.Pickup = Pickup;
  Object.defineProperty(Switch, 'Companion', {
    get: Switch$Companion_getInstance
  });
  _.Switch = Switch;
  _.HelloKotlin = HelloKotlin;
  _.BaseCylinder = BaseCylinder;
  _.CustomCylinder = CustomCylinder;
  _.DelegatedCylinder = DelegatedCylinder;
  _.ICylinder = ICylinder;
  _.KeyboardInput = KeyboardInput;
  _.SceneLights = SceneLights;
  _.ThirdPerson = ThirdPerson;
  _.init = init;
  _.cleanup = cleanup;
  _.GetOwner_yjkk8i$ = GetOwner;
  _.unrealProxyClass = unrealProxyClass;
  var package$ue = _.ue || (_.ue = {});
  package$ue.GenerateClass_6p5t4y$ = GenerateClass;
  package$ue.GenerateClass_4gucm0$ = GenerateClass_0;
  package$ue.Vector_a2j3zq$ = Vector_0;
  package$ue.LinearColor_1ugm5o$ = LinearColor_0;
  package$ue.Rotator_a2j3zq$ = Rotator_0;
  package$ue.GetComponentByName_4wsm31$ = GetComponentByName;
  package$ue.Key_61zpoe$ = Key_0;
  package$ue.KeyListener = KeyListener;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(module.exports, require('kotlin')));
