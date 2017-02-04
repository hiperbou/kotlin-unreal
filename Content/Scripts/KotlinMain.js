
try {
    module.exports = () => {
		console.log("--- LOADING kotlin-examples.JS ---")
		let examples = require('kotlin-examples')
        let cleanup = null
        process.nextTick(() => cleanup = examples.init());
        //process.nextTick(() => cleanup = new examples.ThirdPerson());
        //process.nextTick(() => cleanup = new examples.SceneLights());
        return () => cleanup()
    }
}
catch (e) {
	console.log("--- TRY TO LOAD KOTLIN.JS ---")
	require('bootstrap')('KotlinMain')
}

