import React, { Component } from 'react'
import Cardlist from './Cardlist'
import Searchbox from './Searchbox'
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Pokedata: [],
      Searchvalue: ''
    }
  }

  componentDidMount() {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
    .then(response=> response.json())
    .then(pokedata=> this.setState({Pokedata:pokedata.results}))

    document.getElementById("searchbox").focus()
    
  }

  onSearch = () => {
    this.setState({ Searchvalue: document.getElementById("searchbox").value })

  }

  render() {
    const filteredlist = this.state.Pokedata.filter(pokedatas => { return pokedatas.name.toLowerCase().includes(this.state.Searchvalue.toLowerCase()); })
    return (
      <div>
        <Searchbox Search={this.onSearch} />
        <Cardlist Pokedata={filteredlist} />
      </div>
    )
  }
}
