// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Ensure your frontend runs on this port
//   methods: ['GET', 'POST'],
// }));
// app.use(express.json()); // for parsing application/json

// // MongoDB Connection
// mongoose.connect('mongodb+srv://Bilal:Password786@cluster0.uelhd.mongodb.net/Portf', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB:', err.message);
// });

// // Define Schema for Blogs
// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   date: { type: Date, required: true },
//   image: { type: String, required: true },
//   content: [
//     {
//       heading: { type: String, required: true },
//       paragraph: { type: String, required: true }
//     }
//   ]
// });

// // Define Model for Blogs
// const Blog = mongoose.model('Blog', blogSchema);

// // API Endpoint to get all blogs
// app.get('/api/blogs', async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     if (blogs.length === 0) {
//       return res.status(404).send("No blogs found.");
//     }
//     res.json(blogs);
//   } catch (err) {
//     console.error('Error retrieving blogs:', err);
//     res.status(500).send("Error retrieving blogs");
//   }
// });

// // API Endpoint to get a specific blog
// app.get('/api/blogs/:id', async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).send("Invalid blog ID format");
//     }

//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).send("Blog not found");
//     }
//     res.json(blog);
//   } catch (err) {
//     console.error('Error retrieving blog:', err);
//     res.status(500).send("Error retrieving blog");
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




























const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Ensure your frontend runs on this port
  methods: ['GET', 'POST'],
}));
app.use(express.json()); // for parsing application/json

// MongoDB Connection
mongoose.connect('mongodb+srv://Bilal:Password786@cluster0.uelhd.mongodb.net/Portf', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define Schema for Blogs with additionalDetails field
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true },
  content: [
    {
      heading: { type: String, required: true },
      paragraph: { type: String, required: true }
    }
  ],
  additionalDetails: { type: String, required: false }, // Optional field for additional details
});

// Define Model for Blogs
const Blog = mongoose.model('Blog', blogSchema);

// API Endpoint to get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      return res.status(404).send("No blogs found.");
    }
    res.json(blogs);
  } catch (err) {
    console.error('Error retrieving blogs:', err);
    res.status(500).send("Error retrieving blogs");
  }
});

// API Endpoint to get a specific blog
app.get('/api/blogs/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send("Invalid blog ID format");
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.json(blog);
  } catch (err) {
    console.error('Error retrieving blog:', err);
    res.status(500).send("Error retrieving blog");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});















