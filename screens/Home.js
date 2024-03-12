import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  const onPress = () => {
    navigation.navigate('Dashboard')
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerHeadingSection}>
        <Text style={styles.bannerHeadingText}>Best Helping</Text>
        <Text style={styles.bannerHeadingText}>Hands for you</Text>
      </View>
      <View style={styles.bannerParagraphSection}>
        <Text style={styles.bannerParagraphText}>
          With our On-Demand Service App, we give
        </Text>
        <Text style={styles.bannerParagraphText}>better service To You</Text>
      </View>
      <View style={styles.metricsSection}>
        <View style={styles.metricsCard}>
          <Text>2240+ Customer Reviews</Text>
        </View>
        <View style={styles.metricsCard}>
          <Text>40+ Service Categories</Text>
        </View>
        <View style={[styles.metricsCard, { marginLeft: "30%", marginTop: 5 }]}>
          <Text>1400+ Expert Workers</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/plumber-preview.png")}
          style={styles.image}
        />
        <View style={styles.buttonWrapper}>
          <Button title="Get Started" onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F8F8F9",
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bannerHeadingSection: {
    marginTop: 10,
    width: "100%",
  },
  bannerHeadingText: {
    color: "#0078C1",
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: "bold",
    lineHeight: 40,
    textAlign: "center",
  },
  bannerParagraphSection: {
    marginTop: 10,
    width: "100%",
  },
  bannerParagraphText: {
    textAlign: "center",
    lineHeight: 25,
  },
  metricsSection: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  metricsCard: {
    backgroundColor: "#fff",
    padding: 10,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 650,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  buttonWrapper: {
    position: "absolute",
    top: 410,
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
