import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";

//function logger(obj, next, action)

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("Action_type = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code

    console.log("ACTION", action);

    next(action);
  };
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //thunk code
//     if(typeof action === 'function'){
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(combineReducers, applyMiddleware(logger, thunk));
// console.log("store :: ", store);
console.log(" State :: ", store.getState());

export const StoreContext = createContext();
console.log("StoreContext ", StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

//const connectedAppComponent = connect(callback)(App);
export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);
        return (
          <Component {...dataToBePassedAsProps} dispatch={state.dispatch} />
        );
      }
    }

    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => {
              <ConnectedComponent store={store} />;
            }}
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  };
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
