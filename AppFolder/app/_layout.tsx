import "../global.css";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "../AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppNavigator />
  </AuthProvider>
  );
}
