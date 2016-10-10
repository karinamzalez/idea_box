require 'rails_helper'

RSpec.feature "user visits root and deletes idea", js: true do
  fixtures :ideas
  scenario "user clicks 'x' and removes idea" do
    idea = ideas(:two)

    visit "/"

    within("tr:nth-child(2)") do
      click_on "● "
    end

    expect(page).to_not have_content(idea.title)
    expect(page).to_not have_content(idea.body)
  end
end
