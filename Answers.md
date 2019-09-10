# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web. React is a js library for building UI. It doesn't offer tools necessary for a complete application and is designed specifically for UI making your stack more flexible.

1. What does it mean to think in react? It is to think of the UI as a component hierarchy using state and props.

1. Describe state. It is to set the current state/value/data/etc of an object who's behavior alters when the internal state is changed

1. Describe props. Props pass data & event handlers down to your child components

1. What are side effects, and how do you sync effects in a React component to state or prop changes? Side effects are state changes that are observable outside of its function's scope. You would `import {useEffect}` and wrap you
   r function in `useEffect(() => {})`
