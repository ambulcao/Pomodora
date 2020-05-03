import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  banner: {
    alignSelf: "flex-end",
  },

  title: {
    color: "#1C354F",
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: "Poppins-Light",
    textAlign: "center",
    maxWidth: 300,
    marginTop: 75,
    marginBottom: 50,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: "#FFB2B2",
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});
