import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  totalSteps: number
  currentStep?: number
}

export const MultiStep = ({ totalSteps, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {totalSteps}
      </Label>
      <Steps css={{ '--steps-size': totalSteps }}>
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step}></Step>
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
