require 'rails_helper'

RSpec.describe "user visits root", :type => :feature do
  fixtures :ideas
  scenario "user views list of all individual ideas in desc order" do
    idea1 = ideas(:one)
    idea2 = ideas(:two)
    idea3 = ideas(:three)

    visit "/"

    within(".ideas") do
        expect(page.find('tr:nth-child(2)')).to have_content(idea2.title)
        expect(page.find('tr:nth-child(2)')).to have_content(idea2.body)
        expect(page.find('tr:nth-child(3)')).to have_content(idea3.title)
        expect(page.find('tr:nth-child(3)')).to have_content(idea3.body)
    end
  end
end
