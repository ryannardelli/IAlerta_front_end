import { Header } from "../../components/Header";

type MainTemplateProps = {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <>
      <Header />

      {children}
    </>
  );
};
