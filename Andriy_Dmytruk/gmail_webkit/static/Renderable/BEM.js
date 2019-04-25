const ELEMENT_SPLITTER = "__";
const MODIFIER_SPLITTER = "_";

const flatten = ([first, ...other]) => other.length > 0 ?
    (first instanceof Array ? [...flatten(first), ...flatten(other)] : [first, ...flatten(other)]) :
    (first instanceof Array ? [...flatten(first)] : [first]);

const createArray = (items) => {
    let result = [];
    if (typeof items == "string" || items instanceof String) {
        result = items.split(" ");
    }
    else if (items instanceof Array) {
        result = flatten(items.map(createArray));
    }
    else if (items instanceof Object) {
        result = flatten(Object.keys(items).filter(key => items[key]).map(createArray));
    }
    result = result.filter((item) => !(!item || !item.trim()));

    return result;
};

const BEM = (blockName) => {
    return (elementNames, modifierNames) => {
        let elements = createArray(elementNames).map(e => blockName ? blockName + ELEMENT_SPLITTER + e : e);
        if (elements.length < 1) elements = [blockName];

        let modifiers = createArray(modifierNames);
        if (modifiers.length < 1)
            return elements.join(" ");

        return elements.map(
            e => e + " " + (modifiers.map(m => e + MODIFIER_SPLITTER + m).join(" "))
        ).join(" ");
    }
};

export default BEM;
