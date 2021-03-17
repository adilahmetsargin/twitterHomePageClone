import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, View } from 'react-native';
import Colors from '../constants/Colors';

import ProfilePicture from '../components/ProfilePicture';
import React, {useState} from 'react'


export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");

    const onPostTweet = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="close" size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture image={"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f"} />
                <TextInput
                value= {tweet}
                onChangeText={setTweet}
                    multiline={true}
                    style={styles.tweetInput}
                    placeholder={"what's happening ?"} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white'

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    tweetInput: {
        marginLeft: 10,
    }


});
