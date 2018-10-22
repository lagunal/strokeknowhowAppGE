import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import BodyScroll from '../components/UI/BodyScroll';


class ContentsScreen extends Component {

        
  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

  }


  handlePress = (screenName, screenTitle) => {
    this.props.navigator.push({
        screen: screenName,
        title: screenTitle
    });
  }
  
  render() {

    return (
      <View style={styles.container}>

        <BodyScroll>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.NewDayScreen', 'Ein Neuer Tag')}>
                <View style={styles.item}>
                    <Icon style={styles.icon} name="ios-home" size={30} md="md-home"></Icon>    
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Ein Neuer Tag   
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MovingSafelyScreen','Sich sicher bewegen')}>
                <View style={styles.item}> 
                    <Icon style={styles.icon} name="ios-alert" size={30} md="md-alert"></Icon>  
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Sich sicher bewegen
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.WeeklyPlanScreen','Ein Wochenplan')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="md-calendar" size={30} md="md-calendar"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Ein Wochenplan
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MedicationsScreen','Medikamente')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-medkit" size={30} md="md-medkit"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Medikamente
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BladderControlScreen','Blasenkontrolle')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-man" size={30} md="md-man"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Blasenkontrolle
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BloodPressureScreen','Blutdruck')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-heart" size={30} md="md-heart"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Blutdruck
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.RangeMotionScreen','Bewegungsfreiheit')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-walk" size={30} md="md-walk"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Bewegungsfreiheit
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.SkinCareScreen','Hautpflege')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-finger-print" size={30} md="md-finger-print"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Hautpflege
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.GettingUpScreen','Aufstehen')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-happy" size={30} md="md-happy"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Aufstehen
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BrainBodyScreen','Gehirn / Körper')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-body" size={30} md="md-body"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Gehirn / Körper
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.EmergencyScreen','Notfall')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-warning" size={30} md="md-warning"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                        Notfall
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

        </BodyScroll>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: '#b30000'
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  icon: {
      marginHorizontal: 10,
      color: 'white',
  }
});


export default ContentsScreen;