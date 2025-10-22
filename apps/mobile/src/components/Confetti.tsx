import { useEffect, useRef } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import { View } from 'react-native';
import type { Milestones } from './ProgressRing';

interface ConfettiProps {
  milestones: Milestones;
}

const getMilestoneCount = (milestones: Milestones) =>
  Number(milestones.q25) + Number(milestones.q50) + Number(milestones.q75) + Number(milestones.q100);

export function Confetti({ milestones }: ConfettiProps) {
  const cannonRef = useRef<ConfettiCannon | null>(null);
  const milestoneCount = getMilestoneCount(milestones);

  useEffect(() => {
    if (milestoneCount > 0) {
      cannonRef.current?.start();
    }
  }, [milestoneCount]);

  return (
    <View pointerEvents="none">
      <ConfettiCannon ref={cannonRef} autoStart={false} fadeOut count={120} origin={{ x: -10, y: 0 }} />
    </View>
  );
}
