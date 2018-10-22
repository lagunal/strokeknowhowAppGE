import React from 'react';
import { View, Text } from 'react-native';


const DetailToolkit = (props) => (
   
    <View>
        <Text>{`\u2022`} {props.instructions}</Text>
        <Text>{`\u2022`} Sie können das Wort in das Tastaturmikrofon Ihres Mobiltelefons sagen.</Text>
        <Text>{`\u2022`} Klicken Sie auf Speichern, um Informationen zu speichern.</Text>
    </View>
);

export default DetailToolkit;