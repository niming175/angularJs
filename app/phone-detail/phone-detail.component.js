angular.
module('phoneDetail').
component('phoneDetail', {
    // template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    //修改为加载模板
    templateUrl: 'phone-detail/phone-detail.template.html',
    // controller: ['$routeParams',
    //     function phoneDetailController($routeParams) {
    //         this.phoneId = $routeParams.phoneId;

    //     }
    // ]

    //改为加载json数据

    /*
     * 为了构建HTTP的URL请求，我们使用了$routeParams.phoneld.它是通过$route
     * 服务从当前路由中提取出来的。
     */
    /*controller: ['$http', '$routeParams',
        function phoneDetailController($http, $routeParams) {
            var self = this;
            
            self.setImage=function setImage(imageUrl){
                self.mainImageUrl = imageUrl;
            }

            $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
                self.phone = response.data;

                #12 事件处理
                self.setImage(self.phone.images[0]);
            });
        }
    ]*/

    //#13 
    controller: ['$routeParams', 'Phone',
        function phoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            }

        }
    ]
});