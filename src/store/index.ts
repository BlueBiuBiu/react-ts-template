import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'

import demoSlice from './modules/demo'

const store = configureStore({
  reducer: {
    demo: demoSlice
  }
})

/**
 * redux中使用typescripts: https://www.reduxjs.cn/tutorials/typescript-quick-start
 */
type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const shallowEqualApp = shallowEqual

export default store
