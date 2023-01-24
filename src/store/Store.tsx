import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./CounterSlice";

// store mekanizmasını oluşturduk
// count benim state
// countSlice ise bu state değiştirmeye yarayan kod bloğu
const store = configureStore({
  reducer: {
    countState: countSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// RootState global olarak componentlere dağıtılacak olan state
// store içindeki tüm statelere rootState tipinde erişeceğimiz için export

export type AppDispatch = typeof store.dispatch;
// actionlardan reducerların tetiklenmesini sağlayan dispath methodu export ettik.

export default store;
