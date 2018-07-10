
export const NtfReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_NTF_SUCCESS':
          return [
            ...state,
            Object.assign({}, action.ntf)
          ];
      case 'FETCH_NTFS_SUCCESS':
            return action.ntfs;
      default:
            return state;
    }
  };
  
