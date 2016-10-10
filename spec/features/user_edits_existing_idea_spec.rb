require 'rails_helper'

RSpec.feature "user visits root and edits idea", js: true do
  fixtures :ideas
  scenario "user clicks on title//edits title" do
    idea = Idea.create(title: "mango", body: "pineapple")
    visit "/"

    within("tr:nth-child(2)") do
      click_on('mango')
      
    end
  end
end
