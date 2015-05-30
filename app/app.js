angular.module('calendarDemoApp', [])
  .controller('calendarCtrl', CalendarCtrl)
  .directive('calendar', CalendarDirective);

CalendarCtrl.$inject = ['$scope'];

function CalendarCtrl($scope) {
  // $scope.dateRange = window.CalendarRange.getMonthlyRange(new Date());
  $scope.calRange = window.CalendarRange.init();
  $scope.calForm = {
    month: $scope.calRange.month + "", //cast to string
    year: $scope.calRange.year
  };
}

function CalendarDirective() {

}
