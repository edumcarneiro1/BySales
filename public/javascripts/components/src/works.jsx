var Works = React.createClass({
  render: function() {
    var images = [];

    this.props.works.map(function(elem,index) {
      images.push(
            <div key={index} className="col-md-4 col-sm-6 col-xs-12 grid-item">
              <div className="portfolio hover-style">
                <div className="portfolio-img">
                  <img src={elem.image} alt="" />
                  <div className="portfolio-view">
                    <a className="img-poppu" href={elem.image}>
                      <span className="plus"></span>
                    </a>
                  </div>
                  <div className="portfolio-title title-style-1">
                    <h3><a href="#">{elem.name}</a></h3>
                    <span>{elem.description}</span>
                  </div>
                </div>
              </div>
            </div>
      );
    });

    return(
      <div className="row">
        <div className="grid">
          {images}
        </div>
      </div>
    );
  }
});
