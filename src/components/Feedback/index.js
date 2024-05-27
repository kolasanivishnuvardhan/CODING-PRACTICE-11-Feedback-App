import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  onClickEmoji = (eachEmoji) => {
    console.log('emoji triggeredw')
    this.props.happyState()
  }
  render() {
    const {resources} = this.props
    const {emojis, loveEmoliUrl} = resources
    return (
      <ul className="emojies-container">
        {emojis.map(eachEmoji => (
          <li className="emoji-container" key={eachEmoji.id}>
            <img
              src={eachEmoji.imageUrl}
              alt={eachEmoji.name}
              className="emoji"
              onClick={()=>this.onClickEmoji(eachEmoji)}
            />
            <p className="name">{eachEmoji.name}</p>
          </li>
        ))}
      </ul>
      /*
       */
    )
  }
}

export default Feedback
