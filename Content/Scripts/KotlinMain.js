try {
    module.exports = () => {
		console.log("--- LOADING kotlin-examples.JS ---")
		let examples = require('kotlin-examples')
        let cleanup = null
        process.nextTick(() => {
            cleanup = examples.init()
        });
        return () => { if(cleanup) cleanup() }
    }
}
catch (e) {
    console.log("--- TRY TO LOAD KOTLIN.JS ---")
    require('bootstrap')('KotlinMain')
}

