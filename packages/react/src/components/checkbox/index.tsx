import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
