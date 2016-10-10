Rails.application.routes.draw do
  root 'ideas#index'

  resources :ideas, only: [:index]

  namespace :api do
    namespace :v1, defaults: {format: :json}  do
      post   "/ideas",       to: "ideas#create"
      delete "/ideas/:id",   to: "ideas#delete"
      patch  "/ideas/quality-up/:id",   to: "ideas#quality_up"
      patch  "/ideas/quality-down/:id", to: "ideas#quality_down"
      patch  "/ideas/edit-title/:id",   to: "ideas#update_title"
      patch  "/ideas/edit-body/:id",   to: "ideas#update_body"
    end
  end
end
