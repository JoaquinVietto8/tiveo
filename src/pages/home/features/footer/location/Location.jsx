import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./LocationStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LocationContext } from "../../../../../context/LocationContext";

const Location = () => {
  const { location } = useContext(LocationContext);

  return (
    <View style={styles.home__bottomSheet__location__container}>
      <View style={styles.home__bottomSheet__location__buttonContainer}>
        <Pressable style={styles.home__bottomSheet__location__button}>
          <Text
            style={styles.home__bottomSheet__location__text}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {location.address_components[1].short_name}{" "}
            {location.address_components[0].short_name}
          </Text>
          <Icon name="keyboard-arrow-down" size={29} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

export default Location;
