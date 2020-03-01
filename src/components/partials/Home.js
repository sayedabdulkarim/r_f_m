import React, { Component } from "react";

import axios from 'axios'

import { connect } from 'react-redux'

import { handleChange, fetchData, handleSubmit, handleDelete } from '../../actions/action'

class Home extends Component {
  state = {
    text: '',
    myWishes: [],
    load: 'Loading'
  }

  handleChange = e => {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  handleSubmit = e => {
    // e.preventDefault()
    // const data = {
    //   item: this.state.text
    // }
    // axios.post('http://localhost:5000/sent', data)
    //   .then(res => res)
    //   // .then(res => console.log(res.data, ' res'))
    //   .then(res => this.setState({ text: '', myWishes: [...this.state.myWishes, res.data] }))
    //   .catch(err => console.log(err))
    // console.log(this.state, ' state');
  }

  componentDidMount() {
    this.props.fetchData()
    // axios.get('http://localhost:5000/data')
    //   .then(res => res)
    //   .then(res => this.setState({ myWishes : [...this.state.myWishes, ...res.data] }))
  }
  

  handleDelete = (id) => {
    const newData = this.state.myWishes.filter(i => i._id !== id)
    // const _id = id
    // axios.delete('http://localhost:5000/remove/'+id)
    axios.delete(`http://localhost:5000/remove/${id}`)
      .then(res => res)
      .then(res => this.setState({ myWishes : newData }))
    // console.log(id, ' id')
  }

  render() {
    console.log(this.props, ' props');
    const { text, myWishes, load } = this.state
    return (
      <div>
        <h1>Home</h1>
        <form action="" onSubmit={ (e) => this.props.handleSubmit(e, this.props.text) }>
          <input type="text" name="text" placeholder="Item" value={ this.props.text } onChange={ (e) => this.props.handleChanged(e.target.name,e.target.value) }/>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
        {
          this.props.myWishes.length ? (
            <div className="collection">
          {
            this.props.myWishes.map(i => {
              return <a onClick={() => this.props.handleDelete(i._id)} className="collection-item" key={ i._id }>{ i.wish }</a>
            })
          }
        </div>
          ) : <div>{ this.props.load }</div>
        }
        <div className="collection">
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { text, load, myWishes } = state
  return{
    text,
    load,
    myWishes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchData: () => dispatch(fetchData()),
    handleChanged: (name, value) => dispatch( handleChange(name, value) ),
    handleSubmit: (e, value) => dispatch(handleSubmit(e, value)),
    handleDelete: (id) => dispatch(handleDelete(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)