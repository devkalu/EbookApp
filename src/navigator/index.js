import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SecondaryColor } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor } from "../constants";

// Screens
import {
  BookDetailScreen,
  BookReadScreen,
  CategoryScreen,
  FavoritesScreen,
  FeaturedBooksScreen,
  HomeScreen,
  OnboardingScreen,
  SettingsScreen,
  SigninScreen,
  SignupScreen,
  WelcomeScreen,
} from "../screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeStack" component={WelcomeScreen} />
      <Stack.Screen
        name="OnboardingWelcomeStack"
        component={OnboardingScreen}
      />
      <Stack.Screen name="SigninWelcomeStack" component={SigninScreen} />
      <Stack.Screen name="SignupWelcomeStack" component={SignupScreen} />
      <Stack.Screen name="CategoryWelcomeStack" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="FeaturedHomeStack" component={FeaturedBooksScreen} />
      <Stack.Screen name="BookHomeStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const FeatureStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeaturedStack" component={FeaturedBooksScreen} />
      <Stack.Screen name="BookFeaturedStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoryStack" component={CategoryScreen} />
      <Stack.Screen name="FeaturedCategoryStack" component={FeatureStack} />
    </Stack.Navigator>
  );
};

const BookStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      <Stack.Screen name="BookRead" component={BookReadScreen} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesStack" component={FavoritesScreen} />
      <Stack.Screen name="BookFavoriteStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: SecondaryColor,
          height: 80,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={focused ? PrimaryColor : "white"}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={30}
              color={focused ? PrimaryColor : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={30}
              color={focused ? PrimaryColor : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
