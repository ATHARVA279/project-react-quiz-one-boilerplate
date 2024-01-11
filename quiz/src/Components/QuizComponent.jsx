import React, { Component } from 'react'
import './Quiz.css'

export default class QuizComponent extends Component {
  render() {
    return (
      <div>
        <div className="main">
            <div className="disBox">
                <div className='heading'>
                    <h1>Questions</h1>
                </div>
                <div className='Num'>
                    <h4>1 of 15</h4>
                </div>
                <div className='Ques'>
                    <p>Which is the only mammal that can jump?</p>
                </div>
                <div className='optBox'>
                      <div className="opt"><h2>Dog</h2></div>
                      <div className="opt"><h2>Elephant</h2></div>
                      <div className="opt"><h2>Goat</h2></div>
                      <div className="opt"><h2>Lion</h2></div>
                </div>
                <div className="Btn">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
