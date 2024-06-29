import HomePage from "../pages/Homepage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        IssShowHeader: true
    },

    {
        path: '/order',
        page: OrderPage,
        IssShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        IssShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        IssShowHeader: false
    },
]