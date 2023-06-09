import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";


export function AddressForm() {
  return(
    <AddressFormContainer>
      <Input placeholder="CEP" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" className="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}