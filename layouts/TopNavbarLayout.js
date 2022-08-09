import NavBar from '../components/Header/NavBar'

const TopNavbarLayout = ({children}) => {
	return (
		<>
		<NavBar/>
		<main> { children }</main>
		</>
	)
}

export default TopNavbarLayout