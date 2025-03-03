window.onload = function () {
  const viewModel = {
    gridOptions: {
      dataSource: orders,
      showBorders: true,
      columns: [{
        dataField: 'OrderNumber',
        caption: 'Invoice Number',
        width: 130,
      }, {
        caption: 'City',
        dataField: 'CustomerStoreCity',
        hidingPriority: 0,
      }, {
        caption: 'State',
        dataField: 'CustomerStoreState',
        hidingPriority: 1,
      },
      'Employee', {
        dataField: 'OrderDate',
        dataType: 'date',
        hidingPriority: 2,
      }, {
        dataField: 'SaleAmount',
        format: 'currency',
      }],
    },
  };

  ko.applyBindings(viewModel, document.getElementById('grid'));
};
