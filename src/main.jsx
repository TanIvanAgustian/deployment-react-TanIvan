import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, redirect} from "react-router-dom"
import { getAuthCookie } from './utils/cookies';
import { ApolloProvider } from '@apollo/client';
import client from './Layout/Createproduct/apolloClient';


import CreateProduct from './Layout/Createproduct/CreateProduct';
import LandingPage from './Layout/landingPage/landingPage';
import Detail from './Layout/Createproduct/Detail';
import Register from './Layout/Register/Register';
import Login from './Layout/Login/Login';
import ViewAllProducts from './Layout/landingPage/viewAllProducts';
import ViewSearchedProducts from './Layout/landingPage/ViewSearchedProducts';
import Comment from './Layout/Createproduct/Comment';

const mustlogin = () => {
  const token = getAuthCookie()
  if (!token) {
    return redirect('/login')
  }
  return null
}
const mustlogout = () => {
  const token = getAuthCookie()
  if (token) {
    return redirect('/landingPage')
  }
  return null
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    loader: mustlogout
  },
  {
    path: "/Login",
    element: <Login />,
    loader: mustlogout
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
    loader: mustlogin
  },
  {
    path: "/Createproduct",
    element: <CreateProduct />,
    loader: mustlogin
  },
  {
    path: '/ViewAllProducts/:id',
    element: <Detail />,
    loader: mustlogin
  },
  {
    path: '/products/:Title',
    element: <ViewSearchedProducts />,
    loader: mustlogin
  },
  {
    path: '/products/comment/:id',
    element: <Comment />,
    loader: mustlogin
  },
  {
    path: '/ViewAllProducts',
    element: <ViewAllProducts />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
