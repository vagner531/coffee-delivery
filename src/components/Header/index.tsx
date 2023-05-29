import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import logoCoffee from "../../assets/Logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
        <img src={logoCoffee} alt="" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <NavLink to="/completeOrder">
              <ShoppingCart size={20} weight="fill" />
            </NavLink>
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
