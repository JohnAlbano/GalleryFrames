import { Link } from "react-router-dom";

const Gallery = () =>{
    return (

        <div>

        &lt;<nav className="navbar navbar-collapse navbar-expand-lg navbar-light">
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

        <div className="font1">
          <h1 className="display-4 text-center mb-4 mt-4">Services and Products</h1>
          <h3 className="display-5 text-center mb-2 mt-2"> Commissioned Arts</h3>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
          <div className="col-sm">
            <img src="/publicpic/imgbalance.jpg" className="figure-img img-fluid rounded" />
          </div>
          <div className="col-sm">
            <img src="/publicpic/imgopenings.jpg" className="figure-img img-fluid rounded" />
          </div>
          <div className="col-sm">
            <img src="/publicpic/imgdeface1.jpg" className="figure-img img-fluid rounded" />
          </div>
          <div className="col-sm">
            <img src="/publicpic/imgcontinuum.jpg" className="figure-img img-fluid rounded" />
          </div>
          <div className="col-sm">
            <img src="/publicpic/imgnvrbefore4.jpg" className="figure-img img-fluid rounded" />
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
            <div className="col-sm">
              <img src="/publicpic/imghowitwas.jpg" className="figure-img img-fluid rounded" />
            </div>
            <div className="col-sm">
              <img src="/publicpic/imgnvrhasbeen1.jpg" className="figure-img img-fluid rounded" />
            </div>
            <div className="col-sm">
              <img src="/publicpic/imgfourfolds.jpg" className="figure-img img-fluid rounded" />
            </div>
            <div className="col-sm">
              <img src="/publicpic/imgotherside.jpg" className="figure-img img-fluid rounded" />
            </div>
            <div className="col-sm">
              <img src="/imgdisillusion.jpg" className="figure-img img-fluid rounded" />
            </div>
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
              <div className="col-sm">
                <img src="/publicpic/imgtimeimmemorial.jpg" className="figure-img img-fluid rounded" />
              </div>
              <div className="col-sm">
                <img src="/publicpic/imgsolstice.jpg" className="figure-img img-fluid rounded" />
              </div>
              <div className="col-sm">
                <img src="/publicpic/imgwhiteineverything.jpg" className="figure-img img-fluid rounded" />
              </div>
              <div className="col-sm">
                <img src="/publicpic/imgnvrwillbe3.jpg" className="figure-img img-fluid rounded" />
              </div>
              <div className="col-sm">
                <img src="/publicpic/imgmap.jpg" className="figure-img img-fluid rounded" />
              </div>
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
                <div className="col-sm">
                  <img src="/publicpic/imgspontaneity.jpg" className="figure-img img-fluid rounded" />
                </div>
                <div className="col-sm">
                  <img src="/publicpic/imgduality.jpg" className="figure-img img-fluid rounded" />
                </div>
                <div className="col-sm">
                  <img src="/publicpic/imgnvrseemto2.jpg" className="figure-img img-fluid rounded" />
                </div>
                <div className="col-sm">
                  <img src="/publicpic/imginstantaneous.jpg" className="figure-img img-fluid rounded" />
                </div>
                <div className="col-sm">
                  <img src="/publicpic/imgwhimsical.jpg" className="figure-img img-fluid rounded" />
                </div>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
                  <div className="col-sm">
                    <img src="/publicpic/imgdistorted3.jpg" className="figure-img img-fluid rounded" />
                  </div>
                  <div className="col-sm">
                    <img src="/publicpic/imgdayin.jpg" className="figure-img img-fluid rounded" />
                  </div>
                  <div className="col-sm">
                    <img src="/publicpic/imgsomeday.jpg" className="figure-img img-fluid rounded" />
                  </div>
                  <div className="col-sm">
                    <img src="/publicpic/imgdefenses.jpg" className="figure-img img-fluid rounded" />
                  </div>
                  <div className="col-sm">
                    <img src="/publicpic/imgstepfurther.jpg" className="figure-img img-fluid rounded" />
                  </div>
                  <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
                    <div className="col-sm">
                      <img src="/publicpic/imgdenied2.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="/publicpic/imgfromafar.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="/publicpic/imghurry.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="/publicpic/imgmadonna.jpg" className="figure-img img-fluid rounded" />
                    </div>
                  </div>
                  {/* moulding */}
                  <h3 className="display-5 text-center mb-2 mt-2"> Moulding </h3>
                  <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                      <img src="PICTURES/ajpg" className="figure-img img-fluid rounded" />
                    </div>
                  </div>
                  {/* posters */}
                  <h3 className="display-5 text-center mb-2 mt-2"> posters </h3>
                  <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mr-3 ml-3">
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                    <div className="col">
                      <img src="PICTURES/a.jpg" className="figure-img img-fluid rounded" />
                    </div>
                  </div>
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
                          <form action="mailto:inquire@galleryframesph.com" method="post" encType="text/plain">
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
                          </form></div>
                      </div>
                      <div className="container-fluid text-center mt-2">
                        <a href="https://www.facebook.com/GalleryFramesPH"> <i className="social-icon fab fa-facebook"> </i> </a>
                        <a href="https://www.facebook.com/GalleryFramesPH"> <i className="social-icon fab fa-instagram"> </i> </a>
                        <p>© 2021 All Rights Reserved | The Picture Frame Shop, Inc.</p>
                      </div> 
                    </div>
                  </footer>
                </div>      
              </div>
            </div></div></div></div>
      
    );
  }


export default Gallery;