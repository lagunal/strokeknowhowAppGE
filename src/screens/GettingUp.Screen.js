import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage2 = require('../assets/skin-care2.png');

class GettingUpScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>
      //       <HeadingText>Kufungisisa {`\n`}
      //       Thinking too much/depressed in Zimbabwe</HeadingText>

      //       <ImageContainer source={kufungisisaImage} />

      //       <MainText>
      //       After my stroke, depression hit me hard. I am the youngest lawyer in the court, suddenly I could not see what my future held. 
      //       </MainText>
      //       <MainText>  
      //       My wife continued my care until she had to return to her job for our income. Then my uncle and a neighbor came.
      //       </MainText>

      //       <MainText>
      //       Three things that helped me: 
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} The love of my wife and children. 
      //       </MainText>

      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} My best friend since childhood challenged me to reach for greater independence. 
      //       </MainText>

      //       <MainText style={[styles.bullets, {marginBottom: 0}]}>  
      //       {`\u2022`} From a group of athletes with disabilities I learned an important lesson: ‘Don’t let anyone take away your role in the family, and the responsibilities you can handle.
      //       </MainText>

      //       <PictureLegend >&mdash; R.W., Zimbabwe, Africa</PictureLegend>

      //       <ImageContainer source={skinImage} />

      //       <MainText style={{marginBottom: 0}}>
      //       There’s no telling who or what it will be that gives you the will and determination to go forward— 
      //       your openness that counts. 
      //       It could be your wife or husband, children, God, friends of many years, or people you meet with similar experiences to yours.  
      //       </MainText>
      //       <PictureLegend >&mdash; Bill</PictureLegend>

      //       <HeadingText>Getting Up {`\n`} When Feeling Down</HeadingText>
      //       <MainText>
      //         Advice from people who’ve been there:
      //       </MainText>

      //       <MainText>
      //       {`\u2022`} Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative ones.
      //       </MainText>

      //       <MainText>
      //       {`\u2022`} Be around people who make you feel good about yourself.  Meet at a
      //           stroke club and aphasia group. Look for a family touched by stroke, can make a difference.
      //       </MainText>

      //       <MainText>
      //       {`\u2022`} Sadness, impatience, loss, love, come with one another. 
      //           Feelings are all valid, and a reaction of what you've been through. 
      //       </MainText>           
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                      <HeadingText>Depression</HeadingText>

                            
                      <Image source={skinImage2} style={styles.imageGetting}/>

                      <MainText style={{marginBottom: 0}}>
                      Es ist nicht zu sagen, wer oder was kommen wird, um Ihnen den Willen und die Entschlossenheit zu geben, vorwärts zu gehen - Ihre Offenheit ist es, die zählt.
                      Es könnte Ihre Frau oder Ihr Ehemann sein, Ihre Kinder, Gott, Freunde, oder Leute, die ähnliche Erfahrungen wie Sie erlebt haben.  
                      </MainText>
                      <PictureLegend >&mdash; William</PictureLegend>

                      <HeadingText>Kufungisisa {`\n`} (Traurigkeit in Simbabwe)</HeadingText>

                      <Image source={kufungisisaImage} style={styles.imageDefault}/>

                      <MainText>
                      Nach meinem Schlaganfall hat mich die Depression schwer getroffen. Ich bin der jüngste Anwalt bei Gericht, plötzlich konnte ich nicht mehr sehen, was meine Zukunft bereit hielt. 
                      </MainText>
                      <MainText>  
                      Meine Frau teilte meine Sorgen, bis sie für unser gemeinsames Auskommen zu ihrem Job zurückkehren musste. Dann kamen mein Onkel und ein Nachbar.
                      </MainText>

                      <MainText>
                      Drei Dinge haben mir geholfen: 
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Die Liebe meiner Frau und meiner Kinder. 
                      </MainText>

                      <MainText style={styles.bullets}>  
                      {`\u2022`} Mein bester Freund forderte mich heraus, nach einer größerern Unabhängigkeit zu streben. 
                      </MainText> 

                      <MainText style={[styles.bullets, {marginBottom: 0}]}>  
                      {`\u2022`} Bei einer Gruppe von Athleten mit Behinderung habe ich eine wichtige Lektion gelernt: "Lassen Sie niemanden Ihre Rolle in der Familie und die Verantwortlichkeiten die Sie selbst bewältigen können, wegnehmen.
                      </MainText>

                      <PictureLegend >&mdash; R.W., Zimbabwe, Afrika</PictureLegend>




                      <HeadingText>Aufstehen, wenn man sich nicht gut fühlt</HeadingText>
                      <MainText>
                      Tipps von Leuten, die selbst in dieser Situation waren:
                      </MainText>

                      <MainText>
                      {`\u2022`} Stress kommt von Dingen, die wir uns selbst einreden. Ersetzen Sie negative für positive "Selbstgespräche".
                      </MainText>

                      <MainText>
                      {`\u2022`} Umgeben sie sich mit Menschen, die Sie dazu bringen, sich gut zu fühlen. Treffen Sie sich mit anderen Menschen in einem Schlaganfall Club und Aphasie Gruppe. Sich auf die Suche nach einer Familie, die selbst von Schlaganfall betroffen ist, kann einen grossen Unterschied machen.
                      </MainText>

                      <MainText>
                      {`\u2022`} Traurigkeit, Ungeduld, Verlust, Liebe, kommt alles Gleichzeitig auf Sie zu. All diese Gefühle haben eine Gültigkeit und sind Reaktionen auf das, was Sie durchgemacht haben. 
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
    imageGetting: {
      width: wp('90%'),
      height: 180,
      alignSelf: 'center',
      marginTop: hp('5%'),
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center' 
    },
  });

  

export default GettingUpScreen;