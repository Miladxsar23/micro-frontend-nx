import { PostInterface } from '@org/shared/utility';
import { useCallback, useMemo } from 'react';
import Post from '../post/post';
/* eslint-disable-next-line */
export interface PostListProps {
  filteredPosts: PostInterface[];
  onSetDialogPost: (post: PostInterface) => void;
  onOpenDialog:() => void
}

export function PostList({ filteredPosts, onSetDialogPost, onOpenDialog }: PostListProps) {
  const handleSetDialogPost = useCallback(
    (post: PostInterface) => {
      onSetDialogPost(post)
      onOpenDialog()
    },
    [onSetDialogPost]
  );
  const memoPostEl = useMemo(() => {
    return filteredPosts.map((post) => {
      return (
        <section key={post.id} className="col-span-1 md:col-span-3">
          <Post post={post} onSetPost={() =>handleSetDialogPost(post)}/>
        </section>
      );
    });
  }, [filteredPosts]);
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {memoPostEl}
    </section>
  );
}

export default PostList;
