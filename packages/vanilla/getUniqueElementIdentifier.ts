import genKey from "./genKey";

export default function getUniqueElementIdentifier(element : HTMLElement) : string|number {
    // if there's no element we cant ID it
    if (!element) {
        return 0;
    }

    // if we've already set the identifier, we can just return it
    if (element.dataset.identifier) {
        return element.dataset.seIdentifier;
    }

    // generate a new identifier for the element
    const identifier = `${genKey()}`;
    // store it as a data attibute
    element.setAttribute('data-identifier', identifier);
    // return the identifier
    return identifier;
}
