class Api::V1::QuestionsController < ApplicationController
  def index
    questions = Question.all

    render json: {
      question_1: questions[0],
      question_1_answers: questions[0].answers,
      question_2: questions[1],
      question_2_answers: questions[1].answers,
      question_3: questions[2],
      question_3_answers: questions[2].answers
    }, status: :ok
  end
end
