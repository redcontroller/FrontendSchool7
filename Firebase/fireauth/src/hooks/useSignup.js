import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);
    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const signup = (email, password, displayName) => {

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                if(!user){
                    throw new Error('회원정보를 불러올수 없습니다.');
                }

                // 회원 정보 업데이트 함수
                updateProfile(appAuth.currentUser, {displayName})
                    .then(() => {
                        // 회원 정보를 context에 업데이트를 합니다.
                        dispatch({type: 'login', payload: user});
                        setError(null);
                        setIsPending(false);

                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false);
                        console.error(err);
                    })

            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(err);
            });
    }

    return { error, isPending, signup }
}