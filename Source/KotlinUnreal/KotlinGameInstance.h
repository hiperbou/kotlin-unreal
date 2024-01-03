// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"

#include "JavascriptIsolate.h"
#include "Engine/GameInstance.h"
#include "KotlinGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class KOTLINUNREAL_API UKotlinGameInstance : public UGameInstance, public FTickableGameObject
{
	GENERATED_BODY()

	protected:
	virtual void Init() override;

	public:
	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptTickSignature, float, DeltaSeconds);	
	
	virtual void Shutdown() override;
	virtual void OnWorldChanged(UWorld* OldWorld, UWorld* NewWorld) override;

	UJavascriptContext* GetContext();
	
    void LoadJSFile();

	UPROPERTY()
	FJavascriptTickSignature OnTick;

	virtual void Tick( float DeltaTime ) override;
	virtual TStatId GetStatId() const override;
	
	private:
	UPROPERTY(transient)
		UJavascriptIsolate* Isolate;
	UPROPERTY(transient)
		UJavascriptContext* JavascriptContext;
	
};
