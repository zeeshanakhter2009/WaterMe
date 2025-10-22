import { View, StyleSheet } from 'react-native';
import { ProgressRing } from '@/components/ProgressRing';
import { QuickAdd } from '@/components/QuickAdd';
import { useHydrationStore } from '@/store/useHydrationStore';
import { Confetti } from '@/components/Confetti';

export default function HomeScreen() {
  const { today, milestones, addDrink } = useHydrationStore();

  return (
    <View style={styles.container}>
      <ProgressRing
        consumedMl={today?.consumedMl ?? 0}
        goalMl={today?.goalMl ?? 0}
        milestones={milestones}
      />
      <QuickAdd onAdd={addDrink} />
      <Confetti milestones={milestones} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F5FAFF',
    justifyContent: 'space-between'
  }
});
