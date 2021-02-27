#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Templates/SubclassOf.h"
#include "Components/ActorComponent.h"
#include "JavascriptContext.h"



#include "KotlinComponent.generated.h"

class UKotlinObject;

USTRUCT()
struct KOTLINUNREAL_API FKotlinAsset
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	FName Name;

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	FStringAssetReference Asset;
};

USTRUCT()
struct KOTLINUNREAL_API FKotlinClassAsset
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	FName Name;

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	TSubclassOf<UObject> Class;
};

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

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	TArray<FKotlinAsset> Assets;

	UPROPERTY(EditAnywhere, Category = "Kotlin")
	TArray<FKotlinClassAsset> ClassAssets;

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

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		UObject* ResolveAsset(FName Name, bool bTryLoad = true);

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
		UClass* ResolveClass(FName Name);

	UFUNCTION(BlueprintCallable, Category = "Kotlin")
	AActor* Spawn(UClass* ClassF, FVector const Location, FRotator const Rotation);
private:
	UPROPERTY()
		UKotlinObject* KotlinObject;
};
