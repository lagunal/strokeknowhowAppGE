
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Linking, Image, Dimensions
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';

import ImageContainer from '../components/UI/ImageContainer';
import PictureLegend from '../components/UI/PictureLegend';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";


const familyImage = require('../assets/family.png');
const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
//const weeklyScheduleIcon = require('../assets/weekly-schedule-icon.png');
//const helpNeededIcon = require('../assets/help_needed_icon.png');
const medicationsImage = require('../assets/medications.png');
const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');
//const physicalIcon = require('../assets/physical-therapy-icon.png');
const skinImage = require('../assets/skin-care1.png');
const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage2 = require('../assets/skin-care2.png');
const brainImage = require('../assets/brain-body.png');
const emergencyIcon = require('../assets/emergency-station-icon.png');
const strokeLine = require('../assets/helpline-logo.png');
const bioImage = require('../assets/bio.jpg');
const weeklyScheduleIcon = require('../assets/Weekly_Schedule_German_image.jpg');
const helpNeededIcon = require('../assets/helpneeded_german.png');
const medicationIcon = require('../assets/Medication_German_Image.jpg');
const physicalIcon = require('../assets/Formulario_Terapia_Fisica_Image.jpg');

const THRESHOLD = 200;

class HomeScreen extends Component {

  constructor(props) {
      super(props);   
  }

  state = {
    videoAnimationPaused: true,
    //videoRobPaused: true,
    position: {
        start: null,
        end: null,
    },
    // positionVideoRob: {
    //     startRob: null,
    //     endRob: null,
    // }
  };

  handleVideoLayout = (e) => {
    const { height } = Dimensions.get("window");
    
    this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
  };

//   handleVideoLayoutRob = (e) => {
//     const { height } = Dimensions.get("window");
    
//     if (height > 600) {
//         this.state.positionVideoRob.startRob = 11300 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     } else {
//         this.state.positionVideoRob.startRob = 9800 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     }
//   };

  handleScroll = (e) => {
    
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.videoAnimationPaused;
    //const pausedRob = this.state.videoRobPaused;
    const { start, end } = this.state.position;
    //const { startRob, endRob } = this.state.positionVideoRob;
    // console.log('scroll ' + scrollPosition);
    // console.log('start ' + this.state.positionVideoRob.startRob);
    // console.log('end ' + this.state.positionVideoRob.endRob);

    //Video animation
    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ videoAnimationPaused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ videoAnimationPaused: true });
    }
    //Video Rob
    // if (scrollPosition > startRob && scrollPosition < endRob && pausedRob) {
    //     this.setState({ videoRobPaused: false });
    // } else if (scrollPosition < startRob || scrollPosition > endRob && !pausedRob) {
    //     this.setState({ videoRobPaused: true });
    // }
   // console.log(this.state.videoAnimationPaused);
  };  

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

  handleMedication = () => {
    this.props.navigator.push({
      screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }

  handlePhysical = () => {
    this.props.navigator.push({
      screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }

  handleEmergency = () => {
    this.props.navigator.push({
      screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }

//   handleFullScreen = () => {
//     this.player.seek(0);
//   }
//   handleFullScreenAnimation = () => {
//     this.player2.seek(0);
//   }

  playVideo = () => {
    this.player.presentFullscreenPlayer();
  }

  playVideoAnimation = () => {
    this.player2.presentFullscreenPlayer();
  }

//   handleOnLoadAnimation = () => {
//     this.player2.seek(2);
//     const paused = this.state.videoAnimationPaused;
//     this.setState({ paused: true });

//   };
//   handleOnLoadRob = () => {
//     this.player.seek(1);
//     const paused = this.state.videoRobPaused;
//     this.setState({ paused: true });

//   };

  render() {
    //const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <StatusBar
              barStyle="light-content"
          />  
          <ScrollView
          scrollEventThrottle={16} 
          onScroll={this.handleScroll}
          minimumZoomScale={1}
          maximumZoomScale={2}
          >
{/*************** New Day Screen  ********************************/}
                <View>
                        
                        <StatusBar
                            barStyle="light-content"
                        />    

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

                </View>

 {/*************** Moving Safely Screen  ********************************/}
                      <View>
                              <TouchableOpacity onPress={this.playVideoAnimation}>
                                  <View style={{padding: 20}}>
                                      <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>Berühren Sie Video, um den Vollbild-Player zu öffnen &rarr;</SubHeadingText></MainText>
                                      <Video
                                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                                        ref={(ref) => {
                                          this.player2 = ref
                                        }}       
                                        style={{height: 300}}                             
                                        rate={1}
                                        paused={this.state.videoAnimationPaused}
                                        onLayout={this.handleVideoLayout}
                                       // volume={1}
                                       // muted={false}
                                       // onLoad={this.handleOnLoadAnimation}
                                       // onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                                        //playInBackground={false}
                                        //playWhenInactive={false}
                                        resizeMode='contain'
                                        repeat
                                        />
                                  </View>
                              </TouchableOpacity> 

                              <HeadingText>Selbstschutz für Helfer</HeadingText>
                              
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Wenn Sie jemanden bewegen, halten Sie Ihre Hüften und Knie leicht gebeugt. Stehen Sie nah an der Person - zu weit weg belastet Ihren Rücken.  
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Stehen Sie mit Ihren Füßen leicht auseinander, einen Fuß vor dem anderen, um Ihr Gleichgewicht zu halten, verlagern Sie Ihr Gewicht, wenn es nötig ist.
                              </MainText>
                              <HeadingText>Teilen Sie die Pflege</HeadingText>

                              <Image source={familyImage} style={styles.imageDefault}/>

                              <MainText style={{marginBottom: 0}}>  
                              Als meine Frau Tina, einen Schlaganfall hatte, betraf dies unsere ganze Familie. Wir hatten alle eine Aufgabe zu erledigen − sogar die Kinder.
                              </MainText>
                              <PictureLegend >&mdash; Javier, Lima, Peru</PictureLegend>

                              
                                <HeadingText>Fragen, die sich die Familien stellt</HeadingText>
                              
                              <MainText style={styles.bullets}>
                                  {`\u2022`} Wer übernimmt die persönliche Pflege? Physiotherapie? Wann?
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Wer wird die Einkäufe tätigen und den Reinigungsservice teilen? Wann?
                              </MainText>
                              <MainText style={styles.bullets}>     
                                  {`\u2022`} Wer fährt mit zu Terminen beim Arzt und Therapien? 
                              </MainText>        
                    </View>

{/*************** Weekly Plan Screen  ********************************/}
                    <View>

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
                      text={'Teilen Sie Wöchentlich Programmieren Interaktive Toolkit mit Ihrer Familie (klicken Sie unten)'}
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

                    </View>



{/*************** Medications Screen  ********************************/}

                    <View>
                        <HeadingText>Das organisieren der Medikamente</HeadingText>

                        <Image source={medicationsImage} style={styles.imageDefault} />
                        
                        <MainText>
                        Ruth, M. 78, verwendet einen Pillen-Organisator und das Interaktive Medikamenten Toolkit. Ihre Tochter kann das Toolkit einsehen und kontrollieren ob die Mutter ihre Medikamente einnimmt.
                        </MainText>

                        <LinkToolkitWrapper 
                          text={'Teilen Sie das Interaktive Medikamenten Toolkit für Ihre Familie (klicken Sie unten)'}
                          source={medicationIcon}
                          onPress={this.handleMedication}
                        />
                    </View>     



{/*************** Bladder Control Screen  ********************************/}

                    <View>

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

                    </View>        


{/*************** Blood Pressure Screen  ********************************/}

                    <View>

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

                      </View>         


{/*************** Range of motion Screen  ********************************/}

                      <View>
                            <HeadingText>Bewegungsfreiheit und Bewegungsübungen</HeadingText>
                
                            <MainText>
                            Range-of-motion Übungen hält Knochen und Gelenke geschmeidig. Machen Sie die Übungen alleine oder zu zweit. 
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Machen Sie Übungen in einer langsamen, sanften Bewegung. Ein Helfer hält fest das Gelenk mit einer Hand, andere, um Bewegung zu führen. Helfer stoppen, wenn sich ein Gelenk nicht frei bewegt oder Unbehagen auftritt.  
                            </MainText>  
                            <MainText style={styles.bullets}>
                            {`\u2022`} Bewegung und Dehnung der Muskeln in einem geschwächten Arm und Bein mehrmals am Tag, um Kontrakturen zu vermeiden oder Muskelverkürzungen am Gelenk, die enge, schmerzhafte Bänder verursachen.
                            </MainText>          

                            <HeadingText>Körperpositionierung</HeadingText>
                            <MainText>
                            Zu jeder Zeit - ob im Bett liegend, sitzend oder gehend - ist eine gute Körperpositionierung für die Gesundheit des Körpers unerlässlich. Kontrakturen verhindern. 
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Die Position Ihres Kopfes beeinflusst den Muskeltonus von Rumpf, Armen und Beinen. Wenn nur auf eine Seite gedreht wird, stört das das Gleichgewicht und die Fähigkeit sich zu bewegen. 
                            </MainText>  
                            <MainText style={styles.bullets}>
                            {`\u2022`} Das Gewicht muss gleichmäßig verteilt sein. Verwenden Sie ein Kissen, um die abgesenkte Seite zu stützen. 
                            </MainText>   
                            <MainText style={styles.bullets}>
                            {`\u2022`} Um Ihr Schultergelenk an Ort und Stelle zu halten, stützen Sie Ihren Unterarm mit einem Kissen. Lassen Sie Ihre Schulter und Ihren Arm nach vorne strecken.
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Heben Sie das schwächere Handgelenk mit der gesunden Hand an, um den Arm nach vorne zu bringen. Halten Sie das Handgelenk gestreckt, Finger gerade wie möglich. 
                            </MainText>   
                            
                            <Link />

                      </View>     

{/*************** Skin Care Screen  ********************************/}

                      <View>
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
                      </View>           

{/*************** Getting Up Screen  ********************************/}

                      <View>
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
                      </View>           

{/*************** Brain Body Screen  ********************************/}

                      <View>

                              <HeadingText>Was ist Aphasie?</HeadingText>
                              
                              <MainText>
                              Aphasie ist ein Zustand, der es schwierig macht zu sagen, was man denkt, oder zu verstehen, was gesagt wird. Mehr als die Hälfte der Männer und Frauen nach einem Schlaganfall erleben diesen Zustand. 
                              </MainText>
                  
                              <MainText style={[styles.bullets, {textDecorationLine: 'underline'}]}>
                              {`\u2022`} Aphasie beeinflusst die Intelligenz nicht. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Das Weiterlernen ist im Gange: sprechen, lesen, schreiben, problemlösen. Dran bleiben, bis alles wieder zurückkommt, das man verloren hat.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Suchen Sie eine Aphasie-Gruppe oder eine Familie die ähnliche Erfahrungen gemacht hat. Das kann das Selbstvertrauen erhöhen und  Freundschaften fördern.  
                              </MainText>


                              <HeadingText>Gehirn / Körper Verbindung</HeadingText>
                              
                              <Image source={brainImage} style={[styles.imageDefault, {height: hp('50%')}]}/>
                              
                              <MainText>
                              Mein Arzt erzählte mir von Forschungen, die sich nach einem Schlaganfall erweisen, wenn ein bestimmter Bereich des Gehirns verletzt wird.
                              Aufgaben selbst erledigen, mehrmals wiederholen hilft. Sechs Monate lang benutzte ich meine schwächere und stärkere Hand gleichmässig, putzte meine Küchenfenster, sortierte Wäsche und polierte den Tisch. 
                              </MainText>
                              <MainText>
                              Mein Ziel war, meine rechte Hand zu öffnen und meine Finger zu bewegen. Ich blieb dran, sah aber keinen Unterschied. Eines Morgens griff ich nach einer Tasse Kaffee, plötzlich öffneten sich langsam die Finger meiner rechten Hand. Ich begann zu weinen und bewegte meine Finger weiter.
                              </MainText>
                  
                              <PictureLegend >&mdash; Madeline, Berlin, Deutschland</PictureLegend>
                  
                              <MainText>
                              Fügen Sie weitere Aufgaben hinzu, verwenden Sie beide Hände, wiederholen Sie es mehrmals. 
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Gegenstände falten, öffnen, wieder falten: Papierservietten, Kleidung.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Schneiden / schälen Sie Gemüse, Obst.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Polieren Sie das Besteck: waschen Sie Geschirr.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Knopf / Hemd aufknöpfen und zuknöpfen.
                              </MainText>
                  
                           
                        
                      </View>          


{/*************** Emergency Screen  ********************************/}

                    <View>
                            <LinkToolkitWrapper 
                              text={'Teilen Sie das Interaktive Notfall-Informationsstation Toolkit mit Ihrer Familie (klicken Sie unten)'}
                              source={emergencyIcon}
                              onPress={this.handleEmergency}
                            />

                            {/* <HeadingText style={{fontWeight: 'bold'}}>Don’t wait. Get help.</HeadingText> */}

                            <MainText style={styles.bullets}>
                            {`\u2022`} Wenn Sie glauben, dass es ein Notfall ist - ist es wahrscheinlich einer! Holen Sie sich sofort Hilfe.    
                            </MainText>      

                            <MainText style={styles.bullets}>
                            {`\u2022`} Schreiben Sie alle Informationen in das Interaktive Notfall-Informationsstation Toolkit.  
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} Halten Sie es griffbereit. 
                            </MainText>    

                            {/* <MainText style={styles.bullets}>
                            {`\u2022`} Do not hang up first: Wait for instructions. 
                            </MainText> 
                            
                            <View style={{height: 30}}></View>

                            <HeadingText >In Emergency</HeadingText>
                            
                            <Link />   */}

                            <HeadingText>Organisieren Sie sich</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Erwägen Sie, ein Notebook, ein Handy oder einen Computer zu nutzen – Machen Sie sich Notizen zu den Themen - Medikamente, Physiotherapie, Sprache, Ärzte, Therapeuten. 
                            </MainText>
                            <MainText style={styles.bullets}>    
                            {`\u2022`} Schreiben Sie alle Namen, Telefonnummern, Adressen von Ärzten, Therapeuten, Helfern, Familie und Nachbarn auf. 
                            </MainText>
                            <MainText style={styles.bullets}>   
                            {`\u2022`} Rechnungen speichern: Bezahlt und unbezahlt. Bewahren Sie Belege für Käufe in Bezug auf Ihre Gesundheitsversorgung, Dokumente der Versicherung und Steuern auf.       
                            </MainText>


                  </View>           

{/*************** Bio Screen  ********************************/}

                  <View style={{marginTop: 50}}>
                          <ImageContainer source={bioImage} orientation={'portrait'} style={[styles.image, {height: '100%'}]} />    

                          <MainText>
                          Als langjährige Aktivistin in der Behindertenrechtsbewegung und Autorin von mehr als einem Dutzend Büchern hat Florence Weiner hunderte von Männern und Frauen und deren Familien, die von Schlaganfall betroffen sind, interviewt. Sie teilt hier ihren Rat und auch auf der Webseite StrokeKnowHow.org., eine weltweite Schlaganfall-Gemeinschaft, basierend auf der Überzeugung, dass Menschen am besten von anderen Menschen lernen.   
                          </MainText>

                          <MainText>
                          Jeder Schlaganfall ist einzigartig. So wählen wir den Weg zurück ins Leben. Wenn Sie  hier Antworten, Motivation und Hoffnung finden, hat diese Arbeit ihren Zweck erfüllt.    
                          </MainText>
                          <MainText>Für Richard das hellste Licht.</MainText>
                  </View>       


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

  },
  bullets: {
    marginVertical: 5,
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
  imageWeekly: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  imageGetting: {
    width: wp('90%'),
    height: 180,
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  imagePat: {
    width: wp('60%'),
    height: 300,
    marginTop: hp('2%'),
    alignSelf: 'center'
  },
});


export default HomeScreen;