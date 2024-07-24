import './Footer.css'

function Footer(){
    return(
        <>
  <div className="bottom">
    <div className="Training-blog">
      <span className="training">
        <b>Training </b>
      </span>
      <span className="blog">
        <b>Blog</b>
      </span>
      <pre className="para">
        {"            "}Welcome To Our Technical Blog, Where We Delve Into The
        {"\n"}
        {"          "}World Of Cutting-Edge Technologies And Explore Their
        {"\n"}
        {""}Practical Applications.                   {"\n"}
        {"            "}
      </pre>
    </div>
    <div className="category">
      <span className="cat">CATEGORY</span>
      <pre className="list">
        {"     "}HTML{"\n"}
        {"    "}CSS{"\n"}
        {"           "}JAVASCRIPT{"\n"}
        {"         "}VS CODE{"\n"}
        {"             "}
      </pre>
    </div>
    <div className="in-touch">
      <span className="get">GET IN TOUCH</span>
      <pre className="contact">
        {"            "}+91-8XXX-XXX-XX{"\n"}
        {"            "}demo@gmail.com{"\n"}
        {"            "}
      </pre>
    </div>
    <div className="follow">
      <span className="us">FOLLOW US ON</span>
      <div className="icons">
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-linkedin-in" />
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="copyright">© 2023 TRAININGBLOG</div>
    <div className="made">Made With ❤️ Mohali, India</div>
  </div>
</>

    )
}
export default Footer
