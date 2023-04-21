
export const initialState = { count: 0 };


export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "minus": return {
      ...state, count: state.count - 1
    };
    case "plus": return { ...state, count: state.count + 1 };
    case "by1": return { ...state, count: state.count + payload };
    case "by2": return { ...state, count: state.count - payload };
    default: return state;
  }
}