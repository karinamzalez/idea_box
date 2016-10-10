require 'rails_helper'

RSpec.feature "user visits root//changes quality", js: true do
  fixtures :ideas
  scenario "user edits quality starting at swill" do
    visit "/"

    within(".ideas") do
      within('tr:nth-child(1)') do
          expect(page).to have_content("swill")
        click_on('◀︎')
          expect(page).to have_content("swill")
        click_on('▶︎')
          expect(page).to have_content("plausible")
          expect(page).to_not have_content("swill")
        click_on('▶︎')
          expect(page).to have_content("genius")
        click_on('◀︎')
          expect(page).to have_content("plausible")
      end
    end
  end
end
