import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction } from './customerReducer.tsx/customerReducer'
import { fetchConstoners } from './AsyncActions/customers'

function App() {
  const dispath = useDispatch()
  const cash = useSelector((state: any) => state.cash.cash)
  console.log(cash)
  console.log('hellow world')
  const customer = useSelector((state: any) => state.customer.customers)
  console.log(customer)

  const addCash = (cash: any) => {
    dispath({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = (cash: any) => {
    dispath({ type: 'GET_CASH', payload: cash })
  }

  const addCostomer = (name: any) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispath(addCustomerAction(customer))
  }
  const removeCustomer = (customer: any) => {
    dispath({ type: 'REMOVE_CUSTOMERS', payload: customer.id })
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
        <button onClick={() => addCostomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>
          Удалить клиента
        </button>
        <button onClick={() => dispath(fetchConstoners())}>
          Получаем клиентов из базы
        </button>
      </div>
      {customer.length > 0 ? (
        <div>
          {customer.map((customer: any) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem', marginTop: '20px' }}>
          Клиенты отсутствуют{' '}
        </div>
      )}
    </div>
  )
}

export default App
