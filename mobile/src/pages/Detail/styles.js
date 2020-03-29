import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: 700,
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    color: "#737380"
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff"
  },

  heroTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#73730",
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 40,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 700
  }
});
