var Contact = React.createClass({
  render: function() {
    return(
      <section className="contact-area contact-section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="conract-area-bottom">
                          <h3 className="main-contact">Get In Touch</h3>
                          <form id="contact-form" action="#" method="post">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="main-input">
                                          <input name="name" placeholder="Name*" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="main-input mrg-eml mrg-contact">
                                          <input name="email" placeholder="Email*" type="email" />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                     <div className="main-input mt-20 mb-20">
                                          <input name="subject" placeholder="Subject*" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="text-leave2">
                                          <textarea name="message" placeholder="Type Your Message......."></textarea>
                                          <button className="submit" type="submit">Send Message</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                          <p className="form-messege"></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    );
  }
});
