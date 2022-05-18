import { Link } from "react-router-dom";

const Shoppingcart = () => {
    return (

        <div>
        <nav className="navbar navbar-collapse navbar-expand-lg navbar-light">
            <img className=" navbar-brand listnav" src="/gallery.png" style={{width: '100px', height: '100px'}} />
            <div className="collapse navbar-collapse navdiv" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0   ">
              <li className=" listnav">
                  <Link  to="/components/Main" className="nav-link text-dark">Home</Link>
                </li>
                <li className=" listnav">
                  <Link  to="/components/Gallery" className="nav-link text-dark">Gallery</Link>
                </li>
                <li className=" listnav">
                  <Link className="nav-link text-dark" to="framing.html">Framing</Link>
                </li>
                <li className=" listnav">
                  <Link className="nav-link text-dark" to="main.html">Shop</Link>
                </li>
              </ul>
            </div>
          </nav>
          
        <section className="container content-section">
          <h2 className="section-header text-center">Your Shopping Cart</h2>
          <section className="container content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
              <span className="cart-item cart-header cart-column">ITEM</span>
              <span className="cart-price cart-header cart-column">PRICE</span>
              <span className="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div className="cart-items">
              <div className="cart-row">
                <div className="cart-item cart-column">
                  <img className="cart-item-image" src="PICTURES/a.jpg" width={100} height={100} />
                  <span className="cart-item-title">T-Shirt</span>
                </div>
                <span className="cart-price cart-column">$19.99</span>
                <div className="cart-quantity cart-column">
                  <input className="cart-quantity-input" type="number" defaultValue={1} />
                  <button className="btn btn-danger" type="button">REMOVE</button>
                </div>
              </div>
              <div className="cart-row">
                <div className="cart-item cart-column">
                  <img className="cart-item-image" src="PICTURES/a.jpg" width={100} height={100} />
                  <span className="cart-item-title">Album 3</span>
                </div>
                <span className="cart-price cart-column">$9.99</span>
                <div className="cart-quantity cart-column">
                  <input className="cart-quantity-input" type="number" defaultValue={2} />
                  <button className="btn btn-danger" type="button">REMOVE</button>
                </div>
              </div>
            </div>
            <div className="cart-total">
              <strong className="cart-total-title">Total</strong>
              <span className="cart-total-price">$39.97</span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
          </section>
        </section>
        <table cellSpacing={7} cellPadding={10} className="table3">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>
                <form action="mailto:inquire@galleryframesph.com" className="thisform  justify-content-center" method="post" encType="text/plain">
                  <h2> <center> SHIPPING FORM: </center></h2>
                  <label><strong>First Name:</strong></label>
                  <input className="tf1" type="text" name="First Name" defaultValue />
                  <label><strong>Last Name:</strong></label>
                  <input className="tf1" type="text" name="Last Name" defaultValue />
                  <label><strong>Address:</strong></label>
                  <input className="tf1" type="text" name="Address" defaultValue /><br /> 
                  <label><strong>Email:</strong></label>
                  <input className="tf1" type="Email" name="Email" defaultValue /> 
                  <label><strong>Contact No.:</strong></label>
                  <input className="tf1" type="Number" name="Contact No." defaultValue /> <br />
                  <label> <strong> Shipping: </strong></label>
                  <select className="tf1" id="Shipping" name="Shipping">
                    <option value={1}>-SELECT-</option>
                    <option value="LBC">LBC - 200PHP</option>
                    <option value="J&T">J&amp;T - 160PHP</option>
                    <option value="2GO">2GO - 180PHP </option>
                  </select> 
                  <label> <strong> Payment Method: </strong></label>
                  <select className="tf1" id="Payment Method" name="Payment Method">
                    <option value={2}>-SELECT-</option>    
                    <option value="BANK DEPOSIT">BANK DEPOSIT</option>
                    <option value="CASH ON DELIVERY">CASH ON DELIVERY</option>
                    <option value="G-CASH">G-CASH </option>
                  </select> 
                  <label className="text-center"><strong>Notes:</strong></label>
                  <textarea className="tf1 center" rows={1} cols={20} name="NOTES" value defaultValue={" "} /><br />
                  <center>        <input type="submit" />
                    <input type="reset" /> </center> <br />
                </form></td>
            </tr>
          </tbody>
        </table>
        {/* footer */}
        <footer className="bg-light py-5 border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-3 col-sm-12  mb-3">
                <img className="logof" src="PICTURES/gallery.png" />
              </div>
              <div className="col-lg-4 col-md-3 col-sm-12  mb-3 ">
                <p className="font-weight-bold">Contact US</p>
                <a className="textf text-dark"> Tel: +632 8521 3472 | +632 8521 5552</a><br />
                <a className="textf text-dark">Email: inquire@galleryframesph.com</a><br />
                <a className="textf text-dark">Gallery Frames Bldg., 2255 Osmeña Highway </a><br />
              </div>
              <div className="col-lg-4 col-md-3 col-sm-12  mb-3">
                <p className="font-weight-bold">SET APPOINTMENT</p>
                {/* te ikaw na maglagay saan isusubmit na email pag nag set ng appointment */}
                <label><strong>Name:</strong></label>
                <input type="text" name="First Name" defaultValue /><br />
                <label><strong>Date:</strong></label>
                <input type="date" name="Date" defaultValue /><br />
                <label><strong>Time:</strong></label>
                <input type="time" name="Time" defaultValue />
                <br />
                <label><strong>Email:</strong></label>
                <input type="email" name="Email" defaultValue />
                <input type="submit" />
              </div>
            </div>
            <div className="container-fluid text-center mt-2">
              <a href="https://www.facebook.com/GalleryFramesPH"> <i className="social-icon fab fa-facebook"> </i> </a>
              <a href="https://www.facebook.com/GalleryFramesPH"> <i className="social-icon fab fa-instagram"> </i> </a>
              <p>© 2021 All Rights Reserved | The Picture Frame Shop, Inc.</p>
            </div> 
          </div>
        </footer>
      </div>


    )
}

export default Shoppingcart;