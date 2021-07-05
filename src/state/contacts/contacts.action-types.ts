export enum ActionTypes {
  // Main actions
  GET_CONTACTS = "get_contacts",
  GET_CONTACT = "get_contact",
  DELETE_CONTACT = "delete_contact",
  // GET /api/contacts
  GET_CONTACTS_REQUEST = "get_contacts_request",
  GET_CONTACTS_SUCESS = "get_contacts_success",
  GET_CONTACTS_FAILURE = "get_contacts_failure",

  //GET /api/contacts/:id
  GET_CONTACT_REQUEST = "get_contact_request",
  GET_CONTACT_SUCCESS = "get_contact_success",
  GET_CONTACT_FAILURE = "get_contact_failure",

  // DELETE /api/contacts/:id
  DELETE_CONTACT_REQUEST = "delete_contact_request",
  DELETE_CONTACT_SUCCESS = "delete_contact_success",
  DELETE_CONTACT_FAILURE = "delete_contact_failure",
}
