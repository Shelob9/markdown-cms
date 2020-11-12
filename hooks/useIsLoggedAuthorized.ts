import { useMemo } from 'react'
import { useSession } from 'next-auth/client'
const useIsLoggedIn = () => {
	const [session, loading] = useSession()
	let isLoggedIn = useMemo<boolean>(() => {
		if (
			loading ||
			'object' !== typeof session ||
			!session.hasOwnProperty('user')
		) {
			return false
		}

		return true
	}, [session, loading])

	let userDisplayName = useMemo<string>(() => {
		if (!isLoggedIn) {
			return ''
		}

		return session.user.name
	}, [session, loading])

	return {
		isLoggedIn,
		userDisplayName,
		loading,
	}
}

export default useIsLoggedIn
