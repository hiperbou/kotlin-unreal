#pragma once

#include "CoreMinimal.h"
#include "KotlinObject.generated.h"


UCLASS(BlueprintType)
class KOTLINUNREAL_API UKotlinObject : public UObject
{
	GENERATED_BODY()

public:	
	UKotlinObject();

	UFUNCTION(BlueprintImplementableEvent)
		FString BeginOverlap(AActor* other);
	UFUNCTION(BlueprintImplementableEvent)
        void Tick(float DeltaTime);
	UFUNCTION(BlueprintImplementableEvent)
        void OnDestroyed();
	
	UPROPERTY()
		UActorComponent* Root;
};
