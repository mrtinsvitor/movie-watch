type Props = {
  title: string;
  releaseDate: string;
  image?: string;
};

export default function MovieCard({ title, releaseDate }: Props) {
  return (
    <div>
      <div className="w-40 h-52 bg-slate-500"></div>
      <h5 className="text-neutral-200 text-base">
        {title}{' '}
        <span className="text-neutral-400 text-sm">
          ({new Date(releaseDate).getFullYear()})
        </span>
      </h5>
    </div>
  );
}
