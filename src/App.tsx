import './App.css'
import { useDispatch, useSelector } from 'react-redux'

import {
  addCustomerAction,
  removeCustomerAction,
} from './Reducer/customerReducer'

import { fetchCustomers } from './Reducer/asyncActions/customers'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state: any) => state.cash.cash)
  const customers = useSelector((state: any) => state.customers.customers)

  const addCash = (cash: any) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = (cash: any) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const addCustomer = (name: any) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer: any) => {
    const getId = customer.id
    dispatch(removeCustomerAction(getId))
  }

  return (
    <div className="App">
      <div style={{ fontSize: '40px' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счёт
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button>Удалить клиента</button>
        <button onClick={() => fetchCustomers(dispatch)}>
          Получить киентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer: any) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem', marginTop: '20px' }}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  )
}

export default App
