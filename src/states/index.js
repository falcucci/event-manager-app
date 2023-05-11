import dayjs from "dayjs";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atom({
  username: "aurora",
  password: "alexsander",
});

export const eventAtom = atom({
  name: "Rust Meetup",
  description: `This Rust Meetup is an event for developers interested
  in learning more about the Rust programming language.`,
  status: "active",
  start_date: dayjs().add(1, 'day').format("YYYY-MM-DD"), 
  end_date: dayjs().add(2, 'day').format("YYYY-MM-DD"),
  location: "Milan",
  is_public: true,
});

export const accessAtom = atomWithStorage("access", null);
export const refreshAtom = atomWithStorage("refresh", null);

export const loginErrorAtom = atom(null);

export const validLoginAtom = atom(false);

export const loginVisibleAtom = atomWithStorage(
  "loginVisible",
  true
);
export const registerEventVisibleAtom = atom(false);

export const eventsAtom = atom([]);

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
      return {
        ...state,
        ...action.value,
        ...authingFalse,
        loggedIn: true,
        tokenValid: true,
      };
    case "LOGGING_OUT":
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export const accountReducerAtom = atom(
  state,
  (get, set, action) => {
    (async () => {
      set(
        accountReducerAtom,
        await accountReducer(get(accountReducerAtom), action)
      );
    })();
  }
);
