import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

function CalendarScreen({ navigation }) {
  const [selected, setSelected] = useState('');
  
  LocaleConfig.defaultLocale = 'en';

return (
  <View>
    <Text style = {styles.selectedDate}>Selected Date: {selected}</Text>
    <Calendar
    onDayPress={day => setSelected(day.dateString)}
    markedDates={{ [selected]: { selected: true } }}
    />
    <View style = {styles.kippetjes}>
      <Button title="Book artist" onPress= {()=> firebase.auth().signOut()} />
    </View>    
  </View>
  );
}
  const styles = StyleSheet.create({
    selectedDate:{
      color: "white",
      paddingBottom: 10,

    },
    kippetjes: {
      left: 100,
      bottom: 50,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 50,
      paddingRight: 50,
      height: 60,
      backgroundColor: "lightgrey",
      borderRadius: 20,
    }
  });
export default CalendarScreen;



