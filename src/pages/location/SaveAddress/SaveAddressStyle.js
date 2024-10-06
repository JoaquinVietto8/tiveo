import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    height: 90,
  },
  backButton: {
    width: 70,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingBottom: 30,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    height: 48,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 15,
    fontFamily: "Inter-Regular",
    backgroundColor: "#FFF",
  },
  inputContainer2: {
    fontFamily: "Inter-Regular",
    height: 48,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    justifyContent: "center",
    width: "60%",
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  inputContainer3: {
    minHeight: 70,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  phone_Container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  selectCountry: {
    width: "30%",
    height: 48,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C8C8C8",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "68%",
    height: 48,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C8C8C8",
    paddingHorizontal: 15,
  },
  countryCodeText: {
    marginRight: 8,
    fontFamily: "Inter-Regular",
  },
  flag: {
    fontSize: 20,
  },
  phoneInput: {
    height: 23,
    flex: 1,
    fontFamily: "Inter-Regular",
  },
  bottomContainer: {
    height: 100,
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    width: "100%",
  },
  flag: {
    fontSize: 20,
  },
  countryName: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
  },
  countryCode: {
    fontSize: 16,
    color: "#888",
    fontFamily: "Inter-Regular",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E0E0E0",
  },
  saveButton: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9D00",
    width: "100%",
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontFamily: "Inter-SemiBold",
  },
  textLater: {
    fontFamily: "Inter-SemiBold",
    textDecorationLine: "underline",
  },
});
