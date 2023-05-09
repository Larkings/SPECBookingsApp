

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, DatePickerIOS} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import * as MailComposer from 'expo-mail-composer';

LocaleConfig.locales['nl'] = {
  monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul.', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  dayNames: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
  dayNamesShort: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
};


function CalendarScreen({ navigation, artistname }) {
  LocaleConfig.defaultLocale = 'nl';
  const [selectedDate, setSelectedDate] = useState('');
  const [isButtonAvailable, setButtonIsAvailable] = useState(false);
  const [isMailAvailable, setMailsIsAvailable] = useState(false);

  useEffect(() => {
    async function checkAvailability(){
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setMailsIsAvailable(isMailAvailable);
    }
    checkAvailability();
  }, []);
  

  const offerteAanvraag = () => {

    if(isMailAvailable){
      MailComposer.composeAsync({
        subject: " Offerte Aanvraag voor "+ artistname +"!",
        body: " Ik wil graag op de datum "+ selectedDate +" de artiest " + artistname + " boeken voor een evenement.",
        recipients: ["lloyd.larbi@hva.nl"],
      })
    } else {
      alert(" No mail application available")
    }
  }

return (
  <View>
    <Text style = {styles.selectedDate}>Selected Date: {selectedDate}</Text>
    <Calendar
    onDayPress={day => {
      setSelectedDate(day.dateString)
      setButtonIsAvailable(true)}
    }
    markedDates={{ [selectedDate]: { selectedDate: true } }}
    hideExtraDays ={true}
    />
    <View style = {styles.offerteButton}>
      {isButtonAvailable ? <Button title="Vraag offerte aan" onPress= {offerteAanvraag} /> : <Text> Kies een beschikbare datum.</Text>}
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




