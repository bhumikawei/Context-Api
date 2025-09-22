import { useReducer } from 'react'
import './App.module.css'

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: ""
}

const reducer=(data, action) => {
  return{...data, [action.type]: action.val}
}

function App() {
  const [state, dispatch] = useReducer(reducer, emptyData)

  console.log(state);
  return(
    <>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type:'name'})} placeholder='Enter name'/>
      <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type:'password'})} placeholder='Enter password'/>
      <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type:'email'})} placeholder='Enter email'/>
      <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type:'city'})} placeholder='Enter city'/>
      <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type:'address'})} placeholder='Enter address'/>
    </>
)
}

export default App
