import { BackHandler, ToastAndroid } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export const useBackButtonHandler = (cb: () => boolean): void => {
  useFocusEffect(() => {
    const onBackPress = () => cb()
    BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  })
}

export const useDoubleTapBackExit = (
  message: string = '再次点击返回键退出应用'
): void => {
  let allowExit: NodeJS.Timer | undefined
  useBackButtonHandler(() => {
    if (allowExit) {
      BackHandler.exitApp()
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      allowExit = setTimeout(() => {
        allowExit = undefined
      }, 1000)
    }
    return true
  })
}
