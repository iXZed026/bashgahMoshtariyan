import React, { useState } from 'react'
import './CompetitionsAreBegin.css';
import { Route, Routes } from 'react-router-dom';
import CompetitionsAreBeginBox from './CompetitionsAreBeginBox';
import Datas from '../../Data';

export default function CompetitionsAreBegin() {

  let {firstAnswer,secoundAnswer,thirdAnswer,fourdAnswer} = Datas.tournamentData;
  
  let [firstAns, setFirstAns] = useState(firstAnswer);

  let [secoundAns, setSecoundAns] = useState(secoundAnswer);

  let [thirdAns, setThirdAns] = useState(thirdAnswer);

  let [fourdAns, setFourdAns] = useState(fourdAnswer);

  function correctAnswerOne(event) {
    let { checked } = event.target;

    if (checked) {
      if (event.target.parentElement.parentElement.children[1].innerHTML.indexOf('دفتر') > -1) {
        setFirstAns({
          ...firstAns,
          correct: true
        })
      } else {
        setFirstAns({
          ...firstAns,
          correct: false
        })
      }
    }
  }

  function correctAnswerTwo(event) {
    let { checked } = event.target;

    if (checked) {
      if (event.target.parentElement.parentElement.children[1].innerHTML.indexOf('خر') > -1) {
        setSecoundAns({
          ...secoundAns,
          correct: true
        })
      } else {
        setSecoundAns({
          ...secoundAns,
          correct: false
        })
      }
    }
  }

  function correctAnswerThree(event) {
    let { checked } = event.target;

    if (checked) {
      if (event.target.parentElement.parentElement.children[1].innerHTML.indexOf('سوپرا') > -1) {
        setThirdAns({
          ...thirdAns,
          correct: true
        })
      } else {
        setThirdAns({
          ...thirdAns,
          correct: false
        })
      }
    }
  }


  function correctAnswerFour(event) {
    let { checked } = event.target;

    if (checked) {
      if (event.target.parentElement.parentElement.children[1].innerHTML.indexOf('لب تاپ') > -1) {
        setFourdAns({
          ...fourdAns,
          correct: true
        })
      } else {
        setFourdAns({
          ...fourdAns,
          correct: false
        })
      }
    }
  }
  
  


  return (
    <div className="CompetitionsAreBegin">
      <div className="CompetitionsAreBegin-container">
        <div className="CompetitionsAreBegin-flex">
          <CompetitionsAreBeginBox  tournamentId={1} firstAns={firstAns} setFirstAns={setFirstAns}>
            {
              firstAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" onClick={correctAnswerOne} disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
          </CompetitionsAreBeginBox>
          
          <CompetitionsAreBeginBox  tournamentId={2} secoundAns={secoundAns} setSecoundAns={setSecoundAns}>
          {
              secoundAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" onClick={correctAnswerTwo} disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
          </CompetitionsAreBeginBox>

           <CompetitionsAreBeginBox tournamentId={3} thirdAns={thirdAns} setThirdAns={setThirdAns}>
           {
              thirdAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" onClick={correctAnswerThree} disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
        </CompetitionsAreBeginBox>

        <CompetitionsAreBeginBox tournamentId={4} fourdAns={fourdAns} setFourdAns={setFourdAns}>
        {
              fourdAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" onClick={correctAnswerFour} disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
        </CompetitionsAreBeginBox> 


        </div>
      </div>
    </div>

  )
}
