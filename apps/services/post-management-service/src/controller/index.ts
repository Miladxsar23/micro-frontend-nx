import { Post, PostManagementService } from '@org/post/utility';
import { Request, Response, Router } from 'express';
const router = Router();
const postManegement = new PostManagementService();
// Insert a new post
router.post('/posts', async (req: Request, res: Response) => {
  try {
    if (req.body.title && req.body.content) {
      const { title, content, active = true } = req.body;
      const postData = new Post();
      Object.assign(postData, { title, content, active });
      const createPost = await postManegement.createPost(postData);
      res.json(createPost);
    } else {
      return res.status(400).json({
        error:
          'Invalid post data, post data must contain at least title and content fileds',
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a post
router.put('/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updates = req.body;
    const updatedPost = await postManegement.updatePost(id, updates);
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Delete a post
router.delete('/posts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletePost = await postManegement.deletePost(id);
    if (!deletePost) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Toggle a post status
router.patch('/posts/:id/toggle', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedPost = await postManegement.togglePostStatus(id);
    if (!updatedPost)
      return res.status(404).json({ message: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
