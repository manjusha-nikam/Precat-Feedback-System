package com.sunbeaminfo.feedbacksystem.api;

import com.google.gson.JsonObject;
import com.sunbeaminfo.feedbacksystem.entity.student;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface API {

    public static final String BASE_URL="http://172.18.4.7:4000";
    @POST("/student/signin")
    public Call<JsonObject> loginUser(@Body student s);


}
