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
      var tmp$ = GWorld;
      var $receiver = new Vector();
      {
        $receiver.X = 1.0;
      }
      var $receiver_0 = new Rotator();
      {
        $receiver_0.Yaw = 180;
      }
      this.actor = GenerateClass(bp, tmp$, $receiver, $receiver_0);
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
    var tmp$ = this.actor;
    var $receiver = new Rotator();
    {
      $receiver.Yaw = this.yaw;
    }
    tmp$.SetActorRotation($receiver, false);
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
    var tmp$ = Blueprint.Load('/Game/ExampleBlueprint');
    var tmp$_0 = GWorld;
    var $receiver = new Vector();
    {
      $receiver.X = x;
      $receiver.Y = y;
    }
    var $receiver_0 = new Rotator();
    {
      $receiver_0.Yaw = yaw;
    }
    return GenerateClass(tmp$, tmp$_0, $receiver, $receiver_0);
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
        var $receiver_0 = new Rotator();
        {
          $receiver_0.Yaw = 1.0;
        }
        element.AddActorLocalRotation($receiver_0, false);
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
    var $receiver = new Vector();
    {
      $receiver.X = 100.0;
      $receiver.Z = 100.0;
    }
    var pos = $receiver;
    var $receiver_0 = new Rotator();
    {
      $receiver_0.Yaw = this.yaw;
    }
    var rotator = $receiver_0;
    this.actor = new TextRenderActor(GWorld, pos, rotator);
    this.actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    this.actor.TextRender.SetText('Hello Kotlin');
    this.update_3p81yu$(0);
  }
  HelloKotlin.prototype.update_3p81yu$ = function (milliseconds) {
    this.yaw += 1.0;
    var tmp$ = this.actor;
    var $receiver = new Rotator();
    {
      $receiver.Yaw = this.yaw;
    }
    tmp$.SetActorRotation($receiver, false);
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
    return Kotlin.getBoundCallableRefForMemberFunction(new SceneLights(), 'cleanup');
  }
  function SceneLights() {
    var $receiver = GWorld.GetAllActorsOfClass(Light).OutActors;
    var tmp$_7;
    for (tmp$_7 = 0; tmp$_7 !== $receiver.length; ++tmp$_7) {
      var element = $receiver[tmp$_7];
      {
        element.DestroyActor();
      }
    }
    var tmp$ = this.rotate_ot2g50$.bind(this);
    var tmp$_0 = this.light_qxwhts$.bind(this);
    var $receiver_0 = new LinearColor();
    {
      $receiver_0.R = 1;
    }
    tmp$(tmp$_0($receiver_0), new SceneLights_init$ObjectLiteral());
    var tmp$_1 = this.rotate_ot2g50$.bind(this);
    var tmp$_2 = this.light_qxwhts$.bind(this);
    var $receiver_1 = new LinearColor();
    {
      $receiver_1.G = 1;
    }
    tmp$_1(tmp$_2($receiver_1), new SceneLights_init$ObjectLiteral_0());
    var tmp$_3 = this.rotate_ot2g50$.bind(this);
    var tmp$_4 = this.light_qxwhts$.bind(this);
    var $receiver_2 = new LinearColor();
    {
      $receiver_2.B = 1;
    }
    tmp$_3(tmp$_4($receiver_2), new SceneLights_init$ObjectLiteral_1());
    var tmp$_5 = this.bg_atrclb$.bind(this);
    var $receiver_3 = new Vector();
    {
      $receiver_3.X = 400.0;
      $receiver_3.Z = -150.0;
      $receiver_3.Y = -100.0;
    }
    tmp$_5($receiver_3);
    var tmp$_6 = this.skel_atrclb$.bind(this);
    var $receiver_4 = new Vector();
    {
      $receiver_4.X = 400.0;
      var Z = -150.0;
      var Y = -100.0;
    }
    tmp$_6($receiver_4);
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
    var size = 1000.0;
    var boxsize = 100.0;
    var scale = size / boxsize;
    var tmp$ = this.box_bzru3a$.bind(this);
    var $receiver = new Vector();
    {
      $receiver.X = size / 2;
      $receiver.Z = size / 2;
    }
    var tmp$_0 = p.Add_VectorVector($receiver);
    var $receiver_0 = new Vector();
    {
      $receiver_0.X = 1.0;
      $receiver_0.Y = scale;
      $receiver_0.Z = scale;
    }
    var $receiver_1 = new LinearColor();
    {
      $receiver_1.R = 0.5;
      $receiver_1.G = 0.7;
    }
    tmp$(tmp$_0, $receiver_0, $receiver_1);
    var tmp$_1 = this.box_bzru3a$.bind(this);
    var $receiver_2 = new Vector();
    {
      $receiver_2.Y = -size / 2;
      $receiver_2.Z = size / 2;
    }
    var tmp$_2 = p.Add_VectorVector($receiver_2);
    var $receiver_3 = new Vector();
    {
      $receiver_3.X = scale;
      $receiver_3.Y = 1.0;
      $receiver_3.Z = scale;
    }
    var $receiver_4 = new LinearColor();
    {
      $receiver_4.B = 1;
    }
    tmp$_1(tmp$_2, $receiver_3, $receiver_4);
    var tmp$_3 = this.box_bzru3a$.bind(this);
    var $receiver_5 = new Vector();
    {
      $receiver_5.X = scale;
      $receiver_5.Y = scale;
      $receiver_5.Z = 1.0;
    }
    var $receiver_6 = new LinearColor();
    {
      $receiver_6.R = 1;
    }
    tmp$_3(p, $receiver_5, $receiver_6);
    var N = 10;
    var s = 0.04;
    for (var y = 0; y <= N; y++) {
      for (var x = 0; x <= N; x++) {
        var tmp$_4 = this.box_bzru3a$.bind(this);
        var $receiver_7 = new Vector();
        {
          $receiver_7.Y = (y - (N / 2 | 0)) * 50;
          $receiver_7.Z = x * 50;
        }
        var tmp$_5 = p.Add_VectorVector($receiver_7);
        var $receiver_8 = new Vector();
        {
          $receiver_8.X = s;
          $receiver_8.Y = s;
          $receiver_8.Z = s;
        }
        var $receiver_9 = new LinearColor();
        {
          $receiver_9.R = 1;
          $receiver_9.G = 1;
          $receiver_9.B = 1;
        }
        var a = tmp$_4(tmp$_5, $receiver_8, $receiver_9);
        var $receiver_10 = new Rotator();
        {
          $receiver_10.Yaw = Math.random() * 360;
          $receiver_10.Pitch = Math.random() * 180;
        }
        a.SetActorRotation($receiver_10, false);
      }
    }
  };
  SceneLights.prototype.skel_atrclb$ = function (p) {
    var resource = SkeletalMesh.Load('/Game/Mannequin/Character/Mesh/SK_Mannequin');
    var tmp$ = GWorld;
    var $receiver = new Vector();
    {
      $receiver.Z = 50.0;
    }
    var actor = new SkeletalMeshActor(tmp$, p.Add_VectorVector($receiver));
    actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false);
    var $receiver_0 = new Rotator();
    {
      $receiver_0.Yaw = 90;
    }
    actor.SetActorRotation($receiver_0, false);
  };
  function SceneLights$rotate$tick$lambda(closure$tick) {
    return function (it) {
      {
        closure$tick();
      }
    };
  }
  function SceneLights$rotate$tick(closure$actor, closure$time, closure$opts) {
    return function closure$tick() {
      var tmp$;
      {
        if (!closure$actor.IsValid())
          return;
        closure$time.v += 0.016;
        var rad = closure$time.v * (typeof (tmp$ = closure$opts.k) === 'number' ? tmp$ : Kotlin.throwCCE());
        var r = closure$opts.r;
        var $receiver = new Vector();
        {
          $receiver.Y = Math.cos(rad) * r;
          $receiver.Z = Math.sin(rad) * r;
        }
        var p = $receiver.Add_VectorVector(closure$opts.p);
        closure$actor.SetActorLocation(p, false);
        process.nextTick(SceneLights$rotate$tick$lambda(closure$tick));
      }
    };
  }
  SceneLights.prototype.rotate_ot2g50$ = function (actor, opts) {
    var time = {v: 0.0};
    var tick = SceneLights$rotate$tick(actor, time, opts);
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
    var $receiver = new Vector();
    {
      $receiver.X = 400.0;
      $receiver.Y = -100.0;
      $receiver.Z = 100.0;
    }
    this.p = $receiver;
  }
  SceneLights_init$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function SceneLights_init$ObjectLiteral_0() {
    this.k = 1.5;
    this.r = 30;
    var $receiver = new Vector();
    {
      $receiver.X = 400.0;
      $receiver.Z = 150.0;
    }
    this.p = $receiver;
  }
  SceneLights_init$ObjectLiteral_0.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function SceneLights_init$ObjectLiteral_1() {
    this.k = 0.1;
    this.r = 230;
    var $receiver = new Vector();
    {
      $receiver.X = 400.0;
      $receiver.Z = 250.0;
    }
    this.p = $receiver;
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
  _.HelloBlueprint = HelloBlueprint;
  _.newInstance_8vojts$ = newInstance;
  _.baseClass = baseClass;
  _.HelloBlueprintEvent = HelloBlueprintEvent;
  _.HelloBlueprints = HelloBlueprints;
  _.HelloKotlin = HelloKotlin;
  _.init = init;
  _.SceneLights = SceneLights;
  var package$ue = _.ue || (_.ue = {});
  package$ue.GenerateClass_1eyabd$ = GenerateClass;
  package$ue.GenerateClass_b4xcpr$ = GenerateClass_0;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(typeof this['kotlin-examples'] === 'undefined' ? {} : this['kotlin-examples'], kotlin);
