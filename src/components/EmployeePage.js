import Header from './Header'

const styles = {
    border: "5px solid brown",
    width: "300px",
    height: "600px",
    display: "block",
}

function EmployeePage() {
    return (
        <div style={styles}>
            <Header />
            <div>
                <h3>Julie Taylor</h3>
                <p>VP of Marketing</p>
                <hr/>
                <h3></h3>
                <p>VP of Marketing</p>
                <hr/>
                <h3></h3>
                <p>VP of Marketing</p>
                <hr/>
                <h3></h3>
                <p>VP of Marketing</p>
                <hr/>
                <h3></h3>
                <p>VP of Marketing</p>
                <hr/>
                

            </div>
        </div>
    )
}

export default EmployeePage