plugins {
    kotlin("multiplatform") version "1.7.10"
    id("convention.publication")
}

group = "io.github.hiperbou.ue"
version = "5.0.1"

repositories {
    mavenCentral()
}

kotlin {
    js(LEGACY) {
        browser {
        }
    }
    sourceSets {
        val jsMain by getting
    }
}
