module ApplicationHelper
  def limit_body(text)
    limited_body = truncate(text, length: 100)
  end
end
