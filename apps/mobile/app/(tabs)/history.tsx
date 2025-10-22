import { ScrollView, StyleSheet, Text } from 'react-native';
import { useHydrationStore } from '@/store/useHydrationStore';
import { CalendarHeatmap } from '@/components/CalendarHeatmap';

export default function HistoryScreen() {
  const { history } = useHydrationStore();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Last 30 days</Text>
      <CalendarHeatmap entries={history} />
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
