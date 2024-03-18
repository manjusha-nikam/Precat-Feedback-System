package com.sunbeaminfo.feedbacksystem.api;
import com.sunbeaminfo.feedbacksystem.entity.question;
import java.util.List;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ApiService {
    @GET("/questions/lab")
    Call<List<question>> getLabQuestions();

    @GET("/questions/theory")
    Call<List<question>> getTheoryQuestions();

    @POST("/ratings/lab")
    Call<List<question>> submitLabRating(int questionId, float rating);

    @POST("/rating/theory")
    Call<List<question>> submitTheoryRating(int questionId, float rating);
}
