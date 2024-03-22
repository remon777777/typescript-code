"use strict";
class Contact {
    name;
    email;
    phone; // Assuming phone is optional
    group;
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
class AddressBook {
    contacts = [];
    addContact(contact) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        // Example: Adding phone number validation
        if (contact.phone && !/^\d{10}$/.test(contact.phone)) {
            throw new Error("Invalid phone number format");
        }
        this.contacts.push(contact);
    }
    // Searches for a contact by name and returns the first match or undefined if not found.
    findContactByName(name) {
        return this.contacts.find((contact) => contact.name === name);
    }
    // Filters contacts by their group attribute and returns an array of contacts belonging to the specified group.
    filterByGroup(group) {
        return this.contacts.filter((contact) => contact.group === group);
    }
    sortByName() {
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
    // Performs a case-insensitive search for contacts by name using the provided search term.
    searchContacts(searchTerm) {
        const normalizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedSearchTerm));
    }
    printContacts() {
        for (const contact of this.contacts) {
            console.log(`Name: ${contact.name}`);
            console.log(`Email: ${contact.email}`);
            if (contact.phone) {
                console.log(`Phone: ${contact.phone}`);
            }
            console.log("-----");
        }
    }
}
// Creates an instance of AddressBook and adds two contacts to it.
const addressBook = new AddressBook();
const contact1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    group: "Friends"
};
addressBook.addContact(contact1);
const contact2 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    group: "Colleagues"
};
addressBook.addContact(contact2);
const foundContact = addressBook.findContactByName("John Doe");
console.log(foundContact);
const filteredContacts = addressBook.filterByGroup("Friends");
console.log(filteredContacts);
addressBook.sortByName();
const searchedContacts = addressBook.searchContacts("Jane");
console.log(searchedContacts); // [{ name: "Jane Smith", email: "jane.smith@example.com", group: "Colleagues" }]
addressBook.printContacts();
