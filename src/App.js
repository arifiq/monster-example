import  React,{Component}from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/serach-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters :[],
      searchField: ''
    }
  }
  handleChange = e=>this.setState({searchField:e.target.value});

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <SearchBox
        placeholder = "search mosnters"
        handleChange = {this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
