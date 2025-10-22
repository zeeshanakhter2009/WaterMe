import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { HydrationHistoryEntry } from '@/store/useHydrationStore';

interface CalendarHeatmapProps {
  entries: HydrationHistoryEntry[];
}

export const CalendarHeatmap = memo(({ entries }: CalendarHeatmapProps) => {
  if (!entries.length) {
    return <Text style={styles.empty}>No history yet. Log water to begin your streak!</Text>;
  }

  return (
    <View style={styles.grid}>
      {entries.map(entry => (
        <View
          key={entry.date}
          style={[
            styles.cell,
            { backgroundColor: entry.completed ? '#0EA5E9' : '#E2E8F0' }
          ]}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  empty: {
    fontSize: 16,
    color: '#475569'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6
  },
  cell: {
    width: 24,
    height: 24,
    borderRadius: 6
  }
});
