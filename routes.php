<?php
require __DIR__ . '/src/cors/init.php';
require_once __DIR__ . '/router.php';

//Views
get('/security', '/public/index.php');

//Endpoints

//Create Product
post('/security/product/create', 'src/Endpoints/CreateProduct.php');

//Get all Products
get('/security/products', 'src/Endpoints/GetAllProducts.php');

//Product by ID.
get('/security/product/$id', 'src/Endpoints/GetProductById.php');

//Delete product.
post('/security/deleteproduct', 'src/Endpoints/DeleteProduct.php');

//Update price on a product.
post('/security/updateproduct', 'src/Endpoints/UpdateProductPrice.php');

//Update user info
post('/security/updateuser', 'src/Endpoints/UpdateUserInfo.php');

//user by ID
get('/security/user/$id', 'src/Endpoints/getUserById.php');

//Delete user
post('/security/deleteuser', 'src/Endpoints/DeleteUser.php');

//Get all orders with products
get('/security/orders', 'src/Endpoints/GetAllOrderWithProduct.php');

//Get Order by id
get('/security/order/$id', 'src/Endpoints/GetOrderById.php');

//Delete order
post('/security/deleteorder', 'src/Endpoints/DeleteOrder.php');

//Register user
post('/security/register', 'src/Endpoints/RegisterUser.php');

//Login user
post('/security/login', 'src/Endpoints/Login.php');

//Logout user
post('/security/logout', 'src/Endpoints/Logout.php');

//Check user login
get('/security/checklogin', "src/Endpoints/CheckLogin.php");
