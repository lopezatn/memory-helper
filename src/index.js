import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import Login from './components/login/Login';
import Reminders from './components/reminders/Reminders';
import NewReminder from './components/newReminder/NewReminder';
import { Provider } from 'react-redux';
import store from "./redux/store";
import ProtectedRoute from './routes/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reminders",
    element: <ProtectedRoute render={<Reminders />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-reminder",
    element: <ProtectedRoute render={<NewReminder />} />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
