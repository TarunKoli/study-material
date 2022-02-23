# Using Redux in Projects

## 1. Simply, redux work as global state which is available across all the children

## 2. Redux needs reducers & actions to manipulate different states available.

## 3. useSelector is used for accessing the state and useDispatch is used for perfoming reducer action on a particular state.

## 4. Folder structure as follows :

    - Redux
        - reducers (all reducers)
            - reducer1.js
            - reducer2.js
        - actions (all actions)
            - action1.js
            - action2.js
        - index.js (all combined reducers)

## 5. Define reducers

> Example :-

```js
const CounterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default CounterReducer;
```

## 6. Define actions

> Example :-

```js
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
```

## 7. After defining all reducers , lets combine them to make a root reducer.

> Example :-

```js
import LoggedReducer from "./loggedReducer";
import CounterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducer,
});

export default rootReducer;
```

## 8. Import rootreducer to root component (mostly app.js).

```js
import rootReducer from "./Components/redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore(rootReducer);

  return <Provider store={store}>{children}</Provider>;
}

export default App;
```
