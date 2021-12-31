import React from 'react'
import axios from 'axios';
import { atom, selector, useRecoilValue, useSetRecoilState, useRecoilState, selectorFamily, useRecoilValueLoadable } from 'recoil'
import { ErrorBoundary } from '../ErrorBoundary';

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 2,
});

const tableOfUsers = [{ name: "amy"}, {name: "chio"},]

// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({get}) => {
//         return tableOfUsers[get(currentUserIDState)].name;
//     },
// });

// const currentUserNameQuery = selector({
//     key: 'CurrentUserName',
//     get: async ({get}) => {
//         const response = await axios.get(`/api/user-name?id=${get(currentUserIDState)}`);
//         return response.data.name;
//     },
// });

const currentUserNameQuery = selectorFamily({
    key: 'CurrentUserName',
    get: (id) => async () => {
        const response = await axios.get(`/api/user-name?id=${id}`);
        return response.data.name;
    },
    cachePolicy_UNSTABLE: { eviction: "most-recent" },
});
  
  
function CurrentUser() {
    const userName = useRecoilValueLoadable(currentUserNameQuery(1));

    if(userName.state === 'loading'){
        return <dvi>loading...</dvi>;
    }
    if(userName.state === 'hasError'){
        return <dvi>Something wrong...</dvi>;
    }
    return (
        <div>{userName.contents}
        </div>
    );
}

export default function CurrentUserInfo(){
    return (
        <CurrentUser />
    // <ErrorBoundary>
    //     <React.Suspense fallback={<div>Loading...</div>}>
    //         <CurrentUser />
    //     </React.Suspense>
    // </ErrorBoundary>
    );
}
