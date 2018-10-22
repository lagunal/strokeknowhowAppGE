import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import SubHeadingText from "../components/UI/SubHeadingText";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import ImageContainer from "../components/UI/ImageContainer";

const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
const helpNeededIcon = require('../assets/helpneeded_german.png');
const weeklyScheduleIcon = require('../assets/Weekly_Schedule_German_image.jpg');

class WeeklyPlanScreen extends Component {
  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }


  handleHelpNeeded = () => {
      this.props.navigator.push({
        screen: "StrokeApp.HelpNeededToolkitScreen",
      });
  }
  handleSchedule = () => {
    this.props.navigator.push({
      screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  render() {
    // if (this.props.homeScreen === 'home') {
    //   return (
    //     <View style={styles.container}>

    //           <LinkToolkitWrapper 
    //             text={'Share Help Needed Toolkit with family. Click Toolkit.'}
    //             source={helpNeededIcon}
    //             onPress={this.props.pressHelp ? this.props.pressHelp : this.handleHelpNeeded}
    //           />
              
              
    //           <HeadingText>Let's Talk About Safety</HeadingText>
              

    //           <ImageContainer source={safetyImage} orientation={'portrait'} />

    //           <MainText>
    //               Pat became a wheelchair user after a car crash. 
    //               Her husband, Bill made their home safer and accessible.     
    //           </MainText>
    //           <MainText style={styles.bullets}>      
    //               {`\u2022`} To widen the door opening for Pat’s wheelchair, the molding was removed.    
    //           </MainText>
    //           <MainText style={styles.bullets}>      
    //               {`\u2022`} Light switches, toilet-tissue dispensers, towel racks to be easily reached were lowered. 
    //           </MainText>
    //           <MainText style={styles.bullets}>      
    //               {`\u2022`} A raised toilet makes transfers easier. 
    //               A grab bar, and on side of the toilet ensure safer transfers.   
    //           </MainText>
    //           <MainText style={styles.bullets}>      
    //               {`\u2022`} The mirrored medicine cabinet was lowered.   
    //           </MainText>
    //           <MainText>
    //               Falls are the #1 cause of home injuries. Wet bathroom floors lead 
    //               home injuries. Millions return to hospitals a month after discharge.     
    //           </MainText>

              
    //               <HeadingText>A Weekly Plan</HeadingText>
              

    //           <ImageContainer source={familyPlanImage} orientation={'portrait'} style={{height: hp('45%')}}/>
              
    //           <MainText>
    //               Rachel’s granddaughter shows her how to organize a weekly schedule. Tel Aviv, Israel.  
    //           </MainText>

               
    //             <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>
            
    //           <MainText style={styles.bullets}>      
    //               {`\u2022`} Keeping track of time organizes each day. Prioritize what you need to take place, and give it a time.  
    //           </MainText>
    //           <MainText style={styles.bullets}>  
    //               {`\u2022`} Have stimulating times, others in between, that are quiet — to sit down, nap, simply relax.    
    //           </MainText>

    //           <LinkToolkitWrapper 
    //             text={'Share Weekly Schedule Toolkit with family. Click toolkit'}
    //             source={weeklyScheduleIcon}
    //             onPress={this.props.pressSchedule ? this.props.pressSchedule : this.handleSchedule}
    //           />

    //         <MainText style={styles.bullets}>
    //         {`\u2022`} After a stroke, each family looks at the care, their living and medical expenses needed, and how each one will help.   
    //         </MainText>
    //         <MainText style={styles.bullets}> 
    //         {`\u2022`} Ask a physical therapist to evaluate the ability to move, talk, understand, handle personal care. 
    //         </MainText>
    //         <MainText style={styles.bullets}>
    //         {`\u2022`} A psychologist can evaluate the emotional affects, and ways the family can cope with the changes.
    //         </MainText>

          
    //       <HeadingText>
    //         Personal Cleanliness
    //       </HeadingText>
          

    //       <MainText style={styles.bullets}> 
    //       {`\u2022`} To prevent infection, protect skin, and for comfort, a loved one needs to be washed or bathed every day with warm water and soap. 
    //                 Dry, then massaged with soothing lotion. 
    //       </MainText>

    //       <MainText style={styles.bullets}>  
    //       {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
    //       </MainText>

    //     </View>
    //   );
    // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                 <LinkToolkitWrapper 
                      text={'Teilen Sie Notwendige Hilfe Interaktive Toolkit mit der Familie (klicken Sie unten)'}
                      source={helpNeededIcon}
                      onPress={this.handleHelpNeeded}
                    />

                    <HeadingText>Lassen Sie uns über Sicherheit sprechen</HeadingText>


                    <Image source={safetyImage} style={styles.imagePat}/>

                    <MainText>
                    Pat wurde nach einem Autounfall Rollstuhlfahrer. Ihr Ehemann machte das Zuhause sicherer und zugänglicher.      
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Um die Türöffnung für Pat’s Rollstuhl zu verbreitern, wurden die Formteile entfernt und die Scharniere ausgewechselt.     
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Lichtschalter, Toilettenpapierspender und Handtuchhalter wurden abgesenkt, um leicht erreichbar zu sein. 
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Eine erhöhte Toilette erleichterte die übertragung. Ein Haltegriff and der Seite der Toilette sorgt für eine sichere Uebertragung.   
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Der Spiegelschrank für die Medikamente wurde gesenkt.    
                    </MainText>
                    <MainText>
                        Stürze sind die häufigste Ursache von Verletzungen, besonders auf nassen Badezimmerböden beim Transfer. Viele kehren einen Monat nach der Entlassung in das Krankenhaus zurück.      
                    </MainText>


                    <HeadingText>Ein Wochenplan</HeadingText>


                    <Image source={familyPlanImage} style={styles.imageWeekly}/>

                    <MainText>
                    Rachels Enkelin zeigt ihr, wie man einen Wochenplan organisiert. Tel Aviv, Israel.  
                    </MainText>

                    
                      <SubHeadingText>Vorteile eines wöchentlichen Zeitplans</SubHeadingText>

                    <MainText style={styles.bullets}>      
                        {`\u2022`} Um den Überblick über die Zeit zu behalten, wird jeder Tag organisiert. Setzen Sie Prioritaeten, was Sie tun müssen, und geben Sie sich Zeit.  
                    </MainText>
                    <MainText style={styles.bullets}>  
                        {`\u2022`} Wechslen Sie anregende Zeiten, mit einem Zwischenspielen von ruhigen Zeiten, um zu sitzen, ein Nickerchen zu machen, sich zu entspannen.    
                    </MainText>

                    <LinkToolkitWrapper 
                      text={'Teilen Sie Wöchentlich Zeiteinteilung Interaktives Toolkit mit Ihrer Familie (klicken Sie unten)'}
                      source={weeklyScheduleIcon}
                      onPress={this.handleSchedule}
                    />

                    <MainText style={styles.bullets}>
                    {`\u2022`} Nach einem Schlaganfall betrachtet jede Familie die notwendige Pflege, ihre Lebens- und medizinischen Kosten und wie jeder hilft.   
                    </MainText>
                    <MainText style={styles.bullets}> 
                    {`\u2022`} Bitten Sie einen Physiotherapeuten, die Fähigkeit sich zu bewegen, zu sprechen, des Betreffenden zu beurteilen und wie er mit der persönlichen Pflege umgehen soll. 
                    </MainText>
                    <MainText style={styles.bullets}>
                    {`\u2022`} Ein Psychologe kann die emotionalen Auswirkungen und die Art und Weise, wie die Familie mit den Veränderungen umgeht, bewerten.
                    </MainText>


                    <HeadingText>
                    Persönliche Sauberkeit
                    </HeadingText>


                    <MainText style={styles.bullets}> 
                    {`\u2022`} Um eine Infektion zu verhindern, schützen Sie die Haut. Für das Wohlbefinden muss ein geliebter Mensch, jeden Tag mit warmem Wasser und Seife gewaschen oder gebadet werden. Gut abtrocknen, danach mit beruhigender Lotion einmassieren. 
                    </MainText>

                    <MainText style={styles.bullets}>  
                    {`\u2022`} Alle Familienmitglieder, Helfer müssen sich häufiger die Hände waschen - nach dem Bad, vor dem Essen usw.
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    imageWeekly: {
      width: 300,
      height: 200,
      alignSelf: 'center'
    },
    imagePat: {
      width: wp('60%'),
      height: 300,
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default WeeklyPlanScreen;