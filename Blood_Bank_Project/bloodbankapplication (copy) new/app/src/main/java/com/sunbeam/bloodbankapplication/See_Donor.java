package com.sunbeam.bloodbankapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class See_Donor extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_see_donor);
        String selectedData1 = getIntent().getStringExtra("SELECTED_DATA_1");
        String selectedData2 = getIntent().getStringExtra("SELECTED_DATA_2");

//        // Display the selected data
//        textView1.setText("Selected Data 1: " + selectedData1);
//        textView2.setText("Selected Data 2: " + selectedData2);
    }
    

}