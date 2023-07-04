export default function paginate(
  itemsToPaginate: Array<any>,
  page: number,
  itemsPerPage: number
) {
  let firstPersonIndex = page * itemsPerPage - itemsPerPage;
  let lastPersonIndex = page * itemsPerPage;
  return itemsToPaginate.slice(firstPersonIndex, lastPersonIndex);
}
