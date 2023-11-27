import { ReactNode, createContext, useReducer } from 'react'
import { Coffee } from '../utils/coffeeData'
import { PaymentMethods, cartReducer } from '../reducers/cart/reducers'
import {
  AddCoffeeToCartAction,
  DecreaseCoffeeAmountAction,
  IncreaseCoffeeAmountAction,
  RemoveCoffeeAction,
  SetPaymentMethod,
} from '../reducers/cart/actions'

interface CartContextData {
  coffees: Coffee[]
  paymentMethod: PaymentMethods
  addCoffeeToCart: (data: Coffee) => void
  increaseAmount: (coffeeId: string) => void
  decreaseAmount: (coffeeId: string) => void
  removeCoffee: (coffeeId: string) => void
  setPaymentMethod: (paymentMethod: PaymentMethods) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    cartReducer,
    {
      coffees: [],
      paymentMethod: 'unset',
    },
    (initialState) => {
      return initialState
    },
  )

  const { coffees, paymentMethod } = coffeesState

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
    dispatch(SetPaymentMethod(paymentMethod))
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
