import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Task from './1-praktika/Task';

import Box from './2-praktika/Box';
import Header from './2-praktika/Header';
import PostContent from './2-praktika/PostContent';
import PostImage from './2-praktika/PostImage';
import PostList from './2-praktika/PostList';

import Second from './2-praktika_Like&Hate/Second';

import ReadMore from './3-praktika/ReadMore';

import LearningList from './4-praktika/LearningList';

import List from './5-praktika/ToDoList';
import PageDate from './6-praktika/PageDate';

import Data from './7-praktika/Data';
import Profile from './7-praktika/Profile';

import Error from './ErrorPage/ErrorPage';


function App() {
  return (
   
<Router>
 <nav>
 <h1 className="text-center">React lessons</h1>

<div className="text-center p-4">

<Link to='/1-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-1
  </button>
  </Link>

  <Link to='/2-praktika/header'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-2
  </button>
  </Link>

  <Link to='/Like&Hate'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-2 Like&Hate
  </button>
  </Link>

  <Link to='3-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-3
  </button>
  </Link>

  <Link to='/4-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-4
  </button>
  </Link>
  
  <Link to='/5-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-5
  </button>
  </Link>
  
  <Link to='/6-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-6
  </button>
  </Link>
  
  <Link to='/7-praktika'>
  <button type="button" className="btn btn-outline-dark mx-3">
  Praktika-7
  </button>
  </Link>
</div>

 </nav>
 <Routes>
 <Route path="/1-praktika" element={ <Task />} />

 <Route path="/2-praktika/Box" element={ <Box />} />
 <Route path="/2-praktika/Header" element={ <Header />} />
 <Route path="/2-praktika/PostContent" element={ <PostContent />} />
 <Route path="/2-praktika/PostImage" element={ <PostImage />} />
 <Route path="/2-praktika/PostList" element={ <PostList />} />

 <Route path="/Like&Hate" element={ <Second />} />

 <Route path="/3-praktika" element={ <ReadMore />} />

 <Route path="/4-praktika" element={ <LearningList />} />

 <Route path="/5-praktika" element={ <List />} />
 <Route path="/6-praktika" element={ <PageDate />} />
 <Route path="/7-praktika" element={ <Data />} />
 <Route path="/profile/:username" element={<Profile />} />
 <Route path="*" element={ <Error />} />
 </Routes>

<div className="bg-dark text-white fs-3 text-center fst-italic font-monospace p-5">JustinaBag</div>
</Router>

  );
}

export default App;
