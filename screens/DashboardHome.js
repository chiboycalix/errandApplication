import React from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default DashboardHome = () => {
  const [searchTerm, onChangeSearchTerm] = React.useState("");

  return (
    <View>
      <View></View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearchTerm}
        value={searchTerm}
        placeholder="Search for service"
      />

      <View style={styles.categoriesWrapper}>
        <View style={styles.contentHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text>see all</Text>
        </View>
        <View style={styles.contentBody}>
          <View style={styles.contentCard}>
            <Ionicons name="trash-bin" color={"red"} size={20}/>
            <Text>Cleaner</Text>
          </View>
          <View style={styles.contentCard}>
            <Ionicons name="water-sharp" color={"red"} size={20}/>
            <Text>Plumber</Text>
          </View>
          <View style={styles.contentCard}>
            <Ionicons name="bulb" color={"red"} size={20}/>
            <Text>Electrician</Text>
          </View>
          <View style={styles.contentCard}>
            <Ionicons name="settings" color={"red"} size={20}/>
            <Text>Farmer</Text>
          </View>
          <View style={styles.contentCard}>
            <Ionicons name="alert-circle" color={"red"} size={20}/>
            <Text>Sports Trainer</Text>
          </View>
          <View style={styles.contentCard}>
            <Ionicons name="pencil" color={"red"} size={20}/>
            <Text>Teacher</Text>
          </View>
        </View>
      </View>

      <View style={styles.servicesWrapper}>
        <View>
          <View style={styles.contentHeader}>
            <Text style={styles.sectionTitle}>Cleaning Services</Text>
            <Text>see all</Text>
          </View>
          <View style={styles.cleaningServicesBody}>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/room-cleaner.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Home Cleaning</Text>
              </View>
            </View>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/clean-bathroom.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Toilet Cleaning</Text>
              </View>
            </View>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/clean-kitchen.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Kitchen</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.homeRepairsWrapper}>
        <View>
          <View style={styles.contentHeader}>
            <Text style={styles.sectionTitle}>Home Repairs</Text>
            <Text>see all</Text>
          </View>
          <View style={styles.cleaningServicesBody}>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/plumber.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Plumber</Text>
              </View>
            </View>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/carpenter.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Carpenter</Text>
              </View>
            </View>
            <View style={styles.cleaningServicesCard}>
              <Image
                source={require("../assets/electrician.jpg")}
                style={styles.image}
              />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>Electrician</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  categoriesWrapper: {
    padding: 10,
  },
  contentHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  contentBody: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
  contentCard: {
    backgroundColor: "#fff",
    width: "30%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  servicesWrapper: {
    marginTop: 10,
    padding: 10,
  },
  cleaningServicesBody: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
  cleaningServicesCard: {
    width: "30%",
    height: 130,
    borderRadius: 5,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  homeRepairsWrapper: {
    marginTop: 15,
    padding: 10,
  },
  cardTextWrapper: {
    position: "absolute",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7E7B7D",
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  cardText: {},
});
