import { Button, Typography } from '@material-tailwind/react';
import { PostInterface } from '@org/shared/utility';
import * as React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import defaultPostImage from '../assets/postImage.png';
/* eslint-disable-next-line */
export interface PostProps {
  post: PostInterface;
  onSetPost: () => void;
}

export const Post = React.memo(function ({
  post: { content, title, writer, imageUrl, date, categoryName },
  onSetPost,
}: PostProps) {
  return (
    <section className="w-full flex flex-col gap-6">
      {/* imagePost */}
      <div className="w-full h-64">
        <figure className="relative h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={imageUrl || defaultPostImage}
            alt={title}
          />
          <figcaption className="absolute bottom-0 flex w-full  justify-between bg-white/50 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="white" className="text-sm">
                {writer}
              </Typography>
              <Typography className="mt-2 font-normal text-sm text-gray-100">
                {date}
              </Typography>
            </div>
            <Typography variant="h5" color="white" className="text-sm">
              {categoryName}
            </Typography>
          </figcaption>
        </figure>
      </div>
      {/* title */}
      <div className="w-full">
        <Typography variant="h4">{title}</Typography>
      </div>
      {/* content */}
      <div className="w-full">
        <Typography variant="paragraph" className="text-sm text-gray-500">
          {content}
        </Typography>
      </div>
      {/* Action -> view post */}
      <div className="">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={onSetPost}
        >
          Read More <BsArrowUpRight strokeWidth={1} className="h-3 w-3" />
        </Button>
      </div>
    </section>
  );
});

export default Post;
