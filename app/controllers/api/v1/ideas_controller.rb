class Api::V1::IdeasController < ApplicationController

  def create
    @idea = Idea.new(idea_params)
    if @idea.save
      render json: @idea
    else
      flash.now[:warning] = "Please fill in the title and body."
    end
  end

  def delete
    idea = Idea.find(params[:id])
    @idea = idea.delete
    render json: @idea
  end

  def quality_up
    @idea = Idea.find(params[:id])
    @idea.increase_quality
    render json: @idea
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
