import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const signUp = () => {
  return (
    <View className='gap-8 bg-white rounded-lg p-8 mt-14'>
      <CustomInput label='Full Name' placeholder='Enter Full Name' />
      <CustomInput label='Email Address' placeholder='Enter Email Address' />
      <CustomInput label='Password' placeholder='Enter Password' secureTextEntry={true} keyboardType='phone-pad' />
      <CustomButton title='Sign up'/>
      <View className='self-center flex-row gap-2'>
        <Text className='base-regular text-gray-300'>Already have an account?</Text>
        <Link className='text-primary base-bold' href={"/(tabs)"}>Sign In</Link>
      </View>
      </View>
  )
}

export default signUp