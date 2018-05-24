'use strict'
{
    let theMaths = {
        templateUrl: `calculator.html`,

        controller: function(){
            let vm = this;
            vm.answer = 0;
            vm.calcAdd = function(a, b){
                vm.answer = Number(a) + Number(b);
            }

            vm.calcMult = function(a, b){
                vm.answer = Number(a) * Number(b);
            }
        }
    }
    angular
        .module("calc")
        .component("theMaths", theMaths);
}