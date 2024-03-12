import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./Profile";
import ChatScreen from "./Chat";
import BookingScreen from "./Booking";
import BookmarkScreen from "./Bookmark";
import DashboardHomeScreen from "./DashboardHome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DashboardScreen() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "Booking") {
              iconName = focused ? "book" : "book-outline";
            }else if(route.name === "Chat"){
              iconName = focused ? "chatbox" : "chatbox-outline"
            } else if(route.name === "Save"){
              iconName = focused ? "bookmark":"bookmark-outline"
            } else if(route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1AA5F6",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={DashboardHomeScreen} />
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Save" component={BookmarkScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}
