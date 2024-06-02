import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';


export default function HomeScreen({ navigation }) {

  const [progress, setProgress] = React.useState(0);
  const [result, setResult] = React.useState("");
  
  // State and refs to manage time and stopwatch status 
  const [time, setTime] = React.useState(0); 
  const [running, setRunning] = React.useState(false); 
  const intervalRef = React.useRef(null); 
  const startTimeRef = React.useRef(0); 



  const onePress = () => 
  {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);


    

  


  }
  const twoPress = () => 
  {
    if(progress==1)
    {
      setProgress(2)
      
    }
 
  }
  const threePress = () => 
  {
    if(progress==2)
    {
      setProgress(3)
    }
 
  }
  const fourPress = () => 
  {
    if(progress==3)
    {
      setProgress(4)
    }
 
  }
  const fivePress = () => 
  {
    if(progress==4)
    {
      setProgress(5)
    }
 
  }
  const sixPress = () => 
  {
    if(progress==5)
    {
      setProgress(6)
    }
 
  }
  const sevenPress = () => 
  {
    if(progress==6)
    {
      setProgress(7)
    }
 
  }
  const eightPress = () => 
  {
    if(progress==7)
    {
      setProgress(8)
    }
 
  }

  const ninePress = () => 
  {
    if(progress==8)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }






    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap:8, margin:8 }}>
        <Text style={{margin:30, fontSize:20}}>Simple 3x3</Text>


              <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={onePress}>1</Button>  
                <Button mode="contained" onPress={twoPress}>2</Button>  
                <Button mode="contained" onPress={threePress}>3</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={fourPress}>4</Button>  
                <Button mode="contained" onPress={fivePress}>5</Button>  
                <Button mode="contained" onPress={sixPress}>6</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={sevenPress}>7</Button>  
                <Button mode="contained" onPress={eightPress}>8</Button>  
                <Button mode="contained" onPress={ninePress}>9</Button>  
            </View>
  

        <Button mode="contained" onPress={() => navigation.navigate('Score')}>Get Score</Button>  
        <Text>{time}s</Text> 
        <Text>{result}</Text>
      </View>
  
    );
  }