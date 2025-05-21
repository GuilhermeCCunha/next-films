import { getVideos } from "@/utils/get-data";
import { Video } from "@/utils/types/details";

export default async function VideoLink(props: { id: number }) {
  const { id } = props;
  const videos: Video[] = await getVideos(id);

  let trailer: Video | undefined;
  let video: Video;

  trailer = videos.find(
    (v) =>
      v.name.toLowerCase().includes("official trailer") ||
      v.name.toLowerCase().includes("original theatrical trailer") ||
      (v.type === "Trailer" && v.official === true)
  );
  video = trailer ? trailer : videos[0];

  let url: string = video && `https://www.youtube.com/watch?v=${video.key}`;
  if (video?.site === "Vimeo") {
    url = `https://vimeo.com/${video.key}`;
  }

  return (
    <>
      {video ? (
        <a target="blank" rel="external" href={url}>
          View {video.type}
        </a>
      ) : null}
    </>
  );
}
