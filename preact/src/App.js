import { Component } from "preact";
import { h } from "preact";

class App extends Component {
  state = {
    countries: [],
    inputValue: "",
  };

  async componentDidMount() {
    try {
      await fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          const arr = [];
          for(let i=0;i<40;i++){
            arr.push(...data);
          }
          this.setState({ countries: arr});
        });
    } catch (err) {}
  }

  render() {
    return (
      <div>
        <input onInput={(e)=>  this.setState({inputValue: e.target.value})}  value={this.state.inputValue}/>
         <button onClick={() =>  {
            this.setState({countries: [...this.state.countries, {name: {common: this.state.inputValue}}]});
            this.setState({inputValue: ""});
         }}>
         Add 
        </button>
        <ul>
            {this.state.countries.map((country) => (<li>{country.name.common}</li>))}
        </ul>
      </div>
    );
  }
}

export default App;
