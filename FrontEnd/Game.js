import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';

const simplelist = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const randlist = simplelist.sort(() => Math.random() - 0.5)


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
    if(randlist[0]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[0]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[0]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[0]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[0]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[0]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[0]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[0]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[0]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
   


    

  


  }
  const twoPress = () => 
  {
    if(randlist[1]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[1]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[1]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[1]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[1]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[1]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[1]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[1]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[1]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }
  const threePress = () => 
  {
    if(randlist[2]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[2]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[2]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[2]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[2]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[2]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[2]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[2]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[2]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }
  const fourPress = () => 
  {
    if(randlist[3]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[3]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[3]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[3]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[3]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[3]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[3]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[3]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[3]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }
  const fivePress = () => 
  {
    if(randlist[4]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[4]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[4]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[4]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[4]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[4]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[4]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[4]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[4]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
  }
  const sixPress = () => 
  {
    if(randlist[5]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[5]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[5]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[5]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[5]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[5]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[5]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[5]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[5]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }
  const sevenPress = () => 
  {
    if(randlist[6]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[6]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[6]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[6]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[6]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[6]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[6]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[6]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[6]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }
  const eightPress = () => 
  {
    if(randlist[7]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[7]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[7]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[7]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[7]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[7]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[7]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[7]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[7]==9)
    {
      setProgress(9)
      setResult("Complete!")

        clearInterval(intervalRef.current); 
        setRunning(false); 
    }
 
  }

  const ninePress = () => 
  {
    if(randlist[8]==1)
    {
    setProgress(1)
    
    startTimeRef.current = Date.now() - time * 1000; 
        intervalRef.current = setInterval(() => { 
            setTime(Math.floor((Date.now() -  
            startTimeRef.current) / 1000)); 
        }, 1000); 
        setRunning(true);
    }
    else if(progress==1&&randlist[8]==2)
    {
      setProgress(2)
    }
    else if(progress==2&&randlist[8]==3)
    {
      setProgress(3)
    }
    else if(progress==3&&randlist[8]==4)
    {
      setProgress(4)
    }
    else if(progress==4&&randlist[8]==5)
    {
      setProgress(5)
    }
    else if(progress==5&&randlist[8]==6)
    {
      setProgress(6)
    }
    else if(progress==6&&randlist[8]==7)
    {
      setProgress(7)
    }
    else if(progress==7&&randlist[8]==8)
    {
      setProgress(8)
    }
    else if(progress==8&&randlist[8]==9)
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
                <Button mode="contained" onPress={onePress}>{randlist[0]}</Button>  
                <Button mode="contained" onPress={twoPress}>{randlist[1]}</Button>  
                <Button mode="contained" onPress={threePress}>{randlist[2]}</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={fourPress}>{randlist[3]}</Button>  
                <Button mode="contained" onPress={fivePress}>{randlist[4]}</Button>  
                <Button mode="contained" onPress={sixPress}>{randlist[5]}</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={sevenPress}>{randlist[6]}</Button>  
                <Button mode="contained" onPress={eightPress}>{randlist[7]}</Button>  
                <Button mode="contained" onPress={ninePress}>{randlist[8]}</Button>  
            </View>
  

        <Button mode="contained" onPress={() => navigation.navigate('Score')}>Get Score</Button>  
        <Text>{time}s</Text> 
        <Text>{result}</Text>
      </View>
  
    );
  }