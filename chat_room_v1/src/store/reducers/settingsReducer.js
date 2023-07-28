import { createReducer } from "@reduxjs/toolkit";
import { logUser } from "../actions/settingsAction";

import { closeSettings, openSettings } from "../actions/settingsAction";

const initialState = {
	user: "MickealScott",
	password: "1234",
};

const settingsReducer = createReducer(initialState, (builder) => {
	builder.addCase(logUser, (state, action) => {
		const loggedUser = { ...action.payload };
		console.log(loggedUser);
	});
});

export default settingsReducer;
