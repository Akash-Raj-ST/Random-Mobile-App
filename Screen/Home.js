import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React,{useRef, useState} from 'react'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { TapGestureHandler, State } from 'react-native-gesture-handler';


import Input from '../Categories/Input';

export default function Home() {
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    //const [data,setData] = useState([]);
    const [bg,setBG] = useState("white");


    const setMaxLimit = (value) => {
        if(value=="") value=0;
        setMax(parseInt(value));
    }

    const setMinLimit = (value) => {
        if(value=="") value=0;
        setMin(parseInt(value));
    }

    const randomValue = () => {
        setBG("#E7F6F2");
        var r;
        if(min > max){
            console.log("min > max");
            var new_min = max;
            var new_max = min;

            setMin(new_min);
            setMax(new_max);
            r = Math.floor(Math.random() * (new_max+1 - new_min) + new_min);
        }
        else{ 
            r = Math.floor(Math.random() * (max+1 - min) + min);
        }

        setValue(r);
        // var prev_data = data;
        // prev_data.push(r);
        // if(prev_data.length>=10) prev_data = prev_data.slice(1,11);
        // setData(prev_data);

        setTimeout(() =>setBG("white"),70);
    }

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container,{backgroundColor:bg}]}>
                   
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
            </TouchableWithoutFeedback>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-around",
    },
    random:{
        fontSize:wp("50%"),
        textAlign:"center",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button:{
        backgroundColor: "black",
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
    },
    data:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:wp("5%"),
        backgroundColor:"#E7F6F2",
    },
    data_item:{
        fontSize:wp("5%"),
        fontWeight:"bold",
        padding: 5,
    }
})