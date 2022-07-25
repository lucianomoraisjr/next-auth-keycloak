import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"
import axios from 'axios';
export default function Component() {
  const { data: session } = useSession()

  useEffect(()=>{

  },[])

   async function consoletoken(){
    let  data  = await axios.get('/api/getYTData', {
      withCredentials: true,
    });
    console.log(data)
  }

  if (session != null) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => consoletoken()}>console</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('keycloak')}>Sign in</button>
      
      </>

  )
}