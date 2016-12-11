class SetDataBase < ActiveRecord::Migration[5.0]
  def change
        create_table :users do |t|
          t.string :name, null: false
          t.string :lastname_father, null: false
          t.string :lastname_mother
          t.string :mail, null: false
          t.string :number, null: false
          t.timestamps
        end

        create_table :products do |t|
          t.string :name, null: false
          t.text :description
          t.string :price, null:false
          t.string :picture
          t.timestamps
        end
  end
end
