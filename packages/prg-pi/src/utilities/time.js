const STATES_PER_SECONDS = 400_000n;

export const statesToSeconds = (states) => states / STATES_PER_SECONDS;
