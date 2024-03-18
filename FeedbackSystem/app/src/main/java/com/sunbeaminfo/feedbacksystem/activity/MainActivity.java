package com.sunbeaminfo.feedbacksystem.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.RatingBar;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.sunbeaminfo.feedbacksystem.R;
import com.sunbeaminfo.feedbacksystem.api.API;
import com.sunbeaminfo.feedbacksystem.api.ApiService;
import com.sunbeaminfo.feedbacksystem.entity.filled_feedback;
import com.sunbeaminfo.feedbacksystem.entity.question;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    private Spinner spinnerOptions;
    private ApiService apiService;
    private List<question> questions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        spinnerOptions = findViewById(R.id.spinner_options);


        // Initialize Retrofit
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.199.144:8080") // Replace with your Node.js API URL
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        apiService = retrofit.create(ApiService.class);

        // Set up the spinner with options "Lab" and "Theory"
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, new String[]{"lab", "theory"});
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerOptions.setAdapter(adapter);

        // Set up on item selected listener
        spinnerOptions.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int position, long id) {
                String selectedOption = adapterView.getItemAtPosition(position).toString();
                if (selectedOption.equals("lab")) {
                    fetchLabQuestions();
                } else if (selectedOption.equals("theory")) {
                    fetchTheoryQuestions();
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {
                // Do nothing
            }
        });

    }

    private void fetchLabQuestions() {
        Call<List<question>> call = apiService.getLabQuestions();
        call.enqueue(new Callback<List<question>>() {
            @Override
            public void onResponse(Call<List<question>> call, Response<List<question>> response) {

                if (response.isSuccessful() && response.body() != null && !response.body().isEmpty()) {
                    questions = response.body();
                    displayQuestion(questions.get(0));
                } else {
                    Toast.makeText(MainActivity.this, "No lab questions available", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<question>> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Error: " + t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }


    private void fetchTheoryQuestions() {
        Call<List<question>> call = apiService.getTheoryQuestions();
        call.enqueue(new Callback<List<question>>() {
            @Override
            public void onResponse(Call<List<question>> call, Response<List<question>> response) {
                if (response.isSuccessful() && response.body() != null && !response.body().isEmpty()) {
                    questions = response.body();
                    displayQuestion(questions.get(0));
                } else {
                    Toast.makeText(MainActivity.this, "No theory questions available", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<question>> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Error: " + t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void displayQuestion(question question) {
        TextView questionTextView = findViewById(R.id.question_text_view);
        questionTextView.setText(question.getQuestion());

        RatingBar ratingBar = findViewById(R.id.rating_bar);
        ratingBar.setRating(filled_feedback.getRating());

        Button submitButton = findViewById(R.id.submit_button);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                int rating = ratingBar.getRating();
//                submitRating(question.getId(), rating);
                int rating = (int) ratingBar.getRating();
                submitRating(question.getId(),rating);


            }
        });
    }

    private void submitRating(int questionId, int rating) {
        String selectedOption = spinnerOptions.getSelectedItem().toString();
        Call<List<question>> call;
        if (selectedOption.equals(1)) {
            call = apiService.submitLabRating(questionId, rating);
        } else {
            call = apiService.submitTheoryRating(questionId, rating);
        }
        call.enqueue(new Callback<List<question>>() {
            @Override
            public void onResponse(Call<List<question>> call, Response<List<question>> response) {
                if (response.isSuccessful()) {
                    Toast.makeText(MainActivity.this, "Rating submitted successfully", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "Failed to submit rating", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<question>> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Error: " + t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}