# kotlin-unreal
kotlin-unreal: Use the amazing [Kotlin](https://kotlinlang.org/) language with UnrealEngine 4 and UnrealEngine 5

Uses Unreal.js wich is a Javascript runtime built for **UE4** and **UE5**

## Features
- Access to all Blueprint functions and classes
- A KotlinComponent attachable to an actor to control its behavior
- Interoperation between variables and functions defined at the Blueprint level
- Customizable Hot Reload: Apply code updates to everything or to the actors you're interested in, while in play mode.

## Prerequisites
Unreal 4.26.1 - 4.27.2 or **Unreal 5.0.0 - 5.0.1**, but may work with other versions too.

Being able to build and run a Unreal C++ project and having all its dependencies installed.

IntelliJ IDEA Community: https://www.jetbrains.com/idea/download/

## Installation

- Install Unreal.js plugin in your engine. The easiest way is finding it on the Unreal Marketplace:
https://www.unrealengine.com/marketplace/en-US/product/unrealjs

If you can't find it in the Unreal Marketplace, you can install it manually following this instructions:
https://github.com/ncsoft/Unreal.js/

- Clone or download this repository.

  Optionally change to a branch matching your engine version:
  
  [master](https://github.com/hiperbou/kotlin-unreal) branch will always be updated with the latest Unreal Engine version
  
  **Unreal Engine 5**
  
  [UE5.0.1](https://github.com/hiperbou/kotlin-unreal/tree/UE5.0.1-Kotlin1.4.31)
  
  **Unreal Engine 4**
  
  [UE4.27.2](https://github.com/hiperbou/kotlin-unreal/tree/UE4.27.2-Kotlin1.4.31), 
  [UE4.27.1](https://github.com/hiperbou/kotlin-unreal/tree/UE4.27.1-Kotlin1.4.31), 
  [UE4.26.1](https://github.com/hiperbou/kotlin-unreal/tree/UE4.26.1-Kotlin1.4.31)
  
- You should be able to right click the file "KotlinUnreal.uproject" and select "Launch Game"
- You might be asked to recompile or update the project to your engine version and after that you should be seeing the First Person Game example.

## Check out the map examples
Open the project with the Unreal Editor and open and play the maps located on the Maps directory inside the Content folder.
Some of them might look empty at first, but the Kotlin magic will fill them with surprises when you get into the Play mode.

## WIKI
Check out the wiki for details, tutorials and guides:

https://github.com/hiperbou/kotlin-unreal/wiki

## VIDEOS
Playlist on Youtube

https://youtube.com/playlist?list=PLJm5YzQnui1RfCue2NJtEKDSAJf-Kh0WG

## Code examples

First Person Game example (watch on [Youtube](https://youtu.be/Pcb3cdpAFFA?t=9)):

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/game/Game.kt
[![First Person Shooter example video](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/game.jpg)](https://youtu.be/Pcb3cdpAFFA?t=9)

Hello World example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/hello/HelloKotlin.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/helloworld.jpg)

Rotating cubes example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/cubes/WhiteRotatingCube.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/cubes.jpg)

Adventure example (Kotlin Coroutines):

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/adventure/InteractiveCube.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/adventure.jpg)

First Person example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/firstperson/FirstPerson.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/firstperson.jpg)

Third Person example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/thirdperson/ThirdPerson.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/thirdperson.jpg)

Scene Lights example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/scenelights/SceneLights.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/scenelights.jpg)

Hello Blueprints example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/blueprint/HelloBlueprints.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/helloblueprints.jpeg)

Hello Blueprint example:

https://github.com/hiperbou/kotlin-unreal/blob/master/kotlin-examples/src/examples/blueprint/HelloBlueprint.kt
![](https://github.com/hiperbou/kotlin-unreal/blob/master/Screenshots/helloblueprint.jpg)
