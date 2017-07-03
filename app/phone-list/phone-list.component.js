angular.
module('phoneList').
component('phoneList', {
    //Note : The URL is relative to our 'index.html' file
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        // var self = this;
        // self.orderProp = 'age';

        /* $http向我们的web服务器发出http get请求。
         * 服务器通过提供JSON文件中的数据进行响应  
         */
        // $http.get('phones/phones.json').then(function(response){
        //     self.phones = response.date;
        // });
        this.phones = [{
            name: 'iphone 3GS',
            snippet: '爱疯就是垃圾'
            // age: 1
        }, {
            name: '小米',
            snippet: '雷军ARE YOU ok?'
            // age: 2
        }, {
            name: 'this is test name',
            snippet: 'this is some test words'
            //age: 3
        }];
        // this.orderProp = 'age';
    }

});
