Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'api#index'
  # API
  namespace :api do
    get '/', to: 'application#index'
    namespace :v1 do
      resources :products, only: [:index, :show, :create, :destroy]
    end
  end
end
