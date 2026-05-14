import "@/global.css";

import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold">Home</Text>
      <Link
        href="/(auth)/Sign_in"
        className="mt-4 font-sans-bold rounded bg-black text-white p-4">
        Sign In
      </Link>
      <Link
        href="/(auth)/Sign_up"
        className="mt-4 font-sans-bold rounded bg-black text-white p-4">
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
