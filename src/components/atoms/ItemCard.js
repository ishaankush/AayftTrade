import React from "react"
import {View, Text,NativeBaseProvider,Box,AddIcon} from "native-base"


const ZItemCard = () => {
    return (
        <Box bgColor="blue.100" height={20} flexDirection="row" shadow={9} >
         <Box position="absolute" left={4} > <Text fontSize={32} >Bitcoin</Text> </Box>
         <Box position="absolute" right={4} > <Text fontSize={36} >40657</Text>  </Box>
        </Box>
    );
  }
  
  export default ZItemCard;