import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Request = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.mainContainer,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          <Text style={{ fontSize: 20 }}>Solicitar trabajador</Text>
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
            <Pressable style={styles.date_selectButton}></Pressable>
            <Pressable style={styles.date_selectButton}></Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    width: "48%",
    height: 50,
    borderRadius: 7,
    backgroundColor: "#FFCB13",
  },
});

export default Request;
