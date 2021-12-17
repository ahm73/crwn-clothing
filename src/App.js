import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import  HomePage  from './components/pages/homepage/homepage.component';

const HatsPage = () => {
  console.log("Hats page... function good")
  return(
    <div>
      <h1>HATS PAGES</h1>
    </div>
  )
  };

const HomePage1 =(props) => {  
  console.log(props)
return (
    <div>
      <button onClick={() => props.history.push('/topics')} >Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  )
}

const TopicList =(props) => {
  console.log(props)
  return (
    <div>
      <h1> TOPIC LIST PAGE</h1>
      <Link to= {`${props.match.url}/13`}> To Topic 13</Link>
      <Link to= {`${props.match.url}/17`}> To Topic 17</Link>
      <Link to= {`${props.match.url}/21`}> To Topic 21</Link>
    </div>
  )
  }

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: { props.match.params.topicId} </h1>
    </div>
  );
 };


function App() {
  //console.log("props: ", props)
  return (
    <div >
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/hats' component= { HatsPage } />
        {/* <Route  exact path='/topics' component={TopicList} />
        <Route  path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
