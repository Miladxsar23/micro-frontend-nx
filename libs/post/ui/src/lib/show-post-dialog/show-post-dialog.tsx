import {
  Dialog,
  Typography
} from '@material-tailwind/react';
import { PostInterface } from '@org/shared/utility';
import defaultPostImage from '../assets/postImage.png';
/* eslint-disable-next-line */
export interface ShowPostDialogProps {
  post: PostInterface | null;
  isDialogOpen: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
  onToggleDialog: () => void;
}

export function ShowPostDialog({
  isDialogOpen,
  post,
  onOpenDialog,
  onCloseDialog,
  onToggleDialog,
}: ShowPostDialogProps) {
  return (
    <Dialog open={isDialogOpen} handler={onToggleDialog} className='flex flex-col md:flex-row min-h-[500px]' size='xl'>
      {/* post image */}
      <div className="w-full md:w-2/3 h-auto">
        <figure className="relative h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={post?.imageUrl || defaultPostImage}
            alt={post?.title}
          />
          <figcaption className="absolute bottom-0 flex w-full  justify-between bg-white/50 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="white" className="text-sm">
                {post?.writer}
              </Typography>
              <Typography className="mt-2 font-normal text-sm text-gray-100">
                {post?.date}
              </Typography>
            </div>
            <Typography variant="h5" color="white" className="text-sm">
              {post?.categoryName}
            </Typography>
          </figcaption>
        </figure>
      </div>
      <section className='w-full md:w-1/3 p-8'>
        <Typography variant="h4" className="text-bold">{post?.title}</Typography>
        <Typography variant="paragraph" className='text-sm text-gray-500'>{post?.content}</Typography>
      </section>
    </Dialog>
  );
}

export default ShowPostDialog;
