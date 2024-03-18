package com.sunbeaminfo.feedbacksystem.entity;

import com.google.gson.annotations.SerializedName;

public class question {
//    @SerializedName("id")
//    private int id;
//
//    @SerializedName("question")
//    private String question;
//
//    //@SerializedName("rating")
//  //  private float rating;
//
//    public int getId() {
//        return id;
//    }
//
//    public String getQuestion() {
//        return question;
//    }
//
////    public float getRating() {
////        return rating;
////    }
@SerializedName("id")
private int id;

    @SerializedName("question")
    private String question;

    //@SerializedName("rating")
    //  private float rating;

    public int getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }
}
