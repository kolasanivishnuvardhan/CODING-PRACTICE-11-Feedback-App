import Feedback from './components/Feedback'

import {Component} from 'react'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {happy: false}

  setHappyState = () => {
    this.setState({happy: true})
  }
  render() {
    const {happy} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-container">
          {happy ? (
            <>
              <img
                src={resources.loveEmojiUrl}
                alt="love emoji"
                className="love-img"
              />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          ) : (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <Feedback resources={resources} happyState={this.setHappyState} />
            </>
          )}
        </div>
      </div>
    )
  }
}
export default App
