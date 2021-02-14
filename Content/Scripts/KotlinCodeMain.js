/*(function (global) {
    global.kotlinUnreal = {}
    global.kotlinUnreal.code = require('kotlin-examples')
    console.log("loaded Kotlin code")
  })(this)*/

try {
    module.exports = () => {
        console.log("--- LOADING kotlin code ---")

        global.kotlinUnreal = {};
        global.kotlinUnreal.code = require('kotlin-examples');
        console.log("loaded Kotlin code");

        let cleanup = null;
        //process.nextTick(() => {
        cleanup = global.kotlinUnreal.code.init();
        //});
        return () => { if(cleanup) cleanup() }
    }
}
catch (e) {
    console.log("--- TRY TO LOAD KOTLIN.JS ---");
    require('bootstrap')('KotlinCodeMain');
}
