Rails.application.routes.draw do
  root 'ideas#index'

  resources :ideas, only: [:index]

  namespace :api do
    namespace :v1, defaults: {format: :json}  do
      post "/ideas", to: "ideas#create"
    end
  end
end
