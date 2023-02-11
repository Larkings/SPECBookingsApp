import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import * as MailComposer from 'expo-mail-composer';

LocaleConfig.locales['nl'] = {
  monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul.', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  dayNames: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
  dayNamesShort: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
};

function CalendarScreen({ navigation }) {
  LocaleConfig.defaultLocale = 'nl';
  const [selected, setSelected] = useState('');

  const offerteAanvraag = () => {

  }

return (
  <View>
    <Text style = {styles.selectedDate}>Selected Date: {selected}</Text>
    <Calendar
    onDayPress={day => setSelected(day.dateString)}
    markedDates={{ [selected]: { selected: true } }}
    hideExtraDays ={true}
    />
    <View style = {styles.offerteButton}>
      <Button title="Vraag offerte aan" onPress= {()=> offerteAanvraag()} />
    </View>    
  </View>
  );
}
  const styles = StyleSheet.create({
    selectedDate:{
      color: "white",
      paddingBottom: 10,

    },
    offerteButton: {
      top: 15,
      padding: 10,
      height: 60,
      backgroundColor: "lightgrey",
      borderRadius: 20,
    }
  });
export default CalendarScreen;



