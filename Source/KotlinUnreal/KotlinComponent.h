#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Templates/SubclassOf.h"
#include "Components/ActorComponent.h"
#include "JavascriptContext.h"



#include "KotlinComponent.generated.h"

class UKotlinObject;

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

	//virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;
	
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Kotlin")
		FString KotlinClass;
	
	UPROPERTY(transient)
		UJavascriptContext* JavascriptContext;

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		void LoadKotlinObject();

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		void SetKotlinObject(UKotlinObject* kotlinObject);
	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		UKotlinObject* GetKotlinObject();

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		void OnTick(float DeltaTime);
	
	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		FString BeginOverlap(AActor* other);
	UFUNCTION(BlueprintCallable, Category = "Kotlin")
        void OnDestroyed();

private:
	UPROPERTY()
		UKotlinObject* KotlinObject;
};
