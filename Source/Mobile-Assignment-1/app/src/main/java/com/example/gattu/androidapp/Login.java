package com.example.gattu.androidapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class Login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void SignUP(View V){
        Intent intent = new Intent(Login.this,SignUP.class);
        startActivity(intent);
    }

    public void SignIn(View V){
        Intent intent = new Intent(Login.this,MainActivity.class);
        startActivity(intent);
    }
}
