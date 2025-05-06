import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Photo() {
  const { uri } = useLocalSearchParams();
  const imageUri = Array.isArray(uri) ? uri[0] : uri;
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} resizeMode="cover" style={styles.image}/>
      ) : null}
      <TouchableOpacity style={styles.cancelBtn} onPress={() => router.push('/(tabs)/highlights')}>
        <View>
          <Text style={{fontWeight: '600'}}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkBox} onPress={() => router.push('/(tabs)/highlights')}>
        <FontAwesome name="check" size={30} color={"white"}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  checkBox: {
    position: 'absolute',
    bottom: 55,
    right: 35,
    backgroundColor: "green",
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  cancelBtn: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 90,
    left: 20,
    width: 80,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
