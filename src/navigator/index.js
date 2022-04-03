import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import BookDetailScreen from "../screens/BookDetailScreen";
import BookReadScreen from "../screens/BookReadScreen";
import CategoryScreen from "../screens/CategoryScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FeaturedBooksScreen from "../screens/FeaturedBooksScreen";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignInScreen from "../screens/SigninScreen";
import SignUpScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FeaturedBooks" component={FeaturedBooksScreen} />
      <Stack.Screen name="BookStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const FeatureStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeaturedBooks" component={FeaturedBooksScreen} />
      <Stack.Screen name="BookStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Featured" component={FeatureStack} />
    </Stack.Navigator>
  );
};

const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      <Stack.Screen name="BookRead" component={BookReadScreen} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="BookStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Favorites" component={FavoritesStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
