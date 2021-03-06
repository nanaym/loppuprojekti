import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, Button, StyleSheet, Picker, TextInput } from 'react-native';
import { Input, Divider } from 'react-native-elements';
import axios from 'axios';

export default class PostNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            restaurant: '',
            time: ''
        }
    }
    setName = (event) => {
        this.setState({ name: event.nativeEvent.text })
    }


    setRestaurant = (e) => {
        this.setState({ restaurant: e });

    }

    setTime = (e) => {
        this.setState({ time: e });
    }

    ButtonPress = (body = this.state) => {

        console.log(body)
        console.log("ButtonPress")

        if (body.name == '' || body.restaurant == '' || body.time == '') {
            alert('All fields must be filled')
        } else {
            axios.post(`https://lunchfriend.herokuapp.com/api/person`, body)
                .then((response) => {
                    console.log(response);
                    alert("Thank you for setting a new date :]]");
                    this.props.fetchAllRestaurants();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    render() {

        return (

            <View>
                <Text style={styles.title}>Set a new date!</Text>

                <Input style={styles.input}
                    placeholder='Enter name'
                    onChange={(text) => this.setName(text)}
                />

                <Picker style={{ marginLeft: 20, marginRight: 20 }}
                    selectedValue={this.state.restaurant}
                    onValueChange={(itemValue, itemIndex) => this.setRestaurant(itemValue)}>
                    <Picker.Item label="-- Choose restaurant --" value="empty" />
                    <Picker.Item label="Amica Let's Play" value="Amica Let's Play" />
                    <Picker.Item label="Factory" value="Factory" />
                    <Picker.Item label="Lucy in the Sky" value="Lucy in the Sky" />
                    <Picker.Item label="Ravintola Keilalahti" value="Ravintola Keilalahti" />
                    <Picker.Item label="Sodexo Keilaranta 1" value="Sodexo Keilaranta 1" />
                </Picker>
                <Picker
                    selectedValue={this.state.time}
                    style={{ marginLeft: 20, marginRight: 20 }}
                    onValueChange={(itemValue, itemIndex) => this.setTime(itemValue)}
                >
                    <Picker.Item label="-- Choose time --" value="empty" />
                    <Picker.Item label="10:30" value="10:30" />
                    <Picker.Item label="10:45" value="10:45" />
                    <Picker.Item label="11:00" value="11:00" />
                    <Picker.Item label="11:15" value="11:15" />
                    <Picker.Item label="11:30" value="11:30" />
                    <Picker.Item label="11:45" value="11:45" />
                    <Picker.Item label="12:00" value="12:00" />
                    <Picker.Item label="12:15" value="12:15" />
                    <Picker.Item label="12:30" value="12:30" />
                    <Picker.Item label="12:45" value="12:45" />
                    <Picker.Item label="13:00" value="13:00" />
                </Picker>

                <Button style={styles.button}
                    onPress={() => this.ButtonPress()}
                    title="Start a date"
                    color="#660066"
                />
                <Text style={styles.title}>Or click and join a date:</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        padding: 5,
        marginLeft: 50
    },
    input: {
        fontSize: 16
    },
    picker: {
        fontSize: 26
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#5C5C5C',
        margin: 20
    }
});