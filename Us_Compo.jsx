import React, { useState } from 'react'


export default function Us_Compo() {
    const [portal, setportal] = useState("Click to Enter to the Portal");
    const [num, setNum] = useState(10);
    const [num1, setNum1] = useState(41);
    // const [operate, setOperate] = useState([34, 55, 297, 35]);
    const [stud, setStud] = useState({
        name: "Paami",
        surname: "Awan",
        age: 24,
        qualification: "graduate",
        isEnrolled: false

    });
//     let UpdateArray = () => {
//         setOperate(prevOperate => {
//             return[
//                 ...prevOperate,
// math.floor * 50
//             ]
//         })
// }

    let myArray = useState("Paaman Khalil");
    let EnterPortal = () => {
        setportal("You have Entered to the Portal")
    }
    let UpdateCount = () => {
        setNum(prevNum => prevNum * 10);
    }
    let UpdateMyCount = () => {
        setNum1(prevNum1 => prevNum1 * 12 + 988 / 30 - 25)
    }

    let UpdateObj = () => {
        setStud(prevStud => {
            return {
                ...prevStud,
                name: "Paman",
                isEnrolled: true
            }
        }
        )
    }

    return (
        <div>
            <h2> {portal} </h2>
            <button type="button" onClick={EnterPortal}>Enter Portal</button>

            <h2> {num} </h2>
            <button type="button" onClick={UpdateCount}>Click-it</button>

            <h2> {num1} </h2>
            <button type="button" onClick={UpdateMyCount}>Click-Here</button>

            <h2> {stud.name} </h2>
            <h2> {stud.age} </h2>
            <h2> {stud.surname} </h2>
            <h2> {stud.isEnrolled.toString()} </h2>
            <button type="button" onClick={UpdateObj}>Click-Here</button>

            <h2>{myArray[0]}</h2>
            <button type="button" onClick={() => myArray[1]("Paaman Shoaib")}>Click-Me</button>
    {/* <ul>
        {operate.map((d, i) => <li key={i}>{d}</li> )}
         {operate.map(d => {d})} 
    </ul>
<button type="button" onClick={UpdateArray}>Click-A</button> */}
        </div>
    )
}
