import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const styles = {
    border: "5px solid yellow",
    width: "300px",
    height: "600px",
    display: "block",
}

function HomePage() {
    return (
        <div style={styles}>
            <Header/>
            <SearchBar/>
            <EmployeeList/>
        </div>
    )
}

export default HomePage

//import  here the searchbar, header, employeelist
//the employeelistitem is inside the employeelist
//render them in the homepage
//the homepage will be rendered in the app