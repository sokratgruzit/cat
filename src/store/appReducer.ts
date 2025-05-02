import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, LanguageProp } from '../types/types';

const INIT_STATE: AppState = {
  activeLanguage: {
    id: 14,
    name: "RU",
    flag: "/flags/RU.webp",
    lang: "ru",
    langFull: "Русский"
  },
  loading: false,
  openBurger: false,
  openLangs: false
};

const modalsReducer = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setActiveLanguage: (state, action: PayloadAction<{ activeLanguage: LanguageProp }>) => {
      return {
        ...state,
        activeLanguage: action.payload.activeLanguage
      };
    },
    setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      return {
        ...state,
        loading: action.payload.loading
      };
    },
    setBurger: (state, action: PayloadAction<{ openBurger: boolean }>) => {
      return {
        ...state,
        openBurger: action.payload.openBurger
      };
    },
    setLangs: (state, action: PayloadAction<{ openLangs: boolean }>) => {
      return {
        ...state,
        openLangs: action.payload.openLangs
      };
    },
  }
})

export default modalsReducer.reducer;
export const {
  setActiveLanguage,
  setLoading,
  setBurger,
  setLangs
} = modalsReducer.actions;




