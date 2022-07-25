import {View, TextInput } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Input(props){

    return(
        <View style={{marginVertical:5}}>

            <TextInput 
                style={{
                    borderWidth:2,
                    marginHorizontal:wp("2%"),
                    paddingHorizontal:wp("2%"),
                    fontWeight:'bold',
                    fontSize:hp("4%"),
                    backgroundColor:'white',
                    color:"#857474",
                    borderColor:"black",
                    borderRadius:wp("2%"),
                    width:wp("30%"),
                    textAlign:"center",
                }}
                value={props.attValue.toString()}
                onChangeText={(value)=>props.setValue(value)}
                keyboardType={props.type}
            />
        </View>
    )
}