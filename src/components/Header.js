const styles = {
    border: "2px solid blue",
    height: "40px",
    margin: "5px"
}

const stylesP = {
    marginTop : "10px"
}

function Header() {
    return (
        <div style={styles}>
            <p style={stylesP}>Employee Directory</p>
        </div>
    )
}

export default Header