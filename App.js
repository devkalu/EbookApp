import { StatusBar } from "react-native";
import Navigator from "./src/navigator";

import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </Provider>
    </>
  );
}
