import { createAction } from "@reduxjs/toolkit";

export const closeSettings = createAction("chat/closeSettings");
export const openSettings = createAction("chat/openSettings");

export const logUser = createAction("settings/logUser");
