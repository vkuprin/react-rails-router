Rails.application.routes.draw do
  root 'pages#default', constraints: {
    :non_api_nor_static => /[\w\d\-\_\/]+/
  }
  get 'test', action: :default, controller: :pages
end
