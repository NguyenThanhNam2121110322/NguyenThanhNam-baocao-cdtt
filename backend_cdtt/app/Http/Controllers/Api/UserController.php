<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    
    public function index()
    {
        $user = User::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'users' => $user],
            200
        );
    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'user' => $user],
            200
        );
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; //form
        // $user->slug = Str::of($request->name)->slug('-');
        // $brand->image = $request->name;
        // $user->sort_order = $request->sort_order; //form
        // $user->metakey = $request->metakey; //form
        // $user->metadesc = $request->metadesc; //form
        // $user->created_at = date('Y-m-d H:i:s');
        // $user->created_by = 1;
        // $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form
        // $user->slug = Str::of($request->name)->slug('-');
        // $user->image = $request->name;
        // $user->sort_order = $request->sort_order; //form
        // $user->metakey = $request->metakey; //form
        // $user->metadesc = $request->metadesc; //form
        // $user->updated_at = date('Y-m-d H:i:s');
        // $user->updated_by = 1;
        // $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
    }
    public function destroy($id)
    {
        $user=User::find($id);
        if($user==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $user->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
}


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
