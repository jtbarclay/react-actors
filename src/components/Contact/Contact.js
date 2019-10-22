import React, { Component } from 'react';


class Contact extends Component {
  state = {
    user: {
      first: '',
      last: '',
      impression: '',
    }
  }

  handleFirst = (event) => {
    this.setState({
      user: {
        first: event.target.value,
        last: this.state.user.last,
        impression: this.state.user.impression,
      }
    })
  }

  handleLast = (event) => {
    this.setState({
      user: {
        first: this.state.user.first,
        last: event.target.value,
        impression: this.state.user.impression,
      }
    })
  }

  handleImpression = (event) => {
    this.setState({
      user: {
        first: this.state.user.first,
        last: this.state.user.last,
        impression: event.target.value,
      }
    })
  }

  handleButtonClick = () => {
    
  }

  render() {
    return (
      <div className="Contact">
        <h2>Contact</h2>
        <div>
        <input
          onChange={this.handleFirst}
          value={this.state.user.first}
          placeholder={'First'}
        />
        <input
          onChange={this.handleLast}
          value={this.state.user.last}
          placeholder={'Last'}
        />
        <input
          onChange={this.handleImpression}
          value={this.state.user.impression}
          placeholder={'Best Impression'}
        />
        <button onClick={this.handleButtonClick}>Add</button>
        </div>
        <div>
          {(this.state.user.first && this.state.user.last && this.state.user.impression) &&
          <p>{this.state.user.first} {this.state.user.last}'s best impression is {this.state.user.last}</p>}
        </div>
        <p>(800)867-5309</p>
        <p>jenny@goodtimes.net</p>
      </div>
    );
  }
}

export default Contact;