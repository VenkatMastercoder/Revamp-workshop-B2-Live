import React from "react";
import ReactDOM from "react-dom"


const paraElement = React.createElement("p",null,"Hello World") // <p>Hello World</p>

// Jsx ==> HTML Like Syntax or XML Like Syntax [ Javascript When you want to Write HTML [ JSX ]]
const para = <p>Hello JSX</p>

const Header = () => {
  return <p>Header Component</p>
}

const Body = () => {
  return (
    <>
      <p>Hello Body Component</p>
      {Header()}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Body())