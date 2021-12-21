import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import  HomePage  from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';

import Header from './components/header/header.component.jsx';


// const ShopPage = () => {
//   console.log("Shop page... function good")
//   return(
//     <div>
//       <h1>SHOP PAGES</h1>
//     </div>
//   )
//   };

// const HomePage1 =(props) => {  
//   console.log(props)
// return (
//     <div>
//       <button onClick={() => props.history.push('/topics')} >Topics</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   )
// }

// const TopicList =(props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1> TOPIC LIST PAGE</h1>
//       <Link to= {`${props.match.url}/13`}> To Topic 13</Link>
//       <Link to= {`${props.match.url}/17`}> To Topic 17</Link>
//       <Link to= {`${props.match.url}/21`}> To Topic 21</Link>
//     </div>
//   )
//   }

// const TopicDetail = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: { props.match.params.topicId} </h1>
//     </div>
//   );
//  };


function App() {
  //console.log("props: ", props)
  return (
    <div >
      <Header />
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/shop' component= { ShopPage } />
        {/* <Route  exact path='/topics' component={TopicList} />
        <Route  path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;







const App1 = ()=> {

  return (
    <Switch>
      <div>
        <Route excat path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />

      </div>
    </Switch>
  )
}



