import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                
            }}
        />
        <Tabs.Screen
            name='create'
            options={{
                title: 'Create',
                
            }}
        />
        <Tabs.Screen
            name='explore'
            options={{
                title: 'Explore',
                
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: 'Profile',
                
            }}
        />
    </Tabs>
  )
}

export default _layout