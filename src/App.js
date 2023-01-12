import { useSelector,useDispatch} from "react-redux";
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increament = ()=>{
    dispatch(actions.increament())

  }
  const decreament = ()=>{
    dispatch(actions.decreament())

  }
  const add = ()=>{
    dispatch(actions.add(10))
  }
  return (
    <div >
      <h1>counter</h1>
      <h4>{counter}</h4>
      <button onClick={increament} >+</button>
      <button onClick={decreament}>-</button>
      <button onClick={add}>+10</button>
    
    </div>
  );
}

export default App;
