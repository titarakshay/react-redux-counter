import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  handleInc = () => {
    this.props.dispatch({ type: "INC" });
  };
  handleDec = () => {
    this.props.dispatch({ type: "DEC" });
  };
  handleReset = () => {
    this.props.dispatch({ type: "RESET" });
  };
  render() {
    return (
      <div>
        <h1>{this.props.state}</h1>
        <button onClick={this.handleInc}>INC</button>
        <button onClick={this.handleReset}>RESET</button>
        <button onClick={this.handleDec}>DEC</button>
      </div>
    );
  }
}

function mapState(state) {
    return {state}
}



// export default connect((state) => ({ state }))(App);
export default connect(mapState)(App)
