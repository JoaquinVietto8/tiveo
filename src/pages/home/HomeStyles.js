import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  gestureHandler: {
    flex: 1,
  },
  container: {
    position: "absolute",
    width: "100%",
  },
  searchContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingTop: 20,
  },
  searchContainer2: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 40,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    justifyContent: "space-between",
    paddingRight: 7,
    alignItems: "center",
  },
  searchButton: {
    flex: 1,
    height: "100%",
    borderRadius: 40,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
  },
  servicesListContainer: {
    marginVertical: 10,
  },
  serviceButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 14,
    marginRight: 10,
    borderWidth: 0.5,
  },
  activeButton: {
    backgroundColor: "#FF9D00",
    borderColor: "#FF9D00",
  },
  inactiveButton: {
    borderColor: "#8D8D8D",
    backgroundColor: "rgba(255, 255, 255, 0.69)",
  },
  activeText: {
    fontFamily: "Inter-Medium",
    color: "#fff",
  },
  inactiveText: {
    fontFamily: "Inter-Regular",
    color: "#8D8D8D",
  },
  flatListContent: {
    paddingHorizontal: 20,
  },
  handleStyle: {
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  bottom_viewContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  locationContainer: {
    alignItems: "center",
    width: "100%",
  },
  locationButton: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 270,
  },
  locationText: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    overflow: "hidden",
    maxWidth: 215,
  },
  bottomTitle: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    paddingHorizontal: 20,
    color: "#8D8D8D",
    marginBottom: 10,
  },
  subtitleContainer: {
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomSubtitle: {
    fontSize: 17,
    fontFamily: "Inter-Bold",
  },
  bottomMore: {
    fontSize: 14,
    color: "#FF9D00",
    fontFamily: "Inter-Regular",
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
  cardView: {
    borderRadius: 10,
    marginRight: 15,
    width: 260,
    height: 220,
    backgroundColor: "#FFFFFF",
  },
  cardButton: {
    width: 260,
    height: 220,
    position: "relative",
  },
  card_headerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerPhoto: {
    width: 260,
    height: 110,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  card_favContainer: {
    position: "absolute",
    height: 40,
    width: 40,
    right: 5,
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 25,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 8,
  },
  infoType: {
    fontSize: 12,
    color: "#ACACAC",
    fontFamily: "Inter-Medium",
  },
  infoRating: {
    fontSize: 12,
    color: "#F1D000",
    fontFamily: "Inter-Medium",
  },
  info_totalRatings: {
    fontSize: 12,
    color: "#ACACAC",
    fontFamily: "Inter-Medium",
  },
  infoTitle: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    paddingHorizontal: 8,
    paddingTop: 6,
  },
  bottom_cardContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 8,
    flexDirection: "row",
  },
  addressView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    paddingLeft: 3,
    paddingBottom: 1,
  },
  addressText: {
    maxWidth: 140,
    fontSize: 11,
    fontFamily: "Inter-ExtraBold",
    color: "#ACACAC",
  },
  availableView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 28,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0, 255, 128, 0.14)",
    marginRight: 8,
  },
  availableText: {
    fontSize: 13,
    color: "#00EC7E",
    fontFamily: "Inter-SemiBold",
  },
  busyView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 28,
    paddingHorizontal: 8,
    backgroundColor: "rgba(255, 157, 0, 0.14)",
    marginRight: 8,
  },
  busyText: {
    fontSize: 13,
    color: "#FF9D00",
    fontFamily: "Inter-SemiBold",
  },
});
