import { postSchema } from './post';
import { reviewSchema } from './review';
import { videoSchema } from './video';
import { affiliateProductSchema } from './affiliateProduct';
import { customTableSchema } from './customTable';
import { calloutBoxSchema } from './calloutBox';

export const schemaTypes = [
  postSchema,
  reviewSchema,
  videoSchema,
  affiliateProductSchema,
  customTableSchema,
  calloutBoxSchema,
];
