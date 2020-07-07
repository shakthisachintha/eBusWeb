import React from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    
    return(
      <form>
          <label>Bus Number</label>
          <input type="text" />
          <br />
          <label>Bus Route</label>
          <input type="text" />
          <br />
          <label>Bus Capacity</label>
          <input type="number" />
        </form>
    )
  }
}