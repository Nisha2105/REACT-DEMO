import './Header.css'

function Header(){
    return(
        <>
  <div className="header">
    <div>
      <span>
        <b>Chatterly</b>
      </span>
      <div className="chat">
        <i className="fa-regular fa-comment-dots" />
      </div>
    </div>
    <div className="profile">
      <div className="photo">
        <img
          src="./image/profile n.jpg"
          width={30}
          height={30}
          style={{ borderRadius: 30 }}
        />
      </div>
      <select value="name">
        <option>Nisha Dhanda</option>
        <option>Login In</option>
        <option>Login Out</option>
      </select>
    </div>
  </div>
  <div className="main">
    <div className="head2">
      <span className="filter">
        <b>Filters</b>
      </span>
      <span className="vertical" />
      <div className="dropdowns">
        <div className="by">
          <div id="by">Created By</div>
          <select value="name" className="all">
            <option>All</option>
          </select>
        </div>
        <div className="date">
          <div id="date">Published Date</div>
          <select value="name" className="selectdate">
            <option>Select Date</option>
          </select>
        </div>
      </div>
    </div>
    <div className="search">
      <span className="text">Search</span>
      <input type="text" placeholder="  Type here" />
      <span className="searchicon">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
    </div>
  </div>
  <div></div>
</>

    )
}
export default Header