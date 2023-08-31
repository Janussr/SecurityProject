<?php
require __DIR__ . '/src/cors/init.php';
require_once __DIR__ . '/router.php';

get('/security', '/public/index.php');
post('/security/product/create', 'src/Endpoints/CreateProduct.php');
get('/security/test', 'src/Endpoints/TestEndpoint.php');    
#any('/404', 'views/404.php');

get('/security/products', 'src/Endpoints/GetAllProducts.php');

//Product by ID.
get('/security/product/$id', 'src/Endpoints/GetProductById.php');

//Delete product.
post('/security/product/$id', 'src/Endpoints/DeleteProduct.php');

//Update price on a product.
post('/security/updateproduct', 'src/Endpoints/UpdateProductPrice.php');

//Update user info
post('/security/updateuser', 'src/Endpoints/UpdateUserInfo.php');