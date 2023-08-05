// import logo from './logo.svg';
// import React,{Component} from 'react'
// import React, {useState} from 'react'
import React from 'react'
import Home from './Home'
// import Login from '/Login'

function App(){
  // const data=true;
  return (
    <div className="App">
     
      <Home/>
      
      </div>

  );
}

// function App(){
//   const[status,setStatus]=React.useState(false)
//   return (
//     <div className="App">
//       {
//       status? <h1>It's me Anjali Soni I LOVE U</h1>:null
//       }
//       <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button>
//     </div>
    
//   )
// }
// function App(){
//   const [data,setData]=useState(null)
//   function getData(val){
//     console.warn(val.target.val)
//     setData(val.target.value)

//   }
//   return (
//     <div className="App">
//       <h1>Get input box</h1>
//       <h1>{data}</h1>
//       <input type="text" onChange={getData}/>
//     </div>
//   )
// }

// import Student from './Student'
// function App(){
//   return (
//     <div className="App">
//       <h1>Props in React : </h1>
//       <Student name={"Anjali"} email="anjalisoni102003@gmail.com" other={{address:'Delhi',mobile:"8381"}}/>
//       <Student name={"Akriti"} email="anjalisoni102003@gmail.com" other={{address:'Haryana',mobile:"8381"}}/>
//       <Student name={"Anshul"} email="anjalisoni102003@gmail.com" other={{address:'Noida',mobile:"8381"}}/>
//       <Student name={"Ajay"} email="anjalisoni102003@gmail.com" other={{address:'Kanpur',mobile:"8381"}}/>
      

//     </div>
//   );
// }
//import User from './User'
//State in the Class Component
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       data:"Anjali"
//     }
//   }

// apple(){
//   this.setState({data:"Mitali"})
// }


// function App() {
//   const [data,setData]=useState(0)
//   function updateData(){
//     setData(data+1)

//   }
  // let data="Anjali Soni"
  // function Apllet(){
  //   data="My Father"
  //   alert(data)
  // }
  //render is used in class component
// render(){
//   return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>Press me!</button>
    
      
//     </div>
//   );
// }
// }

export default App
