<?php

class UpdateProductDto {
    public $id;
    public $price;

    public function __construct( $id ,$price ) {
        $this->id = $id;
        $this->price = $price;
    }


}
