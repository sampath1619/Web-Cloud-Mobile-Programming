package com.example.gattu.androidapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class Index extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index);
    }

    public void Setting(View v){
        Intent intent = new Intent(Index.this, Setting.class);
        startActivity(intent);
    }

    public void Help(View v){
        Intent intent = new Intent(Index.this, Help.class);
        startActivity(intent);
    }
}
