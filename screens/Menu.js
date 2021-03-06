import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import { Dimensions } from 'react-native';
import HeaderTab from '../navigation/HeaderTab'

//lista ravintoloista, osoitteista, kotivisuista sekä niiden lounsaslistoista
const list = [
    { name: "Factory Keilaranta", subtitle: "Keilaranta 6", lunchLink: "https://www.lounaat.info/lounas/ravintola-factory-keilaranta/espoo", uri: "https://ravintolafactory.com/lounasravintolat/ravintolat/espoo-keilaranta/" },
    { name: "Lucy in the Sky", subtitle: "Keilaniementie 1", lunchLink: "https://www.lounaat.info/lounas/lucy-in-the-sky/espoo", uri: "https://www.lucyinthesky.fi/lucy-lunch" },
    { name: "Amica Let\'s Play", subtitle: "Keilaranta 15", lunchLink: "https://www.lounaat.info/lounas/amica-lets-play/espoo", uri: "https://www.amica.fi/ravintolat/ravintolat-kaupungeittain/espoo/lets-play/" },
    { name: "Ravintola Keilalahti", subtitle: "Keilaranta 5", lunchLink: "https://www.lounaat.info/lounas/keilaniemi-ravintolat/espoo", uri: "https://vadelmacatering.fi/lounas#lounaslista" },
    { name: "Sodexo Keilaranta", subtitle: "Keilaranta 1", lunchLink: "https://www.lounaat.info/lounas/be-keilaranta/espoo", uri: "https://www.sodexo.fi/ravintolat/espoo/keilaranta-1" }
];
//navigoinnissia näkyvä iconi
const TabIcon = (props) => (
    <Ionicons
        name={'ios-restaurant'}
        size={35}
        color={props.focused ? '#660066' : 'darkgrey'}
    />
)
export default class Menu extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };
    renderContent(l) {
        console.log('renderContent kutsuttu')
        return (
            <WebView source={{ uri: l }} />
        );
    }
    //klikin jälkeen avautuva functio jonka tehtävä on palauttaa lounaslista kyseiselle elementille
    onOpen(l) {
        console.log("onOpen klikattu")
        console.log(l)
        return Linking.openURL(l);
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderTab />
                <Text style={styles.title}>Links to menus:</Text>
                <Text style={styles.text}>(Opens in a browser)</Text>
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                            bottomDivider
                            chevron
                            onPress={() => this.onOpen(l.uri)}
                        />
                    ))
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: Dimensions.get('window').width,
        marginVertical: Dimensions.get('window').height
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#5C5C5C',
        marginTop: 20,
        marginLeft: 20
    },
    text: {
        fontSize: 16,
        color: '#5C5C5C',
        margin: 20
    }
});
