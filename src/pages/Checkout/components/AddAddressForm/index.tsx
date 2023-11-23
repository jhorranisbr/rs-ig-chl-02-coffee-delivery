import {
  FormContainer,
  BaseInput,
  FixedInput,
  RowInput,
  SmallInput,
} from './styles'

export function AddAddressForm() {
  return (
    <FormContainer>
      <RowInput>
        <SmallInput placeholder="CEP" />
      </RowInput>

      <RowInput>
        <BaseInput placeholder="Rua" />
      </RowInput>

      <RowInput>
        <FixedInput placeholder="Número" />
        <BaseInput placeholder="Complemento" />
      </RowInput>

      <RowInput>
        <SmallInput placeholder="Bairro" />
        <BaseInput placeholder="Cidade" />
        <FixedInput placeholder="UF" />
      </RowInput>
    </FormContainer>
  )
}
