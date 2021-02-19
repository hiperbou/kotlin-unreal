#include "KotlinComponent.h"
#include "JavascriptComponent.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "Engine/World.h"
#include "Engine/Engine.h"
#include "IV8.h"
#include "JSGameInstance.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "Regex.h"
#include "KotlinObject.h"
#include "MovieSceneSequenceID.h"

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
			JavascriptContext = Cast<UJSGameInstance>(GetWorld()->GetGameInstance())->GetContext();
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

