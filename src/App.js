import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  const removeTour = (id)=>{
    setTours(tours.filter((tour)=>tour.id!==id))
  }
  const fetchData =async ()=>{
    
    try{
      const data = await fetch(url);
      const tours = await data.json()
      setTours(tours)
    setLoading(false);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchData()
  },[]);
   if (loading) {
     return (
       <>
         <Loading />
       </>
     );
   }
  if(tours.length===0){
    return (
      <main>
        <div className='title'>
          <h4>No Tours Available at the moment</h4>
          <button
            className='btn'
            onClick={fetchData}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
 
  return <>
    <Tours tours={tours} func= {removeTour}/>
  </>
}

export default App
