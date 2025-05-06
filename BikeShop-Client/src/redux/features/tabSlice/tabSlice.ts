// features/tab/tabSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface TabState {
  selectedTab: 'profile' | 'addresses' | 'payment';
}

const initialState: TabState = {
  selectedTab: 'profile', 
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
