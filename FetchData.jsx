import React, { useEffect, useState } from 'react'

export default function FetchData() {

  const [data, setData] = useState([]);
  const [filter,setFilter] = useState([]);

useEffect(()=>{
  setFilter(data)
},[data])

function fetchDataHandler(){
  fetch('https://swapi.dev/api/films').then((response)=>{
    return response.json();
  }).then((list)=>{
     setData(list.results);
  })
}

function filterData(title){
    let dataFilter = data.filter((list)=>{
      return list.title === title
    })
    setFilter(dataFilter)
}


  return (
    <div>
      {filter.map((list)=>{
        return <>
          <p>{list.title}</p>
          <p>{list.release_date}</p>
          <p>{list.characters.map((list1)=>{
            return <p>{list1}</p>
          })}</p>
          <img src={list.image} />
        </>
      })}
      <button onClick={fetchDataHandler}>click</button>
     {data.length === 0 ? <p>plz click button</p> : <p>{data.map((list)=>{
      return <button onClick={()=>filterData(list.title)}>{list.title}</button>
      })}</p>}
    </div>
  )
}
