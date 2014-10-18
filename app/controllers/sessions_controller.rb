class SessionsController < Devise::SessionsController

  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_flashing_format?
    #sign_in(resource_name, resource)
    yield resource if block_given?
    respond_to do |format|
      format.json { render json: { result: :ok } }
      format.html { respond_with resource, location: after_sign_in_path_for(resource) }
    end
  end

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message :notice, :signed_out if signed_out && is_flashing_format?
    yield if block_given?
    respond_to do |format|
      format.json { render json: { result: :ok } }
      format.html { respond_to_on_destroy }
    end
  end

protected
  def sign_in_params
    devise_parameter_sanitizer.sanitize(:sign_in)
  end
end