require 'rails_helper'

RSpec.describe "user visits root", :type => :feature do
  fixtures :ideas
  scenario "user views list of all individual ideas in desc order" do
    idea1 = ideas(:one)
    idea2 = ideas(:two)
    idea3 = ideas(:three)

    visit "/"

    within(".ideas") do
      within "#idea_1" do
        expect(page).to have_content(idea1.title)
        expect(page).to have_content(idea1.body)
      end
      within "#idea_2" do
        expect(page).to have_content(idea2.title)
        expect(page).to have_content(idea2.body)
      end
      within "#idea_3" do
        expect(page).to have_content(idea3.title)
        expect(page).to have_content(idea3.body)
      end
    end
  end
end