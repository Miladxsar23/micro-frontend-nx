import { Post } from '@org/shared/utility';
import { Request, Response, Router } from 'express';
import { dataSource } from '../db';
const postRepository = dataSource.getMongoRepository(Post);
const router = Router();

// Get all posts
router.get('/posts', async (_req: Request, res: Response) => {
  try {
    const posts = await postRepository.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single post
router.get('/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await postRepository.findOneBy({ id: parseInt(id, 10) });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
