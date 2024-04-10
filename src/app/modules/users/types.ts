export type Gender = 'Male' | 'Female';
export type Status = 'Active' | 'Inactive';

export type UserForm = {
  name: string;
  email: string;
  gender: Gender;
  status: Status;
  id?: number;
};
