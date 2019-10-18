class PagesController < ApplicationController
  def default
      # @current_user = current_user
      render('pages/default/page', layout: 'application')
  end
end 