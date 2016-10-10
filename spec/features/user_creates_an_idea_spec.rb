require 'rails_helper'

RSpec.feature "user visits root and adds idea", js: true do
  scenario "user fills out create idea form successfully" do
    visit "/"

    within(".new-idea") do
      fill_in(:title, with: "Esperanza")
      fill_in(:body, with: "Spalding")
      click_on "Save"
    end

    within(".ideas") do
      expect(page).to have_content("Esperanza")
      expect(page).to have_content("Spalding")
      expect(page).to have_content("swill")
    end
  end
end
