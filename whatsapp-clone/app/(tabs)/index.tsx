import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";

type ChatType = {
  id: string;
  sender: string;
  day: string;
};

type ChatProps = {
  sender: string;
  day: string;
};

const chatData: ChatType[] = [
  {
    id: "1",
    sender: "User 1",
    day: "Today",
  },
  {
    id: "2",
    sender: "User 2",
    day: "Today",
  },
  {
    id: "3",
    sender: "User 3",
    day: "Today",
  },
  {
    id: "4",
    sender: "User 4",
    day: "Yesterday",
  },
  {
    id: "5",
    sender: "User 5",
    day: "Yesterday",
  },
  {
    id: "6",
    sender: "User 6",
    day: "2 days ago",
  },
  {
    id: "7",
    sender: "User 7",
    day: "2 days ago",
  },
  {
    id: "8",
    sender: "User 8",
    day: "3 days ago",
  },
  {
    id: "9",
    sender: "User 9",
    day: "5 days ago",
  },
  {
    id: "10",
    sender: "User 10",
    day: "7 days ago",
  },
  {
    id: "11",
    sender: "User 11",
    day: "7 days ago",
  },
  {
    id: "12",
    sender: "User 12",
    day: "9 days ago",
  },
  {
    id: "13",
    sender: "User 13",
    day: "9 days ago",
  },
];

const Chat: React.FC<ChatProps> = ({ sender, day }) => {
  const router = useRouter();  
  return (
    <Pressable style={styles.chatItem} onPress={() => router.navigate('/chat-screen')}>
      <Image
        source={require("../../assets/images/user.jpg")}
        style={styles.image}
      />
      <View>
        <Text style={styles.sender}>{sender}</Text>
        <Text style={styles.day}>{day}</Text>
      </View>
    </Pressable>
  );
};
// chats screen
export default function Chats() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Chats</Text>
        <FlatList
          data={chatData}
          renderItem={({ item }) => (
            <Chat sender={item.sender} day={item.day} />
          )}
          keyExtractor={(item) => item.id}
        />
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
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sender: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  day: {
    fontSize: 14,
    color: "gray",
  },
});
