require 'rails_helper'

RSpec.feature "user visits root and deletes idea", js: true do
  fixtures :ideas
  scenario "user clicks '●' and removes idea" do
    idea = Idea.create(title: "apple", body: "pear")
    visit "/"

    within("tr:nth-child(2)") do
      click_on('● ')
    end

    expect(page).to_not have_content("apple")
    expect(page).to_not have_content("pear")
  end
end
