class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :ship
      t.string :skill_level
      t.string :description
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
