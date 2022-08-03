import SupesIndex from "./supes/SupesIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2 style={{color:'white', textShadow: '3px 3px 3px black', margin: '30px'}}>See the Supes:</h2>
			<SupesIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
