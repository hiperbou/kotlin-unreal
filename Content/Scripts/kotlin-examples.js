(function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var JsMath = Math;
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
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var L16 = Kotlin.Long.fromInt(16);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var L2000 = Kotlin.Long.fromInt(2000);
  var Annotation = Kotlin.kotlin.Annotation;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var throwCCE = Kotlin.throwCCE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwUPAE = Kotlin.throwUPAE;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var L300 = Kotlin.Long.fromInt(300);
  var Random = Kotlin.kotlin.random.Random;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Any = Object;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  CubeTutorial.prototype = Object.create(KotlinObject.prototype);
  CubeTutorial.prototype.constructor = CubeTutorial;
  AdventureCharacter.prototype = Object.create(KotlinObject.prototype);
  AdventureCharacter.prototype.constructor = AdventureCharacter;
  InteractiveObjectBase.prototype = Object.create(KotlinObject.prototype);
  InteractiveObjectBase.prototype.constructor = InteractiveObjectBase;
  InteractiveChest.prototype = Object.create(InteractiveObjectBase.prototype);
  InteractiveChest.prototype.constructor = InteractiveChest;
  InteractiveCube.prototype = Object.create(InteractiveObjectBase.prototype);
  InteractiveCube.prototype.constructor = InteractiveCube;
  GameHud$InputMode.prototype = Object.create(Enum.prototype);
  GameHud$InputMode.prototype.constructor = GameHud$InputMode;
  GameHud.prototype = Object.create(KotlinObject.prototype);
  GameHud.prototype.constructor = GameHud;
  InteractiveThing.prototype = Object.create(KotlinObject.prototype);
  InteractiveThing.prototype.constructor = InteractiveThing;
  Room$Direction.prototype = Object.create(Enum.prototype);
  Room$Direction.prototype.constructor = Room$Direction;
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
    actor.Yaw = 45.0 * JsMath.cos(x);
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
    if (this.keyInteract.pressed()) {
      InteractionManager_getInstance().interact();
    }
    this.Turn_14dthe$(this.axisTurn());
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
          default:
            this.state_0 = 1;
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
          default:
            this.state_0 = 1;
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
          default:
            this.state_0 = 1;
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
    }
    return InteractionManager_instance;
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
  function InteractiveChest() {
    InteractiveObjectBase.call(this);
    this.actor = GetOwner(this);
    this.opened = false;
    this.sequencePlayed = false;
  }
  function Coroutine$doAction($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
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
            if (!this.$this.sequencePlayed) {
              this.$this.sequencePlayed = true;
              this.$this.playSequence_0(this.$this.actor.Sequence);
            }

            this.local$tmp$ = (this.$this.opened ? new IntRange(-110, 0) : downTo(0, -110)).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.$this.actor.Top.SetRelativeRotation(Rotator_0(0, element, 0), false);
            this.state_0 = 3;
            this.result_0 = delay(L16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.$this.opened = !this.$this.opened;
            return;
          default:
            this.state_0 = 1;
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
  InteractiveChest.prototype.doAction = function (continuation_0, suspended) {
    var instance = new Coroutine$doAction(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function InteractiveChest$playSequence$lambda$lambda(this$) {
    return function () {
      this$.DestroyActor();
      return Unit;
    };
  }
  InteractiveChest.prototype.playSequence_0 = function (sequence) {
    var $receiver = new MovieSceneSequencePlaybackSettings();
    $receiver.bDisableMovementInput = true;
    $receiver.bDisableLookAtInput = true;
    var settings = $receiver;
    var $receiver_0 = LevelSequencePlayer.CreateLevelSequencePlayer(GWorld, sequence, settings).OutActor;
    $receiver_0.SequencePlayer.Play();
    $receiver_0.SequencePlayer.OnFinished.Add(InteractiveChest$playSequence$lambda$lambda($receiver_0));
  };
  InteractiveChest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractiveChest',
    interfaces: [InteractiveObjectBase]
  };
  function InteractiveCube() {
    InteractiveObjectBase.call(this);
    this.actor = GetOwner(this);
  }
  function Coroutine$doAction_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$widget = void 0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$doAction_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doAction_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doAction_0.prototype.constructor = Coroutine$doAction_0;
  Coroutine$doAction_0.prototype.doResume = function () {
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
          default:
            this.state_0 = 1;
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
    var instance = new Coroutine$doAction_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  InteractiveCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractiveCube',
    interfaces: [InteractiveObjectBase]
  };
  function InteractiveObjectBase() {
    KotlinObject.call(this);
    this.meshes_q7j1ib$_0 = GetComponentsByClass(GetOwner(this), StaticMeshComponent);
  }
  InteractiveObjectBase.prototype.highlight_6taknv$ = function (enable) {
    var $receiver = this.meshes_q7j1ib$_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.SetRenderCustomDepth(enable);
    }
  };
  InteractiveObjectBase.prototype.BeginOverlap = function (other) {
    InteractionManager_getInstance().select_tsf84i$(this);
    return '';
  };
  InteractiveObjectBase.prototype.EndOverlap = function (other) {
    InteractionManager_getInstance().release_tsf84i$(this);
  };
  InteractiveObjectBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractiveObjectBase',
    interfaces: [InteractiveObject]
  };
  function Conversation(name, sections) {
    this.name = name;
    this.sections = sections;
  }
  Conversation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Conversation',
    interfaces: []
  };
  function Section(id, condition, block) {
    if (condition === void 0)
      condition = Section_init$lambda;
    this.id = id;
    this.condition = condition;
    this.block = block;
  }
  function Section_init$lambda() {
    return true;
  }
  Section.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Section',
    interfaces: []
  };
  function ConversationOptions(options) {
    this.options = options;
  }
  function Coroutine$select_za3lpa$($this, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = index_0;
  }
  Coroutine$select_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$select_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$select_za3lpa$.prototype.constructor = Coroutine$select_za3lpa$;
  Coroutine$select_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.options.get_za3lpa$(this.local$index).block(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  ConversationOptions.prototype.select_za3lpa$ = function (index_0, continuation_0, suspended) {
    var instance = new Coroutine$select_za3lpa$(this, index_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ConversationOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationOptions',
    interfaces: []
  };
  function ConversationOption(option, block) {
    this.option = option;
    this.block = block;
  }
  ConversationOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationOption',
    interfaces: []
  };
  function ConversationDsl() {
  }
  ConversationDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationDsl',
    interfaces: [Annotation]
  };
  function ConversationBuilder() {
    this.name = '';
    this.sections_0 = ArrayList_init();
  }
  function ConversationBuilder$section$lambda() {
    return true;
  }
  ConversationBuilder.prototype.section_wopz0g$ = function (id, condition, block) {
    if (condition === void 0)
      condition = ConversationBuilder$section$lambda;
    this.sections_0.add_11rb$(new Section(id, condition, block));
  };
  ConversationBuilder.prototype.build = function () {
    return new Conversation(this.name, toList(this.sections_0));
  };
  ConversationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationBuilder',
    interfaces: []
  };
  function ConversationOptionsDsl() {
  }
  ConversationOptionsDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationOptionsDsl',
    interfaces: [Annotation]
  };
  function ConversationOptionsBuilder() {
    this.options_0 = ArrayList_init();
  }
  ConversationOptionsBuilder.prototype.times_ormu1i$ = function ($receiver, block) {
    if ($receiver.length === 0)
      return;
    this.options_0.add_11rb$(new ConversationOption($receiver, block));
  };
  ConversationOptionsBuilder.prototype.build = function () {
    return new ConversationOptions(toList(this.options_0));
  };
  ConversationOptionsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversationOptionsBuilder',
    interfaces: []
  };
  function ConversationState() {
  }
  ConversationState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ConversationState',
    interfaces: []
  };
  function dialogue(block) {
    return new Dialogue(block);
  }
  function dialogue_0(block) {
    return new Dialogue(block);
  }
  function Dialogue(block) {
    this.block = block;
    this.onSectionEnter = new SuspendCallback();
    this.onSectionExit = new SuspendCallback();
    this.onParticipant = new SuspendCallback();
    this.onTalk = new SuspendCallback();
    this.onOptions = new SuspendCallback();
    this.sectionList_0 = new Dialogue$SectionList();
  }
  Dialogue.prototype.start_m1kx7n$ = function (state, continuation) {
    return this.block(this, state, continuation);
  };
  Dialogue.prototype.unaryMinus_pdl1vz$ = function ($receiver, continuation) {
    return this.onParticipant.invoke_11rb$($receiver, continuation);
  };
  function Coroutine$unaryPlus_pdl1vz$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$unaryPlus_pdl1vz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$unaryPlus_pdl1vz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unaryPlus_pdl1vz$.prototype.constructor = Coroutine$unaryPlus_pdl1vz$;
  Coroutine$unaryPlus_pdl1vz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$$receiver.length === 0) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.onTalk.invoke_11rb$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          default:
            this.state_0 = 1;
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
  Dialogue.prototype.unaryPlus_pdl1vz$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$unaryPlus_pdl1vz$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$options_zenrfu$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$block = block_0;
  }
  Coroutine$options_zenrfu$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$options_zenrfu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$options_zenrfu$.prototype.constructor = Coroutine$options_zenrfu$;
  Coroutine$options_zenrfu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new ConversationOptionsBuilder();
            this.local$block($receiver);
            this.local$$receiver = $receiver.build();
            this.state_0 = 2;
            this.result_0 = this.$this.onOptions.invoke_11rb$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver;
          default:
            this.state_0 = 1;
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
  Dialogue.prototype.options_zenrfu$ = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$options_zenrfu$(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Dialogue.prototype.times_f4dhtg$ = function ($receiver, condition) {
    return condition ? $receiver : '';
  };
  Dialogue.prototype.goto_hfpob1$ = function ($receiver, id) {
    var tmp$ = this.sectionList_0;
    var $receiver_0 = $receiver.sections;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.id, id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$.goto_y350t2$(ensureNotNull(firstOrNull$result));
  };
  function Coroutine$conversation_qlupru$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$block = block_0;
  }
  Coroutine$conversation_qlupru$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$conversation_qlupru$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$conversation_qlupru$.prototype.constructor = Coroutine$conversation_qlupru$;
  Coroutine$conversation_qlupru$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new ConversationBuilder();
            this.local$block($receiver);
            this.local$$receiver = $receiver.build();
            this.$this.sectionList_0 = new Dialogue$SectionList();
            var tmp$;
            tmp$ = this.local$$receiver.sections.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              this.$this.sectionList_0.add_y350t2$(element);
            }

            this.local$tmp$ = this.$this.sectionList_0.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            this.local$element = this.local$tmp$.next();
            if (this.local$element.condition()) {
              this.state_0 = 3;
              this.result_0 = this.$this.onSectionEnter.invoke_11rb$(this.local$element.id, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$element.block(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.onSectionExit.invoke_11rb$(this.local$element.id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
            return this.local$$receiver;
          default:
            this.state_0 = 1;
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
  Dialogue.prototype.conversation_qlupru$ = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$conversation_qlupru$(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Dialogue$SectionList() {
    Dialogue$SectionList$Companion_getInstance();
    this.head_0 = Dialogue$SectionList$Companion_getInstance().nullSectionNode;
    this.last_0 = Dialogue$SectionList$Companion_getInstance().nullSectionNode;
    this.currentIterator_0 = null;
  }
  function Dialogue$SectionList$Companion() {
    Dialogue$SectionList$Companion_instance = this;
    this.nullSection = new Section('nullSection', void 0, Dialogue$SectionList$Companion$nullSection$lambda);
    this.nullSectionNode = new Dialogue$SectionList$SectionNode(this.nullSection, null);
  }
  function Coroutine$Dialogue$SectionList$Companion$nullSection$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Dialogue$SectionList$Companion$nullSection$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Dialogue$SectionList$Companion$nullSection$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Dialogue$SectionList$Companion$nullSection$lambda.prototype.constructor = Coroutine$Dialogue$SectionList$Companion$nullSection$lambda;
  Coroutine$Dialogue$SectionList$Companion$nullSection$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function Dialogue$SectionList$Companion$nullSection$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$Dialogue$SectionList$Companion$nullSection$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Dialogue$SectionList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dialogue$SectionList$Companion_instance = null;
  function Dialogue$SectionList$Companion_getInstance() {
    if (Dialogue$SectionList$Companion_instance === null) {
      new Dialogue$SectionList$Companion();
    }
    return Dialogue$SectionList$Companion_instance;
  }
  function Dialogue$SectionList$SectionNode(section, next) {
    if (next === void 0)
      next = Dialogue$SectionList$Companion_getInstance().nullSectionNode;
    this.section = section;
    this.next = next;
  }
  Dialogue$SectionList$SectionNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SectionNode',
    interfaces: []
  };
  Dialogue$SectionList$SectionNode.prototype.component1 = function () {
    return this.section;
  };
  Dialogue$SectionList$SectionNode.prototype.component2 = function () {
    return this.next;
  };
  Dialogue$SectionList$SectionNode.prototype.copy_ipo7ts$ = function (section, next) {
    return new Dialogue$SectionList$SectionNode(section === void 0 ? this.section : section, next === void 0 ? this.next : next);
  };
  Dialogue$SectionList$SectionNode.prototype.toString = function () {
    return 'SectionNode(section=' + Kotlin.toString(this.section) + (', next=' + Kotlin.toString(this.next)) + ')';
  };
  Dialogue$SectionList$SectionNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.next) | 0;
    return result;
  };
  Dialogue$SectionList$SectionNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.next, other.next)))));
  };
  Dialogue$SectionList.prototype.add_y350t2$ = function (section) {
    var tmp$;
    if ((tmp$ = this.head_0) != null ? tmp$.equals(Dialogue$SectionList$Companion_getInstance().nullSectionNode) : null) {
      this.head_0 = new Dialogue$SectionList$SectionNode(section, Dialogue$SectionList$Companion_getInstance().nullSectionNode);
      this.last_0 = this.head_0;
    } else {
      this.last_0.next = new Dialogue$SectionList$SectionNode(section, Dialogue$SectionList$Companion_getInstance().nullSectionNode);
      this.last_0 = ensureNotNull(this.last_0.next);
    }
  };
  function Dialogue$SectionList$SectionNodeIterator(current) {
    this.current_0 = current;
  }
  Dialogue$SectionList$SectionNodeIterator.prototype.hasNext = function () {
    var tmp$;
    return !((tmp$ = this.current_0) != null ? tmp$.equals(Dialogue$SectionList$Companion_getInstance().nullSectionNode) : null);
  };
  Dialogue$SectionList$SectionNodeIterator.prototype.next = function () {
    var ret = this.current_0;
    this.current_0 = ensureNotNull(this.current_0.next);
    return ret;
  };
  Dialogue$SectionList$SectionNodeIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SectionNodeIterator',
    interfaces: [Iterator]
  };
  function Dialogue$SectionList$SectionIterator(current) {
    this.current_0 = current;
    this.gotoNextSection_0 = null;
  }
  Dialogue$SectionList$SectionIterator.prototype.hasNext = function () {
    var tmp$;
    return !((tmp$ = this.current_0) != null ? tmp$.equals(Dialogue$SectionList$Companion_getInstance().nullSectionNode) : null) || this.gotoNextSection_0 != null;
  };
  Dialogue$SectionList$SectionIterator.prototype.next = function () {
    if (this.gotoNextSection_0 != null) {
      this.current_0 = ensureNotNull(this.gotoNextSection_0);
      this.gotoNextSection_0 = null;
    }
    var ret = this.current_0;
    this.current_0 = ensureNotNull(this.current_0.next);
    return ret.section;
  };
  Dialogue$SectionList$SectionIterator.prototype.goto_3fz4jl$ = function (section) {
    this.gotoNextSection_0 = section;
  };
  Dialogue$SectionList$SectionIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SectionIterator',
    interfaces: [Iterator]
  };
  Dialogue$SectionList.prototype.iterator = function () {
    this.currentIterator_0 = new Dialogue$SectionList$SectionIterator(this.head_0);
    return ensureNotNull(this.currentIterator_0);
  };
  Dialogue$SectionList.prototype.goto_y350t2$ = function (section) {
    if (this.currentIterator_0 != null) {
      var $receiver = new Dialogue$SectionList$SectionNodeIterator(this.head_0);
      while ($receiver.hasNext()) {
        var element = $receiver.next();
        if (equals(element.section, section)) {
          ensureNotNull(this.currentIterator_0).goto_3fz4jl$(element);
        }
      }
    }
  };
  Dialogue$SectionList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SectionList',
    interfaces: [Iterable]
  };
  Dialogue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dialogue',
    interfaces: []
  };
  function GlobalConversationState() {
    this.frags = 0;
    this.dummyState = new GlobalConversationState$DummyConversationState();
  }
  function GlobalConversationState$DummyConversationState(basuraExaminada, nodeVisited) {
    if (basuraExaminada === void 0)
      basuraExaminada = false;
    if (nodeVisited === void 0)
      nodeVisited = false;
    this.basuraExaminada = basuraExaminada;
    this.nodeVisited = nodeVisited;
  }
  GlobalConversationState$DummyConversationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyConversationState',
    interfaces: [ConversationState]
  };
  GlobalConversationState$DummyConversationState.prototype.component1 = function () {
    return this.basuraExaminada;
  };
  GlobalConversationState$DummyConversationState.prototype.component2 = function () {
    return this.nodeVisited;
  };
  GlobalConversationState$DummyConversationState.prototype.copy_dqye30$ = function (basuraExaminada, nodeVisited) {
    return new GlobalConversationState$DummyConversationState(basuraExaminada === void 0 ? this.basuraExaminada : basuraExaminada, nodeVisited === void 0 ? this.nodeVisited : nodeVisited);
  };
  GlobalConversationState$DummyConversationState.prototype.toString = function () {
    return 'DummyConversationState(basuraExaminada=' + Kotlin.toString(this.basuraExaminada) + (', nodeVisited=' + Kotlin.toString(this.nodeVisited)) + ')';
  };
  GlobalConversationState$DummyConversationState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.basuraExaminada) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodeVisited) | 0;
    return result;
  };
  GlobalConversationState$DummyConversationState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.basuraExaminada, other.basuraExaminada) && Kotlin.equals(this.nodeVisited, other.nodeVisited)))));
  };
  GlobalConversationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlobalConversationState',
    interfaces: [ConversationState]
  };
  function dialogue_1(id, block) {
    var $receiver = dialogue(block);
    var tmp$;
    GameDialogues$Companion_getInstance().register_bbtnfw$(id, Kotlin.isType(tmp$ = $receiver, Dialogue) ? tmp$ : throwCCE());
    return $receiver;
  }
  function dialogue_2(id, block) {
    var $receiver = dialogue_0(block);
    GameDialogues$Companion_getInstance().register_bbtnfw$(id, $receiver);
    return $receiver;
  }
  function GameDialogues(state) {
    GameDialogues$Companion_getInstance();
    this.state = state;
  }
  function GameDialogues$Companion() {
    GameDialogues$Companion_instance = this;
    this.dialogueMap_0 = LinkedHashMap_init();
  }
  GameDialogues$Companion.prototype.register_bbtnfw$ = function (id, dialogue) {
    this.dialogueMap_0.put_xwzc9p$(id, dialogue);
  };
  GameDialogues$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameDialogues$Companion_instance = null;
  function GameDialogues$Companion_getInstance() {
    if (GameDialogues$Companion_instance === null) {
      new GameDialogues$Companion();
    }
    return GameDialogues$Companion_instance;
  }
  GameDialogues.prototype.get_61zpoe$ = function (id) {
    var tmp$;
    return (tmp$ = GameDialogues$Companion_getInstance().dialogueMap_0.get_11rb$(id)) != null ? tmp$ : this.emptyDialogue_0(id);
  };
  function Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda(closure$id_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
    this.local$this$ = this$_0;
  }
  Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda.prototype.constructor = Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda;
  Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Invaild dialogue with id: ' + this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameDialogues$emptyDialogue$lambda$lambda$lambda(closure$id_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GameDialogues$emptyDialogue$lambda$lambda$lambda(closure$id_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameDialogues$emptyDialogue$lambda$lambda(closure$id, this$) {
    return function ($receiver) {
      $receiver.section_wopz0g$('error', void 0, GameDialogues$emptyDialogue$lambda$lambda$lambda(closure$id, this$));
      return Unit;
    };
  }
  function Coroutine$GameDialogues$emptyDialogue$lambda(closure$id_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameDialogues$emptyDialogue$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameDialogues$emptyDialogue$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameDialogues$emptyDialogue$lambda.prototype.constructor = Coroutine$GameDialogues$emptyDialogue$lambda;
  Coroutine$GameDialogues$emptyDialogue$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.conversation_qlupru$(GameDialogues$emptyDialogue$lambda$lambda(this.local$closure$id, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameDialogues$emptyDialogue$lambda(closure$id_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameDialogues$emptyDialogue$lambda(closure$id_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameDialogues.prototype.emptyDialogue_0 = function (id) {
    return dialogue_0(GameDialogues$emptyDialogue$lambda(id));
  };
  GameDialogues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameDialogues',
    interfaces: []
  };
  function GameHud() {
    GameHud$Companion_getInstance();
    KotlinObject.call(this);
    this.actor = GetOwner(this);
    GameHud$Companion_getInstance().instance = this;
    this.gameDialogues = new GameDialogues(new GlobalConversationState());
  }
  function Coroutine$GameHud$say$lambda(closure$texts_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$texts = closure$texts_0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$GameHud$say$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$say$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$say$lambda.prototype.constructor = Coroutine$GameHud$say$lambda;
  Coroutine$GameHud$say$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$closure$texts;
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
            this.local$$receiver_0.SetText(element);
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
            return Unit;
          default:
            this.state_0 = 1;
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
  function GameHud$say$lambda(closure$texts_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$say$lambda(closure$texts_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$say_kand9s$($this, texts_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$texts = texts_0;
  }
  Coroutine$say_kand9s$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$say_kand9s$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$say_kand9s$.prototype.constructor = Coroutine$say_kand9s$;
  Coroutine$say_kand9s$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withSubtitlesUserWidget_0(GameHud$say$lambda(this.local$texts), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.say_kand9s$ = function (texts_0, continuation_0, suspended) {
    var instance = new Coroutine$say_kand9s$(this, texts_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$GameHud$say$lambda_0(closure$text_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$text = closure$text_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameHud$say$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$say$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$say$lambda_0.prototype.constructor = Coroutine$GameHud$say$lambda_0;
  Coroutine$GameHud$say$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.SetText(this.local$closure$text);
            this.state_0 = 2;
            this.result_0 = delay(L2000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$say$lambda_0(closure$text_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$say$lambda_0(closure$text_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$say_61zpoe$($this, text_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$text = text_0;
  }
  Coroutine$say_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$say_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$say_61zpoe$.prototype.constructor = Coroutine$say_61zpoe$;
  Coroutine$say_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withSubtitlesUserWidget_0(GameHud$say$lambda_0(this.local$text), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.say_61zpoe$ = function (text_0, continuation_0, suspended) {
    var instance = new Coroutine$say_61zpoe$(this, text_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GameHud$say$lambda$lambda(closure$deferred) {
    return function () {
      closure$deferred.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$GameHud$say$lambda_1(closure$talkActions_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$talkActions = closure$talkActions_0;
    this.local$deferred = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameHud$say$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$say$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$say$lambda_1.prototype.constructor = Coroutine$GameHud$say$lambda_1;
  Coroutine$GameHud$say$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$deferred = CompletableDeferred();
            if (this.local$closure$talkActions.Voice != null) {
              SpawnSound2D(GWorld, ensureNotNull(this.local$closure$talkActions.Voice)).OnAudioFinished.Add(GameHud$say$lambda$lambda(this.local$deferred));
            } else {
              this.local$deferred.complete_11rb$(Unit);
            }

            this.local$$receiver.SetText(this.local$closure$talkActions.Text);
            this.state_0 = 2;
            this.result_0 = delay(L2000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$deferred.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$say$lambda_1(closure$talkActions_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$say$lambda_1(closure$talkActions_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$say_jgvkke$($this, talkActions_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$talkActions = talkActions_0;
  }
  Coroutine$say_jgvkke$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$say_jgvkke$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$say_jgvkke$.prototype.constructor = Coroutine$say_jgvkke$;
  Coroutine$say_jgvkke$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withSubtitlesUserWidget_0(GameHud$say$lambda_1(this.local$talkActions), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.say_jgvkke$ = function (talkActions_0, continuation_0, suspended) {
    var instance = new Coroutine$say_jgvkke$(this, talkActions_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GameHud$say$lambda$lambda$lambda(closure$deferred) {
    return function () {
      closure$deferred.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$GameHud$say$lambda_2(closure$talkActions_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$talkActions = closure$talkActions_0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$deferred = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$GameHud$say$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$say$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$say$lambda_2.prototype.constructor = Coroutine$GameHud$say$lambda_2;
  Coroutine$GameHud$say$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$closure$talkActions;
            this.local$tmp$ = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$tmp$ === this.local$$receiver.length) {
              this.state_0 = 6;
              continue;
            }

            var element = this.local$$receiver[this.local$tmp$];
            this.local$deferred = CompletableDeferred();
            if (element.Voice != null) {
              SpawnSound2D(GWorld, ensureNotNull(element.Voice)).OnAudioFinished.Add(GameHud$say$lambda$lambda$lambda(this.local$deferred));
            } else {
              this.local$deferred.complete_11rb$(Unit);
            }

            this.local$$receiver_0.SetText(element.Text);
            this.state_0 = 3;
            this.result_0 = delay(L2000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$deferred.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            ++this.local$tmp$;
            this.state_0 = 2;
            continue;
          case 6:
            return Unit;
          default:
            this.state_0 = 1;
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
  function GameHud$say$lambda_2(closure$talkActions_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$say$lambda_2(closure$talkActions_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$say_2l03ak$($this, talkActions_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$talkActions = talkActions_0;
  }
  Coroutine$say_2l03ak$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$say_2l03ak$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$say_2l03ak$.prototype.constructor = Coroutine$say_2l03ak$;
  Coroutine$say_2l03ak$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withSubtitlesUserWidget_0(GameHud$say$lambda_2(this.local$talkActions), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.say_2l03ak$ = function (talkActions_0, continuation_0, suspended) {
    var instance = new Coroutine$say_2l03ak$(this, talkActions_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$GameHud$inspect$goToPage$lambda(closure$inspectAction_0, closure$index_0, this$GameHud_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$inspectAction = closure$inspectAction_0;
    this.local$closure$index = closure$index_0;
    this.local$this$GameHud = this$GameHud_0;
  }
  Coroutine$GameHud$inspect$goToPage$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$inspect$goToPage$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$inspect$goToPage$lambda.prototype.constructor = Coroutine$GameHud$inspect$goToPage$lambda;
  Coroutine$GameHud$inspect$goToPage$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$GameHud.say_jgvkke$(this.local$closure$inspectAction.Say[this.local$closure$index], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$inspect$goToPage$lambda(closure$inspectAction_0, closure$index_0, this$GameHud_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$inspect$goToPage$lambda(closure$inspectAction_0, closure$index_0, this$GameHud_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameHud$inspect$goToPage(closure$visitedPage, closure$inspectAction, this$GameHud) {
    return function ($receiver, index) {
      var visited = closure$visitedPage.contains_11rb$(index);
      closure$visitedPage.add_11rb$(index);
      $receiver.ImagePlaceholder.SetBrushFromTexture(closure$inspectAction.Images[index], true);
      $receiver.DescriptionPanel.SetVisibility(ESlateVisibility.Hidden);
      if (hasTextsAtPage(closure$inspectAction, index)) {
        $receiver.TextDescription.SetText(closure$inspectAction.Texts[index]);
        $receiver.ButtonRead.SetVisibility(ESlateVisibility.Visible);
      } else {
        $receiver.ButtonRead.SetVisibility(ESlateVisibility.Collapsed);
      }
      var prevButtonVisibility = index > 0 ? ESlateVisibility.Visible : ESlateVisibility.Collapsed;
      var nextButtonVisibility = index < getLastPageIndex(closure$inspectAction) ? ESlateVisibility.Visible : ESlateVisibility.Collapsed;
      $receiver.ButtonPrev.SetVisibility(prevButtonVisibility);
      $receiver.ButtonNext.SetVisibility(nextButtonVisibility);
      $receiver.ArrowPrev.SetVisibility(prevButtonVisibility);
      $receiver.ArrowNext.SetVisibility(nextButtonVisibility);
      if (!visited && hasSayAtPage(closure$inspectAction, index)) {
        launch(coroutines.GlobalScope, void 0, void 0, GameHud$inspect$goToPage$lambda(closure$inspectAction, index, this$GameHud));
      }
    };
  }
  function GameHud$inspect$lambda$lambda(closure$deferred) {
    return function () {
      closure$deferred.complete_11rb$(Unit);
      return Unit;
    };
  }
  function GameHud$inspect$lambda$lambda_0(this$) {
    return function () {
      this$.DescriptionPanel.SetVisibility(ESlateVisibility.Visible);
      return Unit;
    };
  }
  function GameHud$inspect$lambda$goToPreviousPage(closure$currentPage, this$, closure$goToPage) {
    return function () {
      var tmp$;
      if (closure$currentPage.v > 0) {
        tmp$ = closure$currentPage.v;
        closure$currentPage.v = tmp$ - 1 | 0;
      }
      closure$goToPage(this$, closure$currentPage.v);
    };
  }
  function GameHud$inspect$lambda$goToNextPage(closure$currentPage, closure$inspectAction, this$, closure$goToPage) {
    return function () {
      var tmp$;
      if (closure$currentPage.v < get_lastIndex(closure$inspectAction.Images)) {
        tmp$ = closure$currentPage.v;
        closure$currentPage.v = tmp$ + 1 | 0;
      }
      closure$goToPage(this$, closure$currentPage.v);
    };
  }
  function GameHud$inspect$lambda$lambda_1(closure$goToPreviousPage) {
    return function () {
      closure$goToPreviousPage();
      return Unit;
    };
  }
  function GameHud$inspect$lambda$lambda_2(closure$goToPreviousPage) {
    return function () {
      closure$goToPreviousPage();
      return Unit;
    };
  }
  function GameHud$inspect$lambda$lambda_3(closure$goToNextPage) {
    return function () {
      closure$goToNextPage();
      return Unit;
    };
  }
  function GameHud$inspect$lambda$lambda_4(closure$goToNextPage) {
    return function () {
      closure$goToNextPage();
      return Unit;
    };
  }
  function GameHud$inspect$lambda$lambda_5(this$) {
    return function () {
      this$.DescriptionPanel.SetVisibility(ESlateVisibility.Hidden);
      return Unit;
    };
  }
  function Coroutine$GameHud$inspect$lambda(closure$currentPage_0, closure$goToPage_0, closure$inspectAction_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$currentPage = closure$currentPage_0;
    this.local$closure$goToPage = closure$goToPage_0;
    this.local$closure$inspectAction = closure$inspectAction_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameHud$inspect$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$inspect$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$inspect$lambda.prototype.constructor = Coroutine$GameHud$inspect$lambda;
  Coroutine$GameHud$inspect$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$goToPage(this.local$$receiver, this.local$closure$currentPage.v);
            var deferred = CompletableDeferred();
            this.local$$receiver.ButtonExit.OnClicked.Add(GameHud$inspect$lambda$lambda(deferred));
            this.local$$receiver.ButtonRead.OnClicked.Add(GameHud$inspect$lambda$lambda_0(this.local$$receiver));
            var goToPreviousPage = GameHud$inspect$lambda$goToPreviousPage(this.local$closure$currentPage, this.local$$receiver, this.local$closure$goToPage);
            var goToNextPage = GameHud$inspect$lambda$goToNextPage(this.local$closure$currentPage, this.local$closure$inspectAction, this.local$$receiver, this.local$closure$goToPage);
            this.local$$receiver.ButtonPrev.OnClicked.Add(GameHud$inspect$lambda$lambda_1(goToPreviousPage));
            this.local$$receiver.ArrowPrev.OnClicked.Add(GameHud$inspect$lambda$lambda_2(goToPreviousPage));
            this.local$$receiver.ButtonNext.OnClicked.Add(GameHud$inspect$lambda$lambda_3(goToNextPage));
            this.local$$receiver.ArrowNext.OnClicked.Add(GameHud$inspect$lambda$lambda_4(goToNextPage));
            this.local$$receiver.ButtonDescBack.OnClicked.Add(GameHud$inspect$lambda$lambda_5(this.local$$receiver));
            this.state_0 = 2;
            this.result_0 = deferred.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$inspect$lambda(closure$currentPage_0, closure$goToPage_0, closure$inspectAction_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$inspect$lambda(closure$currentPage_0, closure$goToPage_0, closure$inspectAction_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$inspect_ccxjka$($this, inspectAction_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$inspectAction = inspectAction_0;
  }
  Coroutine$inspect_ccxjka$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$inspect_ccxjka$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$inspect_ccxjka$.prototype.constructor = Coroutine$inspect_ccxjka$;
  Coroutine$inspect_ccxjka$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var visitedPage = LinkedHashSet_init();
            var goToPage = GameHud$inspect$goToPage(visitedPage, this.local$inspectAction, this.$this);
            var currentPage = {v: 0};
            this.$this.setInputMode_0(GameHud$InputMode$UI_getInstance());
            this.state_0 = 2;
            this.result_0 = this.$this.withInspectUserWidget_0(GameHud$inspect$lambda(currentPage, goToPage, this.local$inspectAction), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.setInputMode_0(GameHud$InputMode$Game_getInstance());
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.inspect_ccxjka$ = function (inspectAction_0, continuation_0, suspended) {
    var instance = new Coroutine$inspect_ccxjka$(this, inspectAction_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$GameHud$runDialogue$lambda$lambda(closure$currentCharacter_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$currentCharacter = closure$currentCharacter_0;
    this.local$it = it_0;
  }
  Coroutine$GameHud$runDialogue$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$runDialogue$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$runDialogue$lambda$lambda.prototype.constructor = Coroutine$GameHud$runDialogue$lambda$lambda;
  Coroutine$GameHud$runDialogue$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$currentCharacter.v = this.local$it + ': ', Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function GameHud$runDialogue$lambda$lambda(closure$currentCharacter_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$runDialogue$lambda$lambda(closure$currentCharacter_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameHud$runDialogue$lambda$lambda_0(closure$currentCharacter_0, this$GameHud_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$currentCharacter = closure$currentCharacter_0;
    this.local$this$GameHud = this$GameHud_0;
    this.local$it = it_0;
  }
  Coroutine$GameHud$runDialogue$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$runDialogue$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$runDialogue$lambda$lambda_0.prototype.constructor = Coroutine$GameHud$runDialogue$lambda$lambda_0;
  Coroutine$GameHud$runDialogue$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$GameHud.say_61zpoe$(this.local$closure$currentCharacter.v + this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$runDialogue$lambda$lambda_0(closure$currentCharacter_0, this$GameHud_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$runDialogue$lambda$lambda_0(closure$currentCharacter_0, this$GameHud_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameHud$runDialogue$lambda$lambda$lambda$setup$lambda(closure$deferred, closure$index) {
    return function () {
      closure$deferred.complete_11rb$(closure$index);
      return Unit;
    };
  }
  function GameHud$runDialogue$lambda$lambda$lambda$setup(closure$deferred) {
    return function (index, button, textBlock, label) {
      button.SetVisibility(ESlateVisibility.Visible);
      textBlock.SetText(label);
      button.OnClicked.Add(GameHud$runDialogue$lambda$lambda$lambda$setup$lambda(closure$deferred, index));
    };
  }
  function Coroutine$GameHud$runDialogue$lambda$lambda$lambda(closure$deferred_0, closure$conversationOptions_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deferred = closure$deferred_0;
    this.local$closure$conversationOptions = closure$conversationOptions_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameHud$runDialogue$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$runDialogue$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$runDialogue$lambda$lambda$lambda.prototype.constructor = Coroutine$GameHud$runDialogue$lambda$lambda$lambda;
  Coroutine$GameHud$runDialogue$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.Button4.SetVisibility(ESlateVisibility.Collapsed);
            this.local$$receiver.Button3.SetVisibility(ESlateVisibility.Collapsed);
            this.local$$receiver.Button2.SetVisibility(ESlateVisibility.Collapsed);
            this.local$$receiver.Button1.SetVisibility(ESlateVisibility.Collapsed);
            var setup = GameHud$runDialogue$lambda$lambda$lambda$setup(this.local$closure$deferred);
            var tmp$, tmp$_0;
            var index = 0;
            tmp$ = this.local$closure$conversationOptions.options.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
              switch (index_0) {
                case 0:
                  setup(index_0, this.local$$receiver.Button1, this.local$$receiver.Text1, item.option);
                  break;
                case 1:
                  setup(index_0, this.local$$receiver.Button2, this.local$$receiver.Text2, item.option);
                  break;
                case 2:
                  setup(index_0, this.local$$receiver.Button3, this.local$$receiver.Text3, item.option);
                  break;
                case 3:
                  setup(index_0, this.local$$receiver.Button4, this.local$$receiver.Text4, item.option);
                  break;
              }
            }

            this.state_0 = 2;
            this.result_0 = this.local$closure$deferred.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$runDialogue$lambda$lambda$lambda(closure$deferred_0, closure$conversationOptions_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$runDialogue$lambda$lambda$lambda(closure$deferred_0, closure$conversationOptions_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameHud$runDialogue$lambda$lambda_1(this$GameHud_0, conversationOptions_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GameHud = this$GameHud_0;
    this.local$deferred = void 0;
    this.local$conversationOptions = conversationOptions_0;
  }
  Coroutine$GameHud$runDialogue$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameHud$runDialogue$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameHud$runDialogue$lambda$lambda_1.prototype.constructor = Coroutine$GameHud$runDialogue$lambda$lambda_1;
  Coroutine$GameHud$runDialogue$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$GameHud.setInputMode_0(GameHud$InputMode$UI_getInstance());
            this.local$deferred = CompletableDeferred();
            this.state_0 = 2;
            this.result_0 = this.local$this$GameHud.withDialogueOptionsWidget_0(GameHud$runDialogue$lambda$lambda$lambda(this.local$deferred, this.local$conversationOptions), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$GameHud.setInputMode_0(GameHud$InputMode$Game_getInstance());
            this.state_0 = 3;
            this.result_0 = this.local$deferred.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$conversationOptions.select_za3lpa$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function GameHud$runDialogue$lambda$lambda_1(this$GameHud_0) {
    return function (conversationOptions_0, continuation_0, suspended) {
      var instance = new Coroutine$GameHud$runDialogue$lambda$lambda_1(this$GameHud_0, conversationOptions_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$runDialogue_4yavua$($this, dialogueAction_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dialogueAction = dialogueAction_0;
  }
  Coroutine$runDialogue_4yavua$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runDialogue_4yavua$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runDialogue_4yavua$.prototype.constructor = Coroutine$runDialogue_4yavua$;
  Coroutine$runDialogue_4yavua$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.gameDialogues.get_61zpoe$(this.local$dialogueAction.Dialogue);
            var currentCharacter = {v: ''};
            $receiver.onParticipant.invoke_25kf2w$(GameHud$runDialogue$lambda$lambda(currentCharacter));
            $receiver.onTalk.invoke_25kf2w$(GameHud$runDialogue$lambda$lambda_0(currentCharacter, this.$this));
            $receiver.onOptions.invoke_25kf2w$(GameHud$runDialogue$lambda$lambda_1(this.$this));
            this.state_0 = 2;
            this.result_0 = $receiver.start_m1kx7n$(this.$this.gameDialogues.state, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.runDialogue_4yavua$ = function (dialogueAction_0, continuation_0, suspended) {
    var instance = new Coroutine$runDialogue_4yavua$(this, dialogueAction_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$withSubtitlesUserWidget_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$block = block_0;
  }
  Coroutine$withSubtitlesUserWidget_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$withSubtitlesUserWidget_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$withSubtitlesUserWidget_0.prototype.constructor = Coroutine$withSubtitlesUserWidget_0;
  Coroutine$withSubtitlesUserWidget_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withWidget_0(this.$this.actor.SubtitlesWidget, this.local$block, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.withSubtitlesUserWidget_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$withSubtitlesUserWidget_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$withInspectUserWidget_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$block = block_0;
  }
  Coroutine$withInspectUserWidget_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$withInspectUserWidget_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$withInspectUserWidget_0.prototype.constructor = Coroutine$withInspectUserWidget_0;
  Coroutine$withInspectUserWidget_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withWidget_0(this.$this.actor.InspectWidget, this.local$block, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.withInspectUserWidget_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$withInspectUserWidget_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$withDialogueOptionsWidget_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$block = block_0;
  }
  Coroutine$withDialogueOptionsWidget_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$withDialogueOptionsWidget_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$withDialogueOptionsWidget_0.prototype.constructor = Coroutine$withDialogueOptionsWidget_0;
  Coroutine$withDialogueOptionsWidget_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withWidget_0(this.$this.actor.DialogueOptionsWidget, this.local$block, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.withDialogueOptionsWidget_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$withDialogueOptionsWidget_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$withWidget_0($this, userWidget_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$widget = void 0;
    this.local$userWidget = userWidget_0;
    this.local$block = block_0;
  }
  Coroutine$withWidget_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$withWidget_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$withWidget_0.prototype.constructor = Coroutine$withWidget_0;
  Coroutine$withWidget_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$widget = GWorld.Create(this.local$userWidget, GWorld.GetPlayerController(0));
            this.local$widget.AddToViewport(0);
            this.state_0 = 2;
            this.result_0 = this.local$block(this.local$widget, this.local$widget, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$widget.RemoveFromViewport();
            this.local$widget.DestroyUObject();
            return;
          default:
            this.state_0 = 1;
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
  GameHud.prototype.withWidget_0 = function (userWidget_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$withWidget_0(this, userWidget_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GameHud$InputMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameHud$InputMode_initFields() {
    GameHud$InputMode_initFields = function () {
    };
    GameHud$InputMode$UI_instance = new GameHud$InputMode('UI', 0);
    GameHud$InputMode$Game_instance = new GameHud$InputMode('Game', 1);
  }
  var GameHud$InputMode$UI_instance;
  function GameHud$InputMode$UI_getInstance() {
    GameHud$InputMode_initFields();
    return GameHud$InputMode$UI_instance;
  }
  var GameHud$InputMode$Game_instance;
  function GameHud$InputMode$Game_getInstance() {
    GameHud$InputMode_initFields();
    return GameHud$InputMode$Game_instance;
  }
  GameHud$InputMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputMode',
    interfaces: [Enum]
  };
  function GameHud$InputMode$values() {
    return [GameHud$InputMode$UI_getInstance(), GameHud$InputMode$Game_getInstance()];
  }
  GameHud$InputMode.values = GameHud$InputMode$values;
  function GameHud$InputMode$valueOf(name) {
    switch (name) {
      case 'UI':
        return GameHud$InputMode$UI_getInstance();
      case 'Game':
        return GameHud$InputMode$Game_getInstance();
      default:
        throwISE('No enum constant GameHud.InputMode.' + name);
    }
  }
  GameHud$InputMode.valueOf_61zpoe$ = GameHud$InputMode$valueOf;
  GameHud.prototype.setInputMode_0 = function (inputMode, playerController) {
    if (playerController === void 0)
      playerController = GWorld.GetPlayerController(0);
    switch (inputMode.name) {
      case 'UI':
        playerController.SetIgnoreMoveInput(true);
        playerController.SetIgnoreLookInput(true);
        playerController.bShowMouseCursor = true;
        playerController.SetInputModeUIOnly(null, EMouseLockMode.DoNotLock);
        break;
      case 'Game':
        playerController.SetIgnoreMoveInput(false);
        playerController.SetIgnoreLookInput(false);
        playerController.bShowMouseCursor = false;
        playerController.SetInputMode_GameOnly();
        break;
    }
  };
  function GameHud$Companion() {
    GameHud$Companion_instance = this;
    this.instance_ubril6$_0 = this.instance_ubril6$_0;
  }
  Object.defineProperty(GameHud$Companion.prototype, 'instance', {
    configurable: true,
    get: function () {
      if (this.instance_ubril6$_0 == null)
        return throwUPAE('instance');
      return this.instance_ubril6$_0;
    },
    set: function (instance) {
      this.instance_ubril6$_0 = instance;
    }
  });
  GameHud$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameHud$Companion_instance = null;
  function GameHud$Companion_getInstance() {
    if (GameHud$Companion_instance === null) {
      new GameHud$Companion();
    }
    return GameHud$Companion_instance;
  }
  GameHud.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameHud',
    interfaces: []
  };
  function isEmpty($receiver) {
    return $receiver.Images.length === 0;
  }
  function isNotEmpty($receiver) {
    return !($receiver.Images.length === 0);
  }
  function hasTextsAtPage($receiver, index) {
    var tmp$ = index < $receiver.Texts.length;
    if (tmp$) {
      tmp$ = !isBlank($receiver.Texts[index]);
    }
    return tmp$;
  }
  function getLastPageIndex($receiver) {
    return get_lastIndex($receiver.Images);
  }
  function hasSayAtPage($receiver, index) {
    var tmp$ = index < $receiver.Say.length;
    if (tmp$) {
      tmp$ = !isBlank($receiver.Say[index].Text);
    }
    return tmp$;
  }
  function InteractiveThing() {
    KotlinObject.call(this);
    this.actor = GetOwner(this);
    this.id = this.actor.GetName();
    this.actions = GetComponentByName(this.actor, ActorComponent, 'Actions');
    RoomObjects_getInstance().register_tdvt4n$(this.actor, this.id);
    println('Actions component');
    println(this.actions);
    this.meshes_0 = GetComponentsByClass(GetOwner(this), StaticMeshComponent);
  }
  function Coroutine$doAction_1($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$element = void 0;
  }
  Coroutine$doAction_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doAction_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doAction_1.prototype.constructor = Coroutine$doAction_1;
  Coroutine$doAction_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((this.local$tmp$_0 = (tmp$ = this.$this.actions) != null ? tmp$.Actions : null) != null) {
              this.local$tmp$_1 = 0;
              this.state_0 = 2;
              continue;
            } else {
              this.state_0 = 16;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$tmp$_1 === this.local$tmp$_0.length) {
              this.state_0 = 15;
              continue;
            }

            this.local$element = this.local$tmp$_0[this.local$tmp$_1];
            this.state_0 = 3;
            continue;
          case 3:
            var tmp$_0;
            if (!this.local$element.Enabled) {
              this.state_0 = 13;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            if ((tmp$_0 = this.local$element.Sequence) != null) {
              playSequence(tmp$_0);
            }

            if (this.local$element.Delay > 0) {
              this.state_0 = 5;
              this.result_0 = delay(Kotlin.Long.fromNumber(this.local$element.Delay).multiply(Kotlin.Long.fromInt(1000)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            if (!(this.local$element.Talk.length === 0)) {
              this.state_0 = 7;
              this.result_0 = GameHud$Companion_getInstance().instance.say_2l03ak$(this.local$element.Talk, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            if (isNotEmpty(this.local$element.Inspect)) {
              this.state_0 = 9;
              this.result_0 = GameHud$Companion_getInstance().instance.inspect_ccxjka$(this.local$element.Inspect, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 10;
              continue;
            }

          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            if (!isBlank(this.local$element.Dialogue.Dialogue)) {
              this.state_0 = 11;
              this.result_0 = GameHud$Companion_getInstance().instance.runDialogue_4yavua$(this.local$element.Dialogue, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 12;
              continue;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            if (!false) {
              this.state_0 = 13;
              continue;
            }

            this.state_0 = 3;
            continue;
          case 13:
            this.state_0 = 14;
            continue;
          case 14:
            ++this.local$tmp$_1;
            this.state_0 = 2;
            continue;
          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            this.result_0 = RoomObjects_getInstance().doAction_njo09c$(this.$this, this.$this.id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            return;
          default:
            this.state_0 = 1;
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
  InteractiveThing.prototype.doAction = function (continuation_0, suspended) {
    var instance = new Coroutine$doAction_1(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  InteractiveThing.prototype.highlight_6taknv$ = function (enable) {
    var $receiver = this.meshes_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.SetRenderCustomDepth(enable);
    }
  };
  InteractiveThing.prototype.BeginOverlap = function (other) {
    InteractionManager_getInstance().select_tsf84i$(this);
    return '';
  };
  InteractiveThing.prototype.EndOverlap = function (other) {
    InteractionManager_getInstance().release_tsf84i$(this);
  };
  function InteractiveThing$enableCollision$lambda(this$InteractiveThing) {
    return function (OverlappedActor, OtherActor) {
      InteractionManager_getInstance().select_tsf84i$(this$InteractiveThing);
      return Unit;
    };
  }
  function InteractiveThing$enableCollision$lambda_0(this$InteractiveThing) {
    return function (OverlappedActor, OtherActor) {
      InteractionManager_getInstance().release_tsf84i$(this$InteractiveThing);
      return Unit;
    };
  }
  InteractiveThing.prototype.enableCollision_0 = function () {
    this.actor.OnActorBeginOverlap.Add(InteractiveThing$enableCollision$lambda(this));
    this.actor.OnActorEndOverlap.Add(InteractiveThing$enableCollision$lambda_0(this));
  };
  InteractiveThing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractiveThing',
    interfaces: [InteractiveObject]
  };
  function RoomObjects() {
    RoomObjects_instance = this;
    this.map = LinkedHashMap_init();
    this.roomObjects = LinkedHashMap_init();
    this.room = new Room();
    this.nullInteractableObject_0 = new BaseInteractableObject();
  }
  RoomObjects.prototype.register_tdvt4n$ = function (actor, id) {
    this.map.put_xwzc9p$(id, actor);
  };
  RoomObjects.prototype.register_cyquu1$ = function (roomObject, id) {
    this.roomObjects.put_xwzc9p$(id, roomObject);
  };
  function Coroutine$doAction_njo09c$($this, interactiveObject_0, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$doAction_njo09c$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doAction_njo09c$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doAction_njo09c$.prototype.constructor = Coroutine$doAction_njo09c$;
  Coroutine$doAction_njo09c$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.runAction_61zpoe$(this.local$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  RoomObjects.prototype.doAction_njo09c$ = function (interactiveObject_0, id_0, continuation_0, suspended) {
    var instance = new Coroutine$doAction_njo09c$(this, interactiveObject_0, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$runAction_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$runAction_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runAction_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runAction_61zpoe$.prototype.constructor = Coroutine$runAction_61zpoe$;
  Coroutine$runAction_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = ((tmp$ = this.$this.roomObjects.get_11rb$(this.local$id)) != null ? tmp$ : this.$this.nullInteractableObject_0).onUse.invoke_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  RoomObjects.prototype.runAction_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$runAction_61zpoe$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RoomObjects.prototype.getActor_h6pnxf$ = function (id) {
    return getValue(this.map, id);
  };
  RoomObjects.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RoomObjects',
    interfaces: []
  };
  var RoomObjects_instance = null;
  function RoomObjects_getInstance() {
    if (RoomObjects_instance === null) {
      new RoomObjects();
    }
    return RoomObjects_instance;
  }
  function getActor($receiver) {
    return RoomObjects_getInstance().getActor_h6pnxf$($receiver.id);
  }
  function getActor_0($receiver) {
    return getActor($receiver);
  }
  function playSequence$lambda$lambda(this$) {
    return function () {
      this$.DestroyActor();
      return Unit;
    };
  }
  function playSequence(sequence) {
    var $receiver = new MovieSceneSequencePlaybackSettings();
    $receiver.bDisableMovementInput = true;
    $receiver.bDisableLookAtInput = true;
    var settings = $receiver;
    var $receiver_0 = LevelSequencePlayer.CreateLevelSequencePlayer(GWorld, sequence, settings).OutActor;
    $receiver_0.SequencePlayer.Play();
    $receiver_0.SequencePlayer.OnFinished.Add(playSequence$lambda$lambda($receiver_0));
  }
  function walkTo(any) {
  }
  function Coroutine$say(text_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$text = text_0;
  }
  Coroutine$say.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$say.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$say.prototype.constructor = Coroutine$say;
  Coroutine$say.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println(this.local$text);
            this.state_0 = 2;
            this.result_0 = GameHud$Companion_getInstance().instance.say_kand9s$([this.local$text], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  function say(text_0, continuation_0, suspended) {
    var instance = new Coroutine$say(text_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$unaryPlus($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$unaryPlus.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$unaryPlus.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unaryPlus.prototype.constructor = Coroutine$unaryPlus;
  Coroutine$unaryPlus.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = say(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  function unaryPlus($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$unaryPlus($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Room() {
    this.red = new RoomObject('red');
    this.blue = new RoomObject('blue');
    this.orange = new RoomObject('orange');
    this.cofre = new RoomObject('cofre');
    this.opened = false;
    this.sequencePlayed = false;
    this.dialogues = new DemoDialogues();
    this.red.onUse.invoke_25kf2w$(Room_init$lambda(this));
    this.blue.onUse.invoke_25kf2w$(Room_init$lambda_0(this));
    this.orange.onUse.invoke_25kf2w$(Room_init$lambda_1);
    this.cofre.onUse.invoke_25kf2w$(Room_init$lambda_2(this));
  }
  function Room$Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Room$Direction_initFields() {
    Room$Direction_initFields = function () {
    };
    Room$Direction$none_instance = new Room$Direction('none', 0);
    Room$Direction$up_instance = new Room$Direction('up', 1);
    Room$Direction$down_instance = new Room$Direction('down', 2);
    Room$Direction$left_instance = new Room$Direction('left', 3);
    Room$Direction$right_instance = new Room$Direction('right', 4);
  }
  var Room$Direction$none_instance;
  function Room$Direction$none_getInstance() {
    Room$Direction_initFields();
    return Room$Direction$none_instance;
  }
  var Room$Direction$up_instance;
  function Room$Direction$up_getInstance() {
    Room$Direction_initFields();
    return Room$Direction$up_instance;
  }
  var Room$Direction$down_instance;
  function Room$Direction$down_getInstance() {
    Room$Direction_initFields();
    return Room$Direction$down_instance;
  }
  var Room$Direction$left_instance;
  function Room$Direction$left_getInstance() {
    Room$Direction_initFields();
    return Room$Direction$left_instance;
  }
  var Room$Direction$right_instance;
  function Room$Direction$right_getInstance() {
    Room$Direction_initFields();
    return Room$Direction$right_instance;
  }
  Room$Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Room$Direction$values() {
    return [Room$Direction$none_getInstance(), Room$Direction$up_getInstance(), Room$Direction$down_getInstance(), Room$Direction$left_getInstance(), Room$Direction$right_getInstance()];
  }
  Room$Direction.values = Room$Direction$values;
  function Room$Direction$valueOf(name) {
    switch (name) {
      case 'none':
        return Room$Direction$none_getInstance();
      case 'up':
        return Room$Direction$up_getInstance();
      case 'down':
        return Room$Direction$down_getInstance();
      case 'left':
        return Room$Direction$left_getInstance();
      case 'right':
        return Room$Direction$right_getInstance();
      default:
        throwISE('No enum constant examples.adventure.lis.Room.Direction.' + name);
    }
  }
  Room$Direction.valueOf_61zpoe$ = Room$Direction$valueOf;
  function Room$GameGlobalState(frags) {
    this.frags = frags;
  }
  Room$GameGlobalState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameGlobalState',
    interfaces: []
  };
  Room$GameGlobalState.prototype.component1 = function () {
    return this.frags;
  };
  Room$GameGlobalState.prototype.copy_za3lpa$ = function (frags) {
    return new Room$GameGlobalState(frags === void 0 ? this.frags : frags);
  };
  Room$GameGlobalState.prototype.toString = function () {
    return 'GameGlobalState(frags=' + Kotlin.toString(this.frags) + ')';
  };
  Room$GameGlobalState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.frags) | 0;
    return result;
  };
  Room$GameGlobalState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.frags, other.frags))));
  };
  function Coroutine$Room_init$lambda(this$Room_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Room = this$Room_0;
  }
  Coroutine$Room_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Room_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Room_init$lambda.prototype.constructor = Coroutine$Room_init$lambda;
  Coroutine$Room_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            walkTo(this.local$this$Room.red);
            this.state_0 = 2;
            this.result_0 = delay(L300, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = unaryPlus('This is a red cube', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function Room_init$lambda(this$Room_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Room_init$lambda(this$Room_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Room_init$lambda_0(this$Room_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Room = this$Room_0;
  }
  Coroutine$Room_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Room_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Room_init$lambda_0.prototype.constructor = Coroutine$Room_init$lambda_0;
  Coroutine$Room_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            walkTo(this.local$this$Room.blue);
            if (this.local$this$Room.blue.state === 0) {
              this.state_0 = 2;
              this.result_0 = unaryPlus('A ver si lo puedo abrir...', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            getActor_0(this.local$this$Room.blue).DestroyActor();
            this.state_0 = 4;
            this.result_0 = unaryPlus('\xA1Ups! Me lo he cargado...', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.local$this$Room.blue.state = -1, Unit;
          default:
            this.state_0 = 1;
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
  function Room_init$lambda_0(this$Room_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Room_init$lambda_0(this$Room_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Room_init$lambda_1(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Room_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Room_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Room_init$lambda_1.prototype.constructor = Coroutine$Room_init$lambda_1;
  Coroutine$Room_init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = unaryPlus('Es de color naranja...', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = unaryPlus('...pero el rojo tambi\xE9n es bonito', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = unaryPlus('Y este cofre no sirve para nada', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = unaryPlus('Me siento importante criticando todo lo que veo', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function Room_init$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$Room_init$lambda_1(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Room_init$lambda_2(this$Room_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Room = this$Room_0;
    this.local$actor = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$Room_init$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Room_init$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Room_init$lambda_2.prototype.constructor = Coroutine$Room_init$lambda_2;
  Coroutine$Room_init$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$actor = getActor(this.local$this$Room.cofre);
            if (!this.local$this$Room.sequencePlayed) {
              this.local$this$Room.sequencePlayed = true;
              this.state_0 = 2;
              this.result_0 = unaryPlus('Veamos...', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            playSequence(this.local$actor.Sequence);
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$ = (this.local$this$Room.opened ? new IntRange(-110, 0) : downTo(0, -110)).iterator();
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var element = this.local$tmp$.next();
            this.local$actor.Top.SetRelativeRotation(Rotator_0(0, element, 0), false);
            this.state_0 = 5;
            this.result_0 = delay(L16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 4;
            continue;
          case 6:
            return this.local$this$Room.opened = !this.local$this$Room.opened, Unit;
          default:
            this.state_0 = 1;
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
  function Room_init$lambda_2(this$Room_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Room_init$lambda_2(this$Room_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Room.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Room',
    interfaces: []
  };
  function SuspendCallback() {
    this.callback_0 = SuspendCallback$callback$lambda;
  }
  function Coroutine$SuspendCallback$clear$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$SuspendCallback$clear$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SuspendCallback$clear$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SuspendCallback$clear$lambda.prototype.constructor = Coroutine$SuspendCallback$clear$lambda;
  Coroutine$SuspendCallback$clear$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function SuspendCallback$clear$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$SuspendCallback$clear$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  SuspendCallback.prototype.clear = function () {
    this.callback_0 = SuspendCallback$clear$lambda;
  };
  function Coroutine$invoke_11rb$($this, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$value = value_0;
  }
  Coroutine$invoke_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_11rb$.prototype.constructor = Coroutine$invoke_11rb$;
  Coroutine$invoke_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.callback_0(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
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
  SuspendCallback.prototype.invoke_11rb$ = function (value_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_11rb$(this, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SuspendCallback.prototype.invoke_25kf2w$ = function (handler) {
    this.callback_0 = handler;
  };
  function Coroutine$SuspendCallback$callback$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$SuspendCallback$callback$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SuspendCallback$callback$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SuspendCallback$callback$lambda.prototype.constructor = Coroutine$SuspendCallback$callback$lambda;
  Coroutine$SuspendCallback$callback$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function SuspendCallback$callback$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$SuspendCallback$callback$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  SuspendCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuspendCallback',
    interfaces: []
  };
  function InteractableObject() {
  }
  InteractableObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InteractableObject',
    interfaces: []
  };
  function BaseInteractableObject() {
    this.onLookAt_xu1ze$_0 = new SuspendCallback();
    this.onUse_1w20px$_0 = new SuspendCallback();
    this.onTalk_cg8jlw$_0 = new SuspendCallback();
  }
  Object.defineProperty(BaseInteractableObject.prototype, 'onLookAt', {
    configurable: true,
    get: function () {
      return this.onLookAt_xu1ze$_0;
    }
  });
  Object.defineProperty(BaseInteractableObject.prototype, 'onUse', {
    configurable: true,
    get: function () {
      return this.onUse_1w20px$_0;
    }
  });
  Object.defineProperty(BaseInteractableObject.prototype, 'onTalk', {
    configurable: true,
    get: function () {
      return this.onTalk_cg8jlw$_0;
    }
  });
  BaseInteractableObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseInteractableObject',
    interfaces: [InteractableObject]
  };
  function RoomObject(id, state) {
    if (state === void 0)
      state = 0;
    this.id = id;
    this.state = state;
    this.$delegate_s7kvsb$_0 = new BaseInteractableObject();
    RoomObjects_getInstance().register_cyquu1$(this, this.id);
  }
  Object.defineProperty(RoomObject.prototype, 'onLookAt', {
    configurable: true,
    get: function () {
      return this.$delegate_s7kvsb$_0.onLookAt;
    }
  });
  Object.defineProperty(RoomObject.prototype, 'onTalk', {
    configurable: true,
    get: function () {
      return this.$delegate_s7kvsb$_0.onTalk;
    }
  });
  Object.defineProperty(RoomObject.prototype, 'onUse', {
    configurable: true,
    get: function () {
      return this.$delegate_s7kvsb$_0.onUse;
    }
  });
  RoomObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoomObject',
    interfaces: [InteractableObject]
  };
  function DemoDialogues() {
    this.firstSceneDialogueWithState = dialogue_1('first', DemoDialogues$firstSceneDialogueWithState$lambda);
    this.firstSceneDialogue = dialogue_0(DemoDialogues$firstSceneDialogue$lambda);
    this.testDialogue = dialogue_2('second', DemoDialogues$testDialogue$lambda);
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda(this$_0, closure$sayHello_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$sayHello = closure$sayHello_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$(this.local$this$.times_f4dhtg$('Hello', this.local$closure$sayHello.v), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.local$closure$sayHello.v = false, Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda(this$_0, closure$sayHello_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda(this$_0, closure$sayHello_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0(closure$state) {
    return function () {
      return closure$state.dummyState.basuraExaminada;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0(this$_0, closure$end_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$end = closure$end_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Fuera hay una bolsa de basura igualita a t\xED', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Max', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('No tienes sentimientos', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$closure$end.v = true;
            return this.local$this$.goto_hfpob1$(this.local$$receiver, 'end'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1(this$_0, closure$end_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0(this$_0, closure$end_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1(closure$state_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$state = closure$state_0;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$state.dummyState.basuraExaminada = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('This is a dialogue example', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('It is really easy to code', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2(closure$state_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1(closure$state_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2(this$_0, closure$end_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$end = closure$end_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Thanks for all!', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$closure$end.v) {
              return this.local$this$.goto_hfpob1$(this.local$$receiver, 'start'), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3(this$_0, closure$end_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2(this$_0, closure$end_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda(closure$showExitOption_0, this$_1, this$_2, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$showExitOption = closure$showExitOption_0;
    this.local$this$ = this$_1;
    this.local$this$_0 = this$_2;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$showExitOption.v = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Creo que me apetece tener la misma conversaci\xF3n otra vez', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$.goto_hfpob1$(this.local$this$_0, 'start'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda(closure$showExitOption_0, this$_1, this$_2) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda(closure$showExitOption_0, this$_1, this$_2, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Cambiar\xE9 unas opciones gr\xE1ficas y volver\xE9 a jugar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Voy a borrar esto tan pronto salga', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Odio cuando ocurre esto...', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Quiero reiniciar r\xE1pido, por favor.', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Salir al men\xFA principal', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$));
      $receiver.times_ormu1i$('Salir al escritorio', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$));
      $receiver.times_ormu1i$('Actualizar y apagar', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$));
      $receiver.times_ormu1i$('Actualizar y reiniciar', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Me he cansado de todo', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda$lambda(this.local$this$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda(closure$showExitOption, this$, this$_0) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Jugar de nuevo', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda(closure$showExitOption, this$, this$_0));
      $receiver.times_ormu1i$(this$.times_f4dhtg$('Salir', closure$showExitOption.v), DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3(this$_0, closure$showExitOption_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$showExitOption = closure$showExitOption_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('He ganado todos los puntos posibles', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Se me da bastante bien esto', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda$lambda(this.local$closure$showExitOption, this.local$this$, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_4(this$_0, closure$showExitOption_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3(this$_0, closure$showExitOption_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogueWithState$lambda$lambda(this$, closure$sayHello, closure$state, closure$end, closure$showExitOption) {
    return function ($receiver) {
      $receiver.section_wopz0g$('start', void 0, DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda(this$, closure$sayHello));
      $receiver.section_wopz0g$('BASURA', DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_0(closure$state), DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_1(this$, closure$end));
      $receiver.section_wopz0g$('half', void 0, DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_2(closure$state, this$));
      $receiver.section_wopz0g$('end', void 0, DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_3(this$, closure$end));
      $receiver.section_wopz0g$('GOOD_ENDING', void 0, DemoDialogues$firstSceneDialogueWithState$lambda$lambda$lambda_4(this$, closure$showExitOption));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda($receiver_0, state_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$state = state_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda;
  Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var end = {v: false};
            var showExitOption = {v: false};
            var sayHello = {v: true};
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.conversation_qlupru$(DemoDialogues$firstSceneDialogueWithState$lambda$lambda(this.local$$receiver, sayHello, this.local$state, end, showExitOption), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogueWithState$lambda($receiver_0, state_0, continuation_0, suspended) {
    var instance = new Coroutine$DemoDialogues$firstSceneDialogueWithState$lambda($receiver_0, state_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Hello', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0(closure$basuraExaminada) {
    return function () {
      return closure$basuraExaminada.v;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0(this$_0, closure$end_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$end = closure$end_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Fuera hay una bolsa de basura igualita a t\xED', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Max', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('No tienes sentimientos', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$closure$end.v = true;
            return this.local$this$.goto_hfpob1$(this.local$$receiver, 'end'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1(this$_0, closure$end_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0(this$_0, closure$end_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1(closure$basuraExaminada_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$basuraExaminada = closure$basuraExaminada_0;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$basuraExaminada.v = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('This is a dialogue example', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('It is really easy to code', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2(closure$basuraExaminada_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1(closure$basuraExaminada_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2(this$_0, closure$end_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$end = closure$end_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Thanks for all!', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$closure$end.v) {
              return this.local$this$.goto_hfpob1$(this.local$$receiver, 'start'), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3(this$_0, closure$end_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2(this$_0, closure$end_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda(this$_1, this$_2, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_1;
    this.local$this$_0 = this$_2;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Creo que me apetece tener la misma conversaci\xF3n otra vez', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$.goto_hfpob1$(this.local$this$_0, 'start'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda(this$_1, this$_2) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda(this$_1, this$_2, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Cambiar\xE9 unas opciones gr\xE1ficas y volver\xE9 a jugar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Voy a borrar esto tan pronto salga', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Salir al men\xFA principal', DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$));
      $receiver.times_ormu1i$('Salir al escritorio', DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Me he cansado de todo', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda$lambda(this.local$this$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda(this$, this$_0) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Jugar de nuevo', DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda(this$, this$_0));
      $receiver.times_ormu1i$('Salir', DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('He ganado todos los puntos posibles', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Se me da bastante bien esto', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$firstSceneDialogue$lambda$lambda$lambda$lambda(this.local$this$, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_4(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$firstSceneDialogue$lambda$lambda(this$, closure$basuraExaminada, closure$end) {
    return function ($receiver) {
      $receiver.section_wopz0g$('start', void 0, DemoDialogues$firstSceneDialogue$lambda$lambda$lambda(this$));
      $receiver.section_wopz0g$('BASURA', DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_0(closure$basuraExaminada), DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_1(this$, closure$end));
      $receiver.section_wopz0g$('half', void 0, DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_2(closure$basuraExaminada, this$));
      $receiver.section_wopz0g$('end', void 0, DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_3(this$, closure$end));
      $receiver.section_wopz0g$('GOOD_ENDING', void 0, DemoDialogues$firstSceneDialogue$lambda$lambda$lambda_4(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$firstSceneDialogue$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$firstSceneDialogue$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$firstSceneDialogue$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$firstSceneDialogue$lambda.prototype.constructor = Coroutine$DemoDialogues$firstSceneDialogue$lambda;
  Coroutine$DemoDialogues$firstSceneDialogue$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var basuraExaminada = {v: false};
            var end = {v: false};
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.conversation_qlupru$(DemoDialogues$firstSceneDialogue$lambda$lambda(this.local$$receiver, basuraExaminada, end), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$firstSceneDialogue$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$DemoDialogues$firstSceneDialogue$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda(closure$direction_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$direction = closure$direction_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$direction.v = Room$Direction$up_getInstance(), Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda(closure$direction_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda(closure$direction_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0(closure$direction_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$direction = closure$direction_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$direction.v = Room$Direction$down_getInstance(), Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0(closure$direction_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0(closure$direction_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1(closure$direction_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$direction = closure$direction_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$direction.v = Room$Direction$left_getInstance(), Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1(closure$direction_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1(closure$direction_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2(closure$direction_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$direction = closure$direction_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$direction.v = Room$Direction$right_getInstance(), Unit;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2(closure$direction_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2(closure$direction_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda(closure$direction) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Up', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda(closure$direction));
      $receiver.times_ormu1i$('Down', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_0(closure$direction));
      $receiver.times_ormu1i$('Left', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_1(closure$direction));
      $receiver.times_ormu1i$('Right', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_2(closure$direction));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda(this$_0, closure$direction_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$direction = closure$direction_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Hola', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Esto es un ejemplo de conversaci\xF3n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Guybrush', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('\xA1Quiero ser un pirata!', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('No me gusta esa actitud', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Hay que comprar los juegos buenos', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Guybrush', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('\xBFHacia d\xF3nde quieres ir?', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$testDialogue$lambda$lambda$lambda$lambda(this.local$closure$direction), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Guybrush', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Has elegido ' + this.local$closure$direction.v + '...', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            if (this.local$closure$direction.v === Room$Direction$down_getInstance()) {
              this.state_0 = 15;
              this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Sin duda esa era la peor opci\xF3n', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 16;
              continue;
            }

          case 15:
            this.local$this$.goto_hfpob1$(this.local$$receiver, 'BAD_ENDING');
            return;
          case 16:
            this.state_0 = 17;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Hasta nunca.', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.state_0 = 18;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.state_0 = 19;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Es usted un tipo muy extra\xF1o', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            return this.local$this$.goto_hfpob1$(this.local$$receiver, 'GOOD_ENDING'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda(this$_0, closure$direction_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda(this$_0, closure$direction_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Oh no, deber\xEDa haber elegido la otra opci\xF3n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Mejor cargo una partida guardada', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.local$this$.goto_hfpob1$(this.local$$receiver, 'START'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3(this$_1, this$_2, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_1;
    this.local$this$_0 = this$_2;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Creo que me apetece tener la misma conversaci\xF3n otra vez', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$.goto_hfpob1$(this.local$this$_0, 'START'), Unit;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3(this$_1, this$_2) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3(this$_1, this$_2, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Cambiar\xE9 unas opciones gr\xE1ficas y volver\xE9 a jugar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Voy a borrar esto tan pronto salga', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Salir al men\xFA principal', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$));
      $receiver.times_ormu1i$('Salir al escritorio', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Me he cansado de todo', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda$lambda(this.local$this$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$testDialogue$lambda$lambda$lambda$lambda_0(this$, this$_0) {
    return function ($receiver) {
      $receiver.times_ormu1i$('Jugar de nuevo', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_3(this$, this$_0));
      $receiver.times_ormu1i$('Salir', DemoDialogues$testDialogue$lambda$lambda$lambda$lambda$lambda_4(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1;
  Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.unaryMinus_pdl1vz$('Dani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('He ganado todos los puntos posibles', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$.unaryPlus_pdl1vz$('Se me da bastante bien esto', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$this$.options_zenrfu$(DemoDialogues$testDialogue$lambda$lambda$lambda$lambda_0(this.local$this$, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda$lambda$lambda_1(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DemoDialogues$testDialogue$lambda$lambda$lambda_1(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DemoDialogues$testDialogue$lambda$lambda(this$, closure$direction) {
    return function ($receiver) {
      $receiver.section_wopz0g$('START', void 0, DemoDialogues$testDialogue$lambda$lambda$lambda(this$, closure$direction));
      $receiver.section_wopz0g$('BAD_ENDING', void 0, DemoDialogues$testDialogue$lambda$lambda$lambda_0(this$));
      $receiver.section_wopz0g$('GOOD_ENDING', void 0, DemoDialogues$testDialogue$lambda$lambda$lambda_1(this$));
      return Unit;
    };
  }
  function Coroutine$DemoDialogues$testDialogue$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DemoDialogues$testDialogue$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DemoDialogues$testDialogue$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DemoDialogues$testDialogue$lambda.prototype.constructor = Coroutine$DemoDialogues$testDialogue$lambda;
  Coroutine$DemoDialogues$testDialogue$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var direction = {v: Room$Direction$none_getInstance()};
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.conversation_qlupru$(DemoDialogues$testDialogue$lambda$lambda(this.local$$receiver, direction), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
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
  function DemoDialogues$testDialogue$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$DemoDialogues$testDialogue$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  DemoDialogues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoDialogues',
    interfaces: []
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
    }
    return Bunny$Companion_instance;
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
    }
    if (this.zf < Bunny$Companion_getInstance().minY) {
      this.speedYf *= -0.85;
      this.zf = Bunny$Companion_getInstance().minY;
      if (Random.Default.nextFloat() > 0.5) {
        this.speedYf -= Random.Default.nextFloat() * 6;
      }
    } else if (this.zf > Bunny$Companion_getInstance().maxY) {
      this.speedYf = 0.0;
      this.zf = Bunny$Companion_getInstance().maxY;
    }
    this.pos.X = this.xf;
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
    }
    if (this.keySpawnBlueprintBunny.pressed()) {
      this.spawnBunnies_btcm9r$(this.owner.BlueprintBunny);
    }
    if (this.keySpawnKotlinOptimizedBunny.pressed()) {
      this.spawnOptimizedBunnies_btcm9r$(this.owner.KotlinOptimizedBunny);
    }
    var tmp$;
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
    }
    return OptimizedBunny$Companion_instance;
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
    }
    if (this.zf < OptimizedBunny$Companion_getInstance().minY) {
      this.speedYf *= -0.85;
      this.zf = OptimizedBunny$Companion_getInstance().minY;
      if (Random.Default.nextFloat() > 0.5) {
        this.speedYf -= Random.Default.nextFloat() * 6;
      }
    } else if (this.zf > OptimizedBunny$Companion_getInstance().maxY) {
      this.speedYf = 0.0;
      this.zf = OptimizedBunny$Companion_getInstance().maxY;
    }
    this.pos.X = this.xf;
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
    }
  };
  RedRotatingCube.prototype.BeginOverlap = function (other) {
    this.touched = this.touched + 1 | 0;
    if (this.touched > 30) {
      return 'die';
    }
    return 'touched ' + this.touched + ' times by ' + other.GetName();
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
    console.log(this.actor.CapsuleComponent);
    console.log(this.actor);
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
    GWorld.LineTraceByChannel(tempStartTrace, tempEndTrace, 'TraceTypeQuery2', true, [this.actor], 'ForDuration', tempHitResult, true, LinearColor_0(1, 0, 0), LinearColor_0(1, 0, 0), 3);
    var damageActor = tempHitResult.Component.GetOwner();
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
    var damageActor = tempHitResult.Component.GetOwner();
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
      }
    }
    if (damageActor != null && damageComponent != null && damageComponent.IsSimulatingPhysics('')) {
      var tempImpulseVector = tempForwardDirection.Multiply_VectorFloat(this.weaponDamage);
      damageComponent.AddImpulseAtLocation(tempImpulseVector, tempHitResult.ImpactPoint, '');
    }
  };
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
    }
    return Pickup$Companion_instance;
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
    var plate = GetComponentByClass(actor, StaticMeshComponent);
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
    this.actor.TextRender.SetText('Hello Kotlin!');
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
  };
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
        var p = Vector_0(void 0, JsMath.cos(rad) * r, JsMath.sin(rad) * r).Add_VectorVector(closure$opts.p);
        closure$actor.SetActorLocation(p, false);
      }
    };
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
      var velocity = this.movementComponent.Velocity;
      if (numberToDouble(velocity.Z) > this.MIN_JUMP_Z_VELOCITY) {
        var tmp$ = this.movementComponent;
        var Z = this.MIN_JUMP_Z_VELOCITY;
        tmp$.Velocity = Vector_0(velocity.X, velocity.Y, Z);
      }
      this.stopJump();
    }
    this.Turn_14dthe$(this.axisTurn());
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
    }
    return KotlinUnrealClassCache_instance;
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
  function SpawnSound2D(WorldContextObject, Sound) {
    return GameplayStatics.SpawnSound2D(WorldContextObject, Sound, 1, 1, 0, undefined, false, true);
  }
  function GetComponentByName($receiver, ComponentClass, Name) {
    var tmp$;
    var nameToCheck = Name.toLowerCase();
    var $receiver_0 = $receiver.GetComponentsByClass(ComponentClass);
    var destination = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element = $receiver_0[tmp$_0];
      if (equals(element.GetName().toLowerCase(), nameToCheck))
        destination.add_11rb$(element);
    }
    var components = destination;
    if (components.isEmpty())
      return (tmp$ = null) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    return first(components);
  }
  function GetComponentByClass($receiver, ComponentClass) {
    return $receiver.GetComponentByClass(ComponentClass);
  }
  function GetComponentsByClass($receiver, ComponentClass) {
    return $receiver.GetComponentsByClass(ComponentClass);
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
  _.InteractiveChest = InteractiveChest;
  _.InteractiveCube = InteractiveCube;
  _.InteractiveObjectBase = InteractiveObjectBase;
  var package$lis = package$adventure.lis || (package$adventure.lis = {});
  package$lis.Conversation = Conversation;
  package$lis.Section = Section;
  package$lis.ConversationOptions = ConversationOptions;
  package$lis.ConversationOption = ConversationOption;
  package$lis.ConversationDsl = ConversationDsl;
  package$lis.ConversationBuilder = ConversationBuilder;
  package$lis.ConversationOptionsDsl = ConversationOptionsDsl;
  package$lis.ConversationOptionsBuilder = ConversationOptionsBuilder;
  package$lis.ConversationState = ConversationState;
  package$lis.dialogue_vxnoma$ = dialogue;
  package$lis.dialogue_66dspz$ = dialogue_0;
  Dialogue.SectionList = Dialogue$SectionList;
  package$lis.Dialogue = Dialogue;
  GlobalConversationState.DummyConversationState = GlobalConversationState$DummyConversationState;
  package$lis.GlobalConversationState = GlobalConversationState;
  package$lis.dialogue_lh4ru8$ = dialogue_1;
  package$lis.dialogue_mwv37r$ = dialogue_2;
  Object.defineProperty(GameDialogues, 'Companion', {
    get: GameDialogues$Companion_getInstance
  });
  package$lis.GameDialogues = GameDialogues;
  Object.defineProperty(GameHud$InputMode, 'UI', {
    get: GameHud$InputMode$UI_getInstance
  });
  Object.defineProperty(GameHud$InputMode, 'Game', {
    get: GameHud$InputMode$Game_getInstance
  });
  GameHud.InputMode = GameHud$InputMode;
  Object.defineProperty(GameHud, 'Companion', {
    get: GameHud$Companion_getInstance
  });
  _.GameHud = GameHud;
  _.isEmpty_rzbkmd$ = isEmpty;
  _.isNotEmpty_rzbkmd$ = isNotEmpty;
  _.hasTextsAtPage_ls49xj$ = hasTextsAtPage;
  _.getLastPageIndex_rzbkmd$ = getLastPageIndex;
  _.hasSayAtPage_ls49xj$ = hasSayAtPage;
  _.InteractiveThing = InteractiveThing;
  Object.defineProperty(package$lis, 'RoomObjects', {
    get: RoomObjects_getInstance
  });
  package$lis.getActor_3p5k0p$ = getActor;
  package$lis.getActor_m5mpmu$ = getActor_0;
  package$lis.playSequence_9tdfa1$ = playSequence;
  package$lis.walkTo_za3rmp$ = walkTo;
  package$lis.say_61zpoe$ = say;
  Object.defineProperty(Room$Direction, 'none', {
    get: Room$Direction$none_getInstance
  });
  Object.defineProperty(Room$Direction, 'up', {
    get: Room$Direction$up_getInstance
  });
  Object.defineProperty(Room$Direction, 'down', {
    get: Room$Direction$down_getInstance
  });
  Object.defineProperty(Room$Direction, 'left', {
    get: Room$Direction$left_getInstance
  });
  Object.defineProperty(Room$Direction, 'right', {
    get: Room$Direction$right_getInstance
  });
  Room.Direction = Room$Direction;
  Room.GameGlobalState = Room$GameGlobalState;
  package$lis.Room = Room;
  package$lis.SuspendCallback = SuspendCallback;
  package$lis.InteractableObject = InteractableObject;
  package$lis.BaseInteractableObject = BaseInteractableObject;
  package$lis.RoomObject = RoomObject;
  package$lis.DemoDialogues = DemoDialogues;
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
  package$ue.SpawnSound2D_vohqug$ = SpawnSound2D;
  package$ue.GetComponentByName_4wsm31$ = GetComponentByName;
  package$ue.GetComponentByClass_xetjdt$ = GetComponentByClass;
  package$ue.GetComponentsByClass_xetjdt$ = GetComponentsByClass;
  package$ue.Key_61zpoe$ = Key_0;
  package$ue.KeyListener = KeyListener;
  InteractionManager$nullInteractiveObject$ObjectLiteral.prototype.highlight_6taknv$ = InteractiveObject.prototype.highlight_6taknv$;
  InteractionManager$nullInteractiveObject$ObjectLiteral.prototype.doAction = InteractiveObject.prototype.doAction;
  InteractiveObjectBase.prototype.doAction = InteractiveObject.prototype.doAction;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-coroutines-core')));
