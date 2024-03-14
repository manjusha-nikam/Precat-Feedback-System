package com.sunbeaminfo.feedbacksystem.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sunbeaminfo.feedbacksystem.R;
import com.sunbeaminfo.feedbacksystem.api.RetrofitClient;
import com.sunbeaminfo.feedbacksystem.entity.student;
import org.json.JSONObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity2 extends AppCompatActivity {
    EditText editEmail, editPassword;
    CheckBox checkBoxRememberMe;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login2);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        checkBoxRememberMe = findViewById(R.id.checkBoxRememberMe);
    }
    public void login(View view) {
        student s = new student();
        s.setEmail(editEmail.getText().toString());
        s.setPassword(editPassword.getText().toString());

        if (checkBoxRememberMe.isChecked())
            getSharedPreferences("mobileStore", MODE_PRIVATE).edit().putBoolean("login_status", true).apply();

        RetrofitClient.getInstance().getApi().loginUser(s).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
//                JsonArray array = response.body().getAsJsonObject().get("data").getAsJsonArray();
//                if (array.size() != 0) {
//                    JsonObject object = array.get(0).getAsJsonObject();
//                    getSharedPreferences("mobileStore", MODE_PRIVATE).edit()
//                            .putInt("uid", object.get("id").getAsInt()).apply();
//                    startActivity(new Intent(LoginActivity2.this, MainActivity.class));
//                    finish();
//                } else
//                    Toast.makeText(LoginActivity2.this, "Invalid Credentials", Toast.LENGTH_SHORT).show();
//            }
                if (response.isSuccessful() && response.body() != null && response.body().has("data")) {
                    JsonArray array = response.body().getAsJsonObject().get("data").getAsJsonArray();
                    if (array.size() != 0) {
                        JsonObject object = array.get(0).getAsJsonObject();
                        Log.e("userobject",object.toString());
                        if (object.has("id")) {
                            int uid = object.get("id").getAsInt();
                            getSharedPreferences("mobileStore", MODE_PRIVATE).edit()
                                    .putInt("uid", uid)
                                    .apply();
                            startActivity(new Intent(LoginActivity2.this, MainActivity.class));
                            finish();
                        } else {
                            // Handle missing 'id' in the JSON data
                            Log.e("LoginActivity2", "Missing 'id' in JSON data");
                            Toast.makeText(LoginActivity2.this, "Invalid response format", Toast.LENGTH_SHORT).show();
                        }
                    } else {
                        // Handle empty data array
                        Toast.makeText(LoginActivity2.this, "Invalid Credentials", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    // Handle unsuccessful response
                   startActivity(new Intent(LoginActivity2.this, MainActivity.class));
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(LoginActivity2.this, "Something Went Wrong", Toast.LENGTH_SHORT).show();
            }
        });
    }
}