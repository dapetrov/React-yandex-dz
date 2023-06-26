import React, {type FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import AboutUsPage from './components/AboutUsPage';
import CartPage from './components/CartPage';
import FilmPage from './components/FilmPage';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import QuestionAnswers from './components/QuestionAnswers';



const App: FC = () => {
    return (
        <div className="App">
            <div id="modal-root"/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="about" element={<AboutUsPage/>}/>
                    <Route path="film/:id" element={<FilmPage/>}/> 
                    <Route path="questionanswers" element={<QuestionAnswers/>}/> 
                    <Route path="cart" element={<CartPage/>}/> 
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;
