import { FlatList, Text } from 'react-native';
/**
 * <TwitterFeed tweets={["hello", "byebye", "so on..."]} />
 */
export default function TwitterFeed(props) {
    return (
        <FlatList
            data={props.tweets}
            renderItem={function ({ item }) {
                return <Text>{item}</Text>;
            }}
        ></FlatList>
    );
}
