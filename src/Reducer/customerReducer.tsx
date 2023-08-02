const defaultStateReducer: any = {
  customers: [],
}
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const customerReducer = (state = defaultStateReducer, action: any) => {
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
export const addManyCustomersAction = (payload: any) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})
export const addCustomerAction = (payload: any) => ({
  type: ADD_CUSTOMER,
  payload,
})
export const removeCustomerAction = (payload: any) => ({
  type: REMOVE_CUSTOMERS,
  payload,
})
