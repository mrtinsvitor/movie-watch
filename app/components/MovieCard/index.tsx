import GreatIcon from '~/assets/movie-score/great.svg?react';
import NormalIcon from '~/assets/movie-score/normal.svg?react';
import AwfulIcon from '~/assets/movie-score/awful.svg?react';

type Props = {
  title: string;
  releaseDate: string;
  imagePath: string;
  voteAverage: number;
};

export default function MovieCard({
  title,
  releaseDate,
  imagePath,
  voteAverage,
}: Props) {
  return (
    <div className="bg-zinc-900 rounded-md">
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
          width="100%"
          height={'auto'}
          alt={title}
        />
      </div>

      <div className="px-2">
        <div className="flex row justify-end pt-2">
          <div className="flex items-center gap-1">
            <ScoreIcon voteAverage={voteAverage} />{' '}
            <p className="text-2xl text-neutral-200">
              {(voteAverage * 10).toFixed(0)}
            </p>
          </div>

          <p className="text-sm text-neutral-200 ml-1">/ 100</p>
        </div>

        <h5 className="text-neutral-200 text-base">
          {title}{' '}
          <span className="text-neutral-400 text-sm">
            ({new Date(releaseDate).getFullYear()})
          </span>
        </h5>
      </div>
    </div>
  );
}

function ScoreIcon({ voteAverage }: { voteAverage: number }) {
  if (voteAverage >= 8) {
    return <GreatIcon data-testid="great-icon" className="size-5" />;
  }

  if (voteAverage >= 3.5) {
    return <NormalIcon data-testid="normal-icon" className="size-5" />;
  }

  return <AwfulIcon data-testid="awful-icon" className="size-5" />;
}
