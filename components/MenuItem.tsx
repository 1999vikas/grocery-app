import { CATEGORIES } from '@/constants';
import cn from 'clsx';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const MenuItem = () => {
  return (
    <FlatList
    data={CATEGORIES}
    horizontal
    renderItem={({item,index})=>(
        <View className={cn('py-3 px-9 shadow-lg rounded-full',index==0 ?'bg-primary ' :'bg-white')}>
            <Text className={cn('font-quicksand-semibold',index==0 ?'text-base text-white':'text-gray-100'  )}>{item.name}</Text>
        </View>

  )}
   contentContainerClassName="gap-2 pb-4"
    
    />
  )
}

export default MenuItem