import { FilteredPost, PostList, ShowPostDialog } from '@org/post/ui';
import { Pagination } from '@org/shared/ui';
import { PostInterface, posts } from '@org/shared/utility';
import { useCallback, useState } from 'react';
export function Posts() {
  const [isOpenDialog, setOpenDialog] = useState(false);
  const [postDialog, setPostDialog] = useState<PostInterface | null>(null);

  const handleOpenDialog = useCallback(() => setOpenDialog(true), []);
  const handleCloseDialog = useCallback(() => setOpenDialog(false), []);
  const handleSetPost = useCallback(
    (post: PostInterface) => setPostDialog(post),
    []
  );
  const handleToggleDialog = useCallback(
    () => setOpenDialog(!isOpenDialog),
    [isOpenDialog]
  );
  return (
    <section className="w-full flex flex-col gap-4">
      <FilteredPost />
      <PostList filteredPosts={posts} onSetDialogPost={handleSetPost} onOpenDialog={handleOpenDialog}/>
      <Pagination />
      {!postDialog || <ShowPostDialog
        isDialogOpen={isOpenDialog}
        onOpenDialog={handleOpenDialog}
        onCloseDialog={handleCloseDialog}
        onToggleDialog={handleToggleDialog}
        post={postDialog}
      />}
    </section>
  );
}

export default Posts;
