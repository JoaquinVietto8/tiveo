import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import RightNow from "../../assets/svgs/work-request/right-now";
import Schedule from "../../assets/svgs/work-request/schedule";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../../components/map/mapStyle";
import { mapConfig } from "../../components/map/mapConfig";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Jardineria from "../../assets/svgs/home/gardening";

const formatPrice = (price) => {
  if (price === null) {
    return "Pago no registrado";
  }
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Request = ({ navigation }) => {
  const sheetRef = useRef(null);
  const snapPoints = [225, 500];
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  const handleSheetChange = (index) => {
    setCurrentSnapIndex(index); // Actualiza el estado cuando cambia la posición
  };

  const renderContent = () => {
    if (currentSnapIndex === 1) {
      return (
        <View>
          <View style={styles.header_detailsContainer}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Solicitar trabajador
            </Text>
            <View style={styles.detailsContainer}>
              <View style={styles.serviceContainer}>
                <Jardineria />
                <Text
                  style={{
                    marginLeft: 7,
                    fontSize: 16,
                  }}
                >
                  Jardineria
                </Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {formatPrice("1000")}
                </Text>
                <Text style={{ fontSize: 14, color: "#8A8A8A" }}>
                  Precio de reserva
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Pressable
              style={[
                styles.date_selectButton,
                { backgroundColor: nowButtonColor },
              ]}
              onPress={() => setSelectedButton("now")}
            >
              <RightNow />
              <Text>Ahora mismo</Text>
            </Pressable>

            <Pressable
              style={[
                styles.date_selectButton,
                { backgroundColor: scheduleButtonColor },
              ]}
              onPress={() => setSelectedButton("schedule")}
            >
              <Schedule />
              <Text>Programado</Text>
            </Pressable>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: "bold" }}>Describe tu problema</Text>
            <TextInput
              style={styles.descriptionInput}
              maxLength={200}
              placeholderTextColor="#8A8A8A"
              selectionColor={"#228dff"}
              cursorColor="black"
              multiline={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
            <Text style={styles.charCount}>
              {description.length}/{maxLength}
            </Text>
          </View>
        </View>
      );
    } else if (currentSnapIndex === 0) {
      return (
        <View style={styles.simplifiedContainer}>
          <View style={styles.simplified}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RightNow />
              <View style={styles.simplified_schedule}>
                <RightNow />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {formatPrice("1000")}
            </Text>
          </View>
        </View>
      );
    }
  };

  const [selectedButton, setSelectedButton] = useState("now");
  const [nowButtonColor, setNowButtonColor] = useState("#FFCB13");
  const [scheduleButtonColor, setScheduleButtonColor] = useState("#EEEEEE");

  useEffect(() => {
    if (selectedButton === "now") {
      setNowButtonColor("#FFCB13");
      setScheduleButtonColor("#EEEEEE");
    } else {
      setNowButtonColor("#EEEEEE");
      setScheduleButtonColor("#FFCB13");
    }
  }, [selectedButton]);

  const [description, setDescription] = useState("");
  const maxLength = 200;

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
          onChange={handleSheetChange}
        >
          <BottomSheetView style={styles.contentContainer}>
            {renderContent()}
          </BottomSheetView>
        </BottomSheet>
        <View style={styles.confirmContainer}>
          <View style={styles.paymentContainer}>
            <View>
              <Text>Efectivo</Text>
            </View>
            <Icon name="keyboard-arrow-right" size={29} color="#000" />
          </View>
          <View style={styles.search_workerContainer}>
            <Pressable style={styles.search_workerButton}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Buscar trabajador
              </Text>
            </Pressable>
          </View>
        </View>
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
    shadowOffset: { width: 0, height: 0 },
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
    paddingTop: 10,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header_detailsContainer: {
    borderBottomWidth: 1,
    width: "100%",
    borderColor: "#D8D8D8",
    alignItems: "center",
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 16,
    height: 70,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceContainer: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
    height: 55,
    borderRadius: 7,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  descriptionContainer: {
    marginTop: 15,
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  descriptionInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 60,
  },
  charCount: {
    marginTop: 5,
    textAlign: "right",
    color: "#8A8A8A",
  },
  simplifiedContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  simplified: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  simplified_schedule: {
    backgroundColor: "#FFCB13",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    height: 31,
    width: 37,
  },
  confirmContainer: {
    borderTopWidth: 0.6,
    borderTopColor: "#000",
    width: "100%",
    height: 130,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  },
  paymentContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 15,
  },
  search_workerContainer: {
    width: "100%",
  },
  search_workerButton: {
    width: "100%",
    backgroundColor: "#000",
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Request;
