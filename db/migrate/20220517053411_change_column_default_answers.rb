class ChangeColumnDefaultAnswers < ActiveRecord::Migration[6.1]
  def change
    change_column_default :answers, :correction, from: nil, to: :false
  end
end
