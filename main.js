function contactFactory(contactData){
    let contact = {
        name: null,
        title: null,
        email: null
    }
    for (let i = 0; i < contactData.length; i++){
        if (i === 0) {
            contact.name = contactData[0]
        }
        if (i === 1) {
            contact.title = contactData[1]
        }
        if (i === 2) {
            contact.email = contactData[2]
        }
    }
    return contact
}

function createContact(name, title, email){
    let newContact = [name,title,email]
    let contact = contactFactory(newContact)
    console.table(contact)
}
createContact("jerry", "Owner", "timmy")

