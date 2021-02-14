#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Templates/SubclassOf.h"
#include "Components/ActorComponent.h"
#include "JavascriptContext.h"

#include "JSComponent.generated.h"

class UJSObject;

UCLASS( ClassGroup=(Custom), meta=(BlueprintSpawnableComponent) )
class KOTLINUNREAL_API UJSComponent : public UActorComponent
{
	GENERATED_BODY()

public:	
	UJSComponent();

protected:
	virtual void BeginPlay() override;

public:
	virtual void OnRegister() override;

	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Javascript")
		FString ScriptSourceFile;
	
	UPROPERTY(transient)
		UJavascriptContext* JavascriptContext;

	UFUNCTION(BlueprintCallable, Category = "Javascript")
		void LoadJSFile();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
		void SetJsObject(UJSObject* jsObject);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
		UJSObject* GetJsObject();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
		FString NotifyTrigger();


private:
	UPROPERTY()
		UJSObject* JsObject;
};
