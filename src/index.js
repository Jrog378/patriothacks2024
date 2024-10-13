import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Results from "./pages/results";
import Procedure from "./pages/procedure";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/procedure" element={<Procedure/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="/" element={<Layout/>}/>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
