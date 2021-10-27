class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :ship
      t.string :skill
      t.string :position
      t.integer :gold
      t.integer :user_id

      t.timestamps
    end
  end
end
