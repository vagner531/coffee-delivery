import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodoptions() {
  return(
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}