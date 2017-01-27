
try {
    module.exports = () => {
		console.log("--- TRY TO LOAD KOTLIN.JS ---")
		Context.RunFile('lib/kotlin.js')
		console.log("--- LOADING KOTLINUNREAL.JS ---")
		Context.RunFile('KotlinUnreal.js')

        let cleanup = null
        //process.nextTick(() => cleanup = main());
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('KotlinMain')
}

