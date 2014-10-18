require "rails_helper"

describe "API: user" do

  fixtures :users
  fixtures :cities

  describe "GET /user" do
    it "get user info" do
      auth
      _get "/user"
      result_ok
      expect($data['user']['email']).to eq 'alexey2141@mail.ru'
      expect($data['user']['city']['name']).to eq 'Владивосток'
    end
  end

  describe "POST /user" do
    it "change use info" do
      auth
      _post "/user", { user: { name: 'Алексей', surname: 'Крылов', city_id: 1 } }
      result_ok
      _get "/user"
      expect($data['user']['name']).to eq 'Алексей'
      expect($data['user']['surname']).to eq 'Крылов'
    end
  end
end