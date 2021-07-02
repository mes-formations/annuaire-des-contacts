export const selectContacts = (state: any) => state.contacts;
export const selectContactById = (state: any, id: string) =>
  state.contacts.contacts.get(id);
