#include "JSComponent.h"
#include "JavascriptComponent.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "Engine/World.h"
#include "Engine/Engine.h"
#include "IV8.h"
#include "JSGameInstance.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "Regex.h"
#include "JSObject.h"

UJSComponent::UJSComponent()
	: JavascriptContext(nullptr)
{
	PrimaryComponentTick.bCanEverTick = true;
	//PrimaryComponentTick.TickInterval = 0.03f;
	bTickInEditor = false;
	bAutoActivate = true;
	bWantsInitializeComponent = true;
}


void UJSComponent::BeginPlay()
{
	Super::BeginPlay();

	LoadJSFile();
}

void UJSComponent::TickComponent(float DeltaTime, enum ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	if (JsObject != nullptr)
	{
		return JsObject->Tick(DeltaTime);
	}
}

void UJSComponent::OnRegister()
{
	const auto ContextOwner = GetOuter();
	if (ContextOwner && !HasAnyFlags(RF_ClassDefaultObject) && !ContextOwner->HasAnyFlags(RF_ClassDefaultObject))
	{
		if (GetWorld() && ((GetWorld()->IsGameWorld() && !GetWorld()->IsPreviewWorld())))
		{
			JavascriptContext = Cast<UJSGameInstance>(GetWorld()->GetGameInstance())->GetContext();
		}
	}

	Super::OnRegister();
}

void UJSComponent::SetJsObject(UJSObject* jsObject)
{
	JsObject = jsObject;
}

UJSObject* UJSComponent::GetJsObject()
{
	return JsObject;
}

void UJSComponent::LoadJSFile()
{
	if (JavascriptContext == nullptr) return;

	auto scriptSourceFilePath = FPaths::Combine(FPaths::ProjectContentDir(), ScriptSourceFile);

	scriptSourceFilePath = FPaths::ConvertRelativePathToFull(scriptSourceFilePath);

	FString script;
	FFileHelper::LoadFileToString(script, *scriptSourceFilePath);

	//const FRegexPattern pattern = FRegexPattern(FString(TEXT("class\\s+(.+)\\s+extends\\s+JSObject")));
	//FRegexMatcher matcher(pattern, script);
	//if (matcher.FindNext())
	//{
		//auto className = matcher.GetCaptureGroup(1);

		/*script = TEXT("(function (global) {\r\n") + script;
		script += TEXT("let MyUObject_C = require('uclass')()(global,") + className + TEXT(")\r\n");
		script += TEXT("let instance = new MyUObject_C()\r\n");
		script += TEXT("instance.Root = Root\r\n");
		script += TEXT("instance.Root.SetJsObject(instance)\r\n");
		script += TEXT("if(!global.precious) global.precious = []; global.precious.push(instance);\r\n");
		script += TEXT("if(instance.BeginPlay) instance.BeginPlay()\r\n");
		script += TEXT("})(this)");*/

		JavascriptContext->Expose("Root", this);
		JavascriptContext->RunScript(script);
	/*} else
	{
		UE_LOG(LogTemp, Warning, TEXT("Error loading JS"));
		UE_LOG(LogTemp, Warning,  TEXT("%s"), *scriptSourceFilePath);
		GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("Error loading JS. See console for details"));
	}*/
}

FString UJSComponent::NotifyTrigger()
{
	if (JsObject != nullptr)
	{
		return JsObject->NotifyTrigger();
	}

	return FString();
}


