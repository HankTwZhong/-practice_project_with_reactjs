import React from 'react';
import './App.css';
import {Clock} from './clock'
import {Toggle} from './toggle'
import {LoginControl} from './logincontrol'
import {NameForm} from './nameform'
import {FlavorForm} from './flavorform'
import {Reservation} from './reservation'
import {Calculator} from './boilingverdict'
import {WelcomeDialog, SignUpDialog} from './dialog'
import {SplitPaneControl} from './splitpane'
import {FilterProductTable} from './filterproducttable'
import {FilterScoreTable} from './filterscoretable.js'
import {Game} from './tic-tac-game.js'
import dice_games from '../img/dice-games.jpg';


const PRODUCTS =[
  {category:'Sporting Goods', price: '$49.99', stocked: true, name:'Football'},
  {category:'Sporting Goods', price: '$9.99', stocked: true, name:'Baseball'},
  {category:'Sporting Goods', price: '$29.99', stocked: false, name:'Basketball'},
  {category:'Electronics', price: '$99.99', stocked: true, name:'iPod Touch'},
  {category:'Electronics', price: '$399.99', stocked: false, name:'iPhoe5'},
  {category:'Electronics', price: '$199.99', stocked: true, name:'Nexus 7'}
];


function Comments(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  )
}

function Avatar(props){
  return(
    <div className="Container">
      <img className="Avatar"
        src={props.user.avatarurl}
        alt={props.user.name}
        width="720"
        height="480"
      />
    </div>
  )
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function App() {
  let Data = {
    "author":{
      "avatarurl":dice_games,
      "name":"Photo by Sarah Pflug from Burst"
    },
    "text":"Hello"
  }

  const userinfo = (
    <div>
      <Comments name={Data.text} author={Data.author}/>
      <div tabindex="0"> Good to see you here.</div>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* {userinfo}
        <Clock />
        <Toggle />
        <LoginControl />
        <NameForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
        <WelcomeDialog />
        <SplitPaneControl />
        <SignUpDialog />
        <FilterProductTable products={PRODUCTS}/> */}
        <FilterScoreTable />
        <Game />
      </header>
    </div>
  );
}
export default App;
