require "rails_helper"

describe "API: tasks" do

  fixtures :tasks
  fixtures :users

  describe "GET /tasks" do
    it "returns all the tasks" do
      _get "/tasks"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван"])
    end
  end

  describe "GET /tasks/:id" do
    it "returns one task" do
      _get "/tasks/1"
      result_ok
      expect($data["task"]["about"]).to eq "Достать котенка с дерева"
    end

    it "fail get task" do
      _get "/tasks/3234"
      result_404
    end
  end

  describe "POST /tasks" do
    it "create new task" do
      auth
      _post "/tasks", { task: { about: 'Купить продуктов', date: Time.now + 1.day, address: 'Алеутская, 15' } }
      result_ok
      _get "/tasks"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван", "Купить продуктов"])
    end

    it "create new task without description" do
      auth
      _post "/tasks", { task: { date: Time.now + 1.day, address: 'Алеутская, 15' } }
      result "validation_error"
    end

    it "create new task with invalid date" do
      auth
      _post "/tasks", { task: { date: Time.now - 1.hour, about: 'Купить продуктов', date: Time.now + 1.day } }
    end
  end

  describe "POST /tasks/:id/destroy" do
    it "destroy task" do
      auth
      _post "/tasks/1/destroy"
      result_ok
      _get "/tasks"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Передвинуть диван"])
    end

    it "try destroy strange task" do
      auth email: 'alexey2143@mail.ru', password: '12345678'
      _post "/tasks/1/destroy"
      result_404
    end

    it "try destroy completed task" do
      auth
      _post "/tasks/3/destroy"
      result_404
    end
  end

  describe "GET /tasks/:id/apply" do
    it "apply tasks" do
      auth email: 'alexey2143@mail.ru', password: '12345678'
      _get "/tasks/1/apply"
      result_ok
      _get "/user/responds"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева"])

      _get "/tasks/2/apply"
      result_ok
      _get "/user/responds"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван"])

      _get "/tasks/2/apply"
      result "apply_already_exists"
      _get "/user/responds"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван"])

      _get "/tasks/1/forget"
      result_ok
      _get "/user/responds"
      result_ok
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Передвинуть диван"])      
    end

    it "apply my task" do
      auth
      _get "/tasks/1/apply"
      result_404
    end
  end
end