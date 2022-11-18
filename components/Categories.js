import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingHorizontal: 15, 
       paddingTop: 10 }} >
        {/* category card */}
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test1'/>
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test2'/>
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test3'/>
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test3'/>
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test3'/>
        <CategoryCard ImgUrl='https://links.papareact.com/gn7' title='Test3'/>

    </ScrollView>
  )
}

export default Categories