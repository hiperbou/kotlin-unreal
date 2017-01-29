if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-examples'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-examples'.");
}
this['kotlin-examples'] = function (_, Kotlin) {
  'use strict';
  function GenerateClass($receiver, world, position, rotation) {
    return new $receiver.GeneratedClass(world, position, rotation);
  }
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
      this.update_3p81yu$(0);
    }
  }
  HelloBlueprint.prototype.update_3p81yu$ = function (milliseconds) {
    this.yaw += 1.0;
    var tmp$ = this.actor;
    var $receiver = new Rotator();
    {
      $receiver.Yaw = this.yaw;
    }
    tmp$.SetActorRotation($receiver, false);
    this.timer = setTimeout(Kotlin.getBoundCallableRefForMemberFunction(this, 'update_3p81yu$'), 16);
  };
  HelloBlueprint.prototype.cleanup = function () {
    console.log('<<<cleanup>>>');
    this.actor.DestroyActor();
    clearTimeout(this.timer);
  };
  HelloBlueprint.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloBlueprint',
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
    return Kotlin.getBoundCallableRefForMemberFunction(new HelloBlueprint(), 'cleanup');
  }
  _.GenerateClass_1eyabd$ = GenerateClass;
  _.HelloBlueprint = HelloBlueprint;
  _.HelloKotlin = HelloKotlin;
  _.init = init;
  Kotlin.defineModule('kotlin-examples', _);
  return _;
}(typeof this['kotlin-examples'] === 'undefined' ? {} : this['kotlin-examples'], kotlin);
