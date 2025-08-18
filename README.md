


DAY1: We are going to focus on building the BE for our notes taking application with following features:
- A new user should be able to register.
- A registered user should be able to authenticate.
- A user should be able to create a new note.
- A user should be able view/his/her notes.
- A user should be able update his/her notes.
- A user should be able delete his/her notes.


Notes CRUD
- Create: /notes/create ⇒ POST
- Read: /notes ⇒ GET
- Update: /notes/update/:noteID ⇒ PATCH
- Delete: /notes/delete/:noteID ⇒ DELETE
- All these routes should be restricted, also a user shiould be able to Read, Update and Delete his or her notes only




# mongodb://127.0.0.1:27017/noteAppDB