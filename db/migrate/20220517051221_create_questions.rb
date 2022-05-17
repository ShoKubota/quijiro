class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :score, null: false
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
