import { createClient } from "@sanity/client";

import groq from "groq";

import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getNavs() {
  return await client.fetch(
    groq`*[_type == "nav"]{
      ...,
      pageBuilder[]{
        _type == "cta" => {
          _type,
          text,
          "link": @.reference->slug.current
        },

      },

    }`
  );
}

export async function getPage (slug: string) {
  return await client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      ...,
      language,
      "translation": *[_type == "translation.metadata" && references(^._id)].translations[_key != ^.language].value->{
        title,
        "slug": slug.current,
        language
      },
      pageBuilder[]{
        // "heading" is an "object" from which we can "pick" fields
        _type == "heading" => {
          _type,
          heading,
          tagline,
          excerpt,
          image,
        },

        _type == "cta" => {
          _type,
          text,
          "href": @.reference->slug.current
        },

        _type == "xcta" => {
          _type,
          text,
          href
        },
    
        _type == "body" => {
          _type,
          title,
          textBlock[] {
            ...,
            markDefs[]{
              ...,
              _type == "internalLink" => {
                "slug": @.href->slug.current
              }
            }
          },
          twocols,
        },
    
        _type == "details" => {
          _type,
          summary,
          details[] {
            ...,
            markDefs[]{
              ...,
              _type == "internalLink" => {
                "slug": @.reference->slug
              }
            }
          }
        },

        _type == "card" => {
          ...,
          pageBuilder[]{
            // "heading" is an "object" from which we can "pick" fields
            _type == "heading" => {
              _type,
              heading,
              tagline,
              excerpt,
              image,
            },
    
            _type == "cta" => {
              _type,
              text,
              "href": @.reference->slug.current
            },
    
            _type == "xcta" => {
              _type,
              text,
              href
            },
        
            _type == "body" => {
              _type,
              title,
              textBlock[] {
                ...,
                markDefs[]{
                  ...,
                  _type == "internalLink" => {
                    "slug": @.href->slug.current
                  }
                }
              },
              twocols,
            },
        
            _type == "details" => {
              _type,
              summary,
              details[] {
                ...,
                markDefs[]{
                  ...,
                  _type == "internalLink" => {
                    "slug": @.reference->slug
                  }
                }
              }
            },
    
          },
        },

      },
    }`,
    {
      slug,
    }
  );
}
