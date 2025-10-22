import { ScrollView, StyleSheet, Text } from 'react-native';
import { BadgeGrid } from '@/components/BadgeGrid';
import { useBadges } from '@/hooks/useBadges';

export default function BadgesScreen() {
  const { unlocked, locked } = useBadges();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Badges</Text>
      <BadgeGrid unlocked={unlocked} locked={locked} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: '600'
  }
});
