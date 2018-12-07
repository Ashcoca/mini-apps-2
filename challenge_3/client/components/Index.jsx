import React from 'react'

class Bowling extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      error: null
    }
  }

  render() {
    return (
      <div>
        Page is Loaded!
      </div>
    )
  }


}

export default Bowling;