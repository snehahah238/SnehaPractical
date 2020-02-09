import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    TouchableWithoutFeedback
} from 'react-native';

// Import Styles
import styles from '../styles/styles';

import { dh, dw } from '../styles/dhdw';

function GroceryList(props) {

    const [text, setText] = useState("");

    const [upimage, setUpimage] = useState(require("../images/up.png"));
    const [downimage, setDownimage] = useState(require("../images/down.png"));

    const [extraarray, setExtraarray] = useState([]);

    const [arraydata, setArraydata] = useState([
        { id: 1, name: "Bakery and Bread", image: upimage, islike: true },
        { id: 2, name: "Meat and Sea Food", image: downimage, islike: true },
        { id: 3, name: "Pasta and Rice", image: upimage, islike: false },
        { id: 4, name: "Frozen Foods", image: downimage, islike: false },
    ]);

    const [data, setData] = useState([
        { id: 1, name: "Bakery and Bread", image: upimage, islike: true },
        { id: 2, name: "Meat and Sea Food", image: downimage, islike: true },
        { id: 3, name: "Pasta and Rice", image: upimage, islike: false },
        { id: 4, name: "Frozen Foods", image: downimage, islike: false },
    ]);

    function useForceUpdate() {
        const [, setTick] = useState(0);
        const update = useCallback(() => {
            setTick(tick => tick + 1);
        }, [])
        return update;
    }


    const forceUpdate = useForceUpdate();

    const onImagepress = (index) => {

        let targetPost = data[index - 1];

        targetPost.islike = !targetPost.islike;

        data[index - 1] = targetPost;

        setExtraarray(data)

        // var result = data.sort(function(a, b) {
        //     return b.islike - a.islike
        //   })
          
          //console.log(result)

        forceUpdate();

        console.log("likedIsss", targetPost)

    }


    const SearchFilterFunction = (text) => {
        //passing the inserted text in textinput
        const newData = arraydata.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        setData(newData)
        setText(text)
    }

    const renderItem = (item) => {
        //Item sparator view
        return (
            <View style={{ alignItems: "center", marginTop: 10 }}>

                <View style={{ height: dh(8), width: dw(80), borderColor: "gray", borderRadius: 10, borderWidth: 0.5, flexDirection: "row" }}>

                    <View style={{ flex: 2, padding: 15, }}>

                        <View style={{ paddingLeft: 10 }}>

                            <Text style={{ textAlign: "left" }}>{item.name}</Text>

                        </View>

                    </View>

                    <View style={{ flex: 0.5, padding: 10 }}>


                        <TouchableOpacity

                            onPress={onImagepress.bind(props, item.id)}

                            style={{ height: dh(5), width: dw(10) }}>

                            <Image source={item.islike ? require("../images/up.png") : require("../images/down.png")} resizeMode={"contain"} style={{ height: dh(5), width: dw(10) }}></Image>

                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );
    };

    return (
        // Main Container
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}>

                <TextInput
                    placeholder="Search product" placeholderTextColor={"black"}
                    onChangeText={text => SearchFilterFunction(text)}
                    value={text}
                    style={styles.searchTextInput}>
                </TextInput>

            </View>


            <View style={{ flex: 1.5, marginBottom: dh(5) }}>

                <FlatList
                    data={data}
                    legacyImplementation={true}
                    renderItem={({ item }) => (
                        renderItem(item)
                    )}
                    extraData={extraarray}
                   
                    style={{ marginTop: 10 }}
                    keyExtractor={(item, index) => item.id}
                />

            </View>

        </SafeAreaView>
    )

}

// Export Main function or class
export default GroceryList;