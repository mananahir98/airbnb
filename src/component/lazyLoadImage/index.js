import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyLoadImageProp = ({ imageSrc, className }) => {
  return (
    <div>
      <LazyLoadImage
        alt="shoorah_image"
        className={`${
          className ? className : "h-10 w-10 border-2 rounded-full"
        } object-cover`}
        src={imageSrc}
      />
    </div>
  );
};

export default LazyLoadImageProp;
