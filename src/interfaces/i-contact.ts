export interface IContact {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  position: string;
  work_address: string;
}

export interface IContactResponse extends IContact {
  id: string;
}
