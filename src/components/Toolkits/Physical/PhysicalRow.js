import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import MainText from "../../UI/MainText";

const PhysicalRow = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity style={styles.cell} onPress={this.handlePress}>
                
            <Text style={styles.titleHour}>{props.activity}</Text>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    titleHour: {
      fontSize: hp('2%'),

    },
    cell: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      height: hp('20%'),
    },

});

export default PhysicalRow;

