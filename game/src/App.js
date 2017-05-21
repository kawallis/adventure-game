import React, { Component } from 'react';
import { Button, Card, Row, Col, Icon, Collection, CollectionItem} from 'react-materialize';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerName: null,
      sceneSelected: 'MainContainer',
      currentScene: null
    };
  }
  
  componentDidMount() {
    this.setState({ playerName: prompt('Enter your name to begin')});
  }

  changeBackground(scene) {
    this.setState({
      sceneSelected: `MainContainer ${scene}`,
      currentScene: scene
    });
  }

  render() {
    return (
      <div className={this.state.sceneSelected}>
        <div className="CharacterStats">
          <h2>Character Info</h2>
          <ul>  
            <li><span>Name:</span> {this.state.playerName}</li>
            <li><span>Current Weapon:</span> Stick</li>
            <li><span>Items:</span> Sword, Napkin, Blanket</li>
            <li><span>Health:</span> 400 hp</li>
            <li><span>Attack Damage:</span> 5 ap</li>
          </ul>
        </div>
        <div className="App">
          <div id="scenes">
            <p>Choose your adventure</p>
            <Button className="scenes" waves='light' onClick={() => this.changeBackground('sky')}>Sky</Button>
            <Button className="scenes" waves='light' onClick={() => this.changeBackground('sea')}>Sea</Button>
            <Button className="scenes" waves='light' onClick={() => this.changeBackground('forest')}>Forest</Button>  
          </div>
          <div>
            {this.state.sceneSelected !== 'MainContainer' ? <h1>You look around and see an expansive {this.state.currentScene}</h1> : null}
          </div>
          <div className="ImageContainer">
          </div>
          <div id="button-container">
            <Button className="Bobo" waves='light'>button</Button>
            <Button className="Bobo" waves='light'>button</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
