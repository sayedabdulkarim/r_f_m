const initialState = {
  text: '',
  myWishes: [],
  load: 'Loading'
}

const reducer = (state = initialState, action) => {

  if(action.type === 'HANDLE_CHANGE'){
    const { name, value} = action
    return{
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  if(action.type === 'FETCH_DATA'){
    return{
      ...state,
      myWishes: [...state.myWishes, ...action.payload]
    }
  }

  if(action.type === 'HANDLE_SUBMIT'){
    return {
      ...state,
      myWishes: [...state.myWishes, action.payload ],
      text: ''
    }
  }

  if(action.type === 'HANDLE_DELETE'){
    const newWishes = state.myWishes.filter(i => i._id !== action.payload._id)
    return {
      ...state,
      myWishes: newWishes
    }
  }

  return state
}

export default reducer