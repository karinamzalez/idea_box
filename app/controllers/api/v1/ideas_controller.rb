class Api::V1::IdeasController < ApplicationController

  def create
    @idea = Idea.new(idea_params)
    if @idea.save
      render json: @idea
    else
      flash.now[:warning] = "Please fill in the title and body."
    end
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
