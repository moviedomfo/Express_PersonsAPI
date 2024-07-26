
export interface User {
  id: string;
  userName: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordHash: string;

  roles: string[];
  twoFA: TwoFA;
}

export interface MokUsers {
  users: User[];
}

export interface TwoFA {
  expToken: string;
  enabled: boolean;
  secret: string;
  tempSecret: string
}
