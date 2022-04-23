export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TGeo = {
  lat: string;
  lng: string;
};

type TAdress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAdress;
  phone: string;
  website: string;
  company: TCompany;
};
