import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, Alert, StyleSheet, Text, Button, View, Pressable, } from 'react-native';
import Styles from './styles/Styles.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, Switch } from 'react-native-paper';




export default function App() {
  const [isSpecial, setSpecial] = useState(false);
  const [value, setValue] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [sum, setSum] = useState(0);
  const [radioval, setRadioval] = useState('male');
  const [paino, setPaino] = useState(0);
  const [isOn, setIsOn] =useState(false);
  const myStyle = isSpecial ? Styles.SpecialStyles : styles;


  function  addTogether() {
    const grams = (value * 0.33) * 8 * 4.5;
    const burning = paino / 10;
    const time = valueTwo;
    
    if (paino > 0) {

    if (radioval === 'male') {
      const tulos = (grams - burning * time) / (paino * 0.7);
      setSum(tulos.toFixed(1));
    }
    else {
      const tulos =(grams - burning * time) / (paino * 0.6);
      setSum(tulos.toFixed(1))
    }
    
    }
    else {
      Alert.alert('Weight is too small')
    }
  }

  return (
    <View style={[styles.container,myStyle]}>
      <Text style={Styles.header}>Alcometer</Text>
      <Text style={[Styles.result,myStyle]}>Weigth</Text>
      <TextInput 
        keyboardType='number-pad'     
        style={[Styles.textInput,myStyle]}   
        value={paino} 
        onChangeText={c => {
          setPaino(Number.parseInt(c)); // Use parsed value from onChangeText
      }}
      />
      <Text style={[Styles.result,myStyle]}>Bottles</Text>
      <NumericInput 
      onChange={v => setValue(v)}
      value = {value}
      minValue = {1}
      totalWidth={200}
      step={1}
      rounded
      textColor='black'
      rightButtonBackgroundColor='blue'
      leftButtonBackgroundColor='blue'
      iconStyle={{color: '#FFFFFF'}}
      />
       <Text style={[Styles.result,myStyle]}>Hours</Text>
      <NumericInput 
      onChange={b => setValueTwo(b)}
      value = {valueTwo}
      minValue = {1}
      totalWidth={200}
      step={1}
      rounded
      textColor='black'
      rightButtonBackgroundColor='blue'
      leftButtonBackgroundColor='#0000ff'
      iconStyle={{color: '#FFFFFF'}}
      />
      <RadioButton.Group onValueChange={newValue => setRadioval(newValue)} value={radioval}>
        <View style={radioStyle}>
          <RadioButton
          uncheckedColor='#d505fa'
          color='black'
          value='male'/>
          <Text style={[Styles.radioText,myStyle]}>Male</Text>
        </View>
        <View style={[radioStyle,myStyle]}>
          <RadioButton 
          color='black'
          uncheckedColor='#d505fa'
          value='female'/>
          <Text style={[Styles.radioText,myStyle]}>Female</Text>
        </View>
      </RadioButton.Group>
      <StatusBar style="auto" />
      <Text style={[Styles.result,myStyle]}>{sum} </Text>
      <Button 
      title="CALCULATE" 
      color={'blue'}
      onPress={addTogether}
      />
     <Switch
     value={isSpecial}
     onValueChange={ newValue =>setSpecial(newValue)}
     thumbColor="pink"
     trackColor={{false:'grey', true:'black'}}
     />
    </View>
  );
  }





const radioStyle={flexDirection: 'row', alignItems: 'center'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
