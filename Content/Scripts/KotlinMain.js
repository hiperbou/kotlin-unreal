
try {
    module.exports = () => {
		console.log("--- LOADING kotlin-examples.JS ---")
		let examples = require('kotlin-examples')
        let cleanup = null
        process.nextTick(() => cleanup = examples.init());
        return () => cleanup()
    }
}
catch (e) {
    //require('bootstrap')('KotlinMain')
	console.log("--- TRY TO LOAD KOTLIN.JS ---")
	require('lib/kotlin.js')
	require('bootstrap')('KotlinMain')
}

