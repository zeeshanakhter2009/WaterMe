import { memo } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const PRESET_AMOUNTS = [200, 300, 500];

interface QuickAddProps {
  onAdd: (amount: number) => void;
}

export const QuickAdd = memo(({ onAdd }: QuickAddProps) => {
  return (
    <View style={styles.container}>
      {PRESET_AMOUNTS.map(amount => (
        <Button key={amount} title={`+${amount} ml`} onPress={() => onAdd(amount)} />
      ))}
      <Button title="Custom" onPress={() => onAdd(250)} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12
  }
});
