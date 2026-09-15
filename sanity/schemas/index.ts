import { postSchema } from './post';
import { reviewSchema } from './review';
import { videoSchema } from './video';
import { affiliateProductSchema } from './affiliateProduct';
import { customTableSchema } from './customTable';
import { calloutBoxSchema } from './calloutBox';
import { textBlockSchema } from './textBlock';
import { imageBlockSchema } from './imageBlock';

export const schemaTypes = [
  postSchema,
  reviewSchema,
  videoSchema,
  affiliateProductSchema,
  customTableSchema,
  calloutBoxSchema,
  textBlockSchema,
  imageBlockSchema,
];
