import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type Milestones = {
  q25: boolean;
  q50: boolean;
  q75: boolean;
  q100: boolean;
};

interface ProgressRingProps {
  consumedMl: number;
  goalMl: number;
  milestones: Milestones;
}

export const ProgressRing = memo(({ consumedMl, goalMl, milestones }: ProgressRingProps) => {
  const percent = goalMl === 0 ? 0 : Math.min(1, consumedMl / goalMl);

  const milestoneSummary = Object.entries(milestones)
    .filter(([, achieved]) => achieved)
    .map(([key]) => key.toUpperCase())
    .join(', ');

  return (
    <View style={styles.container}>
      <View style={[styles.ring, { borderColor: percent === 1 ? '#3B82F6' : '#60A5FA' }]}>
        <Text style={styles.percent}>{Math.round(percent * 100)}%</Text>
      </View>
      <Text style={styles.caption}>
        {consumedMl} / {goalMl} ml
      </Text>
      {milestoneSummary ? (
        <Text style={styles.milestones}>Milestones: {milestoneSummary}</Text>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 16
  },
  ring: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 16,
    borderColor: '#60A5FA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percent: {
    fontSize: 36,
    fontWeight: '700'
  },
  caption: {
    fontSize: 18
  },
  milestones: {
    fontSize: 12,
    color: '#2563EB'
  }
});
