import React from 'react';
import {Pressable, Text, View} from "react-native";
import {styles} from "./SearchBarStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
 return (
     <View style={styles.home__search__container}>
         <View style={styles.home__search__subContainer}>
             <Pressable style={styles.home__search__button}>
                 <Ionicons name="search-outline" size={24} color="black" />
                 <Text style={styles.home__search__text}>
                     Buscar...
                 </Text>
             </Pressable>
         </View>
     </View>
 )
}

export default SearchBar