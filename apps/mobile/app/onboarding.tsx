import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to WaterMe</Text>
      <Text style={styles.body}>
        Track your hydration, earn streaks and badges, and stay motivated across all of your devices.
      </Text>
      <Button title="Get started" onPress={() => router.replace('/auth/signup')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center'
  },
  body: {
    fontSize: 16,
    textAlign: 'center'
  }
});
