class Api::ApplicationController < ActionController::API

  def index
    render json: {
      api: 'v1',
    }
  end

end
