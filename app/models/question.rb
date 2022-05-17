class Question < ApplicationRecord
  has_many :answers

  validates :title, presence: true
  validates :score, presence: true
  validates :image_url presence: true
end
