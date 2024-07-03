import { createSlice } from '@reduxjs/toolkit';


export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    tempId : "1", 
  },
  reducers: {
    updateTemplate : (state, action) => {
      state.tempId = action.payload
    }
  },
});

console.log(templateSlice.actions)

export const { updateTemplate } = templateSlice.actions;

// export const { increment, decrement } = template.actions;
export default templateSlice.reducer;
