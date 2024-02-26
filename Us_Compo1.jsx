
import React, { useState } from 'react'

export default function Us_Compo1() {
    const [array, setArray] = useState([213,632,523,1625,873])
    let ChangeMyArray =()=>{
        setArray([35,9843,874,8436])
    }
  return (
    <div>
        <h1>hello</h1>
      {/* <ul>
        {array.map((d, i) => <li key={i}>{d}</li> )}
        <button type="button" onClick={ChangeMyArray}>Click</button>t
      </ul> */}
    </div>
  )
}
