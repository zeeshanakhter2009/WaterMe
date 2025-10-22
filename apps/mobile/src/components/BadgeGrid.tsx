import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Badge } from '@/hooks/useBadges';

interface BadgeGridProps {
  unlocked: Badge[];
  locked: Badge[];
}

export const BadgeGrid = memo(({ unlocked, locked }: BadgeGridProps) => {
  const items = [...unlocked.map(badge => ({ ...badge, locked: false })), ...locked.map(badge => ({ ...badge, locked: true }))];

  return (
    <View style={styles.grid}>
      {items.map(item => (
        <View key={item.code} style={[styles.card, item.locked && styles.cardLocked]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.description}</Text>
          <Text style={styles.status}>{item.locked ? 'Locked' : 'Unlocked'}</Text>
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  },
  card: {
    width: '45%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#E0F2FE',
    gap: 8
  },
  cardLocked: {
    opacity: 0.5
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 12
  },
  status: {
    fontSize: 12,
    fontWeight: '700'
  }
});
