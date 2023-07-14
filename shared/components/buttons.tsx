interface Props {
  text: string;
  type: 'solid' | 'outlined';
  onClickHandler: () => void;
}
export default function Button({ text, type, onClickHandler = () => {} }: Props): JSX.Element {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className={`font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 
                    hover:shadow-light-xl hover:scale-90 ease-in-out 
                    ${
                      type === "solid"
                        ? " text-white border-pink hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none"
                        : " border-pink text-blue hover:outline-none bg-pink focus:outline-none"
                    }
                   `}
      >
        {text}
      </button>
    </>
  );
}
