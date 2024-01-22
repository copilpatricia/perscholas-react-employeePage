const styles = {
    border: "2px solid green",
    height: "33px",
    margin: "5px"
    
}

const stylesInput = {
    marginTop: "4px",
    width: "95%",
    borderRadius: "5px",
    border: "1px groove grey",
    height: "20px"
}

function SearchBar() {
    return (
        <div style={styles}>
            <input type="text" style={stylesInput}></input>
        </div>
    )
}

export default SearchBar;