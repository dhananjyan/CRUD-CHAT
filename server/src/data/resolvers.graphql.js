import { Contacts } from "../db/dbConnector.js";

export const resolvers = {
  Query: {
    getContacts: (root, { query }) => {
      return new Promise((resolve, reject) => {
        Contacts.find({
          ...(query ? {$or: [
            {firstName: { $regex: query, $options: 'i' }},
            {lastName: { $regex: query, $options: 'i' }},
            {email: { $regex: query, $options: 'i' }},
            {company: { $regex: query, $options: 'i' }},
          ]} : {})
        }, (err, contacts) => {
          if (err) reject(err);
          else resolve(contacts);
        });
      });
    },
    findAContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contacts.findOne({
          _id: id
        }, (err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        });
      });
    },
  },
  Mutation: {
    addContact: (root, { contact }) => {
      const { ...rest } = contact;
      const newContact = new Contacts({ ...rest });
      return new Promise((resolve, reject) => {
        newContact.save((err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        });
      });
    },
    deleteContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contacts.deleteOne({ _id: id }, (err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        })
      });
    },
    updateContact: async (root, { id, contact }) => {
      let doc = await Contacts.findOne({ _id: id });
      const { firstName,
        lastName,
        email,
        phoneNumber,
        company } = contact || {};

      doc.lastName = lastName;
      doc.firstName = firstName;
      doc.email = email;
      doc.phoneNumber = phoneNumber;
      doc.company = company;

      return new Promise((resolve, reject) => {
        doc.save((err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        })
      });
    },
  },
};
