import { Post, dataSource } from '@org/post/utility';
import { Request, Response, Router } from 'express';
import { ObjectId } from 'mongodb';
const postRepository = dataSource.getMongoRepository(Post);
const router = Router();
// Get all posts or getting filtered posts
router.get('/posts', async (req: Request, res: Response) => {
  let posts: Post[] = [];
  try {
    const query = req.query.query;
    if (query) {
      // Find all records in the "post" table that match the query in title
      posts = await postRepository.find({where:{ title: { $regex: new RegExp(query as string, 'i') } }});
    } else {
      posts = await postRepository.find();
    }
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single post
router.get('/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (ObjectId.isValid(id)) {
      const post = await postRepository.findOneBy({ _id: new ObjectId(id) });
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
