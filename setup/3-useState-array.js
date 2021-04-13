import React from 'react';
import { data } from '../../../data';
import {useState} from 'react'

const UseStateArray = () => {
  const [goal,setGoal]=useState(data)
  const removeItem=(id)=>{
    let newGoal=goal.filter((goals)=>goals.id !== id)
    setGoal(newGoal)
  }

  return<>
    {
      goal.map((goals)=>{
        const{id,name}=goals
        return<div key={id} className="item">
          <h4>{name}</h4>
          <button className="btn" onClick={()=>removeItem(id)}>Clear</button>
        </div>
      })
    }
      <button className="btn" onClick={()=>setGoal([])}>Clear All</button>
  </>;
};

export default UseStateArray;
