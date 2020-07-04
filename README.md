# react-navigation-simple-utils

Simple utils for react-navigation.

## Installation

Before using it, make sure that you certainly installed react-navigation and so on.

```sh
npm install react-navigation-simple-utils
```

## Usage

The example make a minimized app which need you double tap back button to exit.

```js
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDoubleTapBackExit } from 'react-navigation-simple-utils'

function HomeScreen() {
  useDoubleTapBackExit()
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
