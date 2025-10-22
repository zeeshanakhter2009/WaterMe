import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const onUserCreate = functions.auth.user().onCreate(async user => {
  const firestore = admin.firestore();
  const now = admin.firestore.FieldValue.serverTimestamp();
  await firestore
    .doc(`users/${user.uid}`)
    .set(
      {
        uid: user.uid,
        email: user.email,
        createdAt: now,
        goalMl: 2000,
        timezone: 'UTC'
      },
      { merge: true }
    );
});

export const onHydrationUpdate = functions.firestore
  .document('users/{uid}/hydration/{day}')
  .onWrite(async change => {
    const after = change.after.data();
    if (!after) {
      return;
    }

    const firestore = admin.firestore();
    const streakRef = change.after.ref.parent.parent?.collection('streak').doc('summary');
    if (!streakRef) return;

    const goalReached = after.consumedMl >= after.goalMl;
    const previousReached = change.before.exists ? change.before.data()?.consumedMl >= change.before.data()?.goalMl : false;

    if (goalReached && !previousReached) {
      await firestore.runTransaction(async tx => {
        const snapshot = await tx.get(streakRef);
        const current = snapshot.exists ? snapshot.data()?.current ?? 0 : 0;
        const longest = snapshot.exists ? snapshot.data()?.longest ?? 0 : 0;
        const updatedCurrent = current + 1;
        tx.set(
          streakRef,
          {
            current: updatedCurrent,
            longest: Math.max(longest, updatedCurrent),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        );
      });
    }
  });
