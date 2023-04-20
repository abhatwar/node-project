const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
})



const getCreate = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    console.log(name + " " + email + " " + phone);
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All field are mandotory !")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
})


const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id} ` });
})


const getUpdate = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Upadate contacts for ${req.params.id} ` });
})


const getDelete = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id} ` });
})

module.exports = { getContact, getCreate, getContacts, getUpdate, getDelete }