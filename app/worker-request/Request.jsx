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
import RightNow from "../../assets/svgs/work-request/right-now";
import Schedule from "../../assets/svgs/work-request/schedule";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../../components/map/mapStyle";
import { mapConfig } from "../../components/map/mapConfig";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Request = ({ navigation }) => {
  const sheetRef = useRef(null);
  const snapPoints = [120, 380];

  const [selectedButton, setSelectedButton] = useState("now");

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

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          index={1}
          style={styles.bottomSheet}
          handleIndicatorStyle={{ backgroundColor: "#D8D8D8" }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.detailsContainer}>
              <View style={styles.header_detailsContainer}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Solicitar trabajador
                </Text>
              </View>
              <View style={styles.dateContainer}>
                <Pressable
                  style={[
                    styles.date_selectButton,
                    selectedButton === "now"
                      ? styles.selectedButton
                      : styles.unselectedButton,
                  ]}
                  onPress={() => setSelectedButton("now")}
                >
                  <RightNow />
                  <Text>Ahora mismo</Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.date_selectButton,
                    selectedButton === "schedule"
                      ? styles.selectedButton
                      : styles.unselectedButton,
                  ]}
                  onPress={() => setSelectedButton("schedule")}
                >
                  <Schedule />
                  <Text>Programado</Text>
                </Pressable>
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
    backgroundColor: "#FFCB13",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  gestureHandler: {
    flex: 1,
  },
  bottomSheet: {},
  contentContainer: {
    flex: 1,
    paddingTop: 20,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header_detailsContainer: {
    borderBottomWidth: 1,
    width: "100%",
    borderColor: "#D8D8D8",
    alignItems: "center",
    paddingBottom: 10,
  },
  dateContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  date_selectButton: {
    flexDirection: "row",
    width: "48%",
    height: 50,
    borderRadius: 7,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#FFCB13", // Color amarillo
  },
  unselectedButton: {
    backgroundColor: "#D3D3D3", // Color gris
  },
});

export default Request;
