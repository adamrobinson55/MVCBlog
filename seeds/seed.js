const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 
  for (const blogpost of blogpostData) {
    await BlogPost.create({
      ...blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const blogposts = await BlogPost.findAll()

  for(const comment of commentData){
    await Comment.create({
      ...comment,
      blogpost_id: blogposts[Math.floor(Math.random() * blogposts.length)].id,
    })
  }

  process.exit(0);
};

seedDatabase();
