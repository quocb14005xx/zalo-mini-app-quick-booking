import { atom, selector } from "recoil";
import { getPhoneNumber, getUserInfo } from "zmp-sdk";

export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const userPhoneState = selector({
  key: "phone",
  get: () =>
    getPhoneNumber(),
});


export const displayNameState = atom({
  key: "displayName",
  default: "",
});
