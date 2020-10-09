/*!
 * remove-focus-outline v2.0.0-beta.5
 * © Copyright 2020 Lindsay Evans & contributors
 * Released under the MIT license
 * https://github.com/lindsayevans/outline.js#readme
 */
var RemoveFocusOutlineConfiguration = /** @class */ (function () {
    function RemoveFocusOutlineConfiguration() {
        /**
         * The CSS injected for mouse users
         */
        this.mouseCss = '.--remove-focus-outline--initialised :focus{outline:0 !important;box-shadow:none !important;}';
        /**
         * The CSS injected for keyboard users
         */
        this.keyboardCss = ':focus{outline-style: dashed !important; outline-width: medium !important; outline-color: black !important;}';
        /**
         * Mouse event to listen for
         *
         * Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
         */
        this.mouseEvent = 'mousedown';
        /**
         * Keyboard event to listen for
         */
        this.keyboardEvent = 'keydown';
    }
    return RemoveFocusOutlineConfiguration;
}());

/**
 * Handles initialisation of the library, mouse/keyboard events & setting relevant CSS
 */
var RemoveFocusOutline = /** @class */ (function () {
    /* istanbul ignore next */
    function RemoveFocusOutline(options) {
        if (options === void 0) { options = {}; }
        this.supportsCssText = false;
        this.config = new RemoveFocusOutlineConfiguration();
        this.config = this.mergeConfiguration(options);
        this.addStyleElement();
        this.supportsCssText = this.detectSupportsCssText();
        this.addEventListeners();
        this.addClassName();
    }
    /**
     * Removes all event listeners & the style element
     */
    RemoveFocusOutline.prototype.destroy = function () {
        this.$style.remove();
        this.removeEventListeners();
    };
    /**
     * Merges user-supplied configuration options with defaults
     */
    RemoveFocusOutline.prototype.mergeConfiguration = function (options) {
        return Object.assign(this.config, options);
    };
    /**
     * Adds an empty `style` element to the document
     */
    RemoveFocusOutline.prototype.addStyleElement = function () {
        this.$style = document.createElement('style');
        this.$style.setAttribute('data-remove-focus-outline-style', '');
        document.getElementsByTagName('head')[0].appendChild(this.$style);
    };
    /**
     * Adds a class name to the HTML element when initialised so we can easily target our CSS
     */
    RemoveFocusOutline.prototype.addClassName = function () {
        document.querySelector('html').classList.add('--remove-focus-outline--initialised');
    };
    /**
     * Adds event listeners for mousedown & keydown
     */
    RemoveFocusOutline.prototype.addEventListeners = function () {
        this.boundSetMouseCss = this.setMouseCss.bind(this);
        this.addEventListener(this.config.mouseEvent, this.boundSetMouseCss);
        this.boundSetKeyboardCss = this.setKeyboardCss.bind(this);
        this.addEventListener(this.config.keyboardEvent, this.boundSetKeyboardCss);
    };
    /**
     * Removes event listeners for mousedown & keydown
     */
    RemoveFocusOutline.prototype.removeEventListeners = function () {
        this.removeEventListener(this.config.mouseEvent, this.boundSetMouseCss);
        this.removeEventListener(this.config.keyboardEvent, this.boundSetKeyboardCss);
    };
    RemoveFocusOutline.prototype.setMouseCss = function () {
        this.setCss(this.config.mouseCss);
    };
    RemoveFocusOutline.prototype.setKeyboardCss = function () {
        this.setCss(this.config.keyboardCss);
    };
    /**
     * Sets the CSS
     */
    RemoveFocusOutline.prototype.setCss = function (css) {
        if (css !== this.currentCss) {
            this.currentCss = css;
            /* istanbul ignore if */
            // IE8 compatibility
            if (this.supportsCssText) {
                this.$style.styleSheet.cssText = css;
            }
            else {
                this.$style.innerHTML = css;
            }
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Basic cross-browser event handling
     */
    RemoveFocusOutline.prototype.addEventListener = function (type, callback) {
        /* istanbul ignore else */
        if (this.supportsDomEvents()) {
            document.addEventListener(type, callback);
        }
        else {
            // IE8 compatibility
            document.attachEvent('on' + type, callback);
        }
    };
    RemoveFocusOutline.prototype.removeEventListener = function (type, callback) {
        /* istanbul ignore else */
        if (this.supportsDomEvents()) {
            document.removeEventListener(type, callback);
        }
        else {
            // IE8 compatibility
            document.detachEvent('on' + type, callback);
        }
    };
    /**
     * Detect whether the browser supports `document.addEventListener`
     */
    RemoveFocusOutline.prototype.supportsDomEvents = function () {
        return 'addEventListener' in document;
    };
    /**
     * Detect whether the browser supports `styleSheet.csstext`
     */
    RemoveFocusOutline.prototype.detectSupportsCssText = function () {
        return !!this.$style.styleSheet;
    };
    return RemoveFocusOutline;
}());

new RemoveFocusOutline();
//# sourceMappingURL=remove-focus-outline.esm.js.map
