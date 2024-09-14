import { createBrowserRouter } from 'react-router-dom'
import Default from "../screens/Default"
import Products from "../screens/Product";
import LoginForm from "../screens/LoginForm";
import App from "../App"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/form',
                element: <LoginForm />,
            },
        ]
    }
])

export default routes;