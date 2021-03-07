(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  TraceBase$None.prototype = Object.create(TraceBase.prototype);
  TraceBase$None.prototype.constructor = TraceBase$None;
  function atomicArrayOfNulls(size) {
    return new AtomicArray(size);
  }
  var loop = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_jlk8u1$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return;
    }
  });
  var getAndUpdate = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return cur;
    }
  });
  var updateAndGet = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  });
  var loop_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_835cj1$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return;
    }
  });
  var getAndUpdate_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return cur;
    }
  });
  var updateAndGet_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  });
  var loop_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_737bgt$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return;
    }
  });
  var getAndUpdate_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return cur;
    }
  });
  var updateAndGet_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  });
  var loop_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_ian79v$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return;
    }
  });
  var getAndUpdate_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return cur;
    }
  });
  var updateAndGet_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  });
  function AtomicIntArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_2(0);
    }
    this.array_0 = array;
  }
  Object.defineProperty(AtomicIntArray.prototype, 'atomicfu$size', {
    configurable: true,
    get: function () {
      return this.array_0.length;
    }
  });
  AtomicIntArray.prototype.atomicfu$get = function (index) {
    return this.array_0[index];
  };
  AtomicIntArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicIntArray',
    interfaces: []
  };
  function AtomicLongArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_4(L0);
    }
    this.array_0 = array;
  }
  Object.defineProperty(AtomicLongArray.prototype, 'atomicfu$size', {
    configurable: true,
    get: function () {
      return this.array_0.length;
    }
  });
  AtomicLongArray.prototype.atomicfu$get = function (index) {
    return this.array_0[index];
  };
  AtomicLongArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLongArray',
    interfaces: []
  };
  function AtomicBooleanArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_6(false);
    }
    this.array_0 = array;
  }
  Object.defineProperty(AtomicBooleanArray.prototype, 'atomicfu$size', {
    configurable: true,
    get: function () {
      return this.array_0.length;
    }
  });
  AtomicBooleanArray.prototype.atomicfu$get = function (index) {
    return this.array_0[index];
  };
  AtomicBooleanArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBooleanArray',
    interfaces: []
  };
  function AtomicArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_0(null);
    }
    this.array_0 = array;
  }
  Object.defineProperty(AtomicArray.prototype, 'atomicfu$size', {
    configurable: true,
    get: function () {
      return this.array_0.length;
    }
  });
  AtomicArray.prototype.atomicfu$get = function (index) {
    return this.array_0[index];
  };
  AtomicArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicArray',
    interfaces: []
  };
  var ATOMIC_REF_FACTORY;
  var ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_INT_FACTORY;
  var ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_LONG_FACTORY;
  var ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_BOOLEAN_FACTORY;
  var ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_VALUE;
  var COMPARE_AND_SET;
  var GET_AND_SET;
  var GET_AND_INCREMENT;
  var GET_AND_INCREMENT_LONG;
  var GET_AND_DECREMENT;
  var GET_AND_DECREMENT_LONG;
  var INCREMENT_AND_GET;
  var INCREMENT_AND_GET_LONG;
  var DECREMENT_AND_GET;
  var DECREMENT_AND_GET_LONG;
  var GET_AND_ADD;
  var GET_AND_ADD_LONG;
  var ADD_AND_GET;
  var ADD_AND_GET_LONG;
  var ATOMIC_ARRAY_OF_NULLS;
  var ATOMIC_INT_ARRAY;
  var ATOMIC_LONG_ARRAY;
  var ATOMIC_BOOLEAN_ARRAY;
  var ATOMIC_REF_ARRAY;
  var ARRAY_SIZE;
  var ARRAY_ELEMENT_GET;
  var REENTRANT_LOCK;
  var TRACE_FACTORY_FUNCTION;
  var TRACE_BASE_CONSTRUCTOR;
  var TRACE_NAMED;
  var TRACE_FORMAT_CLASS;
  var TRACE_FORMAT_FORMAT_FUNCTION;
  var TRACE_APPEND_1;
  var TRACE_APPEND_2;
  var TRACE_APPEND_3;
  var TRACE_APPEND_4;
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.prototype.invoke_t0s8mz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.TraceBase.invoke_t0s8mz$', function (event) {
    this.atomicfu$Trace$append$1(event());
  });
  function TraceBase$None() {
    TraceBase$None_instance = this;
    TraceBase.call(this);
  }
  TraceBase$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [TraceBase]
  };
  var TraceBase$None_instance = null;
  function TraceBase$None_getInstance() {
    if (TraceBase$None_instance === null) {
      new TraceBase$None();
    }return TraceBase$None_instance;
  }
  TraceBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceBase',
    interfaces: []
  };
  function TraceFormat() {
  }
  TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    return index.toString() + ': ' + event.toString();
  };
  TraceFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceFormat',
    interfaces: []
  };
  var TraceFormat_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.TraceFormat_djn135$', wrapFunction(function () {
    var TraceFormat = _.kotlinx.atomicfu.atomicfu$TraceFormat;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    TraceFormat$ObjectLiteral.prototype = Object.create(TraceFormat.prototype);
    TraceFormat$ObjectLiteral.prototype.constructor = TraceFormat$ObjectLiteral;
    function TraceFormat$ObjectLiteral(closure$format) {
      this.closure$format = closure$format;
      TraceFormat.call(this);
    }
    TraceFormat$ObjectLiteral.prototype.atomicfu$TraceFormat$format = function (index, event) {
      return this.closure$format(index, event);
    };
    TraceFormat$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [TraceFormat]
    };
    return function (format) {
      return new TraceFormat$ObjectLiteral(format);
    };
  }));
  function atomic(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicRef(initial);
  }
  function atomic_0(initial) {
    return atomic(initial, TraceBase$None_getInstance());
  }
  function atomic_1(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicInt(initial);
  }
  function atomic_2(initial) {
    return atomic_1(initial, TraceBase$None_getInstance());
  }
  function atomic_3(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicLong(initial);
  }
  function atomic_4(initial) {
    return atomic_3(initial, TraceBase$None_getInstance());
  }
  function atomic_5(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicBoolean(initial);
  }
  function atomic_6(initial) {
    return atomic_5(initial, TraceBase$None_getInstance());
  }
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicRef.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicRef.prototype.setValue_sq4zib$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.setValue_sq4zib$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicRef.prototype.lazySet_11rb$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.lazySet_11rb$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  AtomicRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicRef',
    interfaces: []
  };
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicBoolean.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicBoolean.prototype.setValue_t08ssb$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.setValue_t08ssb$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicBoolean.prototype.lazySet_6taknv$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.lazySet_6taknv$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicBoolean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBoolean',
    interfaces: []
  };
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicInt.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicInt.prototype.setValue_4vfhis$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.setValue_4vfhis$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicInt.prototype.lazySet_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.lazySet_za3lpa$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ + 1 | 0, tmp$;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ - 1 | 0, tmp$;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.plusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.plusAssign_za3lpa$', function (delta) {
    this.atomicfu$getAndAdd(delta);
  });
  AtomicInt.prototype.minusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.minusAssign_za3lpa$', function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  });
  AtomicInt.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicInt',
    interfaces: []
  };
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicLong.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicLong.prototype.setValue_9021kx$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.setValue_9021kx$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicLong.prototype.lazySet_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.lazySet_s8cxhz$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!equals(this.kotlinx$atomicfu$value, expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.inc(), tmp$;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.dec(), tmp$;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.inc(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.dec(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.plusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.plusAssign_s8cxhz$', function (delta) {
    this.atomicfu$getAndAdd$long(delta);
  });
  AtomicLong.prototype.minusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.minusAssign_s8cxhz$', function (delta) {
    this.atomicfu$getAndAdd$long(delta.unaryMinus());
  });
  AtomicLong.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicLong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLong',
    interfaces: []
  };
  function Trace(size, format) {
    if (size === void 0)
      size = 32;
    if (format === void 0)
      format = traceFormatDefault;
    return TraceBase$None_getInstance();
  }
  function named($receiver, name) {
    return TraceBase$None_getInstance();
  }
  var traceFormatDefault;
  var Lock;
  var reentrantLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.reentrantLock', wrapFunction(function () {
    var locks = _.kotlinx.atomicfu.locks;
    return function () {
      return locks.atomicfu$reentrantLock;
    };
  }));
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.lock', function () {
  });
  ReentrantLock.prototype.tryLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.tryLock', function () {
    return true;
  });
  ReentrantLock.prototype.unlock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.unlock', function () {
  });
  ReentrantLock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReentrantLock',
    interfaces: []
  };
  var withLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.withLock_1uzpy$', function ($receiver, block) {
    return block();
  });
  var synchronized = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.synchronized_eocq09$', function (lock, block) {
    return block();
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$atomicfu = package$kotlinx.atomicfu || (package$kotlinx.atomicfu = {});
  package$atomicfu.atomicfu$AtomicRefArray$ofNulls = atomicArrayOfNulls;
  $$importsForInline$$['kotlinx-atomicfu'] = _;
  package$atomicfu.loop_jlk8u1$ = loop;
  package$atomicfu.update_xk4wt8$ = update;
  package$atomicfu.getAndUpdate_xk4wt8$ = getAndUpdate;
  package$atomicfu.updateAndGet_xk4wt8$ = updateAndGet;
  package$atomicfu.loop_835cj1$ = loop_0;
  package$atomicfu.update_toml5v$ = update_0;
  package$atomicfu.getAndUpdate_toml5v$ = getAndUpdate_0;
  package$atomicfu.updateAndGet_toml5v$ = updateAndGet_0;
  package$atomicfu.loop_737bgt$ = loop_1;
  package$atomicfu.update_4tf4dm$ = update_1;
  package$atomicfu.getAndUpdate_4tf4dm$ = getAndUpdate_1;
  package$atomicfu.updateAndGet_4tf4dm$ = updateAndGet_1;
  package$atomicfu.loop_ian79v$ = loop_2;
  package$atomicfu.update_ifkm8b$ = update_2;
  package$atomicfu.getAndUpdate_ifkm8b$ = getAndUpdate_2;
  package$atomicfu.updateAndGet_ifkm8b$ = updateAndGet_2;
  package$atomicfu.atomicfu$AtomicIntArray$int = AtomicIntArray;
  package$atomicfu.atomicfu$AtomicLongArray$long = AtomicLongArray;
  package$atomicfu.atomicfu$AtomicBooleanArray$boolean = AtomicBooleanArray;
  package$atomicfu.atomicfu$AtomicRefArray$ref = AtomicArray;
  Object.defineProperty(package$atomicfu, 'ATOMIC_REF_FACTORY_8be2vx$', {
    get: function () {
      return ATOMIC_REF_FACTORY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY_8be2vx$', {
    get: function () {
      return ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_INT_FACTORY_8be2vx$', {
    get: function () {
      return ATOMIC_INT_FACTORY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY_8be2vx$', {
    get: function () {
      return ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_LONG_FACTORY_8be2vx$', {
    get: function () {
      return ATOMIC_LONG_FACTORY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY_8be2vx$', {
    get: function () {
      return ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_BOOLEAN_FACTORY_8be2vx$', {
    get: function () {
      return ATOMIC_BOOLEAN_FACTORY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY_8be2vx$', {
    get: function () {
      return ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_VALUE_8be2vx$', {
    get: function () {
      return ATOMIC_VALUE;
    }
  });
  Object.defineProperty(package$atomicfu, 'COMPARE_AND_SET_8be2vx$', {
    get: function () {
      return COMPARE_AND_SET;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_SET_8be2vx$', {
    get: function () {
      return GET_AND_SET;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_INCREMENT_8be2vx$', {
    get: function () {
      return GET_AND_INCREMENT;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_INCREMENT_LONG_8be2vx$', {
    get: function () {
      return GET_AND_INCREMENT_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_DECREMENT_8be2vx$', {
    get: function () {
      return GET_AND_DECREMENT;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_DECREMENT_LONG_8be2vx$', {
    get: function () {
      return GET_AND_DECREMENT_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'INCREMENT_AND_GET_8be2vx$', {
    get: function () {
      return INCREMENT_AND_GET;
    }
  });
  Object.defineProperty(package$atomicfu, 'INCREMENT_AND_GET_LONG_8be2vx$', {
    get: function () {
      return INCREMENT_AND_GET_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'DECREMENT_AND_GET_8be2vx$', {
    get: function () {
      return DECREMENT_AND_GET;
    }
  });
  Object.defineProperty(package$atomicfu, 'DECREMENT_AND_GET_LONG_8be2vx$', {
    get: function () {
      return DECREMENT_AND_GET_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_ADD_8be2vx$', {
    get: function () {
      return GET_AND_ADD;
    }
  });
  Object.defineProperty(package$atomicfu, 'GET_AND_ADD_LONG_8be2vx$', {
    get: function () {
      return GET_AND_ADD_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'ADD_AND_GET_8be2vx$', {
    get: function () {
      return ADD_AND_GET;
    }
  });
  Object.defineProperty(package$atomicfu, 'ADD_AND_GET_LONG_8be2vx$', {
    get: function () {
      return ADD_AND_GET_LONG;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_ARRAY_OF_NULLS_8be2vx$', {
    get: function () {
      return ATOMIC_ARRAY_OF_NULLS;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_INT_ARRAY_8be2vx$', {
    get: function () {
      return ATOMIC_INT_ARRAY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_LONG_ARRAY_8be2vx$', {
    get: function () {
      return ATOMIC_LONG_ARRAY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_BOOLEAN_ARRAY_8be2vx$', {
    get: function () {
      return ATOMIC_BOOLEAN_ARRAY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ATOMIC_REF_ARRAY_8be2vx$', {
    get: function () {
      return ATOMIC_REF_ARRAY;
    }
  });
  Object.defineProperty(package$atomicfu, 'ARRAY_SIZE_8be2vx$', {
    get: function () {
      return ARRAY_SIZE;
    }
  });
  Object.defineProperty(package$atomicfu, 'ARRAY_ELEMENT_GET_8be2vx$', {
    get: function () {
      return ARRAY_ELEMENT_GET;
    }
  });
  Object.defineProperty(package$atomicfu, 'REENTRANT_LOCK_8be2vx$', {
    get: function () {
      return REENTRANT_LOCK;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_FACTORY_FUNCTION_8be2vx$', {
    get: function () {
      return TRACE_FACTORY_FUNCTION;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_BASE_CONSTRUCTOR_8be2vx$', {
    get: function () {
      return TRACE_BASE_CONSTRUCTOR;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_NAMED_8be2vx$', {
    get: function () {
      return TRACE_NAMED;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_FORMAT_CLASS_8be2vx$', {
    get: function () {
      return TRACE_FORMAT_CLASS;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_FORMAT_FORMAT_FUNCTION_8be2vx$', {
    get: function () {
      return TRACE_FORMAT_FORMAT_FUNCTION;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_APPEND_1_8be2vx$', {
    get: function () {
      return TRACE_APPEND_1;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_APPEND_2_8be2vx$', {
    get: function () {
      return TRACE_APPEND_2;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_APPEND_3_8be2vx$', {
    get: function () {
      return TRACE_APPEND_3;
    }
  });
  Object.defineProperty(package$atomicfu, 'TRACE_APPEND_4_8be2vx$', {
    get: function () {
      return TRACE_APPEND_4;
    }
  });
  Object.defineProperty(TraceBase, 'None', {
    get: TraceBase$None_getInstance
  });
  package$atomicfu.atomicfu$TraceBase = TraceBase;
  package$atomicfu.atomicfu$TraceFormat = TraceFormat;
  package$atomicfu.atomic$ref$ = atomic;
  package$atomicfu.atomic$ref$1 = atomic_0;
  package$atomicfu.atomic$int$ = atomic_1;
  package$atomicfu.atomic$int$1 = atomic_2;
  package$atomicfu.atomic$long$ = atomic_3;
  package$atomicfu.atomic$long$1 = atomic_4;
  package$atomicfu.atomic$boolean$ = atomic_5;
  package$atomicfu.atomic$boolean$1 = atomic_6;
  package$atomicfu.AtomicRef = AtomicRef;
  package$atomicfu.AtomicBoolean = AtomicBoolean;
  package$atomicfu.AtomicInt = AtomicInt;
  package$atomicfu.AtomicLong = AtomicLong;
  package$atomicfu.atomicfu$Trace = Trace;
  package$atomicfu.atomicfu$Trace$named = named;
  Object.defineProperty(package$atomicfu, 'traceFormatDefault', {
    get: function () {
      return traceFormatDefault;
    }
  });
  var package$locks = package$atomicfu.locks || (package$atomicfu.locks = {});
  Object.defineProperty(package$locks, 'atomicfu$reentrantLock', {
    get: function () {
      return Lock;
    }
  });
  package$locks.reentrantLock = reentrantLock;
  package$locks.ReentrantLock = ReentrantLock;
  package$locks.withLock_1uzpy$ = withLock;
  package$locks.synchronized_eocq09$ = synchronized;
  ATOMIC_REF_FACTORY = 'atomic$ref$';
  ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY = 'atomic$ref$1';
  ATOMIC_INT_FACTORY = 'atomic$int$';
  ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY = 'atomic$int$1';
  ATOMIC_LONG_FACTORY = 'atomic$long$';
  ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY = 'atomic$long$1';
  ATOMIC_BOOLEAN_FACTORY = 'atomic$boolean$';
  ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY = 'atomic$boolean$1';
  ATOMIC_VALUE = 'kotlinx$atomicfu$value';
  COMPARE_AND_SET = 'atomicfu$compareAndSet';
  GET_AND_SET = 'atomicfu$getAndSet';
  GET_AND_INCREMENT = 'atomicfu$getAndIncrement';
  GET_AND_INCREMENT_LONG = 'atomicfu$getAndIncrement$long';
  GET_AND_DECREMENT = 'atomicfu$getAndDecrement';
  GET_AND_DECREMENT_LONG = 'atomicfu$getAndDecrement$long';
  INCREMENT_AND_GET = 'atomicfu$incrementAndGet';
  INCREMENT_AND_GET_LONG = 'atomicfu$incrementAndGet$long';
  DECREMENT_AND_GET = 'atomicfu$decrementAndGet';
  DECREMENT_AND_GET_LONG = 'atomicfu$decrementAndGet$long';
  GET_AND_ADD = 'atomicfu$getAndAdd';
  GET_AND_ADD_LONG = 'atomicfu$getAndAdd$long';
  ADD_AND_GET = 'atomicfu$addAndGet';
  ADD_AND_GET_LONG = 'atomicfu$addAndGet$long';
  ATOMIC_ARRAY_OF_NULLS = 'atomicfu$AtomicRefArray$ofNulls';
  ATOMIC_INT_ARRAY = 'atomicfu$AtomicIntArray$int';
  ATOMIC_LONG_ARRAY = 'atomicfu$AtomicLongArray$long';
  ATOMIC_BOOLEAN_ARRAY = 'atomicfu$AtomicBooleanArray$boolean';
  ATOMIC_REF_ARRAY = 'atomicfu$AtomicRefArray$ref';
  ARRAY_SIZE = 'atomicfu$size';
  ARRAY_ELEMENT_GET = 'atomicfu$get';
  REENTRANT_LOCK = 'atomicfu$reentrantLock';
  TRACE_FACTORY_FUNCTION = 'atomicfu$Trace';
  TRACE_BASE_CONSTRUCTOR = 'atomicfu$TraceBase';
  TRACE_NAMED = 'atomicfu$Trace$named';
  TRACE_FORMAT_CLASS = 'atomicfu$TraceFormat';
  TRACE_FORMAT_FORMAT_FUNCTION = 'atomicfu$TraceFormat$format';
  TRACE_APPEND_1 = 'atomicfu$Trace$append$1';
  TRACE_APPEND_2 = 'atomicfu$Trace$append$2';
  TRACE_APPEND_3 = 'atomicfu$Trace$append$3';
  TRACE_APPEND_4 = 'atomicfu$Trace$append$4';
  traceFormatDefault = new TraceFormat();
  Lock = new ReentrantLock();
  Kotlin.defineModule('kotlinx-atomicfu', _);
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
