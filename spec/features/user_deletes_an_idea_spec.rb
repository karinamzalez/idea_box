require 'rails_helper'

RSpec.feature "user visits root and deletes idea", js: true do
  scenario "user clicks 'x' and removes idea" do
    idea = ideas(:one)

    visit "/"

    within "#idea_1"
      click_on "● "
    end

    expect(page).to_not have_content(idea.title)
    expect(page).to_not have_content(idea.body)
  end
end
