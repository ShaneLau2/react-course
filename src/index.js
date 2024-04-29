import React from 'react';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App';
import {FavouriteContextProvider} from './store/favourite-context';

const root=createRoot(document.getElementById('root'))
root.render( // Use createRoot instead of ReactDOM.createRoot
   <FavouriteContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </FavouriteContextProvider>
);

