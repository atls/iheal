import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputVariant = 'primary'

export type InputSize = 'normal'

export interface InputProps extends BaseInputProps {
  variant?: InputVariant
  size?: InputSize
  label?: string
  textAlign?: string
  hint?: string
  maxLength?: number
  errorText?: string
  textarea?: boolean
  errorMessage?: string
  attachments?: string | string[]
  isMessageSent?: boolean
  setIsMessageSent?: (isMessageSent: boolean) => void
}
