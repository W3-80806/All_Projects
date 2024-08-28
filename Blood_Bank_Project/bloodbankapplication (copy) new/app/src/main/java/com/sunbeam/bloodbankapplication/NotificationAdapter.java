package com.sunbeam.bloodbankapplication;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class NotificationAdapter extends RecyclerView.Adapter<NotificationAdapter.ViewHolder> {
   Context context;
   List<NotificationModel> notificationList;

    public NotificationAdapter(Context context,List<NotificationModel> notificationList) {
        this.context = context;
        this.notificationList=notificationList;

    }

    @NonNull
    @Override
    public NotificationAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        boolean attachToRoot = false;
        View view = LayoutInflater.from(context).inflate(R.layout.item_layout,parent, attachToRoot);//false
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull NotificationAdapter.ViewHolder holder, int position) {
if(notificationList!= null && notificationList.size()>0){
NotificationModel notification=notificationList.get(position);
holder.registrationDate_tv.setText(notification.getRegistration_Date());
holder.hospitalname_tv.setText(notification.getHospital_Name());
holder.doner_tv.setText(notification.getDoner_Name());
holder.status_tv.setText(notification.getStatus());
}
else{
    return;
}
    }

    @Override
    public int getItemCount() {
        return notificationList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
       TextView registrationDate_tv,hospitalname_tv,doner_tv,status_tv;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            status_tv=itemView.findViewById(R.id.status_tv);
            registrationDate_tv=itemView.findViewById(R.id.registrationDate_tv);
            hospitalname_tv=itemView.findViewById(R.id.hospitalname_tv);
            doner_tv=itemView.findViewById(R.id.doner_tv);

        }
    }
}
