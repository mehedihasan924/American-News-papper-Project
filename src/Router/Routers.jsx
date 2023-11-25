import{ Navigate, createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Category from '../Pages/Categories/Category'
import NewsFeed from '../Layouts/NewsFeed'
import NewsDetails from '../Pages/NewsDetails/NewsDetails'
import LoginLayout from '../Layouts/LoginLayout'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import PrivetRoute from './PrivetRoute'


const router=createBrowserRouter([
   {
    path:"/",
    element:<LoginLayout></LoginLayout>,
    children:[
        {
            path:"/",
            element:<Navigate to="/categories/0"></Navigate>
        },
      { 
         path: "login",
         element:<Login></Login>
      },
      {
        path: "register",
        element:<Register></Register>
      }
    ]
   },
    {
        path: "categories",
        element:<Main></Main>,
        children: [
           
            {
                path:":id",
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
            },
            
        ]
    },

    {
        path:"news",
        element:<NewsFeed></NewsFeed>,
        children:[
         {
            path:":id",
            element: <PrivetRoute> <NewsDetails></NewsDetails> </PrivetRoute> ,
            loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
        }
    ]
    }
])
export default router