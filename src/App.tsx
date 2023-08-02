import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementCreator,
  decrementCreator,
  AsyncIncrementCreator,
} from './Reducer/countReducer'
import { fetchUsers } from './Reducer/userReducer'

function App() {
  const count = useSelector((state: any) => state.countReducer.count)
  const users = useSelector((state: any) => state.userReducer.users)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(AsyncIncrementCreator())}>
          Инкремент++
        </button>
        <button onClick={() => dispatch(decrementCreator())}>
          Инкремент--
        </button>
        <button onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      <div>
        {users.map((user: any) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
