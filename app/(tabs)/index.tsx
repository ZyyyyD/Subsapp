import "@/global.css";

import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-black text-white p-4">
        Next
      </Link>
      <Link
        href="/(auth)/Sign_in"
        className="mt-4 rounded bg-black text-white p-4">
        Sign In
      </Link>
      <Link
        href="/(auth)/Sign_up"
        className="mt-4 rounded bg-black text-white p-4">
        Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-black text-white p-4">
        Spotify Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-black text-white p-4">
        Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
