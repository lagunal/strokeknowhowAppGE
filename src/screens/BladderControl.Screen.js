import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";

const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');

class BladderControlScreen extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>

      //           <HeadingText>Bladder Control</HeadingText>

      //           <ImageContainer source={bladderImage} style={styles.image}/>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Ask a doctor or nurse for help in reestablishing bladder control. 
      //                      Brain and bladder need to keep dry on your schedule.
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. 
      //                      With greater control, urinate every 3 to 4 hours.  
      //           </MainText>

      //           <HeadingText>Bowel Control</HeadingText>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Help is needed in re-training the brain’s ability to control movements. At first, empty on a routine. 
      //                      Then, increase the time to relieve oneself. 
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, and low-fiber. 
      //           </MainText>

      //           <HeadingText>Drinking Water</HeadingText>

      //           <MainText>  
      //           {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. 
      //                     Do not use a straw.                 
      //           </MainText>

      //           <HeadingText>Swallowing</HeadingText>

      //           <ImageContainer source={swallowingImage}  />

      //           <MainText>  
      //               A speech therapist or nurse can help in retraining swallowing. 
      //           </MainText>
      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Act quickly in a swallowing emergency. Learn CPR. 
      //           </MainText>
      //           <MainText style={styles.bullets}>   
      //           {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
      //           </MainText>

      //           <HeadingText>Questions for a Doctor</HeadingText>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} What should we know about the stroke? High blood pressure? Diabetes?  Numbers to report? 
      //           </MainText>  
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Side effects of medicine to report?
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Has hospital report been sent to my other doctors?
      //           </MainText>

      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView >

                        <HeadingText>Blasenkontrolle</HeadingText>

                        <Image source={bladderImage} style={styles.image}/>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Fragen Sie einen Arzt oder eine Krankenschwester um Hilfe bei der Wiederherstellung der Blasenkontrolle. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Zuerst urinieren Sie jede Stunde, warten Sie nicht auf den Drang, bis das Wasserlassen unter Kontrolle haben. Bei besserer Kontrolle alle 3 bis 4 Stunden urinieren.  
                        </MainText>

                        <HeadingText>Wiedererlangung der Darmkontrolle</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Hilfe ist erforderlich, um die Fähigkeit des Gehirns und Bewegungen zu kontrollieren und neu zu trainieren. Zuerst leeren in regelmaessiger Routine. Dann erhöhen Sie den Zeitabstand, um sich zu erleichtern. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Verstopfungen sind eine Folge von Schlaganfall, die auch durch bestimmte Medikamente, Alterung, Inaktivität und faserarmes Essen verursacht werden.  
                        </MainText>

                        <HeadingText>Wasser trinken</HeadingText>

                        <MainText>  
                        {`\u2022`} Wir sind auf das Trinken von Wasser angewiesen, um zu leben. Nach einem Schlaganfall kann das Schlucken schwierig sein, trinken Sie oft Wasser, um Austrocknung zu vermeiden. Verwenden Sie keinen Strohhalm.                  
                        </MainText>

                        <HeadingText>Schlucken</HeadingText>

                        <Image source={swallowingImage} style={styles.imageDefault} />

                        <MainText>  
                          Ein Sprachtherapeut oder eine Krankenschwester kann bei der Umschulung helfen. 
                        </MainText>
                        <MainText style={styles.bullets}>
                        {`\u2022`} Handeln Sie schnell bei einem Schluck-Notfall. Lernen Erste Nothilfe. 
                        </MainText>
                        <MainText style={styles.bullets}>   
                        {`\u2022`} Nach dem Essen, nach Essen in den Wangen, unter der Zunge oder am oberen Gaumen schauen.              
                        </MainText>

                        <HeadingText>Fragen an Ihren Arzt</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Was sollten wir über den Schlaganfall wissen? Bluthochdruck? Diabetes? 
                        </MainText>  
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Nebenwirkungen der Medikamente zu melden?
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Wurde mein Krankenhausbericht an meinen Hausarzt gesendet?
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
    image: {
      //width: 250,
      width: wp('80%'),
      height: 200,
      //marginTop: 5,
      alignSelf: 'center'
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
    bullets: {
      marginVertical: 5,
    },
  });

  

export default BladderControlScreen;