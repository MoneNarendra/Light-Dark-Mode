import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeMode = () => {
    this.setState(preState => ({isDark: !preState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeChange = isDark ? 'dark-mode' : 'light-mode'
    return (
      <div className="bg-container">
        <div className={`inner-container ${modeChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.changeMode}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
