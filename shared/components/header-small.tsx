interface Props {
  text: string;
}
export default function HeaderSmall({ text }: Props): JSX.Element {
  return (
    <>
      <div className="flex items-center">
        <h1 className="font-light gradient-text text-lg md:text-7xl">{text}</h1>
      </div>
    </>
  );
}
