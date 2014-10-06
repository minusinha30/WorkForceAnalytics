
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: '/partials/dashboard.html'
        })
        .when('/headcount', {
            controller: 'headcountController',
            templateUrl: '/partials/headcount.html'
        })
        .when('/talentsearch', {
            controller: 'customersController',
            templateUrl: '/partials/talentsearch.html'
        })
        .when('/trends', {
            controller: 'customersController',
            templateUrl: '/partials/trends.html'
        });
});

app.controller('dashboardController', function($scope,$http) {

        var role1=0;
        var role2=0;
        var role3=0;
        var role4=0;
        var role5=0;
        var region1=0;
        var region2=0;
        var region3=0;
        var region4=0;

    $http.get('dummy_data.json').success(function(response)
        {
            $scope.employees = response.employees;

            for (var i= 0, len = $scope.employees.length;i<len;i++) {

                if ($scope.employees[i].employmentStatus=="Active"){

                if ($scope.employees[i].role == 'Developer'||$scope.employees[i].role == 'developer') {
                    role1 = role1 + 1;

                }
                if ($scope.employees[i].role == 'Administrator') {
                    role2 = role2 + 1;

                }
                if ($scope.employees[i].role == 'Financial Analyst') {
                    role3 = role3 + 1;

                }
                if ($scope.employees[i].role == 'Marketing') {
                    role4 = role4 + 1;

                }
                if ($scope.employees[i].role == 'Hiring Manager') {
                    role5 = role5 + 1;

                }

                if ($scope.employees[i].Region== 'New York') {
                    region1 = region1 + 1;
                }

                else if ($scope.employees[i].Region== 'California') {
                    region2 = region2 + 1;
                }

                else if ($scope.employees[i].Region== 'Texas') {
                    region3 = region3 + 1;
                }
                else {
                    region4 = region4 + 1; }


             }
        }

            $scope.data1 = [
                {
                    value: role1,
                    color:'#F7464A',
                    highlight: '#FF5A5E',
                    label: 'Red - Developer'
                },
                {
                    value: role2,
                    color: '#46BFBD',
                    highlight: '#5AD3D1',
                    label: 'Green - Administrator'
                },
                {
                    value: role3,
                    color: '#FDB45C',
                    highlight: '#FFC870',
                    label: 'Yellow - Financial Analyst'
                },
                {
                    value: role4,
                    color: '#003366',
                    highlight: '#FFC870',
                    label: 'Blue - Marketing'
                },
                {
                    value: role5,
                    color: '#FF66CC',
                    highlight: '#FFC870',
                    label: 'Pink - Hiring Manager'
                }
            ];
            $scope.data2 = {
                labels: ["New York", "California", "Texas", "Other"],
                datasets: [
                    {
                        label: "Region Wise Distribution",
                        fillColor: "rgba(420,120,120,0.5)",
                        strokeColor: "rgba(100,100,220,0.8)",
                        highlightFill: "rgba(120,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [region1,region2,region3,region4]
                    }
                ]
            };

        });


});

app.controller('headcountController', function($scope,$http) {

    var role1=0;
    var role2=0;
    var role3=0;
    var role4=0;
    var role5=0;
    var region1=0;
    var region2=0;
    var region3=0;
    var region4=0;

    $http.get('dummy_data.json').success(function(response)
    {
        $scope.employees = response.employees;

        for (var i= 0, len = $scope.employees.length;i<len;i++) {

            if ($scope.employees[i].employmentStatus=="Active"){

                if ($scope.employees[i].role == 'Developer'||$scope.employees[i].role == 'developer') {
                    role1 = role1 + 1;

                }
                if ($scope.employees[i].role == 'Administrator') {
                    role2 = role2 + 1;

                }
                if ($scope.employees[i].role == 'Financial Analyst') {
                    role3 = role3 + 1;

                }
                if ($scope.employees[i].role == 'Marketing') {
                    role4 = role4 + 1;

                }
                if ($scope.employees[i].role == 'Hiring Manager') {
                    role5 = role5 + 1;

                }

                if ($scope.employees[i].Region== 'New York') {
                    region1 = region1 + 1;
                }

                else if ($scope.employees[i].Region== 'California') {
                    region2 = region2 + 1;
                }

                else if ($scope.employees[i].Region== 'Texas') {
                    region3 = region3 + 1;
                }
                else {
                    region4 = region4 + 1; }


            }
        }

        $scope.data1 = [
            {
                value: role1,
                color:'#F7464A',
                highlight: '#FF5A5E',
                label: 'Red - Developer'
            },
            {
                value: role2,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'Green - Administrator'
            },
            {
                value: role3,
                color: '#FDB45C',
                highlight: '#FFC870',
                label: 'Yellow - Financial Analyst'
            },
            {
                value: role4,
                color: '#003366',
                highlight: '#FFC870',
                label: 'Blue - Marketing'
            },
            {
                value: role5,
                color: '#FF66CC',
                highlight: '#FFC870',
                label: 'Pink - Hiring Manager'
            }
        ];
        $scope.data2 = {
            labels: ["New York", "California", "Texas", "Other"],
            datasets: [
                {
                    label: "Region Wise Distribution",
                    fillColor: "rgba(420,120,120,0.5)",
                    strokeColor: "rgba(100,100,220,0.8)",
                    highlightFill: "rgba(120,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [region1,region2,region3,region4]
                }
            ]
        };

    });


});
