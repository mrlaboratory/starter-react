import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './components/About'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Books from './components/Books'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'about',
                element: <About></About>,
            },
            {
                path : 'books',
                element : <Books></Books>
            }
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
