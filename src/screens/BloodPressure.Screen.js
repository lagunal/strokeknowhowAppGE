import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';


import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const physicalIcon = require('../assets/Formulario_Terapia_Fisica_Image.jpg');

class BloodPressureScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    handlePhysical = () => {
      this.props.navigator.push({
        screen: "StrokeApp.PhysicalToolkitScreen",
      });
    }

    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>

      //       <HeadingText>Blood Pressure</HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Higher (systolic) pressure during a heartbeat. 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Lower (diastolic) pressure is between beats. 
      //       </MainText>
      //       <MainText style={styles.bullets}>   
      //       {`\u2022`} Normal Blood Pressure Less than 120 and less than 80.
      //       </MainText>
            
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Elevated 120-129 and less than 80. 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} High Blood Pressure Hypertension stage 1 130-139 or 80-89.
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} High blood Pressure Hypertension stage 2   140 or higher or 90 or higher.
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Hypertension crisis 
      //                  Consult your doctor immediately higher than 180 and/or higher than 120
      //       </MainText>

      //       <HeadingText>Testing Blood Sugar </HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Blood glucose test is used for diabetes. Results are used to regulate medications, diet.  
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} When to test? Numbers to report.  
      //       </MainText>
            
            
      //       <HeadingText>Physical Therapists</HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} How to continue physical therapy?  
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Exercises to do? How? How often? 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} How long?
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Benefits? Purpose?
      //       </MainText>

      //       <LinkToolkitWrapper 
      //         text={'Share Interactive Physical Therapy Toolkit with family. Click toolkit.'}
      //         source={physicalIcon}
      //         onPress={this.props.pressPhysical ? this.props.pressPhysical : this.handlePhysical}
      //       />
   
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                       <HeadingText>Blutdruck</HeadingText>

                        <MainText style={styles.bullets}>
                              {`\u2022`} Systolischer Druck (S) ist der höchste Druck während eines Herzschlags. 
                              </MainText>
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Diastolische Druck (D) ist der niedrigste Druck zwischen den Herzschlägen.
                              </MainText>
                              <MainText style={styles.bullets}>   
                              {`\u2022`} Normaler Blutdruck, weniger als 120 (S) und weniger als 80 (D).
                              </MainText>
                              
                              <MainText style={styles.bullets}>
                              {`\u2022`} Erhöht zwischen 120-129 (S) und weniger als 80 (D).
                              </MainText>
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Bluthochdruck. Bluthochdruckzustand 1, 130-139 (S) oder 80-89 (D).
                              </MainText>
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Bluthochdruck. Bluthochdruckzustand 2, 140 oder höher (S) oder 90 oder höher (S).
                              </MainText>
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Hypertonie Krise: Fragen Sie sofort Ihren Arzt, mehr als 180 (S) oder mehr als 120 (D).
                          </MainText>

                        <HeadingText>Blutzucker testen</HeadingText>

                        <MainText style={styles.bullets}>
                        {`\u2022`} Der Blutzuckertest wird bei Diabetes verwendet. Die Ergebnisse werden verwendet, um Medikamente und Diät zu regulieren.  
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Fragen Sie nach, wann Sie testen muessen und welche Zahlen Sie melden möchten.  
                        </MainText>


                        <HeadingText>Fragen für den Physiotherapeuten</HeadingText>

                        <MainText style={styles.bullets}>
                        {`\u2022`} Wie setzt man die Physioherapie Zuhause fort?  
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Welche Übungen sind notwnedig? Wie oft? 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Für wie lange? Leistungen? Zweck?
                        </MainText>

                        <LinkToolkitWrapper 
                          text={'Teilen Sie das Physiotherpie Interaktive Toolkit mit Ihrer Familie (klicken Sie unten)'}
                          source={physicalIcon}
                          onPress={this.handlePhysical}
                        />

            </ScrollView>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    
  });

  

export default BloodPressureScreen;