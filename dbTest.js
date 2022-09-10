const db = require('./models');

// Implement CRUD for user model

// CREATE
async function createUser() {
    try {
        const newUser = await db.user.create({

        });
        console.log('my new user >>>', newUser);
    } catch (error) {
        console.log('new user was not created b/c of >>>', error);
    }
    
}
// @todo run createUser function below

// READ
async function readUser() {
    try {
        const user = await db.user.findOne({
            where: { id: 1 }
        });
        console.log('current user here >>>', user);  
    } catch (error) {
        console.log('did not find user b/c of >>>', error);
    }
}
// @todo run readUser function below

// UPDATE
async function updateUser() {
    try {
        
    } catch (error) {
        
    }
}

// DELETE
async function deleteUser() {
    try {
        
    } catch (error) {
        
    }
}