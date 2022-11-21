import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TwitterFeed from './components/TwitterFeed';

export default function App() {
    const [tweets, setTweets] = React.useState([]);
    const [newTweet, setNewTweet] = React.useState('');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TwitterFeed tweets={tweets} />
            <View>
                <TextInput
                    value={newTweet}
                    onChangeText={function (value) {
                        setNewTweet(value);
                    }}
                ></TextInput>
                <Button
                    onPress={function () {
                        fetch('https://randomuser.me/api/')
                            .then((response) => response.json())
                            .then((body) => {
                                const fullName = body.results[0].name.first + ' ' + body.results[0].name.last;
                                const username = body.results[0].login.username;
                                const picture = body.results[0].picture.thumbnail;
                                setTweets([
                                    {
                                        fullName,
                                        username,
                                        picture,
                                        text: newTweet,
                                    },
                                    ...tweets,
                                ]);
                                setNewTweet('');
                            });
                    }}
                    title={'Add Tweet'}
                />
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
