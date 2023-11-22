import type { ObjectDefinition } from "@suroi/common/src/utils/objectDefinitions";

export function GenericGetStaticPaths(objects: ObjectDefinition[]) {
  return () =>
    objects.map((obj) => ({
      params: {
        id: obj.idString,
      },
    }));
}
