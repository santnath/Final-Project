import React from 'react';
import NavBar from './components/nav-bar';
import HomePicture from './components/home-carosel';
import DisplayFlies from './components/flies';
import Update from './practiceCrud/update';
import './App.css';
import styles from './styles.module.css';
import CommentSection from './components/commentSection';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
export default class App extends React.Component {
  render() {
    return(
      <>
        <NavBar />
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/comments' element={<CommentSection/>} />
          <Route path='flies' element={<DisplayFlies/>} />
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </>
    );
  }
}
