import { MyButton } from "../common/MyButton";

const Cta = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      <MyButton
        color="monoButtonGreen"
        className="text-sm break-words md:text-[14px] w-full p-8"
        aria-label="Tagline"
      >
       Los sistemas son los <br/>procesos que sigues para <br className="md:hidden"/> alcanzar tus resultados
      </MyButton>
    </div>
  );
};

export default Cta;
