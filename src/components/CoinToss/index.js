import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headsImageUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  tossClicked = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let testImage = ''
    let newHeads = headsCount
    let newTails = tailsCount

    if (tossResult === 0) {
      testImage = headsImageUrl
      newHeads = headsCount + 1
    } else {
      testImage = tailsImageUrl
      newTails = tailsCount + 1
    }

    this.setState({
      tossImage: testImage,
      headsCount: newHeads,
      tailsCount: newTails,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="heading">Coin toss game</h1>
          <p className="heads-tails">Heads (or) Tails</p>

          <img src={tossImage} alt="toss result" className="toss-img" />

          <button className="toss-btn" type="button" onClick={this.tossClicked}>
            toss coin
          </button>
          <div className="toss-result-con">
            <p className="result-toss">Total: {totalCount}</p>
            <p className="result-toss">Heads: {headsCount}</p>
            <p className="result-toss">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
