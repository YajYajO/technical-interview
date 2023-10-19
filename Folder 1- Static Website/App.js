import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div>
    <h1>Welcome back {getName()}</h1>
    <form>
      {myForm()}
    </form>
    </div>
  )
}
const getName = () => {
  const name = "Dan";
  return(name)
}

const myForm = () =>  {
  return(
    <form>
      <p><label>{getPercent()}% of climbers compared to same time & day last week</label></p>
      <p><label>{numNewClimbersWeek()} new climbers this week</label></p>
      <p><label>{activity()} hours of activity tracked this week</label></p>
      <p><label>positive sentiment on clibs has {isPositive(sentimentDiff) ? 'increased' : 'decreased'} by {sentimentDiff} since last week</label></p>
      <p><label>{totalClimbers()} climbers came in today</label></p>
      <p><label>{percentCLimbersIncrease()}% climbers since last week</label></p>
      <p><label>{percentOfShares()}% climbers shared their session on social media</label></p>
      <p><label>Let students know the wall has been reset {clickable()}</label></p>
    </form>
  )
  
}

function getPercent(){
  return 6
}

function numNewClimbersWeek(){
  return 22
}
function isPositive(number){
  if(number > 0){
    return true;
  }
  return false;
}

function sentimentDiff(){
  const sentiment = 10

  return sentiment;
}

function totalClimbers(){
  return 11;
}

function percentCLimbersIncrease(){
  return 3
}
function percentOfShares(){
  return 30
}

function clickable(){
  return (null)
}

function activity(){
  return 42
}







export default App;
