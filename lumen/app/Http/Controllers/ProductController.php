<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function inactiveProduct($id){
        
        $product = DB::table('products')->where('id', $id)->first();

        if(!$product){
            return response()->json([
                "success" => false,
                "message" => "Product not found"
            ], 404);
        }

        DB::table('products')
        ->where('id', $id)
        ->update([
            'status' => 'inactive'
        ]);

        return response()->json([
            "success" => true,
            "message" => "Product status updated"
        ], 200);
    }

    public function createProduct(Request $request){

        $validator = Validator::make($request->all(), [
            'product' => 'required|string',
            'stock' => 'required|integer',
            'status' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Validation failed",
                "errors" => $validator->errors()
            ], 422);
        }

        DB::table('products')->insert([
            'product' => $request->product,
            'stock' => $request->stock,
            'status' => $request->status,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Product added successfully"
        ], 201);
    }

    public function buyProduct($id, Request $request){

        $validator = Validator::make(
            ['id' => $id] + $request->all(),
            [
                'id' => 'required|integer|exists:products,id',
                'quantity' => 'required|integer|min:1'
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Validation failed",
                "errors" => $validator->errors()
            ], 422);
        }

        $product = DB::table('products')->where('id', $id)->first();

        if (!$product || $product->stock < $request->quantity) {
            return response()->json([
                "success" => false,
                "message" => "Insufficient stock available"
            ], 400);
        }

        DB::table('products')
            ->where('id', $id)
            ->update([
                'stock' => $product->stock - $request->quantity
        ]);

        return response()->json([
            "success" => true,
            "message" => "Purchase successful, stock updated",
            "remaining_stock" => $product->stock - $request->quantity
        ], 200);
    }
}