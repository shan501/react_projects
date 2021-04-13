import React, { useState } from 'react';
import data from './data';
function App() {
  return(
    <main>
      <section className="container">
        <List/>
      </section>
    </main>
  )
}

const List = () => {
  const [people,setPeople]=useState(data)
  const deleteThis=(id)=>{
    let newT=people.filter((person)=>person.id !==id)
    setPeople(newT)
  }
  return(
    <>
    {people.map((person)=>{
      const {image,name,id,age}=person
      return(
        <article key={id} className="person">
          <img src={image} alt={name}/>
          <button onClick={()=>deleteThis(id)}>clear</button>
          <h3>{age} years old</h3>
        </article>
      )
    })}
    <button onClick={()=>setPeople([])}>Clear</button>
    </>
  )
};

export default App
