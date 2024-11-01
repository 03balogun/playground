import { forwardRef, ReactNode, useMemo } from 'react'
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import styled from 'styled-components/native'

import { Text } from './Text'
import { Colors, Spacing, SpacingTypes, Typography } from '../theme/types'

type AdditionalProps = {
  title?: string
  variant?: 'outlined' | 'solid' | 'text'
  size?: Spacing
  color?: Colors
  titleColor?: Colors
  fontType?: Typography
  fullWidth?: boolean
  isLoading?: boolean
  customChildren?: ReactNode
} & SpacingTypes

type ButtonProps = TouchableOpacityProps & AdditionalProps

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      title,
      size,
      color = 'secondary',
      fontType = 'semiBold18',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const textColor = useMemo(() => {
      if (props.titleColor) {
        return props.titleColor
      }
      if (props.variant === 'outlined') {
        return color
      }
      return color === 'primary' ? 'secondary' : 'primary'
    }, [color, props.titleColor, props.variant])

    return (
      <Touchable
        ref={ref}
        disabled={isLoading || props.disabled}
        activeOpacity={0.8}
        {...props}
        accessibilityLabelledBy={'label'}
        color={color}
        size={size}>
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <>
            {props.customChildren ? (
              props.customChildren
            ) : (
              <Text nativeID={'label'} color={textColor} type={fontType}>
                {title}
              </Text>
            )}
          </>
        )}
      </Touchable>
    )
  }
)
const Touchable = styled(TouchableOpacity)<ButtonProps & SpacingTypes>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  background-color: ${({ theme, color = 'secondary', variant }) => {
    if (variant === 'outlined' || variant === 'text') return 'transparent'
    return theme.colors[color]
  }};
  width: ${({ fullWidth = '100%' }) => (fullWidth ? '100%' : 'auto')};
  border: ${({ theme, color = 'secondary', variant }) => {
    if (variant === 'outlined') {
      return `${theme.borderWeights.lg} solid ${theme.colors[color]}`
    }
    return '0px'
  }};
  padding-vertical: ${({ theme, py = 'md', size }) => {
    if (size) return theme.spacing[size]
    return theme.spacing[py]
  }};
  padding-horizontal: ${({ theme, size, px = 'md' }) => {
    if (size) return theme.spacing[size]
    return theme.spacing[px]
  }};
  margin-top: ${({ theme, mt = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mt]
  }};
  margin-bottom: ${({ theme, mb = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mb]
  }};
  margin-top: ${({ theme, mt = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mt]
  }};
  margin-bottom: ${({ theme, mb = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mb]
  }};
  margin-right: ${({ theme, mr = 'none', my }) => {
    if (mr) return theme.spacing[mr]

    return theme.spacing[mr]
  }};
  margin-left: ${({ theme, ml = 'none', my }) => {
    if (ml) return theme.spacing[ml]

    return theme.spacing[ml]
  }};
`
