#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Templates/SubclassOf.h"
#include "Components/ActorComponent.h"
#include "JavascriptContext.h"

#include "KotlinComponent.generated.h"

class UJSObject;

UCLASS( ClassGroup=(Custom), meta=(BlueprintSpawnableComponent) )
class KOTLINUNREAL_API UKotlinComponent : public UActorComponent
{
	GENERATED_BODY()

public:	
	UKotlinComponent();

protected:
	virtual void BeginPlay() override;

public:
	virtual void OnRegister() override;

	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Kotlin")
		FString KotlinClass;
	
	UPROPERTY(transient)
		UJavascriptContext* JavascriptContext;

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		void LoadJSFile();

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		void SetJsObject(UJSObject* jsObject);
	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		UJSObject* GetJsObject();

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		FString NotifyTrigger();


private:
	UPROPERTY()
		UJSObject* JsObject;
};
