import { RemoveFocusOutlineConfiguration } from './remove-focus-outline-configuration';
/**
 * Handles initialisation of the library, mouse/keyboard events & setting relevant CSS
 */
export declare class RemoveFocusOutline {
    private $style;
    private boundSetMouseCss;
    private boundSetKeyboardCss;
    private supportsCssText;
    config: RemoveFocusOutlineConfiguration;
    constructor(options?: Partial<RemoveFocusOutlineConfiguration>);
    /**
     * Removes all event listeners & the style element
     */
    destroy(): void;
    /**
     * Merges user-supplied configuration options with defaults
     */
    private mergeConfiguration;
    /**
     * Adds an empty `style` element to the document
     */
    private addStyleElement;
    /**
     * Adds a class name to the HTML element when initialised so we can easily target our CSS
     */
    private addClassName;
    /**
     * Adds event listeners for mousedown & keydown
     */
    addEventListeners(): void;
    /**
     * Removes event listeners for mousedown & keydown
     */
    removeEventListeners(): void;
    private setMouseCss;
    private setKeyboardCss;
    private currentCss;
    /**
     * Sets the CSS
     */
    private setCss;
    /**
     * Basic cross-browser event handling
     */
    private addEventListener;
    private removeEventListener;
    /**
     * Detect whether the browser supports `document.addEventListener`
     */
    private supportsDomEvents;
    /**
     * Detect whether the browser supports `styleSheet.csstext`
     */
    private detectSupportsCssText;
}
