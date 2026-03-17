import { useTitle } from 'ahooks'

import { useSetPageTitle } from '@/hooks/page'
import { APP_NAME } from '@/utils/app'

const Dashboard = () => {
	useTitle(`Dashboard - ${APP_NAME} WebUI`)
	useSetPageTitle('首页')

	return (
		<>
			<div></div>
		</>
	)
}

export default Dashboard
