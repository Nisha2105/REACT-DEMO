import './Product.css'

function Product(props){
// const image ="../Product/img1.png"
return(
    <>
        <section className="products">
            <div className="card">
                <div className="title"><h2>{props.title}</h2></div>
                <div className="image">
                    <img src={props.image} alt=""></img>
                </div>
                <div className="price">Price:{props.price}</div>
                <div className="desc" style={{backgroundColor:"grey"}}>Description:{props.desc}</div>
            </div>

        </section>
    </>
)

}
export default Product;