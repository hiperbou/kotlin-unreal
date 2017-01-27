if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinUnreal'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinUnreal'.");
}
var KotlinUnreal = function (_, Kotlin) {
  'use strict';
  function main(args) {
    console.log('Main Kotlin');
    new HelloKotlin();
  }
  function HelloKotlin() {
    this.yaw = 180.0;
    var $receiver = new Vector();
    {
      $receiver.X = 100;
      $receiver.Z = 100;
    }
    var pos = $receiver;
    var $receiver_0 = new Rotator();
    {
      $receiver_0.Yaw = this.yaw;
    }
    var rotator = $receiver_0;
    this.actor = new TextRenderActor(GWorld, pos, rotator);
    this.actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    this.actor.TextRender.SetText('Hello Kotlin!!');
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
    setTimeout(Kotlin.getBoundCallableRefForMemberFunction(this, 'update_3p81yu$'), 16);
  };
  HelloKotlin.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'HelloKotlin',
    baseClasses: []
  };
  _.main_kand9s$ = main;
  _.HelloKotlin = HelloKotlin;
  Kotlin.defineModule('KotlinUnreal', _);
  main([]);
  return _;
}(typeof KotlinUnreal === 'undefined' ? {} : KotlinUnreal, kotlin);
