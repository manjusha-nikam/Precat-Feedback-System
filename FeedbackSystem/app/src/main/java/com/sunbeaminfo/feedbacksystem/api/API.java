package com.sunbeaminfo.feedbacksystem.api;

import com.google.gson.JsonObject;
import com.sunbeaminfo.feedbacksystem.entity.question;
import com.sunbeaminfo.feedbacksystem.entity.student;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface API {

    public static final String BASE_URL="http://192.168.3.144:8080";
    @POST("/login")
    public Call<JsonObject> loginUser(@Body student s);

//    @GET("/questions/lab")
//    Call<List<question>> getLabQuestions();
//
//    @GET("/questions/theory")
//    Call<List<question>> getTheoryQuestions();
//
//    @POST("/ratings/lab")
//    Call<List<question>> submitLabRating(int questionId, float rating);
//
//    @POST("/rating/theory")
//    Call<List<question>> submitTheoryRating(int questionId, float rating);



}
