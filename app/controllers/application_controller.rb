class ApplicationController < ActionController::Base

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_exception
  rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique

  def index
  end

private
  def not_found_exception
    respond_to do |format|
      format.json { respond_404 }
      format.html { render }
    end
  end

  def record_not_unique
    respond_to do |format|
      format.json { respond result: :record_not_unique }
      format.html { render }
    end
  end

protected
  def respond o
    render json: o
  end

  def respond_ok o = {}
    respond( { result: :ok }.merge o )
  end

  def respond_404
    respond result: '404'
  end

  def respond_validation_error messages = []
    respond result: 'validation_error', messages: messages 
  end

  def rendering o
    respond_to do |format|
      format.json { respond_ok o }
      format.html { render }
    end
  end
end
