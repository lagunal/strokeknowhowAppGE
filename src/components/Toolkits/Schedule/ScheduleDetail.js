import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import BodyScroll from "../../UI/BodyScroll";
import Button from "../../UI/Button";
import DetailToolkit from '../../UI/DetailToolkit';
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class ScheduleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.item.time,
            activity: this.props.item.activity,
        }
        console.log(this.props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
            var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.time : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.activity : data[key];
                }
            }
            let jsonData = JSON.stringify(data);
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'schedule');
            this.props.onPress();//calls the onPress event from parent                
    }


  

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (selectedDate) => {
      this.setState({
       time: selectedDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      });
      this._hideDateTimePicker();
    };

  
    
    render(){

        return(
            <BodyScroll>

            <DetailToolkit 
                instructions={'Geben Sie Ihren Zeitplan ein und wählen Sie die Uhrzeit aus.'}
            />

            <View style={{flex: 1}}>    
                                
                    <MainText><SubHeadingText>Aktivität</SubHeadingText>  </MainText>
                    <TextInput
                            multiline = {true}
                            numberOfLines = {4} 
                            value={this.state.activity} 
                            style={[styles.inputStyleToolkit, {height: hp('20%')}]}
                            onChangeText={activity => this.setState({ activity } )} 
                            underlineColorAndroid={'transparent'}/>
                    
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                            <View style={styleComponent.dayContainer}> 
                                <MainText><SubHeadingText>Stunde</SubHeadingText>  </MainText>
                                <MainText>{this.state.time} </MainText>
                            </View>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode='time'
                        titleIOS={'wähle eine Stunde'}
                        //minuteInterval={30}
                        //date={new Date()}
                    />

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                    Speichern
                    </Button>
           
            </View>
            </BodyScroll>
        )
    }

}

const styleComponent = StyleSheet.create({
    dayContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        
    },
 
});

export default ScheduleDetail;

