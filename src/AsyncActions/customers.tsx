import { addManyCostomers } from '../customerReducer.tsx/customerReducer'

export const fetchConstoners = (): any => {
  return function (dispath: any) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispath(addManyCostomers(json)))
  }
}
