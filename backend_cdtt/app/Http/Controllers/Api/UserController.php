<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    
    


    public function register(Request $request)
    {
        $user = new User;
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=Hash::make($request->input('password'));
        $user->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' =>$user],201); 
        
    }
    public function login(Request $request)
    {
        $user=User::where('email',$request->email)->first();
        if(!$user||!Hash::check($request->password,$user->password))
        {
            return response()->json(['message'=>'Email or password not mathced']);
        }
        else{
            return response()->json(['success' => true, 'message' => 'Thành công', 'data' =>$user],201); 
        }
        
    }

    public function user()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

}
