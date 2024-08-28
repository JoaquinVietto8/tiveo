import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RightNow from "../../assets/svgs/work-request/right-now";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../mapStyle";
import { mapConfig } from "../mapConfig";

const Request = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.mainContainer}>
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: -34.603684,
          longitude: -58.381559,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        {...mapConfig}
      ></MapView>
      <View
        style={{
          ...styles.container,
          paddingBottom: insets.bottom,
          paddingTop: insets.top,
        }}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={{ fontSize: 16 }}>Mi ubicacion:</Text>
          <View style={styles.locationContainer}>
            <Text style={{ flexShrink: 1, fontSize: 17, fontWeight: "bold" }}>
              Marcelo T de Alvear 360
            </Text>
            <MaterialIcons
              name={"keyboard-arrow-down"}
              size={34}
              color="black"
            />
          </View>
          <View style={styles.dateContainer}>
            <Pressable style={styles.date_selectButton}>
              <RightNow />
              <Text>Ahora mismo</Text>
            </Pressable>
            <Pressable style={styles.date_selectButton}></Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    position: "absolute",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  arrowContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  dateContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  date_selectButton: {
    flexDirection: "row",
    width: "48%",
    height: 50,
    borderRadius: 7,
    backgroundColor: "#FFCB13",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

export default Request;
