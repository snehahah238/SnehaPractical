import React from 'react';
import { dh, dw } from './dhdw';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container: { flex: 1 },

    loginTextInput:{
        textAlign: "center",
         width: dw(80), 
         height: dh(10),
          borderBottomWidth: 1, 
          borderBottomColor: "black", 
          fontSize: dh(3)
    },

    searchTextInput:{
        shadowColor: "#000",paddingLeft:20,fontSize:dh(3),
        height: dh(8), width: dw(80), borderColor: "black", borderRadius: 15, marginTop: dh(8),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }

})