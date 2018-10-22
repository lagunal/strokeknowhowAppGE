
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


class NewDayScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  render() {
    // if (this.props.homeScreen === true) { 
    //   return (
    //     <View style={styles.container}>
        
    //       <StatusBar
    //           barStyle="light-content"
    //       />    
  
    //       <ImageContainer source={require('../assets/home.png')} />  
    //       <MainText style={{marginBottom: 0}}>    
    //           I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
    //           I overheard the word ‘stroke,’ and realized they were talking about me. 
    //           Out of the hospital in five days: I could stand, not walk.
    //           Insurance paid for a handful of physical therapy. NOW WHAT?
    //       </MainText>
    //       <PictureLegend >&mdash; Mike</PictureLegend>    
          
    //       <HeadingText>A New Day</HeadingText>
          
    //       <ImageContainer source={require('../assets/newDay.png')} />
          
    //       <MainText style={styles.bullets}>
    //           {`\u2022`} It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. Lowers the capacity of heart’s pumping rate, reduces lung capacity, alters blood pressure, increases chance 
    //           of pneumonia. 
    //       </MainText>
    //       <MainText style={styles.bullets}>  
    //           {`\u2022`} Do slow stretches in bed to ease stiffness. Roll from side to side. 
    //       </MainText>
    //       <MainText style={styles.bullets}>  
    //           {`\u2022`} Before moving take your time, avoid quick changes to avoid becoming dizzy.  
    //       </MainText>
  
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
      
        <StatusBar
            barStyle="light-content"
        />    

        <ScrollView>

                        <Image source={require('../assets/home.png')} style={styles.imageDefault}/>  

                        <MainText style={{marginBottom: 0}}>    
                          Ich war Sportjournalist bei einer großen Zeitung, während der Hauptverkehrszeit erlitt ich einen Schlaganfall in einer New Yorker U-Bahn hatte. Im Krankenwagen hörte ich das Wort "Schlaganfall" und erkannte, dass sie über mich sprachen. Nach fünf Tagen kam ich aus dem Krankenhaus: Ich konnte stehen, aber nicht gehen. Die Versicherung zahlte nur wenige Termine bei der Physiotherapie. Was nun?
                        </MainText>
                        <PictureLegend style={{marginRight: wp('10%') }}>&mdash; Mike</PictureLegend>    
                        
                        <HeadingText>Ein Neuer Tag</HeadingText>
                        
                        <Image source={require('../assets/newDay.png')} style={styles.imageDefault}/>
                        
                        <MainText style={styles.bullets}>
                            {`\u2022`} Es ist wichtig, jeden Tag aufzustehen und sich anzuziehen. Komplette Bettruhe degeneriert den Körper, senkt die Pumpleistung des Herzens, reduziert die Lungenkapazität, verändert den Blutdruck und erhöht die Wahrscheinlichkeit einer Lungenentzündung. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Machen Sie langsame Dehnungen, um die Steifigkeit zu verringern. Rollen Sie von einer Seite zur anderen Seite.
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Bevor Sie sich bewegen, nehmen Sie sich Zeit, vermeiden Sie schnelle Änderungen, damit es ihnen nicht schwindelig wird.   
                        </MainText>
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,

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


export default NewDayScreen;