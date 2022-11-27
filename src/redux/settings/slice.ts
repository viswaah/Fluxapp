import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        FOCUS_MINUTES: 0.05,
        BREAK_MINUTES: 0.05,
        LONG_BREAK_MINUTES: 0.05,
        FLOW_COUNT: 4,
        START_FLOW_AUTOMATICALLY: false,
        START_BREAK_AUTOMATICALLY: false,
        METRONOME: false
    },
    reducers: {
        updateSettings: (state, action) => {
            const {key, value} = action.payload;
            state[key] = value;
        },
        updateRawSettings: (state, action) => {
            state = action.payload;
        }
    }
});

export const {updateSettings, updateRawSettings} = settingsSlice.actions;
