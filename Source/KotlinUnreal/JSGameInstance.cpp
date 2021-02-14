// Fill out your copyright notice in the Description page of Project Settings.

#include "JSGameInstance.h"
#include "JSComponent.h"
#include "JavascriptComponent.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "Engine/World.h"
#include "Engine/Engine.h"
#include "IV8.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "Regex.h"
#include "JSObject.h"


void UJSGameInstance::Init()
{
	Super::Init();

	//LoadJSFile();
	Isolate = NewObject<UJavascriptIsolate>();
	Isolate->Init(false);
	Isolate->AddToRoot();

	auto* Context = Isolate->CreateContext();
	JavascriptContext = Context;

	//Context->Expose("Root", this);
	Context->Expose("GWorld", GetWorld());
	Context->Expose("GEngine", GEngine);

	LoadJSFile();
}

void UJSGameInstance::LoadJSFile()
{
	if (JavascriptContext == nullptr) return;

	FString ScriptSourceFile = TEXT("Scripts/KotlinCodeMain.js");
	auto scriptSourceFilePath = FPaths::Combine(FPaths::ProjectContentDir(), ScriptSourceFile);

	scriptSourceFilePath = FPaths::ConvertRelativePathToFull(scriptSourceFilePath);

	FString script;
	FFileHelper::LoadFileToString(script, *scriptSourceFilePath);

	//JavascriptContext->Expose("Root", this);
	JavascriptContext->RunScript(script);
}

void UJSGameInstance::Shutdown()
{
	Isolate->RemoveFromRoot();
}

UJavascriptIsolate* UJSGameInstance::GetIsolate()
{
	return Isolate;
}

UJavascriptContext* UJSGameInstance::GetContext()
{
	return JavascriptContext;
}