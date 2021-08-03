import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <form onChange={this.handleOnChange}>
          <input type='text' name='name'/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
