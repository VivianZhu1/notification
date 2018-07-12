export const StatusReducer = ( state=[], action) => {

    switch (action.type) {
        case 'CREATE_NTF_SUCCESS':
            // return " Succeed:" + action.ntfs["id"];
            return "Succeed! Notification Id# "+action.ntfs["id"]+" created! You can check it in View/Edit Page."
        case 'CREATE_NTF_FAILURE':
             return "Failed! Notification creation failure due to: "+ action.ntfs.message
        default: 
            return state;
    }

};