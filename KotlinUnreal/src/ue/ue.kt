@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package ue


import kotlin.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*

external open class JavascriptGraphAppearanceInfo {
    open var CornerImage: SlateBrush
    open var CornerText: String
    open var PIENotifyText: String
    open var ReadOnlyText: String
    open var InstructionText: String
    open fun clone(): JavascriptGraphAppearanceInfo

    companion object {
        fun C(Other: UObject): JavascriptGraphAppearanceInfo
        fun C(Other: Any): JavascriptGraphAppearanceInfo
    }
}

external object EPinVisibility {
    var Pin_Show: String /* "Pin_Show" */
    var Pin_HideNoConnection: String /* "Pin_HideNoConnection" */
    var Pin_HideNoConnectionNoDefault: String /* "Pin_HideNoConnectionNoDefault" */
    var Pin_MAX: String /* "Pin_MAX" */
}

external interface `T$0` {
    var OutLocation: Vector2D
    var OutZoomAmount: Number
}

external open class JavascriptGraphEditorWidget : Widget {
    constructor()
    constructor(Outer: UObject)
    open var EdGraph: JavascriptGraphEdGraph
    open var OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) -> Unit>
    open var OnDropActor: UnrealEngineDelegate<(Actors: Array<Actor>, Graph: EdGraph, Point: Vector2D) -> Unit>
    open var OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) -> Unit>
    open var OnSelectedNodesChanged: UnrealEngineDelegate<(Set: Array<UObject>) -> Unit>
    open var OnInitialGraphPanelUpdated: UnrealEngineDelegate<() -> Unit>
    open var AppearanceInfo: JavascriptGraphAppearanceInfo
    open var CommandList: JavascriptUICommandList
    open fun SetViewLocation(Location: Vector2D, ZoomAmount: Number)
    open fun SetPinVisibility(InVisibility: String /* "Pin_Show" | "Pin_HideNoConnection" | "Pin_HideNoConnectionNoDefault" | "Pin_MAX" */)
    open fun SetNodeSelection(UNode: EdGraphNode, bSelect: Boolean)
    open fun SetGraph(InEdGraph: JavascriptGraphEdGraph)
    open fun SelectAllNodes()
    open fun NotifyGraphChanged()
    open fun JumpToPin(JumpToMe: JavascriptEdGraphPin)
    open fun JumpToNode(JumpToMe: EdGraphNode, bRequestRename: Boolean, bSelectNode: Boolean)
    open fun GetViewLocation(OutLocation: Vector2D = definedExternally, OutZoomAmount: Number = definedExternally): `T$0`
    open fun GetSelectedNodes(): Array<UObject>
    open fun GetPasteLocation(): Vector2D
    open fun ClearSelectionSet()

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEditorWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEditorWidget
        fun GetDefaultObject(): JavascriptGraphEditorWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEditorWidget
        fun NewGraph(ParentScope: UObject): JavascriptGraphEdGraph
        fun C(Other: UObject): JavascriptGraphEditorWidget
        fun C(Other: Any): JavascriptGraphEditorWidget
    }
}

external open class JavascriptGraphEdNodeWidget : Widget {
    constructor()
    constructor(Outer: UObject)
    open var EdNode: JavascriptGraphEdNode
    open fun SetNode(InEdNode: JavascriptGraphEdNode)

    companion object {
        fun Load(ResourceName: String): JavascriptGraphEdNodeWidget
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphEdNodeWidget
        fun GetDefaultObject(): JavascriptGraphEdNodeWidget
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphEdNodeWidget
        fun C(Other: UObject): JavascriptGraphEdNodeWidget
        fun C(Other: Any): JavascriptGraphEdNodeWidget
    }
}

external open class JavascriptGraphTextPropertyEditableTextBox : Widget {
    constructor()
    constructor(Outer: UObject)
    open var OnGetGraphPin: UnrealEngineDelegate<() -> JavascriptEdGraphPin>
    open var OnGetDefaultValue: UnrealEngineDelegate<() -> JavascriptTextProperty>
    open var OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) -> Unit>
    open var WidgetStyle: EditableTextBoxStyle
    open var WrapTextAt: Number
    open var AutoWrapText: Boolean

    companion object {
        fun Load(ResourceName: String): JavascriptGraphTextPropertyEditableTextBox
        fun Find(Outer: UObject, ResourceName: String): JavascriptGraphTextPropertyEditableTextBox
        fun GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGraphTextPropertyEditableTextBox
        fun C(Other: UObject): JavascriptGraphTextPropertyEditableTextBox
        fun C(Other: Any): JavascriptGraphTextPropertyEditableTextBox
    }
}

external open class OnGetGraphPin__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetGraphPin__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetGraphPin__PythonCallable
        fun GetDefaultObject(): OnGetGraphPin__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetGraphPin__PythonCallable
        fun C(Other: UObject): OnGetGraphPin__PythonCallable
        fun C(Other: Any): OnGetGraphPin__PythonCallable
    }
}

external open class OnDisallowedPinConnection__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDisallowedPinConnection__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDisallowedPinConnection__PythonCallable
        fun GetDefaultObject(): OnDisallowedPinConnection__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDisallowedPinConnection__PythonCallable
        fun C(Other: UObject): OnDisallowedPinConnection__PythonCallable
        fun C(Other: Any): OnDisallowedPinConnection__PythonCallable
    }
}

external open class OnDropActor__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDropActor__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDropActor__PythonCallable
        fun GetDefaultObject(): OnDropActor__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDropActor__PythonCallable
        fun C(Other: UObject): OnDropActor__PythonCallable
        fun C(Other: Any): OnDropActor__PythonCallable
    }
}

external open class SetNodes__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SetNodes__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): SetNodes__PythonCallable
        fun GetDefaultObject(): SetNodes__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SetNodes__PythonCallable
        fun C(Other: UObject): SetNodes__PythonCallable
        fun C(Other: Any): SetNodes__PythonCallable
    }
}

external open class SimpleDelegate__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SimpleDelegate__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): SimpleDelegate__PythonCallable
        fun GetDefaultObject(): SimpleDelegate__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SimpleDelegate__PythonCallable
        fun C(Other: UObject): SimpleDelegate__PythonCallable
        fun C(Other: Any): SimpleDelegate__PythonCallable
    }
}

external open class SingleNode__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SingleNode__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): SingleNode__PythonCallable
        fun GetDefaultObject(): SingleNode__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SingleNode__PythonCallable
        fun C(Other: UObject): SingleNode__PythonCallable
        fun C(Other: Any): SingleNode__PythonCallable
    }
}

external open class OnBuildMenu__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnBuildMenu__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnBuildMenu__PythonCallable
        fun GetDefaultObject(): OnBuildMenu__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnBuildMenu__PythonCallable
        fun C(Other: UObject): OnBuildMenu__PythonCallable
        fun C(Other: Any): OnBuildMenu__PythonCallable
    }
}

external open class OnCanCreateConnection__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnCanCreateConnection__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnCanCreateConnection__PythonCallable
        fun GetDefaultObject(): OnCanCreateConnection__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnCanCreateConnection__PythonCallable
        fun C(Other: UObject): OnCanCreateConnection__PythonCallable
        fun C(Other: Any): OnCanCreateConnection__PythonCallable
    }
}

external open class OnContextActions__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnContextActions__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnContextActions__PythonCallable
        fun GetDefaultObject(): OnContextActions__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnContextActions__PythonCallable
        fun C(Other: UObject): OnContextActions__PythonCallable
        fun C(Other: Any): OnContextActions__PythonCallable
    }
}

external open class OnCreateAutomaticConversionNodeAndConnections__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
        fun GetDefaultObject(): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
        fun C(Other: UObject): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
        fun C(Other: Any): OnCreateAutomaticConversionNodeAndConnections__PythonCallable
    }
}

external open class OnCreatePin__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnCreatePin__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnCreatePin__PythonCallable
        fun GetDefaultObject(): OnCreatePin__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnCreatePin__PythonCallable
        fun C(Other: UObject): OnCreatePin__PythonCallable
        fun C(Other: Any): OnCreatePin__PythonCallable
    }
}

external open class OnDetermineLinkGeometry__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDetermineLinkGeometry__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDetermineLinkGeometry__PythonCallable
        fun GetDefaultObject(): OnDetermineLinkGeometry__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDetermineLinkGeometry__PythonCallable
        fun C(Other: UObject): OnDetermineLinkGeometry__PythonCallable
        fun C(Other: Any): OnDetermineLinkGeometry__PythonCallable
    }
}

external open class OnDetermineWiringStyle__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDetermineWiringStyle__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDetermineWiringStyle__PythonCallable
        fun GetDefaultObject(): OnDetermineWiringStyle__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDetermineWiringStyle__PythonCallable
        fun C(Other: UObject): OnDetermineWiringStyle__PythonCallable
        fun C(Other: Any): OnDetermineWiringStyle__PythonCallable
    }
}

external open class OnDrawPreviewConnector__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDrawPreviewConnector__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDrawPreviewConnector__PythonCallable
        fun GetDefaultObject(): OnDrawPreviewConnector__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDrawPreviewConnector__PythonCallable
        fun C(Other: UObject): OnDrawPreviewConnector__PythonCallable
        fun C(Other: Any): OnDrawPreviewConnector__PythonCallable
    }
}

external open class OnDrawSplineWithArrow__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDrawSplineWithArrow__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDrawSplineWithArrow__PythonCallable
        fun GetDefaultObject(): OnDrawSplineWithArrow__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDrawSplineWithArrow__PythonCallable
        fun C(Other: UObject): OnDrawSplineWithArrow__PythonCallable
        fun C(Other: Any): OnDrawSplineWithArrow__PythonCallable
    }
}

external open class OnDrawSplineWithArrow_Geom__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDrawSplineWithArrow_Geom__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDrawSplineWithArrow_Geom__PythonCallable
        fun GetDefaultObject(): OnDrawSplineWithArrow_Geom__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDrawSplineWithArrow_Geom__PythonCallable
        fun C(Other: UObject): OnDrawSplineWithArrow_Geom__PythonCallable
        fun C(Other: Any): OnDrawSplineWithArrow_Geom__PythonCallable
    }
}

external open class OnEdNodeAction__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnEdNodeAction__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnEdNodeAction__PythonCallable
        fun GetDefaultObject(): OnEdNodeAction__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnEdNodeAction__PythonCallable
        fun C(Other: UObject): OnEdNodeAction__PythonCallable
        fun C(Other: Any): OnEdNodeAction__PythonCallable
    }
}

external open class OnGetBoolean__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetBoolean__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetBoolean__PythonCallable
        fun GetDefaultObject(): OnGetBoolean__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetBoolean__PythonCallable
        fun C(Other: UObject): OnGetBoolean__PythonCallable
        fun C(Other: Any): OnGetBoolean__PythonCallable
    }
}

external open class OnGetBoolean_GraphPin__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetBoolean_GraphPin__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetBoolean_GraphPin__PythonCallable
        fun GetDefaultObject(): OnGetBoolean_GraphPin__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetBoolean_GraphPin__PythonCallable
        fun C(Other: UObject): OnGetBoolean_GraphPin__PythonCallable
        fun C(Other: Any): OnGetBoolean_GraphPin__PythonCallable
    }
}

external open class OnGetBooleanMoveTo__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetBooleanMoveTo__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetBooleanMoveTo__PythonCallable
        fun GetDefaultObject(): OnGetBooleanMoveTo__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetBooleanMoveTo__PythonCallable
        fun C(Other: UObject): OnGetBooleanMoveTo__PythonCallable
        fun C(Other: Any): OnGetBooleanMoveTo__PythonCallable
    }
}

external open class OnGetBooleanWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetBooleanWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetBooleanWidget__PythonCallable
        fun GetDefaultObject(): OnGetBooleanWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetBooleanWidget__PythonCallable
        fun C(Other: UObject): OnGetBooleanWidget__PythonCallable
        fun C(Other: Any): OnGetBooleanWidget__PythonCallable
    }
}

external open class OnGetCustomPinBoxWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetCustomPinBoxWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetCustomPinBoxWidget__PythonCallable
        fun GetDefaultObject(): OnGetCustomPinBoxWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetCustomPinBoxWidget__PythonCallable
        fun C(Other: UObject): OnGetCustomPinBoxWidget__PythonCallable
        fun C(Other: Any): OnGetCustomPinBoxWidget__PythonCallable
    }
}

external open class OnGetPinColor__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetPinColor__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetPinColor__PythonCallable
        fun GetDefaultObject(): OnGetPinColor__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetPinColor__PythonCallable
        fun C(Other: UObject): OnGetPinColor__PythonCallable
        fun C(Other: Any): OnGetPinColor__PythonCallable
    }
}

external open class OnGetPins__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetPins__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetPins__PythonCallable
        fun GetDefaultObject(): OnGetPins__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetPins__PythonCallable
        fun C(Other: UObject): OnGetPins__PythonCallable
        fun C(Other: Any): OnGetPins__PythonCallable
    }
}

external open class OnGetSideMarginInPin__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetSideMarginInPin__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetSideMarginInPin__PythonCallable
        fun GetDefaultObject(): OnGetSideMarginInPin__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetSideMarginInPin__PythonCallable
        fun C(Other: UObject): OnGetSideMarginInPin__PythonCallable
        fun C(Other: Any): OnGetSideMarginInPin__PythonCallable
    }
}

external open class OnGetSlateBrushName__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetSlateBrushName__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetSlateBrushName__PythonCallable
        fun GetDefaultObject(): OnGetSlateBrushName__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetSlateBrushName__PythonCallable
        fun C(Other: UObject): OnGetSlateBrushName__PythonCallable
        fun C(Other: Any): OnGetSlateBrushName__PythonCallable
    }
}

external open class OnGetString__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetString__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetString__PythonCallable
        fun GetDefaultObject(): OnGetString__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetString__PythonCallable
        fun C(Other: UObject): OnGetString__PythonCallable
        fun C(Other: Any): OnGetString__PythonCallable
    }
}

external open class OnMouseDragEvent__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseDragEvent__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseDragEvent__PythonCallable
        fun GetDefaultObject(): OnMouseDragEvent__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseDragEvent__PythonCallable
        fun C(Other: UObject): OnMouseDragEvent__PythonCallable
        fun C(Other: Any): OnMouseDragEvent__PythonCallable
    }
}

external open class OnMouseEvent__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseEvent__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseEvent__PythonCallable
        fun GetDefaultObject(): OnMouseEvent__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseEvent__PythonCallable
        fun C(Other: UObject): OnMouseEvent__PythonCallable
        fun C(Other: Any): OnMouseEvent__PythonCallable
    }
}

external open class OnMouseEventAdvanced__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseEventAdvanced__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseEventAdvanced__PythonCallable
        fun GetDefaultObject(): OnMouseEventAdvanced__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseEventAdvanced__PythonCallable
        fun C(Other: UObject): OnMouseEventAdvanced__PythonCallable
        fun C(Other: Any): OnMouseEventAdvanced__PythonCallable
    }
}

external open class OnPerformAction__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnPerformAction__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnPerformAction__PythonCallable
        fun GetDefaultObject(): OnPerformAction__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnPerformAction__PythonCallable
        fun C(Other: UObject): OnPerformAction__PythonCallable
        fun C(Other: Any): OnPerformAction__PythonCallable
    }
}

external open class OnPerformSecondPassLayout__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnPerformSecondPassLayout__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnPerformSecondPassLayout__PythonCallable
        fun GetDefaultObject(): OnPerformSecondPassLayout__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnPerformSecondPassLayout__PythonCallable
        fun C(Other: UObject): OnPerformSecondPassLayout__PythonCallable
        fun C(Other: Any): OnPerformSecondPassLayout__PythonCallable
    }
}

external open class OnPinConnectionListChanged__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnPinConnectionListChanged__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnPinConnectionListChanged__PythonCallable
        fun GetDefaultObject(): OnPinConnectionListChanged__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnPinConnectionListChanged__PythonCallable
        fun C(Other: UObject): OnPinConnectionListChanged__PythonCallable
        fun C(Other: Any): OnPinConnectionListChanged__PythonCallable
    }
}

external open class OnShouldAlwaysPurgeOnModification__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnShouldAlwaysPurgeOnModification__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnShouldAlwaysPurgeOnModification__PythonCallable
        fun GetDefaultObject(): OnShouldAlwaysPurgeOnModification__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnShouldAlwaysPurgeOnModification__PythonCallable
        fun C(Other: UObject): OnShouldAlwaysPurgeOnModification__PythonCallable
        fun C(Other: Any): OnShouldAlwaysPurgeOnModification__PythonCallable
    }
}

external open class OnTakeContentWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnTakeContentWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnTakeContentWidget__PythonCallable
        fun GetDefaultObject(): OnTakeContentWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnTakeContentWidget__PythonCallable
        fun C(Other: UObject): OnTakeContentWidget__PythonCallable
        fun C(Other: Any): OnTakeContentWidget__PythonCallable
    }
}

external open class OnTakeWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnTakeWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnTakeWidget__PythonCallable
        fun GetDefaultObject(): OnTakeWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnTakeWidget__PythonCallable
        fun C(Other: UObject): OnTakeWidget__PythonCallable
        fun C(Other: Any): OnTakeWidget__PythonCallable
    }
}

external open class OnTryCreateConnection__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnTryCreateConnection__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnTryCreateConnection__PythonCallable
        fun GetDefaultObject(): OnTryCreateConnection__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnTryCreateConnection__PythonCallable
        fun C(Other: UObject): OnTryCreateConnection__PythonCallable
        fun C(Other: Any): OnTryCreateConnection__PythonCallable
    }
}

external open class OnVectorArith__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnVectorArith__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnVectorArith__PythonCallable
        fun GetDefaultObject(): OnVectorArith__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnVectorArith__PythonCallable
        fun C(Other: UObject): OnVectorArith__PythonCallable
        fun C(Other: Any): OnVectorArith__PythonCallable
    }
}

external open class DynamicSimpleGetBoolDelegate__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): DynamicSimpleGetBoolDelegate__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): DynamicSimpleGetBoolDelegate__PythonCallable
        fun GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DynamicSimpleGetBoolDelegate__PythonCallable
        fun C(Other: UObject): DynamicSimpleGetBoolDelegate__PythonCallable
        fun C(Other: Any): DynamicSimpleGetBoolDelegate__PythonCallable
    }
}

external open class DynamicSimpleDelegate__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): DynamicSimpleDelegate__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): DynamicSimpleDelegate__PythonCallable
        fun GetDefaultObject(): DynamicSimpleDelegate__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): DynamicSimpleDelegate__PythonCallable
        fun C(Other: UObject): DynamicSimpleDelegate__PythonCallable
        fun C(Other: Any): DynamicSimpleDelegate__PythonCallable
    }
}

external open class PropertyEditorPropertyChanged__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PropertyEditorPropertyChanged__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): PropertyEditorPropertyChanged__PythonCallable
        fun GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PropertyEditorPropertyChanged__PythonCallable
        fun C(Other: UObject): PropertyEditorPropertyChanged__PythonCallable
        fun C(Other: Any): PropertyEditorPropertyChanged__PythonCallable
    }
}

external open class PropertyEditorReadOnly__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): PropertyEditorReadOnly__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): PropertyEditorReadOnly__PythonCallable
        fun GetDefaultObject(): PropertyEditorReadOnly__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PropertyEditorReadOnly__PythonCallable
        fun C(Other: UObject): PropertyEditorReadOnly__PythonCallable
        fun C(Other: Any): PropertyEditorReadOnly__PythonCallable
    }
}

external open class OnGenerateCustomCellWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGenerateCustomCellWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGenerateCustomCellWidget__PythonCallable
        fun GetDefaultObject(): OnGenerateCustomCellWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGenerateCustomCellWidget__PythonCallable
        fun C(Other: UObject): OnGenerateCustomCellWidget__PythonCallable
        fun C(Other: Any): OnGenerateCustomCellWidget__PythonCallable
    }
}

external open class OnUseCustomCellWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnUseCustomCellWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnUseCustomCellWidget__PythonCallable
        fun GetDefaultObject(): OnUseCustomCellWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnUseCustomCellWidget__PythonCallable
        fun C(Other: UObject): OnUseCustomCellWidget__PythonCallable
        fun C(Other: Any): OnUseCustomCellWidget__PythonCallable
    }
}

external open class OnBeforePopup__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnBeforePopup__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnBeforePopup__PythonCallable
        fun GetDefaultObject(): OnBeforePopup__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnBeforePopup__PythonCallable
        fun C(Other: UObject): OnBeforePopup__PythonCallable
        fun C(Other: Any): OnBeforePopup__PythonCallable
    }
}

external open class OnUrlChanged__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnUrlChanged__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnUrlChanged__PythonCallable
        fun GetDefaultObject(): OnUrlChanged__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnUrlChanged__PythonCallable
        fun C(Other: UObject): OnUrlChanged__PythonCallable
        fun C(Other: Any): OnUrlChanged__PythonCallable
    }
}

external open class OnHook__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnHook__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnHook__PythonCallable
        fun GetDefaultObject(): OnHook__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnHook__PythonCallable
        fun C(Other: UObject): OnHook__PythonCallable
        fun C(Other: Any): OnHook__PythonCallable
    }
}

external open class JavascriptCanExecuteAction__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptCanExecuteAction__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): JavascriptCanExecuteAction__PythonCallable
        fun GetDefaultObject(): JavascriptCanExecuteAction__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptCanExecuteAction__PythonCallable
        fun C(Other: UObject): JavascriptCanExecuteAction__PythonCallable
        fun C(Other: Any): JavascriptCanExecuteAction__PythonCallable
    }
}

external open class JavascriptExecuteAction__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptExecuteAction__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): JavascriptExecuteAction__PythonCallable
        fun GetDefaultObject(): JavascriptExecuteAction__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptExecuteAction__PythonCallable
        fun C(Other: UObject): JavascriptExecuteAction__PythonCallable
        fun C(Other: Any): JavascriptExecuteAction__PythonCallable
    }
}

external open class OnClick_Backward__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Backward__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Backward__PythonCallable
        fun GetDefaultObject(): OnClick_Backward__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Backward__PythonCallable
        fun C(Other: UObject): OnClick_Backward__PythonCallable
        fun C(Other: Any): OnClick_Backward__PythonCallable
    }
}

external open class OnClick_Backward_End__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Backward_End__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Backward_End__PythonCallable
        fun GetDefaultObject(): OnClick_Backward_End__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Backward_End__PythonCallable
        fun C(Other: UObject): OnClick_Backward_End__PythonCallable
        fun C(Other: Any): OnClick_Backward_End__PythonCallable
    }
}

external open class OnClick_Backward_Step__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Backward_Step__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Backward_Step__PythonCallable
        fun GetDefaultObject(): OnClick_Backward_Step__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Backward_Step__PythonCallable
        fun C(Other: UObject): OnClick_Backward_Step__PythonCallable
        fun C(Other: Any): OnClick_Backward_Step__PythonCallable
    }
}

external open class OnClick_Forward__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Forward__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Forward__PythonCallable
        fun GetDefaultObject(): OnClick_Forward__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Forward__PythonCallable
        fun C(Other: UObject): OnClick_Forward__PythonCallable
        fun C(Other: Any): OnClick_Forward__PythonCallable
    }
}

external open class OnClick_Forward_End__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Forward_End__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Forward_End__PythonCallable
        fun GetDefaultObject(): OnClick_Forward_End__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Forward_End__PythonCallable
        fun C(Other: UObject): OnClick_Forward_End__PythonCallable
        fun C(Other: Any): OnClick_Forward_End__PythonCallable
    }
}

external open class OnClick_Forward_Step__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_Forward_Step__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_Forward_Step__PythonCallable
        fun GetDefaultObject(): OnClick_Forward_Step__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_Forward_Step__PythonCallable
        fun C(Other: UObject): OnClick_Forward_Step__PythonCallable
        fun C(Other: Any): OnClick_Forward_Step__PythonCallable
    }
}

external open class OnClick_ToggleLoop__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick_ToggleLoop__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick_ToggleLoop__PythonCallable
        fun GetDefaultObject(): OnClick_ToggleLoop__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick_ToggleLoop__PythonCallable
        fun C(Other: UObject): OnClick_ToggleLoop__PythonCallable
        fun C(Other: Any): OnClick_ToggleLoop__PythonCallable
    }
}

external open class SetPlaybackPosition__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SetPlaybackPosition__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): SetPlaybackPosition__PythonCallable
        fun GetDefaultObject(): SetPlaybackPosition__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SetPlaybackPosition__PythonCallable
        fun C(Other: UObject): SetPlaybackPosition__PythonCallable
        fun C(Other: Any): SetPlaybackPosition__PythonCallable
    }
}

external open class CustomChildren__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CustomChildren__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): CustomChildren__PythonCallable
        fun GetDefaultObject(): CustomChildren__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CustomChildren__PythonCallable
        fun C(Other: UObject): CustomChildren__PythonCallable
        fun C(Other: Any): CustomChildren__PythonCallable
    }
}

external open class CustomHeader__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CustomHeader__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): CustomHeader__PythonCallable
        fun GetDefaultObject(): CustomHeader__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CustomHeader__PythonCallable
        fun C(Other: UObject): CustomHeader__PythonCallable
        fun C(Other: Any): CustomHeader__PythonCallable
    }
}

external open class OnDestroy__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDestroy__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDestroy__PythonCallable
        fun GetDefaultObject(): OnDestroy__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDestroy__PythonCallable
        fun C(Other: UObject): OnDestroy__PythonCallable
        fun C(Other: Any): OnDestroy__PythonCallable
    }
}

external open class CheckDelegate__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CheckDelegate__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): CheckDelegate__PythonCallable
        fun GetDefaultObject(): CheckDelegate__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CheckDelegate__PythonCallable
        fun C(Other: UObject): CheckDelegate__PythonCallable
        fun C(Other: Any): CheckDelegate__PythonCallable
    }
}

external open class OnNewLogMessage__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnNewLogMessage__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnNewLogMessage__PythonCallable
        fun GetDefaultObject(): OnNewLogMessage__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnNewLogMessage__PythonCallable
        fun C(Other: UObject): OnNewLogMessage__PythonCallable
        fun C(Other: Any): OnNewLogMessage__PythonCallable
    }
}

external open class ActorDuplicated__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorDuplicated__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): ActorDuplicated__PythonCallable
        fun GetDefaultObject(): ActorDuplicated__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorDuplicated__PythonCallable
        fun C(Other: UObject): ActorDuplicated__PythonCallable
        fun C(Other: Any): ActorDuplicated__PythonCallable
    }
}

external open class OnClick__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnClick__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnClick__PythonCallable
        fun GetDefaultObject(): OnClick__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnClick__PythonCallable
        fun C(Other: UObject): OnClick__PythonCallable
        fun C(Other: Any): OnClick__PythonCallable
    }
}

external open class OnDraw__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDraw__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDraw__PythonCallable
        fun GetDefaultObject(): OnDraw__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDraw__PythonCallable
        fun C(Other: UObject): OnDraw__PythonCallable
        fun C(Other: Any): OnDraw__PythonCallable
    }
}

external open class OnDrawHUD__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnDrawHUD__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnDrawHUD__PythonCallable
        fun GetDefaultObject(): OnDrawHUD__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnDrawHUD__PythonCallable
        fun C(Other: UObject): OnDrawHUD__PythonCallable
        fun C(Other: Any): OnDrawHUD__PythonCallable
    }
}

external open class OnGetAction__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetAction__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetAction__PythonCallable
        fun GetDefaultObject(): OnGetAction__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetAction__PythonCallable
        fun C(Other: UObject): OnGetAction__PythonCallable
        fun C(Other: Any): OnGetAction__PythonCallable
    }
}

external open class OnGetWidget__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetWidget__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetWidget__PythonCallable
        fun GetDefaultObject(): OnGetWidget__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetWidget__PythonCallable
        fun C(Other: UObject): OnGetWidget__PythonCallable
        fun C(Other: Any): OnGetWidget__PythonCallable
    }
}

external open class OnIsCompatibleWith__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnIsCompatibleWith__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnIsCompatibleWith__PythonCallable
        fun GetDefaultObject(): OnIsCompatibleWith__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnIsCompatibleWith__PythonCallable
        fun C(Other: UObject): OnIsCompatibleWith__PythonCallable
        fun C(Other: Any): OnIsCompatibleWith__PythonCallable
    }
}

external open class OnProcess__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnProcess__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnProcess__PythonCallable
        fun GetDefaultObject(): OnProcess__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnProcess__PythonCallable
        fun C(Other: UObject): OnProcess__PythonCallable
        fun C(Other: Any): OnProcess__PythonCallable
    }
}

external open class OnSelect__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnSelect__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnSelect__PythonCallable
        fun GetDefaultObject(): OnSelect__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnSelect__PythonCallable
        fun C(Other: UObject): OnSelect__PythonCallable
        fun C(Other: Any): OnSelect__PythonCallable
    }
}

external open class OnSelectionChanged__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnSelectionChanged__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnSelectionChanged__PythonCallable
        fun GetDefaultObject(): OnSelectionChanged__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnSelectionChanged__PythonCallable
        fun C(Other: UObject): OnSelectionChanged__PythonCallable
        fun C(Other: Any): OnSelectionChanged__PythonCallable
    }
}

external open class OnUsesToolkits__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnUsesToolkits__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnUsesToolkits__PythonCallable
        fun GetDefaultObject(): OnUsesToolkits__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnUsesToolkits__PythonCallable
        fun C(Other: UObject): OnUsesToolkits__PythonCallable
        fun C(Other: Any): OnUsesToolkits__PythonCallable
    }
}

external open class QueryVector__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): QueryVector__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): QueryVector__PythonCallable
        fun GetDefaultObject(): QueryVector__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): QueryVector__PythonCallable
        fun C(Other: UObject): QueryVector__PythonCallable
        fun C(Other: Any): QueryVector__PythonCallable
    }
}

external open class Viewport0__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): Viewport0__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): Viewport0__PythonCallable
        fun GetDefaultObject(): Viewport0__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): Viewport0__PythonCallable
        fun C(Other: UObject): Viewport0__PythonCallable
        fun C(Other: Any): Viewport0__PythonCallable
    }
}

external open class ViewportAxis__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ViewportAxis__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): ViewportAxis__PythonCallable
        fun GetDefaultObject(): ViewportAxis__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ViewportAxis__PythonCallable
        fun C(Other: UObject): ViewportAxis__PythonCallable
        fun C(Other: Any): ViewportAxis__PythonCallable
    }
}

external open class ViewportDelta__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ViewportDelta__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): ViewportDelta__PythonCallable
        fun GetDefaultObject(): ViewportDelta__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ViewportDelta__PythonCallable
        fun C(Other: UObject): ViewportDelta__PythonCallable
        fun C(Other: Any): ViewportDelta__PythonCallable
    }
}

external open class ViewportKey__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ViewportKey__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): ViewportKey__PythonCallable
        fun GetDefaultObject(): ViewportKey__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ViewportKey__PythonCallable
        fun C(Other: UObject): ViewportKey__PythonCallable
        fun C(Other: Any): ViewportKey__PythonCallable
    }
}

external open class ViewportXY__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ViewportXY__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): ViewportXY__PythonCallable
        fun GetDefaultObject(): ViewportXY__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ViewportXY__PythonCallable
        fun C(Other: UObject): ViewportXY__PythonCallable
        fun C(Other: Any): ViewportXY__PythonCallable
    }
}

external open class OnGetWidgetLocation__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetWidgetLocation__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetWidgetLocation__PythonCallable
        fun GetDefaultObject(): OnGetWidgetLocation__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetWidgetLocation__PythonCallable
        fun C(Other: UObject): OnGetWidgetLocation__PythonCallable
        fun C(Other: Any): OnGetWidgetLocation__PythonCallable
    }
}

external open class OnGetWidgetMode__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetWidgetMode__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetWidgetMode__PythonCallable
        fun GetDefaultObject(): OnGetWidgetMode__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetWidgetMode__PythonCallable
        fun C(Other: UObject): OnGetWidgetMode__PythonCallable
        fun C(Other: Any): OnGetWidgetMode__PythonCallable
    }
}

external open class OnGetWidgetRotation__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnGetWidgetRotation__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnGetWidgetRotation__PythonCallable
        fun GetDefaultObject(): OnGetWidgetRotation__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnGetWidgetRotation__PythonCallable
        fun C(Other: UObject): OnGetWidgetRotation__PythonCallable
        fun C(Other: Any): OnGetWidgetRotation__PythonCallable
    }
}

external open class OnInputAxis__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnInputAxis__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnInputAxis__PythonCallable
        fun GetDefaultObject(): OnInputAxis__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnInputAxis__PythonCallable
        fun C(Other: UObject): OnInputAxis__PythonCallable
        fun C(Other: Any): OnInputAxis__PythonCallable
    }
}

external open class OnInputKey__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnInputKey__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnInputKey__PythonCallable
        fun GetDefaultObject(): OnInputKey__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnInputKey__PythonCallable
        fun C(Other: UObject): OnInputKey__PythonCallable
        fun C(Other: Any): OnInputKey__PythonCallable
    }
}

external open class OnInputWidgetDelta__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnInputWidgetDelta__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnInputWidgetDelta__PythonCallable
        fun GetDefaultObject(): OnInputWidgetDelta__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnInputWidgetDelta__PythonCallable
        fun C(Other: UObject): OnInputWidgetDelta__PythonCallable
        fun C(Other: Any): OnInputWidgetDelta__PythonCallable
    }
}

external open class OnMouseEnter__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseEnter__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseEnter__PythonCallable
        fun GetDefaultObject(): OnMouseEnter__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseEnter__PythonCallable
        fun C(Other: UObject): OnMouseEnter__PythonCallable
        fun C(Other: Any): OnMouseEnter__PythonCallable
    }
}

external open class OnMouseLeave__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseLeave__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseLeave__PythonCallable
        fun GetDefaultObject(): OnMouseLeave__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseLeave__PythonCallable
        fun C(Other: UObject): OnMouseLeave__PythonCallable
        fun C(Other: Any): OnMouseLeave__PythonCallable
    }
}

external open class OnMouseMove__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnMouseMove__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnMouseMove__PythonCallable
        fun GetDefaultObject(): OnMouseMove__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnMouseMove__PythonCallable
        fun C(Other: UObject): OnMouseMove__PythonCallable
        fun C(Other: Any): OnMouseMove__PythonCallable
    }
}

external open class OnViewportClick__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnViewportClick__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnViewportClick__PythonCallable
        fun GetDefaultObject(): OnViewportClick__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnViewportClick__PythonCallable
        fun C(Other: UObject): OnViewportClick__PythonCallable
        fun C(Other: Any): OnViewportClick__PythonCallable
    }
}

external open class OnViewportDraw__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnViewportDraw__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnViewportDraw__PythonCallable
        fun GetDefaultObject(): OnViewportDraw__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnViewportDraw__PythonCallable
        fun C(Other: UObject): OnViewportDraw__PythonCallable
        fun C(Other: Any): OnViewportDraw__PythonCallable
    }
}

external open class OnViewportDrawCanvas__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnViewportDrawCanvas__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnViewportDrawCanvas__PythonCallable
        fun GetDefaultObject(): OnViewportDrawCanvas__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnViewportDrawCanvas__PythonCallable
        fun C(Other: UObject): OnViewportDrawCanvas__PythonCallable
        fun C(Other: Any): OnViewportDrawCanvas__PythonCallable
    }
}

external open class OnViewportTrackingStarted__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnViewportTrackingStarted__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnViewportTrackingStarted__PythonCallable
        fun GetDefaultObject(): OnViewportTrackingStarted__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnViewportTrackingStarted__PythonCallable
        fun C(Other: UObject): OnViewportTrackingStarted__PythonCallable
        fun C(Other: Any): OnViewportTrackingStarted__PythonCallable
    }
}

external open class OnViewportTrackingStopped__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnViewportTrackingStopped__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnViewportTrackingStopped__PythonCallable
        fun GetDefaultObject(): OnViewportTrackingStopped__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnViewportTrackingStopped__PythonCallable
        fun C(Other: UObject): OnViewportTrackingStopped__PythonCallable
        fun C(Other: Any): OnViewportTrackingStopped__PythonCallable
    }
}

external open class JavascriptEditorTickSignature__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptEditorTickSignature__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): JavascriptEditorTickSignature__PythonCallable
        fun GetDefaultObject(): JavascriptEditorTickSignature__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptEditorTickSignature__PythonCallable
        fun C(Other: UObject): JavascriptEditorTickSignature__PythonCallable
        fun C(Other: Any): JavascriptEditorTickSignature__PythonCallable
    }
}

external open class CloseTab__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): CloseTab__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): CloseTab__PythonCallable
        fun GetDefaultObject(): CloseTab__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): CloseTab__PythonCallable
        fun C(Other: UObject): CloseTab__PythonCallable
        fun C(Other: Any): CloseTab__PythonCallable
    }
}

external open class OnTabActivated__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnTabActivated__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnTabActivated__PythonCallable
        fun GetDefaultObject(): OnTabActivated__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnTabActivated__PythonCallable
        fun C(Other: UObject): OnTabActivated__PythonCallable
        fun C(Other: Any): OnTabActivated__PythonCallable
    }
}

external open class SpawnTab__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): SpawnTab__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): SpawnTab__PythonCallable
        fun GetDefaultObject(): SpawnTab__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): SpawnTab__PythonCallable
        fun C(Other: UObject): SpawnTab__PythonCallable
        fun C(Other: Any): SpawnTab__PythonCallable
    }
}

external open class JavascriptGetExtender__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): JavascriptGetExtender__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): JavascriptGetExtender__PythonCallable
        fun GetDefaultObject(): JavascriptGetExtender__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): JavascriptGetExtender__PythonCallable
        fun C(Other: UObject): JavascriptGetExtender__PythonCallable
        fun C(Other: Any): JavascriptGetExtender__PythonCallable
    }
}

external open class OnColorChangedEvent__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnColorChangedEvent__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnColorChangedEvent__PythonCallable
        fun GetDefaultObject(): OnColorChangedEvent__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnColorChangedEvent__PythonCallable
        fun C(Other: UObject): OnColorChangedEvent__PythonCallable
        fun C(Other: Any): OnColorChangedEvent__PythonCallable
    }
}

external open class OnSetDefaultValue__PythonCallable : PythonCallableForDelegate {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): OnSetDefaultValue__PythonCallable
        fun Find(Outer: UObject, ResourceName: String): OnSetDefaultValue__PythonCallable
        fun GetDefaultObject(): OnSetDefaultValue__PythonCallable
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): OnSetDefaultValue__PythonCallable
        fun C(Other: UObject): OnSetDefaultValue__PythonCallable
        fun C(Other: Any): OnSetDefaultValue__PythonCallable
    }
}

external open class AudioSynesthesiaNRTFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var AudioSynesthesiaNRTClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRTFactory
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRTFactory
        fun GetDefaultObject(): AudioSynesthesiaNRTFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRTFactory
        fun C(Other: UObject): AudioSynesthesiaNRTFactory
        fun C(Other: Any): AudioSynesthesiaNRTFactory
    }
}

external open class AudioSynesthesiaNRTSettingsFactory : Factory {
    constructor()
    constructor(Outer: UObject)
    open var AudioSynesthesiaNRTSettingsClass: UnrealEngineClass

    companion object {
        fun Load(ResourceName: String): AudioSynesthesiaNRTSettingsFactory
        fun Find(Outer: UObject, ResourceName: String): AudioSynesthesiaNRTSettingsFactory
        fun GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AudioSynesthesiaNRTSettingsFactory
        fun C(Other: UObject): AudioSynesthesiaNRTSettingsFactory
        fun C(Other: Any): AudioSynesthesiaNRTSettingsFactory
    }
}

external open class MockAI : UObject {
    constructor()
    constructor(Outer: UObject)
    open var BBComp: BlackboardComponent
    open var BrainComp: BrainComponent
    open var PerceptionComp: AIPerceptionComponent
    open var PawnActionComp: PawnActionsComponent

    companion object {
        fun Load(ResourceName: String): MockAI
        fun Find(Outer: UObject, ResourceName: String): MockAI
        fun GetDefaultObject(): MockAI
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockAI
        fun C(Other: UObject): MockAI
        fun C(Other: Any): MockAI
    }
}

external open class MockAI_BT : MockAI {
    constructor()
    constructor(Outer: UObject)
    open var BTComp: BehaviorTreeComponent

    companion object {
        fun Load(ResourceName: String): MockAI_BT
        fun Find(Outer: UObject, ResourceName: String): MockAI_BT
        fun GetDefaultObject(): MockAI_BT
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockAI_BT
        fun C(Other: UObject): MockAI_BT
        fun C(Other: Any): MockAI_BT
    }
}

external open class MockTask_Log : GameplayTask {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MockTask_Log
        fun Find(Outer: UObject, ResourceName: String): MockTask_Log
        fun GetDefaultObject(): MockTask_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockTask_Log
        fun C(Other: UObject): MockTask_Log
        fun C(Other: Any): MockTask_Log
    }
}

external open class MockGameplayTasksComponent : GameplayTasksComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): MockGameplayTasksComponent
        fun Find(Outer: UObject, ResourceName: String): MockGameplayTasksComponent
        fun GetDefaultObject(): MockGameplayTasksComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockGameplayTasksComponent
        fun C(Other: UObject): MockGameplayTasksComponent
        fun C(Other: Any): MockGameplayTasksComponent
    }
}

external open class MockGameplayTaskOwner : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GTComponent: GameplayTasksComponent

    companion object {
        fun Load(ResourceName: String): MockGameplayTaskOwner
        fun Find(Outer: UObject, ResourceName: String): MockGameplayTaskOwner
        fun GetDefaultObject(): MockGameplayTaskOwner
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MockGameplayTaskOwner
        fun C(Other: UObject): MockGameplayTaskOwner
        fun C(Other: Any): MockGameplayTaskOwner
    }
}

external open class TestBTDecorator_Blackboard : BTDecorator_Blackboard {
    constructor()
    constructor(Outer: UObject)
    open var LogIndexBecomeRelevant: Number
    open var LogIndexCeaseRelevant: Number
    open var LogIndexCalculate: Number

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_Blackboard
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_Blackboard
        fun GetDefaultObject(): TestBTDecorator_Blackboard
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_Blackboard
        fun C(Other: UObject): TestBTDecorator_Blackboard
        fun C(Other: Any): TestBTDecorator_Blackboard
    }
}

external open class TestBTDecorator_CantExecute : BTDecorator {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_CantExecute
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_CantExecute
        fun GetDefaultObject(): TestBTDecorator_CantExecute
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_CantExecute
        fun C(Other: UObject): TestBTDecorator_CantExecute
        fun C(Other: Any): TestBTDecorator_CantExecute
    }
}

external open class TestBTDecorator_DelayedAbort : BTDecorator {
    constructor()
    constructor(Outer: UObject)
    open var DelayTicks: Number
    open var bOnlyOnce: Boolean

    companion object {
        fun Load(ResourceName: String): TestBTDecorator_DelayedAbort
        fun Find(Outer: UObject, ResourceName: String): TestBTDecorator_DelayedAbort
        fun GetDefaultObject(): TestBTDecorator_DelayedAbort
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTDecorator_DelayedAbort
        fun C(Other: UObject): TestBTDecorator_DelayedAbort
        fun C(Other: Any): TestBTDecorator_DelayedAbort
    }
}

external open class TestBTService_Log : BTService {
    constructor()
    constructor(Outer: UObject)
    open var LogActivation: Number
    open var LogDeactivation: Number
    open var KeyNameTick: String
    open var LogTick: Number

    companion object {
        fun Load(ResourceName: String): TestBTService_Log
        fun Find(Outer: UObject, ResourceName: String): TestBTService_Log
        fun GetDefaultObject(): TestBTService_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTService_Log
        fun C(Other: UObject): TestBTService_Log
        fun C(Other: Any): TestBTService_Log
    }
}

external open class TestBTTask_LatentWithFlags : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var LogIndexExecuteStart: Number
    open var LogIndexExecuteFinish: Number
    open var LogIndexAbortStart: Number
    open var LogIndexAbortFinish: Number
    open var ExecuteTicks: Number
    open var AbortTicks: Number
    open var KeyNameExecute: String
    open var KeyNameAbort: String
    open var LogResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_LatentWithFlags
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_LatentWithFlags
        fun GetDefaultObject(): TestBTTask_LatentWithFlags
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_LatentWithFlags
        fun C(Other: UObject): TestBTTask_LatentWithFlags
        fun C(Other: Any): TestBTTask_LatentWithFlags
    }
}

external open class TestBTTask_Log : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var LogIndex: Number
    open var LogFinished: Number
    open var ExecutionTicks: Number
    open var LogResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_Log
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_Log
        fun GetDefaultObject(): TestBTTask_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_Log
        fun C(Other: UObject): TestBTTask_Log
        fun C(Other: Any): TestBTTask_Log
    }
}

external open class TestBTTask_SetFlag : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var KeyName: String
    open var bValue: Boolean
    open var OnAbortKeyName: String
    open var bOnAbortValue: Boolean
    open var TaskResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_SetFlag
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_SetFlag
        fun GetDefaultObject(): TestBTTask_SetFlag
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_SetFlag
        fun C(Other: UObject): TestBTTask_SetFlag
        fun C(Other: Any): TestBTTask_SetFlag
    }
}

external open class TestBTTask_SetValue : BTTaskNode {
    constructor()
    constructor(Outer: UObject)
    open var KeyName: String
    open var Value: Number
    open var OnAbortKeyName: String
    open var OnAbortValue: Number
    open var TaskResult: String /* "Succeeded" | "Failed" | "Aborted" | "InProgress" | "EBTNodeResult_MAX" */

    companion object {
        fun Load(ResourceName: String): TestBTTask_SetValue
        fun Find(Outer: UObject, ResourceName: String): TestBTTask_SetValue
        fun GetDefaultObject(): TestBTTask_SetValue
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestBTTask_SetValue
        fun C(Other: UObject): TestBTTask_SetValue
        fun C(Other: Any): TestBTTask_SetValue
    }
}

external open class TestPawnAction_Log : PawnAction {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestPawnAction_Log
        fun Find(Outer: UObject, ResourceName: String): TestPawnAction_Log
        fun GetDefaultObject(): TestPawnAction_Log
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestPawnAction_Log
        fun C(Other: UObject): TestPawnAction_Log
        fun C(Other: Any): TestPawnAction_Log
    }
}

external open class TestPawnAction_CallFunction : TestPawnAction_Log {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): TestPawnAction_CallFunction
        fun Find(Outer: UObject, ResourceName: String): TestPawnAction_CallFunction
        fun GetDefaultObject(): TestPawnAction_CallFunction
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): TestPawnAction_CallFunction
        fun C(Other: UObject): TestPawnAction_CallFunction
        fun C(Other: Any): TestPawnAction_CallFunction
    }
}

external object ELiveCodingStartupMode {
    var Automatic: String /* "Automatic" */
    var AutomaticButHidden: String /* "AutomaticButHidden" */
    var Manual: String /* "Manual" */
    var ELiveCodingStartupMode_MAX: String /* "ELiveCodingStartupMode_MAX" */
}

external open class LiveCodingSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnabled: Boolean
    open var Startup: String /* "Automatic" | "AutomaticButHidden" | "Manual" | "ELiveCodingStartupMode_MAX" */
    open var bPreloadEngineModules: Boolean
    open var bPreloadEnginePluginModules: Boolean
    open var bPreloadProjectModules: Boolean
    open var bPreloadProjectPluginModules: Boolean
    open var PreloadNamedModules: Array<String>

    companion object {
        fun Load(ResourceName: String): LiveCodingSettings
        fun Find(Outer: UObject, ResourceName: String): LiveCodingSettings
        fun GetDefaultObject(): LiveCodingSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LiveCodingSettings
        fun C(Other: UObject): LiveCodingSettings
        fun C(Other: Any): LiveCodingSettings
    }
}

external open class StructViewerProjectSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var InternalOnlyPaths: Array<DirectoryPath>
    open var InternalOnlyStructs: Array<ScriptStruct>

    companion object {
        fun Load(ResourceName: String): StructViewerProjectSettings
        fun Find(Outer: UObject, ResourceName: String): StructViewerProjectSettings
        fun GetDefaultObject(): StructViewerProjectSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): StructViewerProjectSettings
        fun C(Other: UObject): StructViewerProjectSettings
        fun C(Other: Any): StructViewerProjectSettings
    }
}

external open class UndoHistorySettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bShowTransactionDetails: Boolean

    companion object {
        fun Load(ResourceName: String): UndoHistorySettings
        fun Find(Outer: UObject, ResourceName: String): UndoHistorySettings
        fun GetDefaultObject(): UndoHistorySettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): UndoHistorySettings
        fun C(Other: UObject): UndoHistorySettings
        fun C(Other: Any): UndoHistorySettings
    }
}

external open class LocalizationDashboardSettings : UObject {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LocalizationDashboardSettings
        fun Find(Outer: UObject, ResourceName: String): LocalizationDashboardSettings
        fun GetDefaultObject(): LocalizationDashboardSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LocalizationDashboardSettings
        fun C(Other: UObject): LocalizationDashboardSettings
        fun C(Other: Any): LocalizationDashboardSettings
    }
}

external object EMeshInstancingReplacementMethod {
    var RemoveOriginalActors: String /* "RemoveOriginalActors" */
    var KeepOriginalActorsAsEditorOnly: String /* "KeepOriginalActorsAsEditorOnly" */
    var EMeshInstancingReplacementMethod_MAX: String /* "EMeshInstancingReplacementMethod_MAX" */
}

external open class MeshInstancingSettings {
    open var ActorClassToUse: UnrealEngineClass
    open var InstanceReplacementThreshold: Number
    open var MeshReplacementMethod: String /* "RemoveOriginalActors" | "KeepOriginalActorsAsEditorOnly" | "EMeshInstancingReplacementMethod_MAX" */
    open var bSkipMeshesWithVertexColors: Boolean
    open var bUseHLODVolumes: Boolean
    open var ISMComponentToUse: UnrealEngineClass
    open fun clone(): MeshInstancingSettings

    companion object {
        fun C(Other: UObject): MeshInstancingSettings
        fun C(Other: Any): MeshInstancingSettings
    }
}

external open class MeshInstancingSettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshInstancingSettings

    companion object {
        fun Load(ResourceName: String): MeshInstancingSettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshInstancingSettingsObject
        fun GetDefaultObject(): MeshInstancingSettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshInstancingSettingsObject
        fun C(Other: UObject): MeshInstancingSettingsObject
        fun C(Other: Any): MeshInstancingSettingsObject
    }
}

external open class MeshMergingSettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshMergingSettings

    companion object {
        fun Load(ResourceName: String): MeshMergingSettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshMergingSettingsObject
        fun GetDefaultObject(): MeshMergingSettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshMergingSettingsObject
        fun C(Other: UObject): MeshMergingSettingsObject
        fun C(Other: Any): MeshMergingSettingsObject
    }
}

external open class MeshProxySettingsObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Settings: MeshProxySettings

    companion object {
        fun Load(ResourceName: String): MeshProxySettingsObject
        fun Find(Outer: UObject, ResourceName: String): MeshProxySettingsObject
        fun GetDefaultObject(): MeshProxySettingsObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MeshProxySettingsObject
        fun C(Other: UObject): MeshProxySettingsObject
        fun C(Other: Any): MeshProxySettingsObject
    }
}

external open class EditorKeyboardShortcutSettings : DeveloperSettings {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): EditorKeyboardShortcutSettings
        fun Find(Outer: UObject, ResourceName: String): EditorKeyboardShortcutSettings
        fun GetDefaultObject(): EditorKeyboardShortcutSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): EditorKeyboardShortcutSettings
        fun C(Other: UObject): EditorKeyboardShortcutSettings
        fun C(Other: Any): EditorKeyboardShortcutSettings
    }
}

external object EIOSCloudKitSyncStrategy {
    var None: String /* "None" */
    var OnlyAtGameStart: String /* "OnlyAtGameStart" */
    var Always: String /* "Always" */
    var EIOSCloudKitSyncStrategy_MAX: String /* "EIOSCloudKitSyncStrategy_MAX" */
}

external open class IOSBuildResourceDirectory {
    open var Path: String
    open fun clone(): IOSBuildResourceDirectory

    companion object {
        fun C(Other: UObject): IOSBuildResourceDirectory
        fun C(Other: Any): IOSBuildResourceDirectory
    }
}

external open class IOSBuildResourceFilePath {
    open var FilePath: String
    open fun clone(): IOSBuildResourceFilePath

    companion object {
        fun C(Other: UObject): IOSBuildResourceFilePath
        fun C(Other: Any): IOSBuildResourceFilePath
    }
}

external object EIOSLandscapeOrientation {
    var LandscapeLeft: String /* "LandscapeLeft" */
    var LandscapeRight: String /* "LandscapeRight" */
    var EIOSLandscapeOrientation_MAX: String /* "EIOSLandscapeOrientation_MAX" */
}

external object EPowerUsageFrameRateLock {
    var PUFRL_None: String /* "PUFRL_None" */
    var PUFRL_20: String /* "PUFRL_20" */
    var PUFRL_30: String /* "PUFRL_30" */
    var PUFRL_60: String /* "PUFRL_60" */
    var PUFRL_MAX: String /* "PUFRL_MAX" */
}

external object EIOSVersion {
    var IOS_12: String /* "IOS_12" */
    var IOS_13: String /* "IOS_13" */
    var IOS_14: String /* "IOS_14" */
    var IOS_MAX: String /* "IOS_MAX" */
}

external open class IOSRuntimeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnableGameCenterSupport: Boolean
    open var bEnableCloudKitSupport: Boolean
    open var IOSCloudKitSyncStrategy: String /* "None" | "OnlyAtGameStart" | "Always" | "EIOSCloudKitSyncStrategy_MAX" */
    open var bEnableRemoteNotificationsSupport: Boolean
    open var bEnableBackgroundFetch: Boolean
    open var bSupportsMetal: Boolean
    open var bSupportsMetalMRT: Boolean
    open var bCookPVRTCTextures: Boolean
    open var bCookASTCTextures: Boolean
    open var bBuildAsFramework: Boolean
    open var WindowsMetalToolchainOverride: IOSBuildResourceDirectory
    open var bGeneratedSYMFile: Boolean
    open var bGeneratedSYMBundle: Boolean
    open var bGenerateCrashReportSymbols: Boolean
    open var bGenerateXCArchive: Boolean
    open var bShipForBitcode: Boolean
    open var bEnableAdvertisingIdentifier: Boolean
    open var AdditionalLinkerFlags: String
    open var AdditionalShippingLinkerFlags: String
    open var RemoteServerName: String
    open var bUseRSync: Boolean
    open var RSyncUsername: String
    open var RemoteServerOverrideBuildPath: String
    open var CwRsyncInstallPath: IOSBuildResourceDirectory
    open var SSHPrivateKeyLocation: String
    open var SSHPrivateKeyOverridePath: IOSBuildResourceFilePath
    open var bRunAsCurrentUser: Boolean
    open var bGameSupportsMultipleActiveControllers: Boolean
    open var bAllowRemoteRotation: Boolean
    open var bUseRemoteAsVirtualJoystick: Boolean
    open var bUseRemoteAbsoluteDpadValues: Boolean
    open var bAllowControllers: Boolean
    open var bControllersBlockDeviceFeedback: Boolean
    open var bDisableMotionData: Boolean
    open var bSupportsPortraitOrientation: Boolean
    open var bSupportsUpsideDownOrientation: Boolean
    open var bSupportsLandscapeLeftOrientation: Boolean
    open var bSupportsLandscapeRightOrientation: Boolean
    open var bSupportsITunesFileSharing: Boolean
    open var bSupportsFilesApp: Boolean
    open var PreferredLandscapeOrientation: String /* "LandscapeLeft" | "LandscapeRight" | "EIOSLandscapeOrientation_MAX" */
    open var BundleDisplayName: String
    open var BundleName: String
    open var BundleIdentifier: String
    open var VersionInfo: String
    open var FrameRateLock: String /* "PUFRL_None" | "PUFRL_20" | "PUFRL_30" | "PUFRL_60" | "PUFRL_MAX" */
    open var bEnableDynamicMaxFPS: Boolean
    open var MinimumiOSVersion: String /* "IOS_12" | "IOS_13" | "IOS_14" | "IOS_MAX" */
    open var bSupportsIPad: Boolean
    open var bSupportsIPhone: Boolean
    open var AdditionalPlistData: String
    open var bCustomLaunchscreenStoryboard: Boolean
    open var bEnableFacebookSupport: Boolean
    open var FacebookAppID: String
    open var MobileProvision: String
    open var SigningCertificate: String
    open var bAutomaticSigning: Boolean
    open var IOSTeamID: String
    open var bDisableHTTPS: Boolean
    open var MaxShaderLanguageVersion: Number
    open var UseFastIntrinsics: Boolean
    open var ForceFloats: Boolean
    open var EnableMathOptimisations: Boolean
    open var IndirectArgumentTier: Number
    open var bUseIntegratedKeyboard: Boolean
    open var AudioSampleRate: Number
    open var AudioCallbackBufferFrameSize: Number
    open var AudioNumBuffersToEnqueue: Number
    open var AudioMaxChannels: Number
    open var AudioNumSourceWorkers: Number
    open var SpatializationPlugin: String
    open var ReverbPlugin: String
    open var OcclusionPlugin: String
    open var CompressionOverrides: PlatformRuntimeAudioCompressionOverrides
    open var bUseAudioStreamCaching: Boolean
    open var CacheSizeKB: Number
    open var MaxChunkSizeOverrideKB: Number
    open var bResampleForDevice: Boolean
    open var SoundCueCookQualityIndex: Number
    open var MaxSampleRate: Number
    open var HighSampleRate: Number
    open var MedSampleRate: Number
    open var LowSampleRate: Number
    open var MinSampleRate: Number
    open var CompressionQualityModifier: Number
    open var AutoStreamingThreshold: Number
    open var bStreamLandscapeMeshLODs: Boolean

    companion object {
        fun Load(ResourceName: String): IOSRuntimeSettings
        fun Find(Outer: UObject, ResourceName: String): IOSRuntimeSettings
        fun GetDefaultObject(): IOSRuntimeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): IOSRuntimeSettings
        fun C(Other: UObject): IOSRuntimeSettings
        fun C(Other: Any): IOSRuntimeSettings
    }
}

external object ELuminFrameTimingHint {
    var Unspecified: String /* "Unspecified" */
    var Maximum: String /* "Maximum" */
    var FPS_60: String /* "FPS_60" */
    var FPS_120: String /* "FPS_120" */
    var ELuminFrameTimingHint_MAX: String /* "ELuminFrameTimingHint_MAX" */
}

external open class LocalizedIconInfo {
    open var LanguageCode: String
    open var IconModelPath: DirectoryPath
    open var IconPortalPath: DirectoryPath
    open fun clone(): LocalizedIconInfo

    companion object {
        fun C(Other: UObject): LocalizedIconInfo
        fun C(Other: Any): LocalizedIconInfo
    }
}

external open class LocalizedIconInfos {
    open var IconData: Array<LocalizedIconInfo>
    open fun clone(): LocalizedIconInfos

    companion object {
        fun C(Other: UObject): LocalizedIconInfos
        fun C(Other: Any): LocalizedIconInfos
    }
}

external object ELuminPrivilege {
    var Invalid: String /* "Invalid" */
    var BatteryInfo: String /* "BatteryInfo" */
    var CameraCapture: String /* "CameraCapture" */
    var ComputerVision: String /* "ComputerVision" */
    var WorldReconstruction: String /* "WorldReconstruction" */
    var InAppPurchase: String /* "InAppPurchase" */
    var AudioCaptureMic: String /* "AudioCaptureMic" */
    var DrmCertificates: String /* "DrmCertificates" */
    var Occlusion: String /* "Occlusion" */
    var LowLatencyLightwear: String /* "LowLatencyLightwear" */
    var Internet: String /* "Internet" */
    var IdentityRead: String /* "IdentityRead" */
    var BackgroundDownload: String /* "BackgroundDownload" */
    var BackgroundUpload: String /* "BackgroundUpload" */
    var MediaDrm: String /* "MediaDrm" */
    var Media: String /* "Media" */
    var MediaMetadata: String /* "MediaMetadata" */
    var PowerInfo: String /* "PowerInfo" */
    var LocalAreaNetwork: String /* "LocalAreaNetwork" */
    var VoiceInput: String /* "VoiceInput" */
    var Documents: String /* "Documents" */
    var ConnectBackgroundMusicService: String /* "ConnectBackgroundMusicService" */
    var RegisterBackgroundMusicService: String /* "RegisterBackgroundMusicService" */
    var PcfRead: String /* "PcfRead" */
    var PwFoundObjRead: String /* "PwFoundObjRead" */
    var NormalNotificationsUsage: String /* "NormalNotificationsUsage" */
    var MusicService: String /* "MusicService" */
    var ControllerPose: String /* "ControllerPose" */
    var GesturesSubscribe: String /* "GesturesSubscribe" */
    var GesturesConfig: String /* "GesturesConfig" */
    var AddressBookRead: String /* "AddressBookRead" */
    var AddressBookWrite: String /* "AddressBookWrite" */
    var AddressBookBasicAccess: String /* "AddressBookBasicAccess" */
    var CoarseLocation: String /* "CoarseLocation" */
    var FineLocation: String /* "FineLocation" */
    var HandMesh: String /* "HandMesh" */
    var WifiStatusRead: String /* "WifiStatusRead" */
    var SocialConnectionsInvitesAccess: String /* "SocialConnectionsInvitesAccess" */
    var SocialConnectionsSelectAccess: String /* "SocialConnectionsSelectAccess" */
    var SecureBrowserWindow: String /* "SecureBrowserWindow" */
    var BluetoothAdapterExternalApp: String /* "BluetoothAdapterExternalApp" */
    var BluetoothAdapterUser: String /* "BluetoothAdapterUser" */
    var BluetoothGattWrite: String /* "BluetoothGattWrite" */
    var ELuminPrivilege_MAX: String /* "ELuminPrivilege_MAX" */
}

external object ELuminComponentSubElementType {
    var FileExtension: String /* "FileExtension" */
    var MimeType: String /* "MimeType" */
    var Mode: String /* "Mode" */
    var MusicAttribute: String /* "MusicAttribute" */
    var Schema: String /* "Schema" */
    var ELuminComponentSubElementType_MAX: String /* "ELuminComponentSubElementType_MAX" */
}

external open class LuminComponentSubElement {
    open var ElementType: String /* "FileExtension" | "MimeType" | "Mode" | "MusicAttribute" | "Schema" | "ELuminComponentSubElementType_MAX" */
    open var Value: String
    open fun clone(): LuminComponentSubElement

    companion object {
        fun C(Other: UObject): LuminComponentSubElement
        fun C(Other: Any): LuminComponentSubElement
    }
}

external object ELuminComponentType {
    var Universe: String /* "Universe" */
    var Fullscreen: String /* "Fullscreen" */
    var SearchProvider: String /* "SearchProvider" */
    var MusicService: String /* "MusicService" */
    var Console: String /* "Console" */
    var SystemUI: String /* "SystemUI" */
    var ELuminComponentType_MAX: String /* "ELuminComponentType_MAX" */
}

external open class LuminComponentElement {
    open var Name: String
    open var VisibleName: String
    open var ExecutableName: String
    open var ComponentType: String /* "Universe" | "Fullscreen" | "SearchProvider" | "MusicService" | "Console" | "SystemUI" | "ELuminComponentType_MAX" */
    open var ExtraComponentSubElements: Array<LuminComponentSubElement>
    open fun clone(): LuminComponentElement

    companion object {
        fun C(Other: UObject): LuminComponentElement
        fun C(Other: Any): LuminComponentElement
    }
}

external open class LocalizedAppName {
    open var LanguageCode: String
    open var AppName: String
    open fun clone(): LocalizedAppName

    companion object {
        fun C(Other: UObject): LocalizedAppName
        fun C(Other: Any): LocalizedAppName
    }
}

external open class LuminRuntimeSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PackageName: String
    open var ApplicationDisplayName: String
    open var FrameTimingHint: String /* "Unspecified" | "Maximum" | "FPS_60" | "FPS_120" | "ELuminFrameTimingHint_MAX" */
    open var bProtectedContent: Boolean
    open var bManualCallToAppReady: Boolean
    open var bUseMobileRendering: Boolean
    open var bUseVulkan: Boolean
    open var Certificate: FilePath
    open var IconModelPath: DirectoryPath
    open var IconPortalPath: DirectoryPath
    open var LocalizedIconInfos: LocalizedIconInfos
    open var VersionCode: Number
    open var MinimumAPILevel: Number
    open var AppPrivileges: Array<String /* "Invalid" | "BatteryInfo" | "CameraCapture" | "ComputerVision" | "WorldReconstruction" | "InAppPurchase" | "AudioCaptureMic" | "DrmCertificates" | "Occlusion" | "LowLatencyLightwear" | "Internet" | "IdentityRead" | "BackgroundDownload" | "BackgroundUpload" | "MediaDrm" | "Media" | "MediaMetadata" | "PowerInfo" | "LocalAreaNetwork" | "VoiceInput" | "Documents" | "ConnectBackgroundMusicService" | "RegisterBackgroundMusicService" | "PcfRead" | "PwFoundObjRead" | "NormalNotificationsUsage" | "MusicService" | "ControllerPose" | "GesturesSubscribe" | "GesturesConfig" | "AddressBookRead" | "AddressBookWrite" | "AddressBookBasicAccess" | "CoarseLocation" | "FineLocation" | "HandMesh" | "WifiStatusRead" | "SocialConnectionsInvitesAccess" | "SocialConnectionsSelectAccess" | "SecureBrowserWindow" | "BluetoothAdapterExternalApp" | "BluetoothAdapterUser" | "BluetoothGattWrite" | "ELuminPrivilege_MAX" */>
    open var ExtraComponentSubElements: Array<LuminComponentSubElement>
    open var ExtraComponentElements: Array<LuminComponentElement>
    open var SpatializationPlugin: String
    open var ReverbPlugin: String
    open var OcclusionPlugin: String
    open var SoundCueCookQualityIndex: Number
    open var bRemoveDebugInfo: Boolean
    open var VulkanValidationLayerLibs: DirectoryPath
    open var bFrameVignette: Boolean
    open var LocalizedAppNames: Array<LocalizedAppName>

    companion object {
        fun Load(ResourceName: String): LuminRuntimeSettings
        fun Find(Outer: UObject, ResourceName: String): LuminRuntimeSettings
        fun GetDefaultObject(): LuminRuntimeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LuminRuntimeSettings
        fun C(Other: UObject): LuminRuntimeSettings
        fun C(Other: Any): LuminRuntimeSettings
    }
}

external open class AndroidSDKSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var SDKPath: DirectoryPath
    open var NDKPath: DirectoryPath
    open var JavaPath: DirectoryPath
    open var SDKAPILevel: String
    open var NDKAPILevel: String

    companion object {
        fun Load(ResourceName: String): AndroidSDKSettings
        fun Find(Outer: UObject, ResourceName: String): AndroidSDKSettings
        fun GetDefaultObject(): AndroidSDKSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): AndroidSDKSettings
        fun C(Other: UObject): AndroidSDKSettings
        fun C(Other: Any): AndroidSDKSettings
    }
}

external open class MagicLeapSDKSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var MLSDKPath: DirectoryPath

    companion object {
        fun Load(ResourceName: String): MagicLeapSDKSettings
        fun Find(Outer: UObject, ResourceName: String): MagicLeapSDKSettings
        fun GetDefaultObject(): MagicLeapSDKSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): MagicLeapSDKSettings
        fun C(Other: UObject): MagicLeapSDKSettings
        fun C(Other: Any): MagicLeapSDKSettings
    }
}

external open class LogVisualizerSessionSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bEnableGraphsVisualization: Boolean

    companion object {
        fun Load(ResourceName: String): LogVisualizerSessionSettings
        fun Find(Outer: UObject, ResourceName: String): LogVisualizerSessionSettings
        fun GetDefaultObject(): LogVisualizerSessionSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LogVisualizerSessionSettings
        fun C(Other: UObject): LogVisualizerSessionSettings
        fun C(Other: Any): LogVisualizerSessionSettings
    }
}

external open class CategoryFilter {
    open var CategoryName: String
    open var LogVerbosity: Number
    open var Enabled: Boolean
    open fun clone(): CategoryFilter

    companion object {
        fun C(Other: UObject): CategoryFilter
        fun C(Other: Any): CategoryFilter
    }
}

external open class VisualLoggerFiltersData {
    open var SearchBoxFilter: String
    open var ObjectNameFilter: String
    open var Categories: Array<CategoryFilter>
    open var SelectedClasses: Array<String>
    open fun clone(): VisualLoggerFiltersData

    companion object {
        fun C(Other: UObject): VisualLoggerFiltersData
        fun C(Other: Any): VisualLoggerFiltersData
    }
}

external open class LogVisualizerSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var bIgnoreTrivialLogs: Boolean
    open var TrivialLogsThreshold: Number
    open var bStickToRecentData: Boolean
    open var bResetDataWithNewSession: Boolean
    open var bShowHistogramLabelsOutside: Boolean
    open var DefaultCameraDistance: Number
    open var bSearchInsideLogs: Boolean
    open var GraphsBackgroundColor: Color
    open var bPresistentFilters: Boolean
    open var bDrawExtremesOnGraphs: Boolean
    open var bConstrainGraphToLocalMinMax: Boolean
    open var bUsePlayersOnlyForPause: Boolean
    open var bLogNavOctreeOnStop: Boolean
    open var bForceUniqueLogNames: Boolean
    open var PresistentFilters: VisualLoggerFiltersData
    open var DebugMeshMaterialFakeLight: Material
    open var DebugMeshMaterialFakeLightName: String

    companion object {
        fun Load(ResourceName: String): LogVisualizerSettings
        fun Find(Outer: UObject, ResourceName: String): LogVisualizerSettings
        fun GetDefaultObject(): LogVisualizerSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LogVisualizerSettings
        fun C(Other: UObject): LogVisualizerSettings
        fun C(Other: Any): LogVisualizerSettings
    }
}

external open class VisualLoggerCameraController(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : DebugCameraController {
    open var PickedActor: Actor

    companion object {
        fun GetDefaultObject(): VisualLoggerCameraController
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerCameraController
        fun C(Other: UObject): VisualLoggerCameraController
        fun C(Other: Any): VisualLoggerCameraController
    }
}

external open class VisualLoggerHUD(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : DebugCameraHUD {
    companion object {
        fun GetDefaultObject(): VisualLoggerHUD
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerHUD
        fun C(Other: UObject): VisualLoggerHUD
        fun C(Other: Any): VisualLoggerHUD
    }
}

external open class VisualLoggerRenderingActor(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    companion object {
        fun GetDefaultObject(): VisualLoggerRenderingActor
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerRenderingActor
        fun C(Other: UObject): VisualLoggerRenderingActor
        fun C(Other: Any): VisualLoggerRenderingActor
    }
}

external open class VisualLoggerRenderingComponent : PrimitiveComponent {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VisualLoggerRenderingComponent
        fun Find(Outer: UObject, ResourceName: String): VisualLoggerRenderingComponent
        fun GetDefaultObject(): VisualLoggerRenderingComponent
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VisualLoggerRenderingComponent
        fun C(Other: UObject): VisualLoggerRenderingComponent
        fun C(Other: Any): VisualLoggerRenderingComponent
    }
}

external open class ClothPainterSettings : MeshPaintSettings {
    constructor()
    constructor(Outer: UObject)
    open var ViewMin: Number
    open var ViewMax: Number
    open var bAutoViewRange: Boolean
    open var AutoCalculatedViewMin: Number
    open var AutoCalculatedViewMax: Number
    open var ClothingAssets: Array<ClothingAssetCommon>
    open var bFlipNormal: Boolean
    open var bCullBackface: Boolean
    open var Opacity: Number

    companion object {
        fun Load(ResourceName: String): ClothPainterSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPainterSettings
        fun GetDefaultObject(): ClothPainterSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPainterSettings
        fun C(Other: UObject): ClothPainterSettings
        fun C(Other: Any): ClothPainterSettings
    }
}

external open class ClothPaintTool_BrushSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var PaintValue: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_BrushSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_BrushSettings
        fun GetDefaultObject(): ClothPaintTool_BrushSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_BrushSettings
        fun C(Other: UObject): ClothPaintTool_BrushSettings
        fun C(Other: Any): ClothPaintTool_BrushSettings
    }
}

external open class ClothPaintTool_GradientSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var GradientStartValue: Number
    open var GradientEndValue: Number
    open var bUseRegularBrush: Boolean

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_GradientSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_GradientSettings
        fun GetDefaultObject(): ClothPaintTool_GradientSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_GradientSettings
        fun C(Other: UObject): ClothPaintTool_GradientSettings
        fun C(Other: Any): ClothPaintTool_GradientSettings
    }
}

external open class ClothPaintTool_SmoothSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Strength: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_SmoothSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_SmoothSettings
        fun GetDefaultObject(): ClothPaintTool_SmoothSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_SmoothSettings
        fun C(Other: UObject): ClothPaintTool_SmoothSettings
        fun C(Other: Any): ClothPaintTool_SmoothSettings
    }
}

external open class ClothPaintTool_FillSettings : UObject {
    constructor()
    constructor(Outer: UObject)
    open var Threshold: Number
    open var FillValue: Number

    companion object {
        fun Load(ResourceName: String): ClothPaintTool_FillSettings
        fun Find(Outer: UObject, ResourceName: String): ClothPaintTool_FillSettings
        fun GetDefaultObject(): ClothPaintTool_FillSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ClothPaintTool_FillSettings
        fun C(Other: UObject): ClothPaintTool_FillSettings
        fun C(Other: Any): ClothPaintTool_FillSettings
    }
}

external object EPaintMode {
    var Vertices: String /* "Vertices" */
    var Textures: String /* "Textures" */
    var EPaintMode_MAX: String /* "EPaintMode_MAX" */
}

external object EMeshPaintMode {
    var PaintColors: String /* "PaintColors" */
    var PaintWeights: String /* "PaintWeights" */
    var EMeshPaintMode_MAX: String /* "EMeshPaintMode_MAX" */
}

external object ETextureWeightTypes {
    var AlphaLerp: String /* "AlphaLerp" */
    var RGB: String /* "RGB" */
    var ARGB: String /* "ARGB" */
    var OneMinusARGB: String /* "OneMinusARGB" */
    var ETextureWeightTypes_MAX: String /* "ETextureWeightTypes_MAX" */
}

external object ETexturePaintIndex {
    var TextureOne: String /* "TextureOne" */
    var TextureTwo: String /* "TextureTwo" */
    var TextureThree: String /* "TextureThree" */
    var TextureFour: String /* "TextureFour" */
    var TextureFive: String /* "TextureFive" */
    var ETexturePaintIndex_MAX: String /* "ETexturePaintIndex_MAX" */
}

external open class VertexPaintSettings {
    open var MeshPaintMode: String /* "PaintColors" | "PaintWeights" | "EMeshPaintMode_MAX" */
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var TextureWeightType: String /* "AlphaLerp" | "RGB" | "ARGB" | "OneMinusARGB" | "ETextureWeightTypes_MAX" */
    open var PaintTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "ETexturePaintIndex_MAX" */
    open var EraseTextureWeightIndex: String /* "TextureOne" | "TextureTwo" | "TextureThree" | "TextureFour" | "TextureFive" | "ETexturePaintIndex_MAX" */
    open var bPaintOnSpecificLOD: Boolean
    open var LODIndex: Number
    open fun clone(): VertexPaintSettings

    companion object {
        fun C(Other: UObject): VertexPaintSettings
        fun C(Other: Any): VertexPaintSettings
    }
}

external open class TexturePaintSettings {
    open var PaintColor: LinearColor
    open var EraseColor: LinearColor
    open var bWriteRed: Boolean
    open var bWriteGreen: Boolean
    open var bWriteBlue: Boolean
    open var bWriteAlpha: Boolean
    open var UVChannel: Number
    open var bEnableSeamPainting: Boolean
    open var PaintTexture: Texture2D
    open fun clone(): TexturePaintSettings

    companion object {
        fun C(Other: UObject): TexturePaintSettings
        fun C(Other: Any): TexturePaintSettings
    }
}

external open class PaintModeSettings : MeshPaintSettings {
    constructor()
    constructor(Outer: UObject)
    open var PaintMode: String /* "Vertices" | "Textures" | "EPaintMode_MAX" */
    open var VertexPaintSettings: VertexPaintSettings
    open var TexturePaintSettings: TexturePaintSettings

    companion object {
        fun Load(ResourceName: String): PaintModeSettings
        fun Find(Outer: UObject, ResourceName: String): PaintModeSettings
        fun GetDefaultObject(): PaintModeSettings
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): PaintModeSettings
        fun C(Other: UObject): PaintModeSettings
        fun C(Other: Any): PaintModeSettings
    }
}

external open class ActorFactoryLandscape : ActorFactory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryLandscape
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryLandscape
        fun GetDefaultObject(): ActorFactoryLandscape
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryLandscape
        fun C(Other: UObject): ActorFactoryLandscape
        fun C(Other: Any): ActorFactoryLandscape
    }
}

external object ELandscapeToolFlattenMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var Interval: String /* "Interval" */
    var Terrace: String /* "Terrace" */
    var ELandscapeToolFlattenMode_MAX: String /* "ELandscapeToolFlattenMode_MAX" */
}

external object ELandscapeToolErosionMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var ELandscapeToolErosionMode_MAX: String /* "ELandscapeToolErosionMode_MAX" */
}

external object ELandscapeToolHydroErosionMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Positive: String /* "Positive" */
    var ELandscapeToolHydroErosionMode_MAX: String /* "ELandscapeToolHydroErosionMode_MAX" */
}

external object ELandscapeToolNoiseMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Add: String /* "Add" */
    var Sub: String /* "Sub" */
    var ELandscapeToolNoiseMode_MAX: String /* "ELandscapeToolNoiseMode_MAX" */
}

external object ELandscapeToolPasteMode {
    var Invalid: String /* "Invalid" */
    var Both: String /* "Both" */
    var Raise: String /* "Raise" */
    var Lower: String /* "Lower" */
    var ELandscapeToolPasteMode_MAX: String /* "ELandscapeToolPasteMode_MAX" */
}

external open class GizmoImportLayer {
    open var LayerFilename: String
    open var LayerName: String
    open var bNoImport: Boolean
    open fun clone(): GizmoImportLayer

    companion object {
        fun C(Other: UObject): GizmoImportLayer
        fun C(Other: Any): GizmoImportLayer
    }
}

external object ELandscapeMirrorOperation {
    var MinusXToPlusX: String /* "MinusXToPlusX" */
    var PlusXToMinusX: String /* "PlusXToMinusX" */
    var MinusYToPlusY: String /* "MinusYToPlusY" */
    var PlusYToMinusY: String /* "PlusYToMinusY" */
    var RotateMinusXToPlusX: String /* "RotateMinusXToPlusX" */
    var RotatePlusXToMinusX: String /* "RotatePlusXToMinusX" */
    var RotateMinusYToPlusY: String /* "RotateMinusYToPlusY" */
    var RotatePlusYToMinusY: String /* "RotatePlusYToMinusY" */
    var ELandscapeMirrorOperation_MAX: String /* "ELandscapeMirrorOperation_MAX" */
}

external object ELandscapeConvertMode {
    var Invalid: String /* "Invalid" */
    var Expand: String /* "Expand" */
    var Clip: String /* "Clip" */
    var Resample: String /* "Resample" */
    var ELandscapeConvertMode_MAX: String /* "ELandscapeConvertMode_MAX" */
}

external object ELandscapeImportResult {
    var Success: String /* "Success" */
    var Warning: String /* "Warning" */
    var Error: String /* "Error" */
    var ELandscapeImportResult_MAX: String /* "ELandscapeImportResult_MAX" */
}

external object ELandscapeImportAlphamapType {
    var Additive: String /* "Additive" */
    var Layered: String /* "Layered" */
    var ELandscapeImportAlphamapType_MAX: String /* "ELandscapeImportAlphamapType_MAX" */
}

external open class LandscapeImportLayerInfo {
    open var LayerName: String
    open var LayerInfo: LandscapeLayerInfoObject
    open var SourceFilePath: String
    open fun clone(): LandscapeImportLayerInfo

    companion object {
        fun C(Other: UObject): LandscapeImportLayerInfo
        fun C(Other: Any): LandscapeImportLayerInfo
    }
}

external open class LandscapeImportLayer : LandscapeImportLayerInfo {
    open var ThumbnailMIC: LandscapeMaterialInstanceConstant
    open var ImportResult: String /* "Success" | "Warning" | "Error" | "ELandscapeImportResult_MAX" */
    open var ErrorMessage: String
    override fun clone(): LandscapeImportLayer

    companion object {
        fun C(Other: UObject): LandscapeImportLayer
        fun C(Other: Any): LandscapeImportLayer
    }
}

external open class LandscapePatternBrushWorldSpaceSettings {
    open var Origin: Vector2D
    open var Rotation: Number
    open var bCenterTextureOnOrigin: Boolean
    open var RepeatSize: Number
    open fun clone(): LandscapePatternBrushWorldSpaceSettings

    companion object {
        fun C(Other: UObject): LandscapePatternBrushWorldSpaceSettings
        fun C(Other: Any): LandscapePatternBrushWorldSpaceSettings
    }
}

external object EColorChannel {
    var Red: String /* "Red" */
    var Green: String /* "Green" */
    var Blue: String /* "Blue" */
    var Alpha: String /* "Alpha" */
    var EColorChannel_MAX: String /* "EColorChannel_MAX" */
}

external open class LandscapeEditorObject : UObject {
    constructor()
    constructor(Outer: UObject)
    open var ToolStrength: Number
    open var bUseWeightTargetValue: Boolean
    open var WeightTargetValue: Number
    open var MaximumValueRadius: Number
    open var bCombinedLayersOperation: Boolean
    open var FlattenMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "Interval" | "Terrace" | "ELandscapeToolFlattenMode_MAX" */
    open var bUseSlopeFlatten: Boolean
    open var bPickValuePerApply: Boolean
    open var bUseFlattenTarget: Boolean
    open var FlattenTarget: Number
    open var bShowFlattenTargetPreview: Boolean
    open var TerraceInterval: Number
    open var TerraceSmooth: Number
    open var bFlattenEyeDropperModeActivated: Boolean
    open var FlattenEyeDropperModeDesiredTarget: Number
    open var RampWidth: Number
    open var RampSideFalloff: Number
    open var SmoothFilterKernelSize: Number
    open var bDetailSmooth: Boolean
    open var DetailScale: Number
    open var ErodeThresh: Number
    open var ErodeSurfaceThickness: Number
    open var ErodeIterationNum: Number
    open var ErosionNoiseMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "ELandscapeToolErosionMode_MAX" */
    open var ErosionNoiseScale: Number
    open var RainAmount: Number
    open var SedimentCapacity: Number
    open var HErodeIterationNum: Number
    open var RainDistMode: String /* "Invalid" | "Both" | "Positive" | "ELandscapeToolHydroErosionMode_MAX" */
    open var RainDistScale: Number
    open var bHErosionDetailSmooth: Boolean
    open var HErosionDetailScale: Number
    open var NoiseMode: String /* "Invalid" | "Both" | "Add" | "Sub" | "ELandscapeToolNoiseMode_MAX" */
    open var NoiseScale: Number
    open var bUseSelectedRegion: Boolean
    open var bUseNegativeMask: Boolean
    open var PasteMode: String /* "Invalid" | "Both" | "Raise" | "Lower" | "ELandscapeToolPasteMode_MAX" */
    open var bApplyToAllTargets: Boolean
    open var bSnapGizmo: Boolean
    open var bSmoothGizmoBrush: Boolean
    open var GizmoHeightmapFilenameString: String
    open var GizmoImportSize: IntPoint
    open var GizmoImportLayers: Array<GizmoImportLayer>
    open var MirrorPoint: Vector2D
    open var MirrorOp: String /* "MinusXToPlusX" | "PlusXToMinusX" | "MinusYToPlusY" | "PlusYToMinusY" | "RotateMinusXToPlusX" | "RotatePlusXToMinusX" | "RotateMinusYToPlusY" | "RotatePlusYToMinusY" | "ELandscapeMirrorOperation_MAX" */
    open var MirrorSmoothingWidth: Number
    open var BlueprintBrush: UnrealEngineClass
    open var ResizeLandscape_QuadsPerSection: Number
    open var ResizeLandscape_SectionsPerComponent: Number
    open var ResizeLandscape_ComponentCount: IntPoint
    open var ResizeLandscape_ConvertMode: String /* "Invalid" | "Expand" | "Clip" | "Resample" | "ELandscapeConvertMode_MAX" */
    open var NewLandscape_Material: Any
    open var NewLandscape_QuadsPerSection: Number
    open var NewLandscape_SectionsPerComponent: Number
    open var NewLandscape_ComponentCount: IntPoint
    open var NewLandscape_Location: Vector
    open var NewLandscape_Rotation: Rotator
    open var NewLandscape_Scale: Vector
    open var ImportLandscape_HeightmapImportResult: String /* "Success" | "Warning" | "Error" | "ELandscapeImportResult_MAX" */
    open var ImportLandscape_HeightmapErrorMessage: String
    open var ImportLandscape_HeightmapFilename: String
    open var ImportLandscape_Width: Any
    open var ImportLandscape_Height: Any
    open var ImportLandscape_Data: Array<Any>
    open var bCanHaveLayersContent: Boolean
    open var ImportLandscape_AlphamapType: String /* "Additive" | "Layered" | "ELandscapeImportAlphamapType_MAX" */
    open var ImportLandscape_Layers: Array<LandscapeImportLayer>
    open var BrushRadius: Number
    open var BrushFalloff: Number
    open var bUseClayBrush: Boolean
    open var AlphaBrushScale: Number
    open var bAlphaBrushAutoRotate: Boolean
    open var AlphaBrushRotation: Number
    open var AlphaBrushPanU: Number
    open var AlphaBrushPanV: Number
    open var bUseWorldSpacePatternBrush: Boolean
    open var WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings
    open var AlphaTexture: Texture2D
    open var AlphaTextureChannel: String /* "Red" | "Green" | "Blue" | "Alpha" | "EColorChannel_MAX" */
    open var AlphaTextureSizeX: Number
    open var AlphaTextureSizeY: Number
    open var AlphaTextureData: Array<Number>
    open var BrushComponentSize: Number
    open var PaintingRestriction: String /* "None" | "UseMaxLayers" | "ExistingOnly" | "UseComponentWhitelist" | "ELandscapeLayerPaintingRestriction_MAX" */
    open var TargetDisplayOrder: String /* "Default" | "Alphabetical" | "UserSpecific" | "ELandscapeLayerDisplayMode_MAX" */
    open var ShowUnusedLayers: Boolean
    open var CurrentLayerIndex: Number

    companion object {
        fun Load(ResourceName: String): LandscapeEditorObject
        fun Find(Outer: UObject, ResourceName: String): LandscapeEditorObject
        fun GetDefaultObject(): LandscapeEditorObject
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapeEditorObject
        fun C(Other: UObject): LandscapeEditorObject
        fun C(Other: Any): LandscapeEditorObject
    }
}

external open class LandscapePlaceholder(InWorld: World, Location: Vector = definedExternally, Rotation: Rotator = definedExternally) : Actor {
    companion object {
        fun GetDefaultObject(): LandscapePlaceholder
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapePlaceholder
        fun C(Other: UObject): LandscapePlaceholder
        fun C(Other: Any): LandscapePlaceholder
    }
}

external open class ActorFactoryProceduralFoliage : ActorFactoryBoxVolume {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ActorFactoryProceduralFoliage
        fun Find(Outer: UObject, ResourceName: String): ActorFactoryProceduralFoliage
        fun GetDefaultObject(): ActorFactoryProceduralFoliage
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ActorFactoryProceduralFoliage
        fun C(Other: UObject): ActorFactoryProceduralFoliage
        fun C(Other: Any): ActorFactoryProceduralFoliage
    }
}

external open class FoliageType_ActorThumbnailRenderer : BlueprintThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ActorThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ActorThumbnailRenderer
        fun GetDefaultObject(): FoliageType_ActorThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ActorThumbnailRenderer
        fun C(Other: UObject): FoliageType_ActorThumbnailRenderer
        fun C(Other: Any): FoliageType_ActorThumbnailRenderer
    }
}

external open class FoliageType_ISMThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ISMThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ISMThumbnailRenderer
        fun GetDefaultObject(): FoliageType_ISMThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ISMThumbnailRenderer
        fun C(Other: UObject): FoliageType_ISMThumbnailRenderer
        fun C(Other: Any): FoliageType_ISMThumbnailRenderer
    }
}

external open class FoliageType_InstancedStaticMeshFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_InstancedStaticMeshFactory
        fun Find(Outer: UObject, ResourceName: String): FoliageType_InstancedStaticMeshFactory
        fun GetDefaultObject(): FoliageType_InstancedStaticMeshFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_InstancedStaticMeshFactory
        fun C(Other: UObject): FoliageType_InstancedStaticMeshFactory
        fun C(Other: Any): FoliageType_InstancedStaticMeshFactory
    }
}

external open class FoliageType_ActorFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): FoliageType_ActorFactory
        fun Find(Outer: UObject, ResourceName: String): FoliageType_ActorFactory
        fun GetDefaultObject(): FoliageType_ActorFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): FoliageType_ActorFactory
        fun C(Other: UObject): FoliageType_ActorFactory
        fun C(Other: Any): FoliageType_ActorFactory
    }
}

external open class LandscapeGrassTypeFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): LandscapeGrassTypeFactory
        fun Find(Outer: UObject, ResourceName: String): LandscapeGrassTypeFactory
        fun GetDefaultObject(): LandscapeGrassTypeFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): LandscapeGrassTypeFactory
        fun C(Other: UObject): LandscapeGrassTypeFactory
        fun C(Other: Any): LandscapeGrassTypeFactory
    }
}

external open class ProceduralFoliageSpawnerFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): ProceduralFoliageSpawnerFactory
        fun Find(Outer: UObject, ResourceName: String): ProceduralFoliageSpawnerFactory
        fun GetDefaultObject(): ProceduralFoliageSpawnerFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): ProceduralFoliageSpawnerFactory
        fun C(Other: UObject): ProceduralFoliageSpawnerFactory
        fun C(Other: Any): ProceduralFoliageSpawnerFactory
    }
}

external open class RuntimeVirtualTextureFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): RuntimeVirtualTextureFactory
        fun Find(Outer: UObject, ResourceName: String): RuntimeVirtualTextureFactory
        fun GetDefaultObject(): RuntimeVirtualTextureFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RuntimeVirtualTextureFactory
        fun C(Other: UObject): RuntimeVirtualTextureFactory
        fun C(Other: Any): RuntimeVirtualTextureFactory
    }
}

external open class RuntimeVirtualTextureThumbnailRenderer : DefaultSizedThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): RuntimeVirtualTextureThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): RuntimeVirtualTextureThumbnailRenderer
        fun GetDefaultObject(): RuntimeVirtualTextureThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): RuntimeVirtualTextureThumbnailRenderer
        fun C(Other: UObject): RuntimeVirtualTextureThumbnailRenderer
        fun C(Other: Any): RuntimeVirtualTextureThumbnailRenderer
    }
}

external open class VirtualTextureBuilderFactory : Factory {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VirtualTextureBuilderFactory
        fun Find(Outer: UObject, ResourceName: String): VirtualTextureBuilderFactory
        fun GetDefaultObject(): VirtualTextureBuilderFactory
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VirtualTextureBuilderFactory
        fun C(Other: UObject): VirtualTextureBuilderFactory
        fun C(Other: Any): VirtualTextureBuilderFactory
    }
}

external open class VirtualTextureBuilderThumbnailRenderer : TextureThumbnailRenderer {
    constructor()
    constructor(Outer: UObject)

    companion object {
        fun Load(ResourceName: String): VirtualTextureBuilderThumbnailRenderer
        fun Find(Outer: UObject, ResourceName: String): VirtualTextureBuilderThumbnailRenderer
        fun GetDefaultObject(): VirtualTextureBuilderThumbnailRenderer
        fun CreateDefaultSubobject(Name: String, Transient: Boolean = definedExternally, Required: Boolean = definedExternally, Abstract: Boolean = definedExternally): VirtualTextureBuilderThumbnailRenderer
        fun C(Other: UObject): VirtualTextureBuilderThumbnailRenderer
        fun C(Other: Any): VirtualTextureBuilderThumbnailRenderer
    }
}

external var Context: JavascriptContext

external var Root: JavascriptEditorTick
