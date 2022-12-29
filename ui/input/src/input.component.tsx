import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'

import { Condition }                from '@ui/condition'
import { Row }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { doNothing }                from '@shared/utils'
import { useHover }                 from '@ui/utils'

import { ButtonSearchAttachment }   from './button-search-attachment'
import { CrossAttachment }          from './cross-attachment'
import { InputProps }               from './input.interfaces'
import { Label }                    from './label'
import { SearchAttachment }         from './search-attachment'
import { ShowPasswordAttachment }   from './show-password-attachment'
import { extendsAppearanceStyles }  from './input.styles'
import { placeholderStyles }        from './placeholder-attachment'
import { baseStyles }               from './styles'
import { shapeStyles }              from './styles'
import { appearanceStyles }         from './styles'
import { textareaStyles }           from './styles'
import { cancelButtonStyles }       from './styles'

export const InputElement = styled.div(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  textareaStyles,
  cancelButtonStyles,
  placeholderStyles,
  extendsAppearanceStyles
)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    size,
    value,
    disabled,
    onChange,
    onChangeNative,
    label = '',
    required,
    textAlign,
    type,
    hint,
    maxLength,
    errorText = '',
    errorMessage,
    isMessageSent,
    setIsMessageSent,
    textarea,
    attachments,
    ...props
  },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const [focus, setFocus] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(true)
  const [hover, hoverProps] = useHover()

  const crossRef = useRef(null)

  const { containerProps, rawInputProps } = createTextareaProps()

  if (!ref) {
    // eslint-disable-next-line
    ref = useRef(null)
  }

  useEffect(() => {
    const handler = (event) => {
      if (crossRef && crossRef.current && event.relatedTarget === crossRef.current) {
        // do nothing
      } else setTimeout(() => setFocus(false), 200)
    }

    if (ref && (ref as any).current) {
      ;(ref as any).current.addEventListener('focusout', handler)

      return () => (ref as any)?.current?.removeEventListener('focusout', handler)
    }

    return doNothing
  }, [ref])

  return (
    <Row>
      <Column fill>
        <Condition match={!!label}>
          <Row>
            <Label required={required!}>{label}</Label>
            <Condition match={!!maxLength}>
              <Layout flexGrow={1} />
              <Text fontSize='small' color='text.lightGray' fontWeight='semiBold'>
                {maxLength! - (value?.toString().length || 0)}
              </Text>
            </Condition>
          </Row>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <InputElement
          {...props}
          value={value}
          {...(textarea && containerProps)}
          textarea={textarea}
          error={errorText !== ''}
          size={size}
          focus={focus}
          disabled={disabled}
          onClick={() => {
            ;(ref as any).current.focus()
          }}
          hover={hover}
          {...hoverProps}
        >
          <SearchAttachment type={type} attachments={attachments} />
          <RawInput
            ref={ref}
            {...props}
            {...(textarea && rawInputProps)}
            disabled={disabled}
            value={value}
            onChange={changeValue}
            type={!hidden ? 'text' : type}
            onFocus={() => setFocus(true)}
            style={{
              textAlign: textAlign as any,
              ...(textarea && {
                resize: 'none',
                width: '100%',
              }),
            }}
            maxLength={maxLength}
          />
          <CrossAttachment type={type} value={value} setValue={onChange || doNothing} />
          <ButtonSearchAttachment type={type} focus={focus} attachments={attachments} />
          <ShowPasswordAttachment type={type!} hidden={hidden} setHidden={setHidden} />
        </InputElement>
        <Condition match={errorText !== ''}>
          <Layout flexShrink={0} flexBasis={8} />
          <Text fontSize='semiSmall' color='error50'>
            {errorText}
          </Text>
        </Condition>
      </Column>
    </Row>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
