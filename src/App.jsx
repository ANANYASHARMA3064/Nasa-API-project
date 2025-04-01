
import Main from "./component/Main.jsx"
import Footer from "./component/Footer.jsx"
import SideBar from './component/SideBar'
import { useEffect, useState } from "react"
function App() {
  const[data,setData]=useState(null)
  const[loading,setLoading]=useState(false)
  const[showModal,setShowModal]=useState(false)
  function handleDisplayModal(){
     setShowModal(!showModal )
  }
  
  useEffect(()=> {
    const NASA_KEY= import.meta.env.VITE_NASA_APP_KEY
    async function fetchAPIData(){
      const url='https://api.nasa.gov/planetary/apod?api_key=8X6EXoB328EL6fmIkUz2bPPfTfKULk0UvikkkfW0'
      /*The code sends a request to the NASA API using fetch(url), but the request takes some time (like waiting for a response from the server).
await pauses the function until the request is complete and the data is received (or an error happens).
Once the data is fetched, it moves on to the next line of code (e.g., using the response).
Without await, JavaScript would move on to the next line immediately, and the response might not be available yet, which can cause issues when you try to use the data.
hen you use async in front of a function, you're telling JavaScript, "This function will deal with things that take time (like fetching data). So, it will return something special called a Promise."
A Promise is like a "promise" to do something later, and it can either succeed (resolve) or fail (reject).
Now, await can only work with Promises. It tells JavaScript, "Pause here and wait for this Promise to finish before continuing with the code." So, when you make a function async, you're guaranteeing that it will return a Promise, and that’s why you can then use await inside it to wait for that Promise to resolve. */
console.log("url:",url)
      const today=(new Date()).toDateString()
      //Creates a string of today’s date
      const localKey=`NASA-${today}`
      //✅ Creates a unique key for localStorage using today’s date.

      if (localStorage.getItem(localKey)){
        //✅ Retrieves the stored data from localStorage.

        const apidata=JSON.parse(localStorage.getItem(localKey))
        console.log("data:",apidata)
        setData(apidata)
        console.log('fetched from cache today')
        
        return
      }
      
      localStorage.clear()
      try{
        const res=await fetch (url);
        const apidata=await res.json()
        /*fetch await is asking java to wait for the data from the api and res await is asking to wait for that data to be convert it to something usable  */
        localStorage.setItem(localKey,JSON.stringify(apidata))

        setData(apidata)
        console.log('fetched from API today')
        console.log('DATA\n',apidata)
      }
      catch(err){
        console.log(err.message)
  
      }
    }
    fetchAPIData()
   
  }
  ,[])
  return (
    <>
    
   
    {data ? (<Main data={data}/>):(
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )} 

    {showModal && (
      <SideBar data={data} handleDisplayModal={handleDisplayModal}/>)} 
     
    {data &&  (<Footer data={data } handleDisplayModal={handleDisplayModal}/>)}
    </>
  )
}

export default App
