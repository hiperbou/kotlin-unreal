(function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var numberToDouble = Kotlin.numberToDouble;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Any = Object;
  var getKClass = Kotlin.getKClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getCallableRef = Kotlin.getCallableRef;
  var equals = Kotlin.equals;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  MyKotlinActorExtended.prototype = Object.create(AssetGameExampleBlueprint.prototype);
  MyKotlinActorExtended.prototype.constructor = MyKotlinActorExtended;
  function FirstPerson() {
    this.actor = null;
    this.myCamera = null;
    this.myFPMesh = null;
    this.myFPGunMesh = null;
    this.fireSound = null;
    this.fireAnimation = null;
    this.gunOffset = null;
    this.weaponRange = 0;
    this.weaponDamage = 0;
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
    this.myFPMesh.SetAnimInstanceClass(ANI_AnimationBP);
    this.weaponRange = 5000.0;
    this.weaponDamage = 500000.0;
    this.gunOffset = Vector_0(100, 30, 10);
    this.createWall();
    process.nextTick(FirstPerson_init$lambda(this));
  }
  function FirstPerson$update$lambda(this$FirstPerson) {
    return function (it) {
      this$FirstPerson.update();
      return Unit;
    };
  }
  FirstPerson.prototype.update = function () {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }
    if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }
    if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }
    if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }
    if (this.keyJump.pressed()) {
      this.startJump();
    }
    if (this.keyJump.released()) {
      this.stopJump();
    }
    if (this.keyFire.pressed()) {
      this.onFire();
    }
    this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
    process.nextTick(FirstPerson$update$lambda(this));
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
    GWorld.PlaySoundAtLocation(this.fireSound, this.actor.GetActorLocation(), Rotator_0(0, 0, 0), 1, 1, 0, this.fireSound.AttenuationSettings, this.fireSound.SoundConcurrencySettings);
    var tempAnimInstance = this.myFPMesh.GetAnimInstance();
    tempAnimInstance.Montage_Play(this.fireAnimation, 1, 'MontageLength', 0);
    var tempCamera = CameraComponent.C(this.myCamera);
    var tempStartTrace = tempCamera.GetWorldLocation();
    var tempForwardDirection = tempCamera.GetWorldRotation().GetForwardVector();
    var tempOffset = tempForwardDirection.Multiply_VectorFloat(this.weaponRange);
    var tempEndTrace = Vector.Add_VectorVector(tempStartTrace, tempOffset);
    var tempHitResult = new HitResult();
    GWorld.LineTraceByChannel(tempStartTrace, tempEndTrace, 'TraceTypeQuery2', false, [this.actor], 'ForDuration', tempHitResult, true, LinearColor_0(1, 0, 0), LinearColor_0(1, 0, 0), 3);
    var damageActor = tempHitResult.Actor;
    var damageComponent = tempHitResult.Component;
    if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics('')) {
      var tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage);
      damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, '');
    }
  };
  FirstPerson.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
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
    return GenerateClass(bp, GWorld, position, new Rotator());
  };
  function FirstPerson_init$lambda(this$FirstPerson) {
    return function (it) {
      var myPlayerController = GWorld.GetPlayerController(0);
      myPlayerController.Possess(this$FirstPerson.actor);
      this$FirstPerson.update();
      return Unit;
    };
  }
  FirstPerson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirstPerson',
    interfaces: []
  };
  function KeyboardInput() {
    this.actor_vvd834$_0 = this.actor_vvd834$_0;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('F');
    this.keyRight = new KeyListener('H');
    this.keyUp = new KeyListener('T');
    this.keyDown = new KeyListener('G');
    var bp = Blueprint.Load('/Game/ExampleBlueprint');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
    process.nextTick(KeyboardInput_init$lambda(this));
  }
  Object.defineProperty(KeyboardInput.prototype, 'actor', {
    get: function () {
      if (this.actor_vvd834$_0 == null)
        return throwUPAE('actor');
      return this.actor_vvd834$_0;
    },
    set: function (actor) {
      this.actor_vvd834$_0 = actor;
    }
  });
  function KeyboardInput$update$lambda(this$KeyboardInput) {
    return function (it) {
      this$KeyboardInput.update();
      return Unit;
    };
  }
  KeyboardInput.prototype.update = function () {
    this.yaw += 1.0;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    if (this.keyLeft.down()) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, -1), false);
    }
    if (this.keyRight.down()) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, 1), false);
    }
    if (this.keyUp.down()) {
      this.actor.AddActorWorldOffset(Vector_0(1), false);
    }
    if (this.keyDown.down()) {
      this.actor.AddActorWorldOffset(Vector_0(-1), false);
    }
    process.nextTick(KeyboardInput$update$lambda(this));
  };
  KeyboardInput.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  function KeyboardInput_init$lambda(this$KeyboardInput) {
    return function (it) {
      this$KeyboardInput.update();
      return Unit;
    };
  }
  KeyboardInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyboardInput',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function PossesTest() {
    this.zombies = null;
    this.actor = null;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyJump = new KeyListener('SpaceBar');
    var l = GWorld.GetAllActorsOfClass('/Game/CubePawn');
    println(l.OutActors.length);
    var $receiver = l.OutActors;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0;
      destination.add_11rb$(new PossesTest$ZombieCube(Kotlin.isType(tmp$_0 = item, Pawn) ? tmp$_0 : throwCCE()));
    }
    this.zombies = destination;
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
    this.actor.Mesh.SetAnimInstanceClass(ANI_AnimationBP);
    this.actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270);
    this.actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96);
    process.nextTick(PossesTest_init$lambda(this));
  }
  function PossesTest$ZombieCube(actor) {
    this.actor = actor;
  }
  PossesTest$ZombieCube.prototype.update = function () {
    var location = this.actor.GetActorLocation();
    location.X = location.X + 1 * numberToDouble(GWorld.GetWorldDeltaSeconds());
    this.actor.SetActorLocation(location, true);
  };
  PossesTest$ZombieCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZombieCube',
    interfaces: []
  };
  function PossesTest$update$lambda(this$PossesTest) {
    return function (it) {
      this$PossesTest.update();
      return Unit;
    };
  }
  PossesTest.prototype.update = function () {
    var tmp$;
    tmp$ = this.zombies.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.update();
    }
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }
    if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }
    if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }
    if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }
    if (this.keyJump.pressed()) {
      this.startJump();
    }
    if (this.keyJump.released()) {
      this.stopJump();
    }
    this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
    process.nextTick(PossesTest$update$lambda(this));
  };
  PossesTest.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  PossesTest.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  PossesTest.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  PossesTest.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  PossesTest.prototype.startJump = function () {
    this.actor.Jump();
  };
  PossesTest.prototype.stopJump = function () {
    this.actor.StopJumping();
  };
  PossesTest.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  PossesTest.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  PossesTest.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  function PossesTest_init$lambda(this$PossesTest) {
    return function (it) {
      var myPlayerController = GWorld.GetPlayerController(0);
      myPlayerController.Possess(this$PossesTest.actor);
      this$PossesTest.update();
      return Unit;
    };
  }
  PossesTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PossesTest',
    interfaces: []
  };
  function SceneLights() {
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.DestroyActor();
    }
    this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(1)), new SceneLights_init$ObjectLiteral());
    this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(void 0, 1)), new SceneLights_init$ObjectLiteral_0());
    this.rotate_ot2g50$(this.light_qxwhts$(LinearColor_0(void 0, void 0, 1)), new SceneLights_init$ObjectLiteral_1());
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
    var mi = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, mtrl);
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
    this.box_bzru3a$(p.Add_VectorVector(Vector_0(void 0, -1000 / 2 | 0, size / 2 | 0)), Vector_0(scale, 1, scale), LinearColor_0(void 0, void 0, 1));
    this.box_bzru3a$(p, Vector_0(scale, scale, 1), LinearColor_0(1));
    var N = 10;
    var s = 0.04;
    for (var y = 0; y <= N; y++) {
      for (var x = 0; x <= N; x++) {
        var a = this.box_bzru3a$(p.Add_VectorVector(Vector_0(void 0, (y - (N / 2 | 0)) * 50, x * 50)), Vector_0(s, s, s), LinearColor_0(1, 1, 1));
        tmp$ = Math.random() * 360;
        a.SetActorRotation(Rotator_0(void 0, Math.random() * 180, tmp$), false);
      }
    }
  };
  SceneLights.prototype.skel_atrclb$ = function (p) {
    var resource = SkeletalMesh.Load('/Game/Mannequin/Character/Mesh/SK_Mannequin');
    var actor = new SkeletalMeshActor(GWorld, p.Add_VectorVector(Vector_0(void 0, void 0, 50)));
    actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false);
    actor.SetActorRotation(Rotator_0(void 0, void 0, 90), false);
  };
  function SceneLights$rotate$tick$lambda(closure$tick) {
    return function (it) {
      closure$tick();
      return Unit;
    };
  }
  function SceneLights$rotate$tick(closure$actor, closure$opts) {
    return function closure$tick() {
      var tmp$;
      if (!closure$actor.IsValid())
        return;
      var time = numberToDouble(GWorld.GetTimeSeconds());
      var rad = time * (typeof (tmp$ = closure$opts.k) === 'number' ? tmp$ : throwCCE());
      var r = closure$opts.r;
      var p = Vector_0(void 0, Math.cos(rad) * r, Math.sin(rad) * r).Add_VectorVector(closure$opts.p);
      closure$actor.SetActorLocation(p, false);
      process.nextTick(SceneLights$rotate$tick$lambda(closure$tick));
    };
  }
  SceneLights.prototype.rotate_ot2g50$ = function (actor, opts) {
    var tick = SceneLights$rotate$tick(actor, opts);
    tick();
  };
  SceneLights.prototype.cleanup = function () {
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.DestroyActor();
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
    this.actor.Mesh.SetAnimInstanceClass(ANI_AnimationBP);
    this.actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270);
    this.actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96);
    process.nextTick(ThirdPerson_init$lambda(this));
  }
  function ThirdPerson$update$lambda(this$ThirdPerson) {
    return function (it) {
      this$ThirdPerson.update();
      return Unit;
    };
  }
  ThirdPerson.prototype.update = function () {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }
    if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }
    if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }
    if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }
    if (this.keyJump.pressed()) {
      this.startJump();
    }
    if (this.keyJump.released()) {
      this.stopJump();
    }
    this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
    process.nextTick(ThirdPerson$update$lambda(this));
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
    this.actor.DestroyActor();
  };
  ThirdPerson.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  ThirdPerson.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  function ThirdPerson_init$lambda(this$ThirdPerson) {
    return function (it) {
      var myPlayerController = GWorld.GetPlayerController(0);
      myPlayerController.Possess(this$ThirdPerson.actor);
      this$ThirdPerson.update();
      return Unit;
    };
  }
  ThirdPerson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThirdPerson',
    interfaces: []
  };
  function HelloBlueprint() {
    this.actor_dmw9la$_0 = this.actor_dmw9la$_0;
    this.yaw = 180.0;
    var bp = Blueprint.Load('/Game/ExampleBlueprint');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
    process.nextTick(HelloBlueprint_init$lambda(this));
  }
  Object.defineProperty(HelloBlueprint.prototype, 'actor', {
    get: function () {
      if (this.actor_dmw9la$_0 == null)
        return throwUPAE('actor');
      return this.actor_dmw9la$_0;
    },
    set: function (actor) {
      this.actor_dmw9la$_0 = actor;
    }
  });
  function HelloBlueprint$update$lambda(this$HelloBlueprint) {
    return function (it) {
      this$HelloBlueprint.update();
      return Unit;
    };
  }
  HelloBlueprint.prototype.update = function () {
    this.yaw += 1.0;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    process.nextTick(HelloBlueprint$update$lambda(this));
  };
  HelloBlueprint.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  function HelloBlueprint_init$lambda(this$HelloBlueprint) {
    return function (it) {
      this$HelloBlueprint.update();
      return Unit;
    };
  }
  HelloBlueprint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprint',
    interfaces: []
  };
  function newInstance($receiver, world_0) {
    var tmp$;
    return (tmp$ = new $receiver(world)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function baseClass() {
    var clazz = Blueprint.Load('/Game/ExampleBlueprint').GeneratedClass;
    console.log('clazz');
    console.log(clazz);
    var inst = newInstance(clazz, GWorld);
    console.log('inst');
    console.log(inst);
    var MyActor_C = require('uclass')()(global, clazz);
    console.log(MyActor_C);
    return new MyActor_C(GWorld, {X: 1});
  }
  function HelloBlueprintEvent() {
    this.actor_7quw86$_0 = this.actor_7quw86$_0;
    this.yaw = 180.0;
    console.log('HelloBlueprintEvent');
    if (GWorld.IsServer()) {
      this.actor = baseClass();
      process.nextTick(HelloBlueprintEvent_init$lambda(this));
    }
  }
  Object.defineProperty(HelloBlueprintEvent.prototype, 'actor', {
    get: function () {
      if (this.actor_7quw86$_0 == null)
        return throwUPAE('actor');
      return this.actor_7quw86$_0;
    },
    set: function (actor) {
      this.actor_7quw86$_0 = actor;
    }
  });
  function HelloBlueprintEvent$update$lambda(this$HelloBlueprintEvent) {
    return function (it) {
      this$HelloBlueprintEvent.update();
      return Unit;
    };
  }
  HelloBlueprintEvent.prototype.update = function () {
    this.yaw += 1.0;
    var tmp$ = this.actor;
    var $receiver = new Rotator();
    $receiver.Yaw = this.yaw;
    tmp$.SetActorRotation($receiver, false);
    process.nextTick(HelloBlueprintEvent$update$lambda(this));
  };
  HelloBlueprintEvent.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  function HelloBlueprintEvent_init$lambda(this$HelloBlueprintEvent) {
    return function (it) {
      this$HelloBlueprintEvent.update();
      return Unit;
    };
  }
  HelloBlueprintEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprintEvent',
    interfaces: []
  };
  function MyKotlinActorExtended(w, b, c) {
    MyKotlinActorExtended$Companion_getInstance();
    AssetGameExampleBlueprint.call(this, w, b, c);
    this.MyTest = 0;
    this.myArm_haksbb$_0 = this.myArm_haksbb$_0;
    this.myCamera_y9bjto$_0 = this.myCamera_y9bjto$_0;
    console.log('Hello, this is MyKotlinActorExtended.init :)');
  }
  Object.defineProperty(MyKotlinActorExtended.prototype, 'myArm', {
    get: function () {
      if (this.myArm_haksbb$_0 == null)
        return throwUPAE('myArm');
      return this.myArm_haksbb$_0;
    },
    set: function (myArm) {
      this.myArm_haksbb$_0 = myArm;
    }
  });
  Object.defineProperty(MyKotlinActorExtended.prototype, 'myCamera', {
    get: function () {
      if (this.myCamera_y9bjto$_0 == null)
        return throwUPAE('myCamera');
      return this.myCamera_y9bjto$_0;
    },
    set: function (myCamera) {
      this.myCamera_y9bjto$_0 = myCamera;
    }
  });
  MyKotlinActorExtended.prototype.ctor = function () {
    console.log('Hello, this is MyKotlinActorExtended.ctor function :)');
  };
  MyKotlinActorExtended.prototype.properties = function () {
    this.MyTest;
    this.myArm;
    this.myCamera;
  };
  MyKotlinActorExtended.prototype.ReceiveBeginPlay = function () {
    console.log('Hello, this is MyKotlinActorExtended :)');
    this.Entry();
    console.log('variable value is ' + this.variable);
    console.log('changing variable value');
    this.variable = true;
    console.log('variable value is ' + this.variable);
    this.OverrideFun();
  };
  MyKotlinActorExtended.prototype.OverrideMe = function () {
    AssetGameExampleBlueprint.prototype.OverrideMe.call(this);
    console.log('This is Kotlin overriding a function on a Blueprint');
  };
  MyKotlinActorExtended.prototype.startJump = function () {
    console.log('Start Jump!!');
  };
  function MyKotlinActorExtended$Companion() {
    MyKotlinActorExtended$Companion_instance = this;
  }
  MyKotlinActorExtended$Companion.prototype.instance_2br51b$ = function (w, b, c) {
    var p = require('uclass')()(global, get_js(getKClass(MyKotlinActorExtended)));
    return new p(w, b, c);
  };
  MyKotlinActorExtended$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MyKotlinActorExtended$Companion_instance = null;
  function MyKotlinActorExtended$Companion_getInstance() {
    if (MyKotlinActorExtended$Companion_instance === null) {
      new MyKotlinActorExtended$Companion();
    }
    return MyKotlinActorExtended$Companion_instance;
  }
  MyKotlinActorExtended.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyKotlinActorExtended',
    interfaces: []
  };
  function HelloBlueprintExtends() {
    this.yaw = 180.0;
    console.log('YEPA');
    console.log('AssetGameExampleBlueprint is');
    console.log(AssetGameExampleBlueprint);
    var k = MyKotlinActorExtended$Companion_getInstance().instance_2br51b$(GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
    console.log('myActor');
    console.log(k);
    process.nextTick(HelloBlueprintExtends_init$lambda(this));
  }
  HelloBlueprintExtends.prototype.update = function () {
  };
  HelloBlueprintExtends.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
  };
  function HelloBlueprintExtends_init$lambda(this$HelloBlueprintExtends) {
    return function (it) {
      this$HelloBlueprintExtends.update();
      return Unit;
    };
  }
  HelloBlueprintExtends.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprintExtends',
    interfaces: []
  };
  function HelloBlueprints() {
    this.WIDTH = 400.0;
    this.actorList = ArrayList_init();
    for (var i = 0; i <= 10; i++)
      this.actorList.add_11rb$(this.createActor_u22e3q$(this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(0.0, 360.0)));
    process.nextTick(HelloBlueprints_init$lambda(this));
  }
  HelloBlueprints.prototype.rnd_lu1900$ = function (min, max) {
    return min + Math.random() * (max - min);
  };
  HelloBlueprints.prototype.createActor_u22e3q$ = function (x, y, yaw) {
    return GenerateClass(Blueprint.Load('/Game/ExampleBlueprint'), GWorld, Vector_0(x, y), Rotator_0(void 0, void 0, yaw));
  };
  function HelloBlueprints$update$lambda(this$HelloBlueprints) {
    return function (it) {
      this$HelloBlueprints.update();
      return Unit;
    };
  }
  HelloBlueprints.prototype.update = function () {
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.AddActorLocalRotation(Rotator_0(void 0, void 0, 1), false);
    }
    process.nextTick(HelloBlueprints$update$lambda(this));
  };
  HelloBlueprints.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.DestroyActor();
    }
  };
  function HelloBlueprints_init$lambda(this$HelloBlueprints) {
    return function (it) {
      this$HelloBlueprints.update();
      return Unit;
    };
  }
  HelloBlueprints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprints',
    interfaces: []
  };
  function HelloKotlin() {
    this.yaw = 180.0;
    this.actor = null;
    this.timer_s6994g$_0 = this.timer_s6994g$_0;
    var pos = Vector_0(100, void 0, 100);
    var rotator = Rotator_0(void 0, void 0, this.yaw);
    this.actor = new TextRenderActor(GWorld, pos, rotator);
    this.actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    this.actor.TextRender.SetText('Hello Kotlin');
    this.update_3p81yu$(0);
  }
  Object.defineProperty(HelloKotlin.prototype, 'timer', {
    get: function () {
      if (this.timer_s6994g$_0 == null)
        return throwUPAE('timer');
      return this.timer_s6994g$_0;
    },
    set: function (timer) {
      this.timer_s6994g$_0 = timer;
    }
  });
  HelloKotlin.prototype.update_3p81yu$ = function (milliseconds) {
    this.yaw += 1.0;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    this.timer = setTimeout(getCallableRef('update', function ($receiver, milliseconds) {
      return $receiver.update_3p81yu$(milliseconds), Unit;
    }.bind(null, this)), 16);
  };
  HelloKotlin.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
    clearTimeout(this.timer);
  };
  HelloKotlin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloKotlin',
    interfaces: []
  };
  function main(args) {
    global.AssetGameExampleBlueprint = Blueprint.Load('/Game/ExampleBlueprint').GeneratedClass;
  }
  function init() {
    console.log('<<<INIT>>>');
    return getCallableRef('cleanup', function ($receiver) {
      return $receiver.cleanup(), Unit;
    }.bind(null, new HelloBlueprintExtends()));
  }
  function GenerateClass($receiver, world, position, rotation) {
    var clazz = $receiver.GeneratedClass;
    return new clazz(world, position, rotation);
  }
  function GenerateClass_0($receiver, world, position, rotation) {
    var clazz = $receiver.GeneratedClass;
    return new clazz(world, position, rotation);
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
    var tmp$;
    var $receiver_0 = $receiver.GetComponentsByClass(ComponentClass);
    var destination = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element = $receiver_0[tmp$_0];
      if (equals(element.GetName(), Name))
        destination.add_11rb$(element);
    }
    var component = destination;
    return (tmp$ = first(component)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function Key_0(keyName) {
    var $receiver = new Key();
    $receiver.KeyName = keyName;
    return $receiver;
  }
  function KeyListener(keyName, playerControllerIndex) {
    if (playerControllerIndex === void 0)
      playerControllerIndex = 0;
    this.playerControllerIndex = playerControllerIndex;
    this.k = Key_0(keyName);
  }
  KeyListener.prototype.down = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex).IsInputKeyDown(this.k);
  };
  KeyListener.prototype.pressed = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex).WasInputKeyJustPressed(this.k);
  };
  KeyListener.prototype.released = function () {
    return GWorld.GetPlayerController(this.playerControllerIndex).WasInputKeyJustReleased(this.k);
  };
  KeyListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyListener',
    interfaces: []
  };
  _.FirstPerson = FirstPerson;
  _.KeyboardInput = KeyboardInput;
  PossesTest.ZombieCube = PossesTest$ZombieCube;
  _.PossesTest = PossesTest;
  _.SceneLights = SceneLights;
  _.ThirdPerson = ThirdPerson;
  _.HelloBlueprint = HelloBlueprint;
  $$importsForInline$$['kotlin-examples'] = _;
  _.newInstance_w8i5yt$ = newInstance;
  _.baseClass = baseClass;
  _.HelloBlueprintEvent = HelloBlueprintEvent;
  Object.defineProperty(MyKotlinActorExtended, 'Companion', {
    get: MyKotlinActorExtended$Companion_getInstance
  });
  _.MyKotlinActorExtended = MyKotlinActorExtended;
  _.HelloBlueprintExtends = HelloBlueprintExtends;
  _.HelloBlueprints = HelloBlueprints;
  _.HelloKotlin = HelloKotlin;
  _.main_kand9s$ = main;
  _.init = init;
  var package$ue = _.ue || (_.ue = {});
  package$ue.GenerateClass_6p5t4y$ = GenerateClass;
  package$ue.GenerateClass_4gucm0$ = GenerateClass_0;
  package$ue.Vector_a2j3zq$ = Vector_0;
  package$ue.LinearColor_1ugm5o$ = LinearColor_0;
  package$ue.Rotator_a2j3zq$ = Rotator_0;
  package$ue.GetComponentByName_4wsm31$ = GetComponentByName;
  package$ue.Key_61zpoe$ = Key_0;
  package$ue.KeyListener = KeyListener;
  main([]);
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(module.exports, require('kotlin')));
