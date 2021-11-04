# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating a User 🤔"
User.create(username: "Hpollard003", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6593355.png&f=1&nofb=1", password: "password", password_confirmation: "password")
Character.create(name: "Zoro", description: "Swordsmen", skill: "Swordsman", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mIpbjNvMQECwRBW-0uKeDAHaEK%26pid%3DApi&f=1", user_id: 1)
Character.create(name: "Nami", description: "Evil Devil Woman", skill: "Navigator", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6184697.jpg&f=1&nofb=1", user_id: 1)
Character.create(name: "Sanji", description: "The Chef Prince", skill: "Cooking and Kicking", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PuQOpQEkfyByQTF-brw92wHaEN%26pid%3DApi&f=1", user_id: 1)
Character.create(name: "Brook", description: "Soul King Baby", skill: "Being Awesome", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opfanpage.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fthe_soul_king_by_balshumet-dav1b02-1024x585-1.jpg&f=1&nofb=1", user_id: 1)
puts "Creating a User 😁"

puts "Creating a User 🤔"
User.create(username: "Felix003", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2TkiHVC3oz0gF7UmSCUrzAHaEK%26pid%3DApi&f=1", password: "password", password_confirmation: "password")
Character.create(name: "Luffy", description: "Future Pirate King", skill: "Best MC ever", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zbrushcentral.com%2Fuploads%2Fdefault%2Foriginal%2F4X%2F1%2F6%2Ff%2F16fda864e4ba8bd4f958018db016be292201d01c.jpeg&f=1&nofb=1", user_id: 2)
Character.create(name: "Nico Robin", description: "Devil Child", skill: "Archaeologist", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lvjS8yjCTVrzazCi1mZtkgHaEK%26pid%3DApi&f=1", user_id: 2)
Character.create(name: "Spike Spiegel", description: "Bounty Hunter", skill: "Not getting killed", img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V4feZLmMYbuciEBqpMJltgHaEo%26pid%3DApi&f=1", user_id: 2)
puts "Creating a User 😁"