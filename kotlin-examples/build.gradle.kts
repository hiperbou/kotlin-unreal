plugins {
    kotlin("js") version "1.7.10"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    //mavenLocal()
    mavenCentral()
}

dependencies {
    implementation("io.github.hiperbou.ue:kotlin-unreal-definitions:5.0.1")
    //implementation("io.github.hiperbou.ue:kotlin-unreal-definitions:5.0.1-SNAPSHOT")

    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.2")

    testImplementation(kotlin("test"))
}

kotlin {
    js(LEGACY) {
        binaries.executable()
        useCommonJs()
        /*browser {
            //webpackTask {
            //    output.libraryTarget = "commonjs"
           // }
            dceTask {
                dceOptions.devMode = true
            }

        }*/
    }
}

tasks {
    build {
        doLast {
            copy {
                from("build/classes/kotlin/main") {
                    include("kotlin-examples.js")
                }
                into("../Content/Scripts")
            }
        }
    }
}

