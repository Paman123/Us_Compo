import { Alert } from 'bootstrap';
import React, { Component } from 'react'

export default class Assignment_1 extends Component {
    constructor() {
        super();
        this.state = {
            biography: "Electronics Engineer studied at the university of sindh",
            residence: "I used to live in hyderabad but now have been living in karachi for almost an year",
            batchYear: 2016,
            final: 2019,
        }
    };
    changeDiscription() {

        this.setState({
            biography: "Software engeneer studied at Mehran University",
            residence: "Living in karachi has lots of advantages but tons to disadvantages, advantages in terms of opportunities and  disadvantages in terms of crime",
            batchYear: this.state.batchYear + 4,
            final: this.state.final + 4
        });
    }

render() {


const alertEvent = (name) => {
    alert("Hello" + name);
};

const helloHey =(name2) => {
alert("Hey Hi" + name2);

};
    return (
        <div>
            <h2>I studied {this.state.biography}. {this.state.residence}. Simple Discription </h2>
            <p>batch:{this.state.batchYear} & final year: {this.state.final}</p>
            <button type="button" onClick={() => { (this.changeDiscription()) }}>Click</button>
            <button type="button" onClick={ () => {(alertEvent("Paaman"))}}>Alart</button>
            <input type="button" value="Tap" onClick={() => helloHey("Paami")} />


        </div>
    );
}
}
