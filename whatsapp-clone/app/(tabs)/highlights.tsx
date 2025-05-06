// highlights screen

import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Highlights() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  const handleCameraPermission = async () => {
    if (!permission) return;

    if (!permission?.granted) {
      Alert.alert("Permission", "Click to request camera permission", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Request",
          onPress: async () => {
            const result = await requestPermission();
            if (result.granted) {
              router.push("/camera");
            }
          },
        },
      ]);
    } else {
      // if we already have a permission (that is when we accessed the camera permission for the first time)
      // and clicked on plus for the second time
      // this should open the camera without asking for a permission
      router.push("/camera");
    }
  };

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
          <TouchableOpacity
            style={styles.addStatusIcon}
            onPress={handleCameraPermission}
          >
            <Text style={styles.statusIconText}>+</Text>
          </TouchableOpacity>
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
    borderRadius: 25,
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
  addStatusIcon: {
    position: "absolute",
    backgroundColor: "#1DB954",
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    left: 30,
  },
  statusIconText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
