import { InputStylesContainer } from "./styles";
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return(
    <InputStylesContainer {...props} />
  )
}