import React from "react"
import {View,Box, Text,NativeBaseProvider,ScrollView } from "native-base"
import { ZItemCard } from "../components";

const ZHome = () => {
    return (
        <ScrollView backgroundColor="blue.400"  >
        <View mt={4} >
        <Box mt={1} width={'95%'} alignSelf="center" ><ZItemCard/></Box>
        <Box mt={1} width={'95%'} alignSelf="center" ><ZItemCard/></Box>
        <Box mt={1} width={'95%'} alignSelf="center" ><ZItemCard/></Box>
        <Box mt={1} width={'95%'} alignSelf="center" ><ZItemCard/></Box>
        <Box mt={1} width={'95%'} alignSelf="center" ><ZItemCard/></Box>
        </View>
        </ScrollView> 
      
    );
  }
  
  export default ZHome;