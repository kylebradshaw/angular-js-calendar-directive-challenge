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
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'cal.html',
    transclude: true,
    controller: function($scope){
      $scope.$watchCollection('[calForm.year, calForm.month]', function(newVal, oldVal){
        console.log(newVal, 'newVal');
        var newDate = [newVal[0], parseFloat(newVal[1]) + 1];
        console.log(newDate, 'newDate');
        var dates = new Date(newDate);
        console.log(dates, 'dates');
        var monthlyRange = CalendarRange.getMonthlyRange(dates);
        $scope.weekly = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        $scope.days = monthlyRange;
        console.log($scope);
      });
    }
  }
}
