import imageUrlBuilder from "@sanity/image-url";

import { client } from "./sanity";

const builder = imageUrlBuilder(client);

/**
 * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
 */
export function urlFor(source) {
  return builder.image(source);
}
