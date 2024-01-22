import EmployeeListItem from "./EmployeeListItem"

const styles = {
    border: "3px solid purple",
    height: "82%",
    margin: "5px"
}

function EmployeeList() {
    return (
        <div style={styles}>
            <EmployeeListItem/>
        </div>
    )
}

export default EmployeeList