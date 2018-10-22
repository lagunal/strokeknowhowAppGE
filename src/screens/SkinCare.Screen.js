import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import ImageContainer from "../components/UI/ImageContainer";

const skinImage = require('../assets/skin-care1.png');

class SkinCareScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>
      //       <HeadingText>Skin Care</HeadingText>

      //       <ImageContainer source={skinImage} />

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Check skin every day for redness, and injury – especially when skin is fragile, poor circulation, diabetic.
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Pressure sore or bruise requires immediate attention for medication and treatment.
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Pressure sores, skin breakdown occur from infrequent turning, changing positions.  
      //       </MainText>
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                       <HeadingText>Hautpflege</HeadingText>

                      <Image source={skinImage} style={styles.imageDefault} />

                      <MainText style={styles.bullets}>
                      {`\u2022`} Überprüfen Sie die Haut jeden Tag auf Rötungen und Verletzungen - besonders bei empfindlicher Haut, schlechter Durchblutung oder Diabetikern.
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Druckgeschwüre oder Prellungen erfordern sofortige Aufmerksamkeit und müssen Medikamentös und behandelt werden.
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Nehmen Sie <Text style={{textDecorationLine: 'underline'}}>mindestens alle zwei Stunden</Text> im Bett  eine andere Position ein für eine längere Zeit. 
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Helfer müssen <Text style={{textDecorationLine: 'underline'}}>anheben, nicht über das Tuch ziehen</Text> um Reibungsverletzungen zu vermeiden.  
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Druckgeschwüre, Hautschädigung treten durch seltenes Drehen, Ändern von Positionen auf  
                      </MainText>
          
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
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default SkinCareScreen;