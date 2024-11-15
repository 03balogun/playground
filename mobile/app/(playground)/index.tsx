import { Image, StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Box, Text } from '@/ui'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Box px={'md'} py={'md'}>
        <Text type={'extraBold18'}>The Playground</Text>
      </Box>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
})
