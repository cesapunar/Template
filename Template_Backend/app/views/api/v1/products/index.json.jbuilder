json.array! @products do |product|
  json.extract! product, :name, :description, :price, :picture
end
