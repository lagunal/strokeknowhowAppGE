import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";
import HeaderToolkit from '../../components/UI/HeaderToolkit';
import PhysicalRow from "../../components/Toolkits/Physical/PhysicalRow";
import PhysicalDetail from "../../components/Toolkits/Physical/PhysicalDetail";
import SubHeadingText from '../../components/UI/SubHeadingText';
import jsonData from '../../assets/json/physicalToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class PhysicalToolkit extends Component {

    constructor(props){
      super(props);
      this.state = { 
        isLoading: true,
        data: [],
        currentItem: null,
        user: [],
      }
    };

    //get data from rest API
    async componentDidMount() {
      //get the id from logged user
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
      try {
          const data = await ajax.getToolkit(this.state.user.id, 'physical');
          const dataValue = data.value;
          var dataToolkit = [];
          if (dataValue === null) {//if toolkit is new (no data from fetch)
             dataToolkit = jsonData; //assign "empty" json to data for toolkit
          } else {
            dataToolkit = dataValue; //assign existing data from toolkit
          }
          this.setState({ 
            isLoading: false, 
            data: dataToolkit,
          });
      } catch(error) {
        console.log(error);
      }
    
    }

    //function to navigate to the detail information
    setCurrentItem = (item, keyId) => {
        this.setState({
          currentItem: {
            activity: item.activity,  
          },
          keyId: keyId
        });
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        })
    }

    //loop for rendering the items row of the toolkits using physicalRow component
    renderItems(times, day) {
      const items = [];
      for (let i=1; i <= times; i++) {
          items.push(
              <PhysicalRow
                  activity={this.state.data[day + 'Activity' + i]}
                  keyId={[`${day}Activity${i}`]}
                  onItemPress={this.setCurrentItem}
              />
          );
      }
      return items;
    }

    render() {
        const background = '#bad2ef';

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator size='large' />
            </View>
          )
        }

        if(this.state.currentItem){
          return(
            <View style={{flex: 1, padding: 20}}>
               <PhysicalDetail item={this.state.currentItem} 
                                  keyId={this.state.keyId}
                                  data={this.state.data} 
                                  onPress={this.saveData}
                                  userId={this.state.user.id} 
                                  token={this.state.user.token}
                                  
                                 />
            </View>
          )
        }

        return (
          <View style={styles.container}>
          <BodyScroll>
            <View style={{flex: 1}}>
                
                <HeaderToolkit 
                        title='Physiotherpie Interaktive Toolkit'
                        directions1='prechen Sie oder tippen Sie'
                        directions2='Notieren Sie ihre Übungen'
                        directions3='Tag und Zeit'
                        directions4='Speichern'        
                        instructions="Drücken Sie ein Feld, um Informationen zu ändern."
                        style={{fontSize: wp('4.3%')}}
                />

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Montag</Text>
                      </View>
                      {this.renderItems(6, 'monday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Dienstag</Text>
                      </View>
                      {this.renderItems(6, 'tuesday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Mittwoch</Text>
                      </View>
                      {this.renderItems(6, 'wednesday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Donnerstag</Text>
                      </View>
                      {this.renderItems(6, 'thursday')}
                  </View>  

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Freitag</Text>
                      </View>
                      {this.renderItems(6, 'friday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Samstag</Text>
                      </View>
                      {this.renderItems(6, 'saturday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Sonntag</Text>
                      </View>
                      {this.renderItems(6, 'sunday')}
                  </View>

            </View>

          </BodyScroll>
          </View>         
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    logoImage: {
      width: '100%',
    },
    titleMed: {
        fontSize: hp('2%'),
        paddingVertical: hp('9%'),
        fontWeight: 'bold',
        alignSelf: 'center'
     
    },
    containerGrid: {
      //backgroundColor: '#1749FF',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cell: {
      flex: 1,
      borderColor: 'black',
      borderWidth: 1,
      height: hp('20%'),
      //width: wp('9.5%'),
    },

});

  

export default PhysicalToolkit;