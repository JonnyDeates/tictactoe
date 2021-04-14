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
      const grid = this.state.grid;
      const setWinner = () => this.setState({winner: !this.state.currentTurn ? 'X' : 'O'})
      const checkers = ['XXX','OOO']
      for(let check of checkers) {     
        for (let i = 0; i < 3; i++) {
          if(grid[i][0] + grid[i][1] + grid[i][2] === check) // Horizontal Check
            setWinner()

          if(grid[0][i] + grid[1][i] + grid[2][i] === check) // Vertical Check
            setWinner()
          };
          if(grid[0][0] + grid[1][1] + grid[2][2] === check) // Diagonal Check
            setWinner()

          if(grid[0][2] + grid[1][1] + grid[2][0] === check) // Diagonal Check
            setWinner()

    }
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
        <button onClick={()=>this.setState({currentTurn: true, grid: [[0, 0, 0],[0, 0, 0], [0, 0, 0]], winner: ''})}>Reset</button> 
        { this.state.grid.map((row, i)=> <div>
              {row.map((col,j) => (col === 0) ? <button onClick={(event)=> someFunction(event,i,j)}>{col}</button> : <span>{col}</span>)}
            </div>)}
    </div>
  );
}
}

export default App;
