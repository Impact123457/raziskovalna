import {defineQuery} from "next-sanity";

export const CHECK_FOR_EXISTING_USER = `*[_type == "user" && email == $email][0]`;

export const USER_BY_EMAIL_QUERY = defineQuery(
   `*[_type == "user" && email == $email][0]{
  _id,  
  name,
  surname,
  email,
  password,
  "image": image.asset->url,
}`
);

export const USER_BY_ID_QUERY = defineQuery(
   `*[_type == "user" && _id == $id][0]{
  _id,
  id,
  name,
  surname,
  email,
  password,  
  "image": image.asset->url,
}`);