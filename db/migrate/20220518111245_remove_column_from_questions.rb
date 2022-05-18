class RemoveColumnFromQuestions < ActiveRecord::Migration[6.1]
  def change
    remove_column :questions, :image_url, :string
  end
end
