//useState = namend import 
import React, { useState } from 'react'
//invoke useState 
function App(){
    let [ counter, changeCounter ] = useState(1)
    //make it global
    window.changeCounter = changeCounter
    return (
      <div>
 <h1>{counter}</h1>
 <h4>{counter}</h4>
      </div>
       
    )
}

export default App;

