import { Link } from "react-router-dom";

const Main = () =>{
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
          
          <div> 
            <img className="img1" src="/publicpic/imgmain.png" /> </div>
          <br />
          <h2 className="text-center"> Why Choose Us</h2>
          <p className="text1 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <section id="features" className="hiii">
            <div className="container">
              <div className="row">
                <div className="feature-box col-lg-3 col-md-12 text-center">
                  <i className="features-icon fas fa-check-circle fa-4x" />
                  <h3>Professional</h3>
                  <p>We are a member of PPFA (Professional Picture Frames Association).</p>
                </div>
                <div className="feature-box col-lg-3 col-md-12 text-center">
                  <i className="features-icon fas fa-award fa-4x" />
                  <h3>Experience</h3>
                  <p>Pioneer in the picture framing industry since 1966. </p>
                </div>
                <div className="feature-box col-lg-3 col-md-12 text-center">
                  <i className="features-icon fas fa-star fa-4x" />
                  <h3>Quality</h3>
                  <p>We ensure high quality picture frames that will last a lifetime. </p>
                </div>
                <div className="feature-box col-lg-3 col-md-12 text-center">
                  <i className="features-icon fas fa-heart fa-4x" />
                  <h3>Customizable</h3>
                  <p>We have the widest selection of frames to choose from. </p>
                </div>
              </div>
            </div>
          </section>
          {/* great things our clients says */}
          <section id="testimonials">
            <h1> Great Things Our Clients Say
            </h1>
            <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2 className="testimonial-text">"Great quality frames, high end quality at reasonable prices.”</h2>
                  <em>Mike C.</em>
                </div>
                <div className="carousel-item">
                  <h2 className="testimonial-text">“I am very satisfied with Gallery Frames. I am photographer and I usually request custom framing. They have a wide set of frames to choose from.”</h2>
                  <em>Kevin R.</em>
                </div>
                <div className="carousel-item">
                  <h2 className="testimonial-text">“Gallery Frames is highly recommended. All their frames are good quality and durable.”</h2>
                  <em>Monica S.</em>
                </div>
              </div>
              <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
          <section id="products">
            <h1>Products and Services</h1>
            <div id="productsCarousel" clas="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2 className="Commissioned Arts">
                  </h2></div>
                <div id="productsCarousel" clas="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                    </div>
                    <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  <h2 className="Moulding">
                  </h2></div> 
                <div id="productsCarousel" clas="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h2 className="Posters">
                      </h2></div>
                    <div id="productsCarousel" clas="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <h2 className="Our Works">
                          </h2></div> 
                      </div></div></div></div></div></div></section>
          {/* footer */}
          <footer className="bg-light py-5 border-top border-bottom">
            <div className="container">
              <div className="row">
                <div className="col col-lg-3 col-md-3 col-sm-12  mb-3">
                  <img className="logof" src="/gallery.png" />
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
                  <form action="mailto:crisselle@gmail.com" method="post" encType="text/plain">
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
      );
    }
  

  export default Main;