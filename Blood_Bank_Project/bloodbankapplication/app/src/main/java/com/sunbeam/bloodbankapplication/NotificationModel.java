package com.sunbeam.bloodbankapplication;


import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class NotificationModel   {

    //    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_notification);
//    }
    String Registration_Date;
    String Hospital_Name;
    String Doner_Name;
    String Status;

    public NotificationModel(String registration_Date, String hospital_Name, String doner_Name, String status) {
        Registration_Date = registration_Date;
        Hospital_Name = hospital_Name;
        Doner_Name = doner_Name;
        Status = status;
    }

    public String getRegistration_Date() {
        return Registration_Date;
    }

    public String getHospital_Name() {
        return Hospital_Name;
    }

    public String getDoner_Name() {
        return Doner_Name;
    }

    public String getStatus() {
        return Status;
    }

}
