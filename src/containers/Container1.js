import React, { Component } from 'react'

import * as ACTION_TYPES from '../store/actions/action_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Container1 extends Component {
  
  render() {
    return (
      <div>
        <button onClick={console.log(this.state)}>Get State</button>
        <button onClick={console.log(this.state)}>Dispatch Action 1</button>
        <button onClick={console.log(this.state)}>Dispatch Action 2</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
}

function mapDispatchToProps(dispatch) {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1)