import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'
import { useEffect,useState } from 'react'

const FeaturedRow = ({id, title, desc}) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    
    sanityClient.fetch(
      `*[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
            ...,
            dish[]->
        }
    } [0]`, {id}
    ).then(data =>{
      setRestaurants(data?.restaurants)
    })
  
    
  }, [])

  console.log(restaurants)
  
  return (
    <View>
      <View className='flex-row justify-between items-center px-4 mt-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color={'#00CCBB'}/>
      </View>
      <View>
        <Text className='text-xs text-gray-500 px-4'>{desc}</Text>
      </View>

      <ScrollView 
       horizontal
       contentContainerStyle={{paddingHorizontal: 15}}
       showsHorizontalScrollIndicator={false}
       className='pt-4' >

        {/* restaurant cards */}

        {restaurants?.map(restaurant => (

            <RestaurantCards 
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_desc={restaurant.short_desc}
            dishes={restaurant.dish}/>
        ))}

        

       

      </ScrollView >
    </View>
  )
}

export default FeaturedRow