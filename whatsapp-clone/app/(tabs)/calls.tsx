import { FlatList, Image, StyleSheet, Text, View, SafeAreaView} from "react-native";

type CallType = {
  id: string;
  caller: string;
  day: string;
};

type CallProps = {
  caller: string;
  day: string;
};

const callHistory: CallType[] = [
  {
    id: "1",
    caller: "User 1",
    day: "Today",
  },
  {
    id: "2",
    caller: "User 2",
    day: "Today",
  },
  {
    id: "3",
    caller: "User 3",
    day: "Yesterday",
  },
  {
    id: "4",
    caller: "User 4",
    day: "Yesterday",
  },
  {
    id: "5",
    caller: "User 5",
    day: "3 days ago",
  },
  {
    id: "6",
    caller: "User 6",
    day: "3 days ago",
  },
  {
    id: "7",
    caller: "User 7",
    day: "5 days ago",
  },
  {
    id: "8",
    caller: "User 8",
    day: "5 days ago",
  },
  {
    id: "9",
    caller: "User 9",
    day: "6 days ago",
  },
  {
    id: "10",
    caller: "User 10",
    day: "8 days ago",
  },
  {
    id: "11",
    caller: "User 11",
    day: "10 days ago",
  },
];

const Call: React.FC<CallProps> = ({ caller, day }) => {
  return (
    <View style={styles.callItem}>
      <Image
        source={require("../../assets/images/user.jpg")}
        style={styles.image}
      />
      <View>
        <Text style={styles.caller}>{caller}</Text>
        <Text style={styles.day}>{day}</Text>
      </View>
    </View>
  );
};

export default function Calls() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calls</Text>
        <FlatList
          data={callHistory}
          renderItem={({ item }) => (
            <Call caller={item.caller} day={item.day} />
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
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  caller: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  day: {
    fontSize: 14,
    color: "gray",
  },
});
