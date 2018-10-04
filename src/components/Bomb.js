import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }

  }
  render() {
    const statement = this.state.secondsLeft
    let phrase
    if (statement === 0) {
     phrase = "Boom!"
    }else {
    phrase = `${statement} seconds left before I go boom!`
    }
    return (
      <div>{phrase}</div>
      )
    }
  }
export default Bomb;
