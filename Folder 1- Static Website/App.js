import logo from './logo.svg';
import './App.css';
import Assets from './Assets';

function App() {


  return (
    <div>
    <h1>Welcome back {getName()}</h1>
    <h1>{myHeader()}</h1>
    <form>
      {myForm()}
    </form>
    {overview()}
    {suggestions()}
    {monthOverview()}
    </div>
  )
}
const getName = () => {
  const name = "Dan";
  return(name)
}

const myForm = () =>  {
  
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

  return(
    <form>
      <p><label id="routineClimbers">{getPercent()}% of climbers compared to same time & day last week</label></p>
      <p><label id="newClimbers">{numNewClimbersWeek()} new climbers this week</label></p>
      <p><label id="activity">{activity()} hours of activity tracked this week</label></p>
      <p><label id="sentiment">positive sentiment on climbs has {isPositive(sentimentDiff) ? 'increased' : 'decreased'} by {sentimentDiff} since last week</label></p>
      <p><label id="climbersPresent">{totalClimbers()} climbers came in today</label></p>
      <p><label id="climbersDiff">{percentCLimbersIncrease()}% climbers since last week</label></p>
      <p><label id="shares">{percentOfShares()}% climbers shared their session on social media</label></p>
      <p><label id="wallRest">Let students know the wall has been reset {clickable()}</label></p>
    </form>
  )
  
}


const myHeader = () => {
  function wallResetTime(){
    let date = "09/06 9pm"
    return date;
  }
  function tagsToday(){
    return 56;
  }

  return (
    <form>
    <label for="wall">Wall</label><br/>
    <select id="wall" name="wall">
        <option value="all">All</option>
        <option value="V2Yellow">V2 Yellow</option>
    </select><br/>
    <label for="period">Period</label><br />
    <select id="period" name="period">
        <option value="thisWeek">This week</option>
        <option value="thisMonth">This month</option>
    </select>
    <label id = "wallResetTime">
      Next wall reset {wallResetTime()}
    </label><br/>
    <label id = "tagsToday">Tags Today {tagsToday()}</label>
    <Assets/>
</form>
  )
}

const overview = () => {
  return(
    <div>
      <h1>Week Overview</h1>
      <label>+ new climbers</label><br/>
      <label>+ traffic</label><br/>
      <label>- difficult of climbs completed</label><br/>
      <label>+ content sharing</label><br/>
    </div>
  )
}
const suggestions = () => {
  return(
    <div>
      <h1>Suggestions</h1>
      <label>Set higher difficulty</label><br/>
      <label>Repost climber content</label><br/>
    </div>
  )
}
const monthOverview = () => {
  return(
    <div>
      <h1>Month Overview</h1>
      <label>+new climbers</label><br/>
      <label>-traffic</label><br/>
      <label>= difficult of climbs completed</label><br/>
      <label>+content sharing</label><br/>
    </div>
  )
}
export default App;

