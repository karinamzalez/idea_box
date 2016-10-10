class Idea < ApplicationRecord
  validates :title, :presence => true
  validates :body,  :presence => true
  validates :quality, :presence => true, inclusion: { in: %w(genius plausible swill)}

  default_scope { order("created_at DESC") }

  def increase_quality
    if quality == "swill"
      new_quality = "plausible"
    elsif quality == "plausible"
      new_quality = "genius"
    else
      new_quality = quality
    end
      self.update_attribute("quality", new_quality)
  end

  def decrease_quality
    if quality == "genius"
      new_quality = "plausible"
    elsif quality == "plausible"
      new_quality = "swill"
    else
      new_quality = quality
    end
      self.update_attribute("quality", new_quality)
  end
end
