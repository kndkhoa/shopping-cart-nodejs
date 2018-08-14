var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping');


var product = [
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    }),
    new Product({
        imagePath: 'https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png',
        title: 'MACBOOK',
        description: 'Vỏ nhôm nguyên khối Unibody bóng bẩy và chắc chắn',
        price: 1000
    })
];

var done = 0;
for (var i = 0; i< product.lengthl; i++){
    product[i].save(function(err, result){
        done ++;
        if (done == product.length)
        {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

