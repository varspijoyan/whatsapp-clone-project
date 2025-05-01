// highlights screen

import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Highlights() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Highlights</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Status</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.myStatusContent}>
          <Image
            style={styles.statusImg}
            source={require("../../assets/images/user.jpg")}
          />
          <Text style={styles.statusText}>My Status</Text>
        </View>
        <View style={styles.latestStatusContent}>
          <Text style={styles.latestText}>Latest</Text>
          <View style={styles.otherStatuses}>
            <Image
              source={require("../../assets/images/photo.webp")}
              style={styles.statusImg}
            />
            <Text style={styles.statusText}>WhatsApp</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  myStatusContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  statusImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  statusText: {
    fontWeight: "600",
    fontSize: 16,
  },
  mainContent: {
    flexDirection: "column",
    gap: 30,
  },
  latestStatusContent: {
    gap: 20,
  },
  otherStatuses: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  latestText: {
    fontWeight: "600",
    color: "grey",
  },
});
