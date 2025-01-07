var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import BookCard from '@/components/BookCard.vue'; // Ensure this path is correct
export default (await import('vue')).defineComponent({
    name: 'HomePage',
    components: {
        BookCard, // Register BookCard component
    },
    data() {
        return {
            books: [], // Array to hold book data
        };
    },
    created() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('https://circle-server-1oo2.onrender.com/books'); // Correct API endpoint
                const data = yield response.json();
                this.books = data.books; // Assign fetched books to the books array
            }
            catch (error) {
                console.error('Error fetching books:', error); // Log error if any
            }
        });
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        BookCard, // Register BookCard component
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("p-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("text-2xl font-bold mb-8 text-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6") }));
    for (const [book] of __VLS_getVForSourceType((__VLS_ctx.books))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BookCard;
        /** @type { [typeof __VLS_components.BookCard, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((book.id)), book: ((book)), }));
        const __VLS_2 = __VLS_1({ key: ((book.id)), book: ((book)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['p-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['sm:grid-cols-2'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['lg:grid-cols-4'];
    __VLS_styleScopedClasses['gap-6'];
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
