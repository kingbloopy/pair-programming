# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  artwork_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :artwork,
        foreign_key: :artwork_id,
        class_name: :Artwork 

end
