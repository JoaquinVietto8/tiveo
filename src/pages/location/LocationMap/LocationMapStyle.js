import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  locationMap__mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  locationMap__headerContainer: {
    width: "100%",
    height: 90,
    backgroundColor: "#F5F5F5",
    position: "absolute",
    zIndex: 1,
    top: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  locationMap__backButton: {
    width: 70,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
