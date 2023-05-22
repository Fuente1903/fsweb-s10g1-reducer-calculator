export const ADD_ONE = 'ADD_ONE';
export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEMORY_TOTAL = 'MEMORY_TOTAL';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const TOTAL_MEMORY = 'TOTAL_MEMORY';

export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoToTotal = () => {
  return { type: MEMORY_TOTAL };
};

export const totalToMemo = () => {
  return { type: TOTAL_MEMORY };
};

export const clearMemo = () => {
  return { type: CLEAR_MEMORY };
};