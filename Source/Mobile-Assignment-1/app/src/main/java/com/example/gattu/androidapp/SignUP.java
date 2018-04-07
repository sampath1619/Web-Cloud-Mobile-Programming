package com.example.gattu.androidapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class SignUP extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
    }

    public void CreateAccount(View v){
        EditText FName = findViewById(R.id.txt_FName);
        EditText LName = findViewById(R.id.txt_LName);
        EditText Email = findViewById(R.id.txt_Email);
        EditText Pass = findViewById(R.id.txt_Pwd);
        EditText UserName = findViewById(R.id.txt_UserName);
        TextView error = findViewById(R.id.lbl_error);

        String FirstName = FName.getText().toString();
        String LastName = LName.getText().toString();
        String email = Email.getText().toString();
        String pwd = Pass.getText().toString();
        String uname = UserName.getText().toString();

        if(!FirstName.isEmpty() && !LastName.isEmpty() && !email.isEmpty() && !pwd.isEmpty() && !uname.isEmpty()) {
            Intent intent = new Intent(SignUP.this, Index.class);
            startActivity(intent);
        }
        else
        {
            error.setText("Please enter all details");
        }
    }
}
