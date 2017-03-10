var Page = React.createClass({
  render: function() {
    return(
      <section className="portfolio-details page-section">
        <div className="container">
          <div className="row pt-10">
            <div className="col-md-8 col-md-offset-2">
              <div className="project-desc  body-section">
                {this.props.page.body}
              </div>
              <div className="post-share">
                <ul>
                  <li>Share: </li>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
