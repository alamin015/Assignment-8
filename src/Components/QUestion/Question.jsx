import React from 'react';
import style from './Question.module.css';

const Question = () => {
    const data1 = { className: "red" };
    const data2 = { count: 3 + 5 }
  return (
    <div className={style.question}>
        <div className={style.item}>
            <h3>Difference between props and state</h3>
            <p>The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>

            <p>React is an open-source JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.</p>
            

            <p>How can we access data from the previous component if the data is just being flowed from component to component? The answer is props. React uses data transmission props that we need to transfer to various components.</p>
        </div>
        <div className={style.item}>
            <h3>How does use state work in react?</h3>
            <p>When you call useState, you are telling React that you want this component to remember something: </p>
            <div className={style.code}>
                <code>const [counter, setCounter] = useState(0);</code>
                <code>const [text, setText] = useState("default text");</code>
            </div>
            <p>Every time your component renders, useState gives you an array containing two values:</p>
            <p>1. The state variable (counter) with the value you stored.</p>
            <p>2. The state setter function (setCounter) which can update the state variable and trigger React to render the component again.</p>
        </div>
        <div className={style.item}>
            <h3>How does useEffect work in react</h3>
            <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
            <p>Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)</p>
            <p>All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.</p>
        </div>
        <div className={style.item}>
            <h3>How does react work?</h3>
            <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.</p>
            <p>Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:</p>
            
            <p>JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.</p>
            <p>In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            
        </div>
        
    </div>
  )
}

export default Question