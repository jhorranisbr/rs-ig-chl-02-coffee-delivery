import { Coffee } from '../../utils/coffeeData'
import { Address, Order, PaymentMethods } from './reducers'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  INCREASE_COFFEE_AMOUNT = 'INCREASE_COFFEE_AMOUNT',
  DECREASE_COFFEE_AMOUNT = 'DECREASE_COFFEE_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  ADD_ADDRESS_TO_DELIVERY = 'ADD_ADDRESS_TO_DELIVERY',
  CHECKOUT = 'CHECKOUT',
}

export function AddCoffeeToCartAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function DecreaseCoffeeAmountAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_AMOUNT,
    payload: {
      coffeeId,
    },
  }
}

export function IncreaseCoffeeAmountAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_AMOUNT,
    payload: {
      coffeeId,
    },
  }
}

export function RemoveCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function SetPaymentMethodAction(paymentMethod: PaymentMethods) {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}

export function AddAddressToDeliveryAction(address: Address) {
  return {
    type: ActionTypes.ADD_ADDRESS_TO_DELIVERY,
    payload: {
      address,
    },
  }
}

export function CheckoutAction(order: Order) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
    },
  }
}
