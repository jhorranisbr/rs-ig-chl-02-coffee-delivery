import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'

import { Input } from '../../../../components/Input'

import { FormContainer, RowInput } from './styles'
import { Address } from '../../../../reducers/cart/reducers'
import { CartContext } from '../../../../contexts/CartContext'
import { Button } from '../../../../components/Button'

export function AddAddressForm() {
  const { register, getValues } = useFormContext()
  const { addAddressToDelivery } = useContext(CartContext)

  function handleFetchAddress() {
    const addressToDeliveryData: Address = getValues() as Address

    addAddressToDelivery(addressToDeliveryData)
  }

  return (
    <FormContainer>
      <RowInput>
        <Input
          sizeMode="small"
          placeholder="CEP"
          required
          registerName="zipCode"
          register={register}
        />

        <Button type="button" onClick={handleFetchAddress}>
          Buscar CEP
        </Button>
      </RowInput>

      <RowInput>
        <Input placeholder="Rua" registerName="street" register={register} />
      </RowInput>

      <RowInput>
        <Input
          sizeMode="small"
          placeholder="Número"
          registerName="number"
          register={register}
        />
        <Input
          placeholder="Complemento"
          optionalLabel
          registerName="complement"
          register={register}
        />
      </RowInput>

      <RowInput>
        <Input
          sizeMode="small"
          placeholder="Bairro"
          registerName="district"
          register={register}
        />
        <Input placeholder="Cidade" registerName="city" register={register} />
        <Input
          sizeMode="fixed"
          placeholder="UF"
          registerName="region"
          register={register}
        />
      </RowInput>
    </FormContainer>
  )
}
