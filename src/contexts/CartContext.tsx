import { ReactNode, createContext, useReducer } from 'react'
import { Coffee } from '../utils/coffeeData'
import { coffeesReducer } from '../reducers/coffees/reducers'
import {
  AddCoffeeToCartAction,
  DecreaseCoffeeAmountAction,
  IncreaseCoffeeAmountAction,
  RemoveCoffeeAction,
} from '../reducers/coffees/actions'

interface CartContextData {
  coffees: Coffee[]
  addCoffeeToCart: (data: Coffee) => void
  increaseAmount: (coffeeId: string) => void
  decreaseAmount: (coffeeId: string) => void
  removeCoffee: (coffeeId: string) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
    },
    (initialState) => {
      return initialState
    },
  )

  const { coffees } = coffeesState

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

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        increaseAmount,
        decreaseAmount,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
