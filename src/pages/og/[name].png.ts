import ogImageResponse from "@components/og/ogImageResponse";
import { Guns } from "@suroi/common/src/definitions/guns";
import { Melees } from "@suroi/common/src/definitions/melees";
import type { ObjectDefinition } from "@suroi/common/src/utils/objectDefinitions";
import type { APIRoute } from "astro";
import type { CollectionKey } from "astro:content";

interface Props {
  obj: ObjectDefinition;
  imgPath: string;
}

export const GET: APIRoute = async ({ props }) => {
  const { obj, imgPath } = props as Props;
  if (!obj)
    return new Response(null, {
      status: 404,
    });

  return await ogImageResponse(obj, imgPath);
};

export function getStaticPaths() {
  return [
    ...objectsToRoutes(
      "guns",
      "./vendor/suroi/client/public/img/game/weapons",
      Guns
    ),
    ...objectsToRoutes(
      "melees",
      "./vendor/suroi/client/public/img/game/weapons",
      Melees
    ),
  ];
}

function objectsToRoutes(
  name: CollectionKey,
  imgPath: string,
  objects: ObjectDefinition[]
) {
  return objects.map((obj) => ({
    params: {
      name: `${name}_${obj.idString}`,
    },
    props: {
      obj,
      imgPath: `${imgPath}/${obj.idString}.svg`,
    },
  }));
}
