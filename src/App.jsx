import React, { useState } from 'react'
import './App.css'




function App() {

  const [state, setState] = React.useState(0)

  return (
    <div className="App">
        <div className="model">
          
            <div className={[state === 0 ? "show_one" : "hidden_one"].join(" ")}>
              <h1>This is first Model content</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in vero debitis necessitatibus quaerat, facilis delectus nemo assumenda illo sit nam perferendis dolor vel modi ratione nihil alias veniam rerum! Dolorem minima quae vero, voluptas ratione quidem quos cum officiis temporibus harum atque autem, veniam ullam corrupti placeat eligendi perferendis ipsam quam, nihil voluptates animi. Est omnis eveniet nostrum inventore cupiditate necessitatibus, sequi excepturi delectus voluptate distinctio rerum itaque aspernatur harum officia quisquam quia maxime, maiores minima commodi quam quasi repudiandae consequatur soluta? Magnam unde maiores distinctio aliquid reprehenderit, dolorem et assumenda reiciendis dolorum porro qui, mollitia beatae minima aperiam!</p>
              <button onClick={()=>setState(1)}>Another Page</button>
            </div>
      
            <div className={[state === 1 ? "show_one" : "hidden_one"].join(" ")}>
              <button onClick={()=>setState(0)}>Go Back</button>
              <h1>This is Second Model</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in vero debitis necessitatibus quaerat, facilis delectus nemo assumenda illo sit nam perferendis dolor vel modi ratione nihil alias veniam rerum! Dolorem minima quae vero, voluptas ratione quidem quos cum officiis temporibus harum atque autem, veniam ullam corrupti placeat eligendi perferendis ipsam quam, nihil voluptates animi. Est omnis eveniet nostrum inventore cupiditate necessitatibus, sequi excepturi delectus voluptate distinctio rerum itaque aspernatur harum officia quisquam quia maxime, maiores minima commodi quam quasi repudiandae consequatur soluta? Magnam unde maiores distinctio aliquid reprehenderit, dolorem et assumenda reiciendis dolorum porro qui, mollitia beatae minima aperiam!</p>
      
            </div>
          

        </div>



    </div>
  )
}

function HomePage(){return(<h1>Home Page</h1>)}
function AboutPage(){return(<h1>AboutPage</h1>)}

export default App
