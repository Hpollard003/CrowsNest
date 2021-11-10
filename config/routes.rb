Rails.application.routes.draw do

  # resources allows access to all default routes unless explicitly specified not to
  resources :users, except: [:destroy]
  resources :characters

  # Everything below is a custom route that get specific actions from specific controllers
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "characters/:id/evil", to: "characters#isEvilNow"
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
