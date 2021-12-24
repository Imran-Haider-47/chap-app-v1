const users = [];

// add User, Remove User, get User, getUsersInRoom
const addUser = ({id, username, room}) =>{
    //Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    // validate user name
    if(existingUser)
    {
        return{
            error : 'User name is already taken'
        }
    }

    // Store the user
    const user = {id, username, room};
    users.push(user);
    return { user};
    
} // Add user function ends here

// Remove User
const removeUser=(id)=>{
    const index = users.findIndex((user)=> user.id===id); // using shorthand syntax
    if(index!==-1)
    {
        return users.splice(index,1);
    }
} // Remove user function ends here




// Function to get the user
const getUser = (id)=>{
    const userFound= users.find((user)=>{
        return user.id===id;
    })
    if(!userFound)
    {
        return {
            error:'User is not found'
        }
    }
    return userFound;
}

//console.log(getOneUser(2));

// Function to get UsersInRoom
const getUsersInRoom = (room)=>{
    room = room.trim().toLowerCase();
    const usersInRoom = users.filter((user)=>{
        return user.room===room;
    })
    
    if(!usersInRoom){
        return{
            error: 'There is no user in the room'
        }    
    }
    return usersInRoom;
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username : 'Haider',
//     room : 'Islamabad'
// })

// console.log(getUser(22).room);

// addUser({
//     id: 21,
//     username : 'Imran',
//     room : 'Islamabad'
// })
// const userremoved= removeUser(22);
// console.log(userremoved[0].room);
//console.log("Users in room ",getUsersInRoom('Islamabad'));
// addUser({
//     id: 22,
//     username : 'Ali',
//     room : 'Phillidelphia'
// })

// addUser({
//     id: 21,
//     username : 'Haider',
//     room : 'Phillidelphia'
// })

//console.log(users);
// const RemovedUser = removeUser(33);
// console.log("Removed user:",RemovedUser)
// console.log(users);






