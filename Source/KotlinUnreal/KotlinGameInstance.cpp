// Fill out your copyright notice in the Description page of Project Settings.

#include "KotlinGameInstance.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "Engine/World.h"
#include "Engine/Engine.h"

void UKotlinGameInstance::Init()
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

void UKotlinGameInstance::OnWorldChanged(UWorld* OldWorld, UWorld* NewWorld)
{
	if (JavascriptContext == nullptr) return;
	JavascriptContext->Expose("GWorld", NewWorld);
}

void UKotlinGameInstance::LoadJSFile()
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

void UKotlinGameInstance::Shutdown()
{
	Isolate->RemoveFromRoot();
}

UJavascriptIsolate* UKotlinGameInstance::GetIsolate()
{
	return Isolate;
}

UJavascriptContext* UKotlinGameInstance::GetContext()
{
	return JavascriptContext;
}