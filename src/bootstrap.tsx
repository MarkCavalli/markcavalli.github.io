import('./styles/reset.css');
import React from 'react';
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from './router/index';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
