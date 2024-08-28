package com.sunbeam.bloodbankapplication;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;

public class Search_Blood extends AppCompatActivity {
//    private  String selectedHospital, selectedBloodtype;
//    private TextView textblood, texthospital;
//    private Spinner hospitalspinner, bloodtypespinner;
//    private ArrayAdapter<CharSequence> hospitalAdapter , bloodtypeAdapter;
   // @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_search_blood);

////        hospitalspinner=findViewById(R.id.spinner_Hospital_Name);
////        hospitalAdapter =ArrayAdapter.createFromResource(this, R.array.array_hospital, R.layout.spinner_layout);
////        bloodtypespinner = findViewById(R.id.spinner_Blood_Type);
//
////        //------------------------------
//       // hospitalspinner.setDropDownWidth(android.R.layout.simple_spinner_item);
//
//    }
   // ------------------------------------------------------------------------
//    Spinner spinner;
// Connection con;
//    @SuppressLint("MissingInflatedId")
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_see_donor);
//       spinner=(Spinner)findViewById(R.id.spinner);
//        FillSpinner();
//    }
//    public void FillSpinner()
//    {
//        try {
//            Object ConnectionClass = null;
//            con = connectionClass(ConnectionClass.un.toString(),ConnectionClass.pass.toSting(),ConnectionClass.db.toString(),ConnectionClass.ip.toString());
//           String query="select * from spinner";
//       PreparedStatement stmt =con.prepareStatement(query);
//            ResultSet rs=stmt.executeQuery();
//            ArrayList<String> data = new ArrayList<String>();
//            while(rs.next()){
//                String.hospitalname=rs.getString("hospitalname");
//                data.add(hospitalname);
//            }
//            ArrayAdapter array =new ArrayAdapter(this, android.R.layout.simple_list_item_1,data);
//        spinner.setAdapter(array);
//        }catch (Exception ex)
//        {
//            ex.printStackTrace();
//        }
//    }
//    public Connection connectionClass(String user,String password, String database,String server){
//       StrictMode.ThreadPolicy policy=new StrictMode.ThreadPolicy.Builder().permitAll().build();
//       StrictMode.setThreadPolicy(policy);
//       Connection connection=null;
//       String connectionURL=null;
//       try {
//           Class.forName("net.sourceforge.jtds.jdbc.Driver");
//
//       }catch (Exception e){
//           Log.e("SQL Connection Error : ",e.getMessage());
//
//       }
//        return connection;
//    }
//    public void SeeDoner(View view){
//        startActivity(new Intent(this, See_Donor.class));
//    }


    //-------------------------------------------------------//



//     String[] arrayList;
//    String[] arrayList1;
//     String selectedData;
//    String selectedData1;
//    protected void onCreate(Bundle savedInstanceState) {
//
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_search_blood);
//       // @SuppressLint({"MissingInflatedId", "LocalSuppress"})
//        Spinner spinner=findViewById(R.id.spinner);
//        Spinner spinner1=findViewById(R.id.spinner_Blood_Type);
//        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
//            @Override
//            public void onItemSelected(AdapterView<?> adapterView, View view, int position, long id) {
//
//                String item = adapterView.getItemAtPosition(position).toString();
//                Toast.makeText(Search_Blood.this,"Selected Item:"+item,Toast.LENGTH_SHORT).show();
//                selectedData = arrayList[position];
//                selectedData1 = arrayList1[position];
//            }
//
//            @Override
//            public void onNothingSelected(AdapterView<?> parent) {
//
//            }
//        });
//
//        ArrayList<String> arrayList=new ArrayList<>();
//        arrayList.add("Ruby Hall Clinic");
//        arrayList.add("MJM HOSPITAL");
//        arrayList.add("Jehangir Hospital");
//        arrayList.add("DPU Hospital");
//        arrayList.add("Sanjeevani");
//        arrayList.add("Sunbeam");
//        ArrayAdapter<String> adapter=new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,arrayList);
//        adapter.setDropDownViewResource(android.R.layout.select_dialog_singlechoice);
//        spinner.setAdapter(adapter);
//
//
//        ArrayList<String> arrayList1=new ArrayList<>();
//        arrayList1.add("O+");
//        arrayList1.add("O-");
//        arrayList1.add("AB+");
//        arrayList1.add("AB-");
//        arrayList1.add("A+");
//        arrayList1.add("A-");
//        arrayList1.add("B-");
//        arrayList1.add("B-");
//
//        ArrayAdapter<String> adapterr=new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,arrayList1);
//        adapterr.setDropDownViewResource(android.R.layout.select_dialog_singlechoice);
//        spinner1.setAdapter(adapterr);
//
//
//
//
//    }
//    public void onClick(View v) {
//        // Pass data to ActivityB when the button is clicked
//        Intent intent = new Intent(this, See_Donor.class);
//        intent.putExtra("SELECTED_DATA", arrayList);
//        intent.putExtra("SELECTED_DATA_2", arrayList1);
//        startActivity(intent);
//    }


    //-------------------------------//

        Spinner spinner1, spinner2;
        String[] spinnerData1 = {"Ruby Hall Clinic", "MJM HOSPITAL", "Jehangir Hospital","DPU Hospital","Sanjeevani","Sunbeam"};
        String[] spinnerData2 = {"O+", "O-", "AB+","AB-","A+","A-","B+","B-"};

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_search_blood);

            spinner1 = findViewById(R.id.spinner);
            spinner2 = findViewById(R.id.spinner_Blood_Type);

            ArrayAdapter<String> adapter1 = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, spinnerData1);
            ArrayAdapter<String> adapter2 = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, spinnerData2);

            spinner1.setAdapter(adapter1);
            spinner2.setAdapter(adapter2);

            Button button = findViewById(R.id.button2);
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    String selectedData1 = spinnerData1[spinner1.getSelectedItemPosition()];
                    String selectedData2 = spinnerData2[spinner2.getSelectedItemPosition()];

                    // Pass data to ActivityB
                    Intent intent = new Intent(Search_Blood.this, See_Donor.class);
                    intent.putExtra("SELECTED_DATA_1", selectedData1);
                    intent.putExtra("SELECTED_DATA_2", selectedData2);
                    startActivity(intent);
                }
            });
        }


}