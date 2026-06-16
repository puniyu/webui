import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { DashBoard_ROUTE } from '@/utils/router'

const Home = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(DashBoard_ROUTE, { replace: true })
	}, [navigate])

	return null
}

export default Home
