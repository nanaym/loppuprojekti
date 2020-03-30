import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements';

export default class HeaderTab extends Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}
