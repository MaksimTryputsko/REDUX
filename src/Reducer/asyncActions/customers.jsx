import { addManyCustomersAction } from '../customerReducer'

export const fetchCustomers = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispatch(addManyCustomersAction(json)))
}
