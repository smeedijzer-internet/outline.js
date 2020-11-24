export class RemoveFocusOutlineConfiguration {

    /**
     * The CSS injected for mouse users
     */
    mouseCss = '.--remove-focus-outline--initialised :focus{outline:0 !important;box-shadow:none !important;}';

    /**
     * The CSS injected for keyboard users
     */
    keyboardCss = ':focus{outline-style: dashed !important; outline-width: medium !important; outline-color: black !important;box-shadow:none !important;}';

    /**
     * Mouse event to listen for
     *
     * Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
     */
    mouseEvent = 'mousedown';

    /**
     * Keyboard event to listen for
     */
    keyboardEvent = 'keydown';

}
