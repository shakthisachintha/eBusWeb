import React from 'react'
import Form from './InlineForm'
//import Table from '../../Layouts/Table'
import SimpleTable from './SimpleTable'
import FormDialog from './DialogForm'

export default class ViewConductor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bus: []
    }
  }

  componentDidMount(){

    // this.setState({ loading: true })
    //     axios
    //         .get(
    //             '/chats/get-all'
    //         )
    //         .then((res) => {
    //             const chatData = res.data 
    //             const state  = this.state 
    //             this.setState({
    //                 ...state,
    //                 chat : {...chatData}, 
    //                 loading: false})
    //         })
    //         .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>View Conductors</h1>
        {/* <Table /> */}
        <FormDialog/>
        <SimpleTable bus={this.state.bus}/>
        <Form />
        {/* <form>
          <label>Bus Number</label>
          <input type="text" />
          <br />
          <label>Bus Route</label>
          <input type="text" />
          <br />
          <label>Bus Capacity</label>
          <input type="number" />
        </form> */}
        
      </div>
    )
  }

}