import { ScrollView, ScrollViewProps } from 'react-native'
import styled from 'styled-components/native'

export const ScrollViewBox = styled(ScrollView)<ScrollViewProps>`
  background-color: ${({ theme }) => theme.colors.primary};
`
