import { Header } from "../../components/Header";

type MainTemplateProps = {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <section className="min-h-screen flex justify-center items-center flex-col">
      <Header />

      <main className="flex-1 flex">
        {children}
      </main>
    </section>
  );
};
