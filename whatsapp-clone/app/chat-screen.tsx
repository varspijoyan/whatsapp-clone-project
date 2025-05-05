import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.userMessage}>
          <Text>Hello there</Text>
        </View>
        <View style={styles.myMessage}>
          <Text style={styles.messageText}>Hi!!!</Text>
        </View>
      </View>
      <View style={styles.inputContent}>
        <TextInput
          style={styles.input}
          placeholder="message here...."
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContent: {
    width: "100%",
    height: 90,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#D0D0D0",
  },
  userMessage: {
    backgroundColor: "white",
    width: 200,
    height: "auto",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  myMessage: {
    backgroundColor: "green",
    position: "absolute",
    width: 200,
    height: "auto",
    padding: 10,
    top: 70,
    right: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  messageText: {
    color: "white",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    position: "absolute",
    top: 10,
    left: "3%",
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#8cc751",
    width: 50,
    height: 40,
    position: "absolute",
    right: 12,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
