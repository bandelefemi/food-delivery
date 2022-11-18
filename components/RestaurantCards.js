import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_desc,
    dishes
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
        <Image 
            source={{uri: urlFor(imgUrl).url()}}
            className='h-36 w-64 rounded-sm' />
        <View className='py-3 px-4'>
            <Text className='font-bold text-lg'>{title}</Text> 
            <View className='flex-row space-x-1 items-center'>
                <StarIcon color='green' opacity={0.5} size={22} />  
                <Text className='text-xs text-gray-500'>
                     <Text className='text-green-500'>{rating}</Text> 
                      {' -'} {genre}
                </Text>  
            </View> 
            <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color={'gray'} opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'> {address}</Text>    
            </View>  
        </View>        
    </TouchableOpacity>
  )
}

export default RestaurantCards