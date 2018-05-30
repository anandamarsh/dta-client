import React, {Component} from 'react';
import axios from "axios";

import BarBox from './component/BarBox';
import './App.css';

const STATE_URL = '/state';

/**
 * This App displays a number of bars and buttons, as specified in the interview questions for DTA.
 * It fetches the payload from STATE_URL, which tells the App of the no. of bars, initial value, and the
 * buttons controlling the bars.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {fetching: false, error: false, data:null};
  }

  fetchState(){
    // we obtain the data from $endpoint and set it as state
    this.setState({...this.state, fetching: true, error: false, data:null});
    axios.get(STATE_URL).then((response) => {
      this.setState({...this.state, fetching: false, data: response.data});
    }).catch((error) => {
      this.setState({...this.state, fetching: false, error: true});
    });
  }

  componentDidMount() {
    this.fetchState();
  }

  render() {
    return (
      <div className="App">
        {this.state.fetching && <img src="/loader.svg" style={{width:'100px', height:'100px'}}/>}
        {this.state.error && <div className="error"><img src="/error.png"/><br/>sorry !! try refreshing</div>}
        {this.state.data && <BarBox seed={this.state.data}/>}
      </div>
    );
  }

}

export default App;
