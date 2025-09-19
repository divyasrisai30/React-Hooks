# React-Hooks

Working on different hooks with different scenarios

Resources:

Hooks:

* https://www.greatfrontend.com/react-interview-playbook/react-hooks

Design Pattern:

* https://baguilar6174.medium.com/react-design-patterns-6ab55c5ebafb
* 

UseState:

* useState enables function components to track state within component instances.
* State is isolated and private.
* Use useState when a component needs local state that is contained within the component instance and not meant to be shared with siblings/parents.
* If you render a component in two separate places, each instance gets its own state.
* Codewise: useState returns an array with exactly two values:

  * The current state. During the first render, it will match the initialState you have passed.
  * The set function that lets you update the state to a different value and trigger a re-render.
* Scenarios:

  * Increment, Decrement and reset
  * Theme change
  * handling forms
  * Todo list
  * 
*
