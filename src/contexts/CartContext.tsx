import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../utils/coffeeData'
import {
  Address,
  Order,
  PaymentMethods,
  cartReducer,
} from '../reducers/cart/reducers'

import {
  AddAddressToDeliveryAction,
  AddCoffeeToCartAction,
  CheckoutAction,
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
  checkout: (data: Order) => void
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
      orders: [],
    },
    (cartState) => {
      const storagedOrders = localStorage.getItem(LOCAL_STORAGE_KEY)

      if (storagedOrders) {
        return {
          ...cartState,
          orders: JSON.parse(storagedOrders),
        }
      }

      return cartState
    },
  )

  const { coffees, paymentMethod, orders } = coffeesState

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders))
  }, [orders])

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

  function checkout(order: Order) {
    dispatch(CheckoutAction(order))
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
