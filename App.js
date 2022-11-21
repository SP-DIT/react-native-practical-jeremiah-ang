import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TwitterFeed from './components/TwitterFeed';

export default function App() {
    const [tweets, setTweets] = React.useState(['hello', 'byebye', 'so on...']);
    const [newTweet, setNewTweet] = React.useState('');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TwitterFeed tweets={tweets} />
            <View>
              <TextInput value={newTweet} onChangeText={function(value) {
                setNewTweet(value);
              }}></TextInput>
              <Button onPress={function() {
                setNewTweet('');
                setTweets([newTweet, ...tweets]);
              }} title={"Add Tweet"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
