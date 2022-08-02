import SupesIndex from "./supes/SupesIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>See the Supes:</h2>
			<SupesIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
