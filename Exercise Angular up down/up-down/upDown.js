function UpdownList() {
    const controller = this;
    controller.number = 0;
    controller.countUp = ()=> {
        controller.number++;
    }; 
    controller.countDown = ()=> {
        controller.number--;
    };
  }
  
  angular
  .module('UpdownApp')
  .component('upDown', 
    {

        template: 
        `
        <body>
        <div class="container">
        <div class="counter">
            <button ng-click="$ctrl.countUp();" class="up">Up</button>
            <p>{{$ctrl.number}}</p>
            <button ng-click="$ctrl.countDown();"  class="down">Down</button>
        </div>
        </div>
        <body>
   
        `, //or use templateUrl
        controller: UpdownList
    }
);

