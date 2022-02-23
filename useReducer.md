# How to use useReducer() hook !

## 1. Create a file seprately for useReducer (optional).

## 2. Import useReducer

```js
import React, { useReducer, createContext } from "react";
```

## 3. Define an initial state.

```js
const initial_state = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  address: "",
  interest: "",
};
```

## 4. Define the actions to be performed on Reducer function

```js
export const ACTIONS = {
  ADD_FIRSTNAME: "firstname",
  ADD_LASTNAME: "lastname",
  ADD_PHONE: "phone",
  ADD_EMAIL: "email",
  ADD_ADDRESS: "address",
  ADD_INTEREST: "interest",
};
```

## 5. Define the reducer function.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FIRSTNAME: {
      return { ...state, firstname: action.payload.firstname };
    }
    case ACTIONS.ADD_LASTNAME: {
      return { ...state, lastname: action.payload.lastname };
    }
    case ACTIONS.ADD_PHONE: {
      return { ...state, phone: action.payload.phone };
    }
    case ACTIONS.ADD_EMAIL: {
      return { ...state, email: action.payload.email };
    }
    case ACTIONS.ADD_ADDRESS: {
      return { ...state, address: action.payload.address };
    }
    case ACTIONS.ADD_INTEREST: {
      return { ...state, interest: action.payload.interest };
    }
  }
};
```

## 6. Create a context so that useReducer will be available to its children.

```js
export const FormContext = createContext();
```

## 7. Create a provider function for the same.

```js
export const FormProvider = (props) => {
  const [state, disptach] = useReducer(reducer, initial_state);
  return (
    <FormContext.Provider value={[state, disptach]}>
      {props.children}
    </FormContext.Provider>
  );
};
```

<br />

# Usage

> ## How does useReducer work ?

#### The useReducer hook takes three arguments including reducer function, initial state, and the function to load the initial state lazily (optional).

```js
const [state, dispatch] = useContext(FormContext);
```

## Alternatively,

```js
const [state, disptach] = useReducer(reducer, initial_state);
```

#### Where state refers to the whatever state is currently, on other hand dispatch is use to perform specified actions on the state.

<br />

> ## Performing action through dispatch()

```js
<input
  type="text"
  name="first-name"
  placeholder="First Name"
  onChange={(e) => {
    dispatch({
      type: ACTIONS.ADD_FIRSTNAME,
      payload: {
        firstname: e.target.value,
      },
    });
  }}
  value={state.firstname}
/>
```
