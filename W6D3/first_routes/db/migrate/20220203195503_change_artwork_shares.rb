class ChangeArtworkShares < ActiveRecord::Migration[5.2]
  def change
    remove_index :artwork_shares, :artwork_id
    add_index :artwork_shares, [:artwork_id, :viewer_id], unique: true
  end
end
