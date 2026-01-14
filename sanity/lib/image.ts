import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/asset-utils";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
