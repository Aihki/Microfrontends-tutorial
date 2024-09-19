// src/declarations.d.ts in the upload micro frontend
declare module 'mediastore/ApiHooks' {
  export const useFile: () => {
    postFile: (file: File, token: string) => Promise<UploadResponse>;
  };

  export const useMedia: (
    refreshMedia?: boolean,
    refreshSinglemedia?: boolean
  ) => {
    getMedia: () => Promise<MediaItem[] | undefined>;
    postMedia: (
      file: UploadResponse,
      inputs: Pick<MediaItem, 'title' | 'description' | 'type' | 'tags' | 'screenshots'>,
      token: string
    ) => Promise<MediaResponse>;
    // Add other functions if needed
  };
}
