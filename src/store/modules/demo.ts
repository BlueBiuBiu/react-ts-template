import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeData } from '@/service'

export const fetchDemoData = createAsyncThunk(
  'fetchDemoData',
  async (args, { dispatch }) => {
    const res = await getHomeData()
    dispatch(changeBannerAction(res.data.banner.list))
  }
)

const demoSlice = createSlice({
  name: 'demo',
  initialState: {
    test: 'test',
    banner: []
  },
  reducers: {
    changeBannerAction(state, { payload }) {
      console.log(payload)

      state.banner = payload
    }
  }
})

export const { changeBannerAction } = demoSlice.actions

export default demoSlice.reducer
