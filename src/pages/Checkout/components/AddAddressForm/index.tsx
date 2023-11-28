import { useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { CircleDashed } from '@phosphor-icons/react'
import { Input } from '../../../../components/Input'

import { FormContainer, RowInput, SearchButton } from './styles'

export function AddAddressForm() {
  const { register, getValues, setValue } = useFormContext()
  const [isFetching, setIsFetching] = useState(false)

  async function handleFetchAddress() {
    setIsFetching(true)

    const regexNotNumbers = /\D/

    const zipCodeOnlyNumbers = String(getValues('zipCode')).replace(
      regexNotNumbers,
      '',
    )

    const fetchedAddress = await fetch(
      `https://viacep.com.br/ws/${zipCodeOnlyNumbers}/json/`,
    )

    const addressJSON = await fetchedAddress.json().finally(() => {
      setIsFetching(false)
    })

    if (addressJSON) {
      setValue('street', addressJSON.logradouro)
      setValue('district', addressJSON.bairro)
      setValue('city', addressJSON.localidade)
      setValue('region', addressJSON.uf)
    }
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

        <SearchButton type="button" onClick={handleFetchAddress}>
          Buscar CEP
          {isFetching && (
            <span>
              <CircleDashed size={24} />
            </span>
          )}
        </SearchButton>
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
