export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const replace = count => ({
type: 'REPLACE',
count
});

export const onCount = count => ({
type: 'CHANGE_COUNT',
count
});

