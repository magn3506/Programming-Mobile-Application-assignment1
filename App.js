import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  Pressable,
  Image,
  StatusBar,
  TextInput,
  View,
  Alert,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("Input name");

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="#61dafb" />
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.section_one}>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
        <Pressable
          style={styles.button}
          title="Learn More"
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text>Click Me</Text>
        </Pressable>
      </View>
      <View style={styles.section_two}>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/300",
          }}
        />
      </View>
      <View style={styles.footer}>
        <TextInput style={styles.input} value={"TextInput"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "grey",
    flex: 1,
  },
  button: {
    backgroundColor: "yellow",
    marginTop: 6,
    padding: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  header: {
    borderWidth: 1,
    backgroundColor: "white",
    height: 100,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 12,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "red",
    padding: 6,
    width: "75%",
  },
  section_one: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  section_two: {
    flex: 1,
    backgroundColor: "purple",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  footer: {
    height: 60,
    borderWidth: 1,
    backgroundColor: "white",
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
