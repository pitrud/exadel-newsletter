export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  tags: Tag[];
}

export interface PostItem {
  countLikes: null; //??
  creationTimeAgo: string;
  defaultImage: string;
  id: number;
  previewImageUrl: string;
  recommendationStatus: null; //??
  tags: Tag[];
  title: string;
  url: string;
  visibilityStatus: null; //??
}
export interface PostState {
  bookmarked: boolean;
  liked: boolean;
}

export interface Post {
  post: PostItem;
  postState: PostState;
}

export interface PostResponse {
  content: Post[];
  pageCount: number;
  totalItemsCount: number;
}
