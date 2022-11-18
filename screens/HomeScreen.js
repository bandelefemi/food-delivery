import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from './GlobalStyles'
import { ChevronDownIcon, UserIcon, SearchIcon, 
    AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'    
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'

export default function HomeScreen() {

   const navigation = useNavigation()
   const [featuredCategories, setFeaturedCategories] = useState([])
   
   useLayoutEffect(()=> {
    navigation.setOptions({
        headerTitle: 'femm',
        headerShown: false
    })
   }, [] )

   useEffect(() => {
     client.fetch(
        `*[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dish[]->
            }
        }`
     ).then(data => {
        setFeaturedCategories(data)
     })
   
   }, [])

//    console.log(featuredCategories)
   
  return (
    <View  className='bg-white pt-5 mt-5'>
      
        {/* {Header} */}


        <View className='flex-row pb-3 items-center mx-4 space-x-2' >


            <Image 
             source={{uri: 'https://links.papareact.com/wru'}}
             className='h-7 w-7 bg-gray-400 rounded-full p-4' />

             <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>
                    Deliver Now
                </Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color='#00ccbb'/>
                </Text>
             </View>
             <UserIcon size={35} color='#00ccbb'/>
        </View>

        {/* {search bar} */}

        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-row space-x-2 bg-gray-200 
            p-3 items-center flex-1 rounded-lg'>
                <SearchIcon color='gray' size={20}/>
                <TextInput 
                    placeholder='Food and Drinks'
                    keyboardType='default' />
            </View>

            <AdjustmentsIcon color='#00CCBB' />
        </View>

        {/* body */}

        <ScrollView 
           contentContainerStyle={{paddingBottom: 100}}
           className='bg-gray-100' >

            {/* categories */}

            <Categories />

            {/* Featured  */}

            {featuredCategories?.map((category)=> (
                <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                desc={category.short_desc}
             />
            ))}


        </ScrollView>
    </View>
  )
}

// style={GlobalStyles.droidSafeArea}