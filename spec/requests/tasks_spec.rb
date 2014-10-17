require "rails_helper"

describe "API: tasks" do

  fixtures :tasks

  describe "GET /tasks" do
    it "returns all the tasks" do
      _get "/tasks"
      bands_titles = $data['tasks'].map { |m| m["about"] }
      expect(bands_titles).to match_array(["Достать котенка с дерева", "Передвинуть диван"])
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
end