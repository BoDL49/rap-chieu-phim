import TypeProduct from "../components/TypeProduct/TypeProduct";
import HomePage from "../pages/Homepage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUnPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        IssShowHeader: true,
        IssShowFooter: true
    },

    {
        path: '/order',
        page: OrderPage,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '/products',
        page: ProductsPage,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '/:type',
        page: TypeProductPage,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '/signin',
        page: SignInPage,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '/signup',
        page: SignUnPage,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '/productdetail',
        page: ProductDetail,
        IssShowHeader: true,
        IssShowFooter: true
    },
    {
        path: '*',
        page: NotFoundPage,
        IssShowHeader: false,
        IssShowFooter: false
    },
]