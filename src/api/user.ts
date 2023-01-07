import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const loginApi = async (email: string, password: string) => {
  const auth = getAuth();
  const response = await signInWithEmailAndPassword(auth, email, password)

  return response.user
}
export const signupApi = async (email: string, password: string) => {
  const auth = getAuth();
  const response = await createUserWithEmailAndPassword(auth, email, password)
  return response.user
}
export const logOut = async () =>{
  const auth = getAuth();
  return await signOut(auth)
}
