import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import "react-app-polyfill/stable";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    price_sum: 0,
  };
  constructor() {
    super();
    //console.log("App - Constructor");
  }
  componentDidMount() {
    //console.log("App - Mounted");
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // ... clones the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters }); // set old counters array to this counters constant
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleCalculation = () => {
    if (this.state.price_sum > 0) {
      alert(this.state.price_sum);
    }
  };
  addCounter = () => {
    const length = this.state.counters.length;
    this.state.counters.push({
      id: length + 1,
      value: 0,
    });
    const counters = this.state.counters;
    // JSON.stringify(counters);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value >= 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.addCounter}
            onCalculate={this.handleCalculation}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
