import React, { useState } from 'react';
import { View, DatePickerIOS, Text } from 'react-native';

const DatePickerScreen = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <Text>Selected Date: {date.toString()}</Text>
      <DatePickerIOS
        date={date}
        onDateChange={newDate => setDate(newDate)}
      />
    </View>
  );
};

export default DatePickerScreen;