import axios from 'axios'

const fetchData = () => {
  return dispatch => {
    axios.get('http://localhost:5000/data')
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'FETCH_DATA',
          payload: res.data
        })
      })
  }
}

const handleChange = (name, value) => {
  return{
    type: 'HANDLE_CHANGE',
    payload: { name, value }
  }
}

const handleSubmit = (e, value) => {
  e.preventDefault()
  const item = {
    item: value
  }
  return dispatch => {
    axios.post('http://localhost:5000/sent', item)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'HANDLE_SUBMIT',
          payload: res.data
        })
      })
  }
}

const handleDelete = (id) => {
  return dispatch => {
    axios.delete(`http://localhost:5000/remove/${id}`)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'HANDLE_DELETE',
          payload: res.data
        })
      })
  }
}

export {
  fetchData,
  handleChange,
  handleSubmit,
  handleDelete
}