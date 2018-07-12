
export const NtfReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_NTF_SUCCESS':
          return [
            ...state,
            Object.assign({}, action.ntfs)
          ];
      case 'FETCH_NTFS_SUCCESS':
            return action.ntfs;
      case 'CREATE_NTF_FAILURE':
            return action.ntfs.message;
      default:
            return state;
    }
  };
  
