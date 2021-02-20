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
class KOTLINUNREAL_API UKotlinGameInstance : public UGameInstance
{
	GENERATED_BODY()

	protected:
	virtual void Init() override;

	public:
	virtual void Shutdown() override;

	UJavascriptIsolate* GetIsolate();
	UJavascriptContext* GetContext();
	
    void LoadJSFile();
	
	private:
	UPROPERTY(transient)
		UJavascriptIsolate* Isolate;
	UPROPERTY(transient)
		UJavascriptContext* JavascriptContext;
	
};
