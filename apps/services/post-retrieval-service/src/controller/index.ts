import { PostManagementService } from '@org/post/utility';
import { Request, Response, Router } from 'express';
const postManagement = new PostManagementService();
const router = Router();
// Get all posts or getting filtered posts
router.get('/posts', async (req: Request, res: Response) => {
  try {
    const query = req.query.query;
    const posts = await postManagement.getPosts(query as string);
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single post
router.get('/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await postManagement.getPost(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
