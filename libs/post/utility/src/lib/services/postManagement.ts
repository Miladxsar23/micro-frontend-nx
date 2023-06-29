import { ObjectId } from 'mongodb';
import { dataSource } from '../data-source';
import { Post } from '../entity';

export class PostManagementService {
  private postRepository = dataSource.getMongoRepository(Post);
  async getPost(postId: string): Promise<Post | undefined> {
    if (!ObjectId.isValid(postId)) return undefined;
    return this.postRepository.findOneBy({ _id: new ObjectId(postId) });
  }
  async updatePost(
    postId: string,
    updates: Partial<Post>
  ): Promise<Post | undefined> {
    const post = await this.getPost(postId);
    if (!post) {
      return undefined;
    }
    Object.assign(post, updates);
    return this.postRepository.save(post);
  }

  async deletePost(postId: string): Promise<boolean> {
    if (!ObjectId.isValid(postId)) return false;
    const deleteResult = await this.postRepository.deleteOne({
      _id: new ObjectId(postId),
    });
    return deleteResult.deletedCount > 0;
  }
  async createPost(newPost: Post): Promise<Post> {
    return this.postRepository.save(newPost);
  }
  async togglePostStatus(postId: string): Promise<Post | undefined> {
    if (!ObjectId.isValid(postId)) return undefined;
    const post = await this.postRepository.findOneBy({
      _id: new ObjectId(postId),
    });

    if (!post) {
      return undefined;
    }

    post.active = !post.active;
    return this.postRepository.save(post);
  }
}
