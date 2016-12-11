class Api::V1::ProductsController < Api::V1::ApplicationController
  # Get /products
  def index
    @products = Product.all
  end

  #Get /products/:id
  def show
    @product = Product.where(id: :id)
  end

  #Post /products
  def create
    name = params[:name]
    description = params[:description]
    price = params[:price]
    picture = params[:picture]
    @product = Product.create(name: name, description: description,price: price,picture: picture)
  end

  # Delete
  def delete
  end
end
