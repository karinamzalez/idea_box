require 'rails_helper'

RSpec.describe "user visits root", :type => :feature do
  fixtures :ideas
  before(:each) do
    @idea1 = ideas(:one)
    @idea2 = ideas(:two)
    @idea3 = ideas(:three)
  end

  scenario "user views list of all individual ideas in desc order" do
    visit "/"

    within(".ideas") do
        expect(page.find('tr:nth-child(2)')).to have_content(@idea2.title)
        expect(page.find('tr:nth-child(3)')).to have_content(@idea3.title)
    end
  end

  scenario "user does not see full bodies longer than 100 characters" do
    visit "/"

    within(".ideas") do
      expect(page).to have_content("...")
      expect(page).to_not have_content("existence")
    end
  end
end
