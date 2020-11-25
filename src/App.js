import React from "react";
import "./style.css";
import { connect } from "react-redux";
//Note : connect is HOC
const App = props => {
  //we are getting the store value inside the props of the app component
  return (
    <>
      <h5>
        the count is {props.propCount}
        <hr />
        <button onClick={props.propInc}>++</button> |
        <button onClick={props.propDec}>--</button> |
        <button onClick={props.propReset}>Reset</button>
      </h5>
    </>
  );
};

//map store state to props
//in below function stae that is parameter is real state of store
const mapStateToProps = state => {
  return {
    propCount: state.count
  };
};
//How to map the dispatch of store to props of the component]
const mapDispatchToProps = dispatch => {
  return {
    propInc: () => {
      dispatch({
        type: "INC"
      });
    },
    propDec: () => {
      dispatch({
        type: "DEC"
      });
    },
    propReset: () => {
      dispatch({
        type: "RESET"
      });
    }
  };
};

//map dispatch to props

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
