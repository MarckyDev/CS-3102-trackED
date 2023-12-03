const USER_KEY = 'user';

export interface User{
    user:Array<Useritem>;
}

export interface Useritem{
  firstName:string;
  lastName:string;
  email:string;
  password:string;
}