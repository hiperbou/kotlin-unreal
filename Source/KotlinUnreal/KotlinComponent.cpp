#include "KotlinComponent.h"
#include "JavascriptContext.h"
#include "Engine/World.h"
#include "Engine/Engine.h"
#include "IV8.h"
#include "KotlinGameInstance.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "Regex.h"
#include "KotlinObject.h"

UKotlinComponent::UKotlinComponent()
	: JavascriptContext(nullptr)
{
	PrimaryComponentTick.bCanEverTick = true;
	//PrimaryComponentTick.TickInterval = 0.03f;
	bTickInEditor = false;
	bAutoActivate = true;
	bWantsInitializeComponent = true;
}


void UKotlinComponent::BeginPlay()
{
	Super::BeginPlay();

	LoadKotlinObject();
}

/*void UKotlinComponent::TickComponent(float DeltaTime, enum ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	if (KotlinObject != nullptr)
	{
		return KotlinObject->Tick(DeltaTime);
	}
}*/
void UKotlinComponent::OnTick(float DeltaTime)
{
	if (KotlinObject != nullptr)
	{
		return KotlinObject->Tick(DeltaTime);
	}
}

void UKotlinComponent::OnDestroyed()
{
	UE_LOG(LogTemp, Warning, TEXT("Begin destroy %s"), *(GetOwner()->GetName()));
	if (KotlinObject != nullptr) {
		KotlinObject->OnDestroyed();
	}
}

void UKotlinComponent::OnRegister()
{
	const auto ContextOwner = GetOuter();
	if (ContextOwner && !HasAnyFlags(RF_ClassDefaultObject) && !ContextOwner->HasAnyFlags(RF_ClassDefaultObject))
	{
		if (GetWorld() && ((GetWorld()->IsGameWorld() && !GetWorld()->IsPreviewWorld())))
		{
			JavascriptContext = Cast<UKotlinGameInstance>(GetWorld()->GetGameInstance())->GetContext();
		}
	}

	Super::OnRegister();
}

void UKotlinComponent::SetKotlinObject(UKotlinObject* kotlinObject)
{
	KotlinObject = kotlinObject;		
}

UKotlinObject* UKotlinComponent::GetKotlinObject()
{
	return KotlinObject;
}

void UKotlinComponent::LoadKotlinObject()
{
	if (JavascriptContext == nullptr) return;
	if (KotlinClass.IsEmpty())
	{
		UE_LOG(LogTemp, Warning, TEXT("Error loading Empty Kotlin Class %s"), *(GetOwner()->GetName()));
		GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("Error loading Kotlin Class. See console for details"));
		return;
	}

	FString script = TEXT("this.kotlinUnreal.code.unrealProxyClass(this, this.kotlinUnreal.code.") + KotlinClass + TEXT(", \"") + KotlinClass + TEXT("\")\r\n");
	//UE_LOG(LogTemp, Warning, TEXT("Running script: %s"), *script);
		
	JavascriptContext->Expose("Root", this);
	JavascriptContext->RunScript(script);
}

FString UKotlinComponent::BeginOverlap(AActor* other)
{
	if (KotlinObject != nullptr)
	{
		return KotlinObject->BeginOverlap(other);
	}

	return FString();
}

UObject* UKotlinComponent::ResolveAsset(FName Name, bool bTryLoad)
{
	UE_LOG(LogTemp, Warning, TEXT("ResolveAsset"));
	for (const auto& Item : Assets)
	{
		UE_LOG(LogTemp, Warning, TEXT("ResolveAsset: %s"), *Item.Name.ToString());
		if (Item.Name == Name)
		{

			if(bTryLoad)
			{
				FString BPRef = "Blueprint '" + Item.Asset.GetAssetPathString() + "'";
				UE_LOG(LogTemp, Warning, TEXT("ResolveAsset.TryLoad: %s"), *BPRef);
		
				UClass* ThisBPClass = LoadObject<UClass>(NULL, *BPRef);
				return ThisBPClass;
			}
			//return bTryLoad ? Item.Asset.TryLoad() : Item.Asset.ResolveObject();
			return Item.Asset.ResolveObject();
		}
	}

	return nullptr;
}
UClass* UKotlinComponent::ResolveClass(FName Name)
{
	UE_LOG(LogTemp, Warning, TEXT("ResolveClass:"));
		
	for (const auto& Item : ClassAssets)
	{
		UE_LOG(LogTemp, Warning, TEXT("ResolveClass: %s"), *Item.Name.ToString());
		if (Item.Name == Name)
		{
			return Item.Class;
		}
	}

	return nullptr;
}

AActor* UKotlinComponent::Spawn(UClass* ClassF, FVector const Location, FRotator const Rotation)
{
	return GetWorld()->SpawnActor(ClassF, &Location, &Rotation);
}

