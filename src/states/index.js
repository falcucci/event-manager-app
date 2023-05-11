import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const user = atom({
  username: "aurora",
  password: "alexsander",
});

export const accessAtom = atomWithStorage('access', null)
export const refreshAtom = atomWithStorage('refresh', null)

export const loginVisibleAtom = atomWithStorage('loginVisible', true)

export const eventsAtom = atom([])

export const state = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  access: "",
  refresh: "",
  authing: false,
  loggedIn: false,
  errors: [],
  tokenValid: false,
};

export const actions = {
  SIGNING_UP: "SIGNING_UP",
  SIGNED_UP: "SIGNED_UP",
  LOGGING_IN: "LOGGING_IN",
  LOGGED_IN: "LOGGED_IN",
  LOGGING_OUT: "LOGGING_OUT",
  LOGGED_OUT: "LOGGED_OUT",
};

const authingTrue = { authing: true };
const authingFalse = { authing: false };

const accountReducer = (state, action) => {
  switch (action.type) {
    case "LOGGING_IN":
      return { ...state, ...authingTrue };
    case "LOGGED_IN":
      return { ...state, ...action.value, ...authingFalse, loggedIn: true, tokenValid: true };
    default:
      return state;
  }
}

export const accountReducerAtom = atom(state, (get, set, action) => {
  (async () => {
    set(
      accountReducerAtom,
      await accountReducer(get(accountReducerAtom), action)
    );
  })();
});


