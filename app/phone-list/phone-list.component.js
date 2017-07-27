angular.
module('phoneList').
component('phoneList', {
    //Note : The URL is relative to our 'index.html' file
    templateUrl: 'phone-list/phone-list.template.html',
    /*controller: ['$http', //内联注解？？？
        function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';

            * $http向我们的web服务器发出http get请求。
            * 服务器通过提供JSON文件中的数据进行响应  
             
             
            var phone_01 = [{
                name: '1、iphone 3GS',
                snippet: '爱疯就是垃圾',
                age: 1
            }, {
                name: '2、小米',
                snippet: '雷军ARE YOU ok?',
                age: 2
            }, {
                name: '3、this is test name',
                snippet: 'this is some test words',
                age: 3
            }, {
                name: '0、test',
                snippet: 'this is some test words',
                age: 4
            }];
            $http.get('phones/phones.json').then(function(response) {
                self.phones = response.data;
            });
            
            //this.orderProp = 'age'; //默认为age排序
        }
    ]*/

    //#13
    controller: ['Phone',
        function PhoneListController(Phone) {
            this.phones = Phone.query();
            this.orderProp = 'age';

        }
    ]
});