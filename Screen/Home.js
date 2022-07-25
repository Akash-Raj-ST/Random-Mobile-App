import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from '../Categories/Input';

export default function Home() {
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1);

    const setMaxLimit = (value) => {
        if(value=="") value=0;
        setMax(parseInt(value));
    }
    const setMinLimit = (value) => {
        if(value=="") value=0;
        setMin(parseInt(value));
    }
    const randomValue = () => {
        console.log(min+" "+max);
        console.log(typeof(min))
        if(min > max){
            console.log("min > max");
            var new_min = max;
            var new_max = min;

            setMin(new_min);
            setMax(new_max);

            setValue(Math.floor(Math.random() * (new_max+1 - new_min) + new_min));
        }
        else setValue(Math.floor(Math.random() * (max+1 - min) + min))  ;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.random}>{value}</Text>

            <View style={styles.buttons}>
                <Input attValue={min} setValue={setMinLimit} placeholder="min" type="number-pad" />
                <Input attValue={max} setValue={setMaxLimit} placeholder="max" type="number-pad" />
            </View>
            
            <TouchableOpacity
                onPress={() => randomValue()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>S H O O T</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-around",
    },
    random:{
        fontSize:hp("40%"),
        textAlign:"center",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button:{
        backgroundColor: "blue",
        width: "50%",
        padding: 10,
        textAlign:"center",
        borderRadius: 10,
        alignSelf:"center",
    },
    buttonText:{
        color: "white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:wp("7%"),
    }
})