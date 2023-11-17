import{ createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home'
import Category from '../Pages/Categories/Category'


const router=createBrowserRouter([

    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path:"/",
                element: <Home> </Home>
            },
            {
                path:"/category/:id",
                element: <Category></Category>
            }
        ]
    }
])
export default router