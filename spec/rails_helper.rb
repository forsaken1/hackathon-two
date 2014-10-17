# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require 'spec_helper'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

# Checks for pending migrations before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!
end

$data = nil

def method_wrapper(url, data, &method)
  method.call url, data, { "Accept" => "application/json" }
  response_ok
  $data = get_data
end

def _get(url = '/', data = {})
  method_wrapper(url, data) { |i, j, k| get i, j, k }
end

def _post(url = '/', data = {})
  method_wrapper(url, data) { |i, j, k| post i, j, k }
end

def response_ok
  expect(response.status).to eq 200
end

def get_data
  JSON.parse(response.body)
end

def result_ok
  expect($data['result']).to eq 'ok'
end

def result_403
  expect($data['result']).to eq '403'
end

def result_404
  expect($data['result']).to eq '404'
end

def result(result = 'error')
  expect($data['result']).to eq result
end

def auth(user = { email: 'alexey2141@mail.ru', password: '12345' }, checker = true)
  _post "/user/sign_in", { 'user' => user }
  
  result_ok if checker
end