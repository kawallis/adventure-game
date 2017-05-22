import React, { Component } from 'react';
import { Button, Card, Row, Col, Icon, Collection, CollectionItem} from 'react-materialize';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerName: null,
      sceneSelected: 'MainContainer',
      currentScene: null,
      vehicle: null,
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      currentMessage: 'Choose your adventure above',
      scenarios: null
    };

    this.changeScene = this.changeScene.bind(this);
    this.changeScenario = this.changeScenario.bind(this);
  }
  
  componentDidMount() {
    this.setState({ playerName: prompt('Enter your name to begin')});
  }

  changeScene(e, scene) {
    scene = e.target.textContent.toLowerCase();

    this.setState({
      sceneSelected: `MainContainer ${scene}`,
      currentScene: scene,
      currentMessage: `You look around and see an expansive ${scene}`,
      leftButton: 'Continue',
      rightButton: 'Catch your breath'
    });

    if (scene === 'sky') {
      this.setState({ vehicle: 'aircraft'});
    } else if (scene === 'sea') {
      this.setState({ vehicle: 'boat'});
    } else {
      this.setState({ vehicle: 'elephant'});
    }
  }

  changeScenario(e) {
    const scene = this.state.currentScene;

    let possibleScenarios = [`LOOKOUT! You have stumbled upon a ${scene} monster!`, `Your ${this.state.vehicle} is attacked by a ${scene} monster!`, `Your ${this.state.vehicle} has been ransacked by a swarm of ${scene} creatures!`]

    this.setState({ 
      currentMessage: possibleScenarios[0],
      leftButton: 'Fight',
      rightButton: 'Run',
      scenarios: possibleScenarios
    });
  }

  run() {
    this.setState({
      sceneSelected: `MainContainer`,
      currentScene: null,
      currentMessage: `You can run, but you still have to pick an adventure`,
      leftButton: 'Continue',
      rightButton: 'Catch your breath'
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
            <Button className="scenes" waves='light' onClick={this.changeScene}>Sky</Button>
            <Button className="scenes" waves='light' onClick={this.changeScene}>Sea</Button>
            <Button className="scenes" waves='light' onClick={this.changeScene}>Forest</Button>  
          </div>
          <div>
            <h1>
              {this.state.currentMessage}
            </h1>
          </div>
          <div className="ImageContainer">
          </div>
          <div id="button-container">
            <Button className="Button" waves='light' onClick={this.changeScenario}>{this.state.leftButton}</Button>
            <Button className="Button" waves='light' onClick={() => this.run()}>{this.state.rightButton}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
