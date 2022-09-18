import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  Image,
  StatusBar,
  TextInput,
  View,
  Alert,
  ImageBackground,
  ScrollView,
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
          placeholder={text}
          value={text}
        />
      </View>
      <ScrollView style={styles.scrollView} horizontal>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <View key={i} style={styles.section_one}>
            <Image
              style={styles.image}
              source={{
                uri: `https://picsum.photos/${i}00`,
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
        ))}
      </ScrollView>
      <View style={styles.section_two}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: "https://picsum.photos/900",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              fontSize: 22,
            }}
          >
            I am text on top of image
          </Text>
          <Pressable
            style={styles.button}
            title="Learn More"
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text>Button on BG image</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer.text}>{text !== "Input name" && text}</Text>
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
    borderRadius: 5,
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
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "75%",
    borderRadius: 4,
  },
  scrollView: {
    height: 50,
  },
  section_one: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
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
  imageBackground: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 60,
    backgroundColor: "#500052",
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    text: {
      color: "white",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      fontSize: 22,
      fontFamily: "Roboto",
    },
  },
});
