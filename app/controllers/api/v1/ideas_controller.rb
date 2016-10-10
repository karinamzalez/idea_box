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

  def quality_down
    @idea = Idea.find(params[:id])
    @idea.decrease_quality
    render json: @idea
  end

  def update_title
    @idea = Idea.find(params[:id])
    @idea.update_attribute("title", params[:title])
    render json: @idea
  end

  def update_body
    @idea = Idea.find(params[:id])
    @idea.update_attribute("body", params[:body])
    render json: @idea
  end

private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
