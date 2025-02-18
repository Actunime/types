import { ITargetPath } from "./_global";

export const ImageLabelObj = {
  COVER: "Couverture",
  BANNER: "Bannière",
  AVATAR: "Avatar",
  LOGO: "Logo",
};

export type IImageLabel = keyof typeof ImageLabelObj;
export const ImageLabelArray = Object.keys(ImageLabelObj) as IImageLabel[] &
[string, ...string[]];
export const ImageLabelSelection = ImageLabelArray.map((key) => ({
  label: ImageLabelObj[key],
  value: key,
}));

export async function CreateImageCDN({
  IMAGE_LOCAL_HOST,
  IMAGE_PORT,
  ...value
}: {
  id: string;
  path: ITargetPath;
  value: string;
  valueIsUrl: boolean;
  IMAGE_LOCAL_HOST?: string;
  IMAGE_PORT?: string;
}) {
  const req = await fetch(
    "http://" +
    (process.env.IMAGE_LOCAL_HOST || IMAGE_LOCAL_HOST || "localhost") +
    ":" +
    (process.env.IMAGE_PORT || IMAGE_PORT || "3006") +
    "/v1/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    },
  );

  if (req.status !== 200)
    throw new Error("Impossible de créer l'image");
}

export async function DeleteImageCDN(value: { id: string; path: ITargetPath }) {
  const req = await fetch(
    "http://" +
    process.env.IMAGE_LOCAL_HOST +
    ":" +
    process.env.IMAGE_PORT +
    "/v1/delete",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    },
  );

  if (req.status !== 200) throw new Error("Impossible de supprimer l'image");
}
