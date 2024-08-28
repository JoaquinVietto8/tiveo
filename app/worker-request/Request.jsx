import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RightNow from "../../assets/svgs/work-request/right-now";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../mapStyle";
import { mapConfig } from "../mapConfig";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Request = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const sheetRef = useRef(null);
  const snapPoints = [120, 320];

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <GestureHandlerRootView style={styles.gestureHandler}>
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
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
        </View>

        <BottomSheet ref={sheetRef} snapPoints={snapPoints} index={1}>
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.detailsContainer}>
              <Text style={{ fontSize: 16 }}>Mi ubicacion:</Text>
              <View style={styles.locationContainer}>
                <Text
                  style={{ flexShrink: 1, fontSize: 17, fontWeight: "bold" }}
                >
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
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    position: "absolute",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 15,
    marginBottom: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCB13",
    width: "100%",
    height: "100%",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  gestureHandler: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 20,
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
