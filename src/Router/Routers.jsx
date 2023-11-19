import{ createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home'
import Category from '../Pages/Categories/Category'
import NewsFeed from '../Layouts/NewsFeed'
import NewsDetails from '../Pages/NewsDetails/NewsDetails'


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
                path:"/categories/:id",
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path:"news",
        element:<NewsFeed></NewsFeed>,
        children:[
         {
            path:":id",
            element: <NewsDetails></NewsDetails>
        }
    ]
    }
])
export default router