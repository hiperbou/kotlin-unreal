import ue.*

//Doesn't work :(
class DelegatedCylinder(baseCylinder: BaseCylinder = BaseCylinder())
    : KotlinUnrealObject by baseCylinder, ICylinder by baseCylinder
{
    override fun getName(): String {
        return "Delegated Cylinder"
    }
}


