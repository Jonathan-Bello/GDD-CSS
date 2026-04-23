import { getCollection, type CollectionEntry } from "astro:content";

export type GddCollectionName =
  | "general"
  | "sistema-juego"
  | "narrativa"
  | "progresion"
  | "interfaz"
  | "contenido"
  | "monetizacion";

interface GddCollectionConfig {
  name: GddCollectionName;
  label: string;
  path: string;
}

export interface GddSidebarEntry {
  id: string;
  data: {
    title: string;
    description: string;
    order: number;
    isParent?: boolean;
    parentId?: string;
  };
}

export interface GddSidebarCollection {
  name: GddCollectionName;
  label: string;
  path: string;
  entries: GddSidebarEntry[];
}

const GDD_COLLECTIONS: GddCollectionConfig[] = [
  {
    name: "general",
    label: "General",
    path: "/gdd/",
  },
  {
    name: "sistema-juego",
    label: "Sistema de Juego",
    path: "/sistema-juego/",
  },
  {
    name: "narrativa",
    label: "Narrativa",
    path: "/narrativa/",
  },
  {
    name: "progresion",
    label: "Progresión",
    path: "/progresion/",
  },
  {
    name: "interfaz",
    label: "Interfaz",
    path: "/interfaz/",
  },
  {
    name: "contenido",
    label: "Contenido",
    path: "/contenido/",
  },
  {
    name: "monetizacion",
    label: "Monetización",
    path: "/monetizacion/",
  },
];

function sortEntries<T extends GddCollectionName>(
  entries: CollectionEntry<T>[],
): CollectionEntry<T>[] {
  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.date.getTime() - b.data.date.getTime();
  });
}

export async function getSortedCollectionEntries<T extends GddCollectionName>(
  name: T,
): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(name);
  return sortEntries(entries);
}

export function getGddCollectionMeta(name: GddCollectionName): {
  label: string;
  path: string;
} {
  const config = GDD_COLLECTIONS.find((collection) => collection.name === name);

  if (!config) {
    throw new Error(`Colección inválida: ${name}`);
  }

  return {
    label: config.label,
    path: config.path,
  };
}

export async function getGddCollections(): Promise<GddSidebarCollection[]> {
  const collections = await Promise.all(
    GDD_COLLECTIONS.map(async (collection) => {
      const entries = await getSortedCollectionEntries(collection.name);

      return {
        ...collection,
        entries: entries.map((entry) => ({
          id: entry.id,
          data: {
            title: entry.data.title,
            description: entry.data.description,
            order: entry.data.order,
            isParent: entry.data.isParent,
            parentId: entry.data.parentId,
          },
        })),
      };
    }),
  );

  return collections;
}
