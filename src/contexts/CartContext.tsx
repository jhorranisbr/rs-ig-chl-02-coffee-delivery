import { ReactNode, createContext, useReducer } from 'react'
import { Coffee } from '../utils/coffeeData'
import { Address, PaymentMethods, cartReducer } from '../reducers/cart/reducers'

import { v4 as uuidv4 } from 'uuid'

import {
  AddAddressToDeliveryAction,
  AddCoffeeToCartAction,
  DecreaseCoffeeAmountAction,
  IncreaseCoffeeAmountAction,
  RemoveCoffeeAction,
  SetPaymentMethodAction,
} from '../reducers/cart/actions'

interface CartContextData {
  coffees: Coffee[]
  paymentMethod: PaymentMethods
  addCoffeeToCart: (data: Coffee) => void
  increaseAmount: (coffeeId: string) => void
  decreaseAmount: (coffeeId: string) => void
  removeCoffee: (coffeeId: string) => void
  setPaymentMethod: (paymentMethod: PaymentMethods) => void
  addAddressToDelivery: (address: Address) => void
  checkout: () => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

const LOCAL_STORAGE_KEY = '@rs-ig-chl-02-coffee-delivery:orders-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    cartReducer,
    {
      coffees: [],
      paymentMethod: 'credit-card',
    },
    (initialState) => {
      return initialState
    },
  )

  const { coffees, paymentMethod, delivery } = coffeesState

  function addCoffeeToCart(coffee: Coffee) {
    dispatch(AddCoffeeToCartAction(coffee))
  }

  function decreaseAmount(coffeeId: string) {
    dispatch(DecreaseCoffeeAmountAction(coffeeId))
  }

  function increaseAmount(coffeeId: string) {
    dispatch(IncreaseCoffeeAmountAction(coffeeId))
  }

  function removeCoffee(coffeeId: string) {
    dispatch(RemoveCoffeeAction(coffeeId))
  }

  function setPaymentMethod(paymentMethod: PaymentMethods) {
    dispatch(SetPaymentMethodAction(paymentMethod))
  }

  function addAddressToDelivery(address: Address) {
    dispatch(AddAddressToDeliveryAction(address))
  }

  function checkout() {
    const items = coffees.map((coffee) => {
      return {
        id: coffee.id,
        amount: coffee.amount,
      }
    })

    const order = {
      id: uuidv4(),
      date: new Date(),
      items,
      delivery,
      paymentMethod,
    }

    const storageOrders = localStorage.getItem(LOCAL_STORAGE_KEY)

    let orders = []

    if (storageOrders) {
      orders = JSON.parse(storageOrders)
    }

    orders.push(order)

    localStorage.setItem(
      '@rs-ig-chl-02-coffee-delivery:orders-1.0.0',
      JSON.stringify(orders),
    )
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        paymentMethod,
        addCoffeeToCart,
        increaseAmount,
        decreaseAmount,
        removeCoffee,
        setPaymentMethod,
        addAddressToDelivery,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
