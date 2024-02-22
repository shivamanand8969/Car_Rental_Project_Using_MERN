import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './Components/User';
import Admin from './Components/Admin';
import CarPage from './Components/CarPage';
import SingleCarPage from './Components/SinglePage';
import OwnerRegisterPage from './Components/OwnerRegisterPage';
import Login from './Components/AdminLogin';
import Manage from './Components/Manage';
import PrivateComponent from './Components/PrivateComponent';
import UploadCar from './Components/Uploadcar';
import UpdateCar from './Components/UpdateCar';
import UserRegisterForm from './Components/UserRegisterForm';
import UserLogin from './Components/UserLogin';
import UserHomepage from './Components/UserHomepage';
import MyBookedCar from './Components/MyBookedCar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/carhome',
    element:<UserHomepage/>,
    children:[
      {
        path:'register',
        element:<UserRegisterForm/>
      },
      {
        path:'login',
        element:<UserLogin/>
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'mybookedcar',
        element: <MyBookedCar />,
      }
    ]
  },
 
  {
    path: '/ordercar',
    element: <CarPage />
  },
  {
    path: 'admin',
    element: <Admin />,
    children:
      [
        {
          path: 'register',
          element: <OwnerRegisterPage />
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          element:<PrivateComponent/>,
          children:[
            {
              path:'managecard',
              element:<Manage/>
            },{
              path:'upload-car',
              element:<UploadCar/>
            },
            {
              path:'singlecar/:id',
               element:<UpdateCar/>
             }
          ]
        },
       
      ]
  },
  {
    path: '/singlepage',
    element: <SingleCarPage />
  }


])

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
