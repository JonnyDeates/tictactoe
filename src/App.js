import './App.css';
import { Component } from 'react';

/// Grid 3x3
/// Current Turn - X and Os
/// Line for Completion
/// Turn System
/// Win State Modal

class App extends Component {

  constructor(props){
    super(props);
    

    this.state = {
      grid: [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]],
      currentTurn: true,
      winner: '',
    }

  }


  render() {
    const checkWinner = () => {
      for (let i = 0; i < 3; i++) {
        if(this.state.grid[i][0] + this.state.grid[i][1] + this.state.grid[i][2] === 'XXX')
          this.setState({winner: !this.state.currentTurn ? 'X' : 'O'})
        };
    }
    const someFunction = (e,row,col) => {
      e.preventDefault();
      const tempGrid = this.state.grid;
      if(tempGrid[row][col] === 0)  {
        tempGrid[row][col] = this.state.currentTurn ? 'X' : 'O'
        this.setState({currentTurn: !this.state.currentTurn, grid: tempGrid}, () => checkWinner())
      }
    }
    return ( 
      <div className="App">
        <h2>Winner {this.state.winner}</h2>
        <h2>Current Turn: {this.state.currentTurn ? 'X' : 'O'}</h2>
        {
          this.state.grid.map((row, i)=> <div>
              {row.map((col,j) => (col === 0) ? <button onClick={(e)=> someFunction(e,i,j)}>{col}</button> : <span>{col}</span>)}
            </div>)
        }
    </div>
  );
}
}

export default App;
