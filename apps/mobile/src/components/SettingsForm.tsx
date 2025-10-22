import { memo } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';
import type { UserProfile } from '@/store/useUserStore';

interface SettingsFormProps {
  profile: UserProfile | null;
}

export const SettingsForm = memo(({ profile }: SettingsFormProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Daily goal (ml)</Text>
        <TextInput
          editable={false}
          value={profile?.goalMl?.toString() ?? '2000'}
          style={styles.input}
          accessibilityLabel="Daily goal in millilitres"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Pause reminders at goal</Text>
        <Switch value={profile?.reminders?.pauseAtGoal ?? true} disabled />
      </View>
      <Text style={styles.help}>
        Full settings management, reminders, and subscription handling will be available in a future iteration.
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 24
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 14,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5F5',
    borderRadius: 8,
    padding: 12,
    marginTop: 8
  },
  help: {
    fontSize: 12,
    color: '#64748B'
  }
});
