import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const signIn = () => {

  const [isSubmitting,setIsSubmitting]=useState(false);
  const [form,setForm]=useState({email:'',password:''});

  const submit=()=>{
    
  }
  return (
    <View className='gap-10 bg-white rounded-lg p-8 mt-14'>
      
        <CustomInput label='Email' placeholder='Enter your email'  onChangeText={(text)=>{} } keyboardType='email-address'/>
           <CustomInput label='Password' placeholder='Enter your password' secureTextEntry={true}  onChangeText={(text)=>{} } keyboardType='email-address'/>
          <CustomButton title='Sign In' />
          <View className='flex-1 flex-row self-center gap-2'>
            <Text className='base-regular text-gray-100'>Don't have an account? </Text>
            <Link href={"/(auth)/sign-up"} className='text-primary base-bold'>
            Sign Up</Link>
          </View>

    </View>
  )
}

export default signIn