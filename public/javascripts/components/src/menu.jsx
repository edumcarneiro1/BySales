var Menu = React.createClass({
  changetab: function(e) {
    var text = e.target.innerHTML;
    this.props.changetab(text);
  },
  render: function() {
    var pages = [];
    var self = this;

    this.props.pages.map(function(elem,index) {
      pages.push(<button key={index}  onClick={self.changetab}>{elem.title}</button>);
    });
    return(
      <div className="portfolio-menu text-center mb-50">
        <button onClick={self.changetab} className="active">work</button>
        {pages}
        <button onClick={self.changetab}>contact</button>
      </div>
    );
  }
});
