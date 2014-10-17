require "rails_helper"

describe "API: tasks" do

  fixtures :tasks
  fixtures :users

  describe "GET /tasks" do
    it "returns all the tasks" do
      _get "/tasks"
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван"])
    end
  end

  describe "GET /tasks/:id" do
    it "returns one task" do
      _get "/tasks/1"
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
      _post "/tasks", { task: { about: 'Купить продуктов', date: '2014-10-24 12:00:00', address: 'Алеутская, 15' } }
      _get "/tasks"
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван", "Купить продуктов"])
    end
  end

  describe "POST /tasks/:id/destroy" do
    it "destroy task" do
      auth
      _post "/tasks/1/destroy"
      _get "/tasks"
      tasks_titles = $data['tasks'].map { |m| m["about"] }
      expect(tasks_titles).to match_array(["Передвинуть диван"])
    end
  end

  describe "GET /tasks/:id/apply" do
  end
end