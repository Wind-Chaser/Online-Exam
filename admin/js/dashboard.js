var rootApp=angular.module('rootApp',['mainApp','examApp']);
var appMain = angular.module('mainApp',[]);
appMain.controller('mainCtrl',['$scope','$http',function($scope,$http){
$scope.Logout=function(){
   $http.get('/logout').then(function (response){
     if(response.status===200){
       console.log("done");
       window.location="/loginpage";
     }
   });
}
$http.get('/name').then(function(response){
   $scope.name=response.data;
});
$scope.Profile=function (){
 window.location="/profile";
}
$scope.Setting=function (){
  winddow.location="/settings";
}
}]);
appMain.controller('profileCtrl',['$scope','$http',function($scope,$http){
$http.get('/profileDetails').then(function(response){
 userProfile=response.data;
 console.log(userProfile);
 $scope.myProfile={};
 if(userProfile){
   $scope.myProfile.name=userProfile[0].username;
   $scope.myProfile.phone=userProfile[0].phone;
   $scope.myProfile.email=userProfile[0].email;
   $scope.myProfile.address=userProfile[0].address;
   $scope.myProfile.country=userProfile[0].country;
   $scope.myProfile.gender=userProfile[0].gender;
   $scope.myProfile.job=userProfile[0].job;
   $scope.myProfile.birthdate=userProfile[0].birthdate;
   $scope.myProfile.profilepic=userProfile[0].profilepic;
 }
},function (error){console.log("error in profile http")});
}]);
