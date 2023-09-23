<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;

Route::get('category/index',[CategoryController::class,'index']);
Route::get('category/show/{id}', [CategoryController::class, 'show']);
Route::post('category/store', [CategoryController::class, 'store']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);


Route::get('product/product_list/{limit}/{category_id?}/{status?}', [ProductController::class, 'product_list']);
Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_list']);
Route::get('product_all/{limit}', [ProductController::class, 'product_all']);
Route::get('product_category/{category_id}/{limit}', [ProductController::class, 'product_category']);
Route::get('product_brand/{brand_id}/{limit}', [ProductController::class, 'product_brand']);
Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);

Route::get('product/index',[ProductController::class,'index']);
Route::get('product/show/{id}', [ProductController::class, 'show']);
Route::post('product/store', [ProductController::class, 'store']);
Route::post('product/update/{id}', [ProductController::class, 'update']);
Route::delete('product/destroy/{id}', [ProductController::class, 'destroy']);