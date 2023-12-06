import React,{useState} from 'react';
import "./Participeted.css";
import CompetitionsAreBeginBox from './CompetitionsAreBeginBox'
import Datas from '../../Data';

export default function Participeted(props) {
  let {firstAnswer,secoundAnswer,thirdAnswer,fourdAnswer} = Datas.tournamentData

  let [firstAns, setFirstAns] = useState(firstAnswer);

  let [secoundAns, setSecoundAns] = useState(secoundAnswer);

  let [thirdAns, setThirdAns] = useState(thirdAnswer);

  let [fourdAns, setFourdAns] = useState(fourdAnswer);


  let getTournament1 = localStorage.getItem('ans1');
  let getTournament2 = localStorage.getItem('ans2');
  let getTournament3 = localStorage.getItem('ans3');
  let getTournament4 = localStorage.getItem('ans4');

  

  return (
    <div className="Participeted">
        <div className="Participeted-container">
            <div className="Participeted-flex">
                {
                  getTournament1=="true" && (
                    <CompetitionsAreBeginBox  tournamentId={1} firstAns={firstAns} setFirstAns={setFirstAns}>
            {
              firstAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
          </CompetitionsAreBeginBox>
                  )
                }
                {
                  getTournament2=="true" && (
                    <CompetitionsAreBeginBox  tournamentId={2} secoundAns={secoundAns} setSecoundAns={setSecoundAns}>
          {
              secoundAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio"  disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
          </CompetitionsAreBeginBox>
                  )
                }
                {
                  getTournament3=="true" && (
                    <CompetitionsAreBeginBox tournamentId={3} thirdAns={thirdAns} setThirdAns={setThirdAns}>
           {
              thirdAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio"  disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
        </CompetitionsAreBeginBox>
                  )
                }
                {
                  getTournament4=="true" && (
                    <CompetitionsAreBeginBox tournamentId={4} fourdAns={fourdAns} setFourdAns={setFourdAns}>
        {
              fourdAns.answers.map((answer, index) => (
                <div key={index}>
                  <span>
                    <input type="radio" disabled name="answer" />
                  </span>
                  <p>1.{answer}</p>
                </div>
              ))
            }
        </CompetitionsAreBeginBox>
                  )
                }
            </div>
        </div>
    </div>
  )
}
