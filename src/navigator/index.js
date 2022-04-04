import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

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
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
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
    <Stack.Navigator>
      <Stack.Screen name="CategoryStack" component={CategoryScreen} />
      <Stack.Screen name="FeaturedCategoryStack" component={FeatureStack} />
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
      <Stack.Screen name="FavoritesStack" component={FavoritesScreen} />
      <Stack.Screen name="BookFavoriteStack" component={BookStack} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryStack} />
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
