import { Coffee } from '../../utils/coffeeData'

import { produce } from 'immer'
import { ActionTypes } from './actions'

interface CartState {
  coffees: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.newCoffee.id
      })

      // check if new Coffee already exists on state
      // if exists, update amount of old one to amount of currentCoffee
      if (currentCoffeeIndex > -1) {
        return produce(state, (draft) => {
          draft.coffees[currentCoffeeIndex].amount =
            action.payload.newCoffee.amount
        })
      }

      // if is new one
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newCoffee)
      })
    }

    case ActionTypes.DECREASE_COFFEE_AMOUNT: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, (draft) => {
        let currentAmount = draft.coffees[currentCoffeeIndex].amount

        if (currentAmount > 0) {
          currentAmount = currentAmount - 1
        } else {
          currentAmount = 0
        }

        draft.coffees[currentCoffeeIndex].amount = currentAmount
      })
    }

    case ActionTypes.INCREASE_COFFEE_AMOUNT: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, (draft) => {
        draft.coffees[currentCoffeeIndex].amount =
          draft.coffees[currentCoffeeIndex].amount + 1
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const newCoffees = state.coffees.filter((coffee) => {
        return coffee.id !== action.payload.coffeeId
      })

      return produce(state, (draft) => {
        draft.coffees = newCoffees
      })
    }

    default:
      return state
  }
}
