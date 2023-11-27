import { Coffee } from '../../utils/coffeeData'

import { produce } from 'immer'
import { ActionTypes } from './actions'

export type PaymentMethods = 'credit-card' | 'debit-card' | 'cash'

export interface Address {
  zipCode: string
  street: string
  complement?: string
  number: string
  district: string
  city: string
  region: string
}

interface CartState {
  coffees: Coffee[]
  paymentMethod: 'credit' | 'debit' | 'cash'
  delivery?: Address
  fee?: number
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

    case ActionTypes.SET_PAYMENT_METHOD: {
      const paymentMethod = action.payload.paymentMethod

      return {
        ...state,
        paymentMethod,
      }
    }

    case ActionTypes.ADD_ADDRESS_TO_DELIVERY: {
      return {
        ...state,
        delivery: action.payload.address,
      }
    }

    default:
      return state
  }
}
