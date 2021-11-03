# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating a User 🤔"
User.create(username: "Hpollard003", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6593355.png&f=1&nofb=1", password: "password", password_confirmation: "password")
Character.create(name: "Zoro", ship: "Thousand Sunny", description: "Swordsmen", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mIpbjNvMQECwRBW-0uKeDAHaEK%26pid%3DApi&f=1", user_id: 1)
Character.create(name: "Nami", ship: "Thousand Sunny", description: "Evil Devil Woman", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6184697.jpg&f=1&nofb=1", user_id: 1)
Character.create(name: "Sanji", ship: "Thousand Sunny", description: "The Chef Prince", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PuQOpQEkfyByQTF-brw92wHaEN%26pid%3DApi&f=1", user_id: 1)
Character.create(name: "Brook", ship: "Thousand Sunny", description: "Soul King Baby", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opfanpage.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fthe_soul_king_by_balshumet-dav1b02-1024x585-1.jpg&f=1&nofb=1", user_id: 1)
puts "Creating a User 😁"

puts "Creating a User 🤔"
User.create(username: "Felix003", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F50%2F7a%2F56%2F507a56ba8725824986a61e5417b7b1b8.jpg&f=1&nofb=1", password: "password", password_confirmation: "password")
Character.create(name: "Luffy", ship: "Thousand Sunny", description: "Future Pirate King", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zbrushcentral.com%2Fuploads%2Fdefault%2Foriginal%2F4X%2F1%2F6%2Ff%2F16fda864e4ba8bd4f958018db016be292201d01c.jpeg&f=1&nofb=1", user_id: 2)
Character.create(name: "Nico Robin", ship: "Thousand Sunny", description: "Devil Child", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F45%2F72%2F90%2F4572905a9ff081b9289e5c4c975429ec.jpg&f=1&nofb=1", user_id: 2)
Character.create(name: "Spike Spiegel", ship: "Swordfish II", description: "Bounty Hunter", skill_level: 0, img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V4feZLmMYbuciEBqpMJltgHaEo%26pid%3DApi&f=1", user_id: 2)
puts "Creating a User 😁"