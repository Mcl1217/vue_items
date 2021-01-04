import { v4 as uuidv4 } from 'uuid';

function getUserTemId(){
    let userTempId = localStorage.getItem("USERTEMID_KEY")
    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem("USERTEMID_KEY",userTempId)
    }
    return userTempId
}
export {getUserTemId}

