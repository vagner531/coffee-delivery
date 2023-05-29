import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
  return(
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1686528000&Signature=FXzGOB8PtYT4hAMohMm53Xcjf6z0f-HxoaP9zkE0q2iGE6PC7guNqFtpylW7-5gu9tisi0Cn4VXm~ZUqsNdXlQTuFfINMphGN5N88X4jWudE5l1Tf5rt~G0B4QU7vEbfgmD3t2CoLri1TI07Wm1zaAe71jtCo3jMSPLshh4a637ZjDyQP7~mFQp1xjCV9G8eGKkK3tQXAE9rlb0jnLQ2OKlcqbN2sEbUlp7Q0n6msAsknGFbb~cdW8SgIwQDJgoaaxA~MQLjvmjsJztGCOcVgqVww2KPn3KsPQoFr3IKAOMjyiACy1bN2r~dtQ1iYAR~bfjPPy20e~ahlq9~wZkCfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16}/>
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}