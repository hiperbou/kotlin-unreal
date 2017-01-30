if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-examples'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-examples'.");
}
this['kotlin-examples'] = function (_, Kotlin) {
  'use strict';
  var Any = Object;
  function HelloBlueprint() {
    this.yaw = 180.0;
    if (GWorld.IsServer()) {
      var bp = Blueprint.Load('/Game/ExampleBlueprint');
      this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
      process.nextTick(HelloBlueprint_init$lambda(this));
    }
  }
  function HelloBlueprint$update$lambda(this$HelloBlueprint) {
    return function (it) {
      {
        this$HelloBlueprint.update();
      }
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
      {
        this$HelloBlueprint.update();
      }
    };
  }
  HelloBlueprint.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloBlueprint',
    baseClasses: []
  };
  function newInstance($receiver_0, world) {
    var tmp$;
    {
    }
    return (tmp$ = new $receiver_0(world)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
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
    this.yaw = 180.0;
    console.log('HelloBlueprintEvent');
    if (GWorld.IsServer()) {
      this.actor = baseClass();
      process.nextTick(HelloBlueprintEvent_init$lambda(this));
    }
  }
  function HelloBlueprintEvent$update$lambda(this$HelloBlueprintEvent) {
    return function (it) {
      {
        this$HelloBlueprintEvent.update();
      }
    };
  }
  HelloBlueprintEvent.prototype.update = function () {
    this.yaw += 1.0;
    var tmp$ = this.actor;
    var $receiver = new Rotator();
    {
      $receiver.Yaw = this.yaw;
    }
    tmp$.SetActorRotation($receiver, false);
    process.nextTick(HelloBlueprintEvent$update$lambda(this));
  };
  HelloBlueprintEvent.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  function HelloBlueprintEvent_init$lambda(this$HelloBlueprintEvent) {
    return function (it) {
      {
        this$HelloBlueprintEvent.update();
      }
    };
  }
  HelloBlueprintEvent.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloBlueprintEvent',
    baseClasses: []
  };
  function HelloBlueprints() {
    this.WIDTH = 400.0;
    this.actorList = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    if (GWorld.IsServer()) {
      for (var i = 0; i <= 10; i++)
        this.actorList.add_za3rmp$(this.createActor_u22e3q$(this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(0.0, 360.0)));
      process.nextTick(HelloBlueprints_init$lambda(this));
    }
  }
  HelloBlueprints.prototype.rnd_lu1900$ = function (min, max) {
    return min + Math.random() * (max - min);
  };
  HelloBlueprints.prototype.createActor_u22e3q$ = function (x, y, yaw) {
    return GenerateClass(Blueprint.Load('/Game/ExampleBlueprint'), GWorld, Vector_0(x, y), Rotator_0(void 0, void 0, yaw));
  };
  function HelloBlueprints$update$lambda(this$HelloBlueprints) {
    return function (it) {
      {
        this$HelloBlueprints.update();
      }
    };
  }
  HelloBlueprints.prototype.update = function () {
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      {
        element.AddActorLocalRotation(Rotator_0(void 0, void 0, 1), false);
      }
    }
    process.nextTick(HelloBlueprints$update$lambda(this));
  };
  HelloBlueprints.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      {
        element.DestroyActor();
      }
    }
  };
  function HelloBlueprints_init$lambda(this$HelloBlueprints) {
    return function (it) {
      {
        this$HelloBlueprints.update();
      }
    };
  }
  HelloBlueprints.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloBlueprints',
    baseClasses: []
  };
  function HelloKotlin() {
    this.yaw = 180.0;
    var pos = Vector_0(100, void 0, 100);
    var rotator = Rotator_0(void 0, void 0, this.yaw);
    this.actor = new TextRenderActor(GWorld, pos, rotator);
    this.actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    this.actor.TextRender.SetText('Hello Kotlin');
    this.update_3p81yu$(0);
  }
  HelloKotlin.prototype.update_3p81yu$ = function (milliseconds) {
    this.yaw += 1.0;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    this.timer = setTimeout(Kotlin.getBoundCallableRefForMemberFunction(this, 'update_3p81yu$'), 16);
  };
  HelloKotlin.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
    clearTimeout(this.timer);
  };
  HelloKotlin.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloKotlin',
    baseClasses: []
  };
  function init() {
    console.log('<<<INIT>>>');
    return Kotlin.getBoundCallableRefForMemberFunction(new KeyboardInput(), 'cleanup');
  }
  function KeyboardInput() {
    this.yaw = 180.0;
    var $receiver = new Key();
    {
      $receiver.KeyName = 'F';
    }
    this.keyLeft = $receiver;
    var $receiver_0 = new Key();
    {
      $receiver_0.KeyName = 'H';
    }
    this.keyRight = $receiver_0;
    var $receiver_1 = new Key();
    {
      $receiver_1.KeyName = 'T';
    }
    this.keyUp = $receiver_1;
    var $receiver_2 = new Key();
    {
      $receiver_2.KeyName = 'G';
    }
    this.keyDown = $receiver_2;
    if (GWorld.IsServer()) {
      var bp = Blueprint.Load('/Game/ExampleBlueprint');
      this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
      process.nextTick(KeyboardInput_init$lambda(this));
    }
  }
  function KeyboardInput$update$lambda(this$KeyboardInput) {
    return function (it) {
      {
        this$KeyboardInput.update();
      }
    };
  }
  KeyboardInput.prototype.update = function () {
    this.yaw += 1.0;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    if (this.key_e2g2e7$(this.keyLeft)) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, -1), false);
    }
    if (this.key_e2g2e7$(this.keyRight)) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, 1), false);
    }
    if (this.key_e2g2e7$(this.keyUp)) {
      this.actor.AddActorWorldOffset(Vector_0(1), false);
    }
    if (this.key_e2g2e7$(this.keyDown)) {
      this.actor.AddActorWorldOffset(Vector_0(-1), false);
    }
    process.nextTick(KeyboardInput$update$lambda(this));
  };
  KeyboardInput.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  KeyboardInput.prototype.key_e2g2e7$ = function (k) {
    return GWorld.GetPlayerController(0).IsInputKeyDown(k);
  };
  function KeyboardInput_init$lambda(this$KeyboardInput) {
    return function (it) {
      {
        this$KeyboardInput.update();
      }
    };
  }
  KeyboardInput.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'KeyboardInput',
    baseClasses: []
  };
  function SceneLights() {
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      {
        element.DestroyActor();
      }
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
      {
        closure$tick();
      }
    };
  }
  function SceneLights$rotate$tick(closure$actor, closure$opts) {
    return function closure$tick() {
      var tmp$;
      {
        if (!closure$actor.IsValid())
          return;
        var time = Kotlin.numberToDouble(GWorld.GetTimeSeconds());
        var rad = time * (typeof (tmp$ = closure$opts.k) === 'number' ? tmp$ : Kotlin.throwCCE());
        var r = closure$opts.r;
        var p = Vector_0(void 0, Math.cos(rad) * r, Math.sin(rad) * r).Add_VectorVector(closure$opts.p);
        closure$actor.SetActorLocation(p, false);
        process.nextTick(SceneLights$rotate$tick$lambda(closure$tick));
      }
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
      {
        element.DestroyActor();
      }
    }
  };
  function SceneLights_init$ObjectLiteral() {
    this.k = 1.8;
    this.r = 150;
    this.p = Vector_0(400, -100, 100);
  }
  SceneLights_init$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function SceneLights_init$ObjectLiteral_0() {
    this.k = 1.5;
    this.r = 30;
    this.p = Vector_0(400, void 0, 150);
  }
  SceneLights_init$ObjectLiteral_0.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function SceneLights_init$ObjectLiteral_1() {
    this.k = 0.1;
    this.r = 230;
    this.p = Vector_0(400, void 0, 250);
  }
  SceneLights_init$ObjectLiteral_1.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  SceneLights.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'SceneLights',
    baseClasses: []
  };
  function GenerateClass($receiver, world, position, rotation) {
    return new $receiver.GeneratedClass(world, position, rotation);
  }
  function GenerateClass_0($receiver, world, position, rotation) {
    return new $receiver.GeneratedClass(world, position, rotation);
  }
  function Vector_0(X, Y, Z) {
    if (X === void 0)
      X = 0.0;
    if (Y === void 0)
      Y = 0.0;
    if (Z === void 0)
      Z = 0.0;
    var $receiver = new Vector();
    var closure$X = X;
    var closure$Y = Y;
    var closure$Z = Z;
    {
      $receiver.X = Kotlin.numberToDouble(closure$X);
      $receiver.Y = Kotlin.numberToDouble(closure$Y);
      $receiver.Z = Kotlin.numberToDouble(closure$Z);
    }
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
    var closure$R = R;
    var closure$G = G;
    var closure$B = B;
    var closure$A = A;
    {
      $receiver.R = closure$R;
      $receiver.G = closure$G;
      $receiver.B = closure$B;
      $receiver.A = closure$A;
    }
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
    var closure$Pitch = Pitch;
    var closure$Roll = Roll;
    var closure$Yaw = Yaw;
    {
      $receiver.Pitch = closure$Pitch;
      $receiver.Roll = closure$Roll;
      $receiver.Yaw = closure$Yaw;
    }
    return $receiver;
  }
  _.HelloBlueprint = HelloBlueprint;
  _.newInstance_8vojts$ = newInstance;
  _.baseClass = baseClass;
  _.HelloBlueprintEvent = HelloBlueprintEvent;
  _.HelloBlueprints = HelloBlueprints;
  _.HelloKotlin = HelloKotlin;
  _.init = init;
  _.KeyboardInput = KeyboardInput;
  _.SceneLights = SceneLights;
  var package$ue = _.ue || (_.ue = {});
  package$ue.GenerateClass_1eyabd$ = GenerateClass;
  package$ue.GenerateClass_b4xcpr$ = GenerateClass_0;
  package$ue.Vector_a2j3zq$ = Vector_0;
  package$ue.LinearColor_1ugm5o$ = LinearColor_0;
  package$ue.Rotator_a2j3zq$ = Rotator_0;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(typeof this['kotlin-examples'] === 'undefined' ? {} : this['kotlin-examples'], kotlin);
