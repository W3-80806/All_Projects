package com.sunbeam.bloodbankapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private EditText editEmail, editPassword;
    TextView textRegister;
    CheckBox checkboxRememberMe;
    private Button btnLogin;

    private static final String HARDCODED_EMAIL = "pooja@gmail.com";
    private static final String HARDCODED_PASSWORD = "123";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        btnLogin = findViewById(R.id.btnLogin);
        textRegister=findViewById(R.id.textRegister);
        checkboxRememberMe = findViewById(R.id.checkboxRememberMe);


        btnLogin.setOnClickListener(v -> {
            String email = editEmail.getText().toString();
            String password = editPassword.getText().toString();

            if (isValidInput(email, password)) {
                if (authenticate(email, password)) {
                    // Login successful, navigate to HomeActivity
                    Intent intent = new Intent(MainActivity.this, Search_Blood.class);
                    startActivity(intent);
                    finish(); // Prevent going back to LoginActivity on back press
                } else {
                    // Invalid email or password
                    Toast.makeText(MainActivity.this, "Invalid email or password", Toast.LENGTH_SHORT).show();
                }
            } else {
                // Invalid input
                Toast.makeText(MainActivity.this, "Please enter valid email and password", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private boolean isValidInput(String email, String password) {
        return !TextUtils.isEmpty(email) && !TextUtils.isEmpty(password);
    }

    private boolean authenticate(String email, String password) {
        return email.equals(HARDCODED_EMAIL) && password.equals(HARDCODED_PASSWORD);
    }


    public void gotoRegister(View view){
        Intent intent=new Intent(this, Search_Blood.class);
        startActivity(intent);
    }
}
//import androidx.appcompat.app.AppCompatActivity;
//
//import android.os.Bundle;
//import android.widget.ArrayAdapter;
//import android.widget.EditText;
//import android.widget.Spinner;
//import android.widget.TextView;
//
//public class MainActivity extends AppCompatActivity {
//
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//        EditText editTextText=findViewById(R.id.editTextText);
//
//
//
//    }
//}