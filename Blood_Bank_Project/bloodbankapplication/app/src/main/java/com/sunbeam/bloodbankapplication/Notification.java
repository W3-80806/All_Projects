package com.sunbeam.bloodbankapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;
import java.util.List;

public class Notification extends AppCompatActivity {
RecyclerView recyclerView;
NotificationAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notification);
   recyclerView=findViewById(R.id.recycler_view);
   setRecyclerView();
    }

    private void setRecyclerView() {
   recyclerView.setHasFixedSize(true);
   recyclerView.setLayoutManager(new LinearLayoutManager(this));
   adapter=new NotificationAdapter(this,getList());
   recyclerView.setAdapter(adapter);

    }
    private List<NotificationModel>getList(){
        List<NotificationModel> notificationModelList=new ArrayList<>();
        notificationModelList.add(new NotificationModel("2024-02-05 10:56:07","Ruby Hall Clinic","Sakshi","Accepted"));
        notificationModelList.add(new NotificationModel("","","",""));
        notificationModelList.add(new NotificationModel("","","",""));
        notificationModelList.add(new NotificationModel("","","",""));
        notificationModelList.add(new NotificationModel("","","",""));
        notificationModelList.add(new NotificationModel("","","",""));


        return notificationModelList;
    }
//    String Registration_Date;
//    String Hospital_Name;
//    String Doner_Name;
//    String Status;
//
//    public Notification(String registration_Date, String hospital_Name, String doner_Name, String status) {
//        Registration_Date = registration_Date;
//        Hospital_Name = hospital_Name;
//        Doner_Name = doner_Name;
//        Status = status;
//    }
//
//    public String getRegistration_Date() {
//        return Registration_Date;
//    }
//
//    public String getHospital_Name() {
//        return Hospital_Name;
//    }
//
//    public String getDoner_Name() {
//        return Doner_Name;
//    }
//
//    public String getStatus() {
//        return Status;
  //  }

}