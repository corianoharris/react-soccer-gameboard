import React, {useState, useEffect} from "react";
import styled from 'styled-components'

const StyledTH = styled.th `
padding: 10px;
border: 1px solid black;
border-radius: 4px;
`
const StyledTable= styled.table `
display: flex;
justify-content: center;
padding: 4px 8px;
`

const Timer = () => {
const [second, setSecond] = useState('00');
const [minute, setMinute] = useState('00');
const [isActive, setIsActive] = useState(false);
const [counter, setCounter] = useState(0);


  useEffect(() => {
    let intervalId;

    if ( minute < 2 ) {
      setIsActive(true)
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 30);
      }, 1000)
    }

   if (minute >= 2) {
    setIsActive(false)
   }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  return (
    <div className="container">
      {isActive ?
        <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      : <p>Game is over.</p> }
   </div>
  )
}


function Table() {
  const [ teamGoalsOne, setTeamGoalsOne ] = useState(0)
  const [ teamGoalsTwo, setTeamGoalsTwo ] = useState(0)
  const [ teamYellowCardsOne, setTeamYellowCardsOne ] = useState(0)
  const [ teamYellowCardsTwo, setTeamYellowCardsTwo ] = useState(0)
  const [ teamRedCardsOne, setTeamRedCardsOne ] = useState(0)
  const [ teamRedCardsTwo, setTeamRedCardsTwo ] = useState(0)
  const [ teamOnePlayers, setTeamOnePlayers ] = useState(11)
  const [ teamTwoPlayers, setTeamTwoPlayers ] = useState(11)
  const [ action, setAction] = useState('VS')

const [second, setSecond] = useState('00');
const [minute, setMinute] = useState('00');
const [isActive, setIsActive] = useState(false);
const [counter, setCounter] = useState(0);   

  const soccerActions = ['VS','GOAL','YELLOW CARD','RED CARD'];
  let soccerAction  = soccerActions[Math.floor(4*Math.random())]
  console.log('action: ', soccerAction)

  // const teamOneGoals = Math.floor(Math.random() * 10);
  // const teamTwoGoals = Math.floor(Math.random() * 10);  

  // const team = teams[Math.floor(2*Math.random())]

  // console.log('team: ', team)

  const teams = ['PSG', 'JUVENTUS']

  let winner = 'TIED';

  if (!isActive) {
    console.log('teamOne: ',teamGoalsOne )
    console.log('teamTwo: ',teamGoalsTwo )
    if (teamGoalsOne > teamGoalsTwo) {
      winner = 'PSG'
     } else if (teamGoalsTwo > teamGoalsOne) {
      winner = 'JUVENTUS'
     } 
  }

useEffect(() => {

  if ( isActive && minute < 3) {
    setTimeout(function(){
      let team = teams[Math.floor(2*Math.random())]
      let soccerAction  = soccerActions[Math.floor(4*Math.random())]
  
      if ( team === teams[1]) {
        if ( soccerAction === soccerActions[0] ) {
          setTeamGoalsTwo(teamGoalsTwo + 1)
          setAction('GOAL')
        } else if ( soccerAction === soccerActions[1]) {
          setTeamYellowCardsTwo(teamYellowCardsTwo + 1)
          setAction('YELLOW CARD')
        } else if (soccerAction === soccerActions[3] ) {
          setTeamRedCardsTwo(teamRedCardsTwo + 1) 
          setTeamTwoPlayers(teamTwoPlayers - 1)
          setAction('RED CARD')
        }
      } else if ( team === teams[0]) {
        if ( soccerAction === soccerActions[0] ) {
          setTeamGoalsOne(teamGoalsOne + 1)
          setAction('GOAL')
        } else if ( soccerAction === soccerActions[2]) {
          setTeamYellowCardsOne(teamYellowCardsOne + 1)
          setAction('YELLOW CARD')
        } else if (soccerAction === soccerActions[3] ) {
          setTeamRedCardsOne(teamRedCardsOne + 1)
          setTeamOnePlayers(teamOnePlayers - 1)
          setAction('RED CARD')
        }
      }
      console.log('action: ', soccerAction)
   }, 2000);
  } 

  return () => clearTimeout();
   
}, [teams])





useEffect(() => {
  let intervalId;

  if ( minute < 3 ) {
    setIsActive(true)
    intervalId = setInterval(() => {
      const secondCounter = counter % 60;
      const minuteCounter = Math.floor(counter / 60);

      const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
      const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

      setSecond(computedSecond);
      setMinute(computedMinute);

      setCounter(counter => counter + 30);
    }, 1000)
  }

  if (minute >= 3) {
    setIsActive(false)
   }
  
  return () => clearInterval(intervalId);
}, [ isActive, counter, minute])

  return (
    <>
      {!isActive ? <p>{winner}</p> : null}
    <StyledTable id="myTStyledTable">
      <thead>
        <tr>
          <StyledTH id="teamOne">{teams[0]}</StyledTH>
          <StyledTH>{`P:${teamOnePlayers}`}</StyledTH>
          <StyledTH>{`Y:${teamYellowCardsOne}`}</StyledTH>
          <StyledTH>{`R:${teamRedCardsOne}`}</StyledTH>
          <StyledTH>{teamGoalsOne}</StyledTH>
          <StyledTH>{action}</StyledTH>
          <StyledTH>{teamGoalsTwo}</StyledTH>
          <StyledTH>{`R:${teamRedCardsTwo}`}</StyledTH>
          <StyledTH>{`Y:${teamYellowCardsTwo}`}</StyledTH>
          <StyledTH>{`P:${teamTwoPlayers}`}</StyledTH>
          <StyledTH id="teamTwo">{teams[1]}</StyledTH>
          <StyledTH id="timer">
          <div className="container">
      {isActive ?
        <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      : <p>Game is over.</p> }
   </div>
         </StyledTH>

       </tr>
      </thead>
     </StyledTable>
    </>
  );
}

export default Table;
