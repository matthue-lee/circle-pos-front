import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import BookDetails from '../views/BookDetails.vue';
import '../index.css'; // Import Tailwind CSS here
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/book/:id',
        name: 'BookDetails',
        component: BookDetails,
        props: true, // Pass route params as props
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
