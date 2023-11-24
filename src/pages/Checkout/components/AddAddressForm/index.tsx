import { Input } from '../../../../components/Input'

import { FormContainer, RowInput } from './styles'

export function AddAddressForm() {
  return (
    <FormContainer>
      <RowInput>
        <Input sizeMode="small" placeholder="CEP" />
      </RowInput>

      <RowInput>
        <Input placeholder="Rua" />
      </RowInput>

      <RowInput>
        <Input sizeMode="small" placeholder="Número" />
        <Input placeholder="Complemento" optionalLabel />
      </RowInput>

      <RowInput>
        <Input sizeMode="small" placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input sizeMode="fixed" placeholder="UF" />
      </RowInput>
    </FormContainer>
  )
}
