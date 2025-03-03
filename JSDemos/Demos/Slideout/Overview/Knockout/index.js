window.onload = function () {
  function ViewModel() {
    const that = this;
    that.swipeValue = ko.observable(true);
    that.menuVisible = ko.observable(true);
    that.products = products;
    that.toolbarItems = [{
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'menu',
        onClick() { that.showMenu(); },
      },
    }, {
      location: 'center',
      template: 'title',
    }];
    that.showMenu = function () {
      that.menuVisible(!that.menuVisible());
    };
  }
  ko.applyBindings(new ViewModel(), document.getElementById('slideout'));
};
