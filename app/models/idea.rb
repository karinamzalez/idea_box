class Idea < ApplicationRecord
  validates :title, :presence => true
  validates :body,  :presence => true
  validates :quality, :presence => true, inclusion: { in: %w(genius plausible swill)}

  default_scope { order("created_at DESC") }
end
