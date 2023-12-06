import React, {useState ,Children } from 'react';
import './CompetitionsAreBeginBox.css';
import { PiMedalMilitary } from "react-icons/pi";

export default function CompetitionsAreBeginBox(props) {

    let {firstAns,setFirstAns,secoundAns,setSecoundAns,thirdAns,setThirdAns,fourdAns,setFourdAns,tournamentId} = props;

    let [tournamentArray,setTournamentArray] = useState({
        ans1:true,
        ans2:true,
        ans3:true,
        ans4:true,
    }) 

    
    
    function compationHandler(){
        if(tournamentId===1){
            setFirstAns({...firstAns,compation: true})
            setTournamentArray({...tournamentArray,ans1:true})            
            localStorage.setItem('ans1' , tournamentArray.ans1);

            
            
        }
        if(tournamentId===2){
            setSecoundAns({...secoundAns,compation: true})
            localStorage.setItem('ans2' , tournamentArray.ans2);
            setTournamentArray({...tournamentArray,ans2:true})            
            
            
        }
        if(tournamentId===3){
            setThirdAns({...thirdAns,compation: true})
            localStorage.setItem('ans3' , tournamentArray.ans3);
            setTournamentArray({...tournamentArray,ans3:true})            

        }
        if(tournamentId===4){
            setFourdAns({...fourdAns,compation: true})
            localStorage.setItem('ans4' , JSON.stringify(fourdAns.compation));
                        localStorage.setItem('ans4' , tournamentArray.ans4);
                        setTournamentArray({...tournamentArray,ans4:true})            


        }


        
    }


    
  return (
    <div className="CompetitionsAreBeginBox">
        <div className="CompetitionsAreBeginBox-container">
                <div className="CompetitionsAreBeginBox-title">
                <PiMedalMilitary style={{width:'25px' , height:"25px", color:'orangered'}}/>
                    <h4>عنوان مسابقه</h4>
                </div>
            <div className="CompetitionsAreBeginBox-flex ">
                <div className="CompetitionsAreBeginBox-flex-right">
                    <p style={{marginBottom:'10px'}}>امتیاز ورودی:رایگان</p>
                    <p>تعداد شرکت کنندگان : 10نفر</p><br />
                    <p style={{fontSize:'16px'}}>سوال: {props.answerTitle} </p><br></br>
                    {props.children}

                </div>
                <div className="CompetitionsAreBeginBox-flex-left">
                    <p>پاداش: 140 امتیاز</p><br />
                    <p>مهلت پاسخ 1402/09/06</p>
                </div>
            </div><br />
                <div style={{direction:'ltr', width:'100%',margin:'auto'}}>
                <button id='comp-btn' type="submit" onClick={compationHandler}>شرکت در مسابقه</button>
                </div>
        </div>
    </div>
  )
}
