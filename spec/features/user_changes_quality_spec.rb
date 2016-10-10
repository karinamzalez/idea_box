require 'rails_helper'

RSpec.feature "user visits root//changes quality", js: true do
  fixtures :ideas
  scenario "user edits quality starting at swill" do
    visit "/"

    within(".ideas") do
      within('tr:nth-child(1)') do
        expect(page).to have_content("ephemeral")
        click_on('')
      end
    end
  end
end
