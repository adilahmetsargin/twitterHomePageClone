import React from 'react';
import { Text, View } from 'react-native';
import { TweetType } from '../../../../types';
import styles from './styles'
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons'

export type FooterContainerProps = {
    tweet: TweetType
}


const Footer = ({ tweet }: FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Feather name={"message-circle"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfComments}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"retweet"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
        <View style={styles.iconContainer}>
            <AntDesign name={"hearto"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"share-google"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
    </View>
)

export default Footer;