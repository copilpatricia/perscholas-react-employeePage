const stylesDiv = {
    border: "2px solid red",
    height: "60px",
    margin : "13px 5px",
}

const stylesH = {
    margin: "10px"
}

const stylesP = {
    margin: "10px"
}

function EmployeeListItem() {
  return (
    <div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>James King</h5>
        <p style={stylesP}>President and CEO</p>
      </div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>Julie Taylor</h5>
        <p style={stylesP}>VP of Marketing</p>
      </div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>Eugene Lee</h5>
        <p style={stylesP}>CFO</p>
      </div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>John Williams</h5>
        <p style={stylesP}>VP of Engineering</p>
      </div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>Ray Moore</h5>
        <p style={stylesP}>VP of Sales</p>
      </div>
      <div style={stylesDiv}>
        <h5 style={stylesH}>Paul Jones</h5>
        <p style={stylesP}>QA Manager</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
