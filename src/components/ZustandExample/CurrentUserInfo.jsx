import React from 'react'
import axios from 'axios';
import { ErrorBoundary } from '../ErrorBoundary';
import create from 'zustand'

const useStore = create((set) => ({
    userName: "dddd",
    fetchUserName: async (id) => {
        const response = await axios.get(`/api/user-name?id=${id}`);
        console.log(id);
        set({userName : response.data.name});
    }
}));
  
  
function CurrentUser() {
    const userName = useStore(state => state.userName);

    return (
        <div>
            {userName}
        </div>
    );
}

export default function CurrentUserInfo(){
    const fetchUserName = useStore((state) => state.fetchUserName);

    return (
        <>
            <CurrentUser />
            <input onChange={(e) => fetchUserName(e.target.value)} />
        </>
    // <ErrorBoundary>
    //     <React.Suspense fallback={<div>Loading...</div>}>
    //         <CurrentUser />
    //     </React.Suspense>
    // </ErrorBoundary>
    );
}
