(function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var numberToDouble = Kotlin.numberToDouble;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var equals = Kotlin.equals;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var L2000 = Kotlin.Long.fromInt(2000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var Random = Kotlin.kotlin.random.Random;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  CubeTutorial.prototype = Object.create(KotlinObject.prototype);
  CubeTutorial.prototype.constructor = CubeTutorial;
  AdventureCharacter.prototype = Object.create(KotlinObject.prototype);
  AdventureCharacter.prototype.constructor = AdventureCharacter;
  InteractiveCube.prototype = Object.create(KotlinObject.prototype);
  InteractiveCube.prototype.constructor = InteractiveCube;
  HelloBlueprint.prototype = Object.create(KotlinObject.prototype);
  HelloBlueprint.prototype.constructor = HelloBlueprint;
  HelloBlueprints.prototype = Object.create(KotlinObject.prototype);
  HelloBlueprints.prototype.constructor = HelloBlueprints;
  Bunny.prototype = Object.create(KotlinObject.prototype);
  Bunny.prototype.constructor = Bunny;
  BunnyMark.prototype = Object.create(KotlinObject.prototype);
  BunnyMark.prototype.constructor = BunnyMark;
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
  Coin.prototype = Object.create(KotlinObject.prototype);
  Coin.prototype.constructor = Coin;
  Sonic.prototype = Object.create(KotlinObject.prototype);
  Sonic.prototype.constructor = Sonic;
  ThirdPerson.prototype = Object.create(KotlinObject.prototype);
  ThirdPerson.prototype.constructor = ThirdPerson;
  HelloTutorial.prototype = Object.create(KotlinObject.prototype);
  HelloTutorial.prototype.constructor = HelloTutorial;
  function CubeTutorial() {
    KotlinObject.call(this);
    this.accumulatedDeltaTime = 0.0;
  }
  CubeTutorial.prototype.Tick = function (deltaTime) {
    var actor = GetOwner(this);
    this.accumulatedDeltaTime += deltaTime;
    var x = this.accumulatedDeltaTime;
    actor.Yaw = 45.0 * Math_0.cos(x);
    actor.SetActorRotation(Rotator_0(void 0, void 0, actor.Yaw), false);
  };
  CubeTutorial.prototype.BeginOverlap = function (other) {
    println("I've been changed! Collided with " + other + '!');
    return '';
  };
  CubeTutorial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CubeTutorial',
    interfaces: []
  };
  function AdventureCharacter() {
    KotlinObject.call(this);
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyInteract = new KeyListener('E');
    this.actor = GetOwner(this);
    this.movementComponent = this.actor.GetMovementComponent();
    this.actor.CapsuleComponent.CapsuleRadius = 42.0;
    this.actor.CapsuleComponent.CapsuleHalfHeight = 96.0;
    this.actor.bUseControllerRotationPitch = false;
    this.actor.bUseControllerRotationRoll = false;
    this.actor.bUseControllerRotationYaw = false;
    this.actor.CharacterMovement.bOrientRotationToMovement = true;
    this.actor.CharacterMovement.RotationRate = Rotator.MakeRotator(0, 0, 540);
    var ANI_AnimationBP = AnimBlueprint.Load('/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP').GeneratedClass;
    this.actor.Mesh.SetAnimInstanceClass(ANI_AnimationBP);
    this.actor.Mesh.RelativeRotation = Rotator.MakeRotator(0, 0, 270);
    this.actor.Mesh.RelativeLocation = Vector.MakeVector(0, 0, -96);
    var myPlayerController = GWorld.GetPlayerController(0);
    myPlayerController.Possess(this.actor);
  }
  AdventureCharacter.prototype.Tick = function (deltaTime) {
    if (this.keyLeft.down()) {
      this.MoveRight_14dthe$(-1.0);
    }if (this.keyRight.down()) {
      this.MoveRight_14dthe$(1.0);
    }if (this.keyUp.down()) {
      this.MoveForward_14dthe$(1.0);
    }if (this.keyDown.down()) {
      this.MoveForward_14dthe$(-1.0);
    }if (this.keyInteract.pressed()) {
      InteractionManager_getInstance().interact();
    }this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
  };
  AdventureCharacter.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  AdventureCharacter.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  AdventureCharacter.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  AdventureCharacter.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  AdventureCharacter.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  AdventureCharacter.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  AdventureCharacter.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  AdventureCharacter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AdventureCharacter',
    interfaces: []
  };
  function InteractionManager() {
    InteractionManager_instance = this;
    this.nullInteractiveObject_0 = new InteractionManager$nullInteractiveObject$ObjectLiteral();
    this.selected = this.nullInteractiveObject_0;
    var $receiver = Job();
    $receiver.complete();
    this.job_0 = $receiver;
    this.coroutineContext_4et243$_0 = coroutines.Dispatchers.Default;
  }
  function Coroutine$InteractionManager$select$lambda(this$InteractionManager_0, closure$interactiveObject_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$InteractionManager = this$InteractionManager_0;
    this.local$closure$interactiveObject = closure$interactiveObject_0;
  }
  Coroutine$InteractionManager$select$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$InteractionManager$select$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$InteractionManager$select$lambda.prototype.constructor = Coroutine$InteractionManager$select$lambda;
  Coroutine$InteractionManager$select$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$InteractionManager.job_0.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$InteractionManager.selected.highlight_6taknv$(false);
            var tmp$ = this.local$this$InteractionManager;
            var $receiver = this.local$closure$interactiveObject;
            $receiver.highlight_6taknv$(true);
            return tmp$.selected = $receiver, Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function InteractionManager$select$lambda(this$InteractionManager_0, closure$interactiveObject_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$InteractionManager$select$lambda(this$InteractionManager_0, closure$interactiveObject_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  InteractionManager.prototype.select_tsf84i$ = function (interactiveObject) {
    launch(this, void 0, void 0, InteractionManager$select$lambda(this, interactiveObject));
  };
  function Coroutine$InteractionManager$release$lambda(this$InteractionManager_0, closure$interactiveObject_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$InteractionManager = this$InteractionManager_0;
    this.local$closure$interactiveObject = closure$interactiveObject_0;
  }
  Coroutine$InteractionManager$release$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$InteractionManager$release$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$InteractionManager$release$lambda.prototype.constructor = Coroutine$InteractionManager$release$lambda;
  Coroutine$InteractionManager$release$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$InteractionManager.job_0.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$interactiveObject.highlight_6taknv$(false);
            if (equals(this.local$this$InteractionManager.selected, this.local$closure$interactiveObject)) {
              return this.local$this$InteractionManager.selected = this.local$this$InteractionManager.nullInteractiveObject_0, Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function InteractionManager$release$lambda(this$InteractionManager_0, closure$interactiveObject_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$InteractionManager$release$lambda(this$InteractionManager_0, closure$interactiveObject_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  InteractionManager.prototype.release_tsf84i$ = function (interactiveObject) {
    launch(this, void 0, void 0, InteractionManager$release$lambda(this, interactiveObject));
  };
  function Coroutine$InteractionManager$interact$lambda(this$InteractionManager_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$InteractionManager = this$InteractionManager_0;
  }
  Coroutine$InteractionManager$interact$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$InteractionManager$interact$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$InteractionManager$interact$lambda.prototype.constructor = Coroutine$InteractionManager$interact$lambda;
  Coroutine$InteractionManager$interact$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$InteractionManager.selected.doAction(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function InteractionManager$interact$lambda(this$InteractionManager_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$InteractionManager$interact$lambda(this$InteractionManager_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  InteractionManager.prototype.interact = function () {
    if (this.job_0.isActive || equals(this.selected, this.nullInteractiveObject_0))
      return;
    this.job_0 = launch(this, void 0, void 0, InteractionManager$interact$lambda(this));
  };
  Object.defineProperty(InteractionManager.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_4et243$_0;
    }
  });
  function InteractionManager$nullInteractiveObject$ObjectLiteral() {
  }
  InteractionManager$nullInteractiveObject$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [InteractiveObject]
  };
  InteractionManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InteractionManager',
    interfaces: [CoroutineScope]
  };
  var InteractionManager_instance = null;
  function InteractionManager_getInstance() {
    if (InteractionManager_instance === null) {
      new InteractionManager();
    }return InteractionManager_instance;
  }
  function InteractiveObject() {
  }
  InteractiveObject.prototype.highlight_6taknv$ = function (enable) {
  };
  InteractiveObject.prototype.doAction = function (continuation) {
  };
  InteractiveObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InteractiveObject',
    interfaces: []
  };
  function InteractiveCube() {
    KotlinObject.call(this);
    this.actor = GetOwner(this);
    this.mesh = this.actor.GetComponentByClass(StaticMeshComponent);
  }
  InteractiveCube.prototype.highlight_6taknv$ = function (enable) {
    this.mesh.SetRenderCustomDepth(enable);
  };
  function Coroutine$doAction($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$widget = void 0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$doAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doAction.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doAction.prototype.constructor = Coroutine$doAction;
  Coroutine$doAction.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$widget = GWorld.Create(this.$this.actor.Widget, GWorld.GetPlayerController(0));
            this.local$widget.AddToViewport(0);
            this.local$$receiver = this.$this.actor.Texts;
            this.local$tmp$ = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$tmp$ === this.local$$receiver.length) {
              this.state_0 = 5;
              continue;
            }
            var element = this.local$$receiver[this.local$tmp$];
            this.local$widget.SetText(element);
            this.state_0 = 3;
            this.result_0 = delay(L2000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            ++this.local$tmp$;
            this.state_0 = 2;
            continue;
          case 5:
            this.local$widget.RemoveFromViewport();
            this.local$widget.DestroyUObject();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InteractiveCube.prototype.doAction = function (continuation_0, suspended) {
    var instance = new Coroutine$doAction(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  InteractiveCube.prototype.BeginOverlap = function (other) {
    InteractionManager_getInstance().select_tsf84i$(this);
    return '';
  };
  InteractiveCube.prototype.EndOverlap = function (other) {
    InteractionManager_getInstance().release_tsf84i$(this);
  };
  InteractiveCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractiveCube',
    interfaces: [InteractiveObject]
  };
  function HelloBlueprint() {
    KotlinObject.call(this);
    this.actor = null;
    this.yaw = 0.0;
    var owner = GetOwner(this);
    this.actor = this.Root.Spawn(owner.ActorToSpawn, Vector_0(1), Rotator_0(void 0, void 0, this.yaw));
  }
  HelloBlueprint.prototype.Tick = function (deltaTime) {
    this.yaw += 100.0 * deltaTime;
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
  };
  HelloBlueprint.prototype.BeginOverlap = function (other) {
    return '';
  };
  HelloBlueprint.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  HelloBlueprint.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
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
    this.owner = GetOwner(this);
    for (var i = 0; i <= 10; i++)
      this.actorList.add_11rb$(this.createActor_u22e3q$(this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(-this.WIDTH, this.WIDTH), this.rnd_lu1900$(0.0, 360.0)));
  }
  HelloBlueprints.prototype.rnd_lu1900$ = function (min, max) {
    return min + Random.Default.nextDouble() * (max - min);
  };
  HelloBlueprints.prototype.createActor_u22e3q$ = function (x, y, yaw) {
    var $receiver = this.Root.Spawn(this.owner.ActorToSpawn, Vector_0(x, y), Rotator_0(void 0, void 0, yaw));
    $receiver.SetActorRotation(Rotator_0(void 0, void 0, yaw), false);
    return $receiver;
  };
  HelloBlueprints.prototype.Tick = function (deltaTime) {
    var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.AddActorLocalRotation(Rotator_0(void 0, void 0, 1), false);
    }
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
  HelloBlueprints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloBlueprints',
    interfaces: []
  };
  function Bunny() {
    Bunny$Companion_getInstance();
    KotlinObject.call(this);
    this.actor = GetOwner(this);
    this.speedXf = 0.0;
    this.speedYf = 0.0;
    this.xf = 0.0;
    this.yf = 0.0;
    this.zf = 0.0;
    this.pos = Vector_0(this.xf, this.yf, this.zf);
    this.yf = Random.Default.nextInt_za3lpa$(20) * 40.0;
    this.speedXf = Random.Default.nextFloat() * 10;
    this.speedYf = Random.Default.nextFloat() * 10 - 5;
  }
  function Bunny$Companion() {
    Bunny$Companion_instance = this;
    this.maxX = 800.0;
    this.minX = 0.0;
    this.maxY = 668.0;
    this.minY = 0.0;
    this.gravity = 0.5;
  }
  Bunny$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bunny$Companion_instance = null;
  function Bunny$Companion_getInstance() {
    if (Bunny$Companion_instance === null) {
      new Bunny$Companion();
    }return Bunny$Companion_instance;
  }
  Bunny.prototype.Tick = function (deltaTime) {
    this.xf += this.speedXf;
    this.zf -= this.speedYf;
    this.speedYf += Bunny$Companion_getInstance().gravity;
    if (this.xf > Bunny$Companion_getInstance().maxX) {
      this.speedXf *= -1;
      this.xf = Bunny$Companion_getInstance().maxX;
    } else if (this.xf < Bunny$Companion_getInstance().minX) {
      this.speedXf *= -1;
      this.xf = Bunny$Companion_getInstance().minX;
    }if (this.zf < Bunny$Companion_getInstance().minY) {
      this.speedYf *= -0.85;
      this.zf = Bunny$Companion_getInstance().minY;
      if (Random.Default.nextFloat() > 0.5) {
        this.speedYf -= Random.Default.nextFloat() * 6;
      }} else if (this.zf > Bunny$Companion_getInstance().maxY) {
      this.speedYf = 0.0;
      this.zf = Bunny$Companion_getInstance().maxY;
    }this.pos.X = this.xf;
    this.pos.Y = this.yf;
    this.pos.Z = this.zf;
    this.actor.SetActorLocation(this.pos, false);
  };
  Bunny.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bunny',
    interfaces: []
  };
  function BunnyMark() {
    KotlinObject.call(this);
    this.actorList = ArrayList_init();
    this.owner = GetOwner(this);
    this.keySpawnKoltinBunny = new KeyListener('K');
    this.keySpawnBlueprintBunny = new KeyListener('B');
    this.keySpawnKotlinOptimizedBunny = new KeyListener('O');
    this.spawnedBunnies = 0;
  }
  BunnyMark.prototype.spawnBunnies_btcm9r$ = function (type) {
    for (var i = 1; i <= 10; i++)
      this.createActor_btcm9r$(type);
    this.spawnedBunnies = this.spawnedBunnies + 10 | 0;
    println('Bunnies: ' + this.spawnedBunnies);
  };
  BunnyMark.prototype.spawnOptimizedBunnies_btcm9r$ = function (type) {
    for (var i = 1; i <= 10; i++)
      this.actorList.add_11rb$(new OptimizedBunny(this.createActor_btcm9r$(type)));
    println('Bunnies: ' + this.actorList.size);
  };
  BunnyMark.prototype.createActor_btcm9r$ = function (type) {
    return this.Root.Spawn(type, new Vector(), new Rotator());
  };
  BunnyMark.prototype.Tick = function (deltaTime) {
    if (this.keySpawnKoltinBunny.pressed()) {
      this.spawnBunnies_btcm9r$(this.owner.KotlinBunny);
    }if (this.keySpawnBlueprintBunny.pressed()) {
      this.spawnBunnies_btcm9r$(this.owner.BlueprintBunny);
    }if (this.keySpawnKotlinOptimizedBunny.pressed()) {
      this.spawnOptimizedBunnies_btcm9r$(this.owner.KotlinOptimizedBunny);
    }var tmp$;
    tmp$ = this.actorList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.Tick_mx4ult$(deltaTime);
    }
  };
  BunnyMark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BunnyMark',
    interfaces: []
  };
  function OptimizedBunny(actor) {
    OptimizedBunny$Companion_getInstance();
    this.actor = actor;
    this.speedXf = 0.0;
    this.speedYf = 0.0;
    this.xf = 0.0;
    this.yf = 0.0;
    this.zf = 0.0;
    this.pos = Vector_0(this.xf, this.yf, this.zf);
    this.yf = Random.Default.nextInt_za3lpa$(20) * 40.0;
    this.speedXf = Random.Default.nextFloat() * 10;
    this.speedYf = Random.Default.nextFloat() * 10 - 5;
  }
  function OptimizedBunny$Companion() {
    OptimizedBunny$Companion_instance = this;
    this.maxX = 800.0;
    this.minX = 0.0;
    this.maxY = 668.0;
    this.minY = 0.0;
    this.gravity = 0.5;
  }
  OptimizedBunny$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OptimizedBunny$Companion_instance = null;
  function OptimizedBunny$Companion_getInstance() {
    if (OptimizedBunny$Companion_instance === null) {
      new OptimizedBunny$Companion();
    }return OptimizedBunny$Companion_instance;
  }
  OptimizedBunny.prototype.Tick_mx4ult$ = function (deltaTime) {
    this.xf += this.speedXf;
    this.zf -= this.speedYf;
    this.speedYf += OptimizedBunny$Companion_getInstance().gravity;
    if (this.xf > OptimizedBunny$Companion_getInstance().maxX) {
      this.speedXf *= -1;
      this.xf = OptimizedBunny$Companion_getInstance().maxX;
    } else if (this.xf < OptimizedBunny$Companion_getInstance().minX) {
      this.speedXf *= -1;
      this.xf = OptimizedBunny$Companion_getInstance().minX;
    }if (this.zf < OptimizedBunny$Companion_getInstance().minY) {
      this.speedYf *= -0.85;
      this.zf = OptimizedBunny$Companion_getInstance().minY;
      if (Random.Default.nextFloat() > 0.5) {
        this.speedYf -= Random.Default.nextFloat() * 6;
      }} else if (this.zf > OptimizedBunny$Companion_getInstance().maxY) {
      this.speedYf = 0.0;
      this.zf = OptimizedBunny$Companion_getInstance().maxY;
    }this.pos.X = this.xf;
    this.pos.Y = this.yf;
    this.pos.Z = this.zf;
    this.actor.SetActorLocation(this.pos, false);
  };
  OptimizedBunny.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptimizedBunny',
    interfaces: []
  };
  function RedRotatingCube() {
    KotlinObject.call(this);
    this.touched = 0;
  }
  RedRotatingCube.prototype.Tick = function (deltaTime) {
    var actor = GetOwner(this);
    if (actor.actorToCopy != null) {
      actor.SetActorRotation(Rotator_0(void 0, void 0, ensureNotNull(actor.actorToCopy).Yaw), false);
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
    actor.SetActorRotation(Rotator_0(void 0, void 0, actor.Yaw), false);
  };
  WhiteRotatingCube.prototype.BeginOverlap = function (other) {
    this.touched = this.touched + 1 | 0;
    return 'touched ' + this.touched + ' times';
  };
  WhiteRotatingCube.prototype.OnDestroyed = function () {
    println('OnDestroyed');
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
    var owner = GetOwner(this);
    this.actor = this.Root.Spawn(owner.FirstPerson_BP, new Vector(), new Rotator());
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
    var FP_mesh = owner.SK_Mannequin_Arms;
    var FPGun_mesh = owner.SK_FPGun;
    var ANI_AnimationBP = owner.FirstPerson_AnimBP.GeneratedClass;
    this.fireSound = owner.FirstPersonTemplateWeaponFire02;
    this.fireAnimation = owner.FirstPersonFire_Montage;
    this.myFPMesh.SetSkeletalMesh(FP_mesh, false);
    this.myFPGunMesh.SetSkeletalMesh(FPGun_mesh, false);
    this.myFPMesh.SetAnimInstanceClass(ANI_AnimationBP);
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
    }};
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
    this.owner = GetOwner(this);
    var tmp$;
    this.actor = this.Root.Spawn(this.owner.FirstPerson_BP, new Vector(), new Rotator());
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
    var FP_mesh = this.owner.SK_Mannequin_Arms;
    var FPGun_mesh = this.owner.SK_FPGun;
    var ANI_AnimationBP = this.owner.FirstPerson_AnimBP;
    this.fireSound = this.owner.FirstPersonTemplateWeaponFire02;
    this.fireAnimation = this.owner.FirstPersonFire_Montage;
    this.myFPMesh.SetSkeletalMesh(FP_mesh, false);
    this.myFPGunMesh.SetSkeletalMesh(FPGun_mesh, false);
    this.myFPMesh.SetAnimInstanceClass(ANI_AnimationBP);
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
    var tempStartTrace = tempCamera.GetWorldLocation();
    var tempForwardDirection = tempCamera.GetWorldRotation().GetForwardVector();
    var tempOffset = tempForwardDirection.Multiply_VectorFloat(this.weaponRange);
    var tempEndTrace = Vector.Add_VectorVector(tempStartTrace, tempOffset);
    var tempHitResult = new HitResult();
    GWorld.LineTraceByChannel(tempStartTrace, tempEndTrace, 'TraceTypeQuery2', false, [this.actor], 'ForDuration', tempHitResult, true, LinearColor_0(1, 0, 0), LinearColor_0(1, 0, 0), 3);
    var damageActor = tempHitResult.Actor;
    var damageComponent = tempHitResult.Component;
    if (damageActor != null && contains(damageActor.GetName(), 'AI')) {
      var aiActor = damageActor;
      if (!ensureNotNull(damageComponent).IsAnySimulatingPhysics()) {
        damageActor.Kill();
        var aiController = aiActor.GetAIController();
        var actorController = aiActor.GetController();
        var movementController = aiActor.GetMovementComponent();
        movementController.StopMovementImmediately();
        damageComponent.SetSimulatePhysics(true);
      }}if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics('')) {
      var tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage);
      damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, '');
    }};
  Game.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
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
    return this.Root.Spawn(this.owner.CubeBP, new Vector(), new Rotator());
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function KotlinLogo() {
    KotlinObject.call(this);
    this.yaw = 0.0;
    this.owner = GetOwner(this);
  }
  KotlinLogo.prototype.Tick = function (deltaTime) {
    var actor = GetOwner(this);
    this.yaw += 100 * deltaTime;
    actor.SetActorRotation(Rotator_0(90.0, void 0, this.yaw), false);
  };
  KotlinLogo.prototype.BeginOverlap = function (other) {
    this.spawnAICubes();
    GetOwner(this).DestroyActor();
    return 'touched';
  };
  KotlinLogo.prototype.createAIKube_atrclb$ = function (position) {
    return this.Root.Spawn(this.owner.AIKubeController, position, new Rotator());
  };
  KotlinLogo.prototype.createAIController = function () {
    return this.Root.Spawn(this.owner.CubeAI, new Vector(), new Rotator());
  };
  KotlinLogo.prototype.spawnAICubes = function () {
    for (var y = 0; y <= 7; y++) {
      for (var z = 0; z <= 3; z++) {
        var $receiver = this.createAIKube_atrclb$(Vector_0(2500.0 + (z * 150 | 0), -450.0 + (y * 150 | 0), 100));
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
    GetOwner(this).DestroyActor();
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
    KotlinObject.call(this);
  }
  Switch.prototype.BeginOverlap = function (other) {
    var tmp$;
    var actor = GetOwner(this);
    (tmp$ = actor.Lock) != null ? (tmp$.DestroyActor(), Unit) : null;
    var plate = actor.GetComponentByClass(StaticMeshComponent);
    var button = GetComponentByName(actor, StaticMeshComponent, 'Button');
    button.SetRelativeLocation(Vector_0(0, 20, 0), false);
    plate.SetMaterial(0, button.GetMaterial(0));
    return 'Lock opened';
  };
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
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
  };
  HelloKotlin.prototype.BeginOverlap = function (other) {
    return '';
  };
  HelloKotlin.prototype.OnDestroyed = function () {
    println('OnDestroyed');
  };
  HelloKotlin.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
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
    actor.SetActorRotation(Rotator_0(void 0, this.yaw), false);
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
  DelegatedCylinder.prototype.EndOverlap = function (other) {
    return this.$delegate_159cgl$_0.EndOverlap(other);
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
    this.actor.SetActorRotation(Rotator_0(void 0, void 0, this.yaw), false);
    if (this.keyLeft.down()) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, -1), false);
    }if (this.keyRight.down()) {
      this.actor.AddActorWorldOffset(Vector_0(void 0, 1), false);
    }if (this.keyUp.down()) {
      this.actor.AddActorWorldOffset(Vector_0(1), false);
    }if (this.keyDown.down()) {
      this.actor.AddActorWorldOffset(Vector_0(-1), false);
    }};
  KeyboardInput.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
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
      element.DestroyActor();
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
    var mi = KismetMaterialLibrary.CreateDynamicMaterialInstance(GWorld, mtrl, '', '');
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
        a.SetActorRotation(Rotator_0(void 0, Random.Default.nextDouble() * 180, tmp$), false);
      }
    }
  };
  SceneLights.prototype.skel_atrclb$ = function (p) {
    var resource = SkeletalMesh.Load('/Game/Mannequin/Character/Mesh/SK_Mannequin');
    var actor = new SkeletalMeshActor(GWorld, p.Add_VectorVector(Vector_0(void 0, void 0, 50)));
    actor.SkeletalMeshComponent.SetSkeletalMesh(resource, false);
    actor.SetActorRotation(Rotator_0(void 0, void 0, 90), false);
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
  function Coin() {
    KotlinObject.call(this);
    this.actor = GetOwner(this);
  }
  Coin.prototype.Tick = function (deltaTime) {
    this.actor.AddActorLocalRotation(Rotator_0(void 0, void 0, 150 * deltaTime), false);
  };
  Coin.prototype.BeginOverlap = function (other) {
    this.actor.DestroyActor();
    return '';
  };
  Coin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coin',
    interfaces: []
  };
  function Sonic() {
    KotlinObject.call(this);
    this.MIN_JUMP_Z_VELOCITY = 200.0;
    this.keyLeft = new KeyListener('A');
    this.keyRight = new KeyListener('D');
    this.keyUp = new KeyListener('W');
    this.keyDown = new KeyListener('S');
    this.keyJump = new KeyListener('SpaceBar');
    this.actor = GetOwner(this);
    this.movementComponent = this.actor.GetMovementComponent();
    var myPlayerController = GWorld.GetPlayerController(0);
    myPlayerController.Possess(this.actor);
    this.actor.bUseControllerRotationPitch = false;
    this.actor.bUseControllerRotationRoll = false;
    this.actor.bUseControllerRotationYaw = false;
    this.actor.CharacterMovement.bOrientRotationToMovement = true;
    this.actor.CharacterMovement.RotationRate = Rotator.MakeRotator(0, 0, 540);
    this.actor.CharacterMovement.JumpZVelocity = 650;
    this.actor.CharacterMovement.AirControl = 0.8;
  }
  Sonic.prototype.Tick = function (deltaTime) {
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
      var velocity = this.movementComponent.Velocity;
      if (numberToDouble(velocity.Z) > this.MIN_JUMP_Z_VELOCITY) {
        var tmp$ = this.movementComponent;
        var Z = this.MIN_JUMP_Z_VELOCITY;
        tmp$.Velocity = Vector_0(velocity.X, velocity.Y, Z);
      }this.stopJump();
    }this.Turn_14dthe$(this.axisTurn());
    this.LookUp_14dthe$(this.axisLookUp());
  };
  Sonic.prototype.Turn_14dthe$ = function (value) {
    this.actor.AddControllerYawInput(value);
  };
  Sonic.prototype.LookUp_14dthe$ = function (value) {
    this.actor.AddControllerPitchInput(value);
  };
  Sonic.prototype.MoveForward_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tForwardVector = tPawnRotator.GetForwardVector();
    this.actor.AddMovementInput(tForwardVector, value, false);
  };
  Sonic.prototype.MoveRight_14dthe$ = function (value) {
    var tPawnRotator = this.actor.GetControlRotation();
    tPawnRotator.Pitch = 0;
    tPawnRotator.Roll = 0;
    var tRightVector = tPawnRotator.GetRightVector();
    this.actor.AddMovementInput(tRightVector, value, false);
  };
  Sonic.prototype.startJump = function () {
    this.actor.Jump();
  };
  Sonic.prototype.stopJump = function () {
    this.actor.StopJumping();
  };
  Sonic.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
  };
  Sonic.prototype.axisTurn = function () {
    return numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaX);
  };
  Sonic.prototype.axisLookUp = function () {
    return -numberToDouble(GWorld.GetPlayerController(0).GetInputMouseDelta().DeltaY);
  };
  Sonic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sonic',
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
    this.actor.Mesh.SetAnimInstanceClass(ANI_AnimationBP);
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
    this.actor.DestroyActor();
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
  function HelloTutorial() {
    KotlinObject.call(this);
    println('Hello World!');
  }
  HelloTutorial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloTutorial',
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
    instance.Root = ComponentRoot;
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
  var withX = defineInlineFunction('kotlin-examples.ue.withX_7qok4o$', wrapFunction(function () {
    var Vector = _.ue.Vector_a2j3zq$;
    return function ($receiver, X) {
      if (X === void 0)
        X = 0.0;
      return Vector(X, $receiver.Y, $receiver.Z);
    };
  }));
  var withY = defineInlineFunction('kotlin-examples.ue.withY_7qok4o$', wrapFunction(function () {
    var Vector = _.ue.Vector_a2j3zq$;
    return function ($receiver, Y) {
      if (Y === void 0)
        Y = 0.0;
      return Vector($receiver.X, Y, $receiver.Z);
    };
  }));
  var withZ = defineInlineFunction('kotlin-examples.ue.withZ_7qok4o$', wrapFunction(function () {
    var Vector = _.ue.Vector_a2j3zq$;
    return function ($receiver, Z) {
      if (Z === void 0)
        Z = 0.0;
      return Vector($receiver.X, $receiver.Y, Z);
    };
  }));
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
  var withR = defineInlineFunction('kotlin-examples.ue.withR_624pw9$', wrapFunction(function () {
    var LinearColor = _.ue.LinearColor_1ugm5o$;
    return function ($receiver, R) {
      if (R === void 0)
        R = 0.0;
      return LinearColor(R, $receiver.G, $receiver.B, $receiver.A);
    };
  }));
  var withG = defineInlineFunction('kotlin-examples.ue.withG_624pw9$', wrapFunction(function () {
    var LinearColor = _.ue.LinearColor_1ugm5o$;
    return function ($receiver, G) {
      if (G === void 0)
        G = 0.0;
      return LinearColor($receiver.R, G, $receiver.B, $receiver.A);
    };
  }));
  var withB = defineInlineFunction('kotlin-examples.ue.withB_624pw9$', wrapFunction(function () {
    var LinearColor = _.ue.LinearColor_1ugm5o$;
    return function ($receiver, B) {
      if (B === void 0)
        B = 0.0;
      return LinearColor($receiver.R, $receiver.G, B, $receiver.A);
    };
  }));
  var withA = defineInlineFunction('kotlin-examples.ue.withA_624pw9$', wrapFunction(function () {
    var LinearColor = _.ue.LinearColor_1ugm5o$;
    return function ($receiver, A) {
      if (A === void 0)
        A = 0.0;
      return LinearColor($receiver.R, $receiver.G, $receiver.B, A);
    };
  }));
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
  var withRoll = defineInlineFunction('kotlin-examples.ue.withRoll_opltre$', wrapFunction(function () {
    var Rotator = _.ue.Rotator_a2j3zq$;
    return function ($receiver, Roll) {
      if (Roll === void 0)
        Roll = 0.0;
      return Rotator(Roll, $receiver.Pitch, $receiver.Yaw);
    };
  }));
  var withPitch = defineInlineFunction('kotlin-examples.ue.withPitch_opltre$', wrapFunction(function () {
    var Rotator = _.ue.Rotator_a2j3zq$;
    return function ($receiver, Pitch) {
      if (Pitch === void 0)
        Pitch = 0.0;
      return Rotator($receiver.Roll, Pitch, $receiver.Yaw);
    };
  }));
  var withYaw = defineInlineFunction('kotlin-examples.ue.withYaw_opltre$', wrapFunction(function () {
    var Rotator = _.ue.Rotator_a2j3zq$;
    return function ($receiver, Yaw) {
      if (Yaw === void 0)
        Yaw = 0.0;
      return Rotator($receiver.Roll, $receiver.Pitch, Yaw);
    };
  }));
  function GetComponentByName($receiver, ComponentClass, Name) {
    var nameToCheck = Name.toLowerCase();
    var $receiver_0 = $receiver.GetComponentsByClass(ComponentClass);
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (equals(element.GetName().toLowerCase(), nameToCheck))
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
  _.CubeTutorial = CubeTutorial;
  _.AdventureCharacter = AdventureCharacter;
  var package$examples = _.examples || (_.examples = {});
  var package$adventure = package$examples.adventure || (package$examples.adventure = {});
  Object.defineProperty(package$adventure, 'InteractionManager', {
    get: InteractionManager_getInstance
  });
  package$adventure.InteractiveObject = InteractiveObject;
  _.InteractiveCube = InteractiveCube;
  _.HelloBlueprint = HelloBlueprint;
  _.HelloBlueprints = HelloBlueprints;
  Object.defineProperty(Bunny, 'Companion', {
    get: Bunny$Companion_getInstance
  });
  _.Bunny = Bunny;
  _.BunnyMark = BunnyMark;
  Object.defineProperty(OptimizedBunny, 'Companion', {
    get: OptimizedBunny$Companion_getInstance
  });
  _.OptimizedBunny = OptimizedBunny;
  _.RedRotatingCube = RedRotatingCube;
  _.WhiteRotatingCube = WhiteRotatingCube;
  _.FirstPerson = FirstPerson;
  _.Game = Game;
  _.KotlinLogo = KotlinLogo;
  Object.defineProperty(Pickup, 'Companion', {
    get: Pickup$Companion_getInstance
  });
  _.Pickup = Pickup;
  _.Switch = Switch;
  _.HelloKotlin = HelloKotlin;
  _.BaseCylinder = BaseCylinder;
  _.CustomCylinder = CustomCylinder;
  _.DelegatedCylinder = DelegatedCylinder;
  _.ICylinder = ICylinder;
  _.KeyboardInput = KeyboardInput;
  _.SceneLights = SceneLights;
  _.Coin = Coin;
  $$importsForInline$$['kotlin-examples'] = _;
  _.Sonic = Sonic;
  _.ThirdPerson = ThirdPerson;
  _.HelloTutorial = HelloTutorial;
  _.init = init;
  _.cleanup = cleanup;
  _.GetOwner_yjkk8i$ = GetOwner;
  _.unrealProxyClass = unrealProxyClass;
  var package$ue = _.ue || (_.ue = {});
  package$ue.GenerateClass_6p5t4y$ = GenerateClass;
  package$ue.GenerateClass_4gucm0$ = GenerateClass_0;
  package$ue.Vector_a2j3zq$ = Vector_0;
  package$ue.withX_7qok4o$ = withX;
  package$ue.withY_7qok4o$ = withY;
  package$ue.withZ_7qok4o$ = withZ;
  package$ue.LinearColor_1ugm5o$ = LinearColor_0;
  package$ue.withR_624pw9$ = withR;
  package$ue.withG_624pw9$ = withG;
  package$ue.withB_624pw9$ = withB;
  package$ue.withA_624pw9$ = withA;
  package$ue.Rotator_a2j3zq$ = Rotator_0;
  package$ue.withRoll_opltre$ = withRoll;
  package$ue.withPitch_opltre$ = withPitch;
  package$ue.withYaw_opltre$ = withYaw;
  package$ue.GetComponentByName_4wsm31$ = GetComponentByName;
  package$ue.Key_61zpoe$ = Key_0;
  package$ue.KeyListener = KeyListener;
  InteractionManager$nullInteractiveObject$ObjectLiteral.prototype.highlight_6taknv$ = InteractiveObject.prototype.highlight_6taknv$;
  InteractionManager$nullInteractiveObject$ObjectLiteral.prototype.doAction = InteractiveObject.prototype.doAction;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-coroutines-core')));
