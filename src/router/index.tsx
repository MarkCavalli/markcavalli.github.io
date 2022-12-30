import React from 'react'
import { createHashRouter } from "react-router-dom";
import Home from '../views/home/HomeView';
import Experience from '../views/experience/ExperienceView';
import Contacts from '../views/contacts/ContactsView';
import Layout from '../components/layout/Layout';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/experience",
    element: <Layout><Experience /></Layout>,
    children: [
      {
        path: ':type',
        element: <Layout><Experience /></Layout>
      }
    ]
  },
  {
    path: "/contacts",
    element: <Layout><Contacts /></Layout>,
  }
]);

export default router;