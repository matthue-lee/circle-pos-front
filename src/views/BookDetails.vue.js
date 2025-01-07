var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default (await import('vue')).defineComponent({
    name: "BookDetails",
    props: ["id"], // Accept the `id` from the route params
    data() {
        return {
            book: null, // Book details
            loading: false, // Loading state for the button
            successMessage: "", // Success message to show to the user
        };
    },
    created() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://circle-server-1oo2.onrender.com/books/${this.id}`);
                const data = yield response.json();
                this.book = data.book;
            }
            catch (error) {
                console.error("Error fetching book details:", error);
            }
        });
    },
    methods: {
        purchaseBook() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    this.loading = true;
                    const response = yield fetch(`https://circle-server-1oo2.onrender.com/books/${this.id}/purchase`, {
                        method: "POST",
                    });
                    const result = yield response.json();
                    if (response.ok) {
                        this.successMessage = "Purchase successful!";
                        this.book.availableStock -= 1; // Update stock locally
                    }
                    else {
                        this.successMessage = `Error: ${result.message}`;
                    }
                }
                catch (error) {
                    this.successMessage =
                        "An error occurred during purchase. Please try again.";
                    console.error("Purchase error:", error);
                }
                finally {
                    this.loading = false;
                    // Clear the success message after 3 seconds
                    setTimeout(() => {
                        this.successMessage = "";
                    }, 3000);
                }
            });
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("p-8") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ to: ("/") }, { class: ("text-blue-500 hover:underline mb-4 inline-block") })));
    const __VLS_2 = __VLS_1(Object.assign({ to: ("/") }, { class: ("text-blue-500 hover:underline mb-4 inline-block") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg lg:max-w-lg lg:p-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("text-2xl font-bold mb-4 lg:text-3xl") }));
    (__VLS_ctx.book.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-md text-gray-500 mb-4 lg:text-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.book.author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-md lg:text-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.book.isbn);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-md lg:text-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.book.price.toFixed(2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-md lg:text-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.book.availableStock);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (__VLS_ctx.purchaseBook) }, { class: ("mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition lg:px-6 lg:py-3") }), { disabled: ((__VLS_ctx.loading)) }));
    (__VLS_ctx.loading ? "Processing..." : "Purchase");
    if (__VLS_ctx.successMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("mt-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded") }));
        (__VLS_ctx.successMessage);
    }
    __VLS_styleScopedClasses['p-8'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['max-w-lg'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['lg:max-w-lg'];
    __VLS_styleScopedClasses['lg:p-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['lg:text-3xl'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['lg:text-lg'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['lg:text-lg'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['lg:text-lg'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['lg:text-lg'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-600'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['lg:px-6'];
    __VLS_styleScopedClasses['lg:py-3'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-green-800'];
    __VLS_styleScopedClasses['bg-green-100'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-green-300'];
    __VLS_styleScopedClasses['rounded'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
