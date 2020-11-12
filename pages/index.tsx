import Main from '../components/Main'
import { useSession } from 'next-auth/client'

const Index = () => {
  const [ session, loading ] = useSession()
  return (
    <Main>
      <h1 className={`text-5xl font-bold text-purple-500 ${loading ? 'animate-pulse': ''}`}>
    
        Hi {session && session.user ? session.user.name : 'Roy'}
      </h1>
    </Main>
  )
}

export default Index;
