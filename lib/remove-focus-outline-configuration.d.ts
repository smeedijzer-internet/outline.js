export declare class RemoveFocusOutlineConfiguration {
    /**
     * The CSS injected for mouse users
     */
    mouseCss: string;
    /**
     * The CSS injected for keyboard users
     */
    keyboardCss: string;
    /**
     * Mouse event to listen for
     *
     * Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
     */
    mouseEvent: string;
    /**
     * Keyboard event to listen for
     */
    keyboardEvent: string;
}
