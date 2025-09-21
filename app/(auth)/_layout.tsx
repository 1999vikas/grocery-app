import { Slot } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthLayout = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>AuthLayout</Text>
      <Slot/>
    </View>
    </SafeAreaView>
  )
}

export default AuthLayout