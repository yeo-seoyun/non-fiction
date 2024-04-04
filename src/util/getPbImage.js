export function getPbImageURL(item, fileName = "photo") {
  const pbUrl = "https://seoyunpf.pockethost.io";
  return `${pbUrl}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}

export function getPbImage(collectionId, id, photo) {
  const pbUrl = "https://seoyunpf.pockethost.io";
  return `${pbUrl}/api/files/${collectionId}/${id}/${photo}`;
}
