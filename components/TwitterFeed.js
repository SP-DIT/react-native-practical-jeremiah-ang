import { FlatList, Text } from 'react-native';
import Tweet from './Tweet';
/**
 * <TwitterFeed tweets={["hello", "byebye", "so on..."]} />
 */
export default function TwitterFeed(props) {
    return (
        <FlatList
            data={props.tweets}
            renderItem={function ({ item }) {
                return <Tweet tweet={item} />;
            }}
        ></FlatList>
    );
}
