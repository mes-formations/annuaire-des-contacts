export enum ActionTypes {
  // Main actions
  GET_CONTACTS = "get_contacts",
  GET_CONTACT = "get_contact",
  DELETE_CONTACT = "delete_contact",
  CREATE_CONTACT = "create_contact",
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

  // POST /api/contacts
  CREATE_CONTACT_REQUEST = "create_contact_request",
  CREATE_CONTACT_SUCCESS = "create_contact_success",
  CREATE_CONTACT_FAILURE = "create_contact_failure",

  // PUT /api/contacts/:id
  UPDATE_CONTACT_REQUEST = "update_contact_request",
  UPDATE_CONTACT_SUCCESS = "update_contact_success",
  UPDATE_CONTACT_FAILURE = "update_contact_failure",
}
