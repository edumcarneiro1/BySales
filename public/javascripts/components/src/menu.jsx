var Menu = React.createClass({
  render: function() {
    var pages = [];
    this.props.pages.map(function(elem,index) {
      pages.push(<button>{elem.title}</button>);
    });
    return(
      <div className="portfolio-menu text-center mb-50">
        <button className="active">WORK</button>
        {pages}
        <button>CONTACT</button>
      </div>
    );
  }
});
