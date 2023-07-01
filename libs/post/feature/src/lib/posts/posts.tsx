import { FilteredPost, PostList, ShowPostDialog } from '@org/post/ui';
import { Pagination } from '@org/shared/ui';
import { PostInterface, posts } from '@org/shared/utility';
import { useCallback, useMemo, useState } from 'react';
export function Posts() {
  const [isOpenDialog, setOpenDialog] = useState(false);
  const [postDialog, setPostDialog] = useState<PostInterface | null>(null);
  const [activePage, setActivePage] = useState(1);
  const memoPosts = useMemo(() => {
    return posts;
  }, []);
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
  const handleSetActivePage = useCallback((pageNumber: number) => {
    setActivePage(pageNumber);
  }, []);
  return (
    <section className="w-full flex flex-col gap-4">
      <FilteredPost />
      <PostList
        filteredPosts={memoPosts}
        onSetDialogPost={handleSetPost}
        onOpenDialog={handleOpenDialog}

      />
      <Pagination
        activePage={activePage}
        dataLength={60}
        pageLength={10}
        onPageChange={handleSetActivePage}
      />
      {!postDialog || (
        <ShowPostDialog
          isDialogOpen={isOpenDialog}
          onOpenDialog={handleOpenDialog}
          onCloseDialog={handleCloseDialog}
          onToggleDialog={handleToggleDialog}
          post={postDialog}
        />
      )}
    </section>
  );
}

export default Posts;
