
try {
    module.exports = () => {
		console.log("--- LOADING kotlin-examples.JS ---")
		Context.RunFile('kotlin-examples.js')
        let cleanup = null
        process.nextTick(() => cleanup = this['kotlin-examples'].init());
        return () => cleanup()
    }
}
catch (e) {
    //require('bootstrap')('KotlinMain')
	console.log("--- TRY TO LOAD KOTLIN.JS ---")
	Context.RunFile('lib/kotlin.js')
	require('bootstrap')('KotlinMain')
}

