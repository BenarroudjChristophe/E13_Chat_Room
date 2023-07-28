import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatReducer";
import settingsReducer from "./reducers/settingsReducer";

const store = configureStore({
	reducer: {
		chat: chatReducer,
		user: settingsReducer,
	},
});

export default store;
