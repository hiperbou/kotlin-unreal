#pragma once

#include "CoreMinimal.h"
#include "JSObject.generated.h"


UCLASS(BlueprintType)
class KOTLINUNREAL_API UJSObject : public UObject
{
	GENERATED_BODY()

public:	
	UJSObject();

	UFUNCTION(BlueprintImplementableEvent)
		FString NotifyTrigger();
	UFUNCTION(BlueprintImplementableEvent)
        void Tick(float DeltaTime);

	UPROPERTY()
		UActorComponent* Root;
};
