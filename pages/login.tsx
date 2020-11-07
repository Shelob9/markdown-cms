import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

 function LoginPage() {
  const [ session, loading ] = useSession()
   console.log(session);
  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.name} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}

export default LoginPage;