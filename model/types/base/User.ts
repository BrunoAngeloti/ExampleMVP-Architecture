export type User = {
  name: string;
  lastName: string;
  email: string;
  birthDate: Date;
  gender: string;
};

export type UserAdress = User & {
  street: string;
  district: string;
  country: string;
}