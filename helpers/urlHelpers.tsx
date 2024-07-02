export function insertUrlParam(param: string) {
  const { protocol, host, pathname, search } = window.location;
  if (window.history.pushState) {
    let searchParams = new URLSearchParams(search);
    const params = (searchParams.get("tags") || "").split(",");
    params.push(param);

    searchParams.set("tags", params.join(","));
    let newurl = `${protocol}//${host}${pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

export function removeUrlParam(param: string) {
  const { protocol, host, pathname, search } = window.location;
  if (window.history.pushState) {
    let searchParams = new URLSearchParams(search);
    let params = (searchParams.get("tags") || "")
      .split(",")
      .filter((item) => item !== param);
    searchParams.set("tags", params.join(","));
    let newurl = `${protocol}//${host}${pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

export function getSelectedTags() {
  const { search } = window.location;
  if (!window.history.pushState) return [];

  let searchParams = new URLSearchParams(search);
  return (searchParams.get("tags") || "").split(",").filter(tag => tag.length);
}
