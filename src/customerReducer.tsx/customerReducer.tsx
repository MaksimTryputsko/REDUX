const defaultStateReducer: any = {
  customers: [],
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
const customerReducer = (state = defaultStateReducer, action: any) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer: any) => customer.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export const addManyCostomers = (payload: any) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})
export const addCustomerAction = (payload: any) => ({
  type: ADD_CUSTOMER,
  payload,
})
export const removeCustomer = (payload: any) => ({
  type: REMOVE_CUSTOMERS,
  payload,
})

export { customerReducer }
