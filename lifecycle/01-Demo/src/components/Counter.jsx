//counter.jsx 
import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        console.log(props);
        
        super(props);
        this.state = {
            num: "",
            counters: [],
        };
        
        console.log(this.state);
    }

    insertNumber = (e) => {
        this.setState({ num: e.target.value });
        console.log(this.state.num);
        
    };

    Submit = () => {
        const number = this.state.num;
        console.log(number);
        const counters = Array.from({ length: number }, () => 0);
        console.log(counters);
        this.setState({ counters });
    };

    Increment = (i) => {
        const updatedCounters = [...this.state.counters];
        updatedCounters[i]++;
        this.setState({ counters: updatedCounters });
    };
        
    Decrement = (i) => {
        const updatedCounters = [...this.state.counters];
        updatedCounters[i]--;
        this.setState({ counters: updatedCounters });
    };

    render() {
        return (
            <div className="container">
                <label>Please Enter a Number: </label>
                <input type="number" value={this.state.num} onChange={this.insertNumber}/>
                <button type="button" onClick={this.Submit}>Submit</button>
                    {this.state.counters.map((count, index) => (
                        <div key={index}>
                            <button onClick={() => this.Decrement(index)}>-</button>
                            {count}
                            <button onClick={() => this.Increment(index)}>+</button>
                        </div>
                    ))}
            </div>
        );
    }
}
