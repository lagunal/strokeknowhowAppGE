import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
    AsyncStorage,
    Text
  } from 'react-native';
import { connect } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";
import HeaderToolkit from '../../components/UI/HeaderToolkit';
import RowRender from "../../components/Toolkits/Medications/RowRender";
import MedicationDetail from "../../components/Toolkits/Medications/MedicationDetail"
import { selectItem } from '../../store/actions/index';
import SubHeadingText from '../../components/UI/SubHeadingText';

import jsonData from '../../assets/json/medicationsToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';


const logoImage = require('../../assets/logo-header.jpg');

class MedicationsToolkit extends Component {

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
          const data = await ajax.getToolkit(this.state.user.id, 'medication');
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
                medicine: item.medication,
                time: item.time,
                monday: (item.monday),
                tuesday: (item.tuesday),
                wednesday: (item.wednesday),
                thursday: (item.thursday),
                friday: (item.friday),   
                saturday: (item.saturday),  
                sunday: (item.sunday),                              
              },
              keyId: keyId,
        });
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        })
    }

    //loop for rendering the medicines row of the toolkits using RowRender component
    renderMedications(times) {
      const medicines = [];
      let background = '';
      for (let i=1; i <= times; i++) {
          background = (i%2 == 0) ? '#bad2ef' : 'white';
          medicines.push(<RowRender 
                            medication={this.state.data['medicine' + i]} 
                            time={this.state.data['time' + i]} 
                            monday={this.state.data['monday' + i]} 
                            tuesday={this.state.data['tuesday' + i]} 
                            wednesday={this.state.data['wednesday' + i]} 
                            thursday={this.state.data['thursday' + i]} 
                            friday={this.state.data['friday' + i]} 
                            saturday={this.state.data['saturday' + i]} 
                            sunday={this.state.data['sunday' + i]} 

                            keyId={['medicine' + i ,
                                    'time' + i, 
                                    'monday' + i,
                                    'tuesday' + i,
                                    'wednesday' + i,
                                    'thursday' + i,
                                    'friday' + i,
                                    'saturday' + i,
                                    'sunday' + i
                                  ]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={background}
                            backgroundColorMedication={'#bad2ef'}/>);
      }
      return medicines;
    }
    
    

    render() {
    
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
               <MedicationDetail item={this.state.currentItem} 
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
                    title='Interaktive Medikamenten Toolkit'
                    directions1='Sprechen Sie oder tippen Sie'
                    directions2='Medikamente'
                    directions3='Wieviel'
                    directions4='Nach Einnahme abhaken'
                    directions5='Speichern'  
                    instructions="Drücken Sie ein Feld, um Informationen zu ändern."
                    //style={{fontSize: wp('4%')}}
                />

                <View style={styles.containerGrid}> 

                  <View style={[styles.cell, {flex: 2}]}>
                    <Text style={styles.titleCol}>Medikamenten Dosierung</Text>
                  </View>
                  <View style={styles.cell }>
                    <Text style={styles.titleCol}>Stunde</Text>
                  </View>
                  <View style={styles.cell}> 
                    <Text style={styles.titleCol}>Mon.</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Die.</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Mitt</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Don.</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Frei</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Sam.</Text>
                  </View> 
                  <View style={styles.cell}>
                    <Text style={styles.titleCol}>Son.</Text>
                  </View>

                </View>

                {this.renderMedications(15)}

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
     containerGrid: {
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
     },

     titleCol: {
       color: 'white',
       fontSize: hp('2%'),
       alignSelf: 'center'
     },

     cell: {
       flex: 1,
       backgroundColor: '#000099',
       borderColor: 'black',
       borderWidth: 1,
       height: hp('6%'),
     },

 });

const mapStateToProps = state => {
  return {
    //toolkits:
    currentItem: state.toolkits.currentItem,
  };
};    

const mapDispatchToProps = dispatch => {
  return {
    selectItem: (item) => dispatch(selectItem(item)),
  };
};

//export default connect(mapStateToProps, mapDispatchToProps) (MedicationsToolkit);
export default MedicationsToolkit;