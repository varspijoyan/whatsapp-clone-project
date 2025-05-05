import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CameraType, CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const router = useRouter();
  const cameraRef = useRef(null); // to access all the camera functions

  const flipCamera = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };
  return (
    <SafeAreaView style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} />
      <View style={styles.closeCamera}>
        <Text
          style={{ color: "white", fontSize: 20 }}
          onPress={() => router.back()}
        >
          X
        </Text>
      </View>
      <TouchableOpacity style={styles.cameraFlip} onPress={flipCamera}>
        <FontAwesome name="camera" size={20} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.circle}></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  closeCamera: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  cameraFlip: {
    position: "absolute",
    top: 25,
    right: 20,
  },
  circle: {
    backgroundColor: "#ffffffb0",
    width: 90,
    height: 90,
    borderRadius: 70,
    position: "absolute",
    top: -120,
    left: 150,
  },
});
