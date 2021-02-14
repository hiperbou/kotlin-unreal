(function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var numberToDouble = Kotlin.numberToDouble;
  var equals = Kotlin.equals;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  MyUObject.prototype = Object.create(JSObject.prototype);
  MyUObject.prototype.constructor = MyUObject;
  MyUObject2.prototype = Object.create(JSObject.prototype);
  MyUObject2.prototype.constructor = MyUObject2;
  function init() {
    console.log('<<<INIT>>>');
    return getCallableRef('cleanup', function ($receiver) {
      return $receiver.cleanup(), Unit;
    }.bind(null, new MyUObject()));
  }
  function KeyboardInput() {
    this.actor = null;
    this.yaw = 180.0;
    this.keyLeft = new KeyListener('F');
    this.keyRight = new KeyListener('H');
    this.keyUp = new KeyListener('T');
    this.keyDown = new KeyListener('G');
    var bp = Blueprint.Load('/Game/ExampleBlueprint');
    this.actor = GenerateClass(bp, GWorld, Vector_0(1), Rotator_0(void 0, void 0, 180));
    process.nextTick(KeyboardInput_init$lambda(this));
  }
  function KeyboardInput$update$lambda(this$KeyboardInput) {
    return function (it) {
      this$KeyboardInput.update();
      return Unit;
    };
  }
  KeyboardInput.prototype.update = function () {
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
    }process.nextTick(KeyboardInput$update$lambda(this));
  };
  KeyboardInput.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.K2_DestroyActor();
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
  function MyUObject() {
    JSObject.call(this);
    this.touched = 0;
    this.myNewVar = 666.0;
  }
  MyUObject.prototype.NotifyTrigger = function () {
    this.touched = this.touched + 1 | 0;
    println('Me llaman desde un blueprint');
    return 'touched ' + this.touched + ' times';
  };
  MyUObject.prototype.BeginPlay = function () {
    println('BeginPlay');
    this.myNewVar = 666.0;
    this.touched = 0;
    println(global);
  };
  MyUObject.prototype.Tick = function (deltaTime) {
    this.myNewVar += deltaTime;
    var actor = this.Root.GetOwner();
    actor.Yaw = actor.Yaw + actor.Speed * deltaTime * 4;
    actor.K2_SetActorRotation(Rotator_0(void 0, void 0, actor.Yaw), false);
  };
  MyUObject.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
  };
  MyUObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyUObject',
    interfaces: []
  };
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
    instance.Root.SetJsObject(instance);
    if (!global.precious)
      global.precious = [];
    global.precious.push(instance);
    if (instance.BeginPlay)
      instance.BeginPlay();
  }
  function MyUObject2() {
    JSObject.call(this);
    this.touched = 0;
  }
  MyUObject2.prototype.NotifyTrigger = function () {
    this.touched = this.touched + 1 | 0;
    println('Me llaman desde un blueprint');
    return 'touched ' + this.touched + ' times';
  };
  MyUObject2.prototype.BeginPlay = function () {
    println('BeginPlay');
  };
  MyUObject2.prototype.Tick = function (deltaTime) {
    var actor = this.Root.GetOwner();
    if (actor.actorToCopy != null) {
      actor.K2_SetActorRotation(Rotator_0(void 0, void 0, ensureNotNull(actor.actorToCopy).Yaw), false);
    }};
  MyUObject2.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
  };
  MyUObject2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyUObject2',
    interfaces: []
  };
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
  _.init = init;
  _.KeyboardInput = KeyboardInput;
  _.MyUObject = MyUObject;
  Object.defineProperty(_, 'KotlinUnrealClassCache', {
    get: KotlinUnrealClassCache_getInstance
  });
  _.unrealProxyClass = unrealProxyClass;
  _.MyUObject2 = MyUObject2;
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
