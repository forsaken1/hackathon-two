class ApplicationController < ActionController::Base

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_exception

  def index
  end

private
  def not_found_exception
    respond_to do |format|
      format.json { respond_404 }
      format.html {  }
    end
  end

protected
  def respond o
    render json: o
  end

  def respond_ok o
    respond( { result: :ok }.merge o )
  end

  def respond_404
    respond result: '404'
  end

  def rendering o
    respond_to do |format|
      format.json { respond_ok o }
      format.html { render }
    end
  end
end
