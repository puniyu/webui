import { useTitle } from 'usehooks'

import { APP_NAME } from '@/utils/app'

const Dashboard = () => {
	useTitle(`Dashboard - ${APP_NAME} WebUI`)

	return (
		<>
			<div></div>
		</>
	)
}

export default Dashboard
