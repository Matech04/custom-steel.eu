import { sanityClient } from "sanity:client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const builder = createImageUrlBuilder(sanityClient);

/**
 * Funkcja pomocnicza do generowania URL obrazków z Sanity
 * Pozwala na łańcuchowanie metod jak .width(100), .blur(10) itp.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}