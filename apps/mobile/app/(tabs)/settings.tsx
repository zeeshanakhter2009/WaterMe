import { ScrollView, StyleSheet, Text } from 'react-native';
import { SettingsForm } from '@/components/SettingsForm';
import { useUserStore } from '@/store/useUserStore';

export default function SettingsScreen() {
  const { profile } = useUserStore();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <SettingsForm profile={profile} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 24
  },
  heading: {
    fontSize: 20,
    fontWeight: '600'
  }
});
