import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
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
  backButton: {
    width: 50,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  markerFixed: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -20,
    marginTop: -40, // Centra el marcador en la pantalla
  },
  bottomContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#F5F5F5",
    position: "absolute",
    bottom: 0,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    paddingTop: 20,
  },
  locationContainer: {
    marginTop: 10,
    marginBottom: 25,
    width: "100%",
    borderWidth: 1,
    borderColor: "#C8C8C8",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 6,
  },
  locationText: {
    fontFamily: "Inter-Medium",
    color: "#848484",
  },
});
